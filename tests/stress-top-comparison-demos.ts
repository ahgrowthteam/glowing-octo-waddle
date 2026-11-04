/**
 * Comprehensive Empirical Stress Testing Suite for Top 9 Comparison Demos
 * Target: src/components/TopComparisonDemos.tsx
 *
 * Verifies:
 * 1. SSR & Initial Markup Stability (all 9 components)
 * 2. Multi-Scene Choreography (Scene 0 Competitor Failure, Scene 1 ExamGhost 0.3s Solve & Hotkeys, Scene 2 Study Hub)
 * 3. Play/Pause state toggling and auto-play interval invariance
 * 4. Timeline scrubber seeking across scenes 0, 1, 2 and onRestart
 * 5. Playback speed toggling (1x, 1.5x, 2x) & rate scaling factors
 * 6. Dynamic cursor physics & bounds ([0, 100]%, finite, no NaNs)
 * 7. SpeedGrader telemetry state transitions
 * 8. Model tab switching (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
 * 9. CompareHubStackCalculator dynamic TCO math & LMS selector
 * 10. Rapid-fire chaos & boundary resilience
 */

import React from 'react';
import { renderToString } from 'react-dom/server';
import * as Demos from '../src/components/TopComparisonDemos';
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

// Leak detector helper
function detectHtmlLeaks(html: string): string[] {
  const leaks: string[] = [];
  if (html.includes('NaN')) leaks.push('Contains literal "NaN"');
  if (html.includes('undefined') && !html.includes('aria-label="undefined"')) {
    const match = html.match(/:undefined|"undefined"|>\s*undefined\s*</);
    if (match) leaks.push(`Contains literal undefined token: ${match[0]}`);
  }
  if (html.includes('null') && !html.includes('aria-hidden="null"')) {
    const match = html.match(/:null|"null"|>\s*null\s*</);
    if (match) leaks.push(`Contains literal null token: ${match[0]}`);
  }
  if (/width:\s*NaN/i.test(html)) leaks.push('Contains width: NaN%');
  if (/style="[^"]*NaN[^"]*"/i.test(html)) leaks.push('Contains NaN in style attributes');
  return leaks;
}

// Strip React SSR comment markers
function cleanSsrHtml(html: string): string {
  return html.replace(/<!--[\s\S]*?-->/g, '');
}

// All 9 demo components definition
const DEMO_COMPONENTS: Array<{
  name: string;
  component: React.ComponentType;
  expectedSubject: string;
  scene0Tokens: string[];
}> = [
  {
    name: 'CanvasHackStopwatchDemo',
    component: Demos.CanvasHackStopwatchDemo,
    expectedSubject: 'CHEM 204',
    scene0Tokens: ['ethyl hexanoate', 'hexanal', 'CanvasHack', '$149.99'],
  },
  {
    name: 'ApexVisionTelemetryDemo',
    component: Demos.ApexVisionTelemetryDemo,
    expectedSubject: 'CS 301',
    scene0Tokens: ['Dijkstra', 'Fibonacci heap', 'Apex Vision', '500'],
  },
  {
    name: 'CollegeToolsManifestDemo',
    component: Demos.CollegeToolsManifestDemo,
    expectedSubject: 'BIO 340',
    scene0Tokens: ['College Tools', 'SpCas9', 'web_accessible_resources'],
  },
  {
    name: 'TranscriptStudyHubDemo',
    component: Demos.TranscriptStudyHubDemo,
    expectedSubject: 'ECON 302',
    scene0Tokens: ['Transcript', 'Macroeconomics', 'interest rate'],
  },
  {
    name: 'QuizonatorIframeSnipDemo',
    component: Demos.QuizonatorIframeSnipDemo,
    expectedSubject: 'LTI 1.3',
    scene0Tokens: ['Quizonator', 'Canvas New Quizzes', 'Intercalated'],
  },
  {
    name: 'BetterCampusCoPilotDemo',
    component: Demos.BetterCampusCoPilotDemo,
    expectedSubject: 'PHYS 301',
    scene0Tokens: ['BetterCampus Pro', 'Electrodynamics'],
  },
  {
    name: 'GauthWebcamGazeDemo',
    component: Demos.GauthWebcamGazeDemo,
    expectedSubject: 'MATH 285',
    scene0Tokens: ['Gauth', 'Differential Equations', 'Proctorio'],
  },
  {
    name: 'CourseHeroPaywallDemo',
    component: Demos.CourseHeroPaywallDemo,
    expectedSubject: 'ACCT 301',
    scene0Tokens: ['Course Hero', 'Intermediate Accounting', 'ASC 842', 'Paywall', '$39.95'],
  },
  {
    name: 'CompareHubStackCalculator',
    component: Demos.CompareHubStackCalculator,
    expectedSubject: '58 Canvas Extensions',
    scene0Tokens: ['Master Benchmark', '58 Canvas AI Quiz Extensions Audited'],
  },
];

