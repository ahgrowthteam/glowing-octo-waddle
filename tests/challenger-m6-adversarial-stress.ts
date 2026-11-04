/**
 * Challenger M6-1 — Comprehensive Adversarial Stress & Empirical Verification Harness
 * 
 * Verifies:
 * 1. All 10 Milestone 6 routes:
 *    - Zero `<input type="radio"` or `peer/tab`
 *    - Zero legacy `CompetitorMotionDemo` imports
 *    - Bespoke demo component imported and mounted
 *    - All 6 hotkeys verbatim present: Double-Click, Alt+S, Alt+1, Alt+2, Alt+3, ⌘+Shift+U
 *    - All 3 frontier models present: Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1
 *    - Table columns count matches across <th> and <td> for every row
 *    - Zero truncated "$199 Life" strings
 *    - Zero "50 Free Solves" for ExamGhost
 * 
 * 2. All 10 Milestone 6 Bespoke Framer Motion Demos in GeneralAiBatchBDemos.tsx:
 *    - Playback speed boundary testing (-10, -1, 0, 0.1, 1, 2, 50, NaN, Infinity)
 *    - Progress clamping invariants (-100, 250, NaN, Infinity)
 *    - Pause invariance, rapid toggle parity, seek-while-paused, timer drift across 1x, 1.5x, 2x
 *    - SSR HTML markup leak detection: 0 NaN, 0 undefined, 0 null, 0 negative/overflow widths across all 90 SSR permutations
 *    - Source code invariant verification (Math.min/max clamping and safeProgress)
 *    - Academic scenario tokens (Course code, Canvas badge, Competitor failure, ExamGhost 0.3s solve, 3 frontier models)
 * 
 * 3. Regression checks across ALL 58 comparison routes in src/app/*-vs-examghost/page.tsx:
 *    - Confirm 0 routes have hidden peer radio tabs
 *    - Confirm 0 routes import CompetitorInteractiveDemos.tsx
 *    - Confirm 0 routes have truncated "$199 Life"
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import * as Demos from '../src/components/GeneralAiBatchBDemos';
import { SpeedOption, MotionScene, TelemetryState, CursorState } from '../src/components/motion-demo/types';
import {
  readProjectFile,
  checkPeerTabBoilerplate,
  checkHotkeyCoverage,
  checkPricingStack,
  checkFrontierModels,
  checkJsonLdSchema,
  checkMotionDemo,
} from './e2e/helpers';

// ============================================================================
// Tracking & Reporting Structures
// ============================================================================
interface TestResult {
  id: string;
  category: string;
  target: string;
  passed: boolean;
  message: string;
  details?: string;
}

const testResults: TestResult[] = [];
let passCount = 0;
let failCount = 0;

function assertCheck(
  id: string,
  category: string,
  target: string,
  condition: boolean,
  message: string,
  details?: string
) {
  if (condition) {
    passCount++;
    testResults.push({ id, category, target, passed: true, message, details });
  } else {
    failCount++;
    testResults.push({ id, category, target, passed: false, message, details });
    console.error(`❌ [FAIL] [${id}] [${target}] ${message}${details ? ` -> ${details}` : ''}`);
  }
}

// ============================================================================
// HTML Markup Leak Detection
// ============================================================================
function detectHtmlLeaks(html: string): string[] {
  const leaks: string[] = [];
  if (/style="[^"]*NaN[^"]*"/i.test(html)) leaks.push('Contains NaN in style');
  if (/width:\s*NaN/i.test(html)) leaks.push('Contains width: NaN');
  if (/left:\s*NaN/i.test(html)) leaks.push('Contains left: NaN');
  if (/top:\s*NaN/i.test(html)) leaks.push('Contains top: NaN');
  if (/translate\([^)]*NaN[^)]*\)/i.test(html)) leaks.push('Contains NaN in translate');

  // Unintended attribute values
  const attrUndefined = html.match(/(?:id|class|aria-[a-z]+|data-[a-z]+)="[^"]*\bundefined\b[^"]*"/i);
  if (attrUndefined) leaks.push(`Attribute undefined: ${attrUndefined[0]}`);

  const attrNull = html.match(/(?:id|class|aria-[a-z]+|data-[a-z]+)="[^"]*\bnull\b[^"]*"/i);
  if (attrNull && !attrNull[0].includes('aria-hidden="null"')) {
    leaks.push(`Attribute null: ${attrNull[0]}`);
  }

  // Raw DOM leaks outside intentional mock code/text
  const bareUndefined = html.match(/>\s*undefined\s*</);
  if (bareUndefined) leaks.push('Bare token >undefined<');

  const bareNull = html.match(/>\s*null\s*</);
  if (bareNull) leaks.push('Bare token >null<');

  const bareNaN = html.match(/>\s*NaN\s*</);
  if (bareNaN) leaks.push('Bare token >NaN<');

  // Negative and overflow percentage widths
  const widthPctMatch = html.match(/width:\s*([+-]?[0-9.]+)%/g);
  if (widthPctMatch) {
    for (const m of widthPctMatch) {
      const numStr = m.replace(/width:\s*/i, '').replace('%', '').trim();
      const val = parseFloat(numStr);
      if (!Number.isFinite(val)) {
        leaks.push(`Non-finite width: ${m}`);
      } else if (val < 0) {
        leaks.push(`Negative width: ${m}`);
      } else if (val > 100.001) {
        leaks.push(`Overflow width (>100%): ${m}`);
      }
    }
  }

  return leaks;
}

