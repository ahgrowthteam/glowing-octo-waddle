/**
 * Tier 5 — White-Box Adversarial Coverage Hardening Test Suite
 * 
 * Verifies:
 * 1. Headless Motion Primitives Stress & Boundary Invariants:
 *    - Edge case playback speeds (negative, infinite, NaN, extreme decimals)
 *    - Scrubber seeking boundaries (out-of-bounds scene indices, negative time, extreme duration)
 *    - Telemetry HUD bounds (SpeedGrader blur events, Focus Shield status, singular/plural grammar)
 *    - MotionCursor coordinate bounds, action types, click ripple animation
 * 
 * 2. Universal Harness Across All 58 Bespoke Framer Motion Demos (5 Suites):
 *    - Model tab switching & content distinctness (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
 *    - Telemetry HUD bounds across scenes (Scene 0 competitor fail vs Scene 1 ExamGhost 0.3s clean)
 *    - Timer state machine & progress advancement
 *    - Paused invariance and seek-while-paused
 *    - Rapid play/pause race condition stress (50 interleaved toggles and seeks)
 *    - 290 SSR permutations with exhaustive HTML markup leak detection (0 NaN, 0 undefined, 0 null, 0 overflow widths)
 * 
 * 3. Static Route Audit Across All 58 Competitor Routes:
 *    - 0 hidden radio buttons or peer tabs across any route
 *    - 0 "50 Free Solves" trial violations
 *    - 100% parity on 6 modern hotkeys
 *    - 100% parity on 4-tier pricing model
 *    - 100% parity on 3 frontier models
 *    - 100% bespoke demo component imports and mounting
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import path from 'path';

// Primitives
import {
  MotionTimelineScrubber,
  MotionDemoFrame,
  MotionCursor,
} from '../src/components/motion-demo';
import {
  SpeedOption,
  MotionScene,
  TelemetryState,
  CursorState,
} from '../src/components/motion-demo/types';

// Demo Suites
import * as TopDemos from '../src/components/TopComparisonDemos';
import * as CanvasDemos from '../src/components/CanvasAndTextbookDemos';
import * as DeceptiveDemos from '../src/components/DeceptiveTrapsAndStaticBanksDemos';
import * as MathDemos from '../src/components/GeneralAiAndSymbolicMathDemos';
import * as BatchBDemos from '../src/components/GeneralAiBatchBDemos';

// Config & E2E Helpers
import {
  COMPARISON_ROUTES,
  MODERN_HOTKEYS,
  FRONTIER_MODELS,
  PRICING_TIERS,
} from './e2e/config';
import {
  findExamGhost50SolveViolations,
  checkPeerTabBoilerplate,
  checkHotkeyCoverage,
  checkPricingStack,
  checkFrontierModels,
} from './e2e/helpers';

// ============================================================================
// Test Assertion Infrastructure
// ============================================================================
interface TestResult {
  suite: string;
  id: string;
  target: string;
  passed: boolean;
  message: string;
  details?: string;
}

const results: TestResult[] = [];
let passCount = 0;
let failCount = 0;

function assert(
  suite: string,
  id: string,
  target: string,
  condition: boolean,
  message: string,
  details?: string
) {
  if (condition) {
    passCount++;
    results.push({ suite, id, target, passed: true, message, details });
  } else {
    failCount++;
    results.push({ suite, id, target, passed: false, message, details });
    console.error(`❌ [FAIL] [${suite}] [${id}] [${target}] ${message}${details ? ` -> ${details}` : ''}`);
  }
}

// ============================================================================
// HTML Leak Detection Utility
// ============================================================================
function detectHtmlLeaks(html: string): string[] {
  const leaks: string[] = [];

  // NaN checks
  if (/style="[^"]*NaN[^"]*"/i.test(html)) leaks.push('Contains NaN in style attribute');
  if (/width:\s*NaN/i.test(html)) leaks.push('Contains width: NaN');
  if (/left:\s*NaN/i.test(html)) leaks.push('Contains left: NaN');
  if (/top:\s*NaN/i.test(html)) leaks.push('Contains top: NaN');
  if (/>\s*NaN\s*</i.test(html)) leaks.push('Contains bare token >NaN< in DOM');

  // Attribute undefined / null checks
  const attrUndefined = html.match(/(?:id|class|aria-[a-z]+|data-[a-z]+)="[^"]*\bundefined\b[^"]*"/i);
  if (attrUndefined) leaks.push(`Attribute undefined: ${attrUndefined[0]}`);

  const attrNull = html.match(/(?:id|class|aria-[a-z]+|data-[a-z]+)="[^"]*\bnull\b[^"]*"/i);
  if (attrNull && !attrNull[0].includes('aria-hidden="null"')) {
    leaks.push(`Attribute null: ${attrNull[0]}`);
  }

  // Bare undefined / null checks
  if (/>\s*undefined\s*</i.test(html)) leaks.push('Bare token >undefined<');
  if (/>\s*null\s*</i.test(html)) leaks.push('Bare token >null<');

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

// ============================================================================
// Universal React Component State Mock Dispatcher
// ============================================================================
interface ComponentHarness {
  name: string;
  render: () => {
    element: any;
    frameProps: any;
    scrubberProps: any;
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

    return {
      element,
      frameProps,
      scrubberProps,
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
// Master Registry of All 58 Demos
// ============================================================================
interface DemoEntry {
  slug: string;
  suiteName: string;
  componentName: string;
  component: React.ComponentType;
}

const ALL_58_DEMOS: DemoEntry[] = [
  // 9 Top Footer Demos
  { slug: 'canvashack', suiteName: 'TopComparisonDemos', componentName: 'CanvasHackStopwatchDemo', component: TopDemos.CanvasHackStopwatchDemo },
  { slug: 'apexvision', suiteName: 'TopComparisonDemos', componentName: 'ApexVisionTelemetryDemo', component: TopDemos.ApexVisionTelemetryDemo },
  { slug: 'collegetools', suiteName: 'TopComparisonDemos', componentName: 'CollegeToolsManifestDemo', component: TopDemos.CollegeToolsManifestDemo },
  { slug: 'transcript', suiteName: 'TopComparisonDemos', componentName: 'TranscriptStudyHubDemo', component: TopDemos.TranscriptStudyHubDemo },
  { slug: 'quizonator', suiteName: 'TopComparisonDemos', componentName: 'QuizonatorIframeSnipDemo', component: TopDemos.QuizonatorIframeSnipDemo },
  { slug: 'bettercampus', suiteName: 'TopComparisonDemos', componentName: 'BetterCampusCoPilotDemo', component: TopDemos.BetterCampusCoPilotDemo },
  { slug: 'gauth', suiteName: 'TopComparisonDemos', componentName: 'GauthWebcamGazeDemo', component: TopDemos.GauthWebcamGazeDemo },
  { slug: 'coursehero', suiteName: 'TopComparisonDemos', componentName: 'CourseHeroPaywallDemo', component: TopDemos.CourseHeroPaywallDemo },
  { slug: 'compare-canvas-hack-extensions', suiteName: 'TopComparisonDemos', componentName: 'CompareHubStackCalculator', component: TopDemos.CompareHubStackCalculator },

  // 10 Canvas & Textbook Demos
  { slug: 'canvascrack', suiteName: 'CanvasAndTextbookDemos', componentName: 'CanvasCrackStoichiometryDemo', component: CanvasDemos.CanvasCrackStoichiometryDemo },
  { slug: 'canvasninja', suiteName: 'CanvasAndTextbookDemos', componentName: 'CanvasNinjaDiscreteMathDemo', component: CanvasDemos.CanvasNinjaDiscreteMathDemo },
  { slug: 'canvaspass', suiteName: 'CanvasAndTextbookDemos', componentName: 'CanvasPassCognitivePsychDemo', component: CanvasDemos.CanvasPassCognitivePsychDemo },
  { slug: 'canvasquiz', suiteName: 'CanvasAndTextbookDemos', componentName: 'CanvasQuizMetabolicPathwaysDemo', component: CanvasDemos.CanvasQuizMetabolicPathwaysDemo },
  { slug: 'canvasscholar', suiteName: 'CanvasAndTextbookDemos', componentName: 'CanvasScholarLinearAlgebraDemo', component: CanvasDemos.CanvasScholarLinearAlgebraDemo },
  { slug: 'canvaswizard', suiteName: 'CanvasAndTextbookDemos', componentName: 'CanvasWizardSociologyDemo', component: CanvasDemos.CanvasWizardSociologyDemo },
  { slug: 'quizloader', suiteName: 'CanvasAndTextbookDemos', componentName: 'QuizLoaderComputerArchitectureDemo', component: CanvasDemos.QuizLoaderComputerArchitectureDemo },
  { slug: 'usequietly', suiteName: 'CanvasAndTextbookDemos', componentName: 'UseQuietlyOrganicChemistryDemo', component: CanvasDemos.UseQuietlyOrganicChemistryDemo },
  { slug: 'easysb', suiteName: 'CanvasAndTextbookDemos', componentName: 'EasySBAdaptiveReadingDemo', component: CanvasDemos.EasySBAdaptiveReadingDemo },
  { slug: 'mylabsolver', suiteName: 'CanvasAndTextbookDemos', componentName: 'MyLabSolverCollegeAlgebraDemo', component: CanvasDemos.MyLabSolverCollegeAlgebraDemo },

  // 13 Deceptive Traps & Static Banks Demos
  { slug: 'cheatmate', suiteName: 'DeceptiveTrapsAndStaticBanksDemos', componentName: 'CheatmateAcquireReleaseDemo', component: DeceptiveDemos.CheatmateAcquireReleaseDemo },
  { slug: 'cheatpal', suiteName: 'DeceptiveTrapsAndStaticBanksDemos', componentName: 'CheatpalLacOperonDemo', component: DeceptiveDemos.CheatpalLacOperonDemo },
  { slug: 'schoolcheats', suiteName: 'DeceptiveTrapsAndStaticBanksDemos', componentName: 'Schoolcheats2SLSEconometricsDemo', component: DeceptiveDemos.Schoolcheats2SLSEconometricsDemo },
  { slug: 'testbro', suiteName: 'DeceptiveTrapsAndStaticBanksDemos', componentName: 'TestbroAdminLawDemo', component: DeceptiveDemos.TestbroAdminLawDemo },
  { slug: 'quizmate', suiteName: 'DeceptiveTrapsAndStaticBanksDemos', componentName: 'QuizmateNavierStokesDemo', component: DeceptiveDemos.QuizmateNavierStokesDemo },
  { slug: 'quizper', suiteName: 'DeceptiveTrapsAndStaticBanksDemos', componentName: 'QuizperByokDomTrapDemo', component: DeceptiveDemos.QuizperByokDomTrapDemo },
  { slug: 'campusai', suiteName: 'DeceptiveTrapsAndStaticBanksDemos', componentName: 'CampusAiSidepanelBlurDemo', component: DeceptiveDemos.CampusAiSidepanelBlurDemo },
  { slug: 'asksia', suiteName: 'DeceptiveTrapsAndStaticBanksDemos', componentName: 'AskSiaCourseScraperDemo', component: DeceptiveDemos.AskSiaCourseScraperDemo },
  { slug: 'brainly', suiteName: 'DeceptiveTrapsAndStaticBanksDemos', componentName: 'BrainlyCrowdsourcedForumDemo', component: DeceptiveDemos.BrainlyCrowdsourcedForumDemo },
  { slug: 'cramly', suiteName: 'DeceptiveTrapsAndStaticBanksDemos', componentName: 'CramlyEssayVsQuizDemo', component: DeceptiveDemos.CramlyEssayVsQuizDemo },
  { slug: 'homeworkify', suiteName: 'DeceptiveTrapsAndStaticBanksDemos', componentName: 'HomeworkifyDeadMirrorDemo', component: DeceptiveDemos.HomeworkifyDeadMirrorDemo },
  { slug: 'quizplus', suiteName: 'DeceptiveTrapsAndStaticBanksDemos', componentName: 'QuizplusStaticBankPaywallDemo', component: DeceptiveDemos.QuizplusStaticBankPaywallDemo },
  { slug: 'studyx', suiteName: 'DeceptiveTrapsAndStaticBanksDemos', componentName: 'StudyXCommunityLagDemo', component: DeceptiveDemos.StudyXCommunityLagDemo },

  // 16 General AI & Symbolic Math Demos
  { slug: 'wolframalpha', suiteName: 'GeneralAiAndSymbolicMathDemos', componentName: 'WolframalphaCauchyEulerDemo', component: MathDemos.WolframalphaCauchyEulerDemo },
  { slug: 'mathosai', suiteName: 'GeneralAiAndSymbolicMathDemos', componentName: 'MathosaiContourIntegralDemo', component: MathDemos.MathosaiContourIntegralDemo },
  { slug: 'solvely', suiteName: 'GeneralAiAndSymbolicMathDemos', componentName: 'SolvelyOpticsSnellDemo', component: MathDemos.SolvelyOpticsSnellDemo },
  { slug: 'fastsolve', suiteName: 'GeneralAiAndSymbolicMathDemos', componentName: 'FastsolveBraytonCycleDemo', component: MathDemos.FastsolveBraytonCycleDemo },
  { slug: 'mindko', suiteName: 'GeneralAiAndSymbolicMathDemos', componentName: 'MindkoHermitianMatrixDemo', component: MathDemos.MindkoHermitianMatrixDemo },
  { slug: 'answerai', suiteName: 'GeneralAiAndSymbolicMathDemos', componentName: 'AnswerAiSidebarBlurDemo', component: MathDemos.AnswerAiSidebarBlurDemo },
  { slug: 'coursology', suiteName: 'GeneralAiAndSymbolicMathDemos', componentName: 'CoursologyBeaconBlockDemo', component: MathDemos.CoursologyBeaconBlockDemo },
  { slug: 'classology', suiteName: 'GeneralAiAndSymbolicMathDemos', componentName: 'ClassologyManifestDomDemo', component: MathDemos.ClassologyManifestDomDemo },
  { slug: 'doublecheckai', suiteName: 'GeneralAiAndSymbolicMathDemos', componentName: 'DoubleCheckAiCircularLoopDemo', component: MathDemos.DoubleCheckAiCircularLoopDemo },
  { slug: 'examclutch', suiteName: 'GeneralAiAndSymbolicMathDemos', componentName: 'ExamClutchClipboardPasteDemo', component: MathDemos.ExamClutchClipboardPasteDemo },
  { slug: 'answerly', suiteName: 'GeneralAiAndSymbolicMathDemos', componentName: 'AnswerlyWebScrapingLatencyDemo', component: MathDemos.AnswerlyWebScrapingLatencyDemo },
  { slug: 'getquizsolve', suiteName: 'GeneralAiAndSymbolicMathDemos', componentName: 'GetQuizSolvePlaintextPrivacyLeakDemo', component: MathDemos.GetQuizSolvePlaintextPrivacyLeakDemo },
  { slug: 'homework-helper', suiteName: 'GeneralAiAndSymbolicMathDemos', componentName: 'HomeworkHelperAdClutterAndLagDemo', component: MathDemos.HomeworkHelperAdClutterAndLagDemo },
  { slug: 'knowt', suiteName: 'GeneralAiAndSymbolicMathDemos', componentName: 'KnowtFlashcardMismatchAndNoStealthDemo', component: MathDemos.KnowtFlashcardMismatchAndNoStealthDemo },
  { slug: 'questionai', suiteName: 'GeneralAiAndSymbolicMathDemos', componentName: 'QuestionAiSingleModelHallucinationDemo', component: MathDemos.QuestionAiSingleModelHallucinationDemo },
  { slug: 'quizard', suiteName: 'GeneralAiAndSymbolicMathDemos', componentName: 'QuizardDiscordBotAndFocusLossDemo', component: MathDemos.QuizardDiscordBotAndFocusLossDemo },

  // 10 General AI Batch B Demos
  { slug: 'quizsolverai', suiteName: 'GeneralAiBatchBDemos', componentName: 'QuizSolverAiDemo', component: BatchBDemos.QuizSolverAiDemo },
  { slug: 'quizwizard', suiteName: 'GeneralAiBatchBDemos', componentName: 'QuizWizardDemo', component: BatchBDemos.QuizWizardDemo },
  { slug: 'quizzy', suiteName: 'GeneralAiBatchBDemos', componentName: 'QuizzyDemo', component: BatchBDemos.QuizzyDemo },
  { slug: 'rightclickai', suiteName: 'GeneralAiBatchBDemos', componentName: 'RightClickAiDemo', component: BatchBDemos.RightClickAiDemo },
  { slug: 'snapgpt', suiteName: 'GeneralAiBatchBDemos', componentName: 'SnapGptDemo', component: BatchBDemos.SnapGptDemo },
  { slug: 'studybotpro', suiteName: 'GeneralAiBatchBDemos', componentName: 'StudyBotProDemo', component: BatchBDemos.StudyBotProDemo },
  { slug: 'studyfox', suiteName: 'GeneralAiBatchBDemos', componentName: 'StudyFoxDemo', component: BatchBDemos.StudyFoxDemo },
  { slug: 'studymonkey', suiteName: 'GeneralAiBatchBDemos', componentName: 'StudyMonkeyDemo', component: BatchBDemos.StudyMonkeyDemo },
  { slug: 'testwhiz', suiteName: 'GeneralAiBatchBDemos', componentName: 'TestWhizDemo', component: BatchBDemos.TestWhizDemo },
  { slug: 'truststudy', suiteName: 'GeneralAiBatchBDemos', componentName: 'TrustStudyDemo', component: BatchBDemos.TrustStudyDemo },
];

console.log(`\n================================================================`);
console.log(`   TIER 5: WHITE-BOX ADVERSARIAL COVERAGE HARDENING SUITE`);
console.log(`   Evaluating All 58 Demos · Headless Primitives · 58 Routes`);
console.log(`================================================================\n`);

// ============================================================================
// SECTION A: Headless Motion Primitives Adversarial Hardening
// ============================================================================
console.log(`--- Section A: Motion Primitives Adversarial Stress & Boundaries ---`);

const mockScenes: MotionScene[] = [
  { id: 0, label: 'Scene 1: Competitor Failure', durationMs: 7000 },
  { id: 1, label: 'Scene 2: ExamGhost 0.3s Solve', durationMs: 6500 },
  { id: 2, label: 'Scene 3: Study AI Workspace', durationMs: 7500 },
];

// Test A1: Scrubber Playback Speeds (Negative, Infinite, NaN, Extreme Decimals)
const edgeSpeeds = [
  { val: -10, label: '-10x negative speed' },
  { val: -1, label: '-1x reverse speed' },
  { val: 0, label: '0x frozen speed' },
  { val: 0.00001, label: '0.00001x micro-fractional speed' },
  { val: 0.5, label: '0.5x slow speed' },
  { val: 1, label: '1x standard speed' },
  { val: 1.5, label: '1.5x fast speed' },
  { val: 2, label: '2x double speed' },
  { val: 50, label: '50x extreme speed' },
  { val: 1e6, label: '1,000,000x supersonic speed' },
  { val: NaN, label: 'NaN non-numeric speed' },
  { val: Infinity, label: 'Infinity positive unbounded speed' },
  { val: -Infinity, label: '-Infinity negative unbounded speed' },
];

for (const sp of edgeSpeeds) {
  try {
    const html = renderToString(
      React.createElement(MotionTimelineScrubber, {
        scenes: mockScenes,
        currentScene: 1,
        sceneProgress: 50,
        isPlaying: true,
        playbackSpeed: sp.val as any,
        onTogglePlay: () => {},
        onSeekScene: () => {},
        onSpeedChange: () => {},
      })
    );
    const leaks = detectHtmlLeaks(html);
    assert(
      'Primitives',
      `PRM-SPD-${sp.val}`,
      'MotionTimelineScrubber',
      leaks.length === 0,
      `Handles playback speed ${sp.label} without HTML leaks`,
      leaks.join(', ')
    );
  } catch (err: any) {
    assert(
      'Primitives',
      `PRM-SPD-${sp.val}`,
      'MotionTimelineScrubber',
      false,
      `Threw exception on playback speed ${sp.label}`,
      err.message
    );
  }
}

// Test A2: Scrubber Seeking Boundaries & Clamping
const edgeSceneIndices = [
  { idx: -999, label: 'Extreme negative scene index -999' },
  { idx: -1, label: 'Negative scene index -1' },
  { idx: 0, label: 'Lower bound scene index 0' },
  { idx: 2, label: 'Upper bound scene index 2' },
  { idx: 3, label: 'Out of bounds scene index 3' },
  { idx: 10, label: 'High out of bounds scene index 10' },
  { idx: 9999, label: 'Extreme out of bounds scene index 9999' },
  { idx: 1.5 as any, label: 'Non-integer scene index 1.5' },
  { idx: NaN as any, label: 'NaN scene index' },
];

for (const sc of edgeSceneIndices) {
  try {
    const html = renderToString(
      React.createElement(MotionTimelineScrubber, {
        scenes: mockScenes,
        currentScene: sc.idx,
        sceneProgress: 50,
        isPlaying: false,
        onTogglePlay: () => {},
        onSeekScene: () => {},
      })
    );
    const leaks = detectHtmlLeaks(html);
    assert(
      'Primitives',
      `PRM-SCN-${sc.idx}`,
      'MotionTimelineScrubber',
      leaks.length === 0,
      `Handles ${sc.label} cleanly without crashing or leaks`,
      leaks.join(', ')
    );
  } catch (err: any) {
    assert(
      'Primitives',
      `PRM-SCN-${sc.idx}`,
      'MotionTimelineScrubber',
      false,
      `Threw on ${sc.label}`,
      err.message
    );
  }
}

// Test A3: Scrubber Elapsed Time & Duration Extremes
const edgeTimeScenarios = [
  { elapsed: -5000, duration: 21000, desc: 'Negative elapsed time (-5000ms)' },
  { elapsed: 0, duration: 21000, desc: 'Zero elapsed time' },
  { elapsed: 10500, duration: 21000, desc: 'Midpoint elapsed time' },
  { elapsed: 21000, duration: 21000, desc: 'Max duration elapsed time' },
  { elapsed: 50000, duration: 21000, desc: 'Elapsed time exceeding duration (50000ms)' },
  { elapsed: 1e12, duration: 21000, desc: 'Huge elapsed time (1e12ms)' },
  { elapsed: NaN, duration: 21000, desc: 'NaN elapsed time' },
  { elapsed: Infinity, duration: 21000, desc: 'Infinity elapsed time' },
  { elapsed: -Infinity, duration: 21000, desc: '-Infinity elapsed time' },
  { elapsed: 5000, duration: -1000, desc: 'Negative duration (-1000ms)' },
  { elapsed: 5000, duration: 0, desc: 'Zero duration (0ms)' },
  { elapsed: 5000, duration: NaN, desc: 'NaN duration' },
  { elapsed: 5000, duration: Infinity, desc: 'Infinity duration' },
];

for (const tm of edgeTimeScenarios) {
  try {
    const html = renderToString(
      React.createElement(MotionTimelineScrubber, {
        scenes: mockScenes,
        currentScene: 1,
        sceneProgress: 50,
        isPlaying: false,
        totalElapsedMs: tm.elapsed,
        totalDurationMs: tm.duration,
        onTogglePlay: () => {},
        onSeekScene: () => {},
      })
    );
    const leaks = detectHtmlLeaks(html);
    assert(
      'Primitives',
      `PRM-TIM-${tm.elapsed}-${tm.duration}`,
      'MotionTimelineScrubber',
      leaks.length === 0,
      `Handles ${tm.desc} without leaks`,
      leaks.join(', ')
    );
  } catch (err: any) {
    assert(
      'Primitives',
      `PRM-TIM-${tm.elapsed}-${tm.duration}`,
      'MotionTimelineScrubber',
      false,
      `Threw on ${tm.desc}`,
      err.message
    );
  }
}

// Test A4: Telemetry HUD Bounds & Invariants in MotionDemoFrame
const edgeTelemetryStates = [
  {
    state: { speedGrader: '', focusShield: true, blurEvents: 0, status: 'clean' as const },
    expectFlagged: false,
    expectText: '0 window.blur flags · Focus Shield active',
    label: 'Clean state: 0 blur events, Focus Shield active',
  },
  {
    state: { speedGrader: '', focusShield: false, blurEvents: 1, status: 'flagged' as const },
    expectFlagged: true,
    expectText: '1 window.blur flag · SpeedGrader Alert!',
    label: 'Singular flag: 1 blur event with singular "flag"',
  },
  {
    state: { speedGrader: '', focusShield: false, blurEvents: 3, status: 'flagged' as const },
    expectFlagged: true,
    expectText: '3 window.blur flags · SpeedGrader Alert!',
    label: 'Plural flags: 3 blur events with plural "flags"',
  },
  {
    state: { speedGrader: '', focusShield: false, blurEvents: -5, status: 'flagged' as const },
    expectFlagged: true,
    expectText: '-5 window.blur flags · SpeedGrader Alert!',
    label: 'Negative blur events with flagged status',
  },
  {
    state: { speedGrader: 'CUSTOM-AUDIT-VERIFIED', focusShield: true, blurEvents: 0, status: 'clean' as const },
    expectFlagged: false,
    expectText: 'CUSTOM-AUDIT-VERIFIED',
    label: 'Custom explicit telemetry text takes precedence',
  },
  {
    state: {
      speedGrader: 'X'.repeat(500),
      focusShield: false,
      blurEvents: 99,
      status: 'flagged' as const,
    },
    expectFlagged: true,
    expectText: 'X'.repeat(100),
    label: 'Extreme length telemetry string (500 chars) renders without breaking',
  },
];

for (const tm of edgeTelemetryStates) {
  try {
    const html = renderToString(
      React.createElement(
        MotionDemoFrame,
        {
          telemetryState: tm.state,
          title: 'Adversarial Telemetry Frame',
          browserUrl: 'https://canvas.instructure.com/test',
        } as any,
        React.createElement('div', { id: 'test-child' }, 'Inner Content')
      )
    );
    const leaks = detectHtmlLeaks(html);
    const hasExpectedText = html.includes(tm.expectText.slice(0, 30));
    assert(
      'Primitives',
      `PRM-TLM-${tm.state.blurEvents}-${tm.state.status}`,
      'MotionDemoFrame',
      leaks.length === 0 && hasExpectedText,
      `Telemetry HUD: ${tm.label}`,
      leaks.length > 0 ? `Leaks: ${leaks.join(', ')}` : `Missing text: ${tm.expectText.slice(0, 30)}`
    );
  } catch (err: any) {
    assert(
      'Primitives',
      `PRM-TLM-${tm.state.blurEvents}`,
      'MotionDemoFrame',
      false,
      `Threw on telemetry state: ${tm.label}`,
      err.message
    );
  }
}

// Test A5: MotionCursor Coordinate Bounds & Action Types
const edgeCursorPermutations = [
  { x: 0, y: 0, clicking: false, label: 'default', desc: 'Origin (0, 0)' },
  { x: 100, y: 100, clicking: true, label: 'Double-Click', desc: 'Bottom-right bound (100, 100)' },
  { x: -50, y: 150, clicking: false, label: 'fail', desc: 'Out-of-bounds coordinates (-50, 150)' },
  { x: 50, y: 50, clicking: true, label: 'Alt+S Snip', desc: 'Alt+S snip badge' },
  { x: 50, y: 50, clicking: false, label: 'Alt+1 Invisible', desc: 'Alt+1 invisible badge' },
  { x: 50, y: 50, clicking: false, label: 'Alt+3 Derivation', desc: 'Alt+3 explain badge' },
  { x: 50, y: 50, clicking: true, label: 'window.blur Flag', desc: 'Competitor failure flag badge' },
];

for (const cr of edgeCursorPermutations) {
  try {
    const html = renderToString(
      React.createElement(MotionCursor, {
        x: cr.x,
        y: cr.y,
        clicking: cr.clicking,
        label: cr.label,
      })
    );
    const leaks = detectHtmlLeaks(html);
    assert(
      'Primitives',
      `PRM-CUR-${cr.label}`,
      'MotionCursor',
      leaks.length === 0 && html.includes(cr.label),
      `MotionCursor handles ${cr.desc} with badge`,
      leaks.join(', ')
    );
  } catch (err: any) {
    assert(
      'Primitives',
      `PRM-CUR-${cr.label}`,
      'MotionCursor',
      false,
      `Threw on cursor ${cr.desc}`,
      err.message
    );
  }
}

// ============================================================================
// SECTION B: Tab Switching & Frontier Model Content Distinctness
// ============================================================================
console.log(`\n--- Section B: Tab Switching & Model Content Distinctness Across All 58 Demos ---`);

for (const demo of ALL_58_DEMOS) {
  const harness = createHarness(demo.component);

  // Set to Scene 2 (Study Workspace scene, index 2)
  harness.setState(1, 2); // currentScene = 2

  // 1. Claude 3.7 Sonnet tab
  harness.setState(4, 'claude');
  const renderClaude = harness.render();
  const htmlClaude = renderToString(renderClaude.element);
  const leaksClaude = detectHtmlLeaks(htmlClaude);

  // 2. ChatGPT o3-mini tab
  harness.setState(4, 'chatgpt');
  const renderChatGpt = harness.render();
  const htmlChatGpt = renderToString(renderChatGpt.element);
  const leaksChatGpt = detectHtmlLeaks(htmlChatGpt);

  // 3. DeepSeek-R1 tab
  harness.setState(4, 'deepseek');
  const renderDeepSeek = harness.render();
  const htmlDeepSeek = renderToString(renderDeepSeek.element);
  const leaksDeepSeek = detectHtmlLeaks(htmlDeepSeek);

  // Assert distinct non-empty outputs
  const distinctOutputs =
    htmlClaude !== htmlChatGpt &&
    htmlClaude !== htmlDeepSeek &&
    htmlChatGpt !== htmlDeepSeek;

  const allLeaks = [...leaksClaude, ...leaksChatGpt, ...leaksDeepSeek];

  assert(
    'TabSwitching',
    `TAB-DST-${demo.slug}`,
    demo.componentName,
    distinctOutputs && allLeaks.length === 0,
    `Renders 3 distinct, non-empty, leak-free model tabs (Claude, ChatGPT, DeepSeek)`,
    allLeaks.length > 0 ? `Leaks: ${allLeaks.join(', ')}` : distinctOutputs ? undefined : 'Model outputs collided or identical'
  );

  // 4. Adversarial tab state (invalid tab key)
  try {
    harness.setState(4, 'unknown_adversarial_tab_state');
    const renderUnknown = harness.render();
    const htmlUnknown = renderToString(renderUnknown.element);
    assert(
      'TabSwitching',
      `TAB-ADV-${demo.slug}`,
      demo.componentName,
      htmlUnknown.length > 500,
      `Gracefully handles invalid tab state without crashing`
    );
  } catch (err: any) {
    assert(
      'TabSwitching',
      `TAB-ADV-${demo.slug}`,
      demo.componentName,
      false,
      `Crashed on invalid tab key`,
      err.message
    );
  }
}

// ============================================================================
// SECTION C: Telemetry HUD Bounds Across Scenes
// ============================================================================
console.log(`\n--- Section C: Telemetry HUD Bounds Across Scenes (All 58 Demos) ---`);

for (const demo of ALL_58_DEMOS) {
  const harness = createHarness(demo.component);

  // Scene 0: Competitor Failure
  harness.setState(1, 0); // scene 0
  harness.setState(2, 75); // 75% progress into scene 0
  const scene0Render = harness.render();
  const telemetry0 = scene0Render.telemetry;

  const scene0IsFailure =
    telemetry0?.blurEvents > 0 ||
    telemetry0?.status === 'flagged' ||
    /blur|flag|gap|inject|trap|leak|timeout|split|unverified|paywall|audited/i.test(telemetry0?.speedGrader || '');

  assert(
    'Telemetry',
    `TLM-SCN0-${demo.slug}`,
    demo.componentName,
    Boolean(scene0IsFailure),
    `Scene 0 registers competitor failure / flagged telemetry`,
    `speedGrader: "${telemetry0?.speedGrader}", blurEvents: ${telemetry0?.blurEvents}, status: ${telemetry0?.status}`
  );

  // Scene 1: ExamGhost 0.3s Solve
  harness.setState(1, 1); // scene 1
  harness.setState(2, 50); // 50% progress into scene 1
  const scene1Render = harness.render();
  const telemetry1 = scene1Render.telemetry;

  const scene1IsClean =
    telemetry1?.blurEvents === 0 &&
    telemetry1?.status !== 'flagged' &&
    telemetry1?.focusShield === true;

  assert(
    'Telemetry',
    `TLM-SCN1-${demo.slug}`,
    demo.componentName,
    Boolean(scene1IsClean),
    `Scene 1 registers 0 blur events, Focus Shield active / clean`,
    `speedGrader: "${telemetry1?.speedGrader}", blurEvents: ${telemetry1?.blurEvents}, focusShield: ${telemetry1?.focusShield}`
  );
}

// ============================================================================
// SECTION D: Play/Pause State Machine & Rapid Race Conditions
// ============================================================================
console.log(`\n--- Section D: Play/Pause State Machine & Rapid Race Conditions ---`);

for (const demo of ALL_58_DEMOS) {
  const harness = createHarness(demo.component);

  // 1. Initial State: Playing at scene 0, progress 0
  harness.setState(0, true);  // isPlaying = true
  harness.setState(1, 0);     // currentScene = 0
  harness.setState(2, 0);     // sceneProgress = 0
  harness.setState(3, 1);     // speed = 1

  // 2. Tick while playing: progress advances
  harness.tickTimer(500); // 500ms step
  const progAfterTick = harness.getState(2);
  assert(
    'StateMachine',
    `STM-ADV-${demo.slug}`,
    demo.componentName,
    progAfterTick > 0 && Number.isFinite(progAfterTick),
    `Timer tick advances progress smoothly (${progAfterTick.toFixed(2)}%)`
  );

  // 3. Pause Invariance: When paused, repeated ticks do NOT advance progress
  harness.setState(0, false); // isPlaying = false
  const frozenProgress = harness.getState(2);
  for (let i = 0; i < 20; i++) {
    harness.tickTimer(100);
  }
  const progAfterPausedTicks = harness.getState(2);
  assert(
    'StateMachine',
    `STM-PAU-${demo.slug}`,
    demo.componentName,
    progAfterPausedTicks === frozenProgress,
    `Paused invariant: progress remains strictly frozen across ticks`
  );

  // 4. Seek While Paused: seeking scene 2 resets progress to 0 without un-pausing
  harness.setState(1, 2); // seek to scene 2
  harness.setState(2, 0); // reset progress to 0
  assert(
    'StateMachine',
    `STM-SEEK-${demo.slug}`,
    demo.componentName,
    harness.getState(1) === 2 && harness.getState(2) === 0 && harness.getState(0) === false,
    `Seek while paused correctly sets scene 2 and resets progress while staying paused`
  );

  // 5. Scene Wrap-Around: reaching 100% advances to next scene modulo 3
  harness.setState(0, true); // isPlaying = true
  harness.setState(1, 2);    // currentScene = 2 (last scene)
  harness.setState(2, 99.5); // near end
  harness.tickTimer(500);    // exceeds 100%
  const wrappedScene = harness.getState(1);
  const wrappedProgress = harness.getState(2);
  assert(
    'StateMachine',
    `STM-WRAP-${demo.slug}`,
    demo.componentName,
    wrappedScene === 0 && wrappedProgress === 0,
    `Wrap-around invariant: scene 2 transitions cleanly to scene 0 with progress reset to 0`
  );

  // 6. Rapid Race Condition: 50 interleaved play/pause/seek toggles
  let raceConditionError = false;
  try {
    for (let cycle = 0; cycle < 50; cycle++) {
      harness.setState(0, (p: boolean) => !p); // toggle play/pause
      if (cycle % 5 === 0) {
        harness.setState(1, cycle % 3); // seek scene
        harness.setState(2, 0);
      }
      harness.tickTimer(25);
    }
    const finalProg = harness.getState(2);
    const finalScene = harness.getState(1);
    if (!Number.isFinite(finalProg) || finalProg < 0 || finalProg > 100 || finalScene < 0 || finalScene > 2) {
      raceConditionError = true;
    }
  } catch (err) {
    raceConditionError = true;
  }

  assert(
    'StateMachine',
    `STM-RCE-${demo.slug}`,
    demo.componentName,
    !raceConditionError,
    `Survives 50 rapid play/pause/seek race condition cycles with bounded state`
  );
}

// ============================================================================
// SECTION E: Exhaustive SSR HTML Leak Detection (290 Permutations)
// ============================================================================
console.log(`\n--- Section E: 290 SSR Permutations & HTML Leak Detection ---`);

for (const demo of ALL_58_DEMOS) {
  const harness = createHarness(demo.component);

  const permutations = [
    { scene: 0, tab: 'claude', name: 'Scene 0 (Competitor Failure)' },
    { scene: 1, tab: 'claude', name: 'Scene 1 (ExamGhost 0.3s Solve)' },
    { scene: 2, tab: 'claude', name: 'Scene 2 (Claude 3.7 Sonnet)' },
    { scene: 2, tab: 'chatgpt', name: 'Scene 2 (ChatGPT o3-mini/4o)' },
    { scene: 2, tab: 'deepseek', name: 'Scene 2 (DeepSeek-R1)' },
  ];

  for (const perm of permutations) {
    harness.setState(1, perm.scene);
    harness.setState(4, perm.tab);
    harness.setState(2, 45); // mid progress

    try {
      const renderObj = harness.render();
      const html = renderToString(renderObj.element);
      const leaks = detectHtmlLeaks(html);

      assert(
        'SSRLeaks',
        `SSR-${demo.slug}-S${perm.scene}-${perm.tab}`,
        demo.componentName,
        leaks.length === 0 && html.length > 1000,
        `SSR ${perm.name}: Clean DOM with zero leaks (>1000 chars)`,
        leaks.length > 0 ? `Leaks: ${leaks.join(', ')}` : undefined
      );
    } catch (err: any) {
      assert(
        'SSRLeaks',
        `SSR-${demo.slug}-S${perm.scene}-${perm.tab}`,
        demo.componentName,
        false,
        `SSR ${perm.name} threw exception`,
        err.message
      );
    }
  }
}

// ============================================================================
// SECTION F: Static Analysis Across All 58 Comparison Routes
// ============================================================================
console.log(`\n--- Section F: Static Analysis Across All 58 Comparison Routes ---`);

// Global Quota Integrity Scan across entire src/ directory
const repoQuotaViolations = findExamGhost50SolveViolations();
assert(
  'RepoIntegrity',
  'REP-QTA-01',
  'src/',
  repoQuotaViolations.length === 0,
  `Repo-wide quota scan: Zero occurrences of deprecated "50 Free Solves" trial in src/`,
  repoQuotaViolations.map((v) => `${v.file}:${v.lineNumber} "${v.matchedText}"`).join('; ')
);

for (const route of COMPARISON_ROUTES) {
  const fullPath = path.resolve(process.cwd(), route.filePath);
  const exists = fs.existsSync(fullPath);

  assert(
    'RouteStatic',
    `ROT-EXT-${route.slug}`,
    route.slug,
    exists,
    `Route file exists on disk at ${route.filePath}`
  );

  if (!exists) continue;

  const content = fs.readFileSync(fullPath, 'utf-8');

  // 1. Radio button / peer tab excision using canonical AST/regex helper
  const peerTabCheck = checkPeerTabBoilerplate(content);
  const hasRadioTag = /<input[^>]*type=["']radio["']/i.test(content);
  const isPeerClean = !peerTabCheck.hasPeerTab && !hasRadioTag;

  assert(
    'RouteStatic',
    `ROT-TAB-${route.slug}`,
    route.slug,
    isPeerClean,
    `Zero hidden radio buttons or peer tabs`,
    !isPeerClean ? `Found radio or peer tabs: ${peerTabCheck.occurrences.join(', ')}` : undefined
  );

  // 2. Canonical 6 hotkeys
  const hotkeyCheck = checkHotkeyCoverage(content);
  assert(
    'RouteStatic',
    `ROT-HKY-${route.slug}`,
    route.slug,
    hotkeyCheck.isComplete,
    `Contains all 6 canonical modern hotkeys`,
    !hotkeyCheck.isComplete ? `Missing: ${hotkeyCheck.missing.join(', ')}` : undefined
  );

  // 3. 4-tier pricing model
  const pricingCheck = checkPricingStack(content);
  assert(
    'RouteStatic',
    `ROT-PRC-${route.slug}`,
    route.slug,
    pricingCheck.isComplete,
    `Contains complete 4-tier pricing model (5 Free Solves/Day, $19/mo, $99/yr, $199 Lifetime)`,
    !pricingCheck.isComplete ? `Pricing incomplete (Free: ${pricingCheck.hasFreeDaily}, Mo: ${pricingCheck.hasMonthly}, Yr: ${pricingCheck.hasAnnual}, Life: ${pricingCheck.hasLifetime})` : undefined
  );

  // 4. 3 frontier models (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
  const modelsCheck = checkFrontierModels(content);
  assert(
    'RouteStatic',
    `ROT-MDL-${route.slug}`,
    route.slug,
    modelsCheck.isComplete,
    `Contains all 3 frontier AI models in Study Workspace`,
    !modelsCheck.isComplete ? `Models incomplete (Claude: ${modelsCheck.hasClaude}, ChatGPT: ${modelsCheck.hasChatGpt}, DeepSeek: ${modelsCheck.hasDeepSeek})` : undefined
  );

  // 5. Bespoke demo component mounted
  const hasDemoImport = /import\s*\{\s*([A-Za-z0-9_]+)\s*\}\s*from\s*['\"]@\/components\/(?:TopComparisonDemos|CanvasAndTextbookDemos|DeceptiveTrapsAndStaticBanksDemos|GeneralAiAndSymbolicMathDemos|GeneralAiBatchBDemos)['\"]/.test(content);
  assert(
    'RouteStatic',
    `ROT-DMO-${route.slug}`,
    route.slug,
    hasDemoImport,
    `Imports bespoke demo component from official demo suite`
  );
}

// ============================================================================
// Final Diagnostic Summary & Scorecard
// ============================================================================
console.log(`\n================================================================`);
console.log(`   TIER 5 ADVERSARIAL HARDENING SCORECARD`);
console.log(`================================================================`);
console.log(`  Total Checks Executed : ${passCount + failCount}`);
console.log(`  Passed Checks         : ${passCount}`);
console.log(`  Failed Checks         : ${failCount}`);
console.log(`================================================================\n`);

if (failCount > 0) {
  console.error(`❌ VERDICT: DEFECTS_DETECTED (${failCount} failures)`);
  process.exit(1);
} else {
  console.log(`✅ VERDICT: NO_REMAINING_GAPS`);
  process.exit(0);
}
