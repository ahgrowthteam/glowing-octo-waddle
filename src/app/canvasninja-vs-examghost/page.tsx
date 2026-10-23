import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    Zap,
    DollarSign,
    Star,
    ChevronDown,
    ArrowRight,
    Sparkles,
    Lock,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    Layers,
    Activity,
    ExternalLink,
    Binary,
    Camera
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "CanvasNinja vs ExamGhost (2026) — New Quizzes & AI Audit",
    },
    description: "CanvasNinja fails on Canvas New Quizzes and charges $16.99/mo for 3 basic tools. ExamGhost works on Classic & New Quizzes in 0.3s with 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/canvasninja-vs-examghost",
    },
    openGraph: {
        title: "CanvasNinja vs ExamGhost (2026) — New Quizzes & AI Audit",
        description: "CanvasNinja fails on Canvas New Quizzes and charges $16.99/mo for 3 basic tools. ExamGhost works on Classic & New Quizzes in 0.3s with 50 Free Solves.",
        url: "https://examghost.com/canvasninja-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CanvasNinja vs ExamGhost (2026) — New Quizzes & AI Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CanvasNinja vs ExamGhost (2026) — New Quizzes & AI Audit",
        description: "CanvasNinja fails on Canvas New Quizzes and charges $16.99/mo for 3 basic tools. ExamGhost works on Classic & New Quizzes in 0.3s with 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function CanvasNinjaComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-25",
                "dateModified": "2026-03-02",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/canvasninja-vs-examghost#webpage",
                "url": "https://examghost.com/canvasninja-vs-examghost",
                "name": "CanvasNinja vs ExamGhost (2026) | Why CanvasNinja Fails on Canvas New Quizzes",
                "description": "Feature-to-price comparison between CanvasNinja (ailcnoigddfddkfnppjcgjijaoehiime v1.1.40) and ExamGhost across Canvas New Quizzes AI support, diagram OCR, and stealth.",
                "breadcrumb": { "@id": "https://examghost.com/canvasninja-vs-examghost#breadcrumb" },
                "about": [
                    {
                        "@type": "SoftwareApplication",
                        "name": "ExamGhost",
                        "operatingSystem": "Chrome, Edge, Brave",
                        "applicationCategory": "EducationalApplication",
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
                        "name": "CanvasNinja – Tab Detection Blocker for Canvas",
                        "operatingSystem": "Chrome Extension",
                        "applicationCategory": "EducationalApplication",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "16.99",
                            "highPrice": "67.99",
                            "priceCurrency": "USD",
                            "offerCount": "2"
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/canvasninja-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "CanvasNinja vs ExamGhost", "item": "https://examghost.com/canvasninja-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/canvasninja-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Does CanvasNinja support AI solving on Canvas New Quizzes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. CanvasNinja (Chrome Web Store ID ailcnoigddfddkfnppjcgjijaoehiime, v1.1.40, 19.11MiB, 694 users) explicitly admits in its Chrome Web Store overview: 'Native New Quizzes toolbar detection is included, but Native Answer Saver and AI parsing are not currently supported.' ExamGhost supports full AI solving, Snap-It Vision OCR, and Focus Shield on both Canvas Classic and Canvas New Quizzes (LTI 1.3)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How many features does CanvasNinja offer compared to ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "According to its Chrome Web Store listing and public TrustMRR startup profile (founded by Ashish Hirpara, info@terabits.xyz / hello@canvasninja.app), CanvasNinja offers only 3 main features: Privacy Guard, Answer Saver (Classic Quizzes only), and AI Answers routed to OpenAI. In contrast, ExamGhost includes 24 comprehensive stealth tools, including in-memory Snap-It OCR, LaTeX Mathpix equation parsing, adjustable opacity Ghost HUD, closed Shadow DOM v1 isolation, and an instant emergency panic kill key (⌘+Shift+U)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does CanvasNinja pricing compare to ExamGhost in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CanvasNinja charges $16.99/month ($203.88/year) or $67.99 one-time for 3 basic features that do not parse AI answers on Canvas New Quizzes. ExamGhost gives every student 50 Free Solves ($0 trial, no credit card required), followed by transparent plans: $19/month, $99/year ($8.25/mo Academic Year Pass), or $199 Lifetime."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can CanvasNinja solve STEM questions with diagrams, graphs, or formulas?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. CanvasNinja sends plain-text question content and answer choices through its backend to OpenAI and has no screen-snipping OCR capability. ExamGhost includes built-in Snap-It Vision OCR (⌘+Shift+S) and an integrated STEM formula engine to solve complex physics, chemistry, and calculus problems instantly."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does CanvasNinja require mandatory compatibility telemetry reporting?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. CanvasNinja v1.1.40 states in its Chrome Web Store listing under 'AUTOMATIC COMPATIBILITY REPORTS' that feature activation required agreement to send structural categories, extension version, compatibility status, timing, and pseudonymous support/receipt metadata stored for up to 90 days. ExamGhost never forces telemetry campaigns on students."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if a professor walks behind me while using ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost features an emergency instant panic kill-switch (⌘+Shift+U / Ctrl+Shift+U). Pressing this shortcut completely unmounts the closed Shadow DOM HUD from browser memory in less than 8 milliseconds, leaving a 100% clean, standard Canvas exam screen with zero trace."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-amber-200/60 selection:text-ink font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">
                {/* Breadcrumb */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-4">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-muted">
                        <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                        <span>/</span>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Compare Extensions</Link>
                        <span>/</span>
                        <span className="text-ink font-semibold">CanvasNinja vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: The Canvas New Quizzes (LTI 1.3) Blindspot */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#ffe9a0] via-[#e9f7e3] to-[#cdeecb] p-6 sm:p-10 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/85 border border-black/10 text-xs font-bold text-ink">
                                <AlertTriangle className="w-3.5 h-3.5 text-amber-700" />
                                <span>2026 Head-to-Head · 3 Classic-Only Features vs 24 Universal Stealth Tools</span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-100 text-[11px] font-bold uppercase tracking-wider">
                                Works on Both Classic &amp; New Quizzes
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                            {/* Left Column */}
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    CanvasNinja admits its AI solver{' '}
                                    <span className="text-rose-800 underline decoration-rose-500/40 decoration-wavy underline-offset-4">
                                        doesn&apos;t work on Canvas New Quizzes.
                                    </span>
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-6 max-w-2xl">
                                    Over 75% of college Canvas courses now use <strong>Canvas New Quizzes (LTI 1.3)</strong>. Yet CanvasNinja openly admits on the Chrome Web Store that <em>&quot;Native Answer Saver and AI parsing are not currently supported&quot;</em> on New Quizzes—while still charging <strong>$16.99/mo ($203.88/yr)</strong> for just 3 basic features. ExamGhost solves both Classic and New Quizzes in 0.3s.
                                </p>

                                <div className="grid sm:grid-cols-3 gap-3 mb-8">
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">New Quizzes AI</div>
                                        <div className="font-display font-extrabold text-base text-ink">100% Supported</div>
                                        <div className="text-[11px] text-ink-muted">CanvasNinja: Unsupported</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">Feature Suite</div>
                                        <div className="font-display font-extrabold text-base text-ink">24 Stealth Tools</div>
                                        <div className="text-[11px] text-ink-muted">CanvasNinja: Only 3 tools</div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-white/85 border border-black/10 shadow-sm">
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 mb-0.5">Free Evaluation</div>
                                        <div className="font-display font-extrabold text-base text-ink">50 Free Solves</div>
                                        <div className="text-[11px] text-ink-muted">$0 · No card needed</div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#ffe9a0]" aria-hidden="true" />
                                        <span>Claim 50 Free Solves ($0 · All 24 Tools)</span>
                                    </Link>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-6 py-4 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-ink border border-black/10 shadow-sm inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
                                    >
                                        <span>Try Live Canvas Sandbox</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>

                            {/* Right Column: Canvas Classic vs New Quizzes Compatibility Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#161922] text-white p-6 sm:p-7 border border-black/20 shadow-lift">
                                    <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                                        <div>
                                            <div className="text-[11px] font-mono uppercase tracking-wider text-amber-300">
                                                Chrome Web Store Disclosure
                                            </div>
                                            <div className="font-display font-bold text-lg text-white mt-0.5">
                                                What Happens on Exam Day?
                                            </div>
                                        </div>
                                        <span className="px-2.5 py-1 rounded-full bg-white/10 text-[11px] font-mono text-white/80">
                                            v1.1.40
                                        </span>
                                    </div>

                                    {/* CanvasNinja Disclosure */}
                                    <div className="p-4 rounded-2xl bg-rose-950/50 border border-rose-500/30 mb-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-xs text-rose-200">CanvasNinja ($16.99/mo · 3 Features)</span>
                                            <span className="text-[10px] font-mono text-rose-300 uppercase font-bold">Fails on LTI 1.3</span>
                                        </div>
                                        <blockquote className="p-3 rounded-xl bg-black/50 border border-rose-500/20 text-xs text-rose-100/90 italic mb-2.5">
                                            &quot;Native New Quizzes toolbar detection is included, <strong className="text-rose-300 not-italic underline">but Native Answer Saver and AI parsing are not currently supported.</strong>&quot;
                                        </blockquote>
                                        <div className="text-[11px] text-rose-200/90 space-y-1 font-mono">
                                            <div>✗ Cannot solve Canvas New Quizzes</div>
                                            <div>✗ Cannot crop graphs or diagrams (text only)</div>
                                            <div>✗ Zero Blackboard, Moodle, or McGraw-Hill support</div>
                                        </div>
                                    </div>

                                    {/* ExamGhost Full Support */}
                                    <div className="p-4 rounded-2xl bg-emerald-950/50 border border-emerald-500/30">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="font-bold text-xs text-emerald-200">ExamGhost ($8.25/mo Annual · 24 Tools)</span>
                                            <span className="text-[10px] font-mono text-emerald-300 uppercase font-bold">Universal</span>
                                        </div>
                                        <div className="text-[11px] text-emerald-100/90 space-y-1.5 font-mono">
                                            <div>✓ Full AI solving on Canvas Classic &amp; New Quizzes</div>
                                            <div>✓ Snap-It Vision (`⌘+Shift+S`) for any graph or diagram</div>
                                            <div>✓ Works on Blackboard, Moodle, D2L, Pearson &amp; McGraw-Hill</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE 3-TAB COMPARISON SWITCHER (Pure CSS peer-checked) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-8">
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-xs font-bold text-amber-950 mb-3">
                            <Sparkles className="w-3.5 h-3.5" />
                            Interactive Breakdown · Click Any Tab to Compare
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            3 Features vs 24 Stealth Tools: Why Students Switch
                        </h2>
                        <p className="text-sm sm:text-base text-ink-muted">
                            Compare CanvasNinja and ExamGhost across Canvas New Quizzes compatibility, STEM diagram solving, and project maintenance.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <input type="radio" name="cn_tabs" id="cn-newquiz" className="sr-only peer/newquiz" defaultChecked />
                        <input type="radio" name="cn_tabs" id="cn-features" className="sr-only peer/features" />
                        <input type="radio" name="cn_tabs" id="cn-status" className="sr-only peer/status" />

                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#f5f1ea] border border-black/10 mb-8">
                            <label
                                htmlFor="cn-newquiz"
                                className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/newquiz:bg-ink peer-checked/newquiz:text-white peer-checked/newquiz:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Binary className="w-4 h-4" />
                                <span>1. New Quizzes &amp; STEM Diagrams</span>
                            </label>
                            <label
                                htmlFor="cn-features"
                                className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/features:bg-ink peer-checked/features:text-white peer-checked/features:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Layers className="w-4 h-4" />
                                <span>2. 3 Basic Features vs 24 Tools</span>
                            </label>
                            <label
                                htmlFor="cn-status"
                                className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/status:bg-ink peer-checked/status:text-white peer-checked/status:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Activity className="w-4 h-4" />
                                <span>3. Telemetry &amp; Maintenance Status</span>
                            </label>
                        </div>

                        {/* TAB 1: NEW QUIZZES & DIAGRAMS */}
                        <div className="hidden peer-checked/newquiz:block">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-1">CanvasNinja Limitation</div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Blind to Canvas New Quizzes &amp; Visual Graphs
                                    </h3>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Fails on LTI 1.3 New Quizzes:</strong> Because Canvas New Quizzes renders inside a cross-origin React LTI iframe, CanvasNinja&apos;s Classic DOM scraper cannot parse questions or save answers.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Plain-Text Only (Zero Screen Crop):</strong> CanvasNinja only forwards raw HTML text strings to OpenAI—so if your biology, economics, or calculus question has a graph or circuit image, it cannot see it.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">ExamGhost Advantage</div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Full New Quizzes Support + Snap-It Vision (`⌘+Shift+S`)
                                    </h3>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Native LTI 1.3 Execution:</strong> Double-click any question inside Canvas New Quizzes, Canvas Classic, Blackboard, or McGraw-Hill for an instant 0.3s solve.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>In-Memory Diagram &amp; Equation OCR:</strong> Press <code>⌘+Shift+S</code> to crop any graph, organic chemistry ring, or locked image without leaving your exam tab.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: 3 FEATURES VS 24 TOOLS */}
                        <div className="hidden peer-checked/features:block">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="p-6 rounded-3xl bg-[#faf8f4] border border-black/10">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-display font-bold text-lg text-ink">CanvasNinja ($16.99/mo)</span>
                                        <span className="px-3 py-1 rounded-full bg-amber-100 text-amber-900 text-xs font-bold">Only 3 Features</span>
                                    </div>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /><span>1. Privacy Guard (Canvas focus signals only)</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /><span>2. Answer Saver (Classic Quizzes only)</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /><span>3. AI Answers (Classic Quizzes plain-text only)</span></li>
                                        <li className="flex items-center gap-2 text-rose-800 line-through"><XCircle className="w-4 h-4 text-rose-600 shrink-0" /><span>Invisible Auto-Fill &amp; Smart Highlight Modes</span></li>
                                        <li className="flex items-center gap-2 text-rose-800 line-through"><XCircle className="w-4 h-4 text-rose-600 shrink-0" /><span>Snap-It Vision OCR (⌘+Shift+S)</span></li>
                                        <li className="flex items-center gap-2 text-rose-800 line-through"><XCircle className="w-4 h-4 text-rose-600 shrink-0" /><span>Master Panic Kill-Switch (⌘+Shift+U)</span></li>
                                        <li className="flex items-center gap-2 text-rose-800 line-through"><XCircle className="w-4 h-4 text-rose-600 shrink-0" /><span>Blackboard, Moodle, D2L &amp; Publisher Support</span></li>
                                    </ul>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="font-display font-bold text-lg text-ink">ExamGhost (50 Free · $8.25/mo Annual)</span>
                                        <span className="px-3 py-1 rounded-full bg-emerald-200 text-emerald-950 text-xs font-bold">All 24 Stealth Tools</span>
                                    </div>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /><span>0.3s Double-Click Solve (Classic + New Quizzes)</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /><span>3 Stealth Modes (Invisible Auto-Fill, Highlight, Explain)</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /><span>Snap-It Vision OCR + LaTeX &amp; SMILES Chemistry Engine</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /><span>4-Layer Focus Shield + Closed Shadow DOM Isolation</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /><span>0%–100% Ghost Opacity Slider + ⌘+Shift+U Panic Key</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /><span>Works Across 20+ University LMSs &amp; Publisher Portals</span></li>
                                        <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" /><span>50 Free Solves ($0) + 14-Day Money-Back Guarantee</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: TELEMETRY & MAINTENANCE */}
                        <div className="hidden peer-checked/status:block">
                            <div className="grid lg:grid-cols-2 gap-6">
                                <div className="p-6 rounded-3xl bg-rose-50/70 border border-rose-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-rose-800 mb-1">CanvasNinja v1.1.40 Audit</div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        19.11MiB Bundle + Mandatory Telemetry + Dormant Founder Profile
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-3">
                                        CanvasNinja weighs an unusually heavy <strong>19.11MiB</strong> and discloses under <em>&quot;AUTOMATIC COMPATIBILITY REPORTS&quot;</em> that activating features required sending compatibility and support/receipt metadata stored for up to 90 days.
                                    </p>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                        Furthermore, on public startup directory TrustMRR, founder Ashish Hirpara lists CanvasNinja with <strong>&quot;No active subscriptions&quot;</strong> and notes <em>&quot;I&apos;m no longer posting new content&quot;</em> (1.7★ rating).
                                    </p>
                                </div>

                                <div className="p-6 rounded-3xl bg-emerald-50/70 border border-emerald-200">
                                    <div className="text-xs font-bold uppercase tracking-wider text-emerald-800 mb-1">ExamGhost Active Engineering</div>
                                    <h3 className="font-display font-bold text-xl text-ink mb-3">
                                        Lightweight Build · Zero Forced Telemetry · 24/7 Discord Support
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-3">
                                        ExamGhost is actively maintained every week for 2026 LMS updates, backed by a live community of 14,000+ college students on Discord.
                                    </p>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                        We never force telemetry reporting campaigns on students, and you can verify every feature yourself with <strong>50 Free Solves ($0, no credit card required)</strong>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SIDE-BY-SIDE COMPARISON TABLE + COLLAPSIBLE MANIFEST DRAWER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="bg-[#f7f4ee] px-6 py-4 border-b border-black/10 flex flex-wrap items-center justify-between gap-2">
                            <h2 className="font-display font-bold text-base sm:text-lg text-ink">
                                CanvasNinja vs ExamGhost: 2026 Feature &amp; Pricing Matrix
                            </h2>
                            <span className="text-xs text-ink-muted font-medium">Verified against CanvasNinja v1.1.40 CWS listing</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead className="bg-[#faf8f4] border-b border-black/10">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-ink">Feature / Specification</th>
                                        <th className="py-4 px-6 text-center font-extrabold text-emerald-950 bg-[#cdeecb]/40">ExamGhost</th>
                                        <th className="py-4 px-6 text-center font-bold text-ink-muted">CanvasNinja (v1.1.40)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Canvas New Quizzes (LTI 1.3) AI Solver</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">100% Supported (0.3s Double-Click)</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">&quot;Not currently supported&quot; (CWS Overview)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Diagrams, Graphs &amp; Equations</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Snap-It Vision OCR (⌘+Shift+S) + LaTeX</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Plain-Text Only (Cannot Crop Images)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Included Stealth Tools</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">24 Tools (Auto-Fill, Highlight, Panic Key)</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">3 Basic Features</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Supported LMS Platforms</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">Canvas, Blackboard, Moodle, D2L, McGraw-Hill, Pearson</td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">Canvas LMS Only</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Free Trial &amp; Pricing</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">50 Free Solves ($0) · $19/mo · $99/yr · $199 Life</td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">$16.99/mo ($203.88/yr) or $67.99</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Manifest Audit */}
                        <details className="group border-t border-black/10 bg-[#faf8f4]">
                            <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-xs sm:text-sm font-bold text-ink hover:bg-[#f2ede4] transition-colors">
                                <div className="flex items-center gap-2">
                                    <Lock className="w-4 h-4 text-emerald-800" />
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; TrustMRR Audit (CanvasNinja v1.1.40)</h3>
                                </div>
                                <ChevronDown className="w-4 h-4 text-ink-muted transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="px-6 pb-6 pt-2 text-xs text-ink-secondary space-y-2.5 border-t border-black/5 bg-white">
                                <p className="leading-relaxed">
                                    <strong>Extension Identity:</strong> CanvasNinja (<code>canvasninja.app</code>, Chrome Web Store ID <code>ailcnoigddfddkfnppjcgjijaoehiime</code>, v1.1.40, 19.11MiB bundle size, 694 users, 5 ratings) is published by Terabits (<code>info@terabits.xyz</code> / <code>hello@canvasninja.app</code>, founded by Ashish Hirpara).
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Disclosures:</strong> Its Chrome Web Store overview explicitly notes that on Canvas New Quizzes, <em>&quot;Native Answer Saver and AI parsing are not currently supported,&quot;</em> and that Privacy Guard <em>&quot;does not remove server logs or guarantee that activity is undetectable.&quot;</em>
                                </p>
                            </div>
                        </details>
                    </div>
                </section>

                {/* FAQ ACCORDION */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm text-ink-muted">
                            Everything students ask when comparing CanvasNinja and ExamGhost.
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

                {/* BESPOKE CONVERSION STRIP + RELATED LINKS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#ffe9a0] via-[#e2f5ea] to-[#cdeecb] p-8 sm:p-10 border border-black/10 shadow-card mb-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="max-w-xl text-center lg:text-left">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/10 text-xs font-bold text-emerald-950 mb-3">
                                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                                    <span>Full New Quizzes AI · 24 Stealth Tools · 50 Free Solves</span>
                                </div>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                                    Don&apos;t get caught with a solver that breaks on Canvas New Quizzes.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                    Test all 24 ExamGhost stealth tools on Canvas Classic, Canvas New Quizzes, Blackboard, and McGraw-Hill with 50 Free Solves ($0, no card).
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                                <Link prefetch={false}
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#ffe9a0]" />
                                    <span>Claim 50 Free Solves</span>
                                </Link>
                                <Link prefetch={false}
                                    href="/canvas-quiz-solver-free-demo"
                                    className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-white hover:bg-white/90 text-ink border border-black/10 shadow-sm inline-flex items-center gap-1.5"
                                >
                                    <span>Try Live Demo</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                                <a
                                    href="https://discord.gg/aCcsyKYJq4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold bg-[#3b47d6] hover:bg-[#313cb8] text-white shadow-sm inline-flex items-center gap-1.5"
                                >
                                    <FaDiscord className="w-4 h-4" />
                                    <span>Discord</span>
                                    <ExternalLink className="w-3 h-3" />
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <Link prefetch={false} href="/canvashack-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">CanvasHack vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">$149.99 tab-blocker review</div>
                        </Link>
                        <Link prefetch={false} href="/canvasquiz-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">CanvasQuiz vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Proctoring FAQ admission</div>
                        </Link>
                        <Link prefetch={false} href="/canvaswizard-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">CanvasWizard vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">MV3 stealth comparison</div>
                        </Link>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">All 57 Extensions</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Full 2026 Comparison Hub</div>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
