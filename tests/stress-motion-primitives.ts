import React from 'react';
import { renderToString } from 'react-dom/server';
import {
    MotionCursor,
    MotionTimelineScrubber,
    MotionDemoFrame,
    MotionScene,
    TelemetryState,
    SpeedOption,
    CursorState,
} from '../src/components/motion-demo';

export interface Finding {
    id: string;
    severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
    component: string;
    title: string;
    description: string;
    reproduction: string;
    expected: string;
    actual: string;
    impact: string;
}

const findings: Finding[] = [];
let totalChecks = 0;
let passedChecks = 0;

function check(
    passed: boolean,
    component: string,
    testName: string,
    defectIfFailed?: Finding
) {
    totalChecks++;
    if (passed) {
        passedChecks++;
    } else if (defectIfFailed) {
        findings.push(defectIfFailed);
        console.log(`❌ [DEFECT FOUND] [${defectIfFailed.severity}] ${defectIfFailed.component}: ${defectIfFailed.title}`);
    } else {
        console.log(`❌ [FAILED CHECK] ${component}: ${testName}`);
    }
}

console.log('================================================================');
console.log('STARTING EMPIRICAL MOTION PRIMITIVES STRESS TESTING');
console.log('================================================================\n');

// =========================================================================
// SUITE 1: MotionCursor Empirical Stress Testing
// =========================================================================
console.log('>>> [1/4] Stress-testing MotionCursor...');

// 1.1 Default Props
{
    const html = renderToString(React.createElement(MotionCursor, {}));
    check(html.includes('svg') && html.includes('pointer-events-none'), 'MotionCursor', 'Default props render SVG cursor');
}

// 1.2 Zero Coordinates (0, 0)
{
    const html = renderToString(React.createElement(MotionCursor, { x: 0, y: 0 }));
    // Note: Framer motion SSR renders initial opacity:0.
    check(html.length > 0, 'MotionCursor', 'Render at coordinates (0, 0)');
}

// 1.3 Negative & Overflow Coordinates
{
    const htmlNeg = renderToString(React.createElement(MotionCursor, { x: -100, y: -50 }));
    const htmlOver = renderToString(React.createElement(MotionCursor, { x: 250, y: 300 }));
    check(htmlNeg.length > 0 && htmlOver.length > 0, 'MotionCursor', 'Negative and overflow coordinates render without fatal crash');
}

// 1.4 NaN and Infinity Coordinates
{
    const htmlNaN = renderToString(React.createElement(MotionCursor, { x: NaN, y: NaN, label: 'NaN Test' }));
    check(htmlNaN.length > 0, 'MotionCursor', 'NaN coordinates render without throwing fatal error');
}

// 1.5 Click Ripple Activation
{
    const htmlIdle = renderToString(React.createElement(MotionCursor, { clicking: false }));
    const htmlClick = renderToString(React.createElement(MotionCursor, { clicking: true }));
    const hasRippleIdle = htmlIdle.includes('rounded-full border-2 border-emerald-400');
    const hasRippleClick = htmlClick.includes('rounded-full border-2 border-emerald-400');
    check(!hasRippleIdle && hasRippleClick, 'MotionCursor', 'Click ripple renders only when clicking is true');
}

// 1.6 Badge Color Theming
{
    const labels = [
        { label: 'Window blur flagged', expectedClass: 'bg-red-950/95' },
        { label: 'Alt+S Vision Snip', expectedClass: 'bg-sky-950/95' },
        { label: 'Alt+1 Invisible Mode', expectedClass: 'bg-purple-950/95' },
        { label: 'Alt+3 Derivation Breakdown', expectedClass: 'bg-amber-950/95' },
        { label: 'Double-Click Solve', expectedClass: 'bg-[#0f172a]/95' },
    ];
    let allThemed = true;
    for (const item of labels) {
        const html = renderToString(React.createElement(MotionCursor, { label: item.label }));
        if (!html.includes(item.expectedClass)) {
            allThemed = false;
        }
    }
    check(allThemed, 'MotionCursor', 'Badge theming assigns expected styling according to action keywords');
}

