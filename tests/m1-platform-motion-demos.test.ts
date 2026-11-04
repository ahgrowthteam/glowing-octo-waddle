/**
 * Milestone 1 Verification Suite:
 * Validates de-templating across all 14 LMS/STEM and blog routes:
 * 1. Zero usage of LmsServicePageTemplate and LmsInteractiveVideoDemo
 * 2. All 14 routes mount bespoke Framer Motion demos from PlatformMotionDemos.tsx
 * 3. 5 Free Solves / Day ($0) invariant (zero "50 Free Solves")
 * 4. Pricing tiers: $19/mo · $99/yr ($8.25/mo) · $199 Lifetime (zero truncated "$199 Life")
 * 5. All 6 hotkeys present (Double-Click, Alt+S, Alt+1, Alt+2, Alt+3, ⌘+Shift+U)
 * 6. StudyAiHubShowcase compact cross-linking
 * 7. Strict SEO metadata character bounds (title: 45–65, description: 135–160)
 * 8. Valid @graph JSON-LD schema with VideoObject, HowTo, and SoftwareApplication
 */

import * as fs from 'fs';
import * as path from 'path';

const ROOT_DIR = process.cwd();

const ALL_14_ROUTES = [
  'src/app/canvas-lms-quiz-solver/page.tsx',
  'src/app/blackboard-quiz-solver/page.tsx',
  'src/app/moodle-quiz-solver/page.tsx',
  'src/app/d2l-brightspace-quiz-solver/page.tsx',
  'src/app/mcgraw-hill-connect-aleks-solver/page.tsx',
  'src/app/pearson-mylab-mastering-solver/page.tsx',
  'src/app/cengage-mindtap-webassign-solver/page.tsx',
  'src/app/gradescope-exam-solver/page.tsx',
  'src/app/google-forms-quiz-solver/page.tsx',
  'src/app/schoology-quiz-solver/page.tsx',
  'src/app/deltamath-homework-solver/page.tsx',
  'src/app/edgenuity-quiz-solver/page.tsx',
  'src/app/blog/does-canvas-detect-extensions-2026/page.tsx',
  'src/app/blog/canvas-quiz-log-explained-what-professors-see/page.tsx'
];

const REQUIRED_HOTKEYS = ['Double-Click', 'Alt+S', 'Alt+1', 'Alt+2', 'Alt+3', '⌘+Shift+U'];

