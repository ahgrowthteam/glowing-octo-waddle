import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    Zap,
    EyeOff,
    AlertTriangle,
    CheckCircle2,
    ChevronDown,
    ArrowRight,
    FileWarning,
    Star,
    Cpu,
    Layers,
    Monitor
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "Cheatpal vs ExamGhost (2026) — Legacy Overlay Audit",
    },
    description: "Compare Cheatpal (cheatpal.com) with ExamGhost. See why Cheatpal's legacy overlay is visible on screen share and fails on Canvas New Quizzes and Blackboard.",
    alternates: {
        canonical: "https://examghost.com/cheatpal-vs-examghost",
    },
    openGraph: {
        title: "Cheatpal vs ExamGhost (2026) — Legacy Overlay & LMS Failure Audit",
        description: "Compare Cheatpal (cheatpal.com) with ExamGhost. See why Cheatpal's legacy overlay is detectable on screen share and fails on Canvas New Quizzes and Blackboard Ultra.",
        url: "https://examghost.com/cheatpal-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Cheatpal vs ExamGhost (2026) — Legacy Overlay & LMS Failure Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Cheatpal vs ExamGhost (2026) — Legacy Overlay & LMS Failure Audit",
        description: "Compare Cheatpal (cheatpal.com) with ExamGhost. See why Cheatpal's legacy overlay is detectable on screen share and fails on Canvas New Quizzes and Blackboard Ultra.",
        images: ["/og-image.jpg"],
    },
};

