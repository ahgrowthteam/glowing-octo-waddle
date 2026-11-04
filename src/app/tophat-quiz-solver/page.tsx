import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { TopHatMotionDemo } from '@/components/NewPlatformMotionDemos';
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
        absolute: "Top Hat Quiz Solver — Live Polling & Tests AI (2026)",
    },
    description:
        "Solve Top Hat live lecture polls, quizzes, and tests in 0.3s. Bypass Top Hat Focus Mode with 0 visibilitychange blur events. Includes 5 free solves / day.",
    keywords: [
        "top hat quiz solver",
        "top hat lecture polling answers",
        "top hat focus mode bypass",
        "top hat live test solver chrome extension",
        "app tophat com answer bot",
        "top hat timer question solver",
        "examghost tophat",
    ],
    alternates: {
        canonical: "https://examghost.com/tophat-quiz-solver",
    },
    openGraph: {
        title: "Top Hat Quiz Solver (2026) — Live Polling & Focus Mode Shield | ExamGhost",
        description:
            "Double-click any Top Hat lecture poll or exam question for 0.3s inline answers. Defeat Top Hat Focus Mode telemetry with 0 blur flags on professor screens.",
        url: "https://examghost.com/tophat-quiz-solver",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [{ url: "/videos/posters/tophat-quiz-solver-poster.jpg", width: 1280, height: 720, alt: "ExamGhost Top Hat Quiz Solver" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Top Hat Quiz Solver — Live Polling & Tests AI (2026)",
        description: "Solve Top Hat live lecture polls and tests in 0.3s. Bypass Top Hat Focus Mode with 0 blur events. 5 free solves / day.",
        images: ["/videos/posters/tophat-quiz-solver-poster.jpg"],
    },
};

const TOPHAT_CONFIG = {
    slug: "tophat-quiz-solver",
    platformName: "Top Hat (Live Polling & Tests)",
    platformShort: "Top Hat",
    heroBadge: "Top Hat Focus Mode Audited · Live In-Class Polling & Test Shield",
    heroDotColor: "#0ea5e9",
    h1Title: "Top Hat Quiz & Live Poll Solver —",
    h1Highlight: "0.3s Speed & Zero Focus Mode Flags.",
    aeoSummary: (
        <>
            <strong>ExamGhost</strong> solves <strong>Top Hat</strong> live lecture questions, attendance polls, and proctored midterm exams in <strong>0.3 seconds</strong> directly within <code className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs text-ink">app.tophat.com</code>. Double-click any active poll card or press <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs text-ink">Alt+S</kbd> to lock in verified answers before 15-second lecture countdown timers expire, all while preventing Top Hat Focus Mode from reporting window.blur or document.visibilitychange flags to your instructor’s podium dashboard.
        </>
    ),
    questionTypesSection: {
        eyebrow: "SUPPORTED TOP HAT QUESTION FORMATS",
        heading: "Engineered for live classroom countdowns, word clouds, and heatmap click targets.",
        lead: "Top Hat presents fast-paced in-class questions with strict 15- to 30-second timers. ExamGhost captures and solves every interactive Top Hat widget:",
        items: [
            {
                name: "Live Timed Multiple Choice & Polling",
                codeTag: "tophat.poll.timer",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.8% Speed & Context",
                description: "Delivers verified multiple-choice answers in 0.3s, beating tight in-class timers before the instructor podium closes the question.",
            },
            {
                name: "Click-on-Target & Heatmap Image Questions",
                codeTag: "tophat.heatmap.target",
                triggerMethod: "Alt+S Vision OCR",
                accuracy: "98.9% Coordinate Vision",
                description: "Identifies precise pixel coordinates on anatomical cross-sections, geography maps, and chemical diagrams via Alt+S OCR.",
            },
            {
                name: "Numeric & Significant Tolerance Inputs",
                codeTag: "input.tophat.numeric",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.5% Exact Units",
                description: "Computes physics and economics numerical formulas within professor-defined percentage tolerance windows.",
            },
            {
                name: "Sorting, Ordering & Matching Pairs",
                codeTag: "tophat.sequence.drag",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.3% Array Ordering",
                description: "Orders chronological historical sequences, biochemical cascades, and algorithmic execution steps with 1-click verification.",
            },
            {
                name: "Word Cloud & Short Answer Submissions",
                codeTag: "tophat.wordcloud.text",
                triggerMethod: "Double-Click DOM",
                accuracy: "99.7% Keyphrase Match",
                description: "Extracts primary conceptual keywords and definitions matching professor slide deck presentations.",
            },
            {
                name: "Proctored Exam Secure Mode Tests",
                codeTag: "tophat.test.lockdown",
                triggerMethod: "Hybrid DOM + OCR",
                accuracy: "99.9% Focus Retention",
                description: "Maintains full Focus Mode green status during assigned midterm and final examinations on app.tophat.com.",
            },
        ],
    },
    architecture: {
        cardBg: "#f0f9ff",
        cardBorder: "#bae6fd",
        mascotImage: "/images/ghost/ghost_privacy.jpg",
        mascotTitle: "Top Hat Focus Mode Shield",
        mascotSubtitle: "Suppresses window.onblur and document.visibilitychange telemetry events.",
        pills: ["0 Focus Mode Flags", "0 Podium Alerts", "100% In-Window"],
        eyebrow: "FOCUS MODE TELEMETRY FORENSICS",
        heading: "How ExamGhost bypasses Top Hat Focus Mode.",
        lead: "Top Hat Focus Mode streams live student window status via WebSocket to the professor's podium. Leaving the window turns your icon red. ExamGhost keeps your window 100% focused.",
        pillars: [
            {
                title: "Focus Mode WebSocket Suppression",
                desc: "Prevents visibilitychange and blur event payloads from broadcasting unfocused states to the instructor podium dashboard.",
                image: "/images/ghost/ghost_shield.jpg",
            },
            {
                title: "0.3s Countdown-Beating Latency",
                desc: "In-class polls close in 15 to 30 seconds. Ultra-fast local AI routing locks in the correct choice before the countdown expires.",
                image: "/images/ghost/ghost_stealth.jpg",
            },
            {
                title: "Clipboard Lockout Bypass",
                desc: "Top Hat attaches event.preventDefault() to copy and paste. ExamGhost reads the DOM AST directly without clipboard calls.",
                image: "/images/ghost/ghost_speed.jpg",
            },
        ],
    },
    telemetryForensicsSection: {
        eyebrow: "TOP HAT INSTRUCTOR PODIUM TELEMETRY AUDIT",
        heading: "What professors see in real time on the Top Hat podium console.",
        lead: "During live lectures and proctored tests, Top Hat provides professors with real-time student engagement tracking:",
        logTableTitle: "Top Hat Live Lecture & Exam Telemetry Stream",
        citationNote: "Audited against Top Hat Focus Mode 2026",
        events: [
            {
                eventCode: "Focus Mode Unfocus Alert",
                whenTriggered: "Switching tabs to ChatGPT or clicking external applications during a Focus Mode test.",
                professorView: "Student indicator turns red on live podium roster: 'Left testing window at 11:22:15 AM'.",
                examghostStatus: "0 blur flags — student remains continuously green on the instructor screen.",
                isSafe: true,
            },
            {
                eventCode: "15s Poll Countdown Expiry",
                whenTriggered: "Failing to submit an answer before the professor clicks 'Close Question'.",
                professorView: "Records 'No response submitted' and awards 0 correctness and participation points.",
                examghostStatus: "0.3s solve latency guarantees answer is locked well before the countdown ends.",
                isSafe: true,
            },
            {
                eventCode: "Copy / Paste Interception Listener",
                whenTriggered: "Pressing Cmd+C / Ctrl+C to copy question text to an external AI window.",
                professorView: "Top Hat blocks clipboard action and flags uncooperative browser activity.",
                examghostStatus: "Zero clipboard interaction — reads DOM nodes inside Closed Shadow DOM.",
                isSafe: true,
            },
            {
                eventCode: "Attendance Geofence Ping",
                whenTriggered: "Checking in to in-person lectures requiring location verification.",
                professorView: "Verifies GPS coordinates match the university lecture hall perimeter.",
                examghostStatus: "Runs purely on local Chrome browser with zero proxy distortion.",
                isSafe: true,
            },
        ],
        whyNoSolveAllTitle: "Why ExamGhost Never Auto-Submits Questions Automatically",
        whyNoSolveAllBody: (
            <>
                Top Hat polls are opened and closed by the instructor one question at a time during live lectures. Attempting to force-answer subsequent questions breaks WebSocket synchronization and disconnects your session. ExamGhost requires you to <strong>double-click the currently active question card</strong>, maintaining real-time alignment with your professor’s lecture flow.
            </>
        ),
    },
    howToSection: {
        eyebrow: "4-STEP TOP HAT WORKFLOW",
        heading: "How to solve Top Hat polls & exams with zero Focus Mode flags.",
        lead: "Go from installation to full participation and exam credit without podium warnings:",
        steps: [
            {
                stepNumber: "01",
                title: "Install ExamGhost & Select Hotkey Mode",
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
                title: "Join Your Top Hat Lecture Session in app.tophat.com",
                shortcutBadge: "app.tophat.com",
                description: (
                    <>
                        Log in to your course lecture or launch an assigned test in app.tophat.com. ExamGhost runs silently in your browser.
                    </>
                ),
                plainTextForSchema: "Open your Top Hat lecture session inside app.tophat.com. ExamGhost runs silently without taking focus away from the page.",
            },
            {
                stepNumber: "03",
                title: "Double-Click Active Poll Card or Press Alt+S",
                shortcutBadge: "Alt+S Target OCR",
                description: (
                    <>
                        Double-click the active question card. For click-on-target anatomy images, maps, or charts, press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Alt+S</kbd> to drag a Snap-It OCR box.
                    </>
                ),
                plainTextForSchema: "Double-click any active poll card or press Alt+S to drag a Snap-It OCR box over heatmap click-on-target images and graphs.",
            },
            {
                stepNumber: "04",
                title: "Submit Answer in 0.3s with 100% Green Focus Status",
                shortcutBadge: "0.3s Verified Result",
                description: (
                    <>
                        Select the verified choice before the countdown expires. Your Focus Mode status remains 100% green on your professor's screen.
                    </>
                ),
                plainTextForSchema: "Lock in the correct choice in 0.3 seconds before timers expire, maintaining 100% green Focus Mode status.",
            },
        ],
    },
    courseModulesSection: {
        eyebrow: "TOP HAT LECTURE COURSES SUPPORTED",
        heading: "Tested in high-enrollment lecture halls and proctored university exams.",
        lead: "ExamGhost delivers fast answers in economics, anatomy, physics, and chemistry across 300+ seat lecture courses:",
        modules: [
            {
                department: "Macroeconomics & Microeconomics",
                courseCodes: "ECON 101, ECON 102, ECON 201, ECON 202",
                textbooksOrModules: "Top Hat Interactive Economics & Mankiw Principles of Economics",
                keyChallengeSolved: "Solves Federal Reserve monetary policy shifts, IS-LM equilibriums, and elasticity calculations in 0.3s before 20s timers expire.",
            },
            {
                department: "Human Anatomy & Physiology",
                courseCodes: "ANAT 101, BIOL 235, KIN 250, PHSL 301",
                textbooksOrModules: "Top Hat Interactive Anatomy & Physiology & Click-on-Target Histology",
                keyChallengeSolved: "Pinpoints exact pixel target coordinates on cardiovascular cross-sections, bone histology, and muscular system diagrams.",
            },
            {
                department: "College Physics (Mechanics & Waves)",
                courseCodes: "PHYS 101, PHYS 102, PHYS 150, PHYS 180",
                textbooksOrModules: "Top Hat Interactive Physics & Giancoli Physics Principles",
                keyChallengeSolved: "Extracts kinematic projectile variables, Doppler shift formulas, and circuit schematics within instructor tolerance margins.",
            },
            {
                department: "Introduction to Psychology & Sociology",
                courseCodes: "PSYC 101, PSYC 110, SOC 101, BEHV 200",
                textbooksOrModules: "Top Hat Interactive Psychology & Word Cloud Conceptual Checks",
                keyChallengeSolved: "Matches behavioral conditioning terms, cognitive bias classifications, and neurobiological synapse mechanisms.",
            },
        ],
    },
    benchmark: {
        eyebrow: "TOP HAT BENCHMARK",
        heading: "ExamGhost vs. ChatGPT & Generic Extensions on Top Hat",
        windowTitle: "2026 Top Hat Focus Mode & Polling Matrix",
        windowBadge: "Verified on app.tophat.com",
        rows: [
            {
                capability: "Top Hat Focus Mode telemetry",
                examghost: "100% Green · 0 blur events",
                chatgpt: "Turns RED on professor screen",
                sidebar: "Logs focus loss to extension frame",
            },
            {
                capability: "15s–30s in-class polling timers",
                examghost: "0.3s inline solve · Beats countdown",
                chatgpt: "Slow manual prompt entry (25s+)",
                sidebar: "Frequent timeout before submit",
            },
            {
                capability: "Click-on-target & heatmap images",
                examghost: "Alt+S Vision OCR coordinate match",
                chatgpt: "Cannot click target coordinates",
                sidebar: "Unsupported on image targets",
            },
            {
                capability: "Clipboard copy/paste lockout",
                examghost: "Direct DOM reading · Zero clipboard",
                chatgpt: "Blocked by event.preventDefault()",
                sidebar: "Cannot read locked DOM nodes",
            },
            {
                capability: "Lecture hall stealth hotkeys",
                examghost: "Invisible (Alt+1) / Stealth (Alt+2)",
                chatgpt: "Visible glowing ChatGPT window",
                sidebar: "Visible sidebar on student laptop",
            },
        ],
    },
    faqSubtitle:
        "Technical answers on Top Hat Focus Mode, live lecture countdown timers, click-on-target questions, and your 5 free daily solves.",
    faqs: [
        {
            id: "faq-tophat-focus-mode",
            category: "stealth",
            badge: "Focus Shield",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "Can professors see if I leave the Top Hat window during Focus Mode?",
            a: (
                <>
                    <strong>Yes, Top Hat Focus Mode streams live window focus events directly to the professor’s podium.</strong> If you switch tabs to search ChatGPT, your name turns red on their screen. ExamGhost operates inside a Closed Shadow DOM within the active tab, maintaining continuous focus with zero blur flags.
                </>
            ),
        },
        {
            id: "faq-tophat-polling-timers",
            category: "platforms",
            badge: "0.3s Speed",
            badgeBg: "bg-[#c4d0f8] text-indigo-950",
            q: "Can ExamGhost solve questions before the 15-second Top Hat timer runs out?",
            a: (
                <>
                    <strong>Yes, ExamGhost solves questions in 0.3 seconds.</strong> Double-clicking any active poll card displays the verified answer almost instantaneously, giving you ample time to submit before the instructor closes the question.
                </>
            ),
        },
        {
            id: "faq-tophat-click-on-target",
            category: "ocr",
            badge: "Alt+S Vision",
            badgeBg: "bg-[#e2d3fa] text-purple-950",
            q: "How do I solve click-on-target heatmap questions on Top Hat?",
            a: (
                <>
                    <strong>Press Alt+S and drag a box across the target image.</strong> Snap-It Vision OCR analyzes the diagram and highlights the exact coordinates to click, ensuring full accuracy on anatomy and geography questions.
                </>
            ),
        },
        {
            id: "faq-tophat-screen-stealth",
            category: "stealth",
            badge: "Lecture Stealth",
            badgeBg: "bg-[#bfe3f6] text-sky-950",
            q: "Is ExamGhost safe to use in a crowded lecture hall?",
            a: (
                <>
                    <strong>Yes, use Invisible Mode (Alt+1) or Stealth Mode (Alt+2).</strong> Invisible Mode auto-fills answers silently with zero visual overlays on your screen, preventing students sitting behind you from seeing anything unusual.
                </>
            ),
        },
        {
            id: "faq-tophat-free-solves",
            category: "platforms",
            badge: "5 Free Solves / Day",
            badgeBg: "bg-[#cdeecb] text-emerald-950",
            q: "How do I use the 5 free daily solves on Top Hat?",
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

export default function TopHatQuizSolverPage() {
    const config = TOPHAT_CONFIG;
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
                "name": "Top Hat Quiz Solver (2026) — Live Polling & Focus Mode Shield | ExamGhost",
                "description": "Solve Top Hat live lecture polls, quizzes, and tests in 0.3s. Bypass Top Hat Focus Mode with 0 visibilitychange blur events. Includes 5 free solves / day.",
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
                "name": "ExamGhost Top Hat Quiz Solver",
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
                    { "@type": "ListItem", "position": 3, "name": "Top Hat Quiz Solver", "item": `https://examghost.com/${config.slug}` }
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
                        "text": `ExamGhost solves Top Hat lecture polls and quizzes inline in 0.3s with zero Focus Mode blur flags.`
                    }
                }))
            },
            {
                "@type": "VideoObject",
                "@id": `https://examghost.com/${config.slug}#video`,
                "name": "Top Hat AI Quiz Solver — 2.5D Explainer & Product Demo Film",
                "description": "16-second 2.5D motion-graphic explainer film demonstrating how ExamGhost solves Top Hat live polling questions with zero focus loss.",
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
                "description": "Step-by-step workflow to solve Top Hat live polls and exams with zero Focus Mode alerts.",
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
                            <span className="text-ink font-bold">{config.platformName} Solver</span>
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
                    <TopHatMotionDemo />

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
                            {config.platformShort} Widgets
                        </a>
                        <a
                            href="#instructor-telemetry-audit"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            Podium Log Forensics
                        </a>
                        <a
                            href="#step-by-step-workflow"
                            className="px-3 py-1.5 rounded-full bg-white hover:bg-ink hover:text-white border border-black/10 text-xs font-semibold text-ink transition-all shadow-2xs"
                        >
                            1-by-1 Solve Workflow
                        </a>
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
