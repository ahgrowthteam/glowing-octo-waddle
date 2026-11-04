# Comprehensive E2E Testing Infrastructure Specification (TEST_INFRA)

**Project**: ExamGhost — 58 Comparison Pages Complete Overhaul  
**Track**: E2E Testing Track Architecture  
**Author**: Test Writer / E2E Testing Track Architect  
**Date**: 2026-10-27  
**Status**: ACTIVE / TEST_INFRASTRUCTURE_SPECIFIED  

---

## 1. Test Philosophy & Principles

### 1.1 Opaque-Box & Requirement-Driven Architecture
The ExamGhost test infrastructure is built strictly on an **opaque-box testing philosophy**. The verification harness exercises system behavior solely through observable contracts, public interfaces, user-facing DOM structures, static artifact schemas, and runtime interaction workflows.
- **Zero Internal Coupling**: Tests do not couple to unexported internal helper variables, transient private states, or implementation artifacts.
- **Specification as Oracle**: Every test assertion derives from explicit, authoritative requirements established in:
  1. `ORIGINAL_REQUEST.md` (Verbatim user requirements R1, R2, R3)
  2. `PROJECT.md` (Interface contracts, headless primitives, milestone definitions)
  3. Survey Explorer Reports 1, 2, and 3 (Authoritative 58 routes inventory, motion architecture, quota baselines)
- **High-Fidelity Determinism**: Where external or non-deterministic variables occur (timestamps, rendering RAFs, spring physics settling times), tests verify invariant bounds, mathematical properties, and deterministic state transitions.

### 1.2 Progressive Testability & Defect Escalation
- **Progressive Testability**: The test harness is designed to run incrementally against the codebase across all implementation milestones (M1 through M7). Tests detect exact feature completion stages, providing clear pass/fail diagnostics.
- **QA Role Boundary**: The test writer authors and refines test suites only (`tests/e2e/*`, `TEST_INFRA.md`, `TEST_READY.md`). Any code defects or regressions identified in application code (`src/*`) are surfaced and escalated through structured test failure reports to the implementing builder agents.

---

## 2. Master Feature Inventory (All 58 Comparison Routes)

The testing infrastructure exercises and verifies all **58 unique comparison routes** (comprising the 9 Top Footer Comparison pages and the 49 remaining `*-vs-examghost` competitor pages) along with the 2 canonical redirect routes.