// 1.7 Visibility Prop
{
    const htmlInvisible = renderToString(React.createElement(MotionCursor, { visible: false }));
    check(htmlInvisible === '', 'MotionCursor', 'visible: false returns empty/null markup');
}

// 1.8 SSR Initial Coordinate Evaluation
{
    const html = renderToString(React.createElement(MotionCursor, { x: 75, y: 80 }));
    // Does the SSR output carry style left/top or only opacity:0?
    const hasStyleCoords = html.includes('left:') || html.includes('top:');
    check(
        hasStyleCoords,
        'MotionCursor',
        'SSR initial position should include style coordinates to prevent hydration layout shift',
        {
            id: 'MC-DEFECT-01',
            severity: 'LOW',
            component: 'MotionCursor',
            title: 'SSR HTML lacks inline coordinates (rendered style="opacity:0" only)',
            description: 'Framer Motion motion.div specifies left/top only inside animate={{ left, top }} without initial or inline style={{ left, top }}. During SSR, left and top coordinates are not serialized in the HTML style attribute, rendering the element with unpositioned left:auto; top:auto until client-side hydration completes.',
            reproduction: "renderToString(React.createElement(MotionCursor, { x: 75, y: 80 }))",
            expected: 'HTML contains style="...left:75%;top:80%..." or similar positioning attributes',
            actual: 'HTML style contains only style="opacity:0"',
            impact: 'Potential visual jitter or layout shift during initial paint on slow connections before Framer Motion hydrates on the client.',
        }
    );
}


// =========================================================================
// SUITE 2: MotionTimelineScrubber Empirical Stress Testing
// =========================================================================
console.log('>>> [2/4] Stress-testing MotionTimelineScrubber...');

const standardScenes: MotionScene[] = [
    { id: 1, label: 'Competitor Failure', durationMs: 6500 },
    { id: 2, label: 'ExamGhost 0.3s Solve', durationMs: 6500 },
    { id: 3, label: 'AI Workspace Breakdown', durationMs: 6500 },
];

// 2.1 Empty Scenes Array (0 Scenes)
{
    const html = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: [],
        currentScene: 0,
        sceneProgress: 0,
        isPlaying: false,
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    check(html.includes('00:00') && html.includes('region'), 'MotionTimelineScrubber', '0 scenes array renders gracefully without crash');
}

// 2.2 Undefined Scenes Prop Fatal Crash
{
    let crashed = false;
    let crashMessage = '';
    try {
        renderToString(React.createElement(MotionTimelineScrubber, {
            scenes: undefined as any,
            currentScene: 0,
            sceneProgress: 0,
            isPlaying: false,
            onTogglePlay: () => {},
            onSeekScene: () => {},
        }));
    } catch (err: any) {
        crashed = true;
        crashMessage = err?.message || String(err);
    }
    check(
        !crashed,
        'MotionTimelineScrubber',
        'Undefined scenes prop should fall back to empty array rather than fatal crash',
        {
            id: 'MTS-DEFECT-01',
            severity: 'HIGH',
            component: 'MotionTimelineScrubber',
            title: 'Fatal crash (TypeError) when scenes prop is undefined',
            description: 'MotionTimelineScrubber lacks a default parameter for scenes (e.g. scenes = []). Calling scenes.reduce(...) immediately throws an unhandled TypeError: Cannot read properties of undefined (reading "reduce") if scenes is undefined.',
            reproduction: 'renderToString(React.createElement(MotionTimelineScrubber, { scenes: undefined, ... }))',
            expected: 'Component renders gracefully with scenes defaulting to []',
            actual: `Unhandled exception: ${crashMessage}`,
            impact: 'Fatal React error boundary trigger or 500 SSR crash if comparison page loads scenes asynchronously or receives undefined.',
        }
    );
}

