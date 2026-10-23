import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    ShieldAlert,
    ChevronDown,
    ArrowRight,
    Sparkles,
    CheckCircle2,
    EyeOff,
    FileText,
    ExternalLink,
    Globe,
    Code2,
    Search,
    PanelRightOpen,
    Sigma
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "QuestionAI vs ExamGhost (2026) — Copilot Sidebar vs Stealth",
    },
    description: "Compare QuestionAI with ExamGhost in 2026. Replace visible Copilot chat sidebars and blur logs with a 0.3s closed Shadow DOM solver and 50 Free Solves ($0).",
    alternates: {
        canonical: "https://examghost.com/questionai-vs-examghost",
    },
    openGraph: {
        title: "QuestionAI vs ExamGhost (2026) — Copilot Sidebar vs Stealth",
        description: "Compare QuestionAI with ExamGhost in 2026. Replace visible Copilot chat sidebars and blur logs with a 0.3s closed Shadow DOM solver and 50 Free Solves ($0).",
        url: "https://examghost.com/questionai-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "QuestionAI vs ExamGhost (2026) — Copilot Sidebar vs Stealth",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "QuestionAI vs ExamGhost (2026) — Copilot Sidebar vs Stealth",
        description: "Compare QuestionAI with ExamGhost in 2026. Replace visible Copilot chat sidebars and blur logs with a 0.3s closed Shadow DOM solver and 50 Free Solves ($0).",
        images: ["/og-image.jpg"],
    },
};

