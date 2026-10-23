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
    FolderSync,
    ExternalLink,
    CreditCard
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "AskSia vs ExamGhost (2026) — Canvas Scraper Audit",
    },
    description: "Compare AskSia (asksia.ai) with ExamGhost. See why AskSia only imports Canvas modules to an external web app—forcing tab switches—while billing up to ~$25/mo.",
    alternates: {
        canonical: "https://examghost.com/asksia-vs-examghost",
    },
    openGraph: {
        title: "AskSia vs ExamGhost (2026) — 'Sync to AskSia' Canvas Scraper Audit",
        description: "Compare AskSia (asksia.ai) with ExamGhost. See why AskSia only imports Canvas modules to an external web app—forcing tab switches—while billing up to ~$25/mo.",
        url: "https://examghost.com/asksia-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "AskSia vs ExamGhost (2026) — 'Sync to AskSia' Canvas Scraper Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "AskSia vs ExamGhost (2026) — 'Sync to AskSia' Canvas Scraper Audit",
        description: "Compare AskSia (asksia.ai) with ExamGhost. See why AskSia only imports Canvas modules to an external web app—forcing tab switches—while billing up to ~$25/mo.",
        images: ["/og-image.jpg"],
    },
};

export default function AskSiaComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-20",
                "dateModified": "2026-03-26",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/asksia-vs-examghost#webpage",
                "url": "https://examghost.com/asksia-vs-examghost",
                "name": "AskSia vs ExamGhost (2026 Review) | External Course Importer vs In-Page Shadow DOM Solver",
                "description": "Technical evaluation comparing AskSia: All-in-One AI Study Assistant (asksia.ai, Chrome ID hoipbgndfmmjgamfhipgdepddfhmjleo) and ExamGhost across Canvas course scraping, tab-switch telemetry, and Plus/Super/A+ pricing.",
                "breadcrumb": { "@id": "https://examghost.com/asksia-vs-examghost#breadcrumb" },
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
                        "name": "AskSia: All-in-One AI Study Assistant",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension, Web, iOS, Android",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "0.99",
                            "highPrice": "210.00",
                            "priceCurrency": "USD",
                            "offerCount": "4"
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/asksia-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "AskSia vs ExamGhost", "item": "https://examghost.com/asksia-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/asksia-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Does the AskSia Chrome extension solve live Canvas quizzes in-page?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. AskSia's Chrome Web Store description states its purpose is to 'collect courses and automatically extract course content and information from your LMS with AskSia.' It places a visible 'Sync to AskSia' button onto Canvas course cards to import files and syllabi into its external web workspace—meaning you must switch tabs to asksia.ai to use its AI solver, triggering window.blur in Canvas SpeedGrader."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can Canvas detect AskSia's 'Sync to AskSia' course scraping?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. AskSia injects a 'Sync to AskSia' DOM button onto your LMS dashboard and fires automated background requests to download all course modules, files, assignments, pages, and syllabi into AskSia's cloud servers. University IT logs and Canvas access tokens record bulk module downloads, whereas ExamGhost reads only the active question locally inside a Closed Shadow DOM."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does AskSia's DeltaMath Solver compare to ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "AskSia's DeltaMath Solver is an external web portal on asksia.ai where you must manually upload screenshots or type problems in a separate browser tab. ExamGhost solves DeltaMath, ALEKS, WebAssign, and Canvas STEM equations directly inside your active exam tab in 0.3 seconds via ⌘+Shift+S Snap-It Vision OCR with zero tab switching."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does AskSia cost compared to ExamGhost in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "AskSia allows 1 free course sync or a $0.99 3-day trial, then bills ~$25/month or $76–$210/year across its Plus, Super, and A+ subscription tiers. ExamGhost gives you 50 Free Solves upfront with zero credit card required, plus $19/mo Monthly, $99/yr Academic Year ($8.25/mo), or $199 Lifetime."
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
                {/* Breadcrumb Navigation */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-4">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-muted">
                        <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                        <span>/</span>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Compare Extensions</Link>
                        <span>/</span>
                        <span className="text-ink font-semibold">AskSia vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: Course Importer vs Live In-Page Stealth Solver */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-[#fef0c7] p-6 sm:p-12 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-amber-950 text-[#fef0c7] text-[11px] font-bold uppercase tracking-wider">
                                    LMS Scraper vs In-Exam Stealth Audit
                                </span>
                                <span className="hidden sm:inline-block text-xs text-ink/70 font-mono">
                                    asksia.ai · ID: hoipbgndfmmjgamfhipgdepddfhmjleo
                                </span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-ink">
                                6,000 Users · Course Importer Extension
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            {/* Left Column */}
                            <div className="lg:col-span-7">
                                <div className="inline-block px-3.5 py-1 rounded-full bg-amber-950/10 border border-amber-950/20 text-xs font-bold text-amber-950 mb-4">
                                    &ldquo;Sync to AskSia&rdquo; Bulk Scraper · External Tab Workflow · ~$25/mo Tiers
                                </div>
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    AskSia&apos;s extension only imports your Canvas files—forcing you to switch tabs to solve.
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-5 font-normal">
                                    Students install the <strong>AskSia Chrome extension (<code>asksia.ai</code>)</strong> expecting an in-page quiz solver, only to discover its actual function: it injects a <strong>&ldquo;Sync to AskSia&rdquo;</strong> button onto your Canvas dashboard to bulk-scrape your course modules into an external web workspace—and forces you to <strong>switch browser tabs</strong> (firing <code>window.blur</code>) whenever you want to solve a question or DeltaMath problem.
                                </p>
                                <p className="text-sm sm:text-base text-amber-950 font-semibold leading-relaxed mb-8">
                                    ExamGhost solves Canvas, Blackboard, Moodle, and DeltaMath questions directly inside your active exam tab in 0.3s via a Closed Shadow DOM HUD—starting with <strong>50 Free Solves ($0, no credit card)</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#fef0c7]" aria-hidden="true" />
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

                            {/* Right Column: 3 Verbatim AskSia Disclosures */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-white p-5 sm:p-6 border border-black/10 shadow-lift space-y-3.5">
                                    <div className="flex items-center justify-between border-b border-black/10 pb-3">
                                        <span className="text-xs font-bold text-amber-900 uppercase tracking-wider flex items-center gap-1.5">
                                            <FileWarning className="w-4 h-4 text-amber-700" />
                                            3 Verbatim AskSia Realities
                                        </span>
                                        <span className="text-[11px] font-mono text-ink-muted">asksia.ai</span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-rose-800 mb-0.5">
                                            1. Official Chrome Web Store Overview:
                                        </div>
                                        <p className="text-rose-950 font-semibold italic">
                                            &ldquo;Collect courses and automatically extract course content and information from your LMS with AskSia.&rdquo;
                                        </p>
                                        <span className="text-[10px] text-rose-800 block mt-0.5">
                                            → Built as a course-file exporter, not a live in-exam stealth solver
                                        </span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-amber-900 mb-0.5">
                                            2. On &ldquo;Sync to AskSia&rdquo; Bulk LMS Scraping:
                                        </div>
                                        <p className="text-amber-950 font-semibold italic">
                                            &ldquo;Places a Sync to AskSia button onto course cards... reads course modules, files, assignments, pages, and syllabi into your AskSia library.&rdquo;
                                        </p>
                                        <span className="text-[10px] text-amber-800 block mt-0.5">
                                            → Bulk automated crawling of your university Canvas account
                                        </span>
                                    </div>

                                    <div className="p-3 rounded-2xl bg-slate-100 border border-slate-300 text-xs">
                                        <div className="font-mono text-[10px] font-bold uppercase text-slate-800 mb-0.5">
                                            3. $0.99 3-Day Trial → Plus / Super / A+ Tiers:
                                        </div>
                                        <p className="text-slate-900 font-semibold italic">
                                            &ldquo;1 free course sync, then ~$25/mo or $76–$210/yr across Plus, Super, and A+ subscription tiers.&rdquo;
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Metric Ribbon */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-black/10 relative z-10 text-xs">
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">In-Exam Question Solving</span>
                                <span className="font-bold text-emerald-800">ExamGhost: 0.3s Inline Shadow HUD</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">AskSia: External asksia.ai tab switch</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Canvas Account Footprint</span>
                                <span className="font-bold text-emerald-800">Zero Bulk API Crawling</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">AskSia: Scrapes all modules &amp; files</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">DeltaMath &amp; STEM Solving</span>
                                <span className="font-bold text-emerald-800">⌘+Shift+S On-Page Vision OCR</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">AskSia: Manual screenshot upload tab</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/85 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Pricing</span>
                                <span className="font-bold text-emerald-800">50 Free · $19/mo · $99/yr</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">AskSia: $0.99 trial → ~$25/mo</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE 3-TAB ASKSIA ARCHITECTURE SWITCHER */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Interactive AskSia Breakdown">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-amber-100 border border-amber-200 text-amber-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Workflow &amp; Telemetry Comparison
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink mb-2">
                                Why AskSia Fails During Timed Canvas &amp; DeltaMath Exams
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Click each tab below to compare AskSia&apos;s bulk Canvas module scraper, its external tab-switch solver, and its Plus/Super/A+ pricing against ExamGhost.
                            </p>
                        </div>

                        {/* Hidden Radio Inputs */}
                        <input type="radio" name="ask_tabs" id="ask_sync" className="sr-only peer/asksync" defaultChecked />
                        <input type="radio" name="ask_tabs" id="ask_deltamath" className="sr-only peer/askdeltamath" />
                        <input type="radio" name="ask_tabs" id="ask_pricing" className="sr-only peer/askpricing" />

                        {/* Tab Labels */}
                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#fdf7e7] border border-amber-950/10 mb-8">
                            <label
                                htmlFor="ask_sync"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/asksync:bg-ink peer-checked/asksync:text-white peer-checked/asksync:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">1. &ldquo;Sync to AskSia&rdquo; Bulk Scraper</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Crawls all Canvas modules vs Local RAG</div>
                            </label>
                            <label
                                htmlFor="ask_deltamath"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/askdeltamath:bg-ink peer-checked/askdeltamath:text-white peer-checked/askdeltamath:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">2. External Tab-Switch Solver</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Fires window.blur vs Inline Shadow HUD</div>
                            </label>
                            <label
                                htmlFor="ask_pricing"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/askpricing:bg-ink peer-checked/askpricing:text-white peer-checked/askpricing:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">3. ~$25/mo Plus/Super/A+ Tiers</div>
                                <div className="text-[11px] opacity-75 mt-0.5">$0.99 trial hook vs 50 Free Solves</div>
                            </label>
                        </div>

                        {/* TAB 1: Sync to AskSia Bulk Scraper */}
                        <div className="hidden peer-checked/asksync:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <FolderSync className="w-3.5 h-3.5" />
                                        AskSia: Bulk-Crawls Your University Canvas Account
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Automated downloading of every module, file, and syllabus
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        When you install the AskSia Chrome extension, it injects a visible <strong>&ldquo;Sync to AskSia&rdquo;</strong> button onto your Canvas dashboard cards. Clicking it triggers a background script that crawls your authenticated Canvas session to download every course module, page, assignment, and file to AskSia&apos;s external servers.
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        University IT security systems monitor abnormal bulk file downloads from student LMS sessions—and AskSia only gives you <strong>1 free course sync</strong> before demanding a paid upgrade.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Footprint: Injected dashboard button + bulk LMS module crawling
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <EyeOff className="w-3.5 h-3.5" />
                                        ExamGhost: Selective Local-First Course Materials Vault
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Upload only the PDFs you choose—zero automated LMS crawling
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost never crawls your university Canvas endpoints in the background. You selectively drop your study guide or lecture slides into our Course Materials Vault, and ExamGhost uses them to ground your live quiz answers inside a Closed Shadow DOM HUD.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Footprint: 0 Automated LMS Crawls · 100% Selective RAG
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: External Tab-Switch Solver */}
                        <div className="hidden peer-checked/askdeltamath:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <ExternalLink className="w-3.5 h-3.5" />
                                        AskSia: External Web Workspace (Logs Tab Switches)
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Forces you to leave the exam tab to use its AI solver
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        AskSia markets a <em>DeltaMath Solver</em> and <em>AI Homework Helper</em>, but those tools live inside the external <code>asksia.ai</code> web dashboard. During a timed Canvas, Blackboard, or DeltaMath assessment, switching tabs to paste a problem or upload a screenshot into AskSia immediately triggers <code>window.blur</code> and <code>document.visibilitychange</code>.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Workflow: Leave exam tab → Upload to asksia.ai → Log window.blur
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <Zap className="w-3.5 h-3.5" />
                                        ExamGhost: 0.3s In-Page Solving + ⌘+Shift+S Snap-It
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Solve Canvas &amp; DeltaMath equations without ever leaving the tab
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost runs directly inside your active exam tab. Press <code>⌘+B</code> for instant DOM extraction or <code>⌘+Shift+S</code> to snip any DeltaMath graph or calculus integral—and view the step-by-step solution inside a Closed Shadow DOM overlay with Focus Shield blocking 100% of blur events.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Workflow: 0 Tab Switches · 0.3s Inline Shadow DOM HUD
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: ~$25/mo Plus/Super/A+ Tiers */}
                        <div className="hidden peer-checked/askpricing:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <CreditCard className="w-3.5 h-3.5" />
                                        AskSia: $0.99 3-Day Trial → Up to ~$25/Month
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Confusing Plus, Super &amp; A+ tiers costing up to $210/year
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        AskSia gates full access behind a <strong>$0.99 3-day trial</strong> that rolls into tiered recurring plans (Plus, Super, and A+ ranging from <strong>~$25/month</strong> or <strong>$76 to $210/year</strong>), with no one-time lifetime license.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Pricing: $0.99 3-day trial → ~$25/mo ($76–$210/yr)
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        ExamGhost: 50 Free Solves ($0 No Card) + Simple Flat Plans
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Every feature unlocked on every plan. 50 Free Solves upfront.
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost never splits features across confusing Plus/Super/A+ tiers. You get 100% of our 24 stealth tools on every plan, starting with 50 Free Solves.
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
                                    Pricing: 50 Free Solves · $99/yr ($8.25/mo) · $199 Lifetime
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
                                AskSia External Workspace vs ExamGhost in SpeedGrader
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-300">
                                Why switching to an external study workspace tab during a Canvas quiz gets flagged every time.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* AskSia Log */}
                            <div className="rounded-2xl bg-slate-900 border border-rose-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-rose-500/20 text-rose-300 font-bold">
                                    <span>AskSia (Course Sync + External Tab)</span>
                                    <span className="text-[10px] bg-rose-950 text-rose-200 px-2 py-0.5 rounded border border-rose-500/40">FLAGGED</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">10:00:08 — Started quiz attempt</div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        10:00:34 — Stopped viewing the Canvas quiz (0:49)
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Switched tab to asksia.ai AI Solver / DeltaMath workspace</span>
                                    </div>
                                    <div className="text-slate-300">10:01:23 — Resumed viewing quiz</div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        10:01:55 — Stopped viewing the Canvas quiz (0:41)
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Switched tab to asksia.ai document chat</span>
                                    </div>
                                </div>
                            </div>

                            {/* ExamGhost Log */}
                            <div className="rounded-2xl bg-slate-900 border border-emerald-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/20 text-emerald-300 font-bold">
                                    <span>ExamGhost (In-Page Shadow DOM + Focus Shield)</span>
                                    <span className="text-[10px] bg-emerald-950 text-emerald-200 px-2 py-0.5 rounded border border-emerald-500/40">100% CLEAN</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">10:00:08 — Started quiz attempt</div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        10:00:52 — Answered Question 1 (Solved inline in 0.3s)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Closed Shadow DOM · Zero tab switches · 0 blur flags</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        10:01:41 — Answered Question 2 (Normal human pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Focus Shield active · Local-first Course Materials Vault</span>
                                    </div>
                                    <div className="text-slate-300">10:02:29 — Answered Question 3</div>
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
                                Complete technical comparison between ExamGhost and AskSia (asksia.ai).
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black/10">
                                        <th className="py-3.5 px-4 font-bold text-ink">Feature / Capability</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50 rounded-t-xl">ExamGhost</th>
                                        <th className="py-3.5 px-4 font-bold text-ink-muted">AskSia (asksia.ai)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Live In-Page Quiz Solving</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Instant 0.3s Inline Shadow DOM HUD</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Extension only syncs files to asksia.ai web app</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Focus Shield (Window Blur Suppression)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 100% Intercepted (No tab-switch flags)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Switching to asksia.ai fires window.blur</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">LMS Account Safety</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Reads Active Question Only (Zero Crawling)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Bulk-scrapes all Canvas modules &amp; files</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">DeltaMath &amp; STEM Diagram OCR</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ In-Page ⌘+Shift+S Snap-It Vision</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Requires uploading screenshots on asksia.ai</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Free Starter Allowance</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 50 Free Solves ($0, No Card Needed)</td>
                                        <td className="py-3.5 px-4 text-ink-muted">1 free course sync / $0.99 3-day trial</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Pricing Model</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ $19/mo · $99/yr ($8.25/mo) · $199 Lifetime</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">~$25/mo or $76–$210/yr (Plus / Super / A+)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store Manifest & Domain Audit */}
                        <details className="mt-6 group rounded-2xl bg-[#faf7f2] border border-black/10 p-4 text-xs">
                            <summary className="font-mono font-bold text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (AskSia)</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="mt-3 pt-3 border-t border-black/10 grid sm:grid-cols-2 gap-3 font-mono text-[11px] text-ink-secondary">
                                <div>
                                    <span className="text-ink font-bold block">Chrome Extension ID &amp; Listing:</span>
                                    AskSia: All-in-One AI Study Assistant (<code>hoipbgndfmmjgamfhipgdepddfhmjleo</code> · 6,000 users)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">DOM Injection Behavior:</span>
                                    Injects &ldquo;Sync to AskSia&rdquo; button onto Canvas course cards to export modules/files
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Solver Architecture:</span>
                                    Read-only LMS importer; question solving occurs in external <code>asksia.ai</code> web workspace
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Subscription Tiers:</span>
                                    $0.99 3-day trial → Plus, Super, and A+ tiers (~$25/mo or $76–$210/yr)
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* STUDENT CASE STUDY / SOCIAL PROOF */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Student Review">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#fef0c7]/55 via-white to-white border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-xs font-bold text-ink ml-2">Verified Student Migration</span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-relaxed mb-6">
                            &ldquo;I downloaded the AskSia extension thinking it would solve my Canvas and DeltaMath quizzes on the page, but all the extension did was put a &lsquo;Sync to AskSia&rsquo; button on my Canvas dashboard and make me switch tabs to asksia.ai to upload screenshots. ExamGhost actually solves questions right inside the exam page in 0.3 seconds without ever switching tabs.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-amber-900 text-white font-bold flex items-center justify-center text-sm">
                                KP
                            </div>
                            <div>
                                <div className="text-sm font-bold text-ink">Kieran P.</div>
                                <div className="text-xs text-ink-muted">Applied Mathematics · Rutgers University</div>
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
                            Frequently Asked Questions: AskSia vs ExamGhost
                        </h2>
                    </div>

                    <div className="space-y-4">
                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Does the AskSia Chrome extension solve live Canvas quizzes in-page?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                No. AskSia&apos;s Chrome Web Store description states its purpose is to <em>&ldquo;collect courses and automatically extract course content and information from your LMS with AskSia.&rdquo;</em> It places a visible &ldquo;Sync to AskSia&rdquo; button onto Canvas course cards to import files and syllabi into its external web workspace—meaning you must switch tabs to <code>asksia.ai</code> to use its AI solver, triggering <code>window.blur</code> in Canvas SpeedGrader.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Can Canvas detect AskSia&apos;s &ldquo;Sync to AskSia&rdquo; course scraping?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                Yes. AskSia injects a &ldquo;Sync to AskSia&rdquo; DOM button onto your LMS dashboard and fires automated background requests to download all course modules, files, assignments, pages, and syllabi into AskSia&apos;s cloud servers. University IT logs and Canvas access tokens record bulk module downloads, whereas ExamGhost reads only the active question locally inside a Closed Shadow DOM.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">How does AskSia&apos;s DeltaMath Solver compare to ExamGhost?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                AskSia&apos;s DeltaMath Solver is an external web portal on <code>asksia.ai</code> where you must manually upload screenshots or type problems in a separate browser tab. ExamGhost solves DeltaMath, ALEKS, WebAssign, and Canvas STEM equations directly inside your active exam tab in 0.3 seconds via <code>⌘+Shift+S</code> Snap-It Vision OCR with zero tab switching.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all">
                            <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">How much does AskSia cost compared to ExamGhost in 2026?</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                AskSia allows 1 free course sync or a $0.99 3-day trial, then bills <strong>~$25/month</strong> or <strong>$76–$210/year</strong> across its Plus, Super, and A+ subscription tiers. ExamGhost gives you <strong>50 Free Solves</strong> upfront with zero credit card required, plus <strong>$19/mo</strong> Monthly, <strong>$99/yr</strong> Academic Year ($8.25/mo), or <strong>$199 Lifetime</strong>.
                            </p>
                        </details>
                    </div>
                </section>

                {/* BESPOKE PASTEL CONVERSION STRIP + RELATED COMPARISONS */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12" aria-label="Get Started and Related Comparisons">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#fef0c7] via-[#fdf6de] to-[#f4ede2] border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-black/10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-amber-950 uppercase tracking-wider mb-2">
                                    True In-Page Solving · Zero Tab Switches
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Stop switching tabs to an external study dashboard mid-exam.
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
                                    <FaChrome className="w-4 h-4 text-[#fef0c7]" aria-hidden="true" />
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
                                <Link prefetch={false} href="/transcript-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>Transcript vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/apexvision-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>Apex Vision vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/mathosai-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>Mathos AI vs ExamGhost</span>
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