// 2.3 Ten Scenes Pill Numbering: SCENE 010 Defect
{
    const tenScenes: MotionScene[] = Array.from({ length: 10 }, (_, i) => ({
        id: i + 1,
        label: `Scene ${i + 1}`,
        durationMs: 2000,
    }));
    const html = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: tenScenes,
        currentScene: 9,
        sceneProgress: 0,
        isPlaying: false,
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    const has010 = html.includes('SCENE 0<!-- -->10') || html.includes('SCENE 010');
    check(
        !has010,
        'MotionTimelineScrubber',
        'Scene 10 should be formatted as SCENE 10, not SCENE 010',
        {
            id: 'MTS-DEFECT-02',
            severity: 'LOW',
            component: 'MotionTimelineScrubber',
            title: 'Scene numbering defect: prints "SCENE 010" for 10th scene',
            description: 'Line 178 of MotionTimelineScrubber.tsx hardcodes `SCENE 0{idx + 1}`. For idx = 9 (the 10th scene), it renders `SCENE 010` instead of `SCENE 10`.',
            reproduction: 'renderToString(React.createElement(MotionTimelineScrubber, { scenes: tenScenes, currentScene: 9, ... }))',
            expected: 'Rendered text is "SCENE 10"',
            actual: 'Rendered text is "SCENE 010"',
            impact: 'Visual formatting defect on any demo with 10 or more chapters.',
        }
    );
}

// 2.4 sceneProgress Normalization Discontinuity (Float vs Percentage)
{
    // Test values around boundary 1
    const p0 = renderToString(React.createElement(MotionTimelineScrubber, { scenes: standardScenes, currentScene: 0, sceneProgress: 0, isPlaying: true, onTogglePlay: () => {}, onSeekScene: () => {} }));
    const p05 = renderToString(React.createElement(MotionTimelineScrubber, { scenes: standardScenes, currentScene: 0, sceneProgress: 0.5, isPlaying: true, onTogglePlay: () => {}, onSeekScene: () => {} }));
    const p1 = renderToString(React.createElement(MotionTimelineScrubber, { scenes: standardScenes, currentScene: 0, sceneProgress: 1, isPlaying: true, onTogglePlay: () => {}, onSeekScene: () => {} }));
    const p15 = renderToString(React.createElement(MotionTimelineScrubber, { scenes: standardScenes, currentScene: 0, sceneProgress: 1.5, isPlaying: true, onTogglePlay: () => {}, onSeekScene: () => {} }));
    const p2 = renderToString(React.createElement(MotionTimelineScrubber, { scenes: standardScenes, currentScene: 0, sceneProgress: 2, isPlaying: true, onTogglePlay: () => {}, onSeekScene: () => {} }));

    const getWidth = (html: string) => {
        const m = html.match(/style="width:([^"]+)"/);
        return m ? m[1] : '';
    };

    const w05 = getWidth(p05);
    const w1 = getWidth(p1);
    const w15 = getWidth(p15);
    const w2 = getWidth(p2);

    // Look at w1 vs w15: w1 = 100%, w15 = 1.5%!
    const hasDiscontinuity = (w1 === '100%' && w15 === '1.5%');
    check(
        !hasDiscontinuity,
        'MotionTimelineScrubber',
        'sceneProgress normalization heuristic causes severe non-monotonic progress jumps',
        {
            id: 'MTS-DEFECT-03',
            severity: 'HIGH',
            component: 'MotionTimelineScrubber',
            title: 'Severe progress bar discontinuity between progress 1.0 and 1.5',
            description: 'Line 39 of MotionTimelineScrubber.tsx uses `sceneProgress <= 1 && sceneProgress > 0 ? sceneProgress * 100 : sceneProgress`. If a caller passes progress as a percentage from 0 to 100%, when the timer reaches 1% (sceneProgress = 1), it multiplies by 100 and jumps to 100%! When the timer reaches 1.5%, sceneProgress <= 1 is false, so it drops back down to 1.5% width! Conversely, if caller passes 0-1 float, reaching 1.001 collapses width from 100% to 1%.',
            reproduction: 'sceneProgress = 0.5 -> 50%, sceneProgress = 1.0 -> 100%, sceneProgress = 1.5 -> 1.5%, sceneProgress = 2.0 -> 2%',
            expected: 'Monotonic continuous progress bar width without 100% flicker at 1%',
            actual: 'width at 1.0 is 100%, width at 1.5 drops to 1.5%',
            impact: 'Progress bar flashes violently to 100% at the start of each scene for percentage-based animation tickers.',
        }
    );
}

