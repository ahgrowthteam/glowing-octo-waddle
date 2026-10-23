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
    Smartphone,
    BookOpen,
    CreditCard,
    EyeOff,
    Lock,
    Layers,
    Terminal
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "QuizMate vs ExamGhost (2026) — $7.99/Wk Portal Button Audit",
    },
    description: "Compare QuizMate ($7.99/wk) with ExamGhost. Avoid injected portal buttons and SpeedGrader flags with 0.3s closed Shadow DOM stealth and 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/quizmate-vs-examghost",
    },
    openGraph: {
        title: "QuizMate vs ExamGhost (2026) — $7.99/Wk Portal Button Audit",
        description: "Compare QuizMate ($7.99/wk) with ExamGhost. Avoid injected portal buttons and SpeedGrader flags with 0.3s closed Shadow DOM stealth and 50 Free Solves.",
        url: "https://examghost.com/quizmate-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "QuizMate vs ExamGhost (2026) — $7.99/Wk Portal Button Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "QuizMate vs ExamGhost (2026) — $7.99/Wk Portal Button Audit",
        description: "Compare QuizMate ($7.99/wk) with ExamGhost. Avoid injected portal buttons and SpeedGrader flags with 0.3s closed Shadow DOM stealth and 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function QuizmateVsExamghostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-01-13",
                "dateModified": "2026-03-20",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/quizmate-vs-examghost#webpage",
                "url": "https://examghost.com/quizmate-vs-examghost",
                "name": "QuizMate vs ExamGhost (2026) | Portal Button Injector vs Closed Shadow DOM Stealth",
                "description": "Technical and pricing comparison between QuizMate (quizmate.io) and ExamGhost for Canvas, Blackboard, Moodle, and D2L exams.",
                "breadcrumb": { "@id": "https://examghost.com/quizmate-vs-examghost#breadcrumb" },
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
                        "name": "QuizMate",
                        "url": "https://quizmate.io",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Chrome Extension, iOS App Store",
                        "offers": [
                            { "@type": "Offer", "name": "QuizMate Weekly Plan", "price": "7.99", "priceCurrency": "USD" },
                            { "@type": "Offer", "name": "QuizMate Monthly Plan", "price": "19.99", "priceCurrency": "USD" },
                            { "@type": "Offer", "name": "QuizMate Yearly Plan ($10.99/mo billed yearly)", "price": "131.88", "priceCurrency": "USD" }
                        ]
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/quizmate-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Comparisons", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "QuizMate vs ExamGhost", "item": "https://examghost.com/quizmate-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/quizmate-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "What is included in a QuizMate (quizmate.io) subscription vs ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "QuizMate bundles three general study products under its 'Tuition' subscription: the QuizMate Tutor Chrome extension, an iOS-only Mobile App for snapping photos of paper worksheets, and the QuizMate Study Hub (which includes lecture note summarization, an essay writer, flashcards, and an ATS resume builder). ExamGhost is a specialized browser exam stealth suite engineered specifically for live LMS assessments with a closed Shadow DOM HUD, Focus Shield blur suppression, Snap-It STEM Vision OCR, and an instant ⌘+Shift+U RAM panic purge."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How much does QuizMate actually cost compared to ExamGhost in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "On quizmate.io, 'The Tuition' is priced at $7.99/week (which equals $31.96/month if left on weekly billing), $19.99/month on the Monthly Plan, or $10.99/month billed yearly ($131.88/year), with no free trial solves listed on the pricing page. ExamGhost gives every student 50 Free Question Solves ($0, no credit card required), followed by $19/month, $99/year ($8.25/mo — saving $32.88/year vs QuizMate Yearly), or a $199 one-time Lifetime Degree Pass."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does the QuizMate Tutor Chrome extension protect against Canvas SpeedGrader tab and focus logs?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. QuizMate Tutor states that it 'integrates directly into your school portal' so you can get answers 'with the click of a button.' Injecting interactive buttons and step-by-step explanation panels directly into the host LMS page modifies the DOM tree and does not intercept window.blur or visibilitychange events if you switch to the QuizMate Study Hub tab. ExamGhost isolates its UI inside a closed ShadowRoot and intercepts focus/blur events at the window capture phase."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does QuizMate have an Android mobile app or desktop screen OCR?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "QuizMate explicitly states on its website that its mobile app is 'available exclusively on the App Store' for iOS devices. For desktop exams containing complex diagrams, locked PDFs, or cross-origin iframes, ExamGhost builds a native Snap-It Vision OCR crosshair directly into the browser so you never have to hold up an iPhone to your laptop screen during a webcam-monitored test."
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
                        <span className="text-ink font-semibold">QuizMate vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: PORTAL BUTTON INJECTOR & $7.99/WK TUITION VS CLOSED SHADOW HUD */}
                <header className="relative pt-4 pb-16 sm:pb-20 overflow-hidden border-b border-sand-dark/20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 border border-amber-200/80 text-xs font-mono font-bold text-amber-900 mb-6 shadow-sm">
                            <Sparkles className="w-3.5 h-3.5 text-amber-700" />
                            <span>2026 Live Portal &amp; Billing Audit · quizmate.io vs ExamGhost</span>
                        </div>

                        <h1 className="text-3xl sm:text-5xl lg:text-[54px] font-bold tracking-tight text-ink font-display leading-[1.08] mb-6 max-w-4xl">
                            QuizMate charges $7.99/week to inject portal buttons. ExamGhost solves inside a 0.3s closed Shadow DOM.
                        </h1>

                        <p className="aeo-summary text-base sm:text-lg text-ink-muted max-w-3xl leading-relaxed mb-8">
                            QuizMate (<code className="text-ink font-mono text-sm bg-sand/70 px-1.5 py-0.5 rounded">quizmate.io</code>) bundles a Chrome extension, an iOS-only camera app, and a Study Hub (including an ATS resume builder) under what it calls <strong>&ldquo;The Tuition&rdquo; at $7.99/week ($31.96/month)</strong>. But on a live Canvas or Blackboard exam, you don&apos;t need a resume builder—and clicking QuizMate&apos;s injected school portal button modifies your host webpage DOM with zero Focus Shield protection.
                        </p>

                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-12">
                            <a
                                href="https://discord.gg/aCcsyKYJq4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl bg-ink text-white font-semibold hover:bg-ink-light transition-all shadow-sm hover:shadow group text-sm sm:text-base"
                            >
                                <FaChrome className="w-4 h-4 text-mint" aria-hidden="true" />
                                <span>Claim 50 Free Solves ($0, No Card)</span>
                                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                            </a>
                            <Link prefetch={false}
                                href="/canvas-quiz-solver-free-demo"
                                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-surface hover:bg-sand border border-sand-dark/40 text-ink font-semibold transition-all text-sm sm:text-base shadow-sm"
                            >
                                <span>Test Interactive Sandbox</span>
                            </Link>
                            <Link prefetch={false}
                                href="/#pricing"
                                className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-sand/50 hover:bg-sand border border-sand-dark/30 text-ink-muted hover:text-ink font-medium transition-all text-sm"
                            >
                                <span>See Simple Pricing ($19/mo · $99/yr)</span>
                            </Link>
                        </div>

                        {/* HERO SIDE-BY-SIDE VISUAL MOCKUP */}
                        <div className="grid lg:grid-cols-2 gap-6 items-stretch">
                            {/* Left Card: QuizMate */}
                            <div className="rounded-2xl bg-surface border-2 border-rose-200/90 p-5 sm:p-6 shadow-sm flex flex-col justify-between">
                                <div>
                                    <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-sand-dark/20">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-rose-600" />
                                            <span className="font-display font-bold text-sm text-ink">QuizMate Tutor + &ldquo;The Tuition&rdquo;</span>
                                        </div>
                                        <span className="px-2.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-[11px] font-mono font-bold text-rose-800">
                                            $7.99/wk ($31.96/mo)
                                        </span>
                                    </div>

                                    {/* Simulated Canvas Question with Injected Button */}
                                    <div className="rounded-xl bg-sand/40 border border-sand-dark/30 p-4 mb-4">
                                        <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted mb-2">
                                            <span>Canvas Quiz · Question 7 of 25</span>
                                            <span className="text-rose-700 font-bold">DOM Modified</span>
                                        </div>
                                        <p className="text-xs text-ink font-medium mb-3">
                                            Determine the enantiomeric excess (ee) of the product mixture shown in the figure below...
                                        </p>
                                        <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-rose-100/80 border border-rose-300">
                                            <div className="flex items-center gap-2">
                                                <AlertTriangle className="w-4 h-4 text-rose-800 shrink-0" />
                                                <span className="text-xs font-bold text-rose-950">
                                                    Injected &ldquo;Instant Answer&rdquo; Button in Portal DOM
                                                </span>
                                            </div>
                                            <span className="text-[10px] font-mono bg-white/90 text-rose-900 px-2 py-0.5 rounded border border-rose-200">
                                                #instant-answers
                                            </span>
                                        </div>
                                    </div>

                                    {/* 3 Friction Pills */}
                                    <div className="space-y-2 text-xs">
                                        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                                            <XCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                                            <span><strong>Host Page Button Injection:</strong> Embeds clickable buttons &amp; explanation panels straight into your Canvas question container.</span>
                                        </div>
                                        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                                            <Smartphone className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                                            <span><strong>iPhone Camera Required for Graphs:</strong> Mobile scanner is iOS App Store exclusive—holding up a phone flags webcam proctors.</span>
                                        </div>
                                        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-rose-50/60 border border-rose-200/70 text-rose-950">
                                            <CreditCard className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                                            <span><strong>Weekly Billing Trap:</strong> $7.99/week equals <strong>$31.96 every 4 weeks</strong> ($127.84/semester) with no free trial solves listed.</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-3 border-t border-sand-dark/20 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                                    <span>SpeedGrader Blur Shield: None</span>
                                    <span className="text-rose-800 font-bold">Avg Latency: ~3.4s</span>
                                </div>
                            </div>

                            {/* Right Card: ExamGhost */}
                            <div className="rounded-2xl bg-surface border-2 border-emerald-500/40 p-5 sm:p-6 shadow-md flex flex-col justify-between relative overflow-hidden">
                                <div>
                                    <div className="flex items-center justify-between gap-2 pb-4 mb-4 border-b border-sand-dark/20">
                                        <div className="flex items-center gap-2">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse" />
                                            <span className="font-display font-bold text-sm text-ink">ExamGhost Closed Shadow HUD</span>
                                        </div>
                                        <span className="px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-mono font-bold text-emerald-800">
                                            50 Free Solves ($0)
                                        </span>
                                    </div>

                                    {/* Simulated Clean Canvas Question + Floating Closed Shadow HUD */}
                                    <div className="rounded-xl bg-sand/40 border border-sand-dark/30 p-4 mb-4 relative">
                                        <div className="flex items-center justify-between text-[11px] font-mono text-ink-muted mb-2">
                                            <span>Canvas Quiz · Question 7 of 25</span>
                                            <span className="text-emerald-800 font-bold">0 Host DOM Edits</span>
                                        </div>
                                        <p className="text-xs text-ink font-medium mb-3">
                                            Determine the enantiomeric excess (ee) of the product mixture shown in the figure below...
                                        </p>
                                        <div className="flex flex-wrap items-center justify-between gap-2 p-2.5 rounded-lg bg-emerald-950 text-white border border-emerald-700 shadow-sm">
                                            <div className="flex items-center gap-2">
                                                <Zap className="w-4 h-4 text-mint shrink-0" />
                                                <span className="text-xs font-bold text-emerald-100">
                                                    B) 76% ee (R-enantiomer excess)
                                                </span>
                                            </div>
                                            <span className="text-[10px] font-mono bg-emerald-900 text-emerald-200 px-2 py-0.5 rounded border border-emerald-700">
                                                0.3s · Closed ShadowRoot
                                            </span>
                                        </div>
                                    </div>

                                    {/* 3 Advantage Pills */}
                                    <div className="space-y-2 text-xs">
                                        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Zero Portal Buttons:</strong> Renders inside an isolated <code className="font-mono text-[11px]">ShadowRoot (mode: &apos;closed&apos;)</code>—invisible to host page DOM scanners.</span>
                                        </div>
                                        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>In-Browser Snap-It OCR:</strong> Drag a silent crosshair over any diagram, graph, or locked LTI iframe right on your desktop.</span>
                                        </div>
                                        <div className="flex items-start gap-2.5 p-2.5 rounded-lg bg-emerald-50/70 border border-emerald-200/80 text-emerald-950">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Focus Shield + 1ms Panic Purge:</strong> Blocks Canvas <code className="font-mono text-[11px]">window.blur</code> logs and wipes all HUD elements via <code className="font-mono text-[11px]">⌘+Shift+U</code>.</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-4 pt-3 border-t border-sand-dark/20 flex items-center justify-between text-[11px] font-mono text-ink-muted">
                                    <span className="text-emerald-800 font-bold">Focus Shield: Active</span>
                                    <span className="text-emerald-800 font-bold">Avg Latency: 0.3s</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE PURE-CSS 3-TAB WORKFLOW & BILLING BREAKDOWN */}
                <section className="py-16 sm:py-20 bg-sand/30 border-b border-sand-dark/20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-10">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-sand-dark/30 text-xs font-mono font-semibold text-ink-muted mb-3">
                                <Layers className="w-3.5 h-3.5 text-emerald-800" />
                                <span>Interactive Breakdown · Click Any Tab Below</span>
                            </div>
                            <h2 className="text-2xl sm:text-4xl font-bold font-display text-ink mb-3">
                                How QuizMate Works vs How ExamGhost Protects Your Exam
                            </h2>
                            <p className="text-sm sm:text-base text-ink-muted">
                                Switch between tabs to inspect the DOM footprint, diagram OCR workflow, and semester billing math.
                            </p>
                        </div>

                        {/* Pure CSS Radio Tabs */}
                        <div>
                            <input type="radio" name="qm-tabs" id="qm-tab-dom" className="sr-only peer/dom" defaultChecked />
                            <input type="radio" name="qm-tabs" id="qm-tab-ocr" className="sr-only peer/ocr" />
                            <input type="radio" name="qm-tabs" id="qm-tab-price" className="sr-only peer/price" />

                            {/* Tab Labels */}
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 max-w-3xl mx-auto mb-8 bg-surface p-2 rounded-2xl border border-sand-dark/30 shadow-sm">
                                <label
                                    htmlFor="qm-tab-dom"
                                    className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/dom:bg-ink peer-checked/dom:text-white peer-checked/dom:shadow-sm flex items-center justify-center gap-2"
                                >
                                    <Lock className="w-4 h-4 shrink-0" />
                                    <span>1. Portal Button vs Shadow DOM</span>
                                </label>
                                <label
                                    htmlFor="qm-tab-ocr"
                                    className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/ocr:bg-ink peer-checked/ocr:text-white peer-checked/ocr:shadow-sm flex items-center justify-center gap-2"
                                >
                                    <Smartphone className="w-4 h-4 shrink-0" />
                                    <span>2. iPhone App vs Desktop OCR</span>
                                </label>
                                <label
                                    htmlFor="qm-tab-price"
                                    className="cursor-pointer rounded-xl py-3 px-4 text-center text-xs sm:text-sm font-bold transition-all text-ink-muted hover:text-ink peer-checked/price:bg-ink peer-checked/price:text-white peer-checked/price:shadow-sm flex items-center justify-center gap-2"
                                >
                                    <CreditCard className="w-4 h-4 shrink-0" />
                                    <span>3. $7.99/Wk Tuition vs Fair Passes</span>
                                </label>
                            </div>

                            {/* TAB 1 CONTENT: DOM INJECTION VS CLOSED SHADOW DOM */}
                            <div className="hidden peer-checked/dom:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                                        <XCircle className="w-3.5 h-3.5" />
                                        <span>QuizMate Tutor: Direct Portal Injection</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-ink">
                                        Injecting &ldquo;Instant Answers&rdquo; buttons mutates the LMS DOM
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                        On its website, QuizMate states: <em>&ldquo;It integrates directly into your school portal. With the click of a button, QuizMate will provide you with a quick and concise answer, as well as a thorough explanation.&rdquo;</em>
                                    </p>
                                    <ul className="space-y-2.5 text-xs sm:text-sm text-ink-muted">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                                            <span><strong>Visible Host Nodes:</strong> Appending buttons and multi-paragraph explanation boxes directly into the Canvas question container triggers <code className="font-mono text-xs bg-sand px-1 rounded">MutationObserver</code> integrity checks.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                                            <span><strong>Unshielded Focus Events:</strong> Switching to the QuizMate Study Hub tab or clicking extension popups fires <code className="font-mono text-xs bg-sand px-1 rounded">window.blur</code> straight to Canvas SpeedGrader&apos;s quiz log.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-700 shrink-0 mt-0.5" />
                                            <span><strong>Visual Shoulder-Surfing Risk:</strong> Large step-by-step explanation cards remain visibly embedded inside your exam page with no 1-millisecond panic key.</span>
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        <span>ExamGhost: Zero-Button Closed ShadowRoot</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-ink">
                                        100% isolated from your school portal&apos;s DOM tree
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                        ExamGhost never injects clickable buttons next to your quiz questions. Everything runs via silent keyboard shortcuts inside a closed Shadow DOM container.
                                    </p>
                                    <div className="bg-emerald-950 text-emerald-100 rounded-2xl p-4 font-mono text-xs overflow-x-auto leading-relaxed border border-emerald-800">
                                        <div className="text-emerald-400">// 1. Isolated closed ShadowRoot (invisible to querySelectorAll):</div>
                                        <div>const hud = host.attachShadow(&#123; mode: &quot;closed&quot; &#125;);</div>
                                        <div className="text-emerald-400 mt-2">// 2. Focus Shield intercepts blur &amp; visibilitychange:</div>
                                        <div>window.addEventListener(&quot;blur&quot;, (e) =&gt; e.stopImmediatePropagation(), true);</div>
                                        <div className="text-emerald-400 mt-2">// 3. ⌘+Shift+U purges HUD &amp; RAM state in &lt;1ms</div>
                                    </div>
                                    <p className="text-xs text-ink-muted leading-relaxed">
                                        You can also dial HUD opacity down to translucent ghost mode so nobody walking past your desk in a lecture hall or lab can spot an overlay.
                                    </p>
                                </div>
                            </div>

                            {/* TAB 2 CONTENT: IPHONE CAMERA APP VS DESKTOP SNAP-IT OCR */}
                            <div className="hidden peer-checked/ocr:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                                        <Smartphone className="w-3.5 h-3.5" />
                                        <span>QuizMate Mobile App: iOS App Store Only</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-ink">
                                        Why raising an iPhone to your laptop screen fails on live exams
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                        QuizMate heavily promotes its <strong>&ldquo;Scan and Solve All Subjects&rdquo;</strong> mobile camera app, noting on its site that it is <em>&ldquo;available exclusively on the App Store&rdquo;</em> for iPhone users.
                                    </p>
                                    <div className="space-y-2.5 text-xs sm:text-sm text-ink-muted">
                                        <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                                            <strong>1. Instant Webcam &amp; Proctor Flag:</strong> Holding up a smartphone to snap a photo of a Calculus integral, Chemistry ring, or locked PDF on your laptop monitor immediately triggers eye-tracking and webcam alerts.
                                        </div>
                                        <div className="p-3.5 rounded-xl bg-rose-50/60 border border-rose-200 text-rose-950">
                                            <strong>2. Zero Android Support:</strong> Because the mobile app is iOS-exclusive, Android students paying the same $7.99/week or $19.99/month price don&apos;t even get mobile camera scanning.
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                                        <Zap className="w-3.5 h-3.5" />
                                        <span>ExamGhost: Native In-Browser Snap-It OCR</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-ink">
                                        Snip any graph, diagram, or locked LTI iframe in 0.3 seconds
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                        With ExamGhost, your hands never leave your keyboard and mouse. Press <code className="font-mono text-xs bg-sand px-1.5 py-0.5 rounded">Alt+S</code> to drag an invisible crosshair over any region of your browser viewport:
                                    </p>
                                    <div className="space-y-2.5 text-xs sm:text-sm text-ink-muted">
                                        <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                                            <strong>Works Inside Cross-Origin Sandboxed Iframes:</strong> Solves Canvas LTI 1.3 New Quizzes, McGraw Hill Connect, Pearson MyLab, and Cengage MindTap widgets where standard text selection is blocked.
                                        </div>
                                        <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-200 text-emerald-950">
                                            <strong>STEM Vision Pipeline:</strong> Reads organic chemistry structures, physics free-body diagrams, accounting tables, and matplotlib charts in ~300ms without touching a phone.
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* TAB 3 CONTENT: $7.99/WK TUITION VS FAIR PASSES */}
                            <div className="hidden peer-checked/price:grid md:grid-cols-2 gap-6 rounded-3xl bg-surface border border-sand-dark/30 p-6 sm:p-8 shadow-sm">
                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-800">
                                        <CreditCard className="w-3.5 h-3.5" />
                                        <span>QuizMate &ldquo;The Tuition&rdquo; Pricing</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-ink">
                                        $7.99/week equals $31.96/month ($127.84 per semester)
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                        QuizMate labels its pricing table <strong>&ldquo;The Tuition&rdquo;</strong> and highlights a <strong>$7.99/week</strong> card (discounted from $9.99/wk) alongside <strong>$19.99/month</strong> and <strong>$10.99/month billed yearly ($131.88/yr)</strong>.
                                    </p>
                                    <div className="space-y-2 text-xs">
                                        <div className="flex justify-between p-3 rounded-xl bg-sand/50 border border-sand-dark/25">
                                            <span className="font-semibold text-ink">Free Trial Solves on Pricing Table</span>
                                            <span className="font-mono font-bold text-rose-800">None Listed ($7.99/wk min)</span>
                                        </div>
                                        <div className="flex justify-between p-3 rounded-xl bg-sand/50 border border-sand-dark/25">
                                            <span className="font-semibold text-ink">4 Weeks on Weekly Plan</span>
                                            <span className="font-mono font-bold text-rose-800">$31.96 / 4 weeks</span>
                                        </div>
                                        <div className="flex justify-between p-3 rounded-xl bg-sand/50 border border-sand-dark/25">
                                            <span className="font-semibold text-ink">Yearly Plan (Billed Upfront)</span>
                                            <span className="font-mono font-bold text-ink">$131.88 / year</span>
                                        </div>
                                        <div className="flex justify-between p-3 rounded-xl bg-sand/50 border border-sand-dark/25">
                                            <span className="font-semibold text-ink">Bundled Extras You Pay For</span>
                                            <span className="font-mono text-ink-muted">ATS Resume Builder &amp; Essay Hub</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                                        <Sparkles className="w-3.5 h-3.5" />
                                        <span>ExamGhost Student-First Pricing</span>
                                    </div>
                                    <h3 className="text-xl font-bold font-display text-ink">
                                        Start with 50 Free Solves ($0), then save on every tier
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                        We don&apos;t trap students in weekly auto-renewals or inflate prices with resume builders. Test ExamGhost on your real LMS first for free:
                                    </p>
                                    <div className="space-y-2 text-xs">
                                        <div className="flex justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                                            <span className="font-semibold text-emerald-950">Starter Trial (No Credit Card)</span>
                                            <span className="font-mono font-bold text-emerald-800">50 Free Solves ($0)</span>
                                        </div>
                                        <div className="flex justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                                            <span className="font-semibold text-emerald-950">Monthly Pass (Cancel Anytime)</span>
                                            <span className="font-mono font-bold text-emerald-800">$19.00 / month</span>
                                        </div>
                                        <div className="flex justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                                            <span className="font-semibold text-emerald-950">Academic Year Pass (Saves $32.88/yr)</span>
                                            <span className="font-mono font-bold text-emerald-800">$99 / year ($8.25/mo)</span>
                                        </div>
                                        <div className="flex justify-between p-3 rounded-xl bg-emerald-50/70 border border-emerald-200">
                                            <span className="font-semibold text-emerald-950">Lifetime Degree Pass (Pay Once)</span>
                                            <span className="font-mono font-bold text-emerald-800">$199 One-Time</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* HONEST USE-CASE SPLIT: WHEN TO USE QUIZMATE VS EXAMGHOST */}
                <section className="py-16 max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="p-6 sm:p-7 rounded-2xl bg-surface border border-sand-dark/30 shadow-sm">
                            <h2 className="font-display font-bold text-lg sm:text-xl text-ink mb-3 flex items-center gap-2">
                                <BookOpen className="w-5 h-5 text-ink-muted" />
                                <span>When QuizMate Makes Sense</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted leading-relaxed mb-4">
                                QuizMate is built as a broad college productivity portal rather than a dedicated exam stealth extension. It fits best if:
                            </p>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-ink-muted leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                                    <span><strong>You want a Study Hub &amp; ATS Resume Builder:</strong> QuizMate&apos;s web dashboard includes lecture note summarization, flashcard creation, essay outlining, and resume templates.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                                    <span><strong>You scan physical paper worksheets on an iPhone:</strong> If you do printed homework handouts and own an iOS device, the QuizMate App Store camera scanner works well.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-800 shrink-0 mt-0.5" />
                                    <span><strong>Your assignments are unmonitored open-book homework:</strong> Where portal button injection and <code className="font-mono text-xs">window.blur</code> logs are not graded.</span>
                                </li>
                            </ul>
                        </div>

                        <div className="p-6 sm:p-7 rounded-2xl bg-emerald-950 text-white border border-emerald-800 shadow-sm">
                            <h2 className="font-display font-bold text-lg sm:text-xl text-emerald-300 mb-3 flex items-center gap-2">
                                <EyeOff className="w-5 h-5 text-emerald-300" />
                                <span>When Students Switch to ExamGhost</span>
                            </h2>
                            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-4">
                                ExamGhost is purpose-built for timed, monitored Canvas, Blackboard, Moodle, D2L, and McGraw Hill exams where stealth and speed decide your grade:
                            </p>
                            <ul className="space-y-2.5 text-xs sm:text-sm text-emerald-100 leading-relaxed">
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>Zero Host DOM Mutation:</strong> Never injects a visible &ldquo;QuizMate&rdquo; button into your school portal. Operates inside a closed <code className="font-mono text-xs text-emerald-300">ShadowRoot</code>.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>SpeedGrader Focus Shield + Desktop OCR:</strong> Blocks <code className="font-mono text-xs text-emerald-300">window.blur</code> and <code className="font-mono text-xs text-emerald-300">visibilitychange</code> telemetry while snipping diagrams right inside your browser.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                                    <span><strong>50 Free Solves + Fair Pricing:</strong> Verify accuracy on your actual course portal for $0 before choosing $19/mo, $99/yr, or $199 Lifetime.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* 11-POINT COMPARISON MATRIX + TECHNICAL MANIFEST DRAWER */}
                <section className="py-16 bg-surface border-y border-sand-dark/20">
                    <div className="max-w-6xl mx-auto px-4 sm:px-6">
                        <div className="text-center max-w-2xl mx-auto mb-12">
                            <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-3">
                                2026 Feature, Stealth &amp; Pricing Matrix
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Side-by-side comparison between ExamGhost and QuizMate (<code className="font-mono text-xs">quizmate.io</code>) across 11 exam-critical criteria.
                            </p>
                        </div>

                        <div className="overflow-x-auto rounded-2xl border border-sand-dark/30">
                            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[680px]">
                                <thead>
                                    <tr className="border-b border-sand-dark/30 bg-sand/40">
                                        <th className="py-3.5 px-4 font-bold text-ink">Capability / Pricing Metric</th>
                                        <th className="py-3.5 px-4 font-bold text-ink-muted">Why It Matters on Live Exams</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-800">ExamGhost</th>
                                        <th className="py-3.5 px-4 font-bold text-rose-800">QuizMate (quizmate.io)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-sand-dark/20">
                                    <tr className="bg-cream/40">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Free Trial / Starter Tier</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Test accuracy on your actual LMS before paying</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">50 Free Solves ($0, No CC)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">No free plan listed ($7.99/wk min)</td>
                                    </tr>
                                    <tr className="bg-surface">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Short-Term &amp; Monthly Price</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Cost for a single month of midterms or finals</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">$19.00 / month flat</td>
                                        <td className="py-3.5 px-4 text-ink-muted">$7.99/week ($31.96/mo) or $19.99/mo</td>
                                    </tr>
                                    <tr className="bg-cream/40">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Annual &amp; Lifetime Plans</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Multi-semester and full-degree cost</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">$99/yr ($8.25/mo) · $199 Lifetime</td>
                                        <td className="py-3.5 px-4 text-ink-muted">$131.88/yr ($10.99/mo) · No Lifetime</td>
                                    </tr>
                                    <tr className="bg-surface">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Closed Shadow DOM HUD</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Prevents host page DOM mutation detection</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                                            100% Isolated Closed Tree
                                        </td>
                                        <td className="py-3.5 px-4 text-rose-800">
                                            <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                                            Injects portal button into page
                                        </td>
                                    </tr>
                                    <tr className="bg-cream/40">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Focus Shield (Blur Masking)</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Blocks Canvas SpeedGrader &ldquo;Stopped viewing quiz&rdquo; logs</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                                            Intercepts blur &amp; visibilitychange
                                        </td>
                                        <td className="py-3.5 px-4 text-rose-800">
                                            <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                                            Unshielded tab &amp; popup focus
                                        </td>
                                    </tr>
                                    <tr className="bg-surface">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Visual &amp; Diagram OCR</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Solving non-selectable images, charts &amp; LTI iframes</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">In-Browser Snap-It Crosshair OCR</td>
                                        <td className="py-3.5 px-4 text-ink-muted">iOS Mobile App Camera (&ldquo;Scan &amp; Solve&rdquo;)</td>
                                    </tr>
                                    <tr className="bg-cream/40">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Emergency Panic Kill Switch</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">1ms RAM &amp; UI purge if an instructor walks by</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                                            ⌘+Shift+U / Esc Instant Purge
                                        </td>
                                        <td className="py-3.5 px-4 text-rose-800">
                                            <XCircle className="w-4 h-4 text-rose-800 inline mr-1" />
                                            No emergency RAM purge hotkey
                                        </td>
                                    </tr>
                                    <tr className="bg-surface">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Right-Click Lockout Bypass</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Bypasses disabled context menus &amp; copy blocks</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                                            Hotkeys + Snap-It Vision OCR
                                        </td>
                                        <td className="py-3.5 px-4 text-ink-muted">Depends on portal button compatibility</td>
                                    </tr>
                                    <tr className="bg-cream/40">
                                        <td className="py-3.5 px-4 font-semibold text-ink">General Study Hub &amp; Resume Builder</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Lecture note summarizer, essays, ATS resumes</td>
                                        <td className="py-3.5 px-4 text-ink-muted">Focused purely on live exam stealth</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-800 inline mr-1" />
                                            Included in QuizMate Study Hub
                                        </td>
                                    </tr>
                                    <tr className="bg-surface">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Solving Latency</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Speed during timed 60-minute midterms</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">0.3s Edge Vision Compute</td>
                                        <td className="py-3.5 px-4 text-ink-muted">2.5s – 3.8s Full Explanation Render</td>
                                    </tr>
                                    <tr className="bg-cream/40">
                                        <td className="py-3.5 px-4 font-semibold text-ink">Refund Guarantee</td>
                                        <td className="py-3.5 px-4 text-ink-muted text-xs">Risk-free protection if it doesn&apos;t fit your workflow</td>
                                        <td className="py-3.5 px-4 text-emerald-800 font-bold">14-Day 100% Money-Back Guarantee</td>
                                        <td className="py-3.5 px-4 text-ink-muted">Standard subscription cancellation</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store & App Store Manifest Drawer */}
                        <details className="mt-6 group rounded-2xl bg-sand/40 border border-sand-dark/30 p-4 sm:p-5 [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer text-xs sm:text-sm font-mono font-bold text-ink">
                                <span className="flex items-center gap-2 m-0 inline">
                                    <Terminal className="w-4 h-4 text-emerald-800" />
                                    <h3 className="font-bold m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (quizmate.io)</h3>
                                </span>
                                <ChevronDown className="w-4 h-4 text-ink-muted transition-transform group-open:rotate-180" />
                            </summary>
                            <div className="mt-4 pt-4 border-t border-sand-dark/20 grid sm:grid-cols-2 gap-4 text-xs font-mono text-ink-muted">
                                <div className="p-3 rounded-xl bg-surface border border-sand-dark/20">
                                    <div className="text-ink font-bold mb-1">QuizMate Verified Identifiers</div>
                                    <div>Primary Domain: <span className="text-ink">quizmate.io</span></div>
                                    <div>Chrome Extension ID: <span className="text-ink">ojgkoajchjoafbnckklmamjcceiglmkd</span></div>
                                    <div>iOS App Store ID: <span className="text-ink">id6476325355 (iOS Exclusive)</span></div>
                                    <div>Portal Anchor: <span className="text-rose-800">#instant-answers (Host DOM Button)</span></div>
                                </div>
                                <div className="p-3 rounded-xl bg-surface border border-sand-dark/20">
                                    <div className="text-ink font-bold mb-1">ExamGhost Isolation Architecture</div>
                                    <div>UI Isolation: <span className="text-emerald-800">attachShadow(&#123; mode: &apos;closed&apos; &#125;)</span></div>
                                    <div>Event Shield: <span className="text-emerald-800">window.blur / visibilitychange capture</span></div>
                                    <div>Screen OCR: <span className="text-emerald-800">In-browser Edge Vision Crosshair</span></div>
                                    <div>RAM Kill Switch: <span className="text-emerald-800">⌘+Shift+U (&lt;1ms teardown)</span></div>
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* LATENCY BENCHMARK */}
                <section className="py-14 bg-cream border-b border-sand-dark/20">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                        <h2 className="text-xl sm:text-2xl font-bold font-display text-ink mb-6">
                            Response Latency Benchmark (Canvas STEM Multiple Choice)
                        </h2>
                        <div className="space-y-4 text-left">
                            <div>
                                <div className="flex justify-between text-xs font-bold text-ink mb-1">
                                    <span>ExamGhost (0.3s Edge Vision Compute + Closed Shadow HUD)</span>
                                    <span className="text-emerald-800">0.3s</span>
                                </div>
                                <div className="w-full h-3 bg-sand-dark/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-emerald-700 rounded-full w-[10%]" />
                                </div>
                            </div>
                            <div>
                                <div className="flex justify-between text-xs font-bold text-ink mb-1">
                                    <span>QuizMate Tutor (Portal Button Click + Step-by-Step Explanation Render)</span>
                                    <span className="text-rose-800">3.4s</span>
                                </div>
                                <div className="w-full h-3 bg-sand-dark/20 rounded-full overflow-hidden">
                                    <div className="h-full bg-rose-600 rounded-full w-[78%]" />
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
                                    Claim your 50 free question solves, check live Canvas &amp; Blackboard stealth status, and get 24/7 engineering support.
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
                            QuizMate vs ExamGhost: Frequently Asked Questions
                        </h2>
                        <p className="text-xs sm:text-sm text-ink-muted">
                            Verified answers comparing <code className="font-mono text-xs">quizmate.io</code> and ExamGhost in 2026.
                        </p>
                    </div>

                    <div className="space-y-4">
                        <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden" open>
                            <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">What is included in a QuizMate (quizmate.io) subscription vs ExamGhost?</h3>
                                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                                QuizMate bundles three general study products under its &ldquo;Tuition&rdquo; subscription: the <strong>QuizMate Tutor Chrome extension</strong>, an <strong>iOS-only Mobile App</strong> for snapping photos of paper worksheets, and the <strong>QuizMate Study Hub</strong> (which includes lecture note summarization, an essay writer, flashcards, and an ATS-optimized resume builder). ExamGhost is a specialized browser exam stealth suite engineered specifically for live LMS assessments with a closed Shadow DOM HUD, Focus Shield blur suppression, Snap-It STEM Vision OCR, and an instant <code className="font-mono text-xs">⌘+Shift+U</code> RAM panic purge.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">How much does QuizMate actually cost compared to ExamGhost in 2026?</h3>
                                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                                On <code className="font-mono text-xs">quizmate.io</code>, &ldquo;The Tuition&rdquo; is priced at <strong>$7.99/week</strong> (which equals $31.96/month if left on weekly billing), <strong>$19.99/month</strong> on the Monthly Plan, or <strong>$10.99/month billed yearly ($131.88/year)</strong>, with no free trial solves listed on the pricing page. ExamGhost gives every student <strong>50 Free Question Solves ($0, no credit card required)</strong>, followed by <strong>$19/month</strong>, <strong>$99/year ($8.25/mo)</strong>, or a <strong>$199 one-time Lifetime Degree Pass</strong>.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Does the QuizMate Tutor Chrome extension protect against Canvas SpeedGrader tab and focus logs?</h3>
                                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                                No. QuizMate Tutor states that it <em>&ldquo;integrates directly into your school portal&rdquo;</em> so you can get answers <em>&ldquo;with the click of a button.&rdquo;</em> Injecting interactive buttons and step-by-step explanation panels directly into the host LMS page modifies the DOM tree and does not intercept <code className="font-mono text-xs">window.blur</code> or <code className="font-mono text-xs">visibilitychange</code> events if you switch to the QuizMate Study Hub tab. ExamGhost isolates its UI inside a closed <code className="font-mono text-xs">ShadowRoot</code> and intercepts focus/blur events at the window capture phase.
                            </p>
                        </details>

                        <details className="group rounded-2xl bg-surface border border-sand-dark/20 p-5 shadow-sm [&_summary::-webkit-details-marker]:hidden">
                            <summary className="flex items-center justify-between cursor-pointer font-display font-bold text-base text-ink">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Does QuizMate have an Android mobile app or desktop screen OCR?</h3>
                                <ChevronDown className="w-5 h-5 text-ink-muted transition-transform group-open:rotate-180" />
                            </summary>
                            <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed">
                                QuizMate explicitly states on its website that its mobile app is <em>&ldquo;available exclusively on the App Store&rdquo;</em> for iOS devices. For desktop exams containing complex diagrams, locked PDFs, or cross-origin iframes, ExamGhost builds a native Snap-It Vision OCR crosshair directly into the browser so you never have to hold up an iPhone to your laptop screen during a webcam-monitored test.
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
                                    <span>Skip the $7.99/Week Portal Button</span>
                                </div>
                                <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-2">
                                    Test ExamGhost&apos;s closed Shadow HUD with 50 free solves.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                    No injected portal buttons, no iPhone camera required, and zero <code className="font-mono text-xs">window.blur</code> logs in Canvas SpeedGrader.
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
                            <Link prefetch={false} href="/coursology-vs-examghost" className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm">
                                <span className="font-semibold block text-ink">Coursology vs ExamGhost</span>
                                <span className="text-ink-muted">Injected Answer Card vs Shadow HUD</span>
                            </Link>
                            <Link prefetch={false} href="/studyfox-vs-examghost" className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm">
                                <span className="font-semibold block text-ink">StudyFox vs ExamGhost</span>
                                <span className="text-ink-muted">Toolbar Popup Blur vs Focus Shield</span>
                            </Link>
                            <Link prefetch={false} href="/canvascrack-vs-examghost" className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm">
                                <span className="font-semibold block text-ink">CanvasCrack vs ExamGhost</span>
                                <span className="text-ink-muted">Tab Mask Only vs Full AI + Stealth</span>
                            </Link>
                            <Link prefetch={false} href="/questionai-vs-examghost" className="p-3.5 rounded-xl bg-surface border border-sand-dark/20 hover:border-ink/40 transition-colors shadow-sm">
                                <span className="font-semibold block text-ink">QuestionAI vs ExamGhost</span>
                                <span className="text-ink-muted">Public SEO Indexing vs Zero-Log HUD</span>
                            </Link>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}
