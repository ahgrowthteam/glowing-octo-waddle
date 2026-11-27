import fs from 'node:fs';
import path from 'node:path';
import vm from 'node:vm';
import { pathToFileURL } from 'node:url';

export function discoverComparisonSlugs(repoRoot) {
    const appDir = path.join(repoRoot, 'src', 'app');
    if (!fs.existsSync(appDir)) return [];
    return fs
        .readdirSync(appDir, { withFileTypes: true })
        .filter((d) => d.isDirectory() && d.name.endsWith('-vs-examghost'))
        .map((d) => d.name)
        .sort();
}

function walkPageFiles(dir, out = []) {
    if (!fs.existsSync(dir)) return out;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, entry.name);
        if (entry.isDirectory()) {
            walkPageFiles(full, out);
        } else if (entry.isFile() && /^page\.(?:tsx|ts|jsx|js|mdx)$/.test(entry.name)) {
            out.push(full);
        }
    }
    return out;
}

export function findDeliverablesDir(repoRoot) {
    const candidates = [];
    if (process.env.E2E_DELIVERABLES_DIR) {
        candidates.push(process.env.E2E_DELIVERABLES_DIR);
    }
    candidates.push(path.join(repoRoot, 'deliverables'));
    for (const dir of candidates) {
        if (dir && fs.existsSync(dir) && fs.statSync(dir).isDirectory()) {
            return dir;
        }
    }
    return null;
}

export function loadOptionalDeliverables(repoRoot) {
    const dir = findDeliverablesDir(repoRoot);
    if (!dir) {
        return { deliverablesDir: null, indexationPlan: null, researchLedger: null };
    }
    const readJsonIfExists = (file) => {
        const full = path.join(dir, file);
        if (!fs.existsSync(full)) return null;
        try {
            return JSON.parse(fs.readFileSync(full, 'utf8'));
        } catch {
            return null;
        }
    };
    return {
        deliverablesDir: dir,
        indexationPlan: readJsonIfExists('indexation-plan.json'),
        researchLedger: readJsonIfExists('research-ledger.json'),
    };
}

export async function discoverRedirects(repoRoot) {
    const bySource = new Map();

    // 1. next.config.mjs redirects()
    const nextConfigPath = path.join(repoRoot, 'next.config.mjs');
    if (fs.existsSync(nextConfigPath)) {
        try {
            const mod = await import(`${pathToFileURL(nextConfigPath).href}?t=${Date.now()}`);
            if (typeof mod.default?.redirects === 'function') {
                const rules = await mod.default.redirects();
                for (const r of rules) {
                    if (!r?.source || !r?.destination) continue;
                    bySource.set(r.source, {
                        sourcePath: r.source,
                        targetPath: r.destination,
                        permanent: r.permanent !== false,
                        sourceKind: 'next.config.mjs',
                    });
                }
            }
        } catch {
            // fallback to regex scan below if dynamic import fails
            const raw = fs.readFileSync(nextConfigPath, 'utf8');
            const matches = raw.matchAll(
                /source\s*:\s*['"]([^'"]+)['"][\s\S]{0,120}?destination\s*:\s*['"]([^'"]+)['"][\s\S]{0,120}?permanent\s*:\s*(true|false)/g
            );
            for (const m of matches) {
                bySource.set(m[1], {
                    sourcePath: m[1],
                    targetPath: m[2],
                    permanent: m[3] === 'true',
                    sourceKind: 'next.config.mjs',
                });
            }
        }
    }

    // 2. App Router page.tsx permanentRedirect(...) / redirect(...)
    const appDir = path.join(repoRoot, 'src', 'app');
    for (const file of walkPageFiles(appDir)) {
        const content = fs.readFileSync(file, 'utf8');
        const m = content.match(/\b(permanentRedirect|redirect)\(\s*["']([^"']+)["']\s*\)/);
        if (!m) continue;
        const relDir = path.relative(appDir, path.dirname(file)).split(path.sep).join('/');
        const sourcePath = relDir ? `/${relDir}` : '/';
        if (!bySource.has(sourcePath)) {
            bySource.set(sourcePath, {
                sourcePath,
                targetPath: m[2],
                permanent: m[1] === 'permanentRedirect',
                sourceKind: path.relative(repoRoot, file),
            });
        }
    }

    // 3. Optional deliverables/indexation-plan.json
    const { indexationPlan } = loadOptionalDeliverables(repoRoot);
    if (indexationPlan && typeof indexationPlan === 'object') {
        for (const [slug, entry] of Object.entries(indexationPlan)) {
            if (entry?.decision === 'consolidate' && entry?.redirectTarget) {
                const sourcePath = slug.startsWith('/') ? slug : `/${slug}`;
                const targetPath = entry.redirectTarget.startsWith('/')
                    ? entry.redirectTarget
                    : `/${entry.redirectTarget}`;
                if (!bySource.has(sourcePath)) {
                    bySource.set(sourcePath, {
                        sourcePath,
                        targetPath,
                        permanent: true,
                        sourceKind: 'indexation-plan.json',
                    });
                }
            }
        }
    }

    return [...bySource.values()].sort((a, b) => a.sourcePath.localeCompare(b.sourcePath));
}