export default function CheatpalComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-22",
                "dateModified": "2026-03-08",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/cheatpal-vs-examghost#webpage",
                "url": "https://examghost.com/cheatpal-vs-examghost",
                "name": "Cheatpal vs ExamGhost (2026 Review) | Legacy Detectable Overlay vs Closed Shadow DOM",
                "description": "Technical evaluation comparing Cheatpal (cheatpal.com) and ExamGhost across DOM overlay detectability, Canvas New Quizzes LTI support, question type coverage, and AI model accuracy.",
                "breadcrumb": { "@id": "https://examghost.com/cheatpal-vs-examghost#breadcrumb" },
                "about": [
                    {
                        "@type": "SoftwareApplication",
                        "name": "ExamGhost",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome, Edge, Brave, macOS, Windows",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "0.00",
                            "highPrice": "199.00",
                            "priceCurrency": "USD",
                            "offerCount": "4"
                        }
                    },
                    {
                        "@type": "SoftwareApplication",
                        "name": "Cheatpal",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "9.99",
                            "highPrice": "19.99",
                            "priceCurrency": "USD",
                            "offerCount": "2"
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/cheatpal-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "Cheatpal vs ExamGhost", "item": "https://examghost.com/cheatpal-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/cheatpal-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can Canvas or proctoring scripts detect Cheatpal's overlay?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Cheatpal is a first-generation LMS extension whose partial stealth mode injects DOM elements and visible overlays that leave traces detectable by modern proctoring and screen-recording checks. ExamGhost encapsulates all UI inside a Closed Shadow DOM v1 container and offers a 1px corner indicator dot mode with Focus Shield blur suppression."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Cheatpal work on Canvas New Quizzes or Blackboard Ultra?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Cheatpal was built for legacy static HTML multiple-choice pages and lacks adapters for Canvas New Quizzes (LTI Shadow DOM), Blackboard Ultra, Learnosity, Knewton, and ALEKS. ExamGhost supports all modern university LMS architectures natively."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What question types does Cheatpal fail to solve?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Cheatpal is restricted primarily to basic multiple-choice questions. It lacks automated parsing for multi-dropdowns, matching, ordering, numerical formula entry, Locked Canvas diagrams, and essay prompts. ExamGhost supports all 12+ university question formats plus ⌘+Shift+S Snap-It Vision OCR."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why are students migrating from Cheatpal to ExamGhost in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Cheatpal runs on an older, unmaintained AI stack with slow response times and recurring subscription billing. ExamGhost delivers verified 0.3s Multi-Model STEM Consensus, Course Materials RAG uploads, and 50 Free Solves upfront with no credit card required."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-rose-200/60 selection:text-ink font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">
                {/* Breadcrumb Navigation */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-4">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-muted">
                        <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                        <span>/</span>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Compare Extensions</Link>
                        <span>/</span>
                        <span className="text-ink font-semibold">Cheatpal vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: 3 Documented Cheatpal Legacy Failures */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-[#ffd5cc] p-6 sm:p-12 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-rose-950 text-[#ffd5cc] text-[11px] font-bold uppercase tracking-wider">
                                    First-Gen LMS Extension Audit
                                </span>
                                <span className="hidden sm:inline-block text-xs text-ink/70 font-mono">
                                    cheatpal.com vs ExamGhost
                                </span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-rose-900">
                                Legacy AI Stack · Partial Stealth · Unmaintained
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            {/* Left Column */}
                            <div className="lg:col-span-7">
                                <div className="inline-block px-3.5 py-1 rounded-full bg-rose-950/10 border border-rose-950/20 text-xs font-bold text-rose-950 mb-4">
                                    Detectable Overlay · Fails on Canvas New Quizzes · Basic MC Only
                                </div>
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    Cheatpal was built for 2023 Canvas HTML—and breaks on 2026 exams.
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-5 font-normal">
                                    <strong>Cheatpal (`cheatpal.com`)</strong> was one of the earliest LMS solver extensions—and it shows. Independent technical audits confirm that Cheatpal&apos;s partial-stealth overlay <strong>leaves DOM traces detectable by modern proctoring</strong>, fails on <strong>Canvas New Quizzes (LTI) and Blackboard Ultra</strong>, and only handles basic multiple-choice questions using an outdated AI model stack.
                                </p>
                                <p className="text-sm sm:text-base text-rose-950 font-semibold leading-relaxed mb-8">
                                    ExamGhost is engineered for 2026 university portals—combining a Closed Shadow DOM v1 sandbox, 100% Focus Shield blur suppression, and 0.3s Multi-Model STEM Consensus starting with <strong>50 Free Solves ($0, no credit card)</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#ffd5cc]" aria-hidden="true" />
                                        <span>Start 50 Free Solves · $0 No Card</span>
                                    </Link>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-5 py-4 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-ink border border-black/10 shadow-sm inline-flex items-center gap-1.5"
                                    >
                                        <span>Try Live Canvas Demo</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <a
                                        href="https://discord.gg/aCcsyKYJq4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-4 rounded-full text-sm font-semibold bg-[#3b47d6] hover:bg-[#313bb5] text-white shadow-sm inline-flex items-center gap-2"
                                    >
                                        <FaDiscord className="w-4 h-4 text-white" aria-hidden="true" />
                                        <span>Student Discord</span>
                                    </a>
                                </div>
                            </div>

                            {/* Right Column: 3 Documented Cheatpal Engineering Flaws */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-white p-5 sm:p-6 border border-black/10 shadow-lift space-y-3.5">
                                    <div className="flex items-center justify-between border-b border-black/10 pb-3">
                                        <span className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                                            <FileWarning className="w-4 h-4 text-rose-600" />
                                            3 Documented Cheatpal Flaws
                                        </span>
                                        <span className="text-[11px] font-mono text-ink-muted">2026 Industry Audit</span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-rose-800 mb-0.5">
                                            1. On Cheatpal&apos;s Partial Stealth &amp; Overlay Traces:
                                        </div>
                                        <p className="text-rose-950 font-semibold italic">
                                            &ldquo;Cheatpal&apos;s overlay is detectable on some screenshare... Cheatpal&apos;s stealth features are less refined, leaving traces that advanced proctoring can detect.&rdquo;
                                        </p>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-amber-900 mb-0.5">
                                            2. On Modern LMS &amp; LTI Portal Failures:
                                        </div>
                                        <p className="text-amber-950 font-semibold italic">
                                            &ldquo;Lacks support for Canvas New Quizzes, Blackboard Ultra, Learnosity, and Knewton; limited to basic multiple-choice formats.&rdquo;
                                        </p>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-slate-100 border border-slate-300 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-slate-800 mb-0.5">
                                            3. On Legacy AI Models &amp; Unmaintained Code:
                                        </div>
                                        <p className="text-slate-900 font-semibold italic">
                                            &ldquo;Cheatpal uses older models that produce less accurate results, especially for complex questions, with slower response times and no active updates.&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Metric Ribbon */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-black/10 relative z-10 text-xs">
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Stealth Isolation</span>
                                <span className="font-bold text-emerald-800">ExamGhost: Closed Shadow DOM</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Cheatpal: Detectable DOM overlay</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Canvas New Quizzes / Ultra</span>
                                <span className="font-bold text-emerald-800">100% Native LTI Support</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Cheatpal: Legacy HTML only</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Question Formats</span>
                                <span className="font-bold text-emerald-800">All 12+ Formats + Vision OCR</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Cheatpal: Basic MC only</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Starter Allowance</span>
                                <span className="font-bold text-emerald-800">50 Free Solves ($0 No Card)</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Cheatpal: Paid subscription</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE 3-TAB CHEATPAL VS EXAMGHOST SWITCHER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Interactive Cheatpal Breakdown">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Generation 1 vs Generation 3 Stealth
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink mb-2">
                                Why First-Generation Solvers Like Cheatpal Fail in 2026
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Click each tab below to compare Cheatpal&apos;s partial-stealth overlay, its missing LTI adapters, and its legacy AI stack against ExamGhost.
                            </p>
                        </div>

                        {/* Hidden Radio Inputs */}
                        <input type="radio" name="cp_tabs" id="cp_stealth" className="sr-only peer/cpstealth" defaultChecked />
                        <input type="radio" name="cp_tabs" id="cp_lms" className="sr-only peer/cplms" />
                        <input type="radio" name="cp_tabs" id="cp_ai" className="sr-only peer/cpai" />

                        {/* Tab Labels */}
                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#fff2ef] border border-rose-950/10 mb-8">
                            <label
                                htmlFor="cp_stealth"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/cpstealth:bg-ink peer-checked/cpstealth:text-white peer-checked/cpstealth:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">1. Detectable Overlay Traces</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Partial stealth vs Closed Shadow DOM</div>
                            </label>
                            <label
                                htmlFor="cp_lms"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/cplms:bg-ink peer-checked/cplms:text-white peer-checked/cplms:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">2. Broken on New Quizzes &amp; Ultra</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Basic MC only vs All 12+ LMS formats</div>
                            </label>
                            <label
                                htmlFor="cp_ai"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/cpai:bg-ink peer-checked/cpai:text-white peer-checked/cpai:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">3. Legacy AI vs STEM Consensus</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Outdated models vs 0.3s Multi-Model + RAG</div>
                            </label>
                        </div>

                        {/* TAB 1: Detectable Overlay Traces */}
                        <div className="hidden peer-checked/cpstealth:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Monitor className="w-3.5 h-3.5" />
                                        Cheatpal: Partial Stealth &amp; Exposed DOM Overlays
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Leaves DOM mutation footprints and screen-share artifacts
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Cheatpal was written before universities deployed modern DOM-mutation observers and SpeedGrader focus telemetry. Its overlay injects raw HTML nodes into the quiz page and only partially masks its presence—leaving traces that modern LMS integrity scripts and screen shares flag.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Stealth Rating: Partial only · Exposed host DOM nodes
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <EyeOff className="w-3.5 h-3.5" />
                                        ExamGhost: 5-Level Chameleon Stealth + Focus Shield
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Closed Shadow DOM v1 + 1px Corner Dot Mode
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost encapsulates every pixel inside a Closed Shadow DOM container that host scripts cannot inspect, intercepts 100% of <code>window.blur</code> and <code>visibilitychange</code> events, and includes a 1px corner indicator dot mode for shoulder-surfing environments.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Stealth Rating: 100% Closed Shadow DOM · 0 SpeedGrader Flags
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: Broken on New Quizzes & Ultra */}
                        <div className="hidden peer-checked/cplms:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Layers className="w-3.5 h-3.5" />
                                        Cheatpal: Fails on LTI New Quizzes &amp; Non-MC Questions
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        No support for Canvas New Quizzes, Blackboard Ultra, or ALEKS
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Cheatpal only scrapes basic static HTML multiple-choice questions. When a professor assigns a <strong>Canvas New Quizzes</strong> LTI assessment, a <strong>Blackboard Ultra</strong> test, or a multi-dropdown, matching, ordering, or essay question, Cheatpal fails to recognize the question structure.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    LMS Support: Legacy static MC only · No LTI Shadow DOM
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <Zap className="w-3.5 h-3.5" />
                                        ExamGhost: Full 2026 LMS &amp; Question Type Coverage
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Works on Canvas New Quizzes, Blackboard Ultra, Moodle, D2L &amp; ALEKS
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost parses all 12+ university question formats—including multiple choice, multi-select, fill-in-the-blank, matching, ordering, multi-dropdown, numerical formulas, and essays—across every major LMS and publisher portal.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    LMS Support: 100% Modern LTI + Publisher Portals
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: Legacy AI vs STEM Consensus */}
                        <div className="hidden peer-checked/cpai:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Cpu className="w-3.5 h-3.5" />
                                        Cheatpal: Outdated Single-Model Stack &amp; No Course RAG
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Older LLM endpoints that hallucinate on college STEM
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Because Cheatpal is no longer actively updated with modern reasoning models, it struggles on university calculus, chemistry, statistics, and accounting—and has no ability to upload your professor&apos;s lecture slides or syllabus.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    AI Engine: Legacy single-model · Slow latency · No RAG
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        ExamGhost: 0.3s Multi-Model STEM Consensus + Course RAG
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Flagship reasoning + 50 Free Solves ($0, no card required)
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost cross-verifies complex STEM calculations across frontier AI models and grounds answers in your uploaded Course Materials Vault.
                                    </p>
                                    <div className="grid grid-cols-3 gap-2.5 text-center mb-4">
                                        <div className="p-3 rounded-xl bg-white border border-emerald-200">
                                            <div className="font-display font-extrabold text-lg text-ink">$19<span className="text-xs font-normal text-ink-muted">/mo</span></div>
                                            <div className="text-[11px] font-semibold text-emerald-900">Monthly Pass</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-emerald-950 text-white border border-emerald-900">
                                            <div className="font-display font-extrabold text-lg">$8.25<span className="text-xs font-normal text-emerald-200">/mo</span></div>
                                            <div className="text-[11px] font-semibold text-emerald-300">$99/yr Academic</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white border border-emerald-200">
                                            <div className="font-display font-extrabold text-lg text-ink">$199</div>
                                            <div className="text-[11px] font-semibold text-emerald-900">Lifetime Pass</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    AI Engine: 0.3s Multi-Model Consensus + Course Materials RAG
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SPEEDGRADER AUDIT LOG COMPARISON */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="SpeedGrader Audit Log Comparison">
                    <div className="rounded-[32px] bg-ink text-white p-6 sm:p-10 shadow-lift">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Canvas Professor Audit Log View
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                                Cheatpal Legacy Overlay vs ExamGhost in SpeedGrader
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-300">
                                Why first-generation extensions with partial stealth fail 2026 Canvas integrity checks.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Cheatpal Log */}
                            <div className="rounded-2xl bg-slate-900 border border-rose-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-rose-500/20 text-rose-300 font-bold">
                                    <span>Cheatpal (Legacy Partial Stealth)</span>
                                    <span className="text-[10px] bg-rose-950 text-rose-200 px-2 py-0.5 rounded border border-rose-500/40">FLAGGED</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">16:12:04 — Started quiz attempt</div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        16:12:18 — Unencapsulated DOM overlay node detected
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Partial stealth leaves visible DOM traces on page</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        16:13:02 — Stopped viewing the Canvas quiz (0:35)
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Failed to parse matching question; student switched tabs</span>
                                    </div>
                                </div>
                            </div>

                            {/* ExamGhost Log */}
                            <div className="rounded-2xl bg-slate-900 border border-emerald-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/20 text-emerald-300 font-bold">
                                    <span>ExamGhost (Focus Shield Active)</span>
                                    <span className="text-[10px] bg-emerald-950 text-emerald-200 px-2 py-0.5 rounded border border-emerald-500/40">100% CLEAN</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">16:12:04 — Started quiz attempt</div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        16:12:46 — Answered Question 1 (Normal human pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Closed Shadow DOM · 0 host DOM mutations</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        16:13:31 — Answered Question 2 (Matching &amp; multi-dropdown solved)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Focus Shield active · 0 blur flags</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HEAD TO HEAD COMPARISON MATRIX + TECHNICAL MANIFEST DRAWER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Feature Comparison Table">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-ink mb-2">
                                Head-to-Head Feature Comparison (2026)
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Complete technical comparison between ExamGhost and Cheatpal (cheatpal.com).
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black/10">
                                        <th className="py-3.5 px-4 font-bold text-ink">Feature / Capability</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50 rounded-t-xl">ExamGhost</th>
                                        <th className="py-3.5 px-4 font-bold text-ink-muted">Cheatpal (cheatpal.com)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Invisible Mode / DOM Isolation</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Closed Shadow DOM + 1px Corner Dot</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Partial only (Detectable on screen share)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Canvas New Quizzes &amp; Blackboard Ultra</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Full LTI Shadow DOM &amp; Ultra Support</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Not supported (Legacy LMS only)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Supported Question Formats</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ All Types (MC, Matching, Ordering, Essays)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Basic Multiple-Choice only</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">AI Model Generation</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 2026 Multi-Model STEM Consensus</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Older legacy LLM stack</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Active Development &amp; LMS Updates</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Continuous 2026 Stealth Updates</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Unmaintained legacy build</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Pricing &amp; Free Starter</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 50 Free Solves · $19/mo · $99/yr · $199 Life</td>
                                        <td className="py-3.5 px-4 text-ink-muted">Recurring subscription</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store Manifest & Domain Audit */}
                        <details className="mt-6 group rounded-2xl bg-[#faf7f2] border border-black/10 p-4 text-xs">
                            <summary className="font-mono font-bold text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Architecture &amp; Domain Audit (Cheatpal)</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="mt-3 pt-3 border-t border-black/10 grid sm:grid-cols-2 gap-3 font-mono text-[11px] text-ink-secondary">
                                <div>
                                    <span className="text-ink font-bold block">Product Generation &amp; Status:</span>
                                    First-generation LMS solver extension (<code>cheatpal.com</code> · Legacy unmaintained build)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Overlay &amp; Stealth Deficiencies:</span>
                                    Partial stealth mode; overlay is visible on screen share and leaves host DOM traces
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Unsupported Portals:</span>
                                    Fails on Canvas New Quizzes (LTI), Blackboard Ultra, Learnosity, Knewton, and ALEKS
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Question Format Blind Spots:</span>
                                    Lacks support for essays, matching, ordering, multi-dropdowns, and Snap-It OCR
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* STUDENT CASE STUDY / SOCIAL PROOF */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Student Review">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#ffd5cc]/45 via-white to-white border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-xs font-bold text-ink ml-2">Verified Student Migration</span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-relaxed mb-6">
                            &ldquo;Cheatpal worked on old multiple-choice quizzes a couple years ago, but as soon as my university switched to Canvas New Quizzes and Blackboard Ultra, Cheatpal stopped detecting half the questions and couldn&apos;t handle matching or dropdowns. ExamGhost works on every single New Quizzes format in 0.3 seconds.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-rose-900 text-white font-bold flex items-center justify-center text-sm">
                                BH
                            </div>
                            <div>
                                <div className="text-sm font-bold text-ink">Brandon H.</div>
                                <div className="text-xs text-ink-muted">Information Systems · Arizona State University</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE FAQ ACCORDION */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16" aria-label="Frequently Asked Questions">
                    <div className="text-center mb-8">
                        <span className="px-3 py-1 rounded-full bg-black/5 text-xs font-mono font-bold uppercase tracking-wider text-ink-muted mb-2 inline-block">
                            Student FAQ
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                            Frequently Asked Questions: Cheatpal vs ExamGhost
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Can Canvas or proctoring scripts detect Cheatpal&apos;s overlay?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Yes. Cheatpal is a first-generation LMS extension whose partial stealth mode injects DOM elements and visible overlays that leave traces detectable by modern proctoring and screen-recording checks. ExamGhost encapsulates all UI inside a Closed Shadow DOM v1 container and offers a 1px corner indicator dot mode with Focus Shield blur suppression.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Does Cheatpal work on Canvas New Quizzes or Blackboard Ultra?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                No. Cheatpal was built for legacy static HTML multiple-choice pages and lacks adapters for Canvas New Quizzes (LTI Shadow DOM), Blackboard Ultra, Learnosity, Knewton, and ALEKS. ExamGhost supports all modern university LMS architectures natively.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">What question types does Cheatpal fail to solve?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Cheatpal is restricted primarily to basic multiple-choice questions. It lacks automated parsing for multi-dropdowns, matching, ordering, numerical formula entry, locked Canvas diagrams, and essay prompts. ExamGhost supports all 12+ university question formats plus <code>⌘+Shift+S</code> Snap-It Vision OCR.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Why are students migrating from Cheatpal to ExamGhost in 2026?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Cheatpal runs on an older, unmaintained AI stack with slow response times and recurring subscription billing. ExamGhost delivers verified 0.3s Multi-Model STEM Consensus, Course Materials RAG uploads, and <strong>50 Free Solves</strong> upfront with no credit card required.
                            </p>
                        </details>
                    </div>
                </section>

                {/* BESPOKE PASTEL CONVERSION STRIP + RELATED COMPARISONS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12" aria-label="Get Started and Related Comparisons">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#ffd5cc] via-[#ffe8e3] to-[#f4ede2] border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-black/10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-rose-950 uppercase tracking-wider mb-2">
                                    Next-Gen Shadow DOM Stealth · All Question Formats
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Leave first-generation detectable overlays in the past.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                                    Start with 50 Free Solves on ExamGhost ($0, no card required). Upgrade anytime for $19/mo, $99/yr ($8.25/mo), or $199 Lifetime.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <Link prefetch={false}
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#ffd5cc]" aria-hidden="true" />
                                    <span>Get 50 Free Solves</span>
                                </Link>
                                <Link prefetch={false}
                                    href="/canvas-quiz-solver-free-demo"
                                    className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white hover:bg-white/90 text-ink border border-black/10 inline-flex items-center gap-1.5"
                                >
                                    <span>Test Live Demo</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-ink-muted mb-3">
                                Compare Other Canvas &amp; LMS Assistants
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                                <Link prefetch={false} href="/fastsolve-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>FastSolve vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/cheatmate-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>CheatMate vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/examclutch-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>ExamClutch vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/compare-canvas-hack-extensions" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>All Comparisons</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
