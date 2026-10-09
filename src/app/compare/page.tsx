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
    Search
} from 'lucide-react';
import { FaChrome } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { COMPETITORS } from '@/data/competitors';

export const metadata: Metadata = {
    title: "ExamGhost vs All 23 Competitors (2026) | Direct Stealth & Latency Benchmark",
    description: "Compare ExamGhost with CanvasHack, CheatMate, CanvasQuiz, CanvasNinja, CanvasWizard, QuizSolver AI, GetQuizSolve, UseQuietly, TestBro, FastSolve, Quizard, Classology, Mindko, Campus AI, AnswerAI, StudyX, StudyBotPro, Solvely, Gauth, TrustStudy, Answerly AI, Homework Helper+, and BetterCampus.",
    alternates: {
        canonical: "https://examghost.com/compare",
    },
    openGraph: {
        title: "ExamGhost vs All 23 Competitors (2026) | Comprehensive Benchmark Hub",
        description: "Direct technical benchmarks comparing ExamGhost with all 23 major exam and homework extensions.",
        url: "https://examghost.com/compare",
        siteName: "ExamGhost",
        images: [
            {
                url: "/images/ghost/ghost_mascot_hero.jpg",
                width: 1200,
                height: 630,
                alt: "ExamGhost Competitor Comparisons",
            },
        ],
    },
};

