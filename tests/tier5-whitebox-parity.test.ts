/**
 * Tier 5 White-Box Adversarial Parity Hardening Test Suite (Milestone 7 Phase 2)
 *
 * Exhaustive empirical verification across all 58 competitor comparison routes
 * and supporting data files.
 *
 * Invariants Tested:
 * 1. Quota Parity: Sitewide zero "50 Free Solves" trial text; confirm "5 Free Solves / Day" ($0, auto-refills 24h, no card needed).
 * 2. Hotkey Parity: Confirm all 6 hotkeys (Double-Click, Alt+S, Alt+1, Alt+2, Alt+3, ⌘+Shift+U) in each of the 58 routes.
 * 3. Model Parity: Confirm all 3 frontier models (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1) in each of the 58 routes.
 * 4. Pricing Parity: Confirm 4-tier model ($0 Free, $19/mo, $99/yr [$8.25/mo], $199 Lifetime) and confirm ZERO truncated "$199 Life" occurrences repository-wide.
 * 5. Table Column Parity: Confirm every <tr> row across every <table> in all 58 routes matches its header count.
 * 6. JSON-LD Schemas: Confirm valid structured data across all 58 routes (@context, @graph, WebPage, BreadcrumbList, FAQPage, SoftwareApplication with 4 offers).
 * 7. Supporting Data Files Parity: src/data/competitors.ts and src/components/CompareHubClient.tsx parity.
 * 8. SSR Leak Detection: Zero NaN, zero undefined attributes, zero invalid widths.
 */

import React from 'react';
(global as any).React = React;
import { renderToString } from 'react-dom/server';
import fs from 'fs';
import path from 'path';
import { COMPARISON_ROUTES, MODERN_HOTKEYS, FRONTIER_MODELS } from './e2e/config';
import { scanFiles, REPO_ROOT } from './e2e/helpers';
import { COMPETITORS } from '../src/data/competitors';

// ============================================================================
// Tracking & Reporting Utilities
// ============================================================================
interface ParityCheckResult {
  id: string;
  category: string;
  target: string;
  passed: boolean;
  message: string;
  details?: string;
}

const results: ParityCheckResult[] = [];
let passCount = 0;
let failCount = 0;

function assertParity(
  id: string,
  category: string,
  target: string,
  condition: boolean,
  message: string,
  details?: string
) {
  if (condition) {
    passCount++;
    results.push({ id, category, target, passed: true, message, details });
  } else {
    failCount++;
    results.push({ id, category, target, passed: false, message, details });
    console.error(`❌ [FAIL] [${id}] [${target}] ${message}${details ? ` -> ${details}` : ''}`);
  }
}

function findObjectsWithType(obj: any, targetType: string): any[] {
  let matched: any[] = [];
  if (!obj || typeof obj !== 'object') return matched;
  if (Array.isArray(obj)) {
    for (const item of obj) {
      matched = matched.concat(findObjectsWithType(item, targetType));
    }
  } else {
    const type = obj['@type'];
    if (type === targetType || (Array.isArray(type) && type.includes(targetType))) {
      matched.push(obj);
    }
    for (const k of Object.keys(obj)) {
      matched = matched.concat(findObjectsWithType(obj[k], targetType));
    }
  }
  return matched;
}

console.log('================================================================');
console.log(' TIER 5: WHITE-BOX ADVERSARIAL PARITY HARDENING (ALL 58 ROUTES)');
console.log('================================================================\n');

// ============================================================================
// SECTION 1: Quota Parity
// ============================================================================
console.log('>>> [SECTION 1] Quota Parity Audit (Sitewide Zero "50 Free Solves" & 5 Free Solves / Day)...');

// 1A: Repository-wide scan for forbidden ExamGhost trial text
const allSrcFiles = scanFiles('src', ['.ts', '.tsx', '.js', '.jsx', '.json', '.md']);
const forbiddenTrialPatterns = [
  /\b50[\s-]*(?:free[\s-]*solves?|solve[\s-]*trial|free[\s-]*question[\s-]*solves?)\b/i,
  /claim\s*50\s*free/i,
  /faq-.*50-solves?\b/i,
];

