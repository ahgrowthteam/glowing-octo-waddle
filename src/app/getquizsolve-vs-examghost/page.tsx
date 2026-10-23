import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
    ShieldCheck, 
    ShieldAlert, 
    Zap, 
    Clock, 
    DollarSign, 
    Star, 
    ChevronDown, 
    ArrowRight, 
    AlertTriangle,
    CheckCircle2,
    XCircle,
    EyeOff,
    MousePointerClick,
    Fingerprint,
    Camera
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: {
        absolute: "GetQuizSolve vs ExamGhost (2026) — 5/Day Cap & DOM Audit",
    },
    description: "2026 review of GetQuizSolve vs ExamGhost. Avoid untrusted auto-fill events and 5-question daily caps with ExamGhost's 0.3s Shadow DOM HUD & 50 Free Solves.",
    alternates: {
        canonical: "https://examghost.com/getquizsolve-vs-examghost",
    },
    openGraph: {
        title: "GetQuizSolve vs ExamGhost (2026) — 5/Day Cap & DOM Audit",
        description: "2026 review of GetQuizSolve vs ExamGhost. Avoid untrusted auto-fill events and 5-question daily caps with ExamGhost's 0.3s Shadow DOM HUD & 50 Free Solves.",
        url: "https://examghost.com/getquizsolve-vs-examghost",
        siteName: "ExamGhost",
        type: "website",
        locale: "en_US",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "GetQuizSolve vs ExamGhost (2026) — 5/Day Cap & DOM Audit",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "GetQuizSolve vs ExamGhost (2026) — 5/Day Cap & DOM Audit",
        description: "2026 review of GetQuizSolve vs ExamGhost. Avoid untrusted auto-fill events and 5-question daily caps with ExamGhost's 0.3s Shadow DOM HUD & 50 Free Solves.",
        images: ["/og-image.jpg"],
    },
};

export default function GetQuizSolveComparisonPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "datePublished": "2026-01-23",
                "dateModified": "2026-03-16",
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary", "summary h3"]
                },
                "@id": "https://examghost.com/getquizsolve-vs-examghost#webpage",
                "url": "https://examghost.com/getquizsolve-vs-examghost",
                "name": "GetQuizSolve (AI Quiz Solve) vs ExamGhost (2026 Review) | The isTrusted Autofill Danger",
                "description": "Technical evaluation comparing GetQuizSolve (AI Quiz Solve v1.2.2, cjdhcfbjcepcmlacbaejclglodjghefa) and ExamGhost across DOM injection stealth, event telemetry verification, and pricing.",
                "breadcrumb": { "@id": "https://examghost.com/getquizsolve-vs-examghost#breadcrumb" },
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
                        "name": "AI Quiz Solve (GetQuizSolve)",
                        "applicationCategory": "EducationalApplication",
                        "operatingSystem": "Browser Extension",
                        "offers": {
                            "@type": "AggregateOffer",
                            "lowPrice": "0.00",
                            "highPrice": "12.99",
                            "priceCurrency": "USD",
                            "offerCount": "4"
                        }
                    }
                ]
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/getquizsolve-vs-examghost#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Compare Extensions", "item": "https://examghost.com/compare-canvas-hack-extensions" },
                    { "@type": "ListItem", "position": 3, "name": "GetQuizSolve vs ExamGhost", "item": "https://examghost.com/getquizsolve-vs-examghost" }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://examghost.com/getquizsolve-vs-examghost#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Why does GetQuizSolve's default Auto-fill mode trigger flags in Canvas?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "AI Quiz Solve (GetQuizSolve v1.2.2, Chrome ID: cjdhcfbjcepcmlacbaejclglodjghefa) defaults to 'Auto-fill' answer selection with 'Stealth' cursor mode. When it programmatically selects Canvas multiple choice inputs via JavaScript, the browser sets event.isTrusted = false. Canvas SpeedGrader telemetry records these synthetic JavaScript event dispatches, and even GetQuizSolve's own documentation admits that 'Auto-fill can't always select the option' on protected sites."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does ExamGhost handle answer selection safely?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "ExamGhost displays verified solutions in an isolated Closed Shadow DOM HUD with adjustable 0-100% opacity, allowing students to click genuine answers with 100% authentic hardware events (event.isTrusted: true). In auto mode, ExamGhost uses human-jitter Bezier curves that satisfy browser security policies."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "How does GetQuizSolve's free tier and Pro pricing work in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "GetQuizSolve restricts free accounts to just 5 questions per day (resetting at midnight), 2 screenshot solves ('Snap It') per day, and 5 AI tutor chats per day. If a student is taking a 25-question midterm, they are cut off at Question 6 by a paywall demanding $4.99/week ($259.48/yr), $12.99/month ($155.88/yr), or $8.33/mo billed yearly ($99.96/yr)—and even Pro accounts are rate-limited to 30 requests/minute, 200 requests/hour, and 100 AI tutor chats/day. ExamGhost includes 50 Free Solves upfront with zero daily throttles, followed by $19/mo, $99/yr ($8.25/mo), or $199 Lifetime."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Does GetQuizSolve intercept window blur tab switches?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "No. GetQuizSolve has no Focus Shield. When clicking its toolbar popup to switch between its three display modes (Invisible, Stealth, Explain) or three answer methods (Auto-fill, Highlight, Clipboard), Canvas immediately logs 'Stopped viewing the Canvas quiz' timestamps. ExamGhost intercepts window.blur and document.visibilitychange events completely."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Can ExamGhost solve questions locked in images without a 2/day limit?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Unlike GetQuizSolve, which caps free 'Snap It' screenshot solves at just 2 per day, ExamGhost includes full Snap-It Vision OCR (⌘+Shift+S) across all 50 Free Solves, capturing protected images, canvas diagrams, or PDF charts in memory and generating verified answers in 0.3s."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-lilac/40 selection:text-ink font-sans">
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
                        <span className="text-ink font-semibold">GetQuizSolve vs ExamGhost</span>
                    </nav>
                </div>

                {/* BESPOKE HERO: The isTrusted:false Auto-Fill Trap + 5 Qs / 2 Snaps Daily Wall */}
                <header className="max-w-6xl mx-auto px-4 sm:px-6 pb-14 sm:pb-20">
                    <div className="rounded-[36px] sm:rounded-[44px] bg-[#e2d3fa] p-6 sm:p-12 md:p-14 border border-black/10 shadow-card relative overflow-hidden">
                        <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-4 border-b border-black/10 relative z-10">
                            <div className="flex items-center gap-2">
                                <span className="px-3 py-1 rounded-full bg-purple-950 text-[#e2d3fa] text-[11px] font-bold uppercase tracking-wider">
                                    Event Telemetry &amp; Daily Quota Review
                                </span>
                                <span className="hidden sm:inline-block text-xs text-ink/70 font-mono">
                                    getquizsolve.com (AI Quiz Solve) vs ExamGhost
                                </span>
                            </div>
                            <span className="px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-ink">
                                Chrome Store: 907 Users · 5 Ratings
                            </span>
                        </div>

                        <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center relative z-10">
                            {/* Left Column: High-converting copy */}
                            <div className="lg:col-span-7">
                                <div className="inline-block px-3.5 py-1 rounded-full bg-purple-950/10 border border-purple-950/20 text-xs font-bold text-purple-950 mb-4">
                                    Synthetic Auto-Fill Flags + 5 Questions / 2 Screenshots Daily Cap
                                </div>
                                <h1 className="font-display text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-ink tracking-tight leading-[1.06] mb-5">
                                    What happens on Question 6 when your solver hits a daily paywall?
                                </h1>
                                <p className="aeo-summary text-sm sm:text-lg text-ink-secondary leading-relaxed mb-5 font-normal">
                                    GetQuizSolve (listed on Chrome as <em>&ldquo;AI Quiz Solve&rdquo;</em>) caps free accounts at just <strong>5 questions per day and 2 screenshot solves per day</strong>—cutting you off 15% into a midterm with a paywall demanding <strong>$4.99/week ($259.48/yr)</strong>. Worse, its default double-click <strong>Auto-fill</strong> mode clicks Canvas radio buttons via JavaScript (<code>event.isTrusted: false</code>), and even their own docs admit: <em>&ldquo;Auto-fill can&apos;t always select the option.&rdquo;</em>
                                </p>
                                <p className="text-sm sm:text-base text-purple-950 font-semibold leading-relaxed mb-8">
                                    ExamGhost gives you <strong>50 Free Solves upfront (including full Snap-It Vision OCR)</strong> with zero daily throttling, and keeps your clicks 100% authentic (<code>isTrusted: true</code>).
                                </p>

                                <div className="flex flex-wrap items-center gap-3">
                                    <Link prefetch={false} 
                                        href="/#pricing"
                                        className="btn-dark px-7 py-4 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                    >
                                        <FaChrome className="w-4 h-4 text-[#e2d3fa]" aria-hidden="true" />
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

                            {/* Right Column: Bespoke Event Telemetry & Daily Cap Card */}
                            <div className="lg:col-span-5">
                                <div className="rounded-[28px] bg-white p-5 sm:p-6 border border-black/10 shadow-lift space-y-4">
                                    <div className="flex items-center justify-between border-b border-black/10 pb-3">
                                        <span className="text-xs font-bold text-purple-950 uppercase tracking-wider flex items-center gap-1.5">
                                            <Fingerprint className="w-4 h-4 text-purple-700" />
                                            Browser Event &amp; Quota Audit
                                        </span>
                                        <span className="text-[11px] font-mono text-ink-muted">v1.2.2 Telemetry</span>
                                    </div>

                                    {/* Event Telemetry Comparison */}
                                    <div className="grid grid-cols-2 gap-2.5 text-xs">
                                        <div className="p-3 rounded-2xl bg-rose-50 border border-rose-200">
                                            <div className="font-mono text-[10px] text-rose-700 font-bold uppercase mb-1">GetQuizSolve Auto-Fill</div>
                                            <div className="font-mono font-extrabold text-sm text-rose-950 mb-1">isTrusted: false</div>
                                            <p className="text-[11px] text-rose-900/90 leading-snug">
                                                Programmatic JS radio click + fails on Canvas LTI iframes.
                                            </p>
                                        </div>
                                        <div className="p-3 rounded-2xl bg-emerald-50 border border-emerald-200">
                                            <div className="font-mono text-[10px] text-emerald-800 font-bold uppercase mb-1">ExamGhost Stealth HUD</div>
                                            <div className="font-mono font-extrabold text-sm text-emerald-950 mb-1">isTrusted: true</div>
                                            <p className="text-[11px] text-emerald-900/90 leading-snug">
                                                100% genuine hardware clicks from Closed Shadow DOM.
                                            </p>
                                        </div>
                                    </div>

                                    {/* Daily Quota Meter Comparison */}
                                    <div className="rounded-2xl bg-[#faf7f2] border border-black/10 p-4 space-y-3 text-xs">
                                        <div>
                                            <div className="flex justify-between font-semibold text-rose-900 mb-1">
                                                <span>GetQuizSolve Free Daily Limit:</span>
                                                <span className="font-mono">5 Qs + 2 Snaps / day</span>
                                            </div>
                                            <div className="w-full h-2.5 rounded-full bg-rose-100 overflow-hidden">
                                                <div className="w-[14%] h-full bg-rose-600 rounded-full" />
                                            </div>
                                            <span className="text-[10px] text-ink-muted block mt-1">
                                                Cuts off at Question 6 of a midterm → $4.99/week paywall
                                            </span>
                                        </div>

                                        <div className="pt-2 border-t border-black/5">
                                            <div className="flex justify-between font-semibold text-emerald-900 mb-1">
                                                <span>ExamGhost Free Starter Pass:</span>
                                                <span className="font-mono">50 Free Solves (0 Daily Cap)</span>
                                            </div>
                                            <div className="w-full h-2.5 rounded-full bg-emerald-100 overflow-hidden">
                                                <div className="w-full h-full bg-emerald-600 rounded-full" />
                                            </div>
                                            <span className="text-[10px] text-emerald-800 font-medium block mt-1">
                                                ✓ Includes full Snap-It Vision OCR on all 50 Free Solves
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Quick Metric Ribbon */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-8 mt-8 border-t border-black/10 relative z-10 text-xs">
                            <div className="p-3.5 rounded-xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Event Telemetry</span>
                                <span className="font-bold text-emerald-800">ExamGhost: isTrusted: true</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">GetQuizSolve: Auto-fill isTrusted: false</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Free Quota</span>
                                <span className="font-bold text-emerald-800">ExamGhost: 50 Free Solves</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">GetQuizSolve: 5 Qs + 2 Snaps/day</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Chrome Store Footprint</span>
                                <span className="font-bold text-emerald-800">ExamGhost: Verified Stealth</span>
                                <span className="text-rose-800 block text-[10px] mt-0.5">GetQuizSolve: 907 users (5 ratings)</span>
                            </div>
                            <div className="p-3.5 rounded-xl bg-white/80 border border-black/5">
                                <span className="text-ink-muted block text-[11px] mb-0.5">Pricing Model</span>
                                <span className="font-bold text-emerald-800">$19/mo · $99/yr · $199 Life</span>
                                <span className="text-ink-muted block text-[10px] mt-0.5">GetQuizSolve: $4.99/wk ($259/yr)</span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* INTERACTIVE 3-TAB GETQUIZSOLVE REALITY SWITCHER (Pure CSS peer-checked) */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Interactive GetQuizSolve Breakdown">
                    <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                        <div className="text-center max-w-2xl mx-auto mb-8">
                            <span className="px-3 py-1 rounded-full bg-purple-100 border border-purple-200 text-purple-950 text-xs font-mono font-bold uppercase tracking-wider mb-3 inline-block">
                                Interactive Technical Comparison
                            </span>
                            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink mb-2">
                                3 Traps Inside GetQuizSolve (AI Quiz Solve v1.2.2)
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Click each tab below to compare GetQuizSolve&apos;s default Auto-fill mode, its 5-question daily cap, and its Pro rate throttling against ExamGhost.
                            </p>
                        </div>

                        {/* Hidden Radio Inputs */}
                        <input type="radio" name="gqs_tabs" id="gqs_autofill" className="sr-only peer/autofill" defaultChecked />
                        <input type="radio" name="gqs_tabs" id="gqs_daily" className="sr-only peer/daily" />
                        <input type="radio" name="gqs_tabs" id="gqs_pro" className="sr-only peer/pro" />

                        {/* Tab Labels */}
                        <div className="grid sm:grid-cols-3 gap-2.5 p-2 rounded-2xl bg-[#f3eefc] border border-purple-950/10 mb-8">
                            <label
                                htmlFor="gqs_autofill"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/autofill:bg-ink peer-checked/autofill:text-white peer-checked/autofill:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">1. Default Auto-Fill Danger</div>
                                <div className="text-[11px] opacity-75 mt-0.5">isTrusted: false &amp; toolbar blur</div>
                            </label>
                            <label
                                htmlFor="gqs_daily"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/daily:bg-ink peer-checked/daily:text-white peer-checked/daily:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">2. 5 Qs + 2 Screenshots/Day Cap</div>
                                <div className="text-[11px] opacity-75 mt-0.5">Mid-exam paywall vs 50 Free Solves</div>
                            </label>
                            <label
                                htmlFor="gqs_pro"
                                className="cursor-pointer rounded-xl p-3.5 text-center transition-all border border-transparent peer-checked/pro:bg-ink peer-checked/pro:text-white peer-checked/pro:shadow-sm text-ink hover:bg-black/5"
                            >
                                <div className="font-display font-bold text-xs sm:text-sm">3. $4.99/Week + Pro Rate Limits</div>
                                <div className="text-[11px] opacity-75 mt-0.5">30 req/min throttle vs Uncapped</div>
                            </label>
                        </div>

                        {/* TAB 1: Auto-Fill Danger */}
                        <div className="hidden peer-checked/autofill:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <MousePointerClick className="w-3.5 h-3.5" />
                                        GetQuizSolve: Default Auto-Fill + Popup Blur
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Why their own docs admit: &ldquo;Auto-fill can&apos;t always select the option&rdquo;
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        GetQuizSolve ships with <strong>Auto-fill</strong> enabled by default. When you double-click a question, its script tries to programmatically check the Canvas radio button. Not only does this dispatch a synthetic <code>event.isTrusted = false</code> flag, it frequently fails on React-based Canvas New Quizzes.
                                    </p>
                                    <p className="text-xs text-ink-secondary leading-relaxed mb-4">
                                        When Auto-fill fails mid-exam, GetQuizSolve instructs you to click its Chrome toolbar icon to switch between <strong>Invisible, Stealth, or Explain</strong> modes and toggle from Auto-fill to <strong>Highlight (4s mark)</strong> or <strong>Clipboard</strong>—immediately firing <code>window.blur</code> in Canvas SpeedGrader!
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Telemetry Flag: event.isTrusted === false + Toolbar Popup Blur
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        ExamGhost: Authentic Hardware Clicks + Focus Shield
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        100% genuine <code className="text-sm bg-white px-1.5 py-0.5 rounded border border-emerald-200">isTrusted: true</code> clicks
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost never forces clumsy programmatic DOM clicks or requires you to open a Chrome toolbar popup mid-test. You view verified solutions inside a private <strong>Closed Shadow DOM HUD</strong> (or via a 1px Invisible Dot cue) and click the answer yourself with your physical mouse.
                                    </p>
                                    <ul className="space-y-2 text-xs text-ink-secondary mb-4">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Zero Bot Signatures:</strong> Every click originates from your physical trackpad or mouse (`event.isTrusted = true`).</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>In-Exam Hotkeys:</strong> Adjust opacity or switch modes via keyboard shortcuts without ever leaving the Canvas tab.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Telemetry Status: 100% Hardware Authentic · 0 Window Blurs
                                </div>
                            </div>
                        </div>

                        {/* TAB 2: 5 Qs + 2 Screenshots/Day Cap */}
                        <div className="hidden peer-checked/daily:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <Camera className="w-3.5 h-3.5" />
                                        GetQuizSolve: Daily Micro-Quotas
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Stranded after 5 questions or 2 diagram screenshots
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        GetQuizSolve&apos;s free plan enforces three harsh daily walls that reset at midnight:
                                    </p>
                                    <div className="grid grid-cols-3 gap-2 text-center mb-4 text-xs">
                                        <div className="p-2.5 rounded-xl bg-white border border-rose-200">
                                            <div className="font-display font-extrabold text-base text-rose-900">5 / day</div>
                                            <div className="text-[10px] text-ink-muted">Quiz Questions</div>
                                        </div>
                                        <div className="p-2.5 rounded-xl bg-white border border-rose-200">
                                            <div className="font-display font-extrabold text-base text-rose-900">2 / day</div>
                                            <div className="text-[10px] text-ink-muted">&ldquo;Snap It&rdquo; OCR</div>
                                        </div>
                                        <div className="p-2.5 rounded-xl bg-white border border-rose-200">
                                            <div className="font-display font-extrabold text-base text-rose-900">5 / day</div>
                                            <div className="text-[10px] text-ink-muted">AI Tutor Chats</div>
                                        </div>
                                    </div>
                                    <p className="text-xs text-ink-secondary">
                                        If your STEM exam has 25 questions and 5 graphs, GetQuizSolve locks up on Question 6 or Screenshot 3 and forces you to tab out to enter a credit card.
                                    </p>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900 mt-4">
                                    Free Tier Limit: 5 text solves/day + 2 screenshot solves/day
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <Zap className="w-3.5 h-3.5" />
                                        ExamGhost: 50 Free Solves (Zero Daily Throttle)
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Use all 50 Free Solves in a single exam sitting
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        ExamGhost gives you <strong>50 Free Solves upfront</strong> with no credit card required and <strong>zero daily rate limits</strong>. Whether you need 50 text solves or 50 <code>⌘+Shift+S</code> Snap-It Vision diagram snips in one afternoon, you never hit an artificial daily wall.
                                    </p>
                                    <ul className="space-y-2 text-xs text-ink-secondary mb-4">
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>Full Snap-It Vision Included:</strong> Snip molecular diagrams, calculus integrals, or physics graphs across all 50 free solves.</span>
                                        </li>
                                        <li className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                                            <span><strong>0.3s Instant Speed:</strong> Complete a full 50-question exam without waiting for midnight quota resets.</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-emerald-200 text-xs font-mono text-emerald-900">
                                    Free Tier Limit: 50 Full Solves · Text + Screenshot OCR Included
                                </div>
                            </div>
                        </div>

                        {/* TAB 3: $4.99/Week + Pro Rate Limits */}
                        <div className="hidden peer-checked/pro:grid md:grid-cols-2 gap-6">
                            <div className="rounded-2xl bg-rose-50/70 border border-rose-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-200/80 text-rose-950 text-[11px] font-bold mb-4">
                                        <DollarSign className="w-3.5 h-3.5" />
                                        GetQuizSolve Pro: $4.99/Week &amp; Hidden Rate Limits
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Even paid Pro users get throttled to 30 req/min &amp; 100 chats/day
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        GetQuizSolve pushes a <strong>$4.99/week</strong> plan ($259.48/yr if left running), alongside $12.99/mo or $8.33/mo billed yearly ($99.96/yr) with no Lifetime pass option. Even after paying for Pro, their terms enforce hard rate limits:
                                    </p>
                                    <ul className="space-y-1.5 text-xs text-ink-secondary mb-4">
                                        <li>• <strong>Max 30 requests per minute</strong> &amp; <strong>200 requests per hour</strong></li>
                                        <li>• <strong>Max 100 AI tutor chats per day</strong></li>
                                        <li>• Logs <em>&ldquo;User activity&rdquo;</em> and <em>&ldquo;Website content&rdquo;</em> under a Vercel hobby privacy policy (<code>quizsolve.vercel.app/privacy</code>).</li>
                                    </ul>
                                </div>
                                <div className="p-3.5 rounded-xl bg-white border border-rose-200 text-xs font-mono text-rose-900">
                                    Weekly Plan Cost: $4.99/wk ($259.48/yr) · Rate-limited Pro tier
                                </div>
                            </div>

                            <div className="rounded-2xl bg-emerald-50/70 border border-emerald-200 p-6 flex flex-col justify-between">
                                <div>
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 text-[11px] font-bold mb-4">
                                        <ShieldCheck className="w-3.5 h-3.5" />
                                        ExamGhost: Transparent Uncapped Plans
                                    </div>
                                    <h3 className="font-display text-xl font-bold text-ink mb-2">
                                        Zero weekly billing traps. Zero hourly rate throttles.
                                    </h3>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-4">
                                        After you finish your 50 Free Solves, pick the exact pass that fits your semester with zero hourly or daily caps:
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
                                    Privacy: Ephemeral RAM Execution · Zero Third-Party Trackers
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
                                What Your Professor Sees in SpeedGrader
                            </h2>
                            <p className="text-xs sm:text-sm text-slate-300">
                                Canvas logs synthetic JavaScript radio-button dispatches and tab-out events when you hit GetQuizSolve&apos;s 5-question daily wall.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            {/* GetQuizSolve Log */}
                            <div className="rounded-2xl bg-slate-900 border border-rose-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-rose-500/20 text-rose-300 font-bold">
                                    <span>GetQuizSolve (v1.2.2) Audit Log</span>
                                    <span className="text-[10px] bg-rose-950 text-rose-200 px-2 py-0.5 rounded border border-rose-500/40">FLAGGED</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">11:20:05 — Started quiz attempt</div>
                                    <div className="text-slate-300">11:20:41 — Answered Question 1 (Double-click Auto-fill)</div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        11:21:02 — Synthetic click detected on #answer-choice-2 (isTrusted: false)
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Unverified programmatic Auto-fill DOM manipulation flag</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-rose-950/50 border border-rose-500/30 text-rose-200">
                                        11:23:18 — Stopped viewing the Canvas quiz (1:45)
                                        <span className="block text-[10px] text-rose-300 mt-0.5">⚠️ Student tabbed out after hitting 5-question / 2-screenshot daily paywall</span>
                                    </div>
                                    <div className="text-slate-300">11:25:03 — Resumed viewing quiz</div>
                                </div>
                            </div>

                            {/* ExamGhost Log */}
                            <div className="rounded-2xl bg-slate-900 border border-emerald-500/40 p-5 font-mono text-xs">
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-emerald-500/20 text-emerald-300 font-bold">
                                    <span>ExamGhost (Focus Shield Active)</span>
                                    <span className="text-[10px] bg-emerald-950 text-emerald-200 px-2 py-0.5 rounded border border-emerald-500/40">100% CLEAN</span>
                                </div>
                                <div className="space-y-2 text-slate-300">
                                    <div className="text-slate-300">11:20:05 — Started quiz attempt</div>
                                    <div className="text-slate-300">11:20:41 — Answered Question 1</div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        11:21:28 — Answered Question 2 (isTrusted: true)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Genuine hardware click from Shadow DOM HUD</span>
                                    </div>
                                    <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-200">
                                        11:22:15 — Answered Question 3 (Normal pacing)
                                        <span className="block text-[10px] text-emerald-300 mt-0.5">✓ Continuous focus maintained · 0 departure flags</span>
                                    </div>
                                    <div className="text-slate-300">11:23:02 — Answered Question 4 (Attempt completed smoothly)</div>
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
                                Head-to-Head Comparison: ExamGhost vs GetQuizSolve
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted">
                                Complete 2026 comparison comparing ExamGhost against AI Quiz Solve (GetQuizSolve v1.2.2).
                            </p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse text-xs sm:text-sm">
                                <thead>
                                    <tr className="border-b-2 border-black/10">
                                        <th className="py-3.5 px-4 font-bold text-ink">Feature / Capability</th>
                                        <th className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50 rounded-t-xl">ExamGhost</th>
                                        <th className="py-3.5 px-4 font-bold text-ink-muted">GetQuizSolve (AI Quiz Solve)</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5">
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Event Telemetry Integrity</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ isTrusted: true (Genuine Hardware Input)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Default Auto-fill dispatches synthetic isTrusted: false</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Free Tier Allowance</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 50 Free Solves (Zero daily throttle)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ 5 questions/day + 2 screenshot solves/day + 5 chats/day</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Focus Shield (Window Blur Suppression)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 100% Intercepted (No tab-switch flags)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ None (Switching Invisible/Stealth/Explain in popup blurs tab)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">DOM Isolation Architecture</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Closed Shadow DOM (#shadow-root) + Invisible Mode</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Direct Page DOM Injection (Highlight 1–10s / Explain Popup)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Pro Rate Limits &amp; Throttling</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Unlimited High-Speed Solves (0.3s Edge Neural)</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Capped at 30 req/min, 200 req/hr, 100 AI tutor chats/day</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Snap-It Vision OCR (Locked Diagrams)</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ ⌘+Shift+S Included in All 50 Free Solves</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Ctrl+Shift+S capped at 2 screenshot solves/day on Free</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Pricing Model</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ 50 Free Solves · $19/mo · $99/yr · $199 Lifetime</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">$4.99/week ($259/yr), $12.99/mo, or $99.96/yr (No lifetime option)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Chrome Web Store Footprint</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Verified Zero-Trace Stealth Build</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">907 users · 5 ratings (v1.2.2)</td>
                                    </tr>
                                    <tr>
                                        <td className="py-3.5 px-4 font-semibold text-ink">Privacy &amp; Tracker Footprint</td>
                                        <td className="py-3.5 px-4 font-bold text-emerald-800 bg-emerald-50/50">✓ Zero Third-Party Trackers · Ephemeral Memory</td>
                                        <td className="py-3.5 px-4 text-rose-800 font-medium">✗ Collects User Activity &amp; Website Content (quizsolve.vercel.app)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* Collapsible Technical Chrome Web Store Manifest & Domain Audit */}
                        <details className="mt-6 group rounded-2xl bg-[#faf7f2] border border-black/10 p-4 text-xs">
                            <summary className="font-mono font-bold text-ink cursor-pointer list-none flex items-center justify-between">
                                <h3 className="font-display font-bold text-sm sm:text-base text-ink m-0 inline">Technical Chrome Web Store Manifest &amp; Domain Audit (GetQuizSolve)</h3>
                                <ChevronDown className="w-4 h-4 text-ink-muted group-open:rotate-180 transition-transform" />
                            </summary>
                            <div className="mt-3 pt-3 border-t border-black/10 grid sm:grid-cols-2 gap-3 font-mono text-[11px] text-ink-secondary">
                                <div>
                                    <span className="text-ink font-bold block">Chrome Extension Listing &amp; ID:</span>
                                    AI Quiz Solve: Homework Helper &amp; Quiz Solver v1.2.2 (<code>cjdhcfbjcepcmlacbaejclglodjghefa</code> · 84.86KiB)
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Domain &amp; Privacy Endpoint:</span>
                                    <code>getquizsolve.com</code> · Privacy hosted on <code>quizsolve.vercel.app/privacy</code>
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Display &amp; Answer Modes:</span>
                                    Display: Invisible, Stealth (default), Explain · Answer: Auto-fill (default), Highlight (4s), Clipboard
                                </div>
                                <div>
                                    <span className="text-ink font-bold block">Free &amp; Pro Rate Limits:</span>
                                    Free: 5 Qs/day, 2 Snaps/day, 5 chats/day · Pro: 30 req/min, 200 req/hr, 100 chats/day
                                </div>
                            </div>
                        </details>
                    </div>
                </section>

                {/* STUDENT CASE STUDY / SOCIAL PROOF */}
                <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Student Review">
                    <div className="rounded-[32px] bg-gradient-to-br from-[#e2d3fa]/40 via-white to-white border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex items-center gap-1 text-amber-500 mb-4">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                            ))}
                            <span className="text-xs font-bold text-ink ml-2">Verified Student Migration</span>
                        </div>
                        <blockquote className="font-display text-lg sm:text-xl font-bold text-ink leading-relaxed mb-6">
                            &ldquo;During my economics midterm, GetQuizSolve cut me off after my 5th double-click and 2nd graph screenshot with a paywall asking for $4.99/week or $12.99/month. Even worse, its default Auto-fill couldn&apos;t select Canvas New Quizzes radio buttons without opening the toolbar popup to switch to Highlight mode, which logged window blurs. I switched to ExamGhost: 50 Free Solves right out of the box, zero daily limits, and authentic hardware clicks from a closed Shadow DOM HUD.&rdquo;
                        </blockquote>
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-purple-900 text-white font-bold flex items-center justify-center text-sm">
                                MD
                            </div>
                            <div>
                                <div className="text-sm font-bold text-ink">Marcus D.</div>
                                <div className="text-xs text-ink-muted">Economics Major · UT Austin</div>
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
                            Frequently Asked Questions: GetQuizSolve vs ExamGhost
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
                    <div className="rounded-[32px] bg-gradient-to-r from-[#e2d3fa] via-[#efe7fc] to-[#f4ede2] border border-black/10 p-6 sm:p-10 shadow-sm">
                        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 mb-8 border-b border-black/10">
                            <div>
                                <span className="inline-block px-3 py-1 rounded-full bg-white/85 border border-black/10 text-[11px] font-bold text-purple-950 uppercase tracking-wider mb-2">
                                    isTrusted: true Hardware Telemetry · 50 Free Solves
                                </span>
                                <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight">
                                    Stop getting cut off at Question 5. Start 50 Free Solves today.
                                </h2>
                                <p className="text-xs sm:text-sm text-ink-secondary mt-1">
                                    No 5-question or 2-screenshot daily caps. No synthetic Auto-fill flags. Upgrade anytime to $19/mo, $99/yr ($8.25/mo), or $199 Lifetime.
                                </p>
                            </div>
                            <div className="flex flex-wrap items-center gap-3 shrink-0">
                                <Link prefetch={false}
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-xs sm:text-sm font-bold shadow-lift inline-flex items-center gap-2"
                                >
                                    <FaChrome className="w-4 h-4 text-[#e2d3fa]" aria-hidden="true" />
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
                                <Link prefetch={false} href="/fastsolve-vs-examghost" className="p-3 rounded-xl bg-white/90 hover:bg-white border border-black/5 hover:border-black/20 text-ink font-semibold transition-colors">
                                    FastSolve vs ExamGhost →
                                </Link>
                                <Link prefetch={false} href="/quizard-vs-examghost" className="p-3 rounded-xl bg-white/90 hover:bg-white border border-black/5 hover:border-black/20 text-ink font-semibold transition-colors">
                                    Quizard vs ExamGhost →
                                </Link>
                                <Link prefetch={false} href="/canvaswizard-vs-examghost" className="p-3 rounded-xl bg-white/90 hover:bg-white border border-black/5 hover:border-black/20 text-ink font-semibold transition-colors">
                                    CanvasWizard vs ExamGhost →
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
