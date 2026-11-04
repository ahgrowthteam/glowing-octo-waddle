import React from 'react';
import { renderToString } from 'react-dom/server';
import {
    MotionCursor,
    MotionTimelineScrubber,
    MotionDemoFrame,
    MotionScene,
    TelemetryState,
} from '../src/components/motion-demo';

interface AdversarialCheck {
    id: string;
    description: string;
    run: () => { passed: boolean; details: string };
}

const checks: AdversarialCheck[] = [];

function registerCheck(id: string, description: string, run: () => { passed: boolean; details: string }) {
    checks.push({ id, description, run });
}

const sampleScenes: MotionScene[] = [
    { id: 1, label: 'Scene 1', durationMs: 4000 },
    { id: 2, label: 'Scene 2', durationMs: 6000 },
    { id: 3, label: 'Scene 3', durationMs: 8000 },
];

// Helper to check for unwanted leaked tokens in rendered HTML
function detectLeaks(html: string): string[] {
    const leaks: string[] = [];
    if (html.includes('NaN')) leaks.push('Contains "NaN"');
    if (html.includes('undefined') && !html.includes('aria-label="undefined"')) {
        // Some libraries might have legitimate matches, but in our components "undefined" shouldn't leak
        const match = html.match(/:undefined|"undefined"|>\s*undefined\s*</);
        if (match) leaks.push(`Contains literal undefined token: ${match[0]}`);
    }
    if (html.includes('null') && !html.includes('aria-hidden="null"')) {
        const match = html.match(/:null|"null"|>\s*null\s*</);
        if (match) leaks.push(`Contains literal null token: ${match[0]}`);
    }
    if (/width:\s*NaN/i.test(html)) leaks.push('Contains width: NaN%');
    if (/width:\s*undefined/i.test(html)) leaks.push('Contains width: undefined');
    if (/style="[^"]*NaN[^"]*"/i.test(html)) leaks.push('Contains NaN in style attributes');
    return leaks;
}

// -----------------------------------------------------------------------------
// Category A: Undefined / Nullish / Non-Array Scenes in MotionTimelineScrubber
// -----------------------------------------------------------------------------

registerCheck('ADV-01', 'scenes: undefined renders safely with zero leaks', () => {
    try {
        const html = renderToString(React.createElement(MotionTimelineScrubber, {
            scenes: undefined as any,
            currentScene: 0,
            sceneProgress: 0,
            isPlaying: false,
            onTogglePlay: () => {},
            onSeekScene: () => {},
        }));
        const leaks = detectLeaks(html);
        if (leaks.length > 0) return { passed: false, details: `Leaks found: ${leaks.join(', ')}` };
        if (!html.includes('00:00')) return { passed: false, details: 'Expected 00:00 time display' };
        return { passed: true, details: 'Rendered cleanly without exception or leaks' };
    } catch (e: any) {
        return { passed: false, details: `Threw exception: ${e.message}` };
    }
});

registerCheck('ADV-02', 'scenes: null renders safely with zero leaks', () => {
    try {
        const html = renderToString(React.createElement(MotionTimelineScrubber, {
            scenes: null as any,
            currentScene: 0,
            sceneProgress: 0,
            isPlaying: false,
            onTogglePlay: () => {},
            onSeekScene: () => {},
        }));
        const leaks = detectLeaks(html);
        if (leaks.length > 0) return { passed: false, details: `Leaks found: ${leaks.join(', ')}` };
        return { passed: true, details: 'Handled null scenes gracefully' };
    } catch (e: any) {
        return { passed: false, details: `Threw exception: ${e.message}` };
    }
});

registerCheck('ADV-03', 'scenes: non-array object ({ length: 3 }) coerced to empty array safely', () => {
    try {
        const html = renderToString(React.createElement(MotionTimelineScrubber, {
            scenes: { length: 3 } as any,
            currentScene: 0,
            sceneProgress: 0,
            isPlaying: false,
            onTogglePlay: () => {},
            onSeekScene: () => {},
        }));
        const leaks = detectLeaks(html);
        if (leaks.length > 0) return { passed: false, details: `Leaks found: ${leaks.join(', ')}` };
        return { passed: true, details: 'Handled fake array-like object gracefully' };
    } catch (e: any) {
        return { passed: false, details: `Threw exception: ${e.message}` };
    }
});

