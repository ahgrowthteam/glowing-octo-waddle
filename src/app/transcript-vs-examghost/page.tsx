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
    BookOpen,
    MousePointerClick,
    BrainCircuit,
    Sparkles,
    Layers,
    Lock,
    Terminal,
    FileText,
    Cpu,
    Check,
    X,
    Keyboard
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { TranscriptStudyHubDemo } from '@/components/TopComparisonDemos';
import StudyAiHubShowcase from '@/components/StudyAiHubShowcase';

export const metadata: Metadata = {
    title: {
        absolute: "Transcript AI vs ExamGhost (2026) — 'The Button' DOM & Study Hub Audit",
    },
    description: "Compare Transcript AI (transcript.study) with ExamGhost. See why Transcript's injected 'The Button' triggers Canvas DOM/blur flags while ExamGhost pairs Zero-Button Double-Click Stealth with a 3-Model Study Hub (Claude 3.7, ChatGPT, DeepSeek-R1).",
    alternates: {
        canonical: "https://examghost.com/transcript-vs-examghost",
    },
    openGraph: {
        title: "Transcript AI vs ExamGhost (2026) — Zero-Button Stealth & Multi-Model Study Hub",
        description: "Transcript AI injects 'The Button' into your exam DOM and locks your Notebook to one model. ExamGhost delivers invisible Double-Click solving + a Claude 3.7, ChatGPT & DeepSeek-R1 Study Workspace.",
        url: "https://examghost.com/transcript-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Transcript AI vs ExamGhost (2026) — 'The Button' DOM & Multi-Model Notebook Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Transcript AI vs ExamGhost (2026) — 'The Button' DOM & Study Hub Audit",
        description: "Compare Transcript (transcript.study) with ExamGhost. Get 5 Free Solves / Day, Zero-Button Double-Click Stealth, and our 3-Model Study & Homework AI Workspace.",
        images: ["/og-image.jpg"],
    },
};

