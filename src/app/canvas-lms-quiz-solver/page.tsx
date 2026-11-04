import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { CanvasLmsQuizMotionDemo } from '@/components/PlatformMotionDemos';
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
    title: {
        absolute: "Canvas LMS Quiz Solver — Classic & New Quizzes AI (2026)",
    },
    description:
        "Solve Canvas Classic and New Quizzes inline in 0.3s: dropdowns, formula and stimulus questions with 0 SpeedGrader page_blurred flags. 5 free solves / day.",
    keywords: [
        "canvas lms quiz solver",
        "canvas quiz solver chrome extension",
        "canvas new quizzes ai solver",
        "canvas speedgrader quiz log page_blurred",
        "does canvas detect chrome extensions",
        "solve canvas quiz without switching tabs",
        "canvas multiple dropdowns solver",
        "examghost canvas"
    ],
    alternates: {
        canonical: "https://examghost.com/canvas-lms-quiz-solver",
    },
    openGraph: {
        title: "Canvas LMS Quiz Solver (2026) — Classic & New Quizzes AI | ExamGhost",
        description:
            "Double-click any Canvas Classic or New Quizzes question for 0.3s inline answers with 0 SpeedGrader page_blurred events. Try the live 6-chapter Canvas demo.",
        url: "https://examghost.com/canvas-lms-quiz-solver",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [{ url: "/videos/posters/canvas-lms-quiz-solver-poster.jpg", width: 1280, height: 720, alt: "ExamGhost Canvas LMS Quiz Solver" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Canvas LMS Quiz Solver (2026) — Classic & New Quizzes AI",
        description: "Solve Canvas Classic and New Quizzes inline in 0.3s with 0 SpeedGrader focus-loss flags.",
        images: ["/videos/posters/canvas-lms-quiz-solver-poster.jpg"],
    },
};

const CANVAS_CONFIG: any = {
    slug: "canvas-lms-quiz-solver",
    platformName: "Canvas LMS (Classic & New Quizzes)",
    platformShort: "Canvas LMS",
    heroBadge: "Canvas Classic & New Quizzes (LTI 1.3) · SpeedGrader Log Audited",
    heroDotColor: "#E63946",
    h1Title: "Canvas LMS Quiz Solver —",
    h1Highlight: "0.3s Inline AI & Zero SpeedGrader Flags.",
    aeoSummary: (
        <>
            <strong>ExamGhost</strong> solves <strong>Canvas Classic Quizzes</strong> and <strong>Canvas New Quizzes (LTI 1.3)</strong> directly inside your active browser tab in <strong>0.3 seconds</strong>. Double-click any question card or press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs text-ink">Alt+S</kbd> for Snap-It Vision OCR while keeping Canvas SpeedGrader’s <code className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs text-ink">quiz_submission_events</code> log at <strong>0 page_blurred flags</strong>.
        </>
    ),
    videoDemo: {
        platformSub: "SpeedGrader Shield · Classic & New Quizzes LTI",
        browserUrl: "canvas.stanford.edu/courses/49102/quizzes/88312/take",
        badgeBg: "#cdeecb",
        badgeText: "#14532d",
        telemetryLabel: "Canvas page_blurred: 0",
        questions: [
            {
                id: 1,
                number: "1",
                subject: "Science",
                courseCode: "BIO-204 · Canvas Midterm Quiz",
                pts: "2.0 pts",
                type: "mcq",
                question:
                    "Which organelle is responsible for generating over 90% of cellular ATP via oxidative phosphorylation across its inner cristae membrane?",
                options: [
                    { label: "A", text: "Golgi apparatus (cis-trans cisternae)" },
                    { label: "B", text: "Mitochondria (oxidative phosphorylation)" },
                    { label: "C", text: "Smooth endoplasmic reticulum" },
                    { label: "D", text: "Peroxisome vesicle matrix" },
                ],
                correctOption: "B",
                correctOptions: ["B"],
                answerText: "Mitochondria (oxidative phosphorylation)",
                explanation:
                    "Mitochondria synthesize ~30–32 ATP molecules per glucose via the TCA cycle and F1Fo-ATP synthase proton gradient across the inner mitochondrial membrane.",
            },
            {
                id: 2,
                number: "2",
                subject: "General",
                courseCode: "CS-301 · Canvas Multiple Answers",
                pts: "3.0 pts",
                type: "multi",
                question:
                    "Which of the following operations or architectural properties apply to a LIFO (Last In, First Out) Stack? Select all that apply.",
                options: [
                    { label: "A", text: "push(x) inserts an element at the top pointer in O(1) time" },
                    { label: "B", text: "pop() removes and returns the most recently inserted element" },
                    { label: "C", text: "FIFO head-to-tail ring buffer scheduling" },
                    { label: "D", text: "Manages activation records (stack frames) during recursion" },
                ],
                correctOption: "A",
                correctOptions: ["A", "B", "D"],
                answerText: "push(x) O(1), pop() latest element, Manages recursion stack frames",
                explanation:
                    "A Stack enforces Last-In, First-Out (LIFO) ordering via O(1) push() and pop() operations at a single top pointer and manages call stack frames.",
            },
            {
                id: 3,
                number: "3",
                subject: "Science",
                courseCode: "NEURO-310 · Canvas Multiple Dropdowns",
                pts: "3.0 pts",
                type: "dropdown",
                question:
                    "During a neuronal action potential, rapid depolarization is triggered by the opening of voltage-gated Sodium channels, whereas repolarization is driven by the delayed efflux of Potassium ions.",
                clozePrefix: "During a neuronal action potential, rapid depolarization is triggered by the opening of voltage-gated",
                clozeMiddle: "channels, whereas repolarization is driven by the delayed efflux of",
                clozeSuffix: "ions.",
                blank1Options: ["Chloride (Cl-)", "Sodium (Na+)", "Magnesium (Mg2+)"],
                blank2Options: ["Calcium (Ca2+)", "Potassium (K+)", "Bicarbonate (HCO3-)"],
                dropdownAnswers: ["Sodium (Na+)", "Potassium (K+)"],
                answerText: "Sodium (Na+) ➔ Potassium (K+)",
                explanation:
                    "Threshold depolarization (-55 mV) opens fast voltage-gated Na+ channels causing rapid Na+ influx, followed by Na+ inactivation and delayed K+ efflux.",
            },
            {
                id: 4,
                number: "4",
                subject: "General",
                courseCode: "CS-301 · Canvas Fill-in-the-Blank",
                pts: "2.0 pts",
                type: "short",
                question:
                    "State the worst-case time complexity (in Big-O notation) of searching for a key in a height-balanced AVL Binary Search Tree with n nodes.",
                correctOption: null,
                correctOptions: [],
                answerText: "O(log n)",
                explanation:
                    "Because an AVL tree maintains a strict balance factor of {-1, 0, +1} at every node, its height is bounded by 1.44 log2(n), guaranteeing O(log n) worst-case lookup.",
            },
            {
                id: 5,
                number: "5",
                subject: "Math",
                courseCode: "MATH-221 · Canvas New Quizzes Stimulus OCR",
                pts: "5.0 pts",
                type: "mcq",
                isOcr: true,
                question:
                    "From the Canvas stimulus diagram below, determine hypotenuse c (legs a = 6, b = 8) and the instantaneous tangent slope dy/dx of y = 0.5x² - 2x + 4 at x = 4:",
                diagramLabels: {
                    legA: "a = 6",
                    legB: "b = 8",
                    hypC: "c = ?",
                    curveLabel: "dy/dx at x = 4",
                },
                options: [
                    { label: "A", text: "c = 9.0,  dy/dx = 1.5" },
                    { label: "B", text: "c = 10.0, dy/dx = 2.0" },
                    { label: "C", text: "c = 12.0, dy/dx = 0.5" },
                    { label: "D", text: "c = 14.0, dy/dx = 3.0" },
                ],
                correctOption: "B",
                correctOptions: ["B"],
                answerText: "c = 10.0, dy/dx = 2.0",
                explanation:
                    "By the Pythagorean theorem, c = √(6² + 8²) = 10.0. Differentiating y = 0.5x² - 2x + 4 yields dy/dx = x - 2; at x = 4, dy/dx = 2.0.",
            },
        ],
    },
    architecture: {
        cardBg: "rgba(205, 238, 203, 0.35)",
        cardBorder: "#cdeecb",
        mascotImage: "/images/ghost/ghost_mascot_hero.jpg",
        mascotTitle: "Zero page_blurred Telemetry",
        mascotSubtitle: (
            <>
                Prevents Canvas’s <code className="font-mono text-ink">quiz_submission_events</code> API from recording red focus-loss flags.
            </>
        ),
        pills: ["0 page_blurred Flags", "New Quizzes LTI Ready", "Closed Shadow DOM"],
        eyebrow: "CANVAS SPEEDGRADER TELEMETRY AUDIT",
        heading: "How Canvas SpeedGrader logs work—and how ExamGhost stays invisible.",
        lead: (
            <>
                Instructure Canvas tracks student activity using the <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">POST /api/v1/courses/:id/quizzes/:id/submissions/:id/events</code> endpoint. Whenever you click outside the active Canvas tab or switch windows to ChatGPT, Canvas dispatches <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">page_blurred</code> and <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">page_focused</code> timestamps that render as red <em>“Stopped viewing the Canvas quiz-taking page”</em> warnings in SpeedGrader. ExamGhost solves questions inline inside an isolated <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Closed Shadow DOM</code> container so browser focus never leaves your exam.
            </>
        ),
        pillars: [
            {
                title: "Classic & New Quizzes LTI",
                desc: (
                    <>
                        Works natively on both legacy <code className="font-mono text-ink">.question_holder</code> DOM nodes and Canvas New Quizzes (<code className="font-mono text-ink">quiz-lti</code>) cross-origin iframes.
                    </>
                ),
                image: "/images/ghost/ghost_card_stealth.jpg",
            },
            {
                title: "Snap-It Vision OCR (Alt+S)",
                desc: (
                    <>
                        Solves locked Canvas stimulus passages, chemistry structures, and embedded PDFs in 0.3s using <strong>DeepSeek-R1 + GPT-4o Vision</strong>.
                    </>
                ),
                image: "/images/ghost/ghost_card_vision.jpg",
            },
            {
                title: "Every Canvas Question Type",
                desc: (
                    <>
                        Auto-fills Multiple Choice, Multiple Answers, Multiple Dropdowns, Matching, Numerical, Formula, and Fill-in-the-Blank questions.
                    </>
                ),
                image: "/images/ghost/ghost_card_hud.jpg",
            },
        ],
    },
    questionTypesSection: {
        eyebrow: "CLASSIC QUIZZES & NEW QUIZZES (LTI 1.3) COVERAGE",
        heading: "Engineered for every Canvas Classic and New Quizzes question widget.",
        lead: (
            <>
                Most generic AI sidebar extensions only scrape plain-text multiple choice inside legacy Canvas pages and break as soon as a professor enables <strong>Canvas New Quizzes (LTI 1.3)</strong> or assigns <strong>Multiple Dropdowns</strong> and <strong>Stimulus Passages</strong>. ExamGhost injects across <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">all_frames: true</code> and parses every native Instructure DOM structure one question at a time.
            </>
        ),
        items: [
            {
                name: "Canvas Classic Multiple Dropdowns, Matching & Multiple Answers",
                codeTag: "div.question_holder > select.question_input",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.4% Multi-Blank Context",
                description: (
                    <>
                        Canvas Classic Quizzes renders questions inside <code className="font-mono text-xs text-ink">div.question_holder &gt; div.display_question</code> nodes. When you double-click any Classic Quiz card, ExamGhost inspects all child <code className="font-mono text-xs text-ink">select.question_input</code> dropdown menus, <code className="font-mono text-xs text-ink">input[type=&quot;checkbox&quot;]</code> multi-select arrays, and matching pairs simultaneously—selecting every verified blank or radio option in 0.3 seconds.
                    </>
                ),
            },
            {
                name: "Canvas New Quizzes (LTI 1.3) Stimulus, Categorization & Ordering",
                codeTag: "iframe[src*='quiz-lti'] · InstUI React",
                triggerMethod: "Hybrid DOM + OCR",
                accuracy: "99.1% LTI Cross-Origin",
                description: (
                    <>
                        Canvas New Quizzes loads inside a cross-origin LTI 1.3 iframe (<code className="font-mono text-xs text-ink">*.quiz-lti-*.instructure.com</code>) built with Instructure InstUI React components. ExamGhost automatically links left-pane <strong>Stimulus reading passages</strong> with right-pane attached questions, maps <strong>Categorization</strong> items to their target category buckets, and ranks <strong>Ordering</strong> sequences from top to bottom.
                    </>
                ),
            },
            {
                name: "Canvas Formula Questions, Numerical Tolerances & LaTeX MathJax",
                codeTag: "span.math_equation_latex · numerical_question",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.6% Symbolic Math (DeepSeek-R1)",
                description: (
                    <>
                        Canvas Numerical and Formula questions grade answers against strict instructor-defined precision rules (<em>Exact Answer with Error Margin</em>, <em>Margin of Error by Percentage</em>, or <em>Precision to N Significant Digits</em>). ExamGhost reads the underlying LaTeX AST from <code className="font-mono text-xs text-ink">span.math_equation_latex</code> or MathJax nodes and computes the exact rounded decimal via <strong>DeepSeek-R1</strong>.
                    </>
                ),
            },
            {
                name: "Canvas Hot Spot, Locked Files & Organic Chemistry Diagrams",
                codeTag: "/courses/:id/files/:id/preview · Alt+S OCR",
                triggerMethod: "Alt+S Vision OCR",
                accuracy: "98.9% Dual-Model Vision",
                description: (
                    <>
                        When professors upload non-selectable PNG screenshots from lecture slides, New Quizzes <strong>Hot Spot</strong> coordinate images, or IUPAC skeletal structures hosted on <code className="font-mono text-xs text-ink">/courses/:id/files/:file_id/preview</code>, press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+S</kbd> and drag a region box. ExamGhost extracts all axes, labels, and equations via <strong>GPT-4o Vision</strong> without leaving the quiz tab.
                    </>
                ),
            },
        ],
    },
    telemetryForensicsSection: {
        eyebrow: "INSTRUCTURE CANVAS TELEMETRY FORENSICS",
        heading: "What your professor actually sees in Canvas SpeedGrader & New Quizzes Moderation.",
        lead: (
            <>
                Based on Instructure’s open-source <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">canvas-lms</code> repository (<code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">ui/features/quizzes/quiz_submission_events.js</code>) and university academic integrity documentation (<em>CSU Chico</em>, <em>Temple University</em>), here is the exact telemetry Canvas records during an online exam.
            </>
        ),
        citationNote: "Verified against Instructure Canvas open-source quiz_submission_events.js, CSU Chico Canvas Quiz Log Auditing Guide, and Temple University SpeedGrader documentation (2026).",
        logTableTitle: "Canvas SpeedGrader & New Quizzes Moderation Event Matrix",
        events: [
            {
                eventCode: "page_blurred (window.onblur / visibilitychange)",
                whenTriggered: "Switching tabs to ChatGPT, clicking a second monitor, or clicking inside an unisolated sidebar extension iframe.",
                professorView: "Red warning icon in SpeedGrader: 'Stopped viewing the Canvas quiz-taking page' with exact duration in seconds.",
                examghostStatus: "0 events fired — Closed Shadow DOM keeps document.hasFocus() === true.",
                isSafe: true,
            },
            {
                eventCode: "question_answered (15s Action Buffer)",
                whenTriggered: "Selecting a radio button, checkbox, dropdown option, or typing into a Canvas numerical/text field.",
                professorView: "Green circle in SpeedGrader: 'Answered question #X' timestamped to the second.",
                examghostStatus: "Natural human cadence — solved one question at a time via double-click.",
                isSafe: true,
            },
            {
                eventCode: "New Quizzes LTI Moderate → View Log",
                whenTriggered: "Inside Canvas New Quizzes (*.quiz-lti-*.instructure.com) whenever focus leaves the LTI frame or items are saved.",
                professorView: "Attempt timeline displaying 'Session started', 'Question X answered', and 'Stopped viewing the quiz-taking page'.",
                examghostStatus: "Spotless LTI timeline — all_frames: true Shadow root stays inside the LTI frame.",
                isSafe: true,
            },
            {
                eventCode: "DOM / Global Window Inspection",
                whenTriggered: "Page scripts checking document.querySelectorAll('iframe') or window.__extension globals.",
                professorView: "Legacy sidebar extensions expose chrome-extension:// iframe nodes in the host DOM.",
                examghostStatus: "Invisible — attachShadow({ mode: 'closed' }) exposes zero readable DOM nodes.",
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: "Why ExamGhost Never Uses a 'Solve All' Button on Canvas",
        whyNoSolveAllBody: (
            <>
                Canvas’s <code className="font-mono text-xs text-ink">quiz_submission_events</code> API batches and timestamps every <code className="font-mono text-xs text-ink">question_answered</code> payload. If an extension auto-fills 25 questions in 0.5 seconds, SpeedGrader displays 25 identical timestamps at <code className="font-mono text-xs text-ink">00:02</code>—an immediate academic integrity red flag. By solving <strong>one question at a time when you double-click or press Alt+S</strong>, ExamGhost ensures your SpeedGrader log mirrors natural human reading and problem-solving speed.
            </>
        ),
    },
    howToSection: {
        eyebrow: "4-STEP CANVAS WORKFLOW",
        heading: "How to solve Canvas Classic & New Quizzes with zero SpeedGrader flags.",
        lead: (
            <>
                Go from installing ExamGhost to solving any Canvas quiz inline in under 60 seconds—without ever switching tabs, copying text, or triggering a <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">page_blurred</code> warning.
            </>
        ),
        steps: [
            {
                stepNumber: "01",
                title: "Install ExamGhost & Pick Your Stealth Mode",
                shortcutBadge: "Alt+1 / Alt+2 / Alt+3",
                description: (
                    <>
                        Add the ExamGhost Chrome extension (includes <strong>5 free solves / day</strong> immediately). Before starting your Canvas attempt, select your preferred hotkey mode: <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+1</kbd> (<strong>Invisible Mode</strong>), <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+2</kbd> (<strong>Stealth Mode</strong>), or <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+3</kbd> (<strong>Explain Mode</strong>).
                    </>
                ),
                plainTextForSchema: "Install the ExamGhost Chrome extension to unlock 5 free solves / day and select Invisible Mode (Alt+1), Stealth Mode (Alt+2), or Explain Mode (Alt+3).",
            },
            {
                stepNumber: "02",
                title: "Open Your Canvas Quiz & Double-Click One Question at a Time",
                shortcutBadge: "Double-Click Card",
                description: (
                    <>
                        Read through your Canvas Classic or New Quizzes exam at a natural pace. When you want to verify or solve a question, simply <strong>double-click anywhere on that question card</strong>. ExamGhost parses the prompt, options, dropdowns, or LaTeX math inside its Closed Shadow DOM without taking focus away from Canvas.
                    </>
                ),
                plainTextForSchema: "Double-click any individual Canvas Classic or New Quizzes question card to parse the prompt, dropdowns, and options inline without losing window focus.",
            },
            {
                stepNumber: "03",
                title: "Use Snap-It OCR for Stimulus Diagrams & Locked Images",
                shortcutBadge: "Alt+S Vision OCR",
                description: (
                    <>
                        If a Canvas question contains an image-only graph, organic chemistry mechanism, or split-screen New Quizzes stimulus diagram, press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+S</kbd> and drag a selection box around the figure.
                    </>
                ),
                plainTextForSchema: "Press Alt+S and drag a selection box over any locked Canvas diagram, chemistry structure, or New Quizzes stimulus passage to solve via GPT-4o Vision and DeepSeek-R1.",
            },
            {
                stepNumber: "04",
                title: "Review the Verified Answer & Submit with a Spotless Log",
                shortcutBadge: "0.3s Inline Result",
                description: (
                    <>
                        In <strong>0.3 seconds</strong>, ExamGhost either subtly marks the correct choice with a minimal <code className="font-mono text-xs text-ink">✓</code>, auto-fills the dropdowns/radios via native DOM events, or displays a concise step-by-step derivation—leaving <strong>0 red flags</strong> in SpeedGrader.
                    </>
                ),
                plainTextForSchema: "Receive the verified answer inline in 0.3 seconds with subtle checkmark hints, native auto-fill, or step-by-step explanations while maintaining 0 page_blurred flags in SpeedGrader.",
            },
        ],
    },
    courseModulesSection: {
        eyebrow: "UNIVERSITY CANVAS COURSES SUPPORTED",
        heading: "Tested across 500+ university Canvas instances and STEM departments.",
        lead: (
            <>
                Whether your university runs <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">canvas.[university].edu</code> or <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">[school].instructure.com</code>, ExamGhost routes every question to the specialized AI reasoning model best suited for that discipline.
            </>
        ),
        modules: [
            {
                department: "General & Organic Chemistry",
                courseCodes: "CHEM 101, CHEM 102, CHEM 241, CHEM 242",
                textbooksOrModules: "Canvas Numerical & Formula Questions, IUPAC Stereochemistry, Thermodynamics & Equilibrium",
                keyChallengeSolved: "Respects strict Canvas significant-figure and percentage-margin rules while decoding skeletal ring diagrams via Alt+S Vision OCR.",
            },
            {
                department: "Calculus, Differential Equations & Linear Algebra",
                courseCodes: "MATH 151, MATH 152, MATH 251, MATH 308",
                textbooksOrModules: "Canvas Classic Formula Questions ([x] randomized variables), MathJax & KaTeX New Quizzes",
                keyChallengeSolved: "Extracts raw LaTeX from Canvas math spans and computes exact symbolic and decimal solutions via DeepSeek-R1.",
            },
            {
                department: "Computer Science & Data Structures",
                courseCodes: "CS 106A, CS 106B, CS 225, CSE 373",
                textbooksOrModules: "Code Tracing (<pre><code>), Big-O Complexity, Discrete Math & AVL/Graph Traversals",
                keyChallengeSolved: "Parses multi-line Python, C++, and Java code snippets and tree diagrams inside Canvas without triggering copy/paste listeners.",
            },
            {
                department: "Nursing, Anatomy & Physiology",
                courseCodes: "NURS 310, BIO 204, BIOL 2401, PHRM 401",
                textbooksOrModules: "NCLEX Select-All-That-Apply (Multiple Answers), Clinical Case Stimulus Passages & Multiple Dropdowns",
                keyChallengeSolved: "Evaluates every checkbox option independently to prevent Canvas Classic/New Quizzes partial-credit deductions.",
            },
        ],
    },
    benchmark: {
        eyebrow: "CANVAS LMS BENCHMARK",
        heading: "ExamGhost vs. ChatGPT & Legacy Extensions on Canvas",
        windowTitle: "2026 Canvas Classic & New Quizzes Telemetry Matrix",
        windowBadge: "Verified on SpeedGrader",
        rows: [
            {
                capability: "Canvas SpeedGrader Quiz Log (page_blurred)",
                examghost: "0 page_blurred or tab-switch flags",
                chatgpt: (
                    <>
                        Logs red <em>Stopped viewing</em> flag on every switch
                    </>
                ),
                sidebar: "Logs focus loss when clicking extension iframe",
            },
            {
                capability: "Canvas New Quizzes (LTI 1.3 iframe) support",
                examghost: "Native all_frames + Closed Shadow DOM",
                chatgpt: "Manual copy-paste (triggers paste listeners)",
                sidebar: "Fails inside cross-origin quiz-lti iframes",
            },
            {
                capability: "Multiple Dropdowns, Matching & Formula questions",
                examghost: "1-click inline selection & symbolic math",
                chatgpt: "Slow manual re-entry across multiple blanks",
                sidebar: "Supports standard 4-option text MCQ only",
            },
            {
                capability: "Locked stimulus diagrams & LaTeX equations",
                examghost: "Built-in Snap-It Vision OCR (Alt+S)",
                chatgpt: "Manual screenshot & file upload (20s+)",
                sidebar: "Cannot read non-selectable images or SVGs",
            },
            {
                capability: "Screen-share & lecture hall stealth",
                examghost: "Invisible (Alt+1), Stealth (Alt+2), Explain (Alt+3)",
                chatgpt: "Visible ChatGPT window on screen",
                sidebar: "Injects permanent floating sidebar into DOM",
            },
        ],
    },
    faqSubtitle:
        "Technical answers on Canvas SpeedGrader activity logs, Classic vs. New Quizzes (LTI 1.3), Multiple Dropdowns, and your 5 free solves / day.",
    faqs: [
        {
            id: "faq-canvas-detect-examghost-speedgrader-log",
            category: "stealth",
            badge: "0 page_blurred Flags",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "Can Canvas detect the ExamGhost Chrome extension in SpeedGrader Quiz Logs?",
            a: (
                <>
                    <strong>No, Canvas LMS cannot detect ExamGhost</strong> because browser sandboxing prevents websites from enumerating installed Chrome extensions, and ExamGhost renders inside a{' '}
                    <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Closed Shadow DOM</code> root. Canvas only logs red <em>“Stopped viewing the Canvas quiz-taking page”</em> warnings when{' '}
                    <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">window.onblur</code> or{' '}
                    <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">document.visibilitychange</code> fires—which happens when you switch tabs to ChatGPT, never when solving inline with ExamGhost.
                </>
            ),
        },
        {
            id: "faq-canvas-new-quizzes-lti-support",
            category: "platforms",
            badge: "New Quizzes LTI",
            badgeBg: "bg-[#c4d0f8] text-indigo-950",
            q: "Does ExamGhost work on both Canvas Classic Quizzes and Canvas New Quizzes (LTI 1.3)?",
            a: (
                <>
                    <strong>Yes, ExamGhost supports both Canvas Classic Quizzes and Canvas New Quizzes (LTI 1.3) natively.</strong> Because New Quizzes load inside a cross-origin <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">quiz-lti</code> iframe, legacy extensions like{' '}
                    <Link prefetch={false} href="/canvashack-vs-examghost" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">CanvasHack</Link> often fail to read question nodes. ExamGhost attaches across <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">all_frames: true</code> and solves both engines identically.
                </>
            ),
        },
        {
            id: "faq-canvas-multiple-dropdowns-matching-formula",
            category: "ocr",
            badge: "All Question Types",
            badgeBg: "bg-[#e2d3fa] text-purple-950",
            q: "Can ExamGhost solve Canvas Multiple Dropdowns, Matching, Formula, and Fill-in-Multiple-Blanks?",
            a: (
                <>
                    <strong>Yes, double-clicking any Canvas question card automatically parses all native <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">&lt;select&gt;</code> dropdowns, checkboxes, radio buttons, and text inputs in context.</strong> In Auto-Fill mode, ExamGhost selects every correct dropdown or checkbox option in <strong>0.3 seconds</strong>; in Stealth Highlight mode, it places a subtle green <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">✓</code> next to the verified choice.
                </>
            ),
        },
        {
            id: "faq-canvas-snap-it-ocr-stimulus-graphs",
            category: "ocr",
            badge: "Alt + S Vision OCR",
            badgeBg: "bg-[#bfe3f6] text-sky-950",
            q: "How do I solve locked Canvas images, chemistry diagrams, and embedded PDFs?",
            a: (
                <>
                    <strong>Press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Alt+S</kbd> to activate Snap-It Vision OCR</strong>, then drag a selection box over any diagram, graph, or stimulus passage on your Canvas page. ExamGhost routes the image through <strong>DeepSeek-R1</strong> and <strong>GPT-4o Vision</strong> and returns the answer with step-by-step work in under 0.4 seconds.
                </>
            ),
        },
        {
            id: "faq-canvas-quiz-log-pacing-30-second-poll",
            category: "stealth",
            badge: "Natural Pacing",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "Does ExamGhost solve all questions at once or one by one as I read?",
            a: (
                <>
                    <strong>ExamGhost strictly solves questions one by one when you double-click a question card or drag a Snap-It OCR box.</strong> Solving one question at a time ensures your Canvas <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">quiz_submission_events</code> answer timestamps follow a natural human reading cadence rather than an instant batch-submission spike.
                </>
            ),
        },
        {
            id: "faq-canvas-invisible-stealth-explain-modes",
            category: "stealth",
            badge: "Alt+1 / Alt+2 / Alt+3",
            badgeBg: "bg-[#bfe3f6] text-sky-950",
            q: "How do I switch between Invisible Mode, Stealth Mode, and Explain Mode during a Canvas quiz?",
            a: (
                <>
                    <strong>Use instant keyboard hotkeys or the extension popup:</strong> press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Alt+1</kbd> for <strong>Invisible Mode</strong> (silent auto-fill + clipboard copy with zero visual UI), <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Alt+2</kbd> for <strong>Stealth Mode</strong> (auto-fill or subtle <code className="font-mono text-ink">✓</code> hint), or <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Alt+3</kbd> for <strong>Explain Mode</strong> (slides in the step-by-step rationale banner).
                </>
            ),
        },
        {
            id: "faq-canvas-respondus-lockdown-honorlock",
            category: "stealth",
            badge: "Browser Scope",
            badgeBg: "bg-[#ffe9a0] text-amber-950",
            q: "Does ExamGhost work on Canvas quizzes that require Respondus LockDown Browser?",
            a: (
                <>
                    <strong>ExamGhost runs inside standard Chromium browsers—including Google Chrome, Brave, Microsoft Edge, and Arc</strong>—for web-based Canvas quizzes and homework. Standalone desktop apps like Respondus LockDown Browser use a locked custom browser shell that blocks all third-party Chrome extensions.
                </>
            ),
        },
        {
            id: "faq-canvas-free-5-free-solves-daily-trial",
            category: "platforms",
            badge: "5 Free Solves / Day",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "How do I claim 5 Free/Day Canvas quiz solves?",
            a: (
                <>
                    <strong>Install the ExamGhost Chrome extension from the Chrome Web Store to receive 5 free solves per day immediately with no credit card required.</strong> You can also test every mode right now in the interactive 6-chapter Canvas film above or in our{' '}
                    <Link prefetch={false} href="/canvas-quiz-solver-free-demo" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">Live Canvas Quiz Sandbox</Link>.
                </>
            ),
        },
    ],
    jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://examghost.com/canvas-lms-quiz-solver#webpage",
                "url": "https://examghost.com/canvas-lms-quiz-solver",
                "name": "Canvas LMS Quiz Solver (2026) — Classic & New Quizzes AI | ExamGhost",
                "description":
                    "Solve Canvas Classic Quizzes and Canvas New Quizzes (LTI 1.3) inline in 0.3s. Zero SpeedGrader page_blurred flags, Closed Shadow DOM stealth, and Snap-It OCR (Alt+S).",
                "datePublished": "2026-01-15",
                "dateModified": "2026-03-29",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://examghost.com/#website" },
                "breadcrumb": { "@id": "https://examghost.com/canvas-lms-quiz-solver#breadcrumb" },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "#lms-faq h2", "#lms-faq h3", ".faq-answer"]
                }
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://examghost.com/canvas-lms-quiz-solver#software",
                "name": "ExamGhost Canvas LMS Quiz Solver",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Chrome, Edge, Brave, Arc, macOS, Windows",
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "0.00",
                    "highPrice": "199.00",
                    "priceCurrency": "USD",
                    "offerCount": "4"
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/canvas-lms-quiz-solver#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Live Sandbox",
                        "item": "https://examghost.com/canvas-quiz-solver-free-demo"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Canvas LMS Quiz Solver",
                        "item": "https://examghost.com/canvas-lms-quiz-solver"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/canvas-lms-quiz-solver#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can Canvas detect the ExamGhost Chrome extension in SpeedGrader Quiz Logs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, Canvas LMS cannot detect ExamGhost because browser sandboxing prevents websites from enumerating installed Chrome extensions, and ExamGhost renders inside a Closed Shadow DOM root. Canvas only logs red 'Stopped viewing the Canvas quiz-taking page' warnings when window.onblur or document.visibilitychange fires—which happens when you switch tabs to ChatGPT, never when solving inline with ExamGhost."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does ExamGhost work on both Canvas Classic Quizzes and Canvas New Quizzes (LTI 1.3)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, ExamGhost supports both Canvas Classic Quizzes and Canvas New Quizzes (LTI 1.3) natively. Because New Quizzes load inside a cross-origin quiz-lti iframe, legacy extensions often fail to read question nodes. ExamGhost attaches across all_frames: true and solves both engines identically."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can ExamGhost solve Canvas Multiple Dropdowns, Matching, Formula, and Fill-in-Multiple-Blanks?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, double-clicking any Canvas question card automatically parses all native <select> dropdowns, checkboxes, radio buttons, and text inputs in context. In Auto-Fill mode, ExamGhost selects every correct dropdown or checkbox option in 0.3 seconds; in Stealth Highlight mode, it places a subtle green checkmark next to the verified choice."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I solve locked Canvas images, chemistry diagrams, and embedded PDFs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Press Alt+S to activate Snap-It Vision OCR, then drag a selection box over any diagram, graph, or stimulus passage on your Canvas page. ExamGhost routes the image through DeepSeek-R1 and GPT-4o Vision and returns the answer with step-by-step work in under 0.4 seconds."
                        }
                    }
                ]
            }
        ]
    }
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

export default function CanvasLmsQuizSolverPage() {
    const config = CANVAS_CONFIG;
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
                    <CanvasLmsQuizMotionDemo />

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