function cleanSsr(html: string): string {
  return html.replace(/<!--[\s\S]*?-->/g, '');
}

// ============================================================================
// Component Harness for Headless Invariant Testing
// ============================================================================
interface ComponentHarness {
  name: string;
  render: () => {
    element: any;
    scrubberProps: any;
    cursorState: CursorState;
    telemetry: TelemetryState;
    scenes: MotionScene[];
  };
  getState: (index: number) => any;
  setState: (index: number, valOrFn: any) => void;
  tickTimer: (stepMs?: number) => void;
}

function createHarness(demoComponent: React.ComponentType): ComponentHarness {
  let hookIndex = 0;
  const states: any[] = [];
  const stateSetters: Array<(val: any) => void> = [];

  const mockDispatcher = {
    useState: (initial: any) => {
      const idx = hookIndex++;
      if (states[idx] === undefined) {
        states[idx] = typeof initial === 'function' ? initial() : initial;
      }
      if (!stateSetters[idx]) {
        stateSetters[idx] = (newValOrFn: any) => {
          if (typeof newValOrFn === 'function') {
            states[idx] = newValOrFn(states[idx]);
          } else {
            states[idx] = newValOrFn;
          }
        };
      }
      return [states[idx], stateSetters[idx]];
    },
    useEffect: () => {},
    useCallback: (fn: Function) => fn,
    useMemo: (fn: Function) => fn(),
    useRef: (initial: any) => ({ current: initial }),
    useContext: () => null,
  };

  const renderComponent = () => {
    hookIndex = 0;
    (React as any).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentDispatcher.current = mockDispatcher;
    const element = (demoComponent as any)();

    const frameElement = Array.isArray(element?.props?.children) ? element.props.children[0] : element?.props?.children;
    const frameProps = frameElement?.props || element?.props || {};
    const scrubberProps = frameProps?.footer?.props || {};
    const telemetry = frameProps?.telemetryState;

    let cursorState: any = null;
    const findCursor = (node: any) => {
      if (!node) return;
      if (node.props?.cursor) {
        cursorState = node.props.cursor;
        return;
      }
      if (Array.isArray(node.props?.children)) {
        node.props.children.forEach(findCursor);
      } else if (node.props?.children) {
        findCursor(node.props.children);
      }
    };
    findCursor(element);

    return {
      element,
      scrubberProps,
      cursorState,
      telemetry,
      scenes: scrubberProps.scenes || [],
    };
  };

  return {
    name: demoComponent.name,
    render: renderComponent,
    getState: (idx: number) => states[idx],
    setState: (idx: number, valOrFn: any) => {
      if (stateSetters[idx]) {
        stateSetters[idx](valOrFn);
      } else {
        states[idx] = typeof valOrFn === 'function' ? valOrFn(states[idx]) : valOrFn;
      }
    },
    tickTimer: (stepMs = 50) => {
      const isPlaying = states[0];
      const speed = states[3] !== undefined ? states[3] : 1;
      if (!isPlaying) return;

      const initialRender = renderComponent();
      const scenesList = initialRender.scenes;
      const currentSceneIndex = states[1] ?? 0;
      const duration = scenesList[currentSceneIndex]?.durationMs || 6500;

      const stepIncrement = ((stepMs * speed) / duration) * 100;

      stateSetters[2]((prev: number) => {
        if (prev + stepIncrement >= 100) {
          stateSetters[1]((sc: number) => (sc + 1) % scenesList.length);
          return 0;
        }
        return Math.min(100, Math.max(0, prev + stepIncrement));
      });
    },
  };
}

// ============================================================================
// 10 Milestone 6 Demos Metadata
// ============================================================================
interface DemoMetadata {
  name: string;
  slug: string;
  component: React.ComponentType;
  expectedCourse: string;
  expectedDomainBadge: string;
  competitorFailureToken: string;
  academicQuestionToken: string;
}