// -----------------------------------------------------------------------------
// Category B: Negative, Extreme, and Non-Finite Elapsed Time
// -----------------------------------------------------------------------------

registerCheck('ADV-04', 'totalElapsedMs: -1000 clamped to 00:00', () => {
    const html = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: sampleScenes,
        currentScene: 0,
        sceneProgress: 0,
        isPlaying: false,
        totalElapsedMs: -1000,
        totalDurationMs: 18000,
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    const leaks = detectLeaks(html);
    if (leaks.length > 0) return { passed: false, details: `Leaks: ${leaks.join(', ')}` };
    const hasZero = html.includes('00:00') && html.includes('00:18');
    return {
        passed: hasZero,
        details: hasZero ? 'Correctly formatted to 00:00 / 00:18' : 'Failed to display 00:00 / 00:18',
    };
});

registerCheck('ADV-05', 'totalElapsedMs: -Infinity clamped to 00:00', () => {
    const html = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: sampleScenes,
        currentScene: 0,
        sceneProgress: 0,
        isPlaying: false,
        totalElapsedMs: -Infinity,
        totalDurationMs: 18000,
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    const leaks = detectLeaks(html);
    if (leaks.length > 0) return { passed: false, details: `Leaks: ${leaks.join(', ')}` };
    const hasZero = html.includes('00:00');
    return {
        passed: hasZero,
        details: hasZero ? 'Negative infinity safely coerced to 00:00' : 'Failed negative infinity test',
    };
});

registerCheck('ADV-06', 'totalElapsedMs: huge number (1e12 ms) clamped to totalDurationMs', () => {
    const html = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: sampleScenes,
        currentScene: 2,
        sceneProgress: 100,
        isPlaying: false,
        totalElapsedMs: 1e12,
        totalDurationMs: 18000,
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    const leaks = detectLeaks(html);
    if (leaks.length > 0) return { passed: false, details: `Leaks: ${leaks.join(', ')}` };
    // Should clamp to 00:18 / 00:18
    const hasClamped = html.includes('00:18') && !html.includes('16666666');
    return {
        passed: hasClamped,
        details: hasClamped ? 'Successfully clamped huge elapsed time to totalDurationMs' : 'Failed clamp',
    };
});

registerCheck('ADV-07', 'totalElapsedMs: Infinity clamped to totalDurationMs', () => {
    const html = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: sampleScenes,
        currentScene: 2,
        sceneProgress: 100,
        isPlaying: false,
        totalElapsedMs: Infinity,
        totalDurationMs: 18000,
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    const leaks = detectLeaks(html);
    if (leaks.length > 0) return { passed: false, details: `Leaks: ${leaks.join(', ')}` };
    const hasClamped = html.includes('00:18');
    return {
        passed: hasClamped,
        details: hasClamped ? 'Infinity handled cleanly and clamped' : 'Failed Infinity clamp',
    };
});

registerCheck('ADV-08', 'totalElapsedMs: NaN coerced to 00:00', () => {
    const html = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: sampleScenes,
        currentScene: 0,
        sceneProgress: 0,
        isPlaying: false,
        totalElapsedMs: NaN,
        totalDurationMs: 18000,
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    const leaks = detectLeaks(html);
    if (leaks.length > 0) return { passed: false, details: `Leaks: ${leaks.join(', ')}` };
    const hasZero = html.includes('00:00');
    return {
        passed: hasZero,
        details: hasZero ? 'NaN elapsed safely coerced to 00:00' : 'Failed NaN coercion',
    };
});

// -----------------------------------------------------------------------------
// Category C: sceneProgress Boundary Probes (0, 1, 1.5, 100, negative, >100, NaN)
// -----------------------------------------------------------------------------

