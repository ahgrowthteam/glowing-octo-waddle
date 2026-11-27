import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { after, before, describe, test } from 'node:test';
import {
    discoverComparisonSlugs,
    discoverEditorialFiles,
    discoverRedirects,
    loadFactsFromGeneratedTs,
    stripTsCommentsAndTypes,
} from './lib/discovery.mjs';
import {
    extractFaqJsonLdText,
    extractJsonLd,
    extractMainAttrTexts,
    extractMainComparisonText,
    fiveGramJaccard,
    parseH1s,
    parseMetaDescription,
    parseRobotsMeta,
    parseSitemapUrls,
    parseTitle,
    scanAiSlop,
    scanEvasion,
    stopwordCosine,
} from './lib/html.mjs';
import { acquireBaseUrl, fetchManual, getRepoRoot } from './lib/runner.mjs';

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

async function fetchIndexableComparisonPages() {
    const sitemapRes = await fetchManual(`${baseUrl}/sitemap.xml`);
    assert.equal(sitemapRes.status, 200, `Expected 200 for /sitemap.xml, got ${sitemapRes.status}`);
    const { paths } = parseSitemapUrls(sitemapRes.text);
    const comparePaths = [...new Set(paths.filter((p) => /-vs-examghost$/.test(p)))].sort();

    const pages = [];
    for (const p of comparePaths) {
        const res = await fetchManual(`${baseUrl}${p}`);
        assert.equal(res.status, 200, `Sitemap comparison path ${p} returned ${res.status}`);
        const robots = parseRobotsMeta(res.text);
        assert.equal(robots.hasNoindex, false, `Sitemap comparison path ${p} has noindex`);
        pages.push({ path: p, html: res.text });
    }
    return pages;
}

