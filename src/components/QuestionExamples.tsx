'use client';

import React, { useState } from 'react';
import { 
    Check, Sparkles, CheckCircle2, Shield, Lock, 
    RefreshCw, EyeOff, Layers, Cpu, MousePointer
} from 'lucide-react';

export default function QuestionExamples() {
    const [mcState, setMcState] = useState<string | null>(null);
    const [msState, setMsState] = useState<string[]>([]);
    const [tfState, setTfState] = useState<'true' | 'false' | null>(null);
    const [saState, setSaState] = useState('');
    const [activeQuestionTab, setActiveQuestionTab] = useState<'mc' | 'ms' | 'tf' | 'sa'>('mc');

    const handleAutoSolve = () => {
        setMcState('C');
        setMsState(['A', 'C']);
        setTfState('true');
        setSaState('Ionic bonds involve the complete transfer of electrons between atoms to form ions, whereas covalent bonds involve the mutual sharing of valence electrons to achieve stable electron configurations.');
    };

    const handleReset = () => {
        setMcState(null);
        setMsState([]);
        setTfState(null);
        setSaState('');
    };

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
                                            width={224}
                                            height={224}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="font-display font-bold text-xl text-ink mb-1">
                                        Client-Side Isolation
                                    </div>
                                    <p className="text-xs text-ink-muted max-w-[260px]">
                                        Runs 100% inside your local browser memory space.
                                    </p>

                                    {/* Floating Badges */}
                                    <div className="mt-5 flex flex-wrap gap-2 justify-center">
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-ink border border-black/5 shadow-xs">
                                            No Telemetry
                                        </span>
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-ink border border-black/5 shadow-xs">
                                            Closed Shadow DOM
                                        </span>
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-ink border border-black/5 shadow-xs">
                                            Screen-Share Safe
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
                                    ExamGhost does the work locally in an isolated Shadow DOM container. No third-party tracking scripts, zero cookies sent to university exam servers, and no background processes running when you don’t need them.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        { title: "Off Until You Switch It On", desc: "Never runs in the background. Toggle instantly with ⌘+Shift+U and off just as fast." },
                                        { title: "No Account to Start", desc: "Install and use 50 free questions immediately. We only ask for an email if you upgrade." },
                                        { title: "Nothing on Screen", desc: "Answers apply directly on the page — no new tabs or floating widgets. Screen-share safe by design." },
                                        { title: "1-Click Clean Uninstall", desc: "Remove it from Chrome any time. Zero leftover data or background hooks." }
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
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span>COMPREHENSIVE QUESTION SOLVER</span>
                        </p>
                        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-[1.08] mb-4">
                            Handles every question format.
                        </h2>
                        <p className="text-sm sm:text-base text-ink-muted">
                            Whether your quiz uses multiple choice, multi-select checkboxes, true/false statements, or typed short answers.
                        </p>
                    </div>

                    {/* Question Type Tabs */}
                    <div className="flex justify-center mb-8">
                        <div className="inline-flex items-center gap-1.5 p-1 rounded-full bg-white border border-black/10 shadow-xs">
                            {[
                                { id: 'mc', label: 'Multiple Choice' },
                                { id: 'ms', label: 'Multi-Select' },
                                { id: 'tf', label: 'True / False' },
                                { id: 'sa', label: 'Short Answer' }
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
                                    <span className="text-xs font-semibold text-ink-muted uppercase">Question 1 · Standard MCQ · Biology</span>
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
                                                    ✓ Correct (Auto-Selected)
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
                                    <span className="text-xs font-semibold text-ink-muted uppercase">Question 2 · Multi-Select · Physiology</span>
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
                                                        ✓ Correct Selection
                                                    </span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}

                        {/* True / False Tab */}
                        {activeQuestionTab === 'tf' && (
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-4">
                                    <span className="text-xs font-semibold text-ink-muted uppercase">Question 3 · True / False · Psychology</span>
                                    <span className="text-xs font-semibold bg-[#f4f1ea] px-2.5 py-0.5 rounded-full">1.0 pt</span>
                                </div>
                                <h3 className="font-display text-base sm:text-lg font-bold text-ink mb-4">
                                    Classical conditioning was first demonstrated empirically by Ivan Pavlov using salivary conditioning in dogs.
                                </h3>
                                <div className="grid grid-cols-2 gap-3 mb-6">
                                    {[
                                        { val: 'true', label: 'True', correct: true },
                                        { val: 'false', label: 'False', correct: false }
                                    ].map((item) => (
                                        <button
                                            key={item.val}
                                            onClick={() => setTfState(item.val as any)}
                                            className={`p-4 rounded-2xl border text-sm font-bold transition-all flex items-center justify-between ${
                                                tfState === item.val
                                                    ? item.correct
                                                        ? 'bg-[#cdeecb]/40 border-emerald-500 text-ink'
                                                        : 'bg-red-50 border-red-300 text-ink'
                                                    : 'bg-[#faf8f4] border-black/5 hover:border-black/20 text-ink'
                                            }`}
                                        >
                                            <span>{item.label}</span>
                                            {tfState === item.val && item.correct && (
                                                <span className="text-xs font-semibold text-emerald-800 bg-[#cdeecb] px-2.5 py-0.5 rounded-full">
                                                    ✓ Correct
                                                </span>
                                            )}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Short Answer / Essay Tab */}
                        {activeQuestionTab === 'sa' && (
                            <div>
                                <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-4">
                                    <span className="text-xs font-semibold text-ink-muted uppercase">Question 4 · Short Answer · Chemistry</span>
                                    <span className="text-xs font-semibold bg-[#f4f1ea] px-2.5 py-0.5 rounded-full">3.0 pts</span>
                                </div>
                                <h3 className="font-display text-base sm:text-lg font-bold text-ink mb-4">
                                    In one or two sentences, explain the fundamental difference between an ionic bond and a covalent bond in terms of electron behavior.
                                </h3>
                                <div className="mb-6 space-y-2">
                                    <textarea
                                        rows={3}
                                        value={saState}
                                        onChange={(e) => setSaState(e.target.value)}
                                        placeholder="Double-click or click Auto-Solve to populate answer..."
                                        className="w-full p-3.5 rounded-2xl border border-black/15 bg-[#faf8f4] text-xs sm:text-sm text-ink leading-relaxed focus:outline-none focus:border-ink resize-none"
                                    />
                                    {saState && (
                                        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 bg-[#cdeecb]/40 p-2.5 rounded-xl border border-emerald-500/20">
                                            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                            <span>Answer formatted for direct submission or clipboard paste</span>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )}

                        {/* Controls */}
                        <div className="flex items-center justify-between pt-4 border-t border-black/5">
                            <button
                                onClick={handleAutoSolve}
                                className="btn-dark px-5 py-2.5 text-xs sm:text-sm flex items-center gap-2"
                            >
                                <MousePointer className="w-3.5 h-3.5 text-emerald-400" />
                                <span>Double-Click to Solve</span>
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
