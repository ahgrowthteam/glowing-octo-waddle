'use client';

import React, { useState } from 'react';
import { Check, Sparkles, CheckCircle2 } from 'lucide-react';

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
            if (opt === 'C') return 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
            return 'bg-rose-50 border-rose-400 text-rose-950 font-medium';
        }
        return 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700';
    };

    const getMsStyles = (opt: string) => {
        if (msState.includes(opt)) {
            if (opt === 'A' || opt === 'C') return 'bg-emerald-50 border-emerald-500 text-emerald-950 font-semibold';
            return 'bg-rose-50 border-rose-400 text-rose-950 font-medium';
        }
        return 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700';
    };

    const matchOptions = ['Reactant', 'Electron donor', 'Byproduct', 'Product'];
    const getMatchStyles = (key: string, val: string) => {
        if (!val) return 'bg-white border-slate-200 text-slate-700 hover:border-slate-300';
        const correctMap: Record<string, string> = {
            'CO2': 'Reactant',
            'H2O': 'Electron donor',
            'O2': 'Byproduct',
            'C6H12O6': 'Product'
        };
        if (correctMap[key] === val) return 'bg-emerald-50 border-emerald-500 text-emerald-900 font-semibold';
        return 'bg-rose-50 border-rose-400 text-rose-900';
    };

    return (
        <section id="question-types" className="py-20 bg-slate-50/60 text-slate-900 border-b border-slate-200/80">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-sm mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        <span>Universal Format Support</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
                        Handles any question type effortlessly
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 mb-6">
                        From basic multiple-choice to multi-select checkboxes, coordinate graphs, and matching columns.
                    </p>

                    {/* Interactive Solve Buttons */}
                    <div className="inline-flex items-center gap-3">
                        <button
                            onClick={handleAutoSolve}
                            className="px-4 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-sm flex items-center gap-2 transition-colors"
                        >
                            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                            <span>Auto-Solve All (Interactive Demo)</span>
                        </button>
                        <button
                            onClick={handleReset}
                            className="px-4 py-2.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-200 text-slate-700 text-xs sm:text-sm font-medium transition-colors shadow-sm"
                        >
                            Reset
                        </button>
                    </div>
                </div>

                {/* Question Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">

                    {/* Card 1: Multiple Choice */}
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-sm">
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                                    01 • Single Choice (MCQ)
                                </span>
                                {mcState === 'C' && (
                                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Solved
                                    </span>
                                )}
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-1">
                                Differential Calculus
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 mb-5">
                                What is the derivative of f(x) = (x + 1)² with respect to x?
                            </p>

                            <div className="space-y-2 text-xs sm:text-sm">
                                {[
                                    { id: 'A', text: '2x² + 4x - 2' },
                                    { id: 'B', text: 'x² + 2x + 1' },
                                    { id: 'C', text: '2x + 2' },
                                    { id: 'D', text: '2x² - 4x + 2' }
                                ].map((opt) => (
                                    <div
                                        key={opt.id}
                                        onClick={() => setMcState(opt.id)}
                                        className={`px-4 py-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${getMcStyles(opt.id)}`}
                                    >
                                        <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${
                                            mcState === opt.id 
                                                ? (opt.id === 'C' ? 'border-emerald-600 bg-emerald-600' : 'border-rose-600 bg-rose-600') 
                                                : 'border-slate-300'
                                        }`}>
                                            {mcState === opt.id && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                                        </div>
                                        <span className="text-slate-400 font-medium">{opt.id}.</span>
                                        <span>{opt.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Multiple Select */}
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-sm">
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                                    02 • Multiple Select Checkboxes
                                </span>
                                {msState.includes('A') && msState.includes('C') && msState.length === 2 && (
                                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Solved
                                    </span>
                                )}
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-1">
                                Cell Biology
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 mb-5">
                                Which cellular components are directly involved in eukaryotic translation?
                            </p>

                            <div className="space-y-2 text-xs sm:text-sm">
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
                                        className={`px-4 py-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${getMsStyles(opt.id)}`}
                                    >
                                        <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                                            msState.includes(opt.id) ? 'bg-emerald-600 border-emerald-600' : 'border-slate-300'
                                        }`}>
                                            {msState.includes(opt.id) && <Check className="w-3 h-3 text-white" />}
                                        </div>
                                        <span className="text-slate-400 font-medium">{opt.id}.</span>
                                        <span>{opt.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Fill in the Blank with Graph */}
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-sm">
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                                    03 • Graph & Coordinate Solver
                                </span>
                                {fibState === '1' && (
                                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Solved
                                    </span>
                                )}
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-1">
                                Tangent Slope Calculation
                            </h3>

                            {/* Clean Graph Canvas */}
                            <div className="w-full max-w-[280px] mx-auto my-3 p-2 bg-slate-50 rounded-xl border border-slate-200">
                                <svg viewBox="0 0 200 110" className="w-full h-auto">
                                    <line x1="100" y1="0" x2="100" y2="100" stroke="#cbd5e1" strokeWidth="1" />
                                    <line x1="0" y1="90" x2="200" y2="90" stroke="#cbd5e1" strokeWidth="1" />
                                    <line x1="0" y1="50" x2="200" y2="50" stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="2 2" />

                                    <path d="M 10 10 Q 100 120 190 10" fill="none" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />

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

                            <div className="flex items-center justify-center gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                                <span>Slope of tangent at x = 2:</span>
                                <input
                                    type="text"
                                    value={fibState}
                                    onChange={(e) => setFibState(e.target.value)}
                                    placeholder="Enter slope..."
                                    className={`w-28 px-3 py-1.5 rounded-lg border text-center font-mono text-xs ${
                                        fibState === '1' ? 'border-emerald-500 bg-emerald-50 text-emerald-900 font-bold' : 'border-slate-300 bg-white'
                                    }`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Matching Columns */}
                    <div className="rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-sm">
                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                                    04 • Matching Columns
                                </span>
                                {Object.keys(matchState).length === 4 && (
                                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 font-semibold flex items-center gap-1">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Solved
                                    </span>
                                )}
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-1">
                                Photosynthesis Pathways
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 mb-4">
                                Match each chemical species to its functional role:
                            </p>

                            <div className="space-y-2.5 text-xs">
                                {[
                                    { key: 'CO2', label: 'CO₂' },
                                    { key: 'H2O', label: 'H₂O' },
                                    { key: 'O2', label: 'O₂' },
                                    { key: 'C6H12O6', label: 'C₆H₁₂O₆' },
                                ].map((item) => (
                                    <div key={item.key} className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                                        <span className="font-mono font-bold text-slate-800 text-xs px-2">{item.label}</span>
                                        <select
                                            value={matchState[item.key] || ''}
                                            onChange={(e) => setMatchState(prev => ({ ...prev, [item.key]: e.target.value }))}
                                            className={`px-3 py-1.5 rounded-lg border text-xs cursor-pointer ${getMatchStyles(item.key, matchState[item.key])}`}
                                        >
                                            <option value="">Select match...</option>
                                            {matchOptions.map((opt) => (
                                                <option key={opt} value={opt}>{opt}</option>
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