function stripUrlsFromJsonLd(blocks) {
    return JSON.stringify(blocks).replace(/https?:\/\/[^\s"']+/gi, 'URL');
}

describe('Tier 3 — Cross-Feature & Quality Gates', () => {
    test('T3.1 Programmatic cross-page text similarity across indexable *-vs-examghost pages', async () => {
        const pages = await fetchIndexableComparisonPages();
        assert.ok(
            pages.length >= 30,
            `Expected >= 30 indexable *-vs-examghost pages in /sitemap.xml, found ${pages.length}`
        );

        const extracted = [];
        const shortPages = [];
        for (const page of pages) {
            const { mainCount, tokens } = extractMainComparisonText(page.html);
            assert.equal(mainCount, 1, `${page.path}: expected exactly 1 <main>, found ${mainCount}`);
            if (tokens.length < 350) {
                shortPages.push(`${page.path}: ${tokens.length} words (< 350)`);
            }
            extracted.push({ path: page.path, tokens });
        }

        assert.equal(
            shortPages.length,
            0,
            `Indexable pages below 350-word minimum:\n${shortPages.join('\n')}`
        );

        let pairCount = 0;
        let sumJaccard = 0;
        let maxJaccard = 0;
        let maxJaccardPair = '';
        let sumCosine = 0;
        let maxCosine = 0;
        let maxCosinePair = '';

        for (let i = 0; i < extracted.length; i += 1) {
            for (let j = i + 1; j < extracted.length; j += 1) {
                const a = extracted[i];
                const b = extracted[j];
                const jacc = fiveGramJaccard(a.tokens, b.tokens);
                const cos = stopwordCosine(a.tokens, b.tokens);
                pairCount += 1;
                sumJaccard += jacc;
                sumCosine += cos;
                if (jacc > maxJaccard) {
                    maxJaccard = jacc;
                    maxJaccardPair = `${a.path} <-> ${b.path}`;
                }
                if (cos > maxCosine) {
                    maxCosine = cos;
                    maxCosinePair = `${a.path} <-> ${b.path}`;
                }
            }
        }

        const avgJaccard = sumJaccard / pairCount;
        const avgCosine = sumCosine / pairCount;
        const summary = `N=${extracted.length}, pairs=${pairCount}, 5-gram Jaccard avg=${avgJaccard.toFixed(3)} (<=0.220) max=${maxJaccard.toFixed(3)} (<=0.350, ${maxJaccardPair}); stopword cosine avg=${avgCosine.toFixed(3)} (<=0.620) max=${maxCosine.toFixed(3)} (<=0.750, ${maxCosinePair})`;

        assert.ok(avgJaccard <= 0.22, `5-gram Jaccard avg too high: ${summary}`);
        assert.ok(maxJaccard <= 0.35, `5-gram Jaccard max too high: ${summary}`);
        assert.ok(avgCosine <= 0.62, `Stopword cosine avg too high: ${summary}`);
        assert.ok(maxCosine <= 0.75, `Stopword cosine max too high: ${summary}`);
    });

    test('T3.2 Compliance-risk evasion scanner across rendered HTML, metadata & src/data/', async () => {
        const slugs = discoverComparisonSlugs(repoRoot);
        const redirects = await discoverRedirects(repoRoot);
        const redirectSources = new Set(redirects.map((r) => r.sourcePath));
        const violations = [];

        const pathsToScan = ['/compare', ...slugs.map((s) => `/${s}`).filter((p) => !redirectSources.has(p))];

        for (const p of pathsToScan) {
            const res = await fetchManual(`${baseUrl}${p}`);
            if (res.status !== 200) continue;
            const { text } = extractMainComparisonText(res.text);
            const attrTexts = extractMainAttrTexts(res.text);
            const title = parseTitle(res.text);
            const desc = parseMetaDescription(res.text);
            const jsonLd = extractJsonLd(res.text);
            const jsonLdText = stripUrlsFromJsonLd(jsonLd.blocks);

            for (const [surface, content] of [
                ['main-text', text],
                ['main-attributes', attrTexts],
                ['title', title],
                ['meta-description', desc],
                ['json-ld', jsonLdText],
            ]) {
                const hits = scanEvasion(content);
                for (const h of hits) {
                    violations.push(`HTTP ${p} [${surface}] (${h.rule}): "${h.match}" in "...${h.snippet}..."`);
                }
            }
        }

        // Static src/data/ checks
        const competitorsPath = path.join(repoRoot, 'src', 'data', 'competitors.ts');
        if (fs.existsSync(competitorsPath)) {
            const stripped = stripTsCommentsAndTypes(fs.readFileSync(competitorsPath, 'utf8'));
            const hits = scanEvasion(stripped);
            for (const h of hits.slice(0, 15)) {
                violations.push(`src/data/competitors.ts (${h.rule}): "${h.match}" in "...${h.snippet}..."`);
            }
            if (hits.length > 15) {
                violations.push(`src/data/competitors.ts: ...and ${hits.length - 15} more evasion hits (total ${hits.length})`);
            }
        }

        for (const editorialPath of discoverEditorialFiles(repoRoot)) {
            const rel = path.relative(repoRoot, editorialPath);
            const stripped = stripTsCommentsAndTypes(fs.readFileSync(editorialPath, 'utf8'));
            const hits = scanEvasion(stripped);
            for (const h of hits.slice(0, 15)) {
                violations.push(`${rel} (${h.rule}): "${h.match}" in "...${h.snippet}..."`);
            }
        }

        const facts = loadFactsFromGeneratedTs(repoRoot);
        if (facts && typeof facts === 'object') {
            for (const [slug, f] of Object.entries(facts)) {
                const publicTexts = [
                    f?.priceSummary ?? '',
                    f?.freeTier ?? '',
                    f?.trial ?? '',
                    ...(Array.isArray(f?.platforms) ? f.platforms : []),
                    ...(Array.isArray(f?.features) ? f.features : []),
                ].join(' | ');
                const hits = scanEvasion(publicTexts);
                for (const h of hits) {
                    violations.push(
                        `src/data/competitor-facts.generated.ts [${slug}] (${h.rule}): "${h.match}"`
                    );
                }
            }
        }

        assert.equal(
            violations.length,
            0,
            `Compliance-risk evasion violations (${violations.length}):\n${violations.slice(0, 30).join('\n')}`
        );
    });

    test('T3.3 Anti-AI-slop detector across /compare, indexable comparisons & editorial data', async () => {
        const indexablePages = await fetchIndexableComparisonPages();
        const compareRes = await fetchManual(`${baseUrl}/compare`);
        assert.equal(compareRes.status, 200);

        const pages = [{ path: '/compare', html: compareRes.text }, ...indexablePages];
        const violations = [];

        for (const page of pages) {
            const { text } = extractMainComparisonText(page.html);
            const title = parseTitle(page.html);
            const desc = parseMetaDescription(page.html);
            const jsonLd = extractJsonLd(page.html);
            const faqJsonLdText = extractFaqJsonLdText(jsonLd.blocks);

            for (const [surface, content] of [
                ['main-text', text],
                ['title', title],
                ['meta-description', desc],
                ['json-ld', faqJsonLdText],
            ]) {
                const hits = scanAiSlop(content);
                for (const h of hits) {
                    violations.push(`HTTP ${page.path} [${surface}] (${h.rule}): "${h.match}" in "...${h.snippet}..."`);
                }
            }
        }

        for (const editorialPath of discoverEditorialFiles(repoRoot)) {
            const rel = path.relative(repoRoot, editorialPath);
            const stripped = stripTsCommentsAndTypes(fs.readFileSync(editorialPath, 'utf8'));
            const hits = scanAiSlop(stripped);
            for (const h of hits.slice(0, 15)) {
                violations.push(
                    `${rel} (${h.rule}): "${h.match}" in "...${h.snippet}..."`
                );
            }
        }

        assert.equal(
            violations.length,
            0,
            `Anti-AI-slop violations (${violations.length}):\n${violations.slice(0, 30).join('\n')}`
        );
    });

    test('T3.4 Commercial keyword alignment ("vs ExamGhost" + "alternative") on indexable pages', async () => {
        const pages = await fetchIndexableComparisonPages();
        const failures = [];

        for (const page of pages) {
            const title = parseTitle(page.html);
            const h1s = parseH1s(page.html);
            const h1 = h1s[0] ?? '';
            const desc = parseMetaDescription(page.html);

            if (!/\bvs\.?\s+examghost\b/i.test(title)) {
                failures.push(`${page.path}: <title> missing "vs ExamGhost" ("${title}")`);
            }
            if (!/\balternatives?\b/i.test(title)) {
                failures.push(`${page.path}: <title> missing "Alternative" ("${title}")`);
            }
            if (title.length > 60) {
                failures.push(`${page.path}: <title> exceeds 60 chars (${title.length}: "${title}")`);
            }
            if (!/\bvs\.?\s+examghost\b/i.test(h1)) {
                failures.push(`${page.path}: <h1> missing "vs ExamGhost" ("${h1}")`);
            }
            if (!/\balternatives?\b/i.test(`${title} ${h1} ${desc}`)) {
                failures.push(
                    `${page.path}: neither <title>, <h1>, nor <meta name="description"> includes "alternative"`
                );
            }
        }

        assert.equal(
            failures.length,
            0,
            `Commercial keyword alignment failures (${failures.length}/${pages.length} pages):\n${failures.slice(0, 30).join('\n')}`
        );
    });
});
