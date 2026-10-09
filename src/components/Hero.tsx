"use client";

import React, { useState } from 'react';
import { 
    Bot, PlayCircle, Shield, CheckCircle2, Clock, 
    Check, Terminal, Eye, Sparkles, RefreshCw, Lock
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
        }, 500);
    };

    const handleReset = () => {
        setSolved(false);
        setSelectedOption(null);
        setIsScanning(false);
    };

    return (
        <section className="relative pt-32 sm:pt-36 pb-20 overflow-hidden bg-white text-slate-900 border-b border-slate-100">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Top Badge */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-700 shadow-sm">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Undetected on Canvas, Blackboard, Moodle & Brightspace</span>
                    </div>
                </div>

                {/* Hero Headline & Subtitle */}
                <div className="text-center max-w-3xl mx-auto mb-10">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6 leading-tight">
                        The invisible homework & quiz helper for Canvas.
                    </h1>
                    <p className="text-slate-600 text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto">
                        ExamGhost blocks focus-tracking and tab-switch events directly in your browser. Get answers overlaid in your quiz without triggering alerts in your professor&apos;s log.
                    </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-14">
                    <a
                        href="#pricing"
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm shadow-sm transition-all"
                    >
                        <FaChrome className="w-4 h-4 text-blue-400" />
                        <span>Add to Chrome — Free</span>
                    </a>
                    <button
                        onClick={() => {
                            setActiveTab('simulator');
                            handleSolve();
                        }}
                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-semibold text-sm shadow-sm transition-colors"
                    >
                        <PlayCircle className="w-4 h-4 text-slate-500" />
                        <span>Try Interactive Demo</span>
                    </button>
                </div>

                {/* Hotkeys micro-bar */}
                <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-slate-500 mb-10">
                    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-md font-mono text-slate-700">
                        ⌘+Shift+X Solve
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-100 rounded-md font-mono text-slate-700">
                        ⌘+Shift+S Snap-It OCR
                    </span>
                    <span className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-md font-medium">
                        0 Tab Leaves Logged
                    </span>
                </div>

                {/* Segmented Control Tabs */}
                <div className="flex justify-center mb-6">
                    <div className="inline-flex p-1 bg-slate-100 border border-slate-200 rounded-xl text-xs font-semibold">
                        <button
                            onClick={() => setActiveTab('simulator')}
                            className={`px-4 py-2 rounded-lg transition-all ${
                                activeTab === 'simulator'
                                    ? 'bg-white text-slate-900 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            Student Quiz View
                        </button>
                        <button
                            onClick={() => setActiveTab('teacherLog')}
                            className={`px-4 py-2 rounded-lg transition-all ${
                                activeTab === 'teacherLog'
                                    ? 'bg-white text-slate-900 shadow-sm'
                                    : 'text-slate-600 hover:text-slate-900'
                            }`}
                        >
                            Professor Audit Log (Proof)
                        </button>
                    </div>
                </div>

                {/* Simulator Window */}
                <div className="max-w-4xl mx-auto rounded-2xl bg-white border border-slate-200 shadow-lg overflow-hidden">
                    
                    {/* Browser Chrome Header */}
                    <div className="bg-slate-50 border-b border-slate-200 px-4 py-3 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-slate-300" />
                            <span className="w-3 h-3 rounded-full bg-slate-300" />
                            <span className="w-3 h-3 rounded-full bg-slate-300" />
                        </div>
                        <div className="flex items-center gap-2 bg-white border border-slate-200 rounded-md px-3 py-1 text-xs text-slate-600 font-mono w-full max-w-sm justify-center">
                            <Lock className="w-3 h-3 text-slate-400" />
                            <span className="truncate">canvas.university.edu/courses/3184/quizzes/58201</span>
                        </div>
                        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200 text-[11px] font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>Stealth Active</span>
                        </div>
                    </div>

                    {/* Window Content */}
                    <div className="p-6 sm:p-8">
                        <AnimatePresence mode="wait">
                            {activeTab === 'simulator' ? (
                                <motion.div
                                    key="simulator"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    {/* Quiz Metadata */}
                                    <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-6 text-xs text-slate-500 font-medium">
                                        <div className="flex items-center gap-2">
                                            <span className="font-semibold text-slate-800">Molecular Biology • Midterm Examination</span>
                                            <span>•</span>
                                            <span>Question 14 of 30</span>
                                        </div>
                                        <div className="flex items-center gap-1 text-slate-600">
                                            <Clock className="w-3.5 h-3.5" />
                                            <span>Time remaining: 38:42</span>
                                        </div>
                                    </div>

                                    {/* Question Title */}
                                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 mb-6 leading-snug">
                                        Which organelle is primarily responsible for the synthesis of adenosine triphosphate (ATP) via oxidative phosphorylation in eukaryotic cells?
                                    </h3>

                                    {/* Options List */}
                                    <div className="space-y-3 mb-6">
                                        {[
                                            { id: 0, label: "A", text: "Golgi apparatus" },
                                            { id: 1, label: "B", text: "Mitochondria" },
                                            { id: 2, label: "C", text: "Endoplasmic reticulum" },
                                            { id: 3, label: "D", text: "Ribosome" },
                                        ].map((option) => {
                                            const isCorrectAnswer = option.id === 1;
                                            const isSelected = selectedOption === option.id;
                                            const showAsSolved = solved && isCorrectAnswer;

                                            return (
                                                <div
                                                    key={option.id}
                                                    onClick={() => setSelectedOption(option.id)}
                                                    className={`p-3.5 sm:p-4 rounded-xl border text-sm flex items-center justify-between cursor-pointer transition-all ${
                                                        showAsSolved
                                                            ? 'border-emerald-500 bg-emerald-50/70 text-emerald-950 font-medium'
                                                            : isSelected
                                                            ? 'border-blue-500 bg-blue-50/50 text-slate-900'
                                                            : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50/50 text-slate-700'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-semibold ${
                                                            showAsSolved
                                                                ? 'bg-emerald-600 text-white'
                                                                : isSelected
                                                                ? 'bg-blue-600 text-white'
                                                                : 'bg-slate-100 text-slate-600'
                                                        }`}>
                                                            {option.label}
                                                        </span>
                                                        <span>{option.text}</span>
                                                    </div>

                                                    {showAsSolved && (
                                                        <span className="text-xs font-semibold text-emerald-700 flex items-center gap-1">
                                                            <Check className="w-3.5 h-3.5" />
                                                            <span>Correct Answer</span>
                                                        </span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Solution Explanation Box */}
                                    {solved && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 mb-6"
                                        >
                                            <div className="font-semibold mb-1 flex items-center gap-1.5 text-emerald-800">
                                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                                <span>ExamGhost In-DOM Solution (0.8s)</span>
                                            </div>
                                            <p className="leading-relaxed text-emerald-900/90">
                                                Mitochondria are the primary site of cellular respiration, generating greater than 90% of cellular ATP via the electron transport chain and ATP synthase on the inner mitochondrial membrane.
                                            </p>
                                        </motion.div>
                                    )}

                                    {/* Action Bar */}
                                    <div className="flex items-center justify-between pt-4 border-t border-slate-200 text-xs text-slate-500">
                                        <span>Click options or trigger auto-solve:</span>
                                        <div className="flex items-center gap-2">
                                            {solved && (
                                                <button
                                                    onClick={handleReset}
                                                    className="px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-600 transition-colors"
                                                >
                                                    Reset
                                                </button>
                                            )}
                                            <button
                                                onClick={handleSolve}
                                                disabled={isScanning}
                                                className="px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium shadow-sm transition-colors flex items-center gap-1.5"
                                            >
                                                {isScanning ? (
                                                    <>
                                                        <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                                                        <span>Solving...</span>
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
                                    transition={{ duration: 0.2 }}
                                >
                                    {/* Teacher Log Header */}
                                    <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                                        <div className="flex items-center justify-between text-xs text-slate-600 mb-2">
                                            <span className="font-semibold text-slate-900">Canvas Quiz Action Log Inspector</span>
                                            <span className="text-emerald-700 font-medium">Status: Clean • Zero Flags</span>
                                        </div>
                                        <p className="text-xs text-slate-500 leading-relaxed">
                                            This is the exact administrative view your instructor or teaching assistant sees in Canvas SpeedGrader.
                                        </p>
                                    </div>

                                    {/* Event Timeline Table */}
                                    <div className="border border-slate-200 rounded-xl overflow-hidden mb-6 text-xs">
                                        <div className="bg-slate-50 px-4 py-2.5 font-semibold text-slate-700 border-b border-slate-200 grid grid-cols-12 gap-2">
                                            <span className="col-span-3">Timestamp</span>
                                            <span className="col-span-6">Action Recorded by Canvas</span>
                                            <span className="col-span-3 text-right">Audit Flag</span>
                                        </div>
                                        <div className="divide-y divide-slate-100 font-mono">
                                            <div className="px-4 py-3 grid grid-cols-12 gap-2 items-center text-slate-700 bg-white">
                                                <span className="col-span-3 text-slate-500">10:00:15 AM</span>
                                                <span className="col-span-6">Started quiz attempt #1</span>
                                                <span className="col-span-3 text-right text-emerald-600 font-semibold">Normal</span>
                                            </div>
                                            <div className="px-4 py-3 grid grid-cols-12 gap-2 items-center text-slate-700 bg-white">
                                                <span className="col-span-3 text-slate-500">10:04:22 AM</span>
                                                <span className="col-span-6">Answered Question 13</span>
                                                <span className="col-span-3 text-right text-emerald-600 font-semibold">Normal</span>
                                            </div>
                                            <div className="px-4 py-3 grid grid-cols-12 gap-2 items-center text-slate-700 bg-emerald-50/50">
                                                <span className="col-span-3 text-slate-500">10:06:40 AM</span>
                                                <span className="col-span-6 font-medium text-emerald-900">Answered Question 14 (ExamGhost solved)</span>
                                                <span className="col-span-3 text-right text-emerald-600 font-semibold">0 Tab Switches</span>
                                            </div>
                                            <div className="px-4 py-3 grid grid-cols-12 gap-2 items-center text-slate-700 bg-white">
                                                <span className="col-span-3 text-slate-500">10:08:10 AM</span>
                                                <span className="col-span-6">Viewed Question 15</span>
                                                <span className="col-span-3 text-right text-emerald-600 font-semibold">Normal</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Proof summary callout */}
                                    <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                                        <div className="flex items-center gap-2">
                                            <Shield className="w-4 h-4 text-emerald-600 shrink-0" />
                                            <span><strong>Zero &apos;Stopped viewing page&apos; alerts:</strong> Focus-interception prevented Canvas from logging tab loss.</span>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
}