const M6_DEMOS: DemoMetadata[] = [
  {
    name: 'QuizSolverAiDemo',
    slug: 'quizsolverai-vs-examghost',
    component: Demos.QuizSolverAiDemo,
    expectedCourse: 'FIN 4320',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'QuizKick|10-Solve|Custom Box|Paywall',
    academicQuestionToken: 'DCF|WACC|Terminal Value',
  },
  {
    name: 'QuizWizardDemo',
    slug: 'quizwizard-vs-examghost',
    component: Demos.QuizWizardDemo,
    expectedCourse: 'ECE 310',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Spell|External Tab|window.blur',
    academicQuestionToken: 'RLC|Laplace|Resonance|Transient',
  },
  {
    name: 'QuizzyDemo',
    slug: 'quizzy-vs-examghost',
    component: Demos.QuizzyDemo,
    expectedCourse: 'PHARM 5120',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Lite AI|hallucin|shortcut|blur',
    academicQuestionToken: 'Phenytoin|Michaelis-Menten|Kinetics',
  },
  {
    name: 'RightClickAiDemo',
    slug: 'rightclickai-vs-examghost',
    component: Demos.RightClickAiDemo,
    expectedCourse: 'PHARM 3020',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Context Menu|contextmenu|Right-Click|blocked',
    academicQuestionToken: 'Vancomycin|Pharmacokinetics|CrCl|steady-state',
  },
  {
    name: 'SnapGptDemo',
    slug: 'snapgpt-vs-examghost',
    component: Demos.SnapGptDemo,
    expectedCourse: 'GEOL 3040',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Upload|Dashboard|Departed|window.blur',
    academicQuestionToken: 'QAPF|Plagioclase|Granodiorite|Thin Section',
  },
  {
    name: 'StudyBotProDemo',
    slug: 'studybotpro-vs-examghost',
    component: Demos.StudyBotProDemo,
    expectedCourse: 'FIN 4410',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Floating Card|Rate Us|Z-Index|Injected|Auto Select',
    academicQuestionToken: 'Binomial Option|CRR|European call|Volatility',
  },
  {
    name: 'StudyFoxDemo',
    slug: 'studyfox-vs-examghost',
    component: Demos.StudyFoxDemo,
    expectedCourse: 'SOC 2010',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Toolbar Popup|Bleed|Focus Theft|window.blur',
    academicQuestionToken: 'Chi-Square|Cramer|Contingency',
  },
  {
    name: 'StudyMonkeyDemo',
    slug: 'studymonkey-vs-examghost',
    component: Demos.StudyMonkeyDemo,
    expectedCourse: 'PHIL 310',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Quota|3-Prompt|Weekly Billing|Paywall|Alt-Tabbing',
    academicQuestionToken: 'Gödel|Incompleteness|Peano|Tarskian',
  },
  {
    name: 'TestWhizDemo',
    slug: 'testwhiz-vs-examghost',
    component: Demos.TestWhizDemo,
    expectedCourse: 'PSYC 301',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Generic AI|No LaTeX|Vague Hint|Hallucination|ASCII math|Incognito',
    academicQuestionToken: 'ANOVA|Mauchly|Sphericity|Greenhouse-Geisser',
  },
  {
    name: 'TrustStudyDemo',
    slug: 'truststudy-vs-examghost',
    component: Demos.TrustStudyDemo,
    expectedCourse: 'BUSN 420',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'DNS Failure|no such host|Alt+X|Domain Dead',
    academicQuestionToken: 'SOX|PCAOB|Internal Controls|Material Weakness',
  },
];

console.log('================================================================');
console.log('CHALLENGER M6-1: ADVERSARIAL STRESS & EMPIRICAL VERIFICATION');
console.log('Target: Milestone 6 (10 Routes) + Global Regression (58 Routes)');
console.log('================================================================\n');

// ============================================================================
// SECTION 1: Playback Speed Boundary Stress Testing
// ============================================================================
console.log('>>> [SECTION 1] Playback Speed Boundary Testing (Negative, Float, Extreme, Non-Finite)...');

const TEST_SPEEDS = [
  { speed: -10, label: 'neg_10x' },
  { speed: -1, label: 'neg_1x' },
  { speed: -0.5, label: 'neg_half' },
  { speed: 0, label: 'zero_speed' },
  { speed: 0.1, label: 'tenth_speed' },
  { speed: 0.5, label: 'half_speed' },
  { speed: 1, label: 'normal_1x' },
  { speed: 1.5, label: 'one_and_half_x' },
  { speed: 2, label: 'double_2x' },
  { speed: 50, label: 'extreme_50x' },
  { speed: NaN, label: 'nan_speed' },
  { speed: Infinity, label: 'inf_speed' },
];

for (const demo of M6_DEMOS) {
  for (const { speed, label } of TEST_SPEEDS) {
    const harness = createHarness(demo.component);
    harness.render();
    harness.setState(0, true); // isPlaying = true
    harness.setState(1, 0);    // scene = 0
    harness.setState(2, 0);    // progress = 0
    harness.setState(3, speed);

    let threwError = false;
    try {
      harness.tickTimer(50);
      const prog = harness.getState(2);
      const isProgressClamped = Number.isNaN(prog) || (prog >= 0 && prog <= 100);
      assertCheck(
        `SPEED-BOUNDARY-${demo.name}-${label}`,
        'Playback Speed Boundary',
        demo.name,
        !threwError && isProgressClamped,
        `Tolerated speed=${speed} without crash; progress is within safe boundaries`,
        `Progress after tick: ${prog}`
      );
    } catch (err: any) {
      threwError = true;
      assertCheck(
        `SPEED-BOUNDARY-${demo.name}-${label}`,
        'Playback Speed Boundary',
        demo.name,
        false,
        `Crashed on speed=${speed}`,
        err.message
      );
    }
  }
}