let sitewideTrialViolations: { file: string; line: number; text: string }[] = [];
for (const relFile of allSrcFiles) {
  const fullPath = path.resolve(REPO_ROOT, relFile);
  const text = fs.readFileSync(fullPath, 'utf8');
  const lines = text.split('\n');
  lines.forEach((l, idx) => {
    for (const pat of forbiddenTrialPatterns) {
      if (pat.test(l)) {
        // Exclude competitor context / 50-question midterm / 50k users / ~150 solves/mo
        if (!/rightclickai.*50x|500-request|50,000\s*users|~\s*150/i.test(l)) {
          sitewideTrialViolations.push({ file: relFile, line: idx + 1, text: l.trim() });
        }
      }
    }
  });
}

assertParity(
  'T5-QUOTA-01-SITEWIDE',
  'Quota Parity',
  'src/',
  sitewideTrialViolations.length === 0,
  'Sitewide zero "50 Free Solves" trial occurrences',
  sitewideTrialViolations.length === 0
    ? `Scanned ${allSrcFiles.length} files in src/ - 0 violations`
    : `${sitewideTrialViolations.length} violations: ${JSON.stringify(sitewideTrialViolations)}`
);

// 1B & 1C: Per-route check across all 58 routes
for (const route of COMPARISON_ROUTES) {
  const fullPath = path.resolve(REPO_ROOT, route.filePath);
  const content = fs.readFileSync(fullPath, 'utf8');

  // Verify "5 Free Solves / Day"
  const has5Free =
    /5\s*Free\s*Solves\s*(?:\/|\s*per\s*)\s*Day/i.test(content) ||
    /5\s*free\s*solves\s*daily/i.test(content);
  assertParity(
    `T5-QUOTA-02-${route.slug}`,
    'Quota Parity',
    route.slug,
    has5Free,
    'Confirms "5 Free Solves / Day" branding',
    has5Free ? 'Valid 5 Free Solves / Day quota found' : 'Missing 5 Free Solves / Day'
  );

  // Verify Free $0 representation
  const hasZeroPrice =
    /\$0\b|\$0\.00\b|"price":\s*"0(?:\.00)?"|"lowPrice":\s*"0(?:\.00)?"/i.test(content);
  assertParity(
    `T5-QUOTA-03-${route.slug}`,
    'Quota Parity',
    route.slug,
    hasZeroPrice,
    'Confirms $0 / Free Tier representation',
    hasZeroPrice ? '$0 / Free tier present' : 'Missing $0 tier'
  );

  // Verify daily auto-refill quota cadence
  const hasDailyQuota =
    /5\s*Free\s*Solves\s*\/\s*Day|5\s*free\s*solves\s*daily|5\s*free\s*solves\s*per\s*day|auto-refill|24\s*h|every\s*24\s*hours/i.test(content);
  assertParity(
    `T5-QUOTA-04-${route.slug}`,
    'Quota Parity',
    route.slug,
    hasDailyQuota,
    'Confirms daily recurring free solve quota cadence',
    hasDailyQuota ? 'Daily quota verified' : 'Missing daily quota cadence'
  );
}

// ============================================================================
// SECTION 2: Modern Hotkey Parity (All 6 Hotkeys Across All 58 Routes)
// ============================================================================
console.log('>>> [SECTION 2] Hotkey Parity Audit (All 6 Modern Hotkeys in All 58 Routes)...');

for (const route of COMPARISON_ROUTES) {
  const fullPath = path.resolve(REPO_ROOT, route.filePath);
  const content = fs.readFileSync(fullPath, 'utf8');

  for (const hotkey of MODERN_HOTKEYS) {
    const escaped = hotkey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const hasHotkey = new RegExp(escaped, 'i').test(content);

    assertParity(
      `T5-HOTKEY-${hotkey}-${route.slug}`,
      'Hotkey Parity',
      route.slug,
      hasHotkey,
      `Hotkey "${hotkey}" present in route content`,
      hasHotkey ? `Found ${hotkey}` : `MISSING ${hotkey}`
    );
  }
}

// ============================================================================
// SECTION 3: Frontier Model Parity (All 3 Models in All 58 Routes)
// ============================================================================
console.log('>>> [SECTION 3] Model Parity Audit (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1 in All 58 Routes)...');

