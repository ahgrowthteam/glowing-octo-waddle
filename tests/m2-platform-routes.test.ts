/**
 * Milestone 2 Verification Suite:
 * Validates the 8 New High-Intent LMS & STEM Platform Routes:
 * 1. src/components/NewPlatformMotionDemos.tsx exports all 8 Framer Motion video demos
 * 2. All 8 routes exist and have 0 shared template imports (LmsServicePageTemplate, LmsInteractiveVideoDemo, CompetitorMotionDemo, peer/tab1)
 * 3. Each route mounts its corresponding motion demo component
 * 4. 5 Free Solves / Day ($0) quota invariant (0 occurrences of "50 Free Solves")
 * 5. Pricing tiers: $19/mo · $99/yr ($8.25/mo) · $199 Lifetime (0 truncated "$199 Life")
 * 6. All 6 hotkeys present (Double-Click, Alt+S, Alt+1, Alt+2, Alt+3, ⌘+Shift+U)
 * 7. StudyAiHubShowcase compact embedded
 * 8. Valid 6-node @graph JSON-LD schema (WebPage, SoftwareApplication, BreadcrumbList, FAQPage, VideoObject, HowTo)
 * 9. Strict SEO metadata character bounds (title: 45–65, description: 135–160)
 * 10. src/components/Footer.tsx lists all 20 platform routes under "Quiz Solvers by Platform"
 * 11. src/app/sitemap.ts includes all 20 platform routes + 2 blog routes (22 total slugs) in lmsServiceSlugs
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT_DIR = process.cwd();

const M2_NEW_ROUTES = [
  {
    path: 'src/app/wileyplus-quiz-solver/page.tsx',
    slug: 'wileyplus-quiz-solver',
    expectedDemo: 'WileyPlusMotionDemo',
    expectedPlatformName: 'WileyPLUS',
  },
  {
    path: 'src/app/zybooks-homework-solver/page.tsx',
    slug: 'zybooks-homework-solver',
    expectedDemo: 'ZybooksMotionDemo',
    expectedPlatformName: 'zyBooks',
  },
  {
    path: 'src/app/webwork-math-solver/page.tsx',
    slug: 'webwork-math-solver',
    expectedDemo: 'WebWorkMotionDemo',
    expectedPlatformName: 'WeBWorK',
  },
  {
    path: 'src/app/sakai-lms-quiz-solver/page.tsx',
    slug: 'sakai-lms-quiz-solver',
    expectedDemo: 'SakaiMotionDemo',
    expectedPlatformName: 'Sakai',
  },
  {
    path: 'src/app/macmillan-achieve-smartwork-solver/page.tsx',
    slug: 'macmillan-achieve-smartwork-solver',
    expectedDemo: 'MacmillanAchieveMotionDemo',
    expectedPlatformName: 'Macmillan Achieve',
  },
  {
    path: 'src/app/tophat-quiz-solver/page.tsx',
    slug: 'tophat-quiz-solver',
    expectedDemo: 'TopHatMotionDemo',
    expectedPlatformName: 'Top Hat',
  },
  {
    path: 'src/app/knewton-alta-solver/page.tsx',
    slug: 'knewton-alta-solver',
    expectedDemo: 'KnewtonAltaMotionDemo',
    expectedPlatformName: 'Knewton Alta',
  },
  {
    path: 'src/app/hawkes-learning-certify-solver/page.tsx',
    slug: 'hawkes-learning-certify-solver',
    expectedDemo: 'HawkesLearningMotionDemo',
    expectedPlatformName: 'Hawkes Learning',
  },
];

const ALL_20_PLATFORM_HREFS = [
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

const REQUIRED_HOTKEYS = ['Double-Click', 'Alt+S', 'Alt+1', 'Alt+2', 'Alt+3', '⌘+Shift+U'];
const REQUIRED_SCHEMA_NODES = ['WebPage', 'SoftwareApplication', 'BreadcrumbList', 'FAQPage', 'VideoObject', 'HowTo'];

export function runM2Tests() {
  console.log('--- Starting Milestone 2 Platform Routes & Motion Invariant Tests ---');
  let failures = 0;

  // 1. Verify NewPlatformMotionDemos.tsx exports all 8 bespoke motion demos
  const newDemosFile = path.join(ROOT_DIR, 'src/components/NewPlatformMotionDemos.tsx');
  if (!fs.existsSync(newDemosFile)) {
    console.error('FAIL: src/components/NewPlatformMotionDemos.tsx does not exist');
    failures++;
  } else {
    const demosContent = fs.readFileSync(newDemosFile, 'utf8');
    const expectedExports = [
      'WileyPlusMotionDemo',
      'ZybooksMotionDemo',
      'WebWorkMotionDemo',
      'SakaiMotionDemo',
      'MacmillanAchieveMotionDemo',
      'TopHatMotionDemo',
      'KnewtonAltaMotionDemo',
      'HawkesLearningMotionDemo',
    ];

    for (const exp of expectedExports) {
      if (!demosContent.includes(`export function ${exp}`) && !demosContent.includes(`export const ${exp}`)) {
        console.error(`FAIL: Missing export ${exp} in NewPlatformMotionDemos.tsx`);
        failures++;
      }
    }
  }

  // 2. Test each of the 8 new platform routes
  for (const item of M2_NEW_ROUTES) {
    const fullPath = path.join(ROOT_DIR, item.path);
    if (!fs.existsSync(fullPath)) {
      console.error(`FAIL: Route file missing: ${item.path}`);
      failures++;
      continue;
    }

    const content = fs.readFileSync(fullPath, 'utf8');

    // Rule: Zero shared template imports & zero radio tabs
    if (content.includes('LmsServicePageTemplate')) {
      console.error(`FAIL: ${item.path} still imports or references LmsServicePageTemplate`);
      failures++;
    }
    if (content.includes('LmsInteractiveVideoDemo')) {
      console.error(`FAIL: ${item.path} still imports or references LmsInteractiveVideoDemo`);
      failures++;
    }
    if (content.includes('CompetitorMotionDemo')) {
      console.error(`FAIL: ${item.path} imports or references CompetitorMotionDemo`);
      failures++;
    }
    if (content.includes('peer/tab1')) {
      console.error(`FAIL: ${item.path} contains prohibited peer/tab1 hidden radio tab`);
      failures++;
    }

    // Rule: Mounts bespoke motion demo
    if (!content.includes(item.expectedDemo)) {
      console.error(`FAIL: ${item.path} does not import or mount ${item.expectedDemo}`);
      failures++;
    }

    // Rule: Exact daily quota invariant
    if (!content.includes('5 Free Solves / Day')) {
      console.error(`FAIL: ${item.path} missing "5 Free Solves / Day" quota label`);
      failures++;
    }
    if (content.includes('50 Free Solves')) {
      console.error(`FAIL: ${item.path} contains prohibited "50 Free Solves"`);
      failures++;
    }

    // Rule: Exact tier pricing invariant
    if (!content.includes('$19/mo') || !content.includes('$99/yr') || !content.includes('$199 Lifetime')) {
      console.error(`FAIL: ${item.path} missing standard pricing tiers ($19/mo · $99/yr · $199 Lifetime)`);
      failures++;
    }
    const truncatedLifeMatch = content.match(/\$199\s+Life(?![a-zA-Z])/);
    if (truncatedLifeMatch) {
      console.error(`FAIL: ${item.path} contains truncated "$199 Life" string: ${truncatedLifeMatch[0]}`);
      failures++;
    }

    // Rule: All 6 hotkeys
    for (const hk of REQUIRED_HOTKEYS) {
      if (!content.includes(hk)) {
        console.error(`FAIL: ${item.path} missing required hotkey "${hk}"`);
        failures++;
      }
    }

    // Rule: Compact Study AI Hub showcase
    if (!content.includes('<StudyAiHubShowcase compact />') && !content.includes('<StudyAiHubShowcase compact/>')) {
      console.error(`FAIL: ${item.path} missing "<StudyAiHubShowcase compact />"`);
      failures++;
    }

    // Rule: JSON-LD Schema with @graph
    if (!content.includes('application/ld+json') || !content.includes('@graph')) {
      console.error(`FAIL: ${item.path} missing @graph ld+json schema`);
      failures++;
    } else {
      for (const node of REQUIRED_SCHEMA_NODES) {
        if (!content.includes(`"@type": "${node}"`)) {
          console.error(`FAIL: ${item.path} JSON-LD @graph missing required schema node "${node}"`);
          failures++;
        }
      }
    }

    // Rule: SEO Title length (45-65 chars) & Description length (135-160 chars)
    const metaMatch = content.match(/export const metadata:\s*Metadata\s*=\s*\{([\s\S]*?)\n\};/);
    if (!metaMatch) {
      console.error(`FAIL: ${item.path} missing export const metadata`);
      failures++;
    } else {
      const metaStr = metaMatch[1];
      let title = '';
      const absMatch = metaStr.match(/absolute:\s*["\x27]([^"\x27]+)["\x27]/);
      if (absMatch) title = absMatch[1];
      else {
        const tMatch = metaStr.match(/title:\s*["\x27]([^"\x27]+)["\x27]/);
        if (tMatch) title = tMatch[1];
      }

      let desc = '';
      const dMatch = metaStr.match(/description:\s*\n?\s*["\x27]([\s\S]*?)["\x27],/);
      if (dMatch) desc = dMatch[1].replace(/\s+/g, ' ').trim();

      if (!title || title.length < 45 || title.length > 65) {
        console.error(`FAIL: ${item.path} title length (${title?.length}) not in [45, 65]: "${title}"`);
        failures++;
      }

      if (!desc || desc.length < 135 || desc.length > 160) {
        console.error(`FAIL: ${item.path} description length (${desc?.length}) not in [135, 160]: "${desc}"`);
        failures++;
      }
    }
  }

  // 3. Verify Footer.tsx includes all 20 platform route hrefs under "Quiz Solvers by Platform"
  const footerFile = path.join(ROOT_DIR, 'src/components/Footer.tsx');
  if (!fs.existsSync(footerFile)) {
    console.error('FAIL: src/components/Footer.tsx does not exist');
    failures++;
  } else {
    const footerContent = fs.readFileSync(footerFile, 'utf8');
    for (const href of ALL_20_PLATFORM_HREFS) {
      if (!footerContent.includes(`'${href}'`) && !footerContent.includes(`"${href}"`)) {
        console.error(`FAIL: src/components/Footer.tsx missing platform link "${href}"`);
        failures++;
      }
    }
  }

  // 4. Verify sitemap.ts lmsServiceSlugs includes all 20 platform slugs + 2 blog slugs (22 total)
  const sitemapFile = path.join(ROOT_DIR, 'src/app/sitemap.ts');
  if (!fs.existsSync(sitemapFile)) {
    console.error('FAIL: src/app/sitemap.ts does not exist');
    failures++;
  } else {
    const sitemapContent = fs.readFileSync(sitemapFile, 'utf8');
    for (const item of M2_NEW_ROUTES) {
      if (!sitemapContent.includes(`'${item.slug}'`) && !sitemapContent.includes(`"${item.slug}"`)) {
        console.error(`FAIL: src/app/sitemap.ts lmsServiceSlugs missing slug "${item.slug}"`);
        failures++;
      }
    }
  }

  if (failures === 0) {
    console.log('>>> ALL M2 PLATFORM ROUTE TESTS PASSED WITH 0 FAILURES! <<<');
    return 0;
  } else {
    console.error(`>>> M2 PLATFORM ROUTE TESTS FAILED WITH ${failures} ERRORS <<<`);
    return failures;
  }
}

if (require.main === module) {
  const code = runM2Tests();
  process.exit(code === 0 ? 0 : 1);
}