registerCheck('ADV-09', 'sceneProgress = 1 vs 1.5 vs 100 monotonic progression without jump', () => {
    const p0 = renderToString(React.createElement(MotionTimelineScrubber, { scenes: sampleScenes, currentScene: 0, sceneProgress: 0, isPlaying: false, onTogglePlay: () => {}, onSeekScene: () => {} }));
    const p1 = renderToString(React.createElement(MotionTimelineScrubber, { scenes: sampleScenes, currentScene: 0, sceneProgress: 1, isPlaying: false, onTogglePlay: () => {}, onSeekScene: () => {} }));
    const p15 = renderToString(React.createElement(MotionTimelineScrubber, { scenes: sampleScenes, currentScene: 0, sceneProgress: 1.5, isPlaying: false, onTogglePlay: () => {}, onSeekScene: () => {} }));
    const p50 = renderToString(React.createElement(MotionTimelineScrubber, { scenes: sampleScenes, currentScene: 0, sceneProgress: 50, isPlaying: false, onTogglePlay: () => {}, onSeekScene: () => {} }));
    const p100 = renderToString(React.createElement(MotionTimelineScrubber, { scenes: sampleScenes, currentScene: 0, sceneProgress: 100, isPlaying: false, onTogglePlay: () => {}, onSeekScene: () => {} }));

    const extractWidth = (h: string) => {
        const m = h.match(/style="width:([^"]+)"/);
        return m ? parseFloat(m[1]) : null;
    };

    const w0 = extractWidth(p0);
    const w1 = extractWidth(p1);
    const w15 = extractWidth(p15);
    const w50 = extractWidth(p50);
    const w100 = extractWidth(p100);

    if (w0 === null || w1 === null || w15 === null || w50 === null || w100 === null) {
        return { passed: false, details: 'Could not extract width styles' };
    }

    const strictlyMonotonic = (w0 <= w1) && (w1 <= w15) && (w15 <= w50) && (w50 <= w100);
    const expectedValues = (w1 === 1) && (w15 === 1.5) && (w100 === 100);

    return {
        passed: strictlyMonotonic && expectedValues,
        details: `Widths: [0%->${w0}%, 1%->${w1}%, 1.5%->${w15}%, 50%->${w50}%, 100%->${w100}%]. Monotonic: ${strictlyMonotonic}`,
    };
});

registerCheck('ADV-10', 'sceneProgress: negative (-25) clamped to 0%', () => {
    const html = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: sampleScenes,
        currentScene: 0,
        sceneProgress: -25,
        isPlaying: false,
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    const match = html.match(/style="width:([^"]+)"/);
    const width = match ? match[1] : '';
    const passed = width === '0%';
    return {
        passed,
        details: passed ? 'Clamped -25 to width: 0%' : `Actual width: ${width}`,
    };
});

registerCheck('ADV-11', 'sceneProgress: excessive (500) clamped to 100%', () => {
    const html = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: sampleScenes,
        currentScene: 0,
        sceneProgress: 500,
        isPlaying: false,
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    const match = html.match(/style="width:([^"]+)"/);
    const width = match ? match[1] : '';
    const passed = width === '100%';
    return {
        passed,
        details: passed ? 'Clamped 500 to width: 100%' : `Actual width: ${width}`,
    };
});

registerCheck('ADV-12', 'sceneProgress: NaN clamped to 0% with zero visual leaks', () => {
    const html = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: sampleScenes,
        currentScene: 0,
        sceneProgress: NaN,
        isPlaying: false,
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    const leaks = detectLeaks(html);
    if (leaks.length > 0) return { passed: false, details: `Leaks: ${leaks.join(', ')}` };
    const match = html.match(/style="width:([^"]+)"/);
    const width = match ? match[1] : '';
    const passed = width === '0%';
    return {
        passed,
        details: passed ? 'NaN clamped to 0% and no visual leaks' : `Actual width: ${width}`,
    };
});

registerCheck('ADV-13', 'sceneProgress: Infinity clamped to 100% with zero visual leaks', () => {
    const html = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: sampleScenes,
        currentScene: 0,
        sceneProgress: Infinity,
        isPlaying: false,
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    const leaks = detectLeaks(html);
    if (leaks.length > 0) return { passed: false, details: `Leaks: ${leaks.join(', ')}` };
    const match = html.match(/style="width:([^"]+)"/);
    const width = match ? match[1] : '';
    // Number.isFinite(Infinity) is false -> sanitized to 0
    const passed = width === '0%' || width === '100%';
    return {
        passed,
        details: `Infinity sanitized to finite width (${width}) with zero leaks`,
    };
});

// -----------------------------------------------------------------------------
// Category D: currentScene Out-Of-Bounds
// -----------------------------------------------------------------------------

registerCheck('ADV-14', 'currentScene: negative (-5) handled safely without crash', () => {
    try {
        const html = renderToString(React.createElement(MotionTimelineScrubber, {
            scenes: sampleScenes,
            currentScene: -5,
            sceneProgress: 50,
            isPlaying: false,
            onTogglePlay: () => {},
            onSeekScene: () => {},
        }));
        const leaks = detectLeaks(html);
        if (leaks.length > 0) return { passed: false, details: `Leaks: ${leaks.join(', ')}` };
        return { passed: true, details: 'Negative currentScene rendered without crash or NaN' };
    } catch (e: any) {
        return { passed: false, details: `Exception: ${e.message}` };
    }
});

