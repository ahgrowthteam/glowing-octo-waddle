import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    ShieldAlert,
    Zap,
    ChevronDown,
    ArrowRight,
    Sparkles,
    CheckCircle2,
    EyeOff,
    ExternalLink,
    Network,
    Code2,
    MousePointerClick,
    Cpu,
    CreditCard
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "StudyFox vs ExamGhost (2026) — Toolbar Popup vs Shadow DOM",
    },
    description: "Compare StudyFox AI (studyfox.pro) with ExamGhost. Replace toolbar popup blur logs with a 0.3s closed Shadow DOM HUD, Focus Shield, and 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/studyfox-vs-examghost",
    },
    openGraph: {
        title: "StudyFox vs ExamGhost (2026) — Toolbar Popup vs Shadow DOM",
        description: "Compare StudyFox AI (studyfox.pro) with ExamGhost. Replace toolbar popup blur logs with a 0.3s closed Shadow DOM HUD, Focus Shield, and 50 Free Solves.",
        url: "https://examghost.com/studyfox-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "StudyFox vs ExamGhost (2026) — Toolbar Popup vs Shadow DOM",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "StudyFox vs ExamGhost (2026) — Toolbar Popup vs Shadow DOM",
        description: "Compare StudyFox AI (studyfox.pro) with ExamGhost. Replace toolbar popup blur logs with a 0.3s closed Shadow DOM HUD, Focus Shield, and 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function StudyfoxVsExamghostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-01-13",
                "dateModified": "2026-03-23",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/studyfox-vs-examghost#webpage",
                "url": "https://examghost.com/studyfox-vs-examghost",
                "name": "StudyFox vs ExamGhost (2026 Comparison) | Toolbar Popup vs Closed Shadow DOM Stealth",
                "description": "In-depth comparison between StudyFox AI (studyfox.pro) and ExamGhost across Canvas SpeedGrader focus telemetry, closed Shadow DOM isolation, FSRS study tools, and pricing.",
                "breadcrumb": { "@id": "https://examghost.com/studyfox-vs-examghost#breadcrumb" },
                "about": [
                    {
                        "@type": "SoftwareApplication",
                        "name": "ExamGhost",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome, Edge, Brave, macOS, Windows",
                        "offers": [
                            { "@type": "Offer", "name": "Free Trial (50 Solves)", "price": "0", "priceCurrency": "USD" },
                            { "@type": "Offer", "name": "Monthly Pass", "price": "19.00", "priceCurrency": "USD" },
                            { "@type": "Offer", "name": "Academic Year Pass", "price": "99.00", "priceCurrency": "USD" },
                            { "@type": "Offer", "name": "Lifetime Degree Pass", "price": "199.00", "priceCurrency": "USD" }
                        ]
                    },
                    {
                        "@type": "SoftwareApplication",
                        "name": "StudyFox AI",
                        "url": "https://studyfox.pro",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension, Web"
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/studyfox-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "StudyFox vs ExamGhost", "item": "https://examghost.com/studyfox-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/studyfox-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How does StudyFox AI's Chrome extension work compared to ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "According to StudyFox's official documentation (studyfox.pro/pricing), you must click the StudyFox icon in the Chrome toolbar or crop a region, which screenshots the question and displays the step-by-step explanation inside an extension popup. ExamGhost eliminates toolbar clicks and popups: you simply double-click any question on Canvas, Blackboard, or Moodle for a 0.3s inline auto-fill or translucent ghost badge inside a closed Shadow DOM."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does clicking the StudyFox toolbar popup trigger Canvas SpeedGrader blur flags?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Whenever a student clicks an extension icon in the browser's top toolbar to open a popup window, the browser tab loses active document focus and fires a native window.blur event. Canvas SpeedGrader logs 'Stopped viewing the Canvas quiz-taking page' with a timestamp. ExamGhost keeps your cursor inside the page and uses Focus Shield to suppress window.blur and visibilitychange events."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What study tools does StudyFox offer that are different from ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "StudyFox AI is an excellent pre-exam study suite offering PDF-to-Mind-Map generation, FSRS spaced-repetition flashcards (with Anki and Quizlet import), an AI Note Taker, and free micro-extensions like Citepad and Deep Focus Pomodoro. ExamGhost is not a flashcard deck builder—it is a specialized, screen-share-safe live quiz and exam solver."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How do StudyFox and ExamGhost compare on pricing and refund guarantees?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "StudyFox offers auto-renewing weekly, monthly, semester, and annual subscriptions after a short trial with a 7-day refund policy. ExamGhost provides 50 Free Question Solves upfront with zero credit card required, backed by a 14-day 100% money-back guarantee on its $19/month Pass, $99/year ($8.25/mo) Academic Year Pass, and $199 Lifetime Degree Pass."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-[#ffd5cc] selection:text-ink font-sans">
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
                        <span className="text-ink font-semibold">StudyFox vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: Toolbar Popup Focus Loss vs Closed Shadow DOM Inline Solve */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#fff5f2] via-[#ffd5cc]/65 to-[#fef3c7]/50 p-6 sm:p-10 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/10 border border-rose-950/20 text-xs font-bold text-rose-950">
                                <Sparkles className="w-3.5 h-3.5 text-rose-800" aria-hidden="true" />
                                <span>2026 Architecture Review: FSRS &amp; Toolbar Popup vs Inline Exam Solver</span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/90 border border-black/10 text-[11px] font-bold text-ink uppercase tracking-wider">
                                Updated April 2026 · studyfox.pro
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-ink leading-[1.06] mb-5">
                                    StudyFox maps PDFs &amp; opens <span className="underline decoration-rose-500/60 decoration-wavy underline-offset-4">toolbar popups</span>. ExamGhost solves inline with zero blur logs.
                                </h1>

                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-7 max-w-2xl">
                                    <strong>StudyFox AI</strong> (<code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">studyfox.pro</code>) is a thoughtful pre-exam toolkit for turning lecture PDFs into mind maps and FSRS flashcards (with Anki import). However, on live exams, StudyFox requires clicking its Chrome toolbar icon to open an extension popup—which immediately steals tab focus and fires <code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">window.blur</code> in Canvas SpeedGrader. <strong>ExamGhost</strong> solves questions directly on the page via Double-Click in <strong>0.3 seconds</strong> inside a closed Shadow DOM, starting with <strong>50 Free Solves</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <a
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#ffd5cc]" aria-hidden="true" />
                                        <span>Claim 50 Free Solves ($0 Trial)</span>
                                    </a>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-5 py-4 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-ink border border-black/10 shadow-sm inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
                                    >
                                        <span>Try Live Canvas Sandbox</span>
                                        <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                    </Link>
                                    <a
                                        href="#studyfox-audit"
                                        className="px-4 py-4 rounded-full text-xs sm:text-sm font-semibold text-rose-950 hover:text-ink inline-flex items-center gap-1"
                                    >
                                        <span>Inspect Toolbar Popup Blur</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </a>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-secondary font-medium">
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        No toolbar popup clicks (0 blur logs)
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        0.3s Edge Solve vs 3.4s Multi-Model Queue
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        No credit card for 50 solves
                                    </span>
                                </div>
                            </div>

                            {/* Right Side Bespoke Visual: Toolbar Popup Focus Loss vs In-Page Closed Shadow HUD */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#141418] text-white p-5 sm:p-6 border border-white/15 shadow-lift">
                                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                                        <div className="flex items-center gap-2">
                                            <MousePointerClick className="w-4 h-4 text-rose-400" />
                                            <span className="font-mono text-xs font-bold text-slate-200">Toolbar Popup vs Inline Solve</span>
                                        </div>
                                        <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono text-[10px] font-bold">
                                            window.blur TEST
                                        </span>
                                    </div>

                                    {/* StudyFox Toolbar Popup */}
                                    <div className="p-3.5 rounded-2xl bg-rose-950/45 border border-rose-500/30 mb-3.5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-rose-200">StudyFox AI (studyfox.pro)</span>
                                            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-rose-900/70 text-rose-200">
                                                ~3.4s Popup
                                            </span>
                                        </div>
                                        <div className="space-y-1.5 font-mono text-[11px]">
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1.5 rounded-lg text-amber-200">
                                                <span>1. Click StudyFox Toolbar Icon</span>
                                                <span className="text-rose-400 font-bold">Focus Lost!</span>
                                            </div>
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1.5 rounded-lg text-rose-200">
                                                <span>2. Query GPT + Claude + Gemini</span>
                                                <span className="text-rose-400 font-bold">3.4s Queue</span>
                                            </div>
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1.5 rounded-lg text-rose-300">
                                                <span>3. SpeedGrader Departure Log</span>
                                                <span className="text-rose-400 font-bold">FLAGGED</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ExamGhost In-Page HUD */}
                                    <div className="p-3.5 rounded-2xl bg-emerald-950/50 border border-emerald-500/30">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-emerald-200">ExamGhost v4.2 Stealth Engine</span>
                                            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-900/70 text-emerald-200">
                                                0.3s Inline
                                            </span>
                                        </div>
                                        <div className="space-y-1.5 font-mono text-[11px]">
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1.5 rounded-lg text-emerald-200">
                                                <span>Double-Click Question Inline</span>
                                                <span className="text-emerald-400 font-bold">Cursor Stays Put</span>
                                            </div>
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1.5 rounded-lg text-emerald-200">
                                                <span>Closed #shadow-root + Focus Shield</span>
                                                <span className="text-emerald-400 font-bold">0 Blur Logs</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* QUICK METRIC RIBBON */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">Extension Workflow</div>
                            <div className="text-lg sm:text-xl font-black text-emerald-800">Double-Click Inline</div>
                            <div className="text-xs text-rose-800 mt-1">StudyFox: Click Toolbar Popup</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">SpeedGrader Blur Logs</div>
                            <div className="text-lg sm:text-xl font-black text-emerald-800">0 Flags (Focus Shield)</div>
                            <div className="text-xs text-rose-800 mt-1">StudyFox: Popup Fires window.blur</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">Solve Latency</div>
                            <div className="text-lg sm:text-xl font-black text-emerald-800">0.3s Edge Vision</div>
                            <div className="text-xs text-ink-secondary mt-1">StudyFox: ~3.4s 3-Model Check</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">Refund &amp; Trial Policy</div>
                            <div className="text-lg sm:text-xl font-black text-emerald-800">50 Free + 14-Day</div>
                            <div className="text-xs text-ink-secondary mt-1">StudyFox: Auto-Renew + 7-Day</div>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE 3-TAB AUDIT: StudyFox Toolbar Popup & Multi-Model Queue vs ExamGhost */}
                <section id="studyfox-audit" className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 scroll-mt-24">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="max-w-2xl mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-950 text-xs font-bold mb-3">
                                <Zap className="w-3.5 h-3.5" />
                                Interactive Extension &amp; Billing Breakdown
                            </div>
                            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mb-2">
                                How StudyFox&apos;s Toolbar Popup &amp; Multi-Model Queue Compare to ExamGhost
                            </h2>
                            <p className="text-sm text-ink-secondary">
                                Click any tab below to inspect how StudyFox&apos;s toolbar popup (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">studyfox.pro/extension</code>), 3-model consensus latency, and weekly trial auto-renewals compare against ExamGhost.
                            </p>
                        </div>

                        {/* Pure CSS Radio Tabs */}
                        <input type="radio" name="studyfox_tab" id="tab-popup" className="sr-only peer/popup" defaultChecked />
                        <input type="radio" name="studyfox_tab" id="tab-latency" className="sr-only peer/latency" />
                        <input type="radio" name="studyfox_tab" id="tab-trial" className="sr-only peer/trial" />

                        <div className="grid sm:grid-cols-3 gap-2 p-1.5 rounded-2xl bg-[#f4f1ea] border border-black/10 mb-8">
                            <label
                                htmlFor="tab-popup"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/popup:bg-white peer-checked/popup:text-ink peer-checked/popup:shadow-sm flex items-center justify-center gap-2"
                            >
                                <MousePointerClick className="w-4 h-4 text-rose-600" />
                                <span>1. Toolbar Popup Blur</span>
                            </label>
                            <label
                                htmlFor="tab-latency"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/latency:bg-white peer-checked/latency:text-ink peer-checked/latency:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Cpu className="w-4 h-4 text-amber-600" />
                                <span>2. 3.4s Multi-Model vs 0.3s</span>
                            </label>
                            <label
                                htmlFor="tab-trial"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/trial:bg-white peer-checked/trial:text-ink peer-checked/trial:shadow-sm flex items-center justify-center gap-2"
                            >
                                <CreditCard className="w-4 h-4 text-emerald-700" />
                                <span>3. Auto-Renew vs 50 Free Solves</span>
                            </label>
                        </div>

                        {/* TAB 1: Toolbar Popup Blur */}
                        <div className="hidden peer-checked/popup:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #1 · Chrome Toolbar Extension Popup Focus Loss
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    Clicking StudyFox&apos;s Toolbar Icon Fires <code className="text-lg bg-rose-50 px-2 py-0.5 rounded border border-rose-200 text-rose-900">window.blur</code> on Your Quiz Tab
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    StudyFox&apos;s official documentation instructs students to <em>&quot;click the StudyFox icon&quot;</em> in the Chrome toolbar so the extension can screenshot the question and display the step-by-step answer inside a popup window. In every Chromium browser, opening a toolbar extension popup transfers OS window focus away from the active webpage—immediately firing <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">window.onblur</code> in Canvas SpeedGrader.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">StudyFox Toolbar Popup</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            Requires moving your cursor to the browser toolbar and opening an external popup window, logging a Canvas departure.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost In-Page HUD</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            Double-click any question right on the page for a 150ms auto-fill or translucent badge inside a closed Shadow DOM with Focus Shield active.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // Chromium Extension Popup Focus Behavior
                                    </div>
                                    <div className="space-y-1.5 text-rose-300">
                                        <div>1. User clicks StudyFox icon in Chrome toolbar</div>
                                        <div>2. Popup window acquires focus -&gt; Tab blurs</div>
                                        <div>3. Canvas logs: &quot;Stopped viewing quiz page&quot;</div>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/10 text-emerald-300">
                                        <div className="font-bold">✓ ExamGhost Inline Solve:</div>
                                        <div className="text-white/80">0 toolbar clicks · 0 popup windows · 0 blur logs</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: 3.4s Multi-Model Latency vs 0.3s Edge Vision */}
                        <div className="hidden peer-checked/latency:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #2 · Multi-Model Consensus Latency vs Edge Speed
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    Waiting ~3.4 Seconds for 3 LLMs vs. 0.3-Second Edge Inference
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    StudyFox highlights a <em>&quot;Multi-model&quot;</em> feature that queries GPT, Claude Sonnet, and Gemini simultaneously to compare three answers against each other. While great for untimed late-night homework review, waiting 3.4 to 5 seconds for three separate cloud LLMs to generate and reconcile inside a popup is too slow when you have 2 minutes left on a timed Canvas exam.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200">
                                        <div className="text-xs font-bold text-amber-950 mb-1">StudyFox 3-Model Check</div>
                                        <p className="text-xs text-amber-900/90 leading-relaxed">
                                            ~3.4s average wait while GPT, Claude Sonnet, and Gemini generate full comparison breakdowns.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost 0.3s Edge Routing</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            Pairs low-latency Mathpix optical token extraction with priority edge routing to deliver verified answers in <strong>0.3 seconds</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // Per-Question Solve Latency Benchmark
                                    </div>
                                    <div className="space-y-1.5 text-amber-300">
                                        <div>StudyFox Multi-Model (GPT + Claude + Gemini):</div>
                                        <div className="text-white/80">• Toolbar screenshot + 3-model consensus: ~3.4s</div>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/10 text-emerald-300">
                                        <div>ExamGhost v4.2 Edge Engine:</div>
                                        <div className="text-emerald-400 font-bold">• Inline DOM / Mathpix OCR solve: 0.3s</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: Auto-Renewing Weekly Trials vs 50 Free Solves */}
                        <div className="hidden peer-checked/trial:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #3 · Trial &amp; Refund Transparency
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    Auto-Renewing Weekly Trials (7-Day Refund) vs. 50 Free Solves (No Card Needed)
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    StudyFox offers weekly, monthly, semester, and annual subscriptions where plans begin with a short trial that automatically converts into a recurring charge, backed by a 7-day refund window. ExamGhost gives every student <strong>50 Free Question Solves</strong> upfront with zero credit card required—and backs every paid pass ($19/mo, $99/yr, or $199 Lifetime) with a full 14-day money-back guarantee.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">StudyFox Billing</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            Trial-to-auto-renew weekly/monthly/semester subscriptions with a 7-day refund policy.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost No-Card Trial</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            <strong>50 Free Solves</strong> ($0 trial, no card required) + 14-day 100% money-back guarantee on all passes.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // Trial &amp; Subscription Comparison
                                    </div>
                                    <div className="space-y-1.5 text-rose-300">
                                        <div>StudyFox (studyfox.pro/pricing):</div>
                                        <div className="text-white/80">• Auto-renewing weekly / monthly / semester plans</div>
                                        <div className="text-white/80">• 7-day refund window</div>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/10 text-emerald-300">
                                        <div>ExamGhost v4.2:</div>
                                        <div className="text-emerald-400 font-bold">• 50 Free Solves (No Credit Card Required)</div>
                                        <div className="text-white/80">• $19/mo · $99/yr ($8.25/mo) · $199 Lifetime</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SPEEDGRADER TELEMETRY COMPARISON */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-[32px] bg-[#111111] text-white p-6 sm:p-10 border border-white/10 shadow-lift">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-white/10">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-400/20 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                                    <ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" />
                                    <span>SpeedGrader Focus Telemetry</span>
                                </div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                                    Question 4 of 10 (Data Structures LIFO Quiz): Toolbar Popup vs Inline Solve
                                </h2>
                            </div>
                            <span className="text-xs font-mono text-white/80">canvas.university.edu/quiz</span>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-black/60 border border-rose-500/40 p-5">
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-rose-500/20">
                                    <span className="font-mono text-xs font-bold text-rose-300 uppercase">
                                        StudyFox Toolbar Icon &amp; Crop Workflow
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-rose-500/20 text-rose-300">
                                        POPUP FOCUS LOSS
                                    </span>
                                </div>
                                <div className="space-y-2.5 font-mono text-xs text-white/90">
                                    <div className="p-2.5 rounded bg-white/5 border-l-2 border-emerald-500 flex items-center justify-between">
                                        <span>02:34 Rem — Viewed Question 4 (LIFO Ordering)</span>
                                        <span className="text-white/75">Normal</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-rose-500/15 border-l-2 border-rose-500 flex items-center justify-between">
                                        <span>02:32 Rem — Clicked StudyFox toolbar icon (Popup opened)</span>
                                        <span className="text-rose-300 font-bold">WINDOW.BLUR</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-rose-500/15 border-l-2 border-rose-500 flex items-center justify-between">
                                        <span>02:28 Rem — Stopped viewing Canvas quiz page (4.1s)</span>
                                        <span className="text-rose-300 font-bold">FLAG LOGGED</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-white/5 border-l-2 border-white/30 flex items-center justify-between">
                                        <span>02:27 Rem — Resumed viewing quiz &amp; selected B (Stack)</span>
                                        <span className="text-white/75">Logged</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-black/60 border border-emerald-500/40 p-5">
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-500/20">
                                    <span className="font-mono text-xs font-bold text-emerald-300 uppercase">
                                        ExamGhost Double-Click Inline Workflow
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-300">
                                        0 FLAGS · UNINTERRUPTED
                                    </span>
                                </div>
                                <div className="space-y-2.5 font-mono text-xs text-white/90">
                                    <div className="p-2.5 rounded bg-white/5 border-l-2 border-emerald-500 flex items-center justify-between">
                                        <span>02:34 Rem — Viewed Question 4 (LIFO Ordering)</span>
                                        <span className="text-white/75">Normal</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-emerald-500/15 border-l-2 border-emerald-400 flex items-center justify-between">
                                        <span>02:33 Rem — [Double-Click Inline Solve · 0.3s Edge AI]</span>
                                        <span className="text-emerald-300 font-bold">0 Blur Events</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-emerald-500/15 border-l-2 border-emerald-400 flex items-center justify-between">
                                        <span>02:33 Rem — Auto-selected Option B (Stack)</span>
                                        <span className="text-emerald-300 font-bold">Continuous Focus</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-white/5 border-l-2 border-emerald-500 flex items-center justify-between">
                                        <span>02:31 Rem — Advanced to Question 5</span>
                                        <span className="text-white/75">Clean Log</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* 10-POINT COMPARISON MATRIX + COLLAPSIBLE TECHNICAL DRAWER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="bg-[#f7f4ee] px-6 py-4 border-b border-black/10 flex flex-wrap items-center justify-between gap-2">
                            <h2 className="font-display font-bold text-base sm:text-lg text-ink">
                                StudyFox AI vs ExamGhost: 10-Point Feature Matrix
                            </h2>
                            <span className="text-xs text-ink-muted font-mono">Verified April 2026</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                                <thead>
                                    <tr className="bg-[#faf8f4] border-b border-black/10">
                                        <th className="py-4 px-5 font-bold text-ink">Feature / Capability</th>
                                        <th className="py-4 px-5 font-bold text-ink-muted">Why Students Care</th>
                                        <th className="py-4 px-5 font-extrabold text-emerald-950 bg-[#cdeecb]/35">ExamGhost v4.2</th>
                                        <th className="py-4 px-5 font-bold text-ink">StudyFox AI (studyfox.pro)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">In-Page Solve Without Toolbar Popup</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Prevents popup window.blur telemetry</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ Double-Click Inline Solve</td>
                                        <td className="py-3.5 px-5 text-rose-800 font-semibold">✗ Opens Toolbar Extension Popup</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Focus Shield (Blur &amp; Visibility Masking)</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Keeps Canvas SpeedGrader logs clean</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ Active Event Interception</td>
                                        <td className="py-3.5 px-5 text-rose-800 font-semibold">✗ No Blur Event Suppression</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Closed Shadow DOM Isolation</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Invisible to host page querySelector scans</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ 100% Closed Shadow Root</td>
                                        <td className="py-3.5 px-5 text-ink-secondary">Popup / Crop Overlay</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">3 Stealth Display Modes + Opacity Dial</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Safe in computer labs &amp; screen shares</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ Invisible, Stealth (10-100%), Explain</td>
                                        <td className="py-3.5 px-5 text-rose-800 font-semibold">✗ Standard Extension Popup</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Emergency Panic Kill Switch (<code className="font-mono">⌘+Shift+U</code>)</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Instant &lt;8ms UI and memory purge</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ Built-In Hardware Shortcut</td>
                                        <td className="py-3.5 px-5 text-rose-800 font-semibold">✗ None</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Snap-It Vision OCR (<code className="font-mono">⌘+Shift+S</code>)</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Solves graphs, integrals &amp; chemistry</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ 0.3s In-Memory Mathpix OCR</td>
                                        <td className="py-3.5 px-5 text-ink-secondary">✓ Crop &amp; Solve (~3.4s Multi-Model)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">FSRS Spaced-Repetition Flashcards &amp; Anki Import</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Long-term memory retention before finals</td>
                                        <td className="py-3.5 px-5 text-ink-muted">Not a flashcard app</td>
                                        <td className="py-3.5 px-5 text-emerald-800 font-bold">✓ Full FSRS + Anki/Quizlet Import</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">PDF-to-Mind-Map &amp; AI Note Taker</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Visualizes 50-page readings as node trees</td>
                                        <td className="py-3.5 px-5 text-ink-muted">Focused on live exam solving</td>
                                        <td className="py-3.5 px-5 text-emerald-800 font-bold">✓ Interactive Mind Map Builder</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Free Trial &amp; Refund Guarantee</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Risk-free testing on your own courses</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ 50 Free Solves (No Card) + 14-Day</td>
                                        <td className="py-3.5 px-5 text-ink-secondary">Auto-Renew Trial + 7-Day Refund</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Pricing Options</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">No unexpected weekly billing</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">$19/mo · $99/yr ($8.25/mo) · $199 Life</td>
                                        <td className="py-3.5 px-5 text-ink-secondary">Weekly / Monthly / Semester Auto-Sub</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Audit Drawer */}
                        <details className="group border-t border-black/10 bg-[#faf8f4]">
                            <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none text-xs font-mono font-bold text-ink-secondary hover:text-ink">
                                <h3 className="inline-flex items-center gap-2 m-0 inline">
                                    <Code2 className="w-4 h-4 text-rose-800" />
                                    Technical Domain &amp; Extension Workflow Audit Log (studyfox.pro)
                                </h3>
                                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="px-6 pb-6 pt-2 text-xs font-mono text-ink-secondary space-y-2 border-t border-black/5 bg-white">
                                <div><strong className="text-ink">Audited Platform:</strong> StudyFox AI (<code className="bg-slate-100 px-1.5 py-0.5 rounded">https://studyfox.pro</code> · ~1,000 Chrome Web Store users across 27 universities)</div>
                                <div><strong className="text-ink">Extension Interaction Pattern:</strong> Toolbar icon click or crop capture opens extension popup window; multi-model verification queries GPT, Claude Sonnet, and Gemini (~3.4s average response).</div>
                                <div><strong className="text-ink">LMS Telemetry Impact:</strong> Clicking the browser toolbar icon to open an extension popup transfers active focus away from the host tab, firing <code className="bg-rose-50 text-rose-900 px-1.5 py-0.5 rounded">window.blur</code> in Canvas SpeedGrader.</div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* HONEST BUYER'S GUIDE */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-3xl bg-white border border-black/10 p-7 shadow-sm">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ffd5cc] text-rose-950 text-xs font-bold mb-4">
                                <Network className="w-3.5 h-3.5" aria-hidden="true" />
                                <span>When StudyFox AI Shines</span>
                            </div>
                            <h3 className="font-display font-bold text-xl text-ink mb-3">
                                Use StudyFox the week before your exam to map PDFs &amp; drill Anki cards
                            </h3>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-rose-800 shrink-0 mt-0.5" aria-hidden="true" />
                                    <span>You have a 50-page Organic Chemistry or Law reading PDF and want an interactive visual Mind Map to see how concepts connect before reading.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-rose-800 shrink-0 mt-0.5" aria-hidden="true" />
                                    <span>You rely on FSRS spaced repetition and want to import existing Anki or Quizlet decks or use StudyFox&apos;s free <em>Deep Focus</em> Pomodoro site blocker while studying.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-[#091526] text-white border-2 border-emerald-400 p-7 shadow-lift">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 text-xs font-bold mb-4">
                                <EyeOff className="w-3.5 h-3.5" aria-hidden="true" />
                                <span>When ExamGhost Is Unbeatable</span>
                            </div>
                            <h3 className="font-display font-bold text-xl text-white mb-3">
                                Use ExamGhost on exam day when you cannot afford a single SpeedGrader flag
                            </h3>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-white/90 leading-relaxed">
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                                    <span>You are taking a timed quiz on Canvas, Blackboard, Moodle, or D2L where clicking a browser toolbar popup would log a <code className="font-mono">window.blur</code> departure.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                                    <span>You want <strong>Double-Click inline solving</strong> in 0.3 seconds with 3 Stealth Display Modes and an instant <code className="font-mono">⌘+Shift+U</code> panic switch.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                                    <span>You want <strong>50 Free Solves</strong> upfront with no credit card required and a 14-day refund guarantee.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* OFFICIAL STUDENT DISCORD BANNER */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-[#3b47d6] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lift">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                                <FaDiscord className="w-7 h-7 text-white" aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-lg sm:text-xl text-white">
                                    Join the ExamGhost Student Community on Discord
                                </h2>
                                <p className="text-xs sm:text-sm text-white font-medium mt-0.5">
                                    Get your 50 free solves, download the latest stealth build, and access 24/7 student support.
                                </p>
                            </div>
                        </div>
                        <a
                            href="https://discord.gg/aCcsyKYJq4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3.5 rounded-full bg-white text-[#232b88] hover:bg-white/95 text-sm font-bold shadow-sm whitespace-nowrap inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
                        >
                            <span>Join Discord &amp; Get Extension</span>
                            <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        </a>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 mb-12">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-3">
                            Frequently Asked Questions: StudyFox vs ExamGhost
                        </h2>
                        <p className="text-xs sm:text-sm text-ink-muted">
                            Technical facts on StudyFox&apos;s toolbar popup solver, FSRS flashcards, and ExamGhost&apos;s closed Shadow DOM.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {(jsonLd["@graph"][2] as any).mainEntity.map((faq: any, index: number) => (
                            <details key={index} className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden" open={index === 0}>
                                <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.name}</h3>
                                    <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180 shrink-0 ml-2" aria-hidden="true" />
                                </summary>
                                <p className="mt-3 text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* BESPOKE INLINE CONVERSION STRIP + RELATED COMPARISONS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#fff5f2] via-[#ffd5cc]/55 to-[#fef3c7]/50 border border-black/10 p-8 sm:p-12 shadow-card mb-12">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-950/10 text-rose-950 text-xs font-bold mb-3">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    Zero Toolbar Popups · 50 Free Solves
                                </div>
                                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mb-2">
                                    Solve inline in 0.3 seconds without losing tab focus.
                                </h2>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    Try ExamGhost right now with <strong>50 Free Solves</strong> ($0 trial, no credit card required), backed by a 14-day refund guarantee on $19/mo, $99/yr ($8.25/mo), and $199 Lifetime passes.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <a
                                    href="/#pricing"
                                    className="btn-dark px-7 py-4 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#ffd5cc]" aria-hidden="true" />
                                    <span>Start 50 Free Solves</span>
                                </a>
                                <Link prefetch={false}
                                    href="/canvas-quiz-solver-free-demo"
                                    className="px-5 py-4 rounded-full text-sm font-semibold bg-white hover:bg-slate-50 text-ink border border-black/10 shadow-sm inline-flex items-center gap-1.5"
                                >
                                    <span>Try Live Demo</span>
                                    <ArrowRight className="w-4 h-4" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-lg font-bold font-display text-ink mb-4">
                        Compare More Study &amp; Quiz Extensions
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <Link prefetch={false} href="/knowt-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 text-xs font-bold text-ink flex items-center justify-between transition-all shadow-sm">
                            <span>ExamGhost vs Knowt</span>
                            <ArrowRight className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                        </Link>
                        <Link prefetch={false} href="/coursology-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 text-xs font-bold text-ink flex items-center justify-between transition-all shadow-sm">
                            <span>ExamGhost vs Coursology</span>
                            <ArrowRight className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                        </Link>
                        <Link prefetch={false} href="/quizmate-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 text-xs font-bold text-ink flex items-center justify-between transition-all shadow-sm">
                            <span>ExamGhost vs QuizMate</span>
                            <ArrowRight className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                        </Link>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="p-4 rounded-2xl bg-ink text-white hover:bg-black text-xs font-bold flex items-center justify-between transition-all shadow-sm">
                            <span>All 57 Teardowns</span>
                            <ArrowRight className="w-3.5 h-3.5 text-[#bfe3f6]" aria-hidden="true" />
                        </Link>
                    </div>
                </section>

            </main>
            <Footer />
        </div>
    );
}