| # | Route Path | File Path | Competitor Brand | Category Group | Academic Subject Domain | Primary Flaw Archetype |
|:--|:-----------|:----------|:-----------------|:---------------|:------------------------|:-----------------------|
| 1 | `/canvashack-vs-examghost` | `src/app/canvashack-vs-examghost/page.tsx` | CanvasHack | Top 9 Footer | Organic Chemistry & Multivariable Calculus (STEM) | No-AI Stopwatch & $149.99 Paywall |
| 2 | `/apexvision-vs-examghost` | `src/app/apexvision-vs-examghost/page.tsx` | Apex Vision AI | Top 9 Footer | Computer Science & Algorithms (STEM) | SpeedGrader Telemetry & 500-Cap |
| 3 | `/collegetools-vs-examghost` | `src/app/collegetools-vs-examghost/page.tsx` | College Tools | Top 9 Footer | Genetics & Biochemistry (Healthcare) | 75 Exposed Manifest Files / Rebrand |
| 4 | `/transcript-vs-examghost` | `src/app/transcript-vs-examghost/page.tsx` | Transcript AI | Top 9 Footer | Macroeconomics & Monetary Policy (Business) | Cloud Notebook / Single-Model Wrapper |
| 5 | `/quizonator-vs-examghost` | `src/app/quizonator-vs-examghost/page.tsx` | Quizonator | Top 9 Footer | Anatomy & Histology Diagrams (Healthcare) | LTI 1.3 Canvas New Quizzes Iframe Break |
| 6 | `/bettercampus-vs-examghost` | `src/app/bettercampus-vs-examghost/page.tsx` | BetterCampus | Top 9 Footer | Electrodynamics & Wave Optics (Physics) | Floating Copilot Window Focus Loss |
| 7 | `/gauth-vs-examghost` | `src/app/gauth-vs-examghost/page.tsx` | Gauth (ByteDance) | Top 9 Footer | Differential Equations (Calculus) | 35° Downward Phone Gaze Anomaly |
| 8 | `/coursehero-vs-examghost` | `src/app/coursehero-vs-examghost/page.tsx` | Course Hero AI | Top 9 Footer | Financial Accounting & Tax Law (Business) | $39.95 Blurred PDF Paywall |
| 9 | `/compare-canvas-hack-extensions` | `src/app/compare-canvas-hack-extensions/page.tsx` | Master Benchmark Hub | Top 9 Footer | Universal Academic LMS Architecture | Master 58-Extension Comparison Hub |
| 10 | `/answerai-vs-examghost` | `src/app/answerai-vs-examghost/page.tsx` | AnswerAI | General AI | Biostatistics & Hypothesis Testing (STEM) | 75 Exposed Plasmo Assets & Sidebar Blur |
| 11 | `/answerly-vs-examghost` | `src/app/answerly-vs-examghost/page.tsx` | Answerly AI | General AI | Microeconomics & Game Theory (Business) | Visible Popover DOM Injection |
| 12 | `/asksia-vs-examghost` | `src/app/asksia-vs-examghost/page.tsx` | AskSia | Static Question Banks | Philosophy & Legal Ethics (Humanities) | Untimed Reading Tool / Tab Switches |
| 13 | `/brainly-vs-examghost` | `src/app/brainly-vs-examghost/page.tsx` | Brainly | Static Question Banks | Mechanics & Kinematics (Physics) | Unverified Forum Answers & Ad Walls |
| 14 | `/campusai-vs-examghost` | `src/app/campusai-vs-examghost/page.tsx` | Campus AI | General AI | Marketing & Consumer Behavior (Business) | Single-Model SidePanel Blur Logs |
| 15 | `/canvascrack-vs-examghost` | `src/app/canvascrack-vs-examghost/page.tsx` | Canvas Crack | Dedicated Canvas LMS | Chemistry: Stoichiometry & Gas Laws (STEM) | $139 Tab Blocker With Zero AI Solver |
| 16 | `/canvasninja-vs-examghost` | `src/app/canvasninja-vs-examghost/page.tsx` | Canvas Ninja | Dedicated Canvas LMS | Discrete Mathematics & Graph Theory (CS) | Canvas-Only DOM Script Injection |
| 17 | `/canvaspass-vs-examghost` | `src/app/canvaspass-vs-examghost/page.tsx` | CanvasPass | Dedicated Canvas LMS | Psychology: Cognitive Behavioral Theory | Single-LMS Scope & Credit Caps |
| 18 | `/canvasquiz-vs-examghost` | `src/app/canvasquiz-vs-examghost/page.tsx` | Canvas Quiz Solver | Dedicated Canvas LMS | Cellular Biology & Metabolic Pathways | Breaks on New Quizzes LTI 1.3 Iframes |
| 19 | `/canvasscholar-vs-examghost` | `src/app/canvasscholar-vs-examghost/page.tsx` | Canvas Scholar | Dedicated Canvas LMS | Linear Algebra: Vector Spaces (Calculus) | Visible Sidebar Steals Active DOM Focus |
| 20 | `/canvaswizard-vs-examghost` | `src/app/canvaswizard-vs-examghost/page.tsx` | Canvas Wizard | Dedicated Canvas LMS | Sociology & Social Stratification | #wiz_button Host DOM Mutation |
| 21 | `/cheatmate-vs-examghost` | `src/app/cheatmate-vs-examghost/page.tsx` | CheatMate | High-Risk Deceptive Tools | Organic Chemistry: Reaction Mechanisms | $9.99/Week Auto-Rebill Trap ($519/yr) |
| 22 | `/cheatpal-vs-examghost` | `src/app/cheatpal-vs-examghost/page.tsx` | Cheatpal | High-Risk Deceptive Tools | Business Law & Contracts (Law) | Floating Unshielded Body Widget |
| 23 | `/classology-vs-examghost` | `src/app/classology-vs-examghost/page.tsx` | Classology AI | General AI | Human Physiology & Organ Systems | Injected High-Contrast Quiz DOM Banners |
| 24 | `/coursology-vs-examghost` | `src/app/coursology-vs-examghost/page.tsx` | Coursology | General AI | World History & Western Civ (Humanities) | Injected "Rate Us" Banners & Focus Drop |
| 25 | `/cramly-vs-examghost` | `src/app/cramly-vs-examghost/page.tsx` | Cramly AI | Static Question Banks | College English & Rhetoric (Humanities) | External Writing Portal / Tab Switches |
| 26 | `/doublecheckai-vs-examghost` | `src/app/doublecheckai-vs-examghost/page.tsx` | Double Check AI | General AI | Inorganic Chemistry & Complexes (STEM) | Injected Buttons & Synthetic Clicks |
| 27 | `/easysb-vs-examghost` | `src/app/easysb-vs-examghost/page.tsx` | EasySB | Textbook Solvers | McGraw-Hill SmartBook Adaptive Reading | Bot Timing Signatures & Page Freezes |
| 28 | `/examclutch-vs-examghost` | `src/app/examclutch-vs-examghost/page.tsx` | ExamClutch | General AI | Financial Accounting & Ledgers (Business) | High Latency & 60-Sec API Timeouts |
| 29 | `/fastsolve-vs-examghost` | `src/app/fastsolve-vs-examghost/page.tsx` | FastSolve | General AI | Thermodynamics & Heat Transfer (STEM) | Unthrottled API Rate Limits & Halts |
| 30 | `/getquizsolve-vs-examghost` | `src/app/getquizsolve-vs-examghost/page.tsx` | AI Quiz Solve | General AI | Environmental Science & Ecosystems | Generic Model Hallucinations |
| 31 | `/homework-helper-vs-examghost` | `src/app/homework-helper-vs-examghost/page.tsx` | Homework Helper+ | General AI | Civil Engineering: Statics & Trusses | Unshielded Iframe Scrapers |
| 32 | `/homeworkify-vs-examghost` | `src/app/homeworkify-vs-examghost/page.tsx` | Homeworkify | Static Question Banks | Mechanical Engineering: Dynamics (STEM) | Dead Domain Mirrors & Shifting Proxies |
| 33 | `/knowt-vs-examghost` | `src/app/knowt-vs-examghost/page.tsx` | Knowt | Static Question Banks | Spanish & Foreign Languages (Humanities) | Flashcard Web Portal / Zero Stealth |
| 34 | `/mathosai-vs-examghost` | `src/app/mathosai-vs-examghost/page.tsx` | Mathos AI | Symbolic Math | Single-Variable Calculus: Integrals | Web Calculator Only / Manual Formula Copy |
| 35 | `/mindko-vs-examghost` | `src/app/mindko-vs-examghost/page.tsx` | Mindko | General AI | Organizational Behavior (Business) | College Tools Rebrand / Legacy Manifest |
| 36 | `/mylabsolver-vs-examghost` | `src/app/mylabsolver-vs-examghost/page.tsx` | MyLab Solver | Textbook Solvers | Pearson MyLab & Mastering College Algebra | Cross-Origin MathJax Scrape Failures |
| 37 | `/questionai-vs-examghost` | `src/app/questionai-vs-examghost/page.tsx` | QuestionAI | General AI | Statistics: Probability Distributions | Aggressive Mobile Push / Desktop Lag |
| 38 | `/quizard-vs-examghost` | `src/app/quizard-vs-examghost/page.tsx` | Quizard AI | General AI | Economics: Supply & Demand Elasticity | Rigid Multiple Choice Only / No Open-End |
| 39 | `/quizloader-vs-examghost` | `src/app/quizloader-vs-examghost/page.tsx` | Canvas Quiz Loader | Dedicated Canvas LMS | Computer Architecture & Digital Logic | Deprecated Manifest V2 Scripts |
| 40 | `/quizmate-vs-examghost` | `src/app/quizmate-vs-examghost/page.tsx` | QuizMate | High-Risk Deceptive Tools | Organic Chemistry: Stereochemistry | $0.99 to $24.99 Rebill Trap |
| 41 | `/quizper-vs-examghost` | `src/app/quizper-vs-examghost/page.tsx` | Quizper AI | High-Risk Deceptive Tools | Electrical Engineering: AC Circuits | BYOK API Keys & Plaintext Storage |
| 42 | `/quizplus-vs-examghost` | `src/app/quizplus-vs-examghost/page.tsx` | QuizPlus | Static Question Banks | Microbiology & Bacterial Pathogens | $25/mo Static Bank Paywall |
| 43 | `/quizsolverai-vs-examghost` | `src/app/quizsolverai-vs-examghost/page.tsx` | QuizSolver AI | General AI | Biochemistry: Enzyme Kinetics (STEM) | Midterm Quota Cutoff at Question 20 |
| 44 | `/quizwizard-vs-examghost` | `src/app/quizwizard-vs-examghost/page.tsx` | Quiz Wizard | General AI | Constitutional Law (Social Sciences) | Injected UI Elements & Contrast Fails |
| 45 | `/quizzy-vs-examghost` | `src/app/quizzy-vs-examghost/page.tsx` | Quizzy AI | General AI | Cultural Anthropology (Social Sciences) | Unverified Crowd-Sourced Slop |
| 46 | `/rightclickai-vs-examghost` | `src/app/rightclickai-vs-examghost/page.tsx` | RightClick AI | General AI | Medical Terminology & Pharmacology | Right-Click Context Menu Traps |
| 47 | `/schoolcheats-vs-examghost` | `src/app/schoolcheats-vs-examghost/page.tsx` | SchoolCheats | High-Risk Deceptive Tools | K-12 Algebra & Remedial Mathematics | Malware Ad Injectors & Extension Bans |
| 48 | `/snapgpt-vs-examghost` | `src/app/snapgpt-vs-examghost/page.tsx` | SnapGPT | High-Risk Deceptive Tools | Geology & Earth Systems Science (STEM) | Broken OCR On Low-Light Camera Snaps |
| 49 | `/solvely-vs-examghost` | `src/app/solvely-vs-examghost/page.tsx` | Solvely | Symbolic Math | General Physics: Optics & Snell Law | Mobile Math Solver / Desktop Emulation Fail |
| 50 | `/studybotpro-vs-examghost` | `src/app/studybotpro-vs-examghost/page.tsx` | StudyBotPro | High-Risk Deceptive Tools | Economics & Financial Markets (Business) | Recurring Subscriptions Without Cancel UI |
| 51 | `/studyfox-vs-examghost` | `src/app/studyfox-vs-examghost/page.tsx` | StudyFox | General AI | Sociology & Social Research Methods | Injected Answer Card Bleed-Through |
| 52 | `/studymonkey-vs-examghost` | `src/app/studymonkey-vs-examghost/page.tsx` | StudyMonkey | General AI | Philosophy & Informal Logic (Humanities) | 3-Prompt Daily Cap & Strict Paywall |
| 53 | `/studyx-vs-examghost` | `src/app/studyx-vs-examghost/page.tsx` | StudyX | General AI | Calculus III: Vector Calculus & Green Thm | Discord Bot Redirect / Tab Switch Logs |
| 54 | `/testbro-vs-examghost` | `src/app/testbro-vs-examghost/page.tsx` | Test Bro | General AI | Neuroscience & Synaptic Transmission | DOM Highlighting Signature Triggers |
| 55 | `/testwhiz-vs-examghost` | `src/app/testwhiz-vs-examghost/page.tsx` | TestWhiz | General AI | Psychology: Research Methods & Stats | Generic Explanations / Zero LaTeX Math |
| 56 | `/truststudy-vs-examghost` | `src/app/truststudy-vs-examghost/page.tsx` | TrustStudy | General AI | Business Ethics & Corporate Governance | Fake Chrome Web Store Testimonials |
| 57 | `/usequietly-vs-examghost` | `src/app/usequietly-vs-examghost/page.tsx` | Quietly AI | Dedicated Canvas LMS | Organic Chemistry: Conformational Analysis | Incomplete Shortcut Sets & Canvas Lag |
| 58 | `/wolframalpha-vs-examghost` | `src/app/wolframalpha-vs-examghost/page.tsx` | Wolfram\|Alpha | Symbolic Math | Calculus II: Series & Differential Eqns | 680-Character Truncation Cutoff |
| Ref 1 | `/classlogy-vs-examghost` | `src/app/classlogy-vs-examghost/page.tsx` | Classlogy Redirect | Redirect Alias | Canonical Redirect to `/classology-vs-examghost` | Alias Redirect Stub |
| Ref 2 | `/compare` | `src/app/compare/page.tsx` | Compare Redirect | Redirect Alias | Canonical Redirect to `/compare-canvas-hack-extensions` | Alias Redirect Stub |