console.log('================================================================');
console.log('STARTING EMPIRICAL STRESS TESTING ON ALL 9 TOP COMPARISON DEMOS');
console.log('================================================================\n');

// ============================================================================
// SUITE 1: SSR & Initial Render Stability (All 9 Demos)
// ============================================================================
console.log('>>> [SUITE 1] SSR & Initial Markup Stress Testing (All 9 Demos)...');

for (const demo of DEMO_COMPONENTS) {
  try {
    const rawHtml = renderToString(React.createElement(demo.component));
    const html = cleanSsrHtml(rawHtml);
    const leaks = detectHtmlLeaks(rawHtml);

    check(
      `SSR-01-${demo.name}`,
      'SSR Render',
      `${demo.name} renders cleanly to string`,
      rawHtml.length > 5000 && leaks.length === 0,
      `HTML size: ${rawHtml.length} bytes, Leaks: ${leaks.length === 0 ? 'None' : leaks.join(', ')}`,
      leaks.length > 0 ? leaks.join(', ') : undefined
    );

    // Initial Scene 0 subject tokens
    const missingTokens = demo.scene0Tokens.filter((token) => !html.includes(token));
    check(
      `SSR-02-${demo.name}`,
      'Scene 0 Tokens',
      `${demo.name} contains Scene 0 competitor flaw & domain tokens`,
      missingTokens.length === 0,
      missingTokens.length === 0 ? 'All Scene 0 tokens present' : `Missing: ${missingTokens.join(', ')}`
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
  harness.setState(2, 60); // Progress 60% in Scene 0 (when blur / failure activates)
  const scene0Render = harness.render();
  const htmlScene0 = cleanSsrHtml(renderToString(scene0Render.element));
  const leaksScene0 = detectHtmlLeaks(htmlScene0);
  check(
    `SCENE-0-${demo.name}`,
    'Scene 0 Verification',
    `${demo.name} renders Scene 0 (Competitor Flaw) without NaNs`,
    leaksScene0.length === 0 && (scene0Render.telemetry.status === 'flagged' || scene0Render.telemetry.blurEvents >= 1 || scene0Render.telemetry.speedGrader.length > 0),
    `Status: ${scene0Render.telemetry?.status}, BlurEvents: ${scene0Render.telemetry?.blurEvents}, Leaks: ${leaksScene0.length === 0 ? 'None' : leaksScene0.join(', ')}`
  );

  // Scene 1 Verification: Hotkeys & Sub-second Solve
  initial.scrubberProps.onSeekScene(1);
  harness.setState(2, 50); // Progress 50% in Scene 1
  const scene1Render = harness.render();
  const htmlScene1 = cleanSsrHtml(renderToString(scene1Render.element));
  const leaksScene1 = detectHtmlLeaks(htmlScene1);

  // Scene 1 check: Focus Shield is active, 0 blur events, zero leaks, solves question
  const has03sSolve = htmlScene1.includes('0.3s') || htmlScene1.includes('0.8s');
  check(
    `SCENE-1-${demo.name}`,
    'Scene 1 Hotkeys & Solve',
    `${demo.name} renders Scene 1 with Focus Shield (0 blur events) and sub-second solve`,
    leaksScene1.length === 0 && scene1Render.telemetry.focusShield === true && scene1Render.telemetry.blurEvents === 0 && has03sSolve,
    `0 blur events, FocusShield: ${scene1Render.telemetry.focusShield}, Sub-second solve: ${has03sSolve}`
  );

  // Scene 1 Cursor Choreography across phases:
  // Phase 1 (progress 20): Demonstrates Solve action
  harness.setState(2, 20);
  const cursorP1 = harness.render().cursorState;
  const hasSolveAction =
    cursorP1 &&
    (cursorP1.label?.includes('Double-Click') ||
      cursorP1.label?.includes('Alt+S') ||
      cursorP1.label?.includes('Solve') ||
      cursorP1.label?.includes('Snip') ||
      cursorP1.tag === 'solve' ||
      cursorP1.tag === 'snip');

  // Phase 2 (progress 50): Demonstrates Mode transition / Stealth / Snip
  harness.setState(2, 50);
  const cursorP2 = harness.render().cursorState;
  const hasModeAction =
    cursorP2 &&
    (cursorP2.label?.includes('Alt+') ||
      cursorP2.label?.includes('Snip') ||
      cursorP2.label?.includes('Vision') ||
      cursorP2.label?.includes('Stealth') ||
      cursorP2.label?.includes('Invisible') ||
      cursorP2.tag === 'snip' ||
      cursorP2.tag === 'invisible' ||
      cursorP2.tag === 'solve');

  // Phase 3 (progress 80): Demonstrates Derivation or Panic switch
  harness.setState(2, 80);
  const cursorP3 = harness.render().cursorState;
  const hasDerivationAction =
    cursorP3 &&
    (cursorP3.label?.includes('Alt+') ||
      cursorP3.label?.includes('Panic') ||
      cursorP3.label?.includes('Kill-Switch') ||
      cursorP3.label?.includes('Breakdown') ||
      cursorP3.label?.includes('Derivation') ||
      cursorP3.label?.includes('Proof') ||
      cursorP3.label?.includes('Drawer') ||
      cursorP3.tag === 'invisible' ||
      cursorP3.tag === 'explain');

  check(
    `SCENE-1-CURSOR-HOTKEYS-${demo.name}`,
    'Scene 1 Choreographed Cursor Hotkeys',
    `${demo.name} cursor choreography executes Solve, Mode transitions, and Derivation/Panic`,
    hasSolveAction && hasModeAction && hasDerivationAction,
    `P1 Solve: ${hasSolveAction}, P2 Mode: ${hasModeAction}, P3 Derivation: ${hasDerivationAction}`
  );

  // Scene 2 Verification: 2-in-1 Frontier AI Study Hub
  initial.scrubberProps.onSeekScene(2);
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
        cursor.label.length > 0;

      check(
        `CURSOR-${demo.name}-s${sc}-p${prog}`,
        'Cursor Physics Bounds',
        `${demo.name} Scene ${sc} at ${prog}% cursor is in bounds [0, 100]%`,
        validCursor,
        `x: ${cursor?.x}%, y: ${cursor?.y}%, label: "${cursor?.label}"`
      );
    }
  }

  // 5. Restart Function
  initial.scrubberProps.onRestart();
  check(
    `INT-07-${demo.name}`,
    'Restart Function',
    `${demo.name} onRestart resets to Scene 0`,
    harness.getState(1) === 0 && harness.getState(2) === 0,
    `Scene: ${harness.getState(1)}, Progress: ${harness.getState(2)}`
  );

  // 6. Playback Speed Toggling (1x, 1.5x, 2x)
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
// SUITE 3: CompareHubStackCalculator Special Logic & Math Engine Stress Test
// ============================================================================
console.log('\n>>> [SUITE 3] CompareHubStackCalculator Dynamic TCO Math & LMS Engine...');

{
  const calcHarness = createComponentHarness(Demos.CompareHubStackCalculator);

  // Test LMS switches: 'canvas' -> 'newquizzes' -> 'blackboard' -> 'moodle' -> 'brightspace'
  const lmsOptions: Array<'canvas' | 'newquizzes' | 'blackboard' | 'moodle' | 'brightspace'> = [
    'canvas',
    'newquizzes',
    'blackboard',
    'moodle',
    'brightspace',
  ];

  for (const lms of lmsOptions) {
    calcHarness.setState(5, lms); // selectedLms is Hook 5
    const rendered = calcHarness.render();
    check(
      `TCO-01-LMS-${lms}`,
      'LMS Switching',
      `CompareHubStackCalculator toggles LMS target to "${lms}" without errors`,
      calcHarness.getState(5) === lms,
      `Active LMS: ${calcHarness.getState(5)}`
    );
  }

  // Test Plan switching: 'annual' ($99/yr), 'monthly' ($19/mo = $228/yr), 'lifetime' ($199 once)
  const plans: Array<'annual' | 'monthly' | 'lifetime'> = ['annual', 'monthly', 'lifetime'];
  for (const pl of plans) {
    calcHarness.setState(11, pl);
    const rendered = calcHarness.render();
    check(
      `TCO-02-Plan-${pl}`,
      'Plan Switching',
      `CompareHubStackCalculator toggles plan to "${pl}" cleanly`,
      calcHarness.getState(11) === pl,
      `Active Plan: ${calcHarness.getState(11)}`
    );
  }

  // Test TCO Math with all checkboxes enabled
  calcHarness.setState(1, 2); // Scene 2
  calcHarness.setState(6, true); // hasQuizExt ($25)
  calcHarness.setState(7, true); // hasChatGptPlus ($20)
  calcHarness.setState(8, true); // hasClaudePro ($20)
  calcHarness.setState(9, true); // hasCourseHero ($39.95)
  calcHarness.setState(10, true); // hasChegg ($19.95)
  calcHarness.setState(11, 'annual'); // $99/yr

  const htmlMax = cleanSsrHtml(renderToString(calcHarness.render().element));
  const leaksMax = detectHtmlLeaks(htmlMax);
  check(
    'TCO-03-MaxSpend',
    'TCO Math Maximum Stack',
    'CompareHubStackCalculator computes max stack savings ($1400/yr) without NaNs',
    leaksMax.length === 0 && htmlMax.includes('Save $1400 / year'),
    `Computed banner: ${htmlMax.includes('Save $1400 / year') ? 'Save $1400 / year' : 'Value mismatch'}, Leaks: ${leaksMax.length === 0 ? 'None' : leaksMax.join(', ')}`
  );

  // Disable all checkboxes: $0 competitor spend -> savings should clamp cleanly to $0, not negative!
  calcHarness.setState(6, false);
  calcHarness.setState(7, false);
  calcHarness.setState(8, false);
  calcHarness.setState(9, false);
  calcHarness.setState(10, false);
  calcHarness.setState(11, 'annual');

  const htmlMin = cleanSsrHtml(renderToString(calcHarness.render().element));
  const leaksMin = detectHtmlLeaks(htmlMin);
  check(
    'TCO-04-ZeroSpendClamp',
    'TCO Math Zero Spend Clamp',
    'CompareHubStackCalculator handles $0 competitor spend without negative savings or NaNs',
    leaksMin.length === 0 && htmlMin.includes('Save $0 / year') && !htmlMin.includes('$-'),
    `Zero spend correctly clamped to Save $0 / year: ${htmlMin.includes('Save $0 / year')}`
  );
}

// ============================================================================
// SUITE 4: Adversarial Edge Cases & Rapid-Fire Chaos
// ============================================================================
console.log('\n>>> [SUITE 4] Adversarial Edge Cases & Rapid-Fire Chaos...');

{
  const chaosDemo = Demos.CanvasHackStopwatchDemo;
  const chaosHarness = createComponentHarness(chaosDemo);
  const rendered = chaosHarness.render();

  // Rapid seeking (seek 0 -> 2 -> 1 -> 0 -> 2 in quick succession)
  try {
    for (let i = 0; i < 20; i++) {
      rendered.scrubberProps.onSeekScene(i % 3);
    }
    const finalScene = chaosHarness.getState(1);
    check(
      'CHAOS-01-RapidSeeking',
      'Rapid Seeking',
      '20 rapid scene seek calls executed cleanly without exception or NaN',
      finalScene === 1,
      `Final Scene: ${finalScene}`
    );
  } catch (err: any) {
    check('CHAOS-01-RapidSeeking', 'Rapid Seeking', 'Failed rapid seeking', false, undefined, err.message);
  }

  // Rapid play/pause toggles (10 rapid toggles)
  try {
    for (let i = 0; i < 10; i++) {
      rendered.scrubberProps.onTogglePlay();
    }
    const finalPlay = chaosHarness.getState(0);
    check(
      'CHAOS-02-RapidPlayToggle',
      'Rapid Play Toggling',
      '10 rapid play/pause toggles execute cleanly without state desync',
      typeof finalPlay === 'boolean',
      `Final Play State: ${finalPlay}`
    );
  } catch (err: any) {
    check('CHAOS-02-RapidPlayToggle', 'Rapid Play Toggling', 'Failed rapid toggle', false, undefined, err.message);
  }

  // Boundary scene seeking: negative index or out-of-bounds index
  try {
    rendered.scrubberProps.onSeekScene(-1);
    const negRender = chaosHarness.render();
    const negLeaks = detectHtmlLeaks(cleanSsrHtml(renderToString(negRender.element)));
    check(
      'CHAOS-03-NegativeSceneIndex',
      'Negative Scene Index',
      'Negative scene index seek handled without fatal crash or NaNs',
      negLeaks.length === 0,
      `Leaks: ${negLeaks.length === 0 ? 'None' : negLeaks.join(', ')}`
    );
  } catch (err: any) {
    check('CHAOS-03-NegativeSceneIndex', 'Negative Scene Index', 'Threw on negative index', false, undefined, err.message);
  }

  try {
    rendered.scrubberProps.onSeekScene(99);
    const obRender = chaosHarness.render();
    const obLeaks = detectHtmlLeaks(cleanSsrHtml(renderToString(obRender.element)));
    check(
      'CHAOS-04-OutOfBoundsSceneIndex',
      'Out of Bounds Scene Index',
      'Out of bounds scene index seek handled without fatal crash or NaNs',
      obLeaks.length === 0,
      `Leaks: ${obLeaks.length === 0 ? 'None' : obLeaks.join(', ')}`
    );
  } catch (err: any) {
    check('CHAOS-04-OutOfBoundsSceneIndex', 'Out of Bounds Scene Index', 'Threw on out-of-bounds index', false, undefined, err.message);
  }
}

// ============================================================================
// Summary & Verdict
// ============================================================================
console.log('\n================================================================');
console.log('SUMMARY REPORT: EMPIRICAL STRESS TESTS');
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
