/**
 * Milestone 2 Challenger Adversarial Stress Test Suite
 * 
 * Empirically and adversarially stress-tests all 8 motion demos in src/components/NewPlatformMotionDemos.tsx:
 * 1. WileyPlusMotionDemo
 * 2. ZybooksMotionDemo
 * 3. WebWorkMotionDemo
 * 4. SakaiMotionDemo
 * 5. MacmillanAchieveMotionDemo
 * 6. TopHatMotionDemo
 * 7. KnewtonAltaMotionDemo
 * 8. HawkesLearningMotionDemo
 * 
 * Categories:
 * - Category 1: Structural & Export Integrity
 * - Category 2: Demo Configuration & Platform Authenticity Invariants
 * - Category 3: Adversarial Progress Boundary & Fuzz Testing (Cursor & Telemetry)
 * - Category 4: Click Ripples & Animated Cursor Trajectory Verification
 * - Category 5: Interactive Scrubber & Speed Controls Engine Math
 * - Category 6: Full SSR Execution & HTML Leak Audit (Scenes 0, 1, 2)
 * - Category 7: Multi-Model Tab Derivations Audit (Claude 3.7, ChatGPT, DeepSeek-R1)
 * - Category 8: Discrete Timer Ticking & Continuous Loop Simulation (1,000 ticks)
 * - Category 9: Route Integration & Zero-Template Hardening
 */

import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const ROOT_DIR = process.cwd();

export interface AssertionRecord {
  id: string;
  category: string;
  target: string;
  passed: boolean;
  message: string;
  details?: string;
}

export const records: AssertionRecord[] = [];
let passCount = 0;
let failCount = 0;

function assert(id: string, category: string, target: string, condition: boolean, message: string, details?: string) {
  if (condition) {
    passCount++;
    records.push({ id, category, target, passed: true, message, details });
    console.log(`  [PASS] [${id}] [${target}] ${message}${details ? ` -> ${details}` : ''}`);
  } else {
    failCount++;
    records.push({ id, category, target, passed: false, message, details });
    console.error(`X [FAIL] [${id}] [${target}] ${message}${details ? ` -> ${details}` : ''}`);
  }
}

// Leak detection
function detectHtmlLeaks(html: string): string[] {
  const leaks: string[] = [];
  if (/style="[^"]*NaN[^"]*"/i.test(html)) leaks.push('Contains NaN in style');
  if (/width:\s*NaN/i.test(html)) leaks.push('Contains width: NaN');
  if (/left:\s*NaN/i.test(html)) leaks.push('Contains left: NaN');
  if (/top:\s*NaN/i.test(html)) leaks.push('Contains top: NaN');

  const attrUndefined = html.match(/(?:id|class|aria-[a-z]+|data-[a-z]+)="[^"]*\bundefined\b[^"]*"/i);
  if (attrUndefined) leaks.push(`Attribute undefined: ${attrUndefined[0]}`);

  const attrNull = html.match(/(?:id|class|aria-[a-z]+|data-[a-z]+)="[^"]*\bnull\b[^"]*"/i);
  if (attrNull && !attrNull[0].includes('aria-hidden="null"')) {
    leaks.push(`Attribute null: ${attrNull[0]}`);
  }

  if (/>\s*undefined\s*</.test(html)) leaks.push('Bare token >undefined<');
  if (/>\s*NaN\s*</.test(html)) leaks.push('Bare token >NaN<');
  if (/\[object Object\]/.test(html)) leaks.push('Unrendered [object Object] in HTML');

  return leaks;
}

