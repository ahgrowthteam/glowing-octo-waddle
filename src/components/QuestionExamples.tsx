'use client';

import React, { useState } from 'react';
import { MousePointer2, Check, Sparkles, RefreshCw, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function QuestionExamples() {
    const [mcState, setMcState] = useState<string | null>(null);
    const [msState, setMsState] = useState<string[]>([]);
    const [fibState, setFibState] = useState('');
    const [matchState, setMatchState] = useState<Record<string, string>>({});

    const handleAutoSolve = () => {
        setMcState('C');
        setMsState(['A', 'C']);
        setFibState('1');
        setMatchState({
            'CO2': 'Reactant',
            'H2O': 'Electron donor',
            'O2': 'Byproduct',
            'C6H12O6': 'Product'
        });
    };

    const handleReset = () => {
        setMcState(null);
        setMsState([]);
        setFibState('');
        setMatchState({});
    };

    const getMcStyles = (opt: string) => {
        if (mcState === opt) {
            if (opt === 'C') return 'bg-emerald-500/15 border-emerald-500/60 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.15)]';
            return 'bg-rose-500/15 border-rose-500/50 text-rose-300';
        }
        return 'bg-white/[0.02] border-white/10 hover:border-white/20 text-slate-300 hover:bg-white/[0.04]';
    };

    const getMsStyles = (opt: string) => {
        if (msState.includes(opt)) {
            if (opt === 'A' || opt === 'C') return 'bg-emerald-500/15 border-emerald-500/60 text-emerald-200 shadow-[0_0_15px_rgba(16,185,129,0.15)]';
            return 'bg-rose-500/15 border-rose-500/50 text-rose-300';
        }
        return 'bg-white/[0.02] border-white/10 hover:border-white/20 text-slate-300 hover:bg-white/[0.04]';
    };

    const matchOptions = ['Reactant', 'Electron donor', 'Byproduct', 'Product'];
    const getMatchStyles = (key: string, val: string) => {
        if (!val) return 'bg-[#090f1d] border-white/10 text-slate-300 hover:border-white/20';
        const correctMap: Record<string, string> = {
            'CO2': 'Reactant',
            'H2O': 'Electron donor',
            'O2': 'Byproduct',
            'C6H12O6': 'Product'
        };
        if (correctMap[key] === val) return 'bg-emerald-500/15 border-emerald-500/60 text-emerald-300';
        return 'bg-rose-500/15 border-rose-500/50 text-rose-300';
    };

    return (
        <section id="question-types" className="py-24 sm:py-32 bg-[#080d1a] text-white relative overflow-hidden border-t border-white/[0.06]">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-600/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 mb-4">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-[11px] font-bold text-blue-400 tracking-widest uppercase">
                            Universal Question Support
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                        Ace Every Question Format
                    </h2>
                    <p className="text-base text-slate-400 max-w-xl mx-auto mb-8">
                        The only AI that automatically parses formulas, multi-select checkboxes, coordinate graphs, and matching columns directly on your screen.
                    </p>

                    {/* Interactive Solve Buttons */}
                    <div className="inline-flex items-center gap-3">
                        <button
                            onClick={handleAutoSolve}
                            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-bold shadow-lg shadow-blue-600/30 flex items-center gap-2 active:scale-95 transition-all"
                        >
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Auto-Solve All (Interactive Demo)</span>
                        </button>
                        <button
                            onClick={handleReset}
                            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 text-xs font-medium transition-colors"
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Question Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">

                    {/* Card 1: Multiple Choice */}
                    <div className="rounded-2xl bg-[#0a1020] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-wider">
                                    01 • Single Choice (MCQ)
                                </span>
                                {mcState === 'C' && (
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> Solved
                                    </span>
                                )}
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                                Differential Calculus
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-400 mb-6 font-mono">
                                What is the derivative of f(x) = (x + 1)² with respect to x?
                            </p>

                            <div className="space-y-2.5 font-mono text-xs sm:text-sm">
                                {[
                                    { id: 'A', text: '2x² + 4x - 2' },
                                    { id: 'B', text: 'x² + 2x + 1' },
                                    { id: 'C', text: '2x + 2' },
                                    { id: 'D', text: '2x² - 4x + 2' }
                                ].map((opt) => (
                                    <div
                                        key={opt.id}
                                        onClick={() => setMcState(opt.id)}
                                        className={`px-4 py-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all duration-200 select-none ${getMcStyles(opt.id)}`}
                                    >
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                            mcState === opt.id 
                                                ? (opt.id === 'C' ? 'border-emerald-400 bg-emerald-500' : 'border-rose-400 bg-rose-500') 
                                                : 'border-white/20'
                                        }`}>
                                            {mcState === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-black" />}
                                        </div>
                                        <span className="text-slate-400">{opt.id}.</span>
                                        <span className="font-semibold">{opt.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Multiple Select */}
                    <div className="rounded-2xl bg-[#0a1020] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-wider">
                                    02 • Multiple Select Checkboxes
                                </span>
                                {msState.includes('A') && msState.includes('C') && msState.length === 2 && (
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> Solved
                                    </span>
                                )}
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                                Cell Biology
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-400 mb-6">
                                Which cellular components are directly involved in eukaryotic translation?
                            </p>

                            <div className="space-y-2.5 text-xs sm:text-sm">
                                {[
                                    { id: 'A', text: 'Nucleus (mRNA Transcription)' },
                                    { id: 'B', text: 'Mitochondria (ATP Production)' },
                                    { id: 'C', text: 'Ribosomes (Polypeptide Synthesis)' },
                                    { id: 'D', text: 'Cell Wall (Structural Rigidity)' }
                                ].map((opt) => (
                                    <div
                                        key={opt.id}
                                        onClick={() => {
                                            setMsState(prev => prev.includes(opt.id) ? prev.filter(x => x !== opt.id) : [...prev, opt.id]);
                                        }}
                                        className={`px-4 py-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all duration-200 select-none ${getMsStyles(opt.id)}`}
                                    >
                                        <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                                            msState.includes(opt.id) ? 'bg-blue-600 border-blue-500' : 'border-white/20 bg-white/5'
                                        }`}>
                                            {msState.includes(opt.id) && <Check className="w-3 h-3 text-white stroke-[3]" />}
                                        </div>
                                        <span className="text-slate-400 font-mono">{opt.id}.</span>
                                        <span className="font-medium">{opt.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Fill in the Blank with Graph */}
                    <div className="rounded-2xl bg-[#0a1020] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-wider">
                                    03 • Graph & Coordinate Solver
                                </span>
                                {fibState === '1' && (
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> Solved
                                    </span>
                                )}
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                                Tangent Slope Calculation
                            </h3>

                            {/* Clean Dark Graph Canvas */}
                            <div className="w-full max-w-[280px] mx-auto my-4 p-2 bg-[#050811] rounded-xl border border-white/10">
                                <svg viewBox="0 0 200 110" className="w-full h-auto">
                                    {/* Grid Lines */}
                                    <line x1="100" y1="0" x2="100" y2="100" stroke="#1e293b" strokeWidth="1" />
                                    <line x1="0" y1="90" x2="200" y2="90" stroke="#1e293b" strokeWidth="1" />
                                    <line x1="0" y1="50" x2="200" y2="50" stroke="#1e293b" strokeWidth="0.5" strokeDasharray="2 2" />

                                    {/* Curve */}
                                    <path d="M 10 10 Q 100 120 190 10" fill="none" stroke="#38bdf8" strokeWidth="2.5" strokeLinecap="round" />

                                    {/* Tangent line at x=2 if solved */}
                                    {fibState === '1' && (
                                        <g>
                                            <line x1="110" y1="85" x2="170" y2="25" stroke="#10b981" strokeWidth="2" strokeDasharray="3 3" />
                                            <circle cx="140" cy="55" r="3.5" fill="#10b981" />
                                        </g>
                                    )}

                                    <text x="96" y="102" fontSize="8" fill="#64748b" fontFamily="monospace">0</text>
                                    <text x="135" y="102" fontSize="8" fill="#64748b" fontFamily="monospace">2</text>
                                    <text x="175" y="102" fontSize="8" fill="#64748b" fontFamily="monospace">4</text>
                                </svg>
                            </div>

                            <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-300 font-medium">
                                <span>The slope at x = 2 is:</span>
                                <input
                                    type="text"
                                    value={fibState}
                                    onChange={(e) => setFibState(e.target.value)}
                                    placeholder="?"
                                    className={`w-14 h-9 text-center rounded-lg border outline-none font-mono text-sm transition-all ${
                                        fibState === '1'
                                            ? 'bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold shadow-[0_0_12px_rgba(16,185,129,0.2)]'
                                            : 'bg-white/5 border-white/10 text-white focus:border-blue-500'
                                    }`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Matching */}
                    <div className="rounded-2xl bg-[#0a1020] border border-white/10 p-6 sm:p-8 flex flex-col justify-between shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                                    04 • Matching Columns
                                </span>
                                {Object.keys(matchState).length === 4 && (
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3" /> Solved
                                    </span>
                                )}
                            </div>
                            <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                                Organic Chemistry Roles
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-400 mb-6">
                                Match each molecule with its role in the photosynthesis cycle:
                            </p>

                            <div className="space-y-3 font-mono text-xs">
                                {[
                                    { molecule: 'CO2', label: 'CO₂' },
                                    { molecule: 'H2O', label: 'H₂O' },
                                    { molecule: 'O2', label: 'O₂' },
                                    { molecule: 'C6H12O6', label: 'C₆H₁₂O₆' }
                                ].map((item) => (
                                    <div key={item.molecule} className="flex items-center gap-3">
                                        <span className="w-16 text-right font-bold text-slate-300">
                                            {item.label}:
                                        </span>
                                        <select
                                            value={matchState[item.molecule] || ''}
                                            onChange={(e) => setMatchState({ ...matchState, [item.molecule]: e.target.value })}
                                            className={`flex-1 h-9 px-3 rounded-lg border outline-none cursor-pointer transition-colors ${getMatchStyles(item.molecule, matchState[item.molecule])}`}
                                        >
                                            <option value="">Select role...</option>
                                            {matchOptions.map(opt => (
                                                <option key={opt} value={opt} className="bg-[#080d1a] text-white">
                                                    {opt}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
