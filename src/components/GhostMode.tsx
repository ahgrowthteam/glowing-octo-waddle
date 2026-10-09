'use client';
import React, { useState } from 'react';
import { 
    Command, CheckCircle2, Bot, Sparkles, ChevronDown, 
    Crosshair, ShieldCheck, Zap, Camera, History, Layers
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function GhostMode() {
    const [activeStep, setActiveStep] = useState<number>(0);

    const steps = [
        {
            tag: "Step 01",
            title: "Instant In-DOM Activation (⌘+Shift+X)",
            description: "No need to open new tabs, minimize windows, or switch apps. Hit your secret shortcut, and ExamGhost activates invisibly right inside your current browser page.",
            icon: Zap,
            visual: (
                <div className="w-full h-full bg-[#0a0f1d] flex flex-col items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #3b82f6 1px, transparent 0)', backgroundSize: '20px 20px' }} />
                    
                    {/* Glowing Keybind visual */}
                    <div className="relative z-10 flex items-center gap-2.5 sm:gap-3 mb-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shadow-lg text-white font-bold text-base sm:text-lg">
                            <Command className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="text-slate-500 font-bold text-lg">+</span>
                        <div className="h-12 sm:h-14 px-4 sm:px-5 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center shadow-lg text-white font-semibold text-sm sm:text-base">
                            Shift
                        </div>
                        <span className="text-slate-500 font-bold text-lg">+</span>
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 border border-blue-400/40 rounded-xl flex items-center justify-center shadow-[0_0_25px_rgba(37,99,235,0.5)] text-white font-bold text-base sm:text-lg">
                            X
                        </div>
                    </div>

                    <div className="relative z-10 inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/30 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                            Ghost Engine Active • Ready in 0.8s
                        </span>
                    </div>
                </div>
            )
        },
        {
            tag: "Step 02",
            title: "Proctor & Visibility API Interception",
            description: "ExamGhost neutralizes Canvas's window-blur and visibility-change listeners. The LMS continues receiving a steady 'page active' heartbeat so zero tab-switching events are written to your audit log.",
            icon: ShieldCheck,
            visual: (
                <div className="w-full h-full bg-[#0a0f1d] flex flex-col items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #10b981 1px, transparent 0)', backgroundSize: '20px 20px' }} />

                    {/* Shield scanner visual */}
                    <div className="relative z-10 w-full max-w-[280px] bg-white/[0.03] border border-white/10 rounded-2xl p-4 backdrop-blur-md">
                        <div className="flex items-center justify-between mb-3 text-xs">
                            <span className="text-slate-400 font-mono">EventListener.blur</span>
                            <span className="text-emerald-400 font-bold font-mono">INTERCEPTED</span>
                        </div>
                        <div className="h-1.5 bg-white/5 rounded-full overflow-hidden mb-4">
                            <div className="h-full bg-emerald-500 rounded-full w-full" />
                        </div>
                        <div className="p-2.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 font-mono flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                            <span>Canvas audit status: 100% Normal</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            tag: "Step 03",
            title: "Snap-It: Area Screenshot Solve (⌘+Shift+S)",
            description: "Can't highlight the question? Dealing with chemistry molecular diagrams, calculus graphs, or locked PDFs? Hit Snap-It, drag a crop box around any area, and our multimodal AI solves it instantly.",
            icon: Camera,
            visual: (
                <div className="w-full h-full bg-[#0a0f1d] flex flex-col items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #f59e0b 1px, transparent 0)', backgroundSize: '20px 20px' }} />

                    {/* Crop Target Box */}
                    <div className="relative z-10 w-[240px] h-[130px] border-2 border-dashed border-amber-400/80 rounded-xl bg-amber-500/5 p-3 flex flex-col justify-between">
                        <div className="flex justify-between items-center text-[10px] font-mono text-amber-300">
                            <span>[Crop: 480 × 260px]</span>
                            <span className="animate-pulse">Analyzing Formula...</span>
                        </div>
                        <div className="text-center font-mono text-xs font-bold text-white bg-black/50 py-1 rounded">
                            f(x) = ∫ 2x·e^(x²) dx
                        </div>
                        <div className="flex justify-between items-center text-[10px] text-slate-400">
                            <span className="text-emerald-400 font-bold">Answer: e^(x²) + C</span>
                            <span>Conf: 99.9%</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            tag: "Step 04",
            title: "Smart 2nd-Attempt Auto Memory",
            description: "ExamGhost remembers your past answers, identifies previously high-scoring responses, and auto-fills correct answers across multiple quiz attempts for maximum GPA improvement.",
            icon: History,
            visual: (
                <div className="w-full h-full bg-[#0a0f1d] flex flex-col items-center justify-center p-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #6366f1 1px, transparent 0)', backgroundSize: '20px 20px' }} />

                    {/* Attempt Memory Card */}
                    <div className="relative z-10 w-full max-w-[260px] bg-white/[0.03] border border-white/10 rounded-2xl p-4">
                        <div className="flex items-center justify-between mb-3 text-xs">
                            <span className="text-slate-400">Attempt 1 Score:</span>
                            <span className="text-blue-400 font-bold">85% Saved</span>
                        </div>
                        <div className="space-y-2 text-xs">
                            <div className="flex items-center justify-between p-2 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 text-[11px]">
                                <span>Q1 - Q12 Correct</span>
                                <span className="font-bold">Auto-Loaded</span>
                            </div>
                            <div className="flex items-center justify-between p-2 rounded bg-blue-500/10 text-blue-300 border border-blue-500/20 text-[11px]">
                                <span>Q13 - Q15 Retrying</span>
                                <span className="font-bold">Solved</span>
                            </div>
                        </div>
                        <div className="mt-3 text-center text-[10px] font-bold text-emerald-400">
                            Projected Attempt 2: 100% Score
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section id="how-it-works" className="py-24 bg-[#070b14] text-white relative overflow-hidden border-b border-white/5">
            
            {/* Ambient blur */}
            <div className="absolute top-1/2 right-1/4 w-[600px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-600/10 border border-blue-500/30 rounded-full mb-4">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                            Engineered for Absolute Discretion
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                        How ExamGhost Protects You
                    </h2>
                    <p className="text-base text-slate-400 max-w-xl mx-auto">
                        Four layers of stealth technology designed to give you instant answers while keeping Canvas logs pristine.
                    </p>
                </div>

                {/* Interactive Steps Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    
                    {/* Step Selectors */}
                    <div className="lg:col-span-6 space-y-3.5">
                        {steps.map((step, idx) => {
                            const isActive = activeStep === idx;
                            const Icon = step.icon;

                            return (
                                <div
                                    key={idx}
                                    onClick={() => setActiveStep(idx)}
                                    className={`p-5 rounded-2xl border transition-all cursor-pointer select-none ${
                                        isActive
                                            ? 'bg-white/[0.05] border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)]'
                                            : 'bg-white/[0.01] border-white/5 hover:border-white/15 hover:bg-white/[0.03]'
                                    }`}
                                >
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                                            isActive ? 'bg-blue-600 text-white' : 'bg-white/5 text-slate-400'
                                        }`}>
                                            <Icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
                                            {step.tag}
                                        </span>
                                    </div>
                                    <h4 className="text-base sm:text-lg font-bold text-white mb-1.5">
                                        {step.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>

                    {/* Step Visual Preview Card */}
                    <div className="lg:col-span-6">
                        <div className="relative rounded-3xl border border-white/10 bg-[#0c1222] p-2 shadow-2xl overflow-hidden min-h-[380px] flex items-center justify-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeStep}
                                    initial={{ opacity: 0, scale: 0.96 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.96 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full h-[360px] rounded-2xl overflow-hidden"
                                >
                                    {steps[activeStep].visual}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
