'use client';
import React, { useState } from 'react';
import { 
    Command, CheckCircle2, ShieldCheck, Zap, Camera, History
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GhostMode() {
    const [activeStep, setActiveStep] = useState<number>(0);

    const steps = [
        {
            stepNum: "01",
            title: "Activate with a single shortcut (⌘+Shift+X)",
            description: "No need to open secondary tabs, minimize your browser, or switch desktop spaces. Press your secret keybind and ExamGhost activates directly on the active quiz page.",
            icon: Zap,
            visual: (
                <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center p-6 border border-slate-200 rounded-xl">
                    <div className="flex items-center gap-2 mb-6">
                        <div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm text-slate-800 font-bold text-base">
                            <Command className="w-5 h-5 text-slate-700" />
                        </div>
                        <span className="text-slate-400 font-bold text-lg">+</span>
                        <div className="h-12 px-4 bg-white border border-slate-200 rounded-xl flex items-center justify-center shadow-sm text-slate-800 font-semibold text-sm">
                            Shift
                        </div>
                        <span className="text-slate-400 font-bold text-lg">+</span>
                        <div className="w-12 h-12 bg-blue-600 border border-blue-500 rounded-xl flex items-center justify-center shadow-sm text-white font-bold text-base">
                            X
                        </div>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-medium text-emerald-800">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Ghost Engine Ready in &lt;1.0s</span>
                    </div>
                </div>
            )
        },
        {
            stepNum: "02",
            title: "Silence Canvas focus-loss listeners",
            description: "ExamGhost neutralizes the browser window-blur and visibility-change events. The LMS continues receiving a steady 'page active' heartbeat so zero tab-switching events are written to your audit log.",
            icon: ShieldCheck,
            visual: (
                <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center p-6 border border-slate-200 rounded-xl">
                    <div className="w-full max-w-[280px] bg-white border border-slate-200 rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-2 text-xs font-mono">
                            <span className="text-slate-500">EventListener.blur</span>
                            <span className="text-emerald-700 font-bold">SILENCED</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden mb-3">
                            <div className="h-full bg-emerald-500 rounded-full w-full" />
                        </div>
                        <div className="p-2.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-medium flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-600" />
                            <span>Canvas log status: 100% Normal</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            stepNum: "03",
            title: "Snap-It crop tool for locked formulas (⌘+Shift+S)",
            description: "Can't copy text? Taking an organic chemistry exam or math test with complex graphs? Hit Snap-It to draw a quick box over any diagram and get instant multimodal step-by-step solving.",
            icon: Camera,
            visual: (
                <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center p-6 border border-slate-200 rounded-xl">
                    <div className="w-[240px] h-[130px] border-2 border-dashed border-blue-400 rounded-xl bg-white p-3 flex flex-col justify-between shadow-sm">
                        <div className="flex justify-between items-center text-[11px] font-mono text-blue-600">
                            <span>[Area: 480 × 260px]</span>
                            <span>Solved</span>
                        </div>
                        <div className="text-center font-mono text-xs font-bold text-slate-800 bg-slate-100 py-1.5 rounded">
                            f(x) = ∫ 2x · e^(x²) dx
                        </div>
                        <div className="flex justify-between items-center text-[11px] text-slate-600">
                            <span className="text-emerald-700 font-semibold">Answer: e^(x²) + C</span>
                            <span>99.9%</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            stepNum: "04",
            title: "Smart multi-attempt memory",
            description: "For quizzes with multiple attempts allowed, ExamGhost remembers verified correct responses and re-applies them automatically so you can achieve full marks on attempt #2.",
            icon: History,
            visual: (
                <div className="w-full h-full bg-slate-50 flex flex-col items-center justify-center p-6 border border-slate-200 rounded-xl">
                    <div className="w-full max-w-[260px] bg-white border border-slate-200 rounded-xl p-4 shadow-sm text-xs">
                        <div className="flex items-center justify-between mb-3 text-slate-600">
                            <span>Attempt 1 Score:</span>
                            <span className="text-blue-600 font-bold">85% Saved</span>
                        </div>
                        <div className="space-y-2 mb-3">
                            <div className="flex items-center justify-between p-2 rounded bg-emerald-50 text-emerald-800 border border-emerald-200 text-[11px]">
                                <span>Q1 - Q12 Correct</span>
                                <span className="font-semibold">Auto-Restored</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded bg-blue-50 text-blue-800 border border-blue-200 text-[11px]">
                                <span>Q13 - Q15 Retrying</span>
                                <span className="font-semibold">Solved</span>
                            </div>
                        </div>
                        <div className="text-center text-[11px] font-bold text-emerald-700">
                            Projected Attempt 2: 100% Score
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-white text-slate-900 border-b border-slate-200/80">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full text-xs font-semibold text-slate-700 mb-3">
                        <Zap className="w-3.5 h-3.5 text-blue-600" />
                        <span>Simple 4-Step Architecture</span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
                        How ExamGhost protects you
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600">
                        Easy for you to operate with intuitive shortcuts, technically invisible to proctoring detection.
                    </p>
                </div>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Step list (left) */}
                    <div className="lg:col-span-6 space-y-3">
                        {steps.map((step, idx) => {
                            const Icon = step.icon;
                            const isActive = activeStep === idx;
                            return (
                                <div
                                    key={idx}
                                    onClick={() => setActiveStep(idx)}
                                    className={`p-5 rounded-xl border text-left cursor-pointer transition-all ${
                                        isActive
                                            ? 'bg-blue-50/50 border-blue-500/80 shadow-sm'
                                            : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                                    }`}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                                            isActive ? 'bg-blue-600 text-white' : 'bg-slate-100 text-slate-600'
                                        }`}>
                                            {step.stepNum}
                                        </div>
                                        <h3 className={`text-sm sm:text-base font-semibold ${
                                            isActive ? 'text-blue-900' : 'text-slate-900'
                                        }`}>
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-xs text-slate-600 leading-relaxed pl-10">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Step visual interactive preview (right) */}
                    <div className="lg:col-span-6 h-[340px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                                className="w-full h-full"
                            >
                                {steps[activeStep].visual}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>

            </div>
        </section>
    );
}
