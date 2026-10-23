# ExamGhost — Complete Product, Technical Architecture & Competitor Documentation

## 1. What Is ExamGhost?

**ExamGhost** (`https://examghost.com`) is a client-side AI quiz and exam solver Chrome extension built for Chrome, Edge, Brave, and Arc on macOS and Windows. It allows students to solve quiz, homework, and exam questions directly inside their active browser tab across **Canvas, Blackboard, Moodle, D2L Brightspace, McGraw-Hill Connect, Pearson MyLab, Gradescope, WebAssign, ALEKS, and 20+ learning platforms** in **0.3 seconds** without switching tabs, opening sidebars, or copy-pasting to external AI chat websites.

### Core Problems ExamGhost Solves
1. **LMS Focus & Tab-Switch Tracking (`window.blur` & `visibilitychange`):** Learning Management Systems (like Canvas SpeedGrader Quiz Logs, Blackboard Ultra, and D2L Brightspace) monitor browser focus events. When a student clicks outside the quiz tab, switches windows, opens a browser toolbar popup, or uses a side-panel extension, the browser fires `window.blur`, `focusout`, and `document.visibilitychange` events. Canvas logs this as *"Stopped viewing the Canvas quiz-taking page"* with a timestamp. ExamGhost solves questions inline inside the active quiz tab and intercepts these blur events so the teacher's action log stays completely clean (`0 flags`).
2. **DOM Mutation & Extension Fingerprinting Detection:** Many browser extensions inject visible HTML buttons (e.g., `<button class="solve-btn">`), highlight classes (`.correct`), or global CSS stylesheets directly into the host webpage DOM, and expose internal extension files in `manifest.json` under `web_accessible_resources`. Exam scripts and proctoring tools can scan the page DOM or probe those exposed extension URLs to detect installed extensions. ExamGhost renders exclusively inside an isolated **closed Shadow DOM (`mode: 'closed'`)** with zero host-page DOM mutations and zero exposed web-accessible resources.
3. **Locked Text, Disabled Right-Click & Visual STEM Diagrams:** Many online quizzes disable text selection (`user-select: none`), block right-click/copy events, render questions inside `<canvas>` elements or locked PDFs, or use complex visual diagrams (calculus graphs, organic chemistry skeletal structures, physics free-body diagrams, electrical circuits, CS trees). ExamGhost includes **Snap-It Vision (`⌘+Shift+S`)**, allowing the user to drag a crop box over any area on the screen to extract and solve formulas and diagrams via multimodal vision AI and Mathpix LaTeX OCR.
4. **Randomized Variables on STEM Questions:** Static answer databases (like Quizlet, CourseHero, Brainly, or Quizplus) only store fixed textbook answers and fail when an LMS randomizes numerical variables for each student. ExamGhost computes live answers dynamically for the exact numbers and options shown on the student's screen.

---

## 2. How ExamGhost Works (User Workflow & Keyboard Shortcuts)

### Step-by-Step Usage
1. **Install & Start Immediately:** Students get **50 Free Question Solves** immediately upon installing the extension, with no account registration and no credit card required.
2. **Toggle On/Off (`⌘+Shift+U` on Mac / `Ctrl+Shift+U` on Windows):** ExamGhost is completely dormant by default with zero background activity until toggled on.
3. **Solve Any Question Inline:**
   - **Method A — Double-Click any Question:** Double-click on any question text or option area. ExamGhost reads the question and answer choices directly from local browser memory and delivers the answer in ~0.3 seconds using your chosen Display Mode and Answer Delivery Method.
   - **Method B — Snap-It Region Sniping (`⌘+Shift+S` / `Ctrl+Shift+S`):** If text selection is locked or the question contains a graph, chart, code block, or chemical structure, press `⌘+Shift+S` and drag a crop rectangle around the question. ExamGhost captures the pixels in-memory, runs Mathpix OCR + multimodal AI reasoning, and returns the exact answer and proof.
4. **Emergency Panic Kill-Switch (`Esc × 2` or `Alt+X` / `⌘+Shift+U`):** Double-tapping `Escape` (or pressing the panic hotkey) unmounts all overlays, purges local solver cache, and flushes volatile RAM in **10–16ms**, returning the browser to a standard state.

### Complete Keyboard Shortcuts Reference
- **`⌘+Shift+U` (or `Ctrl+Shift+U`):** Master toggle to turn ExamGhost ON or OFF in under 50ms.
- **`Double-Click` (on any question):** Instantly read and solve the question inline.
- **`⌘+Shift+S` (or `Ctrl+Shift+S`):** Activate Snap-It Vision crosshair crop tool for diagrams, formulas, and locked text.
- **`⌘+B` (or `Ctrl+B`):** Cycle HUD opacity (`100%` → `25%` → `0%`) or trigger quick solve.
- **`Esc × 2` (or `Alt+X`):** Emergency Panic Kill-Switch (flushes RAM and removes all UI in 10–16ms).

---

## 3. Display Modes & Answer Delivery Methods

ExamGhost separates **how visible the extension is** (Display Modes) from **how the answer is applied to the quiz** (Answer Delivery Methods). Users can mix and match any mode with any method in 1 click from the popup.

### A. The 3 Display Modes
1. **Stealth Mode (Default):**
   - Displays a quiet, subtle micro-cursor indicator while solving, then naturally applies the answer.
   - Places a faint, semi-transparent indicator beside the correct choice that is invisible to anyone glancing across a lecture hall or over your shoulder.
2. **Invisible Mode (100% Screen-Share Safe):**
   - Silent answer injection with zero cursor changes, zero overlays, zero popups, and zero toast notifications.
   - Designed for screen-sharing and webcam environments where even a small popup or screen brightness reflection on glasses must be avoided.
3. **Explain Mode (Deep Study & Proof Drawer):**
   - Applies the answer and opens a step-by-step reasoning drawer inside an isolated Shadow DOM popover.
   - Explains why the correct option is true, shows full LaTeX mathematical derivations, and explains specifically why each incorrect distractor is wrong.

### B. The 3 Answer Delivery Methods
1. **Auto-Fill Engine (Default):**
   - Directly selects the correct radio button (single-choice MCQ), checks all correct checkboxes (multi-select "select all that apply"), or populates numeric/fill-in-the-blank inputs on the page.
2. **Smart Highlight (Configurable 1–10s Glow):**
   - Softly highlights/glows on the correct option for a user-configurable duration from **1 second to 10 seconds** (default: **4 seconds**), then fades away.
   - Allows the student to click the radio button or checkbox with their own physical mouse/trackpad so the browser registers a native hardware click (`Event.isTrusted: true`).
3. **Silent Clipboard (Essay & Short-Answer Safe):**
   - Silently copies the solved answer, numerical value, or short-answer response to the clipboard so the student can type or paste it into text areas and essay prompts.

---

## 4. All 24 Features of ExamGhost (Categorized)

### Category 1: Anti-Detection & Stealth (5 Features)
1. **Window Blur & Focus Interception:** Silences browser `visibilitychange`, `focusout`, and `window.blur` listeners in the capture phase. The LMS continuously receives an active session heartbeat, recording `0` *"Stopped viewing quiz page"* warnings.
2. **Teacher Action Log Neutralizer:** Ensures the instructor's audit timeline (such as Canvas SpeedGrader) only shows normal activity: *"Session started → Viewed question → Answered question"* with zero red alert flags.
3. **Isolated Closed Shadow DOM Engine:** All HUD overlays and explanations live inside a closed Shadow Root tree (`attachShadow({ mode: 'closed' })`). Host page scripts, proctor scripts, and `document.querySelectorAll` calls cannot inspect or access it.
4. **Zero Clipboard Footprint (When Not Using Clipboard Mode):** Unlike basic extensions that copy question text through the OS clipboard (which LMS clipboard listeners can detect), ExamGhost extracts and solves questions purely in-memory.
5. **Kiosk & Locked-Browser Spoofing:** Emulates fullscreen and active viewport status states required by restrictive web assessment shells.

