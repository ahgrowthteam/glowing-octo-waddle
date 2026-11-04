/**
 * Tier 1: Comprehensive Feature Coverage Test Suite
 * Evaluates all 58 routes against the 8 primary feature contracts:
 * 1. Quota Integrity (0 residual "50 Free Solves" across src/)
 * 2. Boilerplate CSS Radio Tab Elimination (0 peer/tab1 occurrences)
 * 3. Route Existence & Default Export Integrity
 * 4. Modern 6-Hotkey Suite Presence
 * 5. 4-Tier Pricing Structure Parity
 * 6. 2-in-1 Frontier AI Models (Claude 3.7, ChatGPT o3-mini/4o, DeepSeek-R1)
 * 7. JSON-LD @graph Schema Parity
 * 8. Bespoke Framer-Motion Demo Integration (Retirement of shared wrapper)
 */

import test from 'node:test';
import assert from 'node:assert';
import { COMPARISON_ROUTES, ComparisonRouteSpec } from './config';
import {
  readProjectFile,
  fileExists,
  findExamGhost50SolveViolations,
  checkPeerTabBoilerplate,
  checkHotkeyCoverage,
  checkPricingStack,
  checkFrontierModels,
  checkJsonLdSchema,
  checkMotionDemo,
} from './helpers';

test('Tier 1: Quota Integrity — Zero occurrences of "50 Free Solves" or "50-solve trial" across src/', () => {
  const violations = findExamGhost50SolveViolations();
  if (violations.length > 0) {
    const errorDetails = violations
      .map((v) => `  - ${v.file}:${v.lineNumber} -> "${v.matchedText}"`)
      .join('\n');
    assert.fail(
      `Found ${violations.length} residual ExamGhost "50 Free Solves" violations in src/:\n${errorDetails}`
    );
  }
  assert.strictEqual(violations.length, 0);
});

test('Tier 1: Template Boilerplate Elimination — Zero hidden radio tabs (peer/tab1) across comparison pages', () => {
  const violatingRoutes: { slug: string; file: string; tabs: string[] }[] = [];

  for (const route of COMPARISON_ROUTES) {
    if (!fileExists(route.filePath)) continue;
    const content = readProjectFile(route.filePath);
    const { hasPeerTab, occurrences } = checkPeerTabBoilerplate(content);
    if (hasPeerTab) {
      violatingRoutes.push({
        slug: route.slug,
        file: route.filePath,
        tabs: occurrences,
      });
    }
  }

  if (violatingRoutes.length > 0) {
    const details = violatingRoutes
      .map((v) => `  - ${v.slug} (${v.file}): found [${v.tabs.slice(0, 3).join(', ')}]`)
      .join('\n');
    assert.fail(
      `Found ${violatingRoutes.length} comparison routes still using hidden radio-button peer tabs:\n${details}`
    );
  }
  assert.strictEqual(violatingRoutes.length, 0);
});

test('Tier 1: Route Integrity — All 58 comparison route files exist and export default components', () => {
  const missingFiles: string[] = [];
  const missingDefaultExport: string[] = [];

  for (const route of COMPARISON_ROUTES) {
    if (!fileExists(route.filePath)) {
      missingFiles.push(route.filePath);
      continue;
    }
    const content = readProjectFile(route.filePath);
    if (!/export\s+default\s+function|export\s+default\s+const|export\s+default/i.test(content)) {
      missingDefaultExport.push(route.filePath);
    }
  }

  assert.strictEqual(
    missingFiles.length,
    0,
    `Missing route files (${missingFiles.length}): ${missingFiles.join(', ')}`
  );
  assert.strictEqual(
    missingDefaultExport.length,
    0,
    `Routes lacking default React export: ${missingDefaultExport.join(', ')}`
  );
});

test('Tier 1: Hotkey Parity — All 58 comparison routes advertise the full 6 modern hotkeys', () => {
  const incompleteRoutes: { slug: string; missing: string[] }[] = [];

  for (const route of COMPARISON_ROUTES) {
    if (!fileExists(route.filePath)) continue;
    const content = readProjectFile(route.filePath);
    const { isComplete, missing } = checkHotkeyCoverage(content);
    if (!isComplete) {
      incompleteRoutes.push({ slug: route.slug, missing });
    }
  }

  if (incompleteRoutes.length > 0) {
    const details = incompleteRoutes
      .map((r) => `  - ${r.slug}: missing [${r.missing.join(', ')}]`)
      .join('\n');
    assert.fail(
      `${incompleteRoutes.length} of 58 routes are missing modern hotkeys:\n${details}`
    );
  }
  assert.strictEqual(incompleteRoutes.length, 0);
});

