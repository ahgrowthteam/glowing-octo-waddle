/**
 * Verification Helpers and AST/Regex Inspection Utilities for ExamGhost E2E Tests
 */

import * as fs from 'fs';
import * as path from 'path';
import { MODERN_HOTKEYS, FRONTIER_MODELS, ComparisonRouteSpec } from './config';

export const REPO_ROOT = path.resolve(__dirname, '../../');

/**
 * Read file relative to project root
 */
export function readProjectFile(relPath: string): string {
  const fullPath = path.resolve(REPO_ROOT, relPath);
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${relPath} (resolved: ${fullPath})`);
  }
  return fs.readFileSync(fullPath, 'utf8');
}

/**
 * Check if file exists relative to project root
 */
export function fileExists(relPath: string): boolean {
  return fs.existsSync(path.resolve(REPO_ROOT, relPath));
}

/**
 * Scan a directory recursively for files matching extensions
 */
export function scanFiles(dirRelPath: string, extensions: string[] = ['.ts', '.tsx', '.js', '.jsx']): string[] {
  const fullDir = path.resolve(REPO_ROOT, dirRelPath);
  if (!fs.existsSync(fullDir)) return [];

  const results: string[] = [];
  function recurse(current: string) {
    const entries = fs.readdirSync(current, { withFileTypes: true });
    for (const entry of entries) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) {
        if (entry.name !== 'node_modules' && entry.name !== '.next') {
          recurse(full);
        }
      } else if (entry.isFile()) {
        if (extensions.some((ext) => entry.name.endsWith(ext))) {
          results.push(path.relative(REPO_ROOT, full));
        }
      }
    }
  }
  recurse(fullDir);
  return results;
}

export interface QuotaViolation {
  file: string;
  lineNumber: number;
  matchedText: string;
}

/**
 * Checks for forbidden occurrences of "50 Free Solves" or "50-solve trial" across src/
 * Does NOT flag legitimate exam scenarios (e.g. "50-question exam") or competitor parameters.
 */
export function findExamGhost50SolveViolations(): QuotaViolation[] {
  const files = scanFiles('src');
  const violations: QuotaViolation[] = [];

  // Patterns indicating ExamGhost trial claims (strictly word-boundary bounded)
  const forbiddenPatterns = [
    /\b50[\s-]*(?:free[\s-]*solves?|solve[\s-]*trial|free[\s-]*question[\s-]*solves?)\b/i,
    /claim\s*50\s*free/i,
    /faq-.*50-solves?\b/i,
  ];

  for (const relFile of files) {
    const content = fs.readFileSync(path.resolve(REPO_ROOT, relFile), 'utf8');
    const lines = content.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      for (const pattern of forbiddenPatterns) {
        if (pattern.test(line)) {
          // Check if this line is an external competitor quote or exam length
          const isCompetitorContext =
            /rightclickai.*50x/i.test(line) ||
            /500-request/i.test(line) ||
            /50,000\s*users/i.test(line) ||
            /~\s*150/i.test(line);

          if (!isCompetitorContext) {
            violations.push({
              file: relFile,
              lineNumber: i + 1,
              matchedText: line.trim(),
            });
          }
        }
      }
    }
  }

  return violations;
}

/**
 * Checks if a comparison page contains hidden peer-checked radio buttons boilerplate
 */
export function checkPeerTabBoilerplate(content: string): {
  hasPeerTab: boolean;
  occurrences: string[];
} {
  const matches = content.match(/peer\/tab\d+|sr-only\s+peer\//g) || [];
  return {
    hasPeerTab: matches.length > 0,
    occurrences: matches,
  };
}

/**
 * Inspect hotkey coverage across page content
 */
export function checkHotkeyCoverage(content: string): {
  found: string[];
  missing: string[];
  isComplete: boolean;
} {
  const found: string[] = [];
  const missing: string[] = [];

  for (const hotkey of MODERN_HOTKEYS) {
    const escaped = hotkey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'i');
    if (regex.test(content)) {
      found.push(hotkey);
    } else {
      missing.push(hotkey);
    }
  }

  return {
    found,
    missing,
    isComplete: missing.length === 0,
  };
}

/**
 * Inspect 4-tier pricing structure across page content
 */
export function checkPricingStack(content: string): {
  hasFreeDaily: boolean;
  hasMonthly: boolean;
  hasAnnual: boolean;
  hasLifetime: boolean;
  isComplete: boolean;
} {
  const hasFreeDaily =
    /5\s*Free\s*Solves\s*\/\s*Day/i.test(content) ||
    /5\s*free\s*solves\s*daily/i.test(content) ||
    /5\s*free\s*solves\s*per\s*day/i.test(content);
  const hasMonthly = /\$19(?:\.00)?\s*\/\s*(?:mo|month)/i.test(content) || /\$19(?:\.00)?\s+Monthly/i.test(content);
  const hasAnnual =
    /\$99(?:\.00)?\s*\/\s*yr/i.test(content) ||
    /\$8\.25\s*\/\s*mo/i.test(content) ||
    /\$99(?:\.00)?\s+Academic/i.test(content);
  const hasLifetime = /\$199(?:\.00)?\s*(?:Lifetime|pass)/i.test(content) || /\$199(?:\.00)?/i.test(content);

  return {
    hasFreeDaily,
    hasMonthly,
    hasAnnual,
    hasLifetime,
    isComplete: hasFreeDaily && hasMonthly && hasAnnual && hasLifetime,
  };
}

/**
 * Inspect 2-in-1 Study AI Workspace models
 */
export function checkFrontierModels(content: string): {
  hasClaude: boolean;
  hasChatGpt: boolean;
  hasDeepSeek: boolean;
  isComplete: boolean;
} {
  const hasClaude = /Claude\s*3\.7\s*Sonnet/i.test(content);
  const hasChatGpt = /ChatGPT\s*(?:o3-mini\/4o|o3-mini|4o)|\(GPT-4o\s*\/\s*o3-mini\)/i.test(content);
  const hasDeepSeek = /DeepSeek-R1|DeepSeek\s*R1/i.test(content);

  return {
    hasClaude,
    hasChatGpt,
    hasDeepSeek,
    isComplete: hasClaude && hasChatGpt && hasDeepSeek,
  };
}

/**
 * Inspect JSON-LD schema on comparison page
 */
export function checkJsonLdSchema(content: string): {
  hasJsonLdScript: boolean;
  hasWebPage: boolean;
  hasSoftwareApplication: boolean;
  hasFaqPage: boolean;
  hasOffers: boolean;
  offerPrices: string[];
} {
  const hasJsonLdScript = /application\/ld\+json/i.test(content);
  if (!hasJsonLdScript) {
    return {
      hasJsonLdScript: false,
      hasWebPage: false,
      hasSoftwareApplication: false,
      hasFaqPage: false,
      hasOffers: false,
      offerPrices: [],
    };
  }

  const hasWebPage = /"WebPage"|"TechArticle"/i.test(content);
  const hasSoftwareApplication = /"SoftwareApplication"/i.test(content);
  const hasFaqPage = /"FAQPage"/i.test(content);
  const hasOffers = /"offers"\s*:|"AggregateOffer"/i.test(content);

  // Extract prices if present
  const priceMatches = content.match(/"price"\s*:\s*"([^"]+)"|"lowPrice"\s*:\s*"([^"]+)"/g) || [];
  const offerPrices = priceMatches.map((m) => m.replace(/[^0-9.]/g, ''));

  return {
    hasJsonLdScript: true,
    hasWebPage,
    hasSoftwareApplication,
    hasFaqPage,
    hasOffers,
    offerPrices,
  };
}

/**
 * Inspect motion demo implementation
 */
export function checkMotionDemo(content: string, route: ComparisonRouteSpec): {
  hasBespokeDemo: boolean;
  usesLegacyWrapper: boolean;
  hasPlayPauseControl: boolean;
  hasScrubberControl: boolean;
  hasCursorChoreography: boolean;
  hasCompetitorFailureScene: boolean;
} {
  const usesLegacyWrapper = /<CompetitorMotionDemo\s+slug=/i.test(content);
  
  // Bespoke indicators: imports MotionDemoFrame, TopComparisonDemos, CanvasAndTextbookDemos, DeceptiveTrapsAndStaticBanksDemos, GeneralAiAndSymbolicMathDemos, GeneralAiBatchBDemos, or defines local interactive motion demo
  const importsMotionDemoPrimitives =
    /MotionDemoFrame|MotionCursor|MotionTimelineScrubber|framer-motion|TopComparisonDemos|CanvasAndTextbookDemos|DeceptiveTrapsAndStaticBanksDemos|GeneralAiAndSymbolicMathDemos|GeneralAiBatchBDemos/i.test(content);
  
  const hasPlayPauseControl =
    /Play|Pause|isPlaying|onTogglePlay/i.test(content);
  
  const hasScrubberControl =
    /timeline|scrubber|scenes|currentScene|sceneProgress|simStep|elapsedMs/i.test(content);
  
  const hasCursorChoreography =
    /cursor|MotionCursor|clickRipple|ripple/i.test(content);

  const hasCompetitorFailureScene =
    /failure|blur|SpeedGrader|Stopwatch|Manifest|Paywall|Exposed/i.test(content);

  return {
    hasBespokeDemo: !usesLegacyWrapper && importsMotionDemoPrimitives,
    usesLegacyWrapper,
    hasPlayPauseControl,
    hasScrubberControl,
    hasCursorChoreography,
    hasCompetitorFailureScene,
  };
}
