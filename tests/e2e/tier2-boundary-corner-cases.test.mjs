import assert from 'node:assert/strict';
import { after, before, describe, test } from 'node:test';
import {
    discoverComparisonSlugs,
    discoverRedirects,
    loadOptionalDeliverables,
} from './lib/discovery.mjs';
import {
    containsRoutePath,
    extractCompetitorComparisonRegions,
    extractMainComparisonText,
    normalizeUrlPath,
    parseRobotsMeta,
    parseSitemapUrls,
} from './lib/html.mjs';
import { acquireBaseUrl, fetchFollow, fetchManual, getRepoRoot } from './lib/runner.mjs';

const repoRoot = getRepoRoot();
let serverHandle;
let baseUrl;

const BASELINE_ACTIVITY_HIDING = [
    'canvascrack-vs-examghost',
    'canvashack-vs-examghost',
    'canvasninja-vs-examghost',
    'canvastabshield-vs-examghost',
    'quizcloak-vs-examghost',
];

const FALLBACK_M3_NOINDEX_SLUGS = [
    'quizplus-vs-examghost',
    'bettercampus-vs-examghost',
    'testwhiz-vs-examghost',
    'homework-helper-vs-examghost',
    'homeworkify-vs-examghost',
    'canvasscholar-vs-examghost',
];

const PLATFORM_NAME_SRC =
    '(?:Canvas|Blackboard|Moodle|D2L(?:\\s+Brightspace)?|Brightspace|Schoology|McGraw[- ]?Hill(?:\\s+(?:Connect|SmartBook))?|Pearson(?:\\s+(?:MyLab|Mastering))?|MyMathLab|ALEKS|WebAssign|Gradescope|Edgenuity|Edpuzzle|Coursera|Khan\\s+Academy|Google\\s+Forms|Microsoft\\s+Forms|Kahoot|Quizizz|Chegg|Quizlet)';
const BARE_PLATFORM_LIST_RE = new RegExp(
    `\\b${PLATFORM_NAME_SRC}\\b(?:\\s*(?:,|\\/|;|•|\\band\\b|\\bor\\b|&)\\s*)+\\b${PLATFORM_NAME_SRC}\\b`,
    'i'
);

before(async () => {
    serverHandle = await acquireBaseUrl();
    baseUrl = serverHandle.baseUrl;
});

after(async () => {
    await serverHandle?.stop();
});

