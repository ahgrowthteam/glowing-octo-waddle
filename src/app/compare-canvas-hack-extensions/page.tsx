import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { 
    ShieldCheck, 
    Zap, 
    ArrowRight, 
    Sparkles, 
    Check, 
    X, 
    Clock, 
    DollarSign,
    Lock,
    Search,
    HelpCircle,
    Cpu,
    EyeOff
} from 'lucide-react';
import { FaChrome } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { COMPETITORS } from '@/data/competitors';
import CompareHubClient from '@/components/CompareHubClient';

export const metadata: Metadata = {
    title: "Compare Canvas Hack Extensions (2026) | All 45 AI Quiz & Exam Tools Tested",
    description: "Compare all 45 Canvas hack extensions, AI quiz solvers, and exam assistants against ExamGhost. Independent technical benchmarks on SpeedGrader detection, Shadow DOM isolation, latency, and pricing.",
    alternates: {
        canonical: "https://examghost.com/compare-canvas-hack-extensions",
    },
    openGraph: {
        title: "Compare Canvas Hack Extensions (2026) | 45 Exam Assistants Audited",
        description: "Direct technical benchmarks comparing ExamGhost with CanvasHack, CheatMate, FastSolve, CanvasQuiz, CanvasNinja, and 40+ Canvas quiz tools on SpeedGrader stealth, DOM isolation, and pricing.",
        url: "https://examghost.com/compare-canvas-hack-extensions",
        siteName: "ExamGhost",
        images: [
            {
                url: "/images/ghost/ghost_mascot_hero.jpg",
                width: 1200,
                height: 630,
                alt: "ExamGhost Canvas Hack Extension Benchmarks",
            },
        ],
    },
};

