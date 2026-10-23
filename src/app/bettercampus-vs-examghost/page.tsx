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
    Lock,
    CheckCircle2,
    Palette,
    Moon,
    Layers,
    MousePointerClick,
    Terminal,
    Camera,
    KeyRound,
    Check,
    X,
    Sliders
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "BetterCampus vs ExamGhost (2026) — Dark Mode vs AI Solver",
    },
    description: "BetterCampus styles Canvas with dark mode and GPA tools; ExamGhost solves live Canvas, Blackboard & Moodle quizzes in 0.3s. Start with 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/bettercampus-vs-examghost",
    },
    openGraph: {
        title: "BetterCampus vs ExamGhost (2026) — Dark Mode vs AI Solver",
        description: "BetterCampus styles Canvas with dark mode and GPA tools; ExamGhost solves live Canvas, Blackboard & Moodle quizzes in 0.3s. Start with 50 Free Solves.",
        url: "https://examghost.com/bettercampus-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "BetterCampus vs ExamGhost (2026) — Dark Mode vs AI Solver",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "BetterCampus vs ExamGhost (2026) — Dark Mode vs AI Solver",
        description: "BetterCampus styles Canvas with dark mode and GPA tools; ExamGhost solves live Canvas, Blackboard & Moodle quizzes in 0.3s. Start with 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function BetterCampusComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-01-11",
                "dateModified": "2026-03-24",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/bettercampus-vs-examghost#webpage",
                "url": "https://examghost.com/bettercampus-vs-examghost",
                "name": "BetterCampus vs ExamGhost (2026 Comparison) | Canvas Dark Mode vs 0.3s Stealth Quiz Solver",
                "description": "Comparison of BetterCampus (formerly BetterCanvas, Chrome ID cndibmoanboadcifjkjbdpjgfedanolh) and ExamGhost across Canvas theming, AI quiz solving, Focus Shield blur protection, and Shadow DOM compatibility.",
                "breadcrumb": { "@id": "https://examghost.com/bettercampus-vs-examghost#breadcrumb" },
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
                        "name": "BetterCampus (formerly BetterCanvas)",
                        "applicationCategory": "CustomizationApplication",
                        "operatingSystem": "Chrome Extension",
                        "offers": { "@type": "Offer", "price": "0.00", "priceCurrency": "USD" }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/bettercampus-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "BetterCampus vs ExamGhost", "item": "https://examghost.com/bettercampus-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/bettercampus-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Does BetterCampus (BetterCanvas) have an AI quiz solver or tab-switch blocker?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. BetterCampus (formerly BetterCanvas, used by 2,000,000+ students with a 4.1★ rating) is strictly a visual customization and productivity extension for Canvas LMS—offering dark mode, custom dashboard card colors, font styling, and a GPA calculator. It has zero AI question solver, zero OCR engine, and zero protection against Canvas SpeedGrader window.blur or tab-switch logs."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can I run BetterCampus and ExamGhost at the same time without breaking my dark mode?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes—they are 100% compatible. While other quiz extensions inject messy global CSS that ruins BetterCampus dark mode themes, ExamGhost encapsulates all of its UI inside a closed Shadow DOM v1 container. You keep your favorite BetterCampus dark theme while gaining 0.3-second double-click quiz solving and Focus Shield protection."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does BetterCampus work on Blackboard, Moodle, or McGraw-Hill Connect?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. BetterCampus only runs on Instructure Canvas URLs. ExamGhost works across 20+ platforms including Canvas Classic, Canvas New Quizzes (LTI 1.3), Blackboard Learn & Ultra, Moodle, D2L Brightspace, McGraw-Hill Connect, and Pearson."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does ExamGhost cost if I already use BetterCampus for free?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost gives every student 50 Free Question Solves immediately upon install with no credit card required. If you want unlimited solves across all your classes, you can choose the $19/mo Monthly Sprint Pass, the $99/yr Academic Year Pass ($8.25/mo), or the $199 one-time Lifetime Degree Pass."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-lilac selection:text-ink font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">

                {/* Breadcrumb */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-32 pb-4">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs font-medium text-ink-muted">
                        <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                        <span>/</span>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Compare Extensions</Link>
                        <span>/</span>
                        <span className="text-ink font-bold">BetterCampus vs ExamGhost</span>
                    </nav>
                </div>

                {/* ============================================================
                    UNIQUE HERO: "THE ULTIMATE 2-EXTENSION CANVAS STACK"
                ============================================================ */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#e2d3fa] via-[#ede4fc] to-[#dff0fa] border border-black/10 p-6 sm:p-10 md:p-14 shadow-card relative overflow-hidden">
                        
                        {/* Top Bar */}
                        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 mb-8 border-b border-black/10">
                            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black/10 text-xs font-bold text-purple-950 shadow-sm">
                                <Moon className="w-3.5 h-3.5 text-purple-700" />
                                <span>100% Dark-Mode Compatible · Zero CSS Conflicts</span>
                            </div>
                            <span className="text-xs font-semibold text-ink-secondary bg-white/70 px-3 py-1 rounded-full border border-black/10">
                                BetterCampus (2M Users · 4.1★) + ExamGhost (v4.2 · 4.9★)
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-10 items-center">
                            
                            {/* Left 7 Columns */}
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-ink tracking-tight leading-[1.07] mb-6">
                                    BetterCampus makes Canvas look good. <span className="text-purple-900">ExamGhost gets you the A.</span>
                                </h1>

                                <p className="aeo-summary text-base sm:text-lg text-ink-secondary leading-relaxed mb-5">
                                    Over 2 million students love <strong>BetterCampus</strong> (formerly BetterCanvas) for dark mode, custom dashboard cards, and GPA tracking. Ready for the catch? It has <strong>zero AI quiz solver, zero formula OCR, and zero protection</strong> when Canvas SpeedGrader logs your tab switches during an exam.
                                </p>

                                <p className="text-base sm:text-lg text-ink-secondary leading-relaxed mb-8">
                                    You don&apos;t have to choose between them. Because <strong>ExamGhost</strong> runs inside an isolated <strong>closed Shadow DOM</strong>, it pairs seamlessly with BetterCampus dark mode while adding <strong>0.3-second double-click solving</strong> and <strong>Focus Shield</strong> blur immunity.
                                </p>

                                <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3.5 mb-7">
                                    <Link prefetch={false}
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm sm:text-base font-bold shadow-lift inline-flex items-center justify-center gap-2.5 group"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#e2d3fa]" aria-hidden="true" />
                                        <span>Add ExamGhost — 50 Free Solves</span>
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                    </Link>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-6 py-4 rounded-full text-sm sm:text-base font-bold bg-white hover:bg-cream text-ink border border-black/15 shadow-sm inline-flex items-center justify-center gap-2 transition-all"
                                    >
                                        <MousePointerClick className="w-4 h-4 text-purple-700" />
                                        <span>Try Live Canvas Quiz Demo</span>
                                    </Link>
                                </div>

                                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-semibold text-ink-secondary">
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        <span>Never Breaks BetterCampus Themes</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        <span>50 Free Solves (No Card Needed)</span>
                                    </span>
                                    <span className="inline-flex items-center gap-1.5">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                                        <span>Works on Blackboard &amp; Moodle Too</span>
                                    </span>
                                </div>
                            </div>

                            {/* Right 5 Columns: Visual "Two-Extension Power Stack" Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-white border border-black/10 p-6 shadow-lift space-y-4">
                                    <div className="flex items-center justify-between pb-3 border-b border-black/10">
                                        <span className="font-display font-extrabold text-sm text-ink">
                                            The 2026 Canvas Student Stack
                                        </span>
                                        <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-900 text-[11px] font-bold">
                                            Zero Conflict
                                        </span>
                                    </div>

                                    {/* Layer 1: BetterCampus */}
                                    <div className="p-4 rounded-2xl bg-[#f6f3fc] border border-purple-200">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-7 h-7 rounded-lg bg-purple-200 text-purple-900 flex items-center justify-center">
                                                    <Palette className="w-4 h-4" />
                                                </div>
                                                <span className="font-bold text-sm text-ink">1. BetterCampus (Free)</span>
                                            </div>
                                            <span className="text-[11px] font-semibold text-purple-900 bg-white px-2 py-0.5 rounded border border-purple-200">
                                                Visual UI Only
                                            </span>
                                        </div>
                                        <p className="text-xs text-ink-secondary leading-relaxed mb-2.5">
                                            Handles your daily Canvas dashboard: dark mode stylesheets, custom course card images, and semester GPA calculator.
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 text-[11px] font-medium text-rose-800">
                                            <span className="px-2 py-0.5 rounded bg-rose-50 border border-rose-200">✗ No Quiz AI</span>
                                            <span className="px-2 py-0.5 rounded bg-rose-50 border border-rose-200">✗ No Blur Shield</span>
                                            <span className="px-2 py-0.5 rounded bg-rose-50 border border-rose-200">✗ Canvas Only</span>
                                        </div>
                                    </div>

                                    {/* Plus connector */}
                                    <div className="flex items-center justify-center -my-1">
                                        <span className="w-7 h-7 rounded-full bg-ink text-white text-xs font-bold flex items-center justify-center shadow-sm">
                                            +
                                        </span>
                                    </div>

                                    {/* Layer 2: ExamGhost */}
                                    <div className="p-4 rounded-2xl bg-emerald-50/90 border-2 border-emerald-500/40">
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <div className="w-7 h-7 rounded-lg bg-emerald-800 text-white flex items-center justify-center">
                                                    <Zap className="w-4 h-4" />
                                                </div>
                                                <span className="font-bold text-sm text-emerald-950">2. ExamGhost (50 Free Solves)</span>
                                            </div>
                                            <span className="text-[11px] font-bold text-emerald-950 bg-emerald-200/80 px-2 py-0.5 rounded">
                                                Exam Engine
                                            </span>
                                        </div>
                                        <p className="text-xs text-emerald-950 leading-relaxed mb-2.5">
                                            Takes over during timed quizzes &amp; midterms: double-click any question to auto-fill in 0.3s while silencing SpeedGrader blur logs.
                                        </p>
                                        <div className="flex flex-wrap gap-1.5 text-[11px] font-bold text-emerald-900">
                                            <span className="px-2 py-0.5 rounded bg-white border border-emerald-300">✓ 0.3s Inline AI</span>
                                            <span className="px-2 py-0.5 rounded bg-white border border-emerald-300">✓ Focus Shield</span>
                                            <span className="px-2 py-0.5 rounded bg-white border border-emerald-300">✓ 20+ LMSs</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </header>

                {/* ============================================================
                    INTERACTIVE SCENE SWITCHER: DASHBOARD VS LIVE QUIZ
                ============================================================ */}
                <section id="purpose-comparison" className="max-w-6xl mx-auto px-4 sm:px-6 mb-24 scroll-mt-24">
                    <div className="text-center max-w-3xl mx-auto mb-10">
                        <p className="eyebrow justify-center mb-3">
                            <Sliders className="w-4 h-4 text-purple-700" />
                            <span>DIFFERENT TOOLS FOR DIFFERENT MOMENTS</span>
                        </p>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-ink tracking-tight leading-[1.08] mb-4">
                            Where BetterCampus stops—and where ExamGhost takes over.
                        </h2>
                        <p className="text-base sm:text-lg text-ink-secondary leading-relaxed">
                            Click below to switch between your everyday Canvas dashboard and a timed 45-minute midterm exam.
                        </p>
                    </div>

                    <div className="rounded-[36px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <input type="radio" name="bc_scene" id="scene_quiz" className="sr-only peer/quiz" defaultChecked />
                        <input type="radio" name="bc_scene" id="scene_css" className="sr-only peer/css" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-1.5 rounded-2xl bg-[#f3efea] border border-black/10 mb-8 max-w-2xl mx-auto">
                            <label
                                htmlFor="scene_quiz"
                                className="cursor-pointer py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-center transition-all flex items-center justify-center gap-2 text-ink-secondary hover:text-ink peer-checked/quiz:bg-ink peer-checked/quiz:text-white peer-checked/quiz:shadow-sm"
                            >
                                <Zap className="w-4 h-4" />
                                <span>Scenario 1: Inside a Timed Canvas Midterm</span>
                            </label>
                            <label
                                htmlFor="scene_css"
                                className="cursor-pointer py-3 px-4 rounded-xl text-xs sm:text-sm font-bold text-center transition-all flex items-center justify-center gap-2 text-ink-secondary hover:text-ink peer-checked/css:bg-ink peer-checked/css:text-white peer-checked/css:shadow-sm"
                            >
                                <Moon className="w-4 h-4" />
                                <span>Scenario 2: Why Other Solvers Break Dark Mode</span>
                            </label>
                        </div>

                        {/* SCENARIO 1: TIMED MIDTERM */}
                        <div className="hidden peer-checked/quiz:block">
                            <div className="grid lg:grid-cols-3 gap-6">
                                <div className="rounded-3xl bg-[#faf8f5] border border-black/10 p-6">
                                    <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-900 font-mono font-bold text-sm flex items-center justify-center mb-4">
                                        01
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-ink mb-2">
                                        Tab-Switching Still Flags You on BetterCampus
                                    </h3>
                                    <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                                        Many students assume BetterCampus hides their activity from professors. It doesn&apos;t. The moment you click outside Canvas to Google a question, Canvas fires <code className="text-xs bg-black/5 px-1.5 py-0.5 rounded">window.blur</code> and logs <em>&ldquo;Stopped viewing the Canvas quiz-taking page&rdquo;</em> in SpeedGrader.
                                    </p>
                                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-medium">
                                        <strong>ExamGhost Fix:</strong> Focus Shield intercepts blur &amp; visibility events automatically so your log stays 100% green.
                                    </div>
                                </div>

                                <div className="rounded-3xl bg-[#faf8f5] border border-black/10 p-6">
                                    <div className="w-10 h-10 rounded-2xl bg-sky-100 text-sky-900 font-mono font-bold text-sm flex items-center justify-center mb-4">
                                        02
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-ink mb-2">
                                        Double-Click Any Question for 0.3s Answers
                                    </h3>
                                    <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                                        Instead of leaving your dark-themed Canvas quiz tab, simply double-click any multiple-choice, multi-select, or short-answer question. ExamGhost solves it inline in <strong>0.3 seconds</strong> using your choice of Auto-Fill, Smart Highlight, or Silent Clipboard.
                                    </p>
                                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-medium">
                                        <strong>ExamGhost Fix:</strong> 3 Stealth Display Modes (Invisible, Stealth, Explain) controlled via <kbd className="font-mono">⌘+Shift+U</kbd>.
                                    </div>
                                </div>

                                <div className="rounded-3xl bg-[#faf8f5] border border-black/10 p-6">
                                    <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-900 font-mono font-bold text-sm flex items-center justify-center mb-4">
                                        03
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-ink mb-2">
                                        Covers Your Non-Canvas Classes Too
                                    </h3>
                                    <p className="text-sm text-ink-secondary leading-relaxed mb-4">
                                        Even at Canvas universities, STEM departments frequently assign quizzes on <strong>McGraw-Hill Connect, Pearson MyLab, WebAssign, or Blackboard</strong>—where BetterCampus doesn&apos;t run at all.
                                    </p>
                                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-950 font-medium">
                                        <strong>ExamGhost Fix:</strong> Works across 20+ LMSs and publisher portals with Snap-It OCR (<kbd className="font-mono">⌘+Shift+S</kbd>).
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* SCENARIO 2: DARK MODE COMPATIBILITY */}
                        <div className="hidden peer-checked/css:block">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div className="rounded-2xl bg-[#18181b] text-white p-6 border border-rose-500/40">
                                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                                        <span className="font-mono text-xs font-bold text-rose-300">ORDINARY QUIZ EXTENSIONS + BETTERCAMPUS</span>
                                        <span className="px-2 py-0.5 rounded bg-rose-950 text-rose-300 text-[11px] font-bold">CSS Collision</span>
                                    </div>
                                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                                        Cheap extensions like Answer.AI, CanvasQuiz, and Coursology inject global <code className="text-xs bg-white/10 px-1.5 py-0.5 rounded">content.css</code> stylesheets and white answer boxes directly into the host page DOM—turning your dark-mode Canvas quiz into a glaring white patchwork that anyone behind you can spot.
                                    </p>
                                    <div className="p-3.5 rounded-xl bg-black/50 font-mono text-xs text-rose-300">
                                        ❌ Overrides BetterCampus dark background variables<br />
                                        ❌ Injects bright visible buttons next to questions
                                    </div>
                                </div>

                                <div className="rounded-2xl bg-[#111c16] text-white p-6 border border-emerald-500/40">
                                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                                        <span className="font-mono text-xs font-bold text-emerald-300">EXAMGHOST + BETTERCAMPUS DARK MODE</span>
                                        <span className="px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 text-[11px] font-bold">100% Isolated</span>
                                    </div>
                                    <p className="text-sm text-white/80 leading-relaxed mb-4">
                                        ExamGhost mounts inside a <strong>closed Shadow DOM root</strong> (<code className="text-xs bg-white/10 px-1.5 py-0.5 rounded">attachShadow(&#123; mode: &apos;closed&apos; &#125;)</code>) with zero global CSS leaks. Your BetterCampus midnight theme stays untouched while ExamGhost auto-fills or subtly glows on the right answer.
                                    </p>
                                    <div className="p-3.5 rounded-xl bg-black/50 font-mono text-xs text-emerald-300">
                                        ✓ Zero host DOM or CSS style interference<br />
                                        ✓ Adjustable 10%–100% opacity blend for dark rooms
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ============================================================
                    SIDE-BY-SIDE CAPABILITY TABLE + COLLAPSIBLE MANIFEST AUDIT
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-24">
                    <div className="text-center max-w-2xl mx-auto mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            BetterCampus vs ExamGhost: Capability Breakdown
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            See exactly what each extension does—and why students keep both installed.
                        </p>
                    </div>

                    <div className="rounded-[32px] bg-white border border-black/10 overflow-hidden shadow-card">
                        <div className="overflow-x-auto">
                            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[640px]">
                                <thead>
                                    <tr className="bg-[#f7f4ee] border-b border-black/10">
                                        <th className="py-4 px-6 font-bold text-ink w-[36%]">Feature / Capability</th>
                                        <th className="py-4 px-6 font-extrabold text-emerald-950 bg-emerald-100/50 text-center w-[32%]">
                                            ExamGhost (v4.2)
                                        </th>
                                        <th className="py-4 px-6 font-bold text-purple-950 bg-purple-100/40 text-center w-[32%]">
                                            BetterCampus (BetterCanvas)
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Primary Purpose</div>
                                            <div className="text-xs text-ink-muted">What the extension is engineered for</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            Stealth AI Quiz &amp; Exam Solving
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-purple-900">
                                            Canvas Dark Mode &amp; UI Themes
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">0.3s Inline AI Question Solver</div>
                                            <div className="text-xs text-ink-muted">Double-click to auto-fill, highlight, or copy</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Built-In (3 Modes + 3 Methods)
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ None
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Focus Shield (Tab-Blur Protection)</div>
                                            <div className="text-xs text-ink-muted">Stops SpeedGrader &ldquo;Stopped viewing quiz&rdquo; logs</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Blocks blur &amp; visibilitychange
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ None (Unshielded focus)
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Snap-It Screenshot OCR (<kbd className="font-mono text-xs">⌘+Shift+S</kbd>)</div>
                                            <div className="text-xs text-ink-muted">Solves calculus integrals, circuits &amp; diagrams</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ Built-In Mathpix Vision
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-rose-800">
                                            ✗ None
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Canvas Dark Mode &amp; Custom Card Colors</div>
                                            <div className="text-xs text-ink-muted">Dashboard aesthetics &amp; GPA calculator</div>
                                        </td>
                                        <td className="py-4 px-6 text-center text-ink-secondary">
                                            Pairs with BetterCampus themes
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800">
                                            ✓ Built-In Theme Engine
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Multi-LMS Compatibility</div>
                                            <div className="text-xs text-ink-muted">Blackboard, Moodle, D2L, McGraw-Hill, Pearson</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            ✓ 20+ LMS &amp; Publisher Portals
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-ink-secondary">
                                            Canvas Only
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-[#fcf9f5]">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink">Pricing &amp; Free Access</div>
                                            <div className="text-xs text-ink-muted">Student-friendly pricing</div>
                                        </td>
                                        <td className="py-4 px-6 text-center font-bold text-emerald-800 bg-emerald-50/30">
                                            50 Free Solves · $19/mo · $99/yr · $199 Life
                                        </td>
                                        <td className="py-4 px-6 text-center font-semibold text-ink-secondary">
                                            Free (Visual theming only)
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <details className="border-t border-black/10 bg-[#faf8f4] px-6 py-4 text-xs group">
                            <summary className="cursor-pointer font-mono font-bold text-ink-secondary flex items-center justify-between list-none">
                                <span className="flex items-center gap-2 m-0 inline">
                                    <Terminal className="w-4 h-4 text-ink-muted" />
                                    <h3 className="font-bold m-0 inline">View Technical Chrome Web Store &amp; Domain Audit (BetterCampus 2026)</h3>
                                </span>
                                <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="mt-4 pt-3 border-t border-black/5 grid sm:grid-cols-2 gap-4 text-ink-secondary font-mono text-[11px] leading-relaxed">
                                <div className="p-3 rounded-xl bg-white border border-black/5">
                                    <div className="font-bold text-ink mb-1">Chrome Web Store Listing</div>
                                    Extension ID <code className="bg-black/5 px-1 rounded">cndibmoanboadcifjkjbdpjgfedanolh</code>, rebranded from BetterCanvas to BetterCampus (2,000,000+ users, 4.1★ across 4.6K ratings).
                                </div>
                                <div className="p-3 rounded-xl bg-white border border-black/5">
                                    <div className="font-bold text-ink mb-1">Domain Status (2026 EDITION)</div>
                                    The legacy domain <code className="bg-black/5 px-1 rounded">bettercampus.org</code> currently redirects to a parked <code className="bg-black/5 px-1 rounded">/lander</code> page; the extension itself operates via local CSS injection scripts.
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* ============================================================
                    STUDENT REVIEW + FAQ
                ============================================================ */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-24">
                    <div className="rounded-[32px] bg-[#f3ecfc] border border-black/10 p-7 sm:p-10 mb-16 shadow-sm">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                            <div className="flex items-center gap-1 text-amber-500">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white text-purple-950 text-xs font-bold border border-black/10">
                                Runs BetterCampus + ExamGhost Together
                            </span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-2xl font-bold text-ink leading-snug mb-5">
                            &ldquo;I&apos;ve used BetterCanvas since freshman year for dark mode, and I hated how other quiz extensions injected ugly white boxes that ruined my theme and lagged my browser. ExamGhost is completely invisible on top of my dark mode—I just double-click any Organic Chemistry question and it auto-fills the answer in 0.3 seconds.&rdquo;
                        </blockquote>
                        <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-black/10 text-xs text-ink-secondary">
                            <div>
                                <strong className="text-ink">Maya L.</strong> · Biochemistry Junior, UCLA
                            </div>
                            <span className="font-bold text-emerald-800">Zero CSS Conflicts · 100% Clean SpeedGrader Logs</span>
                        </div>
                    </div>

                    <div className="text-center mb-10">
                        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-sm sm:text-base text-ink-secondary">
                            Common questions from BetterCampus users adding ExamGhost to Chrome.
                        </p>
                    </div>

                    <div className="space-y-3.5">
                        {(jsonLd["@graph"][2] as any).mainEntity.map((faq: any, index: number) => (
                            <details
                                key={index}
                                className="group rounded-2xl bg-white border border-black/10 p-5 sm:p-6 shadow-sm"
                                open={index === 0}
                            >
                                <summary className="flex items-center justify-between cursor-pointer list-none font-display font-bold text-base text-ink">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.name}</h3>
                                    <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180 shrink-0 ml-3" />
                                </summary>
                                <p className="mt-3.5 text-sm text-ink-secondary leading-relaxed pt-3 border-t border-black/5">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* ============================================================
                    INLINE CONVERSION BAR + RELATED AUDITS
                ============================================================ */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#e2d3fa] via-[#d8e2fc] to-[#cdeecb] border border-black/10 p-7 sm:p-10 shadow-card flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
                        <div className="max-w-xl text-center lg:text-left">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/90 border border-black/10 text-xs font-bold text-purple-950 mb-3">
                                <Sparkles className="w-3.5 h-3.5 text-purple-700" />
                                <span>Upgrade Your Canvas Setup in 30 Seconds</span>
                            </span>
                            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                                Keep BetterCampus for Dark Mode. Add ExamGhost for 0.3s Solves.
                            </h2>
                            <p className="text-sm text-ink-secondary leading-relaxed">
                                Start with 50 Free Question Solves today—no credit card required, zero stylesheet conflicts, and full SpeedGrader Focus Shield included.
                            </p>
                        </div>
                        <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
                            <Link prefetch={false}
                                href="/#pricing"
                                className="btn-dark px-6 py-3.5 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2"
                            >
                                <FaChrome className="w-4 h-4 text-[#e2d3fa]" />
                                <span>Get 50 Free Solves</span>
                            </Link>
                            <Link prefetch={false}
                                href="/canvas-quiz-solver-free-demo"
                                className="px-5 py-3.5 rounded-full text-sm font-bold bg-white hover:bg-cream text-ink border border-black/15 inline-flex items-center gap-1.5 transition-colors"
                            >
                                <span>Test Live Demo</span>
                                <ArrowRight className="w-4 h-4" />
                            </Link>
                            <a
                                href="https://discord.gg/aCcsyKYJq4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-5 py-3.5 rounded-full text-sm font-bold bg-[#5865F2] hover:bg-[#4752c4] text-white inline-flex items-center gap-2 transition-colors"
                            >
                                <FaDiscord className="w-4 h-4" />
                                <span>Discord</span>
                            </a>
                        </div>
                    </div>

                    {/* Related Comparisons */}
                    <div className="border-t border-black/10 pt-10">
                        <div className="flex items-center justify-between mb-5">
                            <h2 className="font-display text-lg font-bold text-ink">
                                Compare More Canvas &amp; LMS Extensions
                            </h2>
                            <Link prefetch={false} href="/compare-canvas-hack-extensions" className="text-xs font-bold text-purple-900 hover:underline flex items-center gap-1">
                                <span>View All 57 Audits</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                            <Link prefetch={false} href="/canvashack-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs CanvasHack</div>
                                <div className="text-[11px] text-ink-muted">$149.99 Tab Blocker (No AI)</div>
                            </Link>
                            <Link prefetch={false} href="/cheatmate-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs CheatMate</div>
                                <div className="text-[11px] text-ink-muted">$9.99/wk &amp; 2.8★ Study Buddy</div>
                            </Link>
                            <Link prefetch={false} href="/coursology-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs Coursology</div>
                                <div className="text-[11px] text-ink-muted">Study Podcasts vs Exam Stealth</div>
                            </Link>
                            <Link prefetch={false} href="/canvaspass-vs-examghost" className="p-4 rounded-2xl bg-white border border-black/10 hover:border-black/30 transition-all">
                                <div className="font-bold text-xs text-ink mb-0.5">vs CanvasPass</div>
                                <div className="text-[11px] text-ink-muted">Credit Math &amp; Pro Paywall</div>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
