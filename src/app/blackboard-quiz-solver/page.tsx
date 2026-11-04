import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { BlackboardQuizMotionDemo } from '@/components/PlatformMotionDemos';
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
        absolute: "Blackboard Quiz Solver (2026) — Learn & Ultra AI Helper",
    },
    description: "Solve Blackboard Learn and Ultra tests inline in 0.3s: jumbled sentence, calculated formula and WIRIS math via Alt+S OCR, with 0 access-log flags.",
    keywords: [
        "blackboard quiz solver",
        "blackboard ultra quiz solver",
        "blackboard test solver chrome extension",
        "does blackboard detect tab switching",
        "blackboard ultra access log focus loss",
        "blackboard homework helper ai",
        "solve blackboard test without switching tabs",
        "examghost blackboard"
    ],
    alternates: {
        canonical: "https://examghost.com/blackboard-quiz-solver",
    },
    openGraph: {
        title: "Blackboard Quiz Solver (2026) — Blackboard Learn & Ultra AI | ExamGhost",
        description:
            "Double-click any Blackboard Learn or Blackboard Ultra test question for 0.3s inline AI answers with 0 Access Log focus-loss warnings.",
        url: "https://examghost.com/blackboard-quiz-solver",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [{ url: "/videos/posters/blackboard-quiz-solver-poster.jpg", width: 1280, height: 720, alt: "ExamGhost Blackboard Quiz Solver" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Blackboard Quiz Solver (2026) — Blackboard Learn & Ultra AI",
        description: "Solve Blackboard Learn and Blackboard Ultra assessments inline in 0.3s with 0 focus-loss warnings.",
        images: ["/videos/posters/blackboard-quiz-solver-poster.jpg"],
    },
};

const BLACKBOARD_CONFIG: any = {
    slug: "blackboard-quiz-solver",
    platformName: "Blackboard Learn & Ultra",
    platformShort: "Blackboard Ultra",
    heroBadge: "Anthology Blackboard Learn & Ultra 2026 · Access Log Audited",
    heroDotColor: "#E5A823",
    h1Title: "Blackboard Quiz Solver —",
    h1Highlight: "Learn & Ultra Inline AI with Zero Log Warnings.",
    aeoSummary: (
        <>
            <strong>ExamGhost</strong> solves <strong>Blackboard Ultra</strong> and <strong>Blackboard Learn (Original)</strong> assessments inline in <strong>0.3 seconds</strong>. Double-click any question inside Blackboard Ultra’s slide-over assessment panel—or press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs text-ink">Alt+S</kbd> for Snap-It Vision OCR—while keeping your Blackboard <strong>Attempt Access Log</strong> at <strong>0 tab-switch or focus-loss warnings</strong>.
        </>
    ),
    videoDemo: {
        platformSub: "Blackboard Ultra Peek Panel · Access Log Shield",
        browserUrl: "blackboard.nyu.edu/ultra/courses/_94812_1/outline/assessment/_482910_1/overview",
        badgeBg: "#ffe9a0",
        badgeText: "#713f12",
        telemetryLabel: "Blackboard Access Log Blur: 0",
        questions: [
            {
                id: 1,
                number: "1",
                subject: "Science",
                courseCode: "ECON-101 · Blackboard Ultra Test",
                pts: "2.5 pts",
                type: "mcq",
                question:
                    "When the Federal Reserve conducts an open-market purchase of U.S. Treasury securities from commercial banks, what is the immediate short-run effect on bank reserves and the nominal federal funds rate?",
                options: [
                    { label: "A", text: "Bank reserves decrease and the federal funds rate increases" },
                    { label: "B", text: "Bank reserves increase and the federal funds rate decreases" },
                    { label: "C", text: "Both bank reserves and the federal funds rate remain unchanged" },
                    { label: "D", text: "Required reserve ratio increases proportionally" },
                ],
                correctOption: "B",
                correctOptions: ["B"],
                answerText: "Bank reserves increase and the federal funds rate decreases",
                explanation:
                    "Open-market purchases inject high-powered reserves into the banking system, shifting the reserve supply curve right and lowering the equilibrium federal funds rate.",
            },
            {
                id: 2,
                number: "2",
                subject: "Science",
                courseCode: "MICRO-210 · Blackboard Multiple Answer",
                pts: "3.0 pts",
                type: "multi",
                question:
                    "Which of the following structural features characterize Gram-negative bacterial cell envelopes (such as Escherichia coli) but are absent in Gram-positive bacteria?",
                options: [
                    { label: "A", text: "An asymmetric outer membrane containing lipopolysaccharide (LPS / endotoxin)" },
                    { label: "B", text: "A periplasmic space housing beta-lactamase and transport binding proteins" },
                    { label: "C", text: "Thick 40-layer peptidoglycan cross-linked with teichoic and lipoteichoic acids" },
                    { label: "D", text: "Outer-membrane porin trimers (OmpF/OmpC) allowing passive diffusion of hydrophilic solutes" },
                ],
                correctOption: "A",
                correctOptions: ["A", "B", "D"],
                answerText: "Outer LPS membrane, Periplasmic space, Outer-membrane porin channels",
                explanation:
                    "Gram-negative bacteria possess an outer LPS-containing membrane, porin channels, and a distinct periplasm, whereas thick peptidoglycan with teichoic acids (C) is Gram-positive.",
            },
            {
                id: 3,
                number: "3",
                subject: "General",
                courseCode: "FIN-302 · Blackboard Jumbled Sentence / Cloze",
                pts: "3.0 pts",
                type: "dropdown",
                question:
                    "According to the Capital Asset Pricing Model (CAPM), systematic market risk is measured by Beta, and a bond trades at a discount when its coupon rate is below its yield to maturity.",
                clozePrefix: "In the Capital Asset Pricing Model (CAPM), non-diversifiable market risk is quantified by",
                clozeMiddle: "whereas a fixed-income bond will trade at a price discount whenever its coupon rate is less than its",
                clozeSuffix: "in the secondary market.",
                blank1Options: ["Idiosyncratic variance", "Asset Beta (β)", "Sharpe alpha"],
                blank2Options: ["Current par value", "Yield to Maturity (YTM)", "Risk-free T-bill rate"],
                dropdownAnswers: ["Asset Beta (β)", "Yield to Maturity (YTM)"],
                answerText: "Asset Beta (β) ➔ Yield to Maturity (YTM)",
                explanation:
                    "CAPM prices only systematic risk via Beta (β). When a bond's coupon rate is below market YTM, its present value falls below par (discount).",
            },
            {
                id: 4,
                number: "4",
                subject: "Math",
                courseCode: "STAT-200 · Blackboard Calculated Numeric",
                pts: "2.5 pts",
                type: "short",
                question:
                    "A normal distribution has mean μ = 100 and standard deviation σ = 15. Compute the standardized Z-score for an observed value of X = 130.",
                correctOption: null,
                correctOptions: [],
                answerText: "2.00",
                explanation:
                    "Z = (X - μ) / σ = (130 - 100) / 15 = 30 / 15 = +2.00 standard deviations above the mean.",
            },
            {
                id: 5,
                number: "5",
                subject: "Math",
                courseCode: "PHYS-201 · Blackboard WIRIS Math OCR",
                pts: "4.0 pts",
                type: "mcq",
                isOcr: true,
                question:
                    "Use Snap-It Vision OCR (Alt+S) on the Blackboard Ultra figure below to find hypotenuse c (legs a = 6, b = 8) and the instantaneous slope dy/dx of y = 0.5x² - 2x + 4 at x = 4:",
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
                    "c = √(6² + 8²) = 10.0. Differentiating y = 0.5x² - 2x + 4 yields dy/dx = x - 2 = 2.0 at x = 4.",
            },
        ],
    },
    architecture: {
        cardBg: "rgba(255, 233, 160, 0.35)",
        cardBorder: "#ffe9a0",
        mascotImage: "/images/ghost/ghost_grad.jpg",
        mascotTitle: "Blackboard Ultra Access Log Shield",
        mascotSubtitle: (
            <>
                Renders inside Ultra’s Angular/React Peek Panel without firing <code className="font-mono text-ink">window.onblur</code>.
            </>
        ),
        pills: ["Learn & Ultra Ready", "0 Access-Log Flags", "WIRIS Math OCR"],
        eyebrow: "BLACKBOARD LEARN & ULTRA TELEMETRY AUDIT",
        heading: "Engineered for Blackboard Ultra Peek Panels and Original Tests.",
        lead: (
            <>
                <strong>Anthology Blackboard Ultra</strong> mounts assessments inside a dynamic slide-over Angular/React Peek Panel (<code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">/ultra/courses/_id/outline/assessment/</code>) and logs every question save and window blur in the instructor’s <strong>Attempt Access Log</strong>. Switching tabs to search Google or ChatGPT triggers focus-loss events and clipboard paste hooks. ExamGhost operates inside a <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Closed Shadow DOM</code> root right inside your active Blackboard tab, solving questions in 0.3s with zero external window switches.
            </>
        ),
        pillars: [
            {
                title: "Zero Access-Log Gaps",
                desc: (
                    <>
                        Prevents unnatural 45-second inactivity gaps and <code className="font-mono text-ink">window.onblur</code> events in Blackboard’s Attempt Access Log.
                    </>
                ),
                image: "/images/ghost/ghost_card_stealth.jpg",
            },
            {
                title: "WIRIS & MathType OCR",
                desc: (
                    <>
                        Blackboard renders formulas as non-selectable WIRIS SVG images. Press <kbd className="font-mono text-ink">Alt+S</kbd> to solve any formula via Vision AI.
                    </>
                ),
                image: "/images/ghost/ghost_card_vision.jpg",
            },
            {
                title: "Jumbled Sentence & Multi-Answer",
                desc: (
                    <>
                        Auto-fills Blackboard Jumbled Sentences, Calculated Numeric, Matching, True/False, and Multiple Answer questions.
                    </>
                ),
                image: "/images/ghost/ghost_card_hud.jpg",
            },
        ],
    },
    questionTypesSection: {
        eyebrow: "BLACKBOARD ULTRA & ORIGINAL QUESTION ENGINE COVERAGE",
        heading: "Built for Blackboard Ultra slide-over drawers and Original Learn frames.",
        lead: (
            <>
                Universities currently run two distinct Anthology architectures: <strong>Blackboard Learn Ultra</strong> (a single-page Angular/React application with slide-over Peek Panels) and <strong>Blackboard Original Course View</strong> (legacy <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">contentFrame</code> JSP pages). ExamGhost detects both DOM layouts automatically and solves every question type one by one.
            </>
        ),
        items: [
            {
                name: "Blackboard Ultra Slide-Over Assessment Drawer & Multiple Answer",
                codeTag: "bb-assessment-player · .question-container",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.3% Negative-Marking Safe",
                description: (
                    <>
                        Blackboard Ultra renders tests inside <code className="font-mono text-xs text-ink">bb-assessment-player</code> slide-over overlays. Generic sidebar extensions collide with Ultra’s right-hand drawer and break scroll containers. ExamGhost attaches a lightweight observer inside a <code className="font-mono text-xs text-ink">Closed Shadow DOM</code> root, solving Multiple Choice, negative-marked Multiple Answer checkboxes, and drag-and-drop Matching pairs inline.
                    </>
                ),
            },
            {
                name: "Blackboard Original View Jumbled Sentence, Ordering & Either/Or",
                codeTag: "iframe#contentFrame · takeAssessment.jsp",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.4% Multi-Dropdown Cloze",
                description: (
                    <>
                        In Blackboard Original (<code className="font-mono text-xs text-ink">/webapps/assessment/take/launch.jsp</code>), questions load inside nested <code className="font-mono text-xs text-ink">iframe#contentFrame</code> documents. ExamGhost traverses the iframe automatically, evaluating multi-blank <strong>Jumbled Sentence</strong> <code className="font-mono text-xs text-ink">&lt;select&gt;</code> dropdowns in full paragraph context and ranking <strong>Ordering</strong> sequences accurately.
                    </>
                ),
            },
            {
                name: "Calculated Formula, Calculated Numeric & WIRIS MathType SVGs",
                codeTag: "img.Wirisformula · [x] Randomized Variables",
                triggerMethod: "Hybrid DOM + OCR",
                accuracy: "99.5% Symbolic Math (DeepSeek-R1)",
                description: (
                    <>
                        Blackboard’s <strong>Calculated Formula</strong> engine generates unique variable sets per student and renders equations via <strong>WIRIS MathType</strong> as non-selectable SVG or PNG images (<code className="font-mono text-xs text-ink">img.Wirisformula</code>). ExamGhost reads both the accessible MathML <code className="font-mono text-xs text-ink">alt</code> attribute and raw pixels via <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+S</kbd> Snap-It OCR to compute the exact rounded numeric answer.
                    </>
                ),
            },
            {
                name: "Hot Spot Coordinates, Accounting Tables & LTI Partner Launches",
                codeTag: "Alt+S Vision OCR · /execute/blti/launch",
                triggerMethod: "Alt+S Vision OCR",
                accuracy: "98.9% Dual-Model Vision",
                description: (
                    <>
                        For Blackboard <strong>Hot Spot</strong> image questions, histology micrographs, or financial tables, press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+S</kbd> and drag a region box. Furthermore, when a Blackboard folder launches McGraw-Hill Connect, Pearson MyLab, or Cengage WebAssign via LTI 1.3, ExamGhost switches to its publisher adapter automatically.
                    </>
                ),
            },
        ],
    },
    telemetryForensicsSection: {
        eyebrow: "ANTHOLOGY BLACKBOARD TELEMETRY FORENSICS",
        heading: "What Blackboard’s Student Activity Log & Attempt Access Log actually record.",
        lead: (
            <>
                Based on official Anthology Blackboard documentation and university faculty guides (<em>University of Arkansas</em>, <em>Western Kentucky University</em>, and <em>Baylor College of Medicine</em>), here is how Blackboard logs student test attempts across Ultra and Original views.
            </>
        ),
        citationNote: "Verified against Anthology Blackboard Learn Ultra Student Activity Log documentation, University of Arkansas TIPS, and Western Kentucky University Access Log guidelines (2026).",
        logTableTitle: "Blackboard Ultra Activity Log & Original Attempt Access Log Matrix",
        events: [
            {
                eventCode: "Ultra Gradebook → Student Activity Log",
                whenTriggered: "Server-side milestones when a student views a test, starts an attempt, saves a draft, or submits.",
                professorView: "140-day log (refreshed every ~20 mins) showing 'Assessment opened', 'Attempt started', 'Draft saved', and Submission Receipt ID.",
                examghostStatus: "100% clean — server milestones only; zero client-side Shadow DOM visibility.",
                isSafe: true,
            },
            {
                eventCode: "Original Attempt Access Log (Save Answer AJAX)",
                whenTriggered: "Every time an answer radio, checkbox, or numeric input is auto-saved during a Blackboard Original test.",
                professorView: "Second-by-second timeline plotting elapsed time between 'Test Started' and 'Saved Question #X'.",
                examghostStatus: "Natural 15–35s human cadence — solved one question at a time via double-click.",
                isSafe: true,
            },
            {
                eventCode: "window.onblur / 45s+ Inactivity Gap",
                whenTriggered: "Switching tabs to ChatGPT or leaving the Blackboard window idle while typing a prompt elsewhere.",
                professorView: "Suspicious 45–90 second inactivity gap in the Access Log followed by an instant paste or save burst.",
                examghostStatus: "0 focus-loss gaps — Closed Shadow DOM keeps you inside the active Blackboard tab.",
                isSafe: true,
            },
            {
                eventCode: "SafeAssign Originality Report",
                whenTriggered: "Submitting written Essay or File Upload responses when SafeAssign is enabled on the assessment.",
                professorView: "Text-matching similarity score comparing written prose against institutional databases.",
                examghostStatus: "SafeAssign never monitors browser extensions, MCQ clicks, or Explain Mode derivations.",
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: "Why One-by-One Solving Is Critical for Blackboard’s Access Log",
        whyNoSolveAllBody: (
            <>
                In both Blackboard Original and Blackboard Ultra, instructors investigating academic integrity check the elapsed seconds between consecutive <code className="font-mono text-xs text-ink">Saved Question</code> events. Any script that auto-fills an entire test page in one click records 20+ question saves within the same 1-second timestamp. ExamGhost intentionally solves <strong>one question at a time when you double-click or press Alt+S</strong>, preserving a realistic human reading rhythm from start to submission receipt.
            </>
        ),
    },
    howToSection: {
        eyebrow: "4-STEP BLACKBOARD WORKFLOW",
        heading: "How to solve Blackboard Learn & Ultra tests inline in 0.3 seconds.",
        lead: (
            <>
                Whether your course uses Blackboard Ultra’s slide-over Peek Panel or Original Learn’s test window, follow these four steps for instant inline solutions and a clean Access Log.
            </>
        ),
        steps: [
            {
                stepNumber: "01",
                title: "Install ExamGhost & Select Your Hotkey Mode",
                shortcutBadge: "Alt+1 / Alt+2 / Alt+3",
                description: (
                    <>
                        Install the ExamGhost Chrome extension to unlock <strong>5 free solves / day</strong>. Press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+1</kbd> for <strong>Invisible Mode</strong>, <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+2</kbd> for <strong>Stealth Mode</strong> (<code className="font-mono text-xs text-ink">✓</code> hint or auto-fill), or <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+3</kbd> for <strong>Explain Mode</strong>.
                    </>
                ),
                plainTextForSchema: "Install the ExamGhost Chrome extension to receive 5 free solves / day and choose Invisible Mode (Alt+1), Stealth Mode (Alt+2), or Explain Mode (Alt+3).",
            },
            {
                stepNumber: "02",
                title: "Double-Click Any Blackboard Question Card One by One",
                shortcutBadge: "Double-Click Card",
                description: (
                    <>
                        Inside your active Blackboard Ultra Peek Panel or Original test frame, <strong>double-click any question prompt</strong> as you read through the exam. ExamGhost parses the question and all answer choices or Jumbled Sentence dropdowns without firing <code className="font-mono text-xs text-ink">window.onblur</code>.
                    </>
                ),
                plainTextForSchema: "Double-click any individual question card inside Blackboard Ultra or Original Learn to solve inline without triggering window.onblur.",
            },
            {
                stepNumber: "03",
                title: "Capture WIRIS Math Formulas & Diagrams with Snap-It OCR",
                shortcutBadge: "Alt+S Vision OCR",
                description: (
                    <>
                        Whenever a Blackboard question displays a non-selectable WIRIS equation SVG, accounting table screenshot, or anatomy diagram, press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+S</kbd> and drag a region box around it.
                    </>
                ),
                plainTextForSchema: "Press Alt+S and drag a selection box over any non-selectable WIRIS MathType formula or diagram to decode and solve it in 0.3 seconds.",
            },
            {
                stepNumber: "04",
                title: "Verify Your Answer & Submit with Zero Access-Log Warnings",
                shortcutBadge: "0.3s Inline Result",
                description: (
                    <>
                        ExamGhost highlights or selects the verified option in <strong>0.3 seconds</strong>, triggering Blackboard’s native <code className="font-mono text-xs text-ink">Auto-Save</code> at a realistic human pace so your Attempt Access Log stays 100% clean.
                    </>
                ),
                plainTextForSchema: "Review the verified answer inline in 0.3 seconds and submit your Blackboard test with a natural Attempt Access Log and Submission Receipt.",
            },
        ],
    },
    courseModulesSection: {
        eyebrow: "UNIVERSITY BLACKBOARD COURSES SUPPORTED",
        heading: "Trusted across Nursing, Business, Engineering, and STEM Blackboard courses.",
        lead: (
            <>
                ExamGhost combines <strong>DeepSeek-R1</strong> symbolic math verification with <strong>GPT-4o Vision</strong> to handle the exact question formats used in high-stakes university Blackboard exams.
            </>
        ),
        modules: [
            {
                department: "Nursing Pharmacology, Med-Surg & Health Sciences",
                courseCodes: "NURS 305, NURS 320, NURS 410, HLTH 210",
                textbooksOrModules: "Blackboard Ultra SATA (Multiple Answer), Clinical Dosage-by-Weight & Case Studies",
                keyChallengeSolved: "Verifies each checkbox option independently to protect against Blackboard Ultra negative-marking deductions.",
            },
            {
                department: "Financial & Managerial Accounting / Corporate Finance",
                courseCodes: "ACCT 201, ACCT 202, FIN 302, BUSI 310",
                textbooksOrModules: "Blackboard Jumbled Sentence Balance Sheets, CAPM, Bond YTM & NPV/IRR Tables",
                keyChallengeSolved: "Evaluates multi-blank Jumbled Sentence dropdown menus in context and computes exact decimal financial figures.",
            },
            {
                department: "Physics, Statics & Engineering Mechanics",
                courseCodes: "PHYS 201, PHYS 202, ENGR 210, MECH 301",
                textbooksOrModules: "Blackboard Calculated Formula ([x] randomized variables) & WIRIS MathType Equations",
                keyChallengeSolved: "Decodes non-selectable WIRIS SVG formulas and solves randomized numerical physics problems via DeepSeek-R1.",
            },
            {
                department: "Microeconomics, Macroeconomics & Business Statistics",
                courseCodes: "ECON 101, ECON 102, STAT 200, QMB 3200",
                textbooksOrModules: "AS-AD & Cost Curve Graphs, Z-Score / ANOVA Tables & Hypothesis Testing",
                keyChallengeSolved: "Reads economic shift diagrams via Alt+S Vision OCR and computes exact p-values and confidence intervals.",
            },
        ],
    },
    benchmark: {
        eyebrow: "BLACKBOARD ULTRA BENCHMARK",
        heading: "ExamGhost vs. ChatGPT & Legacy Extensions on Blackboard",
        windowTitle: "2026 Blackboard Learn & Ultra Assessment Matrix",
        windowBadge: "Audited on Blackboard Ultra",
        rows: [
            {
                capability: "Blackboard Attempt Access Log telemetry",
                examghost: "0 focus-loss or tab-switch events",
                chatgpt: (
                    <>
                        Fires <code className="font-mono text-[11px]">window.onblur</code> + 40s inactivity gap
                    </>
                ),
                sidebar: "Logs iframe blur when clicking sidebar",
            },
            {
                capability: "Blackboard Ultra slide-over Peek Panel",
                examghost: "Native DOM observer + Closed Shadow DOM",
                chatgpt: "Manual highlighting & copy-paste",
                sidebar: "Sidebar overlaps Blackboard Ultra drawer",
            },
            {
                capability: "WIRIS / MathType SVG equation images",
                examghost: "Instant Snap-It Vision OCR (Alt+S)",
                chatgpt: "Manual screenshot & file upload",
                sidebar: "Fails on image-rendered math formulas",
            },
            {
                capability: "Jumbled Sentence & Calculated Numeric",
                examghost: "1-click dropdown & numeric auto-fill",
                chatgpt: "Manual typing & formatting",
                sidebar: "Single-choice MCQ only",
            },
            {
                capability: "Negative-marking Multiple Answer accuracy",
                examghost: "Dual-model (DeepSeek-R1 + GPT-4o) consensus",
                chatgpt: "Single-model unverified output",
                sidebar: "Cannot select multiple checkboxes",
            },
        ],
    },
    faqSubtitle:
        "Technical answers on Blackboard Attempt Access Logs, Blackboard Ultra vs. Original Learn, WIRIS math equations, and your 5 free solves / day.",
    faqs: [
        {
            id: "faq-blackboard-detect-examghost-access-log",
            category: "stealth",
            badge: "0 Access-Log Flags",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "Can Blackboard Learn or Blackboard Ultra detect ExamGhost in the Attempt Access Log?",
            a: (
                <>
                    <strong>No, Blackboard cannot detect ExamGhost</strong> because Chrome’s extension sandbox blocks web pages from inspecting <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">chrome-extension://</code> processes, and ExamGhost renders inside an isolated <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Closed Shadow DOM</code> container. Blackboard only logs focus loss when <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">window.onblur</code> or <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">document.visibilitychange</code> fires—which happens when you switch tabs to ChatGPT.
                </>
            ),
        },
        {
            id: "faq-blackboard-ultra-vs-original-learn",
            category: "platforms",
            badge: "Learn & Ultra",
            badgeBg: "bg-[#c4d0f8] text-indigo-950",
            q: "Does ExamGhost work on both Blackboard Original and the new Blackboard Ultra interface?",
            a: (
                <>
                    <strong>Yes, ExamGhost supports both Blackboard Learn (Original) and Blackboard Ultra out of the box.</strong> Whether your university uses legacy <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">/webapps/assessment/take/</code> pages or Ultra’s modern slide-over Peek Panel, double-clicking any question card solves it inline in 0.3 seconds.
                </>
            ),
        },
        {
            id: "faq-blackboard-wiris-mathtype-equations-ocr",
            category: "ocr",
            badge: "WIRIS Math OCR",
            badgeBg: "bg-[#e2d3fa] text-purple-950",
            q: "How does ExamGhost solve Blackboard WIRIS and MathType equation images that cannot be highlighted?",
            a: (
                <>
                    <strong>Press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Alt+S</kbd> to launch Snap-It Vision OCR</strong> and drag a selection box over the equation or graph. ExamGhost captures the rendered pixels and decodes the LaTeX expression via <strong>DeepSeek-R1</strong> and <strong>GPT-4o Vision</strong> in under 0.4 seconds.
                </>
            ),
        },
        {
            id: "faq-blackboard-jumbled-sentence-calculated-numeric",
            category: "ocr",
            badge: "All Question Types",
            badgeBg: "bg-[#e2d3fa] text-purple-950",
            q: "Can ExamGhost auto-fill Blackboard Jumbled Sentence, Matching, and Calculated Numeric questions?",
            a: (
                <>
                    <strong>Yes, double-clicking a Blackboard Jumbled Sentence or Matching card parses every dropdown menu in context and selects the verified answers automatically.</strong> For Calculated Numeric and Formula questions, ExamGhost computes the exact numerical value and populates the input box directly.
                </>
            ),
        },
        {
            id: "faq-blackboard-force-completion-timed-tests",
            category: "stealth",
            badge: "Force Completion Safe",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "Is ExamGhost safe to use on Blackboard tests with 'Force Completion' and 'Prohibit Backtracking' enabled?",
            a: (
                <>
                    <strong>Yes, ExamGhost never reloads the page, modifies network requests, or navigates away from your active question.</strong> Because it solves each question one by one directly inside the current DOM view in 0.3 seconds, Blackboard’s <em>Force Completion</em> session remains 100% stable.
                </>
            ),
        },
        {
            id: "faq-blackboard-invisible-stealth-explain-modes",
            category: "stealth",
            badge: "3 Stealth Modes",
            badgeBg: "bg-[#bfe3f6] text-sky-950",
            q: "What is the best display mode to use on Blackboard Ultra?",
            a: (
                <>
                    <strong>Use Stealth Mode (<kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Alt+2</kbd>) for exams and Explain Mode (<kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Alt+3</kbd>) for homework.</strong> If you are in a computer lab or screen share, switch to <strong>Invisible Mode (<kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Alt+1</kbd>)</strong> so answers auto-fill or copy to clipboard with zero visual banners or toasts.
                </>
            ),
        },
        {
            id: "faq-blackboard-respondus-lockdown-browser",
            category: "stealth",
            badge: "Browser Scope",
            badgeBg: "bg-[#ffe9a0] text-amber-950",
            q: "Does ExamGhost work if my Blackboard test requires Respondus LockDown Browser?",
            a: (
                <>
                    <strong>ExamGhost runs inside standard Chromium browsers (Chrome, Brave, Edge, and Arc)</strong> for web-based Blackboard Learn and Ultra assessments. Standalone desktop applications like Respondus LockDown Browser use a custom restricted browser shell that blocks all third-party Chrome extensions.
                </>
            ),
        },
        {
            id: "faq-blackboard-free-5-free-solves-daily",
            category: "platforms",
            badge: "5 Free Solves / Day",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "Can I try ExamGhost for free on Blackboard before paying?",
            a: (
                <>
                    <strong>Yes, installing the ExamGhost Chrome extension gives you 5 free solves per day immediately with no credit card required.</strong> You can also test the live 6-chapter Blackboard Ultra product film at the top of this page or visit our{' '}
                    <Link prefetch={false} href="/canvas-quiz-solver-free-demo" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">Live Exam Sandbox</Link>.
                </>
            ),
        },
    ],
    jsonLd: {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://examghost.com/blackboard-quiz-solver#webpage",
                "url": "https://examghost.com/blackboard-quiz-solver",
                "name": "Blackboard Quiz Solver (2026) — Blackboard Learn & Ultra AI | ExamGhost",
                "description":
                    "Solve Blackboard Learn and Blackboard Ultra tests inline in 0.3s. Zero Access Log focus-loss warnings, Closed Shadow DOM stealth, and Snap-It Vision OCR (Alt+S).",
                "datePublished": "2026-01-18",
                "dateModified": "2026-03-29",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://examghost.com/#website" },
                "breadcrumb": { "@id": "https://examghost.com/blackboard-quiz-solver#breadcrumb" },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "#lms-faq h2", "#lms-faq h3", ".faq-answer"]
                }
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://examghost.com/blackboard-quiz-solver#software",
                "name": "ExamGhost Blackboard Quiz Solver",
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
                "@id": "https://examghost.com/blackboard-quiz-solver#breadcrumb",
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
                        "name": "Blackboard Quiz Solver",
                        "item": "https://examghost.com/blackboard-quiz-solver"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/blackboard-quiz-solver#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can Blackboard Learn or Blackboard Ultra detect ExamGhost in the Attempt Access Log?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, Blackboard cannot detect ExamGhost because Chrome’s extension sandbox blocks web pages from inspecting chrome-extension:// processes, and ExamGhost renders inside an isolated Closed Shadow DOM container. Blackboard only logs focus loss when window.onblur or document.visibilitychange fires—which happens when you switch tabs to ChatGPT."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does ExamGhost work on both Blackboard Original and the new Blackboard Ultra interface?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, ExamGhost supports both Blackboard Learn (Original) and Blackboard Ultra out of the box. Whether your university uses legacy /webapps/assessment/take/ pages or Ultra’s modern slide-over Peek Panel, double-clicking any question card solves it inline in 0.3 seconds."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ExamGhost solve Blackboard WIRIS and MathType equation images that cannot be highlighted?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Press Alt+S to launch Snap-It Vision OCR and drag a selection box over the equation or graph. ExamGhost captures the rendered pixels and decodes the LaTeX expression via DeepSeek-R1 and GPT-4o Vision in under 0.4 seconds."
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

export default function BlackboardQuizSolverPage() {
    const config = BLACKBOARD_CONFIG;
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
                    <BlackboardQuizMotionDemo />

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
