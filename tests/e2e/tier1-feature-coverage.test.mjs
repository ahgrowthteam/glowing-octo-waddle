import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { after, before, describe, test } from 'node:test';
import {
    discoverComparisonSlugs,
    discoverRedirects,
    loadOptionalDeliverables,
} from './lib/discovery.mjs';
import {
    extractInternalLinks,
    extractJsonLd,
    extractLocalAssets,
    extractMainComparisonText,
    parseCanonical,
    parseH1s,
    parseRobotsMeta,
    parseSitemapUrls,
    parseTitle,
} from './lib/html.mjs';
import { acquireBaseUrl, fetchFollow, fetchManual, getRepoRoot } from './lib/runner.mjs';

const repoRoot = getRepoRoot();
let serverHandle;
let baseUrl;

before(async () => {
    serverHandle = await acquireBaseUrl();
    baseUrl = serverHandle.baseUrl;
});

after(async () => {
    await serverHandle?.stop();
});

function collectJsonLdTypes(blocks) {
    const types = new Set();
    const visit = (node) => {
        if (!node || typeof node !== 'object') return;
        if (Array.isArray(node)) {
            node.forEach(visit);
            return;
        }
        if (typeof node['@type'] === 'string') types.add(node['@type']);
        if (Array.isArray(node['@type'])) {
            for (const t of node['@type']) types.add(t);
        }
        if (Array.isArray(node['@graph'])) visit(node['@graph']);
    };
    visit(blocks);
    return types;
}

function runGateCommand(label, cmd, args) {
    try {
        execFileSync(cmd, args, { cwd: repoRoot, stdio: 'pipe' });
    } catch (err) {
        const out = `${err.stdout?.toString() ?? ''}\n${err.stderr?.toString() ?? ''}`.trim();
        const tail = out ? `\n${out.split(/\r?\n/).slice(-15).join('\n')}` : '';
        assert.fail(`${label} failed (exit ${err.status ?? 'signal'}): ${err.message}${tail}`);
    }
}

