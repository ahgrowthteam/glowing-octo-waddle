/**
 * Milestone 2 Challenger Adversarial Stress & Invariant Test Suite
 * 
 * Adversarially and empirically stress-tests all 8 new high-intent university LMS & STEM platform routes:
 * 1. /wileyplus-quiz-solver
 * 2. /zybooks-homework-solver
 * 3. /webwork-math-solver
 * 4. /sakai-lms-quiz-solver
 * 5. /macmillan-achieve-smartwork-solver
 * 6. /tophat-quiz-solver
 * 7. /knewton-alta-solver
 * 8. /hawkes-learning-certify-solver
 * 
 * Plus:
 * - src/components/NewPlatformMotionDemos.tsx
 * - src/components/Footer.tsx
 * - src/app/sitemap.ts
 * 
 * Evaluates all 11 strict invariants:
 * 1. Zero Template Imports across all 8 routes and all of src/app/ (0 LmsServicePageTemplate, 0 LmsInteractiveVideoDemo, 0 CompetitorMotionDemo, 0 peer/tab1)
 * 2. Quota Invariant: Exact badge "5 Free Solves / Day ($0 · Auto-refills every 24h · No credit card required)" on all 8 routes, 0 occurrences of "50 Free Solves" and 0 "useState(50)" in src/
 * 3. Pricing Invariant: Exact $19/mo, $99/yr ($8.25/mo), $199 Lifetime on all 8 routes, 0 occurrences of truncated "$199 Life" in src/
 * 4. Hotkeys Invariant: All 6 hotkeys (Double-Click, Alt+S, Alt+1, Alt+2, Alt+3, ⌘+Shift+U) on all 8 routes
 * 5. Study AI Hub Invariant: <StudyAiHubShowcase compact /> mounted on all 8 routes
 * 6. Schema Invariant: Exact 6 unique nodes in @graph JSON-LD schema (WebPage with speakable, SoftwareApplication with 4 offers, BreadcrumbList, FAQPage, VideoObject, HowTo), 0 duplicate @ids, exact properties
 * 7. SEO Invariant: Title strictly 45-65 characters; description strictly 135-160 characters
 * 8. Footer Invariant: All 20 platform links under "Quiz Solvers by Platform" in Footer.tsx
 * 9. Sitemap Invariant: All 22 slugs in lmsServiceSlugs (20 platform + 2 blog) in sitemap.ts, verified via dynamic execution
 * 10. Motion Demos Invariant: Unique bespoke 3-scene Framer Motion video demo mounted on each route, exports verified, scene configs validated (scene0 failure banner, scene1 0.3s HUD, scene2 3 AI models: Claude 3.7 Sonnet, ChatGPT, DeepSeek-R1)
 * 11. SSR & Leak Invariant: Full renderToString execution of all 8 routes & all 8 motion demos with zero HTML leaks (NaN, undefined, null, [object Object])
 */

import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const ROOT_DIR = process.cwd();

export const M2_ROUTES = [
  {
    slug: 'wileyplus-quiz-solver',
    path: 'src/app/wileyplus-quiz-solver/page.tsx',
    demoExport: 'WileyPlusMotionDemo',
    platformName: 'WileyPLUS',
    expectedDomain: 'edugen.wileyplus.com',
  },
  {
    slug: 'zybooks-homework-solver',
    path: 'src/app/zybooks-homework-solver/page.tsx',
    demoExport: 'ZybooksMotionDemo',
    platformName: 'zyBooks',
    expectedDomain: 'learn.zybooks.com',
  },
  {
    slug: 'webwork-math-solver',
    path: 'src/app/webwork-math-solver/page.tsx',
    demoExport: 'WebWorkMotionDemo',
    platformName: 'WeBWorK',
    expectedDomain: 'webwork2',
  },
  {
    slug: 'sakai-lms-quiz-solver',
    path: 'src/app/sakai-lms-quiz-solver/page.tsx',
    demoExport: 'SakaiMotionDemo',
    platformName: 'Sakai',
    expectedDomain: 'portal/site',
  },
  {
    slug: 'macmillan-achieve-smartwork-solver',
    path: 'src/app/macmillan-achieve-smartwork-solver/page.tsx',
    demoExport: 'MacmillanAchieveMotionDemo',
    platformName: 'Macmillan Achieve',
    expectedDomain: 'achieve.macmillanlearning.com',
  },
  {
    slug: 'tophat-quiz-solver',
    path: 'src/app/tophat-quiz-solver/page.tsx',
    demoExport: 'TopHatMotionDemo',
    platformName: 'Top Hat',
    expectedDomain: 'app.tophat.com',
  },
  {
    slug: 'knewton-alta-solver',
    path: 'src/app/knewton-alta-solver/page.tsx',
    demoExport: 'KnewtonAltaMotionDemo',
    platformName: 'Knewton Alta',
    expectedDomain: 'knewton.com/alta',
  },
  {
    slug: 'hawkes-learning-certify-solver',
    path: 'src/app/hawkes-learning-certify-solver/page.tsx',
    demoExport: 'HawkesLearningMotionDemo',
    platformName: 'Hawkes Learning',
    expectedDomain: 'learn.hawkeslearning.com',
  },
];