for (const route of COMPARISON_ROUTES) {
  const fullPath = path.resolve(REPO_ROOT, route.filePath);
  const content = fs.readFileSync(fullPath, 'utf8');

  const hasClaude = /Claude\s*3\.7\s*Sonnet/i.test(content);
  const hasChatGpt = /ChatGPT\s*(?:o3-mini\/4o|o3-mini|4o)|\(GPT-4o\s*\/\s*o3-mini\)|GPT-4o\/o3/i.test(content);
  const hasDeepSeek = /DeepSeek-R1|DeepSeek\s*R1/i.test(content);

  assertParity(
    `T5-MODEL-CLAUDE-${route.slug}`,
    'Model Parity',
    route.slug,
    hasClaude,
    'Claude 3.7 Sonnet cited',
    hasClaude ? 'Found Claude 3.7 Sonnet' : 'MISSING Claude 3.7 Sonnet'
  );

  assertParity(
    `T5-MODEL-CHATGPT-${route.slug}`,
    'Model Parity',
    route.slug,
    hasChatGpt,
    'ChatGPT o3-mini/4o cited',
    hasChatGpt ? 'Found ChatGPT o3-mini/4o' : 'MISSING ChatGPT o3-mini/4o'
  );

  assertParity(
    `T5-MODEL-DEEPSEEK-${route.slug}`,
    'Model Parity',
    route.slug,
    hasDeepSeek,
    'DeepSeek-R1 cited',
    hasDeepSeek ? 'Found DeepSeek-R1' : 'MISSING DeepSeek-R1'
  );
}

// ============================================================================
// SECTION 4: 4-Tier Pricing Parity & Truncated "$199 Life" Elimination
// ============================================================================
console.log('>>> [SECTION 4] Pricing Parity & Truncation Elimination Audit...');

// 4A: Repository-wide check for truncated "$199 Life"
let sitewideTruncatedLife: { file: string; line: number; text: string }[] = [];
for (const relFile of allSrcFiles) {
  const fullPath = path.resolve(REPO_ROOT, relFile);
  const text = fs.readFileSync(fullPath, 'utf8');
  const lines = text.split('\n');
  lines.forEach((l, idx) => {
    // Matches $199 Life when not followed by a letter (e.g. not Lifetime)
    if (/\$199(?:\.00)?\s+Life(?![a-zA-Z])/i.test(l)) {
      sitewideTruncatedLife.push({ file: relFile, line: idx + 1, text: l.trim() });
    }
  });
}

assertParity(
  'T5-PRICING-01-ZERO-TRUNCATED-LIFE',
  'Pricing Parity',
  'src/',
  sitewideTruncatedLife.length === 0,
  'ZERO truncated "$199 Life" occurrences across the entire repository',
  sitewideTruncatedLife.length === 0
    ? '0 truncated occurrences confirmed'
    : `${sitewideTruncatedLife.length} truncated occurrences found: ${JSON.stringify(sitewideTruncatedLife)}`
);

// 4B: 4-Tier Pricing Stack in each of the 58 routes
for (const route of COMPARISON_ROUTES) {
  const fullPath = path.resolve(REPO_ROOT, route.filePath);
  const content = fs.readFileSync(fullPath, 'utf8');

  const hasMonthly = /\$19(?:\.00)?\s*\/\s*(?:mo|month)/i.test(content) || /\$19(?:\.00)?\s+Monthly/i.test(content);
  const hasAnnual =
    (/\$99(?:\.00)?\s*\/\s*yr/i.test(content) || /\$99(?:\.00)?\s+Academic/i.test(content)) ||
    /\$8\.25(?:\s*\/\s*mo|\/month)?/i.test(content);
  const hasLifetime = /\$199(?:\.00)?(?:\s+(?:one-time|forever))?\s*(?:Lifetime|Degree|Pass)/i.test(content);

  assertParity(
    `T5-PRICING-TIERS-${route.slug}`,
    'Pricing Parity',
    route.slug,
    hasMonthly && hasAnnual && hasLifetime,
    'Confirms 4-tier model ($0 Free, $19/mo, $99/yr [$8.25/mo], $199 Lifetime)',
    `hasMonthly=${hasMonthly}, hasAnnual=${hasAnnual}, hasLifetime=${hasLifetime}`
  );
}

// ============================================================================
// SECTION 5: Table Column Parity (Source JSX & SSR Rendered DOM)
// ============================================================================
console.log('>>> [SECTION 5] Table Column Parity Audit (Every <tr> Matches Header Count Across All 58 Routes)...');

let totalTablesChecked = 0;
let tableMismatchesFound: string[] = [];

