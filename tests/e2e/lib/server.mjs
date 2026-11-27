import fs from 'node:fs';
import net from 'node:net';
import path from 'node:path';
import { spawn } from 'node:child_process';

const MAX_LOG_LINES = 200;

export function getFreePort() {
    return new Promise((resolve, reject) => {
        const srv = net.createServer();
        srv.unref();
        srv.on('error', reject);
        srv.listen(0, '127.0.0.1', () => {
            const addr = srv.address();
            const port = typeof addr === 'object' && addr ? addr.port : 0;
            srv.close((closeErr) => {
                if (closeErr) reject(closeErr);
                else resolve(port);
            });
        });
    });
}

function appendLines(ring, chunk) {
    const lines = String(chunk).split(/\r?\n/);
    for (const line of lines) {
        if (!line) continue;
        ring.push(line);
        if (ring.length > MAX_LOG_LINES) ring.shift();
    }
}

function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function startNextServer({ repoRoot, timeoutMs = 30_000 }) {
    const buildIdPath = path.join(repoRoot, '.next', 'BUILD_ID');
    if (!fs.existsSync(buildIdPath)) {
        throw new Error(
            `Missing production build (.next/BUILD_ID not found at ${buildIdPath}). Run "npm run build" first or omit --skip-build.`
        );
    }

    const nextBin = path.join(repoRoot, 'node_modules', 'next', 'dist', 'bin', 'next');
    if (!fs.existsSync(nextBin)) {
        throw new Error(`Next.js CLI binary not found at ${nextBin}`);
    }

    const port = await getFreePort();
    const baseUrl = `http://127.0.0.1:${port}`;
    const logs = [];

    const child = spawn(process.execPath, [nextBin, 'start', '-p', String(port), '-H', '127.0.0.1'], {
        cwd: repoRoot,
        detached: true,
        stdio: ['ignore', 'pipe', 'pipe'],
        env: { ...process.env, NODE_ENV: 'production' },
    });

    let spawnError = null;
    child.on('error', (err) => {
        spawnError = err;
        appendLines(logs, `[spawn error] ${err.message}`);
    });
    child.stdout?.on('data', (chunk) => appendLines(logs, chunk));
    child.stderr?.on('data', (chunk) => appendLines(logs, chunk));

    let stopped = false;
    async function stop() {
        if (stopped) return;
        stopped = true;
        if (child.exitCode !== null || child.signalCode !== null) return;

        const waitClosed = new Promise((resolve) => {
            child.once('close', () => resolve(true));
        });

        try {
            if (child.pid) {
                process.kill(-child.pid, 'SIGTERM');
            }
        } catch {
            try {
                child.kill('SIGTERM');
            } catch {
                // ignore already exited
            }
        }

        const exitedGracefully = await Promise.race([
            waitClosed,
            sleep(3_000).then(() => false),
        ]);

        if (!exitedGracefully && child.exitCode === null) {
            try {
                if (child.pid) {
                    process.kill(-child.pid, 'SIGKILL');
                }
            } catch {
                try {
                    child.kill('SIGKILL');
                } catch {
                    // ignore
                }
            }
            await Promise.race([waitClosed, sleep(1_000)]);
        }
    }

    const deadline = Date.now() + timeoutMs;
    while (Date.now() < deadline) {
        if (spawnError) {
            await stop();
            throw new Error(`next start failed to spawn: ${spawnError.message}\nLogs:\n${logs.join('\n')}`);
        }
        if (child.exitCode !== null) {
            await stop();
            throw new Error(
                `next start exited prematurely with code ${child.exitCode}.\nLogs:\n${logs.join('\n')}`
            );
        }

        try {
            const res = await fetch(`${baseUrl}/robots.txt`, { redirect: 'manual' });
            if (res.status < 500) {
                return {
                    baseUrl,
                    port,
                    pid: child.pid,
                    stop,
                    getLogs: () => [...logs],
                };
            }
        } catch {
            // server not listening yet
        }

        await sleep(200);
    }

    await stop();
    throw new Error(
        `Timed out after ${timeoutMs}ms waiting for next start on ${baseUrl}.\nLogs:\n${logs.join('\n')}`
    );
}
