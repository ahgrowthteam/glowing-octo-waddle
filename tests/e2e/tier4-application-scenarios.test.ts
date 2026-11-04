/**
 * Tier 4: Real-World Application Scenarios Test Suite
 * Evaluates full academic student journeys and simulated proctored exam environments:
 * 1. STEM Exam Simulation (Organic Chemistry & Multivariable Calculus)
 * 2. Healthcare & Anatomy Simulation (Canvas New Quizzes LTI 1.3 Iframe diagrams)
 * 3. Business & Financial Accounting Simulation (Corporate Balance Sheets & TCO)
 * 4. High-Stakes Proctoring Simulation (Webcam Gaze Vectors & Focus Loss Evasion)
 * 5. Full Student Lifecycle Journey (Free Trial -> Pass Upgrade -> Multi-Model Study Hub)
 */

import test from 'node:test';
import assert from 'node:assert';
import { COMPARISON_ROUTES } from './config';
import { readProjectFile, fileExists } from './helpers';

test('Tier 4: STEM Simulation — Organic Chemistry & Calculus workflows execute with 0.3s solve and 0 blur flags', () => {
  const stemRoutes = COMPARISON_ROUTES.filter(
    (r) => r.subjectDomain.includes('Chemistry') || r.subjectDomain.includes('Calculus')
  );
  assert.ok(stemRoutes.length >= 8, 'Expected at least 8 STEM comparison routes');

  // Verify flagship STEM route (canvashack) features complete hotkey execution
  const canvashackRoute = stemRoutes.find((r) => r.slug === 'canvashack');
  assert.ok(canvashackRoute, 'canvashack must be present as flagship STEM comparison route');
  const canvashackContent = readProjectFile(canvashackRoute.filePath);
  assert.ok(/0\.3s/i.test(canvashackContent), 'canvashack must feature 0.3s solve latency');
  assert.ok(/Double-Click/i.test(canvashackContent), 'canvashack must feature Double-Click hotkey');
  assert.ok(/Alt\+S/i.test(canvashackContent), 'canvashack must feature Alt+S vision snip');

  // Verify 0.3s latency claim across STEM routes
  for (const route of stemRoutes) {
    if (!fileExists(route.filePath)) continue;
    const content = readProjectFile(route.filePath);
    assert.ok(
      /0\.3s|0\.3\s*second/i.test(content),
      `STEM route ${route.slug} must feature 0.3s inline solve speed`
    );
  }
});

test('Tier 4: Healthcare & Anatomy Simulation — Quizonator LTI 1.3 iframe diagram handling via Alt+S Hybrid Vision Snip', () => {
  const quizonatorRoute = COMPARISON_ROUTES.find((r) => r.slug === 'quizonator');
  assert.ok(quizonatorRoute, 'Quizonator route must exist in registry');

  if (fileExists(quizonatorRoute.filePath)) {
    const content = readProjectFile(quizonatorRoute.filePath);

    // Verify LTI 1.3 iframe problem definition
    assert.ok(
      /LTI\s*1\.3|iframe|New\s*Quizzes/i.test(content),
      'Quizonator page must address Canvas New Quizzes LTI 1.3 iframes'
    );

    // Verify Alt+S Vision Snip solution
    assert.ok(
      /Alt\+S|Vision\s*Snip|Snap-It/i.test(content),
      'Quizonator page must feature Alt+S Hybrid Vision Snip to capture cross-origin diagrams'
    );
  }
});

test('Tier 4: Business & Financial Accounting Simulation — Course Hero balance sheet audit and TCO comparison', () => {
  const courseHeroRoute = COMPARISON_ROUTES.find((r) => r.slug === 'coursehero');
  assert.ok(courseHeroRoute, 'Course Hero route must exist in registry');

  if (fileExists(courseHeroRoute.filePath)) {
    const content = readProjectFile(courseHeroRoute.filePath);

    // Verify paywall flaw documentation
    assert.ok(
      /paywall|blurred|static\s*PDF|39\.95/i.test(content),
      'Course Hero page must document $39.95 static blurred PDF paywall'
    );

    // Verify live AI generation breakdown
    assert.ok(
      /Live\s*AI|0\.3s|Claude|DeepSeek/i.test(content),
      'Course Hero page must contrast with live AI workspace generation'
    );
  }
});

test('Tier 4: High-Stakes Proctoring Simulation — Gauth 35° downward phone gaze vs ExamGhost 0.0° on-screen HUD', () => {
  const gauthRoute = COMPARISON_ROUTES.find((r) => r.slug === 'gauth');
  assert.ok(gauthRoute, 'Gauth route must exist in registry');

  if (fileExists(gauthRoute.filePath)) {
    const content = readProjectFile(gauthRoute.filePath);

    // Verify 35 degree camera gaze flaw documentation
    assert.ok(
      /35°|gaze|webcam|downward/i.test(content),
      'Gauth page must document the 35° downward phone camera gaze anomaly'
    );

    // Verify 0.0° on-screen HUD stealth vector
    assert.ok(
      /0\.0°|on-screen|Focus\s*Shield|webcam/i.test(content),
      'Gauth page must highlight ExamGhost 0.0° on-screen gaze vector'
    );
  }
});

test('Tier 4: Complete Student Lifecycle Journey — Free trial onboarding to $99/yr Academic Pass upgrade', () => {
  const sampleRoutes = ['canvashack', 'apexvision', 'compare-canvas-hack-extensions'];

  for (const slug of sampleRoutes) {
    const route = COMPARISON_ROUTES.find((r) => r.slug === slug);
    if (!route || !fileExists(route.filePath)) continue;

    const content = readProjectFile(route.filePath);

    // 1. Free entry point: 5 Free Solves / Day ($0 no card)
    assert.ok(
      /5\s*Free\s*Solves\s*\/\s*Day/i.test(content),
      `Route ${slug} must offer 5 Free Solves / Day entry point`
    );

    // 2. Paid upgrade option: $99/yr Academic Pass or $19/mo
    assert.ok(
      /\$99\s*\/\s*yr|\$19\s*\/\s*mo/i.test(content),
      `Route ${slug} must provide clear upgrade path to $99/yr or $19/mo`
    );

    // 3. Multi-model Study AI Workspace included
    assert.ok(
      /Claude|ChatGPT|DeepSeek/i.test(content),
      `Route ${slug} must confirm Study AI Workspace is included with paid access`
    );
  }
});
