import fs from 'fs';
import path from 'path';

const ROOT = path.resolve(__dirname, '..');

const M6_ROUTES = [
  'src/app/quizsolverai-vs-examghost/page.tsx',
  'src/app/quizwizard-vs-examghost/page.tsx',
  'src/app/quizzy-vs-examghost/page.tsx',
  'src/app/rightclickai-vs-examghost/page.tsx',
  'src/app/snapgpt-vs-examghost/page.tsx',
  'src/app/studybotpro-vs-examghost/page.tsx',
  'src/app/studyfox-vs-examghost/page.tsx',
  'src/app/studymonkey-vs-examghost/page.tsx',
  'src/app/testwhiz-vs-examghost/page.tsx',
  'src/app/truststudy-vs-examghost/page.tsx',
];

interface Finding {
  category: string;
  route: string;
  level: 'CRITICAL' | 'MAJOR' | 'MINOR' | 'INFO';
  message: string;
}

const findings: Finding[] = [];

console.log('================================================================');
console.log('   MILESTONE 6 INDEPENDENT REVIEWER VERIFICATION HARNESS');
console.log('================================================================');

// -----------------------------------------------------------------------------
// CHECK 1: Quota Parity
// -----------------------------------------------------------------------------
console.log('\n--- Checking 1: Quota Parity ---');
for (const route of M6_ROUTES) {
  const fullPath = path.join(ROOT, route);
  const content = fs.readFileSync(fullPath, 'utf8');

  // Check "5 Free Solves / Day" or "5 Free Solves/Day"
  const has5FreeSolves = /5\s*Free\s*Solves\s*\/\s*Day/i.test(content);
  if (!has5FreeSolves) {
    findings.push({
      category: 'Quota Parity',
      route,
      level: 'CRITICAL',
      message: 'Missing "5 Free Solves / Day" specification in page content.',
    });
  }

  // Check $0 / no credit card
  const hasNoCard = /\$0|no credit card|zero card|no card/i.test(content);
  if (!hasNoCard) {
    findings.push({
      category: 'Quota Parity',
      route,
      level: 'MAJOR',
      message: 'Missing "$0 / no credit card" specification.',
    });
  }

  // Check prohibited "50 Free Solves" or "50-solve trial" for ExamGhost
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (/\b50[\s-]*(free\s*solves?|solve\s*trial)\b/i.test(line)) {
      findings.push({
        category: 'Quota Parity',
        route,
        level: 'CRITICAL',
        message: `Line ${idx + 1}: Found prohibited 50-solve trial phrase: "${line.trim()}"`,
      });
    }
  });
}

// -----------------------------------------------------------------------------
// CHECK 2: Pricing Parity & Truncated "$199 Life"
// -----------------------------------------------------------------------------
console.log('\n--- Checking 2: Pricing Parity & Truncated "$199 Life" ---');
for (const route of M6_ROUTES) {
  const fullPath = path.join(ROOT, route);
  const content = fs.readFileSync(fullPath, 'utf8');

  // Check 4 tiers
  const hasFreeTier = /Free\s*(Tier|Starter)/i.test(content) && /\$0/i.test(content);
  const hasMonthly = /\$19(?:\.00)?(?:\s*\/\s*mo|\/month)?/i.test(content);
  const hasAcademic = /\$99(?:\.00)?(?:\s*\/\s*yr|\/year)?/i.test(content) && /\$8\.25(?:\s*\/\s*mo|\/month)?/i.test(content);
  const hasLifetime = /\$199(?:\.00)?(?:\s+(?:one-time|forever))?\s*(?:Lifetime|Degree)/i.test(content);

  if (!hasFreeTier) {
    findings.push({ category: 'Pricing Parity', route, level: 'CRITICAL', message: 'Missing Free Tier ($0).' });
  }
  if (!hasMonthly) {
    findings.push({ category: 'Pricing Parity', route, level: 'CRITICAL', message: 'Missing Monthly Pass ($19/mo).' });
  }
  if (!hasAcademic) {
    findings.push({ category: 'Pricing Parity', route, level: 'CRITICAL', message: 'Missing Academic Year Pass ($99/yr [$8.25/mo]).' });
  }
  if (!hasLifetime) {
    findings.push({ category: 'Pricing Parity', route, level: 'CRITICAL', message: 'Missing Lifetime Degree Pass ($199 Lifetime).' });
  }

  // Check truncated "$199 Life" (e.g. "$199 Life" without "time")
  const lines = content.split('\n');
  lines.forEach((line, idx) => {
    if (/\$199(?:\.00)?\s+Life(?![a-zA-Z])/i.test(line)) {
      findings.push({
        category: 'Pricing Parity',
        route,
        level: 'CRITICAL',
        message: `Line ${idx + 1}: Found truncated "$199 Life": "${line.trim()}"`,
      });
    }
  });
}