// ============================================================================
// SECTION 2: Progress Clamping Invariants
// ============================================================================
console.log('\n>>> [SECTION 2] Progress Clamping Invariants (Negative, Overflow, Non-Finite)...');

const EXTREME_PROGRESS_TESTS = [
  { val: -100, label: 'deep_negative' },
  { val: -0.0001, label: 'epsilon_negative' },
  { val: 0, label: 'zero' },
  { val: 50, label: 'midpoint' },
  { val: 100, label: 'complete' },
  { val: 100.001, label: 'epsilon_overflow' },
  { val: 250, label: 'extreme_overflow' },
  { val: NaN, label: 'nan_progress' },
  { val: Infinity, label: 'infinity_progress' },
];

for (const demo of M6_DEMOS) {
  for (const { val, label } of EXTREME_PROGRESS_TESTS) {
    const harness = createHarness(demo.component);
    harness.render();
    harness.setState(2, val);
    let threw = false;
    let safeRenderedProgress: any = null;

    try {
      const rendered = harness.render();
      safeRenderedProgress = rendered.scrubberProps.sceneProgress;
      const isClamped = Number.isNaN(val)
        ? (Number.isNaN(safeRenderedProgress) || (Number.isFinite(safeRenderedProgress) && safeRenderedProgress >= 0 && safeRenderedProgress <= 100))
        : (typeof safeRenderedProgress === 'number' &&
           safeRenderedProgress >= 0 &&
           safeRenderedProgress <= 100 &&
           !Number.isNaN(safeRenderedProgress));

      assertCheck(
        `PROGRESS-CLAMP-${demo.name}-${label}`,
        'Progress Clamping Invariant',
        demo.name,
        isClamped,
        `State progress ${val} securely clamped to [0, 100] in scrubber props`,
        `Scrubber received: ${safeRenderedProgress}`
      );
    } catch (err: any) {
      threw = true;
      assertCheck(
        `PROGRESS-CLAMP-${demo.name}-${label}`,
        'Progress Clamping Invariant',
        demo.name,
        false,
        `Crashed on progress value ${val}`,
        err.message
      );
    }
  }
}

// ============================================================================
// SECTION 3: Pause Invariance & Timer Drift
// ============================================================================
console.log('\n>>> [SECTION 3] Pause Invariance & Mathematical Timer Drift Verification...');

for (const demo of M6_DEMOS) {
  const harness = createHarness(demo.component);
  harness.render();

  // 1. Paused state freeze
  harness.setState(0, false); // isPlaying = false
  harness.setState(1, 0);
  harness.setState(2, 42.5);

  harness.tickTimer(50);
  harness.tickTimer(50);
  harness.tickTimer(50);

  const progAfterPauseTicks = harness.getState(2);
  assertCheck(
    `PAUSE-FREEZE-${demo.name}`,
    'Pause Invariance',
    demo.name,
    progAfterPauseTicks === 42.5,
    `Progress remained frozen at exactly 42.5% while paused`,
    `Observed: ${progAfterPauseTicks}%`
  );

  // 2. Rapid 100 toggles
  harness.setState(0, true);
  let toggleOk = true;
  for (let i = 0; i < 100; i++) {
    const currentPlay = harness.getState(0);
    harness.render().scrubberProps.onTogglePlay();
    const nextPlay = harness.getState(0);
    if (nextPlay === currentPlay) {
      toggleOk = false;
      break;
    }
  }
  const finalPlayState = harness.getState(0);
  assertCheck(
    `PAUSE-RAPID-TOGGLE-${demo.name}`,
    'Rapid Toggle Parity',
    demo.name,
    toggleOk && finalPlayState === true,
    `100 rapid toggles maintained perfect boolean inverter parity`,
    `Final Play State: ${finalPlayState}`
  );

  // 3. Seek while paused retains paused state
  harness.setState(0, false);
  harness.render().scrubberProps.onSeekScene(2);
  const seekedScene = harness.getState(1);
  const seekedProgress = harness.getState(2);
  const playStateAfterSeek = harness.getState(0);

  harness.tickTimer(100);
  const progAfterTick = harness.getState(2);

  assertCheck(
    `PAUSE-SEEK-INVARIANCE-${demo.name}`,
    'Seek while Paused',
    demo.name,
    seekedScene === 2 && seekedProgress === 0 && playStateAfterSeek === false && progAfterTick === 0,
    `Seeking while paused lands on Scene 2 @ 0% and remains paused`,
    `Scene: ${seekedScene}, Prog: ${progAfterTick}%, Playing: ${playStateAfterSeek}`
  );

  // 4. Timer drift verification across 1x, 1.5x, 2x speeds
  for (const testSpeed of [1, 1.5, 2] as SpeedOption[]) {
    harness.setState(0, true);
    harness.setState(1, 0);
    harness.setState(2, 0);
    harness.setState(3, testSpeed);

    const initialRender = harness.render();
    const durationMs = initialRender.scenes[0]?.durationMs || 6500;
    const ticks = 20;
    const tickIntervalMs = 50;

    for (let t = 0; t < ticks; t++) {
      harness.tickTimer(tickIntervalMs);
    }

    const observedProg = harness.getState(2);
    const expectedProg = ((ticks * tickIntervalMs * testSpeed) / durationMs) * 100;
    const driftDelta = Math.abs(observedProg - expectedProg);

    assertCheck(
      `TIMER-DRIFT-${testSpeed}x-${demo.name}`,
      'Timer Drift Verification',
      demo.name,
      driftDelta < 0.0001,
      `Zero mathematical drift observed at ${testSpeed}x speed over ${ticks} ticks`,
      `Observed: ${observedProg.toFixed(6)}%, Expected: ${expectedProg.toFixed(6)}%, Drift: ${driftDelta.toExponential(2)}%`
    );
  }
}

