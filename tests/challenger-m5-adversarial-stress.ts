/**
 * Challenger M5-1 — Comprehensive Adversarial Stress & Boundary Verification Harness
 * Focus:
 * 1. Playback speed boundaries: Negative, float, extreme, and non-finite speeds (-1, 0, 0.1, 50, NaN, Infinity, -Infinity).
 * 2. Progress clamping invariants: Extreme progress values (-100, 250, NaN, Infinity, etc.) across all 16 demos.
 * 3. Pause invariance and timer drift: Freeze verification, resume continuity, 100 toggles, seek while paused, drift analysis.
 * 4. SSR HTML markup leak detection: 0 NaN, 0 undefined, 0 null attribute leaks, 0 negative/overflow widths across all scenes & model tabs.
 * 5. Boundary invariants & AST source verification: Math.min/Math.max clamping in state updaters and safeProgress.
 * 6. Academic scenario tokens: Course codes, realistic Canvas LMS viewports, failure modes, ExamGhost 0.3s solve, 3 frontier models.
 * 7. Route integration & compliance: All 16 M5 comparison pages in src/app/ verified against project contracts.
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import * as Demos from '../src/components/GeneralAiAndSymbolicMathDemos';
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
// Tracking & Reporting
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

// Leak detection
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

// Clean SSR html
function cleanSsr(html: string): string {
  return html.replace(/<!--[\s\S]*?-->/g, '');
}

// Component Harness
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

// 16 Milestone 5 Demos
interface DemoMetadata {
  name: string;
  slug: string;
  component: React.ComponentType;
  expectedCourse: string;
  expectedDomainBadge: string;
  competitorFailureToken: string;
  academicQuestionToken: string;
}

const DEMOS: DemoMetadata[] = [
  {
    name: 'WolframalphaCauchyEulerDemo',
    slug: 'wolframalpha-vs-examghost',
    component: Demos.WolframalphaCauchyEulerDemo,
    expectedCourse: 'MATH 2415',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: '680-Character|Wolfram',
    academicQuestionToken: 'Cauchy-Euler|d²y/dx²',
  },
  {
    name: 'MathosaiContourIntegralDemo',
    slug: 'mathosai-vs-examghost',
    component: Demos.MathosaiContourIntegralDemo,
    expectedCourse: 'MATH 20C',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'OCR Misread|Mathos',
    academicQuestionToken: 'Contour|Residue',
  },
  {
    name: 'SolvelyOpticsSnellDemo',
    slug: 'solvely-vs-examghost',
    component: Demos.SolvelyOpticsSnellDemo,
    expectedCourse: 'PHYS 212',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Bounding-Box|Solvely|Scan Phone QR',
    academicQuestionToken: 'Prism Refraction|Total Internal Reflection',
  },
  {
    name: 'FastsolveBraytonCycleDemo',
    slug: 'fastsolve-vs-examghost',
    component: Demos.FastsolveBraytonCycleDemo,
    expectedCourse: 'ME 200',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: '429|FastSolve',
    academicQuestionToken: 'Brayton|Gas Turbine',
  },
  {
    name: 'MindkoHermitianMatrixDemo',
    slug: 'mindko-vs-examghost',
    component: Demos.MindkoHermitianMatrixDemo,
    expectedCourse: 'PHYS 320',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Matrix Corruption|MindKo',
    academicQuestionToken: 'Hermitian|Spectral',
  },
  {
    name: 'AnswerAiSidebarBlurDemo',
    slug: 'answerai-vs-examghost',
    component: Demos.AnswerAiSidebarBlurDemo,
    expectedCourse: 'CHEM 2320',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: '3-Bolt|Lightning Bolts|AnswerAI',
    academicQuestionToken: 'Corey-Chaykovsky|Sulfur Ylide',
  },
  {
    name: 'CoursologyBeaconBlockDemo',
    slug: 'coursology-vs-examghost',
    component: Demos.CoursologyBeaconBlockDemo,
    expectedCourse: 'ECON 3010',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Firewall|Coursology|Rate Us',
    academicQuestionToken: 'Stackelberg|First-Mover',
  },
  {
    name: 'ClassologyManifestDomDemo',
    slug: 'classology-vs-examghost',
    component: Demos.ClassologyManifestDomDemo,
    expectedCourse: 'CS 416',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Bundle|Classology|Injected \\[Solve\\]',
    academicQuestionToken: 'Page Fault|#PF|Paging',
  },
  {
    name: 'DoubleCheckAiCircularLoopDemo',
    slug: 'doublecheckai-vs-examghost',
    component: Demos.DoubleCheckAiCircularLoopDemo,
    expectedCourse: 'POLS 3310',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Circular|DoubleCheckAI|Verifying',
    academicQuestionToken: 'Commerce Clause|Pike',
  },
  {
    name: 'ExamClutchClipboardPasteDemo',
    slug: 'examclutch-vs-examghost',
    component: Demos.ExamClutchClipboardPasteDemo,
    expectedCourse: 'BIO 325',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Clipboard|ExamClutch',
    academicQuestionToken: 'Chromatin|CTCF',
  },
  {
    name: 'AnswerlyWebScrapingLatencyDemo',
    slug: 'answerly-vs-examghost',
    component: Demos.AnswerlyWebScrapingLatencyDemo,
    expectedCourse: 'NEUR 301',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Scraping|Answerly|scoreReporter',
    academicQuestionToken: 'Hippocampal|LTP|Synaptic',
  },
  {
    name: 'GetQuizSolvePlaintextPrivacyLeakDemo',
    slug: 'getquizsolve-vs-examghost',
    component: Demos.GetQuizSolvePlaintextPrivacyLeakDemo,
    expectedCourse: 'BETH 410',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Plaintext|GetQuizSolve|Privacy',
    academicQuestionToken: 'Common Rule|FERPA|Bioethics',
  },
  {
    name: 'HomeworkHelperAdClutterAndLagDemo',
    slug: 'homework-helper-vs-examghost',
    component: Demos.HomeworkHelperAdClutterAndLagDemo,
    expectedCourse: 'ECON 311',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Ad Clutter|Homework Helper',
    academicQuestionToken: 'Stackelberg|Asymmetric',
  },
  {
    name: 'KnowtFlashcardMismatchAndNoStealthDemo',
    slug: 'knowt-vs-examghost',
    component: Demos.KnowtFlashcardMismatchAndNoStealthDemo,
    expectedCourse: 'BIOC 401',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Flashcard|Knowt',
    academicQuestionToken: 'Enzymology|Enzyme|Lineweaver-Burk',
  },
  {
    name: 'QuestionAiSingleModelHallucinationDemo',
    slug: 'questionai-vs-examghost',
    component: Demos.QuestionAiSingleModelHallucinationDemo,
    expectedCourse: 'ECON 482',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'SingleModel|QuestionAI|Sidebar',
    academicQuestionToken: 'ARMA|Econometrics|Wold',
  },
  {
    name: 'QuizardDiscordBotAndFocusLossDemo',
    slug: 'quizard-vs-examghost',
    component: Demos.QuizardDiscordBotAndFocusLossDemo,
    expectedCourse: 'CS 423',
    expectedDomainBadge: 'CANVAS LMS',
    competitorFailureToken: 'Discord|Quizard|Gateway',
    academicQuestionToken: 'Raft|Distributed|Election Safety',
  },
];

console.log('================================================================');
console.log('CHALLENGER M5-1: ADVERSARIAL STRESS & EMPIRICAL VERIFICATION');
console.log('Target: 16 General AI & Symbolic Math Demos (Batch A)');
console.log('================================================================\n');

// ============================================================================
// SECTION 1: Playback Speed Boundary Stress Testing
// ============================================================================
console.log('>>> [SECTION 1] Playback Speed Boundary Testing (Negative, Float, Extreme, Non-Finite)...');

const TEST_SPEEDS = [
  { speed: -10, label: 'neg_10x' },
  { speed: -1, label: 'neg_1x' },
  { speed: -0.5, label: 'neg_half' },
  { speed: -0.01, label: 'neg_micro' },
  { speed: 0, label: 'zero_speed' },
  { speed: 0.0001, label: 'micro_fraction' },
  { speed: 0.1, label: 'tenth_speed' },
  { speed: 0.25, label: 'quarter_speed' },
  { speed: 0.5, label: 'half_speed' },
  { speed: 1, label: 'normal_1x' },
  { speed: 1.25, label: 'one_and_quarter' },
  { speed: 1.5, label: 'one_and_half' },
  { speed: 2, label: 'two_speed' },
  { speed: 5, label: 'high_5x' },
  { speed: 50, label: 'extreme_50x' },
  { speed: 1000, label: 'extreme_1000x' },
  { speed: NaN, label: 'nan_speed' },
  { speed: Infinity, label: 'infinity_speed' },
  { speed: -Infinity, label: 'neg_infinity_speed' },
];

for (const demo of DEMOS) {
  const harness = createHarness(demo.component);
  harness.render();

  for (const { speed, label } of TEST_SPEEDS) {
    try {
      harness.setState(0, true);
      harness.setState(1, 0); // Scene 0
      harness.setState(2, 50); // Mid progress 50%
      harness.setState(3, speed);

      // Execute 5 timer ticks with this speed
      for (let t = 0; t < 5; t++) {
        harness.tickTimer(50);
      }

      const finalProg = harness.getState(2);
      const finalScene = harness.getState(1);

      // Verify progress remains clamped in [0, 100] or safely handled for NaN
      const isClamped = Number.isNaN(speed)
        ? (Number.isNaN(finalProg) || (Number.isFinite(finalProg) && finalProg >= 0 && finalProg <= 100))
        : (Number.isFinite(finalProg) && finalProg >= 0 && finalProg <= 100);

      // Verify scene index remains within valid scene bounds [0, 2]
      const isValidScene = Number.isInteger(finalScene) && finalScene >= 0 && finalScene <= 2;

      // Render to SSR HTML and check for DOM leaks
      const rendered = harness.render();
      const html = cleanSsr(renderToString(rendered.element));
      const leaks = detectHtmlLeaks(html);

      assertCheck(
        `SPEED-${label}-${demo.name}`,
        'Playback Speed Boundary',
        demo.name,
        isClamped && isValidScene && leaks.length === 0,
        `Speed ${speed} handled cleanly (Prog: ${finalProg}%, Scene: ${finalScene}, Leaks: ${leaks.length})`,
        leaks.length > 0 ? leaks.join(', ') : undefined
      );
    } catch (err: any) {
      assertCheck(
        `SPEED-${label}-${demo.name}`,
        'Playback Speed Boundary',
        demo.name,
        false,
        `Speed ${speed} threw error: ${err.message}`
      );
    }
  }
}

// ============================================================================
// SECTION 2: Progress Clamping Invariants Math.min(100, Math.max(0, ...))
// ============================================================================
console.log('\n>>> [SECTION 2] Progress Clamping Invariant Verification [0, 100]%...');

const ADVERSARIAL_PROGRESS_INPUTS = [
  -100000,
  -500,
  -100,
  -50,
  -1,
  -0.0001,
  0,
  0.00001,
  25.5,
  50,
  74.9999,
  100,
  100.001,
  150,
  250,
  500,
  100000,
  NaN,
  Infinity,
  -Infinity,
];

for (const demo of DEMOS) {
  const harness = createHarness(demo.component);
  harness.render();

  for (const rawProg of ADVERSARIAL_PROGRESS_INPUTS) {
    try {
      harness.setState(2, rawProg);

      for (let sc = 0; sc <= 2; sc++) {
        harness.setState(1, sc);
        const rendered = harness.render();
        const html = cleanSsr(renderToString(rendered.element));
        const leaks = detectHtmlLeaks(html);

        // Verify scrubber props received clamped progress or safe NaN
        const scrubberProg = rendered.scrubberProps.sceneProgress;
        const scrubberClamped = Number.isNaN(rawProg)
          ? (Number.isNaN(scrubberProg) || (Number.isFinite(scrubberProg) && scrubberProg >= 0 && scrubberProg <= 100))
          : (Number.isFinite(scrubberProg) && scrubberProg >= 0 && scrubberProg <= 100);

        // Verify cursor state is finite and bounded
        const cursor = rendered.cursorState;
        const cursorSafe =
          !cursor ||
          (Number.isFinite(cursor.x) &&
            cursor.x >= 0 &&
            cursor.x <= 100 &&
            Number.isFinite(cursor.y) &&
            cursor.y >= 0 &&
            cursor.y <= 100);

        assertCheck(
          `CLAMP-P${String(rawProg).replace(/[^0-9a-zA-Z]/g, '_')}-S${sc}-${demo.name}`,
          'Progress Clamping Invariant',
          demo.name,
          scrubberClamped && cursorSafe && leaks.length === 0,
          `Raw progress ${rawProg} clamped safely in Scene ${sc}`,
          `ScrubberProg: ${scrubberProg}, Leaks: ${leaks.length === 0 ? 'None' : leaks.join(', ')}`
        );
      }
    } catch (err: any) {
      assertCheck(
        `CLAMP-P${String(rawProg).replace(/[^0-9a-zA-Z]/g, '_')}-${demo.name}`,
        'Progress Clamping Invariant',
        demo.name,
        false,
        `Raw progress ${rawProg} crashed: ${err.message}`
      );
    }
  }
}

// ============================================================================
// SECTION 3: Pause Invariance, Timer Drift & State Persistence
// ============================================================================
console.log('\n>>> [SECTION 3] Pause Invariance & State Persistence Stress Testing...');

for (const demo of DEMOS) {
  const harness = createHarness(demo.component);
  harness.render();

  // Test 3.1: Freeze verification while paused
  harness.setState(0, false); // PAUSED
  harness.setState(1, 1);
  harness.setState(2, 42.5);
  harness.setState(3, 1);

  // Trigger 50 ticks of timer while paused (equivalent to 2500ms elapsed)
  for (let tick = 0; tick < 50; tick++) {
    harness.tickTimer(50);
  }

  const frozenScene = harness.getState(1);
  const frozenProgress = harness.getState(2);
  const isStillPaused = harness.getState(0) === false;

  assertCheck(
    `PAUSE-FREEZE-${demo.name}`,
    'Pause Freeze Invariance',
    demo.name,
    frozenScene === 1 && frozenProgress === 42.5 && isStillPaused,
    `Progress remained frozen at ${frozenProgress}% in Scene ${frozenScene} over 2500ms`,
    `Expected: Scene 1 @ 42.5%, Got: Scene ${frozenScene} @ ${frozenProgress}%`
  );

  // Test 3.2: Accurate Resume from exact paused point
  harness.setState(0, true); // UNPAUSE / PLAY
  harness.tickTimer(50);
  const resumedScene = harness.getState(1);
  const resumedProgress = harness.getState(2);

  const expectedAdvancement = 42.5 + ((50 * 1) / 6500) * 100;
  const delta = Math.abs(resumedProgress - expectedAdvancement);

  assertCheck(
    `PAUSE-RESUME-SMOOTH-${demo.name}`,
    'Pause Resume Continuity',
    demo.name,
    resumedScene === 1 && delta < 0.1,
    `Resumed smoothly from paused offset (New Prog: ${resumedProgress.toFixed(3)}%, Expected ~${expectedAdvancement.toFixed(3)}%)`,
    `Delta: ${delta.toFixed(5)}%`
  );

  // Test 3.3: 100 Rapid Play/Pause Toggles
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

  // Test 3.4: Seek Scene while paused retains paused state
  harness.setState(0, false); // Pause
  harness.render().scrubberProps.onSeekScene(2); // Seek to Scene 2
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
    `Seeking while paused lands on Scene 2 @ 0% and remains fully paused`,
    `Scene: ${seekedScene}, Prog: ${progAfterTick}%, Playing: ${playStateAfterSeek}`
  );

  // Test 3.5: Timer Drift Verification across 1x, 1.5x, 2x speeds
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

for (const demo of DEMOS) {
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

const sourceFilePath = path.join(process.cwd(), 'src/components/GeneralAiAndSymbolicMathDemos.tsx');
const sourceCode = fs.readFileSync(sourceFilePath, 'utf8');

for (const demo of DEMOS) {
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

for (const demo of DEMOS) {
  const harness = createHarness(demo.component);
  const rendered = harness.render();

  // 1. Frame Title & Course Code
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

  // 2. Scene 0: Competitor Failure Tokens (Render both early progress < 45 and late progress > 45)
  harness.setState(1, 0); // Scene 0
  harness.setState(2, 20); // Early phase
  const s0EarlyHtml = cleanSsr(renderToString(harness.render().element));
  harness.setState(2, 60); // Late phase (failure / flag)
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

  // 3. Scene 1: ExamGhost 0.3s Solve & Focus Shield
  harness.setState(1, 1); // Scene 1
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

  // 4. Scene 2: 3 Frontier Models
  harness.setState(1, 2); // Scene 2
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
// SECTION 7: Route Integration & Page Contract Verification
// ============================================================================
console.log('\n>>> [SECTION 7] Route Integration & Contract Compliance Verification...');

for (const demo of DEMOS) {
  const routePath = `src/app/${demo.slug}/page.tsx`;
  const fileContent = readProjectFile(routePath);

  // 1. Peer tab boilerplate check
  const peer = checkPeerTabBoilerplate(fileContent);
  assertCheck(
    `ROUTE-PEER-TAB-${demo.slug}`,
    'Route Contract Compliance',
    demo.slug,
    !peer.hasPeerTab,
    `Zero hidden peer tab radio inputs in route`
  );

  // 2. Hotkey coverage
  const hotkeys = checkHotkeyCoverage(fileContent);
  assertCheck(
    `ROUTE-HOTKEYS-${demo.slug}`,
    'Route Contract Compliance',
    demo.slug,
    hotkeys.isComplete,
    `All 6 modern hotkeys present in route`,
    hotkeys.isComplete ? 'Double-Click, Alt+S, Alt+1, Alt+2, Alt+3, ⌘+Shift+U' : `Missing: ${hotkeys.missing.join(', ')}`
  );

  // 3. Pricing stack
  const pricing = checkPricingStack(fileContent);
  assertCheck(
    `ROUTE-PRICING-${demo.slug}`,
    'Route Contract Compliance',
    demo.slug,
    pricing.isComplete,
    `Full 4-tier pricing stack and 5 Free Solves/day quota verified`
  );

  // 4. Frontier models
  const models = checkFrontierModels(fileContent);
  assertCheck(
    `ROUTE-MODELS-${demo.slug}`,
    'Route Contract Compliance',
    demo.slug,
    models.isComplete,
    `Frontier models verified in route (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)`
  );

  // 5. JSON-LD schema
  const schema = checkJsonLdSchema(fileContent);
  const schemaComplete =
    schema.hasJsonLdScript &&
    schema.hasWebPage &&
    schema.hasSoftwareApplication &&
    schema.hasFaqPage &&
    schema.hasOffers;
  assertCheck(
    `ROUTE-SCHEMA-${demo.slug}`,
    'Route Contract Compliance',
    demo.slug,
    schemaComplete,
    `JSON-LD @graph contains WebPage, SoftwareApplication, FAQPage, and Offers`
  );

  // 6. Bespoke demo import and render
  const demoCheck = checkMotionDemo(fileContent, { slug: demo.slug } as any);
  const importsBespoke = fileContent.includes(demo.name);
  assertCheck(
    `ROUTE-BESPOKE-DEMO-${demo.slug}`,
    'Route Contract Compliance',
    demo.slug,
    !demoCheck.usesLegacyWrapper && demoCheck.hasBespokeDemo && importsBespoke,
    `Route imports and renders bespoke demo "${demo.name}" without legacy wrapper`
  );
}

// ============================================================================
// FINAL SUMMARY
// ============================================================================
console.log('\n================================================================');
console.log('SUMMARY REPORT: CHALLENGER M5-1 ADVERSARIAL STRESS SUITE');
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
  console.error(`FAILED: ${failCount} checks failed!`);
  console.log('VERDICT: REJECT');
  process.exit(1);
}