describe('Tier 1 — Feature Coverage', () => {
    test('T1.1 Build, Lint & Typecheck Gates', (t) => {
        const buildIdPath = path.join(repoRoot, '.next', 'BUILD_ID');
        const preflightRan = process.env.E2E_PREFLIGHT_RAN === '1';
        const skipBuildGates = process.env.E2E_RUN_BUILD_GATES === '0';

        if (preflightRan) {
            assert.equal(
                process.env.E2E_PREFLIGHT_LINT_OK,
                '1',
                'Preflight ESLint (npm run lint) failed'
            );
            assert.equal(
                process.env.E2E_PREFLIGHT_TSC_OK,
                '1',
                'Preflight TypeScript (npx tsc --noEmit --incremental false) failed'
            );
            assert.equal(
                process.env.E2E_PREFLIGHT_BUILD_OK,
                '1',
                'Preflight Next.js build (npm run build) failed'
            );
        } else if (skipBuildGates) {
            t.diagnostic(
                'Lint, TypeScript, and Build gates skipped (--skip-build / E2E_RUN_BUILD_GATES=0); verifying .next/BUILD_ID only.'
            );
        } else {
            runGateCommand('ESLint (npm run lint)', 'npm', ['run', 'lint']);
            runGateCommand('TypeScript (tsc --noEmit)', 'npx', ['tsc', '--noEmit', '--incremental', 'false']);
            if (process.env.E2E_RUN_BUILD_GATES === '1') {
                runGateCommand('Next.js Build (npm run build)', 'npm', ['run', 'build']);
            }
        }

        assert.equal(
            fs.existsSync(buildIdPath),
            true,
            `Expected production build artifact at ${buildIdPath}`
        );
        const buildId = fs.readFileSync(buildIdPath, 'utf8').trim();
        assert.ok(buildId.length > 0, '.next/BUILD_ID must not be empty');
    });

    test('T1.2 examripper-vs-examghost presence, verified facts & indexability parity', async () => {
        const pageFile = path.join(repoRoot, 'src', 'app', 'examripper-vs-examghost', 'page.tsx');
        assert.equal(
            fs.existsSync(pageFile),
            true,
            `Expected route file ${pageFile} to exist`
        );

        const res = await fetchManual(`${baseUrl}/examripper-vs-examghost`);
        assert.equal(
            res.status,
            200,
            `Expected HTTP 200 for /examripper-vs-examghost, got ${res.status}`
        );

        const title = parseTitle(res.text);
        const h1s = parseH1s(res.text);
        assert.match(title, /examripper/i, `<title> should mention ExamRipper (got "${title}")`);
        assert.match(title, /examghost/i, `<title> should mention ExamGhost (got "${title}")`);
        assert.equal(h1s.length, 1, `Expected single <h1>, got ${h1s.length}`);
        assert.match(h1s[0], /examripper/i, `<h1> should mention ExamRipper (got "${h1s[0]}")`);
        assert.match(h1s[0], /examghost/i, `<h1> should mention ExamGhost (got "${h1s[0]}")`);

        const { text: mainText } = extractMainComparisonText(res.text);
        assert.doesNotMatch(
            mainText,
            /We haven(?:'|&#x27;|&#39;)t verified this product yet/i,
            '/examripper-vs-examghost must not render unverified fallback copy'
        );
        assert.match(
            mainText,
            /examripper\.com/i,
            '/examripper-vs-examghost should cite verified examripper.com source/domain in <main>'
        );
        assert.match(
            mainText,
            /(?:\$19\.99|\$97|\$3\.99|\$8\.99|\bApex\b|\bEdpuzzle\b|\bKahoot\b|\bQuizizz\b|\bBlooket\b|\bIXL\b)/i,
            '/examripper-vs-examghost should include verified examripper.com pricing or distinct platform facts in <main>'
        );

        const sitemapRes = await fetchManual(`${baseUrl}/sitemap.xml`);
        assert.equal(sitemapRes.status, 200);
        const { paths } = parseSitemapUrls(sitemapRes.text);
        const inSitemap = paths.includes('/examripper-vs-examghost');
        const robots = parseRobotsMeta(res.text);

        if (robots.hasNoindex) {
            assert.equal(
                inSitemap,
                false,
                '/examripper-vs-examghost has noindex meta and must NOT appear in /sitemap.xml'
            );
        } else {
            assert.equal(
                inSitemap,
                true,
                '/examripper-vs-examghost is indexable and MUST appear in /sitemap.xml'
            );
        }

        const { indexationPlan } = loadOptionalDeliverables(repoRoot);
        const planEntry = indexationPlan?.['examripper-vs-examghost'];
        if (planEntry) {
            const expectedNoindex = planEntry.decision === 'noindex';
            assert.equal(
                robots.hasNoindex,
                expectedNoindex,
                `Expected robots noindex=${expectedNoindex} per indexation-plan.json`
            );
        }
    });

    test('T1.3 Dynamic *-vs-examghost route resolution, title, h1, canonical & JSON-LD', async () => {
        const slugs = discoverComparisonSlugs(repoRoot);
        assert.ok(slugs.length >= 75, `Expected >= 75 *-vs-examghost route dirs, found ${slugs.length}`);

        const redirects = await discoverRedirects(repoRoot);
        const redirectMap = new Map(redirects.map((r) => [r.sourcePath, r]));
        const failures = [];

        for (const slug of slugs) {
            const routePath = `/${slug}`;
            const res = await fetchManual(`${baseUrl}${routePath}`);

            if (redirectMap.has(routePath)) {
                if (res.status !== 301 && res.status !== 308) {
                    failures.push(`${routePath}: expected 301/308 redirect, got ${res.status}`);
                }
                continue;
            }

            if (res.status === 301 || res.status === 308) {
                const loc = res.headers.get('location');
                if (!loc) failures.push(`${routePath}: ${res.status} without Location header`);
                continue;
            }

            if (res.status !== 200) {
                failures.push(`${routePath}: expected 200, got ${res.status}`);
                continue;
            }

            const title = parseTitle(res.text);
            if (!title) failures.push(`${routePath}: empty <title>`);

            const h1s = parseH1s(res.text);
            if (h1s.length !== 1) failures.push(`${routePath}: expected 1 <h1>, found ${h1s.length}`);

            const canonical = parseCanonical(res.text);
            const expectedCanonical = `https://www.examghost.com${routePath}`;
            if (canonical !== expectedCanonical) {
                failures.push(`${routePath}: canonical "${canonical}" !== "${expectedCanonical}"`);
            }

            const jsonLd = extractJsonLd(res.text);
            if (jsonLd.errors.length > 0 || jsonLd.blocks.length === 0) {
                failures.push(
                    `${routePath}: invalid or missing JSON-LD (blocks=${jsonLd.blocks.length}, errors=${jsonLd.errors.length})`
                );
            }
        }

        assert.equal(failures.length, 0, `Route resolution failures:\n${failures.join('\n')}`);
    });

    test('T1.4 sitemap.xml & robots.txt bidirectional parity', async () => {
        const robotsRes = await fetchManual(`${baseUrl}/robots.txt`);
        assert.equal(robotsRes.status, 200, `Expected 200 for /robots.txt, got ${robotsRes.status}`);
        assert.match(
            robotsRes.headers.get('content-type') ?? '',
            /text\/plain/i,
            '/robots.txt must return text/plain'
        );
        assert.match(robotsRes.text, /Sitemap:\s*https:\/\/www\.examghost\.com\/sitemap\.xml/i);
        assert.match(robotsRes.text, /Allow:\s*\//i);
        assert.match(robotsRes.text, /Disallow:\s*\/api\//i);

        const sitemapRes = await fetchManual(`${baseUrl}/sitemap.xml`);
        assert.equal(sitemapRes.status, 200, `Expected 200 for /sitemap.xml, got ${sitemapRes.status}`);
        assert.match(
            sitemapRes.headers.get('content-type') ?? '',
            /xml/i,
            '/sitemap.xml must return XML content-type'
        );

        const { rawUrls, paths } = parseSitemapUrls(sitemapRes.text);
        assert.ok(rawUrls.length > 0, '/sitemap.xml must contain URLs');
        const uniqueUrls = new Set(rawUrls);
        assert.equal(
            uniqueUrls.size,
            rawUrls.length,
            `Duplicate URLs found in /sitemap.xml (${rawUrls.length} total vs ${uniqueUrls.size} unique)`
        );

        const slugs = discoverComparisonSlugs(repoRoot);
        const slugSet = new Set(slugs.map((s) => `/${s}`));
        const uniqueSitemapPaths = [...new Set(paths)];
        const sitemapComparePaths = new Set(uniqueSitemapPaths.filter((p) => /-vs-examghost$/.test(p)));
        const parityErrors = [];

        for (const p of uniqueSitemapPaths) {
            const isCompare = /-vs-examghost$/.test(p);
            if (isCompare && !slugSet.has(p)) {
                parityErrors.push(`Sitemap lists unknown comparison route ${p}`);
                continue;
            }
            const res = await fetchManual(`${baseUrl}${p}`);
            if (res.status !== 200) {
                parityErrors.push(`Sitemap route ${p} returned HTTP ${res.status}`);
                continue;
            }
            const robots = parseRobotsMeta(res.text);
            if (robots.hasNoindex) {
                parityErrors.push(`Sitemap route ${p} has meta robots noindex`);
            }
        }

        for (const slug of slugs) {
            const p = `/${slug}`;
            const res = await fetchManual(`${baseUrl}${p}`);
            if (res.status !== 200) continue;
            const robots = parseRobotsMeta(res.text);
            if (!robots.hasNoindex && !sitemapComparePaths.has(p)) {
                parityErrors.push(`Indexable route ${p} (200, no noindex) is missing from /sitemap.xml`);
            }
        }

        assert.equal(parityErrors.length, 0, `Sitemap/robots parity errors:\n${parityErrors.join('\n')}`);
    });

    test('T1.5 /compare hub links, JSON-LD & zero broken internal links/assets', async () => {
        const compareRes = await fetchManual(`${baseUrl}/compare`);
        assert.equal(compareRes.status, 200, `Expected 200 for /compare, got ${compareRes.status}`);

        const links = extractInternalLinks(compareRes.text, baseUrl);
        assert.equal(
            links.includes('/examripper-vs-examghost'),
            true,
            '/compare must link to /examripper-vs-examghost'
        );

        const jsonLd = extractJsonLd(compareRes.text);
        assert.equal(jsonLd.errors.length, 0, `/compare JSON-LD parse errors: ${JSON.stringify(jsonLd.errors)}`);
        const types = collectJsonLdTypes(jsonLd.blocks);
        for (const expectedType of ['CollectionPage', 'ItemList', 'FAQPage', 'BreadcrumbList']) {
            assert.equal(
                types.has(expectedType),
                true,
                `/compare JSON-LD missing @type "${expectedType}" (found: ${[...types].join(', ')})`
            );
        }

        const brokenLinks = [];
        for (const hrefPath of links) {
            const followed = await fetchFollow(`${baseUrl}${hrefPath}`);
            if (followed.status >= 400) {
                brokenLinks.push(`${hrefPath} -> HTTP ${followed.status}`);
            }
        }
        assert.equal(brokenLinks.length, 0, `Broken internal links on /compare:\n${brokenLinks.join('\n')}`);

        // Check local assets on /compare, /, and /examripper-vs-examghost (when 200)
        const pagesToCheckAssets = ['/', '/compare'];
        const erRes = await fetchManual(`${baseUrl}/examripper-vs-examghost`);
        if (erRes.status === 200) pagesToCheckAssets.push('/examripper-vs-examghost');

        const assetPaths = new Set();
        for (const p of pagesToCheckAssets) {
            const pageRes = p === '/compare' ? compareRes : await fetchManual(`${baseUrl}${p}`);
            for (const asset of extractLocalAssets(pageRes.text)) {
                assetPaths.add(asset);
            }
        }

        const brokenAssets = [];
        for (const asset of assetPaths) {
            const res = await fetchFollow(`${baseUrl}${asset}`);
            if (res.status >= 400) {
                brokenAssets.push(`${asset} -> HTTP ${res.status}`);
            }
        }
        assert.equal(brokenAssets.length, 0, `Broken local assets:\n${brokenAssets.join('\n')}`);
    });
});
