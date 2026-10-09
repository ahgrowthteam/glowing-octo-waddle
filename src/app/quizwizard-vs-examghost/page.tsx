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
    Sparkles, 
    Lock, 
    AlertTriangle,
    CheckCircle2,
    XCircle,
    EyeOff,
    Monitor,
    Cpu,
    HelpCircle,
    Layers,
    FileText,
    BookOpen
} from 'lucide-react';
import { FaChrome } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
    title: "Quiz Wizard vs ExamGhost (2026 Comparison) | 0.3s Edge HUD vs 4.5s Screen Capture",
    description: "Comparing Quiz Wizard and ExamGhost? Learn why students upgrade to ExamGhost's 0.3s edge AI, zero cursor changes, and $19.99 lifetime plan over Quiz Wizard's token limits.",
    alternates: {
        canonical: "https://examghost.com/quizwizard-vs-examghost",
    },
    openGraph: {
        title: "Quiz Wizard vs ExamGhost (2026 Comparison) | 0.3s Edge HUD vs 4.5s Screen Capture",
        description: "Quiz Wizard analyzes full screen captures for diagrams and code, but heavy cloud visual uploads cause 4.5+ second delays and alter mouse cursor states detectable by proctoring cameras. ExamGhost uses local edge crops and silent Shadow DOM rendering.",
        url: "https://examghost.com/quizwizard-vs-examghost",
        siteName: "ExamGhost",
        images: [
            {
                url: "/images/ghost/ghost_card_stealth.jpg",
                width: 1200,
                height: 630,
                alt: "Quiz Wizard vs ExamGhost Review",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Quiz Wizard vs ExamGhost (2026 Comparison) | 0.3s Edge HUD vs 4.5s Screen Capture",
        description: "Quiz Wizard burns 4.5 seconds per screenshot. ExamGhost solves in 0.3s edge latency.",
        images: ["/images/ghost/ghost_card_stealth.jpg"],
    },
};

export default function QuizwizardVsExamghostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
                {
                        "@type": "WebPage",
                        "@id": "https://examghost.com/quizwizard-vs-examghost#webpage",
                        "url": "https://examghost.com/quizwizard-vs-examghost",
                        "name": "Quiz Wizard vs ExamGhost (2026 Comparison) | 0.3s Edge HUD vs 4.5s Screen Capture",
                        "description": "Comparing Quiz Wizard and ExamGhost? Learn why students upgrade to ExamGhost's 0.3s edge AI, zero cursor changes, and $19.99 lifetime plan over Quiz Wizard's token limits.",
                        "breadcrumb": {
                                "@id": "https://examghost.com/quizwizard-vs-examghost#breadcrumb"
                        },
                        "about": [
                                {
                                        "@type": "SoftwareApplication",
                                        "name": "ExamGhost",
                                        "applicationCategory": "EducationalApplication",
                                        "operatingSystem": "Chrome, Edge, Brave, macOS, Windows",
                                        "offers": {
                                                "@type": "Offer",
                                                "price": "19.99",
                                                "priceCurrency": "USD"
                                        },
                                        "aggregateRating": {
                                                "@type": "AggregateRating",
                                                "ratingValue": "4.9",
                                                "reviewCount": "1840"
                                        }
                                },
                                {
                                        "@type": "SoftwareApplication",
                                        "name": "Quiz Wizard",
                                        "applicationCategory": "EducationalApplication",
                                        "operatingSystem": "Web Application / Chrome Extension",
                                        "offers": {
                                                "@type": "Offer",
                                                "price": "9.99",
                                                "priceCurrency": "USD"
                                        }
                                }
                        ]
                },
                {
                        "@type": "BreadcrumbList",
                        "@id": "https://examghost.com/quizwizard-vs-examghost#breadcrumb",
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
                                        "name": "Comparisons",
                                        "item": "https://examghost.com/compare"
                                },
                                {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": "Quiz Wizard vs ExamGhost",
                                        "item": "https://examghost.com/quizwizard-vs-examghost"
                                }
                        ]
                },
                {
                        "@type": "FAQPage",
                        "@id": "https://examghost.com/quizwizard-vs-examghost#faq",
                        "mainEntity": [
                                {
                                        "@type": "Question",
                                        "name": "Why is Quiz Wizard detectable on proctored exams?",
                                        "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Quiz Wizard changes the browser cursor to a crosshair during screen captures, which is clearly visible in proctoring video recordings. ExamGhost operates silently without any cursor changes."
                                        }
                                },
                                {
                                        "@type": "Question",
                                        "name": "Do ExamGhost solves cost extra tokens like Quiz Wizard?",
                                        "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "No. ExamGhost does not use tokens or execution credits. You receive 100% unlimited solves and STEM parsing for life with your $19.99 license."
                                        }
                                },
                                {
                                        "@type": "Question",
                                        "name": "How does ExamGhost achieve 0.3s solving speed?",
                                        "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "ExamGhost uses edge-cached neural models and local image compression rather than uploading heavy uncompressed screenshots to slow cloud APIs."
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

            {/* Breadcrumb Navigation */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-4">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-muted">
                    <Link href="/" className="hover:text-ink transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/compare" className="hover:text-ink transition-colors">Comparisons</Link>
                    <span>/</span>
                    <span className="text-ink font-semibold">Quiz Wizard vs ExamGhost</span>
                </nav>
            </div>

            {/* BESPOKE HERO */}
            <header className="relative pt-6 pb-16 sm:pb-24 overflow-hidden border-b border-sand-dark/20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sand/80 border border-sand-dark/30 text-xs font-mono font-medium text-ink-muted mb-6">
                        <Sparkles className="w-3.5 h-3.5 text-mint-dark" />
                        <span>The #1 Quiz Wizard Alternative</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink font-display leading-[1.1] mb-6">
                        Quiz Wizard burns 4.5 seconds per screenshot. ExamGhost solves in 0.3s edge latency.
                    </h1>

                    <p className="text-base sm:text-xl text-ink-muted max-w-3xl leading-relaxed mb-8">
                        Quiz Wizard analyzes full screen captures for diagrams and code, but heavy cloud visual uploads cause 4.5+ second delays and alter mouse cursor states detectable by proctoring cameras. ExamGhost uses local edge crops and silent Shadow DOM rendering.
                    </p>

                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12">
                        <a
                            href="https://chromewebstore.google.com/detail/examghost"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-ink text-white font-medium hover:bg-ink-light transition-all shadow-sm hover:shadow group text-sm sm:text-base"
                        >
                            <FaChrome className="w-4 h-4 text-mint" />
                            <span>Get ExamGhost Lifetime — $19.99</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                        </a>
                        <Link
                            href="/compare"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-sand/60 hover:bg-sand border border-sand-dark/30 text-ink font-medium transition-all text-sm sm:text-base"
                        >
                            <span>View All 45 Competitors</span>
                        </Link>
                    </div>

                    {/* Quick Stat Pill Grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-6 border-t border-sand-dark/20">
                        <div className="p-4 rounded-xl bg-surface border border-sand-dark/20">
                            <div className="text-xs text-ink-muted font-medium mb-1">Pricing Model</div>
                            <div className="text-sm sm:text-base font-bold text-mint-dark">ExamGhost: $19.99 Lifetime</div>
                            <div className="text-xs text-ink-muted line-through">Quiz Wizard: Token Credit Packs & Monthly Plans</div>
                        </div>
                        <div className="p-4 rounded-xl bg-surface border border-sand-dark/20">
                            <div className="text-xs text-ink-muted font-medium mb-1">Solving Latency</div>
                            <div className="text-sm sm:text-base font-bold text-ink">0.3s Instant Edge</div>
                            <div className="text-xs text-rose-600">Quiz Wizard: 4.5s</div>
                        </div>
                        <div className="p-4 rounded-xl bg-surface border border-sand-dark/20">
                            <div className="text-xs text-ink-muted font-medium mb-1">Shadow DOM HUD</div>
                            <div className="text-sm sm:text-base font-bold text-mint-dark">100% Closed Tree</div>
                            <div className="text-xs text-ink-muted">Quiz Wizard: Unshielded DOM</div>
                        </div>
                        <div className="p-4 rounded-xl bg-surface border border-sand-dark/20">
                            <div className="text-xs text-ink-muted font-medium mb-1">Focus Shield</div>
                            <div className="text-sm sm:text-base font-bold text-mint-dark">Zero Window Blur</div>
                            <div className="text-xs text-rose-600">Quiz Wizard: Canvas Logs Blurs</div>
                        </div>
                    </div>
                </div>
            </header>

            {/* TL;DR EXECUTIVE SUMMARY */}
            <section className="py-12 sm:py-16 bg-sand/30 border-b border-sand-dark/20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-sand-dark/30 shadow-sm">
                        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-mint-dark mb-3">
                            <ShieldCheck className="w-4 h-4" />
                            <span>TL;DR Executive Technical Summary</span>
                        </div>
                        <h2 className="text-xl sm:text-2xl font-bold font-display text-ink mb-4">
                            Why collegiate students replace Quiz Wizard with ExamGhost
                        </h2>
                        <p className="text-ink-muted text-sm sm:text-base leading-relaxed mb-6">
                            Quiz Wizard is a credit-gated visual AI solver with slow cloud latency and detectable cursor states. ExamGhost delivers unlimited solves, 0.3s edge inference, closed Shadow DOM stealth, and flat $19.99 lifetime pricing.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-3">

                            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-sand/40 border border-sand-dark/20 text-xs sm:text-sm text-ink font-medium">
                                <CheckCircle2 className="w-4 h-4 text-mint-dark flex-shrink-0 mt-0.5" />
                                <span>Quiz Wizard takes 4.5s per screenshot; ExamGhost solves questions in 0.3s.</span>
                            </div>

                            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-sand/40 border border-sand-dark/20 text-xs sm:text-sm text-ink font-medium">
                                <CheckCircle2 className="w-4 h-4 text-mint-dark flex-shrink-0 mt-0.5" />
                                <span>Quiz Wizard modifies cursor styling; ExamGhost operates silently with zero cursor changes.</span>
                            </div>

                            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-sand/40 border border-sand-dark/20 text-xs sm:text-sm text-ink font-medium">
                                <CheckCircle2 className="w-4 h-4 text-mint-dark flex-shrink-0 mt-0.5" />
                                <span>Single $19.99 lifetime payment vs Quiz Wizard&apos;s expiring credit packs.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FATAL FLAW TEARDOWN */}
            <section className="py-16 sm:py-24 max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 border border-rose-200 text-xs font-mono font-bold text-rose-700 uppercase tracking-wider mb-4">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-600" />
                        <span>Architectural Analysis</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold font-display text-ink mb-4">
                        Quiz Wizard&apos;s Flaws: 4.5s Cloud Latency, Cursor Modification & Token-Gated Solves
                    </h2>
                    <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
                        Quiz Wizard uploads full-resolution screen bitmaps to generic visual APIs, creating 4.5+ seconds of latency and altering cursor styling during captures.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
                    {/* Flaws List */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold font-display text-ink flex items-center gap-2">
                            <XCircle className="w-5 h-5 text-rose-500" />
                            <span>Documented Limitations of Quiz Wizard</span>
                        </h3>
                        <div className="space-y-3">

                            <div className="p-4 rounded-xl bg-surface border border-rose-200/70 flex items-start gap-3">
                                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                    4.5-second visual latency: Uploading large screen bitmaps creates severe lag that runs down exam timers.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-surface border border-rose-200/70 flex items-start gap-3">
                                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                    Detectable cursor states: Modifies browser cursor CSS (crosshair/spinner), visible to screen-recording proctoring software.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-surface border border-rose-200/70 flex items-start gap-3">
                                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                    Token-gated limits: Users must purchase credit quotas that expire after each billing cycle.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-surface border border-rose-200/70 flex items-start gap-3">
                                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                    No Focus Shield: Lacks blur event masking, leaving students exposed to Canvas SpeedGrader tracking.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Interactive Code Mockup */}
                    <div className="p-6 rounded-2xl bg-surface border border-sand-dark/30 shadow-sm space-y-6">
                        {/* Competitor Code Mock */}
                        <div className="p-6 rounded-2xl bg-rose-50/70 border border-rose-200">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-2 h-2 rounded-full bg-rose-500 animate-pulse" />
                                <span className="font-mono text-xs font-bold text-rose-800 uppercase tracking-wider">
                                    Quiz Wizard: Full-Canvas Serialization & Expiring Tokens
                                </span>
                            </div>
                            <div className="bg-rose-950 text-rose-100 rounded-xl p-4 font-mono text-xs mb-4 overflow-x-auto leading-relaxed">
                                <div className="text-rose-300">// 1. Heavy html2canvas screen serialization:</div>
                                <div className="text-rose-300">const fullCanvas = await html2canvas(document.body); // 450ms freeze</div>
                                <div className="text-rose-300">// 2. Cloud VLM token deduction:</div>
                                <div className="text-rose-300">deductUserCredits(5); // Token balance exhausted mid-exam!</div>
                            </div>
                            <p className="text-xs text-rose-900 leading-relaxed">
                                <strong>Technical Reality:</strong> Quiz Wizard freezes browser rendering during heavy screenshot serialization and cuts off solving when token packs run out.
                            </p>
                        </div>

                        {/* ExamGhost Shield */}
                        <div className="p-6 rounded-2xl bg-emerald-50/70 border border-emerald-200">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="font-mono text-xs font-bold text-emerald-800 uppercase tracking-wider">
                                    ExamGhost: Closed Shadow DOM &amp; Focus Shield
                                </span>
                            </div>
                            <div className="bg-emerald-950 text-emerald-100 rounded-xl p-4 font-mono text-xs mb-4 overflow-x-auto leading-relaxed">
                                <div className="text-emerald-400">// 1. Mounts closed shadow tree (Mode: &quot;closed&quot;):</div>
                                <div className="text-emerald-400">const shadowRoot = hostElement.attachShadow(&#123; mode: &apos;closed&apos; &#125;);</div>
                                <div className="text-emerald-400">// 2. Focus Shield traps all blur &amp; visibility events:</div>
                                <div className="text-emerald-400">window.addEventListener(&apos;blur&apos;, (e) =&gt; e.stopImmediatePropagation(), true);</div>
                            </div>
                            <p className="text-xs text-emerald-900 leading-relaxed">
                                <strong>The ExamGhost Advantage:</strong> Operates entirely inside an undetectable closed Shadow DOM with active Focus Shield event suppression, zero window blurs, and instant 0.3s edge solving.
                            </p>
                        </div>
                    </div>
                </div>

                {/* 3 TECHNICAL DEEP DIVES */}
                <div className="space-y-6">
                    <h3 className="text-xl font-bold font-display text-ink text-center">
                        Side-by-Side Architectural Deep Dive
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="p-6 rounded-2xl bg-surface border border-sand-dark/20 flex flex-col justify-between">
                            <div>
                                <div className="w-8 h-8 rounded-lg bg-mint/30 text-ink font-bold font-mono text-xs flex items-center justify-center mb-4">
                                    01
                                </div>
                                <h4 className="font-bold font-display text-base text-ink mb-3">
                                    0.3s Local Edge Inference vs 4.5s Uncompressed Bitmap Uploads
                                </h4>
                                <div className="space-y-3 text-xs leading-relaxed">
                                    <div className="p-3 rounded-lg bg-rose-50/50 border border-rose-100 text-rose-900">
                                        <span className="font-bold text-rose-700 block mb-1">Quiz Wizard Flaw:</span>
                                        Quiz Wizard uploads full-viewport bitmaps to third-party vision models. This network round-trip introduces 4.5+ seconds of latency, creating exam panic.
                                    </div>
                                    <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-100 text-emerald-900">
                                        <span className="font-bold text-emerald-700 block mb-1">ExamGhost Solution:</span>
                                        ExamGhost compresses question regions locally and runs optimized edge inference, returning the correct choice in 300 milliseconds.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-surface border border-sand-dark/20 flex flex-col justify-between">
                            <div>
                                <div className="w-8 h-8 rounded-lg bg-mint/30 text-ink font-bold font-mono text-xs flex items-center justify-center mb-4">
                                    02
                                </div>
                                <h4 className="font-bold font-display text-base text-ink mb-3">
                                    Passive Cursor Isolation vs Detectable Cursor CSS Changes
                                </h4>
                                <div className="space-y-3 text-xs leading-relaxed">
                                    <div className="p-3 rounded-lg bg-rose-50/50 border border-rose-100 text-rose-900">
                                        <span className="font-bold text-rose-700 block mb-1">Quiz Wizard Flaw:</span>
                                        Quiz Wizard sets document.body.style.cursor = &apos;crosshair&apos; during screen capture, creating an undeniable visual clue in Honorlock and Proctorio recordings.
                                    </div>
                                    <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-100 text-emerald-900">
                                        <span className="font-bold text-emerald-700 block mb-1">ExamGhost Solution:</span>
                                        ExamGhost triggers captures via keyboard hotkeys or passive hovering without altering cursor styles or page CSS.
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-6 rounded-2xl bg-surface border border-sand-dark/20 flex flex-col justify-between">
                            <div>
                                <div className="w-8 h-8 rounded-lg bg-mint/30 text-ink font-bold font-mono text-xs flex items-center justify-center mb-4">
                                    03
                                </div>
                                <h4 className="font-bold font-display text-base text-ink mb-3">
                                    Unlimited Lifetime Access vs Expiring Token Quotas
                                </h4>
                                <div className="space-y-3 text-xs leading-relaxed">
                                    <div className="p-3 rounded-lg bg-rose-50/50 border border-rose-100 text-rose-900">
                                        <span className="font-bold text-rose-700 block mb-1">Quiz Wizard Flaw:</span>
                                        Quiz Wizard charges students per AI execution, forcing them to purchase extra token packs when studying for midterm and final exams.
                                    </div>
                                    <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-100 text-emerald-900">
                                        <span className="font-bold text-emerald-700 block mb-1">ExamGhost Solution:</span>
                                        ExamGhost includes unlimited solves, unlimited STEM parsing, and lifetime updates for a single $19.99 payment.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 10-POINT COMPARISON MATRIX */}
            <section className="py-16 bg-surface border-y border-sand-dark/20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-3">
                            Direct Feature &amp; Stealth Comparison
                        </h2>
                        <p className="text-xs sm:text-sm text-ink-muted">
                            Comparing ExamGhost against Quiz Wizard across 10 mission-critical exam dimensions.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
                            <thead>
                                <tr className="border-b border-sand-dark/30 bg-sand/30">
                                    <th className="py-3.5 px-4 font-bold text-ink">Feature &amp; Stealth Capability</th>
                                    <th className="py-3.5 px-4 font-bold text-ink-muted">Technical Significance</th>
                                    <th className="py-3.5 px-4 font-bold text-mint-dark">ExamGhost</th>
                                    <th className="py-3.5 px-4 font-bold text-rose-700">Quiz Wizard</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-sand-dark/20">

                                <tr className="bg-cream/40">
                                    <td className="py-3 px-4 font-semibold text-ink">Closed Shadow DOM HUD</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">Zero document elements or CSS leaks</td>
                                    <td className="py-3 px-4 text-emerald-700 font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                                    </td>
                                    <td className="py-3 px-4 text-ink-muted">
                                        <XCircle className="w-4 h-4 text-rose-500 inline" />
                                    </td>
                                </tr>

                                <tr className="bg-surface">
                                    <td className="py-3 px-4 font-semibold text-ink">Focus Shield (Blur Masking)</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">Suppresses window.blur & visibilitychange</td>
                                    <td className="py-3 px-4 text-emerald-700 font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                                    </td>
                                    <td className="py-3 px-4 text-ink-muted">
                                        <XCircle className="w-4 h-4 text-rose-500 inline" />
                                    </td>
                                </tr>

                                <tr className="bg-cream/40">
                                    <td className="py-3 px-4 font-semibold text-ink">Zero Cursor Modification</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">Never changes cursor to crosshair or spinner</td>
                                    <td className="py-3 px-4 text-emerald-700 font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                                    </td>
                                    <td className="py-3 px-4 text-ink-muted">
                                        <XCircle className="w-4 h-4 text-rose-500 inline" />
                                    </td>
                                </tr>

                                <tr className="bg-surface">
                                    <td className="py-3 px-4 font-semibold text-ink">Unlimited Question Solves</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">No expiring credit packs or tokens</td>
                                    <td className="py-3 px-4 text-emerald-700 font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                                    </td>
                                    <td className="py-3 px-4 text-ink-muted">
                                        <XCircle className="w-4 h-4 text-rose-500 inline" />
                                    </td>
                                </tr>

                                <tr className="bg-cream/40">
                                    <td className="py-3 px-4 font-semibold text-ink">Mathpix Neural STEM OCR</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">Flawless LaTeX, integrals, and chemistry diagrams</td>
                                    <td className="py-3 px-4 text-emerald-700 font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                                    </td>
                                    <td className="py-3 px-4 text-ink-muted">
                                        <XCircle className="w-4 h-4 text-rose-500 inline" />
                                    </td>
                                </tr>

                                <tr className="bg-surface">
                                    <td className="py-3 px-4 font-semibold text-ink">Panic RAM Flush (Esc)</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">Instantly purges memory and unmounts UI</td>
                                    <td className="py-3 px-4 text-emerald-700 font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                                    </td>
                                    <td className="py-3 px-4 text-ink-muted">
                                        <XCircle className="w-4 h-4 text-rose-500 inline" />
                                    </td>
                                </tr>

                                <tr className="bg-cream/40">
                                    <td className="py-3 px-4 font-semibold text-ink">Canvas New Quizzes (Iframe)</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">Seamless execution across cross-origin iframes</td>
                                    <td className="py-3 px-4 text-emerald-700 font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                                    </td>
                                    <td className="py-3 px-4 text-ink-muted">
                                        Partial
                                    </td>
                                </tr>

                                <tr className="bg-surface">
                                    <td className="py-3 px-4 font-semibold text-ink">Solving Speed</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">Time to return accurate answer</td>
                                    <td className="py-3 px-4 text-emerald-700 font-bold">
                                        0.3s Edge Latency
                                    </td>
                                    <td className="py-3 px-4 text-ink-muted">
                                        4.5s Cloud Latency
                                    </td>
                                </tr>

                                <tr className="bg-cream/40">
                                    <td className="py-3 px-4 font-semibold text-ink">Universal LMS Coverage</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">Canvas, Blackboard, McGraw Hill, Pearson</td>
                                    <td className="py-3 px-4 text-emerald-700 font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                                    </td>
                                    <td className="py-3 px-4 text-ink-muted">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                                    </td>
                                </tr>

                                <tr className="bg-surface">
                                    <td className="py-3 px-4 font-semibold text-ink">Pricing Model</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">One-time payment vs recurring subscription</td>
                                    <td className="py-3 px-4 text-emerald-700 font-bold">
                                        $19.99 Lifetime
                                    </td>
                                    <td className="py-3 px-4 text-ink-muted">
                                        Token Packs / Monthly
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* VERIFIED STUDENT PROOF */}
            <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6">
                <div className="p-8 rounded-3xl bg-sand/40 border border-sand-dark/30 shadow-sm relative overflow-hidden">
                    <div className="flex items-center gap-1 text-amber-500 mb-4">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                        <span className="text-xs font-mono font-bold text-ink ml-2">Verified Student Switcher</span>
                    </div>
                    <blockquote className="text-base sm:text-lg text-ink font-medium leading-relaxed mb-6">
                        &quot;Quiz Wizard&apos;s 5-second delay was killing me on my 50-question 45-minute timed quizzes, and the crosshair cursor almost got me flagged on Honorlock. ExamGhost is instant, completely stealthy, and only cost $19.99 once.&quot;
                    </blockquote>
                    <div className="flex items-center justify-between border-t border-sand-dark/20 pt-4">
                        <div>
                            <div className="font-bold text-ink text-sm">Tyler M.</div>
                            <div className="text-xs text-ink-muted">University of Central Florida · Computer Engineering</div>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-mint/30 text-mint-dark font-mono text-xs font-bold">
                            A in EEL 3801
                        </div>
                    </div>
                </div>
            </section>

            {/* LATENCY BENCHMARK */}
            <section className="py-12 bg-cream border-t border-sand-dark/20">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-ink mb-6">
                        Response Latency Benchmark
                    </h3>
                    <div className="space-y-4">
                        <div>
                            <div className="flex justify-between text-xs font-bold text-ink mb-1">
                                <span>ExamGhost (Edge Inference Engine)</span>
                                <span className="text-emerald-600">0.3s</span>
                            </div>
                            <div className="w-full h-3 bg-sand-dark/20 rounded-full overflow-hidden">
                                <div className="h-full bg-emerald-500 rounded-full w-[10%]" />
                            </div>
                        </div>
                        <div>
                            <div className="flex justify-between text-xs font-bold text-ink mb-1">
                                <span>Quiz Wizard (Quiz Wizard Cloud VLM)</span>
                                <span className="text-rose-600">4.5s</span>
                            </div>
                            <div className="w-full h-3 bg-sand-dark/20 rounded-full overflow-hidden">
                                <div className="h-full bg-rose-500 rounded-full w-[80%]" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
            <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold font-display text-ink mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xs sm:text-sm text-ink-muted">
                        Everything you need to know about switching from Quiz Wizard to ExamGhost.
                    </p>
                </div>

                <div className="space-y-4">

                    <div className="p-6 rounded-2xl bg-surface border border-sand-dark/20 shadow-sm">
                        <h3 className="text-base font-bold text-ink mb-2">
                            Why is Quiz Wizard detectable on proctored exams?
                        </h3>
                        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                            Quiz Wizard changes the browser cursor to a crosshair during screen captures, which is clearly visible in proctoring video recordings. ExamGhost operates silently without any cursor changes.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-surface border border-sand-dark/20 shadow-sm">
                        <h3 className="text-base font-bold text-ink mb-2">
                            Do ExamGhost solves cost extra tokens like Quiz Wizard?
                        </h3>
                        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                            No. ExamGhost does not use tokens or execution credits. You receive 100% unlimited solves and STEM parsing for life with your $19.99 license.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-surface border border-sand-dark/20 shadow-sm">
                        <h3 className="text-base font-bold text-ink mb-2">
                            How does ExamGhost achieve 0.3s solving speed?
                        </h3>
                        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                            ExamGhost uses edge-cached neural models and local image compression rather than uploading heavy uncompressed screenshots to slow cloud APIs.
                        </p>
                    </div>
                </div>
            </section>

            {/* FINAL CTA BANNER */}
            <section className="py-16 bg-ink text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <h2 className="text-2xl sm:text-4xl font-bold font-display mb-4">
                        Ready to upgrade to undetectable exam stealth?
                    </h2>
                    <p className="text-cream/70 text-sm sm:text-base max-w-xl mx-auto mb-8">
                        Join thousands of students who traded expensive monthly subscriptions and unshielded sidebars for ExamGhost&apos;s $19.99 lifetime stealth engine.
                    </p>
                    <a
                        href="https://chromewebstore.google.com/detail/examghost"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-mint text-ink font-bold hover:bg-mint-light transition-all shadow-lg text-base"
                    >
                        <FaChrome className="w-5 h-5 text-ink" />
                        <span>Get ExamGhost Lifetime for $19.99</span>
                        <ArrowRight className="w-4 h-4" />
                    </a>
                    <div className="mt-4 text-xs text-cream/50">
                        30-Day Money-Back Guarantee · Instant Chrome Web Store Access · Lifetime Updates
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