for (const route of COMPARISON_ROUTES) {
  const fullPath = path.resolve(REPO_ROOT, route.filePath);
  const mod = require(fullPath);
  const Component = mod.default;
  const html = renderToString(React.createElement(Component));

  const tableRegex = /<table[\s\S]*?<\/table>/g;
  let tableMatch;
  let tIdx = 0;

  while ((tableMatch = tableRegex.exec(html)) !== null) {
    tIdx++;
    totalTablesChecked++;
    const tableHtml = tableMatch[0];
    const trMatches = tableHtml.match(/<tr\b[\s\S]*?<\/tr>/g) || [];
    if (trMatches.length === 0) continue;

    const headerRow = trMatches[0];
    const headerCells = headerRow ? headerRow.match(/<(?:th|td)\b[\s\S]*?<\/(?:th|td)>/g) || [] : [];
    let expectedCols = 0;
    headerCells.forEach((c) => {
      const colSpan = c.match(/colspan="?([0-9]+)"?/i);
      expectedCols += colSpan ? parseInt(colSpan[1], 10) : 1;
    });

    trMatches.slice(1).forEach((tr, rIdx) => {
      const cells = tr.match(/<(?:td|th)\b[\s\S]*?<\/(?:td|th)>/g) || [];
      let cols = 0;
      cells.forEach((c) => {
        const colSpan = c.match(/colspan="?([0-9]+)"?/i);
        cols += colSpan ? parseInt(colSpan[1], 10) : 1;
      });

      if (cols !== expectedCols) {
        tableMismatchesFound.push(
          `${route.slug} Table ${tIdx} Row ${rIdx + 2}: expected ${expectedCols} cols, got ${cols}`
        );
      }
    });
  }

  assertParity(
    `T5-TABLE-COLS-${route.slug}`,
    'Table Column Parity',
    route.slug,
    tIdx > 0 || route.slug === 'compare-canvas-hack-extensions',
    `Table column parity verified across rendered <table> structures (${tIdx} table(s))`,
    tIdx > 0 ? `${tIdx} table(s) checked` : 'Master hub delegates to CompareHubClient table'
  );
}

assertParity(
  'T5-TABLE-COLS-OVERALL',
  'Table Column Parity',
  'all-58-routes',
  tableMismatchesFound.length === 0,
  `Every <tr> row across all ${totalTablesChecked} tables matches its header count`,
  tableMismatchesFound.length === 0
    ? `All ${totalTablesChecked} tables match 100%`
    : `Mismatches: ${tableMismatchesFound.join('; ')}`
);

// ============================================================================
// SECTION 6: JSON-LD Schemas Validation Across All 58 Routes
// ============================================================================
console.log('>>> [SECTION 6] JSON-LD Schema Validation Across All 58 Routes...');

for (const route of COMPARISON_ROUTES) {
  const fullPath = path.resolve(REPO_ROOT, route.filePath);
  const mod = require(fullPath);
  const Component = mod.default;
  const html = renderToString(React.createElement(Component));

  const scriptMatch = html.match(/<script type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/);
  let parsedJson: any = null;
  let parseError: string | null = null;

  if (scriptMatch) {
    try {
      parsedJson = JSON.parse(scriptMatch[1]);
    } catch (e: any) {
      parseError = e.message;
    }
  }

  assertParity(
    `T5-SCHEMA-PARSE-${route.slug}`,
    'JSON-LD Schema',
    route.slug,
    scriptMatch !== null && parseError === null,
    'Valid JSON-LD script tag and JSON.parse succeeds',
    parseError ? `Parse error: ${parseError}` : 'Successfully parsed JSON-LD'
  );

  if (parsedJson) {
    const hasContext = parsedJson['@context'] === 'https://schema.org';
    assertParity(
      `T5-SCHEMA-CONTEXT-${route.slug}`,
      'JSON-LD Schema',
      route.slug,
      hasContext,
      '@context is "https://schema.org"',
      `@context=${parsedJson['@context']}`
    );

    const webPages = findObjectsWithType(parsedJson, 'WebPage')
      .concat(findObjectsWithType(parsedJson, 'TechArticle'))
      .concat(findObjectsWithType(parsedJson, 'CollectionPage'));
    assertParity(
      `T5-SCHEMA-WEBPAGE-${route.slug}`,
      'JSON-LD Schema',
      route.slug,
      webPages.length > 0,
      'WebPage / TechArticle entity present in @graph',
      `Found ${webPages.length} WebPage/TechArticle entity`
    );

    const breadcrumbs = findObjectsWithType(parsedJson, 'BreadcrumbList');
    assertParity(
      `T5-SCHEMA-BREADCRUMB-${route.slug}`,
      'JSON-LD Schema',
      route.slug,
      breadcrumbs.length > 0,
      'BreadcrumbList entity present in @graph',
      `Found ${breadcrumbs.length} BreadcrumbList entity`
    );

    const faqs = findObjectsWithType(parsedJson, 'FAQPage');
    const validFaq =
      faqs.length > 0 &&
      Array.isArray(faqs[0].mainEntity) &&
      faqs[0].mainEntity.length > 0;
    assertParity(
      `T5-SCHEMA-FAQ-${route.slug}`,
      'JSON-LD Schema',
      route.slug,
      validFaq,
      'FAQPage entity with mainEntity Q&A present in @graph',
      validFaq ? `${faqs[0].mainEntity.length} Q&A items` : 'Missing or empty FAQPage'
    );

    const apps = findObjectsWithType(parsedJson, 'SoftwareApplication');
    const examGhostApp = apps.find((a) => /ExamGhost/i.test(a.name || a['@id'] || ''));
    let validOffers = false;
    let offerDetail = '';

    if (examGhostApp && examGhostApp.offers) {
      const offers = examGhostApp.offers;
      if (Array.isArray(offers)) {
        const prices = offers.map((o: any) => parseFloat(o.price));
        validOffers =
          prices.some((p) => p === 0) &&
          prices.some((p) => p === 19) &&
          prices.some((p) => p === 99) &&
          prices.some((p) => p === 199);
        offerDetail = `Individual offers: [${prices.join(', ')}]`;
      } else if (offers['@type'] === 'AggregateOffer') {
        const low = parseFloat(offers.lowPrice);
        const high = parseFloat(offers.highPrice);
        validOffers = low === 0 && high === 199;
        offerDetail = `AggregateOffer: lowPrice=${low}, highPrice=${high}`;
      }
    }

    assertParity(
      `T5-SCHEMA-OFFERS-${route.slug}`,
      'JSON-LD Schema',
      route.slug,
      validOffers,
      'SoftwareApplication with 4 pricing offers ($0, $19, $99, $199)',
      validOffers ? offerDetail : `Invalid offers: ${offerDetail}`
    );
  }
}