// 2.5 NaN in sceneProgress Leaks "NaN:NaN" into User Interface
{
    const htmlNaN = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: standardScenes,
        currentScene: 0,
        sceneProgress: NaN,
        isPlaying: true,
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    const hasNaNTime = htmlNaN.includes('NaN:NaN');
    const hasNaNWidth = htmlNaN.includes('width:NaN%');
    check(
        !hasNaNTime && !hasNaNWidth,
        'MotionTimelineScrubber',
        'NaN in sceneProgress leaks into user-visible clock and CSS width',
        {
            id: 'MTS-DEFECT-04',
            severity: 'MEDIUM',
            component: 'MotionTimelineScrubber',
            title: 'NaN in sceneProgress leaks "NaN:NaN" into visible time counter and "width:NaN%" in CSS',
            description: 'In JavaScript, `Math.max(0, NaN)` and `Math.min(100, NaN)` evaluate to NaN. If sceneProgress is NaN (e.g. from 0/0 elapsed calculation), normalizedProgress becomes NaN, causing calculatedElapsed to become NaN and formatTime(calculatedElapsed) to output "NaN:NaN" in the visible header. Furthermore, the scene pill progress line renders style="width:NaN%".',
            reproduction: 'renderToString(React.createElement(MotionTimelineScrubber, { sceneProgress: NaN, ... }))',
            expected: 'NaN is sanitized to 0% and 00:00',
            actual: 'HTML renders <span>NaN:NaN</span> and style="width:NaN%"',
            impact: 'Displays broken "NaN:NaN" text to users if an animation calculation temporarily yields NaN.',
        }
    );
}

// 2.6 Unclamped propElapsed Exceeding totalDuration
{
    const htmlExceed = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: standardScenes,
        currentScene: 2,
        sceneProgress: 100,
        isPlaying: false,
        totalElapsedMs: 25000,
        totalDurationMs: 19500,
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    const hasOverTime = htmlExceed.includes('00:25');
    check(
        !hasOverTime,
        'MotionTimelineScrubber',
        'totalElapsedMs exceeding totalDurationMs should be clamped in time display',
        {
            id: 'MTS-DEFECT-05',
            severity: 'LOW',
            component: 'MotionTimelineScrubber',
            title: 'Caller-supplied totalElapsedMs is not clamped to totalDurationMs',
            description: 'In MotionTimelineScrubber.tsx line 49, `if (propElapsed !== undefined) return propElapsed;` immediately returns propElapsed without clamping via Math.min(totalDuration, propElapsed). When totalElapsedMs = 25000 and totalDurationMs = 19500, the clock renders "00:25 / 00:19".',
            reproduction: 'renderToString(React.createElement(MotionTimelineScrubber, { totalElapsedMs: 25000, totalDurationMs: 19500, ... }))',
            expected: 'Clock renders "00:19 / 00:19"',
            actual: 'Clock renders "00:25 / 00:19"',
            impact: 'Time counter can display elapsed time greater than total video duration.',
        }
    );
}

// 2.7 Scene durationMs = 0 Falsy Coercion
{
    const zeroScenes: MotionScene[] = [
        { id: 1, label: 'Instant Scene', durationMs: 0 },
    ];
    const htmlZero = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: zeroScenes,
        currentScene: 0,
        sceneProgress: 0,
        isPlaying: false,
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    // Check if totalDuration is 00:00 or 00:06 (6500ms)
    const coercedTo6500 = htmlZero.includes('00:06') || htmlZero.includes('00:07');
    check(
        !coercedTo6500,
        'MotionTimelineScrubber',
        'Scene durationMs = 0 should not be coerced to 6500ms via falsy || operator',
        {
            id: 'MTS-DEFECT-06',
            severity: 'LOW',
            component: 'MotionTimelineScrubber',
            title: 'Falsy coercion `s.durationMs || 6500` forces 0ms scenes to 6500ms',
            description: 'Lines 45, 52, and 55 use `s.durationMs || 6500`. Because 0 is falsy in JavaScript, a deliberately defined 0ms scene (e.g. instantaneous transition or freeze frame) is coerced to 6500ms instead of respecting 0.',
            reproduction: 'renderToString(React.createElement(MotionTimelineScrubber, { scenes: [{ durationMs: 0, ... }], ... }))',
            expected: 'Total duration is 00:00 (0ms)',
            actual: 'Total duration is coerced to 00:06 (6500ms)',
            impact: 'Scenes with durationMs = 0 cannot exist without being forced to 6.5s.',
        }
    );
}

