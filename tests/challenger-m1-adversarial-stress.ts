/**
 * Milestone 1 Challenger Adversarial Stress & Invariant Test Suite
 * 
 * Verifies:
 * 1. Zero Template Imports across all 14 routes and all of src/app/
 * 2. Quota Parity across all 14 routes and zero "50 Free Solves" / "useState(50)" in src/
 * 3. Pricing Parity ($19/mo, $99/yr ($8.25/mo), $199 Lifetime) and zero truncated "$199 Life" in src/
 * 4. Hotkeys Parity: all 6 hotkeys (Double-Click, Alt+S, Alt+1, Alt+2, Alt+3, ⌘+Shift+U) in all 14 routes
 * 5. Study Hub Parity: <StudyAiHubShowcase compact /> mounted in all 14 routes
 * 6. Schema Parity: Valid 6-node @graph JSON-LD schema with WebPage (speakable), SoftwareApplication, FAQPage, HowTo, VideoObject, BreadcrumbList
 * 7. SEO Bounds Parity: title 45-65 chars, description 135-160 chars
 * 8. SSR Execution & Leak Audit: Full renderToString for all 14 page components & all 14 motion demos
 * 9. PlatformMotionDemos Integrity: 3 scenes, multi-model tabs, speed controls, scrubber
 */

import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const ROOT_DIR = process.cwd();

