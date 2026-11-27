import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { startNextServer } from './server.mjs';

export function getRepoRoot() {
    return path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
}

export function parseCliArgs(argv = process.argv.slice(2)) {
    let skipBuild = false;
    let baseUrl = null;
    let tiers = new Set([1, 2, 3, 4]);

    for (let i = 0; i < argv.length; i += 1) {
        const arg = argv[i];
        if (arg === '--skip-build') {
            skipBuild = true;
        } else if (arg.startsWith('--base-url=')) {
            baseUrl = arg.slice('--base-url='.length).replace(/\/+$/, '');
        } else if (arg === '--base-url' && i + 1 < argv.length) {
            baseUrl = argv[i + 1].replace(/\/+$/, '');
            i += 1;
        } else if (arg.startsWith('--tier=')) {
            tiers = parseTierList(arg.slice('--tier='.length));
        } else if (arg === '--tier' && i + 1 < argv.length) {
            tiers = parseTierList(argv[i + 1]);
            i += 1;
        } else if (arg === '--help' || arg === '-h') {
            return { help: true, skipBuild, baseUrl, tiers };
        } else {
            throw new Error(`Unknown CLI argument: ${arg}`);
        }
    }

    return { help: false, skipBuild, baseUrl, tiers };
}

function parseTierList(raw) {
    const out = new Set();
    for (const part of raw.split(',')) {
        const n = Number.parseInt(part.trim(), 10);
        if (!Number.isInteger(n) || n < 1 || n > 4) {
            throw new Error(`Invalid tier "${part}". Expected comma-separated numbers in 1..4.`);
        }
        out.add(n);
    }
    if (out.size === 0) {
        throw new Error('At least one tier (1..4) must be selected.');
    }
    return out;
}

export async function acquireBaseUrl() {
    const envUrl = process.env.E2E_BASE_URL;
    if (envUrl) {
        return {
            baseUrl: envUrl.replace(/\/+$/, ''),
            managed: false,
            stop: async () => {},
        };
    }

    const repoRoot = getRepoRoot();
    const server = await startNextServer({ repoRoot });
    let cleaned = false;

    const cleanup = async () => {
        if (cleaned) return;
        cleaned = true;
        await server.stop();
    };

    const onSignal = () => {
        cleanup().finally(() => process.exit(1));
    };

    process.once('SIGINT', onSignal);
    process.once('SIGTERM', onSignal);

    return {
        baseUrl: server.baseUrl,
        managed: true,
        stop: async () => {
            process.removeListener('SIGINT', onSignal);
            process.removeListener('SIGTERM', onSignal);
            await cleanup();
        },
    };
}

export async function fetchManual(url) {
    const res = await fetch(url, { redirect: 'manual' });
    const text = await res.text();
    return {
        status: res.status,
        headers: res.headers,
        text,
        url,
    };
}

export async function fetchFollow(url, maxHops = 5) {
    const chain = [];
    let currentUrl = url;
    for (let hop = 0; hop <= maxHops; hop += 1) {
        const res = await fetch(currentUrl, { redirect: 'manual' });
        chain.push({ url: currentUrl, status: res.status });
        if (res.status >= 300 && res.status < 400) {
            const loc = res.headers.get('location');
            await res.arrayBuffer();
            if (!loc) {
                throw new Error(`Redirect ${res.status} without Location header at ${currentUrl}`);
            }
            const nextUrl = new URL(loc, currentUrl).toString();
            if (chain.some((c) => c.url === nextUrl)) {
                throw new Error(`Redirect loop detected: ${chain.map((c) => c.url).join(' -> ')} -> ${nextUrl}`);
            }
            currentUrl = nextUrl;
            continue;
        }
        const text = await res.text();
        return {
            status: res.status,
            headers: res.headers,
            text,
            finalUrl: currentUrl,
            chain,
        };
    }
    throw new Error(`Too many redirects (${maxHops}) starting at ${url}`);
}
