'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
    Camera, Sparkles, CheckCircle2, RotateCcw, 
    ArrowRight, Check, Eye, Lock, FileText, 
    Sliders, Zap, ShieldCheck, ChevronRight
} from 'lucide-react';

export default function DemoVideo() {
    const [step, setStep] = useState<1 | 2 | 3 | 4>(2);
    const [isSniping, setIsSniping] = useState(false);
    const [answerApplied, setAnswerApplied] = useState(false);
    const [activeTab, setActiveTab] = useState<'chemistry' | 'math' | 'diagram'>('chemistry');

    // Auto-advance loop if not manually clicked
    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev >= 4 ? 1 : ((prev + 1) as 1 | 2 | 3 | 4)));
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    // Sync answerApplied state with step 4
    useEffect(() => {
        if (step === 4) {
            setAnswerApplied(true);
        } else if (step === 1) {
            setAnswerApplied(false);
        }
    }, [step]);

    const handleTriggerSnip = () => {
        setAnswerApplied(false);
        setStep(1);
        setTimeout(() => setStep(2), 600);
        setTimeout(() => setStep(3), 1600);
        setTimeout(() => {
            setStep(4);
            setAnswerApplied(true);
        }, 2800);
    };

    return (
        <section className="py-20 md:py-32 bg-cream text-ink border-b border-black/5" id="demo">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>SNAP-IT SNIPING DEMO</span>
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-5">
                        Screenshot & Draw to Solve.<br />
                        <span className="text-ink-muted font-normal">(“Snap It”)</span>
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                        Can’t double-click a question? No problem. Hit <kbd className="px-2 py-0.5 rounded bg-white border border-black/10 text-xs font-mono font-bold text-ink shadow-xs">⌘ + Shift + S</kbd> or right-click → <span className="font-semibold text-ink">Solve with Screenshot</span>. Drag a crop box over any diagram, equation, or locked text and let AI solve it instantly.
                    </p>

                    {/* Subject Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-black/10 text-ink shadow-xs flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            Chemistry Reagents
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-black/10 text-ink shadow-xs flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                            Calculus & LaTeX
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-black/10 text-ink shadow-xs flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                            Locked Canvas Quizzes
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white border border-black/10 text-ink shadow-xs flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                            Scanned Worksheets & PDFs
                        </span>
                    </div>
                </div>

                {/* macOS Interactive Sniping Sandbox Frame */}
                <div className="max-w-4xl mx-auto rounded-[32px] sm:rounded-[40px] bg-white border border-black/10 shadow-lift overflow-hidden">
                    
                    {/* Window Title Bar */}
                    <div className="bg-[#f7f5f0] border-b border-black/5 px-4 sm:px-6 py-3.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 inline-block" />
                            <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 inline-block" />
                            <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 inline-block" />
                            <span className="text-xs font-semibold text-ink-muted ml-2 font-mono truncate">
                                🔒 moodle.university.edu/mod/quiz/attempt.php?attempt=4819
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={handleTriggerSnip}
                                className="px-2.5 py-1 rounded-lg bg-ink text-white text-[11px] font-bold flex items-center gap-1.5 hover:bg-black transition-colors"
                            >
                                <Camera className="w-3 h-3 text-emerald-400" />
                                <span>Simulate ⌘+Shift+S</span>
                            </button>
                        </div>
                    </div>

                    {/* Interactive Snip Simulation Viewport */}
                    <div className="relative bg-[#111319] text-white p-5 sm:p-8 min-h-[460px] flex flex-col justify-between overflow-hidden">
                        
                        {/* Overlay Darkening when in Crop Mode (Step 1 & 2) */}
                        <div 
                            className={`absolute inset-0 bg-black/60 backdrop-blur-[1px] transition-opacity duration-300 z-10 pointer-events-none ${
                                step >= 1 && step <= 3 ? 'opacity-100' : 'opacity-0'
                            }`} 
                        />

                        {/* Top Bar inside simulated quiz */}
                        <div className="relative z-0 flex items-center justify-between border-b border-white/10 pb-3 mb-5">
                            <div>
                                <span className="text-xs font-mono text-white/75 block">Organic Chemistry II · Final Exam</span>
                                <span className="text-sm font-semibold text-white">Question 23 of 40 (3.0 pts)</span>
                            </div>
                            <span className="text-xs font-mono px-2.5 py-1 rounded bg-white/10 text-white/80">
                                Time Remaining: 38:42
                            </span>
                        </div>

                        {/* Question Area & Crop Selector */}
                        <div className="relative z-0 max-w-2xl mx-auto w-full my-auto">
                            
                            {/* The Question Box */}
                            <div className="relative p-4 rounded-2xl bg-white/5 border border-white/10 mb-4">
                                
                                {/* Dashed Snip Crop Box (Active in Step 2 & 3) */}
                                {(step === 2 || step === 3) && (
                                    <div className="absolute -inset-2 border-2 border-dashed border-emerald-400 rounded-2xl bg-emerald-500/10 pointer-events-none z-20 transition-all duration-300 animate-pulse">
                                        <div className="absolute -top-3 left-4 bg-white text-emerald-950 border border-emerald-400 text-[10px] font-black uppercase px-2 py-0.5 rounded shadow-sm flex items-center gap-1">
                                            <Camera className="w-3 h-3 text-emerald-700" />
                                            <span>Snip Area · OCR Active</span>
                                        </div>
                                        {/* Crop Corner Anchors */}
                                        <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border border-emerald-600 rounded-xs" />
                                        <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border border-emerald-600 rounded-xs" />
                                        <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border border-emerald-600 rounded-xs" />
                                        <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border border-emerald-600 rounded-xs" />
                                    </div>
                                )}

                                <p className="text-sm sm:text-base font-medium text-white/90 leading-relaxed mb-4">
                                    <span className="font-bold text-amber-400 mr-2">Q23.</span>
                                    Which of the following reagents would best accomplish the conversion of a secondary alcohol to a ketone without causing over-oxidation?
                                </p>

                                {/* Options */}
                                <div className="space-y-2">
                                    {[
                                        { key: 'A', text: 'KMnO₄ / H₂SO₄ (hot, concentrated)', correct: false },
                                        { key: 'B', text: 'PCC (Pyridinium chlorochromate) in CH₂Cl₂', correct: true },
                                        { key: 'C', text: 'Jones reagent (CrO₃ / H₂SO₄ in acetone)', correct: false },
                                        { key: 'D', text: 'LiAlH₄ in anhydrous ether', correct: false }
                                    ].map((opt) => {
                                        const isSolved = opt.correct && answerApplied;
                                        return (
                                            <div 
                                                key={opt.key}
                                                className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-between text-xs sm:text-sm ${
                                                    isSolved
                                                        ? 'bg-emerald-500/20 border-emerald-400 text-white shadow-lg shadow-emerald-500/20'
                                                        : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10'
                                                }`}
                                            >
                                                <div className="flex items-center gap-3">
                                                    <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border transition-colors ${
                                                        isSolved 
                                                            ? 'bg-emerald-400 text-black border-emerald-300' 
                                                            : 'border-white/30 text-white/60'
                                                    }`}>
                                                        {isSolved ? '✓' : opt.key}
                                                    </span>
                                                    <span>{opt.text}</span>
                                                </div>
                                                {isSolved && (
                                                    <span className="text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                                        Auto-Selected
                                                    </span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        {/* Step 3 Loader: AI Analyzing Screen */}
                        {step === 3 && (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 bg-black/85 backdrop-blur-md border border-emerald-500/30 rounded-full px-5 py-2.5 flex items-center gap-3 shadow-2xl animate-fade-in">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                                </div>
                                <span className="text-xs font-semibold text-emerald-300">
                                    Analyzing screenshot & chemistry reagents...
                                </span>
                            </div>
                        )}

                        {/* Step 4 Popup: Step-by-Step Reasoner Drawer (Explain Mode) */}
                        {step === 4 && (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 w-[92%] sm:w-[420px] bg-[#1a1b24] border border-white/20 rounded-2xl p-5 shadow-2xl shadow-black/80 animate-fade-in">
                                <div className="flex items-center justify-between pb-2.5 border-b border-white/10 mb-3">
                                    <div className="flex items-center gap-2">
                                        <span className="w-6 h-6 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-xs font-bold">
                                            ✓
                                        </span>
                                        <span className="text-xs font-bold text-white uppercase tracking-wider">
                                            ExamGhost Solution
                                        </span>
                                    </div>
                                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                                        Answer Identified
                                    </span>
                                </div>

                                <div className="space-y-2.5 text-left mb-4">
                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/75 block mb-1">
                                            Correct Choice
                                        </span>
                                        <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-xs font-bold text-emerald-300 flex items-center gap-2">
                                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                            <span>B. PCC (Pyridinium chlorochromate) in CH₂Cl₂</span>
                                        </div>
                                    </div>

                                    <div>
                                        <span className="text-[10px] font-bold uppercase tracking-wider text-white/75 block mb-1">
                                            Step-by-Step Reasoning
                                        </span>
                                        <p className="text-xs text-white/80 leading-relaxed bg-white/5 p-2.5 rounded-xl border border-white/5">
                                            PCC is a mild oxidizing agent that selectively oxidizes secondary alcohols to ketones. Unlike KMnO₄ or Jones reagent, PCC halts at the ketone stage without cleaving C-C bonds or causing over-oxidation. LiAlH₄ is a reducing agent.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <button 
                                        onClick={() => setStep(2)}
                                        className="flex-1 py-2 text-xs font-semibold rounded-xl bg-white/10 text-white/80 hover:bg-white/15 transition-colors"
                                    >
                                        Close
                                    </button>
                                    <button 
                                        onClick={() => setAnswerApplied(true)}
                                        className="flex-1 py-2 text-xs font-bold rounded-xl bg-emerald-500 text-black hover:bg-emerald-400 transition-colors flex items-center justify-center gap-1 shadow-sm"
                                    >
                                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        <span>Apply Answer</span>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Interactive 4-Step Visual Timeline */}
                        <div className="relative z-0 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs">
                            <div className="flex items-center gap-2 sm:gap-4">
                                {[
                                    { s: 1, label: '1. Press shortcut (⌘+Shift+S)' },
                                    { s: 2, label: '2. Crop question' },
                                    { s: 3, label: '3. AI analyzes' },
                                    { s: 4, label: '4. Answer applied' }
                                ].map((item) => (
                                    <button
                                        key={item.s}
                                        onClick={() => setStep(item.s as 1 | 2 | 3 | 4)}
                                        className={`flex items-center gap-1.5 transition-colors ${
                                            step === item.s 
                                                ? 'text-emerald-400 font-bold' 
                                                : step > item.s 
                                                    ? 'text-white/80' 
                                                    : 'text-white/75'
                                        }`}
                                    >
                                        <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold ${
                                            step === item.s 
                                                ? 'bg-emerald-400 text-black' 
                                                : step > item.s 
                                                    ? 'bg-white/20 text-white' 
                                                    : 'bg-white/10 text-white/80'
                                        }`}>
                                            {item.s}
                                        </span>
                                        <span className="hidden sm:inline">{item.label}</span>
                                    </button>
                                ))}
                            </div>

                            <button
                                onClick={handleTriggerSnip}
                                className="flex items-center gap-1 text-[11px] text-white/75 hover:text-white transition-colors"
                            >
                                <RotateCcw className="w-3 h-3" />
                                <span>Replay</span>
                            </button>
                        </div>

                    </div>

                    {/* Bottom Features Strip */}
                    <div className="bg-[#faf8f5] p-5 sm:p-6 border-t border-black/5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-ink">Bypasses Text-Selection Locks</span>
                            <span className="text-[11px] text-ink-muted">Canvas-rendered math & locked PDFs</span>
                        </div>
                        <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-black/5 py-2 sm:py-0">
                            <span className="text-xs font-bold text-ink">Under 350ms Vision OCR</span>
                            <span className="text-[11px] text-ink-muted">In-memory screenshot, zero file uploads</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-ink">Reasoning Step-by-Step</span>
                            <span className="text-[11px] text-ink-muted">Shows formula proof before applying</span>
                        </div>
                    </div>

                </div>

                {/* Sub-banner linking to full Interactive /demo */}
                <div className="mt-8 text-center">
                    <Link
                        href="/canvas-quiz-solver-free-demo"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-emerald-500/30 text-emerald-800 text-xs sm:text-sm font-semibold shadow-xs hover:bg-emerald-50 hover:border-emerald-500/50 transition-all group"
                    >
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Want to test real Canvas double-click solving live?</span>
                        <span className="font-bold underline group-hover:translate-x-0.5 transition-transform flex items-center">
                            Try the Interactive Canvas Sandbox →
                        </span>
                    </Link>
                </div>

            </div>
        </section>
    );
}
