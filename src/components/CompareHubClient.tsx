'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { 
    Search, 
    ArrowRight, 
    ShieldCheck, 
    Zap, 
    DollarSign, 
    AlertTriangle, 
    Check, 
    X, 
    ChevronDown, 
    SlidersHorizontal,
    Sparkles,
    Flame
} from 'lucide-react';
import { FaChrome } from 'react-icons/fa';
import { CompetitorData } from '@/data/competitors';

interface CompareHubClientProps {
    competitors: CompetitorData[];
}

export default function CompareHubClient({ competitors }: CompareHubClientProps) {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<'all' | 'canvas' | 'solvers' | 'study' | 'traps'>('all');
    const [sortBy, setSortBy] = useState<'default' | 'latency' | 'az' | 'za'>('default');

    // Categorization logic
    const categorizedList = useMemo(() => {
        return competitors.filter(comp => {
            // Category filter
            if (selectedCategory === 'canvas') {
                return comp.name.toLowerCase().includes('canvas') || comp.domain.toLowerCase().includes('canvas');
            }
            if (selectedCategory === 'solvers') {
                const solvers = ['fastsolve', 'quizard', 'quietly', 'testbro', 'quizsolve', 'classology', 'mindko', 'collegetools', 'college tools', 'campus', 'answerai', 'solvely', 'gauth', 'truststudy', 'answerly', 'questionai', 'studyfox', 'apex', 'quizonator', 'rightclick', 'cheatpal', 'doublecheck', 'double check', 'quizper', 'mylab'];
                return solvers.some(s => comp.name.toLowerCase().includes(s) || comp.domain.toLowerCase().includes(s));
            }
            if (selectedCategory === 'study') {
                const studyTools = ['brainly', 'coursehero', 'knowt', 'cramly', 'wolfram', 'homeworkify', 'quizplus', 'studymonkey', 'studyx', 'schoolcheats', 'transcript', 'asksia', 'easysb', 'smarterbook'];
                return studyTools.some(s => comp.name.toLowerCase().includes(s) || comp.domain.toLowerCase().includes(s));
            }
            if (selectedCategory === 'traps') {
                return comp.pricingSummary.toLowerCase().includes('/wk') || 
                       comp.pricingSummary.toLowerCase().includes('/mo') || 
                       comp.pricingSummary.toLowerCase().includes('$149') ||
                       comp.pricingSummary.toLowerCase().includes('trial') ||
                       comp.pricingSummary.toLowerCase().includes('subscription');
            }
            return true;
        }).filter(comp => {
            // Search query filter
            if (!searchQuery.trim()) return true;
            const q = searchQuery.toLowerCase();
            return (
                comp.name.toLowerCase().includes(q) ||
                comp.domain.toLowerCase().includes(q) ||
                comp.flawSummary.toLowerCase().includes(q) ||
                comp.pricingSummary.toLowerCase().includes(q)
            );
        }).sort((a, b) => {
            if (sortBy === 'az') return a.name.localeCompare(b.name);
            if (sortBy === 'za') return b.name.localeCompare(a.name);
            if (sortBy === 'latency') {
                const parseLatency = (val: string) => {
                    const match = val.match(/[\d.]+/);
                    return match ? parseFloat(match[0]) : 99;
                };
                return parseLatency(b.latencyComparison.competitor) - parseLatency(a.latencyComparison.competitor);
            }
            return 0;
        });
    }, [competitors, selectedCategory, searchQuery, sortBy]);

    return (
        <div className="w-full">
            {/* Interactive Search & Filter Controls */}
            <div className="bg-white rounded-3xl p-5 sm:p-7 border border-black/10 shadow-soft mb-10">
                <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
                    {/* Search Input */}
                    <div className="relative flex-1">
                        <Search className="w-4 h-4 text-ink-muted absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input 
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Search by tool name (e.g. CanvasHack, FastSolve, CheatMate)..."
                            className="w-full pl-11 pr-4 py-3 rounded-2xl bg-[#fcf9f5] border border-black/10 text-sm text-ink placeholder:text-ink-muted focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-black/30 transition-all"
                        />
                        {searchQuery && (
                            <button 
                                onClick={() => setSearchQuery('')}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-ink-muted hover:text-ink bg-black/5 hover:bg-black/10 px-2 py-0.5 rounded-full"
                            >
                                Clear
                            </button>
                        )}
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2 shrink-0">
                        <SlidersHorizontal className="w-4 h-4 text-ink-muted" />
                        <label htmlFor="sort-select" className="text-xs text-ink-muted font-medium">Sort by:</label>
                        <select 
                            id="sort-select"
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as any)}
                            className="text-xs font-semibold bg-[#fcf9f5] border border-black/10 rounded-xl px-3 py-2.5 text-ink focus:outline-none focus:ring-2 focus:ring-black/10 cursor-pointer"
                        >
                            <option value="default">Featured / Default</option>
                            <option value="latency">Highest Latency (Worst)</option>
                            <option value="az">Alphabetical (A - Z)</option>
                            <option value="za">Alphabetical (Z - A)</option>
                        </select>
                    </div>
                </div>

                {/* Filter Category Pills */}
                <div className="flex items-center justify-between flex-wrap gap-2 pt-2 border-t border-black/5">
                    <div className="flex items-center flex-wrap gap-2">
                        <button
                            onClick={() => setSelectedCategory('all')}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                                selectedCategory === 'all'
                                    ? 'bg-[#111111] text-white shadow-xs'
                                    : 'bg-[#fcf9f5] text-ink-muted hover:text-ink hover:bg-black/5'
                            }`}
                        >
                            All ({competitors.length})
                        </button>
                        <button
                            onClick={() => setSelectedCategory('canvas')}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                                selectedCategory === 'canvas'
                                    ? 'bg-[#111111] text-white shadow-xs'
                                    : 'bg-[#fcf9f5] text-ink-muted hover:text-ink hover:bg-black/5'
                            }`}
                        >
                            Canvas Specific
                        </button>
                        <button
                            onClick={() => setSelectedCategory('solvers')}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                                selectedCategory === 'solvers'
                                    ? 'bg-[#111111] text-white shadow-xs'
                                    : 'bg-[#fcf9f5] text-ink-muted hover:text-ink hover:bg-black/5'
                            }`}
                        >
                            AI Solvers
                        </button>
                        <button
                            onClick={() => setSelectedCategory('study')}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                                selectedCategory === 'study'
                                    ? 'bg-[#111111] text-white shadow-xs'
                                    : 'bg-[#fcf9f5] text-ink-muted hover:text-ink hover:bg-black/5'
                            }`}
                        >
                            Study Platforms
                        </button>
                        <button
                            onClick={() => setSelectedCategory('traps')}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                                selectedCategory === 'traps'
                                    ? 'bg-[#111111] text-white shadow-xs'
                                    : 'bg-[#fcf9f5] text-ink-muted hover:text-ink hover:bg-black/5'
                            }`}
                        >
                            Subscription Traps
                        </button>
                    </div>

                    <div className="text-xs font-medium text-ink-muted">
                        Showing <span className="font-bold text-ink">{categorizedList.length}</span> of {competitors.length} tools
                    </div>
                </div>
            </div>

            {/* Competitor Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
                {categorizedList.map((comp) => {
                    // Normalize latency for visual gauge comparison
                    const compLatNum = parseFloat(comp.latencyComparison.competitor.replace(/[^\d.]/g, '')) || 5;
                    const latencyPercent = Math.min(100, Math.max(15, (compLatNum / 15) * 100));

                    return (
                        <div 
                            key={comp.slug} 
                            className="rounded-[28px] bg-white border border-black/10 overflow-hidden shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                        >
                            {/* Card Header with Theme Tint */}
                            <div 
                                className="p-6 border-b border-black/10 transition-colors relative"
                                style={{ backgroundColor: `${comp.themeColor}30` }}
                            >
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-[11px] font-mono font-bold text-ink-muted bg-white/70 px-2 py-0.5 rounded-md border border-black/5">
                                        {comp.domain}
                                    </span>
                                    <span className="text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-white/90 border border-black/10 text-ink shadow-xs">
                                        vs ExamGhost
                                    </span>
                                </div>
                                <h3 className="font-display text-2xl font-bold text-ink mb-1 group-hover:text-indigo-800 transition-colors">
                                    {comp.name}
                                </h3>
                                <div className="flex items-center gap-2 mt-2">
                                    <span className="text-xs font-semibold text-rose-900 bg-rose-50 border border-rose-200/60 px-2.5 py-0.5 rounded-full">
                                        {comp.pricingSummary}
                                    </span>
                                </div>
                            </div>

                            {/* Card Body */}
                            <div className="p-6 flex-1 flex flex-col justify-between">
                                <div className="space-y-4 mb-6">
                                    {/* Critical Flaw Alert */}
                                    <div className="p-3.5 rounded-2xl bg-rose-500/5 border border-rose-500/10">
                                        <div className="text-[10px] font-bold uppercase tracking-wider text-rose-900 mb-1 flex items-center gap-1">
                                            <AlertTriangle className="w-3 h-3" />
                                            <span>SpeedGrader / System Risk</span>
                                        </div>
                                        <p className="text-xs text-ink-secondary leading-relaxed line-clamp-3">
                                            {comp.flawSummary}
                                        </p>
                                    </div>

                                    {/* Visual Latency Gauge */}
                                    <div className="p-3.5 rounded-2xl bg-[#fcf9f5] border border-black/5 space-y-2">
                                        <div className="flex items-center justify-between text-xs font-medium">
                                            <span className="text-ink-muted">Response Benchmark</span>
                                            <span className="font-mono text-[11px] font-bold text-ink">
                                                ExamGhost (0.3s) vs {comp.latencyComparison.competitor}
                                            </span>
                                        </div>
                                        <div className="space-y-1">
                                            <div className="flex items-center gap-2 text-[10px] font-mono">
                                                <span className="w-16 font-bold text-emerald-800">ExamGhost</span>
                                                <div className="flex-1 h-2 bg-black/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '8%' }} />
                                                </div>
                                                <span className="text-emerald-800 font-bold">0.3s</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-[10px] font-mono">
                                                <span className="w-16 text-rose-800 truncate">{comp.name}</span>
                                                <div className="flex-1 h-2 bg-black/5 rounded-full overflow-hidden">
                                                    <div className="h-full bg-rose-500 rounded-full" style={{ width: `${latencyPercent}%` }} />
                                                </div>
                                                <span className="text-rose-800 font-bold">{comp.latencyComparison.competitor}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <Link 
                                    href={`/${comp.slug}`}
                                    className="w-full py-3 px-4 rounded-xl bg-[#f7f4ee] hover:bg-[#111111] hover:text-white text-ink text-xs font-bold transition-all flex items-center justify-center gap-2 border border-black/10 group-hover:border-black shadow-xs"
                                >
                                    <span>Read Full Teardown &amp; DOM Audit</span>
                                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    );
                })}
            </div>

            {categorizedList.length === 0 && (
                <div className="text-center py-16 bg-white rounded-3xl border border-black/10 p-8 mb-20 shadow-soft">
                    <p className="text-lg font-bold text-ink mb-2">No matching extension found</p>
                    <p className="text-xs text-ink-muted mb-4">Try clearing your search query or switching categories.</p>
                    <button 
                        onClick={() => { setSearchQuery(''); setSelectedCategory('all'); }}
                        className="btn-dark px-5 py-2 text-xs font-semibold"
                    >
                        Reset Filters
                    </button>
                </div>
            )}

            {/* MASTER MATRIX TABLE (Synced with Filters) */}
            <section id="master-table" className="mb-20 scroll-mt-24">
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <div className="inline-block px-3.5 py-1 rounded-full bg-[#cdeecb] text-xs font-bold text-emerald-950 mb-3 uppercase tracking-wider">
                        Master 12-Point Technical Matrix
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-ink tracking-tight mb-3">
                        2026 Stealth &amp; Architecture Matrix
                    </h2>
                    <p className="text-sm text-ink-muted">
                        Filtering {categorizedList.length} extensions by DOM isolation, blur shield, and SpeedGrader immunity.
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
                                    <th className="py-4 px-4 text-right">Audit</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-black/5">
                                {/* ExamGhost Top Row */}
                                <tr className="bg-[#c4d0f8]/30 font-bold border-b-2 border-indigo-200">
                                    <td className="py-4 px-5 flex items-center gap-2 text-indigo-950">
                                        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                        <span className="text-sm">ExamGhost (Stealth Suite)</span>
                                    </td>
                                    <td className="py-4 px-4 text-center text-emerald-800">✓ Instant 0.3s</td>
                                    <td className="py-4 px-4 text-center text-emerald-800">✓ 100% Isolated</td>
                                    <td className="py-4 px-4 text-center text-emerald-800">✓ Focus Shield</td>
                                    <td className="py-4 px-4 text-center text-indigo-950 font-semibold">Canvas, BB, Moodle, D2L</td>
                                    <td className="py-4 px-4 font-extrabold text-emerald-800 text-xs sm:text-sm">50 Free · $19/mo · $99/yr · $199 Life</td>
                                    <td className="py-4 px-4 text-right text-indigo-900 font-bold">Recommended</td>
                                </tr>

                                {/* Competitors */}
                                {categorizedList.map((comp) => (
                                    <tr key={comp.slug} className="hover:bg-[#fcf9f5] transition-colors">
                                        <td className="py-3.5 px-5 font-medium text-ink">
                                            <Link href={`/${comp.slug}`} className="hover:text-indigo-800 hover:underline flex items-center gap-1.5">
                                                <span>{comp.name}</span>
                                            </Link>
                                        </td>
                                        <td className="py-3.5 px-4 text-center">
                                            {['CanvasHack', 'Canvas Crack', 'BetterCampus', 'Canvas Scholar', 'Canvas Quiz Loader', 'AskSia'].includes(comp.name) ? (
                                                <span className="text-rose-800 font-bold">✗ No In-Page AI</span>
                                            ) : ['MyLab Solver', 'Homeworkify', 'TrustStudy'].includes(comp.name) ? (
                                                <span className="text-rose-800 font-bold">✗ Offline / Dead</span>
                                            ) : (
                                                <span className="text-amber-800 font-bold">Slow ({comp.latencyComparison.competitor})</span>
                                            )}
                                        </td>
                                        <td className="py-3.5 px-4 text-center">
                                            <span className="text-rose-800 font-bold">✗ Injects DOM / Tab</span>
                                        </td>
                                        <td className="py-3.5 px-4 text-center">
                                            {['CanvasHack', 'Canvas Crack', 'Cheatpal'].includes(comp.name) ? (
                                                <span className="text-emerald-800 font-semibold">Partial (Canvas)</span>
                                            ) : (
                                                <span className="text-rose-800 font-bold">✗ Leaks Focus</span>
                                            )}
                                        </td>
                                        <td className="py-3.5 px-4 text-center text-ink-muted">
                                            {comp.name.includes('Canvas') || comp.name === 'Quizonator' || comp.name === 'AskSia'
                                                ? 'Canvas only'
                                                : comp.name === 'MyLab Solver'
                                                ? 'Pearson only (Dead)'
                                                : comp.name === 'EasySB & SmarterBook'
                                                ? 'SmartBook only'
                                                : 'Limited'}
                                        </td>
                                        <td className="py-3.5 px-4 text-xs font-medium text-ink-muted">
                                            {comp.pricingSummary}
                                        </td>
                                        <td className="py-3.5 px-4 text-right">
                                            <Link 
                                                href={`/${comp.slug}`}
                                                className="text-xs font-bold text-indigo-800 hover:text-indigo-950"
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
        </div>
    );
}