---

## 3. Four-Tier Test Architecture

The testing matrix is organized into four complementary verification tiers:

```
+-----------------------------------------------------------------------------------------+
|                                    TIER 4: APPLICATION                                  |
|   Real-world end-to-end student academic workflows, exam simulations, multi-modal LMS   |
+-----------------------------------------------------------------------------------------+
                                             ^
+-----------------------------------------------------------------------------------------+
|                                  TIER 3: CROSS-FEATURE                                  |
|   State synchronization, hotkey mode transitions, scrubber seeks during animation       |
+-----------------------------------------------------------------------------------------+
                                             ^
+-----------------------------------------------------------------------------------------+
|                                   TIER 2: BOUNDARY                                      |
|   Extreme viewport dimensions, rapid timeline scrubbing, character limit truncations   |
+-----------------------------------------------------------------------------------------+
                                             ^
+-----------------------------------------------------------------------------------------+
|                                    TIER 1: COVERAGE                                     |
|   Exhaustive per-route feature matrix: >=5 test cases per route across all 58 routes    |
+-----------------------------------------------------------------------------------------+
```

---

### Tier 1: Comprehensive Feature Coverage (>=5 Test Cases Per Route)

Every comparison route is evaluated against at least 8 specific criteria (yielding 58 x 8 = 464 test assertions in Tier 1 alone):