export const ALL_20_PLATFORM_HREFS = [
  '/canvas-lms-quiz-solver',
  '/blackboard-quiz-solver',
  '/moodle-quiz-solver',
  '/d2l-brightspace-quiz-solver',
  '/mcgraw-hill-connect-aleks-solver',
  '/pearson-mylab-mastering-solver',
  '/cengage-mindtap-webassign-solver',
  '/gradescope-exam-solver',
  '/google-forms-quiz-solver',
  '/schoology-quiz-solver',
  '/deltamath-homework-solver',
  '/edgenuity-quiz-solver',
  '/wileyplus-quiz-solver',
  '/zybooks-homework-solver',
  '/webwork-math-solver',
  '/sakai-lms-quiz-solver',
  '/macmillan-achieve-smartwork-solver',
  '/tophat-quiz-solver',
  '/knewton-alta-solver',
  '/hawkes-learning-certify-solver',
];

export const ALL_22_LMS_SLUGS = [
  'canvas-lms-quiz-solver',
  'blackboard-quiz-solver',
  'd2l-brightspace-quiz-solver',
  'moodle-quiz-solver',
  'mcgraw-hill-connect-aleks-solver',
  'pearson-mylab-mastering-solver',
  'cengage-mindtap-webassign-solver',
  'gradescope-exam-solver',
  'google-forms-quiz-solver',
  'schoology-quiz-solver',
  'deltamath-homework-solver',
  'edgenuity-quiz-solver',
  'wileyplus-quiz-solver',
  'zybooks-homework-solver',
  'webwork-math-solver',
  'sakai-lms-quiz-solver',
  'macmillan-achieve-smartwork-solver',
  'tophat-quiz-solver',
  'knewton-alta-solver',
  'hawkes-learning-certify-solver',
  'blog/does-canvas-detect-extensions-2026',
  'blog/canvas-quiz-log-explained-what-professors-see',
];

const REQUIRED_HOTKEYS = ['Double-Click', 'Alt+S', 'Alt+1', 'Alt+2', 'Alt+3', '⌘+Shift+U'];
const EXPECTED_GRAPH_TYPES = ['WebPage', 'SoftwareApplication', 'BreadcrumbList', 'FAQPage', 'VideoObject', 'HowTo'];

export interface AssertionRecord {
  id: string;
  category: string;
  target: string;
  passed: boolean;
  message: string;
  details?: string;
}

export const records: AssertionRecord[] = [];
let passCount = 0;
let failCount = 0;

function assert(id: string, category: string, target: string, condition: boolean, message: string, details?: string) {
  if (condition) {
    passCount++;
    records.push({ id, category, target, passed: true, message, details });
    console.log(`  [PASS] [${id}] [${target}] ${message}${details ? ` -> ${details}` : ''}`);
  } else {
    failCount++;
    records.push({ id, category, target, passed: false, message, details });
    console.error(`X [FAIL] [${id}] [${target}] ${message}${details ? ` -> ${details}` : ''}`);
  }
}

// Leak detection
function detectHtmlLeaks(html: string): string[] {
  const leaks: string[] = [];
  if (/style="[^"]*NaN[^"]*"/i.test(html)) leaks.push('Contains NaN in style');
  if (/width:\s*NaN/i.test(html)) leaks.push('Contains width: NaN');
  if (/left:\s*NaN/i.test(html)) leaks.push('Contains left: NaN');
  if (/top:\s*NaN/i.test(html)) leaks.push('Contains top: NaN');
  
  const attrUndefined = html.match(/(?:id|class|aria-[a-z]+|data-[a-z]+)="[^"]*\bundefined\b[^"]*"/i);
  if (attrUndefined) leaks.push(`Attribute undefined: ${attrUndefined[0]}`);

  const attrNull = html.match(/(?:id|class|aria-[a-z]+|data-[a-z]+)="[^"]*\bnull\b[^"]*"/i);
  if (attrNull && !attrNull[0].includes('aria-hidden="null"')) {
    leaks.push(`Attribute null: ${attrNull[0]}`);
  }

  if (/>\s*undefined\s*</.test(html)) leaks.push('Bare token >undefined<');
  if (/>\s*NaN\s*</.test(html)) leaks.push('Bare token >NaN<');
  if (/\[object Object\]/.test(html)) leaks.push('Unrendered [object Object] in HTML');

  return leaks;
}

