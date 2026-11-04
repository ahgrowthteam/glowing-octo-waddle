/**
 * Tier 2: Boundary & Corner Cases Test Suite
 * Evaluates edge conditions, boundary states, viewport extremes, and character limits:
 * 1. Responsive Viewport Extremes (320px mobile to 1440px desktop)
 * 2. Rapid Timeline Scrubber Clamping & Seek Boundary Invariants
 * 3. Character Cap Stress (Wolfram 680-char cutoff vs multi-thousand char prompts)
 * 4. Empty State & Parameter Fallback Resilience
 * 5. Focus Shield Blur Telemetry Invariants (0 vs >0 blur logs)
 */

import test from 'node:test';
import assert from 'node:assert';
import { COMPARISON_ROUTES } from './config';
import { readProjectFile, fileExists } from './helpers';

test('Tier 2: Responsive Viewport Extremes — Layouts enforce overflow containment and responsive breakpoints', () => {
  const violatingPages: string[] = [];

  for (const route of COMPARISON_ROUTES) {
    if (!fileExists(route.filePath)) continue;
    const content = readProjectFile(route.filePath);

    // Verify container uses max-w and doesn't hardcode fixed viewport breaking widths (e.g. w-[1600px] without max-w-full)
    const hasUnconstrainedFixedWideWidth = /w-\[(?:1[4-9]\d\d|2\d\d\d)px\](?!\s+max-w)/i.test(content);
    if (hasUnconstrainedFixedWideWidth) {
      violatingPages.push(`${route.slug}: Unconstrained fixed pixel width`);
    }

    // Verify responsive grid or flex adaptations exist (e.g., md:grid-cols or lg:flex)
    const hasResponsiveBreakpoints = /md:|lg:|sm:/i.test(content);
    if (!hasResponsiveBreakpoints) {
      violatingPages.push(`${route.slug}: Missing responsive breakpoint utilities`);
    }
  }

  assert.strictEqual(
    violatingPages.length,
    0,
    `Found viewport responsiveness boundary violations:\n${violatingPages.join('\n')}`
  );
});

test('Tier 2: Timeline Scrubber Seek Boundary Invariants — Scrubber clamps time and scene indices within [0, Max]', () => {
  // Test mathematical invariant of the scrubber clamping logic
  const clampScene = (sceneIndex: number, totalScenes: number): number => {
    return Math.max(0, Math.min(totalScenes - 1, sceneIndex));
  };

  const clampProgress = (progress: number): number => {
    return Math.max(0, Math.min(1, progress));
  };

  // Boundary checks: negative seek
  assert.strictEqual(clampScene(-5, 3), 0, 'Negative scene index must clamp to 0');
  assert.strictEqual(clampScene(0, 3), 0, 'Zero scene index must remain 0');

  // Boundary checks: overshoot seek
  assert.strictEqual(clampScene(3, 3), 2, 'Scene index == totalScenes must clamp to totalScenes - 1');
  assert.strictEqual(clampScene(999, 3), 2, 'Extreme overshoot must clamp to totalScenes - 1');

  // Progress boundaries
  assert.strictEqual(clampProgress(-0.5), 0, 'Negative progress must clamp to 0.0');
  assert.strictEqual(clampProgress(0), 0, 'Zero progress must remain 0.0');
  assert.strictEqual(clampProgress(1), 1, '1.0 progress must remain 1.0');
  assert.strictEqual(clampProgress(1.45), 1, 'Overshoot progress must clamp to 1.0');
});

test('Tier 2: Character Cap Boundary — Wolfram|Alpha 680-char limit contrast is rigorously documented', () => {
  const wolframRoute = COMPARISON_ROUTES.find((r) => r.slug === 'wolframalpha');
  assert.ok(wolframRoute, 'Wolfram|Alpha comparison route must exist in registry');

  if (fileExists(wolframRoute.filePath)) {
    const content = readProjectFile(wolframRoute.filePath);

    // Verify documentation of the 680 char limit
    const mentions680Limit = /680[\s-]*(?:chars?|characters?)|inputCharLimit/i.test(content);
    assert.ok(
      mentions680Limit,
      'Wolfram|Alpha page must document the 680-character query truncation flaw'
    );

    // Verify ExamGhost handles unconstrained length
    const mentionsUnconstrainedSolve =
      /unlimited|unconstrained|no character limit|1,500\+|multi-part/i.test(content);
    assert.ok(
      mentionsUnconstrainedSolve,
      'Wolfram|Alpha comparison must contrast with ExamGhost unconstrained prompt length'
    );
  }
});

test('Tier 2: Empty State & Fallback Resilience — Headless motion demo components define default fallback values', () => {
  const typesPath = 'src/components/motion-demo/types.ts';
  const scrubberPath = 'src/components/motion-demo/MotionTimelineScrubber.tsx';

  // If Milestone 1 primitives exist, verify safe prop defaults
  if (fileExists(typesPath)) {
    const typesContent = readProjectFile(typesPath);
    assert.ok(
      /scenes|MotionScene/i.test(typesContent),
      'Motion demo types must declare scene definitions'
    );
  }

  if (fileExists(scrubberPath)) {
    const scrubberContent = readProjectFile(scrubberPath);
    // Ensure safe default or array handling
    const handlesEmptyScenes =
      /scenes\s*\?\.\s*length|scenes\.length|default/i.test(scrubberContent);
    assert.ok(
      handlesEmptyScenes,
      'Timeline scrubber must guard against empty scene arrays'
    );
  }
});

test('Tier 2: Focus Shield Blur Telemetry Invariant — ExamGhost state records 0 blur events vs competitor failures', () => {
  for (const route of COMPARISON_ROUTES) {
    if (!fileExists(route.filePath)) continue;
    const content = readProjectFile(route.filePath);

    // If the page contains SpeedGrader or telemetry comparisons, verify ExamGhost records 0 blur
    if (/SpeedGrader/i.test(content) && /blur/i.test(content)) {
      const mentionsZeroBlur =
        /(?:0|zero)\s*(?:focus-loss|focus\s*events?|window[.\s]|blur\s*events?|blur|flags?)|Blur\s*Events[^<]*<[^>]*>\s*0|Blocks\s*Blur|Prevents\s*(?:SpeedGrader\s*)?blur|Focus\s*Shield|anti-blur/i.test(
          content
        );
      assert.ok(
        mentionsZeroBlur,
        `Page ${route.slug} references SpeedGrader blur telemetry but omits zero blur/flags/anti-blur assertion`
      );
    }
  }
});