export default function QuestionaiVsExamghostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-24",
                "dateModified": "2026-03-05",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/questionai-vs-examghost#webpage",
                "url": "https://examghost.com/questionai-vs-examghost",
                "name": "QuestionAI vs ExamGhost (2026 Comparison) | Homework Chat Sidebar vs Invisible Exam Solver",
                "description": "Technical evaluation comparing QuestionAI (questionai.com) and ExamGhost across Canvas SpeedGrader telemetry, DOM isolation, STEM accuracy, and student pricing.",
                "breadcrumb": { "@id": "https://examghost.com/questionai-vs-examghost#breadcrumb" },
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
                        "name": "QuestionAI",
                        "url": "https://www.questionai.com",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Web, Chrome Extension, iOS, Android"
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/questionai-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "QuestionAI vs ExamGhost", "item": "https://examghost.com/questionai-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/questionai-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How does QuestionAI differ from ExamGhost for college quizzes?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "QuestionAI (questionai.com) is a general-purpose K-12 and homework chatbot featuring a PDF Solver, Textbook Summarizer, Calculator, and a browser Copilot sidebar. ExamGhost is a specialized university exam solver built for Canvas, Blackboard, Moodle, and D2L that solves questions inline via Double-Click or Snap-It OCR inside a closed Shadow DOM without opening a detectable sidebar."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why does QuestionAI's Chrome sidebar trigger flags on Canvas SpeedGrader?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "To use QuestionAI on a webpage, students typically highlight question text (triggering a floating Copilot icon) or click into QuestionAI's right-hand drawer. Both actions fire selectionchange and window.blur events, and the sidebar resizes the browser viewport. ExamGhost's Focus Shield blocks window.blur and visibilitychange events and never alters page layout."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does ExamGhost publish my exam questions publicly like QuestionAI's subject directory?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Never. QuestionAI's website hosts a massive public directory of user-submitted questions across Math, Biology, History, and Business that anyone (including professors) can find via Google search. ExamGhost processes all Double-Click and Snap-It OCR queries over ephemeral, zero-retention encrypted channels and never indexes student questions."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What are ExamGhost's current pricing plans compared to QuestionAI Plus?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "QuestionAI offers a basic free tier with lower-tier AI models and charges recurring monthly fees for QuestionAI Plus. ExamGhost gives every student 50 Free Question Solves with full Focus Shield and Snap-It OCR, followed by transparent plans: $19/month (Midterm Sprint), $99/year ($8.25/mo Academic Year Pass), or $199 one-time for the Lifetime Degree Pass."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-[#c4d0f8] selection:text-ink font-sans">
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
                        <span className="text-ink font-semibold">QuestionAI vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: Public Q&A Index & Copilot Sidebar vs Ephemeral Closed Shadow DOM */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#eef2ff] via-[#c4d0f8]/65 to-[#ecfdf5] p-6 sm:p-10 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/10 border border-indigo-950/20 text-xs font-bold text-indigo-950">
                                <Sparkles className="w-3.5 h-3.5 text-indigo-800" aria-hidden="true" />
                                <span>2026 Architecture Review: Public Q&amp;A Chatbot vs Zero-Trace Exam Solver</span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/90 border border-black/10 text-[11px] font-bold text-ink uppercase tracking-wider">
                                Updated April 2026 · questionai.com
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold tracking-tight text-ink leading-[1.06] mb-5">
                                    QuestionAI is built for PDF chat &amp; K-12 homework—not <span className="underline decoration-indigo-600/60 decoration-wavy underline-offset-4">monitored college exams</span>.
                                </h1>

                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-7 max-w-2xl">
                                    With 10M+ users, <strong>QuestionAI</strong> (<code className="text-xs bg-white/80 px-1.5 py-0.5 rounded border border-black/10">questionai.com</code>) is great for summarizing PDFs and scanning paper worksheets on mobile. But on live university quizzes, its text-highlight popups, 400px Copilot sidebar, and <strong>public Google-indexed question feed</strong> create serious academic integrity risks. <strong>ExamGhost</strong> solves Canvas, Blackboard, and Moodle questions inline in <strong>0.3 seconds</strong> inside a closed Shadow DOM—with zero public indexing and <strong>50 Free Solves</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3 mb-6">
                                    <a
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#c4d0f8]" aria-hidden="true" />
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
                                        href="#questionai-audit"
                                        className="px-4 py-4 rounded-full text-xs sm:text-sm font-semibold text-indigo-950 hover:text-ink inline-flex items-center gap-1"
                                    >
                                        <span>Inspect Public Index &amp; Blur Risk</span>
                                        <ChevronDown className="w-4 h-4" />
                                    </a>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-ink-secondary font-medium">
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        Never indexes your exam prompts on Google
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        0.3s Inline HUD (No 400px Sidebar)
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        50 Free Solves ($0 Trial)
                                    </span>
                                </div>
                            </div>

                            {/* Right Side Bespoke Visual: Public SEO Leak vs Ephemeral Zero-Retention Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#111524] text-white p-5 sm:p-6 border border-white/15 shadow-lift">
                                    <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-white/10">
                                        <div className="flex items-center gap-2">
                                            <Search className="w-4 h-4 text-rose-400" />
                                            <span className="font-mono text-xs font-bold text-slate-200">Public Question Exposure Check</span>
                                        </div>
                                        <span className="px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono text-[10px] font-bold">
                                            INDEXED ON GOOGLE
                                        </span>
                                    </div>

                                    {/* QuestionAI Public Feed */}
                                    <div className="p-3.5 rounded-2xl bg-rose-950/45 border border-rose-500/30 mb-3.5">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-rose-200">QuestionAI (questionai.com)</span>
                                            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-rose-900/70 text-rose-200">
                                                Public Directory
                                            </span>
                                        </div>
                                        <div className="space-y-1.5 font-mono text-[11px]">
                                            <div className="bg-black/35 px-2.5 py-1.5 rounded-lg text-amber-200">
                                                • Publishes user prompts under /math, /biology, /business
                                            </div>
                                            <div className="bg-black/35 px-2.5 py-1.5 rounded-lg text-rose-200">
                                                • Highlight popup + 400px Copilot Sidebar shifts viewport
                                            </div>
                                            <div className="bg-black/35 px-2.5 py-1.5 rounded-lg text-rose-300">
                                                • Clicking sidebar fires window.blur in SpeedGrader
                                            </div>
                                        </div>
                                    </div>

                                    {/* ExamGhost Ephemeral Vault */}
                                    <div className="p-3.5 rounded-2xl bg-emerald-950/50 border border-emerald-500/30">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-emerald-200">ExamGhost v4.2 Stealth Engine</span>
                                            <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-emerald-900/70 text-emerald-200">
                                                Zero Retention
                                            </span>
                                        </div>
                                        <div className="space-y-1.5 font-mono text-[11px]">
                                            <div className="flex items-center justify-between bg-black/35 px-2.5 py-1.5 rounded-lg text-emerald-200">
                                                <span>Ephemeral In-Memory Processing</span>
                                                <span className="text-emerald-400 font-bold">Never Indexed</span>
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
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">Interaction Model</div>
                            <div className="text-lg sm:text-xl font-black text-emerald-800">Double-Click Inline</div>
                            <div className="text-xs text-rose-800 mt-1">QuestionAI: Highlight + Sidebar</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">Question Privacy</div>
                            <div className="text-lg sm:text-xl font-black text-emerald-800">Zero Public Index</div>
                            <div className="text-xs text-rose-800 mt-1">QuestionAI: Public SEO Q&amp;A Feed</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">STEM &amp; Calculus OCR</div>
                            <div className="text-lg sm:text-xl font-black text-emerald-800">Mathpix Vision</div>
                            <div className="text-xs text-ink-secondary mt-1">QuestionAI: Raw Text Mangling</div>
                        </div>
                        <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-sm">
                            <div className="text-xs font-bold uppercase tracking-wider text-ink-muted mb-1">Free Trial &amp; Plans</div>
                            <div className="text-lg sm:text-xl font-black text-emerald-800">50 Free Solves</div>
                            <div className="text-xs text-ink-secondary mt-1">$19/mo · $99/yr · $199 Lifetime</div>
                        </div>
                    </div>
                </section>

                {/* INTERACTIVE 3-TAB AUDIT: 3 Reasons QuestionAI Fails Timed Exams */}
                <section id="questionai-audit" className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 scroll-mt-24">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="max-w-2xl mb-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-100 text-indigo-950 text-xs font-bold mb-3">
                                <ShieldCheck className="w-3.5 h-3.5" />
                                Interactive Platform &amp; Telemetry Breakdown
                            </div>
                            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mb-2">
                                3 Reasons Why QuestionAI Fails During Timed Canvas &amp; Blackboard Exams
                            </h2>
                            <p className="text-sm text-ink-secondary">
                                Select any tab below to compare QuestionAI&apos;s public question directory, Copilot sidebar telemetry, and raw LaTeX text scraping against ExamGhost.
                            </p>
                        </div>

                        {/* Pure CSS Radio Tabs */}
                        <input type="radio" name="questionai_tab" id="tab-seo" className="sr-only peer/seo" defaultChecked />
                        <input type="radio" name="questionai_tab" id="tab-sidebar" className="sr-only peer/sidebar" />
                        <input type="radio" name="questionai_tab" id="tab-latex" className="sr-only peer/latex" />

                        <div className="grid sm:grid-cols-3 gap-2 p-1.5 rounded-2xl bg-[#f4f1ea] border border-black/10 mb-8">
                            <label
                                htmlFor="tab-seo"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/seo:bg-white peer-checked/seo:text-ink peer-checked/seo:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Search className="w-4 h-4 text-rose-600" />
                                <span>1. Public Google Indexing</span>
                            </label>
                            <label
                                htmlFor="tab-sidebar"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/sidebar:bg-white peer-checked/sidebar:text-ink peer-checked/sidebar:shadow-sm flex items-center justify-center gap-2"
                            >
                                <PanelRightOpen className="w-4 h-4 text-indigo-600" />
                                <span>2. 400px Copilot Sidebar Blur</span>
                            </label>
                            <label
                                htmlFor="tab-latex"
                                className="cursor-pointer rounded-xl py-3 px-4 text-xs sm:text-sm font-bold text-center transition-all text-ink-secondary peer-checked/latex:bg-white peer-checked/latex:text-ink peer-checked/latex:shadow-sm flex items-center justify-center gap-2"
                            >
                                <Sigma className="w-4 h-4 text-emerald-700" />
                                <span>3. Broken LaTeX vs Mathpix OCR</span>
                            </label>
                        </div>

                        {/* TAB 1: Public Google Indexing */}
                        <div className="hidden peer-checked/seo:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-rose-100 text-rose-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #1 · Public Q&amp;A Directory Exposure
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    QuestionAI Publicly Indexes Student Prompts—Where Professors Can Google Them
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    Scroll to the bottom of <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">questionai.com</code> and you will find thousands of verbatim student quiz questions indexed publicly across <em>Math, Biology, History, and Business</em>—often complete with raw <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">&quot;Question 25 of 40&quot;</code> headers. When professors Google their custom exam prompts to check for leaks, public Q&amp;A aggregators expose the exact question text and timestamp.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">QuestionAI Public Q&amp;A Feed</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            Turns user-submitted homework and quiz questions into public SEO pages indexed by Google.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost Zero-Retention Vault</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            Every Double-Click and Snap-It OCR query is processed in volatile memory and discarded immediately—never indexed or published.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // Publicly Indexed on questionai.com
                                    </div>
                                    <div className="space-y-1.5 text-rose-300">
                                        <div>Subject: Mathematics / Business</div>
                                        <div>Prompt: &quot;Question 25 of 40: Suppose the demand curve...&quot;</div>
                                        <div>Status: Indexed on Google Search (200 OK)</div>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/10 text-emerald-300">
                                        <div className="font-bold">✓ ExamGhost Ephemeral Pipeline:</div>
                                        <div className="text-white/80">0 public pages · 0 stored prompts · 100% private</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: 400px Copilot Sidebar Blur */}
                        <div className="hidden peer-checked/sidebar:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-indigo-100 text-indigo-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #2 · Highlight Popups &amp; Viewport Shift
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    Text Selection Popups &amp; 400px Copilot Drawers Trigger SpeedGrader Flags
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    QuestionAI&apos;s Chrome extension waits for you to highlight text with your mouse, injects a floating Copilot icon into the page DOM, and opens a 400px-wide chat drawer on the right side of your screen. Many Canvas, Blackboard, and McGraw-Hill quizzes block text selection (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">user-select: none</code>) or log <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">selectionchange</code>, <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">window.resize</code>, and <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">window.blur</code> events.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">QuestionAI Copilot Drawer</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            Requires highlighting text, mutates the host DOM with floating widgets, and fires <code className="text-[11px]">window.blur</code> when clicked.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost Closed Shadow HUD</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            Double-click any question or press <code className="text-[11px]">⌘+Shift+S</code>—renders inside an isolated <code className="text-[11px]">#shadow-root (closed)</code> with Focus Shield active.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // Canvas Telemetry Comparison
                                    </div>
                                    <div className="space-y-1.5 text-rose-300">
                                        <div>[QuestionAI] document.onselectionchange -&gt; Fired</div>
                                        <div>[QuestionAI] window.onresize (400px drawer) -&gt; Fired</div>
                                        <div>[QuestionAI] window.onblur -&gt; AWAY LOGGED</div>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/10 text-emerald-300">
                                        <div className="font-bold">✓ ExamGhost Focus Shield:</div>
                                        <div className="text-white/80">0 selectionchange · 0 resize · 0 blur events</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: Broken LaTeX vs Mathpix OCR */}
                        <div className="hidden peer-checked/latex:grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-7 space-y-4">
                                <span className="inline-block px-2.5 py-1 rounded-md bg-emerald-100 text-emerald-900 text-xs font-bold uppercase tracking-wider">
                                    Finding #3 · STEM &amp; Equation Accuracy
                                </span>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    Mangled Copied MathJax Strings vs. 0.3s Mathpix Visual OCR
                                </h3>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    When you highlight or copy-paste a Canvas math question containing MathJax or embedded equation images into QuestionAI, it frequently mangles fractions, matrices, and definite integrals into broken strings (e.g., <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">int 1 1 left x frac 4 3</code>)—causing wrong answers on Calculus, Physics, and Chemistry exams. ExamGhost&apos;s <strong>Snap-It OCR</strong> (<code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded">⌘+Shift+S</code>) reads the rendered visual equation directly.
                                </p>
                                <div className="grid sm:grid-cols-2 gap-3 pt-2">
                                    <div className="p-4 rounded-2xl bg-rose-50/70 border border-rose-200">
                                        <div className="text-xs font-bold text-rose-950 mb-1">QuestionAI Text Scraping</div>
                                        <p className="text-xs text-rose-900/90 leading-relaxed">
                                            Strips superscripts, integral bounds, and chemical bond angles when copying DOM text into the chat sidebar.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                                        <div className="text-xs font-bold text-emerald-950 mb-1">ExamGhost Snap-It Vision</div>
                                        <p className="text-xs text-emerald-900/90 leading-relaxed">
                                            Captures rendered LaTeX, circuit diagrams, and organic chemistry structures directly in 0.3 seconds.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:col-span-5">
                                <div className="rounded-2xl bg-[#14171f] text-slate-100 p-5 font-mono text-xs border border-black/20 shadow-md">
                                    <div className="text-slate-400 mb-2 pb-2 border-b border-white/10">
                                        // Canvas MathJax Parsing Test
                                    </div>
                                    <div className="space-y-1.5 text-rose-300">
                                        <div>QuestionAI Highlight Scrape:</div>
                                        <div className="text-white/80">&quot;Evaluate int _ -1 ^ 1 left( x^ frac 4 3 ...&quot;</div>
                                        <div className="text-rose-400">✗ Bounds &amp; exponents corrupted</div>
                                    </div>
                                    <div className="mt-4 pt-3 border-t border-white/10 text-emerald-300">
                                        <div>ExamGhost Mathpix Neural OCR:</div>
                                        <div className="text-emerald-400 font-bold">✓ Exact visual integral parsed in 0.3s</div>
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
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                                    <ShieldAlert className="w-3.5 h-3.5" aria-hidden="true" />
                                    <span>Live Canvas Audit Log Comparison</span>
                                </div>
                                <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
                                    What Your Professor Sees in SpeedGrader: QuestionAI Sidebar vs ExamGhost
                                </h2>
                            </div>
                            <span className="text-xs font-mono text-white/80">MATH-241 Calculus II Midterm</span>
                        </div>

                        <div className="grid lg:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-black/60 border border-rose-500/40 p-5">
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-rose-500/20">
                                    <span className="font-mono text-xs font-bold text-rose-300 uppercase">
                                        QuestionAI Copilot Sidebar Workflow
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-rose-500/20 text-rose-300">
                                        3 TELEMETRY FLAGS
                                    </span>
                                </div>
                                <div className="space-y-2.5 font-mono text-xs text-white/90">
                                    <div className="p-2.5 rounded bg-white/5 border-l-2 border-emerald-500 flex items-center justify-between">
                                        <span>10:15:02 AM — Viewed Question 20 (Inverse Function)</span>
                                        <span className="text-white/75">Normal</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-rose-500/15 border-l-2 border-rose-500 flex items-center justify-between">
                                        <span>10:15:08 AM — Text Selection + Floating Widget Injected</span>
                                        <span className="text-rose-300 font-bold">DOM MUTATION</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-rose-500/15 border-l-2 border-rose-500 flex items-center justify-between">
                                        <span>10:15:11 AM — Window resized (Sidebar opened 400px)</span>
                                        <span className="text-rose-300 font-bold">VIEWPORT SHIFT</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-rose-500/15 border-l-2 border-rose-500 flex items-center justify-between">
                                        <span>10:15:12 AM — Stopped viewing Canvas quiz page (19s)</span>
                                        <span className="text-rose-300 font-bold">BLUR LOGGED</span>
                                    </div>
                                </div>
                            </div>

                            <div className="rounded-2xl bg-black/60 border border-emerald-500/40 p-5">
                                <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-500/20">
                                    <span className="font-mono text-xs font-bold text-emerald-300 uppercase">
                                        ExamGhost Double-Click / Snap-It Workflow
                                    </span>
                                    <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-500/20 text-emerald-300">
                                        0 FLAGS · 100% CLEAN
                                    </span>
                                </div>
                                <div className="space-y-2.5 font-mono text-xs text-white/90">
                                    <div className="p-2.5 rounded bg-white/5 border-l-2 border-emerald-500 flex items-center justify-between">
                                        <span>10:15:02 AM — Viewed Question 20 (Inverse Function)</span>
                                        <span className="text-white/75">Normal</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-emerald-500/15 border-l-2 border-emerald-400 flex items-center justify-between">
                                        <span>10:15:04 AM — [Snap-It ⌘+Shift+S · 0.3s Mathpix Solve]</span>
                                        <span className="text-emerald-300 font-bold">Closed Shadow DOM</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-emerald-500/15 border-l-2 border-emerald-400 flex items-center justify-between">
                                        <span>10:15:05 AM — Focus Shield active (0 blur/resize events)</span>
                                        <span className="text-emerald-300 font-bold">Continuous Focus</span>
                                    </div>
                                    <div className="p-2.5 rounded bg-white/5 border-l-2 border-emerald-500 flex items-center justify-between">
                                        <span>10:15:09 AM — Selected Option B</span>
                                        <span className="text-white/75">Verified</span>
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
                                QuestionAI vs ExamGhost: 10-Point Technical Matrix
                            </h2>
                            <span className="text-xs text-ink-muted font-mono">Verified April 2026</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                                <thead>
                                    <tr className="bg-[#faf8f4] border-b border-black/10">
                                        <th className="py-4 px-5 font-bold text-ink">Evaluation Metric</th>
                                        <th className="py-4 px-5 font-bold text-ink-muted">Academic Impact</th>
                                        <th className="py-4 px-5 font-extrabold text-emerald-950 bg-[#cdeecb]/35">ExamGhost v4.2</th>
                                        <th className="py-4 px-5 font-bold text-ink">QuestionAI (questionai.com)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">UI Architecture on Quizzes</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Avoids viewport resizing &amp; DOM flags</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ Closed Shadow DOM Inline HUD</td>
                                        <td className="py-3.5 px-5 text-rose-800 font-semibold">✗ Right-Hand Copilot Sidebar</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Focus Shield (Tab-Blur Masking)</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Prevents SpeedGrader departure logs</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ Neutralizes blur &amp; visibilitychange</td>
                                        <td className="py-3.5 px-5 text-rose-800 font-semibold">✗ Clicking Sidebar Logs Blur</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Trigger Mechanism</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Works even when text selection is locked</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ Double-Click or ⌘+Shift+S Snip</td>
                                        <td className="py-3.5 px-5 text-ink-secondary">Requires Text Highlighting / Chat</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Question Privacy &amp; Search Indexing</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Protects custom professor questions</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ Zero Retention (Never Indexed)</td>
                                        <td className="py-3.5 px-5 text-rose-800 font-semibold">✗ Publicly Indexes User Questions</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">LaTeX, Calculus &amp; Diagram OCR</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Solves integrals, graphs &amp; chemistry</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ 0.3s In-Memory Mathpix Vision</td>
                                        <td className="py-3.5 px-5 text-ink-secondary">Often Mangles Copied LaTeX Strings</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">3 Stealth Display Modes</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Safe for computer labs &amp; screen shares</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ Invisible, Stealth (10-100%), Explain</td>
                                        <td className="py-3.5 px-5 text-rose-800 font-semibold">✗ Bright Chat Bubble Drawer</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Master Panic Kill Switch (<code className="font-mono">⌘+Shift+U</code>)</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Instant RAM &amp; UI wipe in &lt;8ms</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ Built-In Hardware Hotkey</td>
                                        <td className="py-3.5 px-5 text-rose-800 font-semibold">✗ None</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Full Textbook PDF Summarizer</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Summarize 100-page reading assignments</td>
                                        <td className="py-3.5 px-5 text-ink-muted">Built for live quizzes, not PDF books</td>
                                        <td className="py-3.5 px-5 text-emerald-800 font-bold">✓ Dedicated Web PDF Summarizer</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Free Trial Experience</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Test frontier accuracy before paying</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">✓ 50 Free Solves (Full Frontier AI)</td>
                                        <td className="py-3.5 px-5 text-ink-secondary">Free Basic Chat (Plus Paywall for Pro)</td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-5 font-semibold text-ink">Paid Plans</td>
                                        <td className="py-3.5 px-5 text-ink-muted text-xs">Predictable student cost</td>
                                        <td className="py-3.5 px-5 font-bold text-emerald-800 bg-[#cdeecb]/15">$19/mo · $99/yr ($8.25/mo) · $199 Life</td>
                                        <td className="py-3.5 px-5 text-ink-secondary">QuestionAI Plus (~$9.99–$19.99/mo)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Audit Drawer */}
                        <details className="group border-t border-black/10 bg-[#faf8f4]">
                            <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none text-xs font-mono font-bold text-ink-secondary hover:text-ink">
                                <h3 className="inline-flex items-center gap-2 m-0 inline">
                                    <Code2 className="w-4 h-4 text-indigo-800" />
                                    Technical Domain &amp; Copilot Extension Audit Log (questionai.com)
                                </h3>
                                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="px-6 pb-6 pt-2 text-xs font-mono text-ink-secondary space-y-2 border-t border-black/5 bg-white">
                                <div><strong className="text-ink">Audited Platform:</strong> QuestionAI (<code className="bg-slate-100 px-1.5 py-0.5 rounded">https://www.questionai.com</code> · Web PDF Solver, Summarizer, Calculator &amp; Chrome Copilot Sidebar)</div>
                                <div><strong className="text-ink">Public Indexing Surface:</strong> User-submitted homework and quiz prompts are published in crawlable subject directories (Math, Biology, History, Business) and indexed by search engines.</div>
                                <div><strong className="text-ink">LMS Telemetry Footprint:</strong> Highlighting text triggers <code className="bg-slate-100 px-1.5 py-0.5 rounded">selectionchange</code> + injected floating Copilot widget; opening the right-hand drawer dispatches <code className="bg-rose-50 text-rose-900 px-1.5 py-0.5 rounded">window.resize</code> and <code className="bg-rose-50 text-rose-900 px-1.5 py-0.5 rounded">window.blur</code>.</div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* HONEST BUYER'S GUIDE */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="rounded-3xl bg-white border border-black/10 p-7 shadow-sm">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c4d0f8] text-ink text-xs font-bold mb-4">
                                <FileText className="w-3.5 h-3.5" aria-hidden="true" />
                                <span>When QuestionAI Is Useful</span>
                            </div>
                            <h3 className="font-display font-bold text-xl text-ink mb-3">
                                Use QuestionAI for untimed PDF reading summaries &amp; mobile worksheet scans
                            </h3>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" aria-hidden="true" />
                                    <span>You have a 40-page History or Social Science PDF reading and want QuestionAI&apos;s web <em>Summarizer</em> to produce a shorter or longer bulleted overview.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-indigo-700 shrink-0 mt-0.5" aria-hidden="true" />
                                    <span>You are doing high school or introductory paper homework on your phone and want a free camera scanner for quick explanations.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="rounded-3xl bg-[#091526] text-white border-2 border-emerald-400 p-7 shadow-lift">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-400/20 text-emerald-300 border border-emerald-400/40 text-xs font-bold mb-4">
                                <EyeOff className="w-3.5 h-3.5" aria-hidden="true" />
                                <span>When ExamGhost Is the Clear Winner</span>
                            </div>
                            <h3 className="font-display font-bold text-xl text-white mb-3">
                                Use ExamGhost for live Canvas, Blackboard, Moodle &amp; D2L quizzes
                            </h3>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-white/90 leading-relaxed">
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                                    <span>You need answers <strong>directly inside your quiz page</strong> via Double-Click auto-fill or 25% opacity stealth hints—without opening a 400px Copilot sidebar.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                                    <span>You want <strong>Focus Shield</strong> to block <code className="font-mono">window.blur</code> and <code className="font-mono">visibilitychange</code> telemetry so your SpeedGrader timeline shows zero interruptions.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" aria-hidden="true" />
                                    <span>You want complete question privacy (never indexed on Google) and <strong>50 Free Solves</strong> to test on your own coursework before choosing a pass.</span>
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
                                    Get ExamGhost &amp; 50 Free Solves in Our Student Discord
                                </h2>
                                <p className="text-xs sm:text-sm text-white font-medium mt-0.5">
                                    Join 2,400+ university students for instant extension access, Canvas update alerts, and 24/7 support.
                                </p>
                            </div>
                        </div>
                        <a
                            href="https://discord.gg/aCcsyKYJq4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3.5 rounded-full bg-white text-[#232b88] hover:bg-white/95 text-sm font-bold shadow-sm whitespace-nowrap inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
                        >
                            <span>Join Discord Server</span>
                            <ExternalLink className="w-4 h-4" aria-hidden="true" />
                        </a>
                    </div>
                </section>

                {/* FAQ SECTION */}
                <section className="py-12 max-w-4xl mx-auto px-4 sm:px-6 mb-12">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-3">
                            Frequently Asked Questions: QuestionAI vs ExamGhost
                        </h2>
                        <p className="text-xs sm:text-sm text-ink-muted">
                            Answers on QuestionAI&apos;s Copilot extension, public question indexing, and ExamGhost&apos;s stealth architecture.
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
                    <div className="rounded-[32px] bg-gradient-to-br from-[#eef2ff] via-[#c4d0f8]/50 to-[#ecfdf5] border border-black/10 p-8 sm:p-12 shadow-card mb-12">
                        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-950/10 text-indigo-950 text-xs font-bold mb-3">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    Zero Public Indexing · 50 Free Solves
                                </div>
                                <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight mb-2">
                                    Keep your exam questions private and your SpeedGrader log clean.
                                </h2>
                                <p className="text-sm text-ink-secondary leading-relaxed">
                                    Test ExamGhost right now with <strong>50 Free Solves</strong> ($0 trial, no credit card required), then pick $19/mo Monthly, $99/yr Academic Year ($8.25/mo), or $199 Lifetime.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <a
                                    href="/#pricing"
                                    className="btn-dark px-7 py-4 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#c4d0f8]" aria-hidden="true" />
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
                        Explore More AI Solver Comparisons
                    </h2>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                        <Link prefetch={false} href="/gauth-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 text-xs font-bold text-ink flex items-center justify-between transition-all shadow-sm">
                            <span>ExamGhost vs Gauth AI</span>
                            <ArrowRight className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                        </Link>
                        <Link prefetch={false} href="/solvely-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 text-xs font-bold text-ink flex items-center justify-between transition-all shadow-sm">
                            <span>ExamGhost vs Solvely</span>
                            <ArrowRight className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                        </Link>
                        <Link prefetch={false} href="/answerai-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 text-xs font-bold text-ink flex items-center justify-between transition-all shadow-sm">
                            <span>ExamGhost vs AnswerAI</span>
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
