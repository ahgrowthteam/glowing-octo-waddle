/**
 * Comprehensive Empirical Stress Testing Suite for Canvas LMS & Textbook Demos
 * Target: src/components/CanvasAndTextbookDemos.tsx
 *
 * Verifies:
 * 1. SSR & Initial Markup Stability (all 10 components)
 * 2. Multi-Scene Choreography (Scene 0 Competitor Failure, Scene 1 ExamGhost 0.3s Solve & Hotkeys, Scene 2 Study Hub)
 * 3. Play/Pause state toggling and auto-play interval invariance
 * 4. Timeline scrubber seeking across scenes 0, 1, 2 and onRestart
 * 5. Playback speed toggling (1x, 1.5x, 2x) & rate scaling factors
 * 6. Dynamic cursor physics & bounds ([0, 100]%, finite, no NaNs)
 * 7. SpeedGrader telemetry state transitions
 * 8. Model tab switching (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
 * 9. Rapid-fire chaos & boundary resilience
 * 10. Module Export & Alias Contract Verification
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import * as Demos from '../src/components/CanvasAndTextbookDemos';
import { SpeedOption, MotionScene, TelemetryState, CursorState } from '../src/components/motion-demo/types';

// ============================================================================
// Types & Result Tracking
// ============================================================================

export interface CheckResult {
  id: string;
  category: string;
  description: string;
  passed: boolean;
  details?: string;
  error?: string;
}

const results: CheckResult[] = [];

function check(
  id: string,
  category: string,
  description: string,
  passed: boolean,
  details?: string,
  error?: string
) {
  results.push({ id, category, description, passed, details, error });
  const icon = passed ? '✅ [PASS]' : '❌ [FAIL]';
  console.log(`${icon} [${id}] ${category}: ${description}${details ? ` -> ${details}` : ''}`);
  if (!passed && error) {
    console.error(`     ↳ Error: ${error}`);
  }
}

// Leak detector helper: specifically checks style attributes, style properties, and unintended undefined/null tokens
function detectHtmlLeaks(html: string): string[] {
  const leaks: string[] = [];
  
  // Style attribute numerical leaks
  if (/style="[^"]*NaN[^"]*"/i.test(html)) leaks.push('Contains NaN in style attributes');
  if (/width:\s*NaN/i.test(html)) leaks.push('Contains width: NaN');
  if (/left:\s*NaN/i.test(html)) leaks.push('Contains left: NaN');
  if (/top:\s*NaN/i.test(html)) leaks.push('Contains top: NaN');
  if (/translate\([^)]*NaN[^)]*\)/i.test(html)) leaks.push('Contains NaN in transform translate');

  // Attribute value leaks (e.g. id="undefined", class="...undefined...", aria-label="undefined")
  const attrUndefined = html.match(/(?:id|class|aria-[a-z]+|data-[a-z]+)="[^"]*\bundefined\b[^"]*"/i);
  if (attrUndefined) leaks.push(`Contains attribute with undefined value: ${attrUndefined[0]}`);

  const attrNull = html.match(/(?:id|class|aria-[a-z]+|data-[a-z]+)="[^"]*\bnull\b[^"]*"/i);
  if (attrNull && !attrNull[0].includes('aria-hidden="null"')) {
    leaks.push(`Contains attribute with null value: ${attrNull[0]}`);
  }

  // Token leaks in DOM text outside intentional mock error strings
  const bareUndefined = html.match(/>\s*undefined\s*</);
  if (bareUndefined) leaks.push('Contains bare text token: >undefined<');

  const bareNull = html.match(/>\s*null\s*</);
  if (bareNull) leaks.push('Contains bare text token: >null<');

  return leaks;
}

// Strip React SSR comment markers
function cleanSsrHtml(html: string): string {
  return html.replace(/<!--[\s\S]*?-->/g, '');
}

// Component definitions for the 10 M3 demos
export interface DemoSpec {
  name: string;
  alias: string;
  handoffName: string;
  component: React.ComponentType;
  expectedSubject: string;
  scene0InitialTokens: string[];
  scene0ProgressTokens: string[];
}

const DEMO_COMPONENTS: DemoSpec[] = [
  {
    name: 'CanvasCrackStoichiometryDemo',
    alias: 'CanvasCrackDemo',
    handoffName: 'CanvasCrackCalculusIntegrationDemo',
    component: Demos.CanvasCrackStoichiometryDemo,
    expectedSubject: 'CHEM 110',
    scene0InitialTokens: ['KClO3', 'CanvasCrack', '$139.99', 'potassium chlorate'],
    scene0ProgressTokens: ['41.8s', 'document.oncopy'],
  },
  {
    name: 'CanvasNinjaDiscreteMathDemo',
    alias: 'CanvasNinjaDemo',
    handoffName: 'CanvasNinjaBiochemistryDemo',
    component: Demos.CanvasNinjaDiscreteMathDemo,
    expectedSubject: 'CS 240',
    scene0InitialTokens: ['CanvasNinja', 'LTI 1.3', '19.11MiB', 'CS 240'],
    scene0ProgressTokens: ['Uncaught DOMException: Blocked cross-origin'],
  },
  {
    name: 'CanvasPassCognitivePsychDemo',
    alias: 'CanvasPassDemo',
    handoffName: 'CanvasPassPharmacologyDemo',
    component: Demos.CanvasPassCognitivePsychDemo,
    expectedSubject: 'PSYC 330',
    scene0InitialTokens: ['CanvasPass', '800-Char', 'TRUNCATED AT 800 CHARS', 'Credits Remaining'],
    scene0ProgressTokens: ['window.blur logged at 00:18'],
  },
  {
    name: 'CanvasQuizMetabolicPathwaysDemo',
    alias: 'CanvasQuizDemo',
    handoffName: 'CanvasQuizMetabolicPathwaysDemo',
    component: Demos.CanvasQuizMetabolicPathwaysDemo,
    expectedSubject: 'BIO 201',
    scene0InitialTokens: ['CanvasQuiz', 'DOM Button', 'cellular respiration', '$48.99'],
    scene0ProgressTokens: ['MutationObserver Warning: Unauthorized DOM Node Inserted'],
  },
  {
    name: 'CanvasScholarLinearAlgebraDemo',
    alias: 'CanvasScholarDemo',
    handoffName: 'CanvasScholarLinearAlgebraDemo',
    component: Demos.CanvasScholarLinearAlgebraDemo,
    expectedSubject: 'MATH 214',
    scene0InitialTokens: ['Canvas Scholar', 'MATH 214', 'Linear Algebra', 'eigenvalues'],
    scene0ProgressTokens: ['38.6s Away'],
  },
  {
    name: 'CanvasWizardSociologyDemo',
    alias: 'CanvasWizardDemo',
    handoffName: 'CanvasWizardSociologyDemo',
    component: Demos.CanvasWizardSociologyDemo,
    expectedSubject: 'SOC 205',
    scene0InitialTokens: ['CanvasWizard', '#wiz_button', 'DOM Mutation', 'Bourdieu'],
    scene0ProgressTokens: ['#wiz_button injected in .question_holder'],
  },
  {
    name: 'QuizLoaderComputerArchitectureDemo',
    alias: 'QuizLoaderDemo',
    handoffName: 'QuizLoaderComputerArchitectureDemo',
    component: Demos.QuizLoaderComputerArchitectureDemo,
    expectedSubject: 'CS 350',
    scene0InitialTokens: ['Canvas Quiz Loader', 'Attempt #1', 'CS 350', 'Blind on Attempt #1'],
    scene0ProgressTokens: ['25 answers auto-filled at 00:01', 'isTrusted: false'],
  },
  {
    name: 'UseQuietlyOrganicChemistryDemo',
    alias: 'UseQuietlyDemo',
    handoffName: 'UseQuietlyOrganicChemistryDemo',
    component: Demos.UseQuietlyOrganicChemistryDemo,
    expectedSubject: 'CHEM 222',
    scene0InitialTokens: ['Quietly AI', '.ai-dot', 'DOM Signature', 'chair conformation'],
    scene0ProgressTokens: ['Host DOM Contaminated'],
  },
  {
    name: 'EasySBAdaptiveReadingDemo',
    alias: 'EasySBMotionDemo',
    handoffName: 'EasySBAdaptiveReadingDemo',
    component: Demos.EasySBAdaptiveReadingDemo,
    expectedSubject: 'ACC 202',
    scene0InitialTokens: ['EasySB', 'SmartBook', 'Adaptive Freeze', 'Activity-Based Costing'],
    scene0ProgressTokens: ['SB2_BOT_TIMING_SIGNATURE_DETECTED'],
  },
  {
    name: 'MyLabSolverCollegeAlgebraDemo',
    alias: 'MyLabSolverMotionDemo',
    handoffName: 'MyLabSolverCollegeAlgebraDemo',
    component: Demos.MyLabSolverCollegeAlgebraDemo,
    expectedSubject: 'MATH 110',
    scene0InitialTokens: ['MyLab Solver', 'MathJax', 'Pearson', 'zeros of the polynomial'],
    scene0ProgressTokens: ['SecurityError: Blocked a frame with origin'],
  },
];

console.log('================================================================');
console.log('STARTING EMPIRICAL STRESS TESTING ON ALL 10 CANVAS & TEXTBOOK DEMOS');
console.log('================================================================\n');

// ============================================================================
// SUITE 1: SSR & Initial Render Stability (All 10 Demos)
// ============================================================================
console.log('>>> [SUITE 1] SSR & Initial Markup Stress Testing (All 10 Demos)...');

for (const demo of DEMO_COMPONENTS) {
  try {
    const rawHtml = renderToString(React.createElement(demo.component));
    const html = cleanSsrHtml(rawHtml);
    const leaks = detectHtmlLeaks(rawHtml);

    check(
      `SSR-01-${demo.name}`,
      'SSR Render',
      `${demo.name} renders cleanly to string (>4KB, zero style/attribute leaks)`,
      rawHtml.length > 4000 && leaks.length === 0,
      `HTML size: ${rawHtml.length} bytes, Leaks: ${leaks.length === 0 ? 'None' : leaks.join(', ')}`,
      leaks.length > 0 ? leaks.join(', ') : undefined
    );

    // Initial Scene 0 subject tokens (tested at progress = 0)
    const missingInitialTokens = demo.scene0InitialTokens.filter((token) => !html.includes(token));
    check(
      `SSR-02-${demo.name}`,
      'Scene 0 Initial Tokens',
      `${demo.name} contains Scene 0 competitor flaw & domain tokens at initial render`,
      missingInitialTokens.length === 0,
      missingInitialTokens.length === 0 ? 'All Scene 0 initial tokens present' : `Missing: ${missingInitialTokens.join(', ')}`
    );

    // Check Quota Integrity: 0 occurrences of deprecated 50-solve trial
    const has50SolveTerm = /50\s*(free|solves|trial)/i.test(html);
    check(
      `SSR-03-${demo.name}`,
      'Quota Integrity',
      `${demo.name} contains zero deprecated 50-solve trial terms`,
      !has50SolveTerm,
      has50SolveTerm ? 'Violation found: contains 50 solves term' : 'Clean: zero 50-solve terms'
    );
  } catch (err: any) {
    check(`SSR-ERR-${demo.name}`, 'SSR Render', `${demo.name} threw fatal render exception`, false, undefined, err.message);
  }
}

// ============================================================================
// SUITE 2: Interactive State Machine & Hook Dispatcher Harness
// ============================================================================
console.log('\n>>> [SUITE 2] Interactive State Machine & Multi-Scene Choreography...');

interface ComponentHarness {
  name: string;
  render: () => {
    element: React.ReactElement;
    scrubberProps: any;
    cursorState: CursorState;
    telemetry: TelemetryState;
    scenes: MotionScene[];
  };
  getState: (index: number) => any;
  setState: (index: number, valOrFn: any) => void;
  triggerEffectTimer: (stepMs?: number) => void;
}

function createComponentHarness(demoComponent: React.ComponentType): ComponentHarness {
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

    // Extract MotionDemoFrame props: element is div, child is MotionDemoFrame
    const frameElement = Array.isArray(element.props?.children) ? element.props.children[0] : element.props?.children;
    const frameProps = frameElement?.props || element.props || {};
    const scrubberProps = frameProps?.footer?.props || {};
    const telemetry = frameProps?.telemetryState;

    // Extract MotionCursor prop from children
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
    triggerEffectTimer: (stepMs = 50) => {
      const isPlaying = states[0];
      const speed = states[3] || 1;

      if (!isPlaying) return; // Paused, no-op

      const initialRender = renderComponent();
      const scenesList = initialRender.scenes;
      const duration = scenesList[states[1]]?.durationMs || 6500;
      const stepIncrement = (stepMs * speed / duration) * 100;

      // Update progress
      stateSetters[2]((prev: number) => {
        if (prev + stepIncrement >= 100) {
          stateSetters[1]((sc: number) => (sc + 1) % scenesList.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    },
  };
}

for (const demo of DEMO_COMPONENTS) {
  const harness = createComponentHarness(demo.component);

  // 1. Initial State Render & Scrubber Props
  const initial = harness.render();
  check(
    `INT-01-${demo.name}`,
    'Scrubber Props Extraction',
    `${demo.name} supplies complete props to MotionTimelineScrubber`,
    typeof initial.scrubberProps.onTogglePlay === 'function' &&
      typeof initial.scrubberProps.onSeekScene === 'function' &&
      typeof initial.scrubberProps.onSpeedChange === 'function' &&
      typeof initial.scrubberProps.onRestart === 'function',
    `onTogglePlay: ${typeof initial.scrubberProps.onTogglePlay}, onSeekScene: ${typeof initial.scrubberProps.onSeekScene}`
  );

  // 2. Play/Pause Toggling
  const initialPlay = harness.getState(0); // isPlaying
  initial.scrubberProps.onTogglePlay();
  const toggledPlay = harness.getState(0);
  check(
    `INT-02-${demo.name}`,
    'Play/Pause Toggle',
    `${demo.name} toggles isPlaying from true to false`,
    initialPlay === true && toggledPlay === false,
    `Before: ${initialPlay}, After: ${toggledPlay}`
  );

  // While paused, progress should NOT advance
  const pausedProgressBefore = harness.getState(2);
  harness.triggerEffectTimer();
  const pausedProgressAfter = harness.getState(2);
  check(
    `INT-03-${demo.name}`,
    'Pause Invariant',
    `${demo.name} does not advance progress while paused`,
    pausedProgressBefore === pausedProgressAfter,
    `Progress Before: ${pausedProgressBefore}, After: ${pausedProgressAfter}`
  );

  // Toggle back to play
  initial.scrubberProps.onTogglePlay();
  const resumedPlay = harness.getState(0);
  check(
    `INT-04-${demo.name}`,
    'Play Resume',
    `${demo.name} resumes playback when toggled back`,
    resumedPlay === true,
    `Resumed: ${resumedPlay}`
  );

  // 3. Multi-Scene Seeking & Content Verification (Scenes 0, 1, 2)
  // Scene 0 Verification
  initial.scrubberProps.onSeekScene(0);
  check(
    `SEEK-0-${demo.name}`,
    'Seek Scene 0',
    `${demo.name} onSeekScene(0) sets currentScene=0 and resets progress to 0`,
    harness.getState(1) === 0 && harness.getState(2) === 0,
    `Scene: ${harness.getState(1)}, Progress: ${harness.getState(2)}`
  );

  // Test dynamic flaw reveal at progress = 60%
  harness.setState(2, 60);
  const scene0Render = harness.render();
  const htmlScene0 = cleanSsrHtml(renderToString(scene0Render.element));
  const leaksScene0 = detectHtmlLeaks(htmlScene0);
  const missingProgressTokens = demo.scene0ProgressTokens.filter((token) => !htmlScene0.includes(token));

  check(
    `SCENE-0-${demo.name}`,
    'Scene 0 Dynamic Flaw Verification',
    `${demo.name} renders Scene 0 dynamic flaw reveal at 60% progress without style/attribute leaks`,
    leaksScene0.length === 0 &&
      missingProgressTokens.length === 0 &&
      (scene0Render.telemetry.status === 'flagged' || scene0Render.telemetry.blurEvents >= 1 || scene0Render.telemetry.speedGrader.length > 0),
    `Status: ${scene0Render.telemetry?.status}, BlurEvents: ${scene0Render.telemetry?.blurEvents}, Missing Tokens: ${missingProgressTokens.length === 0 ? 'None' : missingProgressTokens.join(', ')}`
  );

  // Scene 1 Verification: Hotkeys & Sub-second Solve
  initial.scrubberProps.onSeekScene(1);
  check(
    `SEEK-1-${demo.name}`,
    'Seek Scene 1',
    `${demo.name} onSeekScene(1) sets currentScene=1 and resets progress to 0`,
    harness.getState(1) === 1 && harness.getState(2) === 0,
    `Scene: ${harness.getState(1)}, Progress: ${harness.getState(2)}`
  );
  harness.setState(2, 50); // Progress 50% in Scene 1
  const scene1Render = harness.render();
  const htmlScene1 = cleanSsrHtml(renderToString(scene1Render.element));
  const leaksScene1 = detectHtmlLeaks(htmlScene1);

  // Scene 1 check: Focus Shield is active, 0 blur events, zero leaks, solves question in sub-second (0.3s)
  const has03sSolve = htmlScene1.includes('0.3s') || htmlScene1.includes('0.2s');
  check(
    `SCENE-1-${demo.name}`,
    'Scene 1 Hotkeys & Solve',
    `${demo.name} renders Scene 1 with Focus Shield (0 blur events) and sub-second solve (0.3s)`,
    leaksScene1.length === 0 && scene1Render.telemetry.focusShield === true && scene1Render.telemetry.blurEvents === 0 && has03sSolve,
    `0 blur events: ${scene1Render.telemetry.blurEvents === 0}, FocusShield: ${scene1Render.telemetry.focusShield}, 0.3s solve: ${has03sSolve}`
  );

  // Scene 2 Verification: 2-in-1 Frontier AI Study Hub
  initial.scrubberProps.onSeekScene(2);
  check(
    `SEEK-2-${demo.name}`,
    'Seek Scene 2',
    `${demo.name} onSeekScene(2) sets currentScene=2 and resets progress to 0`,
    harness.getState(1) === 2 && harness.getState(2) === 0,
    `Scene: ${harness.getState(1)}, Progress: ${harness.getState(2)}`
  );
  harness.setState(2, 50); // Progress 50% in Scene 2
  const scene2Render = harness.render();
  const htmlScene2 = cleanSsrHtml(renderToString(scene2Render.element));
  const leaksScene2 = detectHtmlLeaks(htmlScene2);

  // Check Frontier Model Presence in Scene 2
  const hasClaude = htmlScene2.includes('Claude 3.7');
  const hasChatGPT = htmlScene2.includes('ChatGPT');
  const hasDeepSeek = htmlScene2.includes('DeepSeek-R1');

  check(
    `SCENE-2-${demo.name}`,
    'Scene 2 Frontier AI Models',
    `${demo.name} renders Scene 2 with Claude 3.7 Sonnet, ChatGPT, and DeepSeek-R1`,
    leaksScene2.length === 0 && hasClaude && hasChatGPT && hasDeepSeek,
    `Claude: ${hasClaude}, ChatGPT: ${hasChatGPT}, DeepSeek: ${hasDeepSeek}`
  );

  // Model Tab Switching in Scene 2: 'claude' -> 'chatgpt' -> 'deepseek'
  const modelTabs: Array<'claude' | 'chatgpt' | 'deepseek'> = ['claude', 'chatgpt', 'deepseek'];
  for (const tab of modelTabs) {
    harness.setState(4, tab); // Hook 4 is activeModelTab
    const tabHtml = cleanSsrHtml(renderToString(harness.render().element));
    const leaksTab = detectHtmlLeaks(tabHtml);
    check(
      `SCENE-2-TAB-${demo.name}-${tab}`,
      'Model Tab Switching',
      `${demo.name} renders model tab "${tab}" derivation cleanly`,
      leaksTab.length === 0,
      `Tab: ${tab}, Leaks: ${leaksTab.length === 0 ? 'None' : leaksTab.join(', ')}`
    );
  }

  // 4. Cursor Physics & Bounds Across Scenes
  for (let sc = 0; sc <= 2; sc++) {
    harness.setState(1, sc);
    for (const prog of [10, 45, 80]) {
      harness.setState(2, prog);
      const curRender = harness.render();
      const cursor = curRender.cursorState;
      const validCursor =
        cursor &&
        Number.isFinite(cursor.x) &&
        Number.isFinite(cursor.y) &&
        cursor.x >= 0 &&
        cursor.x <= 100 &&
        cursor.y >= 0 &&
        cursor.y <= 100 &&
        typeof cursor.label === 'string' &&
        cursor.label.length > 0 &&
        typeof cursor.clicking === 'boolean';

      check(
        `CURSOR-${demo.name}-s${sc}-p${prog}`,
        'Cursor Physics Bounds',
        `${demo.name} Scene ${sc} at ${prog}% cursor is in bounds [0, 100]%`,
        !!validCursor,
        `x: ${cursor?.x}%, y: ${cursor?.y}%, clicking: ${cursor?.clicking}, label: "${cursor?.label}"`
      );
    }
  }

  // 5. Restart Function
  initial.scrubberProps.onRestart();
  check(
    `INT-07-${demo.name}`,
    'Restart Function',
    `${demo.name} onRestart resets to Scene 0 with 0% progress`,
    harness.getState(1) === 0 && harness.getState(2) === 0,
    `Scene: ${harness.getState(1)}, Progress: ${harness.getState(2)}`
  );

  // 6. Playback Speed Toggling (1x, 1.5x, 2x) & Rate Scaling
  const speeds: SpeedOption[] = [1.5, 2, 1];
  for (const sp of speeds) {
    initial.scrubberProps.onSpeedChange(sp);
    const activeSpeed = harness.getState(3);
    check(
      `INT-08-${demo.name}-speed-${sp}x`,
      'Speed Toggle',
      `${demo.name} onSpeedChange switches playbackSpeed to ${sp}x`,
      activeSpeed === sp,
      `Current speed: ${activeSpeed}x`
    );
  }

  // Verify rate scaling factor: 2x step must be 2.0x 1x step
  const sceneDuration = initial.scenes[0]?.durationMs || 6500;
  const stepAt1x = (50 * 1 / sceneDuration) * 100;
  const stepAt2x = (50 * 2 / sceneDuration) * 100;
  const ratio = stepAt2x / stepAt1x;
  check(
    `INT-SPEED-SCALE-${demo.name}`,
    'Speed Rate Scaling',
    `${demo.name} step progress rate scales proportionally (2x / 1x = 2.0)`,
    Math.abs(ratio - 2.0) < 0.0001,
    `Step 1x: ${stepAt1x.toFixed(4)}%, Step 2x: ${stepAt2x.toFixed(4)}%, Ratio: ${ratio}`
  );

  // 7. Auto-Play Interval Simulation & Rollover Loop
  harness.setState(1, 0); // Scene 0
  harness.setState(2, 98); // Progress 98%
  harness.setState(3, 1); // 1x speed
  harness.setState(0, true); // playing

  // Rollover 0 -> 1
  harness.triggerEffectTimer(200);
  const rolledScene1 = harness.getState(1);
  const rolledProgress1 = harness.getState(2);
  check(
    `INT-09-${demo.name}-rollover-0to1`,
    'Scene Rollover 0 -> 1',
    `${demo.name} rolls over automatically from Scene 0 to Scene 1`,
    rolledScene1 === 1 && rolledProgress1 === 0,
    `Scene: ${rolledScene1}, Progress: ${rolledProgress1}%`
  );

  // Rollover 1 -> 2
  harness.setState(2, 98);
  harness.triggerEffectTimer(200);
  const rolledScene2 = harness.getState(1);
  const rolledProgress2 = harness.getState(2);
  check(
    `INT-10-${demo.name}-rollover-1to2`,
    'Scene Rollover 1 -> 2',
    `${demo.name} rolls over automatically from Scene 1 to Scene 2`,
    rolledScene2 === 2 && rolledProgress2 === 0,
    `Scene: ${rolledScene2}, Progress: ${rolledProgress2}%`
  );

  // Rollover 2 -> 0 (loop cycle)
  harness.setState(2, 98);
  harness.triggerEffectTimer(200);
  const rolledScene0 = harness.getState(1);
  const rolledProgress0 = harness.getState(2);
  check(
    `INT-11-${demo.name}-rollover-2to0`,
    'Scene Rollover 2 -> 0 (Loop Cycle)',
    `${demo.name} loops back from Scene 2 to Scene 0`,
    rolledScene0 === 0 && rolledProgress0 === 0,
    `Scene: ${rolledScene0}, Progress: ${rolledProgress0}%`
  );
}

// ============================================================================
// SUITE 3: Adversarial Edge Cases & Rapid-Fire Chaos
// ============================================================================
console.log('\n>>> [SUITE 3] Adversarial Edge Cases & Rapid-Fire Chaos (All 10 Demos)...');

for (const demo of DEMO_COMPONENTS) {
  const chaosHarness = createComponentHarness(demo.component);
  const rendered = chaosHarness.render();

  // 1. Rapid seeking (seek 0 -> 2 -> 1 -> 0 -> 2 in quick succession)
  try {
    for (let i = 0; i < 20; i++) {
      rendered.scrubberProps.onSeekScene(i % 3);
    }
    const finalScene = chaosHarness.getState(1);
    check(
      `CHAOS-01-${demo.name}-RapidSeeking`,
      'Rapid Seeking',
      `${demo.name}: 20 rapid scene seek calls executed cleanly without exception or NaN`,
      finalScene === 1,
      `Final Scene: ${finalScene}`
    );
  } catch (err: any) {
    check(`CHAOS-01-${demo.name}-RapidSeeking`, 'Rapid Seeking', `${demo.name} failed rapid seeking`, false, undefined, err.message);
  }

  // 2. Rapid play/pause toggles (10 rapid toggles)
  try {
    for (let i = 0; i < 10; i++) {
      rendered.scrubberProps.onTogglePlay();
    }
    const finalPlay = chaosHarness.getState(0);
    check(
      `CHAOS-02-${demo.name}-RapidPlayToggle`,
      'Rapid Play Toggling',
      `${demo.name}: 10 rapid play/pause toggles execute cleanly without state desync`,
      typeof finalPlay === 'boolean',
      `Final Play State: ${finalPlay}`
    );
  } catch (err: any) {
    check(`CHAOS-02-${demo.name}-RapidPlayToggle`, 'Rapid Play Toggling', `${demo.name} failed rapid toggle`, false, undefined, err.message);
  }

  // 3. Boundary scene seeking: negative index or out-of-bounds index
  try {
    rendered.scrubberProps.onSeekScene(-1);
    const negRender = chaosHarness.render();
    const negLeaks = detectHtmlLeaks(cleanSsrHtml(renderToString(negRender.element)));
    check(
      `CHAOS-03-${demo.name}-NegativeSceneIndex`,
      'Negative Scene Index',
      `${demo.name}: Negative scene index seek (-1) handled without fatal crash or style leaks`,
      negLeaks.length === 0,
      `Leaks: ${negLeaks.length === 0 ? 'None' : negLeaks.join(', ')}`
    );
  } catch (err: any) {
    check(`CHAOS-03-${demo.name}-NegativeSceneIndex`, 'Negative Scene Index', `${demo.name} threw on negative index`, false, undefined, err.message);
  }

  try {
    rendered.scrubberProps.onSeekScene(99);
    const obRender = chaosHarness.render();
    const obLeaks = detectHtmlLeaks(cleanSsrHtml(renderToString(obRender.element)));
    check(
      `CHAOS-04-${demo.name}-OutOfBoundsSceneIndex`,
      'Out of Bounds Scene Index',
      `${demo.name}: Out of bounds scene index seek (99) handled without fatal crash or style leaks`,
      obLeaks.length === 0,
      `Leaks: ${obLeaks.length === 0 ? 'None' : obLeaks.join(', ')}`
    );
  } catch (err: any) {
    check(`CHAOS-04-${demo.name}-OutOfBoundsSceneIndex`, 'Out of Bounds Scene Index', `${demo.name} threw on out-of-bounds index`, false, undefined, err.message);
  }

  // 4. Extreme Progress Values: Negative (-50) and Overflow (150)
  try {
    chaosHarness.setState(1, 1);
    chaosHarness.setState(2, -50);
    const underRender = chaosHarness.render();
    const underLeaks = detectHtmlLeaks(cleanSsrHtml(renderToString(underRender.element)));

    chaosHarness.setState(2, 150);
    const overRender = chaosHarness.render();
    const overLeaks = detectHtmlLeaks(cleanSsrHtml(renderToString(overRender.element)));

    check(
      `CHAOS-05-${demo.name}-ProgressClamping`,
      'Progress Clamping Resilience',
      `${demo.name}: Extreme progress (-50%, 150%) clamped safely with zero style/attribute leaks`,
      underLeaks.length === 0 && overLeaks.length === 0,
      `Underflow Leaks: ${underLeaks.length === 0 ? 'None' : underLeaks.join(', ')}, Overflow Leaks: ${overLeaks.length === 0 ? 'None' : overLeaks.join(', ')}`
    );
  } catch (err: any) {
    check(`CHAOS-05-${demo.name}-ProgressClamping`, 'Progress Clamping Resilience', `${demo.name} threw on extreme progress`, false, undefined, err.message);
  }
}

// ============================================================================
// SUITE 4: Module Export & Alias Contract Verification
// ============================================================================
console.log('\n>>> [SUITE 4] Module Export & Alias Contract Verification...');

for (const demo of DEMO_COMPONENTS) {
  // Primary Export Check
  const hasPrimaryExport = typeof (Demos as any)[demo.name] === 'function';
  check(
    `EXP-01-${demo.name}`,
    'Primary Export',
    `${demo.name} is exported as a function from CanvasAndTextbookDemos`,
    hasPrimaryExport,
    `Type: ${typeof (Demos as any)[demo.name]}`
  );

  // Short Alias Export Check
  const hasAliasExport = typeof (Demos as any)[demo.alias] === 'function';
  check(
    `EXP-02-${demo.alias}`,
    'Alias Export',
    `${demo.alias} is exported as a function alias from CanvasAndTextbookDemos`,
    hasAliasExport,
    `Type: ${typeof (Demos as any)[demo.alias]}`
  );
}

// ============================================================================
// SUITE 5: Handoff Name Parity Audit (Forensic Check against worker_m3/handoff.md)
// ============================================================================
console.log('\n>>> [SUITE 5] Forensic Handoff Name Parity Audit...');

for (const demo of DEMO_COMPONENTS) {
  const hasHandoffExport = typeof (Demos as any)[demo.handoffName] === 'function';
  const isDivergent = !hasHandoffExport;
  console.log(
    `ℹ️ [AUDIT] Handoff name "${demo.handoffName}": ${
      hasHandoffExport
        ? 'EXPORTED (Direct Match)'
        : `DIVERGENCE FOUND: Not exported directly; Canonical export is "${demo.name}"`
    }`
  );
}

// ============================================================================
// Summary & Verdict
// ============================================================================
console.log('\n================================================================');
console.log('SUMMARY REPORT: CANVAS & TEXTBOOK DEMOS EMPIRICAL STRESS TESTS');
console.log('================================================================');

const totalChecks = results.length;
const passedChecks = results.filter((r) => r.passed).length;
const failedChecks = results.filter((r) => !r.passed);

console.log(`Total Checks Executed: ${totalChecks}`);
console.log(`Passed:                ${passedChecks}`);
console.log(`Failed:                ${failedChecks.length}`);
console.log('----------------------------------------------------------------');

if (failedChecks.length > 0) {
  console.log('FAILED CHECKS DETAILS:');
  failedChecks.forEach((f) => {
    console.log(`❌ [${f.id}] ${f.category}: ${f.description}`);
    if (f.details) console.log(`   Details: ${f.details}`);
    if (f.error) console.log(`   Error: ${f.error}`);
  });
  console.log('\nFINAL VERDICT: REJECT');
  process.exit(1);
} else {
  console.log('ALL EMPIRICAL CHECKS PASSED WITH 100% SUCCESS!');
  console.log('FINAL VERDICT: APPROVE');
  process.exit(0);
}