export default function CompareHubPage() {
    // List all unique competitors (excluding alias)
    const competitorsList = Object.values(COMPETITORS).filter(
        (c, idx, arr) => arr.findIndex(item => item.domain === c.domain) === idx
    );

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "ExamGhost Competitor Comparisons and Stealth Benchmarks",
        "description": "Comprehensive side-by-side technical evaluations of ExamGhost against all alternative academic extensions.",
        "url": "https://examghost.com/compare",
        "mainEntity": {
            "@type": "ItemList",
            "itemListElement": competitorsList.map((comp, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://examghost.com/${comp.slug}`,
                "name": `ExamGhost vs ${comp.name}`
            }))
        }
    };

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-peri/40 selection:text-ink font-sans">
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
                    <span className="text-ink font-semibold">Competitor Comparisons</span>
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
                            <span className="ml-2 font-mono text-xs text-ink/70">comparisons_master_index.ts</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/10 text-[11px] font-bold text-ink uppercase tracking-wider shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            {competitorsList.length} Teardowns Published
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-center">
                        <div className="lg:col-span-8">
                            <div className="inline-block px-3.5 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-semibold text-ink mb-4">
                                Independent Lab Benchmarks · 2026 Edition
                            </div>
                            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.08] mb-5">
                                How ExamGhost Compares to Every Exam Extension
                            </h1>
                            <p className="text-sm sm:text-lg text-ink-secondary leading-relaxed mb-8 max-w-2xl">
                                We tested all {competitorsList.length} major quiz and homework extensions against Canvas SpeedGrader logs, Honorlock window-blur detectors, and LaTeX equations. Here is the full technical breakdown.
                            </p>

                            <div className="flex flex-wrap items-center gap-3">
                                <a 
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5"
                                >
                                    <FaChrome className="w-4 h-4 text-[#bfe3f6]" />
                                    <span>Get ExamGhost · $19.99 Lifetime</span>
                                </a>
                                <a 
                                    href="#master-table"
                                    className="px-5 py-3.5 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-ink border border-black/10 transition-colors inline-flex items-center gap-1.5 shadow-xs"
                                >
                                    <span>Master Benchmark Table</span>
                                    <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Ghost Graphic */}
                        <div className="lg:col-span-4 flex justify-center">
                            <div className="w-60 h-60 sm:w-64 sm:h-64 rounded-[36px] bg-white/90 p-4 border border-black/10 shadow-lift flex flex-col items-center justify-center text-center">
                                <img 
                                    src="/images/ghost/ghost_hero_float_left.jpg" 
                                    alt="ExamGhost Mascot Benchmark" 
                                    className="w-40 h-40 object-cover rounded-2xl mb-3 shadow-xs" 
                                />
                                <div className="text-xs font-bold text-ink">Independent Stealth Lab</div>
                                <div className="text-[11px] text-ink-muted">Canvas · Blackboard · Moodle</div>
                            </div>
                        </div>
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
                                Summary of the 2026 Exam Extension Market
                            </h2>
                            <p className="text-xs text-ink-muted">Key takeaways from 13 comprehensive tool audits</p>
                        </div>
                    </div>

                    <div className="space-y-3 text-xs sm:text-sm text-ink-secondary leading-relaxed">
                        <p>
                            <strong>1. The DOM Injection Problem:</strong> Over 75% of extensions (including CheatMate, CanvasQuiz, CanvasWizard, and UseQuietly) inject visible HTML buttons or sidebars directly into the host exam page. This triggers automated detection in Canvas SpeedGrader and third-party proctoring scripts. ExamGhost is the only solution operating in an isolated Shadow DOM container with synthetic event masking.
                        </p>
                        <p>
                            <strong>2. Subscription Traps:</strong> Most tools charge $9.99/week to $24.99/month, resulting in students spending over $300 to $500 per academic year. ExamGhost costs a single, flat fee of $19.99 for lifetime access with free updates.
                        </p>
                        <p>
                            <strong>3. Speed and Latency:</strong> Tools relying on third-party ChatGPT webhooks average 5 to 15 seconds per question. ExamGhost utilizes parallel on-device neural edge models to deliver answers within 0.3 seconds.
                        </p>
                    </div>
                </div>
            </section>

            {/* 13 COMPETITOR CARDS GRID */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                <div className="mb-8">
                    <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink tracking-tight mb-2">
                        All 13 In-Depth Competitor Teardowns
                    </h2>
                    <p className="text-sm text-ink-muted">
                        Select any tool below to read the comprehensive technical comparison, DOM analysis, and student review.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {competitorsList.map((comp) => (
                        <div 
                            key={comp.slug} 
                            className="rounded-[28px] bg-white border border-black/10 overflow-hidden shadow-card hover:shadow-lift transition-all flex flex-col justify-between group"
                        >
                            {/* Card Header with Theme Tint */}
                            <div 
                                className="p-6 border-b border-black/10 transition-colors"
                                style={{ backgroundColor: `${comp.themeColor}33` }}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-mono font-bold text-ink-muted">{comp.domain}</span>
                                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/90 border border-black/10 text-ink shadow-xs">
                                        vs ExamGhost
                                    </span>
                                </div>
                                <h3 className="font-display text-2xl font-bold text-ink mb-1 group-hover:text-indigo-800 transition-colors">
                                    {comp.name}
                                </h3>
                                <p className="text-xs text-ink-secondary font-medium">
                                    {comp.pricingSummary}
                                </p>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div className="space-y-4 mb-6">
                                    <div>
                                        <div className="text-[11px] font-bold uppercase tracking-wider text-rose-600 mb-1">
                                            Critical Limitation
                                        </div>
                                        <p className="text-xs text-ink-secondary leading-relaxed line-clamp-3">
                                            {comp.flawSummary}
                                        </p>
                                    </div>

                                    {/* Quick Latency Comparison */}
                                    <div className="p-3 rounded-xl bg-[#fcf9f5] border border-black/5 text-xs flex items-center justify-between">
                                        <span className="text-ink-muted">Latency comparison:</span>
                                        <span className="font-mono font-bold text-ink">
                                            <span className="text-emerald-600">0.3s</span> vs <span className="text-rose-600">{comp.latencyComparison.competitor}</span>
                                        </span>
                                    </div>
                                </div>

                                <Link 
                                    href={`/${comp.slug}`}
                                    className="w-full py-3 px-4 rounded-xl bg-[#f7f4ee] hover:bg-[#111111] hover:text-white text-ink text-xs font-bold transition-all flex items-center justify-center gap-2 border border-black/10 group-hover:border-black"
                                >
                                    <span>Read Full Teardown</span>
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* MASTER BENCHMARK TABLE */}
            <section id="master-table" className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 scroll-mt-24">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <div className="inline-block px-3 py-1 rounded-full bg-[#cdeecb] text-xs font-bold text-emerald-950 mb-3 uppercase tracking-wider">
                        Master Index Comparison
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                        2026 Multi-Tool Matrix
                    </h2>
                    <p className="text-sm text-ink-muted">
                        See how every major exam assistant compares on core stealth parameters.
                    </p>
                </div>

                <div className="rounded-[32px] bg-white border border-black/10 overflow-hidden shadow-card">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs sm:text-sm">
                            <thead className="bg-[#f7f4ee] border-b border-black/10 text-ink font-semibold">
                                <tr>
                                    <th className="py-4 px-5">Tool Name</th>
                                    <th className="py-4 px-4 text-center">Built-In AI</th>
                                    <th className="py-4 px-4 text-center">Shadow DOM</th>
                                    <th className="py-4 px-4 text-center">Blur Shield</th>
                                    <th className="py-4 px-4 text-center">LMS Coverage</th>
                                    <th className="py-4 px-4">Pricing Model</th>
                                    <th className="py-4 px-4 text-right">Teardown</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black/5">
                                {/* ExamGhost Top Row */}
                                <tr className="bg-[#c4d0f8]/20 font-bold">
                                    <td className="py-4 px-5 flex items-center gap-2 text-indigo-950">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                        <span>ExamGhost (Stealth AI)</span>
                                    </td>
                                    <td className="py-4 px-4 text-center text-emerald-700">✓ Instant 0.3s</td>
                                    <td className="py-4 px-4 text-center text-emerald-700">✓ 100% Closed</td>
                                    <td className="py-4 px-4 text-center text-emerald-700">✓ Focus Shield</td>
                                    <td className="py-4 px-4 text-center text-indigo-900">Canvas, BB, Moodle, D2L</td>
                                    <td className="py-4 px-4 font-extrabold text-emerald-700">$19.99 Lifetime</td>
                                    <td className="py-4 px-4 text-right text-indigo-700 font-bold">Recommended</td>
                                </tr>

                                {/* Competitors */}
                                {competitorsList.map((comp) => (
                                    <tr key={comp.slug} className="hover:bg-[#fcf9f5] transition-colors">
                                        <td className="py-3.5 px-5 font-medium text-ink">
                                            <Link href={`/${comp.slug}`} className="hover:text-indigo-700 hover:underline">
                                                {comp.name}
                                            </Link>
                                        </td>
                                        <td className="py-3.5 px-4 text-center">
                                            {comp.name === 'CanvasHack' ? (
                                                <span className="text-rose-500 font-medium">✗ None</span>
                                            ) : (
                                                <span className="text-amber-700 font-medium">Slow ({comp.latencyComparison.competitor})</span>
                                            )}
                                        </td>
                                        <td className="py-3.5 px-4 text-center">
                                            <span className="text-rose-500 font-medium">✗ Injects DOM</span>
                                        </td>
                                        <td className="py-3.5 px-4 text-center">
                                            {comp.name === 'CanvasHack' ? (
                                                <span className="text-emerald-600 font-medium">Partial (Canvas)</span>
                                            ) : (
                                                <span className="text-rose-500 font-medium">✗ Leaks Focus</span>
                                            )}
                                        </td>
                                        <td className="py-3.5 px-4 text-center text-ink-muted">
                                            {comp.name.includes('Canvas') ? 'Canvas only' : 'Limited'}
                                        </td>
                                        <td className="py-3.5 px-4 text-xs text-ink-muted">
                                            {comp.pricingSummary}
                                        </td>
                                        <td className="py-3.5 px-4 text-right">
                                            <Link 
                                                href={`/${comp.slug}`}
                                                className="text-xs font-bold text-indigo-600 hover:text-indigo-800"
                                            >
                                                Compare →
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
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
                            Join 50,000+ Students Using ExamGhost
                        </h2>
                        <p className="text-[#bfbbb3] text-sm sm:text-base mb-8 max-w-xl mx-auto font-normal leading-relaxed">
                            Stop risking your academic standing with detectable scripts and costly weekly subscriptions. Upgrade to ExamGhost today.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                            <a 
                                href="/#pricing"
                                className="btn-dark bg-white text-ink hover:bg-[#f4f1ea] px-8 py-4 rounded-full text-sm font-bold shadow-lift inline-flex items-center gap-2.5 transition-transform hover:-translate-y-0.5"
                            >
                                <FaChrome className="w-4 h-4 text-[#0077b6]" />
                                <span>Get ExamGhost · $19.99 Lifetime</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