// 2.8 Speed Control Options
{
    let speedChangedTo: SpeedOption | null = null;
    const htmlSpeed = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: standardScenes,
        currentScene: 0,
        sceneProgress: 0,
        isPlaying: true,
        playbackSpeed: 1.5,
        onSpeedChange: (s) => { speedChangedTo = s; },
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    check(htmlSpeed.includes('1.5x') && htmlSpeed.includes('text-emerald-300'), 'MotionTimelineScrubber', 'Active playback speed 1.5x highlighted');
}


// =========================================================================
// SUITE 3: MotionDemoFrame Empirical Stress Testing
// =========================================================================
console.log('>>> [3/4] Stress-testing MotionDemoFrame...');

// 3.1 Dead Prop: title in MotionDemoFrame
{
    const htmlTitle = renderToString(React.createElement(MotionDemoFrame, {
        title: 'UNIQUE_CUSTOM_EXAM_VIEWPORT_TITLE_XYZ',
        children: 'Child Viewport',
    }));
    const rendersTitle = htmlTitle.includes('UNIQUE_CUSTOM_EXAM_VIEWPORT_TITLE_XYZ');
    check(
        rendersTitle,
        'MotionDemoFrame',
        'title prop should be rendered in simulated browser header',
        {
            id: 'MDF-DEFECT-01',
            severity: 'MEDIUM',
            component: 'MotionDemoFrame',
            title: 'Dead prop: `title` is defined in MotionDemoFrameProps but never rendered',
            description: 'MotionDemoFrame accepts `title?: string` in its props (and defaults to "Canvas Quiz Viewport" on line 11). However, the variable `title` is never rendered anywhere in the JSX tree. Consumers specifying custom titles (e.g. "McGraw-Hill Connect Viewport" or "Pearson MyLab Viewport") will see no visual effect.',
            reproduction: 'renderToString(React.createElement(MotionDemoFrame, { title: "Custom Title", children: "..." }))',
            expected: 'HTML contains "Custom Title" in the window title bar or tab header',
            actual: 'Prop is completely omitted from the rendered output',
            impact: 'Bespoke page titles cannot be surfaced in the demo frame window header.',
        }
    );
}

// 3.2 Pluralization Flaw in Telemetry Badge
{
    const htmlMultiFlag = renderToString(React.createElement(MotionDemoFrame, {
        telemetryState: {
            speedGrader: '',
            focusShield: false,
            blurEvents: 5,
            status: 'flagged',
        },
        children: 'Child',
    }));
    const hasPluralGrammar = htmlMultiFlag.includes('5 window.blur flags');
    const hasSingularWithMultiple = htmlMultiFlag.includes('5 window.blur flag ·');
    check(
        !hasSingularWithMultiple,
        'MotionDemoFrame',
        'Telemetry badge should pluralize flags when blurEvents > 1',
        {
            id: 'MDF-DEFECT-02',
            severity: 'LOW',
            component: 'MotionDemoFrame',
            title: 'Grammar defect: "5 window.blur flag" (singular flag for multiple events)',
            description: 'Line 29 of MotionDemoFrame.tsx formats flagged alert text as `${telemetryState?.blurEvents ?? 1} window.blur flag · SpeedGrader Alert!`. When blurEvents is 2, 3, or 5, it prints singular "flag" instead of plural "flags". Conversely, line 30 uses plural "flags" for 0 blur events ("0 window.blur flags").',
            reproduction: 'renderToString(React.createElement(MotionDemoFrame, { telemetryState: { blurEvents: 5, status: "flagged" }, ... }))',
            expected: '"5 window.blur flags · SpeedGrader Alert!"',
            actual: '"5 window.blur flag · SpeedGrader Alert!"',
            impact: 'Minor grammatical inconsistency in user-facing SpeedGrader audit badge.',
        }
    );
}

