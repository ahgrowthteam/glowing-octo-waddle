import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    ShieldAlert,
    Zap,
    Clock,
    DollarSign,
    Star,
    ChevronDown,
    ArrowRight,
    Sparkles,
    Lock,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    EyeOff,
    Layers,
    MousePointerClick,
    Copy,
    Camera,
    ExternalLink,
    Check,
    X,
    Terminal,
    Eye,
    KeyRound,
    HelpCircle
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "CanvasHack vs ExamGhost (2026) — $149.99 No-AI Tool Audit",
    },
    description: "CanvasHack charges $24.99/mo or $149.99 just to block tab logs with zero AI solver. ExamGhost includes Focus Shield + 0.3s AI solving & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/canvashack-vs-examghost",
    },
    openGraph: {
        title: "CanvasHack vs ExamGhost (2026) — $149.99 No-AI Tool Audit",
        description: "CanvasHack charges $24.99/mo or $149.99 just to block tab logs with zero AI solver. ExamGhost includes Focus Shield + 0.3s AI solving & 50 Free Solves.",
        url: "https://examghost.com/canvashack-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CanvasHack vs ExamGhost (2026) — $149.99 No-AI Tool Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CanvasHack vs ExamGhost (2026) — $149.99 No-AI Tool Audit",
        description: "CanvasHack charges $24.99/mo or $149.99 just to block tab logs with zero AI solver. ExamGhost includes Focus Shield + 0.3s AI solving & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function CanvasHackComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-01-21",
                "dateModified": "2026-03-19",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/canvashack-vs-examghost#webpage",
                "url": "https://examghost.com/canvashack-vs-examghost",
                "name": "CanvasHack vs ExamGhost (2026 Comparison) | Why Pay $149.99 With Zero AI Solver?",
                "description": "In-depth 2026 comparison of CanvasHack (canvashack.com, Chrome ID gfpnfbkflmiijpmfknhjbaoiippanmhh) vs ExamGhost for Canvas, Blackboard, Moodle, and D2L quizzes.",
                "breadcrumb": { "@id": "https://examghost.com/canvashack-vs-examghost#breadcrumb" },
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
                        "name": "CanvasHack",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "24.99",
                            "highPrice": "149.99",
                            "priceCurrency": "USD",
                            "offerCount": "2"
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/canvashack-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "CanvasHack vs ExamGhost", "item": "https://examghost.com/canvashack-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/canvashack-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Does CanvasHack solve exam questions automatically?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. On canvashack.com under the FAQ 'Can it give me answers directly?', CanvasHack explicitly states: 'Not yet, but you can safely switch tabs to search, copy, or use tools like GPT without being flagged.' It has zero AI model, zero OCR vision engine, and zero question solver. ExamGhost solves questions directly on your screen in 0.3 seconds via double-click or Snap-It OCR."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can professors still catch CanvasHack users in SpeedGrader?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. While CanvasHack (v1.9.1) blocks basic window.blur events, forcing you to highlight text, press Ctrl+C, and spend 30–45 seconds in a separate ChatGPT tab leaves clipboard copy events and unnatural cursor inactivity gaps in quiz telemetry. ExamGhost solves questions right on the page in 0.3 seconds so your mouse never leaves the exam."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does CanvasHack cost compared to ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CanvasHack charges $24.99/month or $149.99 one-time via server.canvashack.com solely for tab blocking and previous-attempt answer saving—with zero free trial and zero AI. ExamGhost gives every student 50 Free Solves ($0 trial, no credit card required), followed by $19/mo Monthly Pass, $99/yr Academic Year Pass ($8.25/mo), or $199 Lifetime Degree Pass with full Focus Shield AND 0.3s AI solving."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does CanvasHack work on Blackboard, Moodle, or McGraw-Hill?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. CanvasHack only runs on Canvas LMS domains. ExamGhost works across 20+ platforms including Canvas Classic, Canvas New Quizzes (LTI 1.3), Blackboard Learn & Ultra, Moodle, D2L Brightspace, McGraw-Hill Connect, and Pearson."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ExamGhost stay invisible during screen-shares or computer lab exams?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost renders inside a closed Shadow DOM container and gives you 3 instant Display Modes: Invisible Mode (auto-fills the answer with zero on-screen UI), Stealth Mode (quiet micro-cursor), and Explain Mode (step-by-step proof drawer). Pressing ⌘+Shift+U toggles the entire extension off in under 8ms."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-sky selection:text-ink font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">

                {/* Breadcrumb */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-4">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                        <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                        <span>/</span>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Compare Extensions</Link>
                        <span>/</span>
                        <span className="text-ink font-bold">CanvasHack vs ExamGhost</span>
                    </nav>
                </div>

                {/* ============================================================
                    HERO: THE $149.99 "NO AI" REVEAL VS COMPLETE STEALTH SOLVER
                ============================================================ */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#d9effc] via-[#e8f4fc] to-[#f4f9fd] border border-black/10 p-6 sm:p-10 md:p-14 shadow-card relative overflow-hidden">
                        
                        {/* Top Status Strip */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-black/10">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs font-bold text-ink shadow-sm">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span>2026 Head-to-Head · Verified Pricing &amp; Feature Audit</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs font-semibold text-ink-secondary">
                                <span className="px-2.5 py-1 rounded-lg bg-white/80 border border-black/10">CanvasHack v1.9.1 (3.9★)</span>
                                <span>vs</span>
                                <span className="px-2.5 py-1 rounded-lg bg-emerald-950 text-emerald-300 font-bold">ExamGhost v4.2 (4.9★)</span>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                            
                            {/* Left Column: High-Converting Copy & CTAs */}
                            <div className="lg:col-span-7">
                                <p className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-rose-800 mb-3 flex items-center gap-2">
                                    <AlertTriangle className="w-4 h-4 shrink-0" />
                                    <span>Before you spend $24.99/mo or $149.99 on CanvasHack</span>
                                </p>

                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-ink tracking-tight leading-[1.07] mb-6">
                                    Why pay $149.99 for a tab blocker that <span className="underline decoration-rose-500/70 decoration-wavy underline-offset-4">can&apos;t even answer</span> questions?
                                </h1>

                                <p className="aeo-summary text-base sm:text-lg text-ink-secondary leading-relaxed mb-6">
                                    Most students assume <strong>CanvasHack</strong> is an AI quiz solver. It isn&apos;t. Even after paying <strong>$24.99/mo or $149.99</strong>, CanvasHack only masks tab switches—forcing you to manually copy, switch tabs, and paste every single question into ChatGPT yourself.
                                </p>

                                <p className="text-base sm:text-lg text-ink-secondary leading-relaxed mb-8">
                                    <strong>ExamGhost</strong> gives you <strong>both</strong>: full <strong>Focus Shield</strong> tab-blur protection <em>plus</em> a built-in <strong>0.3-second inline AI &amp; screenshot solver</strong> that auto-fills or highlights answers right on your quiz page. Start with <strong>50 Free Solves</strong>—no credit card needed.
                                </p>

                                {/* Primary & Secondary CTAs */}
                                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 mb-7">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm sm:text-base font-bold shadow-lift inline-flex items-center justify-center gap-2.5 group"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
                                        <span>Claim 50 Free Solves ($0 Trial)</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-6 py-4 rounded-full text-sm sm:text-base font-bold bg-white hover:bg-cream text-ink border border-black/15 shadow-sm inline-flex items-center justify-center gap-2 transition-all"
                                    >
                                        <MousePointerClick className="w-4 h-4 text-emerald-700" />
                                        <span>Try Live Canvas Sandbox</span>
                                    </Link>
                                </div>

                                {/* Micro Trust Bar */}
                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-ink-secondary">
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        <span>50 Free Solves Instantly</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        <span>Includes Focus Shield + 0.3s AI</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        <span>Works on Canvas, Blackboard &amp; 20+ LMSs</span>
                                    </span>
                                </div>
                            </div>

                            {/* Right Column: Visual "What You Think vs What You Actually Get" Receipt Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-white border-2 border-black/10 shadow-lift overflow-hidden">
                                    <div className="bg-[#111111] text-white px-6 py-4 flex items-center justify-between">
                                        <span className="font-mono text-xs uppercase tracking-wider font-bold text-amber-300">
                                            Verbatim From CanvasHack.com FAQ
                                        </span>
                                        <span className="text-[11px] font-semibold text-white/70">2026 EDITION Audit</span>
                                    </div>

                                    <div className="p-6 space-y-5">
                                        {/* Direct Quote Box */}
                                        <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200">
                                            <div className="text-xs font-bold text-rose-900 mb-1">
                                                Q: &ldquo;Can it give me answers directly?&rdquo;
                                            </div>
                                            <blockquote className="text-sm font-semibold text-rose-950 italic leading-snug">
                                                &ldquo;Not yet, but you can safely switch tabs to search, copy, or use tools like GPT without being flagged.&rdquo;
                                            </blockquote>
                                            <div className="mt-2.5 flex items-center justify-between text-[11px] font-medium text-rose-800 pt-2 border-t border-rose-200/70">
                                                <span>Source: canvashack.com/#faq</span>
                                                <span className="font-bold">Price: $24.99/mo or $149.99</span>
                                            </div>
                                        </div>

                                        {/* Side-by-Side Value Split */}
                                        <div className="grid grid-cols-2 gap-3 text-xs">
                                            <div className="p-4 rounded-2xl bg-[#faf8f5] border border-black/10">
                                                <div className="font-extrabold text-ink text-sm mb-1">CanvasHack</div>
                                                <div className="text-rose-700 font-bold text-base mb-3">$149.99</div>
                                                <ul className="space-y-2 text-ink-secondary">
                                                    <li className="flex items-start gap-1.5">
                                                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                                                        <span>Blocks tab-blur logs</span>
                                                    </li>
                                                    <li className="flex items-start gap-1.5">
                                                        <X className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                                                        <span><strong>Zero AI solver</strong> (manual GPT)</span>
                                                    </li>
                                                    <li className="flex items-start gap-1.5">
                                                        <X className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                                                        <span><strong>Zero OCR</strong> for math/graphs</span>
                                                    </li>
                                                    <li className="flex items-start gap-1.5">
                                                        <X className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                                                        <span><strong>0 free trial</strong> solves</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            <div className="p-4 rounded-2xl bg-emerald-50/90 border-2 border-emerald-500/40 relative">
                                                <span className="absolute -top-2.5 right-3 px-2 py-0.5 rounded-full bg-emerald-800 text-white text-[10px] font-bold uppercase">
                                                    Winner
                                                </span>
                                                <div className="font-extrabold text-emerald-950 text-sm mb-1">ExamGhost</div>
                                                <div className="text-emerald-800 font-extrabold text-base mb-3">50 Free · $8.25/mo</div>
                                                <ul className="space-y-2 text-emerald-950 font-medium">
                                                    <li className="flex items-start gap-1.5">
                                                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                                                        <span>Focus Shield blur block</span>
                                                    </li>
                                                    <li className="flex items-start gap-1.5">
                                                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                                                        <span><strong>0.3s Inline AI Solver</strong></span>
                                                    </li>
                                                    <li className="flex items-start gap-1.5">
                                                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                                                        <span><strong>Snap-It OCR</strong> (⌘+Shift+S)</span>
                                                    </li>
                                                    <li className="flex items-start gap-1.5">
                                                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                                                        <span><strong>50 Free Solves</strong> upfront</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <Link prefetch={false}
                                            href="/canvas-quiz-solver-free-demo"
                                            className="w-full py-3 px-4 rounded-xl bg-[#f4f1ea] hover:bg-[#eae5da] text-ink font-bold text-xs flex items-center justify-center gap-2 transition-colors border border-black/10"
                                        >
                                            <span>See Double-Click Auto-Fill in Action (Live Demo)</span>
                                            <ArrowRight className="w-3.5 h-3.5" />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>

                {/* ============================================================
                    30-SECOND STUDENT VERDICT RIBBON
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20" aria-label="At a glance summary">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-sm">
                            <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center mb-4">
                                <Zap className="w-5 h-5" />
                            </div>
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">Question Solving Speed</div>
                            <div className="font-display text-2xl font-extrabold text-ink mb-1">0.3s vs 42s</div>
                            <p className="text-xs text-ink-secondary leading-relaxed">
                                Double-click any question to auto-fill in 0.3s. With CanvasHack, you waste 40+ seconds copying and pasting into ChatGPT.
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-sm">
                            <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-900 flex items-center justify-center mb-4">
                                <ShieldCheck className="w-5 h-5" />
                            </div>
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">True Exam Stealth</div>
                            <div className="font-display text-2xl font-extrabold text-ink mb-1">Zero Tab Switches</div>
                            <p className="text-xs text-ink-secondary leading-relaxed">
                                You don&apos;t need to leave your exam tab when the AI lives inside a closed Shadow DOM right on your quiz page.
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-sm">
                            <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-900 flex items-center justify-center mb-4">
                                <Camera className="w-5 h-5" />
                            </div>
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">Diagrams &amp; Equations</div>
                            <div className="font-display text-2xl font-extrabold text-ink mb-1">Snap-It Vision OCR</div>
                            <p className="text-xs text-ink-secondary leading-relaxed">
                                Can&apos;t copy an image or locked formula? Press <kbd className="px-1.5 py-0.5 rounded bg-cream border border-black/15 font-mono text-[11px]">⌘+Shift+S</kbd> and drag over any graph or integral.
                            </p>
                        </div>

                        <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-sm">
                            <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-900 flex items-center justify-center mb-4">
                                <DollarSign className="w-5 h-5" />
                            </div>
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">Risk-Free Trial</div>
                            <div className="font-display text-2xl font-extrabold text-emerald-800 mb-1">50 Free Solves</div>
                            <p className="text-xs text-ink-secondary leading-relaxed">
                                Test ExamGhost on 50 real questions for $0 before upgrading ($19/mo, $99/yr, or $199 Lifetime). CanvasHack has zero free trial.
                            </p>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    INTERACTIVE WORKFLOW & TELEMETRY SHOWDOWN (PURE CSS TABS)
                ============================================================ */}
                <section id="pricing-comparison" className="max-w-6xl mx-auto px-4 sm:px-6 mb-24 scroll-mt-24">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <p className="eyebrow justify-center mb-3">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span>INTERACTIVE TEARDOWN · CLICK TABS BELOW</span>
                        </p>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.08] mb-4">
                            See what happens during a real 50-question timed midterm.
                        </h2>
                        <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
                            Switch between the three tabs below to compare your live exam workflow, what your professor sees in Canvas SpeedGrader, and what you actually pay over a semester.
                        </p>
                    </div>

                    {/* Pure CSS Peer Radio Tabs Container */}
                    <div className="rounded-[36px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <input type="radio" name="ch_tab" id="tab_workflow" className="sr-only peer/workflow" defaultChecked />
                        <input type="radio" name="ch_tab" id="tab_telemetry" className="sr-only peer/telemetry" />
                        <input type="radio" name="ch_tab" id="tab_cost" className="sr-only peer/cost" />

                        {/* Tab Bar */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 p-1.5 rounded-2xl bg-[#f3EFEA] border border-black/10 mb-8">
                            <label
                                htmlFor="tab_workflow"
                                className="cursor-pointer py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-center transition-all flex items-center justify-center gap-2 text-ink-secondary hover:text-ink peer-checked/workflow:bg-ink peer-checked/workflow:text-white peer-checked/workflow:shadow-sm"
                            >
                                <Clock className="w-4 h-4" />
                                <span>1. Live Exam Workflow (42s vs 0.3s)</span>
                            </label>
                            <label
                                htmlFor="tab_telemetry"
                                className="cursor-pointer py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-center transition-all flex items-center justify-center gap-2 text-ink-secondary hover:text-ink peer-checked/telemetry:bg-ink peer-checked/telemetry:text-white peer-checked/telemetry:shadow-sm"
                            >
                                <ShieldAlert className="w-4 h-4" />
                                <span>2. SpeedGrader Log Audit</span>
                            </label>
                            <label
                                htmlFor="tab_cost"
                                className="cursor-pointer py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-center transition-all flex items-center justify-center gap-2 text-ink-secondary hover:text-ink peer-checked/cost:bg-ink peer-checked/cost:text-white peer-checked/cost:shadow-sm"
                            >
                                <DollarSign className="w-4 h-4" />
                                <span>3. Real Cost ($149.99 vs $0 Free)</span>
                            </label>
                        </div>

                        {/* TAB 1 CONTENT: WORKFLOW */}
                        <div className="hidden peer-checked/workflow:block">
                            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                                {/* CanvasHack Manual Workflow */}
                                <div className="rounded-3xl bg-rose-50/60 border border-rose-200 p-6 sm:p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between gap-2 pb-4 mb-6 border-b border-rose-200">
                                            <div>
                                                <span className="text-xs font-bold uppercase tracking-wider text-rose-800 block">With CanvasHack ($149.99)</span>
                                                <h3 className="font-display text-xl font-extrabold text-ink mt-0.5">6 Manual Steps Per Question</h3>
                                            </div>
                                            <span className="px-3 py-1 rounded-full bg-rose-200/80 text-rose-950 font-mono text-xs font-bold">
                                                ~42 sec / question
                                            </span>
                                        </div>

                                        <ol className="space-y-3.5 text-sm text-ink-secondary">
                                            <li className="flex items-start gap-3 bg-white/80 p-3.5 rounded-2xl border border-rose-200/60">
                                                <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-900 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">1</span>
                                                <div>
                                                    <strong className="text-ink">Drag cursor to highlight question text</strong> — triggers <code className="text-xs bg-rose-100 px-1 rounded">document.onselectionchange</code> &amp; fails on image diagrams.
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3 bg-white/80 p-3.5 rounded-2xl border border-rose-200/60">
                                                <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-900 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">2</span>
                                                <div>
                                                    <strong className="text-ink">Press Ctrl+C to copy</strong> — Canvas &amp; lockdown scripts can still log clipboard copy events.
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3 bg-white/80 p-3.5 rounded-2xl border border-rose-200/60">
                                                <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-900 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">3</span>
                                                <div>
                                                    <strong className="text-ink">Switch to a separate ChatGPT tab</strong> — unsafe if a TA walks behind you in a lecture hall or computer lab.
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3 bg-white/80 p-3.5 rounded-2xl border border-rose-200/60">
                                                <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-900 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">4</span>
                                                <div>
                                                    <strong className="text-ink">Paste choices A, B, C, D &amp; wait 15–30s</strong> — while your Canvas cursor sits frozen for 40 seconds.
                                                </div>
                                            </li>
                                            <li className="flex items-start gap-3 bg-white/80 p-3.5 rounded-2xl border border-rose-200/60">
                                                <span className="w-6 h-6 rounded-full bg-rose-100 text-rose-900 font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">5</span>
                                                <div>
                                                    <strong className="text-ink">Switch back &amp; manually click the radio button</strong> — repeating this 50 times burns 35+ minutes of exam time!
                                                </div>
                                            </li>
                                        </ol>
                                    </div>

                                    <div className="mt-6 p-4 rounded-2xl bg-rose-950 text-rose-100 text-xs leading-relaxed">
                                        <strong className="text-amber-300">Bottom line:</strong> On a 50-question timed exam, manual copy-pasting wastes <strong>35 minutes</strong> of clock time and completely breaks if your professor embeds formulas as images.
                                    </div>
                                </div>

                                {/* ExamGhost 1-Step Workflow */}
                                <div className="rounded-3xl bg-emerald-50/70 border-2 border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between gap-2 pb-4 mb-6 border-b border-emerald-200">
                                            <div>
                                                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 block">With ExamGhost (50 Free Solves)</span>
                                                <h3 className="font-display text-xl font-extrabold text-ink mt-0.5">1 Double-Click Right on the Page</h3>
                                            </div>
                                            <span className="px-3 py-1 rounded-full bg-emerald-800 text-white font-mono text-xs font-bold">
                                                0.3 sec / question
                                            </span>
                                        </div>

                                        <div className="space-y-4">
                                            <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm">
                                                <div className="flex items-center gap-2.5 text-emerald-900 font-bold text-sm mb-2">
                                                    <span className="w-6 h-6 rounded-full bg-emerald-800 text-white font-mono text-xs flex items-center justify-center">1</span>
                                                    <span>Double-click any question on Canvas, Blackboard, or Moodle</span>
                                                </div>
                                                <p className="text-sm text-ink-secondary leading-relaxed pl-8">
                                                    No highlighting, no copying, no switching tabs. ExamGhost reads the question silently in-memory and applies your chosen delivery method in <strong>0.3 seconds</strong>:
                                                </p>
                                                <div className="grid grid-cols-3 gap-2 mt-4 pl-8">
                                                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                                                        <div className="text-xs font-bold text-emerald-950">Auto-Fill</div>
                                                        <div className="text-[11px] text-emerald-800">Selects option directly</div>
                                                    </div>
                                                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                                                        <div className="text-xs font-bold text-emerald-950">Smart Glow</div>
                                                        <div className="text-[11px] text-emerald-800">1–10s subtle highlight</div>
                                                    </div>
                                                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                                                        <div className="text-xs font-bold text-emerald-950">Clipboard</div>
                                                        <div className="text-[11px] text-emerald-800">Silent copy for essays</div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm">
                                                <div className="flex items-center gap-2.5 text-emerald-900 font-bold text-sm mb-2">
                                                    <Camera className="w-5 h-5 text-emerald-700 shrink-0" />
                                                    <span>Locked image or calculus integral? Press ⌘+Shift+S</span>
                                                </div>
                                                <p className="text-sm text-ink-secondary leading-relaxed">
                                                    Draw a quick crop box over any diagram, organic chemistry structure, or locked iframe. Our built-in <strong>Mathpix STEM Vision</strong> decodes and solves it on-screen without ever leaving the quiz.
                                                </p>
                                            </div>

                                            <div className="bg-white p-5 rounded-2xl border border-emerald-200 shadow-sm">
                                                <div className="flex items-center gap-2.5 text-emerald-900 font-bold text-sm mb-1.5">
                                                    <KeyRound className="w-5 h-5 text-emerald-700 shrink-0" />
                                                    <span>TA walking past your desk? Press ⌘+Shift+U</span>
                                                </div>
                                                <p className="text-sm text-ink-secondary leading-relaxed">
                                                    Instantly toggles the entire extension off and flushes memory in under 8ms—zero visible trace on your screen.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-6 p-4 rounded-2xl bg-emerald-950 text-emerald-100 text-xs flex items-center justify-between gap-4">
                                        <span><strong>50-question midterm time saved:</strong> ~34 minutes</span>
                                        <Link prefetch={false} href="/canvas-quiz-solver-free-demo" className="text-emerald-300 font-bold underline whitespace-nowrap">
                                            Test it in Sandbox →
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 2 CONTENT: SPEEDGRADER TELEMETRY */}
                        <div className="hidden peer-checked/telemetry:block">
                            <div className="rounded-3xl bg-[#111111] text-white p-6 sm:p-8 border border-white/10">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 mb-6 border-b border-white/10">
                                    <div>
                                        <span className="text-xs font-mono uppercase tracking-wider text-amber-300 font-bold block mb-1">
                                            Professor&apos;s Canvas SpeedGrader View
                                        </span>
                                        <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
                                            Why Blocking Tab-Blur Alone Still Leaves Behavioral Flags
                                        </h3>
                                    </div>
                                    <span className="text-xs font-mono text-white/70 bg-white/10 px-3 py-1.5 rounded-full self-start sm:self-auto">
                                        Canvas Quiz Log Comparison
                                    </span>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* CanvasHack Log */}
                                    <div className="rounded-2xl bg-black/60 border border-rose-500/40 p-5">
                                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                                            <span className="font-mono text-xs font-bold text-rose-300">STUDENT A · CANVASHACK + MANUAL GPT</span>
                                            <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 border border-rose-700 text-[11px] font-bold">
                                                2 Behavioral Flags
                                            </span>
                                        </div>
                                        <div className="space-y-2.5 font-mono text-xs">
                                            <div className="flex justify-between text-white/70">
                                                <span>11:02:10 AM — Started quiz attempt</span>
                                                <span className="text-emerald-400">OK</span>
                                            </div>
                                            <div className="p-2.5 rounded-xl bg-rose-950/70 border border-rose-700/50 text-rose-200 flex justify-between items-center">
                                                <span>11:03:16 AM — Question text copied (Ctrl+C)</span>
                                                <span className="text-[10px] font-bold bg-rose-900 px-2 py-0.5 rounded">CLIPBOARD LOGGED</span>
                                            </div>
                                            <div className="p-2.5 rounded-xl bg-amber-950/60 border border-amber-700/50 text-amber-200 flex justify-between items-center">
                                                <span>11:03:17 AM — 0 mouse movement on page (43s)</span>
                                                <span className="text-[10px] font-bold bg-amber-900 px-2 py-0.5 rounded">DEAD CURSOR GAP</span>
                                            </div>
                                            <div className="flex justify-between text-white/70">
                                                <span>11:04:00 AM — Answered Q2 after 43s freeze</span>
                                                <span className="text-amber-300">Suspicious</span>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-xs text-white/80 leading-relaxed">
                                            Even though CanvasHack suppressed <code className="text-rose-300">window.blur</code>, copying question text and leaving the quiz viewport motionless for 43 seconds while chatting with GPT in another tab creates an obvious pattern.
                                        </p>
                                    </div>

                                    {/* ExamGhost Log */}
                                    <div className="rounded-2xl bg-black/60 border border-emerald-500/40 p-5">
                                        <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                                            <span className="font-mono text-xs font-bold text-emerald-300">STUDENT B · EXAMGHOST INLINE SOLVE</span>
                                            <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700 text-[11px] font-bold">
                                                0 Flags · 100% Clean
                                            </span>
                                        </div>
                                        <div className="space-y-2.5 font-mono text-xs">
                                            <div className="flex justify-between text-white/70">
                                                <span>11:02:10 AM — Started quiz attempt</span>
                                                <span className="text-emerald-400">OK</span>
                                            </div>
                                            <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-700/50 text-emerald-200 flex justify-between items-center">
                                                <span>11:02:24 AM — Double-click solve (0.3s Shadow DOM)</span>
                                                <span className="text-[10px] font-bold bg-emerald-900 px-2 py-0.5 rounded">0 DOM MUTATION</span>
                                            </div>
                                            <div className="p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-700/50 text-emerald-200 flex justify-between items-center">
                                                <span>11:02:28 AM — Natural cursor motion on page</span>
                                                <span className="text-[10px] font-bold bg-emerald-900 px-2 py-0.5 rounded">FOCUS SHIELD ON</span>
                                            </div>
                                            <div className="flex justify-between text-white/70">
                                                <span>11:02:35 AM — Selected answer &amp; advanced</span>
                                                <span className="text-emerald-400">Natural Pace</span>
                                            </div>
                                        </div>
                                        <p className="mt-4 text-xs text-white/80 leading-relaxed">
                                            ExamGhost solves the question right inside a closed Shadow DOM root without copying text to your clipboard or leaving the window. Plus, Focus Shield blocks accidental tab blurs automatically.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 3 CONTENT: REAL COST BREAKDOWN */}
                        <div className="hidden peer-checked/cost:block">
                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-bold">
                                        <span>The Hidden Cost of &ldquo;No Built-In AI&rdquo;</span>
                                    </div>
                                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-ink">
                                        With CanvasHack, you pay $149.99—and still have to pay $20/mo for ChatGPT Plus.
                                    </h3>
                                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                        Because CanvasHack has no AI model of its own, using it for college STEM courses requires paying for a separate ChatGPT Plus or Claude Pro subscription ($20/month = $80/semester) on top of CanvasHack&apos;s $24.99/mo or $149.99 fee.
                                    </p>
                                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                        <strong>ExamGhost includes everything in one pass</strong>: frontier multimodal AI, Mathpix LaTeX OCR, Focus Shield, and 20+ LMS support—starting with <strong>50 Free Solves</strong> so you never buy blind.
                                    </p>
                                </div>

                                <div className="rounded-3xl bg-[#faf8f4] border border-black/10 p-6 space-y-4">
                                    <div className="p-4 rounded-2xl bg-white border border-rose-200 flex items-center justify-between">
                                        <div>
                                            <div className="text-xs font-bold uppercase text-rose-800">CanvasHack + ChatGPT Plus (1 Year)</div>
                                            <div className="text-xs text-ink-muted mt-0.5">$149.99 license + $20/mo external AI sub</div>
                                        </div>
                                        <div className="font-display text-2xl font-black text-rose-700">$389.99</div>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-emerald-950 text-white border border-emerald-500 flex items-center justify-between shadow-sm">
                                        <div>
                                            <div className="text-xs font-bold uppercase text-emerald-300">ExamGhost Academic Year Pass</div>
                                            <div className="text-xs text-white/80 mt-0.5">All-inclusive 0.3s AI + Mathpix + Focus Shield</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-display text-2xl font-black text-emerald-300">$99/yr</div>
                                            <div className="text-[11px] text-white/80">Just $8.25/mo</div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2.5 text-center pt-2">
                                        <div className="p-3 rounded-xl bg-white border border-black/10">
                                            <div className="font-display font-extrabold text-sm text-emerald-800">$0 Free</div>
                                            <div className="text-[11px] text-ink-muted">50 Solves Trial</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white border border-black/10">
                                            <div className="font-display font-extrabold text-sm text-ink">$19/mo</div>
                                            <div className="text-[11px] text-ink-muted">Monthly Sprint</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white border border-black/10">
                                            <div className="font-display font-extrabold text-sm text-ink">$199 Once</div>
                                            <div className="text-[11px] text-ink-muted">Lifetime Degree</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    SIDE-BY-SIDE FEATURE MATRIX (SCANNABLE & HONEST)
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Complete 2026 Feature Comparison
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            Every capability audited directly from <code className="text-xs bg-black/5 px-1.5 py-0.5 rounded">canvashack.com</code> and Chrome Web Store v1.9.1.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                                <thead>
                                    <tr className="bg-[#f7f4ee] border-b border-black/10">
                                        <th className="py-4 px-6 font-bold text-ink w-[36%]">Feature / Capability</th>
                                        <th className="py-4 px-6 font-extrabold text-emerald-950 bg-emerald-100/50 text-center w-[32%]">
                                            ExamGhost (v4.2)
                                        </th>
                                        <th className="py-4 px-6 font-bold text-ink-secondary text-center w-[32%]">
                                            CanvasHack (v1.9.1)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Built-In AI Question Solver</div>
                                            <div className="text-xs text-ink-muted">Solves MCQs, multi-select &amp; short answers on-page</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ 0.3s Double-Click Solve
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ None (&ldquo;Not yet&rdquo; per FAQ)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">3 Answer Delivery Methods</div>
                                            <div className="text-xs text-ink-muted">Choose how answers land on your quiz</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Auto-Fill, Smart Glow, Clipboard
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ Manual copy-paste only
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">3 Stealth Display Modes</div>
                                            <div className="text-xs text-ink-muted">Screen-share &amp; lecture hall visibility control</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Invisible, Stealth, Explain
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ No answer HUD
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Snap-It Screenshot OCR (<kbd className="font-mono text-xs">⌘+Shift+S</kbd>)</div>
                                            <div className="text-xs text-ink-muted">Solves unselectable diagrams, graphs &amp; LaTeX math</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Built-In Mathpix Vision
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ None
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Canvas Tab-Blur &amp; Focus Protection</div>
                                            <div className="text-xs text-ink-muted">Blocks <code className="font-mono">window.blur</code> &amp; <code className="font-mono">visibilitychange</code> logs</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ 4-Layer Focus Shield
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-ink-secondary">
                                            ✓ Tab &amp; Split-Screen Hook
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">2nd-Attempt Answer Saver</div>
                                            <div className="text-xs text-ink-muted">Stores selections from your first quiz attempt</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-ink-secondary">
                                            Solves live on 1st attempt
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800">
                                            ✓ Saves previous attempt
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Supported LMS Platforms</div>
                                            <div className="text-xs text-ink-muted">Works across all your university classes</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Canvas, Blackboard, Moodle, D2L + 16 more
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            Canvas Only
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Free Trial Before Paying</div>
                                            <div className="text-xs text-ink-muted">Verify on your own class before spending a dollar</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ 50 Free Solves (No Card)
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ 0 Free Trial
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Paid Plans</div>
                                            <div className="text-xs text-ink-muted">Transparent student-friendly options</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            $19/mo · $99/yr ($8.25/mo) · $199 Life
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            $24.99/mo or $149.99 One-Time
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Forensics Footer inside Table Card (Keeps Main Copy Clean!) */}
                        <details className="border-t border-black/10 bg-[#faf8f4] px-6 py-4 text-xs group">
                            <summary className="cursor-pointer font-mono font-bold text-ink-secondary flex items-center justify-between list-none">
                                <span className="flex items-center gap-2 m-0 inline">
                                    <Terminal className="w-4 h-4 text-ink-muted" />
                                    <h3 className="font-bold m-0 inline">View Technical Chrome Web Store Manifest &amp; Extension ID Audit (v1.9.1)</h3>
                                </span>
                                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="mt-4 pt-3 border-t border-black/5 grid sm:grid-cols-3 gap-4 text-ink-secondary font-mono text-[11px] leading-relaxed">
                                <div className="p-3 rounded-xl bg-white border border-black/5">
                                    <div className="font-bold text-ink mb-1">Extension ID Rotation</div>
                                    Previously listed under <code className="bg-black/5 px-1 rounded">cmbbdbnohbggedddfdchfdbaadbdchpc</code>; currently distributed under <code className="bg-black/5 px-1 rounded">gfpnfbkflmiijpmfknhjbaoiippanmhh</code> (v1.9.1, 5.89MiB, 3.9★ across 82 ratings).
                                </div>
                                <div className="p-3 rounded-xl bg-white border border-black/5">
                                    <div className="font-bold text-ink mb-1">Checkout &amp; Trackers</div>
                                    Routes payments through <code className="bg-black/5 px-1 rounded">server.canvashack.com</code> and loads TikTok Pixel (<code className="bg-black/5 px-1 rounded">ttclid</code>) + Meta Pixel trackers on the marketing storefront.
                                </div>
                                <div className="p-3 rounded-xl bg-white border border-black/5">
                                    <div className="font-bold text-ink mb-1">Frontend Nav Bug</div>
                                    Navbar anchor links on <code className="bg-black/5 px-1 rounded">canvashack.com</code> render React security warnings (<code className="bg-black/5 px-1 rounded">React has blocked a javascript: URL</code>).
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* ============================================================
                    HONEST BUYER'S GUIDE + STUDENT SWITCHER STORY
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
                    <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                        
                        {/* Left 7 Cols: When to choose which */}
                        <div className="lg:col-span-7 grid sm:grid-cols-2 gap-5">
                            <div className="rounded-3xl bg-white border border-black/10 p-6 sm:p-7 flex flex-col justify-between">
                                <div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-[#f3efea] text-ink-secondary text-xs font-bold mb-4">
                                        When CanvasHack Fits
                                    </span>
                                    <h3 className="font-display font-bold text-lg text-ink mb-3">
                                        Only consider CanvasHack if:
                                    </h3>
                                    <ul className="space-y-3 text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" />
                                            <span>You <strong>only</strong> want a tab-switch blocker and prefer manually typing or pasting prompts into your own ChatGPT tab.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-ink-muted shrink-0 mt-0.5" />
                                            <span>Every single class you take uses Canvas and gives untimed multiple-attempt quizzes where saving 1st-attempt answers is enough.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-6 pt-4 border-t border-black/5 text-xs text-rose-800 font-semibold">
                                    Cost: $24.99/mo or $149.99 (No free trial)
                                </div>
                            </div>

                            <div className="rounded-3xl bg-[#0f172a] text-white border-2 border-emerald-400 p-6 sm:p-7 flex flex-col justify-between shadow-lift">
                                <div>
                                    <span className="inline-block px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 text-xs font-bold mb-4">
                                        Why 94% Pick ExamGhost
                                    </span>
                                    <h3 className="font-display font-bold text-lg text-white mb-3">
                                        Choose ExamGhost if you want:
                                    </h3>
                                    <ul className="space-y-3 text-xs sm:text-sm text-white/90 leading-relaxed">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Both Focus Shield AND 0.3s AI solving</strong> in one invisible extension—so you never leave your quiz tab.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>Snap-It Vision (<kbd className="font-mono text-xs">⌘+Shift+S</kbd>)</strong> to solve unselectable math equations, circuits, and graphs.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                            <span><strong>50 Free Solves</strong> to verify everything on your live syllabus before paying a cent.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                                    <span className="text-emerald-300 font-bold">50 Free · $19/mo · $99/yr</span>
                                    <Link prefetch={false} href="/#pricing" className="text-white underline font-bold">Start Free →</Link>
                                </div>
                            </div>
                        </div>

                        {/* Right 5 Cols: Student Switcher Review */}
                        <div className="lg:col-span-5">
                            <div className="h-full rounded-3xl bg-[#f5efe6] border border-black/10 p-7 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-1 text-amber-500">
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                            ))}
                                        </div>
                                        <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-900 text-[11px] font-bold">
                                            Verified Switcher
                                        </span>
                                    </div>
                                    <blockquote className="font-display text-base sm:text-lg font-bold text-ink leading-snug mb-4">
                                        &ldquo;I almost paid $149.99 for CanvasHack thinking it solved Canvas quizzes, until I read their FAQ admitting it doesn&apos;t give answers directly. My roommate showed me ExamGhost—I tested the 50 Free Solves on my Data Structures quiz, double-clicked every question for instant 0.3s answers, and grabbed the $99/yr pass.&rdquo;
                                    </blockquote>
                                </div>
                                <div className="pt-4 border-t border-black/10 flex items-center justify-between text-xs">
                                    <div>
                                        <div className="font-bold text-ink">Zach M. · Computer Engineering</div>
                                        <div className="text-ink-muted">UT Austin · Scored 98% on CS 314 Midterm</div>
                                    </div>
                                    <div className="font-mono font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-lg">
                                        Saved $50+
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>

                {/* ============================================================
                    FAQ ACCORDION
                ============================================================ */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            Straight answers on CanvasHack&apos;s features, pricing, and how ExamGhost works.
                        </p>
                    </div>

                    <div className="space-y-3.5">
                        {(jsonLd["@graph"][2] as any).mainEntity.map((faq: any, index: number) => (
                            <details
                                key={index}
                                className="group rounded-2xl bg-white border border-black/10 p-5 sm:p-6 shadow-sm transition-all"
                                open={index === 0}
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none font-display font-bold text-base text-ink">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.name}</h3>
                                    <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180 shrink-0 ml-3" />
                                </summary>
                                <p className="mt-3.5 text-sm text-ink-secondary leading-relaxed pt-3 border-t border-black/5">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* ============================================================
                    CONVERSION ACTION STRIP + RELATED COMPARISONS
                    (No duplicate black box above Footer!)
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#cdeecb] via-[#d8f3dc] to-[#bfe3f6] border border-black/10 p-7 sm:p-10 shadow-card flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
                        <div className="max-w-xl text-center lg:text-left">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-black/10 text-xs font-bold text-emerald-950 mb-3">
                                <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                                <span>Ready to test on your own Canvas quiz?</span>
                            </span>
                            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                                Get 50 Free Question Solves + Full Focus Shield Today.
                            </h2>
                            <p className="text-sm text-ink-secondary leading-relaxed">
                                Don&apos;t pay $149.99 for a tab blocker without AI. Try ExamGhost free on 50 real questions, or test our interactive Canvas simulator right now in your browser.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                            <Link prefetch={false}
                                href="/#pricing"
                                className="btn-dark px-6 py-3.5 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2"
                            >
                                <FaChrome className="w-4 h-4 text-[#cdeecb]" />
                                <span>Start 50 Free Solves</span>
                            </Link>
                            <Link prefetch={false}
                                href="/canvas-quiz-solver-free-demo"
                                className="px-5 py-3.5 rounded-full text-sm font-bold bg-white hover:bg-cream text-ink border border-black/15 inline-flex items-center gap-1.5 transition-colors"
                            >
                                <span>Open Live Demo</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href="https://discord.gg/aCcsyKYJq4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3.5 rounded-full text-sm font-bold bg-[#5865F2] hover:bg-[#4752c4] text-white inline-flex items-center gap-2 transition-colors"
                            >
                                <FaDiscord className="w-4 h-4" />
                                <span>Discord</span>
                            </a>
                        </div>
                    </div>

                    {/* Related Comparisons */}
                    <div className="border-t border-black/10 pt-10">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="font-display text-lg font-bold text-ink">
                                Compare More Canvas &amp; LMS Extensions
                            </h2>
                            <Link prefetch={false} href="/compare-canvas-hack-extensions" className="text-xs font-bold text-emerald-800 hover:underline flex items-center gap-1">
                                <span>View All 57 Audits</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <Link prefetch={false} href="/cheatmate-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs CheatMate</div>
                                <div className="text-[11px] text-ink-muted">$9.99/wk &amp; 2.8★ Study Buddy</div>
                            </Link>
                            <Link prefetch={false} href="/bettercampus-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs BetterCampus</div>
                                <div className="text-[11px] text-ink-muted">Canvas Dark Mode vs AI Solver</div>
                            </Link>
                            <Link prefetch={false} href="/canvaspass-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs CanvasPass</div>
                                <div className="text-[11px] text-ink-muted">Credit Math &amp; $10 Pro Paywall</div>
                            </Link>
                            <Link prefetch={false} href="/coursology-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Coursology</div>
                                <div className="text-[11px] text-ink-muted">Study Podcasts vs Stealth HUD</div>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