export const M2_DEMOS = [
  {
    name: 'WileyPlusMotionDemo',
    routePath: 'src/app/wileyplus-quiz-solver/page.tsx',
    slug: 'wileyplus-quiz-solver',
    expectedDomainBadge: 'WILEYPLUS',
    expectedDomainKeyword: 'edugen.wileyplus.com',
    expectedCourse: 'ACC 201',
    expectedTopicKeyword: 'Depreciation',
    expectedCorrectAnswer: '12,800.00',
  },
  {
    name: 'ZybooksMotionDemo',
    routePath: 'src/app/zybooks-homework-solver/page.tsx',
    slug: 'zybooks-homework-solver',
    expectedDomainBadge: 'ZYBOOKS',
    expectedDomainKeyword: 'learn.zybooks.com',
    expectedCourse: 'CS 149',
    expectedTopicKeyword: 'Vector',
    expectedCorrectAnswer: 'dataVals.size()',
  },
  {
    name: 'WebWorkMotionDemo',
    routePath: 'src/app/webwork-math-solver/page.tsx',
    slug: 'webwork-math-solver',
    expectedDomainBadge: 'WEBWORK',
    expectedDomainKeyword: 'webwork2',
    expectedCourse: 'MATH 215',
    expectedTopicKeyword: 'Integral',
    expectedCorrectAnswer: '(pi/4)*(1 - exp(-4))',
  },
  {
    name: 'SakaiMotionDemo',
    routePath: 'src/app/sakai-lms-quiz-solver/page.tsx',
    slug: 'sakai-lms-quiz-solver',
    expectedDomainBadge: 'SAKAI LMS',
    expectedDomainKeyword: '/portal/site/',
    expectedCourse: 'BIO 150',
    expectedTopicKeyword: 'Citric Acid',
    expectedCorrectAnswer: '6 NADH, 2 FADH2, 2 GTP/ATP',
  },
  {
    name: 'MacmillanAchieveMotionDemo',
    routePath: 'src/app/macmillan-achieve-smartwork-solver/page.tsx',
    slug: 'macmillan-achieve-smartwork-solver',
    expectedDomainBadge: 'MACMILLAN ACHIEVE',
    expectedDomainKeyword: 'achieve.macmillanlearning.com',
    expectedCourse: 'CHEM 231',
    expectedTopicKeyword: 'Walden',
    expectedCorrectAnswer: '(2S)-2-methoxybutane',
  },
  {
    name: 'TopHatMotionDemo',
    routePath: 'src/app/tophat-quiz-solver/page.tsx',
    slug: 'tophat-quiz-solver',
    expectedDomainBadge: 'TOP HAT',
    expectedDomainKeyword: 'app.tophat.com',
    expectedCourse: 'ECON 101',
    expectedTopicKeyword: 'Monetary',
    expectedCorrectAnswer: 'Money Supply Increases',
  },
  {
    name: 'KnewtonAltaMotionDemo',
    routePath: 'src/app/knewton-alta-solver/page.tsx',
    slug: 'knewton-alta-solver',
    expectedDomainBadge: 'KNEWTON ALTA',
    expectedDomainKeyword: 'knewton.com/alta',
    expectedCourse: 'STAT 200',
    expectedTopicKeyword: 'Welch',
    expectedCorrectAnswer: 't = 2.22 · p = 0.0171',
  },
  {
    name: 'HawkesLearningMotionDemo',
    routePath: 'src/app/hawkes-learning-certify-solver/page.tsx',
    slug: 'hawkes-learning-certify-solver',
    expectedDomainBadge: 'HAWKES LEARNING',
    expectedDomainKeyword: 'learn.hawkeslearning.com',
    expectedCourse: 'MATH 110',
    expectedTopicKeyword: 'Rational Equations',
    expectedCorrectAnswer: 'x = (-3 ± √65)/2',
  },
];