1. **TC-T1-01: Page File & Route Integrity**
   - **Target**: Valid Next.js Page component exported as default.
   - **Assertion**: File exists at designated route path, exports default React component, and contains metadata title and description.
2. **TC-T1-02: Bespoke Motion Demo Integration**
   - **Target**: Bespoke motion product demo.
   - **Assertion**: Contains Play/Pause media toggle, interactive 3-scene timeline progress scrubber, spring-animated virtual cursor choreography, and competitor failure scenario. Zero routes use legacy static `setInterval` placeholder or shared identical question.
3. **TC-T1-03: Modern 6-Hotkey Suite Verification**
   - **Target**: Canonical hotkeys.
   - **Assertion**: Page explicitly includes all 6 modern hotkeys:
     - `Double-Click` (Inline instant solve)
     - `Alt+S` (Hybrid Vision + DOM Snip)
     - `Alt+1` (Invisible Mode: 15% opacity shift)
     - `Alt+2` (Stealth Mode: subtle micro-badge)
     - `Alt+3` (Explain Mode: inline step-by-step derivation drawer)
     - `⌘+Shift+U` (Master Panic Toggle: instant <8ms unmount)
4. **TC-T1-04: 4-Tier Standardized Pricing Structure**
   - **Target**: Pricing transparency.
   - **Assertion**: Page contains all 4 standard pricing tiers:
     - Free: `5 Free Solves / Day` ($0 auto-refills 24h, no credit card required)
     - Monthly: `$19/mo` (or `$19/month`)
     - Annual: `$99/yr` (`[$8.25/mo]`)
     - Lifetime: `$199 Lifetime`
