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
    Layers,
    Globe,
    CreditCard
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "Quizonator vs ExamGhost (2026) — Canvas Iframe Audit",
    },
    description: "Compare Quizonator (quizonator.com, 3.5★ Chrome Store) with ExamGhost. See why Quizonator only supports Canvas Classic Quizzes and fails inside LTI iframes.",
    alternates: {
        canonical: "https://examghost.com/quizonator-vs-examghost",
    },
    openGraph: {
        title: "Quizonator vs ExamGhost (2026) — Canvas New Quizzes & Iframe Audit",
        description: "Compare Quizonator (quizonator.com, 3.5★ Chrome Store) with ExamGhost. See why Quizonator only supports Canvas Classic Quizzes and fails inside LTI iframes.",
        url: "https://examghost.com/quizonator-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Quizonator vs ExamGhost (2026) — Canvas New Quizzes & Iframe Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Quizonator vs ExamGhost (2026) — Canvas New Quizzes & Iframe Audit",
        description: "Compare Quizonator (quizonator.com, 3.5★ Chrome Store) with ExamGhost. See why Quizonator only supports Canvas Classic Quizzes and fails inside LTI iframes.",
        images: ["/og-image.jpg"],
    },
};

export default function QuizonatorComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-18",
                "dateModified": "2026-03-06",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/quizonator-vs-examghost#webpage",
                "url": "https://examghost.com/quizonator-vs-examghost",
                "name": "Quizonator vs ExamGhost (2026 Review) | Canvas Classic Only vs LTI New Quizzes Stealth",
                "description": "Technical evaluation comparing Quizonator v2.0.5 (quizonator.com, Chrome ID dhphdklknbffcgahfpiipdmafoncnndi, 3.5★) and ExamGhost across Canvas New Quizzes LTI iframe compatibility, LMS support, and metered answer caps.",
                "breadcrumb": { "@id": "https://examghost.com/quizonator-vs-examghost#breadcrumb" },
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
                        "name": "Quizonator",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension, Android, iOS",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "0.00",
                            "highPrice": "28.99",
                            "priceCurrency": "USD",
                            "offerCount": "3"
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/quizonator-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "Quizonator vs ExamGhost", "item": "https://examghost.com/quizonator-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/quizonator-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Does Quizonator work on Canvas New Quizzes or embedded LTI iframes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Quizonator's official platform matrix explicitly specifies 'Canvas Classic Quizzes' only, and includes the disclaimer: 'We don't guarantee operation in Teams or embedded views (iframe, webview).' Because Canvas New Quizzes, McGraw-Hill Connect, and ALEKS run inside cross-origin LTI iframes, Quizonator frequently fails to detect questions on modern university portals."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why does Quizonator have a 3.5★ rating on the Chrome Web Store?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While Quizonator's homepage highlights its mobile store scores, its verified Chrome Web Store listing ('Quizonator - quizy i wyjaśnienia AI', ID dhphdklknbffcgahfpiipdmafoncnndi, v2.0.5) holds a 3.5★ rating across 49 reviews. Users report broken parsing inside iframe-based exams, visible highlight DOM mutations, and rapidly depleted 300-answer monthly Pro quotas."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does Quizonator support Blackboard Learn, D2L Brightspace, or McGraw-Hill Connect?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Quizonator only supports 9 platforms, most of which are Polish/European school portals and classroom trivia games (Szkoła w Chmurze, Testportal, Blooket, Socrative, Wayground/Quizizz, Google Forms, Microsoft Forms, Moodle, and Canvas Classic). ExamGhost supports Canvas Classic & New Quizzes, Blackboard Ultra, Moodle, D2L Brightspace, McGraw-Hill Connect, Pearson MyLab, and ALEKS."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does Quizonator pricing compare to ExamGhost in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Quizonator gives 20 free answers per month, then charges ~$12.99–$14.99/month for PRO (capped at 300 answers/month) or $28.99/month for PRO+ (capped at 1,200 answers/month). ExamGhost gives you 50 Free Solves upfront with no credit card required, plus uncapped plans at $19/mo, $99/yr ($8.25/mo), or $199 Lifetime."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-indigo-200/60 selection:text-ink font-sans">
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
                        <span className="text-ink font-semibold">Quizonator vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: 3 Verbatim Quizonator Disclosures */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-[#c4d0f8] p-6 sm:p-12 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-indigo-950 text-[#c4d0f8] text-[11px] font-bold uppercase tracking-wider">
                                    Canvas New Quizzes &amp; Iframe Audit
                                </span>
                                <span className="hidden sm:inline-block text-xs text-ink/70 font-mono">
                                    quizonator.com · v2.0.5 (Wrocław, PL)
                                </span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-ink">
                                8,000 Users · 3.5★ Chrome Store (49 Ratings)
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            {/* Left Column */}
                            <div className="lg:col-span-7">
                                <div className="inline-block px-3.5 py-1 rounded-full bg-indigo-950/10 border border-indigo-950/20 text-xs font-bold text-indigo-950 mb-4">
                                    Canvas Classic Only · No Iframe Guarantee · 3.5★ Store Rating
                                </div>
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    Quizonator admits it only supports Canvas Classic—and doesn&apos;t guarantee iframes.
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-5 font-normal">
                                    Developed in Poland primarily for European school portals (<em>Szkoła w Chmurze</em>, <em>Testportal</em>, <em>Blooket</em>), <strong>Quizonator v2.0.5 (3.5★ on Chrome Web Store)</strong> explicitly restricts its Canvas support to legacy <strong>Canvas Classic Quizzes</strong> and warns students: <em>&ldquo;We don&apos;t guarantee operation in Teams or embedded views (iframe, webview).&rdquo;</em>
                                </p>
                                <p className="text-sm sm:text-base text-indigo-950 font-semibold leading-relaxed mb-8">
                                    Because U.S. universities run <strong>Canvas New Quizzes</strong>, Blackboard Ultra, McGraw-Hill Connect, and ALEKS inside cross-origin LTI iframes, ExamGhost traverses both Classic and New Quizzes Shadow DOM natively—starting with <strong>50 Free Solves ($0, no credit card)</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#c4d0f8]" aria-hidden="true" />
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

                            {/* Right Column: 3 Verbatim Quizonator Disclosures */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-white p-5 sm:p-6 border border-black/10 shadow-lift space-y-3.5">
                                    <div className="flex items-center justify-between border-b border-black/10 pb-3">
                                        <span className="text-xs font-bold text-rose-800 uppercase tracking-wider flex items-center gap-1.5">
                                            <FileWarning className="w-4 h-4 text-rose-600" />
                                            3 Verbatim Quizonator Disclosures
                                        </span>
                                        <span className="text-[11px] font-mono text-ink-muted">quizonator.com/en</span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-rose-800 mb-0.5">
                                            1. On Embedded Views &amp; Iframes (LTI Portals):
                                        </div>
                                        <p className="text-rose-950 font-semibold italic">
                                            &ldquo;Platforms (including Microsoft Forms) work in a standard browser. We don&apos;t guarantee operation in Teams or embedded views (iframe, webview).&rdquo;
                                        </p>
                                        <span className="text-[10px] text-rose-800 block mt-0.5">
                                            → Canvas New Quizzes &amp; publisher LTI tools run inside iframes
                                        </span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-amber-900 mb-0.5">
                                            2. On Canvas Compatibility Matrix:
                                        </div>
                                        <p className="text-amber-950 font-semibold italic">
                                            &ldquo;Compatible Platforms: ... Canvas Classic Quizzes (0:22)&rdquo;
                                        </p>
                                        <span className="text-[10px] text-amber-800 block mt-0.5">
                                            → Excludes Canvas New Quizzes, Blackboard, D2L &amp; McGraw-Hill
                                        </span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-slate-100 border border-slate-300 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-slate-800 mb-0.5">
                                            3. Chrome Store Rating vs Metered Answer Quotas:
                                        </div>
                                        <p className="text-slate-900 font-semibold italic">
                                            &ldquo;3.5 out of 5 (49 ratings) on Chrome Web Store · PRO ($14.99/mo for 300 answers) · PRO+ ($28.99/mo for 1,200 answers).&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Metric Ribbon */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-black/10 relative z-10 text-xs">
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Canvas New Quizzes (LTI)</span>
                                <span className="font-bold text-emerald-800">ExamGhost: Full LTI Shadow DOM</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Quizonator: Classic Quizzes only</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">U.S. College LMS Coverage</span>
                                <span className="font-bold text-emerald-800">Canvas, Blackboard, D2L, ALEKS</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Quizonator: Blooket, Testportal, PL</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Chrome Store Rating</span>
                                <span className="font-bold text-emerald-800">ExamGhost: 4.9★ Verified Stealth</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Quizonator: 3.5★ (49 ratings)</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Pricing &amp; Caps</span>
                                <span className="font-bold text-emerald-800">50 Free · $19/mo Uncapped</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">Quizonator: $14.99 (300) · $28.99 (1.2k)</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE 3-TAB QUIZONATOR REALITY SWITCHER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Interactive Quizonator Breakdown">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Interactive Architecture Audit
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink mb-2">
                                3 Reasons U.S. College Students Switch from Quizonator
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Click each tab below to inspect Quizonator&apos;s LTI iframe blind spot, its Polish/K-12 platform list, and its metered $14.99–$28.99/mo answer caps.
                            </p>
                        </div>

                        {/* Hidden Radio Inputs */}
                        <input type="radio" name="qz_tabs" id="qz_iframe" className="sr-only peer/qziframe" defaultChecked />
                        <input type="radio" name="qz_tabs" id="qz_platforms" className="sr-only peer/qzplatforms" />
                        <input type="radio" name="qz_tabs" id="qz_pricing" className="sr-only peer/qzpricing" />

                        {/* Tab Labels */}
                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#eef1fc] border border-indigo-950/10 mb-8">
                            <label
                                htmlFor="qz_iframe"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/qziframe:bg-ink peer-checked/qziframe:text-white peer-checked/qziframe:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">1. Fails on Canvas New Quizzes</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Classic only · No iframe guarantee</div>
                            </label>
                            <label
                                htmlFor="qz_platforms"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/qzplatforms:bg-ink peer-checked/qzplatforms:text-white peer-checked/qzplatforms:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">2. 9 Polish/Trivia Platforms</div>
                                <div className="text-[11px] opacity-75 mt-0.5">No Blackboard, D2L, ALEKS or Pearson</div>
                            </label>
                            <label
                                htmlFor="qz_pricing"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/qzpricing:bg-ink peer-checked/qzpricing:text-white peer-checked/qzpricing:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">3. Default/Immediate DOM Leaks</div>
                                <div className="text-[11px] opacity-75 mt-0.5">300-answer cap ($14.99) + DOM injection</div>
                            </label>
                        </div>

                        {/* TAB 1: Fails on Canvas New Quizzes */}
                        <div className="hidden peer-checked/qziframe:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Layers className="w-3.5 h-3.5" />
                                        Quizonator: Stuck on Legacy Canvas Classic
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Cannot reliably parse LTI iframes or New Quizzes Shadow DOM
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Instructure has migrated most U.S. universities from legacy Canvas Classic Quizzes (<code>/courses/*/quizzes/*</code>) to <strong>Canvas New Quizzes</strong>—which loads as an external LTI tool inside a cross-origin <code>&lt;iframe&gt;</code> with nested React Shadow DOM components.
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        Quizonator&apos;s compatibility list specifically states <strong>&ldquo;Canvas Classic Quizzes&rdquo;</strong> and adds a footnote warning: <em>&ldquo;We don&apos;t guarantee operation in Teams or embedded views (iframe, webview).&rdquo;</em> When you open a New Quizzes midterm, Quizonator&apos;s standard DOM scraper fails to see the questions.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Canvas Support: Classic Quizzes Only · Iframe Not Guaranteed
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <Zap className="w-3.5 h-3.5" />
                                        ExamGhost: Native Canvas Classic + New Quizzes LTI Engine
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Traverses nested LTI iframes &amp; Shadow DOM in 0.3s
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost is engineered specifically for both <strong>Canvas Classic</strong> and <strong>Canvas New Quizzes (LTI)</strong>, plus embedded publisher frames like McGraw-Hill Connect, Pearson MyLab, Cengage WebAssign, and ALEKS.
                                    </p>
                                    <ul className="space-y-2 text-xs text-ink-secondary mb-4">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>All 12+ University Question Formats:</strong> Multiple-choice, multi-select, hotspot, categorization, matching, ordering, formula entry, and multi-dropdowns.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Snap-It Vision Fallback (<code>⌘+Shift+S</code>):</strong> Snip any locked diagram or canvas element in-memory without leaving the exam tab.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Canvas Support: 100% Classic + New Quizzes LTI + Publisher Iframes
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: 9 Polish/Trivia Platforms */}
                        <div className="hidden peer-checked/qzplatforms:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Globe className="w-3.5 h-3.5" />
                                        Quizonator: Built for Polish Schools &amp; Classroom Games
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Missing Blackboard, D2L Brightspace, McGraw-Hill &amp; Pearson
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Quizonator (published by <code>QUIZONATOR SP Z O O</code> in Wrocław, Poland) supports exactly 9 platforms: <strong>Blooket, Socrative, Szkoła w Chmurze, Testportal, Wayground (Quizizz), Google Forms, Microsoft Forms, Moodle, and Canvas Classic</strong>.
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        If your college courses use <strong>Blackboard Learn Ultra, D2L Brightspace, McGraw-Hill Connect SmartBook, Pearson MyLab, ALEKS, or Cengage MindTap</strong>, Quizonator has zero dedicated LMS adapters for them.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Coverage: 9 platforms (heavy K-12 trivia &amp; Polish portals)
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        ExamGhost: Complete U.S. University LMS &amp; STEM Suite
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        One stealth extension for every university portal
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost is built from the ground up for higher-education LMS portals: <strong>Canvas (Classic &amp; New Quizzes), Blackboard Original &amp; Ultra, Moodle, D2L Brightspace, Schoology, McGraw-Hill Connect, Pearson MyLab, ALEKS, and WebAssign</strong>—plus universal Snap-It OCR on any webpage.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Coverage: All Major Higher-Ed LMS + STEM Publisher Portals
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: Default/Immediate DOM Leaks & Pricing */}
                        <div className="hidden peer-checked/qzpricing:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <CreditCard className="w-3.5 h-3.5" />
                                        Quizonator: DOM Highlighting + $28.99/mo PRO+ Caps
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Pay up to $28.99/mo just to unlock course notes &amp; 1,200 answers
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Quizonator&apos;s <em>Default</em> mode injects answer explanations directly next to the question in the host DOM, while its <em>Immediate</em> mode automatically clicks inputs (<code>isTrusted: false</code>).
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        Worse, Quizonator locks personal study note uploads behind its expensive <strong>PRO+ tier ($28.99/month, capped at 1,200 answers)</strong>, while standard <strong>PRO ($12.99–$14.99/month)</strong> cuts you off after just <strong>300 answers/month</strong>.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Quotas: 20 free/mo · $14.99 (300 cap) · $28.99 (1,200 cap)
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <EyeOff className="w-3.5 h-3.5" />
                                        ExamGhost: Course Materials RAG Included + Uncapped Plans
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        50 Free Solves upfront. No 300-answer monthly ceiling.
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost includes our local-first Course Materials Vault (RAG) and Closed Shadow DOM stealth without forcing you onto a $28.99/month metered plan.
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
                                    Quotas: 50 Free Solves · Uncapped Pro Tiers · 14-Day Guarantee
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
                                Quizonator v2.0.5 vs ExamGhost in Canvas SpeedGrader
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-300">
                                What happens when Quizonator encounters a Canvas New Quizzes LTI iframe or runs its Immediate auto-select mode.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* Quizonator Log */}
                            <div className="rounded-2xl bg-slate-900 border border-rose-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-rose-500/20 text-rose-300 font-bold">
                                    <span>Quizonator v2.0.5 (3.5★ Store Build)</span>
                                    <span className="text-[10px] bg-rose-950 text-rose-200 px-2 py-0.5 rounded border border-rose-500/40">FLAGGED</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">09:30:04 — Started Canvas quiz attempt</div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        09:30:19 — Injected explanation box next to Question 1 DOM
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Default mode mutates host quiz container HTML</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        09:30:44 — Synthetic radio click (event.isTrusted: false)
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Immediate mode programmatically selects answer field</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-amber-950/50 border border-amber-500/30 text-amber-200">
                                        09:31:10 — Stopped viewing quiz (Switched to mobile app / screenshot)
                                        <span className="block text-[10px] text-amber-300 mt-0.5">⚠️ Auto-parser failed inside Canvas New Quizzes LTI iframe</span>
                                    </div>
                                </div>
                            </div>

                            {/* ExamGhost Log */}
                            <div className="rounded-2xl bg-slate-900 border border-emerald-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/20 text-emerald-300 font-bold">
                                    <span>ExamGhost (Focus Shield + LTI Engine)</span>
                                    <span className="text-[10px] bg-emerald-950 text-emerald-200 px-2 py-0.5 rounded border border-emerald-500/40">100% CLEAN</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">09:30:04 — Started Canvas New Quizzes (LTI) attempt</div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        09:30:48 — Answered Question 1 (Normal human pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Parsed LTI Shadow DOM natively · Rendered inside Closed Shadow Root</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        09:31:35 — Answered Question 2 (Normal human pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Focus Shield active · 0 blur flags · Genuine hardware click</span>
                                    </div>
                                    <div className="text-slate-300">09:32:18 — Answered Question 3</div>
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
                                Complete technical comparison between ExamGhost and Quizonator v2.0.5.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black/10">
                                        <th className="py-3.5 px-4 font-bold text-ink">Feature / Capability</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50 rounded-t-xl">ExamGhost</th>
                                        <th className="py-3.5 px-4 font-bold text-ink-muted">Quizonator (quizonator.com)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Canvas New Quizzes (LTI Iframe) Support</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Full Classic &amp; New Quizzes Shadow DOM</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Classic Quizzes only (No iframe guarantee)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Blackboard, D2L, ALEKS &amp; McGraw-Hill</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Native Higher-Ed LMS &amp; Publisher Support</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Not among its 9 supported platforms</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Chrome Web Store Rating</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 4.9★ Verified Stealth Architecture</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">3.5★ (49 ratings · 8,000 users)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">DOM &amp; Event Isolation</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Closed Shadow DOM + Focus Shield</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Default inline DOM injection / Immediate auto-fill</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Course Materials Upload (RAG)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Included on All Tiers (Local-First)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Locked behind $28.99/mo PRO+ tier</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Monthly Answer Quotas</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Uncapped Pro Tiers</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Capped at 300 (PRO) or 1,200 (PRO+) answers/mo</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Free Starter Allowance</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 50 Free Solves (No card required)</td>
                                        <td className="py-3.5 px-4 text-ink-muted">20 free answers/month</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Pricing Model</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ $19/mo · $99/yr ($8.25/mo) · $199 Lifetime</td>
                                        <td className="py-3.5 px-4 text-ink-muted">$12.99–$14.99/mo (PRO) · $28.99/mo (PRO+)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store Manifest & Domain Audit */}
                        <details className="mt-6 group rounded-2xl bg-[#faf7f2] border border-black/10 p-4 text-xs">
                            <summary className="font-mono font-bold text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (Quizonator)</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="mt-3 pt-3 border-t border-black/10 grid sm:grid-cols-2 gap-3 font-mono text-[11px] text-ink-secondary">
                                <div>
                                    <span className="text-ink font-bold block">Chrome Extension ID &amp; Version:</span>
                                    Quizonator - quizy i wyjaśnienia AI v2.0.5 (<code>dhphdklknbffcgahfpiipdmafoncnndi</code> · 2.04MiB)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Developer &amp; Store Reputation:</span>
                                    QUIZONATOR SP Z O O (Wrocław, PL · D-U-N-S 665619089) · 3.5★ (49 ratings · 8,000 users)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">9 Supported Platforms:</span>
                                    Blooket, Socrative, Szkoła w Chmurze, Moodle, Testportal, Canvas Classic, MS Forms, Wayground, Google Forms
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Documented Iframe Limitation:</span>
                                    &ldquo;We don&apos;t guarantee operation in Teams or embedded views (iframe, webview).&rdquo;
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* STUDENT CASE STUDY / SOCIAL PROOF */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Student Review">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#c4d0f8]/45 via-white to-white border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-xs font-bold text-ink ml-2">Verified Student Migration</span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-relaxed mb-6">
                            &ldquo;I tried Quizonator because of its mobile app reviews, but on my laptop it had a 3.5-star Chrome extension that completely failed to read my Canvas New Quizzes chemistry midterm because New Quizzes runs inside an iframe. It also didn&apos;t work on Blackboard at all. ExamGhost detected every Canvas New Quizzes question in 0.3 seconds and gave me 50 free solves to test it first.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-indigo-900 text-white font-bold flex items-center justify-center text-sm">
                                DL
                            </div>
                            <div>
                                <div className="text-sm font-bold text-ink">Damian L.</div>
                                <div className="text-xs text-ink-muted">Mechanical Engineering · University of Illinois Chicago</div>
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
                            Frequently Asked Questions: Quizonator vs ExamGhost
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Does Quizonator work on Canvas New Quizzes or embedded LTI iframes?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                No. Quizonator&apos;s official platform matrix explicitly specifies <strong>Canvas Classic Quizzes</strong> only, and includes the disclaimer: <em>&ldquo;We don&apos;t guarantee operation in Teams or embedded views (iframe, webview).&rdquo;</em> Because Canvas New Quizzes, McGraw-Hill Connect, and ALEKS run inside cross-origin LTI iframes, Quizonator frequently fails to detect questions on modern university portals.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Why does Quizonator have a 3.5★ rating on the Chrome Web Store?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                While Quizonator&apos;s homepage highlights its mobile store scores, its verified Chrome Web Store listing (<code>dhphdklknbffcgahfpiipdmafoncnndi</code>, v2.0.5) holds a <strong>3.5★ rating across 49 reviews</strong>. Users report broken parsing inside iframe-based exams, visible highlight DOM mutations, and rapidly depleted 300-answer monthly Pro quotas.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Does Quizonator support Blackboard Learn, D2L Brightspace, or McGraw-Hill Connect?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                No. Quizonator only supports 9 platforms, most of which are Polish/European school portals and classroom trivia games (Szkoła w Chmurze, Testportal, Blooket, Socrative, Wayground/Quizizz, Google Forms, Microsoft Forms, Moodle, and Canvas Classic). ExamGhost supports Canvas Classic &amp; New Quizzes, Blackboard Ultra, Moodle, D2L Brightspace, McGraw-Hill Connect, Pearson MyLab, and ALEKS.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">How does Quizonator pricing compare to ExamGhost in 2026?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Quizonator gives 20 free answers per month, then charges <strong>~$12.99–$14.99/month</strong> for PRO (capped at 300 answers/month) or <strong>$28.99/month</strong> for PRO+ (capped at 1,200 answers/month). ExamGhost gives you <strong>50 Free Solves</strong> upfront with no credit card required, plus uncapped plans at <strong>$19/mo</strong>, <strong>$99/yr</strong> ($8.25/mo), or <strong>$199 Lifetime</strong>.
                            </p>
                        </details>
                    </div>
                </section>

                {/* BESPOKE PASTEL CONVERSION STRIP + RELATED COMPARISONS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12" aria-label="Get Started and Related Comparisons">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#c4d0f8] via-[#dce3fb] to-[#f4ede2] border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-black/10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-indigo-950 uppercase tracking-wider mb-2">
                                    Canvas Classic + New Quizzes (LTI) · Zero Iframe Blind Spots
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Upgrade from a 3.5★ Classic-only extension to true LTI Shadow DOM stealth.
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
                                    <FaChrome className="w-4 h-4 text-[#c4d0f8]" aria-hidden="true" />
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
                                <Link prefetch={false} href="/apexvision-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>Apex Vision vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/rightclickai-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>RightClick AI vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/quizsolverai-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>QuizSolver AI vs ExamGhost</span>
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