### Category 2: Display Modes (3 Features)
6. **Zero-UI In-DOM Highlighting (Invisible Mode):** Marks answers directly on native quiz controls without opening floating windows, sidebars, or auxiliary panels.
7. **Discreet Stealth Dot Indicator (Stealth Mode):** Faint, semi-transparent indicator beside the correct choice with natural micro-cursor feedback.
8. **Deep Tutor Breakdown Drawer (Explain Mode):** Full step-by-step logic and distractor elimination proof drawer.

### Category 3: Snap-It Vision & Multimodal OCR (4 Features)
9. **Area Screenshot Crop Tool (`⌘+Shift+S`):** Drag a crop rectangle over any unselectable text, PDF embed, or image to solve with computer vision in **0.3s to <1.2s**.
10. **Chemical Structures & Reactions OCR:** Decodes organic chemistry skeletal drawings, IUPAC nomenclature, reaction mechanisms, electron configurations, and stereochemistry.
11. **Calculus, Graphs & Matrix Algebra Engine (Mathpix LaTeX):** Reads LaTeX symbols, definite/indefinite integrals, limits, derivatives, coordinate planes, and matrices directly from image crops or MathJax/KaTeX DOM nodes.
12. **Unselectable Text & `<canvas>` Bypass:** Reads pixel data directly off the viewport even when right-click, copy events, and text selection are disabled by JavaScript.

### Category 4: Question Formats Supported (4 Features)
13. **Single Choice & MCQ Parsing:** Instant identification and option matching for 4-option and 5-option multiple-choice questions, even when options are shuffled per student.
14. **Multi-Select Checkbox Bundles:** Evaluates every option independently on *"Select all that apply"* questions without missing negative constraints (*"Which of the following is NOT..."*).
15. **Fill-In-The-Blank & Numeric Input:** Computes exact numerical answers and follows significant-figure and decimal-place rounding rules (crucial for Pearson MyLab, WebAssign, and ALEKS).
16. **Matching & Dropdown Columns:** Maps definitions, formulas, and relationships across dual-column matching tables and inline select dropdowns in a single pass.

### Category 5: Attempt Memory (2 Features)
17. **2nd-Attempt Auto-Answer Cache:** Caches high-scoring responses from a student's first quiz submission and pre-populates verified answers on Attempt #2.
18. **Incorrect Distractor Elimination:** Tracks which options lost points on previous attempts and prunes them out to guarantee higher accuracy on retakes.

### Category 6: Privacy, Control & Security (6 Features)
19. **Off Until Switched On (`⌘+Shift+U`):** Never runs in the background on non-exam browsing.
20. **No Account Required to Start:** 50 free solves work immediately upon install without creating an account or entering an email.
21. **Emergency Panic Kill-Switch (`Esc × 2`):** Vaporizes all UI and purges local solver cache in 10ms.
22. **Zero-Knowledge Ephemeral Memory Pipeline:** Questions are processed in ephemeral RAM buffers; no student identifiers, screen recordings, or question logs are stored on remote servers.
23. **Universal Cross-LMS Compatibility:** Works across 20+ university and professional testing portals, including cross-origin LTI 1.3 iframes.
24. **1-Click Clean Chrome Uninstall:** Removes cleanly from Chrome at any time with zero leftover hooks or background processes.

---

## 5. Supported Platforms & How ExamGhost Works on Each (20+ Portals)

1. **Canvas (Classic Quizzes & LTI 1.3 New Quizzes):**
   - *How it works:* Double-click any question or press `⌘+Shift+S` for graphs/tables. Injects into both standard pages and cross-origin LTI 1.3 New Quizzes iframes (`all_frames: true`).
   - *Why it's safe:* Canvas Quiz Log only flags students when `window.blur` or `visibilitychange` fires from clicking outside the tab. ExamGhost keeps focus 100% inside the open Canvas tab.
2. **Blackboard (Blackboard Learn & Blackboard Ultra):**
   - *How it works:* Double-click any question or option area inline.
   - *What it solves:* Timed tests, randomized question pools, matching questions, and short-response essay prompts without triggering *"left the assessment"* warnings.
3. **McGraw-Hill (Connect, SmartBook & ALEKS):**
   - *How it works:* Press `⌘+Shift+S` to box equations/graphs, or double-click SmartBook reading questions.
   - *What it solves:* ALEKS adaptive math, Connect financial accounting spreadsheets, organic chemistry mechanisms, and physics problems without losing adaptive streaks.
4. **Pearson (MyLab & Mastering — MyMathLab, MasteringPhysics, MasteringChemistry):**
   - *How it works:* Snap multi-part problems (`Part A, B, C`) with `⌘+Shift+S` or double-click the prompt.
   - *What it solves:* Multi-step STEM word problems while adhering strictly to Pearson's significant-figure and decimal rounding rules.
5. **Moodle (All University Quiz Formats):**
   - *How it works:* Double-click anywhere on the question card while scrolling down the quiz page.
   - *What it solves:* Single choice, multi-select, true/false, numerical inputs, and Cloze (embedded answer) questions with zero page reloads.
6. **D2L Brightspace (Quizzes & Timed Assessments):**
   - *How it works:* Works directly inside Brightspace quiz frames via double-click or `⌘+Shift+S` when text selection is locked.
   - *What it solves:* Timed quizzes, multi-page exams, and image-based diagram questions while preventing Brightspace window blur events.
7. **Gradescope (Online Exams, PDFs & Computer Science):**
   - *How it works:* Press `⌘+Shift+S` and drag a box around code snippets, data structure trees, circuits, or scanned PDF worksheets.
   - *What it solves:* Python/Java/C++ output tracing, discrete math proofs, and scanned/handwritten PDF exams.
8. **Coursera & edX (Graded Certificate Quizzes):**
   - *How it works:* Double-click the question prompt to check all correct boxes on multi-select graded module assessments so users don't get locked out on retry cooldowns.
9. **LinkedIn (Timed Skill Assessments):**
   - *How it works:* Double-click the question or code block to solve in ~0.3–1.2s, beating the 90-second per-question countdown timer across Excel, SQL, Python, React, AWS, and Accounting assessments.
10. **Additional Supported Portals:**
    - **Google Classroom & Google Forms**
    - **WileyPLUS**
    - **Cengage WebAssign & MindTap**
    - **AP Classroom**
    - **Kahoot!**
    - **Schoology**
    - **Locked PDFs & Lecture Slides opened in Chrome**

---

## 6. Pricing, Free Trial & Value Calculator

### Pricing Tiers
- **Free Trial — \$0 (No Credit Card Required):**
  - Includes **50 Free Question Solves** immediately upon installation.
  - No account creation or billing info needed.
  - Includes full access to Frontier Multimodal AI, Mathpix OCR, closed Shadow DOM HUD, and Focus Shield (never throttled to a lower-tier AI model).
- **Monthly Pass — \$19 / month:**
  - Unlimited question solves across all subjects and LMS platforms.
  - Priority 0.3s edge compute.
  - Flexible monthly billing; cancel anytime in 1 click.
- **Academic Year Pass (Most Popular / Best Value) — \$99 / year (\$8.25 / month):**
  - Saves 56% compared to monthly billing.
  - Covers Fall, Spring, Summer, and Finals for a full academic year.
- **Lifetime VIP Degree Pass — \$199 one-time payment:**
  - Single payment covering your entire undergraduate degree, Master's (MSc), and postgraduate certifications with permanent lifetime updates.

### Refund Policy
- **14-Day 100% Money-Back Guarantee** on all paid passes.