describe('Tier 2 — Boundary & Corner Cases', () => {
    test('T2.1 activity-hiding routes emit noindex and are excluded from sitemap.xml', async () => {
        const slugs = discoverComparisonSlugs(repoRoot);
        const redirects = await discoverRedirects(repoRoot);
        const redirectSources = new Set(redirects.map((r) => r.sourcePath));
        const { indexationPlan, researchLedger } = loadOptionalDeliverables(repoRoot);

        const activitySlugs = new Set();
        for (const s of BASELINE_ACTIVITY_HIDING) {
            if (slugs.includes(s) && !redirectSources.has(`/${s}`)) activitySlugs.add(s);
        }
        if (researchLedger) {
            for (const [slug, entry] of Object.entries(researchLedger)) {
                if (
                    entry?.primaryPurpose === 'activity-hiding' &&
                    slugs.includes(slug) &&
                    !redirectSources.has(`/${slug}`)
                ) {
                    activitySlugs.add(slug);
                }
            }
        }
        if (indexationPlan) {
            for (const [slug, entry] of Object.entries(indexationPlan)) {
                if (
                    entry?.primaryPurpose === 'activity-hiding' &&
                    slugs.includes(slug) &&
                    !redirectSources.has(`/${slug}`)
                ) {
                    activitySlugs.add(slug);
                }
            }
        }

        // Dynamic HTML scan across non-redirect comparison routes for tab-activity blocker banner
        for (const s of slugs) {
            if (redirectSources.has(`/${s}`) || activitySlugs.has(s)) continue;
            const res = await fetchManual(`${baseUrl}/${s}`);
            if (res.status === 200 && /tab-activity blocker/i.test(res.text)) {
                activitySlugs.add(s);
            }
        }

        assert.ok(activitySlugs.size >= 1, 'Expected at least 1 activity-hiding comparison route');

        const sitemapRes = await fetchManual(`${baseUrl}/sitemap.xml`);
        assert.equal(sitemapRes.status, 200);
        const sitemapPaths = new Set(parseSitemapUrls(sitemapRes.text).paths);

        const llmsTxtRes = await fetchManual(`${baseUrl}/llms.txt`);
        const llmsTxt = llmsTxtRes.status === 200 ? llmsTxtRes.text : '';
        const llmsFullRes = await fetchManual(`${baseUrl}/llms-full.txt`);
        const llmsFullText = llmsFullRes.status === 200 ? llmsFullRes.text : '';

        const errors = [];
        for (const s of [...activitySlugs].sort()) {
            const res = await fetchManual(`${baseUrl}/${s}`);
            if (res.status !== 200) {
                errors.push(`/${s}: expected HTTP 200, got ${res.status}`);
                continue;
            }
            const robots = parseRobotsMeta(res.text);
            if (!robots.hasNoindex) {
                errors.push(`/${s}: missing noindex in <meta name="robots"> (got "${robots.content}")`);
            }
            if (sitemapPaths.has(`/${s}`)) {
                errors.push(`/${s}: activity-hiding route must NOT appear in /sitemap.xml`);
            }
            if (containsRoutePath(llmsTxt, `/${s}`)) {
                errors.push(`/${s}: activity-hiding route must NOT appear in /llms.txt`);
            }
            if (containsRoutePath(llmsFullText, `/${s}`)) {
                errors.push(`/${s}: activity-hiding route must NOT appear in /llms-full.txt`);
            }
        }

        assert.equal(errors.length, 0, `activity-hiding exclusion errors:\n${errors.join('\n')}`);
    });

    test('T2.2 Unverified, blocked, dead, parked & M3 noindex routes emit noindex and are excluded from sitemap.xml', async () => {
        const slugs = discoverComparisonSlugs(repoRoot);
        const redirects = await discoverRedirects(repoRoot);
        const redirectSources = new Set(redirects.map((r) => r.sourcePath));
        const { indexationPlan, researchLedger } = loadOptionalDeliverables(repoRoot);

        const noindexCandidates = new Set();
        const indexCandidates = new Set();

        if (indexationPlan && typeof indexationPlan === 'object') {
            for (const [slug, entry] of Object.entries(indexationPlan)) {
                if (!slugs.includes(slug)) continue;
                if (entry?.decision === 'consolidate') {
                    assert.equal(
                        redirectSources.has(`/${slug}`),
                        true,
                        `/${slug}: indexation-plan.json marks "consolidate" but no redirect rule was discovered`
                    );
                    continue;
                }
                if (entry?.decision === 'index') {
                    indexCandidates.add(slug);
                    continue;
                }
                if (redirectSources.has(`/${slug}`)) continue;
                if (entry?.decision === 'noindex') {
                    noindexCandidates.add(slug);
                }
            }
        } else {
            for (const s of FALLBACK_M3_NOINDEX_SLUGS) {
                if (slugs.includes(s) && !redirectSources.has(`/${s}`)) {
                    noindexCandidates.add(s);
                }
            }
        }

        if (researchLedger) {
            for (const [slug, entry] of Object.entries(researchLedger)) {
                if (
                    ['blocked', 'dead', 'parked'].includes(entry?.verificationStatus) &&
                    slugs.includes(slug) &&
                    !redirectSources.has(`/${slug}`) &&
                    indexationPlan?.[slug]?.decision !== 'index'
                ) {
                    noindexCandidates.add(slug);
                }
            }
        }

        for (const s of slugs) {
            if (
                redirectSources.has(`/${s}`) ||
                noindexCandidates.has(s) ||
                indexationPlan?.[s]?.decision === 'index'
            ) {
                continue;
            }
            const res = await fetchManual(`${baseUrl}/${s}`);
            if (
                res.status === 200 &&
                /We haven(?:'|&#x27;|&#39;)t verified this product yet|blocked automated access/i.test(res.text)
            ) {
                noindexCandidates.add(s);
            }
        }

        assert.ok(noindexCandidates.size >= 1, 'Expected at least 1 unverified/blocked/noindex route');

        const sitemapRes = await fetchManual(`${baseUrl}/sitemap.xml`);
        assert.equal(sitemapRes.status, 200);
        const sitemapPaths = new Set(parseSitemapUrls(sitemapRes.text).paths);

        const llmsTxtRes = await fetchManual(`${baseUrl}/llms.txt`);
        const llmsTxt = llmsTxtRes.status === 200 ? llmsTxtRes.text : '';
        const llmsFullRes = await fetchManual(`${baseUrl}/llms-full.txt`);
        const llmsFullText = llmsFullRes.status === 200 ? llmsFullRes.text : '';

        const errors = [];
        for (const s of [...noindexCandidates].sort()) {
            const res = await fetchManual(`${baseUrl}/${s}`);
            if (res.status !== 200) {
                errors.push(`/${s}: expected HTTP 200, got ${res.status}`);
                continue;
            }
            const robots = parseRobotsMeta(res.text);
            if (!robots.hasNoindex) {
                errors.push(`/${s}: unverified/blocked/noindex route missing noindex meta`);
            }
            if (sitemapPaths.has(`/${s}`)) {
                errors.push(`/${s}: unverified/blocked/noindex route must NOT appear in /sitemap.xml`);
            }
            if (containsRoutePath(llmsTxt, `/${s}`)) {
                errors.push(`/${s}: unverified/blocked/noindex route must NOT appear in /llms.txt`);
            }
            if (containsRoutePath(llmsFullText, `/${s}`)) {
                errors.push(`/${s}: unverified/blocked/noindex route must NOT appear in /llms-full.txt`);
            }
        }

        // Explicitly verify index-classified routes (including transcript-vs-examghost)
        if (!indexationPlan && slugs.includes('transcript-vs-examghost') && !redirectSources.has('/transcript-vs-examghost')) {
            indexCandidates.add('transcript-vs-examghost');
        }
        for (const s of [...indexCandidates].sort()) {
            const res = await fetchManual(`${baseUrl}/${s}`);
            if (res.status !== 200) {
                errors.push(`/${s}: expected HTTP 200 for indexable route, got ${res.status}`);
                continue;
            }
            const robots = parseRobotsMeta(res.text);
            if (robots.hasNoindex) {
                errors.push(`/${s}: index-classified route unexpectedly emits noindex meta`);
            }
            if (!sitemapPaths.has(`/${s}`)) {
                errors.push(`/${s}: index-classified route missing from /sitemap.xml`);
            }
        }

        assert.equal(errors.length, 0, `Indexation/noindex exclusion errors:\n${errors.join('\n')}`);
    });

    test('T2.3 301/308 consolidation redirects resolve cleanly and are excluded from sitemap.xml', async () => {
        const discovered = await discoverRedirects(repoRoot);
        const expectedRequired = [
            { sourcePath: '/classlogy-vs-examghost', targetPath: '/classology-vs-examghost' },
            { sourcePath: '/compare-canvas-hack-extensions', targetPath: '/compare' },
            { sourcePath: '/demo', targetPath: '/canvas-quiz-solver-free-demo' },
        ];

        const bySource = new Map(discovered.map((r) => [r.sourcePath, r]));
        for (const req of expectedRequired) {
            assert.equal(
                bySource.has(req.sourcePath),
                true,
                `Expected redirect ${req.sourcePath} -> ${req.targetPath} to be configured`
            );
            assert.equal(
                normalizeUrlPath(bySource.get(req.sourcePath).targetPath),
                normalizeUrlPath(req.targetPath)
            );
        }

        const sitemapRes = await fetchManual(`${baseUrl}/sitemap.xml`);
        assert.equal(sitemapRes.status, 200);
        const sitemapPaths = new Set(parseSitemapUrls(sitemapRes.text).paths);

        const errors = [];
        for (const rule of bySource.values()) {
            const res = await fetchManual(`${baseUrl}${rule.sourcePath}`);
            if (res.status !== 301 && res.status !== 308) {
                errors.push(`${rule.sourcePath}: expected 301 or 308, got ${res.status}`);
                continue;
            }
            const loc = res.headers.get('location');
            if (!loc) {
                errors.push(`${rule.sourcePath}: missing Location header`);
                continue;
            }
            const locPath = normalizeUrlPath(new URL(loc, baseUrl).pathname);
            const expectedPath = normalizeUrlPath(rule.targetPath);
            if (locPath !== expectedPath) {
                errors.push(`${rule.sourcePath}: Location "${locPath}" !== expected "${expectedPath}"`);
            }

            const followed = await fetchFollow(`${baseUrl}${rule.sourcePath}`);
            if (followed.status !== 200) {
                errors.push(`${rule.sourcePath}: final target returned HTTP ${followed.status}`);
            }

            if (sitemapPaths.has(normalizeUrlPath(rule.sourcePath))) {
                errors.push(`${rule.sourcePath}: redirecting source must NOT appear in /sitemap.xml`);
            }
        }

        assert.equal(errors.length, 0, `Redirect errors:\n${errors.join('\n')}`);
    });

    test('T2.4 Zero fabricated pricing or platform defaults on unverified/blocked entries', async () => {
        const slugs = discoverComparisonSlugs(repoRoot);
        const redirects = await discoverRedirects(repoRoot);
        const redirectSources = new Set(redirects.map((r) => r.sourcePath));
        const { researchLedger } = loadOptionalDeliverables(repoRoot);

        const targets = new Map();
        for (const s of slugs) {
            if (redirectSources.has(`/${s}`)) continue;
            const ledgerEntry = researchLedger?.[s];
            const isLedgerBlocked =
                ledgerEntry &&
                (['blocked', 'dead', 'parked'].includes(ledgerEntry.verificationStatus) ||
                    ledgerEntry.pricing?.summary === null ||
                    (Array.isArray(ledgerEntry.platformsStated) && ledgerEntry.platformsStated.length === 0));

            const res = await fetchManual(`${baseUrl}/${s}`);
            if (res.status !== 200) continue;
            const htmlUnverified = /We haven(?:'|&#x27;|&#39;)t verified this product yet|blocked automated access/i.test(
                res.text
            );
            if (htmlUnverified || isLedgerBlocked) {
                targets.set(s, { html: res.text, htmlUnverified, ledgerEntry });
            }
        }

        assert.ok(targets.size >= 1, 'Expected at least 1 unverified/blocked comparison route');
        const violations = [];

        for (const [slug, { html, htmlUnverified, ledgerEntry }] of targets) {
            const regions = extractCompetitorComparisonRegions(html);
            if (regions.length === 0) {
                violations.push(`/${slug}: could not locate competitor comparison regions`);
                continue;
            }

            const checkPrice = htmlUnverified || ledgerEntry?.pricing?.summary === null;
            const checkPlatforms =
                htmlUnverified ||
                (Array.isArray(ledgerEntry?.platformsStated) && ledgerEntry.platformsStated.length === 0);

            const hasExplicitPlaceholder = regions.some((r) =>
                /Not verified|Not stated|See /i.test(r.text)
            );
            if (htmlUnverified && !hasExplicitPlaceholder) {
                violations.push(`/${slug}: unverified competitor region missing "Not verified"/"Not stated"/"See "`);
            }

            for (const r of regions) {
                if (checkPrice && /\$\s?\d+(?:\.\d{1,2})?/.test(r.text)) {
                    violations.push(
                        `/${slug} [${r.kind}:${r.label}]: fabricated dollar amount in unverified/null-price region: "${r.text}"`
                    );
                }
                if (checkPlatforms && (/\b\d+\s+named:/i.test(r.text) || BARE_PLATFORM_LIST_RE.test(r.text))) {
                    violations.push(
                        `/${slug} [${r.kind}:${r.label}]: fabricated platform list/count in unverified/empty-platforms region: "${r.text}"`
                    );
                }
            }
        }

        assert.equal(violations.length, 0, `Fabricated default violations:\n${violations.join('\n')}`);
    });

    test('T2.5 Corner cases: 404 on unknown slug, query preservation on redirects & zero template leaks', async () => {
        const missingRes = await fetchManual(`${baseUrl}/nonexistent-slug-vs-examghost`);
        assert.equal(
            missingRes.status,
            404,
            `Expected 404 for unknown comparison slug, got ${missingRes.status}`
        );

        const discoveredRedirects = await discoverRedirects(repoRoot);
        assert.ok(discoveredRedirects.length >= 1, 'Expected at least 1 discovered redirect');
        const redirectQueryErrors = [];
        for (const rule of discoveredRedirects) {
            const qRedirect = await fetchManual(`${baseUrl}${rule.sourcePath}?utm_source=test&ref=e2e`);
            if (qRedirect.status !== 301 && qRedirect.status !== 308) {
                redirectQueryErrors.push(
                    `${rule.sourcePath}?utm_source=test&ref=e2e: expected 301/308, got ${qRedirect.status}`
                );
                continue;
            }
            const loc = qRedirect.headers.get('location') ?? '';
            if (!loc) {
                redirectQueryErrors.push(`${rule.sourcePath}?utm_source=test&ref=e2e: missing Location header`);
                continue;
            }
            const parsedLoc = new URL(loc, baseUrl);
            if (normalizeUrlPath(parsedLoc.pathname) !== normalizeUrlPath(rule.targetPath)) {
                redirectQueryErrors.push(
                    `${rule.sourcePath}: Location path "${parsedLoc.pathname}" !== "${rule.targetPath}"`
                );
            }
            if (
                parsedLoc.searchParams.get('utm_source') !== 'test' ||
                parsedLoc.searchParams.get('ref') !== 'e2e'
            ) {
                redirectQueryErrors.push(
                    `${rule.sourcePath}: query string not preserved in Location "${loc}"`
                );
            }
        }
        assert.equal(
            redirectQueryErrors.length,
            0,
            `Redirect query-string preservation failures:\n${redirectQueryErrors.join('\n')}`
        );

        const slugs = discoverComparisonSlugs(repoRoot);
        const leaks = [];
        for (const p of ['/compare', ...slugs.map((s) => `/${s}`)]) {
            const res = await fetchManual(`${baseUrl}${p}`);
            if (res.status !== 200) continue;
            const { text } = extractMainComparisonText(res.text);
            if (/\bNaN\b|\bundefined\b|\[object Object\]/.test(text)) {
                const match = text.match(/\bNaN\b|\bundefined\b|\[object Object\]/)?.[0];
                leaks.push(`${p}: leaked "${match}" in rendered main text`);
            }
        }
        assert.equal(leaks.length, 0, `Rendered text leaks detected:\n${leaks.join('\n')}`);
    });
});
