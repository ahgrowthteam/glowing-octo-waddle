import fs from 'node:fs';
import path from 'node:path';
import { spawnSync } from 'node:child_process';
import { getRepoRoot, parseCliArgs } from './lib/runner.mjs';
import { startNextServer } from './lib/server.mjs';

const UNIT_TEST_FILE = 'tests/e2e/lib.unit.test.mjs';

const TIER_FILES = {
    1: 'tests/e2e/tier1-feature-coverage.test.mjs',
    2: 'tests/e2e/tier2-boundary-corner-cases.test.mjs',
    3: 'tests/e2e/tier3-quality-gates.test.mjs',
    4: 'tests/e2e/tier4-application-scenarios.test.mjs',
};

function printHelp() {
    console.log(`ExamGhost 4-Tier E2E Runner

Usage:
  node tests/e2e/run-all.mjs [--skip-build] [--tier=1,2,3,4] [--base-url=<url>]

Options:
  --skip-build       Skip npm run lint, tsc --noEmit, and npm run build (requires .next/BUILD_ID)
  --tier=1,2,3,4     Comma-separated tier numbers to run (default: 1,2,3,4)
  --base-url=<url>   Attach to an already running server instead of spawning next start
  --help, -h         Show this help
`);
}

function runCommand(label, cmd, args, cwd) {
    const start = Date.now();
    console.log(`\n[Preflight] Running ${label}: ${cmd} ${args.join(' ')}`);
    const result = spawnSync(cmd, args, {
        cwd,
        stdio: 'inherit',
        env: process.env,
    });
    const durationMs = Date.now() - start;
    const ok = result.status === 0;
    console.log(
        `[Preflight] ${label}: ${ok ? 'PASS' : 'FAIL'} (exit ${result.status ?? 'signal'}, ${durationMs}ms)`
    );
    return { label, ok, exitCode: result.status ?? 1, durationMs };
}

function runTierTest(tier, relFile, cwd, baseUrl, extraEnv) {
    const start = Date.now();
    console.log(`\n=== Tier ${tier}: ${relFile} ===`);
    const result = spawnSync(process.execPath, ['--test', relFile], {
        cwd,
        stdio: 'inherit',
        env: {
            ...process.env,
            ...extraEnv,
            E2E_BASE_URL: baseUrl,
        },
    });
    const durationMs = Date.now() - start;
    const ok = result.status === 0;
    return { tier, relFile, ok, exitCode: result.status ?? 1, durationMs };
}

async function main() {
    let args;
    try {
        args = parseCliArgs();
    } catch (err) {
        console.error(`Error: ${err.message}`);
        process.exit(2);
    }

    if (args.help) {
        printHelp();
        process.exit(0);
    }

    const repoRoot = getRepoRoot();
    const preflightResults = [];
    const tierResults = [];
    let tierEnv = {
        E2E_PREFLIGHT_RAN: '0',
        E2E_RUN_BUILD_GATES: '0',
    };

    const unitRes = runCommand(
        `Unit Self-Tests (${UNIT_TEST_FILE})`,
        process.execPath,
        ['--test', UNIT_TEST_FILE],
        repoRoot
    );
    preflightResults.push(unitRes);

    if (!args.skipBuild && !args.baseUrl) {
        const lintRes = runCommand('ESLint (npm run lint)', 'npm', ['run', 'lint'], repoRoot);
        const tscRes = runCommand(
            'TypeScript (tsc --noEmit)',
            'npx',
            ['tsc', '--noEmit', '--incremental', 'false'],
            repoRoot
        );
        const buildRes = runCommand('Next.js Build (npm run build)', 'npm', ['run', 'build'], repoRoot);
        preflightResults.push(lintRes, tscRes, buildRes);
        tierEnv = {
            E2E_PREFLIGHT_RAN: '1',
            E2E_PREFLIGHT_LINT_OK: lintRes.ok ? '1' : '0',
            E2E_PREFLIGHT_TSC_OK: tscRes.ok ? '1' : '0',
            E2E_PREFLIGHT_BUILD_OK: buildRes.ok ? '1' : '0',
            E2E_RUN_BUILD_GATES: '1',
        };
    } else {
        console.log('[Preflight] Skipped lint/tsc/build (--skip-build or --base-url provided).');
    }

    const buildIdPath = path.join(repoRoot, '.next', 'BUILD_ID');
    let server = null;
    let activeBaseUrl = args.baseUrl;

    const cleanup = async () => {
        if (server) {
            await server.stop();
            server = null;
        }
    };

    const onSignal = () => {
        cleanup().finally(() => process.exit(1));
    };
    process.once('SIGINT', onSignal);
    process.once('SIGTERM', onSignal);

    try {
        if (!activeBaseUrl) {
            if (!fs.existsSync(buildIdPath)) {
                throw new Error(
                    `Cannot start Next.js server: ${buildIdPath} is missing (build failed or not run).`
                );
            }
            server = await startNextServer({ repoRoot });
            activeBaseUrl = server.baseUrl;
            console.log(`\n[Server] Started next start at ${activeBaseUrl} (pid ${server.pid})`);
        } else {
            console.log(`\n[Server] Using external base URL ${activeBaseUrl}`);
        }

        const orderedTiers = [...args.tiers].sort((a, b) => a - b);
        for (const tier of orderedTiers) {
            const relFile = TIER_FILES[tier];
            const res = runTierTest(tier, relFile, repoRoot, activeBaseUrl, tierEnv);
            tierResults.push(res);
        }
    } finally {
        process.removeListener('SIGINT', onSignal);
        process.removeListener('SIGTERM', onSignal);
        await cleanup();
        console.log('[Server] Shutdown complete.');
    }

    console.log('\n==================== E2E SUMMARY ====================');
    for (const p of preflightResults) {
        console.log(`  [${p.ok ? 'PASS' : 'FAIL'}] ${p.label} (exit ${p.exitCode}, ${p.durationMs}ms)`);
    }
    for (const t of tierResults) {
        console.log(
            `  [${t.ok ? 'PASS' : 'FAIL'}] Tier ${t.tier} (${t.relFile}, exit ${t.exitCode}, ${t.durationMs}ms)`
        );
    }
    console.log('=====================================================');

    const allPreflightOk = preflightResults.every((r) => r.ok);
    const allTiersOk = tierResults.length > 0 && tierResults.every((r) => r.ok);
    process.exit(allPreflightOk && allTiersOk ? 0 : 1);
}

main().catch((err) => {
    console.error(`\n[Fatal] ${err.stack ?? err.message}`);
    process.exit(1);
});
