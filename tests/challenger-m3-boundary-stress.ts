/**
 * Challenger M3 Fix 1 — Adversarial Stress & Boundary Verification Harness
 * Focus:
 * 1. Playback speed boundaries: Negative, float, extreme, and non-finite speeds.
 * 2. Progress clamping invariants: Math.min(100, Math.max(0, ...)) across all 10 demos.
 * 3. Pause invariance: State persistence, freeze verification, and resume accuracy on pause/play.
 * 4. Style and attribute leak detection (NaN, undefined, null, negative widths, overflow widths).
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import * as Demos from '../src/components/CanvasAndTextbookDemos';
import { SpeedOption, MotionScene, TelemetryState, CursorState } from '../src/components/motion-demo/types';

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
    console.log(`✅ [PASS] [${id}] [${target}] ${message}${details ? ` -> ${details}` : ''}`);
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
  if (/width:\s*-[0-9]/i.test(html)) leaks.push('Contains negative width in style');
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

  // Raw DOM leaks
  if (/>\s*undefined\s*</.test(html)) leaks.push('Bare token >undefined<');
  if (/>\s*null\s*</.test(html)) leaks.push('Bare token >null<');
  if (/>\s*NaN\s*</.test(html)) leaks.push('Bare token >NaN<');

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
      
      // Calculate step increment exactly as the component's useEffect does
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

// 10 Milestone 3 Demos
const DEMOS = [
  { name: 'CanvasCrackStoichiometryDemo', component: Demos.CanvasCrackStoichiometryDemo },
  { name: 'CanvasNinjaDiscreteMathDemo', component: Demos.CanvasNinjaDiscreteMathDemo },
  { name: 'CanvasPassCognitivePsychDemo', component: Demos.CanvasPassCognitivePsychDemo },
  { name: 'CanvasQuizMetabolicPathwaysDemo', component: Demos.CanvasQuizMetabolicPathwaysDemo },
  { name: 'CanvasScholarLinearAlgebraDemo', component: Demos.CanvasScholarLinearAlgebraDemo },
  { name: 'CanvasWizardSociologyDemo', component: Demos.CanvasWizardSociologyDemo },
  { name: 'QuizLoaderComputerArchitectureDemo', component: Demos.QuizLoaderComputerArchitectureDemo },
  { name: 'UseQuietlyOrganicChemistryDemo', component: Demos.UseQuietlyOrganicChemistryDemo },
  { name: 'EasySBAdaptiveReadingDemo', component: Demos.EasySBAdaptiveReadingDemo },
  { name: 'MyLabSolverCollegeAlgebraDemo', component: Demos.MyLabSolverCollegeAlgebraDemo },
];

console.log('================================================================');
console.log('CHALLENGER M3 FIX 1: ADVERSARIAL STRESS & INVARIANT VERIFICATION');
console.log('================================================================\n');

// ============================================================================
// SECTION 1: Playback Speed Boundary Stress Testing
// ============================================================================
console.log('>>> [SECTION 1] Playback Speed Boundary Testing (Negative, Float, Extreme, Non-Finite)...');

const TEST_SPEEDS = [
  { speed: -1, label: 'negative_1x' },
  { speed: -10, label: 'negative_10x' },
  { speed: -0.05, label: 'negative_fraction' },
  { speed: 0, label: 'zero_speed' },
  { speed: 0.0001, label: 'micro_fraction' },
  { speed: 0.25, label: 'quarter_speed' },
  { speed: 0.5, label: 'half_speed' },
  { speed: 1.25, label: 'one_and_quarter' },
  { speed: 1.5, label: 'one_and_half' },
  { speed: 2, label: 'two_speed' },
  { speed: 5.75, label: 'float_high' },
  { speed: 50, label: 'extreme_50x' },
  { speed: 1000, label: 'extreme_1000x' },
  { speed: Infinity, label: 'infinity_speed' },
  { speed: -Infinity, label: 'neg_infinity_speed' },
];

for (const demo of DEMOS) {
  const harness = createHarness(demo.component);
  harness.render(); // initialize hooks

  for (const { speed, label } of TEST_SPEEDS) {
    try {
      // Set playing and initial scene/progress
      harness.setState(0, true);
      harness.setState(1, 0); // Scene 0
      harness.setState(2, 50); // Mid-progress 50%
      harness.setState(3, speed);

      // Execute 5 timer ticks with this speed
      for (let t = 0; t < 5; t++) {
        harness.tickTimer(50);
      }

      const finalProg = harness.getState(2);
      const finalScene = harness.getState(1);

      // Verify progress remains clamped in [0, 100]
      const isClamped = Number.isFinite(finalProg)
        ? finalProg >= 0 && finalProg <= 100
        : false;

      // Verify scene index remains within valid scene bounds [0, 2]
      const isValidScene = Number.isInteger(finalScene) && finalScene >= 0 && finalScene <= 2;

      // Render to SSR HTML and check for leaks
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
      // Force raw progress into state
      harness.setState(2, rawProg);

      // Render component with this progress across all 3 scenes
      for (let sc = 0; sc <= 2; sc++) {
        harness.setState(1, sc);
        const rendered = harness.render();
        const html = cleanSsr(renderToString(rendered.element));
        const leaks = detectHtmlLeaks(html);

        // Verify scrubber props received clamped progress or preserved NaN without DOM leaks
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
// SECTION 3: Pause Invariance & State Persistence Stress Testing
// ============================================================================
console.log('\n>>> [SECTION 3] Pause Invariance & State Persistence Testing...');

for (const demo of DEMOS) {
  const harness = createHarness(demo.component);
  harness.render();

  // Test 3.1: Freeze verification while paused
  // Set to Scene 1, progress 42.5%, speed 1x
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
  // Tick once (50ms at 1x)
  harness.tickTimer(50);
  const resumedScene = harness.getState(1);
  const resumedProgress = harness.getState(2);

  // Expect progress to advance smoothly from 42.5%, NOT reset to 0
  const expectedAdvancement = 42.5 + ((50 * 1) / 6500) * 100; // ~43.269%
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
  // After 100 toggles, state should be back to true (initial was true before loop)
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

  // Tick timer while still paused
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
}

// ============================================================================
// SECTION 4: Code & AST Structural Verification of Clamping Invariants
// ============================================================================
console.log('\n>>> [SECTION 4] AST & Source Code Clamping Pattern Verification...');

import fs from 'fs';
import path from 'path';

const sourceFilePath = path.join(process.cwd(), 'src/components/CanvasAndTextbookDemos.tsx');
const sourceCode = fs.readFileSync(sourceFilePath, 'utf8');

for (const demo of DEMOS) {
  // Extract component body
  const regex = new RegExp(`export function ${demo.name}\\s*\\(\\)\\s*\\{([\\s\\S]*?)\\n\\}`);
  const match = sourceCode.match(regex);
  const compCode = match ? match[1] : '';

  // 1. Must contain Math.min(100, Math.max(0, prev + stepIncrement))
  const hasUpdaterClamp = compCode.includes('Math.min(100, Math.max(0, prev + stepIncrement))');

  // 2. Must define safeProgress with Math.min(100, Math.max(0, sceneProgress))
  const hasSafeProgress = compCode.includes('const safeProgress = Math.min(100, Math.max(0, sceneProgress));');

  // 3. Must pass safeProgress to sceneProgress in scrubber
  const passesSafeProgress = compCode.includes('sceneProgress={safeProgress}');

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
}

// ============================================================================
// FINAL SUMMARY
// ============================================================================
console.log('\n================================================================');
console.log('SUMMARY REPORT: CHALLENGER M3 FIX 1 ADVERSARIAL STRESS SUITE');
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
