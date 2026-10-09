"use client";

import React, { useState } from 'react';
import { 
    Bot, PlayCircle, Sparkles, Shield, Zap, CheckCircle2, Clock, 
    AlertTriangle, Check, Terminal, EyeOff, Camera, ArrowRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChrome } from 'react-icons/fa';

export default function Hero() {
    const [activeTab, setActiveTab] = useState<'simulator' | 'teacherLog'>('simulator');
    const [solved, setSolved] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isScanning, setIsScanning] = useState(false);

    const handleSolve = () => {
        setIsScanning(true);
        setTimeout(() => {
            setIsScanning(false);
            setSolved(true);
            setSelectedOption(1); // Mitochondria option
        }, 600);
    };

    const handleReset = () => {
        setSolved(false);
        setSelectedOption(null);
        setIsScanning(false);
    };

    return (
        <section className="relative pt-32 sm:pt-36 pb-24 overflow-hidden bg-[#060a14] text-white">
            {/* Atmospheric subtle radial illumination */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-blue-600/12 via-indigo-600/8 to-transparent rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/3 -left-48 w-[450px] h-[450px] bg-emerald-500/8 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute top-1/4 -right-48 w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Top Badge */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md shadow-[0_2px_15px_rgba(0,0,0,0.3)] hover:border-emerald-500/40 transition-all">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                        <span className="text-xs font-medium text-slate-300">
                            Undetected on <strong className="text-white font-semibold">Canvas v2026.10</strong>, Blackboard & Brightspace
                        </span>
                    </div>
                </div>

                {/* Hero Headline & Value Prop */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h1 className="text-4xl sm:text-6xl lg:text-[4rem] font-extrabold tracking-[-0.03em] text-white mb-6 leading-[1.08]">
                        The Invisible AI for <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-300 bg-clip-text text-transparent">
                            Canvas, Blackboard & Quizzes.
                        </span>
                    </h1>

                    <p className="text-base sm:text-lg lg:text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-normal leading-relaxed">
                        ExamGhost intercepts LMS focus-tracking events in real time. Get instant step-by-step solutions overlaid directly on your screen with zero audit flags.
                    </p>

                    {/* Action CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
                        <a 
                            href="#pricing" 
                            className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[15px] font-bold rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-[0_0_45px_rgba(59,130,246,0.5)] transition-all flex items-center justify-center gap-2.5 active:scale-95"
                        >
                            <FaChrome className="w-4 h-4" />
                            <span>Add to Chrome — Free</span>
                        </a>

                        <a 
                            href="#demo" 
                            className="w-full sm:w-auto px-7 py-3.5 bg-white/[0.05] hover:bg-white/[0.08] text-slate-200 border border-white/10 hover:border-white/20 rounded-xl text-[15px] font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                            <PlayCircle className="w-4 h-4 text-blue-400" />
                            <span>Interactive Simulator</span>
                        </a>
                    </div>

                    {/* Stealth Keybind Hints */}
                    <div className="inline-flex items-center gap-3 text-xs text-slate-400 font-mono py-1 px-3 bg-white/[0.02] border border-white/5 rounded-full">
                        <span className="flex items-center gap-1.5">
                            <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[11px] text-slate-300">⌘+Shift+X</kbd>
                            <span>Solve</span>
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1.5">
                            <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-[11px] text-slate-300">⌘+Shift+S</kbd>
                            <span>Snap-It</span>
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="text-emerald-400 font-semibold">0 Tab Swapped</span>
                    </div>
                </div>

                {/* ========================================================= */}
                {/* DUAL INTERACTIVE DEMO: SIMULATOR vs TEACHER LOG INSPECTOR */}
                {/* ========================================================= */}
                <div id="demo" className="max-w-4xl mx-auto mt-4">
                    {/* Mode Selector Tabs */}
                    <div className="flex justify-center mb-5">
                        <div className="bg-[#0b101c] border border-white/10 p-1 rounded-xl flex gap-1.5 shadow-lg">
                            <button
                                onClick={() => setActiveTab('simulator')}
                                className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                                    activeTab === 'simulator'
                                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                <Bot className="w-4 h-4" />
                                Student Quiz Simulator
                            </button>
                            <button
                                onClick={() => setActiveTab('teacherLog')}
                                className={`px-4 sm:px-5 py-2 rounded-lg text-xs sm:text-sm font-semibold flex items-center gap-2 transition-all ${
                                    activeTab === 'teacherLog'
                                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-600/30'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                <Terminal className="w-4 h-4" />
                                Professor Audit Log (Proof)
                            </button>
                        </div>
                    </div>

                    {/* Window Container */}
                    <div className="relative rounded-2xl border border-white/10 bg-[#090e1a] shadow-[0_20px_70px_rgba(0,0,0,0.7)] overflow-hidden">
                        
                        {/* Browser Window Header */}
                        <div className="bg-[#080d17] px-4 py-3 border-b border-white/[0.08] flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                                <div className="w-3 h-3 rounded-full bg-[#27C840]" />
                            </div>

                            <div className="flex items-center gap-2 px-3 py-1 bg-black/40 border border-white/5 rounded-lg text-xs font-mono text-slate-400 max-w-sm w-full justify-center">
                                <Shield className="w-3.5 h-3.5 text-emerald-400" />
                                <span className="truncate">canvas.university.edu/courses/3184/quizzes/5892</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-bold text-emerald-400 uppercase tracking-wide">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Stealth Active
                                </span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-5 sm:p-7">
                            <AnimatePresence mode="wait">
                                {activeTab === 'simulator' ? (
                                    <motion.div
                                        key="simulator"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.25 }}
                                    >
                                        {/* Quiz Meta Bar */}
                                        <div className="flex flex-wrap items-center justify-between pb-3.5 mb-5 border-b border-white/10 gap-3">
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-200">Molecular Biology • Midterm Examination</h4>
                                                <p className="text-xs text-slate-400 font-mono">Question 14 of 30 • 2 Points</p>
                                            </div>
                                            <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono px-2.5 py-1 bg-white/5 border border-white/10 rounded-lg">
                                                <Clock className="w-3.5 h-3.5 text-blue-400" />
                                                <span>Time: 38:42</span>
                                            </div>
                                        </div>

                                        {/* Question Text */}
                                        <div className="mb-5">
                                            <p className="text-sm sm:text-base font-medium text-white leading-relaxed">
                                                Which organelle is primarily responsible for the synthesis of adenosine triphosphate (ATP) via oxidative phosphorylation in eukaryotic cells?
                                            </p>
                                        </div>

                                        {/* Multiple Choice Options */}
                                        <div className="space-y-2.5 mb-6">
                                            {[
                                                { id: 0, label: "A", text: "Golgi apparatus" },
                                                { id: 1, label: "B", text: "Mitochondria", isCorrect: true },
                                                { id: 2, label: "C", text: "Endoplasmic reticulum" },
                                                { id: 3, label: "D", text: "Ribosome" }
                                            ].map((option) => {
                                                const isSelected = selectedOption === option.id;
                                                const isCorrectOption = solved && option.isCorrect;

                                                return (
                                                    <div
                                                        key={option.id}
                                                        onClick={() => setSelectedOption(option.id)}
                                                        className={`relative flex items-center gap-3 p-3 sm:p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
                                                            isCorrectOption
                                                                ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-100 shadow-[0_0_20px_rgba(16,185,129,0.12)]'
                                                                : isSelected
                                                                ? 'bg-blue-600/15 border-blue-500/40 text-white'
                                                                : 'bg-white/[0.02] border-white/5 hover:border-white/15 text-slate-300 hover:bg-white/[0.04]'
                                                        }`}
                                                    >
                                                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center text-[11px] font-bold shrink-0 transition-colors ${
                                                            isCorrectOption
                                                                ? 'border-emerald-400 bg-emerald-500 text-black'
                                                                : isSelected
                                                                ? 'border-blue-400 bg-blue-600 text-white'
                                                                : 'border-white/20 text-slate-400'
                                                        }`}>
                                                            {isCorrectOption ? <Check className="w-3 h-3 stroke-[3]" /> : option.label}
                                                        </div>

                                                        <span className="text-sm font-normal flex-1">
                                                            {option.text}
                                                        </span>

                                                        {isCorrectOption && (
                                                            <span className="text-[10px] font-mono px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-bold">
                                                                99.8% Match
                                                            </span>
                                                        )}
                                                    </div>
                                                );
                                            })}
                                        </div>

                                        {/* AI Explanation Popover (When Solved) */}
                                        <AnimatePresence>
                                            {solved && (
                                                <motion.div
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    className="mb-5 p-3.5 rounded-xl bg-blue-600/10 border border-blue-500/30 overflow-hidden"
                                                >
                                                    <div className="flex items-start gap-2.5">
                                                        <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                                        <div className="text-xs text-slate-300 space-y-1">
                                                            <div className="font-semibold text-blue-300">ExamGhost Deep Solution:</div>
                                                            <p className="leading-relaxed">
                                                                Mitochondria generate over 90% of cellular energy through oxidative phosphorylation and the electron transport chain. Golgi apparatus handles protein sorting; endoplasmic reticulum handles lipid synthesis.
                                                            </p>
                                                            <div className="text-[10px] text-emerald-400 pt-0.5 font-mono">
                                                                🛡️ Window focus retained continuously • 0 tab-leave events registered
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Simulator Controls */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-3.5 border-t border-white/10">
                                            <div className="text-xs text-slate-400">
                                                Click options or test automated solve:
                                            </div>

                                            <div className="flex items-center gap-2.5 w-full sm:w-auto">
                                                <button
                                                    onClick={handleReset}
                                                    className="px-3.5 py-2 text-xs font-medium text-slate-400 hover:text-white transition-colors"
                                                >
                                                    Reset
                                                </button>
                                                <button
                                                    onClick={handleSolve}
                                                    disabled={isScanning}
                                                    className="flex-1 sm:flex-initial px-4 py-2 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white text-xs font-semibold rounded-lg shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 active:scale-95"
                                                >
                                                    {isScanning ? (
                                                        <>
                                                            <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                                            <span>Scanning DOM...</span>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <Sparkles className="w-3.5 h-3.5" />
                                                            <span>Solve with ExamGhost (⌘+Shift+X)</span>
                                                        </>
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ) : (
                                    <motion.div
                                        key="teacherLog"
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -8 }}
                                        transition={{ duration: 0.25 }}
                                        className="space-y-4"
                                    >
                                        <div className="text-center max-w-xl mx-auto mb-4">
                                            <h4 className="text-base font-bold text-white mb-1">
                                                What Your Professor Sees: Teacher Log Inspector
                                            </h4>
                                            <p className="text-xs text-slate-400">
                                                Canvas monitors whenever your tab loses focus. See how ExamGhost keeps your audit trail 100% spotless.
                                            </p>
                                        </div>

                                        {/* Side by side logs */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            
                                            {/* Attempt 1: Without ExamGhost */}
                                            <div className="rounded-xl border border-rose-500/30 bg-rose-950/20 p-4 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-rose-500/20">
                                                        <span className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                                                            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                                                            Without ExamGhost
                                                        </span>
                                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 font-bold">
                                                            FLAGGED (3 Tab Leaves)
                                                        </span>
                                                    </div>

                                                    <div className="space-y-2 font-mono text-[11px]">
                                                        <div className="flex items-center gap-2 text-slate-400">
                                                            <span className="text-slate-500">00:01</span>
                                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                                                            <span>Session started</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-slate-400">
                                                            <span className="text-slate-500">00:03</span>
                                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                                                            <span>Viewed question #1</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 p-1.5 rounded bg-rose-500/15 border border-rose-500/30 text-rose-300">
                                                            <span className="text-rose-400 font-bold">00:04</span>
                                                            <AlertTriangle className="w-3 h-3 text-rose-400 shrink-0" />
                                                            <span className="font-semibold">Stopped viewing the quiz page</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-slate-400">
                                                            <span className="text-slate-500">00:08</span>
                                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                                                            <span>Resumed quiz</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 p-1.5 rounded bg-rose-500/15 border border-rose-500/30 text-rose-300">
                                                            <span className="text-rose-400 font-bold">00:15</span>
                                                            <AlertTriangle className="w-3 h-3 text-rose-400 shrink-0" />
                                                            <span className="font-semibold">Stopped viewing the quiz page</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-4 pt-2.5 border-t border-rose-500/20 text-[10px] text-rose-300/90 leading-relaxed">
                                                    ⚠️ Canvas triggers automated academic review alerts when tab leaves exceed threshold.
                                                </div>
                                            </div>

                                            {/* Attempt 2: With ExamGhost */}
                                            <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-4 flex flex-col justify-between shadow-[0_0_25px_rgba(16,185,129,0.08)]">
                                                <div>
                                                    <div className="flex items-center justify-between mb-3 pb-2.5 border-b border-emerald-500/20">
                                                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                                                            <Shield className="w-3.5 h-3.5 text-emerald-400" />
                                                            With ExamGhost
                                                        </span>
                                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                                                            100% CLEAN (0 Flags)
                                                        </span>
                                                    </div>

                                                    <div className="space-y-2 font-mono text-[11px]">
                                                        <div className="flex items-center gap-2 text-slate-400">
                                                            <span className="text-slate-500">00:01</span>
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                                            <span>Session started</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-slate-400">
                                                            <span className="text-slate-500">00:03</span>
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                                            <span>Viewed question #1</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-emerald-300 bg-emerald-500/10 p-1.5 rounded border border-emerald-500/20">
                                                            <span className="text-emerald-400 font-bold">00:07</span>
                                                            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                                                            <span>Answered question #1 (Ghost Active)</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-slate-400">
                                                            <span className="text-slate-500">00:12</span>
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                                            <span>Viewed question #2</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-emerald-300 bg-emerald-500/10 p-1.5 rounded border border-emerald-500/20">
                                                            <span className="text-emerald-400 font-bold">00:16</span>
                                                            <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                                                            <span>Answered question #2 (Ghost Active)</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-4 pt-2.5 border-t border-emerald-500/20 text-[10px] text-emerald-300 leading-relaxed font-medium">
                                                    ✅ ExamGhost blocks blur listeners and transmits active heartbeats. Zero warnings logged.
                                                </div>
                                            </div>

                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