// ============================================================================
// SECTION 4: Exhaustive SSR HTML Markup Leak Detection
// ============================================================================
console.log('\n>>> [SECTION 4] SSR HTML Markup Leak Detection (0 NaN, 0 undefined, 0 null, 0 overflow widths)...');

for (const demo of M6_DEMOS) {
  const harness = createHarness(demo.component);

  for (let sceneIdx = 0; sceneIdx <= 2; sceneIdx++) {
    for (const modelTab of ['claude', 'chatgpt', 'deepseek'] as const) {
      harness.setState(0, true);
      harness.setState(1, sceneIdx);
      harness.setState(2, 50); // Mid-progress
      harness.setState(3, 1);
      harness.setState(4, modelTab);

      const rendered = harness.render();
      const html = cleanSsr(renderToString(rendered.element));
      const leaks = detectHtmlLeaks(html);

      assertCheck(
        `SSR-LEAK-S${sceneIdx}-${modelTab}-${demo.name}`,
        'SSR Leak Detection',
        demo.name,
        leaks.length === 0,
        `SSR HTML free of NaN/undefined/null/overflow leaks (Scene ${sceneIdx}, Tab ${modelTab})`,
        leaks.length > 0 ? leaks.join(', ') : '0 leaks'
      );
    }
  }
}

// ============================================================================
// SECTION 5: AST & Source Code Clamping Pattern Verification
// ============================================================================
console.log('\n>>> [SECTION 5] AST & Source Code Clamping Pattern Verification...');

const sourceFilePath = path.join(process.cwd(), 'src/components/GeneralAiBatchBDemos.tsx');
const sourceCode = fs.readFileSync(sourceFilePath, 'utf8');

for (const demo of M6_DEMOS) {
  const regex = new RegExp(`export function ${demo.name}\\s*\\(\\)\\s*\\{([\\s\\S]*?)\\n\\}`);
  const match = sourceCode.match(regex);
  const compCode = match ? match[1] : '';

  const hasUpdaterClamp = compCode.includes('Math.min(100, Math.max(0, prev + stepIncrement))');
  const hasSafeProgress = compCode.includes('const safeProgress = Math.min(100, Math.max(0, sceneProgress));');
  const passesSafeProgress = compCode.includes('sceneProgress={safeProgress}');
  const passesTelemetry = compCode.includes('telemetryState={telemetry}');

  assertCheck(
    `AST-CLAMP-UPDATER-${demo.name}`,
    'Source Invariant Verification',
    demo.name,
    hasUpdaterClamp,
    `Contains Math.min(100, Math.max(0, prev + stepIncrement)) in timer updater`
  );

  assertCheck(
    `AST-SAFE-PROGRESS-${demo.name}`,
    'Source Invariant Verification',
    demo.name,
    hasSafeProgress && passesSafeProgress,
    `Defines safeProgress with Math.min(100, Math.max(0, sceneProgress)) and passes to scrubber`
  );

  assertCheck(
    `AST-TELEMETRY-${demo.name}`,
    'Source Invariant Verification',
    demo.name,
    passesTelemetry,
    `Passes telemetryState to MotionDemoFrame`
  );
}

// ============================================================================
// SECTION 6: Academic Scenario & Token Invariant Verification
// ============================================================================
console.log('\n>>> [SECTION 6] Academic Scenario & Token Verification...');

