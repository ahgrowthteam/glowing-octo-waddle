import assert from 'node:assert/strict';
import path from 'node:path';
import { describe, test } from 'node:test';
import {
    discoverComparisonSlugs,
    discoverDataFiles,
    discoverEditorialFiles,
    discoverRedirects,
    loadFactsFromGeneratedTs,
    stripTsCommentsAndTypes,
} from './lib/discovery.mjs';
import {
    containsRoutePath,
    extractCompetitorComparisonRegions,
    extractFaqJsonLdText,
    extractJsonLd,
    scanAiSlop,
    scanEvasion,
    validateMainLandmarks,
} from './lib/html.mjs';
import { getRepoRoot } from './lib/runner.mjs';

const repoRoot = getRepoRoot();

describe('E2E Library Unit Tests — lib/html.mjs', () => {
    test('R2.1 COORD_VERB_END_RE does not treat ", and" clauses as negated', () => {
        const hits1 = scanEvasion(
            'ExamGhost does not offer bloat, and Focus Shield keeps you safe.'
        );
        assert.ok(
            hits1.some((h) => h.rule === 'focus-shield'),
            `Expected focus-shield hit after ", and", got ${JSON.stringify(hits1)}`
        );

        const hits2 = scanEvasion(
            'Our extension does not use cookies, and 100% undetectable architecture runs locally.'
        );
        assert.ok(
            hits2.some((h) => h.rule === 'undetectable'),
            `Expected undetectable hit after ", and", got ${JSON.stringify(hits2)}`
        );

        // Genuine coordinated negations with "or" / "nor" / "," remain allowed
        assert.deepEqual(
            scanEvasion('ExamGhost does not offer Focus Shield or 100% undetectable guarantees.'),
            []
        );
        assert.deepEqual(
            scanEvasion('ExamGhost never provides proctor bypass, stealth mode, or tab-switch immunity.'),
            []
        );
        assert.deepEqual(
            scanEvasion('Neither Focus Shield nor stealth mode is included.'),
            []
        );
    });

    test('R2.4 EVASION_PATTERNS detects semantic evasion variants and stealth/lockdown labels', () => {
        const positives = [
            ['This tool is not detectable by Canvas.', 'semantic-undetectable'],
            ['Answers cannot be detected during quizzes.', 'semantic-undetectable'],
            ["Extensions can't be detected by proctors.", 'semantic-undetectable'],
            ['Built to be impossible to detect.', 'semantic-undetectable'],
            ['Claimed unable to be detected by school systems.', 'semantic-undetectable'],
            ['Built for zero chance of detection on quizzes.', 'semantic-undetectable'],
            ['Promises zero risk of detection or no chance of detection.', 'semantic-undetectable'],
            ['An untraceable and undiscoverable browser helper.', 'semantic-undetectable'],
            ['Designed to evade Honorlock and evading Proctorio.', 'proctor-bypass'],
            ['Students evaded Respondus and evades Turnitin checks.', 'proctor-bypass'],
            ['Helps evade detection on Moodle and Brightspace.', 'proctor-bypass'],
            ['Students bypassed Canvas tab tracking with this mode.', 'proctor-bypass'],
            ['Bypassed Turnitin, bypassing Examity, bypasses ProctorU.', 'proctor-bypass'],
            ['StealthTap (Beta): double-click for answers.', 'stealth-claim'],
            ['Display modes: Minimal UI, Stealth (default), Explain.', 'stealth-claim'],
            ['Tier 1: Stealth (Focused) plan.', 'stealth-claim'],
            ['Includes Respondus LockDown Browser support for quizzes.', 'proctor-bypass'],
        ];

        for (const [sample, expectedRule] of positives) {
            const hits = scanEvasion(sample);
            assert.ok(
                hits.some((h) => h.rule === expectedRule),
                `Expected rule "${expectedRule}" for "${sample}", got ${JSON.stringify(hits)}`
            );
        }

        // Negated disclaimers must NOT fire
        const negatedDisclaimers = [
            'ExamGhost does not offer StealthTap, Stealth (default), or Respondus LockDown Browser support.',
            'ExamGhost does not evade Honorlock or bypass ProctorU.',
            'Our tool never bypasses Turnitin or Examity.',
            'Without Stealth (Focused) or proctor bypass claims.',
        ];
        for (const disclaimer of negatedDisclaimers) {
            assert.deepEqual(
                scanEvasion(disclaimer),
                [],
                `Unexpected evasion hit on disclaimer: "${disclaimer}"`
            );
        }
    });

    test('R2.2 / G2 EXAMGHOST_PRICE_CLAUSE_RE strips ExamGhost pricing/plans/tiers/offers/$0/$8.25/$19/$99/$199 without residue or stripping competitor prices', () => {
        const html1 = `<main><p class="aeo-summary">We haven't verified this product yet. ExamGhost pricing is $19/month or $99/year.</p></main>`;
        const regions1 = extractCompetitorComparisonRegions(html1);
        assert.equal(regions1.length, 1);
        assert.doesNotMatch(regions1[0].text, /\$\s?\d+/);

        const html2 = `<main><p class="aeo-summary">We haven't verified this product yet. ExamGhost pricing is $19/month, $99/year (~$8.25/mo), or $199 lifetime. ExamGhost offers $0/day.</p></main>`;
        const regions2 = extractCompetitorComparisonRegions(html2);
        assert.equal(regions2.length, 1);
        assert.doesNotMatch(regions2[0].text, /\$\s?\d+/);
        assert.doesNotMatch(regions2[0].text, /\b9\s+lifetime\b/i);
        assert.doesNotMatch(regions2[0].text, /\blifetime\b/i);

        const html3 = `<main><p class="aeo-summary">ExamGhost tiers start at $19/month and Competitor charges $29/month.</p></main>`;
        const regions3 = extractCompetitorComparisonRegions(html3);
        assert.equal(regions3.length, 1);
        assert.match(regions3[0].text, /\$29\/month/);
        assert.doesNotMatch(regions3[0].text, /\$19\/month/);
    });

    test('G1 containsRoutePath matches relative paths and full URLs while rejecting suffix and subpath collisions', () => {
        // Matches: markdown links, bare URLs (with query/port/hash/trailing slash), relative paths
        assert.equal(
            containsRoutePath(
                '- [Quizplus](https://www.examghost.com/quizplus-vs-examghost)',
                '/quizplus-vs-examghost'
            ),
            true
        );
        assert.equal(
            containsRoutePath(
                'https://examghost.com/quizplus-vs-examghost?ref=1',
                '/quizplus-vs-examghost'
            ),
            true
        );
        assert.equal(
            containsRoutePath(
                'http://127.0.0.1:3000/quizplus-vs-examghost#pricing',
                '/quizplus-vs-examghost'
            ),
            true
        );
        assert.equal(
            containsRoutePath('See /quizplus-vs-examghost.', '/quizplus-vs-examghost'),
            true
        );
        assert.equal(
            containsRoutePath('/quizplus-vs-examghost', '/quizplus-vs-examghost'),
            true
        );
        assert.equal(
            containsRoutePath(
                'https://www.examghost.com/compare',
                '/compare'
            ),
            true
        );

        // Non-matches: suffix collisions, subpath collisions, empty/null inputs
        assert.equal(
            containsRoutePath(
                'https://www.examghost.com/quizplus-vs-examghost-v2',
                '/quizplus-vs-examghost'
            ),
            false
        );
        assert.equal(
            containsRoutePath(
                'https://www.examghost.com/quizplus-vs-examghost-extra',
                '/quizplus-vs-examghost'
            ),
            false
        );
        assert.equal(
            containsRoutePath(
                'https://www.examghost.com/other/quizplus-vs-examghost',
                '/quizplus-vs-examghost'
            ),
            false
        );
        assert.equal(
            containsRoutePath(
                'https://www.examghost.com/compare-canvas-hack-extensions',
                '/compare'
            ),
            false
        );
        assert.equal(
            containsRoutePath(
                'https://www.examghost.com/sub/compare',
                '/compare'
            ),
            false
        );
        assert.equal(containsRoutePath('/sub/compare', '/compare'), false);
        assert.equal(containsRoutePath('', '/compare'), false);
        assert.equal(containsRoutePath('https://www.examghost.com/compare', ''), false);
    });

    test('R2.3 extractCompetitorComparisonRegions preserves headerless <th scope="row">, 2-col th+td, skips multi-row <thead>, and scans cards', () => {
        // 1. Headerless 3-col <th scope="row"> table preserves row 0
        const htmlScopeRow = `
            <main>
                <table>
                    <tbody>
                        <tr><th scope="row">Price</th><td>$9.99/mo</td><td>$19/mo</td></tr>
                        <tr><th scope="row">Platforms</th><td>5 named: Canvas</td><td>20 named</td></tr>
                    </tbody>
                </table>
            </main>`;
        const scopeRowRegions = extractCompetitorComparisonRegions(htmlScopeRow);
        assert.deepEqual(scopeRowRegions, [
            { kind: 'table-cell', label: 'Price', text: '$9.99/mo' },
            { kind: 'table-cell', label: 'Platforms', text: '5 named: Canvas' },
        ]);

        // 2. Headerless 2-col <th> + <td> table preserves row 0
        const htmlTwoCol = `
            <main>
                <table>
                    <tbody>
                        <tr><th>Price</th><td>$12.99/mo</td></tr>
                        <tr><th>Platforms</th><td>Canvas, Blackboard</td></tr>
                    </tbody>
                </table>
            </main>`;
        const twoColRegions = extractCompetitorComparisonRegions(htmlTwoCol);
        assert.deepEqual(twoColRegions, [
            { kind: 'table-cell', label: 'Price', text: '$12.99/mo' },
            { kind: 'table-cell', label: 'Platforms', text: 'Canvas, Blackboard' },
        ]);

        // 3. Multi-row <thead> is skipped cleanly and ExamGhost column is detected from row 2 of <thead>
        const htmlMultiThead = `
            <main>
                <table>
                    <thead>
                        <tr><th colspan="3">Side-by-side comparison</th></tr>
                        <tr><th>Metric</th><th>ExamGhost</th><th>Acme</th></tr>
                    </thead>
                    <tbody>
                        <tr><th scope="row">Price</th><td>$19/mo</td><td>$14.99/mo</td></tr>
                        <tr><th scope="row">Platforms</th><td>20 named</td><td>Canvas, Moodle</td></tr>
                    </tbody>
                </table>
            </main>`;
        const multiTheadRegions = extractCompetitorComparisonRegions(htmlMultiThead);
        assert.deepEqual(multiTheadRegions, [
            { kind: 'table-cell', label: 'Price', text: '$14.99/mo' },
            { kind: 'table-cell', label: 'Platforms', text: 'Canvas, Moodle' },
        ]);

        // 4. <dl> + .aeo-summary + competitor pricing & notes card are all extracted, while ExamGhost card is excluded
        const htmlCombined = `
            <main>
                <p class="aeo-summary">Acme (acme.test) could not be verified. ExamGhost supports Canvas, Blackboard, Moodle.</p>
                <dl>
                    <dt>Price</dt><dd>Not verified</dd><dd>$19/mo</dd>
                </dl>
                <div class="grid">
                    <div class="card">
                        <h2>Acme pricing &amp; notes</h2>
                        <div class="nested"><p>Fabricated $49/mo plan on Canvas, Blackboard, Moodle.</p></div>
                    </div>
                    <div class="card">
                        <h2>ExamGhost verified baseline</h2>
                        <p>Paid plans: $19/month, $99/year (~$8.25/mo), or $199 lifetime.</p>
                    </div>
                </div>
            </main>`;
        const combinedRegions = extractCompetitorComparisonRegions(htmlCombined);
        assert.ok(combinedRegions.some((r) => r.kind === 'dl-cell' && r.text === 'Not verified'));
        assert.ok(combinedRegions.some((r) => r.kind === 'aeo-summary' && !/Canvas/.test(r.text)));
        assert.ok(
            combinedRegions.some((r) => r.kind === 'pricing-notes' && /\$49\/mo/.test(r.text)),
            `Expected pricing-notes region with $49/mo, got ${JSON.stringify(combinedRegions)}`
        );
        assert.equal(
            combinedRegions.some((r) => /\$199/.test(r.text)),
            false,
            'ExamGhost baseline card must not be extracted as competitor region'
        );
    });

    test('AI slop detection catches frictionless, marked null, trailing participial slop, contrast reveals, negation lists & FAQ JSON-LD', () => {
        const badSamples = [
            ['Emphasizes frictionless setup for Chrome users.', 'banned-filler-cliche'],
            ['Rates remain unverified (marked null).', 'schema-jargon'],
            ['Pricing is login-gated, leaving students to guess renewal cost.', 'trailing-participial-slop'],
            ['No annual tier exists, making a 12-month stretch costlier.', 'trailing-participial-slop'],
            ['Multiple IAP variants appear, creating billing confusion.', 'trailing-participial-slop'],
            ['/pricing returns 404, forcing users to inspect terms.', 'trailing-participial-slop'],
            ["It's not just a quiz solver, it's a study companion.", 'contrast-reveal'],
            ['No bloat, no ads, no lock-in.', 'negation-list'],
        ];
        for (const [text, expectedRule] of badSamples) {
            const hits = scanAiSlop(text);
            assert.ok(
                hits.some((h) => h.rule === expectedRule),
                `Expected AI slop rule "${expectedRule}" for "${text}", got ${JSON.stringify(hits)}`
            );
        }

        assert.deepEqual(
            scanAiSlop(
                'ExamGhost publishes $0/day (5 solves), $19/month, $99/year, and $199 lifetime tiers with a 14-day refund window.'
            ),
            []
        );

        const faqHtml = `<script type="application/ld+json">${JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'Is setup frictionless?',
                    acceptedAnswer: { '@type': 'Answer', text: 'Prices remain unverified (marked null).' },
                },
            ],
        })}</script>`;
        const { blocks } = extractJsonLd(faqHtml);
        const faqText = extractFaqJsonLdText(blocks);
        const faqHits = scanAiSlop(faqText);
        assert.ok(faqHits.some((h) => h.rule === 'banned-filler-cliche'));
        assert.ok(faqHits.some((h) => h.rule === 'schema-jargon'));
    });

    test('validateMainLandmarks enforces exact <main>, <nav aria-label="Main">, and <footer> placement', () => {
        const valid = `
            <body>
                <header><nav aria-label="Main"><a href="/">Home</a></nav></header>
                <main><h1>Compare</h1></main>
                <footer><p>Copyright</p></footer>
            </body>`;
        assert.equal(validateMainLandmarks(valid).ok, true);

        const footerInsideMain = `
            <body>
                <header><nav aria-label="Main"><a href="/">Home</a></nav></header>
                <main><h1>Compare</h1><footer><p>Copyright</p></footer></main>
            </body>`;
        const r1 = validateMainLandmarks(footerInsideMain);
        assert.equal(r1.ok, false);
        assert.equal(r1.footerInsideMain, true);

        const navInsideMain = `
            <body>
                <main><nav aria-label="Main"><a href="/">Home</a></nav><h1>Compare</h1></main>
                <footer><p>Copyright</p></footer>
            </body>`;
        const r2 = validateMainLandmarks(navInsideMain);
        assert.equal(r2.ok, false);
        assert.equal(r2.mainNavInsideMain, true);

        const missingMainNav = `
            <body>
                <main><h1>Demo</h1></main>
                <footer><p>Copyright</p></footer>
            </body>`;
        const r3 = validateMainLandmarks(missingMainNav);
        assert.equal(r3.ok, false);
        assert.equal(r3.mainNavOutsideMain, false);

        const duplicateMain = `
            <body>
                <header><nav aria-label="Main"></nav></header>
                <main><h1>A</h1></main>
                <main><h1>B</h1></main>
                <footer></footer>
            </body>`;
        const r4 = validateMainLandmarks(duplicateMain);
        assert.equal(r4.ok, false);
        assert.equal(r4.mainCount, 2);
    });
});