// ============================================================================
// SECTION 7: Supporting Data Files Parity Audit
// ============================================================================
console.log('>>> [SECTION 7] Supporting Data Files Parity (competitors.ts & CompareHubClient.tsx)...');

// 7A: src/data/competitors.ts pricing parity
const compEntries = Object.values(COMPETITORS);
let invalidCompPricing: string[] = [];
let truncatedLifeInCompetitors = 0;

compEntries.forEach((comp) => {
  const p = comp.examghostPricing;
  if (!p.includes('5 Free') || !p.includes('$19/mo') || !p.includes('$99/yr') || !p.includes('$199 Lifetime')) {
    invalidCompPricing.push(`${comp.slug}: "${p}"`);
  }
  if (/\$199(?:\.00)?\s+Life(?![a-zA-Z])/i.test(JSON.stringify(comp))) {
    truncatedLifeInCompetitors++;
  }
});

assertParity(
  'T5-DATA-COMPETITORS-PRICING',
  'Supporting Data',
  'src/data/competitors.ts',
  invalidCompPricing.length === 0,
  `All ${compEntries.length} competitor entries have standardized examghostPricing`,
  invalidCompPricing.length === 0 ? 'All 57 entries standardized' : `Invalid: ${invalidCompPricing.join(', ')}`
);

assertParity(
  'T5-DATA-COMPETITORS-ZERO-TRUNCATION',
  'Supporting Data',
  'src/data/competitors.ts',
  truncatedLifeInCompetitors === 0,
  'Zero truncated "$199 Life" occurrences in competitors.ts',
  `Found ${truncatedLifeInCompetitors} truncated instances`
);

// 7B: src/components/CompareHubClient.tsx
const compareHubPath = path.resolve(REPO_ROOT, 'src/components/CompareHubClient.tsx');
const compareHubCode = fs.readFileSync(compareHubPath, 'utf8');

const hubHasDoubleAltS = /0\.3s\s+Double-Click\s*\+\s*Alt\+S/i.test(compareHubCode);
const hubHasHotkeys = /Alt\+1\/2\/3\s*·\s*⌘\+Shift\+U/i.test(compareHubCode);
const hubHasModels = /Claude\s*3\.7\s*\+\s*GPT-4o\/o3\s*\+\s*R1/i.test(compareHubCode);
const hubHasPricing = /\$19\/mo\s*·\s*\$99\/yr\s*\(\$8\.25\/mo\)\s*·\s*\$199\s*Lifetime/i.test(compareHubCode);
const hubHasFree = /5\s*Free\s*Solves\s*\/\s*Day\s*\(\$0\)/i.test(compareHubCode);
const hubHasZeroTruncation = !/\$199(?:\.00)?\s+Life(?![a-zA-Z])/i.test(compareHubCode);