5. **TC-T1-05: 2-in-1 Study & Homework AI Workspace Models**
   - **Target**: Frontier model citations.
   - **Assertion**: Page explicitly showcases the 2-in-1 value proposition pairing the Stealth Extension with the Study & Homework AI Workspace featuring:
     - `Claude 3.7 Sonnet`
     - `ChatGPT o3-mini/4o`
     - `DeepSeek-R1`
6. **TC-T1-06: JSON-LD `@graph` Schema Parity**
   - **Target**: Search engine rich result schemas.
   - **Assertion**: Route contains `<script type="application/ld+json">` with `@graph` containing `WebPage`, `BreadcrumbList`, `FAQPage`, and `SoftwareApplication` with 4 pricing offers ($0.00, $19.00, $99.00, $199.00).
7. **TC-T1-07: Quota Integrity & Legacy Trial Purge**
   - **Target**: Zero deprecated trial occurrences.
   - **Assertion**: Zero occurrences of `"50 Free Solves"` or `"50-solve trial"` or residual FAQ IDs containing `50-solves` across `src/`.
8. **TC-T1-08: Boilerplate Radio-Button Tab Excision**
   - **Target**: Zero repetitive CSS template scaffolding.
   - **Assertion**: Zero comparison pages utilize hidden `<input type="radio" className="...peer/tab1">` or `sr-only peer/` tab skeletons. All architectural teardown sections are visible and accessible.

