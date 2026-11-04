import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import {
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    Sparkles,
    Lock,
    Crop,
    MousePointerClick,
    Layers,
    Terminal
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { D2LBrightspaceQuizMotionDemo } from '@/components/PlatformMotionDemos';
import StudyAiHubShowcase from '@/components/StudyAiHubShowcase';
import LmsExplainerFilmCard from '@/components/LmsExplainerFilmCard';
import LmsServiceFaq, { LmsFaqItem } from '@/components/LmsServiceFaq';

export const metadata: Metadata = {
    title: {
        absolute: "D2L Brightspace Quiz Solver (2026) — Inline AI | ExamGhost",
    },
    description:
        "Solve D2L Brightspace quizzes inline in 0.3s: multi-select, significant figures and arithmetic questions with 0 event-log focus-loss flags. 5 free solves / day.",
    keywords: [
        "d2l brightspace quiz solver",
        "brightspace quiz solver chrome extension",
        "d2l quiz ai solver",
        "does d2l brightspace detect tab switching",
        "d2l quiz event log focus lost",
        "brightspace multiple select quiz solver",
        "d2l brightspace homework helper ai",
        "solve d2l brightspace quiz without switching tabs",
        "examghost d2l brightspace"
    ],
    alternates: {
        canonical: "https://examghost.com/d2l-brightspace-quiz-solver",
    },
    openGraph: {
        title: "D2L Brightspace Quiz Solver (2026) — Inline AI & 0 Event-Log Flags | ExamGhost",
        description:
            "Double-click any D2L Brightspace quiz question or drag Snap-It Vision OCR (Alt+S) over locked diagrams. Runs inside nested Brightspace iframes with 0 focus-loss flags.",
        url: "https://examghost.com/d2l-brightspace-quiz-solver",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/videos/posters/d2l-brightspace-quiz-solver-poster.jpg",
                width: 1280,
                height: 720,
                alt: "ExamGhost D2L Brightspace Quiz Solver Interactive Demo",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "D2L Brightspace Quiz Solver (2026) — Inline AI & 0 Event-Log Flags",
        description:
            "Solve D2L Brightspace MCQ, Multi-Select, Arithmetic, and Cloze questions inline in 0.3s with 0 window.onblur flags.",
        images: ["/videos/posters/d2l-brightspace-quiz-solver-poster.jpg"],
    },
};



const D2L_FAQS: LmsFaqItem[] = [
    {
        id: "faq-d2l-brightspace-detect-extension-event-log",
        category: "stealth",
        badge: "0 Event-Log Flags",
        badgeBg: "bg-[#cdeecb] text-emerald-950",
        q: "Can D2L Brightspace detect the ExamGhost Chrome extension in the Quiz Event Log?",
        a: (
            <>
                <strong>No, D2L Brightspace cannot detect ExamGhost</strong> because Chromium browser sandboxing blocks web pages from reading installed extensions, and ExamGhost isolates its UI inside a{' '}
                <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Closed Shadow DOM</code> root. Brightspace’s Quiz Event Log only flags focus loss when{' '}
                <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">window.onblur</code> or{' '}
                <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">document.visibilitychange</code> fires—which happens when you switch tabs to ChatGPT, never when solving inline with ExamGhost.
            </>
        ),
    },
    {
        id: "faq-what-instructors-see-d2l-attempt-logs",
        category: "stealth",
        badge: "Attempt Log Audit",
        badgeBg: "bg-[#cdeecb] text-emerald-950",
        q: "What do professors actually see in D2L Brightspace Quiz Attempt Logs?",
        a: (
            <>
                <strong>In D2L Brightspace’s Completion Summary → Attempt Logs → Event Log tab, instructors see timestamps for Quiz Entry, Question Saved (Page 1, Page 2), and Quiz Submission</strong>, along with focus-loss warnings if a student leaves the active tab. Because ExamGhost solves questions inline in <strong>0.3 seconds</strong> inside the active Brightspace frame, every question save appears as natural continuous in-page progress.
            </>
        ),
    },
    {
        id: "faq-d2l-nested-iframes-shadow-dom-web-components",
        category: "stealth",
        badge: "Iframe Native",
        badgeBg: "bg-[#c4d0f8] text-indigo-950",
        q: "Why do standard AI extensions fail inside D2L Brightspace quizzes while ExamGhost works?",
        a: (
            <>
                <strong>D2L Brightspace renders quiz attempts inside nested <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">quiz_start_frame_auto.d2l</code> iframes and Daylight <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">&lt;d2l-*&gt;</code> Web Components</strong> that block ordinary top-frame sidebar scripts. ExamGhost injects its Closed Shadow DOM listener across <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">all_frames: true</code> and traverses Brightspace’s custom elements natively.
            </>
        ),
    },
    {
        id: "faq-d2l-multi-select-right-minus-wrong-grading",
        category: "ocr",
        badge: "Multi-Select 99.4%",
        badgeBg: "bg-[#e2d3fa] text-purple-950",
        q: "How does ExamGhost handle D2L Brightspace Multi-Select ('Right Minus Wrong' and 'All or Nothing') questions?",
        a: (
            <>
                <strong>ExamGhost evaluates every checkbox option independently using dual-model consensus (DeepSeek-R1 + GPT-4o)</strong> before selecting or highlighting answers. Because D2L Brightspace frequently uses strict <em>All or Nothing</em> or punitive <em>Right Minus Wrong</em> grading on Multi-Select (<code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">M-S</code>) questions, ExamGhost verifies each statement individually to prevent partial-credit penalties.
            </>
        ),
    },
    {
        id: "faq-d2l-arithmetic-significant-figures-questions",
        category: "ocr",
        badge: "Sig-Fig Precision",
        badgeBg: "bg-[#e2d3fa] text-purple-950",
        q: "Does ExamGhost respect D2L Brightspace Arithmetic and Significant Figures tolerances?",
        a: (
            <>
                <strong>Yes, ExamGhost automatically parses randomized variable values and formats numerical answers to the exact significant figures or decimal places specified in the prompt.</strong> When you double-click a D2L Arithmetic or Significant Figures question, DeepSeek-R1 computes the symbolic formula first and rounds only at the final step to match Brightspace’s grading tolerance.
            </>
        ),
    },
    {
        id: "faq-d2l-snap-it-ocr-locked-diagrams-equations",
        category: "ocr",
        badge: "Alt + S Vision OCR",
        badgeBg: "bg-[#bfe3f6] text-sky-950",
        q: "How do I solve uncopyable math equations and chemistry diagrams in D2L Brightspace?",
        a: (
            <>
                <strong>Press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Alt+S</kbd> to launch Snap-It Vision OCR</strong> and drag a crop box around any MathML formula, organic chemistry structure, or embedded publisher iframe. ExamGhost captures the raw pixels locally and returns the verified solution and step-by-step derivation in under <strong>0.4 seconds</strong>.
            </>
        ),
    },
    {
        id: "faq-d2l-respondus-lockdown-browser-honorlock",
        category: "stealth",
        badge: "Browser Scope",
        badgeBg: "bg-[#ffe9a0] text-amber-950",
        q: "Does ExamGhost work on D2L Brightspace quizzes with Respondus LockDown Browser?",
        a: (
            <>
                <strong>ExamGhost runs inside standard Chromium browsers—including Google Chrome, Brave, Microsoft Edge, and Arc</strong>—for web-based D2L Brightspace quizzes, homework, and midterms. If a course requires the standalone Respondus LockDown Browser desktop application, third-party Chrome extensions cannot load inside Respondus’s restricted custom browser shell.
            </>
        ),
    },
    {
        id: "faq-d2l-brightspace-free-trial-5-free-solves-daily",
        category: "platforms",
        badge: "5 Free Solves / Day",
        badgeBg: "bg-[#cdeecb] text-emerald-950",
        q: "Can I test ExamGhost for free on D2L Brightspace before upgrading?",
        a: (
            <>
                <strong>Yes, every student receives 5 free solves per day immediately ($0, auto-refills every 24h, no credit card required) upon installing the ExamGhost Chrome extension.</strong> You can also test all 3 display modes (Invisible, Stealth, Explain) and Snap-It Vision OCR right now in the interactive D2L Brightspace simulator at the top of this page or in our{' '}
                <Link prefetch={false} href="/canvas-quiz-solver-free-demo" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">Live Exam Sandbox</Link>.
            </>
        ),
    },
];

export default function D2lBrightspaceQuizSolverPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://examghost.com/d2l-brightspace-quiz-solver#webpage",
                "url": "https://examghost.com/d2l-brightspace-quiz-solver",
                "name": "D2L Brightspace Quiz Solver (2026) — Inline AI & 0 Event-Log Flags | ExamGhost",
                "description":
                    "Solve D2L Brightspace quizzes inline in 0.3s without leaving the attempt tab. Works inside quiz_start_frame_auto.d2l iframes, supports Snap-It OCR (Alt+S), and logs 0 focus-loss events.",
                "datePublished": "2026-01-18",
                "dateModified": "2026-03-29",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://examghost.com/#website" },
                "breadcrumb": { "@id": "https://examghost.com/d2l-brightspace-quiz-solver#breadcrumb" },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "#lms-faq h2", "#lms-faq h3", ".faq-answer"]
                }
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://examghost.com/d2l-brightspace-quiz-solver#software",
                "name": "ExamGhost D2L Brightspace Quiz Solver",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Chrome, Edge, Brave, Arc, macOS, Windows",
                "description":
                    "Client-side Chrome extension engineered for D2L Brightspace Quizzes. Solves MCQ, Multi-Select, Arithmetic Significant Figures, Cloze Dropdowns, and diagrams inline in 0.3s inside nested Brightspace iframes with 0 focus-loss events.",
                "offers": [
                    { "@type": "Offer", "name": "Free Tier (5 Free Solves / Day)", "price": "0.00", "priceCurrency": "USD" },
                    { "@type": "Offer", "name": "Monthly Pass", "price": "19.00", "priceCurrency": "USD" },
                    { "@type": "Offer", "name": "Academic Year Pass", "price": "99.00", "priceCurrency": "USD" },
                    { "@type": "Offer", "name": "Lifetime Degree Pass", "price": "199.00", "priceCurrency": "USD" }
                ],
                "featureList": [
                    "Native support for D2L Brightspace quiz_start_frame_auto.d2l iframes and Daylight Web Components",
                    "Zero window.onblur or document.visibilitychange flags in D2L Quiz Event Logs",
                    "Double-click inline solving for MCQ, Multi-Select, Arithmetic Sig-Figs, and Cloze Dropdowns",
                    "Snap-It Vision OCR (Alt+S) for MathML formulas and locked STEM diagrams",
                    "3 Display Modes: Invisible (Alt+1), Stealth (Alt+2), and Explain (Alt+3)"
                ]
            },
            {
                "@type": "HowTo",
                "@id": "https://examghost.com/d2l-brightspace-quiz-solver#howto",
                "name": "How to Solve D2L Brightspace Quiz Questions Inline Without Triggering Event Logs",
                "description":
                    "Use ExamGhost inside D2L Brightspace Quizzes to answer multiple-choice, multi-select, arithmetic, and diagram questions without leaving the active tab.",
                "totalTime": "PT8S",
                "step": [
                    {
                        "@type": "HowToStep",
                        "position": 1,
                        "name": "Open Your D2L Brightspace Quiz Attempt",
                        "text": "Launch your assessment in Chrome, Brave, Edge, or Arc. ExamGhost automatically attaches its isolated Closed Shadow DOM listener inside the quiz_start_frame_auto.d2l iframe."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 2,
                        "name": "Choose Invisible, Stealth, or Explain Mode",
                        "text": "Press Alt+1 for Invisible Mode (zero screen UI), Alt+2 for Stealth Mode (auto-fill or subtle ✓ checkmark hint), or Alt+3 for Explain Mode (full step-by-step rationale banner)."
                    },
                    {
                        "@type": "HowToStep",
                        "position": 3,
                        "name": "Double-Click Any Question or Press Alt+S for OCR",
                        "text": "Double-click any question card to auto-fill or highlight the verified answer in 0.3 seconds, or press Alt+S to drag a crop box over locked graphs and equations."
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/d2l-brightspace-quiz-solver#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Live Exam Sandbox",
                        "item": "https://examghost.com/canvas-quiz-solver-free-demo"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "D2L Brightspace Quiz Solver",
                        "item": "https://examghost.com/d2l-brightspace-quiz-solver"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/d2l-brightspace-quiz-solver#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can D2L Brightspace detect the ExamGhost Chrome extension in the Quiz Event Log?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No, D2L Brightspace cannot detect ExamGhost because Chromium browser sandboxing blocks web pages from reading installed extensions, and ExamGhost isolates its UI inside a Closed Shadow DOM root. Brightspace’s Quiz Event Log only flags focus loss when window.onblur or document.visibilitychange fires—which happens when you switch tabs to ChatGPT, never when solving inline with ExamGhost."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What do professors actually see in D2L Brightspace Quiz Attempt Logs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In D2L Brightspace’s Completion Summary → Attempt Logs → Event Log tab, instructors see timestamps for Quiz Entry, Question Saved (Page 1, Page 2), and Quiz Submission, along with focus-loss warnings if a student leaves the active tab. Because ExamGhost solves questions inline in 0.3 seconds inside the active Brightspace frame, every question save appears as natural continuous in-page progress."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why do standard AI extensions fail inside D2L Brightspace quizzes while ExamGhost works?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "D2L Brightspace renders quiz attempts inside nested quiz_start_frame_auto.d2l iframes and Daylight <d2l-*> Web Components that block ordinary top-frame sidebar scripts. ExamGhost injects its Closed Shadow DOM listener across all_frames: true and traverses Brightspace’s custom elements natively."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ExamGhost handle D2L Brightspace Multi-Select ('Right Minus Wrong' and 'All or Nothing') questions?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost evaluates every checkbox option independently using dual-model consensus (DeepSeek-R1 + GPT-4o) before selecting or highlighting answers. Because D2L Brightspace frequently uses strict All or Nothing or punitive Right Minus Wrong grading on Multi-Select (M-S) questions, ExamGhost verifies each statement individually to prevent partial-credit penalties."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does ExamGhost respect D2L Brightspace Arithmetic and Significant Figures tolerances?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, ExamGhost automatically parses randomized variable values and formats numerical answers to the exact significant figures or decimal places specified in the prompt. When you double-click a D2L Arithmetic or Significant Figures question, DeepSeek-R1 computes the symbolic formula first and rounds only at the final step to match Brightspace’s grading tolerance."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do I solve uncopyable math equations and chemistry diagrams in D2L Brightspace?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Press Alt+S to launch Snap-It Vision OCR and drag a crop box around any MathML formula, organic chemistry structure, or embedded publisher iframe. ExamGhost captures the raw pixels locally and returns the verified solution and step-by-step derivation in under 0.4 seconds."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does ExamGhost work on D2L Brightspace quizzes with Respondus LockDown Browser?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost runs inside standard Chromium browsers—including Google Chrome, Brave, Microsoft Edge, and Arc—for web-based D2L Brightspace quizzes, homework, and midterms. If a course requires the standalone Respondus LockDown Browser desktop application, third-party Chrome extensions cannot load inside Respondus’s restricted custom browser shell."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I test ExamGhost for free on D2L Brightspace before upgrading?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes, every student receives 5 free solves per day immediately upon installing the ExamGhost Chrome extension with no credit card required. You can also test all 3 display modes (Invisible, Stealth, Explain) and Snap-It Vision OCR right now in the interactive D2L Brightspace simulator at the top of this page."
                        }
                    }
                ]
            },
            {
                "@type": "VideoObject",
                "@id": "https://examghost.com/d2l-brightspace-quiz-solver#video",
                "name": "D2L Brightspace AI Quiz Solver — 2.5D Explainer & Product Demo Film",
                "description": "16-second 2.5D motion-graphic explainer film demonstrating how ExamGhost solves D2L Brightspace questions one by one inside quiz_start_frame_auto.d2l with zero focus-loss logs.",
                "thumbnailUrl": ["https://examghost.com/videos/posters/d2l-brightspace-quiz-solver-poster.jpg"],
                "contentUrl": "https://examghost.com/videos/d2l-brightspace-quiz-solver.mp4",
                "uploadDate": "2026-10-22T00:00:00Z",
                "duration": "PT16S"
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink font-sans selection:bg-emerald-500/20">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">
                {/* Breadcrumb Navigation */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-3">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                        <Link prefetch={false} href="/" className="hover:text-ink transition-colors">
                            Home
                        </Link>
                        <span>/</span>
                        <Link
                            prefetch={false}
                            href="/canvas-quiz-solver-free-demo"
                            className="hover:text-ink transition-colors"
                        >
                            Live Sandbox
                        </Link>
                        <span>/</span>
                        <span className="text-ink font-bold">D2L Brightspace Quiz Solver</span>
                    </nav>
                </div>

                {/* =====================================================================
                    1. HERO + INTERACTIVE 6-CHAPTER D2L BRIGHTSPACE PRODUCT FILM
                ===================================================================== */}
                <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20 sm:pb-28">
                    <div className="max-w-3xl mb-8 sm:mb-10 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs font-bold text-ink shadow-2xs">
                            <span className="w-2 h-2 rounded-full bg-[#F15A24] animate-pulse" />
                            <span>D2L Brightspace 20.26 · Nested Iframe &amp; Daylight Web Components Ready</span>
                        </div>

                        <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06]">
                            D2L Brightspace Quiz Solver —{' '}
                            <span className="text-ink-muted font-normal">0.3s Inline AI &amp; Zero Event-Log Flags.</span>
                        </h1>

                        <p className="aeo-summary text-sm sm:text-base text-ink-secondary leading-relaxed">
                            <strong>ExamGhost</strong> solves <strong>D2L Brightspace</strong> quiz questions directly inside your active{' '}
                            <code className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs text-ink">
                                quiz_start_frame_auto.d2l
                            </code>{' '}
                            iframe in <strong>0.3 seconds</strong>. Double-click any Multiple-Choice, Multi-Select (<code className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs text-ink">M-S</code>), Significant Figures, or Cloze Dropdown question—or press{' '}
                            <kbd className="px-1.5 py-0.5 rounded bg-black/6 font-mono text-xs text-ink">Alt+S</kbd> for Snap-It Vision OCR—while keeping your D2L <strong>Quiz Event Log</strong> at <strong>0 focus-loss events</strong>.
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

                    {/* Bespoke 3-Scene Framer Motion Video Demo */}
                    <D2LBrightspaceQuizMotionDemo />
                </section>

                {/* =====================================================================
                    2. TACTILE ARCHITECTURE SECTION: HOW D2L BRIGHTSPACE LOGS WORK
                ===================================================================== */}
                <section
                    id="d2l-architecture"
                    className="border-t border-black/5 bg-cream py-20 sm:py-28 px-4 sm:px-6"
                >
                    <div className="max-w-6xl mx-auto space-y-20 sm:space-y-28">
                        <LmsExplainerFilmCard
                            slug="d2l-brightspace-quiz-solver"
                            platformName="D2L Brightspace"
                            heroDotColor="#ea580c"
                        />

                        {/* 3D Ghost Mascot + D2L Brightspace Telemetry Architecture Card */}
                        <div className="bg-white rounded-[36px] p-7 sm:p-10 md:p-14 border border-black/10 shadow-lift">
                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                                {/* Left 3D Ghost Showcase */}
                                <div className="lg:col-span-5">
                                    <div className="rounded-3xl bg-[#ffd5cc]/40 p-6 sm:p-8 border border-[#ffd5cc] flex flex-col items-center justify-center text-center relative overflow-hidden group">
                                        <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-black/8 shadow-soft bg-cream relative mb-4">
                                            <img
                                                src="/images/ghost/ghost_privacy.jpg"
                                                alt="ExamGhost D2L Brightspace Closed Shadow DOM Shield"
                                                width={208}
                                                height={208}
                                                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                            />
                                        </div>
                                        <div className="font-display font-bold text-xl text-ink mb-1">
                                            Iframe &amp; Shadow DOM Penetration
                                        </div>
                                        <p className="text-xs text-ink-muted max-w-[270px]">
                                            Operates natively inside D2L’s nested <code className="font-mono text-ink">quiz_start_frame_auto.d2l</code> container.
                                        </p>

                                        <div className="mt-5 flex flex-wrap gap-2 justify-center">
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-ink border border-black/8 shadow-xs">
                                                all_frames: true
                                            </span>
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-ink border border-black/8 shadow-xs">
                                                0 Event-Log Flags
                                            </span>
                                            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-ink border border-black/8 shadow-xs">
                                                Sig-Fig Aware
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Technical Copy */}
                                <div className="lg:col-span-7 space-y-5">
                                    <p className="eyebrow">
                                        <span className="w-2 h-2 rounded-full bg-[#F15A24]" />
                                        <span>D2L BRIGHTSPACE TELEMETRY &amp; DOM AUDIT</span>
                                    </p>
                                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.08]">
                                        Built for Brightspace’s nested iframes and Event Logs.
                                    </h2>
                                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                        Unlike Canvas or Moodle, <strong>Desire2Learn (D2L) Brightspace</strong> encapsulates quiz questions inside multi-layered <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">quiz_start_frame_auto.d2l</code> iframes and Lit-based <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">&lt;d2l-consistent-evaluation&gt;</code> Shadow DOM Web Components. Ordinary AI sidebar extensions only read top-level HTML, which is why they fail to detect D2L questions or trigger focus-loss flags when you click their floating iframe.
                                    </p>

                                    {/* 3 Visual Pillar Cards */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                                        <article className="p-4 rounded-2xl bg-[#faf8f5] border border-black/6 space-y-2">
                                            <div className="flex items-center gap-2.5">
                                                <img
                                                    src="/images/ghost/ghost_card_stealth.jpg"
                                                    alt="D2L Quiz Event Log Protection"
                                                    width={36}
                                                    height={36}
                                                    className="w-9 h-9 rounded-xl object-cover border border-black/10 shrink-0"
                                                />
                                                <h3 className="font-display font-bold text-xs sm:text-sm text-ink leading-snug">
                                                    Clean Attempt Logs
                                                </h3>
                                            </div>
                                            <p className="text-[11px] sm:text-xs text-ink-muted leading-relaxed">
                                                Prevents <code className="font-mono text-ink">window.onblur</code> and <code className="font-mono text-ink">visibilitychange</code> from logging tab exits in D2L’s Completion Summary Event Log.
                                            </p>
                                        </article>

                                        <article className="p-4 rounded-2xl bg-[#faf8f5] border border-black/6 space-y-2">
                                            <div className="flex items-center gap-2.5">
                                                <img
                                                    src="/images/ghost/ghost_card_vision.jpg"
                                                    alt="D2L MathML and Diagram OCR"
                                                    width={36}
                                                    height={36}
                                                    className="w-9 h-9 rounded-xl object-cover border border-black/10 shrink-0"
                                                />
                                                <h3 className="font-display font-bold text-xs sm:text-sm text-ink leading-snug">
                                                    MathML &amp; Sig-Fig Engine
                                                </h3>
                                            </div>
                                            <p className="text-[11px] sm:text-xs text-ink-muted leading-relaxed">
                                                Solves D2L Arithmetic questions with randomized variables and exact significant-figure rounding via <strong>DeepSeek-R1</strong>.
                                            </p>
                                        </article>

                                        <article className="p-4 rounded-2xl bg-[#faf8f5] border border-black/6 space-y-2">
                                            <div className="flex items-center gap-2.5">
                                                <img
                                                    src="/images/ghost/ghost_card_hud.jpg"
                                                    alt="Multi-Select Right Minus Wrong Precision"
                                                    width={36}
                                                    height={36}
                                                    className="w-9 h-9 rounded-xl object-cover border border-black/10 shrink-0"
                                                />
                                                <h3 className="font-display font-bold text-xs sm:text-sm text-ink leading-snug">
                                                    Multi-Select Verified
                                                </h3>
                                            </div>
                                            <p className="text-[11px] sm:text-xs text-ink-muted leading-relaxed">
                                                Evaluates each checkbox independently to beat D2L’s strict <em>All or Nothing</em> and <em>Right Minus Wrong</em> grading schemes.
                                            </p>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* =====================================================================
                            2B. D2L BRIGHTSPACE QUESTION FORMAT MATRIX & EVENT LOG FORENSICS
                        ===================================================================== */}
                        <div className="space-y-8">
                            <div className="max-w-3xl space-y-3">
                                <p className="eyebrow">
                                    <Layers className="w-3.5 h-3.5 text-[#F15A24]" />
                                    <span>D2L BRIGHTSPACE QUESTION LIBRARY COVERAGE</span>
                                </p>
                                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink leading-[1.08]">
                                    Every D2L Brightspace Question Type Supported — Including Multi-Select &amp; Sig-Figs
                                </h2>
                                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                    D2L Brightspace (20.26 Daylight UI) enforces strict grading formulas on STEM and nursing exams. ExamGhost parses every Brightspace question format inside <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">quiz_start_frame_auto.d2l</code>:
                                </p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                                {[
                                    {
                                        tag: 'Multi-Select (M-S)',
                                        mode: 'Double-Click DOM',
                                        acc: '99.4%',
                                        title: 'Right Minus Wrong & All-or-Nothing Checkboxes',
                                        desc: 'Evaluates every checkbox statement independently using DeepSeek-R1 + GPT-4o consensus so a single false checkbox never wipes out your points under D2L’s Right Minus Wrong grading.',
                                    },
                                    {
                                        tag: 'Significant Figures (× 10^n)',
                                        mode: 'Double-Click DOM',
                                        acc: '99.7%',
                                        title: 'D2L Significant Figures & Scientific Notation',
                                        desc: 'Computes symbolic formulas with full floating-point precision and rounds only at the final step to match D2L’s dual mantissa + exponent input boxes.',
                                    },
                                    {
                                        tag: 'Arithmetic ({x}, {y} Seeds)',
                                        mode: 'Double-Click DOM',
                                        acc: '99.8%',
                                        title: 'Randomized Variable Arithmetic Questions',
                                        desc: 'Extracts your personal instantiated variables directly from the D2L frame DOM and enforces the instructor’s ± tolerance units.',
                                    },
                                    {
                                        tag: 'Multi-Short-Answer & Ordering',
                                        mode: 'Double-Click DOM',
                                        acc: '99.5%',
                                        title: 'Ordering, Matching & Fill-in-the-Blanks (FIB)',
                                        desc: 'Solves sequential clinical nursing prioritization steps, matching dropdown tables, and multi-blank case study paragraphs in a single double-click.',
                                    },
                                    {
                                        tag: 'MathML & Locked Diagrams',
                                        mode: 'Alt+S Vision OCR',
                                        acc: '99.3%',
                                        title: 'WIRIS MathML Equations & Anatomy Figures',
                                        desc: 'Press Alt+S and drag across any non-selectable WIRIS MathML formula, circuit diagram, or organic structure hosted in D2L Content.',
                                    },
                                    {
                                        tag: 'Written Response (WR)',
                                        mode: 'Double-Click DOM',
                                        acc: 'Character-Count Safe',
                                        title: 'Incremental Written Response Outlines',
                                        desc: 'Provides structured bullet points in Explain Mode (Alt+3) so you can type your response incrementally—avoiding D2L’s instant paste character-count spike.',
                                    },
                                ].map((item, idx) => (
                                    <article
                                        key={idx}
                                        className="rounded-[28px] bg-white border border-black/10 p-6 shadow-card flex flex-col justify-between space-y-4"
                                    >
                                        <div className="space-y-3">
                                            <div className="flex items-center justify-between gap-2">
                                                <span className="px-2.5 py-1 rounded-lg bg-[#faf8f5] border border-black/8 font-mono text-[11px] font-bold text-ink">
                                                    {item.tag}
                                                </span>
                                                <span className="px-2.5 py-0.5 rounded-full bg-[#cdeecb] text-emerald-950 text-[11px] font-bold">
                                                    {item.mode}
                                                </span>
                                            </div>
                                            <h3 className="font-display text-lg font-bold text-ink leading-snug">
                                                {item.title}
                                            </h3>
                                            <p className="text-xs sm:text-[13px] text-ink-secondary leading-relaxed">
                                                {item.desc}
                                            </p>
                                        </div>
                                        <div className="pt-3 border-t border-black/6 flex items-center justify-between text-xs">
                                            <span className="font-semibold text-ink-muted">Verified Benchmark</span>
                                            <span className="font-mono font-bold text-emerald-800 bg-[#cdeecb]/60 px-2.5 py-0.5 rounded-full">
                                                {item.acc}
                                            </span>
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>

                        {/* University-Verified D2L Brightspace Quizzes Event Log Forensics */}
                        <div className="space-y-6">
                            <div className="max-w-3xl space-y-3">
                                <p className="eyebrow">
                                    <Terminal className="w-3.5 h-3.5 text-ink" />
                                    <span>UNIVERSITY D2L ADMIN DOCUMENTATION AUDIT</span>
                                </p>
                                <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink tracking-tight leading-[1.08]">
                                    What Professors Actually See in the D2L Brightspace &ldquo;Quizzes Event Log&rdquo;
                                </h2>
                                <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                    Per official university Brightspace documentation (<strong>Minnesota State</strong>, <strong>University of Arizona</strong>, <strong>UTRGV</strong>, and <strong>D2L Community</strong>), instructors can open the <strong>Quizzes Event Log (Attempt Log)</strong> for any student attempt. Here is what D2L records vs. what it cannot see:
                                </p>
                            </div>

                            <div className="rounded-[32px] bg-[#141413] text-[#faf8f5] border border-black/20 shadow-lift overflow-hidden">
                                <div className="px-6 py-4 bg-white/5 border-b border-white/10 flex flex-wrap items-center justify-between gap-3">
                                    <div className="flex items-center gap-2.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#34d399]" />
                                        <span className="font-mono text-xs font-bold tracking-wide text-white">
                                            d2l_quizzes_event_log_audit — Instructor Attempt Log Columns
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-mono text-[#cdeecb] bg-[#cdeecb]/10 border border-[#cdeecb]/25 px-3 py-1 rounded-full">
                                        Sources: MinnState, Arizona &amp; D2L Docs
                                    </span>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[680px]">
                                        <thead>
                                            <tr className="border-b border-white/10 bg-white/[0.02] text-white/70 font-mono text-[11px] uppercase tracking-wider">
                                                <th className="py-3.5 px-6">D2L Event Log Metric</th>
                                                <th className="py-3.5 px-6">When D2L Records It</th>
                                                <th className="py-3.5 px-6">What Instructor Sees</th>
                                                <th className="py-3.5 px-6">ExamGhost 1-by-1 Status</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-white/10">
                                            <tr>
                                                <td className="py-4 px-6 font-mono font-bold text-[#cdeecb]">
                                                    Quiz Entry / Response Saved
                                                </td>
                                                <td className="py-4 px-6 text-white/80">
                                                    Clicking &ldquo;Start Quiz&rdquo;, selecting radio buttons, or navigating between pages
                                                </td>
                                                <td className="py-4 px-6 text-white/75">
                                                    Chronological timestamp for each individual question save (e.g. Question 1 Saved at 10:04:12)
                                                </td>
                                                <td className="py-4 px-6">
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[#cdeecb]/15 text-[#cdeecb] border border-[#cdeecb]/30">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399]" />
                                                        <span>Natural 1-by-1 Save Cadence</span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 px-6 font-mono font-bold text-[#cdeecb]">
                                                    Written Response Character Count
                                                </td>
                                                <td className="py-4 px-6 text-white/80">
                                                    Auto-saving text inside a D2L Written Response (essay) box
                                                </td>
                                                <td className="py-4 px-6 text-white/75">
                                                    Logs number of characters saved at each timestamp (shows if 800 chars appeared in 1 second via paste)
                                                </td>
                                                <td className="py-4 px-6">
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[#cdeecb]/15 text-[#cdeecb] border border-[#cdeecb]/30">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399]" />
                                                        <span>Explain Mode Guides Incremental Typing</span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 px-6 font-mono font-bold text-[#cdeecb]">
                                                    Session ID &amp; IP Address
                                                </td>
                                                <td className="py-4 px-6 text-white/80">
                                                    Every major quiz event (entry, re-entry, page movement, completion)
                                                </td>
                                                <td className="py-4 px-6 text-white/75">
                                                    Shows if the student logged in from a second device/IP or reloaded the quiz session mid-attempt
                                                </td>
                                                <td className="py-4 px-6">
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[#cdeecb]/15 text-[#cdeecb] border border-[#cdeecb]/30">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399]" />
                                                        <span>Single Continuous Browser Session</span>
                                                    </span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 px-6 font-mono font-bold text-[#cdeecb]">
                                                    Other Open Tabs / Mouse Cursor
                                                </td>
                                                <td className="py-4 px-6 text-white/80">
                                                    Taking a standard web-based D2L quiz without Respondus/Proctorio
                                                </td>
                                                <td className="py-4 px-6 text-white/75">
                                                    D2L CANNOT see other tabs, split-screen apps, or cursor paths—only focus/blur if LTI proctored
                                                </td>
                                                <td className="py-4 px-6">
                                                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-[#cdeecb]/15 text-[#cdeecb] border border-[#cdeecb]/30">
                                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#34d399]" />
                                                        <span>0 Focus-Loss or Blur Events</span>
                                                    </span>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* =====================================================================
                            3. macOS BENCHMARK MATRIX: D2L BRIGHTSPACE SOLVING COMPARISON
                        ===================================================================== */}
                        <div className="space-y-6">
                            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                                <div>
                                    <p className="eyebrow mb-2">
                                        <span className="w-2 h-2 rounded-full bg-ink" />
                                        <span>D2L BRIGHTSPACE BENCHMARK</span>
                                    </p>
                                    <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink tracking-tight">
                                        ExamGhost vs. ChatGPT &amp; Legacy Extensions on D2L
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
                                            D2L Brightspace 20.26 Telemetry &amp; Question Format Matrix
                                        </span>
                                    </div>
                                    <span className="text-[11px] font-semibold text-emerald-900 bg-[#cdeecb] px-2.5 py-0.5 rounded-full">
                                        Audited on Daylight UI
                                    </span>
                                </div>

                                <div className="overflow-x-auto">
                                    <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[680px]">
                                        <thead>
                                            <tr className="border-b border-black/8 bg-[#faf8f5] text-ink font-display">
                                                <th className="py-4 px-6 font-bold">D2L Brightspace Capability</th>
                                                <th className="py-4 px-6 font-bold bg-[#cdeecb]/35">
                                                    <span className="inline-flex items-center gap-1.5">
                                                        <ShieldCheck className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                                                        <span>ExamGhost (In-Frame AI)</span>
                                                    </span>
                                                </th>
                                                <th className="py-4 px-6 font-semibold text-ink-secondary">
                                                    ChatGPT Tab-Switching
                                                </th>
                                                <th className="py-4 px-6 font-semibold text-ink-secondary">
                                                    Standard Sidebar Extensions
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-black/6">
                                            <tr>
                                                <td className="py-4 px-6 font-semibold text-ink">D2L Quiz Event Log telemetry</td>
                                                <td className="py-4 px-6 font-semibold text-ink bg-[#cdeecb]/15">
                                                    <span className="inline-flex items-center gap-1.5 text-emerald-900">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                                                        <span>0 focus-loss or blur events</span>
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-ink-muted">
                                                    Logs <code className="font-mono text-[11px]">window.onblur</code> on every tab switch
                                                </td>
                                                <td className="py-4 px-6 text-ink-muted">
                                                    Triggers iframe focus loss when clicking sidebar
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 px-6 font-semibold text-ink">
                                                    Nested <code className="font-mono text-xs">quiz_start_frame_auto.d2l</code> support
                                                </td>
                                                <td className="py-4 px-6 font-semibold text-ink bg-[#cdeecb]/15">
                                                    <span className="inline-flex items-center gap-1.5 text-emerald-900">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                                                        <span>Native all_frames + Shadow DOM traversal</span>
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-ink-muted">
                                                    Manual text selection (often blocked)
                                                </td>
                                                <td className="py-4 px-6 text-ink-muted">
                                                    Fails to read inside D2L Web Components
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 px-6 font-semibold text-ink">
                                                    Multi-Select (Right Minus Wrong) accuracy
                                                </td>
                                                <td className="py-4 px-6 font-semibold text-ink bg-[#cdeecb]/15">
                                                    <span className="inline-flex items-center gap-1.5 text-emerald-900">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                                                        <span>99.4% per-option verification + auto-check</span>
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-ink-muted">
                                                    Frequently misses 1 checkbox option
                                                </td>
                                                <td className="py-4 px-6 text-ink-muted">
                                                    Supports single-choice radio buttons only
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 px-6 font-semibold text-ink">
                                                    Arithmetic &amp; Significant Figures questions
                                                </td>
                                                <td className="py-4 px-6 font-semibold text-ink bg-[#cdeecb]/15">
                                                    <span className="inline-flex items-center gap-1.5 text-emerald-900">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                                                        <span>DeepSeek-R1 symbolic math + sig-fig rounding</span>
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-ink-muted">
                                                    Prone to intermediate rounding errors
                                                </td>
                                                <td className="py-4 px-6 text-ink-muted">
                                                    Cannot auto-fill numerical input boxes
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="py-4 px-6 font-semibold text-ink">
                                                    Locked MathML &amp; SVG diagrams
                                                </td>
                                                <td className="py-4 px-6 font-semibold text-ink bg-[#cdeecb]/15">
                                                    <span className="inline-flex items-center gap-1.5 text-emerald-900">
                                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                                                        <span>Instant Snap-It Vision OCR (Alt+S)</span>
                                                    </span>
                                                </td>
                                                <td className="py-4 px-6 text-ink-muted">
                                                    Manual screenshot &amp; file upload (20s+)
                                                </td>
                                                <td className="py-4 px-6 text-ink-muted">
                                                    Cannot parse non-selectable SVG canvases
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Included 2-in-1 Study & Homework AI Workspace */}
                        <StudyAiHubShowcase compact />

                        {/* =====================================================================
                            4. TWO-CARD PASTEL BENTO HUB: OTHER LMS GUIDES & EXTENSION TEARDOWNS
                        ===================================================================== */}
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
                                        One extension works across your entire university schedule—switch seamlessly from D2L Brightspace to Canvas, Blackboard, or ALEKS:
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 text-xs">
                                    {[
                                        { href: '/canvas-lms-quiz-solver', label: 'Canvas Classic & New Quizzes' },
                                        { href: '/blackboard-quiz-solver', label: 'Blackboard Learn & Ultra' },
                                        { href: '/moodle-quiz-solver', label: 'Moodle LMS' },
                                        { href: '/mcgraw-hill-connect-aleks-solver', label: 'McGraw-Hill Connect & ALEKS' },
                                        { href: '/pearson-mylab-mastering-solver', label: 'Pearson MyLab & Mastering' },
                                        { href: '/cengage-mindtap-webassign-solver', label: 'Cengage WebAssign' },
                                        { href: '/gradescope-exam-solver', label: 'Gradescope OCR' },
                                        { href: '/google-forms-quiz-solver', label: 'Google Forms & Classroom' },
                                        { href: '/schoology-quiz-solver', label: 'Schoology' },
                                        { href: '/deltamath-homework-solver', label: 'DeltaMath' },
                                        { href: '/edgenuity-quiz-solver', label: 'Edgenuity' },
                                        { href: '/canvas-quiz-solver-free-demo', label: 'Live 5-Question Exam Sandbox' },
                                    ].map((item) => (
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
                                        See why single-LMS extensions like CanvasHack fail on D2L Brightspace and how ExamGhost compares against 50+ tools:
                                    </p>
                                </div>

                                <div className="flex flex-wrap gap-2 text-xs">
                                    {[
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
                                    ].map((item) => (
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

                        {/* =====================================================================
                            5. INTERACTIVE AEO / GEO / SEO D2L BRIGHTSPACE FAQ
                        ===================================================================== */}
                        <LmsServiceFaq
                            platformName="D2L Brightspace"
                            subtitle="Technical answers on D2L Quiz Attempt Logs, nested quiz_start_frame_auto.d2l iframes, Multi-Select grading, and Significant Figures precision."
                            faqs={D2L_FAQS}
                        />
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