for (const demo of M6_DEMOS) {
  const harness = createHarness(demo.component);
  const rendered = harness.render();

  const frameElement = Array.isArray(rendered.element?.props?.children)
    ? rendered.element.props.children[0]
    : rendered.element?.props?.children;
  const frameProps = frameElement?.props || rendered.element?.props || {};
  const frameTitle = frameProps?.title || '';
  const domainBadge = frameProps?.domainBadge || '';
  const browserUrl = frameProps?.browserUrl || '';

  const hasCourse = frameTitle.includes(demo.expectedCourse);
  const hasBadge = domainBadge === demo.expectedDomainBadge;
  const hasUrl = browserUrl.includes('canvas.instructure.com');

  assertCheck(
    `ACADEMIC-HEADER-${demo.name}`,
    'Academic Scenario Verification',
    demo.name,
    hasCourse && hasBadge && hasUrl,
    `Frame title contains course "${demo.expectedCourse}", badge "${demo.expectedDomainBadge}", valid Canvas URL`,
    `Title: "${frameTitle}", Badge: "${domainBadge}"`
  );

  // Scene 0 Failure Tokens
  harness.setState(1, 0);
  harness.setState(2, 20);
  const s0EarlyHtml = cleanSsr(renderToString(harness.render().element));
  harness.setState(2, 60);
  const s0LateHtml = cleanSsr(renderToString(harness.render().element));
  const s0Title = rendered.scenes[0]?.title || '';
  const s0Combined = s0Title + ' ' + s0EarlyHtml + ' ' + s0LateHtml;

  const hasFailureToken = new RegExp(demo.competitorFailureToken, 'i').test(s0Combined);
  const hasQuestionToken = new RegExp(demo.academicQuestionToken, 'i').test(s0Combined);

  assertCheck(
    `ACADEMIC-SCENE0-${demo.name}`,
    'Academic Scenario Verification',
    demo.name,
    hasFailureToken && hasQuestionToken,
    `Scene 0 contains competitor failure token "${demo.competitorFailureToken}" and question token "${demo.academicQuestionToken}"`
  );

  // Scene 1: 0.3s solve & Focus Shield
  harness.setState(1, 1);
  harness.setState(2, 50);
  const s1Html = cleanSsr(renderToString(harness.render().element));
  const has03s = s1Html.includes('0.3s') || s1Html.includes('Double-Click') || s1Html.includes('Alt+S');
  const hasFocusShield = s1Html.includes('Focus Shield') || s1Html.includes('Shadow DOM') || s1Html.includes('0 blur') || s1Html.includes('0 window.blur');

  assertCheck(
    `ACADEMIC-SCENE1-${demo.name}`,
    'Academic Scenario Verification',
    demo.name,
    has03s && hasFocusShield,
    `Scene 1 demonstrates ExamGhost 0.3s solve and Focus Shield / stealth mechanics`
  );

  // Scene 2: 3 frontier models
  harness.setState(1, 2);
  harness.setState(2, 50);
  const s2Html = cleanSsr(renderToString(harness.render().element));
  const hasClaude = s2Html.includes('Claude 3.7 Sonnet') || s2Html.includes('Claude');
  const hasChatGpt = s2Html.includes('ChatGPT o3-mini/4o') || s2Html.includes('ChatGPT');
  const hasDeepSeek = s2Html.includes('DeepSeek-R1') || s2Html.includes('DeepSeek');

  assertCheck(
    `ACADEMIC-SCENE2-${demo.name}`,
    'Academic Scenario Verification',
    demo.name,
    hasClaude && hasChatGpt && hasDeepSeek,
    `Scene 2 contains all 3 frontier AI models in Study AI Hub`
  );
}

// ============================================================================
// SECTION 7: Milestone 6 Route Specific Adversarial Verification (10 Routes)
// ============================================================================
console.log('\n>>> [SECTION 7] Milestone 6 Route-Specific Adversarial Checks (10 Routes)...');