### Semester Protection Calculator Economics (From `Pricing.tsx`)
Retaking a single failed 3-credit university course costs **\$1,500 – \$4,500** in tuition.
- **Light Course Load (12 Credits / 4 Classes):** ~16 Exams & Quizzes/semester · **\$2,400 – \$3,600** tuition risk shielded · **\$0.52 / test** with Academic Year Pass.
- **Standard Course Load (15 Credits / 5 Classes):** ~20 Exams & Quizzes/semester · **\$3,000 – \$4,500** tuition risk shielded · **\$0.41 / test** with Academic Year Pass.
- **Heavy STEM / Honors Load (18+ Credits):** ~26 Exams & Quizzes/semester · **\$4,500 – \$6,000+** tuition risk shielded · **\$0.32 / test** with Lifetime Degree Pass.

---

## 7. Website Structure & Interactive Tools (`examghost.com`)

1. **Homepage (`https://examghost.com`):**
   - Interactive Hero stage where visitors can test `Stealth`, `Invisible`, and `Explain` modes, switch between `Auto-fill`, `Smart Highlight`, and `Silent Clipboard`, and press `⌘+Shift+U`, `⌘+Shift+S`, and `⌘+B` live on the page.
   - Interactive `GhostMode` playground with configurable 1–10s highlight duration slider.
   - Interactive `QuestionExamples` simulator demonstrating Multiple Choice, Multi-Select, True/False, and Short Answer auto-solving.
   - Interactive `Pricing` section with the Semester Protection Calculator.
2. **Live Interactive Canvas Sandbox Demo (`https://examghost.com/demo`):**
   - Full browser-based simulation of a 5-question, 15-point timed Canvas exam (complete with a live countdown timer, question navigator, flag-for-review, live Snap-It crosshair drag-and-crop OCR simulator, Speedrun Auto-Solve button, and a live **SpeedGrader Proctor Action Log** proving `0 blur flags`). Requires zero installation to try.
3. **All 24 Features Catalog (`https://examghost.com/features`):**
   - Filterable and searchable catalog of all 24 ExamGhost tools plus a technical feature matrix.
4. **45-Competitor Forensic Directory Hub (`https://examghost.com/compare-canvas-hack-extensions`):**
   - Searchable hub comparing ExamGhost against 45 competitors with verified 2026 Chrome Web Store manifest audits, pricing comparisons, and stealth ratings.
5. **45 Individual Competitor Comparison Pages (`https://examghost.com/[competitor]-vs-examghost`):**
   - Dedicated technical teardowns for every competitor in the market.
6. **Official Student Discord (`https://discord.gg/aCcsyKYJq4`):**
   - Community for live Canvas telemetry testing, updates, and 24/7 engineering support.

---

## 8. Complete 2026 Competitor Database (All 45 Competitors Explained)

Below is the factual audit data for all 45 competitors compared against ExamGhost across the site:

### 1. CanvasHack (`canvashack.com` — `/canvashack-vs-examghost`)
- **What it is:** A Canvas-only event-masking script that blocks tab-switch detection.
- **Pricing:** \$24.99/month or \$149.99 lifetime.
- **Key Weaknesses vs ExamGhost:** Has **zero built-in AI solver** and **zero OCR**. Students pay \$150 and still have to manually switch tabs or split-screen to copy-paste questions into ChatGPT. Only supports Canvas (no Blackboard, Moodle, D2L, McGraw-Hill, or Pearson) and hooks directly into page scripts rather than providing a 0.3s closed Shadow DOM AI solver.

### 2. CheatMate (`cheatmate.io` / Chrome Store "Study Buddy" — `/cheatmate-vs-examghost`)
- **What it is:** A browser solver extension listed under the alias "Study Buddy" on the Chrome Web Store with a **2.8★ rating**.
- **Pricing:** \$0.99 trial that auto-converts into **\$9.99/week (\$519.48/year)**.
- **Key Weaknesses vs ExamGhost:** Injects visible helper buttons directly into the host page DOM (triggering DOM mutation anomalies), suffers from 8–15s cloud queue lag during midterms, and traps students in a \$9.99/week recurring billing cycle.

### 3. BetterCampus (`bettercampus.app`, formerly BetterCanvas — `/bettercampus-vs-examghost`)
- **What it is:** A popular free Canvas UI customization extension (Dark Mode, GPA calculator, custom dashboard cards, assignment to-do lists).
- **Pricing:** Free (with optional themes).
- **Key Weaknesses vs ExamGhost:** BetterCampus is a dashboard styling tool, **not** an AI exam solver and has **no Focus Shield** for live quizzes. Students use BetterCampus for Canvas Dark Mode and pair it with ExamGhost for live 0.3s exam solving and blur protection.

### 4. Coursology (`coursology.com` — `/coursology-vs-examghost`)
- **What it is:** An AI study suite (AI podcasts, flashcards, note chat, and browser extension).
- **Pricing:** Subscription tiers (~$14.99–$19.99/mo).
- **Key Weaknesses vs ExamGhost:** Pivoted toward general study content generation; its extension injects detectable content script footprints into the page DOM and lacks ExamGhost's 3 stealth display modes (`Invisible`, `Stealth`, `Explain`) and configurable Smart Highlight.

### 5. Gauth / Gauthmath (`gauthmath.com` by ByteDance — `/gauth-vs-examghost`)
- **What it is:** A mobile camera homework app and web portal owned by ByteDance / GauthTech.
- **Pricing:** Gauth Plus costs \$11.99/month or \$99.99/year.
- **Key Weaknesses vs ExamGhost:** Has **no official first-party Chrome Web Store stealth extension** (and `gauthmath.com` returns HTTP 403 blocks in many regions). Using the mobile app during a proctored test triggers downward webcam eye-gaze flags and phone screen reflections on glasses; using the web portal requires switching tabs, triggering Canvas `window.blur` logs.

### 6. Answer.AI (`answer.ai` — `/answerai-vs-examghost`)
- **What it is:** A mobile-first K-12 AI tutor app with a Chrome sidebar companion.
- **Pricing:** Weekly/monthly app subscriptions (~$9.99/mo+).
- **Key Weaknesses vs ExamGhost:** Built primarily for K-12 mobile scanning; its Chrome sidebar steals focus from the active LMS quiz frame (logging blur events) and lacks inline radio-button auto-fill or closed Shadow DOM isolation.

### 7. CanvasPass (`canvaspass.org` — `/canvaspass-vs-examghost`)
- **What it is:** A credit-based Canvas quiz extension.
- **Pricing:** Credit packs where "Smart Mode" burns **10 credits per question** (an 800-credit pack only yields 80 Smart Solves).
- **Key Weaknesses vs ExamGhost:** Deceptive credit burn rate that drains balances mid-exam, plus it paywalls its tab-switch blocker behind paid tiers (whereas ExamGhost includes Focus Shield and unthrottled AI on all 50 Free Solves).

### 8. Homeworkify (`homeworkify.st` / `.eu` — `/homeworkify-vs-examghost`)
- **What it is:** A formerly popular Chegg link-unblurring website that was **officially shut down**.
- **Pricing:** Defunct (current lookalike domains are adware/phishing traps).
- **Key Weaknesses vs ExamGhost:** Officially dead; even when active, it required copying URLs into a separate tab and failed on randomized LMS numbers.

### 9. Brainly (`brainly.com` — `/brainly-vs-examghost`)
- **What it is:** A crowdsourced K-12 Q&A forum.
- **Pricing:** Ad-supported free tier or Brainly Plus/Tutor (\$18–\$39/mo).
- **Key Weaknesses vs ExamGhost:** Relies on unverified forum answers that are frequently wrong on college STEM, fails when professors randomize numbers, and requires leaving the exam tab to search Google.

### 10. CourseHero (`coursehero.com` — `/coursehero-vs-examghost`)
- **What it is:** A static document library where students upload old syllabi and PDFs to unblur answers.
- **Pricing:** \$39.95/month (or \$119.40/year) or uploading 10 documents.
- **Key Weaknesses vs ExamGhost:** Static uploaded PDFs cannot solve dynamic, randomized Canvas/WebAssign/ALEKS questions, and searching CourseHero in another tab triggers immediate LMS focus-loss logs.

