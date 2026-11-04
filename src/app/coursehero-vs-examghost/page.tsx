import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    Zap,
    DollarSign,
    ChevronDown,
    ArrowRight,
    Sparkles,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    FileText,
    ExternalLink,
    Lock,
    Upload,
    UserCheck,
    Calculator,
    FlaskConical,
    FileWarning,
    Scale,
    Layers,
    Terminal,
    Keyboard,
    Star
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CourseHeroPaywallDemo } from '@/components/TopComparisonDemos';
import StudyAiHubShowcase from '@/components/StudyAiHubShowcase';

export const metadata: Metadata = {
    title: {
        absolute: "Course Hero vs ExamGhost (2026) — $39.95 Static PDFs vs 0.3s Live AI",
    },
    description: "Why Course Hero's $39.95/mo blurred 2019–2022 PDFs fail on randomized Canvas STEM variables (and trigger professor distractor traps) vs ExamGhost's 0.3s live AI + Claude/ChatGPT/DeepSeek Study Hub. 5 Free Solves / Day.",
    alternates: {
        canonical: "https://examghost.com/coursehero-vs-examghost",
    },
    openGraph: {
        title: "Course Hero vs ExamGhost (2026) — $39.95 Static PDFs vs 0.3s Live AI",
        description: "Stop paying $39.95/mo to unblur outdated PDFs that give wrong answers on randomized Canvas & WebAssign exams. Solve live variables in 0.3s + get Claude 3.7, ChatGPT & DeepSeek-R1.",
        url: "https://examghost.com/coursehero-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Course Hero vs ExamGhost (2026) — Dead Static PDFs vs Live 0.3s Symbolic AI",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Course Hero vs ExamGhost (2026) — $39.95 Static PDFs vs 0.3s Live AI",
        description: "Course Hero's static PDFs fail on randomized STEM exams. Compute your exact live numbers in 0.3s with ExamGhost + access Claude 3.7, ChatGPT & DeepSeek-R1. 5 Free Solves / Day.",
        images: ["/og-image.jpg"],
    },
};