export default function TranscriptComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-12",
                "dateModified": "2026-10-27",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/transcript-vs-examghost#webpage",
                "url": "https://examghost.com/transcript-vs-examghost",
                "name": "Transcript AI vs ExamGhost (2026 Review) | 'The Button' DOM Injection vs Zero-Button Stealth + 3-Model Study Hub",
                "description": "Technical evaluation comparing Transcript - AI Homework Helper (transcript.study, Chrome ID klknhfgkblobpfimidmhkclikdalnoke) and ExamGhost across zero-button in-quiz stealth, Canvas SpeedGrader blur protection, and multi-model study notebooks (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1).",
                "breadcrumb": { "@id": "https://examghost.com/transcript-vs-examghost#breadcrumb" },
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
                        "name": "Transcript - AI Homework Helper",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension, iOS, Android",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "0.00",
                            "highPrice": "14.99",
                            "priceCurrency": "USD",
                            "offerCount": "2"
                        }
                    }
                ]
            },
            {
                "@type": "TechArticle",
                "@id": "https://examghost.com/transcript-vs-examghost#article",
                "headline": "Transcript AI vs ExamGhost (2026): In-Quiz Zero-Button Stealth & Multi-Model Study Notebook Showdown",
                "datePublished": "2026-02-12",
                "dateModified": "2026-10-27",
                "author": {
                    "@type": "Organization",
                    "name": "ExamGhost Security & EdTech Lab",
                    "url": "https://examghost.com"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "ExamGhost",
                    "url": "https://examghost.com"
                },
                "description": "Deep architectural teardown of Transcript AI's injected 'The Button' toolbar and single-model cloud notebook versus ExamGhost's Closed Shadow DOM Double-Click solver and 3-Model Study Hub."
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/transcript-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "Transcript AI vs ExamGhost", "item": "https://examghost.com/transcript-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/transcript-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can Canvas detect Transcript AI's 'The Button' and Snapshot features?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Transcript (transcript.study, Chrome ID klknhfgkblobpfimidmhkclikdalnoke) relies on highlighting question text to inject 'The Button'—a visible floating helper node in the host page DOM—or opening an interactive AI Chat & Voice sidebar. Highlighting text triggers selectionchange events, fails on CSS user-select: none pages, and clicking into Transcript's overlay fires window.blur in Canvas SpeedGrader."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ExamGhost beat Transcript AI at its own Study Notebook game?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "While Transcript's Notebook lets you upload class notes to query a single default AI model, ExamGhost includes a full Multi-Model Study & Homework AI Workspace where you can upload syllabus PDFs, lecture slides, and lab rubrics and switch instantaneously between Claude 3.7 Sonnet (best for essays & humanities), ChatGPT o3-mini / GPT-4o (best for versatile STEM & coding), and DeepSeek-R1 (best for rigorous step-by-step LaTeX math proofs)."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if a Canvas quiz disables text highlighting while using Transcript?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Transcript's 'Text Selection & The Button' workflow breaks when a professor enables CSS user-select: none or blocks selection events. Students are forced to use Transcript's Cmd/Ctrl+Shift+1 Snapshot drag tool, which opens a visible screen-capture box without Focus Shield blur suppression. ExamGhost solves questions with a simple Double-Click or Alt+S Hybrid Vision+DOM Snip inside a Closed Shadow Root with zero text highlighting required."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does Transcript.study pricing compare to ExamGhost in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Transcript charges a recurring $14.99/month subscription ($179.88/year, or $719.52 over a 4-year degree) with no academic-year discount and no lifetime pass. ExamGhost gives every student 5 Free Solves / Day (auto-refills every 24 hours, $0 no card required), plus 2-in-1 plans ($19/mo Monthly, $99/yr Academic Year Pass [$8.25/mo], or $199 Lifetime) that unlock both Unlimited Stealth Extension Solves and full access to the Claude 3.7 + ChatGPT + DeepSeek-R1 Study Workspace."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-[#faf7f2] text-ink selection:bg-purple-200/70 selection:text-ink font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">
                {/* Editorial Masthead Breadcrumb */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-34 pb-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-black/10 text-xs text-ink-muted">
                        <nav aria-label="Breadcrumb" className="flex items-center gap-2">
                            <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                            <span>/</span>
                            <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Compare Extensions</Link>
                            <span>/</span>
                            <span className="text-ink font-bold">Transcript AI vs ExamGhost</span>
                        </nav>
                        <div className="flex items-center gap-3 font-mono text-[11px]">
                            <span className="text-purple-900 font-semibold">AUDIT DOSSIER #04</span>
                            <span>·</span>
                            <span>ID: klknhfgkblobpfimidmhkclikdalnoke</span>
                        </div>
                    </div>
                </div>

                {/* =====================================================================
                    UNIQUE ARCHETYPE HERO: SPLIT-FOCUS DUAL-MODE EDITORIAL DOSSIER
                    (Mode A: In-Quiz Zero-Button Stealth | Mode B: 3-Model Study Hub)
                ===================================================================== */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pt-4 pb-16 sm:pb-20">
                    <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
                        {/* Left 7 Columns: Editorial Narrative */}
                        <div className="lg:col-span-7 flex flex-col justify-between rounded-[36px] bg-white border border-black/10 p-6 sm:p-10 md:p-12 shadow-card relative overflow-hidden">
                            <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-purple-200/40 blur-3xl pointer-events-none" />

                            <div>
                                <div className="flex flex-wrap items-center gap-2 mb-6">
                                    <span className="px-3 py-1 rounded-full bg-purple-950 text-[#f3eaff] text-[11px] font-mono font-bold uppercase tracking-wider">
                                        2-in-1 Showdown: Exam Stealth + Study Notebook
                                    </span>
                                    <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-950 text-[11px] font-bold">
                                        5 Free Solves / Day · Auto-Refills Every 24h
                                    </span>
                                </div>

                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[48px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    Transcript AI injects <span className="underline decoration-rose-500/60 decoration-wavy underline-offset-4">&ldquo;The Button&rdquo;</span> into your exam DOM—and locks your Notebook to one model.
                                </h1>

                                <p className="aeo-summary text-sm sm:text-base lg:text-lg text-ink-secondary leading-relaxed mb-5">
                                    Over 100,000 students installed <strong>Transcript AI (`transcript.study`)</strong> because its cloud <em>Notebook</em> lets you upload lecture slides. But in 2026, Transcript suffers from two critical bottlenecks: during a live Canvas quiz, highlighting text to trigger <strong>&ldquo;The Button&rdquo;</strong> mutates the host DOM and clicking its sidebar fires <code className="px-1.5 py-0.5 rounded bg-rose-100 text-rose-900 font-mono text-xs">window.blur</code> in SpeedGrader—and after class, its Notebook restricts you to a single generic AI wrapper for $14.99/mo.
                                </p>

                                <div className="p-4 rounded-2xl bg-[#f6f1fe] border border-purple-950/15 mb-7">
                                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-purple-950 mb-1.5 flex items-center gap-1.5">
                                        <Sparkles className="w-4 h-4 text-purple-700" />
                                        <span>The ExamGhost 2-in-1 Upgrade ($8.25/mo Academic Pass)</span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                        ExamGhost replaces Transcript in <strong>both</strong> modes: you get <strong>Zero-Button `Double-Click` Stealth</strong> (`Alt+1` Invisible / `Alt+2` Stealth / `Alt+3` Explain + 100% Focus Shield) inside live exams, <em>plus</em> our <strong>Multi-Model Study &amp; Homework AI Workspace</strong> where you can query <strong>Claude 3.7 Sonnet, ChatGPT (o3-mini / GPT-4o), and DeepSeek-R1</strong> side-by-side on your uploaded syllabus PDFs.
                                    </p>
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-wrap items-center gap-3 mb-5">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#e2d3fa]" aria-hidden="true" />
                                        <span>Start 5 Free Solves / Day · $0 No Card</span>
                                    </Link>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-5 py-4 rounded-full text-sm font-semibold bg-[#faf7f2] hover:bg-purple-50 text-ink border border-black/15 inline-flex items-center gap-1.5 transition-colors"
                                    >
                                        <span>Try Live Canvas Demo</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <a
                                        href="https://discord.gg/aCcsyKYJq4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-4 rounded-full text-sm font-semibold bg-[#5865F2] hover:bg-[#4752c4] text-white inline-flex items-center gap-2 transition-colors"
                                    >
                                        <FaDiscord className="w-4 h-4" aria-hidden="true" />
                                        <span>Discord</span>
                                    </a>
                                </div>

                                <div className="grid grid-cols-3 gap-2 pt-4 border-t border-black/10 text-[11px] font-medium text-ink-secondary">
                                    <div className="flex items-center gap-1.5">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                                        <span>0 Host DOM Buttons</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                                        <span>Claude + GPT + DeepSeek</span>
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                                        <span>⌘+Shift+U Panic Wipe</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right 5 Columns: Dual-Workflow Architectural Split Dossier */}
                        <div className="lg:col-span-5 flex flex-col gap-5">
                            {/* Card A: Mode 1 — Inside a Live Proctored/Timed Quiz */}
                            <div className="flex-1 rounded-[32px] bg-[#13111c] text-white p-6 sm:p-7 border border-purple-500/30 shadow-lift flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10">
                                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                                            <EyeOff className="w-3.5 h-3.5 text-emerald-400" />
                                            Mode 01 // Live Canvas Quiz Stealth
                                        </span>
                                        <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-mono text-[10px] font-bold">
                                            0 BLUR FLAGS
                                        </span>
                                    </div>

                                    <h2 className="font-display text-lg sm:text-xl font-bold text-white mb-3">
                                        Why &ldquo;The Button&rdquo; Gets Flagged vs Zero-Button `Double-Click`
                                    </h2>

                                    <div className="space-y-2.5 text-xs">
                                        <div className="p-3 rounded-2xl bg-rose-950/60 border border-rose-500/30">
                                            <div className="font-mono text-[10px] text-rose-300 font-bold uppercase mb-0.5">
                                                ✗ Transcript AI (transcript.study):
                                            </div>
                                            <p className="text-slate-200 leading-relaxed">
                                                Requires dragging across text to inject <code className="text-rose-300">&lt;div class=&quot;transcript-btn&quot;&gt;</code> into the quiz DOM. Fails on <code className="text-rose-300">user-select: none</code> and fires <code className="text-rose-300">window.blur</code> when opening the Voice/Chat drawer.
                                            </p>
                                        </div>

                                        <div className="p-3 rounded-2xl bg-emerald-950/60 border border-emerald-500/30">
                                            <div className="font-mono text-[10px] text-emerald-300 font-bold uppercase mb-0.5">
                                                ✓ ExamGhost v4.2 (Closed Shadow Root):
                                            </div>
                                            <p className="text-slate-200 leading-relaxed">
                                                <strong>Double-click</strong> any question or press <code className="text-emerald-300">Alt+S</code> to snip locked graphs. Switch between <code className="text-emerald-300">Alt+1</code> Invisible auto-tick, <code className="text-emerald-300">Alt+2</code> Stealth badge, or <code className="text-emerald-300">Alt+3</code> Explain—with 100% Focus Shield.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                                    <span>Host DOM Footprint: 0 Nodes</span>
                                    <span className="text-emerald-300 font-bold">⌘+Shift+U Master Toggle</span>
                                </div>
                            </div>

                            {/* Card B: Mode 2 — Post-Class Study & Homework AI Workspace */}
                            <div className="flex-1 rounded-[32px] bg-gradient-to-br from-[#e7dafc] via-[#f2ebfe] to-white p-6 sm:p-7 border border-black/10 shadow-card flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-black/10">
                                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-purple-950 flex items-center gap-1.5">
                                            <BrainCircuit className="w-3.5 h-3.5 text-purple-800" />
                                            Mode 02 // Study &amp; Homework AI Hub
                                        </span>
                                        <span className="px-2 py-0.5 rounded bg-purple-950 text-white font-mono text-[10px] font-bold">
                                            3 FRONTIER MODELS
                                        </span>
                                    </div>

                                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-2.5">
                                        Beating Transcript&apos;s Notebook with Claude 3.7 + ChatGPT + DeepSeek-R1
                                    </h2>

                                    <p className="text-xs text-ink-secondary leading-relaxed mb-3.5">
                                        Transcript&apos;s main selling point is its Notebook for class PDFs—but it routes every subject through one generic model. ExamGhost&apos;s <strong>Study &amp; Homework AI Workspace</strong> lets you upload your syllabus and toggle between:
                                    </p>

                                    <div className="grid grid-cols-3 gap-2 text-[11px]">
                                        <div className="p-2.5 rounded-xl bg-white border border-black/10">
                                            <div className="font-bold text-purple-950">Claude 3.7</div>
                                            <div className="text-[10px] text-ink-muted mt-0.5">Essays, Bio &amp; Long PDFs</div>
                                        </div>
                                        <div className="p-2.5 rounded-xl bg-white border border-black/10">
                                            <div className="font-bold text-emerald-900">ChatGPT 4o/o3</div>
                                            <div className="text-[10px] text-ink-muted mt-0.5">Chem, CS &amp; Multi-Modal</div>
                                        </div>
                                        <div className="p-2.5 rounded-xl bg-white border border-black/10">
                                            <div className="font-bold text-sky-900">DeepSeek-R1</div>
                                            <div className="text-[10px] text-ink-muted mt-0.5">LaTeX Calc &amp; Physics Proofs</div>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-3 border-t border-black/10 flex items-center justify-between text-[11px] font-semibold text-purple-950">
                                    <span>Included in all ExamGhost plans</span>
                                    <span className="font-mono font-bold">$8.25/mo vs $14.99/mo</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* =====================================================================
                    INTERACTIVE MOTION DEMO: TRANSCRIPT STUDY HUB & "THE BUTTON" DEMO
                ===================================================================== */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20" aria-label="Interactive Transcript AI vs ExamGhost Simulation">
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <span className="px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                            Interactive Live Simulation
                        </span>
                        <h2 className="font-display text-2xl sm:text-4xl font-extrabold tracking-tight text-ink mb-3">
                            Watch Transcript&apos;s &ldquo;The Button&rdquo; vs ExamGhost&apos;s Stealth + 3-Model Study Hub
                        </h2>
                        <p className="text-xs sm:text-base text-ink-secondary">
                            See how Transcript exposes a floating button in the exam DOM while ExamGhost solves silently—and how our multi-model Study Workspace outperforms Transcript&apos;s single-model Notebook.
                        </p>
                    </div>

                    <TranscriptStudyHubDemo />
                </section>

                {/* =====================================================================
                    BESPOKE INVESTIGATIVE SECTION:
                    "Why Transcript AI's 'The Button' Fails Visual & DOM Audits +
                     How ExamGhost Beats Transcript At Its Own Notebook Game"
                ===================================================================== */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20" aria-label="Deep Architectural Audit">
                    <div className="rounded-[36px] bg-white border border-black/10 p-6 sm:p-10 md:p-12 shadow-card">
                        <div className="max-w-3xl mb-10">
                            <span className="px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Deep Architectural Teardown
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight leading-[1.1] mb-4">
                                Why Transcript AI&apos;s &ldquo;The Button&rdquo; Fails Visual &amp; DOM Audits—And How ExamGhost Beats Transcript at Its Own Notebook Game
                            </h2>
                            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                Transcript was designed as a visible homework companion, not a stealth exam engine. Here is the exact technical sequence that happens when you use Transcript on a timed quiz—and why students are migrating both their live exams and their daily study notes to ExamGhost.
                            </p>
                        </div>

                        {/* PART 1: 4-Stage Forensic Timeline of "The Button" Failure */}
                        <div className="mb-12">
                            <div className="flex items-center justify-between flex-wrap gap-2 mb-5">
                                <h3 className="font-display text-lg sm:text-xl font-bold text-ink flex items-center gap-2">
                                    <FileWarning className="w-5 h-5 text-rose-600" />
                                    <span>Part 1: The 4-Stage Telemetry Trail of Transcript&apos;s &ldquo;The Button&rdquo;</span>
                                </h3>
                                <span className="text-xs font-mono text-ink-muted">Canvas SpeedGrader &amp; DOM Mutation Analysis</span>
                            </div>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {/* Stage 1 */}
                                <div className="rounded-2xl bg-[#faf7f2] border border-black/10 p-5 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 font-mono text-[11px] font-bold">
                                                STAGE 01
                                            </span>
                                            <MousePointerClick className="w-4 h-4 text-rose-700" />
                                        </div>
                                        <h4 className="font-display font-bold text-base text-ink mb-2">
                                            Forced Text Highlighting &amp; `user-select: none` Lockouts
                                        </h4>
                                        <p className="text-xs text-ink-secondary leading-relaxed mb-3">
                                            Transcript requires you to drag your cursor across question text to wake up its script. On quizzes where instructors enable CSS <code className="bg-black/5 px-1 rounded">user-select: none</code> or block <code className="bg-black/5 px-1 rounded">selectstart</code>, Transcript&apos;s primary trigger is dead on arrival.
                                        </p>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-950 font-semibold">
                                        ✓ ExamGhost Fix: Zero highlighting. Just <strong>Double-Click</strong> anywhere on the question.
                                    </div>
                                </div>

                                {/* Stage 2 */}
                                <div className="rounded-2xl bg-[#faf7f2] border border-black/10 p-5 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 font-mono text-[11px] font-bold">
                                                STAGE 02
                                            </span>
                                            <Terminal className="w-4 h-4 text-rose-700" />
                                        </div>
                                        <h4 className="font-display font-bold text-base text-ink mb-2">
                                            Host DOM Injection of &ldquo;The Button&rdquo;
                                        </h4>
                                        <p className="text-xs text-ink-secondary leading-relaxed mb-3">
                                            Once text is selected, Transcript appends a floating action icon (&ldquo;The Button&rdquo;) directly into the host page DOM tree. Any <code className="bg-black/5 px-1 rounded">MutationObserver</code> watching the quiz container immediately detects the foreign node.
                                        </p>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-950 font-semibold">
                                        ✓ ExamGhost Fix: Encapsulated inside a <strong>Closed Shadow DOM v1</strong> root (`0` host buttons).
                                    </div>
                                </div>

                                {/* Stage 3 */}
                                <div className="rounded-2xl bg-[#faf7f2] border border-black/10 p-5 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 font-mono text-[11px] font-bold">
                                                STAGE 03
                                            </span>
                                            <AlertTriangle className="w-4 h-4 text-rose-700" />
                                        </div>
                                        <h4 className="font-display font-bold text-base text-ink mb-2">
                                            Unshielded `window.blur` on Sidebar &amp; Snapshot
                                        </h4>
                                        <p className="text-xs text-ink-secondary leading-relaxed mb-3">
                                            Clicking &ldquo;The Button&rdquo; or pressing <code className="bg-black/5 px-1 rounded">Cmd+Shift+1</code> (Snapshot) shifts active focus into Transcript&apos;s AI Chat &amp; Voice panel—firing <code className="bg-black/5 px-1 rounded">window.blur</code> and logging <em>&ldquo;Stopped viewing the Canvas quiz-taking page&rdquo;</em>.
                                        </p>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-950 font-semibold">
                                        ✓ ExamGhost Fix: <strong>Focus Shield</strong> blocks `blur`, `focusout`, &amp; `visibilitychange` 100%.
                                    </div>
                                </div>

                                {/* Stage 4 */}
                                <div className="rounded-2xl bg-[#faf7f2] border border-black/10 p-5 flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-3">
                                            <span className="px-2.5 py-0.5 rounded-full bg-rose-100 text-rose-900 font-mono text-[11px] font-bold">
                                                STAGE 04
                                            </span>
                                            <Keyboard className="w-4 h-4 text-rose-700" />
                                        </div>
                                        <h4 className="font-display font-bold text-base text-ink mb-2">
                                            Visible Sidebar UI with Zero Panic Wipe
                                        </h4>
                                        <p className="text-xs text-ink-secondary leading-relaxed mb-3">
                                            In a lecture hall or lab, Transcript&apos;s bright chat drawer is visible from 15 feet away and has no emergency kill-switch if a TA walks down your row.
                                        </p>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-[11px] text-emerald-950 font-semibold">
                                        ✓ ExamGhost Fix: Use <code className="font-mono">Alt+1</code> Invisible mode or <code className="font-mono">⌘+Shift+U</code> instant RAM wipe.
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PART 2: How ExamGhost Beats Transcript at Its Own Notebook Game */}
                        <div className="rounded-3xl bg-gradient-to-br from-[#161224] via-[#1d1830] to-[#121c24] text-white p-6 sm:p-9 border border-purple-500/30">
                            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 pb-6 mb-7 border-b border-white/10">
                                <div>
                                    <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-200 text-xs font-mono font-bold uppercase tracking-wider mb-2.5 inline-block">
                                        Part 2: Study &amp; Homework Notebook Comparison
                                    </span>
                                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                        Why settle for Transcript&apos;s 1-Model Notebook when ExamGhost gives you 3 Frontier AI Brains?
                                    </h3>
                                </div>
                                <div className="text-xs font-mono text-purple-200 bg-white/5 px-3.5 py-2 rounded-xl border border-white/10 shrink-0">
                                    Syllabus PDF + Lecture Slides RAG + Multi-Model Switching
                                </div>
                            </div>

                            <div className="grid md:grid-cols-3 gap-5 mb-6">
                                {/* Model 1: Claude 3.7 Sonnet */}
                                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-2.5 py-1 rounded-lg bg-purple-500/20 text-purple-200 font-mono text-xs font-bold">
                                            Claude 3.7 Sonnet
                                        </span>
                                        <FileText className="w-4 h-4 text-purple-300" />
                                    </div>
                                    <h4 className="font-display font-bold text-base text-white mb-2">
                                        Unmatched for Essays, Bio, Nursing &amp; 200-Page PDFs
                                    </h4>
                                    <p className="text-xs text-slate-300 leading-relaxed">
                                        Upload your entire semester syllabus, lab manual, or case study packet. Claude 3.7 Sonnet synthesizes nuanced arguments, nursing NCLEX rationales, and natural human-sounding essay drafts that never read like generic AI slop.
                                    </p>
                                </div>

                                {/* Model 2: ChatGPT (GPT-4o / o3-mini) */}
                                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-2.5 py-1 rounded-lg bg-emerald-500/20 text-emerald-200 font-mono text-xs font-bold">
                                            ChatGPT (4o / o3-mini)
                                        </span>
                                        <Cpu className="w-4 h-4 text-emerald-300" />
                                    </div>
                                    <h4 className="font-display font-bold text-base text-white mb-2">
                                        Fast Multi-Modal Diagrams, Chemistry &amp; CS Debugging
                                    </h4>
                                    <p className="text-xs text-slate-300 leading-relaxed">
                                        Drop in a photo of a handwritten organic chemistry mechanism, circuit schematic, or Python traceback. ChatGPT 4o &amp; o3-mini parse visual diagrams and generate clean, runnable code and study flashcards in seconds.
                                    </p>
                                </div>

                                {/* Model 3: DeepSeek-R1 */}
                                <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                                    <div className="flex items-center justify-between mb-3">
                                        <span className="px-2.5 py-1 rounded-lg bg-sky-500/20 text-sky-200 font-mono text-xs font-bold">
                                            DeepSeek-R1 Reasoning
                                        </span>
                                        <BrainCircuit className="w-4 h-4 text-sky-300" />
                                    </div>
                                    <h4 className="font-display font-bold text-base text-white mb-2">
                                        Chain-of-Thought LaTeX Calculus, Stats &amp; Physics Proofs
                                    </h4>
                                    <p className="text-xs text-slate-300 leading-relaxed">
                                        When Transcript&apos;s default model hallucinates on multivariable calculus, differential equations, or econometrics, switch to DeepSeek-R1 to inspect every step-by-step chain-of-thought derivation rendered in crisp LaTeX.
                                    </p>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-400/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs">
                                <div className="text-emerald-100">
                                    <strong className="text-white">How Course RAG Connects Both Worlds:</strong> Anything you upload to your ExamGhost Study Workspace automatically grounds your live in-exam <code className="text-emerald-300">Double-Click</code> and <code className="text-emerald-300">Alt+S</code> solves in your professor&apos;s exact lecture slides.
                                </div>
                                <Link prefetch={false} href="/#pricing" className="px-4 py-2.5 rounded-full bg-emerald-400 text-slate-950 font-bold shrink-0 hover:bg-emerald-300 transition-colors">
                                    Try 5 Free Solves / Day →
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================================
                    EMBEDDED STUDY AI HUB SHOWCASE (COMPACT)
                ===================================================================== */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20" aria-label="ExamGhost Study and Homework AI Workspace Showcase">
                    <StudyAiHubShowcase compact />
                </section>

                {/* =====================================================================
                    SPEEDGRADER TELEMETRY + 2-IN-1 PRICING VALUE BREAKDOWN
                ===================================================================== */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20" aria-label="Canvas SpeedGrader Log & Pricing Comparison">
                    <div className="grid lg:grid-cols-12 gap-6 items-stretch">
                        {/* Left 7 Cols: SpeedGrader Audit Log */}
                        <div className="lg:col-span-7 rounded-[32px] bg-ink text-white p-6 sm:p-8 shadow-lift flex flex-col justify-between">
                            <div>
                                <span className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-300 text-[11px] font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                    Live Canvas SpeedGrader Telemetry
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                                    What Your Professor Sees in the Quiz Log
                                </h2>
                                <p className="text-xs sm:text-sm text-slate-300 mb-6">
                                    Highlighting text for Transcript&apos;s &ldquo;The Button&rdquo; vs running ExamGhost&apos;s Zero-Button `Double-Click` with Focus Shield.
                                </p>

                                <div className="grid sm:grid-cols-2 gap-4 font-mono text-xs">
                                    {/* Transcript Log */}
                                    <div className="rounded-2xl bg-slate-900 border border-rose-500/40 p-4">
                                        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-rose-500/20 text-rose-300 font-bold text-[11px]">
                                            <span>Transcript (&ldquo;The Button&rdquo;)</span>
                                            <span className="bg-rose-950 text-rose-200 px-2 py-0.5 rounded border border-rose-500/40 text-[10px]">FLAGGED</span>
                                        </div>
                                        <div className="space-y-2 text-[11px] text-slate-300">
                                            <div>13:20:01 — Started quiz attempt</div>
                                            <div className="p-2 rounded-lg bg-rose-950/60 border border-rose-500/30 text-rose-200">
                                                13:20:18 — DOM Mutation: injected &ldquo;The Button&rdquo;
                                                <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Text selection + floating toolbar node</span>
                                            </div>
                                            <div className="p-2 rounded-lg bg-rose-950/60 border border-rose-500/30 text-rose-200">
                                                13:20:24 — Stopped viewing quiz (0:34)
                                                <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Clicked into Transcript Chat / Notebook</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* ExamGhost Log */}
                                    <div className="rounded-2xl bg-slate-900 border border-emerald-500/40 p-4">
                                        <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-emerald-500/20 text-emerald-300 font-bold text-[11px]">
                                            <span>ExamGhost (`Double-Click`)</span>
                                            <span className="bg-emerald-950 text-emerald-200 px-2 py-0.5 rounded border border-emerald-500/40 text-[10px]">100% CLEAN</span>
                                        </div>
                                        <div className="space-y-2 text-[11px] text-slate-300">
                                            <div>13:20:01 — Started quiz attempt</div>
                                            <div className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-200">
                                                13:20:41 — Answered Q1 (Course RAG Match)
                                                <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Double-Click · Closed Shadow Root · 0 blur</span>
                                            </div>
                                            <div className="p-2 rounded-lg bg-emerald-950/50 border border-emerald-500/30 text-emerald-200">
                                                13:21:22 — Answered Q2 (`Alt+S` Vision Snip)
                                                <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Focus Shield locked · 0 DOM mutations</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-5 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-300">
                                <span>Stealth Hotkeys: <code className="text-emerald-300">Alt+1</code> Invisible · <code className="text-emerald-300">Alt+2</code> Stealth · <code className="text-emerald-300">Alt+3</code> Explain</span>
                                <span className="font-mono text-emerald-300">Master Kill-Switch: ⌘+Shift+U</span>
                            </div>
                        </div>

                        {/* Right 5 Cols: 2-in-1 Pricing Math Card */}
                        <div className="lg:col-span-5 rounded-[32px] bg-white border border-black/10 p-6 sm:p-8 shadow-card flex flex-col justify-between">
                            <div>
                                <span className="px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-950 text-[11px] font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                    2026 Tuition &amp; Subscription Math
                                </span>
                                <h2 className="font-display text-2xl font-extrabold text-ink mb-2">
                                    Stop Paying $179.88/yr for a Unshielded Sidebar
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-5">
                                    Transcript bills <strong>$14.99 every single month ($179.88/year)</strong> with no academic pass or lifetime license. ExamGhost gives you a daily refilling free tier and a 2-in-1 pro suite for nearly half the annual cost:
                                </p>

                                <div className="space-y-3 mb-5">
                                    <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-300 flex items-center justify-between">
                                        <div>
                                            <div className="font-display font-bold text-sm text-emerald-950">Free Daily Tier ($0 · No Card)</div>
                                            <div className="text-[11px] text-emerald-900">Auto-refills every 24 hours ($0 no credit card)</div>
                                        </div>
                                        <span className="font-mono font-extrabold text-sm text-emerald-950 bg-white px-2.5 py-1 rounded-lg border border-emerald-300">
                                            5 / Day Free
                                        </span>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2.5 text-center">
                                        <div className="p-3 rounded-2xl bg-[#faf7f2] border border-black/10">
                                            <div className="font-display font-extrabold text-lg text-ink">$19<span className="text-xs font-normal text-ink-muted">/mo</span></div>
                                            <div className="text-[11px] font-bold text-ink">Monthly Sprint</div>
                                            <div className="text-[10px] text-ink-muted mt-0.5">Cancel anytime</div>
                                        </div>
                                        <div className="p-3 rounded-2xl bg-purple-950 text-white border border-purple-900 shadow-sm">
                                            <div className="font-display font-extrabold text-lg">$8.25<span className="text-xs font-normal text-purple-200">/mo</span></div>
                                            <div className="text-[11px] font-bold text-purple-200">$99/yr Academic</div>
                                            <div className="text-[10px] text-emerald-300 mt-0.5">Save $80/yr vs Transcript</div>
                                        </div>
                                        <div className="p-3 rounded-2xl bg-[#faf7f2] border border-black/10">
                                            <div className="font-display font-extrabold text-lg text-ink">$199</div>
                                            <div className="text-[11px] font-bold text-ink">Lifetime Pass</div>
                                            <div className="text-[10px] text-ink-muted mt-0.5">One-time forever</div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-3.5 rounded-2xl bg-[#f6f1fe] border border-purple-200 text-xs text-purple-950">
                                <strong>2-in-1 Value Included:</strong> Every paid plan unlocks (1) <strong>Unlimited Stealth Extension Solves</strong> + (2) <strong>Unlimited Claude 3.7 Sonnet, ChatGPT &amp; DeepSeek-R1 Study Hub</strong>.
                            </div>
                        </div>
                    </div>
                </section>

                {/* =====================================================================
                    HEAD-TO-HEAD COMPARISON MATRIX + TECHNICAL MANIFEST DRAWER
                ===================================================================== */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20" aria-label="Feature Comparison Table">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <h2 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-ink mb-2">
                                Complete Technical Comparison: ExamGhost vs Transcript AI (2026)
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Side-by-side audit of ExamGhost v4.2 and Transcript - AI Homework Helper (transcript.study).
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black/10">
                                        <th className="py-3.5 px-4 font-bold text-ink">Feature / Capability</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-900 bg-emerald-50/70 rounded-t-xl">ExamGhost (v4.2 Stealth + Study Hub)</th>
                                        <th className="py-3.5 px-4 font-bold text-ink-muted">Transcript AI (transcript.study)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">In-Quiz Trigger Mechanism</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Zero-Button `Double-Click` or `Alt+S` Hybrid Snip</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Highlight text to click injected &ldquo;The Button&rdquo;</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Focus Shield (Window Blur Suppression)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 100% Intercepted (0 SpeedGrader blur flags)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ None (Clicking Chat/Voice sidebar logs blur)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">DOM Isolation &amp; Stealth Display Modes</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Closed Shadow DOM (`Alt+1` Invisible / `Alt+2` Stealth / `Alt+3` Explain)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Mutates host DOM with &ldquo;The Button&rdquo; + full sidebar</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Study &amp; Homework AI Models</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 3 Frontier Models: Claude 3.7 Sonnet + ChatGPT (4o/o3-mini) + DeepSeek-R1</td>
                                        <td className="py-3.5 px-4 text-ink-muted">Single default AI model in Notebook</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Course Notes &amp; Syllabus PDF Upload (RAG)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Local-First RAG Vault (Syncs to both Study Hub &amp; Live Exams)</td>
                                        <td className="py-3.5 px-4 text-ink-muted">✓ Cloud &ldquo;Notebook&rdquo; upload space</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Works When Text Selection Is Blocked (`user-select: none`)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Automatic DOM Traversal + `Alt+S` Vision OCR</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Selection button fails; forces unshielded Snapshot</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Emergency Master Kill-Switch</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ `⌘+Shift+U` Instantly Wipes UI &amp; RAM</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ None</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Free Starter Quota</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 5 Free Solves / Day (Auto-refills every 24h · $0 No card)</td>
                                        <td className="py-3.5 px-4 text-ink-muted">Limited trial queries</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Pricing &amp; Academic Value</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ $19/mo · $99/yr ($8.25/mo) · $199 Lifetime (2-in-1 Suite)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">$14.99/mo ($179.88/yr · No Lifetime option)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store Manifest & Domain Audit */}
                        <details className="mt-6 group rounded-2xl bg-[#faf7f2] border border-black/10 p-4 text-xs">
                            <summary className="font-mono font-bold text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (Transcript AI)</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="mt-3 pt-3 border-t border-black/10 grid sm:grid-cols-2 gap-3 font-mono text-[11px] text-ink-secondary">
                                <div>
                                    <span className="text-ink font-bold block">Chrome Extension ID &amp; Developer:</span>
                                    Transcript - AI Homework Helper (<code>klknhfgkblobpfimidmhkclikdalnoke</code> · Transcript Technologies Inc.)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Store Footprint &amp; Rating:</span>
                                    100,000+ users · 4.7★ (342 ratings) · Domain: <code>transcript.study</code>
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Primary Interaction Mechanics:</span>
                                    &ldquo;Text Selection &amp; The Button&rdquo; (DOM injection) + &ldquo;Scan and Solve (Snapshot)&rdquo; (<code>Cmd/Ctrl+Shift+1</code>)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Exam Telemetry Vulnerability:</span>
                                    No <code>window.blur</code> or <code>visibilitychange</code> interception when interacting with AI Chat / Voice / Notebook
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* =====================================================================
                    STUDENT MIGRATION STORY + FAQ ACCORDION
                ===================================================================== */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-20" aria-label="Student Review and FAQ">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#e2d3fa]/55 via-white to-white border border-black/10 p-6 sm:p-10 shadow-sm mb-14">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-xs font-bold text-ink ml-2">Verified Student Migration from Transcript.study</span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-relaxed mb-6">
                            &ldquo;I originally subscribed to Transcript for $14.99/mo because I liked uploading my biology lecture PDFs into its Notebook. But during actual Canvas quizzes, highlighting every question to make &lsquo;The Button&rsquo; pop up felt super sketchy, and clicking into the Transcript chat sidebar logged tab-switch events in SpeedGrader. Switching to ExamGhost gave me a 3-model Study Hub where I use Claude 3.7 for lab reports and DeepSeek-R1 for biostats—plus during quizzes I just double-click and get the answer in `Alt+1` Invisible mode with zero blur logs.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-purple-950 text-white font-bold flex items-center justify-center text-sm">
                                AN
                            </div>
                            <div>
                                <div className="text-sm font-bold text-ink">Avery N.</div>
                                <div className="text-xs text-ink-muted">Molecular Biology · University of Washington</div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <span className="px-3 py-1 rounded-full bg-black/5 text-xs font-mono font-bold uppercase tracking-wider text-ink-muted mb-2 inline-block">
                            Student FAQ
                        </span>
                        <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                            Frequently Asked Questions: Transcript AI vs ExamGhost
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {(jsonLd["@graph"][3] as any).mainEntity.map((faq: any, i: number) => (
                            <details key={i} className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all" open={i === 0}>
                                <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.name}</h3>
                                    <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform shrink-0 ml-3" />
                                </summary>
                                <p className="text-xs sm:text-sm text-ink-secondary mt-3 pt-3 border-t border-black/5 leading-relaxed">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* =====================================================================
                    CONVERSION FOOTER STRIP + RELATED COMPARISONS
                ===================================================================== */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-14" aria-label="Get Started and Related Comparisons">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#e2d3fa] via-[#efe7fc] to-[#f4ede2] border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-black/10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-purple-950 uppercase tracking-wider mb-2">
                                    Zero-Button Exam Stealth + 3-Model Study Hub
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Ditch &ldquo;The Button&rdquo;. Upgrade to Double-Click Stealth + Claude, ChatGPT &amp; DeepSeek.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                                    Start with <strong>5 Free Solves / Day</strong> (auto-refills every 24h, $0 no card required). Upgrade anytime for $19/mo, $99/yr ($8.25/mo), or $199 Lifetime.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <Link prefetch={false}
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#e2d3fa]" aria-hidden="true" />
                                    <span>Start 5 Free Solves / Day</span>
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
                                <Link prefetch={false} href="/asksia-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>AskSia vs ExamGhost</span>
                                    <ArrowRight className="w-3.5 h-3.5 text-ink-muted" />
                                </Link>
                                <Link prefetch={false} href="/collegetools-vs-examghost" className="p-3 rounded-xl bg-white/80 hover:bg-white border border-black/5 font-semibold text-ink flex items-center justify-between transition-colors">
                                    <span>College Tools vs ExamGhost</span>
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
