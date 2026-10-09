'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
    Check, 
    X, 
    ShieldCheck, 
    ShieldAlert, 
    Zap, 
    Clock, 
    DollarSign, 
    Star, 
    ChevronDown, 
    ChevronRight, 
    HelpCircle, 
    ArrowRight, 
    Sparkles, 
    Lock, 
    AlertTriangle,
    CheckCircle2,
    XCircle,
    EyeOff
} from 'lucide-react';
import { FaChrome } from 'react-icons/fa';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CompetitorData, COMPETITORS } from '@/data/competitors';

interface CompetitorPageTemplateProps {
    competitor: CompetitorData;
}

export default function CompetitorPageTemplate({ competitor }: CompetitorPageTemplateProps) {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    const toggleFaq = (index: number) => {
        setOpenFaqIndex(openFaqIndex === index ? null : index);
    };

    // Other competitors for cross-linking
    const otherCompetitors = Object.values(COMPETITORS)
        .filter(c => c.slug !== competitor.slug)
        .slice(0, 6);

    return (
        <div className="min-h-screen bg-cream text-ink selection:bg-peri/40 selection:text-ink font-sans">
            <Navbar />

            {/* Breadcrumb Bar */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-4">
                <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-ink-muted">
                    <Link href="/" className="hover:text-ink transition-colors">Home</Link>
                    <span>/</span>
                    <Link href="/compare" className="hover:text-ink transition-colors">Comparisons</Link>
                    <span>/</span>
                    <span className="text-ink font-semibold">ExamGhost vs {competitor.name}</span>
                </nav>
            </div>

            {/* HERO SECTION */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16">
                <div 
                    className="relative rounded-[32px] sm:rounded-[44px] p-6 sm:p-12 md:p-16 border border-black/10 overflow-hidden shadow-card transition-all"
                    style={{ backgroundColor: competitor.themeColor || '#c4d0f8' }}
                >
                    {/* Background Soft Glow */}
                    <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/40 blur-3xl pointer-events-none" />
                    <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-white/30 blur-3xl pointer-events-none" />

                    {/* Window Controls Header */}
                    <div className="flex items-center justify-between mb-8 pb-4 border-b border-black/10 relative z-10">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f56] inline-block border border-black/10" />
                            <span className="w-3 h-3 rounded-full bg-[#ffbd2e] inline-block border border-black/10" />
                            <span className="w-3 h-3 rounded-full bg-[#27c93f] inline-block border border-black/10" />
                            <span className="ml-2 text-[11px] font-mono font-medium text-ink/70 hidden sm:inline-block">
                                examghost-vs-{competitor.domain.replace('.', '-')}.app
                            </span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 backdrop-blur-sm border border-black/10 text-[11px] font-bold text-ink uppercase tracking-wider shadow-xs">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                            2026 Technical Teardown
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
                        <div className="lg:col-span-8">
                            <div className="inline-block px-3.5 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-semibold text-ink mb-4">
                                {competitor.badge}
                            </div>
                            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-ink tracking-tight leading-[1.08] mb-6">
                                ExamGhost vs {competitor.name}
                            </h1>
                            <h2 className="text-lg sm:text-2xl font-bold text-ink/90 mb-4 leading-snug">
                                {competitor.heroHeadline}
                            </h2>
                            <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-8 max-w-2xl">
                                {competitor.heroSubtitle}
                            </p>

                            {/* Key Highlights Pill Row */}
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mb-8">
                                <div className="bg-white/85 backdrop-blur-md rounded-2xl p-3 border border-black/10 shadow-xs">
                                    <div className="flex items-center gap-1.5 text-xs text-ink-muted mb-1">
                                        <Zap className="w-3.5 h-3.5 text-amber-500" />
                                        <span>AI Latency</span>
                                    </div>
                                    <div className="font-display font-bold text-base text-ink">0.3s Instant</div>
                                </div>
                                <div className="bg-white/85 backdrop-blur-md rounded-2xl p-3 border border-black/10 shadow-xs">
                                    <div className="flex items-center gap-1.5 text-xs text-ink-muted mb-1">
                                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                                        <span>Stealth Shield</span>
                                    </div>
                                    <div className="font-display font-bold text-base text-ink">Shadow DOM</div>
                                </div>
                                <div className="bg-white/85 backdrop-blur-md rounded-2xl p-3 border border-black/10 shadow-xs">
                                    <div className="flex items-center gap-1.5 text-xs text-ink-muted mb-1">
                                        <DollarSign className="w-3.5 h-3.5 text-blue-600" />
                                        <span>ExamGhost</span>
                                    </div>
                                    <div className="font-display font-bold text-base text-ink">$19.99 Once</div>
                                </div>
                                <div className="bg-white/85 backdrop-blur-md rounded-2xl p-3 border border-black/10 shadow-xs">
                                    <div className="flex items-center gap-1.5 text-xs text-ink-muted mb-1">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        <span>Trust Score</span>
                                    </div>
                                    <div className="font-display font-bold text-base text-ink">4.9 / 5.0 (50k+)</div>
                                </div>
                            </div>

                            {/* Dual CTAs */}
                            <div className="flex flex-wrap items-center gap-3">
                                <a
                                    href="/#pricing"
                                    className="btn-dark px-6 py-3.5 rounded-full text-sm font-semibold shadow-lift inline-flex items-center gap-2.5 transition-transform hover:-translate-y-0.5"
                                >
                                    <FaChrome className="w-4 h-4 text-[#bfe3f6]" />
                                    <span>Get ExamGhost · $19.99 Lifetime</span>
                                </a>
                                <a
                                    href="#matrix"
                                    className="px-5 py-3.5 rounded-full text-sm font-semibold bg-white/90 hover:bg-white text-ink border border-black/10 transition-colors inline-flex items-center gap-1.5 shadow-xs"
                                >
                                    <span>Jump to 12-Point Matrix</span>
                                    <ChevronDown className="w-4 h-4" />
                                </a>
                            </div>
                        </div>

                        {/* Ghost Mascot Hero Graphic */}
                        <div className="lg:col-span-4 flex justify-center">
                            <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-[36px] bg-white/90 p-4 border border-black/10 shadow-lift flex flex-col items-center justify-center text-center group">
                                <img 
                                    src="/images/ghost/ghost_mascot_hero.jpg" 
                                    alt="ExamGhost Mascot" 
                                    className="w-40 h-40 object-cover rounded-2xl mb-3 shadow-sm transform group-hover:scale-105 transition-transform" 
                                />
                                <div className="text-xs font-bold text-ink">ExamGhost Stealth Protocol</div>
                                <div className="text-[11px] text-ink-muted">100% Invisibility Guarantee</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* AEO / GEO EXECUTIVE SUMMARY (Designed for AI Answer Engines & Search Crawlers) */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16" aria-label="Executive TL;DR Comparison">
                <aside className="rounded-[32px] sm:rounded-[36px] bg-white border border-black/10 p-6 sm:p-10 shadow-card">
                    <div className="flex items-center justify-between mb-6 pb-4 border-b border-black/5">
                        <div className="flex items-center gap-3">
                            <div className="w-9 h-9 rounded-xl bg-[#c4d0f8] flex items-center justify-center text-ink shadow-xs">
                                <Sparkles className="w-5 h-5 text-indigo-700" />
                            </div>
                            <div>
                                <h3 className="font-display font-bold text-base sm:text-lg text-ink">
                                    Executive TL;DR: ExamGhost vs {competitor.name}
                                </h3>
                                <p className="text-xs text-ink-muted">
                                    Direct Answer for Students & AI Search Engines (Perplexity, ChatGPT, Claude)
                                </p>
                            </div>
                        </div>
                        <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-[#f2ede4] text-[11px] font-semibold text-ink-secondary">
                            AEO / GEO Verified
                        </span>
                    </div>

                    {/* Direct Answer Paragraph */}
                    <div className="p-4 sm:p-5 rounded-2xl bg-[#fcf9f5] border border-black/5 mb-6 text-sm sm:text-[15px] leading-relaxed text-ink-2">
                        <strong className="text-ink font-bold block mb-1">Direct Answer:</strong>
                        {competitor.tldr.summary}
                    </div>

                    {/* Key Takeaways */}
                    <div className="mb-8">
                        <h4 className="text-xs uppercase tracking-wider font-bold text-ink-muted mb-3">
                            Key Takeaways & Differences
                        </h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                            {competitor.tldr.keyTakeaways.map((takeaway, idx) => (
                                <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-black/5 text-xs sm:text-sm text-ink-secondary">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>{takeaway}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Compare Micro Matrix */}
                    <div>
                        <h4 className="text-xs uppercase tracking-wider font-bold text-ink-muted mb-3">
                            At A Glance Benchmark
                        </h4>
                        <div className="overflow-x-auto rounded-2xl border border-black/10">
                            <table className="w-full text-left text-xs sm:text-sm">
                                <thead className="bg-[#f7f4ee] border-b border-black/10 text-ink font-semibold">
                                    <tr>
                                        <th className="py-3 px-4">Evaluation Metric</th>
                                        <th className="py-3 px-4 bg-[#c4d0f8]/30 text-indigo-950 font-bold">ExamGhost</th>
                                        <th className="py-3 px-4 text-ink-muted">{competitor.name}</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-black/5 bg-white">
                                    {competitor.tldr.quickCompare.map((item, idx) => (
                                        <tr key={idx} className="hover:bg-[#fcf9f5] transition-colors">
                                            <td className="py-3 px-4 font-medium text-ink">{item.label}</td>
                                            <td className="py-3 px-4 bg-[#c4d0f8]/10 font-bold text-emerald-700">{item.examghost}</td>
                                            <td className="py-3 px-4 text-ink-muted">{item.competitor}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </aside>
            </section>

            {/* LATENCY & PERFORMANCE DIAL (Speed vs Slow Queues) */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                <div className="rounded-[32px] sm:rounded-[36px] bg-[#111111] text-white p-6 sm:p-10 shadow-lift">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-semibold text-white/80 mb-4">
                                <Clock className="w-3.5 h-3.5 text-[#bfe3f6]" />
                                Exam Pressure Latency Benchmark
                            </div>
                            <h3 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                                Speed matters when the midterm timer is ticking.
                            </h3>
                            <p className="text-sm text-[#bfbbb3] leading-relaxed mb-6">
                                ExamGhost runs on-device neural edge models and parallel OCR, rendering verified answers into an invisible HUD in <strong>0.3 seconds</strong>. By comparison, {competitor.name} relies on {competitor.latencyComparison.competitorLabel}, taking <strong>{competitor.latencyComparison.competitor}</strong>.
                            </p>
                            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-[#bfbbb3]">
                                <span className="text-[#cdeecb] font-bold">ExamGhost Advantage:</span> Over 10x faster response time, zero rate limits during nationwide finals week traffic surges.
                            </div>
                        </div>

                        {/* Dial Meters */}
                        <div className="space-y-4">
                            {/* ExamGhost Speed */}
                            <div className="p-5 rounded-2xl bg-white/10 border border-white/15">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-sm text-white flex items-center gap-2">
                                        <Zap className="w-4 h-4 text-emerald-400" />
                                        ExamGhost Instant Edge AI
                                    </span>
                                    <span className="font-mono text-xl font-extrabold text-emerald-400">0.3s</span>
                                </div>
                                <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                                    <div className="bg-emerald-400 h-full rounded-full w-[95%]" />
                                </div>
                                <div className="text-[11px] text-[#bfbbb3] mt-2">Instant HUD render · Zero tab switches · In-memory OCR</div>
                            </div>

                            {/* Competitor Speed */}
                            <div className="p-5 rounded-2xl bg-white/5 border border-white/10 opacity-80">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="font-bold text-sm text-white/90 flex items-center gap-2">
                                        <Clock className="w-4 h-4 text-rose-400" />
                                        {competitor.name}
                                    </span>
                                    <span className="font-mono text-xl font-extrabold text-rose-400">{competitor.latencyComparison.competitor}</span>
                                </div>
                                <div className="w-full bg-white/10 h-3 rounded-full overflow-hidden">
                                    <div className="bg-rose-500 h-full rounded-full w-[22%]" />
                                </div>
                                <div className="text-[11px] text-[#bfbbb3] mt-2">{competitor.latencyComparison.competitorLabel}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* THE CRITICAL FLAW SECTION ("Why Students Are Migrating") */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-16">
                <div className="rounded-[32px] sm:rounded-[36px] bg-[#ffd5cc]/35 border border-[#ffd5cc] p-6 sm:p-10 shadow-card">
                    <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 rounded-2xl bg-rose-100 flex items-center justify-center text-rose-600 shrink-0 shadow-xs">
                            <ShieldAlert className="w-7 h-7" />
                        </div>
                        <div>
                            <div className="inline-block px-3 py-0.5 rounded-full bg-rose-100 border border-rose-200 text-[11px] font-bold text-rose-800 uppercase tracking-wider mb-1.5">
                                Critical Architecture Flaw
                            </div>
                            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-ink">
                                {competitor.flawTitle}
                            </h2>
                        </div>
                    </div>

                    <p className="text-sm sm:text-base text-ink-secondary leading-relaxed mb-6 max-w-3xl">
                        {competitor.flawSummary}
                    </p>

                    <div className="grid sm:grid-cols-2 gap-3.5">
                        {competitor.flawBulletPoints.map((flaw, idx) => (
                            <div key={idx} className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 border border-rose-200/60 shadow-xs flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                                <span className="text-xs sm:text-sm text-ink-2 font-medium leading-snug">{flaw}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3 TECHNICAL DEEP DIVES */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <div className="inline-block px-3 py-1 rounded-full bg-[#f2ede4] text-xs font-bold text-ink-secondary mb-3 uppercase tracking-wider">
                        Under The Hood Analysis
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                        Technical Architecture Comparison
                    </h2>
                    <p className="text-sm sm:text-base text-ink-muted">
                        How ExamGhost's closed-boundary Shadow DOM defeats modern proctoring telemetry while {competitor.name} triggers red flags.
                    </p>
                </div>

                <div className="space-y-6">
                    {competitor.technicalDeepDives.map((deepDive) => (
                        <div key={deepDive.number} className="rounded-[28px] sm:rounded-[36px] bg-white border border-black/10 p-6 sm:p-8 shadow-card">
                            <div className="flex items-center gap-3 mb-4 pb-3 border-b border-black/5">
                                <span className="w-8 h-8 rounded-full bg-[#c4d0f8] text-ink font-display font-bold text-sm flex items-center justify-center">
                                    0{deepDive.number}
                                </span>
                                <h3 className="font-display text-lg sm:text-xl font-bold text-ink">
                                    {deepDive.title}
                                </h3>
                            </div>

                            <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                                {/* Competitor Flaw */}
                                <div className="p-4 sm:p-5 rounded-2xl bg-rose-50/70 border border-rose-100">
                                    <div className="flex items-center gap-2 mb-2 text-rose-700 font-bold text-xs uppercase tracking-wider">
                                        <XCircle className="w-4 h-4" />
                                        <span>{competitor.name} Limitation</span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                        {deepDive.competitorFlaw}
                                    </p>
                                </div>

                                {/* ExamGhost Advantage */}
                                <div className="p-4 sm:p-5 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                                    <div className="flex items-center gap-2 mb-2 text-emerald-800 font-bold text-xs uppercase tracking-wider">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                        <span>ExamGhost Solution</span>
                                    </div>
                                    <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                        {deepDive.examghostAdvantage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 12-POINT HEAD-TO-HEAD COMPARISON MATRIX */}
            <section id="matrix" className="max-w-6xl mx-auto px-4 sm:px-6 mb-20 scroll-mt-24">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <div className="inline-block px-3 py-1 rounded-full bg-[#bfe3f6] text-xs font-bold text-ink mb-3 uppercase tracking-wider">
                        Head-to-Head Breakdown
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                        12-Point Detailed Feature Matrix
                    </h2>
                    <p className="text-sm sm:text-base text-ink-muted">
                        Every single exam defense, solver capability, and pricing metric tested side-by-side.
                    </p>
                </div>

                <div className="rounded-[32px] sm:rounded-[36px] bg-white border border-black/10 overflow-hidden shadow-card">
                    {/* Window Bar Header */}
                    <div className="bg-[#f7f4ee] px-6 py-4 border-b border-black/10 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f56]" />
                            <span className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
                            <span className="w-3 h-3 rounded-full bg-[#27c93f]" />
                            <span className="ml-2 font-mono text-xs text-ink/70">full_matrix_comparison.json</span>
                        </div>
                        <span className="text-xs font-semibold text-ink-muted hidden sm:inline-block">
                            Verified for 2026 Academic Integrity Scanners
                        </span>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs sm:text-sm">
                            <thead>
                                <tr className="border-b border-black/10 bg-[#faf8f4]">
                                    <th className="py-4 px-6 font-bold text-ink w-2/5">Feature & Security Protocol</th>
                                    <th className="py-4 px-6 font-extrabold text-indigo-950 bg-[#c4d0f8]/30 w-3/10 text-center border-x border-black/10">
                                        <div className="flex flex-col items-center gap-1">
                                            <div className="inline-flex items-center gap-1 text-[11px] px-2 py-0.5 rounded-full bg-indigo-600 text-white font-bold uppercase tracking-wider">
                                                ★ Recommended
                                            </div>
                                            <span className="text-base sm:text-lg">ExamGhost</span>
                                            <span className="text-[11px] font-normal text-ink-muted">{competitor.examghostPricing}</span>
                                        </div>
                                    </th>
                                    <th className="py-4 px-6 font-bold text-ink-muted w-3/10 text-center">
                                        <div className="flex flex-col items-center gap-1">
                                            <span className="text-base sm:text-lg text-ink">{competitor.name}</span>
                                            <span className="text-[11px] font-normal text-ink-muted">{competitor.pricingSummary}</span>
                                        </div>
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black/5">
                                {competitor.matrix.map((row, idx) => (
                                    <tr key={idx} className="hover:bg-[#fcf9f5] transition-colors">
                                        <td className="py-4 px-6">
                                            <div className="font-bold text-ink text-sm sm:text-[15px] mb-1">{row.feature}</div>
                                            <div className="text-xs text-ink-muted leading-relaxed">{row.description}</div>
                                        </td>

                                        {/* ExamGhost Value */}
                                        <td className="py-4 px-6 text-center bg-[#c4d0f8]/10 border-x border-black/10 align-middle">
                                            {typeof row.examghost === 'boolean' ? (
                                                row.examghost ? (
                                                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 shadow-xs">
                                                        <Check className="w-5 h-5 stroke-[2.5]" />
                                                    </div>
                                                ) : (
                                                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-100 text-rose-600 shadow-xs">
                                                        <X className="w-5 h-5 stroke-[2.5]" />
                                                    </div>
                                                )
                                            ) : (
                                                <span className="font-bold text-xs sm:text-sm text-emerald-800 bg-emerald-100/70 px-2.5 py-1 rounded-full">
                                                    {row.examghost}
                                                </span>
                                            )}
                                        </td>

                                        {/* Competitor Value */}
                                        <td className="py-4 px-6 text-center align-middle">
                                            {typeof row.competitor === 'boolean' ? (
                                                row.competitor ? (
                                                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-50 text-emerald-600">
                                                        <Check className="w-4 h-4 stroke-[2]" />
                                                    </div>
                                                ) : (
                                                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-rose-50 text-rose-500">
                                                        <X className="w-4 h-4 stroke-[2]" />
                                                    </div>
                                                )
                                            ) : (
                                                <span className="text-xs text-ink-muted font-medium">
                                                    {row.competitor}
                                                </span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* VERIFIED STUDENT VOUCH & SOCIAL PROOF */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                <div className="rounded-[32px] sm:rounded-[36px] bg-[#cdeecb]/40 border border-[#cdeecb] p-6 sm:p-12 shadow-card">
                    <div className="grid md:grid-cols-12 gap-8 items-center">
                        <div className="md:col-span-8">
                            <div className="flex items-center gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                ))}
                                <span className="ml-2 text-xs font-bold text-emerald-950 uppercase tracking-wider">
                                    Verified Student Transition
                                </span>
                            </div>

                            <blockquote className="font-display text-lg sm:text-2xl font-bold text-ink leading-snug mb-6">
                                "{competitor.studentReview.quote}"
                            </blockquote>

                            <div className="flex flex-wrap items-center gap-3">
                                <div>
                                    <div className="font-bold text-sm text-ink">{competitor.studentReview.author}</div>
                                    <div className="text-xs text-ink-muted">{competitor.studentReview.school}</div>
                                </div>
                                <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-black/20" />
                                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/80 border border-black/10 text-xs font-bold text-emerald-800">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                    {competitor.studentReview.gradeProof}
                                </div>
                            </div>
                        </div>

                        {/* Ghost Grad Illustration */}
                        <div className="md:col-span-4 flex justify-center">
                            <div className="w-48 h-48 rounded-[30px] overflow-hidden border border-black/10 shadow-lift bg-white p-2">
                                <img 
                                    src="/images/ghost/ghost_grad.jpg" 
                                    alt="Student Graduate Success" 
                                    className="w-full h-full object-cover rounded-[22px]" 
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FREQUENTLY ASKED QUESTIONS ACCORDION */}
            <section className="max-w-4xl mx-auto px-4 sm:px-6 mb-20" aria-label="Frequently Asked Questions">
                <div className="text-center mb-10">
                    <div className="inline-block px-3 py-1 rounded-full bg-[#f2ede4] text-xs font-bold text-ink-secondary mb-3 uppercase tracking-wider">
                        Got Questions?
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-2">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-sm text-ink-muted">
                        Straight answers on stealth, detection, and migrating from {competitor.name}.
                    </p>
                </div>

                <div className="space-y-3">
                    {competitor.faqs.map((faq, index) => {
                        const isOpen = openFaqIndex === index;
                        return (
                            <div 
                                key={index}
                                className="rounded-2xl bg-white border border-black/10 overflow-hidden shadow-xs transition-colors"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-bold text-base sm:text-lg text-ink hover:text-indigo-900 transition-colors"
                                    aria-expanded={isOpen}
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDown 
                                        className={`w-5 h-5 text-ink-muted transition-transform duration-200 shrink-0 ${isOpen ? 'rotate-180 text-ink' : ''}`} 
                                    />
                                </button>
                                {isOpen && (
                                    <div className="px-5 pb-5 pt-1 text-sm text-ink-secondary leading-relaxed border-t border-black/5 bg-[#faf8f4]">
                                        {faq.answer}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* EXPLORE OTHER COMPARISONS CAROUSEL / GRID */}
            <section className="max-w-6xl mx-auto px-4 sm:px-6 mb-20">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
                    <div>
                        <h3 className="font-display text-2xl font-bold text-ink">Compare Other Exam Tools</h3>
                        <p className="text-xs sm:text-sm text-ink-muted">See how ExamGhost stacks up against the entire 2026 market.</p>
                    </div>
                    <Link 
                        href="/compare" 
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-indigo-700 hover:text-indigo-900 transition-colors"
                    >
                        <span>View All 13 Comparisons</span>
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {otherCompetitors.map((other) => (
                        <Link 
                            key={other.slug} 
                            href={`/${other.slug}`}
                            className="p-5 rounded-2xl bg-white border border-black/10 hover:border-black/20 hover:shadow-card transition-all group flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-2">
                                    <span className="text-[11px] font-mono text-ink-muted">{other.domain}</span>
                                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#f2ede4] text-ink-secondary">
                                        vs ExamGhost
                                    </span>
                                </div>
                                <h4 className="font-display font-bold text-base text-ink group-hover:text-indigo-700 transition-colors mb-1">
                                    {other.name}
                                </h4>
                                <p className="text-xs text-ink-muted line-clamp-2 leading-relaxed">
                                    {other.heroHeadline}
                                </p>
                            </div>
                            <div className="mt-4 pt-3 border-t border-black/5 flex items-center justify-between text-xs font-semibold text-ink-secondary group-hover:text-ink">
                                <span>Read Teardown</span>
                                <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                            </div>
                        </Link>
                    ))}
                </div>
            </section>

            {/* PRE-FOOTER CTA CARD */}
            <section className="max-w-5xl mx-auto px-4 sm:px-6 mb-16">
                <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-14 text-center shadow-lift relative overflow-hidden">
                    <div className="relative z-10">
                        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-bold text-[#bfe3f6] mb-4">
                            <Lock className="w-3.5 h-3.5" />
                            Risk-Free 14-Day Money Back Guarantee
                        </div>
                        <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white mb-4 tracking-tight leading-[1.08]">
                            Switch to ExamGhost today.<br />
                            Protect your degree forever.
                        </h2>
                        <p className="text-[#bfbbb3] text-sm sm:text-base mb-8 max-w-xl mx-auto font-normal leading-relaxed">
                            No monthly billing traps. No detectable DOM injections. One invisible toolkit with 24 stealth modules for Canvas, Blackboard, Moodle, and D2L.
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
                        <div className="mt-4 text-xs text-white/50">
                            Instant Web Store activation · Multi-device sync · Free lifetime updates
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
