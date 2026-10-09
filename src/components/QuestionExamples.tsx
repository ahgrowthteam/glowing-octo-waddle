'use client';

import React, { useState } from 'react';
import { 
    Check, Sparkles, CheckCircle2, Shield, Lock, 
    RefreshCw, EyeOff, Layers, Cpu
} from 'lucide-react';

export default function QuestionExamples() {
    const [mcState, setMcState] = useState<string | null>(null);
    const [msState, setMsState] = useState<string[]>([]);
    const [fibState, setFibState] = useState('');
    const [matchState, setMatchState] = useState<Record<string, string>>({});
    const [activeQuestionTab, setActiveQuestionTab] = useState<'mc' | 'ms' | 'fib' | 'match'>('mc');

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

    const matchOptions = ['Reactant', 'Electron donor', 'Byproduct', 'Product'];

    return (
        <div className="bg-cream text-ink">
            {/* Section: Privacy (OneMacApp Style #privacy) */}
            <section className="py-20 md:py-32 border-b border-black/5" id="privacy">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="bg-white rounded-3xl p-8 sm:p-12 md:p-16 border border-black/10 shadow-lift">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                            
                            {/* Left Graphic Box (3D Privacy Ghost Mascot) */}
                            <div className="lg:col-span-5 relative">
                                <div className="rounded-3xl bg-[#cdeecb]/30 p-6 border border-[#cdeecb] flex flex-col items-center justify-center text-center relative overflow-hidden group">
                                    <div className="w-56 h-56 rounded-2xl overflow-hidden border border-black/5 shadow-soft bg-cream/80 relative mb-4">
                                        <img 
                                            src="/images/ghost/ghost_privacy.jpg" 
                                            alt="Privacy Ghost Mascot" 
                                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <h4 className="font-display font-bold text-xl text-ink mb-1">
                                        Client-Side Isolation
                                    </h4>
                                    <p className="text-xs text-ink-muted max-w-[260px]">
                                        Runs 100% inside your local browser memory space.
                                    </p>

                                    {/* Floating Badges */}
                                    <div className="mt-5 flex flex-wrap gap-2 justify-center">
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-ink border border-black/5 shadow-xs">
                                            Zero Telemetry
                                        </span>
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-ink border border-black/5 shadow-xs">
                                            Closed Shadow DOM
                                        </span>
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-ink border border-black/5 shadow-xs">
                                            No School Logs
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Privacy Copy */}
                            <div className="lg:col-span-7">
                                <p className="eyebrow mb-3">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <span>PRIVACY & SAFETY</span>
                                </p>
                                <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-[1.08] mb-5">
                                    Your exam activity<br />
                                    stays on your device.
                                </h2>
                                <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal mb-6">
                                    ExamGhost does the work locally in an isolated Shadow DOM container. No third-party tracking scripts, zero cookies sent to university exam servers, and no suspicious outbound network packets for school firewalls to inspect.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        { title: "Zero DOM Trace", desc: "No HTML classes or IDs injected into the instructor's test document." },
                                        { title: "Local Memory Purge", desc: "Answers and question hashes are cleared instantly when you close the tab." },
                                        { title: "Honorlock & Proctorio Cloak", desc: "WebRTC screen captures and background audio streams remain completely unaffected." }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex items-start gap-3">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                            <div className="text-xs sm:text-sm">
                                                <span className="font-semibold text-ink">{item.title}</span> —{' '}
                                                <span className="text-ink-muted">{item.desc}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>

            {/* Section: Question Formats Playground */}
            <section className="py-20 md:py-28 border-b border-black/5" id="question-types">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">

                    {/* Section Head */}
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <p className="eyebrow justify-center mb-3">
                            <span className="w-2 h-2 rounded-full bg-ink" />
                            <span>COMPREHENSIVE SOLVER</span>
                        </p>
                        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-[1.08] mb-4">
                            Handles every question type.
                        </h2>
                        <p className="text-sm sm:text-base text-ink-muted">
                            Whether your professor uses multiple choice, multi-select checkboxes, formula fill-in, or complex matching tables.
                        </p>
                    </div>

                    {/* Question Type Tabs */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-white border border-black/10 shadow-xs">
                            {[
                                { id: 'mc', label: 'Multiple Choice' },
                                { id: 'ms', label: 'Multi-Select' },
                                { id: 'fib', label: 'Fill in Blank' },
                                { id: 'match', label: 'Matching Table' }
                            ].map(tab => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveQuestionTab(tab.id as any)}
                                    className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                                        activeQuestionTab === tab.id
                                            ? 'bg-ink text-white shadow-xs'
                                            : 'text-ink-secondary hover:text-ink'
                                    }`}
                                >
                                    {tab.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active Question Simulator Card */}
                    <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-8 border border-black/10 shadow-card">
                        
                        {/* Multiple Choice Tab */}
                        {activeQuestionTab === 'mc' && (
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-4">
                                    <span className="text-xs font-semibold text-ink-muted uppercase">Question 1 · Standard MCQ</span>
                                    <span className="text-xs font-semibold bg-[#f4f1ea] px-2.5 py-0.5 rounded-full">1.0 pt</span>
                                </div>
                                <h3 className="font-display text-base sm:text-lg font-bold text-ink mb-4">
                                    Which mechanism is primarily responsible for generating the resting membrane potential in animal neurons?
                                </h3>
                                <div className="space-y-2.5 mb-6">
                                    {[
                                        { id: 'A', text: 'Voltage-gated calcium influx' },
                                        { id: 'B', text: 'Passive diffusion of chloride ions' },
                                        { id: 'C', text: 'Na+/K+ ATPase pump and potassium leak channels' },
                                        { id: 'D', text: 'Neurotransmitter reuptake mechanisms' }
                                    ].map(opt => (
                                        <div
                                            key={opt.id}
                                            onClick={() => setMcState(opt.id)}
                                            className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-medium cursor-pointer transition-all flex items-center justify-between ${
                                                mcState === opt.id
                                                    ? opt.id === 'C'
                                                        ? 'bg-[#cdeecb]/40 border-emerald-500 text-ink'
                                                        : 'bg-red-50 border-red-300 text-ink'
                                                    : 'bg-[#faf8f4] border-black/5 hover:border-black/20 text-ink'
                                            }`}
                                        >
                                            <span><strong>{opt.id})</strong> {opt.text}</span>
                                            {mcState === opt.id && opt.id === 'C' && (
                                                <span className="text-xs font-semibold text-emerald-800 bg-[#cdeecb] px-2.5 py-0.5 rounded-full">
                                                    ✓ Correct (99.9%)
                                                </span>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Multi-Select Tab */}
                        {activeQuestionTab === 'ms' && (
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-4">
                                    <span className="text-xs font-semibold text-ink-muted uppercase">Question 2 · Multi-Select</span>
                                    <span className="text-xs font-semibold bg-[#f4f1ea] px-2.5 py-0.5 rounded-full">2.0 pts</span>
                                </div>
                                <h3 className="font-display text-base sm:text-lg font-bold text-ink mb-4">
                                    Select ALL factors that will shift the hemoglobin oxygen dissociation curve to the RIGHT (Bohr effect):
                                </h3>
                                <div className="space-y-2.5 mb-6">
                                    {[
                                        { id: 'A', text: 'Increased partial pressure of CO₂ (PCO₂)' },
                                        { id: 'B', text: 'Increased blood pH (alkalosis)' },
                                        { id: 'C', text: 'Elevated body temperature' },
                                        { id: 'D', text: 'Decreased 2,3-BPG concentration' }
                                    ].map(opt => {
                                        const isSelected = msState.includes(opt.id);
                                        const isCorrect = opt.id === 'A' || opt.id === 'C';
                                        return (
                                            <div
                                                key={opt.id}
                                                onClick={() => {
                                                    setMsState(prev => isSelected ? prev.filter(x => x !== opt.id) : [...prev, opt.id]);
                                                }}
                                                className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-medium cursor-pointer transition-all flex items-center justify-between ${
                                                    isSelected
                                                        ? isCorrect
                                                            ? 'bg-[#cdeecb]/40 border-emerald-500 text-ink'
                                                            : 'bg-red-50 border-red-300 text-ink'
                                                        : 'bg-[#faf8f4] border-black/5 hover:border-black/20 text-ink'
                                                }`}
                                            >
                                                <span><strong>[{isSelected ? '✓' : ' '}]</strong> {opt.text}</span>
                                                {isSelected && isCorrect && (
                                                    <span className="text-xs font-semibold text-emerald-800 bg-[#cdeecb] px-2 py-0.5 rounded-full">
                                                        ✓ Target
                                                    </span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* Fill in Blank Tab */}
                        {activeQuestionTab === 'fib' && (
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-4">
                                    <span className="text-xs font-semibold text-ink-muted uppercase">Question 3 · Calculus Formula</span>
                                    <span className="text-xs font-semibold bg-[#f4f1ea] px-2.5 py-0.5 rounded-full">1.5 pts</span>
                                </div>
                                <h3 className="font-display text-base sm:text-lg font-bold text-ink mb-4">
                                    Evaluate the limit: lim(x→0) [sin(x) / x] = ?
                                </h3>
                                <div className="p-4 rounded-2xl bg-[#faf8f4] border border-black/5 mb-6 flex items-center gap-3">
                                    <span className="text-sm font-semibold text-ink">Answer:</span>
                                    <input
                                        type="text"
                                        value={fibState}
                                        onChange={(e) => setFibState(e.target.value)}
                                        placeholder="Type number..."
                                        className="px-4 py-2 rounded-xl border border-black/15 bg-white text-ink text-sm font-mono w-32 focus:outline-none focus:border-ink"
                                    />
                                    {fibState === '1' && (
                                        <span className="text-xs font-semibold text-emerald-800 bg-[#cdeecb] px-3 py-1 rounded-full">
                                            ✓ Correct Solution Verified
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Matching Table Tab */}
                        {activeQuestionTab === 'match' && (
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-4">
                                    <span className="text-xs font-semibold text-ink-muted uppercase">Question 4 · Matching Matrix</span>
                                    <span className="text-xs font-semibold bg-[#f4f1ea] px-2.5 py-0.5 rounded-full">2.0 pts</span>
                                </div>
                                <h3 className="font-display text-base sm:text-lg font-bold text-ink mb-4">
                                    Match each molecule involved in photosynthesis to its proper biochemical role:
                                </h3>
                                <div className="space-y-3 mb-6">
                                    {['CO2', 'H2O', 'O2', 'C6H12O6'].map(mol => (
                                        <div key={mol} className="p-3 rounded-2xl bg-[#faf8f4] border border-black/5 flex items-center justify-between">
                                            <span className="text-xs font-mono font-bold text-ink">{mol}</span>
                                            <select
                                                value={matchState[mol] || ''}
                                                onChange={(e) => setMatchState({ ...matchState, [mol]: e.target.value })}
                                                className="px-3 py-1.5 rounded-xl border border-black/15 bg-white text-xs text-ink focus:outline-none focus:border-ink"
                                            >
                                                <option value="">Select role...</option>
                                                {matchOptions.map(o => (
                                                    <option key={o} value={o}>{o}</option>
                                                ))}
                                            </select>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Controls */}
                        <div className="flex items-center justify-between pt-4 border-t border-black/5">
                            <button
                                onClick={handleAutoSolve}
                                className="btn-dark px-5 py-2.5 text-xs sm:text-sm"
                            >
                                <Sparkles className="w-3.5 h-3.5 text-[#ffd23f]" />
                                <span>Auto-Solve This Question</span>
                            </button>
                            <button
                                onClick={handleReset}
                                className="btn-soft px-4 py-2.5 text-xs text-ink"
                            >
                                <RefreshCw className="w-3.5 h-3.5" />
                                <span>Reset Inputs</span>
                            </button>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
}