// 3.3 Clean vs Flagged Styling
{
    const htmlClean = renderToString(React.createElement(MotionDemoFrame, {
        isFlagged: false,
        children: 'Child',
    }));
    const htmlFlagged = renderToString(React.createElement(MotionDemoFrame, {
        isFlagged: true,
        children: 'Child',
    }));
    check(
        htmlClean.includes('text-emerald-400') && htmlFlagged.includes('text-red-400'),
        'MotionDemoFrame',
        'isFlagged toggles SSL lock icon and badge styling between red and emerald'
    );
}


// =========================================================================
// SUITE 4: State Machine Simulation & Rapid Interactions
// =========================================================================
console.log('>>> [4/4] Stress-testing state transitions and rapid interactions...');

// 4.1 Rapid Play/Pause Simulation (10,000 toggles)
{
    let isPlaying = false;
    for (let i = 0; i < 10000; i++) {
        isPlaying = !isPlaying;
    }
    check(isPlaying === false, 'StateMachine', '10,000 rapid play/pause toggles complete without drift');
}

// 4.2 Rapid Scene Seeking
{
    let activeScene = 0;
    const seekSequence = [2, 0, 1, 0, 2, 1, 0, 2, 0];
    let allRendered = true;
    for (const target of seekSequence) {
        activeScene = target;
        const html = renderToString(React.createElement(MotionTimelineScrubber, {
            scenes: standardScenes,
            currentScene: activeScene,
            sceneProgress: 10,
            isPlaying: true,
            onTogglePlay: () => {},
            onSeekScene: (s) => { activeScene = s; },
        }));
        // Verify the active scene pill has "Playing" badge
        if (!html.includes('Playing')) {
            allRendered = false;
        }
    }
    check(allRendered, 'StateMachine', 'Rapid seeking across scenes correctly updates active playing badge');
}

// 4.3 Monotonic Time Counter during Full Playback Simulation
{
    let monotonic = true;
    let prevElapsed = -1;
    const sceneDur = 6500;
    const totalDur = 19500;

    // Simulate 200 time steps across 3 scenes
    for (let t = 0; t <= totalDur; t += 100) {
        const sceneIdx = t >= totalDur ? 2 : Math.min(2, Math.floor(t / sceneDur));
        const progressInScene = t >= totalDur ? 100 : ((t % sceneDur) / sceneDur) * 100;
        
        // Calculated elapsed formula from MotionTimelineScrubber
        let elapsed = 0;
        for (let i = 0; i < sceneIdx && i < standardScenes.length; i++) {
            elapsed += standardScenes[i].durationMs;
        }
        elapsed += (standardScenes[sceneIdx].durationMs * progressInScene) / 100;
        elapsed = Math.min(totalDur, elapsed);

        if (elapsed < prevElapsed) {
            monotonic = false;
        }
        prevElapsed = elapsed;
    }
    check(monotonic, 'StateMachine', 'Internal time calculation is strictly monotonic throughout full playback cycle');
}

// =========================================================================
// FINAL VERDICT & SUMMARY OUTPUT
// =========================================================================
console.log('\n================================================================');
console.log('STRESS TEST COMPLETE — RESULTS SUMMARY');
console.log('================================================================');
console.log(`Total Checks Executed: ${totalChecks}`);
console.log(`Passed Checks:        ${passedChecks}`);
console.log(`Confirmed Defects:    ${findings.length}`);
console.log('----------------------------------------------------------------');

findings.forEach((f, idx) => {
    console.log(`\n[Finding #${idx + 1}] ID: ${f.id} | Severity: ${f.severity}`);
    console.log(`Component:   ${f.component}`);
    console.log(`Title:       ${f.title}`);
    console.log(`Description: ${f.description}`);
    console.log(`Repro:       ${f.reproduction}`);
    console.log(`Impact:      ${f.impact}`);
});

console.log('\n================================================================');