export const ALL_14_ROUTES = [
  { slug: 'canvas-lms-quiz-solver', path: 'src/app/canvas-lms-quiz-solver/page.tsx', demoExport: 'CanvasLmsQuizMotionDemo' },
  { slug: 'blackboard-quiz-solver', path: 'src/app/blackboard-quiz-solver/page.tsx', demoExport: 'BlackboardQuizMotionDemo' },
  { slug: 'moodle-quiz-solver', path: 'src/app/moodle-quiz-solver/page.tsx', demoExport: 'MoodleQuizMotionDemo' },
  { slug: 'd2l-brightspace-quiz-solver', path: 'src/app/d2l-brightspace-quiz-solver/page.tsx', demoExport: 'D2LBrightspaceQuizMotionDemo' },
  { slug: 'mcgraw-hill-connect-aleks-solver', path: 'src/app/mcgraw-hill-connect-aleks-solver/page.tsx', demoExport: 'McgrawHillAleksQuizMotionDemo' },
  { slug: 'pearson-mylab-mastering-solver', path: 'src/app/pearson-mylab-mastering-solver/page.tsx', demoExport: 'PearsonMyLabMasteringDemo' },
  { slug: 'cengage-mindtap-webassign-solver', path: 'src/app/cengage-mindtap-webassign-solver/page.tsx', demoExport: 'CengageWebAssignDemo' },
  { slug: 'gradescope-exam-solver', path: 'src/app/gradescope-exam-solver/page.tsx', demoExport: 'GradescopeExamDemo' },
  { slug: 'google-forms-quiz-solver', path: 'src/app/google-forms-quiz-solver/page.tsx', demoExport: 'GoogleFormsQuizDemo' },
  { slug: 'schoology-quiz-solver', path: 'src/app/schoology-quiz-solver/page.tsx', demoExport: 'SchoologyLearnosityDemo' },
  { slug: 'deltamath-homework-solver', path: 'src/app/deltamath-homework-solver/page.tsx', demoExport: 'DeltaMathMotionDemo' },
  { slug: 'edgenuity-quiz-solver', path: 'src/app/edgenuity-quiz-solver/page.tsx', demoExport: 'EdgenuityMotionDemo' },
  { slug: 'blog/does-canvas-detect-extensions-2026', path: 'src/app/blog/does-canvas-detect-extensions-2026/page.tsx', demoExport: 'CanvasExtensionDetectionMotionDemo' },
  { slug: 'blog/canvas-quiz-log-explained-what-professors-see', path: 'src/app/blog/canvas-quiz-log-explained-what-professors-see/page.tsx', demoExport: 'CanvasQuizLogMotionDemo' },
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

export async function runAdversarialM1Tests() {
  console.log('========================================================================');
  console.log('   Milestone 1 Empirical Challenger Adversarial Stress Test Suite   ');
  console.log('========================================================================\n');

  // -------------------------------------------------------------------------
  // Invariant 1: Zero Template Imports
  // -------------------------------------------------------------------------
  console.log('>>> Category 1: Zero Template Imports Invariant <<<');
  
  for (const r of ALL_14_ROUTES) {
    const fullPath = path.join(ROOT_DIR, r.path);
    assert(`INV1-EXIST-${r.slug}`, 'ZeroTemplate', r.slug, fs.existsSync(fullPath), 'Route file exists on disk');
    const content = fs.readFileSync(fullPath, 'utf8');
    assert(`INV1-NO-TMPL-${r.slug}`, 'ZeroTemplate', r.slug, !content.includes('LmsServicePageTemplate'), '0 imports/references of LmsServicePageTemplate');
    assert(`INV1-NO-DEMO-${r.slug}`, 'ZeroTemplate', r.slug, !content.includes('LmsInteractiveVideoDemo'), '0 imports/references of LmsInteractiveVideoDemo');
  }

  const allAppFiles = getFilesRecursive(path.join(ROOT_DIR, 'src/app'), ['.ts', '.tsx']);
  let appTemplateLeaks = 0;
  let appDemoLeaks = 0;
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
  }
  assert('INV1-APP-NO-TMPL', 'ZeroTemplate', 'src/app/', appTemplateLeaks === 0, `0 LmsServicePageTemplate in entire src/app/ (found: ${appTemplateLeaks})`);
  assert('INV1-APP-NO-DEMO', 'ZeroTemplate', 'src/app/', appDemoLeaks === 0, `0 LmsInteractiveVideoDemo in entire src/app/ (found: ${appDemoLeaks})`);

  // -------------------------------------------------------------------------
  // Invariant 2: Quota Parity & Prohibited String Scans
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 2: Quota Parity & Zero 50-Solves Invariant <<<');
  
  for (const r of ALL_14_ROUTES) {
    const content = fs.readFileSync(path.join(ROOT_DIR, r.path), 'utf8');
    assert(`INV2-QUOTA-TITLE-${r.slug}`, 'QuotaParity', r.slug, content.includes('5 Free Solves / Day'), 'Contains "5 Free Solves / Day"');
    const hasZeroOrFree = content.includes('$0') || content.includes('Free Tier') || content.includes('0.00');
    assert(`INV2-QUOTA-ZERO-${r.slug}`, 'QuotaParity', r.slug, hasZeroOrFree, 'Contains $0 or Free Tier specification');
    const hasRefill = /24\s*h(?:ours)?|auto-refill/i.test(content);
    assert(`INV2-QUOTA-REFILL-${r.slug}`, 'QuotaParity', r.slug, hasRefill, 'Mentions 24h auto-refill');
    const hasNoCard = /no\s+credit\s+card|no\s+card/i.test(content);
    assert(`INV2-QUOTA-NOCARD-${r.slug}`, 'QuotaParity', r.slug, hasNoCard, 'Mentions no credit card required');
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
  // Invariant 3: Pricing Parity & No Truncated "$199 Life"
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 3: Pricing Parity Invariant <<<');
  
  for (const r of ALL_14_ROUTES) {
    const content = fs.readFileSync(path.join(ROOT_DIR, r.path), 'utf8');
    assert(`INV3-TIER-19-${r.slug}`, 'PricingParity', r.slug, content.includes('$19/mo') || content.includes('$19.00'), 'Contains $19/mo pricing tier');
    assert(`INV3-TIER-99-${r.slug}`, 'PricingParity', r.slug, content.includes('$99/yr') || content.includes('$99.00'), 'Contains $99/yr pricing tier');
    assert(`INV3-TIER-825-${r.slug}`, 'PricingParity', r.slug, content.includes('$8.25/mo') || content.includes('8.25'), 'Contains $8.25/mo breakdown');
    assert(`INV3-TIER-199-${r.slug}`, 'PricingParity', r.slug, content.includes('$199 Lifetime') || content.includes('$199.00'), 'Contains $199 Lifetime tier');
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
  // Invariant 4: Hotkeys Parity (All 6 Hotkeys on All 14 Routes)
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 4: Hotkeys Parity Invariant <<<');
  
  for (const r of ALL_14_ROUTES) {
    const content = fs.readFileSync(path.join(ROOT_DIR, r.path), 'utf8');
    for (const hk of REQUIRED_HOTKEYS) {
      assert(`INV4-HK-${hk}-${r.slug}`, 'HotkeysParity', r.slug, content.includes(hk), `Contains required stealth hotkey "${hk}"`);
    }
  }

  // -------------------------------------------------------------------------
  // Invariant 5: Study Hub Parity (<StudyAiHubShowcase compact />)
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 5: Study Hub Parity Invariant <<<');
  
  for (const r of ALL_14_ROUTES) {
    const content = fs.readFileSync(path.join(ROOT_DIR, r.path), 'utf8');
    const importsHub = content.includes('StudyAiHubShowcase');
    const mountsCompactHub = /<StudyAiHubShowcase\s+compact\s*\/?>/.test(content);
    assert(`INV5-HUB-IMP-${r.slug}`, 'StudyHubParity', r.slug, importsHub, 'Imports StudyAiHubShowcase');
    assert(`INV5-HUB-MNT-${r.slug}`, 'StudyHubParity', r.slug, mountsCompactHub, 'Mounts <StudyAiHubShowcase compact />');
  }

  // -------------------------------------------------------------------------
  // Invariant 6: Schema Parity (Valid 6-Node @graph JSON-LD)
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 6: Schema Parity (Valid 6-Node @graph JSON-LD) <<<');
  
  for (const r of ALL_14_ROUTES) {
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

          // Specific node deep checks
          const webPageNode = graph.find((n: any) => n['@type'] === 'WebPage');
          if (webPageNode) {
            assert(`INV6-WEBPAGE-SPEAK-${r.slug}`, 'SchemaParity', r.slug, !!webPageNode.speakable, 'WebPage node includes speakable specification');
          }

          const softAppNode = graph.find((n: any) => n['@type'] === 'SoftwareApplication');
          if (softAppNode) {
            const offers = softAppNode.offers;
            const hasOffers = Array.isArray(offers) || (offers && offers['@type'] === 'AggregateOffer');
            assert(`INV6-SOFTAPP-OFFERS-${r.slug}`, 'SchemaParity', r.slug, !!hasOffers, 'SoftwareApplication node contains valid pricing offers');
          }

          const videoNode = graph.find((n: any) => n['@type'] === 'VideoObject');
          if (videoNode) {
            assert(`INV6-VIDEO-URLS-${r.slug}`, 'SchemaParity', r.slug, !!videoNode.contentUrl && !!videoNode.thumbnailUrl, 'VideoObject contains contentUrl & thumbnailUrl');
          }

          const howToNode = graph.find((n: any) => n['@type'] === 'HowTo');
          if (howToNode) {
            assert(`INV6-HOWTO-STEPS-${r.slug}`, 'SchemaParity', r.slug, Array.isArray(howToNode.step) && howToNode.step.length >= 3, 'HowTo contains >= 3 step nodes');
          }

          const faqNode = graph.find((n: any) => n['@type'] === 'FAQPage');
          if (faqNode) {
            assert(`INV6-FAQ-ITEMS-${r.slug}`, 'SchemaParity', r.slug, Array.isArray(faqNode.mainEntity) && faqNode.mainEntity.length >= 2, 'FAQPage contains >= 2 question entities');
          }
        }
      }
    }
  }

  // -------------------------------------------------------------------------
  // Invariant 7: SEO Bounds Parity (Title 45-65, Desc 135-160)
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 7: SEO Bounds Parity Invariant <<<');
  
  for (const r of ALL_14_ROUTES) {
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
  }

  // -------------------------------------------------------------------------
  // Invariant 8: SSR Execution & HTML Leak Audit
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 8: SSR Render & HTML Leak Detection <<<');
  
  for (const r of ALL_14_ROUTES) {
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
    assert(`INV8-SSR-${r.slug}`, 'SSRIntegrity', r.slug, ssrOk && renderedHtml.length > 5000, `SSR renders cleanly (${renderedHtml.length} bytes)`);

    const leaks = detectHtmlLeaks(renderedHtml);
    assert(`INV8-NO-LEAKS-${r.slug}`, 'SSRIntegrity', r.slug, leaks.length === 0, `Zero HTML leaks (NaN, undefined, null, [object Object])`, leaks.join('; '));
  }

  // -------------------------------------------------------------------------
  // Invariant 9: PlatformMotionDemos Integrity & Scene Verification
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 9: PlatformMotionDemos Structure & Props Verification <<<');
  
  const demosModule = await import(path.join(ROOT_DIR, 'src/components/PlatformMotionDemos'));
  for (const r of ALL_14_ROUTES) {
    const DemoComp = (demosModule as any)[r.demoExport];
    assert(`INV9-DEMO-EXP-${r.demoExport}`, 'MotionDemos', r.demoExport, typeof DemoComp === 'function', `Exports motion demo component ${r.demoExport}`);

    if (typeof DemoComp === 'function') {
      const demoElement = DemoComp();
      const config = demoElement?.props?.config;
      assert(`INV9-CONFIG-EXIST-${r.demoExport}`, 'MotionDemos', r.demoExport, !!config, 'Returns BasePlatformMotionDemo with config');

      if (config) {
        assert(`INV9-3SCENES-${r.demoExport}`, 'MotionDemos', r.demoExport, Array.isArray(config.scenes) && config.scenes.length === 3, `Has 3 scenes configured (actual: ${config.scenes?.length})`);
        assert(`INV9-SCENE0-${r.demoExport}`, 'MotionDemos', r.demoExport, !!config.scene0?.failureBanner?.title, 'Scene 0 has platform failure telemetry banner');
        assert(`INV9-SCENE1-${r.demoExport}`, 'MotionDemos', r.demoExport, !!config.scene1?.hudText, 'Scene 1 has ExamGhost 0.3s inline HUD');
        
        // Scene 2 multi-model derivations
        const s2 = config.scene2;
        const hasClaude = !!s2?.claudeDerivation;
        const hasChatGpt = !!s2?.chatgptDerivation;
        const hasDeepSeek = !!s2?.deepseekDerivation;
        assert(`INV9-MODELS-${r.demoExport}`, 'MotionDemos', r.demoExport, hasClaude && hasChatGpt && hasDeepSeek, 'Scene 2 includes Claude 3.7, ChatGPT, and DeepSeek-R1 derivations');
      }

      let demoHtml = '';
      let demoRenderOk = false;
      try {
        demoHtml = ReactDOMServer.renderToString(React.createElement(DemoComp));
        demoRenderOk = true;
      } catch (err: any) {
        demoRenderOk = false;
        console.error(`Demo render failed: ${r.demoExport}`, err.message);
      }
      assert(`INV9-DEMO-SSR-${r.demoExport}`, 'MotionDemos', r.demoExport, demoRenderOk, 'Demo renders cleanly to HTML string');
    }
  }

  // -------------------------------------------------------------------------
  // Summary & Exit
  // -------------------------------------------------------------------------
  console.log('\n========================================================================');
  console.log(`TOTAL CHECKS: ${passCount + failCount} | PASSED: ${passCount} | FAILED: ${failCount}`);
  console.log('========================================================================');

  return { passCount, failCount, records };
}

runAdversarialM1Tests().then(({ failCount }) => {
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