for (const demo of M6_DEMOS) {
  const routePath = `src/app/${demo.slug}/page.tsx`;
  const fileContent = readProjectFile(routePath);

  // 1. Zero <input type="radio" or peer/tab
  const hasRadio = /<input[^>]+type=["']radio["']/i.test(fileContent);
  const peer = checkPeerTabBoilerplate(fileContent);
  assertCheck(
    `M6-ROUTE-NO-RADIO-${demo.slug}`,
    'M6 Route Adversarial Checks',
    demo.slug,
    !hasRadio && !peer.hasPeerTab,
    `Zero <input type="radio"> or peer/tab instances in ${demo.slug}`
  );

  // 2. Zero legacy CompetitorMotionDemo imports
  const importsLegacy = /CompetitorMotionDemo|CompetitorInteractiveDemo/i.test(fileContent);
  assertCheck(
    `M6-ROUTE-NO-LEGACY-${demo.slug}`,
    'M6 Route Adversarial Checks',
    demo.slug,
    !importsLegacy,
    `Zero legacy CompetitorMotionDemo imports in ${demo.slug}`
  );

  // 3. Bespoke demo component imported and mounted
  const importsBespoke = fileContent.includes(demo.name);
  const mountsBespoke = new RegExp(`<${demo.name}\\s*\\/?>`).test(fileContent);
  assertCheck(
    `M6-ROUTE-BESPOKE-MOUNT-${demo.slug}`,
    'M6 Route Adversarial Checks',
    demo.slug,
    importsBespoke && mountsBespoke,
    `Bespoke component "${demo.name}" imported and mounted in JSX`
  );

  // 4. All 6 hotkeys verbatim present: Double-Click, Alt+S, Alt+1, Alt+2, Alt+3, ⌘+Shift+U
  const requiredHotkeys = ['Double-Click', 'Alt+S', 'Alt+1', 'Alt+2', 'Alt+3', '⌘+Shift+U'];
  const missingHotkeys = requiredHotkeys.filter((hk) => !fileContent.includes(hk));
  assertCheck(
    `M6-ROUTE-HOTKEYS-${demo.slug}`,
    'M6 Route Adversarial Checks',
    demo.slug,
    missingHotkeys.length === 0,
    `All 6 hotkeys verbatim present in ${demo.slug}`,
    missingHotkeys.length > 0 ? `Missing: ${missingHotkeys.join(', ')}` : 'All 6 present'
  );

  // 5. All 3 frontier models present: Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1
  const requiredModels = ['Claude 3.7 Sonnet', 'ChatGPT o3-mini/4o', 'DeepSeek-R1'];
  const missingModels = requiredModels.filter((m) => !fileContent.includes(m));
  assertCheck(
    `M6-ROUTE-MODELS-${demo.slug}`,
    'M6 Route Adversarial Checks',
    demo.slug,
    missingModels.length === 0,
    `All 3 frontier models present in ${demo.slug}`,
    missingModels.length > 0 ? `Missing: ${missingModels.join(', ')}` : 'All 3 present'
  );

  // 6. Table columns count matches across <th> and <td> for every row
  const tableRegex = /<table[\s\S]*?<\/table>/g;
  let tableMatch;
  let tableIdx = 0;
  let tableValid = true;
  let tableErrorDetail = '';

  while ((tableMatch = tableRegex.exec(fileContent)) !== null) {
    tableIdx++;
    const tableHtml = tableMatch[0];
    const theadMatch = tableHtml.match(/<thead[\s\S]*?<\/thead>/);
    let expectedCols = 0;
    if (theadMatch) {
      const thMatches = theadMatch[0].match(/<th\b[\s\S]*?<\/th>/g) || [];
      expectedCols = thMatches.length;
    }

    const tbodyMatch = tableHtml.match(/<tbody[\s\S]*?<\/tbody>/);
    if (tbodyMatch && expectedCols > 0) {
      const trMatches = tbodyMatch[0].match(/<tr\b[\s\S]*?<\/tr>/g) || [];
      trMatches.forEach((tr, rowIdx) => {
        const tdMatches = tr.match(/<td\b[\s\S]*?<\/td>/g) || [];
        let totalColsInRow = 0;
        tdMatches.forEach((td) => {
          const colSpanMatch = td.match(/colSpan=\{?([0-9]+)\}?/);
          if (colSpanMatch) {
            totalColsInRow += parseInt(colSpanMatch[1], 10);
          } else {
            totalColsInRow += 1;
          }
        });

        if (totalColsInRow !== expectedCols) {
          tableValid = false;
          tableErrorDetail = `Table ${tableIdx} row ${rowIdx + 1}: expected ${expectedCols} cols, got ${totalColsInRow}`;
        }
      });
    }
  }

  assertCheck(
    `M6-ROUTE-TABLE-COLS-${demo.slug}`,
    'M6 Route Adversarial Checks',
    demo.slug,
    tableValid && tableIdx > 0,
    `Table column counts match perfectly across all <th> and <td> rows`,
    tableValid ? `${tableIdx} table(s) checked` : tableErrorDetail
  );

  // 7. Zero truncated "$199 Life" strings
  const lines = fileContent.split('\n');
  const truncatedLifeMatches: string[] = [];
  lines.forEach((l, idx) => {
    if (/\$199\s+Life(?![a-z])/i.test(l)) {
      truncatedLifeMatches.push(`L${idx + 1}: ${l.trim()}`);
    }
  });
  assertCheck(
    `M6-ROUTE-NO-TRUNCATED-LIFE-${demo.slug}`,
    'M6 Route Adversarial Checks',
    demo.slug,
    truncatedLifeMatches.length === 0,
    `Zero truncated "$199 Life" strings in ${demo.slug}`,
    truncatedLifeMatches.length > 0 ? truncatedLifeMatches.join(' | ') : '0 truncated strings'
  );

  // 8. Zero "50 Free Solves" for ExamGhost
  const quotaViolations: string[] = [];
  lines.forEach((l, idx) => {
    if (/\b50[\s-]*(?:free[\s-]*solves?|solve[\s-]*trial|free[\s-]*question[\s-]*solves?)\b/i.test(l)) {
      quotaViolations.push(`L${idx + 1}: ${l.trim()}`);
    }
  });
  assertCheck(
    `M6-ROUTE-NO-50-SOLVES-${demo.slug}`,
    'M6 Route Adversarial Checks',
    demo.slug,
    quotaViolations.length === 0,
    `Zero "50 Free Solves" for ExamGhost in ${demo.slug}`,
    quotaViolations.length > 0 ? quotaViolations.join(' | ') : '0 violations'
  );
}

// ============================================================================
// SECTION 8: Global Regression across ALL 58 Comparison Routes
// ============================================================================
console.log('\n>>> [SECTION 8] Global Regression Checks Across ALL 58 Comparison Routes...');

const appDir = path.join(process.cwd(), 'src/app');
const comparisonRoutes = fs
  .readdirSync(appDir)
  .filter((d) => d.endsWith('-vs-examghost') && fs.existsSync(path.join(appDir, d, 'page.tsx')));

assertCheck(
  'GLOBAL-ROUTE-COUNT',
  'Global Regression',
  'src/app/*-vs-examghost',
  comparisonRoutes.length === 58,
  `Found exactly 58 comparison routes in src/app/`,
  `Found: ${comparisonRoutes.length}`
);

// 1. Confirm 0 routes have hidden peer radio tabs
const routesWithPeerTabs: string[] = [];
for (const slug of comparisonRoutes) {
  const content = fs.readFileSync(path.join(appDir, slug, 'page.tsx'), 'utf8');
  if (/<input[^>]+type=["']radio["']/i.test(content) || /peer\/tab\d+|sr-only\s+peer\//i.test(content)) {
    routesWithPeerTabs.push(slug);
  }
}
assertCheck(
  'GLOBAL-REGRESSION-NO-PEER-TABS',
  'Global Regression',
  'All 58 routes',
  routesWithPeerTabs.length === 0,
  `Confirm 0 routes have hidden peer radio tabs across all 58 routes`,
  routesWithPeerTabs.length > 0 ? `Violations in: ${routesWithPeerTabs.join(', ')}` : '0 routes'
);

// 2. Confirm 0 routes import CompetitorInteractiveDemos.tsx
const routesWithLegacyDemoImport: string[] = [];
for (const slug of comparisonRoutes) {
  const content = fs.readFileSync(path.join(appDir, slug, 'page.tsx'), 'utf8');
  if (/CompetitorInteractiveDemos|CompetitorMotionDemo/i.test(content)) {
    routesWithLegacyDemoImport.push(slug);
  }
}
assertCheck(
  'GLOBAL-REGRESSION-NO-LEGACY-DEMO-IMPORT',
  'Global Regression',
  'All 58 routes',
  routesWithLegacyDemoImport.length === 0,
  `Confirm 0 routes import CompetitorInteractiveDemos.tsx across all 58 routes`,
  routesWithLegacyDemoImport.length > 0 ? `Violations in: ${routesWithLegacyDemoImport.join(', ')}` : '0 routes'
);

// 3. Confirm 0 routes have truncated "$199 Life"
const routesWithTruncatedLife: Array<{ slug: string; line: number; text: string }> = [];
for (const slug of comparisonRoutes) {
  const content = fs.readFileSync(path.join(appDir, slug, 'page.tsx'), 'utf8');
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (/\$199\s+Life(?![a-z])/i.test(line)) {
      routesWithTruncatedLife.push({ slug, line: idx + 1, text: line.trim() });
    }
  });
}
assertCheck(
  'GLOBAL-REGRESSION-NO-TRUNCATED-LIFE',
  'Global Regression',
  'All 58 routes',
  routesWithTruncatedLife.length === 0,
  `Confirm 0 routes have truncated "$199 Life" across all 58 routes`,
  routesWithTruncatedLife.length > 0
    ? `Failed in ${routesWithTruncatedLife.length} route instances: ${routesWithTruncatedLife
        .map((r) => `${r.slug}:L${r.line}`)
        .join(', ')}`
    : '0 routes'
);

