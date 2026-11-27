import assert from 'node:assert/strict';
import { after, before, describe, test } from 'node:test';
import {
    discoverComparisonSlugs,
    discoverRedirects,
    loadOptionalDeliverables,
} from './lib/discovery.mjs';
import {
    extractInternalLinks,
    extractJsonLd,
    extractMainComparisonText,
    parseH1s,
    parseRobotsMeta,
    parseSitemapUrls,
    validateMainLandmarks,
} from './lib/html.mjs';
import { acquireBaseUrl, fetchFollow, fetchManual, getRepoRoot } from './lib/runner.mjs';

const repoRoot = getRepoRoot();
let serverHandle;
let baseUrl;

const FLAGSHIP_STUDY_BRANDS = [
    'canvaswizard-vs-examghost',
    'aceify-vs-examghost',
    'snapgpt-vs-examghost',
    'answerly-vs-examghost',
    'mindko-vs-examghost',
    'usequietly-vs-examghost',
];

const EXTRA_STUDY_BRANDS = [
    'gauth-vs-examghost',
    'coursehero-vs-examghost',
    'brainly-vs-examghost',
    'studyx-vs-examghost',
    'knowt-vs-examghost',
];

const ACTIVITY_HIDING_SLUGS = [
    'canvashack-vs-examghost',
    'canvasninja-vs-examghost',
    'canvastabshield-vs-examghost',
    'quizcloak-vs-examghost',
];

const FALLBACK_NOINDEX_SLUGS = [
    'quizplus-vs-examghost',
    'bettercampus-vs-examghost',
    'testwhiz-vs-examghost',
];

const FALLBACK_CONSOLIDATED_SLUGS = [
    'classlogy-vs-examghost',
    'collegetools-vs-examghost',
    'canvasanswers-vs-examghost',
    'cheatpal-vs-examghost',
    'mylabsolver-vs-examghost',
    'quizper-vs-examghost',
    'studybotpro-vs-examghost',
];

before(async () => {
    serverHandle = await acquireBaseUrl();
    baseUrl = serverHandle.baseUrl;
});

after(async () => {
    await serverHandle?.stop();
});

function flattenJsonLdNodes(blocks) {
    const nodes = [];
    const visit = (item) => {
        if (!item || typeof item !== 'object') return;
        if (Array.isArray(item)) {
            item.forEach(visit);
            return;
        }
        nodes.push(item);
        if (Array.isArray(item['@graph'])) visit(item['@graph']);
    };
    visit(blocks);
    return nodes;
}

function validateJsonLdSchema(routePath, html, requiredTypes) {
    const { blocks, errors } = extractJsonLd(html);
    assert.equal(errors.length, 0, `${routePath}: JSON-LD parse error(s): ${JSON.stringify(errors)}`);
    assert.ok(blocks.length >= 1, `${routePath}: expected >= 1 JSON-LD block`);

    for (const b of blocks) {
        assert.match(
            String(b['@context'] ?? ''),
            /^https?:\/\/schema\.org\/?$/i,
            `${routePath}: invalid JSON-LD @context "${b['@context']}"`
        );
    }

    const nodes = flattenJsonLdNodes(blocks);
    const types = new Set();
    for (const n of nodes) {
        if (typeof n['@type'] === 'string') types.add(n['@type']);
        if (Array.isArray(n['@type'])) n['@type'].forEach((t) => types.add(t));
    }

    for (const req of requiredTypes) {
        assert.equal(
            types.has(req),
            true,
            `${routePath}: missing JSON-LD @type "${req}" (found: ${[...types].join(', ')})`
        );
    }

    const faqNodes = nodes.filter(
        (n) => n['@type'] === 'FAQPage' || (Array.isArray(n['@type']) && n['@type'].includes('FAQPage'))
    );
    for (const faq of faqNodes) {
        assert.ok(
            Array.isArray(faq.mainEntity) && faq.mainEntity.length > 0,
            `${routePath}: FAQPage.mainEntity must be a non-empty array`
        );
        for (const q of faq.mainEntity) {
            assert.equal(q['@type'], 'Question', `${routePath}: FAQ item must have @type Question`);
            assert.ok(typeof q.name === 'string' && q.name.trim().length > 0);
            assert.ok(
                typeof q.acceptedAnswer?.text === 'string' && q.acceptedAnswer.text.trim().length > 0,
                `${routePath}: FAQ Question "${q.name}" missing acceptedAnswer.text`
            );
        }
    }

    const breadcrumbNodes = nodes.filter(
        (n) =>
            n['@type'] === 'BreadcrumbList' ||
            (Array.isArray(n['@type']) && n['@type'].includes('BreadcrumbList'))
    );
    for (const bc of breadcrumbNodes) {
        assert.ok(
            Array.isArray(bc.itemListElement) && bc.itemListElement.length > 0,
            `${routePath}: BreadcrumbList.itemListElement must be non-empty`
        );
        let prevPos = 0;
        for (const item of bc.itemListElement) {
            assert.ok(
                typeof item.position === 'number' && item.position > prevPos,
                `${routePath}: BreadcrumbList position must ascend`
            );
            prevPos = item.position;
            assert.match(
                String(item.item ?? ''),
                /^https:\/\//i,
                `${routePath}: BreadcrumbList item URL must start with https:// (got "${item.item}")`
            );
        }
    }
}