test('Tier 1: Pricing Stack Parity — All 58 comparison routes render the 4 standard pricing tiers', () => {
  const incompletePricing: { slug: string; missing: string[] }[] = [];

  for (const route of COMPARISON_ROUTES) {
    if (!fileExists(route.filePath)) continue;
    const content = readProjectFile(route.filePath);
    const pricing = checkPricingStack(content);
    if (!pricing.isComplete) {
      const missing: string[] = [];
      if (!pricing.hasFreeDaily) missing.push('Free 5 Solves/Day');
      if (!pricing.hasMonthly) missing.push('$19/mo');
      if (!pricing.hasAnnual) missing.push('$99/yr');
      if (!pricing.hasLifetime) missing.push('$199 Lifetime');
      incompletePricing.push({ slug: route.slug, missing });
    }
  }

  if (incompletePricing.length > 0) {
    const details = incompletePricing
      .map((r) => `  - ${r.slug}: missing [${r.missing.join(', ')}]`)
      .join('\n');
    assert.fail(
      `${incompletePricing.length} of 58 routes lack full 4-tier pricing:\n${details}`
    );
  }
  assert.strictEqual(incompletePricing.length, 0);
});

test('Tier 1: 2-in-1 AI Models — All 58 comparison routes specify Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1', () => {
  const incompleteModels: { slug: string; missing: string[] }[] = [];

  for (const route of COMPARISON_ROUTES) {
    if (!fileExists(route.filePath)) continue;
    const content = readProjectFile(route.filePath);
    const models = checkFrontierModels(content);
    if (!models.isComplete) {
      const missing: string[] = [];
      if (!models.hasClaude) missing.push('Claude 3.7 Sonnet');
      if (!models.hasChatGpt) missing.push('ChatGPT o3-mini/4o');
      if (!models.hasDeepSeek) missing.push('DeepSeek-R1');
      incompleteModels.push({ slug: route.slug, missing });
    }
  }

  if (incompleteModels.length > 0) {
    const details = incompleteModels
      .map((r) => `  - ${r.slug}: missing [${r.missing.join(', ')}]`)
      .join('\n');
    assert.fail(
      `${incompleteModels.length} of 58 routes do not cite all 3 frontier models:\n${details}`
    );
  }
  assert.strictEqual(incompleteModels.length, 0);
});

test('Tier 1: JSON-LD Schema Parity — All 58 comparison routes define WebPage, FAQPage, and SoftwareApplication Offers', () => {
  const incompleteSchemas: { slug: string; issues: string[] }[] = [];

  for (const route of COMPARISON_ROUTES) {
    if (!fileExists(route.filePath)) continue;
    const content = readProjectFile(route.filePath);
    const schema = checkJsonLdSchema(content);

    const issues: string[] = [];
    if (!schema.hasJsonLdScript) issues.push('Missing JSON-LD script tag');
    if (!schema.hasWebPage) issues.push('Missing WebPage in @graph');
    if (!schema.hasFaqPage) issues.push('Missing FAQPage in @graph');
    if (!schema.hasSoftwareApplication) issues.push('Missing SoftwareApplication');
    if (!schema.hasOffers) issues.push('Missing offers / AggregateOffer node');

    if (issues.length > 0) {
      incompleteSchemas.push({ slug: route.slug, issues });
    }
  }

  if (incompleteSchemas.length > 0) {
    const details = incompleteSchemas
      .map((r) => `  - ${r.slug}: [${r.issues.join(', ')}]`)
      .join('\n');
    assert.fail(
      `${incompleteSchemas.length} of 58 routes have incomplete JSON-LD schemas:\n${details}`
    );
  }
  assert.strictEqual(incompleteSchemas.length, 0);
});

test('Tier 1: Motion Demo Architecture — All 58 routes feature bespoke motion demos (Zero shared parameterized wrapper)', () => {
  const wrapperUsingRoutes: string[] = [];
  const missingMotionDemo: string[] = [];

  for (const route of COMPARISON_ROUTES) {
    if (!fileExists(route.filePath)) continue;
    const content = readProjectFile(route.filePath);
    const demo = checkMotionDemo(content, route);

    if (demo.usesLegacyWrapper) {
      wrapperUsingRoutes.push(route.slug);
    }
    if (!demo.hasBespokeDemo) {
      missingMotionDemo.push(route.slug);
    }
  }

  if (wrapperUsingRoutes.length > 0) {
    assert.fail(
      `${wrapperUsingRoutes.length} routes still use the legacy parameterized <CompetitorMotionDemo slug="..." /> wrapper: ${wrapperUsingRoutes.slice(0, 10).join(', ')}...`
    );
  }
  assert.strictEqual(wrapperUsingRoutes.length, 0);
  assert.strictEqual(missingMotionDemo.length, 0);
});
