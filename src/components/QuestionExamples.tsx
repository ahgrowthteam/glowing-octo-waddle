'use client';
import React, { useState } from 'react';
import { MousePointer2 } from 'lucide-react';
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

    const getMcStyles = (opt: string) => {
        if (mcState === opt) {
            if (opt === 'C') return 'bg-[#f0fdf4]/60 border-[#bbf7d0] text-[#16a34a] font-medium';
            return 'bg-red-50/80 border-red-200 text-red-700 font-medium';
        }
        return 'bg-white border-slate-100 hover:border-slate-200 text-slate-500 hover:bg-slate-50/50 shadow-sm';
    };

    const getMsStyles = (opt: string) => {
        if (msState.includes(opt)) {
            if (opt === 'A' || opt === 'C') return 'bg-[#f0fdf4]/60 border-[#bbf7d0] text-[#166534] font-medium';
            return 'bg-red-50/80 border-red-200 text-red-800 font-medium';
        }
        return 'bg-white border-slate-100 hover:border-slate-200 text-slate-500 hover:bg-slate-50/50 shadow-sm';
    };

    const matchOptions = ['Reactant', 'Electron donor', 'Byproduct', 'Product'];
    const getMatchStyles = (key: string, val: string) => {
        if (!val) return 'bg-transparent border-slate-200 text-slate-600 hover:border-slate-300 shadow-sm';
        const correctMap: Record<string, string> = {
            'CO2': 'Reactant',
            'H2O': 'Electron donor',
            'O2': 'Byproduct',
            'C6H12O6': 'Product'
        };
        if (correctMap[key] === val) return 'bg-[#f0fdf4]/60 border-[#bbf7d0] text-[#16a34a] font-medium';
        return 'bg-red-50/80 border-red-200 text-red-800 font-medium';
    };

    return (
        <section id="question-types" className="py-24 md:py-32 bg-[#F8FAFC] overflow-hidden relative" onDoubleClick={handleAutoSolve}>
            <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#0F172A] mb-6 tracking-tight">
                        Ace Every Question
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-20 font-medium">
                        The only AI that instantly solves complex formatting directly on your screen. Double-click anywhere to auto-solve!
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 text-left relative max-w-5xl mx-auto">

                    {/* Multiple Choice */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                        className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 relative group transition-transform duration-300"
                    >
                        {/* Interactive Badge */}
                        <div className="absolute -top-5 -left-4 bg-white px-4 py-2.5 rounded-full shadow-[0_8px_20px_rgb(0,0,0,0.08)] border border-slate-100 flex items-center gap-2 z-20 transition-transform hover:scale-105 cursor-pointer" onClick={handleAutoSolve}>
                            <MousePointer2 className="w-4 h-4 text-blue-500" />
                            <span className="text-[11px] font-bold text-blue-500 tracking-wider uppercase">Double-Click to Solve</span>
                        </div>

                        <h3 className="text-[1.35rem] font-bold text-slate-800 mb-6 text-center">Multiple Choice</h3>
                        <p className="text-slate-600 mb-8 text-center font-medium">What is the derivative of (x + 1)² with respect to x?</p>
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
                                    className={`px-5 py-4 rounded-xl border flex items-center gap-4 cursor-pointer transition-all duration-200 ${getMcStyles(opt.id)}`}
                                >
                                    <div className={`w-4 h-4 rounded-full border flex items-center justify-center shrink-0 ${mcState === opt.id ? (opt.id === 'C' ? 'border-[#16a34a] bg-white' : 'border-red-500 bg-white') : 'border-slate-300'}`}>
                                        {mcState === opt.id && <div className={`w-2 h-2 rounded-full ${opt.id === 'C' ? 'bg-[#16a34a]' : 'bg-red-500'}`} />}
                                    </div>
                                    <span className="text-slate-400 mr-1">{opt.id}.</span> <span className={mcState === opt.id && opt.id === 'C' ? 'text-[#16a34a]' : 'text-slate-500'}>{opt.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Multiple Select */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                        className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group transition-transform duration-300"
                    >
                        <h3 className="text-[1.35rem] font-bold text-slate-800 mb-6 text-center">Multiple Select</h3>
                        <p className="text-slate-600 mb-8 text-center font-medium">Which organelles are involved in protein synthesis?</p>
                        <div className="space-y-3 font-semibold text-[13px]">
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
                                    className={`px-5 py-4 rounded-xl border flex items-center gap-4 cursor-pointer transition-all duration-200 ${getMsStyles(opt.id)}`}
                                >
                                    <div className={`w-[18px] h-[18px] rounded-[4px] border flex items-center justify-center shrink-0 transition-colors ${msState.includes(opt.id) ? 'bg-[#3b82f6] border-[#3b82f6]' : 'border-slate-200 bg-white'}`}>
                                        {msState.includes(opt.id) && <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3.5} d="M5 13l4 4L19 7" /></svg>}
                                    </div>
                                    <span className="text-slate-400 font-medium mr-1">{opt.id}.</span> <span className={msState.includes(opt.id) && (opt.id === 'A' || opt.id === 'C') ? 'text-[#16a34a]' : 'text-slate-500'}>{opt.text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Fill in the Blank */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 flex flex-col justify-center items-center group transition-transform duration-300"
                    >
                        <h3 className="text-[1.35rem] font-bold text-slate-800 mb-6 text-center w-full">Fill in the Blank</h3>

                        {/* SVG Graph recreation matching the reference */}
                        <div className="w-full max-w-[280px] mb-10 relative">
                            <svg viewBox="0 -5 200 120" className="w-full h-auto border-2 border-slate-100/80 bg-white rounded-lg shadow-sm" style={{ overflow: 'visible' }}>
                                <defs>
                                    <pattern id="grid" width="25" height="25" patternUnits="userSpaceOnUse" x="0" y="0">
                                        <path d="M 25 0 L 0 0 0 25" fill="none" stroke="#f1f5f9" strokeWidth="1" />
                                    </pattern>
                                </defs>
                                <rect x="0" y="-5" width="200" height="125" fill="url(#grid)" />
                                <line x1="100" y1="-5" x2="100" y2="115" stroke="#cbd5e1" strokeWidth="1.5" />
                                <line x1="0" y1="100" x2="200" y2="100" stroke="#cbd5e1" strokeWidth="1.5" />

                                <path d="M 0 0 Q 100 200 200 0" fill="none" stroke="#ef4444" strokeWidth="3.5" strokeLinecap="round" />

                                {fibState === '1' && (
                                    <motion.g
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.5, type: 'spring' }}
                                    >
                                        <line x1="120" y1="105" x2="180" y2="45" stroke="#16a34a" strokeWidth="2" strokeDasharray="4 4" />
                                        <circle cx="150" cy="75" r="4" fill="#16a34a" stroke="white" strokeWidth="1.5" />
                                    </motion.g>
                                )}

                                <text x="3" y="112" fontSize="9" fill="#94a3b8" className="font-mono" fontWeight="600">-4</text>
                                <text x="53" y="112" fontSize="9" fill="#94a3b8" className="font-mono" fontWeight="600">-2</text>
                                <text x="143" y="112" fontSize="9" fill="#94a3b8" className="font-mono" fontWeight="600">2</text>
                                <text x="188" y="112" fontSize="9" fill="#94a3b8" className="font-mono" fontWeight="600">4</text>
                                <text x="105" y="53" fontSize="9" fill="#94a3b8" className="font-mono" fontWeight="600">2</text>
                                <text x="105" y="10" fontSize="9" fill="#94a3b8" className="font-mono" fontWeight="600">4</text>
                            </svg>
                        </div>

                        <div className="flex items-center gap-4 font-semibold text-slate-700 text-[15px]">
                            The slope of the graph at x = 2 is
                            <input
                                type="text"
                                value={fibState}
                                onChange={(e) => setFibState(e.target.value)}
                                className={`w-[50px] h-[40px] text-center rounded-[8px] border outline-none font-mono text-[15px] transition-all duration-300 ${fibState === '1' ? 'bg-[#f0fdf4]/80 border-[#bbf7d0] text-[#16a34a] shadow-sm font-bold' :
                                    fibState.length > 0 ? 'bg-red-50/80 border-red-300 text-red-800' : 'border-slate-200 focus:border-blue-400 text-slate-700 bg-slate-50/50'
                                    }`}
                            />
                        </div>
                    </motion.div>

                    {/* Matching */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 group transition-transform duration-300"
                    >
                        <h3 className="text-[1.35rem] font-bold text-slate-800 mb-6 text-center">Matching</h3>
                        <p className="text-slate-600 mb-10 text-center font-medium">Match each molecule with its role in photosynthesis:</p>

                        <div className="space-y-4 max-w-sm mx-auto font-mono text-[13.5px]">
                            {[
                                { molecule: 'CO2', label: 'CO₂' },
                                { molecule: 'H2O', label: 'H₂O' },
                                { molecule: 'O2', label: 'O₂' },
                                { molecule: 'C6H12O6', label: 'C₆H₁₂O₆' }
                            ].map((item, idx) => (
                                <motion.div
                                    key={item.molecule}
                                    className="flex items-center gap-4"
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + (idx * 0.1) }}
                                >
                                    <span className="w-16 text-right font-medium text-slate-500/80 tracking-wider">
                                        {item.label}:
                                    </span>
                                    <select
                                        value={matchState[item.molecule] || ''}
                                        onChange={(e) => setMatchState({ ...matchState, [item.molecule]: e.target.value })}
                                        className={`flex-1 h-[42px] px-4 rounded-[10px] border outline-none appearance-none cursor-pointer transition-colors duration-300 backdrop-blur-sm ${getMatchStyles(item.molecule, matchState[item.molecule])}`}
                                        style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%2394a3b8' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.75rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.2em 1.2em' }}
                                    >
                                        <option value="">Select role...</option>
                                        {matchOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                                    </select>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
