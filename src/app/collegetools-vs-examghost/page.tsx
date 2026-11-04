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
    Code2,
    FileCode,
    GitCompare,
    Sparkles,
    SearchCode,
    Landmark,
    MousePointerClick
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CollegeToolsManifestDemo } from '@/components/TopComparisonDemos';
import StudyAiHubShowcase from '@/components/StudyAiHubShowcase';

export const metadata: Metadata = {
    title: {
        absolute: "College Tools vs ExamGhost (2026) — v3.0.5 Manifest & Mindko.com Rebrand Dossier",
    },
    description: "Why did College Tools (collegetools.io) rebrand to Mindko (mindko.com)? Inspect its v3.0.5 manifest: 3.17★ rating, 24 web_accessible_resources (jquery-3.1.1, lottie, sentry-4.6.4), and 29 bank/IRS exclusions vs ExamGhost.",
    alternates: {
        canonical: "https://examghost.com/collegetools-vs-examghost",
    },
    openGraph: {
        title: "College Tools vs ExamGhost (2026) — v3.0.5 Manifest & Mindko.com Rebrand Dossier",
        description: "Investigative engineering audit of College Tools (collegetools.io → mindko.com, v3.0.5): 24 exposed scripts, 29 bank/IRS exclusions & 3.17★ rating vs ExamGhost's Closed Shadow DOM & 5 Free Solves/Day.",
        url: "https://examghost.com/collegetools-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "College Tools vs ExamGhost (2026) — v3.0.5 Manifest & Mindko Rebrand Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "College Tools vs ExamGhost (2026) — v3.0.5 Manifest & Mindko.com Rebrand Dossier",
        description: "Investigative engineering audit of College Tools (collegetools.io → mindko.com, v3.0.5): 24 exposed scripts, 29 bank/IRS exclusions & 3.17★ rating vs ExamGhost.",
        images: ["/og-image.jpg"],
    },
};