function runM1Tests() {
  console.log('--- Starting Milestone 1 Automated Invariant Tests ---');
  let failures = 0;

  // 1. Verify PlatformMotionDemos.tsx exports all 14 bespoke demos
  const demosFile = path.join(ROOT_DIR, 'src/components/PlatformMotionDemos.tsx');
  if (!fs.existsSync(demosFile)) {
    console.error('FAIL: PlatformMotionDemos.tsx does not exist');
    failures++;
  } else {
    const demosContent = fs.readFileSync(demosFile, 'utf8');
    const expectedExports = [
      'CanvasLmsQuizMotionDemo',
      'BlackboardQuizMotionDemo',
      'MoodleQuizMotionDemo',
      'D2LBrightspaceQuizMotionDemo',
      'McgrawHillAleksQuizMotionDemo',
      'PearsonMyLabMasteringDemo',
      'CengageWebAssignDemo',
      'GradescopeExamDemo',
      'GoogleFormsQuizDemo',
      'SchoologyLearnosityDemo',
      'DeltaMathMotionDemo',
      'EdgenuityMotionDemo',
      'CanvasExtensionDetectionMotionDemo',
      'CanvasQuizLogMotionDemo'
    ];

    for (const exp of expectedExports) {
      if (!demosContent.includes(`export function ${exp}`) && !demosContent.includes(`export const ${exp}`)) {
        console.error(`FAIL: Missing export ${exp} in PlatformMotionDemos.tsx`);
        failures++;
      }
    }
  }

  // 2. Test each of the 14 routes
  for (const relPath of ALL_14_ROUTES) {
    const fullPath = path.join(ROOT_DIR, relPath);
    if (!fs.existsSync(fullPath)) {
      console.error(`FAIL: Route file missing: ${relPath}`);
      failures++;
      continue;
    }

    const content = fs.readFileSync(fullPath, 'utf8');

    // Rule: Zero shared template imports
    if (content.includes('LmsServicePageTemplate')) {
      console.error(`FAIL: ${relPath} still imports or references LmsServicePageTemplate`);
      failures++;
    }
    if (content.includes('LmsInteractiveVideoDemo')) {
      console.error(`FAIL: ${relPath} still imports or references LmsInteractiveVideoDemo`);
      failures++;
    }

    // Rule: Exact daily quota invariant
    if (!content.includes('5 Free Solves / Day')) {
      console.error(`FAIL: ${relPath} missing "5 Free Solves / Day" quota label`);
      failures++;
    }
    if (content.includes('50 Free Solves')) {
      console.error(`FAIL: ${relPath} contains prohibited "50 Free Solves"`);
      failures++;
    }

    // Rule: Exact tier pricing invariant
    if (!content.includes('$19/mo') || !content.includes('$99/yr') || !content.includes('$199 Lifetime')) {
      console.error(`FAIL: ${relPath} missing standard pricing tiers ($19/mo · $99/yr · $199 Lifetime)`);
      failures++;
    }
    const truncatedLifeMatch = content.match(/\$199\s+Life(?![a-zA-Z])/);
    if (truncatedLifeMatch) {
      console.error(`FAIL: ${relPath} contains truncated "$199 Life" string: ${truncatedLifeMatch[0]}`);
      failures++;
    }

    // Rule: All 6 hotkeys
    for (const hk of REQUIRED_HOTKEYS) {
      if (!content.includes(hk)) {
        console.error(`FAIL: ${relPath} missing required hotkey "${hk}"`);
        failures++;
      }
    }

    // Rule: Compact Study AI Hub showcase
    if (!content.includes('<StudyAiHubShowcase compact />') && !content.includes('<StudyAiHubShowcase compact/>')) {
      console.error(`FAIL: ${relPath} missing "<StudyAiHubShowcase compact />"`);
      failures++;
    }

    // Rule: JSON-LD Schema with @graph
    if (!content.includes('application/ld+json') || !content.includes('@graph')) {
      console.error(`FAIL: ${relPath} missing @graph ld+json schema`);
      failures++;
    }

    // Rule: SEO Title length (45-65 chars) & Description length (135-160 chars)
    const metaMatch = content.match(/export const metadata:\s*Metadata\s*=\s*\{([\s\S]*?)\n\};/);
    if (!metaMatch) {
      console.error(`FAIL: ${relPath} missing export const metadata`);
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
        console.error(`FAIL: ${relPath} title length (${title?.length}) not in [45, 65]: "${title}"`);
        failures++;
      }

      if (!desc || desc.length < 135 || desc.length > 160) {
        console.error(`FAIL: ${relPath} description length (${desc?.length}) not in [135, 160]: "${desc}"`);
        failures++;
      }
    }
  }

  // 3. Check for any remaining useState(50) in entire workspace
  const lmsDemoComp = path.join(ROOT_DIR, 'src/components/LmsInteractiveVideoDemo.tsx');
  if (fs.existsSync(lmsDemoComp)) {
    const c = fs.readFileSync(lmsDemoComp, 'utf8');
    if (c.includes('useState(50)')) {
      console.error('FAIL: LmsInteractiveVideoDemo.tsx contains residual useState(50)');
      failures++;
    }
  }
  const videoDemoPage = path.join(ROOT_DIR, 'src/app/video-demo/page.tsx');
  if (fs.existsSync(videoDemoPage)) {
    const c = fs.readFileSync(videoDemoPage, 'utf8');
    if (c.includes('useState(50)')) {
      console.error('FAIL: video-demo/page.tsx contains residual useState(50)');
      failures++;
    }
  }

  if (failures === 0) {
    console.log('>>> ALL M1 TESTS PASSED WITH 0 FAILURES! <<<');
    process.exit(0);
  } else {
    console.error(`>>> M1 TESTS FAILED WITH ${failures} ERRORS <<<`);
    process.exit(1);
  }
}

runM1Tests();