describe('E2E Library Unit Tests — lib/discovery.mjs', () => {
    test('stripTsCommentsAndTypes strips TS comments/types while preserving URLs in strings', () => {
        const sample = `
            import type { Foo } from './types';
            // stealth mode comment that must be stripped
            /* 100% undetectable block comment */
            export interface Bar {
                undetectable: string;
            }
            export const DATA = {
                url: "https://example.com/path", // trailing comment: Focus Shield
                note: "Verified pricing",
            };
        `;
        const stripped = stripTsCommentsAndTypes(sample);
        assert.doesNotMatch(stripped, /stealth mode/i);
        assert.doesNotMatch(stripped, /100% undetectable/i);
        assert.doesNotMatch(stripped, /Focus Shield/i);
        assert.doesNotMatch(stripped, /interface Bar/);
        assert.match(stripped, /https:\/\/example\.com\/path/);
        assert.match(stripped, /Verified pricing/);
    });

    test('repository discovery helpers return valid structures for ExamGhost workspace', async () => {
        const slugs = discoverComparisonSlugs(repoRoot);
        assert.ok(slugs.length >= 75, `Expected >= 75 comparison slugs, found ${slugs.length}`);
        assert.ok(slugs.includes('examripper-vs-examghost'));
        assert.ok(slugs.every((s) => s.endsWith('-vs-examghost')));

        const dataFiles = discoverDataFiles(repoRoot);
        assert.ok(dataFiles.some((f) => path.basename(f) === 'competitor-facts.generated.ts'));

        const editorialFiles = discoverEditorialFiles(repoRoot);
        assert.ok(editorialFiles.length >= 1, 'Expected at least 1 compare-editorial file');

        const redirects = await discoverRedirects(repoRoot);
        assert.ok(
            redirects.some(
                (r) => r.sourcePath === '/classlogy-vs-examghost' && r.targetPath === '/classology-vs-examghost'
            )
        );

        const facts = loadFactsFromGeneratedTs(repoRoot);
        assert.ok(facts && typeof facts === 'object');
        assert.ok(facts['examripper-vs-examghost']);
    });
});
