import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
    ShieldCheck,
    Zap,
    ChevronDown,
    ArrowRight,
    Sparkles,
    AlertTriangle,
    CheckCircle2,
    XCircle,
    ExternalLink,
    Keyboard,
    Copy,
    History,
    EyeOff,
    Layers,
    Terminal
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "Canvas Scholar vs ExamGhost (2026) — Clipper vs 0.3s AI",
    },
    description: "Compare Canvas Scholar v3.0 with ExamGhost. Upgrade from manual Ctrl+Shift+C clipboard clipping to 0.3s inline AI solving, Focus Shield & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/canvasscholar-vs-examghost",
    },
    openGraph: {
        title: "Canvas Scholar vs ExamGhost (2026) — Clipper vs 0.3s AI",
        description: "Compare Canvas Scholar v3.0 with ExamGhost. Upgrade from manual Ctrl+Shift+C clipboard clipping to 0.3s inline AI solving, Focus Shield & 50 Free Solves.",
        url: "https://examghost.com/canvasscholar-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "Canvas Scholar vs ExamGhost (2026) — Clipper vs 0.3s AI",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Canvas Scholar vs ExamGhost (2026) — Clipper vs 0.3s AI",
        description: "Compare Canvas Scholar v3.0 with ExamGhost. Upgrade from manual Ctrl+Shift+C clipboard clipping to 0.3s inline AI solving, Focus Shield & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function CanvasscholarVsExamghostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-01-18",
                "dateModified": "2026-03-02",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/canvasscholar-vs-examghost#webpage",
                "url": "https://examghost.com/canvasscholar-vs-examghost",
                "name": "Canvas Scholar vs ExamGhost (2026) | Ctrl+Shift+C Question Clipper vs 0.3s AI Stealth HUD",
                "description": "Technical comparison between the Canvas Scholar Chrome extension (gjpoopikljodipapghmkpdnajkjaphfa) and ExamGhost.",
                "breadcrumb": { "@id": "https://examghost.com/canvasscholar-vs-examghost#breadcrumb" },
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
                        "name": "Canvas Scholar",
                        "url": "https://chromewebstore.google.com/detail/canvas-scholar/gjpoopikljodipapghmkpdnajkjaphfa",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension",
                        "softwareVersion": "3.0"
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/canvasscholar-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Comparisons", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "Canvas Scholar vs ExamGhost", "item": "https://examghost.com/canvasscholar-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/canvasscholar-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Does Canvas Scholar actually solve new quiz questions with AI?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. According to its Chrome Web Store listing (version 3.0 by xenojiva07), Canvas Scholar is a keyboard and clipboard utility featuring a Question Clipper (Ctrl/Cmd+Shift+C), a Question Recorder (Ctrl/Cmd+Shift+R), and a Quiz Answer Viewer that only displays your own previous quiz responses on hover. It has no built-in AI or OCR engine to solve unseen questions on a first-attempt exam. ExamGhost includes a 0.3s Edge Vision AI solver with 50 Free Question Solves."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why does Canvas Scholar's Quiz Answer Viewer fail on midterms and finals?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Canvas Scholar's Quiz Answer Viewer only recalls answers you previously recorded or submitted on an earlier attempt of the exact same Canvas quiz. Because college midterms and finals only allow a single attempt (or pull random questions from an item bank), hovering over a question with Canvas Scholar shows nothing. ExamGhost solves brand-new, randomized, and image-based questions in real time."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What happens if you use Canvas Scholar's Question Clipper (Ctrl+Shift+C) during a monitored test?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Pressing Ctrl/Cmd+Shift+C in Canvas Scholar copies the question text to your clipboard, but because Canvas Scholar has no AI model, you still have to switch tabs or windows to paste the prompt into ChatGPT or Google. Switching tabs triggers Canvas SpeedGrader departure events unless protected by a full stealth architecture. ExamGhost solves and renders the answer inside a closed ShadowRoot HUD on the same screen without ever leaving your exam tab."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ExamGhost pricing compare to Canvas Scholar?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost gives every student 50 Free Question Solves ($0, no credit card required) including Focus Shield and 10 Snap-It Vision OCR snips—letting you solve an entire exam with real AI for free. For unlimited access, ExamGhost offers a $19/month pass, a $99/year Academic Year Pass ($8.25/mo), and a $199 one-time Lifetime Degree Pass."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-mint/40 selection:text-ink font-sans">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
            <Navbar />

            <main id="main-content">

                {/* Breadcrumb Navigation */}
                <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-4">
                    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-muted">
                        <Link prefetch={false} href="/" className="hover:text-ink transition-colors">Home</Link>
                        <span>/</span>
                        <Link prefetch={false} href="/compare-canvas-hack-extensions" className="hover:text-ink transition-colors">Comparisons</Link>
                        <span>/</span>
                        <span className="text-ink font-semibold">Canvas Scholar vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: PRIOR-ATTEMPT CLIPBOARD UTILITY VS 0.3S MULTIMODAL AI HUD */}
                <header className="relative pt-4 pb-16 sm:pb-20 overflow-hidden border-b border-sand-dark/20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-mono font-bold text-amber-900 mb-6 shadow-sm">
                            <History className="w-3.5 h-3.5 text-amber-700" />
                            <span>2026 Chrome Extension Audit · Canvas Scholar v3.0 vs ExamGhost</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-ink font-display leading-[1.08] mb-6 max-w-4xl">
                            Canvas Scholar only replays your own past attempts. ExamGhost solves unseen exams in 0.3s.
                        </h1>

                        <p className="aeo-summary text-base sm:text-lg text-ink-muted max-w-3xl leading-relaxed mb-8">
                            Many students install <strong>Canvas Scholar v3.0</strong> expecting an AI solver, only to discover during a test that it has <strong>zero AI engine</strong>. Its hover viewer only recalls answers you already submitted on an earlier quiz attempt, and its <code className="text-ink font-mono text-sm bg-sand/70 px-1.5 py-0.5 rounded">Ctrl+Shift+C</code> clipper just copies plaintext to your clipboard so you have to alt-tab out to ChatGPT. ExamGhost solves brand-new Attempt #1 questions and diagrams in <strong>0.3 seconds</strong> inside a closed Shadow DOM—starting with <strong>50 Free AI Solves ($0)</strong>.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-12">
                            <a
                                href="https://discord.gg/aCcsyKYJq4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-ink text-white font-semibold hover:bg-ink-light transition-all shadow-sm hover:shadow group text-sm sm:text-base"
                            >
                                <FaChrome className="w-4 h-4 text-mint" aria-hidden="true" />
                                <span>Get 50 Free AI Solves ($0, No Card)</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                            <Link prefetch={false}
                                href="/canvas-quiz-solver-free-demo"
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-surface hover:bg-sand border border-sand-dark/40 text-ink font-semibold transition-all text-sm sm:text-base shadow-sm"
                            >
                                <span>Try Interactive Live Demo</span>
                            </Link>
                            <Link prefetch={false}
                                href="/#pricing"
                                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-sand/50 hover:bg-sand border border-sand-dark/30 text-ink-muted hover:text-ink font-medium transition-all text-sm"
                            >
                                <span>View Pass Tiers ($19/mo · $99/yr)</span>
                            </Link>
                        </div>

                        {/* HERO SIDE-BY-SIDE SIMULATION: ATTEMPT #1 MIDTERM */}
                        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
                            {/* Left Card: Canvas Scholar v3.0 on Attempt #1 */}
                            <div className="rounded-2xl bg-surface border-2 border-rose-200/90 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-sand-dark/20">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                                            <span className="font-display font-bold text-sm text-ink">Canvas Scholar v3.0 (Attempt #1 Midterm)</span>
                                        </div>
                                        <span className="px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[11px] font-mono font-bold text-rose-800">
                                            0 AI Models Built-In
                                        </span>
                                    </div>

                                    {/* Simulated Hover & Clipboard Output */}
                                    <div className="rounded-xl bg-sand/40 border border-sand-dark/30 p-4 mb-4 font-mono text-xs">
                                        <div className="flex items-center justify-between text-[11px] text-ink-muted mb-2">
                                            <span>Midterm Exam · Attempt 1 of 1</span>
                                            <span className="text-rose-700 font-bold">Hovering Question #4...</span>
                                        </div>
                                        <div className="p-3 rounded-lg bg-rose-950 text-rose-100 border border-rose-800 space-y-1.5">
                                            <div className="text-rose-300">// Quiz Answer Viewer (localStorage lookup):</div>
                                            <div>&gt; Prior Submission Found: <span className="text-rose-400 font-bold">null (First Attempt!)</span></div>
                                            <div className="text-rose-300 pt-1">// Pressing Ctrl+Shift+C (Question Clipper):</div>
                                            <div>&gt; Copied plaintext to clipboard. <span className="text-amber-300">[Graph Image Ignored]</span></div>
                                            <div className="text-rose-300">&gt; Action Required: Alt-Tab to ChatGPT &amp; paste manually</div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-xs">
                                        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                                            <History className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                                            <span><strong>Only Recalls Past Retakes:</strong> Hover viewer only shows what <em>you</em> picked on a prior attempt of the exact same quiz.</span>
                                        </div>
                                        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                                            <Copy className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                                            <span><strong>Forces Tab Switching:</strong> <code className="font-mono text-[11px]">Ctrl+Shift+C</code> only copies text—you still have to leave Canvas to paste into an external AI.</span>
                                        </div>
                                        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                                            <XCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                                            <span><strong>Blind to Diagrams &amp; New Quizzes:</strong> Plaintext clipping fails on embedded graphs, chemistry rings, and LTI 1.3 iframes.</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-3 border-t border-sand-dark/20 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                                    <span>CWS Adoption: 58 Users (0 Reviews)</span>
                                    <span className="text-rose-800 font-bold">Manual Loop: ~9.5s+</span>
                                </div>
                            </div>

                            {/* Right Card: ExamGhost on Attempt #1 */}
                            <div className="rounded-2xl bg-surface border-2 border-emerald-500/40 p-5 sm:p-6 shadow-md flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-sand-dark/20">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                                            <span className="font-display font-bold text-sm text-ink">ExamGhost 0.3s Multimodal Stealth HUD</span>
                                        </div>
                                        <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono font-bold text-emerald-800">
                                            50 Free Solves ($0)
                                        </span>
                                    </div>

                                    {/* Simulated ExamGhost Output */}
                                    <div className="rounded-xl bg-sand/40 border border-sand-dark/30 p-4 mb-4 font-mono text-xs">
                                        <div className="flex items-center justify-between text-[11px] text-ink-muted mb-2">
                                            <span>Midterm Exam · Attempt 1 of 1</span>
                                            <span className="text-emerald-800 font-bold">Solved in 0.28s</span>
                                        </div>
                                        <div className="p-3 rounded-lg bg-emerald-950 text-emerald-100 border border-emerald-800 space-y-1.5">
                                            <div className="text-emerald-400">// Closed ShadowRoot HUD + Edge Vision OCR:</div>
                                            <div>&gt; Question + Graph Captured: <span className="text-emerald-300 font-bold">Unseen Attempt #1</span></div>
                                            <div>&gt; Verified Answer: <span className="text-white font-bold">C) k = 4.2 × 10⁻³ s⁻¹ (First-Order)</span></div>
                                            <div className="text-emerald-400 pt-1">// Canvas SpeedGrader Telemetry Status:</div>
                                            <div>&gt; Tab Switches: <span className="text-emerald-300 font-bold">0</span> · Blur Events Logged: <span className="text-emerald-300 font-bold">0</span></div>
                                        </div>
                                    </div>

                                    <div className="space-y-2 text-xs">
                                        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Solves Unseen Attempt #1 Exams:</strong> Real-time STEM &amp; multiple-choice AI engine—no prior quiz attempt needed.</span>
                                        </div>
                                        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Never Leave Your Exam Tab:</strong> Answers render inside a closed <code className="font-mono text-[11px]">ShadowRoot</code> right on your screen with Focus Shield active.</span>
                                        </div>
                                        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Snap-It Vision Crosshair OCR:</strong> Snips graphs, equations, and cross-origin Canvas New Quizzes iframes in 0.3s.</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-3 border-t border-sand-dark/20 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                                    <span className="text-emerald-800 font-bold">1ms Panic Purge: ⌘+Shift+U</span>
                                    <span className="text-emerald-800 font-bold">In-Tab Solve: 0.3s</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE PURE-CSS 3-TAB FEATURE & WORKFLOW INSPECTOR */}
                <section className="py-16 sm:py-20 bg-sand/30 border-b border-sand-dark/20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-sand-dark/30 text-xs font-mono font-semibold text-ink-muted mb-3">
                                <Layers className="w-3.5 h-3.5 text-emerald-800" />
                                <span>Interactive Architecture Comparison · Select Any Tab</span>
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-bold font-display text-ink mb-3">
                                What Canvas Scholar v3.0 Actually Does vs ExamGhost
                            </h2>
                            <p className="text-sm sm:text-base text-ink-muted">
                                Click through the three tabs below to see how Canvas Scholar&apos;s five local utilities compare to ExamGhost&apos;s live AI stealth suite.
                            </p>
                        </div>

                        <div>
                            <input type="radio" name="cs-tabs" id="cs-tab-retake" className="sr-only peer/retake" defaultChecked />
                            <input type="radio" name="cs-tabs" id="cs-tab-clip" className="sr-only peer/clip" />
                            <input type="radio" name="cs-tabs" id="cs-tab-lms" className="sr-only peer/lms" />

                            {/* Tab Bar */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-3xl mx-auto mb-8 bg-surface p-2 rounded-2xl border border-sand-dark/30 shadow-sm">
                                <label
                                    htmlFor="cs-tab-retake"
                                    className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/retake:bg-ink peer-checked/retake:text-white peer-checked/retake:shadow-sm flex items-center justify-center gap-2"
                                >
                                    <History className="w-4 h-4 shrink-0" />
                                    <span>1. Retake Viewer vs Attempt #1 AI</span>
                                </label>
                                <label
                                    htmlFor="cs-tab-clip"
                                    className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/clip:bg-ink peer-checked/clip:text-white peer-checked/clip:shadow-sm flex items-center justify-center gap-2"
                                >
                                    <Copy className="w-4 h-4 shrink-0" />
                                    <span>2. Ctrl+Shift+C vs Snap-It OCR</span>
                                </label>
                                <label
                                    htmlFor="cs-tab-lms"
                                    className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/lms:bg-ink peer-checked/lms:text-white peer-checked/lms:shadow-sm flex items-center justify-center gap-2"
                                >
                                    <Keyboard className="w-4 h-4 shrink-0" />
                                    <span>3. 5 Local Tools vs Full Stealth</span>
                                </label>
                            </div>

                            {/* TAB 1: RETAKE VIEWER VS ATTEMPT #1 AI */}
                            <div className="hidden peer-checked/retake:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                                        <History className="w-3.5 h-3.5" />
                                        <span>Canvas Scholar: &ldquo;Quiz Answer Viewer&rdquo;</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-ink">
                                        Why hovering shows nothing on your first quiz attempt
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                        Canvas Scholar&apos;s description states: <em>&ldquo;Quiz Answer Viewer: Easily review your previous responses by hovering over questions.&rdquo;</em> Paired with its <code className="font-mono text-xs bg-sand px-1 rounded">Ctrl/Cmd+Shift+R</code> Question Recorder, it simply saves what you answered on an earlier attempt and displays it back to you on a retake.
                                    </p>
                                    <div className="space-y-2 text-xs sm:text-sm text-ink-muted">
                                        <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                                            <strong>Useless on Single-Attempt Midterms &amp; Finals:</strong> If your exam only allows 1 attempt, there is no prior response in storage—so hovering over a question returns nothing.
                                        </div>
                                        <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                                            <strong>Fails on Randomized Question Banks:</strong> Even on multi-attempt quizzes, if Canvas pulls fresh questions from an item bank on Attempt #2, Canvas Scholar has no answer stored.
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                                        <Zap className="w-3.5 h-3.5" />
                                        <span>ExamGhost: Real-Time 0.3s Edge AI Engine</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-ink">
                                        Solves unseen questions on Attempt #1 in 300ms
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                        ExamGhost doesn&apos;t rely on you failing Attempt #1 first. Our multimodal Edge Vision AI solves brand-new questions on the spot:
                                    </p>
                                    <div className="space-y-2 text-xs sm:text-sm text-ink-muted">
                                        <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                                            <strong>All Question Formats Supported:</strong> Multiple-choice, multi-select checkboxes, numerical entry, fill-in-the-blank, and matching tables.
                                        </div>
                                        <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                                            <strong>50 Free Question Solves Included:</strong> Test the live AI engine across an entire midterm for $0 before deciding on a $19/mo, $99/yr, or $199 Lifetime pass.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* TAB 2: CTRL+SHIFT+C CLIPPER VS SNAP-IT OCR */}
                            <div className="hidden peer-checked/clip:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                                        <Copy className="w-3.5 h-3.5" />
                                        <span>Canvas Scholar: Ctrl/Cmd+Shift+C Question Clipper</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-ink">
                                        Copying text still forces you to leave your exam tab
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                        When you press <code className="font-mono text-xs bg-sand px-1 rounded">Ctrl/Cmd+Shift+C</code> in Canvas Scholar, it copies the plaintext of the question to your system clipboard. Because there is no AI built into Canvas Scholar, you must then:
                                    </p>
                                    <ol className="list-decimal list-inside space-y-2 text-xs sm:text-sm text-ink-muted bg-sand/40 p-4 rounded-xl border border-sand-dark/25">
                                        <li>Switch tabs or windows to ChatGPT, Claude, or Google (~2s)</li>
                                        <li>Paste the clipped text and manually type any missing equations (~4s)</li>
                                        <li>Wait for the external tab to stream a response (~3.5s+)</li>
                                        <li>Switch back to Canvas to click your answer</li>
                                    </ol>
                                    <p className="text-xs text-rose-800 font-medium">
                                        Worse: if the question contains a graph, circuit diagram, or Canvas New Quizzes (<code className="font-mono">LTI 1.3</code>) iframe, <code className="font-mono">Ctrl+Shift+C</code> cannot copy the visual data at all.
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        <span>ExamGhost: In-Tab Hotkey + Snap-It Vision OCR</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-ink">
                                        Zero tab switching, zero clipboard pasting, full diagram OCR
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                        With ExamGhost, you never leave the quiz viewport or touch your system clipboard:
                                    </p>
                                    <div className="bg-emerald-950 text-emerald-100 rounded-2xl p-4 font-mono text-xs overflow-x-auto leading-relaxed border border-emerald-800">
                                        <div className="text-emerald-400">// 1. Press hotkey or drag Snap-It OCR crosshair:</div>
                                        <div>const answer = await EdgeVision.solveInTab(region); // 0.3s</div>
                                        <div className="text-emerald-400 mt-2">// 2. Renders inside closed ShadowRoot on the same screen:</div>
                                        <div>shadowHud.renderMinimalBadge(answer); // 0 tab switches</div>
                                    </div>
                                    <p className="text-xs text-ink-muted leading-relaxed">
                                        Whether the question is selectable HTML text, a locked PDF diagram, or a cross-origin Canvas New Quizzes iframe, ExamGhost solves and displays the answer in 0.3 seconds on the exact same screen.
                                    </p>
                                </div>
                            </div>

                            {/* TAB 3: 5 LOCAL TOOLS VS FULL STEALTH SUITE */}
                            <div className="hidden peer-checked/lms:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sand border border-sand-dark/30 text-xs font-mono font-bold text-ink">
                                        <span>Canvas Scholar v3.0: All 5 Listed Utilities</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-ink">
                                        What is inside Canvas Scholar&apos;s 561KiB package?
                                    </h3>
                                    <div className="space-y-2 text-xs">
                                        <div className="p-3 rounded-xl bg-sand/40 border border-sand-dark/25 flex justify-between items-center">
                                            <span><strong>1. Question Clipper</strong> (<code className="font-mono">Ctrl/Cmd+Shift+C</code>)</span>
                                            <span className="font-mono text-ink-muted">Clipboard Copy Only</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-sand/40 border border-sand-dark/25 flex justify-between items-center">
                                            <span><strong>2. Quiz Answer Viewer</strong> (Hover)</span>
                                            <span className="font-mono text-rose-800">Prior Attempts Only</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-sand/40 border border-sand-dark/25 flex justify-between items-center">
                                            <span><strong>3. Question Recorder</strong> (<code className="font-mono">Ctrl/Cmd+Shift+R</code>)</span>
                                            <span className="font-mono text-ink-muted">Local Save After Quiz</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-sand/40 border border-sand-dark/25 flex justify-between items-center">
                                            <span><strong>4. Keyboard Selection</strong> (<code className="font-mono">1-5</code>, <code className="font-mono">a-e</code>, <code className="font-mono">Enter</code>)</span>
                                            <span className="font-mono text-emerald-800">Included</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-sand/40 border border-sand-dark/25 flex justify-between items-center">
                                            <span><strong>5. Activity Bypass</strong></span>
                                            <span className="font-mono text-ink-muted">Canvas Classic Only</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                                        <span>ExamGhost 2026 Stealth Architecture</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-ink">
                                        Engineered for Canvas, Blackboard, Moodle &amp; D2L
                                    </h3>
                                    <div className="space-y-2 text-xs">
                                        <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 flex justify-between items-center">
                                            <span><strong>1. Multimodal Edge AI Solver</strong></span>
                                            <span className="font-mono font-bold text-emerald-800">0.3s Attempt #1 Solve</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 flex justify-between items-center">
                                            <span><strong>2. Snap-It STEM Vision OCR</strong></span>
                                            <span className="font-mono font-bold text-emerald-800">Graphs, LaTeX &amp; Iframes</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 flex justify-between items-center">
                                            <span><strong>3. Closed ShadowRoot HUD</strong></span>
                                            <span className="font-mono font-bold text-emerald-800">0 Host DOM Footprint</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 flex justify-between items-center">
                                            <span><strong>4. Capture-Phase Focus Shield</strong></span>
                                            <span className="font-mono font-bold text-emerald-800">Blocks Blur &amp; Visibility</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-200 flex justify-between items-center">
                                            <span><strong>5. Emergency Panic Kill Switch</strong></span>
                                            <span className="font-mono font-bold text-emerald-800">⌘+Shift+U (&lt;1ms Purge)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HONEST USE-CASE GUIDANCE */}
                <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-sand-dark/30 shadow-sm">
                            <h2 className="font-display font-bold text-lg sm:text-xl text-ink mb-3 flex items-center gap-2">
                                <Keyboard className="w-5 h-5 text-ink-muted" />
                                <span>When Canvas Scholar v3.0 Is Useful</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                                As a free Chrome Web Store hobbyist extension, Canvas Scholar serves a narrow utility role for ungraded practice:
                            </p>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                                    <span><strong>Unlimited Static Practice Quiz Retakes:</strong> If your course gives unlimited attempts on the exact same non-randomized Canvas Classic quiz, recording Attempt #1 with <code className="font-mono text-xs">Ctrl+Shift+R</code> lets you see your prior selections on Attempt #2.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                                    <span><strong>Selecting Radio Buttons With Number Keys:</strong> Mapping <code className="font-mono text-xs">1-5</code> or <code className="font-mono text-xs">a-e</code> to radio buttons speeds up clicking through unproctored review sets.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 sm:p-7 rounded-2xl bg-emerald-950 text-white border border-emerald-800 shadow-sm">
                            <h2 className="font-display font-bold text-lg sm:text-xl text-emerald-300 mb-3 flex items-center gap-2">
                                <EyeOff className="w-5 h-5 text-emerald-300" />
                                <span>Why Students Upgrade to ExamGhost</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-4">
                                When you only get one attempt on a timed midterm or final exam, you need real AI answers rendered invisibly on the same screen:
                            </p>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100 leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Solves Unseen Attempt #1 Questions in 0.3s:</strong> No prior submission history required—works on brand-new midterms, finals, and randomized item banks.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Reads Graphs, Equations &amp; New Quizzes Iframes:</strong> Built-in Snap-It Vision OCR solves diagrams that <code className="font-mono text-xs text-emerald-300">Ctrl+Shift+C</code> cannot copy.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>50 Free AI Solves Upfront:</strong> Try the full stealth HUD and AI solver on 50 real questions for $0 with no credit card required.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* COMPARISON MATRIX + COLLAPSIBLE TECHNICAL MANIFEST DRAWER */}
                <section className="py-16 bg-surface border-y border-sand-dark/20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-3">
                                2026 Feature &amp; Capability Comparison
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Side-by-side comparison between ExamGhost and Canvas Scholar v3.0 across 10 technical criteria.
                            </p>
                        </div>

                        <div className="overflow-x-auto rounded-2xl border border-sand-dark/30">
                            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[680px]">
                                <thead>
                                    <tr className="border-b border-sand-dark/30 bg-sand/40">
                                        <th className="py-3.5 px-4 font-bold text-ink">Capability / Feature</th>
                                        <th className="py-3.5 px-4 font-bold text-ink-muted">Technical Significance</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-800">ExamGhost</th>
                                        <th className="py-3.5 px-4 font-bold text-rose-800">Canvas Scholar v3.0</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-sand-dark/20">
                                    <tr className="bg-cream/40">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Built-In AI Question Solver</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Solves unseen questions on Attempt #1</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                                            0.3s Multimodal Edge AI
                                        </td>
                                        <td className="py-3.5 px-4 text-rose-800">
                                            <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                                            None (Clipboard &amp; Prior Attempts Only)
                                        </td>
                                    </tr>
                                    <tr className="bg-surface">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Snap-It STEM Vision OCR</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Reads graphs, diagrams, LaTeX &amp; locked images</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                                            Built-In Crosshair Vision OCR
                                        </td>
                                        <td className="py-3.5 px-4 text-rose-800">
                                            <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                                            Plaintext Ctrl+Shift+C Only
                                        </td>
                                    </tr>
                                    <tr className="bg-cream/40">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Closed Shadow DOM HUD</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Renders answers in-tab without mutating host DOM</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                                            100% Isolated ShadowRoot
                                        </td>
                                        <td className="py-3.5 px-4 text-rose-800">
                                            <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                                            No AI answer HUD
                                        </td>
                                    </tr>
                                    <tr className="bg-surface">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Focus Shield vs Activity Bypass</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Prevents SpeedGrader blur &amp; tab-switch logs</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">Full Capture-Phase Focus Shield</td>
                                        <td className="py-3.5 px-4 text-ink-muted">Basic Activity Bypass (Still requires alt-tab to search)</td>
                                    </tr>
                                    <tr className="bg-cream/40">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Canvas New Quizzes (LTI 1.3 Iframes)</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Works inside cross-origin sandboxed quiz frames</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                                            Multi-Frame + Screen OCR Bridge
                                        </td>
                                        <td className="py-3.5 px-4 text-rose-800">
                                            <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                                            Classic Canvas Selectors Only
                                        </td>
                                    </tr>
                                    <tr className="bg-surface">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Prior Quiz Attempt Hover Viewer</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Reviewing your own submitted answers on retakes</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">Solves both Attempt #1 and retakes live</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                                            Included (Quiz Answer Viewer)
                                        </td>
                                    </tr>
                                    <tr className="bg-cream/40">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Keyboard Answer Selection (1-5 / a-e)</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Selecting options via number or letter keys</td>
                                        <td className="py-3.5 px-4 text-ink-muted">Stealth Hotkey Solver + Auto-Highlight</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                                            Included (Keys 1-5, a-e, Enter)
                                        </td>
                                    </tr>
                                    <tr className="bg-surface">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Emergency Panic Kill Switch</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">1ms RAM &amp; UI purge if an instructor walks by</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                                            ⌘+Shift+U / Esc Instant Purge
                                        </td>
                                        <td className="py-3.5 px-4 text-rose-800">
                                            <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                                            Not Supported
                                        </td>
                                    </tr>
                                    <tr className="bg-cream/40">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Multi-LMS Support</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Blackboard, Moodle, D2L, McGraw Hill, Pearson</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                                            Universal LMS Compatibility
                                        </td>
                                        <td className="py-3.5 px-4 text-rose-800">
                                            <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                                            Canvas Only
                                        </td>
                                    </tr>
                                    <tr className="bg-surface">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Pricing &amp; Free Trial</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Cost to test and unlock full functionality</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">50 Free Solves · $19/mo · $99/yr · $199 Life</td>
                                        <td className="py-3.5 px-4 text-ink-muted">Free CWS utility (No AI solver included)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store Manifest Drawer */}
                        <details className="mt-6 group rounded-2xl bg-sand/40 border border-sand-dark/30 p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer text-xs sm:text-sm font-mono font-bold text-ink">
                                <span className="flex items-center gap-2 m-0 inline">
                                    <Terminal className="w-4 h-4 text-emerald-800" />
                                    <h3 className="font-bold m-0 inline">Technical Chrome Web Store Manifest &amp; Extension Audit (Canvas Scholar v3.0)</h3>
                                </span>
                                <ChevronDown className="w-4 h-4 text-ink-muted transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="mt-4 pt-4 border-t border-sand-dark/20 grid sm:grid-cols-2 gap-4 text-xs font-mono text-ink-muted">
                                <div className="p-3 rounded-xl bg-surface border border-sand-dark/20">
                                    <div className="text-ink font-bold mb-1">Canvas Scholar CWS Metadata</div>
                                    <div>Extension ID: <span className="text-ink">gjpoopikljodipapghmkpdnajkjaphfa</span></div>
                                    <div>Version / Size: <span className="text-ink">3.0 · 561KiB</span></div>
                                    <div>Publisher: <span className="text-ink">xenojiva07 (Non-trader account)</span></div>
                                    <div>Store Footprint: <span className="text-rose-800">~58 users · 0 ratings · No AI backend</span></div>
                                </div>
                                <div className="p-3 rounded-xl bg-surface border border-sand-dark/20">
                                    <div className="text-ink font-bold mb-1">ExamGhost Stealth Architecture</div>
                                    <div>UI Isolation: <span className="text-emerald-800">attachShadow(&#123; mode: &apos;closed&apos; &#125;)</span></div>
                                    <div>AI Compute: <span className="text-emerald-800">0.3s Multimodal Edge Vision + STEM</span></div>
                                    <div>Event Shield: <span className="text-emerald-800">window.blur / visibilitychange capture</span></div>
                                    <div>Panic Hotkey: <span className="text-emerald-800">⌘+Shift+U (&lt;1ms RAM &amp; DOM teardown)</span></div>
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* LATENCY BENCHMARK */}
                <section className="py-14 bg-cream border-b border-sand-dark/20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-xl sm:text-2xl font-bold font-display text-ink mb-6">
                            End-to-End Question Solving Time (Unseen Attempt #1 Question)
                        </h2>
                        <div className="space-y-4 text-left">
                            <div>
                                <div className="flex justify-between text-xs font-bold text-ink mb-1">
                                    <span>ExamGhost (In-Tab Hotkey + 0.3s Edge AI + Closed Shadow HUD)</span>
                                    <span className="text-emerald-800">0.3s</span>
                                </div>
                                <div className="w-full h-3 bg-sand-dark/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-700 rounded-full w-[8%]" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-bold text-ink mb-1">
                                    <span>Canvas Scholar v3.0 (Ctrl+Shift+C Clip + Alt-Tab + Paste into External AI)</span>
                                    <span className="text-rose-800">9.5s+</span>
                                </div>
                                <div className="w-full h-3 bg-sand-dark/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-rose-600 rounded-full w-[88%]" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* OFFICIAL STUDENT DISCORD COMMUNITY BANNER */}
                <section className="max-w-4xl mx-auto px-4 sm:px-6 my-14">
                    <div className="rounded-[32px] bg-[#3b47d6] text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lift">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
                                <FaDiscord className="w-7 h-7 text-white" />
                            </div>
                            <div>
                                <h2 className="font-display font-bold text-lg sm:text-xl text-white">
                                    Join the ExamGhost Student Discord
                                </h2>
                                <p className="text-xs sm:text-sm text-white/90">
                                    Get 50 Free AI Question Solves, live Canvas &amp; Blackboard stealth updates, and 24/7 engineering support.
                                </p>
                            </div>
                        </div>
                        <a
                            href="https://discord.gg/aCcsyKYJq4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 rounded-full bg-white text-[#232b88] hover:bg-white/95 text-sm font-bold shadow-sm whitespace-nowrap inline-flex items-center gap-2 transition-transform hover:-translate-y-0.5"
                        >
                            <span>Join Discord &amp; Get 50 Free Solves</span>
                            <ExternalLink className="w-4 h-4" />
                        </a>
                    </div>
                </section>

                {/* FREQUENTLY ASKED QUESTIONS */}
                <section className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="text-center mb-10">
                        <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-3">
                            Canvas Scholar vs ExamGhost: Frequently Asked Questions
                        </h2>
                        <p className="text-xs sm:text-sm text-ink-muted">
                            Verified technical answers comparing Canvas Scholar v3.0 and ExamGhost.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden" open>
                            <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Does Canvas Scholar actually solve new quiz questions with AI?</h3>
                                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                                No. According to its Chrome Web Store listing (version 3.0 by <code className="font-mono text-xs">xenojiva07</code>), Canvas Scholar is a keyboard and clipboard utility featuring a <strong>Question Clipper (<code className="font-mono text-xs">Ctrl/Cmd+Shift+C</code>)</strong>, a <strong>Question Recorder (<code className="font-mono text-xs">Ctrl/Cmd+Shift+R</code>)</strong>, and a <strong>Quiz Answer Viewer</strong> that only displays your own previous quiz responses on hover. It has no built-in AI or OCR engine to solve unseen questions on a first-attempt exam. ExamGhost includes a 0.3s Edge Vision AI solver with <strong>50 Free Question Solves</strong>.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Why does Canvas Scholar&apos;s Quiz Answer Viewer fail on midterms and finals?</h3>
                                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                                Canvas Scholar&apos;s Quiz Answer Viewer only recalls answers you previously recorded or submitted on an earlier attempt of the exact same Canvas quiz. Because college midterms and finals only allow a single attempt (or pull random questions from an item bank), hovering over a question with Canvas Scholar shows nothing. ExamGhost solves brand-new, randomized, and image-based questions in real time.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">What happens if you use Canvas Scholar&apos;s Question Clipper (Ctrl+Shift+C) during a monitored test?</h3>
                                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                                Pressing <code className="font-mono text-xs">Ctrl/Cmd+Shift+C</code> in Canvas Scholar copies the question text to your clipboard, but because Canvas Scholar has no AI model, you still have to switch tabs or windows to paste the prompt into ChatGPT or Google. ExamGhost solves and renders the answer inside a closed <code className="font-mono text-xs">ShadowRoot</code> HUD on the same screen without ever leaving your exam tab.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">How does ExamGhost pricing compare to Canvas Scholar?</h3>
                                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                                ExamGhost gives every student <strong>50 Free Question Solves ($0, no credit card required)</strong> including Focus Shield and 10 Snap-It Vision OCR snips—letting you solve an entire exam with real AI for free. For unlimited access, ExamGhost offers a <strong>$19/month</strong> pass, a <strong>$99/year Academic Year Pass ($8.25/mo)</strong>, and a <strong>$199 one-time Lifetime Degree Pass</strong>.
                            </p>
                        </details>
                    </div>
                </section>

                {/* BESPOKE PASTEL CONVERSION STRIP + RELATED COMPARISONS */}
                <section className="max-w-5xl mx-auto px-4 sm:px-6 pb-16">
                    <div className="rounded-3xl bg-gradient-to-br from-emerald-50 via-mint/25 to-amber-50/70 border border-emerald-200/80 p-6 sm:p-10 shadow-sm mb-12">
                        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                            <div className="max-w-xl">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-emerald-200 text-xs font-mono font-bold text-emerald-900 mb-3">
                                    <Sparkles className="w-3.5 h-3.5 text-emerald-700" />
                                    <span>Solve Unseen Questions on Attempt #1</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-2">
                                    Stop clipping text to paste into another tab.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                    Test ExamGhost&apos;s 0.3s in-tab AI solver and Snap-It Vision OCR with 50 Free Question Solves ($0, no credit card required).
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
                                <a
                                    href="https://discord.gg/aCcsyKYJq4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-ink text-white font-bold hover:bg-ink-light transition-all shadow-sm text-sm"
                                >
                                    <FaChrome className="w-4 h-4 text-mint" />
                                    <span>Claim 50 Free Solves</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                                <Link prefetch={false}
                                    href="/#pricing"
                                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-sand/60 text-ink font-semibold border border-sand-dark/30 transition-all text-sm"
                                >
                                    <span>View Passes ($19/mo · $99/yr)</span>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-sand-dark/20 pt-8">
                        <h2 className="font-display font-bold text-base sm:text-lg text-ink mb-4">
                            Explore Other Verified 2026 Extension Comparisons
                        </h2>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                            <Link prefetch={false} href="/canvascrack-vs-examghost" className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm">
                                <span className="font-semibold block text-ink">CanvasCrack vs ExamGhost</span>
                                <span className="text-ink-muted">Tab Mask Only vs AI + Stealth</span>
                            </Link>
                            <Link prefetch={false} href="/quizmate-vs-examghost" className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm">
                                <span className="font-semibold block text-ink">QuizMate vs ExamGhost</span>
                                <span className="text-ink-muted">$7.99/wk Portal Button vs HUD</span>
                            </Link>
                            <Link prefetch={false} href="/coursology-vs-examghost" className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm">
                                <span className="font-semibold block text-ink">Coursology vs ExamGhost</span>
                                <span className="text-ink-muted">Injected Answer Card vs Shadow HUD</span>
                            </Link>
                            <Link prefetch={false} href="/studyfox-vs-examghost" className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm">
                                <span className="font-semibold block text-ink">StudyFox vs ExamGhost</span>
                                <span className="text-ink-muted">Toolbar Popup Blur vs Focus Shield</span>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