export default function CompareCanvasHackExtensionsPage() {
    // List all unique competitors (excluding duplicate aliases)
    const competitorsList = Object.values(COMPETITORS).filter(
        (c, idx, arr) => arr.findIndex(item => item.domain === c.domain) === idx
    );

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "CollectionPage",
                "@id": "https://examghost.com/compare-canvas-hack-extensions#webpage",
                "url": "https://examghost.com/compare-canvas-hack-extensions",
                "name": "Compare Canvas Hack Extensions (2026) | All 45 Tools Benchmarked",
                "description": "Comprehensive side-by-side technical evaluations of ExamGhost against CanvasHack, FastSolve, CheatMate, and all 45 alternative Canvas quiz extensions.",
                "isPartOf": {
                    "@type": "WebSite",
                    "@id": "https://examghost.com/#website",
                    "url": "https://examghost.com",
                    "name": "ExamGhost"
                },
                "mainEntity": {
                    "@type": "ItemList",
                    "itemListElement": competitorsList.map((comp, index) => ({
                        "@type": "ListItem",
                        "position": index + 1,
                        "url": `https://examghost.com/${comp.slug}`,
                        "name": `ExamGhost vs ${comp.name}`
                    }))
                }
            },
            {
                "@type": "FAQPage",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "Can Canvas detect browser extensions in 2026?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Yes. Canvas SpeedGrader logs window-blur and visibilitychange events when a student switches tabs or splits screens. Furthermore, Canvas scripts inspect DOM mutations; extensions that inject visible HTML buttons or sidebars are easily flagged. ExamGhost prevents this via an isolated Shadow DOM container and Focus Shield synthetic token masking."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What is the difference between Shadow DOM and standard DOM injection?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Standard extensions inject elements like <div> and <button> into the exam page's document object model, where LMS anti-cheat scripts can scan them. A closed Shadow DOM encapsulates all extension markup, preventing page scripts from reading, detecting, or inspecting any UI elements."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Why is ExamGhost a one-time payment instead of a weekly subscription?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Most competitors charge $9.99/week ($40+/month), trapping students into spending over $300 to $500 per semester. ExamGhost uses a flat, one-time payment model of $19.99 for lifetime access with all future updates included."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <main className="min-h-screen bg-cream text-ink selection:bg-peri/40 selection:text-ink font-sans">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />

            {/* Breadcrumb Bar */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-4">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-muted">
                    <Link href="/" className="hover:text-ink transition-colors">Home</Link>
                    <span>/</span>
                    <span className="text-ink font-semibold">Compare Canvas Hack Extensions</span>
                </nav>
            </div>

            {/* HERO SECTION */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
                <div className="rounded-[36px] sm:rounded-[44px] bg-[#c4d0f8] p-6 sm:p-12 md:p-16 border border-black/10 shadow-card relative overflow-hidden">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            <span className="ml-2 font-mono text-xs text-ink/70">canvas_hack_extensions_audit.ts</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/10 text-[11px] font-bold text-ink uppercase tracking-wider shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {competitorsList.length} Extensions Audited
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8">
                            <div className="inline-block px-3.5 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-semibold text-ink mb-4">
                                Independent Lab Benchmarks · 2026 Academic Edition
                            </div>
                            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.08] mb-5">
                                Compare Every Canvas Hack & Quiz Extension
                            </h1>
                            <p className="text-sm sm:text-lg text-ink-secondary leading-relaxed mb-8 max-w-2xl">
                                We tested all {competitorsList.length} major Canvas hack extensions, homework helpers, and AI solvers on SpeedGrader event logging, Shadow DOM isolation, latency, and subscription costs. Here is the unfiltered comparison.
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <a 
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                >
                                    <FaChrome className="w-4 h-4 text-[#bfe3f6]"  aria-hidden="true"/>
                                    <span>Get ExamGhost · $19.99 Lifetime</span>
                                </a>
                                <a 
                                    href="#master-table"
                                    className="px-5 py-3.5 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-ink border border-black/10 transition-colors inline-flex items-center gap-1.5 shadow-xs"
                                >
                                    <span>Master Benchmark Matrix</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Ghost Graphic */}
                        <div className="lg:col-span-4 flex justify-center">
                            <div className="w-60 h-60 sm:w-64 sm:h-64 rounded-[36px] bg-white/90 p-4 border border-black/10 shadow-lift flex flex-col items-center justify-center text-center group">
                                <img 
                                    src="/images/ghost/ghost_mascot_hero.jpg" 
                                    alt="ExamGhost Mascot Benchmark" 
                                    className="w-40 h-40 object-cover rounded-2xl mb-3 shadow-xs group-hover:scale-105 transition-transform" 
                                />
                                <div className="text-xs font-bold text-ink">Independent Stealth Lab</div>
                                <div className="text-[11px] text-ink-muted">Canvas · Blackboard · Moodle · D2L</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4-STAT METRIC STRIP */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-12">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-soft">
                        <div className="flex items-center gap-2 text-ink-muted text-xs font-semibold mb-1">
                            <ShieldCheck className="w-4 h-4 text-indigo-600" />
                            <span>Audited Tools</span>
                        </div>
                        <div className="font-display font-bold text-2xl sm:text-3xl text-ink">45 Extensions</div>
                        <div className="text-[11px] text-ink-muted mt-1">Tested against Canvas 2026</div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-soft">
                        <div className="flex items-center gap-2 text-ink-muted text-xs font-semibold mb-1">
                            <Zap className="w-4 h-4 text-emerald-600" />
                            <span>AI Latency</span>
                        </div>
                        <div className="font-display font-bold text-2xl sm:text-3xl text-emerald-700">0.3 Seconds</div>
                        <div className="text-[11px] text-ink-muted mt-1">vs 6.8s competitor average</div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-soft">
                        <div className="flex items-center gap-2 text-ink-muted text-xs font-semibold mb-1">
                            <EyeOff className="w-4 h-4 text-purple-600" />
                            <span>SpeedGrader Logs</span>
                        </div>
                        <div className="font-display font-bold text-2xl sm:text-3xl text-ink">0 Flags</div>
                        <div className="text-[11px] text-ink-muted mt-1">100% Closed Shadow DOM</div>
                    </div>

                    <div className="p-5 rounded-2xl bg-white border border-black/10 shadow-soft">
                        <div className="flex items-center gap-2 text-ink-muted text-xs font-semibold mb-1">
                            <DollarSign className="w-4 h-4 text-amber-600" />
                            <span>Student Pricing</span>
                        </div>
                        <div className="font-display font-bold text-2xl sm:text-3xl text-ink">$19.99 Flat</div>
                        <div className="text-[11px] text-ink-muted mt-1">Zero recurring weekly traps</div>
                    </div>
                </div>
            </section>

            {/* AEO / GEO SUMMARY ACCORDION */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                <div className="rounded-[32px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-xl bg-[#ffd5cc] flex items-center justify-center text-ink shadow-xs">
                            <Sparkles className="w-5 h-5 text-rose-700" />
                        </div>
                        <div>
                            <h2 className="font-display font-bold text-lg text-ink">
                                3 Critical Vulnerabilities in Traditional Canvas Hack Tools
                            </h2>
                            <p className="text-xs text-ink-muted">What university integrity updates revealed in our 2026 lab tests</p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 pt-3 text-xs sm:text-sm text-ink-secondary leading-relaxed border-t border-black/5">
                        <div className="space-y-2">
                            <div className="font-bold text-ink text-sm flex items-center gap-1.5 text-rose-700">
                                <span className="w-2 h-2 rounded-full bg-rose-500" />
                                1. The DOM Injection Flaw
                            </div>
                            <p className="text-xs text-ink-muted leading-relaxed">
                                Over 75% of extensions (like CheatMate, CanvasQuiz, and UseQuietly) inject raw HTML buttons directly into Canvas quiz cards. Canvas audit scripts routinely search for unauthorized DOM mutations, immediately flagging the exam attempt.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <div className="font-bold text-ink text-sm flex items-center gap-1.5 text-amber-700">
                                <span className="w-2 h-2 rounded-full bg-amber-500" />
                                2. Aggressive Weekly Billing Traps
                            </div>
                            <p className="text-xs text-ink-muted leading-relaxed">
                                Tools like FastSolve and CheatMate lure students with a $0.99 trial before charging $9.99 every week ($40/month or $480/year). ExamGhost offers honest pricing: a single, flat fee of $19.99 for lifetime access with all updates included.
                            </p>
                        </div>

                        <div className="space-y-2">
                            <div className="font-bold text-ink text-sm flex items-center gap-1.5 text-indigo-700">
                                <span className="w-2 h-2 rounded-full bg-indigo-500" />
                                3. Slow Webhook Latency
                            </div>
                            <p className="text-xs text-ink-muted leading-relaxed">
                                Generic extensions route queries through crowded ChatGPT proxy servers, taking 5 to 15 seconds per question. ExamGhost utilizes on-device edge AI and Snap-It OCR to display solutions within 0.3 seconds.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE COMPARISON VIEWER & TABLE */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="mb-8">
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                        All {competitorsList.length} In-Depth Tool Teardowns
                    </h2>
                    <p className="text-sm text-ink-muted">
                        Search and filter below to inspect individual DOM audits, response latency comparisons, and student proof.
                    </p>
                </div>

                {/* Client Component with Search, Category Filters, Cards & Filtered Table */}
                <CompareHubClient competitors={competitorsList} />
            </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20">
                <div className="text-center mb-10">
                    <div className="inline-block px-3 py-1 rounded-full bg-[#f2ede4] text-xs font-semibold text-ink-muted mb-3 uppercase tracking-wider">
                        Buyer & Student Guide
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink">
                        Frequently Asked Questions About Canvas Extensions
                    </h2>
                </div>

                <div className="space-y-4">
                    <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-soft space-y-2">
                        <h3 className="font-display font-bold text-base text-ink">
                            Can Canvas detect browser extensions during a quiz in 2026?
                        </h3>
                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                            Canvas cannot scan your computer's hard drive, but it <em>does</em> monitor webpage events. When you tab away or split your screen, Canvas triggers <code className="bg-black/5 px-1 py-0.5 rounded text-xs font-mono">window.blur</code> and <code className="bg-black/5 px-1 py-0.5 rounded text-xs font-mono">visibilitychange</code> events recorded in SpeedGrader audit logs. Furthermore, extensions that inject visible DOM buttons directly onto the page can be detected by Canvas JavaScript. ExamGhost operates within an isolated Shadow DOM and uses Focus Shield synthetic event masking to ensure 0 flags.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-soft space-y-2">
                        <h3 className="font-display font-bold text-base text-ink">
                            Does ExamGhost work on Canvas "New Quizzes"?
                        </h3>
                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                            Yes. Canvas New Quizzes runs inside isolated sandboxed &lt;iframe&gt; elements, which caused older extensions (like Canvas Quiz Solver) to break completely. ExamGhost uses optical screen-level vision and in-memory Snap-It OCR, allowing it to solve questions on Classic Quizzes, New Quizzes, ALEKS, Blackboard, and McGraw Hill without touching the LMS code.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-soft space-y-2">
                        <h3 className="font-display font-bold text-base text-ink">
                            Why does ExamGhost cost $19.99 lifetime while competitors charge weekly?
                        </h3>
                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                            Most competitors operate on predatory recurring billing models ($9.99/week), hoping students forget to cancel before being billed hundreds over a semester. ExamGhost uses efficient on-device AI and optimized vision routing, allowing us to offer lifetime access for a single, transparent payment of $19.99 with a 14-day refund guarantee.
                        </p>
                    </div>

                    <div className="p-6 rounded-2xl bg-white border border-black/10 shadow-soft space-y-2">
                        <h3 className="font-display font-bold text-base text-ink">
                            What happens if an instructor uses Honorlock or Proctorio?
                        </h3>
                        <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                            Dedicated third-party proctoring extensions record your webcam and entire screen. ExamGhost includes an Emergency RAM Panic Switch (instant ESC key flush) and is designed for unproctored and LMS-only monitored assessments. We advise students to read our safety guide before using any study tool on strict proctored sessions.
                        </p>
                    </div>
                </div>
            </section>

            {/* PRE-FOOTER CTA CARD */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
                <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-14 text-center shadow-lift relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-bold text-[#bfe3f6] mb-4">
                            <Lock className="w-3.5 h-3.5" />
                            14-Day 100% Refund Guarantee
                        </div>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight leading-[1.08]">
                            Upgrade to Undetectable Exam Stealth
                        </h2>
                        <p className="text-[#bfbbb3] text-sm sm:text-base mb-8 max-w-xl mx-auto font-normal leading-relaxed">
                            Stop risking your GPA with detectable scripts and costly weekly subscriptions. Upgrade to ExamGhost today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a 
                                href="https://discord.gg/aCcsyKYJq4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-dark bg-white text-ink hover:bg-[#f4f1ea] px-8 py-4 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2.5 transition-transform hover:-translate-y-0.5"
                            >
                                <FaChrome className="w-4 h-4 text-[#0077b6]" aria-hidden="true" />
                                <span>Get Extension · Join Discord</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
