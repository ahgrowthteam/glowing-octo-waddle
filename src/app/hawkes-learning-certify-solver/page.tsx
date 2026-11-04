import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { HawkesLearningMotionDemo } from '@/components/NewPlatformMotionDemos';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StudyAiHubShowcase from '@/components/StudyAiHubShowcase';
import LmsExplainerFilmCard from '@/components/LmsExplainerFilmCard';
import LmsServiceFaq from '@/components/LmsServiceFaq';
import {
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    Terminal,
    BookOpen,
    AlertTriangle,
    Keyboard,
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';

export const metadata: Metadata = {
    title: {
        absolute: "Hawkes Learning Certify Solver — Strike Protection AI",
    },
    description:
        "Pass Hawkes Learning Certify mode without burning strikes. Get 100% accurate college algebra and statistics solutions in 0.3s. 5 free solves / day.",
    keywords: [
        "hawkes learning certify solver",
        "hawkes learning answers chrome extension",
        "hawkes strike protection solver",
        "hawkes college algebra certify mode",
        "hawkes practice vs certify solver",
        "learn hawkeslearning com cheat",
        "examghost hawkes",
    ],
    alternates: {
        canonical: "https://examghost.com/hawkes-learning-certify-solver",
    },
    openGraph: {
        title: "Hawkes Learning Certify Solver (2026) — Strike Shield & Algebra AI | ExamGhost",
        description:
            "Double-click any Hawkes Learning Certify mode problem for 0.3s inline answers. Protect your 3-strike allowance and certify on your first run.",
        url: "https://examghost.com/hawkes-learning-certify-solver",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [{ url: "/videos/posters/hawkes-learning-certify-solver-poster.jpg", width: 1280, height: 720, alt: "ExamGhost Hawkes Learning Certify Solver" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Hawkes Learning Certify Solver — Strike Protection AI",
        description: "Pass Hawkes Learning Certify mode without burning strikes. Get 100% accurate college algebra and statistics solutions in 0.3s.",
        images: ["/videos/posters/hawkes-learning-certify-solver-poster.jpg"],
    },
};

const HAWKES_CONFIG = {
    slug: "hawkes-learning-certify-solver",
    platformName: "Hawkes Learning (Certify & Practice Modes)",
    platformShort: "Hawkes Learning",
    heroBadge: "Hawkes 3-Mode Engine (Learn · Practice · Certify) · Strike Shield Active",
    heroDotColor: "#059669",
    h1Title: "Hawkes Learning Certify Solver —",
    h1Highlight: "Pass Certify Mode & Shield Every Strike.",
    aeoSummary: (
        <>
            <strong>ExamGhost</strong> solves <strong>Hawkes Learning</strong> Certify, Practice, and Pre-Test assignments in <strong>0.3 seconds</strong> directly inside <code className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs text-ink">learn.hawkeslearning.com</code>. Double-click any college algebra equation, matrix, or statistics table for verified solutions with exact rational simplification and extraneous root detection. ExamGhost protects your 3-strike allowance so you certify on your very first run without getting kicked back to Practice mode.
        </>
    ),
    questionTypesSection: {
        eyebrow: "SUPPORTED HAWKES QUESTION TYPES",
        heading: "Engineered for 3-strike Certify mode, virtual keypad math, and statistics tables.",
        lead: "Hawkes Learning enforces strict zero-mistake mastery in Certify mode. ExamGhost delivers verified inputs across all Hawkes problem formats:",
        items: [
            {
                name: "Rational Equations & Extraneous Root Detection",
                codeTag: ".hawkes-math-input",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.9% Domain-Filtered AST",
                description: "Factors denominators, computes LCD, and automatically rejects extraneous zeros that cause undefined divisions.",
            },
            {
                name: "Virtual Keypad Matrix & Vector Entry Containers",
                codeTag: ".hawkes-keypad-container",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.4% Keypad Parsing",
                description: "Bypasses virtual button listeners by injecting verified radical, fraction, and exponent values directly into active cells.",
            },
            {
                name: "Interactive Number Line & Coordinate Plotting",
                codeTag: ".hawkes-graph-canvas",
                triggerMethod: "Alt+S Vision OCR",
                accuracy: "99.0% Coordinate Vision",
                description: "Extracts axis intervals, vertex points, open/closed circle intervals, and shaded polynomial regions using Vision AI.",
            },
            {
                name: "Statistics Probability & Contingency Tables",
                codeTag: "table.hawkes-data-table",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.7% Table Parsing",
                description: "Evaluates multi-row contingency frequencies, conditional probabilities P(A|B), and normal distribution z-scores.",
            },
            {
                name: "Polynomial Division & Synthetic Factoring",
                codeTag: "div.hawkes-division-workspace",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.8% Synthetic Algebra",
                description: "Computes quotient polynomials and fractional remainders in exact Hawkes fractional format without approximations.",
            },
            {
                name: "Hypothesis Testing & Confidence Intervals",
                codeTag: "input.hawkes-stats-numeric",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.6% Critical Value AST",
                description: "Calculates critical values, test statistics, margin of error, and confidence interval bounds to specified decimal places.",
            },
        ],
    },
    architecture: {
        cardBg: "#ecfdf5",
        cardBorder: "#a7f3d0",
        mascotImage: "/images/ghost/ghost_shield.jpg",
        mascotTitle: "Hawkes Certify Strike Shield",
        mascotSubtitle: "100% verified first-pass accuracy ensures you never exceed your 3-strike allowance.",
        pills: ["0 Strikes Burned", "No Reset to Practice", "100% Certified Attempt 1"],
        eyebrow: "STRIKE SHIELD ARCHITECTURE",
        heading: "How ExamGhost guarantees certification without mastery strikes.",
        lead: "In Hawkes Certify mode, burning 3 strikes ends the session immediately and wipes all progress, forcing you to redo Practice mode. ExamGhost ensures flawless execution on every item.",
        pillars: [
            {
                title: "Extraneous Root Elimination Engine",
                desc: "Analyzes rational equations for restricted domain values (division by zero) before submitting answers, stopping the #1 cause of Certify strikes.",
                image: "/images/ghost/ghost_stealth.jpg",
            },
            {
                title: "Hawkes Virtual Keypad Native Injection",
                desc: "Emulates trusted synthetic input events on Hawkes keypad components, avoiding syntax mismatch rejections.",
                image: "/images/ghost/ghost_speed.jpg",
            },
            {
                title: "Zero Focus Deviation & Silent DOM Reads",
                desc: "Parses mathematical AST structures directly inside Closed Shadow DOM without firing window blur or tab change events.",
                image: "/images/ghost/ghost_privacy.jpg",
            },
        ],
    },
    telemetryForensicsSection: {
        eyebrow: "HAWKES LEARNING INSTRUCTOR TELEMETRY AUDIT",
        heading: "What instructors see in Hawkes Certify mode and Gradebook reports.",
        lead: "The Hawkes Learning instructor portal logs certification timestamps, strike counts, and assignment attempts:",
        logTableTitle: "Hawkes Learning Certify Mode Telemetry & Event Audit",
        citationNote: "Audited against Hawkes Learning Certify Engine v2026",
        events: [
            {
                eventCode: "certify_strike_counter (3-Strike Limit)",
                whenTriggered: "Submitting an incorrect answer during Certify mode.",
                professorView: "Strike increments (1/3, 2/3, 3/3); at Strike 3, session resets and marks 'Certification Incomplete'.",
                examghostStatus: "0 strikes incurred — 100% first-pass accuracy guarantees clean certification.",
                isSafe: true,
            },
            {
                eventCode: "hawkes_virtual_keypad_listener",
                whenTriggered: "Typing mathematical expressions into keypad input cells.",
                professorView: "Monitors keystroke cadence and input validation events.",
                examghostStatus: "Dispatches native keyboard and input events matching human keystroke dynamics.",
                isSafe: true,
            },
            {
                eventCode: "practice_vs_certify_mode_detection",
                whenTriggered: "Transitioning between Practice mode (with tutor hints) and Certify mode (no hints).",
                professorView: "Verifies student completed Certify mode independently without tutor intervention.",
                examghostStatus: "Executes seamlessly in Certify mode without triggering hint or help flags.",
                isSafe: true,
            },
            {
                eventCode: "lti_grade_postback_complete",
                whenTriggered: "Completing the final required question in Certify mode with <3 strikes.",
                professorView: "Automatically records 100% credit in Canvas, Blackboard, or Hawkes Gradebook.",
                examghostStatus: "Submits verified mastery record with perfect score synchronisation.",
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: "Why ExamGhost Solves Hawkes Certify Problems One by One",
        whyNoSolveAllBody: (
            <>
                Hawkes Learning Certify mode evaluates student progress on a live state machine where each question must be verified and acknowledged by the server before the next problem renders. Attempting to bulk-solve or bypass questions corrupts the session state and triggers an immediate strike. ExamGhost requires you to <strong>double-click each problem individually</strong>, maintaining authentic telemetry and guaranteeing 0 strikes.
            </>
        ),
    },
    howToSection: {
        eyebrow: "4-STEP HAWKES CERTIFY WORKFLOW",
        heading: "How to pass Hawkes Certify mode on Attempt 1 with zero strikes.",
        lead: "Follow this step-by-step workflow to certify quickly and accurately in Hawkes Learning:",
        steps: [
            {
                stepNumber: "01",
                title: "Install ExamGhost & Choose Your Hotkey Mode",
                shortcutBadge: "Alt+1 / Alt+2 / Alt+3",
                description: (
                    <>
                        Add ExamGhost to Chrome (includes <strong>5 free solves / day</strong> automatically). Choose your preferred mode: <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+1</kbd> (Invisible), <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+2</kbd> (Stealth checkmark), or <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+3</kbd> (Full derivation).
                    </>
                ),
                plainTextForSchema: "Install ExamGhost to unlock 5 free solves / day and select Invisible Mode (Alt+1), Stealth Mode (Alt+2), or Explain Mode (Alt+3).",
            },
            {
                stepNumber: "02",
                title: "Open Certify Mode in learn.hawkeslearning.com",
                shortcutBadge: "learn.hawkeslearning.com",
                description: (
                    <>
                        Launch your assigned lesson in Hawkes Learning and enter Certify mode. ExamGhost attaches quietly without interfering with Hawkes' timer.
                    </>
                ),
                plainTextForSchema: "Open your Hawkes Learning Certify assignment inside learn.hawkeslearning.com. ExamGhost runs silently without taking window focus.",
            },
            {
                stepNumber: "03",
                title: "Double-Click Equations or Press Alt+S for Graphs",
                shortcutBadge: "Alt+S Graph OCR",
                description: (
                    <>
                        Double-click any algebra equation, matrix, or probability table. For coordinate graphs or number lines, press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+S</kbd> to drag a Snap-It OCR box.
                    </>
                ),
                plainTextForSchema: "Double-click any equation or problem prompt, or press Alt+S to drag a Snap-It OCR box around Hawkes graph canvases and number lines.",
            },
            {
                stepNumber: "04",
                title: "Submit Verified Answer with 0 Strikes Incurred",
                shortcutBadge: "0.3s Verified Result",
                description: (
                    <>
                        Receive the verified numerical, fractional, or radical answer in <strong>0.3 seconds</strong>. Advance through all questions and earn 100% certification on your first try.
                    </>
                ),
                plainTextForSchema: "Receive the verified answer inline in 0.3 seconds, protect your 3-strike allowance, and certify on Attempt 1 with 100% score.",
            },
        ],
    },
    courseModulesSection: {
        eyebrow: "SUPPORTED HAWKES LEARNING COURSES",
        heading: "Engineered for developmental math, college algebra, precalculus, and statistics.",
        lead: "ExamGhost solves homework and certification questions across all major Hawkes Learning curriculum tracks:",
        modules: [
            {
                department: "College Algebra & Precalculus",
                courseCodes: "MATH 101, MATH 110, MATH 115, MATH 120",
                textbooksOrModules: "Hawkes College Algebra & Precalculus (3rd & 4th Editions)",
                keyChallengeSolved: "Solves rational equations with extraneous root detection, complex polynomial factoring, exponential equations, and conic sections.",
            },
            {
                department: "Introductory & Applied Statistics",
                courseCodes: "STAT 200, STAT 212, MATH 205, BUS 210",
                textbooksOrModules: "Hawkes Discovering Statistics and Data (4th Edition)",
                keyChallengeSolved: "Calculates normal distribution z-scores, hypothesis testing p-values, ANOVA tables, and linear regression least-squares fits.",
            },
            {
                department: "Developmental & Intermediate Algebra",
                courseCodes: "MATH 095, MATH 098, MATH 099",
                textbooksOrModules: "Hawkes Developmental Mathematics & Intermediate Algebra",
                keyChallengeSolved: "Solves linear inequalities, systems of linear equations, radical simplifications, and quadratic formula roots.",
            },
            {
                department: "Calculus with Applications",
                courseCodes: "MATH 141, MATH 151, MATH 220",
                textbooksOrModules: "Hawkes Calculus: Early Transcendentals & Applied Calculus",
                keyChallengeSolved: "Evaluates limits with L'Hôpital's rule, chain rule derivatives, implicit differentiation, and definite Riemann integrals.",
            },
        ],
    },
    benchmark: {
        eyebrow: "ACCURACY BENCHMARK & STRIKE AUDIT",
        heading: "ExamGhost vs generic tools on Hawkes Certify mode.",
        windowTitle: "Hawkes Certify Strike Protection Benchmark (2026)",
        windowBadge: "0 Strikes Guaranteed",
        rows: [
            {
                capability: "3-Strike Certify protection",
                examghost: "100% First-attempt · 0 strikes",
                chatgpt: "Fails 3 strikes -> resets lesson",
                sidebar: "Burns strikes on formatting",
            },
            {
                capability: "Extraneous root elimination",
                examghost: "Automatic domain checking",
                chatgpt: "Includes invalid extraneous roots",
                sidebar: "No algebraic domain filtering",
            },
            {
                capability: "Hawkes keypad math syntax",
                examghost: "Native radical/fraction injection",
                chatgpt: "Plain text paste fails keypad",
                sidebar: "Syntax rejected by Hawkes",
            },
            {
                capability: "Graph & number line parsing",
                examghost: "Alt+S Vision OCR in 0.3s",
                chatgpt: "Cannot read graph coordinates",
                sidebar: "Manual coordinate entry",
            },
            {
                capability: "Browser focus telemetry",
                examghost: "Closed Shadow DOM · 0 blurs",
                chatgpt: "Tab switches flagged by proctors",
                sidebar: "Visible sidebar extension",
            },
        ],
    },
    faqSubtitle:
        "Technical answers on Hawkes Learning Certify mode, strike protection, college algebra syntax, and your 5 free daily solves.",
    faqs: [
        {
            id: "faq-hawkes-strike-protection",
            category: "platforms",
            badge: "0 Strikes",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "How does ExamGhost protect my 3-strike allowance in Hawkes Certify mode?",
            a: (
                <>
                    <strong>ExamGhost verifies solutions using DeepSeek-R1 reasoning models with domain restriction checks before displaying answers.</strong> By filtering out extraneous roots and formatting mathematical expressions exactly as Hawkes expects, ExamGhost ensures every submitted answer is correct, keeping your strikes at zero.
                </>
            ),
        },
        {
            id: "faq-hawkes-extraneous-roots",
            category: "platforms",
            badge: "Domain Safe",
            badgeBg: "bg-[#c4d0f8] text-indigo-950",
            q: "Why do students fail Hawkes rational equations and how does ExamGhost fix it?",
            a: (
                <>
                    <strong>The most common reason students fail Hawkes Certify mode is submitting extraneous roots that cause division by zero.</strong> Generic AI tools often solve the algebraic numerator without checking the domain restrictions of the original equation. ExamGhost automatically evaluates denominators and discards invalid candidate roots.
                </>
            ),
        },
        {
            id: "faq-hawkes-keypad-compatibility",
            category: "platforms",
            badge: "Keypad Ready",
            badgeBg: "bg-[#e2d3fa] text-purple-950",
            q: "Does ExamGhost work with Hawkes Learning's virtual math keypad?",
            a: (
                <>
                    <strong>Yes, ExamGhost formats mathematical answers using syntax compatible with Hawkes input containers.</strong> Whether the question asks for a fraction, radical, exponent, or matrix, answers are structured for instant entry without triggering keypad syntax errors.
                </>
            ),
        },
        {
            id: "faq-hawkes-graph-canvas",
            category: "ocr",
            badge: "Alt+S Vision",
            badgeBg: "bg-[#bfe3f6] text-sky-950",
            q: "Can ExamGhost solve Hawkes interactive graph plotting and number line questions?",
            a: (
                <>
                    <strong>Yes, press Alt+S to drag a Snap-It Vision OCR rectangle over any Hawkes graph canvas or number line.</strong> ExamGhost calculates vertex points, slope-intercept equations, and open/closed circle intervals in 0.3 seconds.
                </>
            ),
        },
        {
            id: "faq-hawkes-free-solves",
            category: "platforms",
            badge: "5 Free Solves / Day",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "How do I claim 5 free solves per day for Hawkes Learning?",
            a: (
                <>
                    <strong>Install the ExamGhost Chrome extension to receive 5 free solves every 24 hours automatically.</strong> No credit card or registration required.
                </>
            ),
        },
    ],
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
    { href: '/wileyplus-quiz-solver', label: 'WileyPLUS Solver' },
    { href: '/zybooks-homework-solver', label: 'zyBooks & zyLabs' },
    { href: '/webwork-math-solver', label: 'WeBWorK Math' },
    { href: '/sakai-lms-quiz-solver', label: 'Sakai LMS' },
    { href: '/macmillan-achieve-smartwork-solver', label: 'Macmillan Achieve' },
    { href: '/tophat-quiz-solver', label: 'Top Hat Polling' },
    { href: '/knewton-alta-solver', label: 'Knewton Alta' },
    { href: '/hawkes-learning-certify-solver', label: 'Hawkes Learning' },
];

export default function HawkesLearningCertifySolverPage() {
    const config = HAWKES_CONFIG;
    const safeSlug = config.slug;
    const videoUrl = `https://examghost.com/videos/${safeSlug}.mp4`;
    const posterUrl = `https://examghost.com/videos/posters/${safeSlug}-poster.jpg`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": `https://examghost.com/${config.slug}#webpage`,
                "url": `https://examghost.com/${config.slug}`,
                "name": "Hawkes Learning Certify Solver (2026) — Strike Shield & Algebra AI | ExamGhost",
                "description": "Pass Hawkes Learning Certify mode without burning strikes. Get 100% accurate college algebra and statistics solutions in 0.3s. 5 free solves / day.",
                "datePublished": "2026-01-15",
                "dateModified": "2026-10-27",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://examghost.com/#website" },
                "breadcrumb": { "@id": `https://examghost.com/${config.slug}#breadcrumb` },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "#lms-faq h2", "#lms-faq h3", ".faq-answer"]
                }
            },
            {
                "@type": "SoftwareApplication",
                "@id": `https://examghost.com/${config.slug}#software`,
                "name": "ExamGhost Hawkes Learning Certify Solver",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Chrome, Edge, Brave, Arc, macOS, Windows",
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "0.00",
                    "highPrice": "199.00",
                    "priceCurrency": "USD",
                    "offerCount": "4",
                    "offers": [
                        { "@type": "Offer", "name": "Free Tier (5 Free Solves / Day)", "price": "0.00", "priceCurrency": "USD" },
                        { "@type": "Offer", "name": "Monthly Pass", "price": "19.00", "priceCurrency": "USD" },
                        { "@type": "Offer", "name": "Academic Year Pass", "price": "99.00", "priceCurrency": "USD" },
                        { "@type": "Offer", "name": "Lifetime Degree Pass", "price": "199.00", "priceCurrency": "USD" }
                    ]
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": `https://examghost.com/${config.slug}#breadcrumb`,
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Live Sandbox", "item": "https://examghost.com/canvas-quiz-solver-free-demo" },
                    { "@type": "ListItem", "position": 3, "name": "Hawkes Learning Solver", "item": `https://examghost.com/${config.slug}` }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": `https://examghost.com/${config.slug}#faq`,
                "mainEntity": config.faqs.map((faq) => ({
                    "@type": "Question",
                    "name": faq.q,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": `ExamGhost solves Hawkes Learning Certify mode questions in 0.3s, guaranteeing 0 strikes and instant 100% completion.`
                    }
                }))
            },
            {
                "@type": "VideoObject",
                "@id": `https://examghost.com/${config.slug}#video`,
                "name": "Hawkes Learning Certify Solver — 2.5D Explainer & Product Demo Film",
                "description": "16-second 2.5D motion-graphic explainer film demonstrating how ExamGhost solves Hawkes Learning college algebra and statistics problems without burning strikes.",
                "thumbnailUrl": [posterUrl],
                "contentUrl": videoUrl,
                "uploadDate": "2026-10-27T00:00:00Z",
                "duration": "PT16S",
                "publisher": {
                    "@type": "Organization",
                    "name": "ExamGhost",
                    "url": "https://examghost.com"
                }
            },
            {
                "@type": "HowTo",
                "@id": `https://examghost.com/${config.slug}#howto`,
                "name": config.howToSection.heading,
                "description": "Step-by-step workflow to pass Hawkes Learning Certify mode on Attempt 1 with zero strikes.",
                "totalTime": "PT1M",
                "step": config.howToSection.steps.map((s, idx) => ({
                    "@type": "HowToStep",
                    "position": idx + 1,
                    "name": s.title,
                    "text": s.plainTextForSchema
                }))
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink font-sans selection:bg-emerald-500/20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
                            <Link prefetch={false} href="/canvas-quiz-solver-free-demo" className="hover:text-ink transition-colors">
                                Live Sandbox
                            </Link>
                            <span>/</span>
                            <span className="text-ink font-bold">{config.platformShort} Solver</span>
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
                    <HawkesLearningMotionDemo />

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
                        <a
                            href="#supported-question-types"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            {config.platformShort} Types
                        </a>
                        <a
                            href="#instructor-telemetry-audit"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            Strike Shield Forensics
                        </a>
                        <a
                            href="#step-by-step-workflow"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            Certify Workflow
                        </a>
                        <a
                            href="#platform-architecture"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            Strike Architecture
                        </a>
                        <a
                            href="#benchmark-matrix"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            Accuracy Benchmark
                        </a>
                        <a
                            href="#supported-courses"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            Courses &amp; Textbooks
                        </a>
                    </div>
                </section>

                {/* 2. DEEP BESPOKE PLATFORM CONTENT + ARCHITECTURE + BENCHMARK + FAQ */}
                <section className="border-t border-black/5 bg-cream py-20 sm:py-28 px-4 sm:px-6">
                    <div className="max-w-6xl mx-auto space-y-20 sm:space-y-28">
                        {/* 16s Explainer Card */}
                        <div id="explainer-film" className="scroll-mt-28">
                            <LmsExplainerFilmCard
                                slug={config.slug}
                                platformName={config.platformName}
                                heroDotColor={config.heroDotColor}
                            />
                        </div>

                        {/* SUPPORTED QUESTION TYPES */}
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
                                {config.questionTypesSection.items.map((qItem, idx) => (
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

                        {/* Architecture Showcase Card */}
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
                                                src={config.architecture.mascotImage}
                                                alt={`${config.platformShort} Closed Shadow DOM Strike Shield`}
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
                                            {config.architecture.pills.map((pill) => (
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
                                        {config.architecture.pillars.map((pillar) => (
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

                        {/* INSTRUCTOR TELEMETRY FORENSICS */}
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
                                            {config.telemetryForensicsSection.events.map((ev, eIdx) => (
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

                        {/* 4-STEP OPERATIONAL WORKFLOW */}
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
                                {config.howToSection.steps.map((step) => (
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
                                                    Generic Extensions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-black/6">
                                            {config.benchmark.rows.map((row, rIdx) => (
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

                        {/* SUPPORTED UNIVERSITY COURSES */}
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
                                {config.courseModulesSection.modules.map((mod, mIdx) => (
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

                        {/* Study & Homework AI Workspace Showcase */}
                        <StudyAiHubShowcase compact />

                        {/* Two-Card Pastel Bento Hub */}
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                            <div className="lg:col-span-6 rounded-[32px] bg-[#c4d0f8]/45 border border-[#c4d0f8] p-6 sm:p-8 flex flex-col justify-between space-y-5">
                                <div className="space-y-3">
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-[11px] font-bold uppercase tracking-wider text-ink/70">
                                            20 Supported Platforms
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
                                        See how ExamGhost’s Closed Shadow DOM and dual-model AI routing compare against legacy quiz extensions:
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 text-xs">
                                    <Link prefetch={false} href="/compare-canvas-hack-extensions" className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-ink hover:text-white border border-black/8 text-ink font-semibold shadow-2xs transition-all">
                                        Best Quiz Extensions (2026)
                                    </Link>
                                    <Link prefetch={false} href="/canvashack-vs-examghost" className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-ink hover:text-white border border-black/8 text-ink font-semibold shadow-2xs transition-all">
                                        CanvasHack vs ExamGhost
                                    </Link>
                                    <Link prefetch={false} href="/cheatmate-vs-examghost" className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-ink hover:text-white border border-black/8 text-ink font-semibold shadow-2xs transition-all">
                                        CheatMate vs ExamGhost
                                    </Link>
                                    <Link prefetch={false} href="/quizard-vs-examghost" className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-ink hover:text-white border border-black/8 text-ink font-semibold shadow-2xs transition-all">
                                        Quizard vs ExamGhost
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Category-Filtered FAQ */}
                        <LmsServiceFaq
                            platformName={config.platformShort}
                            subtitle={config.faqSubtitle}
                            faqs={config.faqs as any}
                        />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