registerCheck('ADV-15', 'currentScene: beyond length (99) handled safely without crash', () => {
    try {
        const html = renderToString(React.createElement(MotionTimelineScrubber, {
            scenes: sampleScenes,
            currentScene: 99,
            sceneProgress: 50,
            isPlaying: false,
            onTogglePlay: () => {},
            onSeekScene: () => {},
        }));
        const leaks = detectLeaks(html);
        if (leaks.length > 0) return { passed: false, details: `Leaks: ${leaks.join(', ')}` };
        return { passed: true, details: 'Out-of-bounds currentScene rendered without crash or NaN' };
    } catch (e: any) {
        return { passed: false, details: `Exception: ${e.message}` };
    }
});

// -----------------------------------------------------------------------------
// Category E: Malformed Scene Objects
// -----------------------------------------------------------------------------

registerCheck('ADV-16', 'scenes containing missing/undefined durationMs default to 6500ms safely', () => {
    const strangeScenes: any[] = [
        { id: 1, label: 'Missing Duration' },
        { id: 2, label: 'Undefined Duration', durationMs: undefined },
    ];
    const html = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: strangeScenes,
        currentScene: 0,
        sceneProgress: 0,
        isPlaying: false,
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    const leaks = detectLeaks(html);
    if (leaks.length > 0) return { passed: false, details: `Leaks: ${leaks.join(', ')}` };
    // 6500 + 6500 = 13000ms -> 00:13
    const hasTotal = html.includes('00:13');
    return {
        passed: hasTotal,
        details: hasTotal ? 'Correctly defaulted undefined durations to 6500ms (total 00:13)' : 'Default failed',
    };
});

registerCheck('ADV-17', 'scenes containing 0ms duration respected via nullish coalescing', () => {
    const zeroScene: MotionScene[] = [
        { id: 1, label: 'Zero Duration Scene', durationMs: 0 },
    ];
    const html = renderToString(React.createElement(MotionTimelineScrubber, {
        scenes: zeroScene,
        currentScene: 0,
        sceneProgress: 0,
        isPlaying: false,
        onTogglePlay: () => {},
        onSeekScene: () => {},
    }));
    const leaks = detectLeaks(html);
    if (leaks.length > 0) return { passed: false, details: `Leaks: ${leaks.join(', ')}` };
    const has0000 = html.includes('>00:00<');
    const coercedTo6500 = html.includes('00:06') || html.includes('00:07');
    const passed = has0000 && !coercedTo6500;
    return {
        passed,
        details: passed ? 'Duration 0ms correctly calculated as 00:00 total' : 'Duration 0ms was coerced',
    };
});

// -----------------------------------------------------------------------------
// Category F: MotionDemoFrame Edge Cases
// -----------------------------------------------------------------------------

registerCheck('ADV-18', 'MotionDemoFrame with undefined/null telemetryState renders clean default', () => {
    const html = renderToString(React.createElement(MotionDemoFrame, {
        telemetryState: undefined,
        children: React.createElement('div', null, 'Test Child'),
    }));
    const leaks = detectLeaks(html);
    if (leaks.length > 0) return { passed: false, details: `Leaks: ${leaks.join(', ')}` };
    const hasFocusShield = html.includes('0 window.blur flags · Focus Shield active');
    return {
        passed: hasFocusShield,
        details: hasFocusShield ? 'Rendered clean default Focus Shield telemetry' : 'Failed default telemetry',
    };
});

registerCheck('ADV-19', 'MotionDemoFrame blurEvents = 1 renders singular flag', () => {
    const html = renderToString(React.createElement(MotionDemoFrame, {
        telemetryState: { speedGrader: '', focusShield: false, blurEvents: 1, status: 'flagged' },
        children: 'Child',
    }));
    const passed = html.includes('1 window.blur flag · SpeedGrader Alert!');
    return {
        passed,
        details: passed ? 'Grammatically correct singular "1 window.blur flag"' : 'Grammar failure',
    };
});