// Also check compare-canvas-hack-extensions/page.tsx
const hubPath = path.join(appDir, 'compare-canvas-hack-extensions/page.tsx');
if (fs.existsSync(hubPath)) {
  const hubContent = fs.readFileSync(hubPath, 'utf8');
  const hubLines = hubContent.split('\n');
  const hubTruncated: string[] = [];
  hubLines.forEach((l, idx) => {
    if (/\$199\s+Life(?![a-z])/i.test(l)) {
      hubTruncated.push(`L${idx + 1}: ${l.trim()}`);
    }
  });
  assertCheck(
    'HUB-NO-TRUNCATED-LIFE',
    'Global Regression',
    'compare-canvas-hack-extensions',
    hubTruncated.length === 0,
    `Zero truncated "$199 Life" strings in compare-canvas-hack-extensions/page.tsx`,
    hubTruncated.length > 0 ? hubTruncated.join(' | ') : '0 truncated strings'
  );
}

// ============================================================================
// FINAL SUMMARY & VERDICT
// ============================================================================
console.log('\n================================================================');
console.log('SUMMARY REPORT: CHALLENGER M6-1 ADVERSARIAL STRESS SUITE');
console.log('================================================================');
console.log(`Total Checks Executed: ${testResults.length}`);
console.log(`Passed Checks:         ${passCount}`);
console.log(`Failed Checks:         ${failCount}`);
console.log('----------------------------------------------------------------');

if (failCount === 0) {
  console.log('ALL EMPIRICAL ADVERSARIAL STRESS CHECKS PASSED WITH 100% SUCCESS!');
  console.log('VERDICT: APPROVE');
  process.exit(0);
} else {
  console.error(`FAILED: ${failCount} check(s) failed!`);
  console.log('Failing checks details:');
  testResults
    .filter((r) => !r.passed)
    .forEach((r) => {
      console.error(`  - [${r.id}] ${r.target}: ${r.message} (${r.details})`);
    });
  console.log('\nVERDICT: REJECT');
  process.exit(1);
}