---

### Tier 2: Boundary & Corner Cases

1. **TC-T2-01: Viewport Extremes & Responsive Resilience**
   - **Boundary**: 320px mobile viewport (narrowest smartphone) up to 1440px desktop displays.
   - **Assertion**: Motion demo frame and comparison layouts maintain layout bounds without horizontal scroll overflows (`overflow-x: hidden`), maintaining responsive controls.
2. **TC-T2-02: Rapid Timeline Scrubber Seeking**
   - **Boundary**: Rapid sequential clicks across Scene 1 (0.0s), Scene 2 (6.5s), and Scene 3 (13.5s) within <50ms intervals.
   - **Assertion**: State machine clamps scene indexes between 0 and 2 without throwing `IndexOutOfBounds`, race conditions, or unhandled promise rejections.
3. **TC-T2-03: Character Limit & Truncation Bounds**
   - **Boundary**: Multi-part word problems exceeding 680 characters (Wolfram|Alpha limit).
   - **Assertion**: ExamGhost demo and comparison documentation accurately showcase processing prompts of 1,500+ characters with zero truncation errors.
4. **TC-T2-04: Empty State & Missing Parameter Resilience**
   - **Boundary**: Undefined or empty scenario parameters.
   - **Assertion**: Headless motion primitives gracefully render fallbacks without `null` dereference errors or crashing React tree.
5. **TC-T2-05: Focus Shield Telemetry & Blur Event Isolation**
   - **Boundary**: External window focus loss triggers (`window.blur`, `visibilitychange`, `document.hasFocus()`).
   - **Assertion**: Telemetry state registers `blurEvents: 0` when Focus Shield is engaged, contrasting with competitor failure count (>0).

---

### Tier 3: Cross-Feature Combinations

1. **TC-T3-01: Timeline Seek During Active Playback**
   - **Interaction**: User drags or clicks scrubber while video demo is auto-playing.
   - **Assertion**: Playback timeline synchronizes to new scene timestamp immediately; cursor position springs smoothly to the target coordinate without animation jitter.
2. **TC-T3-02: Hotkey Mode Cascade Switching**
   - **Interaction**: Rapid sequence of `Alt+1` -> `Alt+2` -> `Alt+3` -> `⌘+Shift+U`.
   - **Assertion**: UI transitions from 15% opacity text shift to micro-badge to derivation drawer, and terminates with instant panic unmount (<8ms).
3. **TC-T3-03: Multi-Model Study Workspace Tab Synchronization**
   - **Interaction**: Student toggles between `Claude 3.7 Sonnet`, `ChatGPT o3-mini/4o`, and `DeepSeek-R1` on the same exam problem.
   - **Assertion**: Model-specific explanations (conceptual, algorithmic, LaTeX mathematical proof) render independently without caching corruption or content collisions.
4. **TC-T3-04: Dual Extension + Web Study Hub Integration**
   - **Interaction**: 0.3s inline exam solve saved to cloud study notebook for subsequent homework review.
   - **Assertion**: Verification that the 2-in-1 unified subscription covers both extension execution and full study workspace access under a single entitlement.

---

### Tier 4: Real-World Application Scenarios

1. **TC-T4-01: STEM Exam Simulation (Organic Chemistry & Multivariable Calculus)**
   - **Scenario**: Timed Canvas quiz with multi-step DIBAL-H reduction mechanism and partial differential equations.
   - **Workflow**: Student invokes `Double-Click` inline solve; response returns in 0.3s; Canvas SpeedGrader logs zero blur events (`document.hasFocus() === true`).