export default function CourseheroVsExamghostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "TechArticle",
                "@id": "https://examghost.com/coursehero-vs-examghost#article",
                "headline": "Course Hero vs ExamGhost (2026): Dead Static PDFs ($39.95/mo) vs Live 0.3s Symbolic AI + Multi-Model Study Hub",
                "datePublished": "2026-01-15",
                "dateModified": "2026-04-10",
                "author": {
                    "@type": "Organization",
                    "name": "ExamGhost Academic Economics & STEM Audit Lab",
                    "url": "https://examghost.com"
                },
                "publisher": {
                    "@type": "Organization",
                    "name": "ExamGhost",
                    "url": "https://examghost.com"
                },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "url": "https://examghost.com/coursehero-vs-examghost",
                "name": "Course Hero vs ExamGhost (2026) | $39.95/mo Blurred PDFs vs 0.3s Live Symbolic AI + Multi-Model Study Hub",
                "description": "Forensic academic audit comparing Course Hero ($39.95/mo 30-unlock cap, static 2019–2022 student PDFs, Educator Exchange faculty tracking, and randomized STEM variable failure) against ExamGhost's 0.3s live in-tab solver and Claude 3.7 Sonnet / ChatGPT / DeepSeek-R1 Study Workspace.",
                "breadcrumb": {
                    "@id": "https://examghost.com/coursehero-vs-examghost#breadcrumb"
                },
                "about": [
                    { "@id": "https://examghost.com/coursehero-vs-examghost#software" },
                    {
                        "@type": "SoftwareApplication",
                        "name": "Course Hero",
                        "url": "https://www.coursehero.com",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Web Application, iOS, Android, Chrome Extension",
                        "offers": [
                            {
                                "@type": "Offer",
                                "name": "Course Hero Monthly (30 Document Unlocks)",
                                "price": "39.95",
                                "priceCurrency": "USD"
                            },
                            {
                                "@type": "Offer",
                                "name": "Course Hero Annual (billed $119.40/yr)",
                                "price": "9.95",
                                "priceCurrency": "USD"
                            }
                        ]
                    }
                ]
            },
            {
                "@type": "SoftwareApplication",
                "@id": "https://examghost.com/coursehero-vs-examghost#software",
                "name": "ExamGhost Stealth Extension & Multi-Model Study AI Hub",
                "applicationCategory": "EducationalApplication",
                "operatingSystem": "Chrome, Edge, Brave, macOS, Windows",
                "offers": [
                    {
                        "@type": "Offer",
                        "name": "Free Daily Tier (5 Free Solves / Day, Auto-Refills Every 24h)",
                        "price": "0.00",
                        "priceCurrency": "USD"
                    },
                    {
                        "@type": "Offer",
                        "name": "Monthly 2-in-1 Pass (Unlimited Extension + Study AI Hub)",
                        "price": "19.00",
                        "priceCurrency": "USD"
                    },
                    {
                        "@type": "Offer",
                        "name": "Academic Year 2-in-1 Pass ($8.25/mo billed annually)",
                        "price": "99.00",
                        "priceCurrency": "USD"
                    },
                    {
                        "@type": "Offer",
                        "name": "Lifetime Degree 2-in-1 Pass",
                        "price": "199.00",
                        "priceCurrency": "USD"
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/coursehero-vs-examghost#breadcrumb",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://examghost.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Compare Extensions",
                        "item": "https://examghost.com/compare-canvas-hack-extensions"
                    },
                    {
                        "@type": "ListItem",
                        "position": 3,
                        "name": "Course Hero vs ExamGhost",
                        "item": "https://examghost.com/coursehero-vs-examghost"
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/coursehero-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is the 'Professor Distractor Trap' when using Course Hero PDFs on Canvas or WebAssign exams?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "In 2026, Canvas Formula Questions, WebAssign, Pearson MyLab, and McGraw-Hill Connect randomize numerical variables (such as mass, molarity, interest rate, or angle) for every student. Professors frequently find the 2019–2022 PDF of their exam on Course Hero, take the old PDF's numerical answer, and plant it as a wrong multiple-choice distractor on the 2026 exam. Students who copy the unblurred Course Hero PDF get the question wrong AND flag themselves for copying a static answer key. ExamGhost computes your exact live screen numbers in 0.3s and derives the full proof in DeepSeek-R1 and Claude 3.7 Sonnet."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does Course Hero cost in 2026 compared to ExamGhost's 2-in-1 plans?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Course Hero charges ~$39.95/month (or forces you to upload 10 personal study files) and still rations paid subscribers to 30 Document Unlocks and limited Tutor Credits per month. ExamGhost gives every student 5 Free Solves / Day (auto-refills every 24 hours, $0, no credit card or uploads required), followed by 2-in-1 Unlimited plans ($19/mo Monthly, $99/yr Academic Year Pass [$8.25/mo], or $199 Lifetime) that include both Unlimited Stealth Extension Solves and the Claude 3.7 Sonnet + ChatGPT (o3-mini/4o) + DeepSeek-R1 Study Workspace."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does the Course Hero Chrome extension protect against Canvas SpeedGrader Quiz Logs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. Course Hero's extension ('Course Hero: AI Study Assistant') lacks a Canvas Focus Shield and does not encapsulate its UI in a closed Shadow DOM. Clicking into Course Hero or switching tabs to unblur a document on coursehero.com immediately triggers window.blur and visibilitychange events in Canvas SpeedGrader logs. ExamGhost solves inline in 0.3s with a 4-Layer Focus Shield and zero blur logs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What faculty tracking scripts and Educator Exchange flags run on coursehero.com?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Our 2026 source audit of coursehero.com confirmed Sift Science device fingerprinting (cdn.sift.com/s.js, account 84e77b3dea), FullStory session recording (window.__CH_FULLSTORY_DATA), and explicit faculty flags (isVerifiedEducator and hasAccessToEducatorExchange). Uploading a live exam or asking a tutor question creates an indexed, permanent record visible to verified faculty. ExamGhost uses ephemeral in-memory compute and never indexes your questions publicly."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What hotkeys does ExamGhost use to solve randomized STEM questions without leaving the exam tab?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost gives you complete keyboard-first control: Double-Click any question for a 0.3s inline solve, Alt+S for Hybrid Vision+DOM Snip on graphs and formulas, Alt+1 for Invisible Mode, Alt+2 for Stealth Ghost Dot, Alt+3 for Step-by-Step LaTeX Explanations, and Cmd+Shift+U as a Master Toggle to instantly unload the HUD from RAM."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-[#f9f6f0] text-ink font-sans selection:bg-amber-200 selection:text-ink">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            <main id="main-content">
                {/* Breadcrumb & Audit Dossier Ribbon */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-4">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-muted">
                            <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                            <span>/</span>
                            <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Compare Extensions</Link>
                            <span>/</span>
                            <span className="text-ink font-semibold">Course Hero vs ExamGhost</span>
                        </nav>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-950 font-mono text-[11px] font-bold">
                            <Scale className="w-3.5 h-3.5 text-amber-800" />
                            <span>ACADEMIC ECONOMICS &amp; RANDOMIZED STEM AUDIT // 2026</span>
                        </div>
                    </div>
                </div>

                {/* ============================================================
                    ARCHETYPE HERO: ACADEMIC ECONOMICS & RANDOMIZED STEM LEDGER
                ============================================================ */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#fffbeb] via-[#f5f3ea] to-[#e6f4ea] p-6 sm:p-10 lg:p-14 border-2 border-black/10 shadow-card relative overflow-hidden">
                        {/* Editorial Ledger Header */}
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b-2 border-black/10">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/15 text-xs font-bold text-ink shadow-2xs">
                                <FileWarning className="w-3.5 h-3.5 text-rose-700" />
                                <span>Dead Static PDFs ($39.95/mo) vs Live 0.3s Symbolic AI + Multi-Model Study Hub</span>
                            </div>
                            <div className="flex flex-wrap items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-100 text-[11px] font-mono font-bold uppercase tracking-wider">
                                    5 Free Solves / Day ($0 · Zero Uploads)
                                </span>
                            </div>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
                            {/* Left 7 Columns: Editorial Narrative + Value Ledger */}
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[50px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    Blurred 2021 PDFs cost $39.95/mo—and{' '}
                                    <span className="text-rose-800 underline decoration-rose-600/40 decoration-wavy underline-offset-4">
                                        fail on randomized STEM numbers.
                                    </span>
                                </h1>

                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-5">
                                    <strong>Course Hero</strong> was built for 2018 static worksheets: it charges <strong>$39.95/month</strong> (or demands 10 personal document uploads) to unblur 30 student-uploaded PDFs from 2019–2022. On 2026 Canvas, WebAssign, and McGraw-Hill exams where every student receives <strong>randomized numerical variables</strong>, copying an old Course Hero PDF gives you the wrong number—or worse, walks you straight into a <strong>professor-planted distractor trap</strong>.
                                </p>

                                <p className="text-sm sm:text-lg text-ink-secondary leading-relaxed mb-7">
                                    <strong>ExamGhost</strong> computes <em>your exact live numbers</em> in <strong>0.3 seconds</strong> via <kbd className="px-2 py-0.5 rounded bg-white border border-black/20 font-mono text-xs font-bold">Double-Click</kbd> or <kbd className="px-2 py-0.5 rounded bg-white border border-black/20 font-mono text-xs font-bold">Alt+S</kbd> Hybrid Vision+DOM Snip, and derives the full step-by-step proof inside our <strong>Study &amp; Homework AI Workspace (Claude 3.7 Sonnet + ChatGPT o3-mini/4o + DeepSeek-R1)</strong>.
                                </p>

                                {/* 3-Column Economic Ledger Strip */}
                                <div className="grid sm:grid-cols-3 gap-3 mb-7">
                                    <div className="p-4 rounded-2xl bg-white border border-black/10 shadow-2xs">
                                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 mb-1">
                                            FREE DAILY QUOTA
                                        </div>
                                        <div className="font-display font-extrabold text-base sm:text-lg text-ink">
                                            5 Free Solves / Day
                                        </div>
                                        <div className="text-[11px] text-ink-muted mt-0.5">
                                            Auto-refills every 24h · $0 · No doc uploads
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white border border-black/10 shadow-2xs">
                                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 mb-1">
                                            2-IN-1 VALUE PASS
                                        </div>
                                        <div className="font-display font-extrabold text-base sm:text-lg text-ink">
                                            $8.25/mo ($99/yr)
                                        </div>
                                        <div className="text-[11px] text-ink-muted mt-0.5">
                                            Or $19/mo · $199 Lifetime (vs $39.95/mo CH)
                                        </div>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white border border-black/10 shadow-2xs">
                                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-800 mb-1">
                                            INCLUDED AI MODELS
                                        </div>
                                        <div className="font-display font-extrabold text-base sm:text-lg text-ink">
                                            Claude + GPT + R1
                                        </div>
                                        <div className="text-[11px] text-ink-muted mt-0.5">
                                            Live symbolic math + essay workspace
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center gap-3.5">
                                    <Link
                                        prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm sm:text-base font-bold shadow-lift inline-flex items-center gap-2.5 group"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#cdeecb]" aria-hidden="true" />
                                        <span>Start 5 Free Solves / Day ($0 · No Uploads)</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                    <a
                                        href="#paywall-simulator"
                                        className="px-6 py-4 rounded-full text-sm sm:text-base font-bold bg-white hover:bg-cream text-ink border border-black/15 shadow-sm inline-flex items-center gap-2 transition-all"
                                    >
                                        <Calculator className="w-4 h-4 text-emerald-800" />
                                        <span>Test Randomized Variable Demo ↓</span>
                                    </a>
                                </div>
                            </div>

                            {/* Right 5 Columns: Forensic Variable Audit Receipt */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-[#161922] text-white p-6 sm:p-7 border border-black/20 shadow-lift space-y-4">
                                    <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
                                        <div>
                                            <div className="text-[10px] font-mono uppercase tracking-widest text-amber-300">
                                                FORENSIC AUDIT // CANVAS FORMULA QUESTION #14
                                            </div>
                                            <div className="font-display font-bold text-base sm:text-lg text-white mt-0.5">
                                                Why Static PDFs Fail Randomized STEM
                                            </div>
                                        </div>
                                        <span className="px-2.5 py-1 rounded-md bg-rose-500/20 border border-rose-400/30 text-rose-300 text-[11px] font-mono font-bold">
                                            TRAP EXPOSED
                                        </span>
                                    </div>

                                    {/* Live Question Box */}
                                    <div className="p-3.5 rounded-2xl bg-white/[0.06] border border-white/10 font-mono text-xs space-y-1">
                                        <div className="text-[10px] text-slate-400 uppercase">Your Live 2026 Canvas Screen (Seed #8841):</div>
                                        <div className="text-white">
                                            Projectile launched at <span className="text-emerald-300 font-bold">v₀ = 18.4 m/s</span>, angle <span className="text-emerald-300 font-bold">θ = 37°</span>. Find horizontal range <span className="text-cyan-300">R</span>.
                                        </div>
                                    </div>

                                    {/* Course Hero Static PDF Result */}
                                    <div className="p-4 rounded-2xl bg-rose-950/55 border border-rose-500/35 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-xs text-rose-200">
                                                Course Hero ($39.95/mo · 1 of 30 Unlocks Spent)
                                            </span>
                                            <span className="text-[10px] font-mono bg-rose-500/30 text-rose-200 px-2 py-0.5 rounded font-bold">
                                                WRONG NUMBER
                                            </span>
                                        </div>
                                        <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 font-mono text-[11px] text-rose-200 space-y-1">
                                            <div>Found: <span className="text-white">PHYS_201_Fall2021_Key.pdf</span></div>
                                            <div>2021 PDF Variables: <span className="underline">v₀ = 15.0 m/s, θ = 30°</span> → R = 19.9 m</div>
                                            <div className="text-amber-300">
                                                ⚠️ Professor planted <strong>19.9 m</strong> as Choice B to catch Course Hero copiers!
                                            </div>
                                        </div>
                                    </div>

                                    {/* ExamGhost Live Symbolic AI Result */}
                                    <div className="p-4 rounded-2xl bg-emerald-950/55 border border-emerald-500/35 space-y-2">
                                        <div className="flex items-center justify-between">
                                            <span className="font-bold text-xs text-emerald-200">
                                                ExamGhost (0.3s Live Symbolic Solve)
                                            </span>
                                            <span className="text-[10px] font-mono bg-emerald-500/30 text-emerald-200 px-2 py-0.5 rounded font-bold">
                                                EXACT MATCH
                                            </span>
                                        </div>
                                        <div className="p-2.5 rounded-xl bg-black/50 border border-white/10 font-mono text-[11px] text-emerald-200 space-y-1">
                                            <div>Reads Live DOM: <span className="text-white">v₀ = 18.4, θ = 37°, g = 9.8</span></div>
                                            <div>Symbolic Engine: <span className="text-emerald-300 font-bold">R = (18.4² · sin 74°) / 9.8 = 33.2 m (Choice D)</span></div>
                                            <div className="text-cyan-200">
                                                ✓ Full LaTeX proof verified in DeepSeek-R1 &amp; Claude 3.7 Sonnet
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* ============================================================
                    INTERACTIVE MOTION DEMO: COURSE HERO PAYWALL & RANDOMIZED VARIABLE DEMO
                ============================================================ */}
                <section id="paywall-simulator" className="max-w-6xl mx-auto px-4 sm:px-6 mb-24 scroll-mt-24">
                    <div className="text-center max-w-3xl mx-auto mb-8">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-xs font-bold text-amber-950 mb-3">
                            <FlaskConical className="w-3.5 h-3.5 text-amber-800" />
                            <span>INTERACTIVE PAYWALL &amp; RANDOMIZED STEM SIMULATOR</span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.08] mb-4">
                            See Why Unblurring a $39.95 PDF Fails on Live 2026 Exams
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                            Interact with the simulator below to compare spending a Course Hero Document Unlock on a static 2021 PDF versus solving your live randomized Canvas variables in 0.3 seconds with ExamGhost.
                        </p>
                    </div>

                    <CourseHeroPaywallDemo />
                </section>

                {/* ============================================================
                    BESPOKE SECTION 1: THE PROFESSOR DISTRACTOR TRAP ON RANDOMIZED
                    CANVAS & WEBASSIGN EXAMS (3-STAGE FORENSIC CASE FILE)
                ============================================================ */}
                <section id="professor-distractor-trap" className="max-w-6xl mx-auto px-4 sm:px-6 mb-24 scroll-mt-24">
                    <div className="rounded-[36px] bg-white border border-black/10 p-6 sm:p-10 lg:p-12 shadow-card">
                        <div className="max-w-3xl mb-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-xs font-mono font-bold text-rose-900 mb-3">
                                <AlertTriangle className="w-3.5 h-3.5 text-rose-700" />
                                <span>ACADEMIC INTEGRITY FORENSICS // CANVAS · WEBASSIGN · PEARSON MYLAB</span>
                            </div>
                            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-ink tracking-tight leading-[1.1] mb-4">
                                The Professor Distractor Trap: How Static Course Hero PDFs Give You the Wrong Number on Randomized Canvas &amp; WebAssign Exams
                            </h2>
                            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                                University STEM departments no longer write static exams. Here is the exact 3-step forensic mechanism professors use to turn Course Hero&apos;s 2019–2022 PDF library into an automated academic integrity honeytrap—and how ExamGhost&apos;s live symbolic AI defeats it.
                            </p>
                        </div>

                        {/* 3-Step Horizontal Timeline / Case File */}
                        <div className="grid lg:grid-cols-3 gap-6 mb-10">
                            {/* Stage 1 */}
                            <div className="rounded-3xl bg-[#faf8f4] border border-black/10 p-6 relative flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full bg-ink text-white font-mono text-xs font-bold">
                                            STAGE 01 // SEEDING
                                        </span>
                                        <span className="text-xs font-mono text-ink-muted">Canvas LTI 1.3</span>
                                    </div>
                                    <h3 className="font-display text-xl font-extrabold text-ink mb-2.5">
                                        Per-Student Algorithmic Variable Randomization
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        When you open a quiz in Canvas, WebAssign, ALEKS, or McGraw-Hill Connect, the server generates unique parameters (<code className="bg-white px-1 py-0.5 rounded border border-black/10 text-xs">[molarity]</code>, <code className="bg-white px-1 py-0.5 rounded border border-black/10 text-xs">[interest_rate]</code>, <code className="bg-white px-1 py-0.5 rounded border border-black/10 text-xs">[voltage]</code>) tied to your student ID.
                                    </p>
                                </div>
                                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-200 text-xs text-amber-950 font-mono">
                                    Result: Out of 300 students in Chem 101, 0 students share the exact numbers in Course Hero&apos;s 2021 PDF.
                                </div>
                            </div>

                            {/* Stage 2 */}
                            <div className="rounded-3xl bg-rose-50/70 border border-rose-200 p-6 relative flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full bg-rose-800 text-white font-mono text-xs font-bold">
                                            STAGE 02 // THE BAIT
                                        </span>
                                        <span className="text-xs font-mono text-rose-800 font-bold">Poison-Pill Choice</span>
                                    </div>
                                    <h3 className="font-display text-xl font-extrabold text-ink mb-2.5">
                                        Professors Plant the 2021 Course Hero Answer as Choice B
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Instructors know which past midterms have been leaked to Course Hero. When building a 2026 multiple-choice or numeric quiz, they intentionally include the <strong>exact numerical output from the 2021 Course Hero PDF</strong> as a decoy answer choice.
                                    </p>
                                </div>
                                <div className="p-3 rounded-2xl bg-rose-950 text-rose-200 text-xs font-mono">
                                    Result: Selecting the Course Hero PDF number scores 0 points AND flags you for copying an outdated key.
                                </div>
                            </div>

                            {/* Stage 3 */}
                            <div className="rounded-3xl bg-rose-50/70 border border-rose-200 p-6 relative flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between mb-4">
                                        <span className="px-3 py-1 rounded-full bg-rose-950 text-rose-200 font-mono text-xs font-bold">
                                            STAGE 03 // PAPER TRAIL
                                        </span>
                                        <span className="text-xs font-mono text-rose-900 font-bold">Educator Exchange</span>
                                    </div>
                                    <h3 className="font-display text-xl font-extrabold text-ink mb-2.5">
                                        Verified Faculty Accounts &amp; Sift Fingerprinting
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        If the static PDF is blank and you upload your live question to Course Hero&apos;s Tutor Queue, our source audit confirmed <code className="bg-white px-1 py-0.5 rounded border border-rose-200 text-xs">isVerifiedEducator</code> faculty portals, Sift fraud fingerprinting (<code className="bg-white px-1 py-0.5 rounded border border-rose-200 text-xs">cdn.sift.com/s.js</code>), and FullStory session recording.
                                    </p>
                                </div>
                                <div className="p-3 rounded-2xl bg-rose-950 text-rose-200 text-xs font-mono">
                                    Result: Uploading a live exam creates a permanent, course-tagged URL indexed for your professor.
                                </div>
                            </div>
                        </div>

                        {/* ExamGhost Live Symbolic AI Counter-Architecture Banner */}
                        <div className="rounded-3xl bg-[#101c16] text-white p-6 sm:p-8 border border-emerald-500/30 grid lg:grid-cols-12 gap-6 items-center">
                            <div className="lg:col-span-8 space-y-2">
                                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-300 font-bold">
                                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                                    <span>HOW EXAMGHOST DEFEATS RANDOMIZED VARIABLES &amp; FACULTY TRAPS</span>
                                </div>
                                <h3 className="font-display text-xl sm:text-2xl font-extrabold text-white">
                                    Ephemeral 0.3s Symbolic Computation on Your Exact Live Screen Numbers
                                </h3>
                                <p className="text-xs sm:text-sm text-emerald-100/85 leading-relaxed">
                                    ExamGhost never searches a database of outdated PDFs. When you <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20 font-mono text-xs text-emerald-300">Double-Click</kbd> a question or press <kbd className="px-1.5 py-0.5 rounded bg-white/10 border border-white/20 font-mono text-xs text-emerald-300">Alt+S</kbd> (Hybrid Vision+DOM Snip), ExamGhost parses your live randomized parameters directly from the DOM, solves the underlying mathematical system from scratch in 0.3s, and never publishes or indexes your question online.
                                </p>
                            </div>
                            <div className="lg:col-span-4 grid grid-cols-2 gap-2.5 font-mono text-xs">
                                <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/10">
                                    <div className="text-emerald-300 font-bold">Alt+1 / Alt+2</div>
                                    <div className="text-[11px] text-slate-300 mt-0.5">Invisible &amp; Stealth HUD</div>
                                </div>
                                <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/10">
                                    <div className="text-emerald-300 font-bold">Alt+3</div>
                                    <div className="text-[11px] text-slate-300 mt-0.5">Live LaTeX Derivation</div>
                                </div>
                                <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/10">
                                    <div className="text-emerald-300 font-bold">⌘+Shift+U</div>
                                    <div className="text-[11px] text-slate-300 mt-0.5">Instant RAM Unload</div>
                                </div>
                                <div className="p-3 rounded-2xl bg-white/[0.06] border border-white/10">
                                    <div className="text-emerald-300 font-bold">0 Public URLs</div>
                                    <div className="text-[11px] text-slate-300 mt-0.5">100% Ephemeral</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    BESPOKE SECTION 2: 30 BLURRED DOCUMENT UNLOCKS ($39.95/MO)
                    VS UNLIMITED LIVE AI + STUDY HUB ($8.25/MO)
                ============================================================ */}
                <section id="economic-breakdown" className="max-w-6xl mx-auto px-4 sm:px-6 mb-24 scroll-mt-24">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-bold text-emerald-950 mb-3">
                            <DollarSign className="w-3.5 h-3.5 text-emerald-800" />
                            <span>2026 STUDENT ECONOMICS &amp; 2-IN-1 VALUE AUDIT</span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.08] mb-4">
                            30 Blurred Document Unlocks ($39.95/mo) vs Unlimited Live AI + Study Hub ($8.25/mo)
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary leading-relaxed">
                            Why pay $39.95/month for rationed PDF unlocks when ExamGhost gives you <strong>5 Free Solves / Day ($0)</strong> and a <strong>2-in-1 Unlimited Suite</strong> that includes Claude 3.7 Sonnet, ChatGPT (o3-mini/4o), and DeepSeek-R1?
                        </p>
                    </div>

                    {/* Side-by-Side Economic Ledger Cards */}
                    <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-12">
                        {/* Course Hero Rationed Economy Card */}
                        <div className="lg:col-span-5 rounded-[32px] bg-white border-2 border-rose-200 p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                            <div>
                                <div className="flex items-center justify-between pb-4 mb-5 border-b border-black/10">
                                    <div>
                                        <span className="text-xs font-mono uppercase text-rose-800 font-bold block">Course Hero Subscription</span>
                                        <h3 className="font-display text-2xl font-extrabold text-ink">Rationed Credit Economy</h3>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-display text-3xl font-extrabold text-rose-800">$39.95</div>
                                        <div className="text-[11px] text-ink-muted">per month ($479.40/yr)</div>
                                    </div>
                                </div>

                                <div className="space-y-3.5 text-xs sm:text-sm text-ink-secondary mb-6">
                                    <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200/80 flex items-start gap-2.5">
                                        <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-ink block">Capped at 30 Document Unlocks / Month</strong>
                                            Unblurring a syllabus or blank study guide permanently burns 1 of your 30 monthly unlocks with zero refund.
                                        </div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200/80 flex items-start gap-2.5">
                                        <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-ink block">&ldquo;Upload 10 Personal Files&rdquo; Free Wall</strong>
                                            Refuses to let you test a single unblurred answer for free unless you upload 10 personal coursework documents.
                                        </div>
                                    </div>
                                    <div className="p-3.5 rounded-2xl bg-rose-50/70 border border-rose-200/80 flex items-start gap-2.5">
                                        <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                        <div>
                                            <strong className="text-ink block">Zero Frontier AI Models Included</strong>
                                            Does not include direct access to Claude 3.7 Sonnet, ChatGPT o3-mini/4o, or DeepSeek-R1 for essays and proofs.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-2xl bg-rose-100/70 border border-rose-200 text-xs font-mono text-rose-950">
                                Annual Billed Plan: <strong>$119.40/yr ($9.95/mo)</strong> — still capped at 30 unlocks/mo with 0 Canvas Focus Shield.
                            </div>
                        </div>

                        {/* ExamGhost 2-in-1 Unlimited Card */}
                        <div className="lg:col-span-7 rounded-[32px] bg-[#141824] text-white border-2 border-emerald-500/40 p-6 sm:p-8 flex flex-col justify-between shadow-lift">
                            <div>
                                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10">
                                    <div>
                                        <span className="text-xs font-mono uppercase text-emerald-300 font-bold block">
                                            ExamGhost 2-in-1 Unlimited Pass
                                        </span>
                                        <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white">
                                            Stealth Extension + Multi-Model Study Hub
                                        </h3>
                                    </div>
                                    <div className="text-right">
                                        <div className="font-display text-3xl font-extrabold text-emerald-400">
                                            $8.25<span className="text-sm font-normal text-slate-300">/mo</span>
                                        </div>
                                        <div className="text-[11px] text-emerald-200 font-semibold">
                                            $99/yr · $19/mo · $199 Lifetime
                                        </div>
                                    </div>
                                </div>

                                {/* Free Tier Highlight Banner */}
                                <div className="p-4 rounded-2xl bg-emerald-500/15 border border-emerald-400/30 mb-5 flex flex-wrap items-center justify-between gap-2">
                                    <div className="text-xs sm:text-sm text-emerald-100">
                                        <strong className="text-white">Free Forever Daily Quota:</strong>{' '}
                                        <strong>5 Free Solves / Day</strong> (auto-refills every 24 hours, $0, no card or file uploads needed).
                                    </div>
                                    <span className="px-2.5 py-1 rounded-full bg-emerald-400 text-slate-950 font-mono text-[11px] font-extrabold">
                                        $0 DAILY REFILL
                                    </span>
                                </div>

                                {/* 2-in-1 Pillars */}
                                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                                    <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 space-y-2">
                                        <div className="text-xs font-mono font-bold text-emerald-300 uppercase">
                                            Pillar 1 // Unlimited Exam Stealth
                                        </div>
                                        <div className="font-bold text-sm text-white">
                                            0.3s In-Tab LMS Extension
                                        </div>
                                        <p className="text-xs text-slate-300 leading-relaxed">
                                            Unlimited solves on Canvas, Blackboard, Moodle, D2L, WebAssign &amp; McGraw-Hill with <code className="text-emerald-300">Double-Click</code>, <code className="text-cyan-300">Alt+S</code> Hybrid Vision+DOM Snip, <code className="text-purple-300">Alt+1</code> Invisible, <code className="text-purple-300">Alt+2</code> Stealth, <code className="text-amber-300">Alt+3</code> Explain, and <code className="text-rose-300">⌘+Shift+U</code> Master Toggle.
                                        </p>
                                    </div>
                                    <div className="p-4 rounded-2xl bg-white/[0.05] border border-white/10 space-y-2">
                                        <div className="text-xs font-mono font-bold text-cyan-300 uppercase">
                                            Pillar 2 // Study &amp; Homework AI Hub
                                        </div>
                                        <div className="font-bold text-sm text-white">
                                            Claude 3.7 + ChatGPT + DeepSeek-R1
                                        </div>
                                        <p className="text-xs text-slate-300 leading-relaxed">
                                            Full access to <strong className="text-white">Claude 3.7 Sonnet</strong>, <strong className="text-white">ChatGPT (GPT-4o / o3-mini)</strong>, and <strong className="text-white">DeepSeek-R1</strong> in one workspace for homework sets, essays, syllabus PDFs, and step-by-step LaTeX math proofs.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-white/10">
                                <span className="text-xs text-slate-300">
                                    Save <strong className="text-emerald-300">79%</strong> vs Course Hero Monthly ($39.95/mo) + replace $60/mo in separate AI chatbots.
                                </span>
                                <Link
                                    prefetch={false}
                                    href="/#pricing"
                                    className="px-5 py-2.5 rounded-full bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-bold text-xs transition-colors inline-flex items-center gap-1.5"
                                >
                                    <span>Start 5 Free Solves / Day</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Embedded StudyAiHubShowcase Component */}
                    <StudyAiHubShowcase compact />
                </section>

                {/* ============================================================
                    DEEP COMPARISON MATRIX + COLLAPSIBLE SOURCE AUDIT
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="rounded-3xl bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="bg-[#f7f4ee] px-6 py-4 border-b border-black/10 flex flex-wrap items-center justify-between gap-2">
                            <h2 className="font-display font-bold text-base sm:text-lg text-ink">
                                Course Hero vs ExamGhost: 2026 Feature, Accuracy &amp; Pricing Matrix
                            </h2>
                            <span className="text-xs text-ink-muted font-medium">Verified against coursehero.com (2026)</span>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm min-w-[680px]">
                                <thead className="bg-[#faf8f4] border-b border-black/10">
                                    <tr>
                                        <th className="py-4 px-6 font-bold text-ink w-[34%]">Evaluation Criteria</th>
                                        <th className="py-4 px-6 text-center font-extrabold text-emerald-950 bg-[#cdeecb]/40 w-[33%]">
                                            ExamGhost (Stealth + Study AI Hub)
                                        </th>
                                        <th className="py-4 px-6 text-center font-bold text-ink-muted w-[33%]">
                                            Course Hero (coursehero.com)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Core Solving Architecture</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">
                                            0.3s Live Symbolic AI + Alt+S Hybrid Vision+DOM Snip
                                        </td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">
                                            Static 2019–2022 Blurred PDF Library + Tutor Queue
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Randomized STEM Variable Accuracy</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">
                                            ✓ Computes Your Exact Live Screen Numbers
                                        </td>
                                        <td className="py-3.5 px-6 text-center text-rose-800 font-semibold">
                                            ✗ Fails (Old PDF Numbers Trigger Distractor Traps)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Free Daily Access Policy</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">
                                            ✓ 5 Free Solves / Day (Auto-Refills Every 24h · $0)
                                        </td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">
                                            ✗ Blurred Paywall (Must Upload 10 Personal Docs)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Included Multi-Model Study Hub</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">
                                            ✓ Claude 3.7 Sonnet + ChatGPT (o3-mini/4o) + DeepSeek-R1
                                        </td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">
                                            ✗ Rationed 10–40 Tutor Credits / Month
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Month-to-Month Price</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">
                                            $19/mo (Unlimited Solves + Study Hub)
                                        </td>
                                        <td className="py-3.5 px-6 text-center text-rose-800 font-semibold">
                                            ~$39.95/mo (Capped at 30 Unlocks / Month)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Annual &amp; Lifetime Pricing</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">
                                            $99/yr ($8.25/mo) or $199 Lifetime Pass
                                        </td>
                                        <td className="py-3.5 px-6 text-center text-ink-muted">
                                            ~$119.40/yr ($9.95/mo) · No Lifetime Option
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Stealth Hotkeys &amp; SpeedGrader Shield</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">
                                            ✓ Double-Click, Alt+S, Alt+1/2/3, ⌘+Shift+U (0 Blur Flags)
                                        </td>
                                        <td className="py-3.5 px-6 text-center text-rose-800">
                                            ✗ None (Tab Switching &amp; Extension Log window.blur)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-3.5 px-6 font-semibold text-ink">Faculty &amp; Honor Code Paper Trail</td>
                                        <td className="py-3.5 px-6 text-center font-bold text-emerald-800 bg-emerald-50/20">
                                            ✓ Zero (Ephemeral Compute · Never Publicly Indexed)
                                        </td>
                                        <td className="py-3.5 px-6 text-center text-rose-800 font-semibold">
                                            ✗ High Risk (Educator Exchange + Sift Fingerprinting)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Source Audit Drawer */}
                        <details className="group border-t border-black/10 bg-[#faf8f4]">
                            <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between text-xs sm:text-sm font-bold text-ink hover:bg-[#f2ede4] transition-colors">
                                <div className="flex items-center gap-2">
                                    <Lock className="w-4 h-4 text-emerald-800" />
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">
                                        Technical HTML Source &amp; Telemetry Audit (coursehero.com)
                                    </h3>
                                </div>
                                <ChevronDown className="w-4 h-4 text-ink-muted transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="px-6 pb-6 pt-2 text-xs text-ink-secondary space-y-2.5 border-t border-black/5 bg-white">
                                <p className="leading-relaxed">
                                    <strong>Telemetry &amp; Educator Flags:</strong> Live inspection of <code>https://www.coursehero.com</code> (owned by Learneo alongside QuillBot, Symbolab, and Cram.com) confirms Sift Science fraud fingerprinting (<code>cdn.sift.com/s.js</code>, account <code>84e77b3dea</code>), FullStory session recording (<code>window.__CH_FULLSTORY_DATA</code> and <code>window.attemptSessionRecording</code>), Amplitude analytics, Google Tag Manager (<code>gtm.coursehero.com</code>), and explicit faculty flags (<code>window.__CH_PERSON.isVerifiedEducator</code> and <code>hasAccessToEducatorExchange</code>).
                                </p>
                                <p className="leading-relaxed">
                                    <strong>Static Document Ratio:</strong> Under <em>&quot;Explore materials from top schools nearby,&quot;</em> Course Hero&apos;s SSR HTML renders school badges such as <code>Liberty University: 660K Documents 0 Questions</code>, <code>Grand Canyon University: 604K Documents 0 Questions</code>, and <code>Ashford University: 420K Documents 0 Questions</code>—demonstrating why static document uploads cannot keep pace with dynamic, variable-seeded LMS assessments.
                                </p>
                            </div>
                        </details>
                    </div>
                </section>

                {/* ============================================================
                    FAQ ACCORDION
                ============================================================ */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm text-ink-muted">
                            Everything students ask when switching from Course Hero to ExamGhost.
                        </p>
                    </div>

                    <div className="space-y-4">
                        {(jsonLd["@graph"][3] as any).mainEntity.map((faq: any, index: number) => (
                            <details
                                key={index}
                                className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all open:shadow-md"
                                open={index === 0}
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none font-bold text-sm sm:text-base text-ink">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.name}</h3>
                                    <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180 shrink-0 ml-3" />
                                </summary>
                                <p className="mt-4 text-xs sm:text-sm text-ink-secondary leading-relaxed pt-3 border-t border-black/5">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* ============================================================
                    BESPOKE CONVERSION STRIP + RELATED COMPARISONS
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#fffbeb] via-[#e2f5ea] to-[#cdeecb] p-8 sm:p-10 border border-black/10 shadow-card mb-10">
                        <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
                            <div className="max-w-xl text-center lg:text-left">
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-black/10 text-xs font-bold text-emerald-950 mb-3">
                                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                                    <span>Zero Document Uploads · 5 Free Solves / Day ($0)</span>
                                </div>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                                    Done wasting $39.95/mo on blurred, outdated Course Hero PDFs?
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                    Compute your exact randomized Canvas &amp; WebAssign numbers live in 0.3 seconds—and unlock Claude 3.7 Sonnet, ChatGPT (o3-mini/4o) &amp; DeepSeek-R1 in one 2-in-1 workspace.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                                <Link
                                    prefetch={false}
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#cdeecb]" />
                                    <span>Start 5 Free Solves / Day</span>
                                </Link>
                                <Link
                                    prefetch={false}
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
                        <Link prefetch={false} href="/gauth-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">Gauth vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">35° Phone Gaze vs 0.0° Desktop HUD</div>
                        </Link>
                        <Link prefetch={false} href="/brainly-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">Brainly vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Forum answers vs 0.3s live AI</div>
                        </Link>
                        <Link prefetch={false} href="/homeworkify-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">Homeworkify vs ExamGhost</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Shutdown notice &amp; safe alternative</div>
                        </Link>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all text-center shadow-sm">
                            <div className="font-bold text-xs text-ink">All 58 Extensions</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Full 2026 Comparison Hub</div>
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
