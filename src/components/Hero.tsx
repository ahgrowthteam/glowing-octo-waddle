"use client";

import React, { useState } from 'react';
import { 
    Bot, PlayCircle, Sparkles, Shield, Zap, CheckCircle2, Clock, 
    BarChart3, AlertTriangle, Check, Terminal, EyeOff, Layers, Camera,
    ExternalLink, ChevronRight
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
            setSelectedOption(1); // ATP option
        }, 650);
    };

    const handleReset = () => {
        setSolved(false);
        setSelectedOption(null);
        setIsScanning(false);
    };

    return (
        <section className="relative pt-28 pb-24 overflow-hidden bg-[#070b14] text-white">
            {/* Ambient background glows */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[450px] bg-gradient-to-b from-blue-600/15 via-indigo-600/10 to-transparent rounded-full blur-[140px] pointer-events-none" />
            <div className="absolute top-1/3 left-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute top-1/4 right-10 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[130px] pointer-events-none" />

            {/* Subtle Grid Pattern Overlay */}
            <div 
                className="absolute inset-0 opacity-[0.03] pointer-events-none"
                style={{ 
                    backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
                    backgroundSize: '40px 40px' 
                }} 
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Top Live Status & Trust Badge */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full backdrop-blur-md">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                        </span>
                        <span className="text-[12px] font-bold text-emerald-400 tracking-wide uppercase">
                            Undetected on Canvas v2026.10 & Blackboard
                        </span>
                    </div>

                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/5 border border-white/10 rounded-full backdrop-blur-md">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-[12px] font-semibold text-slate-300">
                            Trusted by 50,000+ Students Worldwide
                        </span>
                    </div>
                </div>

                {/* Hero Headline & Value Prop */}
                <div className="text-center max-w-4xl mx-auto mb-12">
                    <h1 className="text-4xl sm:text-6xl md:text-[4.2rem] font-extrabold tracking-tight text-white mb-6 leading-[1.08]">
                        Switch tabs & ace tests <br className="hidden md:block" />
                        without leaving a{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-emerald-400 bg-clip-text text-transparent italic">
                            single trace.
                        </span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl mx-auto font-normal leading-relaxed">
                        The only stealth AI extension that intercepts Canvas quiz-log focus tracking. Get instant, verified solutions overlaid on your screen with zero suspicious activity flags.
                    </p>

                    {/* Feature badges */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {[
                            { icon: Shield, text: "Zero Tab-Switch Logs", color: "text-emerald-400" },
                            { icon: Zap, text: "<1.2s Answer Speed", color: "text-blue-400" },
                            { icon: EyeOff, text: "Shadow DOM Stealth", color: "text-purple-400" },
                            { icon: Camera, text: "Snap-It Screenshot Solve", color: "text-amber-400" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/[0.04] border border-white/10 rounded-full text-xs font-semibold text-slate-300 backdrop-blur-sm">
                                <item.icon className={`w-3.5 h-3.5 ${item.color}`} />
                                {item.text}
                            </div>
                        ))}
                    </div>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a 
                            href="#pricing" 
                            className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-[15px] font-bold rounded-xl shadow-[0_0_30px_rgba(59,130,246,0.35)] hover:shadow-[0_0_45px_rgba(59,130,246,0.5)] transition-all flex items-center justify-center gap-3 hover:-translate-y-0.5 active:scale-95"
                        >
                            <FaChrome className="w-5 h-5" />
                            <span>Add to Chrome — Free</span>
                        </a>

                        <a 
                            href="#demo" 
                            className="w-full sm:w-auto px-7 py-4 bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 hover:border-white/20 rounded-xl text-[15px] font-semibold transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                        >
                            <PlayCircle className="w-5 h-5 text-blue-400" />
                            <span>Try Interactive Demo</span>
                        </a>
                    </div>

                    {/* Keyboard Shortcut HUD */}
                    <div className="mt-6 flex items-center justify-center gap-3 text-xs text-slate-400 font-mono">
                        <span className="flex items-center gap-1.5">
                            <kbd className="px-2 py-0.5 bg-white/10 border border-white/15 rounded text-[11px] text-slate-300">⌘/Ctrl</kbd>
                            +
                            <kbd className="px-2 py-0.5 bg-white/10 border border-white/15 rounded text-[11px] text-slate-300">Shift</kbd>
                            +
                            <kbd className="px-2 py-0.5 bg-blue-500/20 border border-blue-400/30 rounded text-[11px] text-blue-300 font-bold">X</kbd>
                            <span className="text-slate-400 ml-1">Solve</span>
                        </span>
                        <span className="text-slate-600">•</span>
                        <span className="flex items-center gap-1.5">
                            <kbd className="px-2 py-0.5 bg-white/10 border border-white/15 rounded text-[11px] text-slate-300">⌘/Ctrl</kbd>
                            +
                            <kbd className="px-2 py-0.5 bg-white/10 border border-white/15 rounded text-[11px] text-slate-300">Shift</kbd>
                            +
                            <kbd className="px-2 py-0.5 bg-amber-500/20 border border-amber-400/30 rounded text-[11px] text-amber-300 font-bold">S</kbd>
                            <span className="text-slate-400 ml-1">Snap-It</span>
                        </span>
                    </div>
                </div>

                {/* ========================================================= */}
                {/* DUAL INTERACTIVE DEMO: SIMULATOR vs TEACHER LOG INSPECTOR */}
                {/* ========================================================= */}
                <div id="demo" className="max-w-5xl mx-auto mt-6 mb-16">
                    {/* Mode Selector Tabs */}
                    <div className="flex justify-center mb-6">
                        <div className="bg-white/5 border border-white/10 p-1.5 rounded-2xl flex gap-2 backdrop-blur-md">
                            <button
                                onClick={() => setActiveTab('simulator')}
                                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                                    activeTab === 'simulator'
                                        ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                <Bot className="w-4 h-4" />
                                Student Quiz Simulator
                            </button>
                            <button
                                onClick={() => setActiveTab('teacherLog')}
                                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all ${
                                    activeTab === 'teacherLog'
                                        ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/30'
                                        : 'text-slate-400 hover:text-white'
                                }`}
                            >
                                <Terminal className="w-4 h-4" />
                                Professor Action Log (Proof)
                            </button>
                        </div>
                    </div>

                    {/* Window Container */}
                    <div className="relative rounded-2xl border border-white/10 bg-[#0d1424] shadow-[0_20px_70px_rgba(0,0,0,0.6)] overflow-hidden">
                        
                        {/* Browser Window Header */}
                        <div className="bg-[#0b101c] px-4 py-3 border-b border-white/10 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <div className="w-3 h-3 rounded-full bg-[#FF5F57]/80" />
                                <div className="w-3 h-3 rounded-full bg-[#FEBC2E]/80" />
                                <div className="w-3 h-3 rounded-full bg-[#27C840]/80" />
                            </div>

                            <div className="flex items-center gap-2 px-4 py-1.5 bg-black/40 border border-white/5 rounded-lg text-xs font-mono text-slate-400 max-w-sm w-full justify-center">
                                <Shield className="w-3 h-3 text-emerald-400" />
                                <span>canvas.university.edu/courses/3184/quizzes/5892</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-[10px] font-bold text-emerald-400 uppercase">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                    Ghost Active
                                </span>
                            </div>
                        </div>

                        {/* Content Area */}
                        <div className="p-6 sm:p-8">
                            <AnimatePresence mode="wait">
                                {activeTab === 'simulator' ? (
                                    <motion.div
                                        key="simulator"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="max-w-3xl mx-auto"
                                    >
                                        {/* Quiz Meta Bar */}
                                        <div className="flex flex-wrap items-center justify-between pb-4 mb-6 border-b border-white/10 gap-3">
                                            <div>
                                                <h4 className="text-sm font-bold text-slate-200">Biology 101 — Midterm Exam</h4>
                                                <p className="text-xs text-slate-400 font-mono">Question 14 of 30 • 2 Points</p>
                                            </div>
                                            <div className="flex items-center gap-3">
                                                <div className="flex items-center gap-1.5 text-xs text-slate-300 font-mono px-3 py-1 bg-white/5 border border-white/10 rounded-lg">
                                                    <Clock className="w-3.5 h-3.5 text-blue-400" />
                                                    <span>Time Remaining: 38:42</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Question Text */}
                                        <div className="mb-6">
                                            <p className="text-base sm:text-lg font-semibold text-white leading-relaxed">
                                                Which organelle is primarily responsible for the synthesis of adenosine triphosphate (ATP) via oxidative phosphorylation in eukaryotic cells?
                                            </p>
                                        </div>

                                        {/* Multiple Choice Options */}
                                        <div className="space-y-3 mb-8">
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
                                                        className={`relative flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl border transition-all cursor-pointer select-none ${
                                                            isCorrectOption
                                                                ? 'bg-emerald-500/10 border-emerald-500/50 text-emerald-200 shadow-[0_0_20px_rgba(16,185,129,0.15)]'
                                                                : isSelected
                                                                ? 'bg-blue-600/15 border-blue-500/40 text-white'
                                                                : 'bg-white/[0.02] border-white/5 hover:border-white/15 text-slate-300 hover:bg-white/[0.04]'
                                                        }`}
                                                    >
                                                        <div className={`w-6 h-6 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 transition-colors ${
                                                            isCorrectOption
                                                                ? 'border-emerald-400 bg-emerald-500 text-black'
                                                                : isSelected
                                                                ? 'border-blue-400 bg-blue-600 text-white'
                                                                : 'border-white/20 text-slate-400'
                                                        }`}>
                                                            {isCorrectOption ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : option.label}
                                                        </div>

                                                        <span className="text-sm font-medium flex-1">
                                                            {option.text}
                                                        </span>

                                                        {isCorrectOption && (
                                                            <div className="flex items-center gap-2">
                                                                <span className="text-[11px] font-mono px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded font-bold">
                                                                    99.8% Match
                                                                </span>
                                                            </div>
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
                                                    className="mb-6 p-4 rounded-xl bg-blue-600/10 border border-blue-500/30 overflow-hidden"
                                                >
                                                    <div className="flex items-start gap-3">
                                                        <Sparkles className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                                                        <div className="text-xs text-slate-300 space-y-1">
                                                            <div className="font-bold text-blue-300">ExamGhost Step-by-Step Breakdown:</div>
                                                            <p>
                                                                Mitochondria generate ~90% of cellular energy (ATP) through the electron transport chain and ATP synthase embedded in the inner mitochondrial membrane. The Golgi apparatus modifies proteins, while the endoplasmic reticulum synthesizes lipids/proteins.
                                                            </p>
                                                            <div className="text-[11px] text-emerald-400 pt-1 font-mono">
                                                                🛡️ Quiz focus retained • Zero tab-leave events generated
                                                            </div>
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>

                                        {/* Simulator Controls */}
                                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                                            <div className="text-xs text-slate-400">
                                                Click anywhere to test or trigger the automated AI solver:
                                            </div>

                                            <div className="flex items-center gap-3 w-full sm:w-auto">
                                                <button
                                                    onClick={handleReset}
                                                    className="px-4 py-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
                                                >
                                                    Reset
                                                </button>
                                                <button
                                                    onClick={handleSolve}
                                                    disabled={isScanning}
                                                    className="flex-1 sm:flex-initial px-5 py-2.5 bg-blue-600 hover:bg-blue-500 disabled:opacity-60 text-white text-xs font-bold rounded-xl shadow-lg shadow-blue-600/30 transition-all flex items-center justify-center gap-2 active:scale-95"
                                                >
                                                    {isScanning ? (
                                                        <>
                                                            <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
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
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-6"
                                    >
                                        <div className="text-center max-w-xl mx-auto mb-6">
                                            <h4 className="text-lg font-bold text-white mb-1">
                                                What Your Professor Sees: Teacher Log Inspector
                                            </h4>
                                            <p className="text-xs text-slate-400">
                                                Canvas logs every time your browser tab loses focus. See the difference ExamGhost makes in your official audit trail.
                                            </p>
                                        </div>

                                        {/* Side by side logs */}
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            
                                            {/* Attempt 1: Without ExamGhost */}
                                            <div className="rounded-xl border border-red-500/30 bg-red-950/20 p-5 flex flex-col justify-between">
                                                <div>
                                                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-red-500/20">
                                                        <span className="text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5">
                                                            <AlertTriangle className="w-3.5 h-3.5 text-red-400" />
                                                            Attempt 1: Without ExamGhost
                                                        </span>
                                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-red-500/20 text-red-300 font-bold">
                                                            FLAGGED (3 Tabs Left)
                                                        </span>
                                                    </div>

                                                    <div className="space-y-2.5 font-mono text-xs">
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
                                                        <div className="flex items-center gap-2 p-2 rounded bg-red-500/15 border border-red-500/30 text-red-300">
                                                            <span className="text-red-400 font-bold">00:04</span>
                                                            <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                                                            <span className="font-semibold">Stopped viewing the quiz page</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-slate-400">
                                                            <span className="text-slate-500">00:08</span>
                                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                                                            <span>Resumed quiz</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 p-2 rounded bg-red-500/15 border border-red-500/30 text-red-300">
                                                            <span className="text-red-400 font-bold">00:15</span>
                                                            <AlertTriangle className="w-3.5 h-3.5 text-red-400 shrink-0" />
                                                            <span className="font-semibold">Stopped viewing the quiz page</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-slate-400">
                                                            <span className="text-slate-500">00:21</span>
                                                            <span className="w-1.5 h-1.5 rounded-full bg-slate-500" />
                                                            <span>Answered question #1</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-5 pt-3 border-t border-red-500/20 text-[11px] text-red-300/80 leading-relaxed">
                                                    ⚠️ Canvas triggers automated academic dishonesty alerts when repeated focus loss is detected.
                                                </div>
                                            </div>

                                            {/* Attempt 2: With ExamGhost */}
                                            <div className="rounded-xl border border-emerald-500/40 bg-emerald-950/20 p-5 flex flex-col justify-between shadow-[0_0_30px_rgba(16,185,129,0.1)]">
                                                <div>
                                                    <div className="flex items-center justify-between mb-4 pb-3 border-b border-emerald-500/20">
                                                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                                                            <Shield className="w-3.5 h-3.5 text-emerald-400" />
                                                            Attempt 2: With ExamGhost
                                                        </span>
                                                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 font-bold">
                                                            100% CLEAN (0 Flags)
                                                        </span>
                                                    </div>

                                                    <div className="space-y-2.5 font-mono text-xs">
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
                                                        <div className="flex items-center gap-2 text-emerald-300 bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
                                                            <span className="text-emerald-400 font-bold">00:07</span>
                                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                                            <span>Answered question #1 (Ghost Active)</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-slate-400">
                                                            <span className="text-slate-500">00:12</span>
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                                            <span>Viewed question #2</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-emerald-300 bg-emerald-500/10 p-2 rounded border border-emerald-500/20">
                                                            <span className="text-emerald-400 font-bold">00:16</span>
                                                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                                                            <span>Answered question #2 (Ghost Active)</span>
                                                        </div>
                                                        <div className="flex items-center gap-2 text-slate-400">
                                                            <span className="text-slate-500">00:22</span>
                                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                                            <span>Viewed question #3</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="mt-5 pt-3 border-t border-emerald-500/20 text-[11px] text-emerald-300 leading-relaxed font-semibold">
                                                    ✅ ExamGhost blocks browser visibility listeners. Canvas records a continuous, flawless student session with zero leaves.
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