2. **TC-T4-02: Healthcare & Anatomy Simulation (Canvas New Quizzes LTI 1.3)**
   - **Scenario**: Cross-origin LTI 1.3 iframe containing high-resolution nephron tubule histology diagram.
   - **Workflow**: Competitor DOM scrapers fail; ExamGhost invokes `Alt+S` (Hybrid Vision + DOM Snip); crosshairs capture image region; diagram is solved without iframe permission violations.
3. **TC-T4-03: Business & Financial Accounting Simulation (Corporate Balance Sheets)**
   - **Scenario**: Multi-column Excel/table balance sheet analysis with GAAP reconciliation.
   - **Workflow**: Page compares competitor $39.95 static paywall against live multi-model breakdown in the Study AI Workspace.
4. **TC-T4-04: High-Stakes Proctoring Simulation (ByteDance Gauth vs ExamGhost)**
   - **Scenario**: Proctoring software analyzing webcam video feed for downward gaze anomalies.
   - **Workflow**: Gauth requires 35° downward camera gaze (24.5s photo capture); ExamGhost maintains 0.0° eye gaze vector directly on screen with 0.3s inline HUD.
5. **TC-T4-05: Complete Student Lifecycle Journey**
   - **Scenario**: New student onboarding from free trial to academic semester pass.
   - **Workflow**: Student starts with `5 Free Solves / Day` ($0, zero credit card); exhausts daily quota; upgrades to `$99/yr Academic Pass` ($8.25/mo); accesses unlimited solves + Claude 3.7 / ChatGPT o3-mini / DeepSeek-R1 workspace.

---

## 4. Test Execution & Verification Strategy

### 4.1 Test Directory Structure (`tests/e2e/`)
```
tests/e2e/
├── config.ts                           # Master registry of 58 routes, models, hotkeys, pricing
├── helpers.ts                          # Static analysis, AST parser, schema validator, regex matchers
├── tier1-feature-coverage.test.ts      # Tier 1: 58-route feature coverage suite
├── tier2-boundary-corner-cases.test.ts # Tier 2: Boundary, viewport, character caps suite
├── tier3-cross-feature.test.ts         # Tier 3: Scrubber seeks, hotkey modes, model tabs suite
├── tier4-application-scenarios.test.ts # Tier 4: STEM, Healthcare, Proctoring student journeys
└── run-all.ts                          # Comprehensive unified test runner & reporter
```

### 4.2 Test Runner Command Matrix
| Action | Command | Purpose |
|:-------|:--------|:--------|
| **Run All Tiers (Unified)** | `npx tsx tests/e2e/run-all.ts` | Complete test suite execution with summary diagnostics |
| **Run Tier 1 Only** | `npx tsx tests/e2e/tier1-feature-coverage.test.ts` | Verify all 58 routes feature parity & boilerplate removal |
| **Run Tier 2 Only** | `npx tsx tests/e2e/tier2-boundary-corner-cases.test.ts` | Verify boundary and corner conditions |
| **Run Tier 3 Only** | `npx tsx tests/e2e/tier3-cross-feature.test.ts` | Verify cross-feature interaction cascades |
| **Run Tier 4 Only** | `npx tsx tests/e2e/tier4-application-scenarios.test.ts` | Verify real-world academic student workflows |
| **TypeScript Compilation** | `npx tsc --noEmit` | Confirm zero type errors across test and application code |

---

## 5. Pass / Fail Acceptance Criteria
The test infrastructure establishes a binary acceptance gate for production readiness:
1. `npx tsc --noEmit` exits with status `0` (Zero TypeScript compilation errors).
2. `npx tsx tests/e2e/tier1-feature-coverage.test.ts` passes 100% of assertions across all 58 routes once builder milestones complete.
3. `grep -rn -E -i "50\s*(free|solves|question|trial)" src/` returns `0` occurrences for ExamGhost's trial.
4. Hidden `<input type="radio" className="...peer/tab1">` is completely purged from all 58 comparison pages.
5. All 58 routes contain bespoke Framer Motion product demos with Play/Pause, timeline scrubber, cursor choreography, and competitor failure scenes.
6. All 58 routes advertise the complete 6-hotkey suite and 4-tier pricing structure.
