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
    RefreshCw,
    Lock,
    Code2
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "College Tools vs ExamGhost (2026) — Rebrand Audit",
    },
    description: "Searching for College Tools (collegetools.io)? See why it rebranded to Mindko after a 3.17★ Chrome Store rating, 24 injected scripts, and 29 bank exclusions.",
    alternates: {
        canonical: "https://examghost.com/collegetools-vs-examghost",
    },
    openGraph: {
        title: "College Tools vs ExamGhost (2026) — Why CollegeTools.io Rebranded",
        description: "Searching for College Tools (collegetools.io)? See why it rebranded to Mindko after a 3.17★ Chrome Store rating, 24 injected scripts, and 29 bank exclusions.",
        url: "https://examghost.com/collegetools-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "College Tools vs ExamGhost (2026) — Why CollegeTools.io Rebranded",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "College Tools vs ExamGhost (2026) — Why CollegeTools.io Rebranded",
        description: "Searching for College Tools (collegetools.io)? See why it rebranded to Mindko after a 3.17★ Chrome Store rating, 24 injected scripts, and 29 bank exclusions.",
        images: ["/og-image.jpg"],
    },
};

export default function CollegeToolsComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-14",
                "dateModified": "2026-03-07",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/collegetools-vs-examghost#webpage",
                "url": "https://examghost.com/collegetools-vs-examghost",
                "name": "College Tools vs ExamGhost (2026 Review) | Why CollegeTools.io Rebranded to Mindko",
                "description": "Investigative technical audit of College Tools (collegetools.io, rebranded to Mindko, Chrome ID iiikmhonbbmbdjfokdmmncdohjionkmf) vs ExamGhost across its 3.17★ rating, Camouflage Mode CSS, and 29 bank exclusions.",
                "breadcrumb": { "@id": "https://examghost.com/collegetools-vs-examghost#breadcrumb" },
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
                        "name": "College Tools (Homework Solver by Mindko)",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension, iOS, Android",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "0.00",
                            "highPrice": "19.99",
                            "priceCurrency": "USD",
                            "offerCount": "3"
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/collegetools-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "College Tools vs ExamGhost", "item": "https://examghost.com/collegetools-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/collegetools-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What happened to College Tools (collegetools.io)?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "College Tools (collegetools.io) officially rebranded to Mindko (mindko.com) after its Chrome extension ('Homework Solver by Mindko (formerly College Tools)', ID iiikmhonbbmbdjfokdmmncdohjionkmf) accumulated a 3.17★ rating across 211 reviews due to Canvas detection complaints, broken in-page buttons, and recurring $19.99/mo LemonSqueezy charges. Despite the new name, the extension ID and v3.0.5 codebase remain identical."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is College Tools' 'Camouflage Mode' undetectable on Canvas?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. 'Camouflage Mode' only changes the visual CSS color scheme of its injected answer box. Under the hood, College Tools v3.0.5 injects 24 JavaScript files (including legacy jquery-3.1.1.min.js and lottie.min.js) across all_frames: true, exposes content-styles.css in web_accessible_resources, and fires window.blur whenever you open its Alt+Shift+2 SidePanel."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why does the College Tools manifest exclude 29 US banking websites?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Because College Tools requests broad 'cookies', 'tabs', and '<all_urls>' permissions and injects 24 scripts into every webpage you visit, it interfered with online banking sessions—forcing the developer to hardcode 29 financial domains (Chase, Bank of America, Wells Fargo, PayPal, Capital One, Mercury, etc.) into its manifest.json exclude_matches array."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does College Tools pricing compare to ExamGhost in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "College Tools offers a 3-day trial that auto-converts into a recurring subscription (~$9.99–$19.99/month or $59.99+/year via LemonSqueezy) with no one-time lifetime pass. ExamGhost gives you 50 Free Solves upfront with zero credit card required, plus $19/mo Monthly, $99/yr Academic Year ($8.25/mo), or $199 Lifetime."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-sky-200/60 selection:text-ink font-sans">
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
                        <span className="text-ink font-semibold">College Tools vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: The CollegeTools.io -> Mindko Rebrand Investigation */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-[#bfe3f6] p-6 sm:p-12 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-sky-950 text-[#bfe3f6] text-[11px] font-bold uppercase tracking-wider">
                                    2026 Rebrand &amp; Manifest Investigation
                                </span>
                                <span className="hidden sm:inline-block text-xs text-ink/70 font-mono">
                                    collegetools.io → mindko.com (v3.0.5)
                                </span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-rose-900">
                                10,000 Users · 3.17★ Chrome Store (211 Ratings)
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            {/* Left Column */}
                            <div className="lg:col-span-7">
                                <div className="inline-block px-3.5 py-1 rounded-full bg-sky-950/10 border border-sky-950/20 text-xs font-bold text-sky-950 mb-4">
                                    Same Chrome ID · 3.17★ Rating · 24 Injected Scripts · 29 Bank Exclusions
                                </div>
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    College Tools changed its name to Mindko—but kept the same 3.17★ extension.
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-5 font-normal">
                                    If you searched for <strong>College Tools (<code>collegetools.io</code>)</strong> and landed on <strong>Mindko</strong>, here is what happened: after accumulating a <strong>3.17★ rating across 211 Chrome Web Store reviews</strong> over Canvas detection flags and recurring 3-day trial charges, College Tools rebranded its domain—while keeping the exact same extension ID (<code>iiikmhonbbmbdjfokdmmncdohjionkmf</code>) that injects <strong>24 JavaScript files</strong> into every frame on the web.
                                </p>
                                <p className="text-sm sm:text-base text-sky-950 font-semibold leading-relaxed mb-8">
                                    Don&apos;t settle for CSS-only &ldquo;Camouflage Mode.&rdquo; ExamGhost runs inside an isolated Closed Shadow DOM v1 sandbox with 100% Focus Shield blur suppression—starting with <strong>50 Free Solves ($0, no credit card)</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
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

                            {/* Right Column: Rebrand Identity & Manifest Receipt Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-white p-5 sm:p-6 border border-black/10 shadow-lift space-y-3.5">
                                    <div className="flex items-center justify-between border-b border-black/10 pb-3">
                                        <span className="text-xs font-bold text-sky-950 uppercase tracking-wider flex items-center gap-1.5">
                                            <RefreshCw className="w-4 h-4 text-sky-700" />
                                            College Tools → Mindko Forensic Trail
                                        </span>
                                        <span className="text-[11px] font-mono text-ink-muted">v3.0.5 (3.27MiB)</span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-rose-800 mb-0.5">
                                            1. Identical Chrome Store ID &amp; 3.17★ Rating:
                                        </div>
                                        <p className="text-rose-950 font-semibold italic">
                                            &ldquo;Homework Solver by Mindko (formerly College Tools) · ID: iiikmhonbbmbdjfokdmmncdohjionkmf · 3.17 out of 5 (211 reviews).&rdquo;
                                        </p>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-amber-900 mb-0.5">
                                            2. &ldquo;Camouflage Mode&rdquo; = 24 Injected JS Files:
                                        </div>
                                        <p className="text-amber-950 font-semibold italic">
                                            &ldquo;Injects jquery-3.1.1.min.js, lottie.min.js, answer-box-init.or414fgb.js &amp; content-styles.css across all_frames: true.&rdquo;
                                        </p>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-slate-100 border border-slate-300 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-slate-800 mb-0.5">
                                            3. 29 US Banks Hardcoded in exclude_matches:
                                        </div>
                                        <p className="text-slate-900 font-semibold italic">
                                            &ldquo;Requests cookies + &lt;all_urls&gt; permissions; hardcodes Chase, BofA, Wells Fargo, PayPal &amp; 25 other banks to prevent script breakage.&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Metric Ribbon */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-black/10 relative z-10 text-xs">
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Verified Store Rating</span>
                                <span className="font-bold text-emerald-800">ExamGhost: 4.9★ Stealth Suite</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">College Tools: 3.17★ (211 reviews)</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Stealth Implementation</span>
                                <span className="font-bold text-emerald-800">Closed Shadow DOM + 1px Dot</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">College Tools: CSS &ldquo;Camouflage&rdquo; + 24 JS</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Browser Permissions</span>
                                <span className="font-bold text-emerald-800">Zero Cookie Scraping</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">College Tools: cookies + 29 bank blocks</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Trial &amp; Pricing</span>
                                <span className="font-bold text-emerald-800">50 Free Solves ($0 No Card)</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">College Tools: 3-day trial → auto-bill</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE 3-TAB COLLEGE TOOLS REBRAND & MANIFEST SWITCHER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Interactive College Tools Breakdown">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-sky-100 border border-sky-200 text-sky-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Deep Manifest Inspection
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink mb-2">
                                Why Rebranding to Mindko Didn&apos;t Fix College Tools&apos; Code
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Inspect the three technical flaws inside College Tools v3.0.5 that remain unchanged after its domain switch.
                            </p>
                        </div>

                        {/* Hidden Radio Inputs */}
                        <input type="radio" name="ct_tabs" id="ct_camo" className="sr-only peer/ctcamo" defaultChecked />
                        <input type="radio" name="ct_tabs" id="ct_banks" className="sr-only peer/ctbanks" />
                        <input type="radio" name="ct_tabs" id="ct_billing" className="sr-only peer/ctbilling" />

                        {/* Tab Labels */}
                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#eef6fb] border border-sky-950/10 mb-8">
                            <label
                                htmlFor="ct_camo"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/ctcamo:bg-ink peer-checked/ctcamo:text-white peer-checked/ctcamo:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">1. &ldquo;Camouflage Mode&rdquo; Illusion</div>
                                <div className="text-[11px] opacity-75 mt-0.5">24 injected scripts + Alt+Shift+2 blur</div>
                            </label>
                            <label
                                htmlFor="ct_banks"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/ctbanks:bg-ink peer-checked/ctbanks:text-white peer-checked/ctbanks:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">2. Why 29 Banks Are Excluded</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Global jQuery 3.1.1 + cookies permission</div>
                            </label>
                            <label
                                htmlFor="ct_billing"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/ctbilling:bg-ink peer-checked/ctbilling:text-white peer-checked/ctbilling:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">3. 3.17★ Reviews &amp; 3-Day Trial</div>
                                <div className="text-[11px] opacity-75 mt-0.5">LemonSqueezy auto-billing vs 50 Free Solves</div>
                            </label>
                        </div>

                        {/* TAB 1: Camouflage Mode Illusion */}
                        <div className="hidden peer-checked/ctcamo:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Code2 className="w-3.5 h-3.5" />
                                        College Tools: CSS-Only &ldquo;Camouflage&rdquo; Over 24 Scripts
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Changing box colors doesn&apos;t hide 24 content scripts from Canvas
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        College Tools gained popularity by marketing <strong>&ldquo;Camouflage Mode&rdquo;</strong>—claiming it made answers blend into your LMS page. In reality, its v3.0.5 manifest injects <strong>24 separate JavaScript files</strong> (including <code>jquery-3.1.1.min.js</code>, <code>lottie.min.js</code>, and <code>answer-box-init.or414fgb.js</code>) plus <code>content-styles.css</code> across <code>all_frames: true</code>.
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        Worse, opening its <code>Alt+Shift+2</code> AI SidePanel (<code>pages/standalone/side-panel.html</code>) or clicking its injected question buttons shifts window focus and logs <code>window.blur</code> in Canvas SpeedGrader.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Footprint: 24 injected JS files + web_accessible_resources + SidePanel blur
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <EyeOff className="w-3.5 h-3.5" />
                                        ExamGhost: True Closed Shadow DOM v1 Encapsulation
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Zero jQuery pollution. Zero exposed stylesheets. Zero blur flags.
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost never injects legacy jQuery or global stylesheets into your exam DOM. Our UI is isolated inside a native <code>attachShadow(&#123; mode: &apos;closed&apos; &#125;)</code> root while Focus Shield blocks 100% of <code>window.blur</code> and <code>visibilitychange</code> events.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Footprint: 0 Host DOM Mutations · 0 SpeedGrader Flags
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: Why 29 Banks Are Excluded */}
                        <div className="hidden peer-checked/ctbanks:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Lock className="w-3.5 h-3.5" />
                                        College Tools: Broad Cookies Permission + 29 Bank Exclusions
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Why does a homework extension need a hardcoded list of 29 US banks?
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Because College Tools v3.0.5 requests <code>cookies</code>, <code>tabs</code>, and <code>&lt;all_urls&gt;</code> permissions and runs its 24 scripts on every website you visit, it interfered with financial portals—forcing the developers to hardcode <strong>29 banking domains</strong> (<code>chase.com</code>, <code>bankofamerica.com</code>, <code>wellsfargo.com</code>, <code>paypal.com</code>, <code>mercury.com</code>, etc.) into <code>exclude_matches</code>.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Permissions: cookies + &lt;all_urls&gt; across every non-excluded tab
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        ExamGhost: Scoped LMS Execution &amp; Zero Cookie Harvesting
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Never touches your banking tabs or browser cookies
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost never requests access to your browser cookies and never injects legacy libraries into your personal browsing tabs. It activates strictly when you invoke it on your coursework.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Permissions: 0 Cookie Access · Strict Ephemeral Privacy
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: 3.17★ Reviews & 3-Day Trial */}
                        <div className="hidden peer-checked/ctbilling:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <AlertTriangle className="w-3.5 h-3.5" />
                                        College Tools: 3.17★ Chrome Store Rating (211 Reviews)
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        3-day trial auto-conversions and recurring LemonSqueezy charges
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        While the College Tools / Mindko landing page advertises a 4.8★ rating badge, its actual Google Chrome Web Store listing sits at <strong>3.17★ across 211 verified student reviews</strong>—dominated by complaints over its 3-day trial auto-converting into recurring <strong>$9.99–$19.99/month</strong> or <strong>$59.99+/year</strong> charges and broken Canvas New Quizzes buttons.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Store Rating: 3.17★ (211 reviews) · Recurring subscription lock-in
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <Zap className="w-3.5 h-3.5" />
                                        ExamGhost: 50 Free Solves ($0 No Card) + Honest Pricing
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Test 50 real exam questions free—no 3-day credit card timer
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        We never ask for a credit card to unlock a 72-hour trial timer. You get <strong>50 Free Solves</strong> upfront, and when you&apos;re ready to upgrade, choose between Monthly, Academic Year, or a one-time Lifetime Pass.
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
                                    Pricing: 50 Free Solves ($0) · 14-Day Money-Back Guarantee
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
                                College Tools &ldquo;Camouflage Mode&rdquo; vs ExamGhost in SpeedGrader
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-300">
                                Why changing popup CSS colors in College Tools v3.0.5 still triggers Canvas SpeedGrader telemetry.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* College Tools Log */}
                            <div className="rounded-2xl bg-slate-900 border border-rose-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-rose-500/20 text-rose-300 font-bold">
                                    <span>College Tools / Mindko v3.0.5</span>
                                    <span className="text-[10px] bg-rose-950 text-rose-200 px-2 py-0.5 rounded border border-rose-500/40">FLAGGED</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">15:00:12 — Started quiz attempt</div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        15:00:13 — 24 content scripts + content-styles.css injected
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Exposes web_accessible_resources to &lt;all_urls&gt;</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        15:01:04 — Stopped viewing the Canvas quiz (0:27)
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Triggered by Alt+Shift+2 AI SidePanel / injected button click</span>
                                    </div>
                                    <div className="text-slate-300">15:01:31 — Resumed viewing quiz</div>
                                </div>
                            </div>

                            {/* ExamGhost Log */}
                            <div className="rounded-2xl bg-slate-900 border border-emerald-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/20 text-emerald-300 font-bold">
                                    <span>ExamGhost (Focus Shield Active)</span>
                                    <span className="text-[10px] bg-emerald-950 text-emerald-200 px-2 py-0.5 rounded border border-emerald-500/40">100% CLEAN</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">15:00:12 — Started quiz attempt</div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        15:00:54 — Answered Question 1 (Normal human pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Closed Shadow DOM · 0 exposed scripts or stylesheets</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        15:01:39 — Answered Question 2 (Normal human pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Focus Shield active · 0 window.blur events</span>
                                    </div>
                                    <div className="text-slate-300">15:02:21 — Answered Question 3</div>
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
                                Complete technical comparison between ExamGhost and College Tools / Mindko (v3.0.5).
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black/10">
                                        <th className="py-3.5 px-4 font-bold text-ink">Feature / Capability</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50 rounded-t-xl">ExamGhost</th>
                                        <th className="py-3.5 px-4 font-bold text-ink-muted">College Tools (collegetools.io / Mindko)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Verified Chrome Web Store Rating</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 4.9★ Verified Stealth Suite</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ 3.17★ (211 ratings · 10,000 users)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Stealth Architecture</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Closed Shadow DOM + 1px Corner Dot</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ CSS &ldquo;Camouflage Mode&rdquo; + 24 injected JS files</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Focus Shield (Window Blur Suppression)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 100% Intercepted (No SpeedGrader flags)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Alt+Shift+2 SidePanel fires window.blur</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Browser Cookie &amp; Banking Isolation</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Zero Cookie Permissions Requested</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Requests cookies + hardcodes 29 bank exclusions</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Free Starter Allowance</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 50 Free Solves ($0, No Card Needed)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ 3-Day Trial (Requires credit card upfront)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Pricing &amp; Lifetime Option</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ $19/mo · $99/yr ($8.25/mo) · $199 Lifetime</td>
                                        <td className="py-3.5 px-4 text-ink-muted">$9.99–$19.99/mo or $59.99+/yr (No Lifetime)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store Manifest & Domain Audit */}
                        <details className="mt-6 group rounded-2xl bg-[#faf7f2] border border-black/10 p-4 text-xs">
                            <summary className="font-mono font-bold text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (College Tools)</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="mt-3 pt-3 border-t border-black/10 grid sm:grid-cols-2 gap-3 font-mono text-[11px] text-ink-secondary">
                                <div>
                                    <span className="text-ink font-bold block">Chrome Extension ID &amp; Rebrand:</span>
                                    Homework Solver by Mindko (formerly College Tools) v3.0.5 (<code>iiikmhonbbmbdjfokdmmncdohjionkmf</code> · 3.27MiB)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Legacy &amp; Current Domains:</span>
                                    <code>collegetools.io</code> → redirects/rebranded to <code>mindko.com</code> (3.17★ · 211 reviews)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Content Scripts &amp; Libraries:</span>
                                    24 JS files injected across <code>all_frames: true</code> including <code>jquery-3.1.1.min.js</code> &amp; <code>lottie.min.js</code>
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Permissions &amp; Exclusions:</span>
                                    Requests <code>cookies</code>, <code>tabs</code>, <code>sidePanel</code>, <code>&lt;all_urls&gt;</code> · Excludes 29 US banking domains
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* STUDENT CASE STUDY / SOCIAL PROOF */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Student Review">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#bfe3f6]/45 via-white to-white border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-xs font-bold text-ink ml-2">Verified Student Migration</span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-relaxed mb-6">
                            &ldquo;I used College Tools freshman year before they changed their name to Mindko, and its Camouflage Mode still got me flagged on a Canvas quiz because opening the Alt+Shift+2 sidepanel logged a blur event. Plus they auto-billed my card $19.99 after the 3-day trial. ExamGhost gave me 50 free solves with no card required and true Shadow DOM stealth.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-sky-900 text-white font-bold flex items-center justify-center text-sm">
                                TR
                            </div>
                            <div>
                                <div className="text-sm font-bold text-ink">Tyler R.</div>
                                <div className="text-xs text-ink-muted">Business Administration · Indiana University</div>
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
                            Frequently Asked Questions: College Tools vs ExamGhost
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">What happened to College Tools (collegetools.io)?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                College Tools (<code>collegetools.io</code>) officially rebranded to Mindko (<code>mindko.com</code>) after its Chrome extension (&ldquo;Homework Solver by Mindko (formerly College Tools)&rdquo;, ID <code>iiikmhonbbmbdjfokdmmncdohjionkmf</code>) accumulated a <strong>3.17★ rating across 211 reviews</strong> due to Canvas detection complaints, broken in-page buttons, and recurring $19.99/mo LemonSqueezy charges. Despite the new name, the extension ID and v3.0.5 codebase remain identical.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Is College Tools&apos; &ldquo;Camouflage Mode&rdquo; undetectable on Canvas?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                No. &ldquo;Camouflage Mode&rdquo; only changes the visual CSS color scheme of its injected answer box. Under the hood, College Tools v3.0.5 injects 24 JavaScript files (including legacy <code>jquery-3.1.1.min.js</code> and <code>lottie.min.js</code>) across <code>all_frames: true</code>, exposes <code>content-styles.css</code> in <code>web_accessible_resources</code>, and fires <code>window.blur</code> whenever you open its <code>Alt+Shift+2</code> SidePanel.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Why does the College Tools manifest exclude 29 US banking websites?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Because College Tools requests broad <code>cookies</code>, <code>tabs</code>, and <code>&lt;all_urls&gt;</code> permissions and injects 24 scripts into every webpage you visit, it interfered with online banking sessions—forcing the developer to hardcode 29 financial domains (Chase, Bank of America, Wells Fargo, PayPal, Capital One, Mercury, etc.) into its <code>manifest.json</code> <code>exclude_matches</code> array.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">How does College Tools pricing compare to ExamGhost in 2026?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                College Tools offers a 3-day trial that auto-converts into a recurring subscription (~$9.99–$19.99/month or $59.99+/year via LemonSqueezy) with no one-time lifetime pass. ExamGhost gives you <strong>50 Free Solves</strong> upfront with zero credit card required, plus <strong>$19/mo</strong> Monthly, <strong>$99/yr</strong> Academic Year ($8.25/mo), or <strong>$199 Lifetime</strong>.
                            </p>
                        </details>
                    </div>
                </section>

                {/* BESPOKE PASTEL CONVERSION STRIP + RELATED COMPARISONS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12" aria-label="Get Started and Related Comparisons">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#bfe3f6] via-[#d9effb] to-[#f4ede2] border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-black/10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-sky-950 uppercase tracking-wider mb-2">
                                    True Closed Shadow DOM · Zero Cookie Scraping
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    A new domain name doesn&apos;t hide 24 injected scripts.
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
                                    <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
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
                                <Link prefetch={false} href="/mindko-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>Mindko vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/bettercampus-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>BetterCampus vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/coursology-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>Coursology vs ExamGhost</span>
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
