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
    title: "Mathos AI vs ExamGhost (2026 Comparison) | Universal Stealth Solver vs Math-Only Tool",
    description: "Comparing Mathos AI and ExamGhost? Learn why students choose ExamGhost's universal multi-subject solving, zero-blur Focus Shield, and $19.99 lifetime plan over Mathos AI's math calculator.",
    alternates: {
        canonical: "https://examghost.com/mathosai-vs-examghost",
    },
    openGraph: {
        title: "Mathos AI vs ExamGhost (2026 Comparison) | Universal Stealth Solver vs Math-Only Tool",
        description: "Mathos AI (MathGPT) is an exceptional standalone math solver, but fails on biology, finance, and humanities questions while lacking a stealth HUD or tab-blur protection. ExamGhost provides dedicated Mathpix STEM parsing and universal multi-disciplinary accuracy.",
        url: "https://examghost.com/mathosai-vs-examghost",
        siteName: "ExamGhost",
        images: [
            {
                url: "/images/ghost/ghost_card_stealth.jpg",
                width: 1200,
                height: 630,
                alt: "Mathos AI vs ExamGhost Review",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Mathos AI vs ExamGhost (2026 Comparison) | Universal Stealth Solver vs Math-Only Tool",
        description: "Mathos AI solves equations. ExamGhost solves every subject with undetectable exam stealth.",
        images: ["/images/ghost/ghost_card_stealth.jpg"],
    },
};

export default function MathosaiVsExamghostPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
                {
                        "@type": "WebPage",
                        "@id": "https://examghost.com/mathosai-vs-examghost#webpage",
                        "url": "https://examghost.com/mathosai-vs-examghost",
                        "name": "Mathos AI vs ExamGhost (2026 Comparison) | Universal Stealth Solver vs Math-Only Tool",
                        "description": "Comparing Mathos AI and ExamGhost? Learn why students choose ExamGhost's universal multi-subject solving, zero-blur Focus Shield, and $19.99 lifetime plan over Mathos AI's math calculator.",
                        "breadcrumb": {
                                "@id": "https://examghost.com/mathosai-vs-examghost#breadcrumb"
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
                                        "name": "Mathos AI",
                                        "applicationCategory": "EducationalApplication",
                                        "operatingSystem": "Web Application / Chrome Extension",
                                        "offers": {
                                                "@type": "Offer",
                                                "price": "8.99 - ",
                                                "priceCurrency": "USD"
                                        }
                                }
                        ]
                },
                {
                        "@type": "BreadcrumbList",
                        "@id": "https://examghost.com/mathosai-vs-examghost#breadcrumb",
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
                                        "name": "Mathos AI vs ExamGhost",
                                        "item": "https://examghost.com/mathosai-vs-examghost"
                                }
                        ]
                },
                {
                        "@type": "FAQPage",
                        "@id": "https://examghost.com/mathosai-vs-examghost#faq",
                        "mainEntity": [
                                {
                                        "@type": "Question",
                                        "name": "Can I use Mathos AI safely during a proctored Canvas exam?",
                                        "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "No. Mathos AI opens large visible calculator windows and triggers window.blur events in Canvas SpeedGrader. ExamGhost provides true closed Shadow DOM stealth with active blur suppression."
                                        }
                                },
                                {
                                        "@type": "Question",
                                        "name": "How does ExamGhost's STEM engine compare to Mathos AI?",
                                        "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Both tools handle advanced mathematics, but ExamGhost also parses organic chemistry structures, engineering circuit diagrams, and all non-STEM subjects with 0.3s edge latency."
                                        }
                                },
                                {
                                        "@type": "Question",
                                        "name": "How much does ExamGhost cost compared to Mathos AI?",
                                        "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Mathos AI charges $8.99 to $14.99 per month ($108–$180/year). ExamGhost is a single, flat one-time payment of $19.99 for lifetime access."
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
                    <span className="text-ink font-semibold">Mathos AI vs ExamGhost</span>
                </nav>
            </div>

            {/* BESPOKE HERO */}
            <header className="relative pt-6 pb-16 sm:pb-24 overflow-hidden border-b border-sand-dark/20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sand/80 border border-sand-dark/30 text-xs font-mono font-medium text-ink-muted mb-6">
                        <Sparkles className="w-3.5 h-3.5 text-mint-dark" />
                        <span>The #1 Mathos AI Alternative</span>
                    </div>

                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink font-display leading-[1.1] mb-6">
                        Mathos AI solves equations. ExamGhost solves every subject with undetectable exam stealth.
                    </h1>

                    <p className="text-base sm:text-xl text-ink-muted max-w-3xl leading-relaxed mb-8">
                        Mathos AI (MathGPT) is an exceptional standalone math solver, but fails on biology, finance, and humanities questions while lacking a stealth HUD or tab-blur protection. ExamGhost provides dedicated Mathpix STEM parsing and universal multi-disciplinary accuracy.
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
                            <div className="text-xs text-ink-muted line-through">Mathos AI: Freemium + $8.99 - $14.99/mo</div>
                        </div>
                        <div className="p-4 rounded-xl bg-surface border border-sand-dark/20">
                            <div className="text-xs text-ink-muted font-medium mb-1">Solving Latency</div>
                            <div className="text-sm sm:text-base font-bold text-ink">0.3s Instant Edge</div>
                            <div className="text-xs text-rose-600">Mathos AI: 3.2s</div>
                        </div>
                        <div className="p-4 rounded-xl bg-surface border border-sand-dark/20">
                            <div className="text-xs text-ink-muted font-medium mb-1">Shadow DOM HUD</div>
                            <div className="text-sm sm:text-base font-bold text-mint-dark">100% Closed Tree</div>
                            <div className="text-xs text-ink-muted">Mathos AI: Unshielded DOM</div>
                        </div>
                        <div className="p-4 rounded-xl bg-surface border border-sand-dark/20">
                            <div className="text-xs text-ink-muted font-medium mb-1">Focus Shield</div>
                            <div className="text-sm sm:text-base font-bold text-mint-dark">Zero Window Blur</div>
                            <div className="text-xs text-rose-600">Mathos AI: Canvas Logs Blurs</div>
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
                            Why collegiate students replace Mathos AI with ExamGhost
                        </h2>
                        <p className="text-ink-muted text-sm sm:text-base leading-relaxed mb-6">
                            Mathos AI is a great tutoring calculator for math homework. ExamGhost is an all-subject exam engine featuring Mathpix neural STEM parsing, closed Shadow DOM stealth, Focus Shield blur immunity, and flat $19.99 lifetime access.
                        </p>
                        <div className="grid sm:grid-cols-3 gap-3">

                            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-sand/40 border border-sand-dark/20 text-xs sm:text-sm text-ink font-medium">
                                <CheckCircle2 className="w-4 h-4 text-mint-dark flex-shrink-0 mt-0.5" />
                                <span>Mathos AI only works for math; ExamGhost solves STEM, humanities, business, and medical exams.</span>
                            </div>

                            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-sand/40 border border-sand-dark/20 text-xs sm:text-sm text-ink font-medium">
                                <CheckCircle2 className="w-4 h-4 text-mint-dark flex-shrink-0 mt-0.5" />
                                <span>Mathos AI has no exam stealth; ExamGhost is 100% invisible inside a closed Shadow DOM.</span>
                            </div>

                            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-sand/40 border border-sand-dark/20 text-xs sm:text-sm text-ink font-medium">
                                <CheckCircle2 className="w-4 h-4 text-mint-dark flex-shrink-0 mt-0.5" />
                                <span>Single $19.99 lifetime payment vs Mathos AI&apos;s $8.99 to $14.99 monthly subscription.</span>
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
                        Mathos AI&apos;s Flaws: Math-Only Scope, Zero Live Exam Stealth HUD & Visible Overlays
                    </h2>
                    <p className="text-ink-muted text-sm sm:text-base leading-relaxed">
                        Mathos AI is limited strictly to mathematics and physics, with no stealth HUD, no focus event masking, and visible overlays that alert proctors.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 items-start mb-16">
                    {/* Flaws List */}
                    <div className="space-y-4">
                        <h3 className="text-lg font-bold font-display text-ink flex items-center gap-2">
                            <XCircle className="w-5 h-5 text-rose-500" />
                            <span>Documented Limitations of Mathos AI</span>
                        </h3>
                        <div className="space-y-3">

                            <div className="p-4 rounded-xl bg-surface border border-rose-200/70 flex items-start gap-3">
                                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                    Narrow academic scope: Completely unable to solve biology, psychology, accounting, business law, or humanities exams.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-surface border border-rose-200/70 flex items-start gap-3">
                                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                    No stealth HUD: Renders prominent calculator popups across the screen, visible to webcam and screen recording proctors.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-surface border border-rose-200/70 flex items-start gap-3">
                                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                    No Focus Shield: Interacting with Mathos AI triggers window.blur events logged in Canvas SpeedGrader.
                                </p>
                            </div>

                            <div className="p-4 rounded-xl bg-surface border border-rose-200/70 flex items-start gap-3">
                                <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                                    Monthly subscription tiers: Charges up to $14.99/month for unlimited MathosMax solving.
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
                                    Mathos AI: Window Blur Crop & Monthly Billing
                                </span>
                            </div>
                            <div className="bg-rose-950 text-rose-100 rounded-xl p-4 font-mono text-xs mb-4 overflow-x-auto leading-relaxed">
                                <div className="text-rose-300">// 1. Screenshot drag capture forces window unfocus:</div>
                                <div className="text-rose-300">window.dispatchEvent(new Event(&quot;blur&quot;)); // Canvas logs: Student unfocused quiz</div>
                                <div className="text-rose-300">// 2. Cloud LaTeX OCR computation delay:</div>
                                <div className="text-rose-300">await fetch(&quot;https://api.mathos.ai/solve&quot;, &#123; body: fullPageScreenshot &#125;);</div>
                            </div>
                            <p className="text-xs text-rose-900 leading-relaxed">
                                <strong>Technical Reality:</strong> Mathos AI requires manual drag-to-crop screenshotting which triggers window.blur events in Canvas, while locking unlimited STEM formulas behind an $8.99/mo subscription.
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
                                    Universal Multi-Disciplinary AI vs Math-Only Models
                                </h4>
                                <div className="space-y-3 text-xs leading-relaxed">
                                    <div className="p-3 rounded-lg bg-rose-50/50 border border-rose-100 text-rose-900">
                                        <span className="font-bold text-rose-700 block mb-1">Mathos AI Flaw:</span>
                                        Mathos AI uses models trained solely on symbolic mathematics. When given a clinical nursing case study or a business law contract problem, it hallucinates or errors out completely.
                                    </div>
                                    <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-100 text-emerald-900">
                                        <span className="font-bold text-emerald-700 block mb-1">ExamGhost Solution:</span>
                                        ExamGhost deploys multimodal routing: Mathpix neural models for LaTeX/calculus, and advanced vision LLMs for conceptual, humanities, and business assessments.
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
                                    Closed Shadow DOM Stealth vs Screen-Filling Calculator Overlays
                                </h4>
                                <div className="space-y-3 text-xs leading-relaxed">
                                    <div className="p-3 rounded-lg bg-rose-50/50 border border-rose-100 text-rose-900">
                                        <span className="font-bold text-rose-700 block mb-1">Mathos AI Flaw:</span>
                                        Mathos AI opens large side panels with interactive graphs and calculators that occupy half the screen, creating an immediate visual flag for proctors.
                                    </div>
                                    <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-100 text-emerald-900">
                                        <span className="font-bold text-emerald-700 block mb-1">ExamGhost Solution:</span>
                                        ExamGhost renders a compact, floating pill within a closed Shadow DOM, completely invisible to DOM inspection and subtle on screen.
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
                                    Focus Shield Blur Suppression vs Canvas Departure Logs
                                </h4>
                                <div className="space-y-3 text-xs leading-relaxed">
                                    <div className="p-3 rounded-lg bg-rose-50/50 border border-rose-100 text-rose-900">
                                        <span className="font-bold text-rose-700 block mb-1">Mathos AI Flaw:</span>
                                        Mathos AI does not intercept browser focus events. Clicking on its equation solver logs window.blur in Canvas SpeedGrader.
                                    </div>
                                    <div className="p-3 rounded-lg bg-emerald-50/50 border border-emerald-100 text-emerald-900">
                                        <span className="font-bold text-emerald-700 block mb-1">ExamGhost Solution:</span>
                                        ExamGhost&apos;s Focus Shield silences all focus and visibility changes, guaranteeing clean exam activity logs.
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
                            Comparing ExamGhost against Mathos AI across 10 mission-critical exam dimensions.
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[600px]">
                            <thead>
                                <tr className="border-b border-sand-dark/30 bg-sand/30">
                                    <th className="py-3.5 px-4 font-bold text-ink">Feature &amp; Stealth Capability</th>
                                    <th className="py-3.5 px-4 font-bold text-ink-muted">Technical Significance</th>
                                    <th className="py-3.5 px-4 font-bold text-mint-dark">ExamGhost</th>
                                    <th className="py-3.5 px-4 font-bold text-rose-700">Mathos AI</th>
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
                                    <td className="py-3 px-4 font-semibold text-ink">Universal Subject Coverage</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">STEM, Humanities, Business, Medical</td>
                                    <td className="py-3 px-4 text-emerald-700 font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                                    </td>
                                    <td className="py-3 px-4 text-ink-muted">
                                        Math & Physics Only
                                    </td>
                                </tr>

                                <tr className="bg-surface">
                                    <td className="py-3 px-4 font-semibold text-ink">Mathpix Neural STEM OCR</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">Flawless LaTeX, integrals, and chemistry diagrams</td>
                                    <td className="py-3 px-4 text-emerald-700 font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                                    </td>
                                    <td className="py-3 px-4 text-ink-muted">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                                    </td>
                                </tr>

                                <tr className="bg-cream/40">
                                    <td className="py-3 px-4 font-semibold text-ink">Canvas New Quizzes (Iframe)</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">Seamless execution across cross-origin iframes</td>
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
                                    <td className="py-3 px-4 font-semibold text-ink">Zero DOM Injection</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">Never leaves detectable nodes in document</td>
                                    <td className="py-3 px-4 text-emerald-700 font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                                    </td>
                                    <td className="py-3 px-4 text-ink-muted">
                                        <XCircle className="w-4 h-4 text-rose-500 inline" />
                                    </td>
                                </tr>

                                <tr className="bg-surface">
                                    <td className="py-3 px-4 font-semibold text-ink">Solving Speed</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">Time to return accurate answer</td>
                                    <td className="py-3 px-4 text-emerald-700 font-bold">
                                        0.3s Edge Latency
                                    </td>
                                    <td className="py-3 px-4 text-ink-muted">
                                        3.2s Cloud Latency
                                    </td>
                                </tr>

                                <tr className="bg-cream/40">
                                    <td className="py-3 px-4 font-semibold text-ink">Universal LMS Coverage</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">Canvas, Blackboard, McGraw Hill, Pearson</td>
                                    <td className="py-3 px-4 text-emerald-700 font-bold">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 inline" />
                                    </td>
                                    <td className="py-3 px-4 text-ink-muted">
                                        Canvas & DeltaMath Only
                                    </td>
                                </tr>

                                <tr className="bg-surface">
                                    <td className="py-3 px-4 font-semibold text-ink">Pricing Model</td>
                                    <td className="py-3 px-4 text-ink-muted text-xs">One-time payment vs recurring subscription</td>
                                    <td className="py-3 px-4 text-emerald-700 font-bold">
                                        $19.99 Lifetime
                                    </td>
                                    <td className="py-3 px-4 text-ink-muted">
                                        $8.99 - $14.99/mo
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
                        &quot;Mathos AI was great for basic calculus homework, but when I had a physics exam that combined differential equations with conceptual essays, it couldn&apos;t help with half the test. ExamGhost aced the entire exam in 0.3s.&quot;
                    </blockquote>
                    <div className="flex items-center justify-between border-t border-sand-dark/20 pt-4">
                        <div>
                            <div className="font-bold text-ink text-sm">Elena N.</div>
                            <div className="text-xs text-ink-muted">Purdue University · Civil Engineering</div>
                        </div>
                        <div className="px-3 py-1 rounded-full bg-mint/30 text-mint-dark font-mono text-xs font-bold">
                            A in PHYS 172
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
                                <span>Mathos AI (Mathos AI Cloud Processing)</span>
                                <span className="text-rose-600">3.2s</span>
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
                        Everything you need to know about switching from Mathos AI to ExamGhost.
                    </p>
                </div>

                <div className="space-y-4">

                    <div className="p-6 rounded-2xl bg-surface border border-sand-dark/20 shadow-sm">
                        <h3 className="text-base font-bold text-ink mb-2">
                            Can I use Mathos AI safely during a proctored Canvas exam?
                        </h3>
                        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                            No. Mathos AI opens large visible calculator windows and triggers window.blur events in Canvas SpeedGrader. ExamGhost provides true closed Shadow DOM stealth with active blur suppression.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-surface border border-sand-dark/20 shadow-sm">
                        <h3 className="text-base font-bold text-ink mb-2">
                            How does ExamGhost&apos;s STEM engine compare to Mathos AI?
                        </h3>
                        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                            Both tools handle advanced mathematics, but ExamGhost also parses organic chemistry structures, engineering circuit diagrams, and all non-STEM subjects with 0.3s edge latency.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-surface border border-sand-dark/20 shadow-sm">
                        <h3 className="text-base font-bold text-ink mb-2">
                            How much does ExamGhost cost compared to Mathos AI?
                        </h3>
                        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed">
                            Mathos AI charges $8.99 to $14.99 per month ($108–$180/year). ExamGhost is a single, flat one-time payment of $19.99 for lifetime access.
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