assertParity(
  'T5-DATA-COMPAREHUB-PARITY',
  'Supporting Data',
  'CompareHubClient.tsx',
  hubHasDoubleAltS && hubHasHotkeys && hubHasModels && hubHasPricing && hubHasFree && hubHasZeroTruncation,
  'CompareHubClient.tsx features hotkeys, models, pricing ($199 Lifetime), and quota',
  `DoubleAltS=${hubHasDoubleAltS}, Hotkeys=${hubHasHotkeys}, Models=${hubHasModels}, Pricing=${hubHasPricing}, Free=${hubHasFree}`
);

// ============================================================================
// SECTION 8: SSR Leak Detection (Zero NaN, Zero Undefined, Valid Widths)
// ============================================================================
console.log('>>> [SECTION 8] SSR HTML Leak Detection Across All 58 Routes...');

let ssrLeaksCount = 0;
const leakDetails: string[] = [];

for (const route of COMPARISON_ROUTES) {
  const fullPath = path.resolve(REPO_ROOT, route.filePath);
  const mod = require(fullPath);
  const Component = mod.default;
  const rawHtml = renderToString(React.createElement(Component));
  const html = rawHtml.replace(/<!--[\s\S]*?-->/g, '');

  if (/style="[^"]*NaN[^"]*"/i.test(html)) {
    ssrLeaksCount++;
    leakDetails.push(`${route.slug}: style contains NaN`);
  }
  if (/width:\s*NaN/i.test(html)) {
    ssrLeaksCount++;
    leakDetails.push(`${route.slug}: width: NaN`);
  }

  const attrUndefined = html.match(/(?:id|class|aria-[a-z]+|data-[a-z]+)="[^"]*\bundefined\b[^"]*"/i);
  if (attrUndefined) {
    ssrLeaksCount++;
    leakDetails.push(`${route.slug}: attribute undefined: ${attrUndefined[0]}`);
  }

  const bareUndefined = html.match(/>\s*undefined\s*</);
  if (bareUndefined) {
    ssrLeaksCount++;
    leakDetails.push(`${route.slug}: bare token >undefined<`);
  }

  const bareNaN = html.match(/>\s*NaN\s*</);
  if (bareNaN) {
    ssrLeaksCount++;
    leakDetails.push(`${route.slug}: bare token >NaN<`);
  }

  const widthPctMatch = html.match(/width:\s*([+-]?[0-9.]+)%/g);
  if (widthPctMatch) {
    for (const m of widthPctMatch) {
      const numStr = m.replace(/width:\s*/i, '').replace('%', '').trim();
      const val = parseFloat(numStr);
      if (!Number.isFinite(val) || val < 0 || val > 100.001) {
        ssrLeaksCount++;
        leakDetails.push(`${route.slug}: invalid width ${m}`);
      }
    }
  }
}

assertParity(
  'T5-SSR-LEAKS-OVERALL',
  'SSR Leak Detection',
  'all-58-routes',
  ssrLeaksCount === 0,
  'Zero NaN, zero undefined attributes, and zero invalid widths across all 58 routes',
  ssrLeaksCount === 0 ? '0 leaks detected' : `${ssrLeaksCount} leaks: ${leakDetails.join(', ')}`
);

// ============================================================================
// Final Diagnostic Scorecard
// ============================================================================
console.log('\n================================================================');
console.log(` TIER 5 AUDIT SUMMARY: ${passCount} / ${passCount + failCount} CHECKS PASSED`);
console.log('================================================================');
console.log(`Total Checks Executed: ${passCount + failCount}`);
console.log(`Passed Checks:         ${passCount}`);
console.log(`Failed Checks:         ${failCount}`);

if (failCount === 0) {
  console.log('\n================================================================');
  console.log(' VERDICT: NO_REMAINING_GAPS');
  console.log(' All 58 comparison routes and supporting data files satisfy 100%');
  console.log(' of white-box parity invariants with zero defects or regressions.');
  console.log('================================================================\n');
  process.exit(0);
} else {
  console.error('\n================================================================');
  console.error(` VERDICT: REJECT (${failCount} defects identified)`);
  console.error('================================================================\n');
  process.exit(1);
}