export function discoverDataFiles(repoRoot) {
    const dataDir = path.join(repoRoot, 'src', 'data');
    if (!fs.existsSync(dataDir)) return [];
    return fs
        .readdirSync(dataDir, { withFileTypes: true })
        .filter((d) => d.isFile() && /\.(?:ts|tsx|js|mjs|json)$/.test(d.name))
        .map((d) => path.join(dataDir, d.name))
        .sort();
}

export function discoverEditorialFiles(repoRoot) {
    const dataDir = path.join(repoRoot, 'src', 'data');
    if (!fs.existsSync(dataDir)) return [];
    const results = [];
    for (const entry of fs.readdirSync(dataDir, { withFileTypes: true })) {
        const full = path.join(dataDir, entry.name);
        if (entry.isFile() && /^compare-editorial.*\.(?:ts|tsx|js|mjs)$/.test(entry.name)) {
            results.push(full);
        } else if (entry.isDirectory() && entry.name === 'compare-editorial') {
            for (const sub of fs.readdirSync(full, { withFileTypes: true })) {
                if (sub.isFile() && /\.(?:ts|tsx|js|mjs)$/.test(sub.name)) {
                    results.push(path.join(full, sub.name));
                }
            }
        }
    }
    return results.sort();
}

function extractBalancedObjectLiteral(source, openBraceIdx) {
    let depth = 0;
    let quote = null;
    for (let i = openBraceIdx; i < source.length; i += 1) {
        const ch = source[i];
        if (quote) {
            if (ch === '\\' && i + 1 < source.length) {
                i += 1;
            } else if (ch === quote) {
                quote = null;
            }
            continue;
        }
        if (ch === '/' && source[i + 1] === '/') {
            const nl = source.indexOf('\n', i + 2);
            if (nl === -1) break;
            i = nl;
            continue;
        }
        if (ch === '/' && source[i + 1] === '*') {
            const end = source.indexOf('*/', i + 2);
            if (end === -1) break;
            i = end + 1;
            continue;
        }
        if (ch === '"' || ch === "'" || ch === '`') {
            quote = ch;
        } else if (ch === '{') {
            depth += 1;
        } else if (ch === '}') {
            depth -= 1;
            if (depth === 0) {
                return source.slice(openBraceIdx, i + 1);
            }
        }
    }
    return null;
}

export function loadFactsFromGeneratedTs(repoRoot) {
    const genPath = path.join(repoRoot, 'src', 'data', 'competitor-facts.generated.ts');
    if (!fs.existsSync(genPath)) return null;
    const raw = fs.readFileSync(genPath, 'utf8');
    const match = raw.match(/export\s+const\s+FACTS\b[^=]*=\s*\{/);
    if (!match || match.index === undefined) return null;
    const openBraceIdx = match.index + match[0].length - 1;
    const body = extractBalancedObjectLiteral(raw, openBraceIdx);
    if (!body) return null;
    try {
        return JSON.parse(body);
    } catch {
        try {
            return vm.runInNewContext(`(${body})`, {}, { timeout: 1000 });
        } catch {
            return null;
        }
    }
}

export function stripTsCommentsAndTypes(tsSource) {
    const withoutBlockComments = tsSource.replace(/\/\*[\s\S]*?\*\//g, ' ');
    const lines = withoutBlockComments.split(/\r?\n/);
    const kept = [];
    let inInterface = false;
    let braceDepth = 0;
    let quote = null;

    for (const line of lines) {
        if (quote !== '`') {
            quote = null;
        }
        const trimmed = line.trim();
        if (
            !quote &&
            (trimmed.startsWith('//') || trimmed.startsWith('import ') || trimmed.startsWith('import type '))
        ) {
            continue;
        }
        if (!quote && !inInterface && /^(?:export\s+)?(?:interface|type)\s+\w+/.test(trimmed)) {
            if (trimmed.includes('{') && !trimmed.includes('}')) {
                inInterface = true;
                braceDepth = (trimmed.match(/\{/g)?.length ?? 0) - (trimmed.match(/\}/g)?.length ?? 0);
            }
            continue;
        }
        if (!quote && inInterface) {
            braceDepth += (trimmed.match(/\{/g)?.length ?? 0) - (trimmed.match(/\}/g)?.length ?? 0);
            if (braceDepth <= 0) inInterface = false;
            continue;
        }
        // Remove trailing // comment outside quotes
        let out = '';
        for (let i = 0; i < line.length; i += 1) {
            const ch = line[i];
            if (quote) {
                out += ch;
                if (ch === '\\' && i + 1 < line.length) {
                    out += line[i + 1];
                    i += 1;
                } else if (ch === quote) {
                    quote = null;
                }
            } else if (ch === '"' || ch === "'" || ch === '`') {
                quote = ch;
                out += ch;
            } else if (ch === '/' && line[i + 1] === '/') {
                break;
            } else {
                out += ch;
            }
        }
        kept.push(out);
    }
    return kept.join('\n');
}