// Recursively walk directory
function getFilesRecursive(dir: string, extensions: string[]): string[] {
  let results: string[] = [];
  if (!fs.existsSync(dir)) return results;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
        results = results.concat(getFilesRecursive(fullPath, extensions));
      }
    } else {
      if (extensions.some(ext => file.endsWith(ext))) {
        results.push(fullPath);
      }
    }
  }
  return results;
}

export async function runAdversarialM2StressTests() {
  console.log('========================================================================');
  console.log('   Milestone 2 Empirical Challenger Adversarial Stress Test Suite   ');
  console.log('========================================================================\n');

  // -------------------------------------------------------------------------
  // Invariant 1: Zero Template Imports across 8 Routes and src/app/
  // -------------------------------------------------------------------------
  console.log('>>> Category 1: Zero Template Imports Invariant <<<');
  for (const r of M2_ROUTES) {
    const fullPath = path.join(ROOT_DIR, r.path);
    assert(`INV1-EXIST-${r.slug}`, 'ZeroTemplate', r.slug, fs.existsSync(fullPath), 'Route file exists on disk');
    const content = fs.readFileSync(fullPath, 'utf8');
    assert(`INV1-NO-TMPL-${r.slug}`, 'ZeroTemplate', r.slug, !content.includes('LmsServicePageTemplate'), '0 imports/references of LmsServicePageTemplate');
    assert(`INV1-NO-DEMO-${r.slug}`, 'ZeroTemplate', r.slug, !content.includes('LmsInteractiveVideoDemo'), '0 imports/references of LmsInteractiveVideoDemo');
    assert(`INV1-NO-COMPETITOR-DEMO-${r.slug}`, 'ZeroTemplate', r.slug, !content.includes('CompetitorMotionDemo'), '0 imports/references of CompetitorMotionDemo');
    assert(`INV1-NO-TAB1-${r.slug}`, 'ZeroTemplate', r.slug, !content.includes('peer/tab1'), '0 imports/references of peer/tab1');
  }

  const allAppFiles = getFilesRecursive(path.join(ROOT_DIR, 'src/app'), ['.ts', '.tsx']);
  let appTemplateLeaks = 0;
  let appDemoLeaks = 0;
  let appCompDemoLeaks = 0;
  let appTab1Leaks = 0;

  for (const f of allAppFiles) {
    const c = fs.readFileSync(f, 'utf8');
    if (c.includes('LmsServicePageTemplate')) {
      appTemplateLeaks++;
      console.error(`Leak in ${path.relative(ROOT_DIR, f)}: LmsServicePageTemplate`);
    }
    if (c.includes('LmsInteractiveVideoDemo')) {
      appDemoLeaks++;
      console.error(`Leak in ${path.relative(ROOT_DIR, f)}: LmsInteractiveVideoDemo`);
    }
    if (c.includes('CompetitorMotionDemo')) {
      appCompDemoLeaks++;
      console.error(`Leak in ${path.relative(ROOT_DIR, f)}: CompetitorMotionDemo`);
    }
    if (c.includes('peer/tab1')) {
      appTab1Leaks++;
      console.error(`Leak in ${path.relative(ROOT_DIR, f)}: peer/tab1`);
    }
  }
  assert('INV1-APP-NO-TMPL', 'ZeroTemplate', 'src/app/', appTemplateLeaks === 0, `0 LmsServicePageTemplate in entire src/app/ (found: ${appTemplateLeaks})`);
  assert('INV1-APP-NO-DEMO', 'ZeroTemplate', 'src/app/', appDemoLeaks === 0, `0 LmsInteractiveVideoDemo in entire src/app/ (found: ${appDemoLeaks})`);
  assert('INV1-APP-NO-COMP-DEMO', 'ZeroTemplate', 'src/app/', appCompDemoLeaks === 0, `0 CompetitorMotionDemo in entire src/app/ (found: ${appCompDemoLeaks})`);
  assert('INV1-APP-NO-TAB1', 'ZeroTemplate', 'src/app/', appTab1Leaks === 0, `0 peer/tab1 in entire src/app/ (found: ${appTab1Leaks})`);

  // -------------------------------------------------------------------------
  // Invariant 2: Quota Invariant ("5 Free Solves / Day ($0 · Auto-refills every 24h · No credit card required)")
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 2: Quota Invariant & Zero 50-Solves Invariant <<<');
  const EXACT_QUOTA_BADGE = '5 Free Solves / Day ($0 · Auto-refills every 24h · No credit card required)';
  for (const r of M2_ROUTES) {
    const content = fs.readFileSync(path.join(ROOT_DIR, r.path), 'utf8');
    assert(`INV2-EXACT-BADGE-${r.slug}`, 'QuotaParity', r.slug, content.includes(EXACT_QUOTA_BADGE), `Contains exact quota badge string: "${EXACT_QUOTA_BADGE}"`);
    assert(`INV2-NO-50-SOLVES-${r.slug}`, 'QuotaParity', r.slug, !content.includes('50 Free Solves'), '0 occurrences of "50 Free Solves"');
  }

  const allSrcFiles = getFilesRecursive(path.join(ROOT_DIR, 'src'), ['.ts', '.tsx', '.js', '.jsx', '.json', '.md']);
  let fiftySolvesOccurrences = 0;
  let useStateFiftyOccurrences = 0;
  for (const f of allSrcFiles) {
    const c = fs.readFileSync(f, 'utf8');
    if (/\b50\s+free\s+solves\b/i.test(c)) {
      fiftySolvesOccurrences++;
      console.error(`Prohibited string in ${path.relative(ROOT_DIR, f)}: "50 Free Solves"`);
    }
    if (/useState\s*(?:<[^>]+>)?\s*\(\s*50\s*\)/.test(c)) {
      useStateFiftyOccurrences++;
      console.error(`Prohibited useState(50) in ${path.relative(ROOT_DIR, f)}`);
    }
  }
  assert('INV2-SRC-NO-50-SOLVES', 'QuotaParity', 'src/', fiftySolvesOccurrences === 0, `0 "50 Free Solves" in src/ (found: ${fiftySolvesOccurrences})`);
  assert('INV2-SRC-NO-USESTATE-50', 'QuotaParity', 'src/', useStateFiftyOccurrences === 0, `0 "useState(50)" in src/ (found: ${useStateFiftyOccurrences})`);

  // -------------------------------------------------------------------------
  // Invariant 3: Pricing Invariant ($19/mo, $99/yr, $199 Lifetime, no "$199 Life")
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 3: Pricing Invariant <<<');
  for (const r of M2_ROUTES) {
    const content = fs.readFileSync(path.join(ROOT_DIR, r.path), 'utf8');
    assert(`INV3-TIER-19-${r.slug}`, 'PricingParity', r.slug, content.includes('$19/mo'), 'Contains exact "$19/mo" tier');
    assert(`INV3-TIER-99-${r.slug}`, 'PricingParity', r.slug, content.includes('$99/yr'), 'Contains exact "$99/yr" tier');
    assert(`INV3-TIER-825-${r.slug}`, 'PricingParity', r.slug, content.includes('$8.25/mo') || content.includes('8.25'), 'Contains "$8.25/mo" annual breakdown');
    assert(`INV3-TIER-199-${r.slug}`, 'PricingParity', r.slug, content.includes('$199 Lifetime'), 'Contains exact "$199 Lifetime" tier');
  }

  let truncatedLifeOccurrences = 0;
  for (const f of allSrcFiles) {
    const c = fs.readFileSync(f, 'utf8');
    const matches = c.match(/\$199\s+Life(?![a-zA-Z])/g);
    if (matches) {
      truncatedLifeOccurrences += matches.length;
      console.error(`Truncated "$199 Life" in ${path.relative(ROOT_DIR, f)}: ${matches.join(', ')}`);
    }
  }
  assert('INV3-NO-TRUNC-LIFE', 'PricingParity', 'src/', truncatedLifeOccurrences === 0, `0 truncated "$199 Life" in src/ (found: ${truncatedLifeOccurrences})`);

  // -------------------------------------------------------------------------
  // Invariant 4: Hotkeys Invariant (All 6 Hotkeys on All 8 Routes)
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 4: Hotkeys Invariant <<<');
  for (const r of M2_ROUTES) {
    const content = fs.readFileSync(path.join(ROOT_DIR, r.path), 'utf8');
    for (const hk of REQUIRED_HOTKEYS) {
      assert(`INV4-HK-${hk}-${r.slug}`, 'HotkeysParity', r.slug, content.includes(hk), `Contains stealth hotkey "${hk}"`);
    }
  }

  // -------------------------------------------------------------------------
  // Invariant 5: Study AI Hub Invariant (<StudyAiHubShowcase compact />)
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 5: Study AI Hub Invariant <<<');
  for (const r of M2_ROUTES) {
    const content = fs.readFileSync(path.join(ROOT_DIR, r.path), 'utf8');
    const importsHub = content.includes('StudyAiHubShowcase');
    const mountsCompactHub = /<StudyAiHubShowcase\s+compact\s*\/?>/.test(content);
    assert(`INV5-HUB-IMP-${r.slug}`, 'StudyHubParity', r.slug, importsHub, 'Imports StudyAiHubShowcase');
    assert(`INV5-HUB-MNT-${r.slug}`, 'StudyHubParity', r.slug, mountsCompactHub, 'Mounts <StudyAiHubShowcase compact />');
  }

  // -------------------------------------------------------------------------
  // Invariant 6: Schema Invariant (Exact 6 Unique Nodes in @graph JSON-LD)
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 6: Schema Invariant (Exact 6-Node @graph JSON-LD) <<<');
  for (const r of M2_ROUTES) {
    const fullPath = path.join(ROOT_DIR, r.path);
    const pageModule = await import(fullPath);
    const PageComponent = typeof pageModule.default === 'function' ? pageModule.default : (pageModule.default?.default || pageModule.default);
    assert(`INV6-MOD-DEF-${r.slug}`, 'SchemaParity', r.slug, typeof PageComponent === 'function', 'Default export is a component function');

    const tree = typeof PageComponent === 'function' ? PageComponent() : null;
    let jsonLdObj: any = null;
    let rawJsonLdStr = '';

    const findScript = (node: any): any => {
      if (!node) return null;
      if (node.type === 'script' && node.props?.type === 'application/ld+json') {
        return node;
      }
      if (node.props?.children) {
        if (Array.isArray(node.props.children)) {
          for (const child of node.props.children) {
            const found = findScript(child);
            if (found) return found;
          }
        } else {
          return findScript(node.props.children);
        }
      }
      return null;
    };

    const scriptNode = findScript(tree);
    assert(`INV6-SCRIPT-TAG-${r.slug}`, 'SchemaParity', r.slug, !!scriptNode, 'Renders <script type="application/ld+json"> tag');

    if (scriptNode) {
      rawJsonLdStr = scriptNode.props?.dangerouslySetInnerHTML?.__html || '';
      let parsedOk = false;
      try {
        jsonLdObj = JSON.parse(rawJsonLdStr);
        parsedOk = true;
      } catch (err: any) {
        parsedOk = false;
        console.error(`JSON-LD Parse Error in ${r.slug}:`, err.message);
      }
      assert(`INV6-JSON-VALID-${r.slug}`, 'SchemaParity', r.slug, parsedOk, 'JSON-LD parses cleanly via JSON.parse');

      if (jsonLdObj) {
        assert(`INV6-CONTEXT-${r.slug}`, 'SchemaParity', r.slug, jsonLdObj['@context'] === 'https://schema.org', '@context is https://schema.org');
        const graph = jsonLdObj['@graph'];
        assert(`INV6-GRAPH-ARR-${r.slug}`, 'SchemaParity', r.slug, Array.isArray(graph), '@graph is an array');
        assert(`INV6-GRAPH-6NODES-${r.slug}`, 'SchemaParity', r.slug, graph?.length === 6, `Exact 6 nodes in @graph (actual: ${graph?.length})`);

        if (Array.isArray(graph)) {
          const typesInGraph = graph.map((n: any) => n['@type']);
          for (const expectedType of EXPECTED_GRAPH_TYPES) {
            assert(`INV6-NODE-${expectedType}-${r.slug}`, 'SchemaParity', r.slug, typesInGraph.includes(expectedType), `Contains @type: ${expectedType} node`);
          }

          // Check for duplicate @id
          const idsWithVal = graph.map((n: any) => n['@id']).filter(Boolean);
          const duplicateIds = idsWithVal.filter((id: string, idx: number) => idsWithVal.indexOf(id) !== idx);
          assert(`INV6-UNIQUE-IDS-${r.slug}`, 'SchemaParity', r.slug, duplicateIds.length === 0, `No duplicate @id in @graph (duplicates: ${duplicateIds.join(', ')})`);

          // 1. WebPage node check
          const webPageNode = graph.find((n: any) => n['@type'] === 'WebPage');
          if (webPageNode) {
            assert(`INV6-WEBPAGE-SPEAK-${r.slug}`, 'SchemaParity', r.slug, !!webPageNode.speakable?.cssSelector, 'WebPage includes speakable.cssSelector');
            assert(`INV6-WEBPAGE-URL-${r.slug}`, 'SchemaParity', r.slug, webPageNode.url === `https://examghost.com/${r.slug}`, `WebPage.url matches canonical: ${webPageNode.url}`);
          }

          // 2. SoftwareApplication node check (4 tiered offers)
          const softAppNode = graph.find((n: any) => n['@type'] === 'SoftwareApplication');
          if (softAppNode) {
            const aggOffer = softAppNode.offers;
            assert(`INV6-SOFTAPP-AGGOFFER-${r.slug}`, 'SchemaParity', r.slug, aggOffer?.['@type'] === 'AggregateOffer', 'SoftwareApplication has AggregateOffer');
            assert(`INV6-SOFTAPP-OFFERCOUNT-${r.slug}`, 'SchemaParity', r.slug, String(aggOffer?.offerCount) === '4', `Offer count is 4 (actual: ${aggOffer?.offerCount})`);
            const subOffers = aggOffer?.offers;
            assert(`INV6-SOFTAPP-4OFFERS-${r.slug}`, 'SchemaParity', r.slug, Array.isArray(subOffers) && subOffers.length === 4, `Contains 4 offer entries (actual: ${subOffers?.length})`);
            if (Array.isArray(subOffers)) {
              const prices = subOffers.map((o: any) => o.price);
              assert(`INV6-OFFER-PRICES-${r.slug}`, 'SchemaParity', r.slug, prices.includes('0.00') && prices.includes('19.00') && prices.includes('99.00') && prices.includes('199.00'), `Offers cover $0, $19, $99, $199 (found: ${prices.join(', ')})`);
            }
          }

          // 3. BreadcrumbList node check
          const breadcrumbNode = graph.find((n: any) => n['@type'] === 'BreadcrumbList');
          if (breadcrumbNode) {
            const items = breadcrumbNode.itemListElement;
            assert(`INV6-BREADCRUMB-LEN-${r.slug}`, 'SchemaParity', r.slug, Array.isArray(items) && items.length >= 3, `Breadcrumb has >= 3 items (actual: ${items?.length})`);
          }

          // 4. FAQPage node check
          const faqNode = graph.find((n: any) => n['@type'] === 'FAQPage');
          if (faqNode) {
            const faqs = faqNode.mainEntity;
            assert(`INV6-FAQ-LEN-${r.slug}`, 'SchemaParity', r.slug, Array.isArray(faqs) && faqs.length >= 4, `FAQPage has >= 4 questions (actual: ${faqs?.length})`);
          }

          // 5. VideoObject node check
          const videoNode = graph.find((n: any) => n['@type'] === 'VideoObject');
          if (videoNode) {
            assert(`INV6-VIDEO-CONTENTURL-${r.slug}`, 'SchemaParity', r.slug, videoNode.contentUrl === `https://examghost.com/videos/${r.slug}.mp4`, `VideoObject contentUrl matches video CDN: ${videoNode.contentUrl}`);
            assert(`INV6-VIDEO-THUMBNAIL-${r.slug}`, 'SchemaParity', r.slug, Array.isArray(videoNode.thumbnailUrl) && videoNode.thumbnailUrl.length > 0, 'VideoObject contains thumbnailUrl');
          }

          // 6. HowTo node check
          const howToNode = graph.find((n: any) => n['@type'] === 'HowTo');
          if (howToNode) {
            const steps = howToNode.step;
            assert(`INV6-HOWTO-STEPS-${r.slug}`, 'SchemaParity', r.slug, Array.isArray(steps) && steps.length >= 4, `HowTo has >= 4 steps (actual: ${steps?.length})`);
          }
        }
      }
    }
  }

  // -------------------------------------------------------------------------
  // Invariant 7: SEO Invariant (Title strictly 45-65 chars; Description strictly 135-160 chars)
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 7: SEO Invariant (Title 45-65, Description 135-160) <<<');
  for (const r of M2_ROUTES) {
    const fullPath = path.join(ROOT_DIR, r.path);
    const pageModule = await import(fullPath);
    const metadata = pageModule.metadata || pageModule.default?.metadata;
    assert(`INV7-META-EXIST-${r.slug}`, 'SEOBounds', r.slug, !!metadata, 'Exports metadata object');

    let resolvedTitle = '';
    if (typeof metadata?.title === 'string') {
      resolvedTitle = metadata.title;
    } else if (metadata?.title && typeof metadata.title === 'object') {
      resolvedTitle = metadata.title.absolute || metadata.title.default || '';
    }

    let resolvedDesc = metadata?.description ? String(metadata.description).replace(/\s+/g, ' ').trim() : '';

    const titleLen = resolvedTitle.length;
    const descLen = resolvedDesc.length;

    assert(
      `INV7-TITLE-LEN-${r.slug}`,
      'SEOBounds',
      r.slug,
      titleLen >= 45 && titleLen <= 65,
      `Title length in [45, 65] (actual: ${titleLen}): "${resolvedTitle}"`
    );

    assert(
      `INV7-DESC-LEN-${r.slug}`,
      'SEOBounds',
      r.slug,
      descLen >= 135 && descLen <= 160,
      `Description length in [135, 160] (actual: ${descLen}): "${resolvedDesc}"`
    );

    // Canonical link check
    assert(
      `INV7-CANONICAL-${r.slug}`,
      'SEOBounds',
      r.slug,
      metadata?.alternates?.canonical === `https://examghost.com/${r.slug}`,
      `Canonical URL is https://examghost.com/${r.slug}`
    );
  }

  // -------------------------------------------------------------------------
  // Invariant 8: Footer Navigation Invariant (All 20 Platform Links)
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 8: Footer Navigation Invariant <<<');
  const footerPath = path.join(ROOT_DIR, 'src/components/Footer.tsx');
  assert('INV8-FOOTER-EXIST', 'FooterLinks', 'Footer.tsx', fs.existsSync(footerPath), 'Footer.tsx exists');
  const footerContent = fs.readFileSync(footerPath, 'utf8');

  // Verify "Quiz Solvers by Platform" header
  assert('INV8-FOOTER-HEADER', 'FooterLinks', 'Footer.tsx', footerContent.includes('Quiz Solvers by Platform'), 'Footer has "Quiz Solvers by Platform" section');

  // Verify all 20 platform links exist
  for (const href of ALL_20_PLATFORM_HREFS) {
    const hasHref = footerContent.includes(`'${href}'`) || footerContent.includes(`"${href}"`);
    assert(`INV8-FOOTER-LINK-${href}`, 'FooterLinks', href, hasHref, `Footer links to "${href}"`);
  }

  // Verify all 8 new platform links specifically exist in Footer
  for (const r of M2_ROUTES) {
    const hasHref = footerContent.includes(`'/${r.slug}'`) || footerContent.includes(`"/${r.slug}"`);
    assert(`INV8-FOOTER-NEW-${r.slug}`, 'FooterLinks', r.slug, hasHref, `Footer includes new platform route "/${r.slug}"`);
  }

  // -------------------------------------------------------------------------
  // Invariant 9: Sitemap Invariant (All 22 LMS & STEM Slugs)
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 9: Sitemap Invariant <<<');
  const sitemapPath = path.join(ROOT_DIR, 'src/app/sitemap.ts');
  assert('INV9-SITEMAP-EXIST', 'Sitemap', 'sitemap.ts', fs.existsSync(sitemapPath), 'sitemap.ts exists');
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

  // Check file text contains each slug
  for (const slug of ALL_22_LMS_SLUGS) {
    const hasSlug = sitemapContent.includes(`'${slug}'`) || sitemapContent.includes(`"${slug}"`);
    assert(`INV9-SITEMAP-SLUG-${slug}`, 'Sitemap', slug, hasSlug, `sitemap.ts registers slug "${slug}"`);
  }

  // Dynamic execution check: run sitemap() function
  const sitemapModule = await import(sitemapPath);
  const sitemapFn = sitemapModule.default;
  assert('INV9-SITEMAP-FN', 'Sitemap', 'sitemap.ts', typeof sitemapFn === 'function', 'sitemap.ts default export is a function');

  if (typeof sitemapFn === 'function') {
    const sitemapEntries = sitemapFn();
    assert('INV9-SITEMAP-ARR', 'Sitemap', 'sitemap.ts', Array.isArray(sitemapEntries), 'sitemap() returns an array');
    const sitemapUrls = sitemapEntries.map((e: any) => e.url);

    for (const slug of ALL_22_LMS_SLUGS) {
      const expectedUrl = `https://examghost.com/${slug}`;
      const entry = sitemapEntries.find((e: any) => e.url === expectedUrl);
      assert(`INV9-SITEMAP-ENTRY-${slug}`, 'Sitemap', slug, !!entry, `Sitemap output includes entry for "${expectedUrl}"`);
      if (entry) {
        assert(`INV9-SITEMAP-FREQ-${slug}`, 'Sitemap', slug, entry.changeFrequency === 'weekly', `Entry changeFrequency is weekly (actual: ${entry.changeFrequency})`);
        assert(`INV9-SITEMAP-PRIO-${slug}`, 'Sitemap', slug, entry.priority === 0.9, `Entry priority is 0.9 (actual: ${entry.priority})`);
      }
    }
  }

  // -------------------------------------------------------------------------
  // Invariant 10: Motion Demos Invariant (NewPlatformMotionDemos.tsx Structure & Wiring)
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 10: Motion Demos Invariant <<<');
  const demosModulePath = path.join(ROOT_DIR, 'src/components/NewPlatformMotionDemos.tsx');
  assert('INV10-DEMOS-EXIST', 'MotionDemos', 'NewPlatformMotionDemos.tsx', fs.existsSync(demosModulePath), 'NewPlatformMotionDemos.tsx exists');

  const demosModule = await import(demosModulePath);
  for (const r of M2_ROUTES) {
    // 1. Check export exists
    const DemoComponent = (demosModule as any)[r.demoExport];
    assert(`INV10-DEMO-EXP-${r.demoExport}`, 'MotionDemos', r.demoExport, typeof DemoComponent === 'function', `Exports component "${r.demoExport}"`);

    // 2. Check route mounts its corresponding demo
    const routeContent = fs.readFileSync(path.join(ROOT_DIR, r.path), 'utf8');
    assert(`INV10-ROUTE-MOUNTS-${r.slug}`, 'MotionDemos', r.slug, routeContent.includes(r.demoExport), `Route ${r.slug} imports & mounts <${r.demoExport} />`);

    // 3. Inspect demo component output & configuration
    if (typeof DemoComponent === 'function') {
      const demoElement = DemoComponent();
      const config = demoElement?.props?.config;
      assert(`INV10-CONFIG-${r.demoExport}`, 'MotionDemos', r.demoExport, !!config, 'Demo renders BasePlatformMotionDemo with config prop');

      if (config) {
        // Scenes
        assert(`INV10-3SCENES-${r.demoExport}`, 'MotionDemos', r.demoExport, Array.isArray(config.scenes) && config.scenes.length === 3, `Demo config has exactly 3 scenes (actual: ${config.scenes?.length})`);
        
        // Scene 0: Failure banner & stopwatch
        assert(`INV10-SCENE0-BANNER-${r.demoExport}`, 'MotionDemos', r.demoExport, !!config.scene0?.failureBanner?.title, 'Scene 0 includes failure banner title');
        assert(`INV10-SCENE0-STOPWATCH-${r.demoExport}`, 'MotionDemos', r.demoExport, typeof config.scene0?.stopwatchSec === 'number' && config.scene0.stopwatchSec > 0, `Scene 0 has stopwatchSec (${config.scene0?.stopwatchSec}s)`);

        // Scene 1: ExamGhost 0.3s HUD
        assert(`INV10-SCENE1-HUD-${r.demoExport}`, 'MotionDemos', r.demoExport, !!config.scene1?.hudText, 'Scene 1 includes stealth HUD solve text');
        assert(`INV10-SCENE1-CORRECT-${r.demoExport}`, 'MotionDemos', r.demoExport, Array.isArray(config.scene1?.options) && config.scene1.options.some((o: any) => o.isCorrectSelected), 'Scene 1 has option marked with isCorrectSelected');

        // Scene 2: Multi-model derivations
        const s2 = config.scene2;
        assert(`INV10-SCENE2-CLAUDE-${r.demoExport}`, 'MotionDemos', r.demoExport, !!s2?.claudeDerivation, 'Scene 2 includes Claude 3.7 Sonnet derivation');
        assert(`INV10-SCENE2-CHATGPT-${r.demoExport}`, 'MotionDemos', r.demoExport, !!s2?.chatgptDerivation, 'Scene 2 includes ChatGPT reasoning derivation');
        assert(`INV10-SCENE2-DEEPSEEK-${r.demoExport}`, 'MotionDemos', r.demoExport, !!s2?.deepseekDerivation, 'Scene 2 includes DeepSeek-R1 CAS derivation');
      }

      // 4. Demo SSR render check
      let demoHtml = '';
      let demoRenderOk = false;
      try {
        demoHtml = ReactDOMServer.renderToString(React.createElement(DemoComponent));
        demoRenderOk = true;
      } catch (err: any) {
        demoRenderOk = false;
        console.error(`Demo render failed: ${r.demoExport}`, err.message);
      }
      assert(`INV10-DEMO-SSR-${r.demoExport}`, 'MotionDemos', r.demoExport, demoRenderOk && demoHtml.length > 500, `Demo SSR renders cleanly (${demoHtml.length} bytes)`);
    }
  }

  // -------------------------------------------------------------------------
  // Invariant 11: SSR Execution & HTML Leak Audit across all 8 Routes
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 11: SSR Render & HTML Leak Detection <<<');
  for (const r of M2_ROUTES) {
    const fullPath = path.join(ROOT_DIR, r.path);
    const pageModule = await import(fullPath);
    const PageComponent = typeof pageModule.default === 'function' ? pageModule.default : (pageModule.default?.default || pageModule.default);

    let renderedHtml = '';
    let ssrOk = false;
    try {
      renderedHtml = ReactDOMServer.renderToString(React.createElement(PageComponent));
      ssrOk = true;
    } catch (err: any) {
      ssrOk = false;
      console.error(`SSR Render Failure on ${r.slug}:`, err.message);
    }
    assert(`INV11-SSR-${r.slug}`, 'SSRIntegrity', r.slug, ssrOk && renderedHtml.length > 5000, `SSR renders cleanly (${renderedHtml.length} bytes)`);

    const leaks = detectHtmlLeaks(renderedHtml);
    assert(`INV11-NO-LEAKS-${r.slug}`, 'SSRIntegrity', r.slug, leaks.length === 0, 'Zero HTML leaks (NaN, undefined, null, [object Object])', leaks.join('; '));
  }

  // -------------------------------------------------------------------------
  // Summary & Exit
  // -------------------------------------------------------------------------
  console.log('\n========================================================================');
  console.log(`TOTAL CHECKS: ${passCount + failCount} | PASSED: ${passCount} | FAILED: ${failCount}`);
  console.log('========================================================================');

  return { passCount, failCount, records };
}

runAdversarialM2StressTests().then(({ failCount }) => {
  if (failCount === 0) {
    console.log('\n>>> EMPIRICAL CHALLENGE VERDICT: ALL INVARIANTS RIGIDLY VERIFIED. ZERO BUGS FOUND. <<<');
    process.exit(0);
  } else {
    console.error(`\n>>> EMPIRICAL CHALLENGE VERDICT: CHALLENGE FAILED WITH ${failCount} DEFECTS! <<<`);
    process.exit(1);
  }
}).catch((err) => {
  console.error('Fatal harness crash:', err);
  process.exit(1);
});