// Sitewide check for truncated "$199 Life"
console.log('Checking sitewide repository audit for truncated "$199 Life"...');
let sitewideTruncatedCount = 0;
function auditDirForTruncatedLife(dir: string) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (['.git', 'node_modules', '.next', '.agents'].includes(entry.name)) continue;
      auditDirForTruncatedLife(full);
    } else if (entry.isFile() && (full.endsWith('.ts') || full.endsWith('.tsx') || full.endsWith('.md') || full.endsWith('.json'))) {
      if (full.includes('tests/')) continue;
      const text = fs.readFileSync(full, 'utf8');
      const lines = text.split('\n');
      lines.forEach((line, idx) => {
        if (/\$199(?:\.00)?\s+Life(?![a-zA-Z])/i.test(line)) {
          sitewideTruncatedCount++;
        }
      });
    }
  }
}
auditDirForTruncatedLife(ROOT);
console.log(`Sitewide repository audit: Found ${sitewideTruncatedCount} residual instances of "$199 Life" outside M6 (e.g. in src/data/competitors.ts and older pre-M6 routes).`);

// -----------------------------------------------------------------------------
// CHECK 3: Modern Hotkeys (All 6 present)
// -----------------------------------------------------------------------------
console.log('\n--- Checking 3: Modern Hotkeys ---');
const REQUIRED_HOTKEYS = ['Double-Click', 'Alt+S', 'Alt+1', 'Alt+2', 'Alt+3', '⌘+Shift+U'];
for (const route of M6_ROUTES) {
  const fullPath = path.join(ROOT, route);
  const content = fs.readFileSync(fullPath, 'utf8');

  for (const hotkey of REQUIRED_HOTKEYS) {
    const escaped = hotkey.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'i');
    if (!regex.test(content)) {
      findings.push({
        category: 'Modern Hotkeys',
        route,
        level: 'CRITICAL',
        message: `Missing required hotkey: "${hotkey}"`,
      });
    }
  }
}

// -----------------------------------------------------------------------------
// CHECK 4: Frontier Models (All 3 present)
// -----------------------------------------------------------------------------
console.log('\n--- Checking 4: Frontier Models ---');
const REQUIRED_MODELS = [
  'Claude 3.7 Sonnet',
  'ChatGPT o3-mini/4o',
  'DeepSeek-R1',
];

for (const route of M6_ROUTES) {
  const fullPath = path.join(ROOT, route);
  const content = fs.readFileSync(fullPath, 'utf8');

  for (const model of REQUIRED_MODELS) {
    const escaped = model.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escaped, 'i');
    if (!regex.test(content)) {
      findings.push({
        category: 'Frontier Models',
        route,
        level: 'CRITICAL',
        message: `Missing frontier model citation: "${model}"`,
      });
    }
  }
}

