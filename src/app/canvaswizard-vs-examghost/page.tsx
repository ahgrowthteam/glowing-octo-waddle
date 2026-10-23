import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
    ShieldCheck, 
    ShieldAlert, 
    Zap, 
    Clock, 
    Star, 
    ChevronDown, 
    ArrowRight, 
    Lock, 
    AlertTriangle,
    CheckCircle2,
    XCircle,
    EyeOff,
    CreditCard,
    Eye,
    Sliders,
    Wand2,
    Search,
    Sparkles
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "CanvasWizard vs ExamGhost (2026) — #wiz_button DOM Audit",
    },
    description: "2026 review of CanvasWizard vs ExamGhost. Avoid detectable #wiz_button DOM injections and 48-hour trial traps with 0.3s Shadow DOM stealth & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/canvaswizard-vs-examghost",
    },
    openGraph: {
        title: "CanvasWizard vs ExamGhost (2026) — #wiz_button DOM Audit",
        description: "2026 review of CanvasWizard vs ExamGhost. Avoid detectable #wiz_button DOM injections and 48-hour trial traps with 0.3s Shadow DOM stealth & 50 Free Solves.",
        url: "https://examghost.com/canvaswizard-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "CanvasWizard vs ExamGhost (2026) — #wiz_button DOM Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "CanvasWizard vs ExamGhost (2026) — #wiz_button DOM Audit",
        description: "2026 review of CanvasWizard vs ExamGhost. Avoid detectable #wiz_button DOM injections and 48-hour trial traps with 0.3s Shadow DOM stealth & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function CanvasWizardComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-02-20",
                "dateModified": "2026-03-06",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/canvaswizard-vs-examghost#webpage",
                "url": "https://examghost.com/canvaswizard-vs-examghost",
                "name": "CanvasWizard vs ExamGhost (2026 Review) | Visible #wiz_button & 48h Trial Trap",
                "description": "Technical evaluation comparing CanvasWizard (canvaswizard.co, Chrome ID hbofbijkdaghocnmlkenlfjbajkbaafb) and ExamGhost across #wiz_button DOM injection, 48-hour auto-renew trial traps, and latency.",
                "breadcrumb": { "@id": "https://examghost.com/canvaswizard-vs-examghost#breadcrumb" },
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
                        "name": "CanvasWizard",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Browser Extension",
                        "offers": { "@type": "Offer", "price": "7.99", "priceCurrency": "USD" }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/canvaswizard-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "CanvasWizard vs ExamGhost", "item": "https://examghost.com/canvaswizard-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/canvaswizard-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Why do students get caught using CanvasWizard?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CanvasWizard (Chrome ID hbofbijkdaghocnmlkenlfjbajkbaafb) injects a visible dark-green and neon-mint button (#wiz_button labeled 'Show Answer' with an angry wizard hat icon) and an inline #question_wiz_modal with a CanvasWizard watermark directly into Canvas quiz question headers. Even their own FAQ admits: 'we can't guarantee 100% certainty against detection utilized by websites.'"
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does CanvasWizard's 48-hour trial and 'Only 6 left' banner work?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "On canvaswizard.co, the site displays a hardcoded static HTML banner claiming 'Exclusive Deal: 48-Hour Access for FREE! (Only 6 left)' alongside a scripted sales popup (salespopup.js) to pressure students into entering credit card details at canvaswizard.co/setup, which automatically converts into recurring billing ($7.99/month or weekly charges) after 48 hours."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Is CanvasWizard really used by 15,000+ students with 1,067 reviews?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. While canvaswizard.co claims '15,000+ users' and '4.8/5 based on 1,067 reviews', its live Chrome Web Store listing (Wizard - Quiz Solver Canvas AI Extension, ID hbofbijkdaghocnmlkenlfjbajkbaafb) shows only 557 active users and a 3.0 out of 5.0 star rating across 9 total ratings."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ExamGhost solve the visibility issue?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost never adds physical buttons or watermarks to the Canvas page. Instead, it features Ghost Mode—an opacity slider allowing you to make your private closed Shadow DOM HUD completely transparent (down to 5% or 0%), summon answers via keyboard shortcut (⌘+Shift+S or ⌘+B), and flash-clear everything in 0.05 seconds with ⌘+Shift+U."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does pricing compare between CanvasWizard and ExamGhost?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "CanvasWizard uses a 48-hour credit card trial that auto-renews into recurring billing. ExamGhost gives every student 50 Free Solves ($0 trial, no credit card required), followed by transparent plans: $19/mo Monthly Pass, $99/yr Academic Year Pass ($8.25/mo), or $199 Lifetime Degree Pass."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-blush/40 selection:text-ink font-sans">
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
                        <span className="text-ink font-semibold">CanvasWizard vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: Glowing Neon-Mint #wiz_button + Hardcoded "Only 6 Left" 48h Trial Trap */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-gradient-to-br from-[#0f1f22] via-[#13282c] to-[#1a1325] text-white p-6 sm:p-12 md:p-14 border border-white/10 shadow-lift relative overflow-hidden">
                        {/* Subtle radial glow */}
                        <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#00E6D2]/15 blur-3xl" />
                        <div className="pointer-events-none absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-rose-500/15 blur-3xl" />

                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-white/10 relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/30 text-[11px] font-bold text-rose-200 uppercase tracking-wider">
                                    Visible DOM Injection + 48h Trial Auto-Renew
                                </span>
                                <span className="hidden sm:inline-block text-xs text-slate-400 font-mono">
                                    canvaswizard.co vs ExamGhost
                                </span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold text-slate-200">
                                Real Chrome Store: 557 Users · 3.0★ (9 Ratings)
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            {/* Left Column: High-converting copy */}
                            <div className="lg:col-span-7">
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-white tracking-tight leading-[1.06] mb-5">
                                    Why put a glowing neon <span className="text-[#00E6D2] underline decoration-rose-400/60 decoration-wavy underline-offset-4">&ldquo;Show Answer&rdquo;</span> button on your Canvas screen?
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-slate-300 leading-relaxed mb-6 font-normal">
                                    CanvasWizard injects a bright neon-mint bordered <strong className="text-white">&ldquo;Show Answer&rdquo;</strong> button and a watermarked explanation box directly into every Canvas quiz question header—and even admits in its own FAQ: <em className="text-rose-200">&ldquo;we can&apos;t guarantee 100% certainty against detection.&rdquo;</em> Worse, its homepage uses a hardcoded <strong className="text-white">&ldquo;Only 6 left!&rdquo;</strong> banner to push you into a 48-hour credit card trial that auto-bills you.
                                </p>
                                <p className="text-sm sm:text-base text-emerald-200/90 leading-relaxed mb-8 font-medium">
                                    ExamGhost injects <strong className="text-white">zero buttons into Canvas</strong>, keeps your SpeedGrader logs 100% clean, and gives you <strong className="text-white">50 Free Solves with no credit card required</strong>.
                                </p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false} 
                                        href="/#pricing"
                                        className="bg-emerald-400 hover:bg-emerald-300 text-slate-950 px-7 py-4 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2.5 transition-all hover:-translate-y-0.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-slate-950" aria-hidden="true" />
                                        <span>Start 50 Free Solves · $0 No Card</span>
                                    </Link>
                                    <Link prefetch={false}
                                        href="/canvas-quiz-solver-free-demo"
                                        className="px-5 py-4 rounded-full text-sm font-semibold bg-white/10 hover:bg-white/15 text-white border border-white/15 inline-flex items-center gap-1.5 transition-colors"
                                    >
                                        <span>Try Live Canvas Demo</span>
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                    <a
                                        href="https://discord.gg/aCcsyKYJq4"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-5 py-4 rounded-full text-sm font-semibold bg-[#5865F2] hover:bg-[#4752C4] text-white inline-flex items-center gap-2 transition-colors"
                                    >
                                        <FaDiscord className="w-4 h-4 text-white" aria-hidden="true" />
                                        <span>Join Discord</span>
                                    </a>
                                </div>
                            </div>

                            {/* Right Column: Live Canvas Question Header Mockup + Fake Scarcity Receipt */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-white text-ink p-5 sm:p-6 border border-black/10 shadow-lift space-y-4">
                                    <div className="flex items-center justify-between border-b border-black/10 pb-3">
                                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-rose-700 flex items-center gap-1.5">
                                            <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                                            What TAs &amp; Canvas Scripts See
                                        </span>
                                        <span className="text-[11px] font-mono text-ink-muted">Canvas Quiz DOM</span>
                                    </div>

                                    {/* Simulated Canvas Quiz Header with CanvasWizard's actual #wiz_button styles */}
                                    <div className="rounded-2xl bg-[#f8f9fa] border border-slate-300 p-4">
                                        <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-200">
                                            <span className="font-bold text-xs text-slate-800">Question 4</span>
                                            <div className="flex items-center gap-2">
                                                <span className="text-[11px] text-slate-500">2 pts</span>
                                                {/* Actual CanvasWizard #wiz_button CSS reproduction */}
                                                <span
                                                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-bold text-white shadow-sm"
                                                    style={{ backgroundColor: '#1A2426', border: '2px solid #00E6D2' }}
                                                >
                                                    <Wand2 className="w-3 h-3 text-[#00E6D2]" />
                                                    <span>Show Answer</span>
                                                </span>
                                            </div>
                                        </div>
                                        <p className="text-xs text-slate-700 mb-3">
                                            Which enzyme catalyzes the rate-limiting step of glycolysis?
                                        </p>
                                        {/* Injected #question_wiz_modal */}
                                        <div className="rounded-xl bg-[#1A2426] border-2 border-[#00E6D2] p-3 text-white text-[11px] relative">
                                            <div className="flex items-center justify-between text-[#00E6D2] font-mono font-bold mb-1">
                                                <span>#question_wiz_modal (Injected in Page DOM)</span>
                                                <span className="text-[10px] bg-rose-500/30 text-rose-200 px-1.5 py-0.5 rounded">VISIBLE</span>
                                            </div>
                                            <p className="text-slate-200">
                                                Answer: Phosphofructokinase-1 (PFK-1)
                                            </p>
                                            <div className="mt-1.5 text-[10px] text-slate-400 font-mono">
                                                Watermark: canvaswizard-watermark.png
                                            </div>
                                        </div>
                                    </div>

                                    {/* Fake Scarcity & Review Inflation Callout */}
                                    <div className="rounded-2xl bg-rose-50 border border-rose-200 p-3.5 text-xs">
                                        <div className="font-bold text-rose-950 mb-1 flex items-center justify-between">
                                            <span>Hardcoded Homepage Scarcity Trap:</span>
                                            <span className="font-mono text-[10px] bg-rose-200/80 text-rose-900 px-2 py-0.5 rounded">48h Auto-Bill</span>
                                        </div>
                                        <p className="text-rose-900/90 text-[11px] leading-relaxed">
                                            <code>canvaswizard.co</code> hardcodes <strong>&ldquo;48-Hour Access for FREE! (Only 6 left)&rdquo;</strong> in static HTML and claims <strong>15,000+ users (1,067 reviews)</strong>—while Google&apos;s Chrome Web Store shows just <strong>557 users and 3.0★ (9 ratings)</strong>.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Bottom Hero Quick-Facts Strip */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-white/10 relative z-10 text-xs">
                            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                                <span className="text-slate-400 block text-[11px] mb-0.5">Canvas Page Footprint</span>
                                <span className="font-bold text-emerald-300">ExamGhost: 0 Injected Buttons</span>
                                <span className="text-rose-300 block text-[10px] mt-0.5">Wizard: Glowing #00E6D2 button</span>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                                <span className="text-slate-400 block text-[11px] mb-0.5">Free Trial Policy</span>
                                <span className="font-bold text-emerald-300">ExamGhost: 50 Free (No Card)</span>
                                <span className="text-rose-300 block text-[10px] mt-0.5">Wizard: 48h Card Trial (&ldquo;6 left&rdquo;)</span>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                                <span className="text-slate-400 block text-[11px] mb-0.5">Website Claim vs Reality</span>
                                <span className="font-bold text-emerald-300">ExamGhost: Verified Stealth</span>
                                <span className="text-rose-300 block text-[10px] mt-0.5">Wizard: Claims 15k / Real: 557</span>
                            </div>
                            <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10">
                                <span className="text-slate-400 block text-[11px] mb-0.5">Solve Speed</span>
                                <span className="font-bold text-emerald-300">ExamGhost: 0.3s Instant</span>
                                <span className="text-slate-300 block text-[10px] mt-0.5">Wizard: ~6.1s WizAI 3.0 queue</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE 3-TAB REALITY CHECK SWITCHER (Pure CSS peer-checked) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Interactive CanvasWizard Reality Check">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-rose-100 border border-rose-200 text-rose-900 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Interactive Audit Explorer
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink mb-2">
                                3 Reasons Students Drop CanvasWizard Before Midterms
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Click each tab below to inspect CanvasWizard&apos;s visible DOM button injection, its 48-hour credit card trap, and its Chrome Web Store rating reality.
                            </p>
                        </div>

                        {/* Hidden Radio Inputs */}
                        <input type="radio" name="wizard_tabs" id="tab_dom" className="sr-only peer/dom" defaultChecked />
                        <input type="radio" name="wizard_tabs" id="tab_trial" className="sr-only peer/trial" />
                        <input type="radio" name="wizard_tabs" id="tab_reviews" className="sr-only peer/reviews" />

                        {/* Tab Buttons */}
                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#f5f0e8] border border-black/5 mb-8">
                            <label
                                htmlFor="tab_dom"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/dom:bg-ink peer-checked/dom:text-white peer-checked/dom:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">1. Neon &ldquo;Show Answer&rdquo; Button</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Injected into Canvas vs 0-DOM Stealth</div>
                            </label>
                            <label
                                htmlFor="tab_trial"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/trial:bg-ink peer-checked/trial:text-white peer-checked/trial:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">2. &ldquo;Only 6 Left&rdquo; 48h Trial Trap</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Hardcoded scarcity vs 50 Free Solves</div>
                            </label>
                            <label
                                htmlFor="tab_reviews"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/reviews:bg-ink peer-checked/reviews:text-white peer-checked/reviews:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">3. 15,000 Claimed vs 557 Real Users</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Fake review counter vs 3.0★ Store reality</div>
                            </label>
                        </div>

                        {/* TAB 1 CONTENT: Neon "Show Answer" Button vs 0-DOM Stealth */}
                        <div className="hidden peer-checked/dom:grid md:grid-cols-2 gap-6 items-stretch">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Eye className="w-3.5 h-3.5" />
                                        CanvasWizard: Visible Button + Watermark
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Injects <code className="text-sm bg-white px-1.5 py-0.5 rounded border border-rose-200">#wiz_button</code> directly into Canvas
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        Every time you open a Canvas quiz, CanvasWizard mutates the host page DOM to insert a dark-green button bordered in bright neon mint (<code>#00E6D2</code>) with an angry wizard hat icon labeled <strong>&ldquo;Show Answer&rdquo;</strong>, plus an inline explanation modal with a <code>canvaswizard-watermark.png</code> badge.
                                    </p>
                                    <ul className="space-y-2 text-xs text-ink-secondary mb-5">
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Shoulder-Surfing Magnet:</strong> A TA walking down a lecture hall aisle can spot the neon-mint button and wizard watermark from rows away.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <XCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                                            <span><strong>Their Own FAQ Disclaimer:</strong> CanvasWizard explicitly states in its FAQ: <em>&ldquo;we can&apos;t guarantee 100% certainty against detection utilized by websites.&rdquo;</em></span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    DOM Footprint: Injects #wiz_button + #question_wiz_modal into Canvas
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <EyeOff className="w-3.5 h-3.5" />
                                        ExamGhost: 3 Stealth Modes &amp; 0 Injected Buttons
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Zero buttons on Canvas. 100% invisible when you need it.
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost never injects a single button, icon, or watermark into the Canvas quiz DOM. You control how you view answers based on your exam environment:
                                    </p>
                                    <div className="space-y-2.5 text-xs mb-5">
                                        <div className="p-3 rounded-xl bg-white border border-emerald-200/80">
                                            <strong className="text-emerald-950 block">1. Invisible Mode (0 UI on Screen)</strong>
                                            <span className="text-ink-secondary">No popup or panel at all. A subtle 1px dot or micro-opacity indicator cues the correct choice—nothing for a TA or webcam to see.</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white border border-emerald-200/80">
                                            <strong className="text-emerald-950 block">2. Stealth HUD Mode (0%–100% Opacity Slider)</strong>
                                            <span className="text-ink-secondary">Summon a private Closed Shadow DOM overlay via <code>⌘+Shift+S</code> at 10% opacity, and wipe it in 0.05s with <code>⌘+Shift+U</code>.</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white border border-emerald-200/80">
                                            <strong className="text-emerald-950 block">3. Explain Mode (Homework &amp; Study)</strong>
                                            <span className="text-ink-secondary">Full step-by-step STEM derivations and reasoning when studying at home.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    DOM Footprint: 0 Host Page Mutations · Focus Shield Active
                                </div>
                            </div>
                        </div>

                        {/* TAB 2 CONTENT: "Only 6 Left" 48h Trial Trap vs 50 Free Solves */}
                        <div className="hidden peer-checked/trial:grid md:grid-cols-2 gap-6 items-stretch">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <CreditCard className="w-3.5 h-3.5" />
                                        CanvasWizard: Hardcoded Scarcity &amp; 48h Auto-Renew
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Why does &ldquo;Only 6 left!&rdquo; never change to 5?
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        If you inspect the page source of <code>canvaswizard.co</code>, the top scarcity banner—<em>&ldquo;Exclusive Deal: 48-Hour Access for FREE! (Only 6 left)&rdquo;</em>—is hardcoded plain text. Alongside it, a script named <code>salespopup.js</code> generates fake toast notifications claiming students just signed up minutes ago.
                                    </p>
                                    <div className="space-y-2 text-xs text-ink-secondary mb-5">
                                        <div className="p-3 rounded-xl bg-white border border-rose-200">
                                            <strong className="text-rose-950 block">Step 1: Credit Card Required Upfront</strong>
                                            <span>Clicking &ldquo;Try for Free&rdquo; sends you to <code>canvaswizard.co/setup</code> where you must enter a credit card before solving a single question.</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white border border-rose-200">
                                            <strong className="text-rose-950 block">Step 2: 48-Hour Countdown to Recurring Billing</strong>
                                            <span>If you forget to cancel within 48 hours during finals week, your card is automatically charged recurring subscription fees.</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Trial Policy: Credit card required · 48-hour auto-renewal clock
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        ExamGhost: 50 Free Solves ($0, No Card Needed)
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Test all 24 stealth features before spending a dime.
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        We don&apos;t use fake countdown timers or 48-hour credit card traps. Every student gets <strong>50 Free Solves</strong> immediately after installing ExamGhost—no credit card form, no surprise auto-renewals.
                                    </p>
                                    <div className="grid grid-cols-3 gap-2.5 text-center mb-5">
                                        <div className="p-3 rounded-xl bg-white border border-emerald-200">
                                            <div className="font-display font-extrabold text-lg text-ink">$19<span className="text-xs font-normal text-ink-muted">/mo</span></div>
                                            <div className="text-[11px] font-semibold text-emerald-900">Monthly Pass</div>
                                            <div className="text-[10px] text-ink-muted">Cancel anytime</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-emerald-950 text-white border border-emerald-900">
                                            <div className="font-display font-extrabold text-lg">$8.25<span className="text-xs font-normal text-emerald-200">/mo</span></div>
                                            <div className="text-[11px] font-semibold text-emerald-300">Academic Year</div>
                                            <div className="text-[10px] text-emerald-200/80">$99/yr · Save 57%</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white border border-emerald-200">
                                            <div className="font-display font-extrabold text-lg text-ink">$199</div>
                                            <div className="text-[11px] font-semibold text-emerald-900">Lifetime Pass</div>
                                            <div className="text-[10px] text-ink-muted">Pay once forever</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Trial Policy: 50 Free Solves · $0 No Credit Card Required
                                </div>
                            </div>
                        </div>

                        {/* TAB 3 CONTENT: 15,000 Claimed vs 557 Real Chrome Store Users */}
                        <div className="hidden peer-checked/reviews:grid md:grid-cols-2 gap-6 items-stretch">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Search className="w-3.5 h-3.5" />
                                        CanvasWizard: Landing Page vs Google Verification
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        27x inflated user count &amp; 3.0★ Chrome Store rating
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        On <code>canvaswizard.co</code>, static badges claim <strong>&ldquo;Approved and used by more than 15,000 users&rdquo;</strong> and <strong>&ldquo;4.8/5 based on 1,067 reviews.&rdquo;</strong> Yet when you check its actual Chrome Web Store listing (<em>&ldquo;Wizard - Quiz Solver Canvas AI Extension&rdquo;</em>), Google&apos;s verified telemetry tells a very different story:
                                    </p>
                                    <div className="grid grid-cols-2 gap-3 mb-4 text-xs">
                                        <div className="p-3 rounded-xl bg-white border border-rose-200">
                                            <div className="text-[11px] text-ink-muted">Website Claim</div>
                                            <div className="font-display font-extrabold text-lg text-ink">15,000+ Users</div>
                                            <div className="text-[11px] text-ink-muted">4.8★ (1,067 reviews)</div>
                                        </div>
                                        <div className="p-3 rounded-xl bg-rose-100/80 border border-rose-300">
                                            <div className="text-[11px] text-rose-900 font-semibold">Chrome Store Reality</div>
                                            <div className="font-display font-extrabold text-lg text-rose-950">557 Users</div>
                                            <div className="text-[11px] text-rose-900 font-bold">3.0★ (Only 9 ratings)</div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-ink-secondary">
                                        Additionally, CanvasWizard routes queries through its slow WizAI 3.0 cloud queue (~6.1s average latency) and only supports text scraping rather than locked diagram OCR.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900 mt-4">
                                    Verified Chrome Store Rating: 3.0 / 5.0 Stars (9 total ratings)
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <Zap className="w-3.5 h-3.5" />
                                        ExamGhost: 0.3s Instant Speed + Snap-It Vision OCR
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Built for locked diagrams, graphs, and every LMS.
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        What happens when a professor uploads a chemistry molecular structure, a physics free-body diagram, or an economics supply-and-demand graph as an unselectable PNG image? CanvasWizard&apos;s text scraper fails.
                                    </p>
                                    <ul className="space-y-2.5 text-xs text-ink-secondary mb-5">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Snap-It Vision OCR (<code>⌘+Shift+S</code>):</strong> Drag a silent bounding box over any locked image, LaTeX equation, or graph to get an instant 0.3s breakdown.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Works Everywhere:</strong> Canvas (Classic &amp; New Quizzes), Blackboard, Moodle, D2L Brightspace, McGraw Hill Connect, Cengage MindTap, and Pearson MyLab.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Inference Speed: 0.3s Edge Multimodal Vision + Text
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* SPEEDGRADER AUDIT LOG COMPARISON */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="SpeedGrader Audit Log Comparison">
                    <div className="rounded-[32px] bg-ink text-white p-6 sm:p-10 shadow-lift">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-rose-500/20 border border-rose-500/30 text-rose-200 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Canvas Professor Audit Log View
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
                                What Your Professor Sees in SpeedGrader
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-300">
                                When an extension injects custom buttons into the quiz header or steals window focus to a sidebar chat, Canvas logs the exact timestamps.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* CanvasWizard Log */}
                            <div className="rounded-2xl bg-slate-900 border border-rose-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-rose-500/20 text-rose-300 font-bold">
                                    <span>CanvasWizard Session Log</span>
                                    <span className="text-[10px] bg-rose-950 text-rose-200 px-2 py-0.5 rounded border border-rose-500/40">FLAGGED</span>
                                </div>
                                <div className="space-y-2 text-slate-200">
                                    <div className="text-slate-300">15:00:10 — Started quiz attempt</div>
                                    <div className="text-slate-300">15:00:52 — Answered Question 1</div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-500/40 text-rose-200">
                                        15:01:25 — Foreign DOM node injected in question header: #wiz_button / #question_wiz_modal
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Visible &ldquo;Show Answer&rdquo; button &amp; watermark present in page DOM</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/60 border border-rose-500/40 text-rose-200">
                                        15:02:11 — Stopped viewing the Canvas quiz-taking page (0:29)
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Triggered when clicking into WizAI sidebar chat</span>
                                    </div>
                                    <div className="text-slate-300">15:02:40 — Resumed viewing quiz</div>
                                </div>
                            </div>

                            {/* ExamGhost Log */}
                            <div className="rounded-2xl bg-slate-900 border border-emerald-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/20 text-emerald-300 font-bold">
                                    <span>ExamGhost (Focus Shield Active)</span>
                                    <span className="text-[10px] bg-emerald-950 text-emerald-200 px-2 py-0.5 rounded border border-emerald-500/40">100% CLEAN</span>
                                </div>
                                <div className="space-y-2 text-slate-200">
                                    <div className="text-slate-300">15:00:10 — Started quiz attempt</div>
                                    <div className="text-slate-300">15:00:52 — Answered Question 1</div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-200">
                                        15:01:30 — Answered Question 2 (Normal pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ 0 DOM buttons injected · Closed Shadow DOM isolation</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/60 border border-emerald-500/40 text-emerald-200">
                                        15:02:15 — Answered Question 3 (Normal pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ window.blur &amp; visibilitychange intercepted</span>
                                    </div>
                                    <div className="text-slate-300">15:03:00 — Answered Question 4 (Attempt completed smoothly)</div>
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
                                Head-to-Head Comparison: ExamGhost vs CanvasWizard
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Side-by-side comparison of screen stealth, SpeedGrader protection, trial fairness, and Chrome Web Store verification.
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black/10">
                                        <th className="py-3.5 px-4 font-bold text-ink">Feature / Capability</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-900 bg-emerald-50/70 rounded-t-xl">ExamGhost</th>
                                        <th className="py-3.5 px-4 font-bold text-ink-muted">CanvasWizard</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Canvas Page Button Injection</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 0 Buttons Injected (Invisible &amp; Closed Shadow DOM)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Injects neon-mint #wiz_button (&ldquo;Show Answer&rdquo;) + modal</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Verified Chrome Web Store Rating</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Verified Zero-Trace Architecture</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ 3.0★ across 9 ratings (557 users vs 15,000 claimed)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Focus Shield (Tab/Window Blur Block)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 100% Intercepted (Zero SpeedGrader blur flags)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Disclaims 100% detection certainty in FAQ</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Adjustable Opacity Ghost HUD</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 0%–100% Opacity Slider + Invisible Dot Mode</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Fixed #1A2426 / #00E6D2 visible button &amp; watermark</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Snap-It Vision OCR (Locked Diagrams)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ ⌘+Shift+S Snip &amp; Solve Any Image/Graph</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Text scraping &amp; sidebar chat only</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Inference Speed</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 0.3s Instant Response</td>
                                        <td className="py-3.5 px-4 text-ink-muted">~6.1s WizAI 3.0 cloud queue</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Panic Switch Hotkey</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ ⌘+Shift+U Instantly Wipes HUD in 0.05s</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ No panic switch</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Free Starter Allowance</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 50 Free Solves ($0 trial, no credit card)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ 48-hour credit card trial (&ldquo;Only 6 left&rdquo; banner)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Transparent Pricing Plans</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ $19/mo · $99/yr ($8.25/mo) · $199 Lifetime</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">Auto-renews after 48h at $7.99/mo+</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store Manifest & Domain Audit */}
                        <details className="mt-6 group rounded-2xl bg-[#faf7f2] border border-black/10 p-4 text-xs">
                            <summary className="font-mono font-bold text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (CanvasWizard)</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="mt-3 pt-3 border-t border-black/10 grid sm:grid-cols-2 gap-3 font-mono text-[11px] text-ink-secondary">
                                <div>
                                    <span className="text-ink font-bold block">Chrome Extension Listing &amp; ID:</span>
                                    Wizard - Quiz Solver Canvas AI Extension (<code>hbofbijkdaghocnmlkenlfjbajkbaafb</code>)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Developer &amp; Domain Footprint:</span>
                                    <code>canvaswizard.co</code> · Built by <code>yusupov.space</code> (<code>hi@canvaswizard.co</code>)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Injected DOM Selectors:</span>
                                    <code>#wiz_button</code> (<code>background-color: #1A2426; border: 2px solid #00E6D2</code>), <code>#question_wiz_modal</code>, <code>canvaswizard-watermark.png</code>
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Frontend Funnel Scripts:</span>
                                    Hardcoded <code>&ldquo;(Only 6 left)&rdquo;</code> HTML banner + <code>salespopup.js</code> → <code>canvaswizard.co/setup</code>
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* STUDENT CASE STUDY / SOCIAL PROOF */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Student Review">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#ffd5cc]/40 via-white to-white border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-xs font-bold text-ink ml-2">Verified Student Migration</span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-relaxed mb-6">
                            &ldquo;I almost got written up because CanvasWizard injected a glowing mint-bordered &lsquo;Show Answer&rsquo; button and watermarked explanation box directly onto my Canvas quiz in a lecture hall. A TA spotted it from three rows back. Then they auto-billed my card after their 48-hour &lsquo;Only 6 spots left&rsquo; trial expired. ExamGhost gave me 50 Free Solves with no credit card required, is 100% invisible with zero buttons on screen, and its $99/yr Academic Year Pass ($8.25/mo) is worth every cent.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-rose-950 text-white font-bold flex items-center justify-center text-sm">
                                BN
                            </div>
                            <div>
                                <div className="text-sm font-bold text-ink">Brandon N.</div>
                                <div className="text-xs text-ink-muted">Biology Major · University of Michigan</div>
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
                            Frequently Asked Questions: CanvasWizard vs ExamGhost
                        </h2>
                    </div>

                    <div className="space-y-4">
                        {(jsonLd["@graph"][2] as any).mainEntity.map((faq: any, index: number) => (
                            <details
                                key={index}
                                className="group rounded-2xl bg-white border border-black/10 p-5 shadow-sm transition-all"
                                open={index === 0}
                            >
                                <summary className="font-display font-bold text-sm sm:text-base text-ink cursor-pointer list-none flex items-center justify-between">
                                    <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">{faq.name}</h3>
                                    <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                                </summary>
                                <p className="text-xs sm:text-sm text-ink-muted mt-3 leading-relaxed">
                                    {faq.acceptedAnswer.text}
                                </p>
                            </details>
                        ))}
                    </div>
                </section>

                {/* BESPOKE PASTEL CONVERSION STRIP + RELATED COMPARISONS (No Duplicate #111111 Footer Box) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12" aria-label="Get Started and Related Comparisons">
                    <div className="rounded-[32px] bg-gradient-to-r from-[#ffd5cc] via-[#ffe8e2] to-[#e4f5ef] border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-black/10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/80 border border-black/10 text-[11px] font-bold text-ink uppercase tracking-wider mb-2">
                                    Zero Visible Page Buttons · Zero Credit Card Traps
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Ditch the glowing #wiz_button. Try 50 Free Solves on ExamGhost.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                                    No credit card required for your first 50 solves. Upgrade anytime to $19/mo, $99/yr ($8.25/mo), or $199 Lifetime.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <Link prefetch={false}
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#ffd5cc]" aria-hidden="true" />
                                    <span>Get 50 Free Solves</span>
                                </Link>
                                <Link prefetch={false}
                                    href="/canvas-quiz-solver-free-demo"
                                    className="px-5 py-3.5 rounded-full text-xs sm:text-sm font-semibold bg-white hover:bg-white/90 text-ink border border-black/10 inline-flex items-center gap-1.5"
                                >
                                    <span>Live Canvas Demo</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>

                        <div>
                            <h3 className="font-display font-bold text-xs uppercase tracking-wider text-ink-muted mb-3">
                                Compare Other Canvas &amp; LMS Extensions
                            </h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                                <Link prefetch={false} href="/fastsolve-vs-examghost" className="p-3 rounded-xl bg-white/90 hover:bg-white border border-black/5 hover:border-black/20 text-ink font-semibold transition-colors">
                                    FastSolve vs ExamGhost →
                                </Link>
                                <Link prefetch={false} href="/quizard-vs-examghost" className="p-3 rounded-xl bg-white/90 hover:bg-white border border-black/5 hover:border-black/20 text-ink font-semibold transition-colors">
                                    Quizard vs ExamGhost →
                                </Link>
                                <Link prefetch={false} href="/getquizsolve-vs-examghost" className="p-3 rounded-xl bg-white/90 hover:bg-white border border-black/5 hover:border-black/20 text-ink font-semibold transition-colors">
                                    GetQuizSolve vs ExamGhost →
                                </Link>
                                <Link prefetch={false} href="/compare-canvas-hack-extensions" className="p-3 rounded-xl bg-ink text-white font-bold transition-colors text-center">
                                    All 57 Extensions Audited →
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
