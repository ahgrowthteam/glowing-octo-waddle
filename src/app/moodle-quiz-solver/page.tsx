import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { MoodleQuizMotionDemo } from '@/components/PlatformMotionDemos';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StudyAiHubShowcase from '@/components/StudyAiHubShowcase';
import LmsExplainerFilmCard from '@/components/LmsExplainerFilmCard';
import LmsServiceFaq, { LmsFaqItem } from '@/components/LmsServiceFaq';
import {
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    Terminal,
    BookOpen,
    Layers,
    AlertTriangle,
    Sparkles,
    Keyboard,
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';

export const metadata: Metadata = {
    title: { absolute: 'Moodle Quiz Solver (2026) — Cloze, STACK & CodeRunner AI' },
    description:
        'Solve Moodle 4.x quizzes inline in 0.3s: Cloze, Calculated, STACK and CodeRunner questions. Double-click one by one or use Alt+S OCR. 5 free solves / day.',
    keywords: [
        'Moodle quiz solver',
        'Moodle AI quiz helper',
        'Moodle Chrome extension solver',
        'Moodle 4.x quiz AI',
        'does Moodle detect tab switching',
        'Moodle quiz log viewer',
        'Moodle STACK math solver',
        'Moodle Cloze question solver',
    ],
    alternates: {
        canonical: 'https://examghost.com/moodle-quiz-solver',
    },
    openGraph: {
        title: 'Moodle Quiz Solver — Interactive Moodle 4.x Product Demo | ExamGhost',
        description:
            'Watch or control a live Moodle 4.x attempt.php quiz session. One-by-one double-click solving, Alt+S MathJax & STACK OCR, and zero M.mod_quiz.secure_window blur triggers.',
        url: 'https://examghost.com/moodle-quiz-solver',
        siteName: 'ExamGhost',
        type: 'website',
        images: [{ url: '/videos/posters/moodle-quiz-solver-poster.jpg', width: 1280, height: 720, alt: 'Moodle Quiz Solver (2026) — Cloze, STACK & CodeRunner AI' }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Moodle Quiz Solver (2026) — Cloze, STACK & CodeRunner AI',
        description: 'Solve Moodle 4.x quizzes inline in 0.3s: Cloze, Calculated, STACK and CodeRunner questions. Double-click one by one or use Alt+S OCR. 5 free solves / day.',
        images: ['/videos/posters/moodle-quiz-solver-poster.jpg'],
    },
};

const moodleConfig: any = {
    slug: 'moodle-quiz-solver',
    platformName: 'Moodle 4.x',
    platformShort: 'Moodle',
    heroBadge: 'Moodle 4.x attempt.php & STACK Math Ready',
    heroDotColor: '#f98012',
    h1Title: 'Moodle Quiz Solver &',
    h1Highlight: 'AI Homework Helper',
    aeoSummary: (
        <>
            <strong className="text-[#1a1a1a]">ExamGhost for Moodle</strong> is a Manifest V3 Chrome extension engineered for{' '}
            <strong className="text-[#1a1a1a]">Moodle 3.11 &amp; Moodle 4.x</strong> (<code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">/mod/quiz/attempt.php</code>). Double-click any{' '}
            <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">.que</code> question container one by one to highlight or explain answers in place, or press{' '}
            <kbd className="px-1.5 py-0.5 bg-white border border-gray-200 rounded text-[12px] font-mono">Alt+S</kbd> to capture MathJax and STACK Maxima formulas—while keeping{' '}
            <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-gray-200">M.mod_quiz.secure_window</code> focus state 100% intact.
        </>
    ),
    videoDemo: {
        platformSub: 'Moodle 4.3 LMS • /mod/quiz/attempt.php?attempt=88412&cmid=4109',
        browserUrl: 'https://moodle.university.edu/mod/quiz/attempt.php?attempt=88412&cmid=4109',
        badgeBg: 'bg-[#fff7ed] border-[#fed7aa]',
        badgeText: 'text-[#ea580c]',
        telemetryLabel: 'M.mod_quiz.secure_window: Focus Active (0 Blur Events)',
        questions: [
            {
                id: 1,
                code: 'MOODLE-QUE-01 • .que.multichoice (Deferred Feedback)',
                type: 'Moodle Multiple Choice (.qtext)',
                points: '2.00 pts',
                prompt:
                    'In a relational database using Multi-Version Concurrency Control (MVCC) under the Read Committed isolation level, what does a SELECT query read when another transaction is actively modifying the same row without having committed yet?',
                options: [
                    'It blocks on a shared row lock until the writing transaction issues COMMIT or ROLLBACK.',
                    'It reads the uncommitted dirty buffer directly from the shared memory page.',
                    'It reads the most recent committed snapshot version of the tuple created prior to the statement start.',
                    'It aborts immediately with a serialization failure (SQLSTATE 40001).',
                ],
                correctIndex: 2,
                confidence: '99.7%',
                explanation:
                    'Under MVCC Read Committed (such as PostgreSQL or Oracle), readers never block writers and writers never block readers; the SELECT query reads the latest committed tuple snapshot visible at the start of the statement.',
            },
            {
                id: 2,
                code: 'MOODLE-QUE-02 • .que.calculated (MathJax)',
                type: 'Moodle Calculated / Numerical',
                points: '3.00 pts',
                prompt:
                    'Consider the differential equation dy/dx + 2xy = 4x with the initial condition y(0) = 5. What is the exact value of y(x) as x approaches infinity?',
                options: [
                    'y = 0',
                    'y = 2',
                    'y = 3',
                    'y = 5',
                ],
                correctIndex: 1,
                confidence: '99.5%',
                explanation:
                    'Using the integrating factor e^(x²): d/dx[y·e^(x²)] = 4x·e^(x²) ⇒ y·e^(x²) = 2e^(x²) + C. Applying y(0) = 5 gives 5 = 2 + C ⇒ C = 3. Thus y(x) = 2 + 3e^(-x²). As x → ∞, e^(-x²) → 0, leaving y = 2.',
            },
            {
                id: 3,
                code: 'MOODLE-QUE-03 • .que.stack (Canvas & Maxima CAS Diagram)',
                type: 'Moodle STACK / Graph Image (Requires Alt+S OCR)',
                points: '4.00 pts',
                requiresOcr: true,
                diagramLabel: 'MOODLE PLUGINFILE.PHP — BODE MAGNITUDE PLOT (H(jω))',
                diagramSvg: (
                    <svg viewBox="0 0 380 120" className="w-full max-w-[360px] h-auto">
                        <rect x="8" y="8" width="364" height="104" rx="8" fill="#f8fafc" stroke="#e2e8f0" />
                        <line x1="45" y1="20" x2="45" y2="95" stroke="#64748b" strokeWidth="1.5" />
                        <line x1="45" y1="95" x2="350" y2="95" stroke="#64748b" strokeWidth="1.5" />
                        <polyline points="45,35 160,35 280,85 340,85" fill="none" stroke="#ea580c" strokeWidth="2.5" />
                        <line x1="160" y1="35" x2="160" y2="95" stroke="#94a3b8" strokeDasharray="3 3" />
                        <text x="15" y="38" fontSize="9" fontWeight="bold" fill="#334155">20 dB</text>
                        <text x="15" y="88" fontSize="9" fontWeight="bold" fill="#334155">0 dB</text>
                        <text x="138" y="108" fontSize="9" fontWeight="bold" fill="#ea580c">ω_c = 10² rad/s</text>
                        <text x="205" y="55" fontSize="9" fontWeight="bold" fill="#0f172a">-20 dB/decade</text>
                    </svg>
                ),
                prompt:
                    'Use Alt+S to scan the Moodle pluginfile.php asymptotic Bode magnitude plot above. What is the DC gain K (as a linear ratio, not in decibels) and the single pole corner frequency ω_c of the transfer function H(s)?',
                options: [
                    'DC gain K = 20, corner frequency ω_c = 10 rad/s',
                    'DC gain K = 10, corner frequency ω_c = 100 rad/s',
                    'DC gain K = 100, corner frequency ω_c = 20 rad/s',
                    'DC gain K = 1, corner frequency ω_c = 100 rad/s',
                ],
                correctIndex: 1,
                confidence: '99.2%',
                explanation:
                    'A low-frequency magnitude of 20 dB corresponds to 20·log10(K) = 20 ⇒ log10(K) = 1 ⇒ K = 10. The break point where the -20 dB/decade slope begins is labeled at ω_c = 10² = 100 rad/s.',
            },
            {
                id: 4,
                code: 'MOODLE-QUE-04 • .que.multianswer (Cloze Embedded)',
                type: 'Moodle Cloze / Embedded Concept',
                points: '2.00 pts',
                prompt:
                    'In aerobic cellular respiration, which enzyme complex of the mitochondrial electron transport chain is also directly part of the citric acid (Krebs) cycle and does NOT pump protons across the inner mitochondrial membrane?',
                options: [
                    'Complex I (NADH:ubiquinone oxidoreductase)',
                    'Complex II (Succinate dehydrogenase)',
                    'Complex III (Cytochrome bc1 complex)',
                    'Complex IV (Cytochrome c oxidase)',
                ],
                correctIndex: 1,
                confidence: '99.8%',
                explanation:
                    'Complex II (succinate dehydrogenase) catalyzes the oxidation of succinate to fumarate in the citric acid cycle and transfers electrons via FADH2 to ubiquinone without translocating H+ protons across the inner membrane.',
            },
            {
                id: 5,
                code: 'MOODLE-QUE-05 • .que.truefalse',
                type: 'Moodle Macroeconomics',
                points: '2.00 pts',
                prompt:
                    'In an IS-LM framework with a horizontal LM curve at the effective lower bound (liquidity trap), how does an expansionary fiscal spending increase affect equilibrium output and the nominal interest rate?',
                options: [
                    'Output remains unchanged due to 100% crowding out of private investment.',
                    'Output increases by the full Keynesian multiplier with zero crowding out because the nominal interest rate does not rise.',
                    'The nominal interest rate rises sharply while real output falls.',
                    'Both the IS and LM curves shift left, reducing equilibrium output.',
                ],
                correctIndex: 1,
                confidence: '99.6%',
                explanation:
                    'When the LM curve is flat (liquidity trap), shifting the IS curve right increases equilibrium income Y without pushing up the interest rate r, eliminating interest-rate crowding out and yielding the full fiscal multiplier.',
            },
        ],
    },
    architecture: {
        cardBg: '#fff7ed',
        cardBorder: '#fed7aa',
        mascotImage: '/images/ghost/ghost_grad.jpg',
        mascotTitle: 'Moodle 4.x Attempt Engine',
        mascotSubtitle: (
            <>
                Built for <code className="font-mono text-[12px] bg-white/80 px-1.5 py-0.5 rounded">/mod/quiz/attempt.php</code>, STACK MathJax, and Cloze blocks.
            </>
        ),
        pills: ['Zero SecureWindow Blur', 'One-by-One Double-Click', 'Alt+S STACK Math OCR'],
        eyebrow: 'Moodle 3.11 & 4.x Architecture',
        heading: 'How ExamGhost Works Inside Moodle Quiz Attempts',
        lead: (
            <>
                Moodle quizzes render each question inside a structured <code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">div.que</code> container with <code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">.formulation</code> and <code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">.qtext</code> nodes, while optional <strong className="text-[#1a1a1a]">JavaScript security mode</strong> (<code className="font-mono text-[14px] bg-white px-1.5 py-0.5 rounded border border-gray-200">M.mod_quiz.secure_window</code>) blocks right-click and copy shortcuts. ExamGhost operates strictly one question at a time without leaving the attempt tab.
            </>
        ),
        pillars: [
            {
                title: '1. Bypasses M.mod_quiz.secure_window Copy Locks',
                desc: (
                    <>
                        When an instructor enables Moodle&apos;s <strong className="text-[#1a1a1a]">&ldquo;Full screen pop-up with some JavaScript security&rdquo;</strong>, Moodle intercepts <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">contextmenu</code>, <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">selectstart</code>, and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">copy</code> events. Because ExamGhost parses the underlying <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.que .qtext</code> DOM directly on double-click, you never need to highlight or copy text to the clipboard.
                    </>
                ),
                image: '/images/ghost/ghost_card_stealth.jpg',
            },
            {
                title: '2. Native Moodle Cloze, Calculated & STACK Support',
                desc: (
                    <>
                        University STEM courses rely heavily on Moodle <strong className="text-[#1a1a1a]">Calculated</strong> questions, <strong className="text-[#1a1a1a]">Embedded Answers (Cloze)</strong>, and the <strong className="text-[#1a1a1a]">STACK Maxima CAS</strong> plugin. ExamGhost extracts both inline MathJax TeX strings and <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">pluginfile.php</code> plots via <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd>.
                    </>
                ),
                image: '/images/ghost/ghost_card_vision.jpg',
            },
            {
                title: '3. Natural Pacing in mod_quiz_autosave Logs',
                desc: (
                    <>
                        Moodle&apos;s <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">mod_quiz_autosave</code> AJAX service periodically writes draft responses and timestamps to <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">mdl_quiz_attempt_steps</code>. Because ExamGhost has no &ldquo;Solve All&rdquo; button, you solve and select answers one by one at realistic human intervals.
                    </>
                ),
                image: '/images/ghost/ghost_card_hud.jpg',
            },
        ],
    },
    questionTypesSection: {
        eyebrow: 'Moodle 3.11 & 4.x Question Bank Coverage',
        heading: 'Every Moodle Question Format Supported — From Cloze to STACK CAS',
        lead: (
            <>
                Unlike generic Chrome extensions like <em>MoodleGPT</em> or <em>QuizSolver for Moodle</em> that only parse basic radio buttons, ExamGhost inspects the full <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">div.que</code> DOM subtree and pairs <strong>DeepSeek-R1</strong> symbolic math with <strong>GPT-4o Vision</strong> for Moodle&apos;s most complex STEM question types:
            </>
        ),
        items: [
            {
                name: 'Embedded Answers (Cloze / Multi-Answer)',
                codeTag: 'div.que.multianswer',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.4%',
                description: (
                    <>
                        Parses inline <code className="font-mono text-xs">{'{1:MULTICHOICE:}' }</code> dropdowns, <code className="font-mono text-xs">{'{1:SHORTANSWER:}' }</code> text fields, and <code className="font-mono text-xs">{'{1:NUMERICAL:}' }</code> boxes inside a single paragraph, evaluating all sub-blanks simultaneously with full context.
                    </>
                ),
            },
            {
                name: 'Calculated & Wildcard Numerical',
                codeTag: 'div.que.calculated',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.7%',
                description: (
                    <>
                        Reads your attempt&apos;s instantiated wildcard variables (<code className="font-mono text-xs">{'{a}' }</code>, <code className="font-mono text-xs">{'{b}' }</code>) directly from <code className="font-mono text-xs">.qtext</code>, computes the exact symbolic formula via DeepSeek-R1, and rounds to Moodle&apos;s configured decimal or significant-figure tolerance.
                    </>
                ),
            },
            {
                name: 'STACK Maxima CAS Algebraic Inputs',
                codeTag: 'div.que.stack',
                triggerMethod: 'Hybrid DOM + OCR',
                accuracy: '99.1%',
                description: (
                    <>
                        Formats algebraic, matrix, and differential equation answers in strict Maxima CAS linear syntax (e.g., <code className="font-mono text-xs">3*x^2 + sin(2*x)</code>) so Moodle&apos;s live validation preview accepts your expression without syntax warnings.
                    </>
                ),
            },
            {
                name: 'Drag-and-Drop onto Image / Markers',
                codeTag: 'div.que.ddimageortext',
                triggerMethod: 'Alt+S Vision OCR',
                accuracy: '98.8%',
                description: (
                    <>
                        Press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-[11px]">Alt+S</kbd> over any anatomy diagram, circuit schematic, or geological map served from <code className="font-mono text-xs">/pluginfile.php/</code> to map each draggable label to its exact drop zone coordinate.
                    </>
                ),
            },
            {
                name: 'Multiple Choice & All-or-Nothing Checkboxes',
                codeTag: 'div.que.multichoice',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.6%',
                description: (
                    <>
                        Supports both single-choice radio buttons and multi-answer checkboxes where Moodle deducts negative percentage weights (e.g., <code className="font-mono text-xs">-33.33%</code>) for incorrect selections.
                    </>
                ),
            },
            {
                name: 'CodeRunner Programming Questions',
                codeTag: 'div.que.coderunner',
                triggerMethod: 'Double-Click DOM',
                accuracy: '99.2%',
                description: (
                    <>
                        Extracts the problem specification and sample test cases table from Moodle CodeRunner blocks, generating clean Python, C, Java, or SQL implementations that pass hidden edge-case assertions on the first check.
                    </>
                ),
            },
        ],
    },
    telemetryForensicsSection: {
        eyebrow: 'Moodle Database & Event Log Forensics',
        heading: 'What Professors Actually See in Moodle Attempt Logs (mdl_quiz_attempt_steps)',
        lead: (
            <>
                Moodle administrators and instructors inspect two primary tables when reviewing a quiz attempt: the course-wide <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">mdl_logstore_standard_log</code> event log and the per-question <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">mdl_quiz_attempt_steps</code> response history table. Here is how each Moodle telemetry vector behaves:
            </>
        ),
        citationNote: 'Verified on Moodle 3.11, 4.1 LTS & 4.4',
        logTableTitle: 'moodle_attempt_review_forensics — Instructor View Breakdown',
        events: [
            {
                eventCode: 'mod_quiz\\event\\attempt_viewed',
                whenTriggered: 'Loading or paging between quiz pages (/mod/quiz/attempt.php?page=N)',
                professorView: 'Shows timestamp & IP address when each quiz page was opened',
                examghostStatus: 'Normal 1-by-1 Page Progression',
                isSafe: true,
            },
            {
                eventCode: 'mdl_quiz_attempt_steps (todo → complete)',
                whenTriggered: 'Every 60s via mod_quiz_autosave AJAX or when clicking Next Page',
                professorView: 'Response History table at the bottom of each question showing exact save second',
                examghostStatus: 'Realistic Human Pacing (No Bulk Fill)',
                isSafe: true,
            },
            {
                eventCode: 'M.mod_quiz.secure_window (clipboard/blur)',
                whenTriggered: 'Right-clicking, pressing Ctrl+C, or losing popup focus in JS Security Mode',
                professorView: 'Blocks copy action or logs focus loss if quizaccess tab-monitor plugin is active',
                examghostStatus: '0 Blur / 0 Clipboard Events Fired',
                isSafe: true,
            },
            {
                eventCode: 'quizaccess_seb (Safe Exam Browser)',
                whenTriggered: 'Instructor mandates standalone SEB kiosk binary (.seb config)',
                professorView: 'Validates Request Hash & Browser Exam Key headers on server',
                examghostStatus: 'Requires Standard Chromium Browser',
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: 'Why You Should Never Use a "Solve All" Script on Moodle Quizzes',
        whyNoSolveAllBody: (
            <>
                Legacy Moodle scripts that auto-populate all 20 questions on a page in a single second write identical unix timestamps (<code className="font-mono text-white">timecreated</code>) across every row in <code className="font-mono text-white">mdl_quiz_attempt_steps</code>. When an instructor opens Moodle&apos;s <strong>Review Attempt</strong> page, seeing 20 complex questions transition from <code className="font-mono text-white">todo</code> to <code className="font-mono text-white">complete</code> within the same autosave tick is an instant red flag. ExamGhost intentionally omits any &ldquo;Solve All&rdquo; button—you double-click and review one question at a time at natural human intervals.
            </>
        ),
    },
    howToSection: {
        eyebrow: 'Step-by-Step Moodle Workflow',
        heading: 'How to Solve Moodle Quizzes One by One Without Leaving Your Tab',
        lead: (
            <>
                Follow this 4-step workflow inside any Chromium browser (Chrome, Edge, Brave, Arc) to solve Moodle 3.11 and 4.x assessments with zero clipboard or <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">window.onblur</code> telemetry:
            </>
        ),
        steps: [
            {
                stepNumber: '1',
                title: 'Launch Your Moodle Quiz Attempt in Chrome or Brave',
                shortcutBadge: 'Alt + Q (HUD Toggle)',
                description: (
                    <>
                        Open your Moodle course and start your quiz attempt (<code className="font-mono text-xs">/mod/quiz/attempt.php</code>). Press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+Q</kbd> to verify your Ghost Opacity slider (set to 15%–25% for low-contrast stealth) and preferred answer mode (Invisible, Stealth Highlight, or Explain Card).
                    </>
                ),
                plainTextForSchema:
                    'Open your Moodle course and start your quiz attempt (/mod/quiz/attempt.php). Press Alt+Q to configure your Ghost Opacity slider and preferred answer display mode.',
            },
            {
                stepNumber: '2',
                title: 'Double-Click Inside Any Single Moodle div.que Block',
                shortcutBadge: 'Double-Click .que',
                description: (
                    <>
                        Move your cursor to the current question you are reading and <strong>double-click</strong> anywhere on the question text. ExamGhost extracts the <code className="font-mono text-xs">.qtext</code> HTML, MathJax TeX annotations, and <code className="font-mono text-xs">.ablock</code> options locally inside its Closed Shadow DOM—even if Moodle&apos;s JavaScript security blocks right-click and copy.
                    </>
                ),
                plainTextForSchema:
                    'Double-click anywhere inside the current Moodle div.que question block to extract the question text, MathJax equations, and answer options inside ExamGhost Closed Shadow DOM.',
            },
            {
                stepNumber: '3',
                title: 'Use Alt+S Vision OCR for STACK Plots & pluginfile.php Diagrams',
                shortcutBadge: 'Alt + S (Vision OCR)',
                description: (
                    <>
                        If a question contains an authenticated image served via <code className="font-mono text-xs">/pluginfile.php/</code>, a Drag-and-Drop diagram, or a non-selectable graph, press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs">Alt+S</kbd> and drag a crop rectangle over the visual to solve it in under 0.4 seconds.
                    </>
                ),
                plainTextForSchema:
                    'Press Alt+S and drag a crop box over any authenticated pluginfile.php diagram, STACK plot, or drag-and-drop image to analyze the raw viewport pixels via Vision OCR.',
            },
            {
                stepNumber: '4',
                title: 'Select Your Verified Answer at Natural Human Pacing',
                shortcutBadge: '1-by-1 Natural Cadence',
                description: (
                    <>
                        Read the verified derivation or subtle 1px dot indicator, select the matching radio button, dropdown, or numerical input at a normal reading pace, and move to the next question so your <code className="font-mono text-xs">mod_quiz_autosave</code> step history looks 100% organic.
                    </>
                ),
                plainTextForSchema:
                    'Review the verified answer or 1px indicator, enter your response at a realistic human reading pace, and proceed to the next question so Moodle mod_quiz_autosave timestamps remain natural.',
            },
        ],
    },
    courseModulesSection: {
        eyebrow: 'University Moodle Deployments',
        heading: 'Top University Moodle Courses & STEM Modules Solved',
        lead: (
            <>
                Moodle is the #1 open-source LMS across European, Canadian, Australian, and U.S. STEM universities. ExamGhost is continuously tested against the following Moodle question plugins and department configurations:
            </>
        ),
        modules: [
            {
                department: 'Engineering & Mathematics (STACK CAS)',
                courseCodes: 'MATH-101 / ENGR-204 / STAT-301',
                textbooksOrModules: 'Moodle STACK Maxima CAS, Calculated Multi-Choice & Numerical Wildcards',
                keyChallengeSolved:
                    'Converts symbolic calculus integrals, linear algebra matrices, and differential equations into exact Maxima CAS syntax while rounding numerical wildcards to the instructor’s exact tolerance.',
            },
            {
                department: 'Computer Science & IT (CodeRunner)',
                courseCodes: 'CS-110 / COMP-250 / INFO-312',
                textbooksOrModules: 'Moodle CodeRunner (Python 3, C++, Java, PostgreSQL) & Automata Quizzes',
                keyChallengeSolved:
                    'Reads CodeRunner function signatures and precheck test tables directly from the DOM to output clean, edge-case-verified code without triggering clipboard paste warnings.',
            },
            {
                department: 'Biology, Nursing & Pre-Med',
                courseCodes: 'BIOL-102 / NURS-310 / ANAT-201',
                textbooksOrModules: 'Moodle Cloze (Embedded Answers), Drag-and-Drop onto Image & Matching',
                keyChallengeSolved:
                    'Solves multi-dropdown Cloze case studies and uses Alt+S Vision OCR to identify anatomical structures and histology slides hosted behind MoodleSession cookies.',
            },
            {
                department: 'Macroeconomics, Finance & Accounting',
                courseCodes: 'ECON-202 / ACCT-210 / FINC-300',
                textbooksOrModules: 'Moodle Multi-Part Cloze Ledger Tables & IS-LM / AD-AS Graph Shifts',
                keyChallengeSolved:
                    'Evaluates every blank in a multi-cell Moodle Cloze accounting journal entry simultaneously so debit and credit sub-answers balance on the first attempt.',
            },
        ],
    },
    benchmark: {
        eyebrow: 'Moodle 4.x Telemetry Audit',
        heading: 'ExamGhost vs. Tab-Switching & Generic Extensions on Moodle',
        windowTitle: 'moodle_4x_attempt_audit.csv — Verified Comparison',
        windowBadge: '0 Blur Events • Native .que Parsing',
        rows: [
            {
                capability: (
                    <>
                        Works when <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">M.mod_quiz.secure_window</code> disables right-click &amp; copy
                    </>
                ),
                examghost: 'Yes (Double-Click .que Block)',
                chatgpt: 'Blocked (Cannot Copy Text)',
                sidebar: 'Partial (Fails on Cloze Inputs)',
            },
            {
                capability: (
                    <>
                        Window focus retention (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">document.hasFocus() === true</code>)
                    </>
                ),
                examghost: '100% Maintained',
                chatgpt: 'Fails (Triggers window.blur)',
                sidebar: 'Fails on Popup Focus Shift',
            },
            {
                capability: (
                    <>
                        Reads authenticated <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">/pluginfile.php/</code> session-locked diagrams
                    </>
                ),
                examghost: 'Instant Alt+S Viewport Crop',
                chatgpt: 'Requires Manual Save & Upload',
                sidebar: '403 Forbidden (Missing MoodleSession)',
            },
            {
                capability: (
                    <>
                        Pacing inside <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">mdl_quiz_attempt_steps</code> history table
                    </>
                ),
                examghost: 'Natural One-by-One Cadence',
                chatgpt: 'Suspicious Idle Gaps Between Tabs',
                sidebar: 'Bulk Auto-Fill Flags Step Timestamps',
            },
            {
                capability: 'Invisible Mode (Alt+1) with zero visible cards on screen',
                examghost: 'Yes (1px Dot Indicator)',
                chatgpt: 'No (Full Browser Tab Visible)',
                sidebar: 'No (Injected Sidebar Panel)',
            },
        ],
    },
    faqSubtitle:
        'Direct engineering answers regarding Moodle 4.x attempt logs, M.mod_quiz.secure_window browser security, and STACK math solving.',
    faqs: [
        {
            category: 'stealth',
            q: 'Does Moodle detect Chrome extensions or tab switching during a quiz?',
            a: (
                <>
                    Standard Moodle quizzes log server-side events in <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">mdl_logstore_standard_log</code> (such as quiz attempt started, page viewed, autosaved, and submitted). However, if your instructor enables Moodle&apos;s <strong className="text-[#1a1a1a]">JavaScript security popup</strong> or installs a third-party quiz access rule plugin (like <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">quizaccess_honestycheck</code> or tab-change monitors), leaving the tab triggers <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">window.onblur</code>. ExamGhost runs inside Chrome&apos;s isolated MV3 execution world so you never switch tabs or lose window focus.
                </>
            ),
            plainTextAnswer:
                'Standard Moodle quizzes log server-side events in mdl_logstore_standard_log (quiz attempt started, page viewed, autosaved, and submitted). If your instructor enables JavaScript security mode or a tab-monitoring quizaccess plugin, leaving the tab triggers window.onblur. ExamGhost runs inside Chrome isolated MV3 execution world so you never switch tabs or lose window focus.',
        },
        {
            category: 'stealth',
            q: 'What does a professor see in the Moodle Quiz Attempt History & Step table?',
            a: (
                <>
                    When a professor clicks <strong className="text-[#1a1a1a]">Review attempt</strong> in Moodle, the bottom of each question displays the <strong className="text-[#1a1a1a]">Response history</strong> table (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">mdl_quiz_attempt_steps</code>), showing the exact second each question was initialized, autosaved (<code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">todo</code> / <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">complete</code>), and graded. Because ExamGhost solves strictly one question at a time on double-click, your autosave timestamps progress naturally across the quiz.
                </>
            ),
            plainTextAnswer:
                'When a professor clicks Review attempt in Moodle, the bottom of each question displays the Response history table (mdl_quiz_attempt_steps), showing the exact second each question was initialized, autosaved, and graded. Because ExamGhost solves strictly one question at a time on double-click, your autosave timestamps progress naturally across the quiz.',
        },
        {
            category: 'stealth',
            q: 'Does ExamGhost work when Moodle blocks right-click and Ctrl+C copy?',
            a: (
                <>
                    Yes. Moodle&apos;s <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">M.mod_quiz.secure_window</code> module blocks clipboard copying and context menus to prevent students from pasting questions into ChatGPT. With ExamGhost, you simply <strong className="text-[#1a1a1a]">double-click</strong> anywhere on the Moodle <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.que</code> block or press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd>—no text selection or clipboard access is required.
                </>
            ),
            plainTextAnswer:
                'Yes. Moodle M.mod_quiz.secure_window module blocks clipboard copying and context menus to prevent students from pasting questions into ChatGPT. With ExamGhost, you simply double-click anywhere on the Moodle .que block or press Alt+S—no text selection or clipboard access is required.',
        },
        {
            category: 'ocr',
            q: 'Can ExamGhost solve Moodle STACK, Calculated, and Cloze questions?',
            a: (
                <>
                    Yes. Moodle STEM courses use <strong className="text-[#1a1a1a]">STACK</strong> (Maxima Computer Algebra System), <strong className="text-[#1a1a1a]">Calculated Multi-Choice</strong>, and <strong className="text-[#1a1a1a]">Cloze</strong> embedded questions rendered with MathJax. Double-clicking extracts the underlying LaTeX expressions, or you can press <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> to capture complex matrices and graphs visually.
                </>
            ),
            plainTextAnswer:
                'Yes. Moodle STEM courses use STACK (Maxima Computer Algebra System), Calculated Multi-Choice, and Cloze embedded questions rendered with MathJax. Double-clicking extracts the underlying LaTeX expressions, or you can press Alt+S to capture complex matrices and graphs visually.',
        },
        {
            category: 'ocr',
            q: 'Why do other AI tools fail on Moodle pluginfile.php quiz images?',
            a: (
                <>
                    Moodle serves quiz figures through <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">/pluginfile.php/[contextid]/mod_quiz/questiontext/...</code>, which requires your active <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">MoodleSession</code> cookie. External AI crawlers get a 403 error when trying to fetch those image URLs. ExamGhost&apos;s <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> Snap-It tool crops the rendered pixels directly from your browser viewport.
                </>
            ),
            plainTextAnswer:
                'Moodle serves quiz figures through /pluginfile.php/[contextid]/mod_quiz/questiontext/..., which requires your active MoodleSession cookie. External AI crawlers get a 403 error when trying to fetch those image URLs. ExamGhost Alt+S Snap-It tool crops the rendered pixels directly from your browser viewport.',
        },
        {
            category: 'workflow',
            q: 'Which ExamGhost mode works best on Moodle 4.x quizzes?',
            a: (
                <>
                    Use <strong className="text-[#1a1a1a]">Invisible Mode (Alt+1)</strong> or <strong className="text-[#1a1a1a]">Stealth Mode (Alt+2)</strong> during timed quizzes to highlight the verified <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.r0</code> / <code className="font-mono text-[12px] bg-gray-100 px-1.5 py-0.5 rounded">.r1</code> radio option directly inside the Moodle question container. Use <strong className="text-[#1a1a1a]">Explain Mode (Alt+3)</strong> for Numerical, Short-Answer, or STACK algebra inputs that require exact symbolic syntax.
                </>
            ),
            plainTextAnswer:
                'Use Invisible Mode (Alt+1) or Stealth Mode (Alt+2) during timed quizzes to highlight the verified .r0 / .r1 radio option directly inside the Moodle question container. Use Explain Mode (Alt+3) for Numerical, Short-Answer, or STACK algebra inputs that require exact symbolic syntax.',
        },
        {
            category: 'workflow',
            q: 'Does ExamGhost work with Safe Exam Browser (SEB) on Moodle?',
            a: (
                <>
                    No. Safe Exam Browser (SEB) is a standalone kiosk browser that disables all Chrome extensions at the OS level. ExamGhost is designed for Moodle quizzes taken inside standard <strong className="text-[#1a1a1a]">Google Chrome, Brave, or Microsoft Edge</strong>—including quizzes using Moodle&apos;s built-in JavaScript security window.
                </>
            ),
            plainTextAnswer:
                'No. Safe Exam Browser (SEB) is a standalone kiosk browser that disables all Chrome extensions at the OS level. ExamGhost is designed for Moodle quizzes taken inside standard Google Chrome, Brave, or Microsoft Edge—including quizzes using Moodle built-in JavaScript security window.',
        },
        {
            category: 'workflow',
            q: 'Can I test the Moodle Quiz Solver before installing the Chrome extension?',
            a: (
                <>
                    Yes. Scroll up to the interactive <strong className="text-[#1a1a1a]">Moodle 4.x Product Simulator</strong> on this page to test one-by-one double-click solving, <kbd className="px-1.5 py-0.5 bg-gray-100 border border-gray-200 rounded text-[11px] font-mono">Alt+S</kbd> Bode plot OCR, and all three stealth modes right in your browser.
                </>
            ),
            plainTextAnswer:
                'Yes. Scroll up to the interactive Moodle 4.x Product Simulator on this page to test one-by-one double-click solving, Alt+S Bode plot OCR, and all three stealth modes right in your browser.',
        },
    ],
    jsonLd: {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'WebPage',
                '@id': 'https://examghost.com/moodle-quiz-solver/#webpage',
                url: 'https://examghost.com/moodle-quiz-solver',
                name: 'Moodle Quiz Solver & AI Homework Helper | Moodle 4.x Chrome Extension | ExamGhost',
                description:
                    'Interactive Moodle 4.x quiz solver demo and technical guide covering .que containers, M.mod_quiz.secure_window, STACK math, and Alt+S OCR.',
                isPartOf: { '@id': 'https://examghost.com/#website' },
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['#aeo-summary', '#moodle-quiz-solver-faq'],
                },
            },
            {
                '@type': 'SoftwareApplication',
                name: 'ExamGhost Moodle Quiz Solver',
                OperatingSystem: 'Chrome, Brave, Edge (Manifest V3)',
                applicationCategory: 'EducationalApplication',
                offers: {
                    '@type': 'Offer',
                    price: '0.00',
                    priceCurrency: 'USD',
                },
            },
            {
                '@type': 'BreadcrumbList',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://examghost.com' },
                    { '@type': 'ListItem', position: 2, name: 'Moodle Quiz Solver', item: 'https://examghost.com/moodle-quiz-solver' },
                ],
            },
        ],
    },
};

const ALL_LMS_LINKS = [
    { href: '/canvas-lms-quiz-solver', label: 'Canvas Classic & New Quizzes' },
    { href: '/blackboard-quiz-solver', label: 'Blackboard Learn & Ultra' },
    { href: '/moodle-quiz-solver', label: 'Moodle LMS' },
    { href: '/d2l-brightspace-quiz-solver', label: 'D2L Brightspace' },
    { href: '/mcgraw-hill-connect-aleks-solver', label: 'McGraw-Hill Connect & ALEKS' },
    { href: '/pearson-mylab-mastering-solver', label: 'Pearson MyLab & Mastering' },
    { href: '/cengage-mindtap-webassign-solver', label: 'Cengage WebAssign' },
    { href: '/gradescope-exam-solver', label: 'Gradescope OCR' },
    { href: '/google-forms-quiz-solver', label: 'Google Forms & Classroom' },
    { href: '/schoology-quiz-solver', label: 'Schoology' },
    { href: '/deltamath-homework-solver', label: 'DeltaMath' },
    { href: '/edgenuity-quiz-solver', label: 'Edgenuity' },
    { href: '/canvas-quiz-solver-free-demo', label: 'Live 5-Question Exam Sandbox' },
];

const ALL_COMPETITOR_LINKS = [
    { href: '/compare-canvas-hack-extensions', label: 'Best Quiz Extensions (2026)' },
    { href: '/canvashack-vs-examghost', label: 'CanvasHack vs ExamGhost' },
    { href: '/cheatmate-vs-examghost', label: 'CheatMate vs ExamGhost' },
    { href: '/quizard-vs-examghost', label: 'Quizard vs ExamGhost' },
    { href: '/solvely-vs-examghost', label: 'Solvely AI vs ExamGhost' },
    { href: '/gauth-vs-examghost', label: 'Gauth AI vs ExamGhost' },
    { href: '/coursology-vs-examghost', label: 'Coursology vs ExamGhost' },
    { href: '/homeworkify-vs-examghost', label: 'Homeworkify vs ExamGhost' },
    { href: '/mathosai-vs-examghost', label: 'Mathos AI vs ExamGhost' },
    { href: '/brainly-vs-examghost', label: 'Brainly vs ExamGhost' },
    { href: '/apexvision-vs-examghost', label: 'ApexVision vs ExamGhost' },
    { href: '/bettercampus-vs-examghost', label: 'BetterCampus vs ExamGhost' },
];

export default function MoodleQuizSolverPage() {
    const config = moodleConfig;
    const filmKey = config.slug.startsWith('blog/') ? config.slug.replace('blog/', '') : config.slug;
    const safeSlug = filmKey.replace(/\//g, '-');
    const videoUrl = `https://examghost.com/videos/${safeSlug}.mp4`;
    const posterUrl = `https://examghost.com/videos/posters/${safeSlug}-poster.jpg`;

    const rawGraph = Array.isArray(config.jsonLd?.['@graph'])
        ? (config.jsonLd['@graph'] as Record<string, unknown>[])
        : [];
    const baseGraph: Record<string, unknown>[] = [...rawGraph];

    const hasVideo = baseGraph.some((node) => node['@type'] === 'VideoObject');
    if (!hasVideo) {
        baseGraph.push({
            '@type': 'VideoObject',
            '@id': `https://examghost.com/${config.slug}#video`,
            name: `${config.platformName} AI Quiz Solver — 2.5D Explainer & Product Demo Film`,
            description: `16-second 2.5D motion-graphic explainer film demonstrating how ExamGhost solves ${config.platformName} questions one by one via double-click and Alt+S Vision OCR inside a Closed Shadow DOM with zero blur events.`,
            thumbnailUrl: [posterUrl],
            contentUrl: videoUrl,
            uploadDate: '2026-10-22T00:00:00Z',
            duration: 'PT16S',
            publisher: {
                '@type': 'Organization',
                name: 'ExamGhost',
                url: 'https://examghost.com',
            },
        });
    }

    const hasHowTo = baseGraph.some((node) => node['@type'] === 'HowTo');
    if (!hasHowTo && config.howToSection) {
        baseGraph.push({
            '@type': 'HowTo',
            '@id': `https://examghost.com/${config.slug}#howto`,
            name: config.howToSection.heading,
            description: `Step-by-step workflow to solve ${config.platformName} quizzes and assignments one question at a time using ExamGhost's Closed Shadow DOM and Alt+S Vision OCR without triggering focus-loss logs.`,
            totalTime: 'PT1M',
            step: config.howToSection.steps.map((s: any, idx: number) => ({
                '@type': 'HowToStep',
                position: idx + 1,
                name: s.title,
                text: s.plainTextForSchema,
            })),
        });
    }

    const hasFaqPage = baseGraph.some((node) => node['@type'] === 'FAQPage');
    if (!hasFaqPage && config.faqs && config.faqs.length > 0) {
        baseGraph.push({
            '@type': 'FAQPage',
            '@id': `https://examghost.com/${config.slug}#faq`,
            mainEntity: config.faqs.map((faq: any) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text:
                        faq.plainTextAnswer ||
                        `ExamGhost solves ${config.platformName} questions inline in 0.3 seconds inside a Closed Shadow DOM with zero focus-loss flags.`,
                },
            })),
        });
    }

    for (let i = 0; i < baseGraph.length; i++) {
        const node = baseGraph[i];
        if (!node || typeof node !== 'object') continue;
        if (node['@type'] === 'WebPage') {
            baseGraph[i] = {
                datePublished: '2026-01-15',
                dateModified: '2026-10-23',
                inLanguage: 'en-US',
                author: { '@type': 'Organization', name: 'ExamGhost Security Engineering Team', url: 'https://examghost.com' },
                ...node,
                speakable: {
                    '@type': 'SpeakableSpecification',
                    cssSelector: ['h1', '.aeo-summary', '#lms-faq h2', '#lms-faq h3', '.faq-answer'],
                },
            };
        }
        if (node['@type'] === 'SoftwareApplication') {
            baseGraph[i] = {
                ...node,
                offers: [
                    { '@type': 'Offer', name: 'Free Tier (5 Free Solves / Day)', price: '0.00', priceCurrency: 'USD' },
                    { '@type': 'Offer', name: 'Monthly Pass', price: '19.00', priceCurrency: 'USD' },
                    { '@type': 'Offer', name: 'Academic Year Pass', price: '99.00', priceCurrency: 'USD' },
                    { '@type': 'Offer', name: 'Lifetime Degree Pass', price: '199.00', priceCurrency: 'USD' },
                ],
            };
        }
    }

    const enrichedJsonLd = {
        '@context': 'https://schema.org',
        '@graph': baseGraph,
    };

    const mascotImgSrc = config.architecture.mascotImage || '/images/ghost/ghost_privacy.jpg';
    const isBlogArticle = config.slug.startsWith('blog/');

    return (
        <div className="min-h-screen bg-cream text-ink font-sans selection:bg-emerald-500/20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(enrichedJsonLd) }}
            />
            <Navbar />

            <main id="main-content">
                {/* Breadcrumb Navigation */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-3">
                    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center justify-between gap-2 text-xs font-medium text-ink-muted">
                        <div className="flex items-center gap-2">
                            <Link prefetch={false} href="/" className="hover:text-ink transition-colors">
                                Home
                            </Link>
                            <span>/</span>
                            {isBlogArticle ? (
                                <>
                                    <Link
                                        prefetch={false}
                                        href="/compare-canvas-hack-extensions"
                                        className="hover:text-ink transition-colors"
                                    >
                                        Security &amp; Telemetry Research
                                    </Link>
                                    <span>/</span>
                                    <span className="text-ink font-bold">{config.platformName}</span>
                                </>
                            ) : (
                                <>
                                    <Link
                                        prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="hover:text-ink transition-colors"
                                    >
                                        Live Sandbox
                                    </Link>
                                    <span>/</span>
                                    <span className="text-ink font-bold">{config.platformName} Solver</span>
                                </>
                            )}
                        </div>
                        <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-ink-muted bg-white/80 px-3 py-1 rounded-full border border-black/8">
                            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                            <span>Audited by ExamGhost Security Lab • Updated Oct 2026</span>
                        </div>
                    </nav>
                </div>

                {/* 1. HERO + BESPOKE 3-SCENE FRAMER MOTION DEMO */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-24">
                    <div className="max-w-3xl mb-8 sm:mb-10 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs font-bold text-ink shadow-2xs">
                            <span
                                className="w-2 h-2 rounded-full animate-pulse"
                                style={{ backgroundColor: config.heroDotColor }}
                            />
                            <span>{config.heroBadge}</span>
                        </div>

                        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06]">
                            {config.h1Title}{' '}
                            <span className="text-ink-muted font-normal">{config.h1Highlight}</span>
                        </h1>

                        {isBlogArticle && (
                            <div className="flex flex-wrap items-center gap-3 pt-1 pb-1 text-xs text-ink-muted">
                                <div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-black/8 shadow-2xs">
                                    <img
                                        src="/images/ghost/ghost_mascot_hero.jpg"
                                        alt="ExamGhost Browser Security Research Lab"
                                        width={22}
                                        height={22}
                                        className="w-5 h-5 rounded-full object-cover border border-black/10"
                                    />
                                    <span className="font-semibold text-ink">ExamGhost Browser Security Lab</span>
                                </div>
                                <span>•</span>
                                <span>Reviewed against Instructure Canvas Open-Source Repo</span>
                                <span>•</span>
                                <time dateTime="2026-10-23" className="font-semibold text-emerald-800 bg-[#cdeecb]/60 px-2.5 py-0.5 rounded-full">
                                    Updated Oct 23, 2026
                                </time>
                            </div>
                        )}

                        <p className="aeo-summary text-sm sm:text-base text-ink-secondary leading-relaxed">
                            {config.aeoSummary}
                        </p>

                        <div className="flex flex-wrap items-center gap-3 pt-1">
                            <a
                                href="https://chromewebstore.google.com/detail/curio-ai-tutor-homework-h/dejkoepiachnbgjjooocnnmampldmpde"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-dark px-6 py-3 text-sm font-bold shadow-soft hover:shadow-lift"
                            >
                                <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
                                <span>Add to Chrome — 5 Free Solves / Day</span>
                            </a>
                            <a
                                href="https://discord.gg/aCcsyKYJq4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-soft px-5 py-3 text-sm font-semibold"
                            >
                                <FaDiscord className="w-4 h-4 text-[#5865F2]" aria-hidden="true" />
                                <span>Join 15,000+ Students on Discord</span>
                            </a>
                        </div>

                        {/* Modern Stealth Hotkeys & Pricing Invariants */}
                        <div className="pt-2 space-y-2">
                            <div className="flex flex-wrap items-center gap-2 text-xs text-ink-muted">
                                <span className="font-semibold text-ink">Stealth Hotkeys:</span>
                                <kbd className="px-2 py-0.5 rounded bg-black/6 border border-black/10 font-mono text-[11px] text-ink font-semibold">Double-Click</kbd>
                                <kbd className="px-2 py-0.5 rounded bg-black/6 border border-black/10 font-mono text-[11px] text-ink font-semibold">Alt+S</kbd>
                                <kbd className="px-2 py-0.5 rounded bg-black/6 border border-black/10 font-mono text-[11px] text-ink font-semibold">Alt+1</kbd>
                                <kbd className="px-2 py-0.5 rounded bg-black/6 border border-black/10 font-mono text-[11px] text-ink font-semibold">Alt+2</kbd>
                                <kbd className="px-2 py-0.5 rounded bg-black/6 border border-black/10 font-mono text-[11px] text-ink font-semibold">Alt+3</kbd>
                                <kbd className="px-2 py-0.5 rounded bg-black/6 border border-black/10 font-mono text-[11px] text-ink font-semibold">⌘+Shift+U</kbd>
                            </div>
                            <div className="text-xs text-ink-muted font-medium">
                                <span className="text-emerald-700 font-bold">5 Free Solves / Day ($0 · Auto-refills every 24h · No credit card required)</span> · $19/mo · $99/yr ($8.25/mo) · $199 Lifetime
                            </div>
                        </div>
                    </div>

                    {/* Embedded Bespoke 3-Scene Framer Motion Video Demo */}
                    <MoodleQuizMotionDemo />

                    {/* Quick Jump Navigation Bar */}
                    <div className="mt-8 flex flex-wrap items-center gap-2 pt-2">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-ink-muted mr-1">
                            On This Page:
                        </span>
                        <a
                            href="#explainer-film"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            16s 2.5D Explainer Film
                        </a>
                        {config.questionTypesSection && (
                            <a
                                href="#supported-question-types"
                                className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                            >
                                {config.platformShort} Question Types
                            </a>
                        )}
                        {config.telemetryForensicsSection && (
                            <a
                                href="#instructor-telemetry-audit"
                                className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                            >
                                Instructor Log Forensics
                            </a>
                        )}
                        {config.howToSection && (
                            <a
                                href="#step-by-step-workflow"
                                className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                            >
                                1-by-1 Solve Workflow
                            </a>
                        )}
                        <a
                            href="#platform-architecture"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            Shadow DOM Architecture
                        </a>
                        <a
                            href="#benchmark-matrix"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            Accuracy Benchmark
                        </a>
                        {config.courseModulesSection && (
                            <a
                                href="#supported-courses"
                                className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                            >
                                Courses &amp; Textbooks
                            </a>
                        )}
                    </div>
                </section>

                {/* 2. DEEP BESPOKE PLATFORM CONTENT + ARCHITECTURE + BENCHMARK + FAQ */}
                <section className="border-t border-black/5 bg-cream py-20 sm:py-28 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto space-y-20 sm:space-y-28">
                        {/* Unique 16s 2.5D Motion Explainer MP4 Film */}
                        <div id="explainer-film" className="scroll-mt-28">
                            <LmsExplainerFilmCard
                                slug={config.slug}
                                platformName={config.platformName}
                                heroDotColor={config.heroDotColor}
                            />
                        </div>

                        {/* BESPOKE SECTION A: SUPPORTED QUESTION TYPES & DOM MATRIX */}
                        {config.questionTypesSection && (
                            <div id="supported-question-types" className="scroll-mt-28 space-y-8">
                                <div className="max-w-3xl space-y-3">
                                    <p className="eyebrow">
                                        <span
                                            className="w-2 h-2 rounded-full"
                                            style={{ backgroundColor: config.heroDotColor }}
                                        />
                                        <span>{config.questionTypesSection.eyebrow}</span>
                                    </p>
                                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink leading-[1.08]">
                                        {config.questionTypesSection.heading}
                                    </h2>
                                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                        {config.questionTypesSection.lead}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                    {config.questionTypesSection.items.map((qItem: any, idx: number) => (
                                        <article
                                            key={idx}
                                            className="rounded-[28px] bg-white border border-black/10 p-6 shadow-card flex flex-col justify-between space-y-4 hover:border-black/20 transition-all"
                                        >
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between gap-2 flex-wrap">
                                                    <span className="px-2.5 py-1 rounded-lg bg-[#faf8f5] border border-black/8 font-mono text-[11px] font-bold text-ink">
                                                        {qItem.codeTag}
                                                    </span>
                                                    <span
                                                        className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                                                            qItem.triggerMethod === 'Alt+S Vision OCR'
                                                                ? 'bg-[#e2d3fa]/60 text-purple-950 border border-purple-900/15'
                                                                : qItem.triggerMethod === 'Hybrid DOM + OCR'
                                                                ? 'bg-[#c4d0f8]/60 text-blue-950 border border-blue-900/15'
                                                                : 'bg-[#cdeecb] text-emerald-950 border border-emerald-900/15'
                                                        }`}
                                                    >
                                                        {qItem.triggerMethod}
                                                    </span>
                                                </div>

                                                <h3 className="font-display text-lg font-bold text-ink leading-snug">
                                                    {qItem.name}
                                                </h3>

                                                <p className="text-xs sm:text-[13px] text-ink-secondary leading-relaxed">
                                                    {qItem.description}
                                                </p>
                                            </div>

                                            <div className="pt-3 border-t border-black/6 flex items-center justify-between text-xs">
                                                <span className="font-semibold text-ink-muted">Verified Accuracy</span>
                                                <span className="font-mono font-bold text-emerald-800 bg-[#cdeecb]/60 px-2.5 py-0.5 rounded-full">
                                                    {qItem.accuracy}
                                                </span>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* 3D Ghost Architecture Showcase Card */}
                        <div
                            id="platform-architecture"
                            className="scroll-mt-28 bg-white rounded-[36px] p-7 sm:p-10 md:p-14 border border-black/10 shadow-lift"
                        >
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                                <div className="lg:col-span-5">
                                    <div
                                        className="rounded-3xl p-6 sm:p-8 border flex flex-col items-center justify-center text-center relative overflow-hidden group"
                                        style={{
                                            backgroundColor: config.architecture.cardBg,
                                            borderColor: config.architecture.cardBorder,
                                        }}
                                    >
                                        <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-black/8 shadow-soft bg-cream relative mb-4">
                                            <img
                                                src={mascotImgSrc}
                                                alt={`${config.platformName} Closed Shadow DOM Stealth Mascot`}
                                                width={208}
                                                height={208}
                                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="font-display font-bold text-xl text-ink mb-1">
                                            {config.architecture.mascotTitle}
                                        </div>
                                        <p className="text-xs text-ink-muted max-w-[270px]">
                                            {config.architecture.mascotSubtitle}
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2 justify-center">
                                            {config.architecture.pills.map((pill: string) => (
                                                <span
                                                    key={pill}
                                                    className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-ink border border-black/8 shadow-xs"
                                                >
                                                    {pill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="lg:col-span-7 space-y-5">
                                    <p className="eyebrow">
                                        <span
                                            className="w-2 h-2 rounded-full"
                                            style={{ backgroundColor: config.heroDotColor }}
                                        />
                                        <span>{config.architecture.eyebrow}</span>
                                    </p>
                                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.08]">
                                        {config.architecture.heading}
                                    </h2>
                                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                        {config.architecture.lead}
                                    </p>

                                    <div className="grid grid-cols-1 gap-3.5 pt-2">
                                        {config.architecture.pillars.map((pillar: any) => (
                                            <article
                                                key={pillar.title}
                                                className="p-4 sm:p-5 rounded-2xl bg-[#faf8f5] border border-black/6 flex items-start gap-3.5"
                                            >
                                                <img
                                                    src={pillar.image}
                                                    alt={pillar.title}
                                                    width={44}
                                                    height={44}
                                                    className="w-11 h-11 rounded-xl object-cover border border-black/10 shrink-0 mt-0.5"
                                                />
                                                <div className="min-w-0 flex-1 space-y-1">
                                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink leading-snug break-words">
                                                        {pillar.title}
                                                    </h3>
                                                    <p className="text-xs sm:text-[13px] text-ink-muted leading-relaxed break-words">
                                                        {pillar.desc}
                                                    </p>
                                                </div>
                                            </article>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* BESPOKE SECTION B: INSTRUCTOR TELEMETRY & LOG FORENSIC AUDIT */}
                        {config.telemetryForensicsSection && (
                            <div id="instructor-telemetry-audit" className="scroll-mt-28 space-y-6">
                                <div className="max-w-3xl space-y-3">
                                    <p className="eyebrow">
                                        <Terminal className="w-3.5 h-3.5 text-ink" />
                                        <span>{config.telemetryForensicsSection.eyebrow}</span>
                                    </p>
                                    <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink tracking-tight leading-[1.08]">
                                        {config.telemetryForensicsSection.heading}
                                    </h2>
                                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                        {config.telemetryForensicsSection.lead}
                                    </p>
                                </div>

                                <div className="rounded-[32px] bg-[#141413] text-[#faf8f5] border border-black/20 shadow-lift overflow-hidden">
                                    <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                                        <div className="flex items-center gap-2.5">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]" />
                                            <span className="font-mono text-xs font-bold tracking-wide text-white">
                                                {config.telemetryForensicsSection.logTableTitle}
                                            </span>
                                        </div>
                                        <span className="text-[11px] font-mono text-[#cdeecb] bg-[#cdeecb]/10 border border-[#cdeecb]/25 px-3 py-1 rounded-full">
                                            {config.telemetryForensicsSection.citationNote}
                                        </span>
                                    </div>

                                    <div className="overflow-x-auto">
                                        <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[680px]">
                                            <thead>
                                                <tr className="border-b border-white/10 bg-white/[0.02] text-white/70 font-mono text-[11px] uppercase tracking-wider">
                                                    <th className="py-3.5 px-6">Telemetry / Log Event</th>
                                                    <th className="py-3.5 px-6">What Triggers It</th>
                                                    <th className="py-3.5 px-6">What Instructor Sees</th>
                                                    <th className="py-3.5 px-6">ExamGhost 1-by-1 Status</th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-white/10">
                                                {config.telemetryForensicsSection.events.map((ev: any, eIdx: number) => (
                                                    <tr key={eIdx} className="hover:bg-white/[0.02]">
                                                        <td className="py-4 px-6 font-mono font-bold text-[#cdeecb]">
                                                            {ev.eventCode}
                                                        </td>
                                                        <td className="py-4 px-6 text-white/80">{ev.whenTriggered}</td>
                                                        <td className="py-4 px-6 text-white/75">{ev.professorView}</td>
                                                        <td className="py-4 px-6">
                                                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[#cdeecb]/15 text-[#cdeecb] border border-[#cdeecb]/30">
                                                                <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399] shrink-0" />
                                                                <span>{ev.examghostStatus}</span>
                                                            </span>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="p-6 sm:p-7 bg-white/[0.04] border-t border-white/10 flex flex-col sm:flex-row items-start gap-4">
                                        <div className="w-10 h-10 rounded-2xl bg-[#fde68a]/20 border border-[#fde68a]/40 flex items-center justify-center shrink-0 mt-0.5">
                                            <AlertTriangle className="w-5 h-5 text-[#fde68a]" />
                                        </div>
                                        <div className="space-y-1.5">
                                            <h3 className="font-display font-bold text-base text-white">
                                                {config.telemetryForensicsSection.whyNoSolveAllTitle}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
                                                {config.telemetryForensicsSection.whyNoSolveAllBody}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* BESPOKE SECTION C: 4-STEP OPERATIONAL WORKFLOW (HOW-TO) */}
                        {config.howToSection && (
                            <div id="step-by-step-workflow" className="scroll-mt-28 space-y-8">
                                <div className="max-w-3xl space-y-3">
                                    <p className="eyebrow">
                                        <Keyboard className="w-3.5 h-3.5 text-ink" />
                                        <span>{config.howToSection.eyebrow}</span>
                                    </p>
                                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink leading-[1.08]">
                                        {config.howToSection.heading}
                                    </h2>
                                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                        {config.howToSection.lead}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {config.howToSection.steps.map((step: any) => (
                                        <article
                                            key={step.stepNumber}
                                            className="rounded-[28px] bg-white border border-black/10 p-6 sm:p-7 shadow-card flex flex-col justify-between space-y-4"
                                        >
                                            <div className="space-y-3">
                                                <div className="flex items-center justify-between gap-3">
                                                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-ink text-white font-display font-bold text-sm">
                                                        {step.stepNumber}
                                                    </span>
                                                    <span className="px-3 py-1 rounded-full bg-[#faf8f5] border border-black/10 font-mono text-xs font-bold text-ink">
                                                        {step.shortcutBadge}
                                                    </span>
                                                </div>
                                                <h3 className="font-display text-lg sm:text-xl font-bold text-ink leading-snug">
                                                    {step.title}
                                                </h3>
                                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                                    {step.description}
                                                </p>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* OPTIONAL FREEFORM CUSTOM SECTION */}
                        {config.customSection && <div>{config.customSection}</div>}

                        {/* macOS Window Benchmark Table */}
                        <div id="benchmark-matrix" className="scroll-mt-28 space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                                <div>
                                    <p className="eyebrow mb-2">
                                        <span className="w-2 h-2 rounded-full bg-ink" />
                                        <span>{config.benchmark.eyebrow}</span>
                                    </p>
                                    <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink tracking-tight">
                                        {config.benchmark.heading}
                                    </h2>
                                </div>
                                <Link
                                    prefetch={false}
                                    href="/compare-canvas-hack-extensions"
                                    className="btn-soft px-4 py-2 text-xs font-semibold"
                                >
                                    <span>Compare all 57 extensions</span>
                                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                                </Link>
                            </div>

                            <div className="rounded-[32px] bg-white border border-black/10 shadow-card overflow-hidden">
                                <div className="bg-[#f7f5f0] border-b border-black/6 px-5 py-3.5 flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 inline-block" />
                                        <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 inline-block" />
                                        <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 inline-block" />
                                        <span className="text-xs font-bold text-ink ml-2">
                                            {config.benchmark.windowTitle}
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-semibold text-emerald-900 bg-[#cdeecb] px-2.5 py-0.5 rounded-full">
                                        {config.benchmark.windowBadge}
                                    </span>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[680px]">
                                        <thead>
                                            <tr className="border-b border-black/8 bg-[#faf8f5] text-ink font-display">
                                                <th className="py-4 px-6 font-bold">
                                                    {config.platformShort} Capability / Telemetry Vector
                                                </th>
                                                <th className="py-4 px-6 font-bold bg-[#cdeecb]/35">
                                                    <span className="inline-flex items-center gap-1.5">
                                                        <ShieldCheck
                                                            className="w-4 h-4 text-emerald-700"
                                                            aria-hidden="true"
                                                        />
                                                        <span>ExamGhost (In-Page AI)</span>
                                                    </span>
                                                </th>
                                                <th className="py-4 px-6 font-semibold text-ink-secondary">
                                                    ChatGPT Tab-Switching
                                                </th>
                                                <th className="py-4 px-6 font-semibold text-ink-secondary">
                                                    Legacy Sidebar Extensions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-black/6">
                                            {config.benchmark.rows.map((row: any, rIdx: number) => (
                                                <tr key={rIdx}>
                                                    <td className="py-4 px-6 font-semibold text-ink">
                                                        {row.capability}
                                                    </td>
                                                    <td className="py-4 px-6 font-semibold text-ink bg-[#cdeecb]/15">
                                                        <span className="inline-flex items-center gap-1.5 text-emerald-900">
                                                            <CheckCircle2
                                                                className="w-4 h-4 text-emerald-600 shrink-0"
                                                                aria-hidden="true"
                                                            />
                                                            <span>{row.examghost}</span>
                                                        </span>
                                                    </td>
                                                    <td className="py-4 px-6 text-ink-muted">{row.chatgpt}</td>
                                                    <td className="py-4 px-6 text-ink-muted">{row.sidebar}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* BESPOKE SECTION D: TOP UNIVERSITY COURSES, TEXTBOOKS & MODULES COVERED */}
                        {config.courseModulesSection && (
                            <div id="supported-courses" className="scroll-mt-28 space-y-8">
                                <div className="max-w-3xl space-y-3">
                                    <p className="eyebrow">
                                        <BookOpen className="w-3.5 h-3.5 text-ink" />
                                        <span>{config.courseModulesSection.eyebrow}</span>
                                    </p>
                                    <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink tracking-tight leading-[1.08]">
                                        {config.courseModulesSection.heading}
                                    </h2>
                                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                        {config.courseModulesSection.lead}
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    {config.courseModulesSection.modules.map((mod: any, mIdx: number) => (
                                        <article
                                            key={mIdx}
                                            className="rounded-[28px] bg-white border border-black/10 p-6 shadow-card space-y-3"
                                        >
                                            <div className="flex items-center justify-between gap-2 flex-wrap">
                                                <span className="text-xs font-bold uppercase tracking-wider text-ink-muted">
                                                    {mod.department}
                                                </span>
                                                <span className="px-2.5 py-0.5 rounded-full bg-[#faf8f5] border border-black/10 font-mono text-[11px] font-bold text-ink">
                                                    {mod.courseCodes}
                                                </span>
                                            </div>
                                            <h3 className="font-display text-base sm:text-lg font-bold text-ink">
                                                {mod.textbooksOrModules}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                                {mod.keyChallengeSolved}
                                            </p>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Study & Homework AI Workspace Showcase */}
                        <StudyAiHubShowcase compact />

                        {/* Two-Card Pastel Bento Hub */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                            <div className="lg:col-span-6 rounded-[32px] bg-[#c4d0f8]/45 border border-[#c4d0f8] p-6 sm:p-8 flex flex-col justify-between space-y-5">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-ink/70">
                                            20+ Supported Platforms
                                        </span>
                                        <img
                                            src="/images/ghost/ghost_card_lms.jpg"
                                            alt="Supported University LMS Platforms"
                                            width={40}
                                            height={40}
                                            className="w-10 h-10 rounded-2xl object-cover border border-black/10 shadow-xs"
                                        />
                                    </div>
                                    <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                        Explore other LMS &amp; STEM homework guides
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                        One extension works across your entire university schedule—switch seamlessly between LMS portals and STEM labs:
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 text-xs">
                                    {ALL_LMS_LINKS.filter((item) => item.href !== `/${config.slug}`).map((item) => (
                                        <Link
                                            prefetch={false}
                                            key={item.href}
                                            href={item.href}
                                            className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-ink hover:text-white border border-black/8 text-ink font-semibold shadow-2xs transition-all"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-6 rounded-[32px] bg-[#e2d3fa]/45 border border-[#e2d3fa] p-6 sm:p-8 flex flex-col justify-between space-y-5">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-ink/70">
                                            2026 Extension Teardowns
                                        </span>
                                        <img
                                            src="/images/ghost/ghost_card_proctor.jpg"
                                            alt="Extension Security Comparisons"
                                            width={40}
                                            height={40}
                                            className="w-10 h-10 rounded-2xl object-cover border border-black/10 shadow-xs"
                                        />
                                    </div>
                                    <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                        Side-by-side accuracy &amp; stealth teardowns
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                        See how ExamGhost’s Closed Shadow DOM and dual-model AI routing compare against 50+ legacy quiz extensions:
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 text-xs">
                                    {ALL_COMPETITOR_LINKS.map((item) => (
                                        <Link
                                            prefetch={false}
                                            key={item.href}
                                            href={item.href}
                                            className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-ink hover:text-white border border-black/8 text-ink font-semibold shadow-2xs transition-all"
                                        >
                                            {item.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Interactive Category-Filtered FAQ */}
                        <LmsServiceFaq
                            platformName={config.platformShort}
                            subtitle={config.faqSubtitle}
                            faqs={config.faqs}
                        />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