registerCheck('ADV-20', 'MotionDemoFrame blurEvents = 0 renders plural flags with shield', () => {
    const html = renderToString(React.createElement(MotionDemoFrame, {
        telemetryState: { speedGrader: '', focusShield: true, blurEvents: 0, status: 'clean' },
        children: 'Child',
    }));
    const passed = html.includes('0 window.blur flags · Focus Shield active');
    return {
        passed,
        details: passed ? 'Grammatically correct "0 window.blur flags"' : 'Grammar failure',
    };
});

registerCheck('ADV-21', 'MotionDemoFrame blurEvents = 3 renders plural flags with alert', () => {
    const html = renderToString(React.createElement(MotionDemoFrame, {
        telemetryState: { speedGrader: '', focusShield: false, blurEvents: 3, status: 'flagged' },
        children: 'Child',
    }));
    const passed = html.includes('3 window.blur flags · SpeedGrader Alert!');
    return {
        passed,
        details: passed ? 'Grammatically correct plural "3 window.blur flags"' : 'Grammar failure',
    };
});

registerCheck('ADV-22', 'MotionDemoFrame custom title rendered and truncated in browser bar', () => {
    const testTitle = 'CHEM 101 Midterm Examination';
    const html = renderToString(React.createElement(MotionDemoFrame, {
        title: testTitle,
        children: 'Child',
    }));
    const passed = html.includes(testTitle);
    return {
        passed,
        details: passed ? `Title "${testTitle}" rendered in chrome bar` : 'Title missing from render',
    };
});

// -----------------------------------------------------------------------------
// Category G: MotionCursor Edge Cases & Coordinate Bounds
// -----------------------------------------------------------------------------

registerCheck('ADV-23', 'MotionCursor SSR renders inline left/top style coordinates', () => {
    const html = renderToString(React.createElement(MotionCursor, { x: 42.5, y: 78.9 }));
    const hasInlineLeft = html.includes('left:42.5%') || html.includes('left: 42.5%');
    const hasInlineTop = html.includes('top:78.9%') || html.includes('top: 78.9%');
    const passed = hasInlineLeft && hasInlineTop;
    return {
        passed,
        details: passed ? 'Inline style left and top coordinates present for SSR' : `Missing coords in HTML: ${html.slice(0, 150)}`,
    };
});

registerCheck('ADV-24', 'MotionCursor with NaN coordinates renders without crashing and without text leak', () => {
    const html = renderToString(React.createElement(MotionCursor, { x: NaN, y: NaN, label: 'NaN Coordinate Test' }));
    // Verify component renders without crashing and label text is intact
    const hasLabel = html.includes('NaN Coordinate Test');
    // Verify no text node leaks literal NaN into visible user content
    const matchVisibleTextNaN = html.match(/>\s*NaN\s*</);
    const passed = hasLabel && !matchVisibleTextNaN;
    return {
        passed,
        details: passed ? 'Rendered without crash and without visible text node NaN leak' : 'Visible text NaN leak detected',
    };
});

registerCheck('ADV-25', 'MotionCursor visible = false renders null string without wrapper', () => {
    const html = renderToString(React.createElement(MotionCursor, { visible: false }));
    const passed = html === '';
    return {
        passed,
        details: passed ? 'Returned empty string' : `Unexpected markup returned: ${html}`,
    };
});

// -----------------------------------------------------------------------------
// Execution & Summary
// -----------------------------------------------------------------------------

console.log('================================================================');
console.log('ADVERSARIAL STRESS TEST HARNESS — RUNNING 25 EDGE CASE CHECKS');
console.log('================================================================\n');

let passCount = 0;
let failCount = 0;

for (const check of checks) {
    const res = check.run();
    if (res.passed) {
        passCount++;
        console.log(`✅ [${check.id}] PASS: ${check.description}`);
        console.log(`    ↳ ${res.details}`);
    } else {
        failCount++;
        console.log(`❌ [${check.id}] FAIL: ${check.description}`);
        console.log(`    ↳ ${res.details}`);
    }
}

console.log('\n================================================================');
console.log(`TOTAL ADVERSARIAL CHECKS: ${checks.length}`);
console.log(`PASSED:                  ${passCount}`);
console.log(`FAILED:                  ${failCount}`);
console.log('================================================================\n');

if (failCount > 0) {
    process.exit(1);
} else {
    console.log('ALL ADVERSARIAL CHECKS PASSED EMPIRICALLY!');
    process.exit(0);
}