### 11. CanvasQuiz (`canvasquiz.ai` — `/canvasquiz-vs-examghost`)
- **What it is:** A Canvas-specific solver extension.
- **Pricing:** Monthly subscription (~$14.99–$19.99/mo).
- **Key Weaknesses vs ExamGhost:** Injects a visible purple "Solve" button directly into Canvas question headers (mutating the host DOM and failing screen-share safety) and does not support non-Canvas LMS platforms like Blackboard, Moodle, or McGraw-Hill.

### 12. CanvasNinja (`canvasninja.com` — `/canvasninja-vs-examghost`)
- **What it is:** A Canvas quiz helper extension.
- **Pricing:** Recurring subscription tiers.
- **Key Weaknesses vs ExamGhost:** Exposes extension resources in its manifest, relies on a side-panel UI that steals window focus, and lacks Snap-It OCR for locked diagrams.

### 13. CanvasWizard (`canvaswizard.com` — `/canvaswizard-vs-examghost`)
- **What it is:** A Canvas extension that has rotated through multiple Chrome Web Store listings.
- **Pricing:** Subscription-based.
- **Key Weaknesses vs ExamGhost:** Unisolated content scripts injected into the main document and limited multi-LMS compatibility compared to ExamGhost's 20+ supported platforms.

### 14. QuizSolverAI (`quizsolverai.com` — `/quizsolverai-vs-examghost`)
- **What it is:** A credit-metered browser quiz extension.
- **Pricing:** Tiered credit subscriptions.
- **Key Weaknesses vs ExamGhost:** Charges per click/credit and lacks ExamGhost's closed Shadow DOM isolation, Attempt Memory cache, and 10ms Panic RAM flush.

### 15. GetQuizSolve (`getquizsolve.com` — `/getquizsolve-vs-examghost`)
- **What it is:** A browser popup quiz solver.
- **Pricing:** Monthly subscription.
- **Key Weaknesses vs ExamGhost:** Renders visible popup overlays directly on top of the quiz viewport (unsafe for screen sharing or lecture halls) instead of offering ExamGhost's Invisible and Smart Highlight modes.

### 16. UseQuietly (`usequietly.com` — `/usequietly-vs-examghost`)
- **What it is:** A desktop/browser stealth tool focused on audio and screen-share wrappers.
- **Pricing:** High-ticket monthly/annual subscriptions.
- **Key Weaknesses vs ExamGhost:** Lacks native inline DOM Focus Shield interception (`window.blur`), Attempt Memory caching, and <1.2s Snap-It Mathpix OCR for daily Canvas/Blackboard quizzes.

### 17. TestBro (`testbro.io` — `/testbro-vs-examghost`)
- **What it is:** A side-drawer AI quiz extension.
- **Pricing:** Monthly/weekly subscription.
- **Key Weaknesses vs ExamGhost:** Opens a visible side drawer that steals focus from the quiz iframe (logging `window.blur` in SpeedGrader) and lacks closed Shadow DOM isolation or a Panic Kill-Switch.