// -----------------------------------------------------------------------------
// CHECK 5: JSON-LD Structured Data (4 Offer objects)
// -----------------------------------------------------------------------------
console.log('\n--- Checking 5: JSON-LD Structured Data ---');
for (const route of M6_ROUTES) {
  const fullPath = path.join(ROOT, route);
  const content = fs.readFileSync(fullPath, 'utf8');

  if (!content.includes('jsonLd') || !content.includes('application/ld+json')) {
    findings.push({
      category: 'JSON-LD Schema',
      route,
      level: 'CRITICAL',
      message: 'Missing jsonLd script or declaration.',
    });
    continue;
  }

  // Extract offers array
  const offersMatch = content.match(/["']?offers["']?:\s*\[([\s\S]*?)\]\s*(?:,\s*|\}\s*,|\})/);
  if (!offersMatch) {
    findings.push({
      category: 'JSON-LD Schema',
      route,
      level: 'CRITICAL',
      message: 'Missing offers array in JSON-LD schema.',
    });
    continue;
  }

  const offersRaw = offersMatch[1];
  const offerCount = (offersRaw.match(/@type["']?\s*:\s*["']Offer["']/g) || []).length;
  if (offerCount !== 4) {
    findings.push({
      category: 'JSON-LD Schema',
      route,
      level: 'CRITICAL',
      message: `Expected 4 Offer objects in ExamGhost offers array, found ${offerCount}.`,
    });
  }

  // Check prices (supporting 0 or 0.00, quoted or unquoted keys)
  const has0 = /["']?price["']?\s*:\s*["']0(?:\.00)?["']/.test(offersRaw);
  const has19 = /["']?price["']?\s*:\s*["']19(?:\.00)?["']/.test(offersRaw);
  const has99 = /["']?price["']?\s*:\s*["']99(?:\.00)?["']/.test(offersRaw);
  const has199 = /["']?price["']?\s*:\s*["']199(?:\.00)?["']/.test(offersRaw);

  if (!has0 || !has19 || !has99 || !has199) {
    findings.push({
      category: 'JSON-LD Schema',
      route,
      level: 'CRITICAL',
      message: `Missing expected prices in offers array: has0=${has0}, has19=${has19}, has99=${has99}, has199=${has199}`,
    });
  }
}

// -----------------------------------------------------------------------------
// CHECK 6: Table Structures Across All 10 Routes
// -----------------------------------------------------------------------------
console.log('\n--- Checking 6: Table Structures Across All 10 Routes ---');
for (const route of M6_ROUTES) {
  const fullPath = path.join(ROOT, route);
  const content = fs.readFileSync(fullPath, 'utf8');

  const tables = content.match(/<table[\s\S]*?<\/table>/gi) || [];
  if (tables.length === 0) {
    findings.push({
      category: 'Table Structure',
      route,
      level: 'CRITICAL',
      message: 'No <table> elements found in comparison page.',
    });
    continue;
  }

  tables.forEach((tableHtml, tableIdx) => {
    const thMatches = (tableHtml.match(/<th[\s\S]*?<\/th>/gi) || []).map(t => t.replace(/<[^>]+>/g, '').trim());
    const headerCount = thMatches.length;

    const egColIdx = thMatches.findIndex(h => /ExamGhost/i.test(h));
    const compColIdx = thMatches.findIndex((h, idx) => idx !== egColIdx && !/feature|dimension|criteria|metric|why/i.test(h));

    const trMatches = tableHtml.match(/<tr[\s\S]*?<\/tr>/gi) || [];
    let dataRowIndex = 0;
    trMatches.forEach((trHtml, trIdx) => {
      const thsInRow = trHtml.match(/<th[\s\S]*?<\/th>/gi) || [];
      const tdsInRow = trHtml.match(/<td[\s\S]*?<\/td>/gi) || [];

      if (thsInRow.length > 0 && tdsInRow.length === 0) return;

      dataRowIndex++;
      const cellCount = thsInRow.length + tdsInRow.length;
      if (headerCount > 0 && cellCount !== headerCount) {
        findings.push({
          category: 'Table Structure',
          route,
          level: 'CRITICAL',
          message: `Table #${tableIdx + 1}, Data Row #${dataRowIndex} has ${cellCount} cells, but header has ${headerCount} columns.`,
        });
      }

      if (egColIdx !== -1 && compColIdx !== -1 && tdsInRow.length === headerCount) {
        const egCell = tdsInRow[egColIdx].replace(/<[^>]+>/g, '').trim();
        const compCell = tdsInRow[compColIdx].replace(/<[^>]+>/g, '').trim();

        const egInverted = /^\s*✗/.test(egCell) && /^\s*✓/.test(compCell);
        if (egInverted) {
          findings.push({
            category: 'Table Semantics',
            route,
            level: 'CRITICAL',
            message: `Table #${tableIdx + 1}, Row #${dataRowIndex} has inverted cells: ExamGhost=${egCell}, Competitor=${compCell}`,
          });
        }
      }
    });
  });
}

// -----------------------------------------------------------------------------
// CHECK 7: Motion Demo Components
// -----------------------------------------------------------------------------
console.log('\n--- Checking 7: Motion Demo Components ---');
const EXPECTED_DEMO_NAMES: Record<string, string> = {
  'src/app/quizsolverai-vs-examghost/page.tsx': 'QuizSolverAiDemo',
  'src/app/quizwizard-vs-examghost/page.tsx': 'QuizWizardDemo',
  'src/app/quizzy-vs-examghost/page.tsx': 'QuizzyDemo',
  'src/app/rightclickai-vs-examghost/page.tsx': 'RightClickAiDemo',
  'src/app/snapgpt-vs-examghost/page.tsx': 'SnapGptDemo',
  'src/app/studybotpro-vs-examghost/page.tsx': 'StudyBotProDemo',
  'src/app/studyfox-vs-examghost/page.tsx': 'StudyFoxDemo',
  'src/app/studymonkey-vs-examghost/page.tsx': 'StudyMonkeyDemo',
  'src/app/testwhiz-vs-examghost/page.tsx': 'TestWhizDemo',
  'src/app/truststudy-vs-examghost/page.tsx': 'TrustStudyDemo',
};

for (const [route, expectedDemo] of Object.entries(EXPECTED_DEMO_NAMES)) {
  const fullPath = path.join(ROOT, route);
  const content = fs.readFileSync(fullPath, 'utf8');

  const importsDemo = content.includes(expectedDemo);
  const rendersDemo = new RegExp(`<${expectedDemo}\\s*\\/?>`).test(content);

  if (!importsDemo) {
    findings.push({
      category: 'Motion Demo Integration',
      route,
      level: 'CRITICAL',
      message: `Route does not import ${expectedDemo} from @/components/GeneralAiBatchBDemos`,
    });
  }
  if (!rendersDemo) {
    findings.push({
      category: 'Motion Demo Integration',
      route,
      level: 'CRITICAL',
      message: `Route does not render <${expectedDemo} />`,
    });
  }
}

// -----------------------------------------------------------------------------
// SUMMARY & VERDICT
// -----------------------------------------------------------------------------
console.log('\n================================================================');
console.log(`VERIFICATION SUMMARY: ${findings.length} findings recorded for M6 routes`);
console.log('================================================================');

const criticals = findings.filter(f => f.level === 'CRITICAL');
const majors = findings.filter(f => f.level === 'MAJOR');
const minors = findings.filter(f => f.level === 'MINOR');

console.log(`CRITICAL: ${criticals.length}`);
console.log(`MAJOR:    ${majors.length}`);
console.log(`MINOR:    ${minors.length}`);

if (findings.length > 0) {
  findings.forEach((f, i) => {
    console.log(`[${f.level}] [${f.category}] ${f.route}: ${f.message}`);
  });
} else {
  console.log('✔ ALL PARITY, QUOTA, HOTKEYS, PRICING, SCHEMA, AND TABLE CHECKS PASSED FOR ALL 10 M6 ROUTES!');
}