async function getAllNonRedirectComparePaths() {
    const slugs = discoverComparisonSlugs(repoRoot);
    const redirects = await discoverRedirects(repoRoot);
    const redirectSources = new Set(redirects.map((r) => r.sourcePath));
    return slugs.map((s) => `/${s}`).filter((p) => !redirectSources.has(p));
}

describe('Tier 4 — Real-World Application Scenarios', () => {
    test('T4.1 Core crawl & discovery endpoints (/, /compare, /sitemap.xml, /robots.txt)', async () => {
        const homeRes = await fetchManual(`${baseUrl}/`);
        assert.equal(homeRes.status, 200);
        const homeH1s = parseH1s(homeRes.text);
        assert.equal(homeH1s.length, 1, `Expected 1 <h1> on /, found ${homeH1s.length}`);
        for (const priceToken of ['$19', '$99', '$199', '5 free']) {
            assert.ok(
                homeRes.text.toLowerCase().includes(priceToken.toLowerCase()),
                `Homepage missing "${priceToken}"`
            );
        }

        const compareRes = await fetchManual(`${baseUrl}/compare`);
        assert.equal(compareRes.status, 200);
        const compareLinks = extractInternalLinks(compareRes.text, baseUrl);
        assert.equal(
            compareLinks.includes('/examripper-vs-examghost'),
            true,
            '/compare must link to /examripper-vs-examghost'
        );

        const sitemapRes = await fetchManual(`${baseUrl}/sitemap.xml`);
        assert.equal(sitemapRes.status, 200);
        assert.match(sitemapRes.text, /<urlset\b/i);
        const sitemapPaths = new Set(parseSitemapUrls(sitemapRes.text).paths);
        assert.equal(sitemapPaths.has('/'), true);
        assert.equal(sitemapPaths.has('/compare'), true);
        assert.equal(sitemapPaths.has('/classlogy-vs-examghost'), false);
        for (const s of ACTIVITY_HIDING_SLUGS) {
            assert.equal(sitemapPaths.has(`/${s}`), false, `/${s} must not be in /sitemap.xml`);
        }

        const { indexationPlan } = loadOptionalDeliverables(repoRoot);
        if (indexationPlan && typeof indexationPlan === 'object') {
            for (const [slug, entry] of Object.entries(indexationPlan)) {
                if (entry?.decision === 'index') {
                    assert.equal(
                        sitemapPaths.has(`/${slug}`),
                        true,
                        `/${slug} (indexation-plan decision=index) must appear in /sitemap.xml`
                    );
                } else if (entry?.decision === 'noindex' || entry?.decision === 'consolidate') {
                    assert.equal(
                        sitemapPaths.has(`/${slug}`),
                        false,
                        `/${slug} (indexation-plan decision=${entry.decision}) must NOT appear in /sitemap.xml`
                    );
                }
            }
        } else {
            assert.equal(
                sitemapPaths.has('/transcript-vs-examghost'),
                true,
                '/transcript-vs-examghost must appear in /sitemap.xml'
            );
            assert.equal(
                sitemapPaths.has('/examripper-vs-examghost'),
                true,
                '/examripper-vs-examghost must appear in /sitemap.xml'
            );
            for (const s of [...ACTIVITY_HIDING_SLUGS, ...FALLBACK_NOINDEX_SLUGS, ...FALLBACK_CONSOLIDATED_SLUGS]) {
                assert.equal(sitemapPaths.has(`/${s}`), false, `/${s} must not be in /sitemap.xml`);
            }
        }

        const robotsRes = await fetchManual(`${baseUrl}/robots.txt`);
        assert.equal(robotsRes.status, 200);
        assert.match(robotsRes.text, /Disallow:\s*\/api\//i);
        assert.match(robotsRes.text, /Sitemap:\s*https:\/\/www\.examghost\.com\/sitemap\.xml/i);
    });

    test('T4.2 examripper-vs-examghost live verification', async () => {
        const res = await fetchManual(`${baseUrl}/examripper-vs-examghost`);
        assert.equal(res.status, 200, `Expected 200 for /examripper-vs-examghost, got ${res.status}`);
        const { text: mainText } = extractMainComparisonText(res.text);
        assert.match(mainText, /ExamRipper/i);
        assert.match(mainText, /examripper\.com/i);
        assert.match(
            mainText,
            /(?:\$19\.99|\$97|\$3\.99|\$8\.99|\bApex\b|\bEdpuzzle\b|\bKahoot\b|\bQuizizz\b|\bBlooket\b|\bIXL\b)/i
        );
        assert.doesNotMatch(mainText, /\b100%\s+undetectable\b/i);
        assert.doesNotMatch(res.text, /\b100%\s+undetectable\b/i);

        const sitemapRes = await fetchManual(`${baseUrl}/sitemap.xml`);
        const sitemapPaths = new Set(parseSitemapUrls(sitemapRes.text).paths);
        const robots = parseRobotsMeta(res.text);
        assert.equal(
            sitemapPaths.has('/examripper-vs-examghost'),
            !robots.hasNoindex,
            '/examripper-vs-examghost sitemap membership must match robots indexability'
        );
    });

    test('T4.3 Redirects, flagship study brands & activity-hiding noindex journeys', async () => {
        const redirectRes = await fetchManual(`${baseUrl}/classlogy-vs-examghost`);
        assert.ok(redirectRes.status === 301 || redirectRes.status === 308);
        assert.match(redirectRes.headers.get('location') ?? '', /\/classology-vs-examghost$/);
        const followed = await fetchFollow(`${baseUrl}/classlogy-vs-examghost`);
        assert.equal(followed.status, 200);

        const sitemapRes = await fetchManual(`${baseUrl}/sitemap.xml`);
        const sitemapPaths = new Set(parseSitemapUrls(sitemapRes.text).paths);

        const studySlugs = [...FLAGSHIP_STUDY_BRANDS];
        for (const extra of EXTRA_STUDY_BRANDS) {
            if (sitemapPaths.has(`/${extra}`)) studySlugs.push(extra);
        }

        for (const slug of studySlugs) {
            const res = await fetchManual(`${baseUrl}/${slug}`);
            assert.equal(res.status, 200, `/${slug} expected 200, got ${res.status}`);
            const robots = parseRobotsMeta(res.text);
            assert.equal(robots.hasNoindex, false, `/${slug} should be indexable`);
            const { tokens } = extractMainComparisonText(res.text);
            assert.ok(tokens.length >= 250, `/${slug} unexpectedly short (${tokens.length} words)`);
        }

        for (const slug of ACTIVITY_HIDING_SLUGS) {
            const res = await fetchManual(`${baseUrl}/${slug}`);
            assert.equal(res.status, 200, `/${slug} expected 200, got ${res.status}`);
            const robots = parseRobotsMeta(res.text);
            assert.equal(robots.hasNoindex, true, `/${slug} must have noindex`);
            assert.match(
                res.text,
                /tab-activity blocker|not an AI answer tool|not a like-for-like comparison/i,
                `/${slug} missing neutral policy/not-like-for-like disclaimer`
            );
            assert.equal(sitemapPaths.has(`/${slug}`), false, `/${slug} must not appear in /sitemap.xml`);
        }
    });

    test('T4.4 Exact <main> semantic landmark nesting across core & all comparison routes', async () => {
        const allComparePaths = await getAllNonRedirectComparePaths();
        assert.ok(
            allComparePaths.length >= 60,
            `Expected >= 60 non-redirect comparison routes, found ${allComparePaths.length}`
        );

        const targets = [
            '/',
            '/compare',
            '/features',
            '/faq',
            '/about',
            '/privacy',
            '/terms',
            ...allComparePaths,
        ];

        const failures = [];
        for (const p of [...new Set(targets)]) {
            const res = await fetchManual(`${baseUrl}${p}`);
            if (res.status !== 200) {
                failures.push(`${p}: expected 200, got ${res.status}`);
                continue;
            }
            const check = validateMainLandmarks(res.text);
            if (!check.ok) {
                failures.push(`${p}: ${check.reason}`);
            }
        }

        assert.equal(failures.length, 0, `<main> landmark nesting failures:\n${failures.join('\n')}`);
    });

    test('T4.5 JSON-LD structured data validation across core & all comparison routes', async () => {
        const homeRes = await fetchManual(`${baseUrl}/`);
        assert.equal(homeRes.status, 200);
        validateJsonLdSchema('/', homeRes.text, [
            'WebPage',
            'WebSite',
            'Organization',
            'SoftwareApplication',
            'FAQPage',
        ]);

        const compareRes = await fetchManual(`${baseUrl}/compare`);
        assert.equal(compareRes.status, 200);
        validateJsonLdSchema('/compare', compareRes.text, [
            'CollectionPage',
            'ItemList',
            'FAQPage',
            'BreadcrumbList',
        ]);

        const allComparePaths = await getAllNonRedirectComparePaths();
        for (const p of allComparePaths) {
            const res = await fetchManual(`${baseUrl}${p}`);
            assert.equal(res.status, 200, `${p}: expected 200, got ${res.status}`);
            validateJsonLdSchema(p, res.text, ['WebPage', 'FAQPage', 'BreadcrumbList']);
        }
    });

    test('T4.6 Full internal link integrity crawl (zero 3xx redirects or 4xx/5xx)', async () => {
        const allComparePaths = await getAllNonRedirectComparePaths();
        const seedPages = ['/', '/compare', ...allComparePaths];

        const uniqueLinks = new Set(seedPages);
        for (const seed of [...new Set(seedPages)]) {
            const res = await fetchManual(`${baseUrl}${seed}`);
            if (res.status !== 200) continue;
            for (const link of extractInternalLinks(res.text, baseUrl)) {
                uniqueLinks.add(link);
            }
        }

        const broken = [];
        for (const p of [...uniqueLinks].sort()) {
            const res = await fetchManual(`${baseUrl}${p}`);
            if (res.status >= 300 && res.status < 400) {
                broken.push(`${p} -> HTTP ${res.status} (redirect -> ${res.headers.get('location') ?? 'none'})`);
            } else if (res.status !== 200) {
                broken.push(`${p} -> HTTP ${res.status}`);
            }
        }

        assert.equal(
            broken.length,
            0,
            `Broken or redirecting internal links found (${broken.length}/${uniqueLinks.size} checked):\n${broken.join('\n')}`
        );
    });
});
