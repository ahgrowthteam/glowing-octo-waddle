import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    Zap,
    Star,
    ChevronDown,
    ArrowRight,
    Sparkles,
    AlertTriangle,
    CheckCircle2,
    Code,
    Activity,
    ExternalLink,
    Code2,
    FileWarning,
    Layers,
    CreditCard
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "Answerly AI vs ExamGhost (2026) — Shadow DOM vs 5 Scripts",
    },
    description: "2026 technical audit of Answerly AI (v1.3.52) vs ExamGhost. Replace 5 exposed content scripts with 0.3s closed Shadow DOM stealth and 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/answerly-vs-examghost",
    },
    openGraph: {
        title: "Answerly AI vs ExamGhost (2026) — Shadow DOM vs 5 Scripts",
        description: "2026 technical audit of Answerly AI (v1.3.52) vs ExamGhost. Replace 5 exposed content scripts with 0.3s closed Shadow DOM stealth and 50 Free Solves.",
        url: "https://examghost.com/answerly-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Answerly AI vs ExamGhost (2026) — Shadow DOM vs 5 Scripts",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Answerly AI vs ExamGhost (2026) — Shadow DOM vs 5 Scripts",
        description: "2026 technical audit of Answerly AI (v1.3.52) vs ExamGhost. Replace 5 exposed content scripts with 0.3s closed Shadow DOM stealth and 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function AnswerlyComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-16",
                "dateModified": "2026-03-18",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/answerly-vs-examghost#webpage",
                "url": "https://examghost.com/answerly-vs-examghost",
                "name": "Answerly AI vs ExamGhost (2026 Review) | 5 Unisolated Content Scripts vs Closed Shadow DOM",
                "description": "Technical forensics comparing Answerly AI (getanswerlyai.com, Chrome ID gmekadimanglmacabjkmaigckocobnnc v1.3.52) and ExamGhost regarding content script injection, web_accessible_resources fingerprinting, and pricing.",
                "breadcrumb": { "@id": "https://examghost.com/answerly-vs-examghost#breadcrumb" },
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
                        "name": "Answerly AI",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension",
                        "offers": { "@type": "Offer", "price": "12.99", "priceCurrency": "USD" }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/answerly-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "Answerly AI vs ExamGhost", "item": "https://examghost.com/answerly-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/answerly-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What did the 2026 manifest audit of Answerly AI (v1.3.52) reveal?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our 2026 inspection of Answerly AI (getanswerlyai.com, Chrome Web Store ID gmekadimanglmacabjkmaigckocobnnc, v1.3.52, 576KiB, 1,000 users, 5.0 stars across 26 ratings) revealed that it injects 5 separate content scripts directly into *://*.instructure.com/* and *://*/courses/* with all_frames: true: content/newQuizSolver.js, content/quizMemory.js, content/quizSolver.js, content/screenshotTool.js, and content/scoreReporter.js, alongside content/styles.css. Even worse, it exposes assets/* and content/* across <all_urls> in web_accessible_resources without use_dynamic_url: true."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can Answerly AI be fingerprinted or detected by Canvas LMS?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Because Answerly AI declares resources: [\"assets/*\", \"content/*\"] under matches: [\"<all_urls>\"] in web_accessible_resources, any page script on Instructure Canvas can probe chrome-extension://gmekadimanglmacabjkmaigckocobnnc/content/quizSolver.js or content/styles.css to confirm the extension is installed. Furthermore, its hover buttons and auto-fill actions mutate the live Canvas DOM directly."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does pricing compare between Answerly AI and ExamGhost in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Answerly AI (getanswerlyai.com) charges a recurring $12.99/month subscription via Stripe ($155.88/year or $623.52 across a 4-year degree). ExamGhost gives every student 50 Free Solves ($0 trial, no credit card required), flexible $19/mo Monthly and $99/yr Academic Year ($8.25/mo) plans, or a one-time $199 Lifetime Degree Pass."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is content/scoreReporter.js in Answerly AI's manifest?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In Answerly AI v1.3.52, content/scoreReporter.js and content/quizMemory.js are automatically injected into every Canvas course page at document_idle to scrape and report quiz scores and memorize question states. ExamGhost never injects score-reporting telemetry scripts into your LMS session."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does ExamGhost support Blackboard, Moodle, and D2L Brightspace in addition to Canvas?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. While Answerly AI's manifest matches are hardcoded primarily to *.instructure.com and /courses/* paths for Canvas, ExamGhost supports Canvas Classic Quizzes, Canvas New Quizzes, Blackboard Learn, Moodle, D2L Brightspace, and McGraw-Hill Connect."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the emergency panic kill switch in ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost features an instant keyboard shortcut (⌘+Shift+U / Ctrl+Shift+U) that flushes the closed Shadow DOM overlay from browser memory in under 1 millisecond, leaving zero injected stylesheets or hover buttons behind."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-teal-200/60 selection:text-ink font-sans">
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
                        <span className="text-ink font-semibold">Answerly AI vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: Answerly AI v1.3.52 5-Script Stack vs ExamGhost Closed Shadow DOM */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#e6fffa] via-[#bbf2e8]/65 to-[#f0fdf4] p-6 sm:p-10 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/10 border border-teal-950/20 text-xs font-bold text-teal-950">
                                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                                2026 Package Teardown: Answerly AI v1.3.52 (getanswerlyai.com)
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/90 border border-black/10 text-[11px] font-bold text-ink uppercase tracking-wider">
                                Updated April 2026 · 576KiB Bundle
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    Why inject <span className="underline decoration-rose-500/60 decoration-wavy underline-offset-4">5 detectable scripts</span> into Canvas for $12.99/mo?
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-7 max-w-2xl font-normal">
                                    Answerly AI (<code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">getanswerlyai.com</code>, v1.3.52) markets &quot;Stealth mode&quot; hover buttons, yet its Chrome extension injects <strong>five separate JavaScript files</strong>—including <code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">scoreReporter.js</code> and <code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">quizSolver.js</code>—plus <code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">content/styles.css</code> directly into your Canvas DOM while exposing <code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">content/*</code> to every website. ExamGhost runs inside a <strong>closed Shadow DOM v1 HUD</strong> with zero exposed solver files, starting with <strong>50 Free Solves</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <a
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#bbf2e8]" aria-hidden="true" />
                                        <span>Claim 50 Free Solves ($0 Trial)</span>
                                    </a>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-5 py-4 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-ink border border-black/10 shadow-sm inline-flex items-center gap-1.5 transition-transform hover:-translate-y-0.5"
                                    >
                                        <span>Try Live Canvas Sandbox</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <a
                                        href="#answerly-audit"
                                        className="px-4 py-4 rounded-full text-xs sm:text-sm font-semibold text-teal-950 hover:text-ink inline-flex items-center gap-1"
                                    >
                                        <span>Inspect 5-Script Manifest</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </a>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-secondary font-medium">
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        No credit card for 50 solves
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        0 Exposed web_accessible_resources
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        Works on Canvas, Blackboard, Moodle &amp; D2L
                                    </span>
                                </div>
                            </div>

                            {/* Right Side Bespoke Visual: Answerly v1.3.52 5-Script Stack Inspector */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#0f172a] text-white p-5 sm:p-6 border border-white/15 shadow-lift">
                                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                                        <div className="flex items-center gap-2">
                                            <FileWarning className="w-4 h-4 text-rose-400" />
                                            <span className="font-mono text-xs font-bold text-slate-200">Answerly v1.3.52 DOM Stack</span>
                                        </div>
                                        <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono text-[10px] font-bold">
                                            all_frames: true
                                        </span>
                                    </div>

                                    {/* 5 Injected Scripts List */}
                                    <div className="p-3.5 rounded-2xl bg-rose-950/45 border border-rose-500/30 mb-3.5">
                                        <div className="text-[11px] font-bold text-rose-200 mb-2 flex items-center justify-between">
                                            <span>Injected into *.instructure.com/*</span>
                                            <span className="font-mono text-[10px] text-rose-300">5 JS + 1 CSS</span>
                                        </div>
                                        <div className="space-y-1 font-mono text-[11px]">
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1 rounded text-rose-200">
                                                <span>content/quizSolver.js</span>
                                                <span className="text-rose-400 text-[10px]">PUBLIC</span>
                                            </div>
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1 rounded text-rose-200">
                                                <span>content/newQuizSolver.js</span>
                                                <span className="text-rose-400 text-[10px]">PUBLIC</span>
                                            </div>
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1 rounded text-amber-200">
                                                <span>content/scoreReporter.js</span>
                                                <span className="text-amber-400 text-[10px]">SCRAPER</span>
                                            </div>
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1 rounded text-rose-200">
                                                <span>content/quizMemory.js + screenshotTool.js</span>
                                                <span className="text-rose-400 text-[10px]">PUBLIC</span>
                                            </div>
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1 rounded text-rose-200">
                                                <span>content/styles.css (Hover UI)</span>
                                                <span className="text-rose-400 text-[10px]">HOST CSS</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ExamGhost Isolated Alternative */}
                                    <div className="p-3.5 rounded-2xl bg-emerald-950/50 border border-emerald-500/30">
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="text-xs font-bold text-emerald-200">ExamGhost v4.2 Stealth Engine</span>
                                            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-900/70 text-emerald-200">
                                                0 Exposed Files
                                            </span>
                                        </div>
                                        <p className="text-[11px] text-emerald-100/80 leading-relaxed">
                                            Encapsulated in a <code className="text-emerald-300">#shadow-root (closed)</code> container with Focus Shield and zero score-reporting scripts.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* QUICK METRIC RIBBON */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm text-center">
                            <div className="text-xs text-ink-muted mb-1 font-mono uppercase tracking-wider">Injected Canvas Scripts</div>
                            <div className="font-display text-2xl font-black text-emerald-800">Closed Shadow</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Answerly v1.3.52: 5 Scripts + CSS</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm text-center">
                            <div className="text-xs text-ink-muted mb-1 font-mono uppercase tracking-wider">Web Accessible Leak</div>
                            <div className="font-display text-2xl font-black text-emerald-800">0 Exposed Files</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Answerly: Exposes content/* to all_urls</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm text-center">
                            <div className="text-xs text-ink-muted mb-1 font-mono uppercase tracking-wider">Pricing &amp; Free Trial</div>
                            <div className="font-display text-2xl font-black text-emerald-800">50 Free Solves</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Answerly AI: $12.99/mo ($155.88/yr)</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm text-center">
                            <div className="text-xs text-ink-muted mb-1 font-mono uppercase tracking-wider">LMS Coverage</div>
                            <div className="font-display text-2xl font-black text-emerald-800">All Major LMS</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Answerly AI: Canvas Paths Only</div>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE 3-TAB AUDIT: Inside Answerly AI v1.3.52 */}
                <section id="answerly-audit" className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 scroll-mt-24">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="max-w-2xl mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100 text-teal-900 text-xs font-bold mb-3">
                                <Code className="w-3.5 h-3.5" />
                                Interactive Manifest v1.3.52 Inspection
                            </div>
                            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mb-2">
                                Inside Answerly AI&apos;s 576KiB Chrome Extension Bundle
                            </h2>
                            <p className="text-sm text-ink-secondary">
                                Select any tab below to inspect the exact manifest rules, telemetry scripts, and pricing trade-offs we uncovered in Answerly AI v1.3.52 (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">getanswerlyai.com</code>).
                            </p>
                        </div>

                        {/* Pure CSS Radio Tabs */}
                        <input type="radio" name="answerly_tab" id="tab-scripts" className="sr-only peer/scripts" defaultChecked />
                        <input type="radio" name="answerly_tab" id="tab-war" className="sr-only peer/war" />
                        <input type="radio" name="answerly_tab" id="tab-pricing" className="sr-only peer/pricing" />

                        <div className="grid sm:grid-cols-3 gap-2 p-1.5 rounded-2xl bg-[#f4f1ea] border border-black/10 mb-8">
                            <label
                                htmlFor="tab-scripts"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/scripts:bg-white peer-checked/scripts:text-ink peer-checked/scripts:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Layers className="w-4 h-4 text-rose-600" />
                                <span>1. 5 Scripts &amp; scoreReporter.js</span>
                            </label>
                            <label
                                htmlFor="tab-war"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/war:bg-white peer-checked/war:text-ink peer-checked/war:shadow-sm flex items-center justify-center gap-2"
                            >
                                <FileWarning className="w-4 h-4 text-amber-600" />
                                <span>2. Exposed content/* Leak</span>
                            </label>
                            <label
                                htmlFor="tab-pricing"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/pricing:bg-white peer-checked/pricing:text-ink peer-checked/pricing:shadow-sm flex items-center justify-center gap-2"
                            >
                                <CreditCard className="w-4 h-4 text-teal-700" />
                                <span>3. $12.99/mo Canvas Lock-In</span>
                            </label>
                        </div>

                        {/* TAB 1: 5 Scripts & scoreReporter.js */}
                        <div className="hidden peer-checked/scripts:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #1 · Multi-Script &amp; Score Scraper Injection
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    Why Does a Quiz Solver Inject <code className="text-lg bg-rose-50 px-2 py-0.5 rounded border border-rose-200 text-rose-900">scoreReporter.js</code> Into Your Canvas Course?
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    Every time you open a page matching <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">*://*.instructure.com/*</code> or <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">*://*/courses/*</code>, Answerly AI v1.3.52 injects five separate scripts into every frame (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">all_frames: true</code>): <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">newQuizSolver.js</code>, <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">quizMemory.js</code>, <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">quizSolver.js</code>, <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">screenshotTool.js</code>, and <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">scoreReporter.js</code>—plus <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">content/styles.css</code>. Its hover buttons and auto-fill actions mutate the live Canvas DOM directly.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">Answerly AI v1.3.52</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            Injects 5 JS files + global CSS into all frames, scrapes quiz scores via <code className="text-[11px]">scoreReporter.js</code>, and mutates radio inputs with auto-fill.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost v4.2</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            Zero score-reporting telemetry scripts, zero host stylesheet injection, and zero synthetic auto-fill mutations.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // manifest.json -&gt; content_scripts[0]
                                    </div>
                                    <div className="space-y-1 text-rose-300">
                                        <div>&quot;matches&quot;: [&quot;*://*.instructure.com/*&quot;, &quot;*://*/courses/*&quot;],</div>
                                        <div>&quot;all_frames&quot;: true,</div>
                                        <div>&quot;js&quot;: [</div>
                                        <div className="pl-3">&quot;content/newQuizSolver.js&quot;,</div>
                                        <div className="pl-3">&quot;content/quizMemory.js&quot;,</div>
                                        <div className="pl-3">&quot;content/quizSolver.js&quot;,</div>
                                        <div className="pl-3">&quot;content/screenshotTool.js&quot;,</div>
                                        <div className="pl-3 text-amber-300 font-bold">&quot;content/scoreReporter.js&quot;</div>
                                        <div>],</div>
                                        <div>&quot;css&quot;: [&quot;content/styles.css&quot;]</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: Exposed content/* in web_accessible_resources */}
                        <div className="hidden peer-checked/war:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-amber-100 text-amber-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #2 · Unprotected Web Accessible Wildcards
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    Exposing <code className="text-lg bg-amber-50 px-2 py-0.5 rounded border border-amber-200 text-amber-900">content/*</code> to <code className="text-lg bg-amber-50 px-2 py-0.5 rounded border border-amber-200 text-amber-900">&lt;all_urls&gt;</code> Invites Instant Detection
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    In Chrome Manifest V3, any file listed in <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">web_accessible_resources</code> without <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">use_dynamic_url: true</code> can be fetched by host webpages. Answerly AI v1.3.52 exposes both <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">assets/*</code> and <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">content/*</code> across <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">&lt;all_urls&gt;</code>—meaning any Canvas page script can probe <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">content/quizSolver.js</code> or <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">content/styles.css</code> to confirm you have Answerly AI installed.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">Answerly AI Exposure</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            Every solver script inside <code className="text-[11px]">content/*</code> is publicly readable by any <code className="text-[11px]">&lt;all_urls&gt;</code> webpage script.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost Zero-Leak Policy</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            Zero publicly probeable solver scripts or stylesheets in <code className="text-[11px]">web_accessible_resources</code>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // manifest.json -&gt; web_accessible_resources
                                    </div>
                                    <div className="space-y-1.5 text-rose-300">
                                        <div>&quot;web_accessible_resources&quot;: [&#123;</div>
                                        <div className="pl-3 font-bold">&quot;resources&quot;: [&quot;assets/*&quot;, &quot;content/*&quot;],</div>
                                        <div className="pl-3">&quot;matches&quot;: [&quot;&lt;all_urls&gt;&quot;]</div>
                                        <div>&#125;]</div>
                                        <div className="text-amber-300 pt-2">// Missing: &quot;use_dynamic_url&quot;: true</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: Domain Confusion & $12.99/mo Canvas Lock-In */}
                        <div className="hidden peer-checked/pricing:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-teal-100 text-teal-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #3 · Domain Split &amp; LMS Lock-In
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    <code className="text-lg bg-teal-50 px-2 py-0.5 rounded border border-teal-200 text-teal-900">answerly.ai</code> Times Out, and <code className="text-lg bg-teal-50 px-2 py-0.5 rounded border border-teal-200 text-teal-900">getanswerlyai.com</code> Only Runs on Canvas
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    First, students searching for <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">answerly.ai</code> hit a dead 15-second connection timeout—the extension actually runs on <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">getanswerlyai.com</code>. Second, at <strong>$12.99/month</strong> ($155.88/year or $623.52 over four years), its manifest is hardcoded solely to <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">*.instructure.com</code> and <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">/courses/*</code> paths, leaving you stranded on Blackboard, Moodle, D2L Brightspace, and McGraw-Hill Connect.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">Answerly AI ($12.99/mo)</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            $155.88/year recurring Stripe billing; works only on Canvas URL patterns.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost Flexible Plans</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            <strong>50 Free Solves</strong> ($0 trial, no card), then $19/mo Monthly, $99/yr ($8.25/mo), or $199 Lifetime across all LMS platforms.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // 4-Year College Cost &amp; LMS Support
                                    </div>
                                    <div className="space-y-2 text-rose-300">
                                        <div>Answerly AI (getanswerlyai.com):</div>
                                        <div className="pl-3 text-white/80">• $12.99/mo × 48 mos = $623.52</div>
                                        <div className="pl-3 text-rose-400">• Blackboard / D2L / Moodle: Unsupported</div>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/10 text-emerald-300">
                                        <div>ExamGhost v4.2:</div>
                                        <div className="pl-3 text-white/80">• Trial: 50 Free Solves ($0)</div>
                                        <div className="pl-3 text-emerald-400 font-bold">• $99/yr ($8.25/mo) or $199 Lifetime (All LMS)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SPEEDGRADER & DOM TELEMETRY COMPARISON */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 border border-teal-200 text-xs font-bold text-teal-900 mb-3">
                            <Activity className="w-3.5 h-3.5" />
                            SpeedGrader &amp; DOM Telemetry Inspection
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Canvas Telemetry: Answerly AI v1.3.52 vs ExamGhost
                        </h2>
                        <p className="text-sm sm:text-base text-ink-muted">
                            How Answerly AI&apos;s 5 injected scripts and auto-fill mutations compare against ExamGhost&apos;s isolated overlay.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Answerly AI SpeedGrader Log */}
                        <div className="rounded-3xl bg-[#1e1e24] text-white p-6 border border-rose-500/30 shadow-card">
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-rose-500" />
                                    <span className="font-mono text-xs text-rose-300">Canvas Telemetry · Answerly AI v1.3.52</span>
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-rose-950 text-rose-200 border border-rose-800">
                                    5 Scripts + Auto-Fill Footprint
                                </span>
                            </div>
                            <div className="space-y-3 font-mono text-xs">
                                <div className="text-white/75">11:15:00 AM - Started quiz attempt (document_idle)</div>
                                <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-800/40 text-rose-200 flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-rose-200">11:15:02 AM - 5 Content Scripts + CSS Injected</div>
                                        <div className="text-[11px] text-rose-200/90">quizSolver.js, newQuizSolver.js, quizMemory.js, screenshotTool.js, scoreReporter.js</div>
                                    </div>
                                </div>
                                <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-800/40 text-rose-200 flex items-start gap-2">
                                    <AlertTriangle className="w-4 h-4 text-rose-300 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-rose-200">11:15:18 AM - Host DOM Hover Button &amp; Auto-Fill Click</div>
                                        <div className="text-[11px] text-rose-200/90">content/styles.css &amp; synthetic radio click mutated live Canvas DOM</div>
                                    </div>
                                </div>
                                <div className="text-white/75">11:15:40 AM - Ctrl+Shift+X screenshotTool.js overlay mounted in host DOM</div>
                                <div className="p-3 rounded-xl bg-rose-950 border border-rose-700/50 text-rose-200 text-xs font-sans mt-4">
                                    <strong>Telemetry Verdict:</strong> Extension files inside <code>content/*</code> are publicly probeable via <code>web_accessible_resources</code>, and host DOM hover/auto-fill mutations are visible to MutationObservers.
                                </div>
                            </div>
                        </div>

                        {/* ExamGhost SpeedGrader Log */}
                        <div className="rounded-3xl bg-[#131b17] text-white p-6 border border-emerald-500/30 shadow-card">
                            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-emerald-400" />
                                    <span className="font-mono text-xs text-emerald-300">Canvas SpeedGrader · ExamGhost</span>
                                </div>
                                <span className="text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-950 text-emerald-200 border border-emerald-800">
                                    100% Active View
                                </span>
                            </div>
                            <div className="space-y-3 font-mono text-xs">
                                <div className="text-white/75">11:15:00 AM - Started quiz attempt</div>
                                <div className="p-2.5 rounded-lg bg-emerald-950/50 border border-emerald-800/40 text-emerald-200 flex items-start gap-2">
                                    <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-emerald-200">11:15:18 AM - Question 1 answered (0.3s edge solve)</div>
                                        <div className="text-[11px] text-emerald-200/90">Closed Shadow DOM v1: 0 host DOM mutations or exposed assets</div>
                                    </div>
                                </div>
                                <div className="text-white/75">11:15:38 AM - Question 2 answered (native student click)</div>
                                <div className="p-2.5 rounded-lg bg-emerald-950/50 border border-emerald-800/40 text-emerald-200 flex items-start gap-2">
                                    <ShieldCheck className="w-4 h-4 text-emerald-300 shrink-0 mt-0.5" />
                                    <div>
                                        <div className="font-bold text-emerald-200">11:16:00 AM - Question 3 answered (0.3s edge solve)</div>
                                        <div className="text-[11px] text-emerald-200/90">Focus Shield: continuous active document focus token</div>
                                    </div>
                                </div>
                                <div className="text-white/75">11:16:30 AM - Exam completed cleanly</div>
                                <div className="p-3 rounded-xl bg-emerald-950 border border-emerald-700/50 text-emerald-200 text-xs font-sans mt-4">
                                    <strong>SpeedGrader Verdict:</strong> Flawless session. Zero exposed <code>web_accessible_resources</code>, continuous active engagement, zero synthetic auto-fill traps.
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FULL 10-ROW COMPARISON MATRIX + COLLAPSIBLE TECHNICAL DRAWER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="bg-[#f7f4ee] px-6 py-4 border-b border-black/10 flex flex-wrap items-center justify-between gap-2">
                            <h2 className="font-display font-bold text-base sm:text-lg text-ink">
                                Answerly AI (v1.3.52) vs ExamGhost: 2026 Comparison Matrix
                            </h2>
                            <span className="text-xs text-ink-muted font-mono">Verified April 2026</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead className="bg-[#faf8f4] border-b border-black/10">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-ink">Stealth &amp; Solver Metric</th>
                                        <th className="py-4 px-6 text-center font-extrabold text-teal-950 bg-[#bbf2e8]/40">ExamGhost v4.2</th>
                                        <th className="py-4 px-6 text-center font-bold text-ink-muted">Answerly AI (v1.3.52)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">DOM Isolation Architecture</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Closed Shadow DOM v1 (#shadow-root)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">5 Scripts + content/styles.css Injected</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Web Accessible Resources Exposure</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Zero Exposed Solver Assets</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Exposes assets/* &amp; content/* to &lt;all_urls&gt;</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Score Telemetry Script Injection</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">None (100% Ephemeral Client Session)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Injects content/scoreReporter.js &amp; quizMemory.js</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Answer Delivery Mechanism</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Zero-Mutation Shadow HUD Badge</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Host DOM Hover Buttons &amp; Synthetic Auto-Fill</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Pricing &amp; Free Trial</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">50 Free Solves · $19/mo · $99/yr · $199 Life</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">$12.99/month ($155.88/yr via Stripe)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Multi-LMS Compatibility</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Canvas, Blackboard, Moodle, D2L, Connect</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">Canvas Only (*.instructure.com &amp; /courses/*)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Snap-It Diagram &amp; Schematic OCR</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">⌘+Shift+S Closed Shadow Snip</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">Ctrl+Shift+X Host DOM screenshotTool.js</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Primary Domain Status (2026)</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">examghost.com (Active 200 OK)</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">getanswerlyai.com (answerly.ai Times Out)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Ghost Mode Opacity Slider</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">0% to 100% Granular Slider</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Hover Button Toggle Only</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Emergency Panic Switch</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Instant Flush (⌘+Shift+U)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">None (Stylesheet Remains Injected)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Manifest Drawer */}
                        <details className="group border-t border-black/10 bg-[#faf8f4]">
                            <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none text-xs font-mono font-bold text-ink-secondary hover:text-ink">
                                <h3 className="inline-flex items-center gap-2 m-0 inline">
                                    <Code2 className="w-4 h-4 text-teal-800" />
                                    Technical Chrome Web Store Manifest &amp; Domain Audit (Answerly AI v1.3.52)
                                </h3>
                                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="px-6 pb-6 pt-2 text-xs font-mono text-ink-secondary space-y-2 border-t border-black/5 bg-white">
                                <div><strong className="text-ink">Chrome Web Store ID:</strong> <code className="bg-slate-100 px-1.5 py-0.5 rounded">gmekadimanglmacabjkmaigckocobnnc</code> (Version <code className="bg-slate-100 px-1.5 py-0.5 rounded">1.3.52</code>, Size <code className="bg-slate-100 px-1.5 py-0.5 rounded">576KiB</code>, 1,000 users, 5.0★ across 26 ratings)</div>
                                <div><strong className="text-ink">Domains Audited:</strong> <code className="bg-slate-100 px-1.5 py-0.5 rounded">getanswerlyai.com</code> (Active Stripe $12.99/mo storefront) vs <code className="bg-rose-50 text-rose-900 px-1.5 py-0.5 rounded">answerly.ai</code> (15s TCP connection timeout)</div>
                                <div><strong className="text-ink">Content Scripts (`all_frames: true`):</strong> <code className="bg-slate-100 px-1.5 py-0.5 rounded">content/newQuizSolver.js</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded">content/quizMemory.js</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded">content/quizSolver.js</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded">content/screenshotTool.js</code>, <code className="bg-slate-100 px-1.5 py-0.5 rounded">content/scoreReporter.js</code>, plus <code className="bg-slate-100 px-1.5 py-0.5 rounded">content/styles.css</code> on <code className="bg-slate-100 px-1.5 py-0.5 rounded">*://*.instructure.com/*</code> and <code className="bg-slate-100 px-1.5 py-0.5 rounded">*://*/courses/*</code></div>
                                <div><strong className="text-ink">Web Accessible Resources:</strong> <code className="bg-rose-50 text-rose-900 px-1.5 py-0.5 rounded">&quot;resources&quot;: [&quot;assets/*&quot;, &quot;content/*&quot;]</code> exposed to <code className="bg-rose-50 text-rose-900 px-1.5 py-0.5 rounded">&quot;&lt;all_urls&gt;&quot;</code> without <code className="bg-slate-100 px-1.5 py-0.5 rounded">use_dynamic_url: true</code></div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* VERIFIED STUDENT MIGRATION STORY */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-[#f5ede2] p-8 sm:p-10 border border-black/10 relative">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-snug mb-5">
                            &quot;I was paying $12.99/month for Answerly AI on getanswerlyai.com until my CS friend inspected its v1.3.52 manifest and showed me that it injects five separate scripts—including scoreReporter.js—and exposes content/* in web_accessible_resources to every webpage. Plus, half my classes use Blackboard where Answerly doesn&apos;t even run. I switched to ExamGhost with the 50 free solves trial and upgraded to the $99/yr pass. It works on both Canvas and Blackboard inside a closed Shadow DOM.&quot;
                        </blockquote>
                        <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-ink-secondary pt-4 border-t border-black/10">
                            <div>
                                <span className="font-bold text-ink">Zachary L.</span> — Senior, Ohio University
                            </div>
                            <span className="text-emerald-800 font-semibold bg-emerald-100 px-2.5 py-1 rounded-full">
                                Verified ExamGhost Switcher
                            </span>
                        </div>
                    </div>
                </section>

                {/* DISCORD COMMUNITY SECTION */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-[#3b47d6] text-white p-8 sm:p-10 shadow-lift flex flex-col md:flex-row items-center justify-between gap-6">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/25 text-white text-xs font-bold mb-3">
                                <FaDiscord className="w-4 h-4" />
                                Official Student Community
                            </div>
                            <h2 className="font-display text-2xl sm:text-3xl font-bold mb-2">
                                Join 1,400+ Students on Discord
                            </h2>
                            <p className="text-white/90 text-xs sm:text-sm max-w-lg">
                                Get instant exam updates, Canvas New Quizzes patch notes, stealth setup guides, and 24/7 direct support from our engineering team.
                            </p>
                        </div>
                        <a
                            href="https://discord.gg/aCcsyKYJq4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-light bg-white text-[#232b88] hover:bg-slate-100 px-6 py-3.5 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2 shrink-0 transition-transform hover:-translate-y-0.5"
                        >
                            <FaDiscord className="w-4 h-4" />
                            <span>Join Free Discord</span>
                            <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                    </div>
                </section>

                {/* INTERACTIVE FAQ ACCORDION */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm text-ink-muted">
                            Everything you need to know about Answerly AI (v1.3.52) vs ExamGhost.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {(jsonLd["@graph"][2] as any).mainEntity.map((faq: any, index: number) => (
                            <details
                                key={index}
                                className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all open:shadow-md"
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-sm sm:text-base text-ink">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.name}</h3>
                                    <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
                                </summary>
                                <p className="mt-4 text-xs sm:text-sm text-ink-secondary leading-relaxed pt-3 border-t border-black/5">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* BESPOKE INLINE CONVERSION STRIP + RELATED COMPETITORS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#e6fffa] via-[#bbf2e8]/55 to-[#f0fdf4] border border-black/10 p-8 sm:p-12 shadow-card mb-12">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-950/10 text-teal-950 text-xs font-bold mb-3">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    Zero Exposed Scripts · 50 Free Solves
                                </div>
                                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mb-2">
                                    Stop exposing 5 scripts in your Canvas DOM.
                                </h2>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    Try ExamGhost right now with <strong>50 Free Solves</strong> ($0 trial, no credit card required), then upgrade to $19/mo Monthly, $99/yr Academic Year ($8.25/mo), or $199 Lifetime across Canvas, Blackboard, Moodle, and D2L.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <a
                                    href="/#pricing"
                                    className="btn-dark px-7 py-4 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#bbf2e8]" aria-hidden="true" />
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

                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <h2 className="font-display text-2xl font-bold text-ink">
                            Compare Other Canvas &amp; Quiz Solvers
                        </h2>
                        <p className="text-xs text-ink-muted">
                            See how ExamGhost outperforms every other tool in stealth, speed, and flexible pricing.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <Link prefetch={false} href="/truststudy-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 shadow-sm transition-all text-center">
                            <div className="font-bold text-xs text-ink">TrustStudy</div>
                            <div className="text-[11px] text-ink-muted">Delisted DNS review</div>
                        </Link>
                        <Link prefetch={false} href="/solvely-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 shadow-sm transition-all text-center">
                            <div className="font-bold text-xs text-ink">Solvely</div>
                            <div className="text-[11px] text-ink-muted">v0.8.4 preload review</div>
                        </Link>
                        <Link prefetch={false} href="/canvasninja-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 shadow-sm transition-all text-center">
                            <div className="font-bold text-xs text-ink">CanvasNinja</div>
                            <div className="text-[11px] text-ink-muted">Feature count review</div>
                        </Link>
                        <Link prefetch={false} href="/homework-helper-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 shadow-sm transition-all text-center">
                            <div className="font-bold text-xs text-ink">AI Homework Helper</div>
                            <div className="text-[11px] text-ink-muted">Speed claim review</div>
                        </Link>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