export async function runAdversarialM2MotionStressTests() {
  console.log('========================================================================');
  console.log('   Milestone 2 Empirical Challenger Adversarial Motion Stress Harness   ');
  console.log('========================================================================\n');

  // -------------------------------------------------------------------------
  // Category 1: Structural & Export Integrity
  // -------------------------------------------------------------------------
  console.log('>>> Category 1: Structural & Export Integrity <<<');

  const newDemosFilePath = path.join(ROOT_DIR, 'src/components/NewPlatformMotionDemos.tsx');
  assert('CAT1-FILE-EXIST', 'Structural', 'NewPlatformMotionDemos.tsx', fs.existsSync(newDemosFilePath), 'File exists on disk');

  const fileContent = fs.readFileSync(newDemosFilePath, 'utf8');
  assert('CAT1-USE-CLIENT', 'Structural', 'NewPlatformMotionDemos.tsx', fileContent.startsWith("'use client'"), 'Has "use client" directive at line 1');

  // Import NewPlatformMotionDemos module
  const demosModule = await import(newDemosFilePath);

  for (const demo of M2_DEMOS) {
    const Component = (demosModule as any)[demo.name];
    assert(`CAT1-EXP-${demo.name}`, 'Structural', demo.name, typeof Component === 'function', `Properly exported as a function`);

    // Call Component() to extract the React Element
    let element: any = null;
    let callOk = false;
    try {
      element = Component();
      callOk = true;
    } catch (err: any) {
      callOk = false;
      console.error(`Error invoking ${demo.name}():`, err.message);
    }

    assert(`CAT1-CALL-${demo.name}`, 'Structural', demo.name, callOk && React.isValidElement(element), 'Returns valid React Element');
    assert(`CAT1-CONFIG-${demo.name}`, 'Structural', demo.name, !!element?.props?.config, 'Element has config prop passed to BasePlatformMotionDemo');
  }

  // -------------------------------------------------------------------------
  // Category 2: Demo Configuration & Platform Authenticity Invariants
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 2: Demo Configuration & Platform Authenticity Invariants <<<');

  for (const demo of M2_DEMOS) {
    const Component = (demosModule as any)[demo.name];
    const element = Component();
    const config = element?.props?.config;

    if (!config) {
      assert(`CAT2-CFG-MISSING-${demo.name}`, 'Config', demo.name, false, 'Config missing, skipping config assertions');
      continue;
    }

    // Title
    assert(
      `CAT2-TITLE-${demo.name}`,
      'Config',
      demo.name,
      typeof config.title === 'string' && config.title.length >= 15 && config.title.includes(demo.expectedCourse),
      `Title contains course "${demo.expectedCourse}" (actual: "${config.title}")`
    );

    // Domain badge
    assert(
      `CAT2-BADGE-${demo.name}`,
      'Config',
      demo.name,
      config.domainBadge === demo.expectedDomainBadge,
      `Domain badge equals "${demo.expectedDomainBadge}" (actual: "${config.domainBadge}")`
    );

    // Browser URL
    assert(
      `CAT2-URL-${demo.name}`,
      'Config',
      demo.name,
      typeof config.browserUrl === 'string' &&
        config.browserUrl.startsWith('https://') &&
        config.browserUrl.includes(demo.expectedDomainKeyword),
      `Browser URL contains authentic platform keyword "${demo.expectedDomainKeyword}" (actual: "${config.browserUrl}")`
    );

    // Scenes array (exactly 3 scenes)
    assert(
      `CAT2-SCENES-COUNT-${demo.name}`,
      'Config',
      demo.name,
      Array.isArray(config.scenes) && config.scenes.length === 3,
      `Scenes array has exactly 3 scenes (actual: ${config.scenes?.length})`
    );

    if (Array.isArray(config.scenes) && config.scenes.length === 3) {
      const [s0, s1, s2] = config.scenes;
      assert(`CAT2-S0-ID-${demo.name}`, 'Config', demo.name, s0.id === 0, 'Scene 0 id === 0');
      assert(`CAT2-S1-ID-${demo.name}`, 'Config', demo.name, s1.id === 1, 'Scene 1 id === 1');
      assert(`CAT2-S2-ID-${demo.name}`, 'Config', demo.name, s2.id === 2, 'Scene 2 id === 2');

      assert(`CAT2-S0-DUR-${demo.name}`, 'Config', demo.name, s0.durationMs >= 4000 && s0.durationMs <= 15000, `Scene 0 duration valid (${s0.durationMs}ms)`);
      assert(`CAT2-S1-DUR-${demo.name}`, 'Config', demo.name, s1.durationMs >= 4000 && s1.durationMs <= 15000, `Scene 1 duration valid (${s1.durationMs}ms)`);
      assert(`CAT2-S2-DUR-${demo.name}`, 'Config', demo.name, s2.durationMs >= 4000 && s2.durationMs <= 15000, `Scene 2 duration valid (${s2.durationMs}ms)`);

      assert(`CAT2-S0-LABEL-${demo.name}`, 'Config', demo.name, typeof s0.label === 'string' && s0.label.startsWith('1.'), `Scene 0 label starts with 1. ("${s0.label}")`);
      assert(`CAT2-S1-LABEL-${demo.name}`, 'Config', demo.name, typeof s1.label === 'string' && s1.label.startsWith('2.'), `Scene 1 label starts with 2. ("${s1.label}")`);
      assert(`CAT2-S2-LABEL-${demo.name}`, 'Config', demo.name, typeof s2.label === 'string' && s2.label.startsWith('3.'), `Scene 2 label starts with 3. ("${s2.label}")`);

      assert(`CAT2-S1-03S-LABEL-${demo.name}`, 'Config', demo.name, s1.label.includes('0.3s') || s1.title?.includes('0.3s'), `Scene 1 specifies 0.3s solve in label/title ("${s1.label}" / "${s1.title}")`);
    }

    // Scene 0: Platform failure reality
    const scene0 = config.scene0;
    assert(`CAT2-SC0-WARN-${demo.name}`, 'Config', demo.name, typeof scene0?.warningBadge === 'string' && scene0.warningBadge.length > 5, 'Scene 0 warningBadge present');
    assert(`CAT2-SC0-HEADER-${demo.name}`, 'Config', demo.name, typeof scene0?.courseHeader === 'string' && scene0.courseHeader.includes(demo.expectedCourse), `Scene 0 courseHeader includes "${demo.expectedCourse}"`);
    assert(`CAT2-SC0-POINTS-${demo.name}`, 'Config', demo.name, typeof scene0?.points === 'string' && scene0.points.length > 0, 'Scene 0 points present');
    assert(`CAT2-SC0-BANNER-${demo.name}`, 'Config', demo.name, typeof scene0?.failureBanner?.title === 'string' && typeof scene0?.failureBanner?.description === 'string', 'Scene 0 failureBanner title/desc present');
    assert(`CAT2-SC0-OPTS-${demo.name}`, 'Config', demo.name, Array.isArray(scene0?.options) && scene0.options.length >= 4, `Scene 0 options >= 4 (actual: ${scene0?.options?.length})`);

    const s0WrongOpts = scene0?.options?.filter((o: any) => o.isWrongSelected) || [];
    const s0CorrectOpts = scene0?.options?.filter((o: any) => o.isCorrectSelected) || [];
    assert(`CAT2-SC0-WRONG-SEL-${demo.name}`, 'Config', demo.name, s0WrongOpts.length === 1, `Scene 0 has exactly 1 wrong option selected (found: ${s0WrongOpts.length})`);
    assert(`CAT2-SC0-NO-CORRECT-${demo.name}`, 'Config', demo.name, s0CorrectOpts.length === 0, `Scene 0 has 0 correct options selected (found: ${s0CorrectOpts.length})`);

    // Scene 1: ExamGhost 0.3s inline solve
    const scene1 = config.scene1;
    assert(
      `CAT2-SC1-STEALTH-${demo.name}`,
      'Config',
      demo.name,
      typeof scene1?.stealthBadge === 'string' && scene1.stealthBadge.startsWith('ExamGhost') && scene1.stealthBadge.length >= 15,
      `Scene 1 stealthBadge starts with ExamGhost ("${scene1?.stealthBadge}")`
    );
    assert(
      `CAT2-SC1-HUD-${demo.name}`,
      'Config',
      demo.name,
      typeof scene1?.hudText === 'string' && scene1.hudText.length >= 20,
      `Scene 1 hudText present and detailed ("${scene1?.hudText.slice(0, 50)}...")`
    );
    assert(`CAT2-SC1-OPTS-${demo.name}`, 'Config', demo.name, Array.isArray(scene1?.options) && scene1.options.length >= 4, `Scene 1 options >= 4 (actual: ${scene1?.options?.length})`);

    const s1WrongOpts = scene1?.options?.filter((o: any) => o.isWrongSelected) || [];
    const s1CorrectOpts = scene1?.options?.filter((o: any) => o.isCorrectSelected) || [];
    assert(`CAT2-SC1-CORRECT-SEL-${demo.name}`, 'Config', demo.name, s1CorrectOpts.length === 1, `Scene 1 has exactly 1 correct option selected (found: ${s1CorrectOpts.length})`);
    assert(`CAT2-SC1-NO-WRONG-${demo.name}`, 'Config', demo.name, s1WrongOpts.length === 0, `Scene 1 has 0 wrong options selected (found: ${s1WrongOpts.length})`);
    assert(
      `CAT2-SC1-MATCH-ANSWER-${demo.name}`,
      'Config',
      demo.name,
      s1CorrectOpts[0]?.text?.includes(demo.expectedCorrectAnswer),
      `Scene 1 correct option contains expected answer "${demo.expectedCorrectAnswer}"`
    );

    // Scene 2: Study AI Hub
    const scene2 = config.scene2;
    assert(`CAT2-SC2-HUBTITLE-${demo.name}`, 'Config', demo.name, typeof scene2?.hubTitle === 'string' && scene2.hubTitle.length > 10, 'Scene 2 hubTitle present');
    assert(`CAT2-SC2-CLAUDE-${demo.name}`, 'Config', demo.name, React.isValidElement(scene2?.claudeDerivation), 'Scene 2 claudeDerivation is valid React Element');
    assert(`CAT2-SC2-CHATGPT-${demo.name}`, 'Config', demo.name, React.isValidElement(scene2?.chatgptDerivation), 'Scene 2 chatgptDerivation is valid React Element');
    assert(`CAT2-SC2-DEEPSEEK-${demo.name}`, 'Config', demo.name, React.isValidElement(scene2?.deepseekDerivation), 'Scene 2 deepseekDerivation is valid React Element');
  }

  // -------------------------------------------------------------------------
  // Category 3: Adversarial Progress Boundary & Fuzz Testing (Cursor & Telemetry)
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 3: Adversarial Progress Boundary & Fuzz Testing <<<');

  const ADVERSARIAL_PROGRESS_POINTS = [
    -100, -1, -0.0001, 0, 0.0001, 10, 24.99, 25, 25.01, 29.99, 30, 30.01,
    34.99, 35, 35.01, 44.99, 45, 45.01, 49.99, 50, 50.01, 54.99, 55, 55.01,
    59.99, 60, 60.01, 64.99, 65, 65.01, 69.99, 70, 70.01, 71.99, 72, 74.99,
    75, 79.99, 80, 80.01, 84.99, 85, 89.99, 90, 90.01, 99.99, 100, 100.01,
    200, 500, 10000
  ];

  for (const demo of M2_DEMOS) {
    const Component = (demosModule as any)[demo.name];
    const element = Component();
    const config = element?.props?.config;

    let cursorErrors = 0;
    let telemetryErrors = 0;

    // Test Scene 0
    for (const p of ADVERSARIAL_PROGRESS_POINTS) {
      try {
        const cur = config.scene0.getCursor(p);
        if (!Number.isFinite(cur.x) || cur.x < 0 || cur.x > 100 ||
            !Number.isFinite(cur.y) || cur.y < 0 || cur.y > 100 ||
            typeof cur.clicking !== 'boolean') {
          cursorErrors++;
          console.error(`Invalid cursor in ${demo.name} scene 0 at p=${p}:`, cur);
        }
      } catch (err: any) {
        cursorErrors++;
        console.error(`Crash in ${demo.name} scene0.getCursor(${p}):`, err.message);
      }

      try {
        const tel = config.scene0.getTelemetry(p);
        if (typeof tel.speedGrader !== 'string' ||
            typeof tel.focusShield !== 'boolean' ||
            !Number.isFinite(tel.blurEvents) ||
            tel.blurEvents < 0) {
          telemetryErrors++;
          console.error(`Invalid telemetry in ${demo.name} scene 0 at p=${p}:`, tel);
        }
      } catch (err: any) {
        telemetryErrors++;
        console.error(`Crash in ${demo.name} scene0.getTelemetry(${p}):`, err.message);
      }
    }

    // Test Scene 1
    for (const p of ADVERSARIAL_PROGRESS_POINTS) {
      try {
        const cur = config.scene1.getCursor(p);
        if (!Number.isFinite(cur.x) || cur.x < 0 || cur.x > 100 ||
            !Number.isFinite(cur.y) || cur.y < 0 || cur.y > 100 ||
            typeof cur.clicking !== 'boolean') {
          cursorErrors++;
          console.error(`Invalid cursor in ${demo.name} scene 1 at p=${p}:`, cur);
        }
      } catch (err: any) {
        cursorErrors++;
        console.error(`Crash in ${demo.name} scene1.getCursor(${p}):`, err.message);
      }

      try {
        const tel = config.scene1.getTelemetry(p);
        if (typeof tel.speedGrader !== 'string' ||
            typeof tel.focusShield !== 'boolean' ||
            !Number.isFinite(tel.blurEvents) ||
            tel.blurEvents !== 0 ||
            tel.focusShield !== true ||
            tel.status !== 'shielded') {
          telemetryErrors++;
          console.error(`Invalid telemetry in ${demo.name} scene 1 at p=${p}:`, tel);
        }
      } catch (err: any) {
        telemetryErrors++;
        console.error(`Crash in ${demo.name} scene1.getTelemetry(${p}):`, err.message);
      }
    }

    // Test Scene 2
    for (const p of ADVERSARIAL_PROGRESS_POINTS) {
      try {
        const cur = config.scene2.getCursor(p);
        if (!Number.isFinite(cur.x) || cur.x < 0 || cur.x > 100 ||
            !Number.isFinite(cur.y) || cur.y < 0 || cur.y > 100 ||
            typeof cur.clicking !== 'boolean') {
          cursorErrors++;
          console.error(`Invalid cursor in ${demo.name} scene 2 at p=${p}:`, cur);
        }
      } catch (err: any) {
        cursorErrors++;
        console.error(`Crash in ${demo.name} scene2.getCursor(${p}):`, err.message);
      }

      try {
        const tel = config.scene2.getTelemetry(p);
        if (typeof tel.speedGrader !== 'string' ||
            typeof tel.focusShield !== 'boolean' ||
            !Number.isFinite(tel.blurEvents) ||
            tel.blurEvents !== 0 ||
            tel.focusShield !== true) {
          telemetryErrors++;
          console.error(`Invalid telemetry in ${demo.name} scene 2 at p=${p}:`, tel);
        }
      } catch (err: any) {
        telemetryErrors++;
        console.error(`Crash in ${demo.name} scene2.getTelemetry(${p}):`, err.message);
      }
    }

    assert(`CAT3-BOUND-CUR-${demo.name}`, 'BoundaryFuzz', demo.name, cursorErrors === 0, `Cursor safely handles ${ADVERSARIAL_PROGRESS_POINTS.length * 3} points (0 errors)`);
    assert(`CAT3-BOUND-TEL-${demo.name}`, 'BoundaryFuzz', demo.name, telemetryErrors === 0, `Telemetry safely handles ${ADVERSARIAL_PROGRESS_POINTS.length * 3} points (0 errors)`);
  }

  // -------------------------------------------------------------------------
  // Category 4: Click Ripples & Animated Cursor Trajectory Verification
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 4: Click Ripples & Animated Cursor Trajectories <<<');

  for (const demo of M2_DEMOS) {
    const Component = (demosModule as any)[demo.name];
    const element = Component();
    const config = element?.props?.config;

    // Check Scene 0 click window (around 50%)
    const s0ClickStart = config.scene0.getCursor(40).clicking;
    const s0Clicking = config.scene0.getCursor(50).clicking;
    const s0ClickEnd = config.scene0.getCursor(65).clicking;
    assert(
      `CAT4-S0-RIPPLE-${demo.name}`,
      'ClickRipples',
      demo.name,
      !s0ClickStart && s0Clicking && !s0ClickEnd,
      'Scene 0 has discrete click window at ~50% progress'
    );

    // Check Scene 1 click window (around 50%)
    const s1ClickStart = config.scene1.getCursor(35).clicking;
    const s1Clicking = config.scene1.getCursor(50).clicking;
    const s1ClickEnd = config.scene1.getCursor(65).clicking;
    assert(
      `CAT4-S1-RIPPLE-${demo.name}`,
      'ClickRipples',
      demo.name,
      !s1ClickStart && s1Clicking && !s1ClickEnd,
      'Scene 1 has discrete click window at ~50% progress'
    );

    // Check Scene 2 multi-tab clicks
    const s2Click1 = config.scene2.getCursor(20).clicking;
    const s2Click2 = config.scene2.getCursor(50).clicking;
    const s2Click3 = config.scene2.getCursor(85).clicking;
    assert(
      `CAT4-S2-TABS-RIPPLE-${demo.name}`,
      'ClickRipples',
      demo.name,
      s2Click1 && s2Click2 && s2Click3,
      'Scene 2 generates click ripples on Claude (20%), ChatGPT (50%), and DeepSeek (85%) tabs'
    );

    // Verify tag/label transitions
    const cur0Start = config.scene0.getCursor(10);
    const cur0Mid = config.scene0.getCursor(50);
    const cur0End = config.scene0.getCursor(90);
    assert(`CAT4-S0-TAGS-${demo.name}`, 'CursorTags', demo.name, !!cur0Start.label && !!cur0Mid.label && !!cur0End.label, 'Scene 0 transitions cursor labels');

    const cur1Start = config.scene1.getCursor(10);
    const cur1Mid = config.scene1.getCursor(50);
    const cur1End = config.scene1.getCursor(90);
    assert(`CAT4-S1-TAGS-${demo.name}`, 'CursorTags', demo.name, !!cur1Start.label && !!cur1Mid.label && !!cur1End.label, 'Scene 1 transitions cursor labels');

    const cur2Start = config.scene2.getCursor(10);
    const cur2Mid = config.scene2.getCursor(50);
    const cur2End = config.scene2.getCursor(90);
    assert(`CAT4-S2-TAGS-${demo.name}`, 'CursorTags', demo.name, !!cur2Start.label && !!cur2Mid.label && !!cur2End.label, 'Scene 2 transitions cursor labels across models');
  }

  // -------------------------------------------------------------------------
  // Category 5: Interactive Scrubber & Speed Controls Engine Math
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 5: Scrubber & Speed Controls Math <<<');

  const speeds = [1, 1.5, 2] as const;
  const intervalMs = 50;

  for (const demo of M2_DEMOS) {
    const Component = (demosModule as any)[demo.name];
    const element = Component();
    const config = element?.props?.config;

    for (let scIdx = 0; scIdx < 3; scIdx++) {
      const dur = config.scenes[scIdx].durationMs;
      
      const inc1 = ((intervalMs * 1) / dur) * 100;
      const inc15 = ((intervalMs * 1.5) / dur) * 100;
      const inc2 = ((intervalMs * 2) / dur) * 100;

      // Invariants:
      // 1. Positive step increments
      // 2. Strict ordering: inc1 < inc15 < inc2
      // 3. Proportionality: inc2 === 2 * inc1
      assert(
        `CAT5-SPEED-MATH-${demo.name}-S${scIdx}`,
        'SpeedMath',
        `${demo.name}-Scene${scIdx}`,
        inc1 > 0 && inc15 > inc1 && inc2 > inc15 && Math.abs(inc2 - 2 * inc1) < 1e-9,
        `Speed steps monotonic and proportional for ${dur}ms (1x: ${inc1.toFixed(3)}%, 1.5x: ${inc15.toFixed(3)}%, 2x: ${inc2.toFixed(3)}%)`
      );
    }
  }

  // -------------------------------------------------------------------------
  // Category 6: Full SSR Execution & HTML Leak Audit (Scenes 0, 1, 2)
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 6: Full SSR Execution & HTML Leak Audit <<<');

  for (const demo of M2_DEMOS) {
    const Component = (demosModule as any)[demo.name];

    let renderedHtml = '';
    let renderSuccess = false;
    try {
      renderedHtml = ReactDOMServer.renderToString(React.createElement(Component));
      renderSuccess = true;
    } catch (err: any) {
      renderSuccess = false;
      console.error(`SSR Render crash on ${demo.name}:`, err.message);
    }

    assert(
      `CAT6-SSR-RENDER-${demo.name}`,
      'SSRLeakAudit',
      demo.name,
      renderSuccess && renderedHtml.length > 2000,
      `Renders cleanly via ReactDOMServer (${renderedHtml.length} bytes)`
    );

    const leaks = detectHtmlLeaks(renderedHtml);
    assert(
      `CAT6-NO-LEAKS-${demo.name}`,
      'SSRLeakAudit',
      demo.name,
      leaks.length === 0,
      '0 HTML leaks (NaN, undefined, null, [object Object])',
      leaks.length > 0 ? leaks.join('; ') : undefined
    );

    // Verify key UI text in rendered output
    assert(
      `CAT6-HAS-BADGE-${demo.name}`,
      'SSRContent',
      demo.name,
      renderedHtml.includes(demo.expectedDomainBadge),
      `Rendered HTML contains domain badge "${demo.expectedDomainBadge}"`
    );

    assert(
      `CAT6-HAS-URL-${demo.name}`,
      'SSRContent',
      demo.name,
      renderedHtml.includes(demo.expectedDomainKeyword),
      `Rendered HTML contains platform URL keyword "${demo.expectedDomainKeyword}"`
    );

    assert(
      `CAT6-HAS-SCRUBBER-${demo.name}`,
      'SSRContent',
      demo.name,
      renderedHtml.includes('Play Demo') || renderedHtml.includes('Pause'),
      'Rendered HTML contains Play/Pause scrubber control'
    );

    assert(
      `CAT6-HAS-SPEED-BTNS-${demo.name}`,
      'SSRContent',
      demo.name,
      renderedHtml.includes('1x') && renderedHtml.includes('1.5x') && renderedHtml.includes('2x'),
      'Rendered HTML contains speed control buttons (1x, 1.5x, 2x)'
    );

    assert(
      `CAT6-HAS-PRIMITIVES-${demo.name}`,
      'SSRContent',
      demo.name,
      renderedHtml.includes('Motion Demo Video Timeline Controls') && renderedHtml.includes('pointer-events-none'),
      'Rendered HTML mounts MotionTimelineScrubber and MotionCursor primitives'
    );
  }

  // -------------------------------------------------------------------------
  // Category 7: Multi-Model Tab Derivations Audit (Claude, ChatGPT, DeepSeek)
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 7: Multi-Model Tab Derivations Audit <<<');

  for (const demo of M2_DEMOS) {
    const Component = (demosModule as any)[demo.name];
    const element = Component();
    const config = element?.props?.config;

    const s2 = config.scene2;

    // Render Claude Derivation
    let claudeHtml = '';
    let claudeOk = false;
    try {
      claudeHtml = ReactDOMServer.renderToString(s2.claudeDerivation);
      claudeOk = true;
    } catch (err: any) {
      claudeOk = false;
      console.error(`Claude derivation render failed in ${demo.name}:`, err.message);
    }
    assert(`CAT7-CLAUDE-${demo.name}`, 'ModelDerivations', demo.name, claudeOk && claudeHtml.length > 50, `Claude 3.7 derivation renders cleanly (${claudeHtml.length} bytes)`);

    // Render ChatGPT Derivation
    let chatgptHtml = '';
    let chatgptOk = false;
    try {
      chatgptHtml = ReactDOMServer.renderToString(s2.chatgptDerivation);
      chatgptOk = true;
    } catch (err: any) {
      chatgptOk = false;
      console.error(`ChatGPT derivation render failed in ${demo.name}:`, err.message);
    }
    assert(`CAT7-CHATGPT-${demo.name}`, 'ModelDerivations', demo.name, chatgptOk && chatgptHtml.length > 50, `ChatGPT o3-mini/4o derivation renders cleanly (${chatgptHtml.length} bytes)`);

    // Render DeepSeek Derivation
    let deepseekHtml = '';
    let deepseekOk = false;
    try {
      deepseekHtml = ReactDOMServer.renderToString(s2.deepseekDerivation);
      deepseekOk = true;
    } catch (err: any) {
      deepseekOk = false;
      console.error(`DeepSeek derivation render failed in ${demo.name}:`, err.message);
    }
    assert(`CAT7-DEEPSEEK-${demo.name}`, 'ModelDerivations', demo.name, deepseekOk && deepseekHtml.length > 50, `DeepSeek-R1 derivation renders cleanly (${deepseekHtml.length} bytes)`);

    // Distinct derivations check
    assert(
      `CAT7-DISTINCT-${demo.name}`,
      'ModelDerivations',
      demo.name,
      claudeHtml !== chatgptHtml && chatgptHtml !== deepseekHtml && claudeHtml !== deepseekHtml,
      'Claude, ChatGPT, and DeepSeek derivations are distinct, non-duplicate derivation trees'
    );

    // Leak audit across derivations
    const claudeLeaks = detectHtmlLeaks(claudeHtml);
    const chatgptLeaks = detectHtmlLeaks(chatgptHtml);
    const deepseekLeaks = detectHtmlLeaks(deepseekHtml);
    const totalModelLeaks = claudeLeaks.length + chatgptLeaks.length + deepseekLeaks.length;
    assert(
      `CAT7-MODEL-LEAKS-${demo.name}`,
      'ModelDerivations',
      demo.name,
      totalModelLeaks === 0,
      'Zero HTML leaks across all 3 model derivation trees'
    );
  }

  // -------------------------------------------------------------------------
  // Category 8: Discrete Timer Ticking & Continuous Loop Simulation (1,000 ticks)
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 8: Discrete Timer Ticking & Continuous Loop Simulation <<<');

  for (const demo of M2_DEMOS) {
    const Component = (demosModule as any)[demo.name];
    const element = Component();
    const config = element?.props?.config;

    // Simulate 1,000 consecutive ticks at 1.5x speed
    let simScene = 0;
    let simProgress = 0;
    const simSpeed = 1.5;
    const simInterval = 50;
    let sceneTransitions = [0, 0, 0];
    let simErrors = 0;

    for (let tick = 0; tick < 1000; tick++) {
      const dur = config.scenes[simScene].durationMs;
      const step = ((simInterval * simSpeed) / dur) * 100;

      if (simProgress + step >= 100) {
        simScene = (simScene + 1) % config.scenes.length;
        simProgress = 0;
        sceneTransitions[simScene]++;
      } else {
        simProgress = Math.min(100, Math.max(0, simProgress + step));
      }

      // Check invariants at every single tick
      const curSceneConfig = simScene === 0 ? config.scene0 : (simScene === 1 ? config.scene1 : config.scene2);
      try {
        const cur = curSceneConfig.getCursor(simProgress);
        const tel = curSceneConfig.getTelemetry(simProgress);
        if (!Number.isFinite(cur.x) || !Number.isFinite(cur.y) || typeof cur.clicking !== 'boolean' || typeof tel.speedGrader !== 'string') {
          simErrors++;
        }
      } catch (err: any) {
        simErrors++;
      }
    }

    assert(
      `CAT8-LOOP-TICKS-${demo.name}`,
      'TimerSimulation',
      demo.name,
      simErrors === 0 && sceneTransitions[0] > 0 && sceneTransitions[1] > 0 && sceneTransitions[2] > 0,
      `1,000 continuous ticks simulated: Scene transitions [S0: ${sceneTransitions[0]}, S1: ${sceneTransitions[1]}, S2: ${sceneTransitions[2]}], 0 runtime errors`
    );
  }

  // -------------------------------------------------------------------------
  // Category 9: Route Integration & Zero-Template Hardening
  // -------------------------------------------------------------------------
  console.log('\n>>> Category 9: Route Integration & Zero-Template Hardening <<<');

  for (const demo of M2_DEMOS) {
    const routeFullPath = path.join(ROOT_DIR, demo.routePath);
    assert(`CAT9-ROUTE-EXIST-${demo.slug}`, 'RouteIntegration', demo.slug, fs.existsSync(routeFullPath), 'Route page file exists on disk');

    const routeContent = fs.readFileSync(routeFullPath, 'utf8');

    // Rule: Zero template imports
    assert(
      `CAT9-NO-TMPL-${demo.slug}`,
      'RouteIntegration',
      demo.slug,
      !routeContent.includes('LmsServicePageTemplate'),
      '0 occurrences of LmsServicePageTemplate'
    );
    assert(
      `CAT9-NO-DEMO-TMPL-${demo.slug}`,
      'RouteIntegration',
      demo.slug,
      !routeContent.includes('LmsInteractiveVideoDemo'),
      '0 occurrences of LmsInteractiveVideoDemo'
    );
    assert(
      `CAT9-NO-COMPETITOR-TMPL-${demo.slug}`,
      'RouteIntegration',
      demo.slug,
      !routeContent.includes('CompetitorMotionDemo'),
      '0 occurrences of CompetitorMotionDemo'
    );
    assert(
      `CAT9-NO-RADIO-TABS-${demo.slug}`,
      'RouteIntegration',
      demo.slug,
      !routeContent.includes('peer/tab1'),
      '0 occurrences of peer/tab1 radio tabs'
    );

    // Rule: Imports and mounts its bespoke motion demo
    assert(
      `CAT9-IMPORT-DEMO-${demo.slug}`,
      'RouteIntegration',
      demo.slug,
      routeContent.includes(`import { ${demo.name} } from '@/components/NewPlatformMotionDemos'`) ||
        routeContent.includes(demo.name),
      `Imports bespoke motion demo "${demo.name}"`
    );

    assert(
      `CAT9-MOUNT-DEMO-${demo.slug}`,
      'RouteIntegration',
      demo.slug,
      routeContent.includes(`<${demo.name}`) || routeContent.includes(`<${demo.name} />`),
      `Mounts JSX tag <${demo.name} />`
    );

    // SSR render route page
    const pageModule = await import(routeFullPath);
    const PageComponent = typeof pageModule.default === 'function' ? pageModule.default : pageModule.default?.default;

    let routeRenderOk = false;
    let routeHtml = '';
    try {
      routeHtml = ReactDOMServer.renderToString(React.createElement(PageComponent));
      routeRenderOk = true;
    } catch (err: any) {
      routeRenderOk = false;
      console.error(`Route SSR crash on ${demo.slug}:`, err.message);
    }

    assert(
      `CAT9-ROUTE-SSR-${demo.slug}`,
      'RouteIntegration',
      demo.slug,
      routeRenderOk && routeHtml.length > 5000,
      `Route SSR renders cleanly (${routeHtml.length} bytes)`
    );

    const routeLeaks = detectHtmlLeaks(routeHtml);
    assert(
      `CAT9-ROUTE-NO-LEAKS-${demo.slug}`,
      'RouteIntegration',
      demo.slug,
      routeLeaks.length === 0,
      `0 HTML leaks in route page HTML (${routeLeaks.join('; ')})`
    );
  }

  // -------------------------------------------------------------------------
  // Summary & Exit
  // -------------------------------------------------------------------------
  console.log('\n========================================================================');
  console.log(`TOTAL CHECKS: ${passCount + failCount} | PASSED: ${passCount} | FAILED: ${failCount}`);
  console.log('========================================================================');

  return { passCount, failCount, records };
}

runAdversarialM2MotionStressTests().then(({ failCount, passCount }) => {
  if (failCount === 0) {
    console.log(`\n>>> EMPIRICAL CHALLENGER VERDICT: APPROVE (${passCount} checks passed, 0 failures) <<<`);
    process.exit(0);
  } else {
    console.error(`\n>>> EMPIRICAL CHALLENGER VERDICT: REJECT (${failCount} failures found) <<<`);
    process.exit(1);
  }
}).catch((err) => {
  console.error('Fatal stress harness crash:', err);
  process.exit(1);
});
