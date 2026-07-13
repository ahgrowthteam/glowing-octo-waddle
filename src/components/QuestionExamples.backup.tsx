'use client';
import React, { useState } from 'react';
import { MousePointer2 } from 'lucide-react';

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

    const getMcStyles = (opt: string) => {
        if (mcState === opt) {
            if (opt === 'C') return 'bg-green-50/80 border-green-200 text-green-700 font-medium';
            return 'bg-red-50/80 border-red-200 text-red-700 font-medium';
        }
        return 'bg-slate-50/50 border-slate-200 text-slate-500 hover:bg-slate-50';
    };

    const getMsStyles = (opt: string) => {
        if (msState.includes(opt)) {
            if (opt === 'A' || opt === 'C') return 'bg-green-50/80 border-green-200 text-green-800 font-medium';
            return 'bg-red-50/80 border-red-200 text-red-800 font-medium';
        }
        return 'bg-slate-50/50 border-slate-200 text-slate-500 hover:bg-slate-50';
    };

    const matchOptions = ['Reactant', 'Electron donor', 'Byproduct', 'Product'];
    const getMatchStyles = (key: string, val: string) => {
        if (!val) return 'bg-transparent border-slate-300 text-slate-600';
        const correctMap: Record<string, string> = {
            'CO2': 'Reactant',
            'H2O': 'Electron donor',
            'O2': 'Byproduct',
            'C6H12O6': 'Product'
        };
        if (correctMap[key] === val) return 'bg-green-50/80 border-green-200 text-green-800 font-medium';
        return 'bg-red-50/80 border-red-200 text-red-800 font-medium';
    };

    return (
        <section id="question-types" className="py-24 md:py-32 bg-slate-50 overflow-hidden relative" onDoubleClick={handleAutoSolve}>
            <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
                    Ace Every Question
                </h2>
                <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-16">
                    The only AI that instantly solves complex formatting directly on your screen. Double-click anywhere to auto-solve!
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 text-left relative">

                    {/* Multiple Choice */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200 relative">
                        {/* Interactive Badge */}
                        <div className="absolute -top-4 -left-4 bg-white px-4 py-2 rounded-full shadow-lg border border-slate-100 flex items-center gap-2 animate-bounce z-20">
                            <MousePointer2 className="w-4 h-4 text-primary" />
                            <span className="text-xs font-bold text-primary tracking-wide uppercase">Double-Click to Solve</span>
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Multiple Choice</h3>
                        <p className="text-slate-700 mb-6 text-center font-medium">What is the derivative of (x + 1)² with respect to x?</p>
                        <div className="space-y-3 font-mono text-sm">
                            {[
                                { id: 'A', text: '2x² + 4x - 2' },
                                { id: 'B', text: 'x² + 2x + 1' },
                                { id: 'C', text: '2x + 2' },
                                { id: 'D', text: '2x² - 4x + 2' }
                            ].map(opt => (
                                <div
                                    key={opt.id}
                                    onClick={() => setMcState(opt.id)}
                                    className={`p-4 rounded-xl border flex items-center gap-4 cursor-pointer transition-colors ${getMcStyles(opt.id)}`}
                                >
                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${mcState === opt.id ? (opt.id === 'C' ? 'border-green-500 bg-white' : 'border-red-500 bg-white') : 'border-slate-300'}`}>
                                        {mcState === opt.id && <div className={`w-2 h-2 rounded-full ${opt.id === 'C' ? 'bg-green-500' : 'bg-red-500'}`} />}
                                    </div>
                                    <span>{opt.id}. {opt.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Multiple Select */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Multiple Select</h3>
                        <p className="text-slate-700 mb-6 text-center font-medium">Which organelles are involved in protein synthesis?</p>
                        <div className="space-y-3 font-medium text-sm">
                            {[
                                { id: 'A', text: 'Nucleus' },
                                { id: 'B', text: 'Mitochondria' },
                                { id: 'C', text: 'Ribosomes' },
                                { id: 'D', text: 'Cell wall' }
                            ].map(opt => (
                                <div
                                    key={opt.id}
                                    onClick={() => {
                                        setMsState(prev => prev.includes(opt.id) ? prev.filter(x => x !== opt.id) : [...prev, opt.id]);
                                    }}
                                    className={`p-4 rounded-xl border flex items-center gap-4 cursor-pointer transition-colors ${getMsStyles(opt.id)}`}
                                >
                                    <div className={`w-4 h-4 rounded-sm border flex items-center justify-center shrink-0 transition-colors ${msState.includes(opt.id) ? 'bg-primary border-primary' : 'border-slate-300 bg-white'}`}>
                                        {msState.includes(opt.id) && <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                    </div>
                                    <span>{opt.id}. {opt.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Fill in the Blank */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200 flex flex-col justify-center items-center">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 text-center w-full">Fill in the Blank</h3>

                        {/* SVG Graph recreation matching the reference */}
                        <div className="w-full max-w-xs mb-8 relative">
                            <svg viewBox="0 0 200 120" className="w-full h-auto border border-slate-300 bg-white shadow-sm">
                                <defs>
                                    <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse">
                                        <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#e2e8f0" strokeWidth="1" />
                                    </pattern>
                                </defs>
                                <rect width="200" height="120" fill="url(#grid)" />
                                <line x1="100" y1="0" x2="100" y2="120" stroke="#94a3b8" strokeWidth="1" />
                                <line x1="0" y1="90" x2="200" y2="90" stroke="#94a3b8" strokeWidth="1" />

                                <path d="M 0 30 Q 100 130 200 30" fill="none" stroke="#ef4444" strokeWidth="3" />

                                <text x="5" y="105" fontSize="8" fill="#64748b" className="font-mono">-4</text>
                                <text x="50" y="105" fontSize="8" fill="#64748b" className="font-mono">-2</text>
                                <text x="103" y="105" fontSize="8" fill="#64748b" className="font-mono">0</text>
                                <text x="150" y="105" fontSize="8" fill="#64748b" className="font-mono">2</text>
                                <text x="195" y="105" fontSize="8" fill="#64748b" className="font-mono" textAnchor="end">4</text>
                                <text x="105" y="55" fontSize="8" fill="#64748b" className="font-mono">4</text>
                                <text x="105" y="20" fontSize="8" fill="#64748b" className="font-mono">2</text>
                            </svg>
                        </div>

                        <div className="flex items-center gap-3 font-medium text-slate-700">
                            The slope of the graph at x = 3 is
                            <input
                                type="text"
                                value={fibState}
                                onChange={(e) => setFibState(e.target.value)}
                                className={`w-16 h-10 text-center rounded-lg border outline-none font-mono transition-colors ${fibState === '1' ? 'bg-green-50/80 border-green-300 text-green-800 focus:ring-2 ring-blue-100 shadow-sm' :
                                        fibState.length > 0 ? 'bg-red-50/80 border-red-300 text-red-800' : 'border-slate-300 focus:border-primary/50 text-slate-700'
                                    }`}
                            />
                        </div>
                    </div>

                    {/* Matching */}
                    <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-sm border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Matching</h3>
                        <p className="text-slate-700 mb-8 text-center font-medium">Match each molecule with its role in photosynthesis:</p>

                        <div className="space-y-4 max-w-sm mx-auto font-mono text-sm max-w-[300px]">
                            {[
                                { molecule: 'CO2', label: 'CO₂' },
                                { molecule: 'H2O', label: 'H₂O' },
                                { molecule: 'O2', label: 'O₂' },
                                { molecule: 'C6H12O6', label: 'C₆H₁₂O₆' }
                            ].map(item => (
                                <div key={item.molecule} className="flex items-center gap-4">
                                    <span className="w-16 text-right font-medium text-slate-600">{item.label}:</span>
                                    <select
                                        value={matchState[item.molecule] || ''}
                                        onChange={(e) => setMatchState({ ...matchState, [item.molecule]: e.target.value })}
                                        className={`flex-1 h-10 px-3 rounded-lg border outline-none appearance-none cursor-pointer transition-colors backdrop-blur-sm ${getMatchStyles(item.molecule, matchState[item.molecule])}`}
                                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                                    >
                                        <option value="">Select role...</option>
                                        {matchOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                    </select>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