### 18. FastSolve (`fastsolve.ai` — `/fastsolve-vs-examghost`)
- **What it is:** A screenshot-based quiz solver extension.
- **Pricing:** Subscription tiers.
- **Key Weaknesses vs ExamGhost:** Slower cloud queue latency (4–8s vs ExamGhost's 0.3s double-click DOM parsing) and exposed content script hooks.

### 19. Quizard (`quizard.io` — `/quizard-vs-examghost`)
- **What it is:** A mobile homework scanning app that **officially shut down in January 2025**.
- **Pricing:** Defunct.
- **Key Weaknesses vs ExamGhost:** Discontinued service; required using a phone camera pointed at a laptop screen.

### 20. Classology (`classology.ai` — `/classology-vs-examghost`)
- **What it is:** An LMS solver Chrome extension.
- **Pricing:** Recurring subscription.
- **Key Weaknesses vs ExamGhost:** Directly mutates host page DOM styles to show answers and lacks a Panic RAM flush or 3 distinct stealth display modes.

### 21. Mindko / Mindgrasp (`mindko.com` / `mindgrasp.ai` — `/mindko-vs-examghost`)
- **What it is:** An AI lecture recording, PDF summarizer, and flashcard generator (rebranded from Mindgrasp to Mindko).
- **Pricing:** \$9.99/mo to \$19.99/mo.
- **Key Weaknesses vs ExamGhost:** Built for pre-exam study note generation; requires uploading files or switching tabs to a web dashboard, offering zero Focus Shield or inline 0.3s quiz solving during a live test.

### 22. CampusAI (`campusai.org` — `/campusai-vs-examghost`)
- **What it is:** A web and extension AI chat wrapper for students.
- **Pricing:** Subscription tiers.
- **Key Weaknesses vs ExamGhost:** Conversational chat box workflow rather than zero-UI inline radio-button auto-fill and configurable 1–10s Smart Highlight.

### 23. StudyX (`studyx.ai` — `/studyx-vs-examghost`)
- **What it is:** A community homework hub and Chrome sidebar extension.
- **Pricing:** StudyX Plus subscription (`UltraUsageThresholdModal` throttles high-tier model usage).
- **Key Weaknesses vs ExamGhost:** Exposes wildcard `"**/*"` in `web_accessible_resources` (making it trivial for LMS scripts to fingerprint), fails inside LTI 1.3 cross-origin iframes (Canvas New Quizzes), and relies on a focus-stealing sidebar.

### 24. StudyBotPro (`studybotpro.com` — `/studybotpro-vs-examghost`)
- **What it is:** A legacy side-drawer solver extension whose domain (`studybotpro.com`) is now **offline (`no such host`)** and delisted from the Chrome Web Store.
- **Pricing:** Formerly \$6.99/week (\$363.48/year).
- **Key Weaknesses vs ExamGhost:** Dead domain and delisted store package; previously injected an unisolated side-drawer on `<all_urls>`.

### 25. Solvely (`solvely.ai` — `/solvely-vs-examghost`)
- **What it is:** An AI STEM solver web app and Chrome extension (v0.8.4, ~100K users).
- **Pricing:** Subscription tiers (~$12.99/mo+).
- **Key Weaknesses vs ExamGhost:** Its manifest injects `content-scripts/canvas-layout-preload.js` at `document_start`, `content-scripts/canvas.js`, `content-scripts/iframe-sidepanel.js`, and `content-scripts/lms-track.js`, and exposes `content-scripts/canvas.css` and `sidepanel.html` in `web_accessible_resources`. Requires manual sidebar screenshot cropping instead of 0.3s double-click inline solving.

### 26. TrustStudy (`truststudy.ai` — `/truststudy-vs-examghost`)
- **What it is:** An active-recall "study, think, reveal" Chrome extension by Specimen whose domain (`truststudy.ai`) is now **offline (`no such host`)** and delisted from the Chrome Web Store.
- **Pricing:** Defunct (formerly Eco/Max credit tiers).
- **Key Weaknesses vs ExamGhost:** Offline/abandoned project; forced a multi-step "think first, reveal later" workflow unsuitable for timed exams.

### 27. Answerly (`getanswerlyai.com`, offline `answerly.ai` — `/answerly-vs-examghost`)
- **What it is:** A Chrome quiz solver extension (v1.3.52).
- **Pricing:** \$12.99/month via Stripe.
- **Key Weaknesses vs ExamGhost:** Injects 5 unisolated content scripts (`newQuizSolver.js`, `quizMemory.js`, `quizSolver.js`, `screenshotTool.js`, `scoreReporter.js`) plus `content/styles.css` directly into the page and exposes `assets/*` and `content/*` across `<all_urls>` in `web_accessible_resources`.

### 28. Homework Helper (`homeworkhelper.ai` -> redirects to `livepolls.app` — `/homework-helper-vs-examghost`)
- **What it is:** A Chrome extension (v2.5.1) whose primary domain `homeworkhelper.ai` is dead and redirects to `livepolls.app/chrome_addons`.
- **Pricing:** Freemium / subscription.
- **Key Weaknesses vs ExamGhost:** Requests invasive `identity.email` OAuth permissions to harvest student email addresses, injects global CSS (`assets/index-DtBvZ6ej.css`) across `<all_urls>`, and uses Chrome's `sidePanel` API which triggers LMS blur flags.

### 29. Question.AI (`question.ai` by Zuoyebang — `/questionai-vs-examghost`)
- **What it is:** A sidebar chat and screenshot homework helper.
- **Pricing:** Freemium / monthly subscription.
- **Key Weaknesses vs ExamGhost:** Opens a persistent browser sidebar chat that steals focus from the exam window, lacks a Canvas Focus Shield, and does not auto-fill or highlight quiz options in-place.

### 30. StudyFox (`studyfox.ai` — `/studyfox-vs-examghost`)
- **What it is:** A weekly-billed quiz helper extension.
- **Pricing:** **\$6.99/week (\$363.48/year)**.
- **Key Weaknesses vs ExamGhost:** Expensive weekly billing drain (\$363/yr vs ExamGhost's \$99/yr pass) and injects a visible floating fox widget onto LMS pages.

### 31. CanvasCrack (`canvascrack.com` — `/canvascrack-vs-examghost`)
- **What it is:** A legacy Canvas script extension.
- **Pricing:** Subscription-based.
- **Key Weaknesses vs ExamGhost:** Built for older Canvas Classic Quizzes; breaks on modern LTI 1.3 Canvas New Quizzes cross-origin iframes and lacks Snap-It multimodal vision OCR.

### 32. QuizMate (`quizmate.io` — `/quizmate-vs-examghost`)
- **What it is:** A floating widget quiz solver extension.
- **Pricing:** Weekly/monthly subscription.
- **Key Weaknesses vs ExamGhost:** Renders a visible widget on the page rather than operating inside a closed Shadow DOM with Invisible Mode and Smart Highlight.

### 33. CanvasScholar (`canvasscholar.com` — `/canvasscholar-vs-examghost`)
- **What it is:** A Canvas quiz helper extension.
- **Pricing:** Subscription-based.
- **Key Weaknesses vs ExamGhost:** Modifies host page HTML nodes directly (vulnerable to DOM integrity checks) and lacks cross-platform support for Blackboard, Moodle, Pearson, and McGraw-Hill.

### 34. SchoolCheats (`schoolcheats.net` — `/schoolcheats-vs-examghost`)
- **What it is:** A web portal indexing static answer scripts for K-12 platforms (like Edgenuity, Kahoot, Blooket).
- **Pricing:** Freemium / tiered access.
- **Key Weaknesses vs ExamGhost:** Relies on static answer keys and public client-side game scripts; cannot dynamically read or solve university Canvas, Blackboard, WebAssign, or Gradescope STEM exams.

### 35. Knowt (`knowt.com` — `/knowt-vs-examghost`)
- **What it is:** A flashcard, AP study guide, and AI lecture note taker (positioned as a Quizlet alternative).
- **Pricing:** Free tier + Knowt Plus/Ultra (\$4.99–\$9.99/mo billed annually).
- **Key Weaknesses vs ExamGhost:** Designed for pre-exam flashcard studying and note taking—has no inline LMS quiz solver, no Focus Shield, and no closed Shadow DOM HUD for live exams.

### 36. Cramly (`cramly.ai` — `/cramly-vs-examghost`)
- **What it is:** A web-based AI essay writer, paraphraser, and multiple-choice prompt box.
- **Pricing:** \$9.99/month (or \$3.99/mo billed annually).
- **Key Weaknesses vs ExamGhost:** Operates as an external web dashboard where students must copy-paste text across tabs (triggering Canvas `window.blur` logs), with no browser extension HUD or Snap-It diagram OCR.

### 37. Quizzy (`quizzy.now` — `/quizzy-vs-examghost`)
- **What it is:** An AI study deck and practice quiz generator.
- **Pricing:** Subscription tiers.
- **Key Weaknesses vs ExamGhost:** Generates practice flashcards before an exam; does not solve live Canvas/Blackboard quizzes inline or suppress LMS focus telemetry.

### 38. ExamClutch (`examclutch.com` — `/examclutch-vs-examghost`)
- **What it is:** A Canvas/LMS quiz solver Chrome extension (v2.0.8).
- **Pricing:** \$19/month or **\$129/year** with **zero free trial solves**.
- **Key Weaknesses vs ExamGhost:**
  1. Takes **~30 seconds** to batch-process a quiz (which fails on sequential 1-by-1 locked Canvas quizzes where only one question is loaded at a time).
  2. Uses an `applier.js` double-click auto-clicker that dispatches synthetic JavaScript click events (`Event.isTrusted: false`), which LMS scripts can distinguish from real hardware mouse clicks.
  3. Exposes `logo.png` across `<all_urls>` in `web_accessible_resources` (allowing extension fingerprinting).
  4. Offers zero free solves upfront (vs ExamGhost's 50 Free Solves).

### 39. Mathos AI / MathGPTPro (`mathos.ai` — `/mathosai-vs-examghost`)
- **What it is:** A web and app math solver (`mathos.ai/app/ask`) with PDF homework helpers and AI video animations.
- **Pricing:** Weekly/monthly subscriptions up to **\$9.98/week** for Prime MathosMax.
- **Key Weaknesses vs ExamGhost:** Routes users to an external 5-stage study workspace in a separate tab (triggering Canvas `window.blur` logs), lacks a closed Shadow DOM Focus Shield, and only covers math (leaving students uncovered in Chemistry, Biology, Nursing, Business, CS, and Humanities).

### 40. QuizWizard (`getquizwizard.com` — `/quizwizard-vs-examghost`)
- **What it is:** A Chrome extension quiz solver (in Beta) that uses "Spells" as its credit currency.
- **Pricing:** **\$29.99/month (\$359.88/year)**.
- **Key Weaknesses vs ExamGhost:**
  1. Contradicts its own quota limits on the same page (listing "50 Spells" on the pricing card vs "100 Spells" in the FAQ).
  2. Restricts entry tiers to "base models" with an advertised **92% accuracy ceiling** (meaning ~1 in 12 STEM questions are wrong, vs ExamGhost's 99.4%+ Mathpix + Frontier Multimodal pipeline).
  3. Clicking its browser toolbar icon steals focus from the exam page.

### 41. SnapGPT (`snapgpt.me`, offline `snapgpt.io` — `/snapgpt-vs-examghost`)
- **What it is:** A screenshot and inline solver Chrome extension by SnapGPT LLC (`snapgpt.io` DNS is offline; operates on `snapgpt.me`).
- **Pricing:** Free tier capped at **5 questions/day**; Pro is \$9.99/month.
- **Key Weaknesses vs ExamGhost:**
  1. Its advertised "Subtle mode" simply sets `opacity: 0` on a **52×52px button injected directly into the host page DOM** and mutates Canvas answers by adding a `.correct` class with `#2ecc71` green styling.
  2. Its web app loads **OpenReplay session recording** (`static.openreplay.com`) and exposes `/admin/chats/` routes, whereas ExamGhost uses a zero-knowledge ephemeral RAM pipeline.
  3. Free tier only gives 5 questions/day (vs ExamGhost's 50 Free Solves).

### 42. TestWhiz (`testwhiz.co` — `/testwhiz-vs-examghost`)
- **What it is:** A subscription quiz solver extension.
- **Pricing:** **3-day trial** (requires credit card upfront) that auto-converts into **\$5.99/week (\$311.48/year)** or \$12.99/month.
- **Key Weaknesses vs ExamGhost:** Displays a warning banner that its old Chrome solver extension was replaced, traps students with a 3-day auto-billing weekly trial (\$311/yr), and makes vague "Incognito mode" marketing claims with zero technical Focus Shield or Shadow DOM specifications.

### 43. Quizplus (`quizplus.com` — `/quizplus-vs-examghost`)
- **What it is:** A static library of 20 million pre-written textbook Q&As and flashcards.
- **Pricing:** **\$24.99/month** (or \$12.99/mo billed annually at \$155.88/year) to unblur answers.
- **Key Weaknesses vs ExamGhost:**
  1. Its official Chrome extension is **delisted/dead** on the Chrome Web Store (`/detail/empty-title/`).
  2. Because it is a static textbook lookup bank, it fails whenever a professor randomizes numbers in a STEM word problem (e.g., changing `r = 4 m` to `r = 7.5 m`).
  3. Requires leaving the exam tab to search and unblur static pages, logging immediate Canvas blur events.

### 44. StudyMonkey (`studymonkey.ai` — `/studymonkey-vs-examghost`)
- **What it is:** A web-based homework chat portal (`studymonkey.ai/dashboard/chat`) built by ITW Creative Works (`itwcreativeworks.com`) on an "Ultimate Jekyll" template connected to `chatsy.ai`.
- **Pricing:** 4 tiers — Basic (\$0, 5 subjects cap), Plus (\$9/mo or \$90/yr), Pro (\$16/mo or \$160/yr), and Max (\$29/mo or \$290/yr).
- **Key Weaknesses vs ExamGhost:**
  1. **Model Throttling:** Both the Free Basic plan and the paid **\$9/mo Plus plan** restrict students to a downgraded **"Standard AI model"** with no essay writer; unlocking its "Advanced AI model" requires paying **\$16/mo (Pro)** or **\$29/mo (\$290/yr Max)**. ExamGhost gives every user unthrottled Frontier Multimodal AI + Mathpix OCR on all tiers, including the 50 Free Solves.
  2. **Web Chat Only:** Routes students to `/dashboard/chat` in a browser tab with zero closed Shadow DOM HUD and zero Canvas Focus Shield.
  3. **Contradictory Refund Terms:** Displays a badge claiming *"We offer a 7-day money-back guarantee on all plans"* right above FAQ #3 on the exact same page stating *"After the trial period, all sales are final."*

### 45. Wolfram|Alpha Pro (`wolframalpha.com` — `/wolframalpha-vs-examghost`)
- **What it is:** A deterministic symbolic algebra and computation engine with a Chrome toolbar launcher (`icncamkooinmbehmkeilcccmoljfkdhp`).
- **Pricing:** Free Basic (no step-by-step solutions), Student Pro (\$9.99/mo or \$60/yr), Student Pro Premium (\$12.00/mo or \$99/yr).
- **Key Weaknesses vs ExamGhost:**
  1. **Hardcoded 680-Character Limit (`inputCharLimit: 680`):** Production `window.ENV_DATA` on `wolframalpha.com` truncates inputs at 680 characters and requires strict symbolic syntax—meaning you cannot paste a multi-sentence word problem, finance table, or 4-option multiple-choice question.
  2. **Hardcoded 1.5s Upload Delay (`fakeUploadDelay: 1500`) & 2MB Cap:** Enforces a 1,500ms artificial delay on image uploads and a 2MB file size cap on Student Pro.
  3. **External Tab Launcher:** Its Chrome extension is just a toolbar search box that opens a new `wolframalpha.com` tab, firing `window.blur` and `visibilitychange` logs in Canvas SpeedGrader.
  4. **Math-Only Scope & No Free Steps:** Basic (\$0) excludes step-by-step solutions, and even Pro Premium (\$99/yr) cannot solve Biology, Nursing, Organic Chemistry mechanisms, Accounting, CS, or Humanities questions—whereas ExamGhost covers every university major for the same \$99/yr (\$8.25/mo) rate and includes full step-by-step explanations on all 50 Free Solves.


---

## 9. Newly Discovered Competitors in the Space (55+ Additional Competitors Beyond the Original 45)

Below is a comprehensive breakdown of **55+ additional competitors** operating in the LMS quiz solver, stealth screen-overlay, STEM solver, and AI homework assistant space that are **not** yet covered in the original 45 `/[competitor]-vs-examghost` pages.

### Tier 1: Direct In-Page LMS / Quiz Solver Chrome Extensions (Highest Priority Direct Competitors)

| # | Competitor | Domain / Store | Pricing & Limits | Supported Platforms & Features | Technical Weaknesses vs. ExamGhost |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 1 | **FastSolve** | `fastsolve.app` | Free (10 solves/day); Pro **$9.99/week**, **$19.99/mo**, or **$99/yr** | Chrome extension with in-page auto-fill for Canvas, Blackboard, Moodle, Brightspace, Schoology, ALEKS, Knewton, Learnosity, DeltaMath, Edpuzzle, iReady, Edmentum, MyMathLab, MathXL, WeBWorK, WebAssign, McGraw Connect, IXL, Quizizz, Hawkes. Uses Claude & GPT-4o (<2s response). | Recurring subscription ($9.99/wk or $19.99/mo vs. ExamGhost $6.99/mo or $12.99 one-time); lacks ExamGhost's 5-level customizable Chameleon Stealth UI (Level 1 4px corner dot / Level 2 single radio tick) and Course Materials RAG Vault. |
| 2 | **Apex Vision AI** | `apexvision.ai` | Free (~30 reqs/12h); **$7.99/mo** (500 reqs), **$14.99/mo** (1,000 reqs), **$19.99/mo** (2,000 reqs) | Chrome extension + iOS/Android app. On-page question & diagram reading for Canvas, Blackboard, Moodle, Pearson MyLab, Top Hat, and McGraw-Hill SmartBook. | Explicitly refuses to build stealth modes or tab-switch blockers ("We do not build them and do not recommend installing them"); injects visible UI panels on LMS pages; strictly capped monthly request quotas. |
| 3 | **SnapGPT** | `snapgpt.me` | Freemium + Paid subscription tiers | Chrome extension with "Smart Scan" (one-click screen capture), "Autopilot (Solve All at Once)", side-panel AI chat, and "Subtle Mode". | Side-panel UI and full-page "Solve All at Once" batch mutations trigger Canvas SpeedGrader rapid-answering telemetry (<5 seconds per question) and visible layout shifts. |
| 4 | **StudyFox** | `studyfox.pro` | 3-day free trial; **$2.99/week**, **$9.99/mo**, **$29.99/semester**, **$59.99/yr** | AI quiz solver Chrome extension + flashcard/note suite with multi-model verification (GPT, Claude, Gemini) and instant page integration. | Broad study-app focus rather than dedicated zero-DOM-footprint Canvas stealth; lacks ExamGhost's 4-layer anti-detection event interceptor and Course Materials RAG. |
| 5 | **Quizonator** | `quizonator.com` | Free (20 answers); PRO **$14.99/mo** (300 answers); PRO+ **$28.99/mo** (1,200 answers) | Chrome extension built for Canvas Classic & New Quizzes with Standard/Stealth modes, keyboard hotkeys, and mobile remote-control mode. | Expensive metered credit tiers ($14.99/mo for only 300 answers, $28.99/mo for 1,200 answers vs. ExamGhost $6.99/mo unlimited); narrower LMS coverage (primarily Canvas). |
| 6 | **CanvasPass** | `canvaspass.com` | Free (5 questions/wk); Paid **$5/mo** (800 credits) | Single-purpose Chrome extension that works exclusively inside Canvas quizzes with basic tab-switch blocking. | Canvas-only (fails on Blackboard, Moodle, D2L, McGraw-Hill, Pearson); 800-credit monthly cap; no Course Materials RAG upload; no multi-AI verification. |
| 7 | **RightClick AI** | `userightclick.app` | Freemium + Pro subscription | Stealth-focused right-click Chrome extension with "Vision Scan" (snips diagrams/equations), "Stealth Mode" (minimalist popups), and "Orb Integration". | Relies on right-click context menu or manual region snipping rather than automatic zero-click Canvas Classic + New Quizzes Shadow DOM traversal. |
| 8 | **Transcript** | `transcript.study` | Freemium + Paid monthly subscription | Chrome extension + mobile app with "Scan and Solve" inline extraction, "Notebook" class material uploads for context-grounded answers, and voice mode. | Closest competitor offering notebook/context uploads, but uses a visible floating toolbar/extension popup rather than ExamGhost's 5-level Chameleon Stealth UI and 4-layer Canvas event interception. |
| 9 | **College Tools** | `collegetools.io` | **$9.99/mo** or **$59.99/yr** (3-day trial) | Original high-search-volume brand name of Mindko (`mindko.com` is in the original 45 list, but `collegetools.io` / "College Tools" remains a major standalone competitor keyword). | Same underlying weaknesses as Mindko: recurring subscription, credit/usage limits, and less granular visual stealth than ExamGhost. |
| 10 | **AskSia** | `asksia.ai` | $0.99 3-day trial; **~$25/mo** or **$76–$210/yr** (Plus, Super, A+ tiers) | Chrome extension + AI study workspace that syncs with Canvas, Blackboard, Moodle, Brightspace, and DeltaMath for STEM/homework solving and lecture transcription. | Very high price point (~$25/mo); built as a heavyweight study workspace/sidebar rather than a stealth in-exam solver. |
| 11 | **Cheatpal** | `cheatpal.com` | Paid subscription | Early LMS quiz solver Chrome extension with partial stealth mode and basic multiple-choice support. | Lacks support for complex question types (multi-dropdowns, matching, numerical entry) and fails on Canvas New Quizzes LTI Shadow DOM. |
| 12 | **Canvas Quiz Loader** | Chrome Web Store | Free | Chrome extension that scrapes a student's own previous Canvas quiz attempt submissions and auto-fills them into retake attempts. | Zero AI problem-solving capability; completely useless on first attempts, single-attempt exams, or quizzes with randomized question banks/variables. |
| 13 | **Canvas Hack Scripts** | GitHub / GreasyFork | Free (Open-source Tampermonkey scripts) | Open-source userscripts (`canvas-hack`) that attempt to spoof `blur`/`visibilitychange` events or inspect Canvas quiz DOM/network payloads. | Easily detected by Instructure updates, often broken on Canvas New Quizzes LTI iframes, and cannot actually solve ungraded/server-side questions. |
| 14 | **AI Homework Solver / Double Check AI** | `aihomeworksolver.com` | Free trial + **$10 one-time** web unlock | Chrome extension providing inline multiple-choice recognition and answer verification inside LMS pages. | Basic single-model wrapper without Course Materials RAG, LaTeX OCR for complex STEM diagrams, or 5-level Chameleon Stealth UI. |
| 15 | **EasySB / Auto-McGraw / SmarterBook** | `easysb.org` | Freemium / Paid extension tiers | Dedicated Chrome extensions built specifically to automate McGraw-Hill Connect SmartBook adaptive reading assignments. | Single-platform utility (McGraw-Hill SmartBook only); does not work on Canvas, Blackboard, Moodle, or D2L Brightspace exams. |
| 16 | **Quiz Solver Complete & Quizper AI** | Chrome Web Store | Free extension shell + **BYOK** (Bring Your Own OpenAI/Gemini API Key) | Lightweight Chrome extensions with "Highlight Mode" (turns the correct option blue) and "Auto-Assist Mode". | Requires students to manage their own paid OpenAI/Gemini developer API keys and billing; directly mutates host DOM CSS styles (turning options blue), which is detectable by page integrity scripts. |
| 17 | **MyLab Solver** | `mylabsolver.com` | Discontinued / Legacy | Chrome extension built specifically for Pearson MyLab / MyMathLab assignments. | Defunct/unmaintained and limited to a single publisher platform. |

---

### Tier 2: Stealth Desktop Overlays & Screen-Share-Invisible AI Copilots

These tools operate as **native macOS/Windows desktop overlays** using OS window-affinity APIs (`SetWindowDisplayAffinity` / macOS sharing exclusions) so they remain invisible during Zoom, Teams, or browser screen-sharing—making them indirect competitors for online tests and technical assessments.

| # | Competitor | Domain | Pricing | Core Mechanism | Technical Weaknesses vs. ExamGhost |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 18 | **Cluely** | `cluely.com` | Free Starter; Pro **$19.99/mo**; Pro + Undetectability **$149.99/mo** ($44.99/mo annual); Mobile **$8/wk** | Viral desktop overlay copilot ("cheat on everything") that reads screen + audio to provide real-time answers during exams, interviews, and calls. | Charges **$149.99/mo** for full undetectability; requires installing a standalone native OS desktop app (flagged by OS-level process scanners); relies on slow full-screen OCR rather than instant in-browser DOM/Shadow DOM extraction. |
| 19 | **LockedIn AI** | `lockedinai.com` | **$54.99/mo** ($39.99/mo quarterly) or **$1,499 lifetime** | Stealth real-time AI copilot with invisible desktop overlay for online assessments and technical exams. | Extremely expensive ($54.99/mo vs. ExamGhost $6.99/mo); built primarily for live video/coding interviews rather than LMS quiz question types. |
| 20 | **ExtraBrain** | `extrabrain.app` | Free tier; Pro **$9.99/mo** ($6.99/mo promo), **$79/yr**, **$149 lifetime** | Local-first stealth desktop AI copilot invisible in screen shares and screenshots. | Native desktop app rather than a native LMS browser extension; cannot directly read Canvas New Quizzes Shadow DOM or auto-tick radio buttons in-page. |
| 21 | **OffscreenAI** | `offscreenai.com` | Paid subscription / credit packs | Desktop overlay assistant invisible to screen recording and screen sharing software. | Requires manual hotkey screenshot triggers and reading from a floating window rather thanExamGhost's Level 1/2 in-page dot/radio-tick indicators. |
| 22 | **CoPrep AI** | `coprep.ai` | Paid subscription | Undetectable desktop overlay for online assessments and coding/technical tests. | Focused on coding/interview assessments; lacks LMS-specific question parsing and Course Materials RAG. |
| 23 | **WinOffer** | `winoffer.ai` | Paid subscription | Stealth screen-overlay AI assistant for online tests and interviews. | Desktop app footprint; no native Canvas/Blackboard/Moodle DOM integration. |
| 24 | **CloakAI** | `cloakai.in` | Paid subscription | Invisible overlay assistant for browser-based tests and screen-shared exams. | Relies on screen capture OCR rather than direct DOM extraction and LaTeX math parsing. |
| 25 | **InterviewCoder** | `interviewcoder.co` | **$60/mo** | Invisible desktop overlay built by Roy Lee (founder of Cluely) specifically for technical/coding exams. | $60/mo price point; coding-only focus; native desktop process detectable by lockdown browsers. |

---

### Tier 3: Autonomous LMS Agents

| # | Competitor | Domain | Pricing | Core Mechanism | Technical Weaknesses vs. ExamGhost |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 26 | **Einstein AI** | `companion.ai` | Shut down after Instructure legal threats | Viral autonomous AI agent that logged directly into a student's Canvas account via headless browser to watch lectures, write discussion posts, and submit quizzes automatically. | Server-side headless login triggers immediate Canvas IP/session anomalies and university IT bans; shut down due to legal action, whereas ExamGhost runs locally inside the student's own browser session with zero external login sharing. |

---

### Tier 4: Dedicated STEM, Math & Computational Solvers (Not in Original 45)

| # | Competitor | Domain | Pricing | Core Mechanism | Technical Weaknesses vs. ExamGhost |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 27 | **Wolfram\|Alpha** | `wolframalpha.com` | Free basic; Pro **~$7.25–$9.99/mo** | Deterministic symbolic math, calculus, physics, and chemistry engine. | Requires tab-switching and manual formula typing; cannot parse word problems or multiple-choice LMS questions directly inside Canvas. |
| 28 | **Symbolab** | `symbolab.com` | Free basic; Pro **~$6.99–$9.99/mo** | Step-by-step calculus, algebra, and differential equations solver with a Chrome extension. | Requires manual equation input or bulky sidebar snipping; triggers Canvas `window.blur` when switching to the Symbolab tab. |
| 29 | **Photomath** | `photomath.com` (Google) | Free basic; Plus **~$9.99/mo** | Mobile camera math scanner with animated step-by-step textbook explanations. | Mobile-only workflow requires holding a phone up to the laptop screen; struggles with conceptual humanities/science questions and complex LMS diagrams. |
| 30 | **Mathway** | `mathway.com` (Chegg) | Free answers; Steps **$9.99–$19.99/mo** | Web/mobile STEM calculator across algebra, calculus, and chemistry. | Requires leaving the LMS tab to type equations; owned by Chegg; no in-page Canvas stealth integration. |
| 31 | **ThetaWise** | `thetawise.ai` | Free trial; **$9.99/wk**, **$19.99/mo**, **$119.99/yr** | Advanced AI math tutor and step-by-step solver with whiteboard/photo input. | Math-only web app requiring tab switches and screenshot uploads; 3x more expensive per month than ExamGhost. |
| 32 | **Julius AI** | `julius.ai` | Free (15 msgs/mo); **$20–$35/mo** | AI data scientist and computational math/statistics solver with live Python code execution. | Heavyweight external web chat interface ($20–$35/mo); requires uploading datasets/screenshots in a separate tab. |
| 33 | **UpStudy (CameraMath)** | `upstudy.com` | Free basic; Plus **~$9.99/mo** | Mobile photo math solver and live tutor Q&A app. | Mobile app workflow; no desktop LMS browser extension stealth. |
| 34 | **Cymath** | `cymath.com` | Free; Plus **$4.99/mo** | Lightweight algebraic and calculus step-by-step equation solver. | Pure equation calculator; cannot read word problems, diagrams, or multiple-choice LMS quizzes. |
| 35 | **Doubtnut** | `doubtnut.com` | Freemium | Image-based STEM question scanner that returns pre-recorded video solutions. | Relies on matching against a database of pre-recorded videos; fails on novel or professor-authored questions. |

---

### Tier 5: Major Incumbent Homework Databases, Viral AI Study Apps & Sidebar Extensions (Not in Original 45)

| # | Competitor | Domain | Pricing | Category & Core Mechanism | Technical Weaknesses vs. ExamGhost |
| :--- | :--- | :--- | :--- | :--- | :--- |
| 36 | **Chegg** | `chegg.com` | **$14.95–$19.95/mo** | Incumbent textbook Q&A database + Chegg Mate AI + Chrome extension. | Notorious for sharing student IP/account timestamps with university Honor Code investigations; fails on randomized numerical LMS variables; triggers `window.blur` when searching. |
| 37 | **Quizlet (Q-Chat)** | `quizlet.com` | Quizlet Plus **$7.99–$9.99/mo** | Flashcard database & AI study tools used by students searching pasted quiz questions. | Copy-pasting questions into a new tab fires Canvas `copy` and `window.blur` logs; fails completely when professors reword questions or randomize numbers. |
| 38 | **Studocu** | `studocu.com` | Upload-to-unlock or **~$4.99–$9.99/mo** | Crowdsourced university exam, lecture note, and past-paper repository. | Static document repository; requires tab-switching to search PDFs and cannot solve live randomized LMS quizzes in real time. |
| 39 | **Numerade** | `numerade.com` | **~$14.99–$19.99/mo** | STEM textbook video solution library + Ace AI tutor. | High subscription cost, aggressive billing complaints, and requires leaving the exam tab to search problems. |
| 40 | **Bartleby** | `bartleby.com` | **$9.99–$14.99/mo** | Textbook solution library and 24/7 expert Q&A submission platform. | Slow turnaround on custom questions and requires external tab search. |
| 41 | **Studypool** | `studypool.com` | Pay-per-question (**$5–$50+**) or **~$19.95/mo** Notebank | Micro-tutoring bidding marketplace and study document bank. | Asynchronous human bidding takes minutes to hours—useless during a timed 45-minute Canvas exam. |
| 42 | **Study.com** | `study.com` | **$29.99–$59.99/mo** | Video curriculum and homework Q&A library. | Extremely expensive ($30–$60/mo) and requires external web search. |
| 43 | **OneClass** | `oneclass.com` | **~$9.99–$19.99/mo** | University course notes, study guides, and homework solution repository. | Static archive with no live in-page AI quiz solving. |
| 44 | **Socratic by Google** | `socratic.org` | Free (Discontinued/Sunset) | Legacy mobile homework scanner app by Google. | Sunset by Google and lacks desktop LMS integration. |
| 45 | **Khanmigo** | `khanacademy.org` | **$4/mo** or **$44/yr** | Socratic AI tutor by Khan Academy. | Explicitly programmed *never* to give direct answers ("guide on the side" Socratic questioning), making it unusable for fast quiz completion. |
| 46 | **StudyFetch** | `studyfetch.com` | Free basic; **$19.99/mo** or **$96/yr** | Viral AI study platform ("Spark.E" tutor, lecture-to-flashcards, PDF chat, Chrome extension). | Built for pre-exam studying and note generation rather than zero-footprint in-exam LMS auto-solving. |
| 47 | **Turbolearn AI (Turbo AI)** | `turbo.ai` / `turbolearn.ai` | Free basic; **~$5.99–$15/mo** | Viral lecture audio/PDF/YouTube-to-notes, flashcards, and quiz generator. | Pre-exam note-taking tool; cannot read or solve live Canvas/Blackboard quizzes in-page. |
| 48 | **Coconote** | `coconote.app` | Paid pass (**~$9.99/mo** or annual) | Audio/video lecture recorder that generates study guides, flashcards, and quizzes. | Study guide generator only; no in-browser LMS exam solver. |
| 49 | **Gizmo AI** | `gizmo.ai` | Freemium + Pro | Gamified AI flashcard and spaced-repetition quiz app (Duolingo-style study tool). | Pre-exam memorization app; no live LMS quiz assistance. |
| 50 | **Feynman AI** | `feynman-ai.com` | Freemium + Pro | AI study app centered around the Feynman technique, note summarization, and flashcards. | Pre-exam study tool; no live LMS integration. |
| 51 | **Raena AI** | `raena.ai` | Freemium + Pro | Study notes to interactive quizzes, podcasts, and AI tutor chat. | Pre-exam revision tool; no in-page LMS solver extension. |
| 52 | **Penseum** | `penseum.com` | Freemium + Pro | Uploads course PDFs/videos to generate study guides, flashcards, and practice exams. | Standalone web app; does not inject into Canvas or Blackboard quizzes. |
| 53 | **Smodin** | `smodin.io` | **$12–$29/mo** | AI homework solver, essay writer, paraphraser, and grading tool. | Web-based form interface requiring copy-paste out of the LMS tab. |
| 54 | **QuillBot** | `quillbot.com` | Free basic; Premium **$8.33–$19.95/mo** | Paraphraser, grammar checker, AI detector, and summarizer Chrome extension. | Writing/paraphrasing utility; cannot solve STEM equations, diagrams, or multiple-choice LMS exams. |
| 55 | **Sider / Monica / MaxAI** | `sider.ai` / `monica.im` / `maxai.me` | **~$9.99–$19.99/mo** | General-purpose multi-LLM Chrome sidebar extensions (GPT-4o, Claude 3.5, Gemini). | Inject heavy, high-visibility sidebars and floating action buttons into the page DOM, lack LMS anti-detection (`blur`/`visibilitychange`/`paste` interception), and cannot traverse Canvas New Quizzes LTI Shadow DOM automatically. |
| 56 | **Human Homework Services** | `domyhomework123.com` / `myengineeringbuddy.com` / `takemyclassforme.com` | **$50–$500+ per assignment/exam** | Human tutors hired to log into a student's LMS or complete assignments manually. | Extremely expensive, high blackmail/extortion risk, and triggers immediate university IT flags due to out-of-state/foreign IP logins. |