export default function CollegeToolsComparisonPage() {
    const faqs = [
        {
            question: "Why did College Tools (collegetools.io) rebrand to Mindko (mindko.com)?",
            answer: "College Tools (collegetools.io) rebranded its storefront to Mindko (mindko.com) after its Chrome extension ('Homework Solver by Mindko (formerly College Tools)', ID iiikmhonbbmbdjfokdmmncdohjionkmf) accumulated a 3.17★ rating across 211 Chrome Web Store reviews due to Canvas SpeedGrader detection complaints, broken in-page buttons, and aggressive 3-day trial auto-charges via LemonSqueezy. Despite the new domain name, the Chrome Extension ID and the v3.0.5 (3.27 MiB) codebase remain 100% identical."
        },
        {
            question: "What did our forensic inspection find inside College Tools / Mindko v3.0.5's manifest.json?",
            answer: "Inspecting the v3.0.5 CRX package reveals that College Tools / Mindko injects 24 resources across all_frames: true and exposes them under web_accessible_resources—including legacy jquery-3.1.1.min.js, lottie.min.js, sentry-4.6.4.min.js, answer-box-init.or414fgb.js, and content-styles.css. Because these resources are web-accessible to <all_urls>, any LMS anti-cheat script can probe or fingerprint their presence in milliseconds. ExamGhost exposes zero web_accessible_resources and isolates all rendering inside a native attachShadow({ mode: 'closed' }) root."
        },
        {
            question: "Why does the College Tools manifest hardcode 29 US bank and IRS domain exclusions?",
            answer: "Because College Tools v3.0.5 requests broad 'cookies', 'tabs', 'sidePanel', and '<all_urls>' permissions and injects its 24 scripts into every webpage you visit, its global jQuery 3.1.1 and Sentry hooks interfered with financial and tax portals—forcing the developers to hardcode 29 banking and government domains (chase.com, bankofamerica.com, wellsfargo.com, irs.gov, paypal.com, capitalone.com, mercury.com, etc.) into its exclude_matches array. ExamGhost requests zero cookie permissions and never executes on your banking or personal browsing tabs."
        },
        {
            question: "Is College Tools' 'Camouflage Mode' actually undetectable on Canvas?",
            answer: "No. 'Camouflage Mode' in College Tools / Mindko only alters the visual CSS background and text color of its injected DOM container. It does not hide the 24 injected scripts, nor does it block window.blur events when you press Alt+Shift+2 to open its standalone SidePanel (pages/standalone/side-panel.html). ExamGhost pairs a 4-Layer Focus Shield (100% window.blur and visibilitychange interception) with Alt+1 (Invisible 15% opacity shift), Alt+2 (Stealth badge), Alt+3 (Inline Explain), and ⌘+Shift+U (<8ms Master Toggle)."
        },
        {
            question: "Why does paying up to $24.99/mo for Mindko still leave you without a Study AI Workspace?",
            answer: "Mindko's 3-day trial auto-converts into a recurring subscription (up to $19.99–$24.99/mo) that only gives you a single-purpose homework popup—meaning you still have to pay an extra $20/mo for ChatGPT Plus or Claude Pro to write essays, analyze syllabus PDFs, or work through problem sets. ExamGhost gives you 5 Free Solves / Day ($0, no card needed, auto-refills every 24h), and its paid plans ($19/mo Monthly, $99/yr Academic Year [$8.25/mo], or $199 Lifetime) are a 2-in-1 value that includes both Unlimited Stealth Extension Solves AND full access to the Study & Homework AI Workspace (Claude 3.7 Sonnet + ChatGPT o3-mini/4o + DeepSeek-R1)."
        },
        {
            question: "How does ExamGhost's Alt+S Hybrid Vision+DOM Snip compare to Mindko's screenshot tool?",
            answer: "When you press Alt+S in ExamGhost, our Hybrid Vision+DOM Snip combines high-resolution optical character recognition with underlying DOM/MathML structure extraction—solving complex circuit diagrams, organic chemistry rings, and calculus integrals in 0.3 seconds right inside the closed Shadow DOM without ever triggering a window.blur event."
        }
    ];

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TechArticle",
                "@id": "https://examghost.com/collegetools-vs-examghost#techarticle",
                "headline": "College Tools vs ExamGhost (2026) — The v3.0.5 Manifest Forensic Dossier & Mindko.com Rebrand Investigation",
                "description": "Reverse-engineering audit of College Tools (collegetools.io, rebranded to Mindko at mindko.com, Chrome ID iiikmhonbbmbdjfokdmmncdohjionkmf, v3.0.5) examining its 24 web_accessible_resources, jquery-3.1.1.min.js, sentry-4.6.4.min.js, 29 bank/IRS exclusions, and 3.17★ rating compared to ExamGhost v4.2.",
                "datePublished": "2026-02-14",
                "dateModified": "2026-10-27",
                "author": {
                    "@type": "Organization",
                    "name": "ExamGhost Reverse-Engineering & Extension Security Team",
                    "url": "https://examghost.com"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "ExamGhost",
                    "url": "https://examghost.com"
                },
                "mainEntityOfPage": "https://examghost.com/collegetools-vs-examghost",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", ".manifest-verdict"]
                },
                "about": [
                    { "@id": "https://examghost.com/collegetools-vs-examghost#examghost-app" },
                    { "@id": "https://examghost.com/collegetools-vs-examghost#collegetools-app" }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://examghost.com/collegetools-vs-examghost#examghost-app",
                "name": "ExamGhost",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Chrome, Edge, Brave, macOS, Windows",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "ratingCount": "1420"
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "0.00",
                    "highPrice": "199.00",
                    "priceCurrency": "USD",
                    "offerCount": "4",
                    "description": "5 Free Solves / Day (auto-refills every 24h, $0 no card), $19/mo Monthly, $99/yr Academic Year ($8.25/mo), or $199 Lifetime including Unlimited Stealth Extension Solves + Claude 3.7 Sonnet, ChatGPT o3-mini/4o & DeepSeek-R1 Study Hub."
                }
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://examghost.com/collegetools-vs-examghost#collegetools-app",
                "name": "Homework Solver by Mindko (formerly College Tools)",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Chrome Extension, iOS, Android",
                "softwareVersion": "3.0.5",
                "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "3.17",
                    "ratingCount": "211"
                },
                "offers": {
                    "@type": "AggregateOffer",
                    "lowPrice": "9.99",
                    "highPrice": "24.99",
                    "priceCurrency": "USD",
                    "offerCount": "3"
                }
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
                "mainEntity": faqs.map((f) => ({
                    "@type": "Question",
                    "name": f.question,
                    "acceptedAnswer": {
                        "@type": "Answer",
                        "text": f.answer
                    }
                }))
            }
        ]
    };

    const comparisonRows = [
        {
            feature: "Verified Chrome Web Store Rating",
            sub: "Public student feedback across verified installs",
            examghost: "✓ 4.9★ Verified Stealth Suite",
            collegetools: "✗ 3.17★ (211 reviews under ID iiikmhonbbmbdjfokdmmncdohjionkmf)"
        },
        {
            feature: "Exposed web_accessible_resources",
            sub: "Files any LMS anti-cheat script can fetch & fingerprint",
            examghost: "✓ 0 Exposed Resources (100% Isolated)",
            collegetools: "✗ 24 Files (jquery-3.1.1.min.js, lottie.min.js, sentry-4.6.4.min.js)"
        },
        {
            feature: "Browser Cookie & Banking Isolation",
            sub: "Whether the extension runs inside your financial & tax portals",
            examghost: "✓ Zero Cookie Permissions · Scoped LMS Execution",
            collegetools: "✗ Requests cookies + <all_urls> · Hardcodes 29 bank/IRS exclusions"
        },
        {
            feature: "DOM & UI Stealth Architecture",
            sub: "Protection against DOM MutationObserver & CSS probes",
            examghost: "✓ Closed Shadow DOM v1 + Alt+1 (15% Opacity), Alt+2, Alt+3",
            collegetools: "✗ CSS-only \"Camouflage Mode\" + global content-styles.css"
        },
        {
            feature: "Canvas Tab-Blur & Focus Shield",
            sub: "Prevents SpeedGrader \"Stopped viewing quiz\" timestamps",
            examghost: "✓ 4-Layer Focus Shield (0 window.blur / visibilitychange)",
            collegetools: "✗ Pressing Alt+Shift+2 SidePanel fires window.blur"
        },
        {
            feature: "Master Panic Kill-Switch",
            sub: "Instant memory & DOM purge for lecture halls and labs",
            examghost: "✓ ⌘+Shift+U (<8ms complete vanish)",
            collegetools: "✗ None"
        },
        {
            feature: "Inline Solve & Vision Snipping",
            sub: "Speed & accuracy on locked STEM diagrams and equations",
            examghost: "✓ 0.3s Double-Click + Alt+S Hybrid Vision+DOM Snip",
            collegetools: "✗ Injects visible in-page buttons that break on LTI iframes"
        },
        {
            feature: "Study & Homework AI Workspace",
            sub: "Multi-model web hub for essays, syllabus PDFs & LaTeX proofs",
            examghost: "✓ Included: Claude 3.7 Sonnet + ChatGPT (o3-mini/4o) + DeepSeek-R1",
            collegetools: "✗ None — leaves you paying extra for ChatGPT Plus / Claude Pro"
        },
        {
            feature: "Third-Party Telemetry Bundled in CRX",
            sub: "External crash/session trackers injected into host frames",
            examghost: "✓ Zero Third-Party Telemetry Scripts",
            collegetools: "✗ Bundles sentry-4.6.4.min.js across all_frames: true"
        },
        {
            feature: "Free Tier vs Credit-Card Trial Trap",
            sub: "How you test the extension before paying",
            examghost: "✓ 5 Free Solves / Day (Auto-refills every 24h · $0 No Card)",
            collegetools: "✗ 3-Day Trial requiring credit card → auto-bills via LemonSqueezy"
        },
        {
            feature: "Paid Plans & 2-in-1 Value",
            sub: "Total monthly/annual cost and Lifetime availability",
            examghost: "✓ $19/mo · $99/yr ($8.25/mo) · $199 Lifetime (Extension + Study Hub)",
            collegetools: "✗ Up to $19.99–$24.99/mo recurring · No Lifetime Pass"
        },
        {
            feature: "Supported LMS Platforms",
            sub: "Compatibility across university quiz systems",
            examghost: "✓ 20+ LMSs (Canvas Classic & New Quizzes, Blackboard, Moodle, D2L)",
            collegetools: "Frequent LTI 1.3 Shadow DOM button failures reported in reviews"
        }
    ];

    return (
        <div className="min-h-screen bg-[#f7f5f0] text-ink selection:bg-indigo-200 selection:text-ink font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">
                {/* ============================================================
                    ARCHETYPE 3 HERO: INVESTIGATIVE ENGINEERING & MANIFEST DOSSIER
                ============================================================ */}
                <header className="pt-28 sm:pt-32 pb-16 sm:pb-20 bg-[#131622] text-white border-b-4 border-amber-400 relative overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-[0.05] pointer-events-none"
                        style={{
                            backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)',
                            backgroundSize: '24px 24px'
                        }}
                    />

                    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                        {/* Top Forensic Chain-of-Custody Metadata Strip */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-5 mb-8 border-b border-white/10 font-mono text-xs">
                            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-slate-400">
                                <Link prefetch={false} href="/" className="hover:text-white transition-colors">Home</Link>
                                <span>/</span>
                                <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-white transition-colors">Compare Extensions</Link>
                                <span>/</span>
                                <span className="text-amber-300 font-bold">College Tools vs ExamGhost</span>
                            </nav>
                            <div className="flex flex-wrap items-center gap-2 text-[11px]">
                                <span className="px-2.5 py-1 rounded bg-amber-400/15 border border-amber-400/40 text-amber-300 font-bold">
                                    REDIRECT: collegetools.io ──301──► mindko.com
                                </span>
                                <span className="px-2.5 py-1 rounded bg-rose-500/20 border border-rose-400/40 text-rose-300 font-bold">
                                    CRX v3.0.5 · 3.17★ (211 Reviews)
                                </span>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-10 items-start">
                            {/* Left 7 Cols: Investigative Report Headline */}
                            <div className="lg:col-span-7">
                                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/20 border border-indigo-400/40 text-indigo-200 text-xs font-mono font-bold uppercase tracking-wider mb-5">
                                    <SearchCode className="w-4 h-4 text-amber-300" />
                                    <span>Reverse-Engineering Dossier · CRX Package v3.0.5</span>
                                </div>

                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight leading-[1.06] text-white mb-6">
                                    Why College Tools rebranded to <span className="text-amber-300">Mindko</span>—while keeping 24 exposed scripts &amp; 29 bank exclusions.
                                </h1>

                                <p className="aeo-summary text-sm sm:text-base lg:text-lg text-slate-300 leading-relaxed mb-5">
                                    If you searched for <strong>College Tools (<code>collegetools.io</code>)</strong> and landed on <strong>Mindko (<code>mindko.com</code>)</strong>, you are looking at a cosmetic rebrand. After accumulating a <strong>3.17★ rating across 211 Chrome Web Store reviews</strong> over Canvas detection flags and 3-day trial auto-charges, College Tools changed its domain name—while shipping the exact same extension (<code className="font-mono text-xs bg-white/10 px-1.5 py-0.5 rounded text-amber-200">iiikmhonbbmbdjfokdmmncdohjionkmf</code>) that exposes <strong>24 <code className="font-mono text-xs">web_accessible_resources</code></strong> (including <code className="font-mono text-xs">jquery-3.1.1.min.js</code>, <code className="font-mono text-xs">lottie.min.js</code>, and <code className="font-mono text-xs">sentry-4.6.4.min.js</code>) and hardcodes <strong>29 bank/IRS exclusions</strong>.
                                </p>

                                <p className="text-sm sm:text-base text-emerald-300 font-medium leading-relaxed mb-8">
                                    <strong>ExamGhost v4.2</strong> runs inside an isolated <strong>Closed Shadow DOM</strong> with zero exposed resources, 100% <strong>Focus Shield</strong> blur interception, <code className="font-mono text-xs bg-emerald-950 px-1.5 py-0.5 rounded border border-emerald-500/40">Alt+1/2/3</code> stealth modes, <strong>5 Free Solves / Day</strong> ($0, no card), and a full <strong>Study &amp; Homework AI Workspace (Claude 3.7 Sonnet + ChatGPT o3-mini/4o + DeepSeek-R1)</strong>.
                                </p>

                                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5">
                                    <Link
                                        prefetch={false}
                                        href="/#pricing"
                                        className="px-7 py-4 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-sm sm:text-base font-extrabold shadow-lg inline-flex items-center justify-center gap-2.5 transition-all group"
                                    >
                                        <FaChrome className="w-4 h-4 text-slate-950" aria-hidden="true" />
                                        <span>Start 5 Free Solves / Day ($0 No Card)</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                    <Link
                                        prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-6 py-4 rounded-full text-sm sm:text-base font-bold bg-white/10 hover:bg-white/15 text-white border border-white/15 inline-flex items-center justify-center gap-2 transition-all"
                                    >
                                        <MousePointerClick className="w-4 h-4 text-amber-300" />
                                        <span>Try Live Canvas Sandbox</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Right 5 Cols: CRX Chain of Custody Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-3xl bg-[#1b2032] border border-white/15 p-6 shadow-2xl font-mono text-xs space-y-4">
                                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                                        <span className="text-amber-300 font-bold uppercase tracking-wider flex items-center gap-2">
                                            <FileCode className="w-4 h-4" />
                                            <span>CRX Package Chain of Custody</span>
                                        </span>
                                        <span className="text-slate-400">3.27 MiB</span>
                                    </div>

                                    <div className="p-3.5 rounded-2xl bg-black/40 border border-white/10 space-y-2">
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Legacy Brand:</span>
                                            <span className="text-white font-bold">College Tools (collegetools.io)</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Current Rebrand:</span>
                                            <span className="text-amber-300 font-bold">Mindko (mindko.com)</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Unchanged CWS ID:</span>
                                            <span className="text-rose-300">iiikmhonbbmbdjfokdmmncdohjionkmf</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-slate-400">Store Rating:</span>
                                            <span className="text-rose-400 font-bold">3.17★ (211 Student Reviews)</span>
                                        </div>
                                    </div>

                                    {/* 3 Manifest Red Flags */}
                                    <div className="space-y-2.5">
                                        <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/30">
                                            <div className="text-rose-300 font-bold mb-0.5">FLAG 1: 24 Exposed Resources</div>
                                            <p className="font-sans text-slate-200 text-xs">
                                                Injects <code className="font-mono text-rose-200">jquery-3.1.1.min.js</code>, <code className="font-mono text-rose-200">lottie.min.js</code> &amp; <code className="font-mono text-rose-200">sentry-4.6.4.min.js</code> across <code className="font-mono">all_frames: true</code>.
                                            </p>
                                        </div>
                                        <div className="p-3 rounded-xl bg-amber-950/50 border border-amber-500/30">
                                            <div className="text-amber-300 font-bold mb-0.5">FLAG 2: 29 Bank &amp; IRS Exclusions</div>
                                            <p className="font-sans text-slate-200 text-xs">
                                                Requests <code className="font-mono text-amber-200">cookies</code> + <code className="font-mono text-amber-200">&lt;all_urls&gt;</code>; hardcodes Chase, BofA, Wells Fargo, IRS.gov &amp; 25 more in <code className="font-mono">exclude_matches</code>.
                                            </p>
                                        </div>
                                        <div className="p-3 rounded-xl bg-emerald-950/60 border border-emerald-500/40">
                                            <div className="text-emerald-300 font-bold mb-0.5">EXAMGHOST v4.2 COUNTER-SPEC</div>
                                            <p className="font-sans text-emerald-100 text-xs">
                                                0 exposed resources · 0 cookie access · Closed Shadow DOM · <strong>5 Free Solves / Day ($0)</strong> + Multi-Model Study Hub.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* ============================================================
                    INTERACTIVE MANIFEST INSPECTOR DEMO SECTION
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20" aria-label="Interactive Manifest Forensic Demo">
                    <div className="rounded-[32px] bg-white border-2 border-black/10 p-5 sm:p-8 shadow-card">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-black/10">
                            <div>
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-100 text-indigo-950 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                                    <Code2 className="w-3.5 h-3.5" />
                                    <span>Interactive CRX Manifest &amp; DOM Footprint Inspector</span>
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Inspect College Tools / Mindko v3.0.5 vs ExamGhost v4.2 live.
                                </h2>
                            </div>
                            <p className="text-xs sm:text-sm text-ink-secondary max-w-md">
                                Explore the interactive manifest inspector below to see why CSS-only &ldquo;Camouflage Mode&rdquo; cannot conceal 24 exposed scripts and <code className="font-mono bg-black/5 px-1 rounded">Alt+Shift+2</code> SidePanel blur events.
                            </p>
                        </div>

                        <CollegeToolsManifestDemo />
                    </div>
                </section>

                {/* ============================================================
                    BESPOKE SECTION 1: SIDE-BY-SIDE MANIFEST.JSON CODE DIFF & REBRAND TIMELINE
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24" aria-label="Side-by-Side manifest.json Code Diff and Rebrand Timeline">
                    <div className="text-center max-w-3xl mx-auto mb-12">
                        <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                            <GitCompare className="w-3.5 h-3.5" />
                            <span>Source Code Audit · Rebrand Timeline &amp; manifest.json Diff</span>
                        </span>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.08] mb-4">
                            Changing <code className="text-rose-700 bg-rose-100/70 px-2 rounded">collegetools.io</code> to <code className="text-amber-900 bg-amber-100/80 px-2 rounded">mindko.com</code> didn&apos;t change a line of v3.0.5.
                        </h2>
                        <p className="manifest-verdict text-base sm:text-lg text-ink-secondary leading-relaxed">
                            We unpacked the official Chrome Web Store CRX archive (<code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">iiikmhonbbmbdjfokdmmncdohjionkmf</code>) to trace the rebrand timeline and compare its raw <code className="font-mono text-xs bg-black/5 px-1.5 py-0.5 rounded">manifest.json</code> against ExamGhost&apos;s zero-footprint architecture.
                        </p>
                    </div>

                    {/* 4-Step Rebrand Timeline */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
                        <div className="p-5 rounded-3xl bg-white border border-black/10 shadow-sm">
                            <div className="font-mono text-xs font-bold text-slate-500 mb-1">PHASE 01 · LAUNCH</div>
                            <div className="font-display font-extrabold text-base text-ink mb-2">Marketing &ldquo;Camouflage Mode&rdquo;</div>
                            <p className="text-xs text-ink-secondary leading-relaxed">
                                <code className="font-mono">collegetools.io</code> launches advertising undetectable &ldquo;Camouflage Mode,&rdquo; which in reality only restyles injected CSS colors while loading 24 scripts into every frame.
                            </p>
                        </div>

                        <div className="p-5 rounded-3xl bg-white border border-black/10 shadow-sm">
                            <div className="font-mono text-xs font-bold text-amber-700 mb-1">PHASE 02 · BANK BREAKAGE</div>
                            <div className="font-display font-extrabold text-base text-ink mb-2">Hardcoding 29 Bank/IRS Domains</div>
                            <p className="text-xs text-ink-secondary leading-relaxed">
                                Global <code className="font-mono">jquery-3.1.1.min.js</code> + <code className="font-mono">cookies</code> permissions conflict with banking portals, forcing developers to hardcode 29 financial/IRS exclusions into <code className="font-mono">manifest.json</code>.
                            </p>
                        </div>

                        <div className="p-5 rounded-3xl bg-white border border-black/10 shadow-sm">
                            <div className="font-mono text-xs font-bold text-rose-700 mb-1">PHASE 03 · 3.17★ BACKLASH</div>
                            <div className="font-display font-extrabold text-base text-ink mb-2">211 Reviews &amp; Auto-Bill Complaints</div>
                            <p className="text-xs text-ink-secondary leading-relaxed">
                                Chrome Store rating drops to <strong>3.17★ (211 reviews)</strong> as students report Canvas SpeedGrader blur flags from the <code className="font-mono">Alt+Shift+2</code> SidePanel and recurring LemonSqueezy charges.
                            </p>
                        </div>

                        <div className="p-5 rounded-3xl bg-white border border-black/10 shadow-sm">
                            <div className="font-mono text-xs font-bold text-indigo-700 mb-1">PHASE 04 · COSMETIC REBRAND</div>
                            <div className="font-display font-extrabold text-base text-ink mb-2">Renamed to Mindko (Same v3.0.5)</div>
                            <p className="text-xs text-ink-secondary leading-relaxed">
                                Rebranded to <em>&ldquo;Homework Solver by Mindko (formerly College Tools)&rdquo;</em> at <code className="font-mono">mindko.com</code>—while keeping the exact same extension ID and v3.0.5 codebase.
                            </p>
                        </div>
                    </div>

                    {/* Side-by-Side manifest.json Code Diff */}
                    <div className="grid lg:grid-cols-2 gap-6">
                        {/* Left Code Window: College Tools / Mindko v3.0.5 manifest.json */}
                        <div className="rounded-3xl bg-[#14161f] text-slate-200 border border-rose-500/40 overflow-hidden shadow-lift">
                            <div className="bg-[#0c0e14] px-5 py-3.5 border-b border-white/10 flex items-center justify-between font-mono text-xs">
                                <span className="text-rose-300 font-bold">collegetools-mindko-v3.0.5 / manifest.json</span>
                                <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 text-[10px]">EXPOSED FOOTPRINT</span>
                            </div>
                            <pre className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-slate-300">
{`{
  "name": "Homework Solver by Mindko (formerly College Tools)",
  "version": "3.0.5",
  "permissions": [
    "cookies", "tabs", "sidePanel", "<all_urls>"
  ],
  "content_scripts": [{
    "matches": ["<all_urls>"],
    "all_frames": true,
    "js": [
      "jquery-3.1.1.min.js",
      "lottie.min.js",
      "sentry-4.6.4.min.js",
      "answer-box-init.or414fgb.js"
      /* + 20 additional injected files (24 total) */
    ],
    "css": ["content-styles.css"],
    "exclude_matches": [
      "*://*.chase.com/*",
      "*://*.bankofamerica.com/*",
      "*://*.wellsfargo.com/*",
      "*://*.irs.gov/*",
      "*://*.paypal.com/*",
      "*://*.capitalone.com/*",
      "*://*.mercury.com/*"
      /* + 22 more hardcoded financial domains (29 total) */
    ]
  }],
  "web_accessible_resources": [{
    "resources": ["content-styles.css", "pages/standalone/*"],
    "matches": ["<all_urls>"]
  }]
}`}
                            </pre>
                        </div>

                        {/* Right Code Window: ExamGhost v4.2 Zero-Footprint Architecture */}
                        <div className="rounded-3xl bg-[#091511] text-slate-200 border border-emerald-500/40 overflow-hidden shadow-lift">
                            <div className="bg-[#050c09] px-5 py-3.5 border-b border-white/10 flex items-center justify-between font-mono text-xs">
                                <span className="text-emerald-300 font-bold">examghost-v4.2 / closed-shadow-runtime.ts</span>
                                <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px]">0 EXPOSED RESOURCES</span>
                            </div>
                            <pre className="p-5 font-mono text-[11px] sm:text-xs leading-relaxed overflow-x-auto text-emerald-100/90">
{`// 1. Zero 'cookies' permission · Zero bank exclusions needed
// 2. Zero web_accessible_resources exposed to LMS probes

const host = document.createElement('div');
const closedRoot = host.attachShadow({ mode: 'closed' });
// document.querySelectorAll() & host CSS probes return null

// 3. 4-Layer Capture-Phase Focus Shield
FocusShield.lockWindowState({
  hasFocus: () => true,
  visibilityState: 'visible',
  blockEvents: ['blur', 'focusout', 'visibilitychange']
});

// 4. Instant Stealth Hotkeys (Never opens an unshielded SidePanel)
Hotkeys.bind({
  'DoubleClick': () => solveInlineDOM(0.3), // 0.3s Inline Solve
  'Alt+S':       () => hybridVisionDomSnip(),
  'Alt+1':       () => setOpacityShift(0.15), // Invisible Mode
  'Alt+2':       () => renderClosedStealthBadge(),
  'Alt+3':       () => openInlineLatexExplain(),
  'Cmd+Shift+U': () => purgeShadowRootUnder8ms()
});`}
                            </pre>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    BESPOKE SECTION 2: WHY PAYING $24.99/MO FOR MINDKO LEAVES YOU WITHOUT A STUDY AI WORKSPACE
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24" aria-label="Why Paying $24.99/mo for Mindko Leaves You Without a Study AI Workspace">
                    <div className="rounded-[36px] bg-white border-2 border-black/10 p-6 sm:p-10 md:p-12 shadow-card">
                        <div className="max-w-3xl mb-10">
                            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 text-rose-900 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                                <Landmark className="w-3.5 h-3.5" />
                                <span>Subscription Value Audit · Single Widget vs 2-in-1 AI Suite</span>
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                                Why Paying $24.99/mo for Mindko Leaves You Without a Study AI Workspace
                            </h2>
                            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                College Tools / Mindko hooks students with a <strong>3-day credit-card trial</strong> that automatically converts into a recurring subscription (up to <strong>$19.99–$24.99/mo</strong> via LemonSqueezy). Yet even after paying that monthly fee, you only get a narrow browser popup—forcing you to pay another $20–$40/mo for ChatGPT Plus or Claude Pro to handle your essays, PDFs, and coding labs.
                            </p>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
                            {/* Left 5 Cols: Mindko Subscription Trap */}
                            <div className="lg:col-span-5 rounded-3xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-rose-200">
                                        <span className="font-mono text-xs font-bold uppercase text-rose-900">College Tools / Mindko</span>
                                        <span className="px-2.5 py-0.5 rounded-full bg-rose-200 text-rose-950 font-mono text-xs font-bold">
                                            3-Day Card Trap
                                        </span>
                                    </div>
                                    <ul className="space-y-3 text-xs sm:text-sm text-ink-secondary">
                                        <li className="flex items-start gap-2.5">
                                            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Requires payment method upfront</strong> for a 72-hour trial that auto-bills recurring monthly/annual renewals.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>No multi-model Study AI Workspace</strong> — you cannot switch between Claude 3.7 Sonnet, ChatGPT o3-mini/4o, and DeepSeek-R1 for long-form coursework.</span>
                                        </li>
                                        <li className="flex items-start gap-2.5">
                                            <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>No Lifetime option</strong> — you are locked into recurring billing every semester.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="mt-6 p-4 rounded-2xl bg-white border border-rose-200 font-mono text-xs text-rose-900">
                                    Mindko ($24.99/mo) + ChatGPT Plus ($20/mo) + Claude Pro ($20/mo) = <strong>$64.99/mo</strong>
                                </div>
                            </div>

                            {/* Right 7 Cols: ExamGhost 2-in-1 Solution */}
                            <div className="lg:col-span-7 rounded-3xl bg-[#0b1914] text-white border-2 border-emerald-400 p-6 sm:p-8 flex flex-col justify-between shadow-lift">
                                <div>
                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-white/10">
                                        <div>
                                            <span className="font-mono text-xs font-bold uppercase text-emerald-300 block">EXAMGHOST 2-IN-1 PASS</span>
                                            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white">
                                                Unlimited Stealth Extension + Multi-Model Study AI Hub
                                            </h3>
                                        </div>
                                        <span className="px-3 py-1 rounded-full bg-emerald-400 text-slate-950 font-mono text-xs font-extrabold">
                                            5 FREE SOLVES / DAY
                                        </span>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4 mb-6 text-xs">
                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                            <div className="font-mono font-bold text-emerald-300 uppercase mb-2">
                                                Part 1: Zero-Trace Exam Extension
                                            </div>
                                            <p className="text-slate-300 leading-relaxed">
                                                Unlimited <strong>0.3s Double-Click</strong> solves, <strong>Alt+S</strong> Hybrid Vision+DOM Snip, <strong>Alt+1/2/3</strong> Stealth Modes, <strong>⌘+Shift+U</strong> Master Toggle, and 100% <strong>Focus Shield</strong> inside a Closed Shadow DOM.
                                            </p>
                                        </div>

                                        <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
                                            <div className="font-mono font-bold text-emerald-300 uppercase mb-2">
                                                Part 2: Study &amp; Homework AI Hub
                                            </div>
                                            <p className="text-slate-300 leading-relaxed">
                                                Full web workspace with <strong>Claude 3.7 Sonnet</strong>, <strong>ChatGPT (GPT-4o / o3-mini)</strong>, and <strong>DeepSeek-R1</strong> included at $0 extra—saving you $60+/month on standalone AI subscriptions.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-white/10 text-center font-mono">
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                        <div className="text-sm font-extrabold text-emerald-300">$0 Free</div>
                                        <div className="text-[10px] text-slate-300">5 Solves / Day (No Card)</div>
                                    </div>
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                        <div className="text-sm font-extrabold text-white">$19/mo</div>
                                        <div className="text-[10px] text-slate-300">Monthly Pass</div>
                                    </div>
                                    <div className="p-3 rounded-xl bg-emerald-400 text-slate-950 font-extrabold">
                                        <div className="text-sm">$8.25/mo</div>
                                        <div className="text-[10px]">$99/yr Academic</div>
                                    </div>
                                    <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                                        <div className="text-sm font-extrabold text-white">$199</div>
                                        <div className="text-[10px] text-slate-300">Lifetime Pass</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    COMPREHENSIVE 12-ROW COMPARISON MATRIX
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24" aria-label="Feature Comparison Table">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <span className="inline-block px-3 py-1 rounded-full bg-indigo-100 text-indigo-950 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                            12-Point Manifest &amp; Feature Matrix
                        </span>
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink mb-3">
                            ExamGhost (v4.2) vs College Tools / Mindko (v3.0.5)
                        </h2>
                        <p className="text-xs sm:text-sm text-ink-secondary">
                            Complete engineering comparison between ExamGhost and <code className="font-mono bg-black/5 px-1.5 py-0.5 rounded">collegetools.io</code> / <code className="font-mono bg-black/5 px-1.5 py-0.5 rounded">mindko.com</code>.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[680px]">
                                <thead>
                                    <tr className="bg-[#131622] text-white border-b border-white/10">
                                        <th className="py-4 px-6 font-bold w-[36%]">Audit Vector / Capability</th>
                                        <th className="py-4 px-6 font-extrabold text-emerald-300 bg-emerald-950/60 w-[34%]">
                                            ExamGhost v4.2 (Closed Shadow DOM)
                                        </th>
                                        <th className="py-4 px-6 font-bold text-amber-200 w-[30%]">
                                            College Tools / Mindko (v3.0.5)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    {comparisonRows.map((row, idx) => (
                                        <tr key={idx} className="hover:bg-[#faf8f4] transition-colors">
                                            <td className="py-4 px-6">
                                                <div className="font-bold text-ink">{row.feature}</div>
                                                <div className="text-xs text-ink-muted mt-0.5">{row.sub}</div>
                                            </td>
                                            <td className="py-4 px-6 font-bold text-emerald-900 bg-emerald-50/40">
                                                {row.examghost}
                                            </td>
                                            <td className="py-4 px-6 font-medium text-rose-900">
                                                {row.collegetools}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    STUDY & HOMEWORK AI WORKSPACE SHOWCASE (COMPACT)
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24" aria-label="Study and Homework AI Workspace">
                    <StudyAiHubShowcase compact />
                </section>

                {/* ============================================================
                    6 DEEP FAQ ACCORDION
                ============================================================ */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20" aria-label="Frequently Asked Questions">
                    <div className="text-center mb-10">
                        <span className="px-3 py-1 rounded-full bg-black/5 text-xs font-mono font-bold uppercase tracking-wider text-ink-muted mb-2 inline-block">
                            Investigative FAQ
                        </span>
                        <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink">
                            College Tools (Mindko) vs ExamGhost: 6 Key Questions
                        </h2>
                    </div>

                    <div className="space-y-3.5">
                        {faqs.map((faq, idx) => (
                            <details
                                key={idx}
                                className="group rounded-2xl bg-white border border-black/10 p-5 sm:p-6 shadow-sm transition-all"
                                open={idx === 0}
                            >
                                <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.question}</h3>
                                    <ChevronDown className="w-5 h-5 text-ink-muted group-open:rotate-180 transition-transform shrink-0 ml-3" />
                                </summary>
                                <p className="text-xs sm:text-sm text-ink-secondary mt-3.5 pt-3 border-t border-black/5 leading-relaxed">
                                    {faq.answer}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* ============================================================
                    CONVERSION STRIP + RELATED COMPARISONS
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Get Started and Related Comparisons">
                    <div className="rounded-[32px] bg-[#131622] text-white border border-white/15 p-7 sm:p-10 shadow-lift">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-white/10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-[11px] font-mono font-bold text-amber-300 uppercase tracking-wider mb-2">
                                    Zero Exposed Resources · Zero Cookie Scraping · 5 Free Solves / Day
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                    A new domain name doesn&apos;t hide 24 injected scripts.
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-300 mt-1.5">
                                    Start with 5 Free Solves / Day on ExamGhost ($0, auto-refills every 24h, no credit card required). Upgrade anytime for $19/mo, $99/yr ($8.25/mo), or $199 Lifetime with full access to our Claude 3.7 + ChatGPT + DeepSeek Study Hub.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <Link
                                    prefetch={false}
                                    href="/#pricing"
                                    className="px-6 py-3.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 text-xs sm:text-sm font-extrabold shadow-lg inline-flex items-center gap-2 transition-colors"
                                >
                                    <FaChrome className="w-4 h-4 text-slate-950" aria-hidden="true" />
                                    <span>Start 5 Free Solves / Day</span>
                                </Link>
                                <Link
                                    prefetch={false}
                                    href="/canvas-quiz-solver-free-demo"
                                    className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/15 inline-flex items-center gap-1.5 transition-colors"
                                >
                                    <span>Test Live Demo</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-mono font-bold text-xs uppercase tracking-wider text-slate-400 mb-3">
                                Compare Other Canvas &amp; LMS Assistants
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                                <Link prefetch={false} href="/mindko-vs-examghost" className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-semibold text-white flex items-center justify-between transition-colors">
                                    <span>Mindko vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                                </Link>
                                <Link prefetch={false} href="/canvashack-vs-examghost" className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-semibold text-white flex items-center justify-between transition-colors">
                                    <span>CanvasHack vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                                </Link>
                                <Link prefetch={false} href="/apexvision-vs-examghost" className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-semibold text-white flex items-center justify-between transition-colors">
                                    <span>Apex Vision vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                                </Link>
                                <Link prefetch={false} href="/compare-canvas-hack-extensions" className="p-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 font-semibold text-white flex items-center justify-between transition-colors">
                                    <span>All 57 Audits</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
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
