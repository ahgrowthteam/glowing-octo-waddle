'use client';
import React, { useState } from 'react';
import { Command, CheckCircle2, Bot, Sparkles, ChevronDown, Crosshair, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export default function GhostMode() {
    const [openAccordion, setOpenAccordion] = useState<number | null>(0);

    const steps = [
        {
            title: "Find what to do in 2 seconds.",
            description: "No more scrolling through clunky notes or minimizing windows. Just hit your secret shortcut (like Cmd+Shift+X) and the Ghost activates invisibly on your current screen. It's like having an Ivy League tutor instantly available at your fingertips.",
            icon: Zap,
            visual: (
                <div className="w-full h-full bg-[#f8fafc] flex items-center justify-center relative overflow-hidden">
                    {/* Exact Dot Grid from Image */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                    <div className="relative z-10 flex flex-col items-center gap-6">
                        {/* Keyboard shortcut */}
                        <div className="flex items-center gap-3">
                            <div className="key-press-1 w-[54px] h-[54px] bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] border border-slate-50 flex items-center justify-center text-slate-700">
                                <Command className="w-[22px] h-[22px]" strokeWidth={2.5} />
                            </div>
                            <span className="text-[#cbd5e1] font-bold text-xl leading-none">+</span>
                            <div className="key-press-2 h-[54px] px-5 bg-white rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.04),0_1px_3px_rgba(0,0,0,0.02)] border border-slate-50 flex items-center justify-center text-slate-700 font-medium text-[16px]">
                                Shift
                            </div>
                            <span className="text-[#cbd5e1] font-bold text-xl leading-none">+</span>
                            <div className="key-press-3 w-[54px] h-[54px] bg-[#2563eb] rounded-xl shadow-[0_4px_14px_rgba(37,99,235,0.3)] flex items-center justify-center text-white font-semibold text-[18px]">
                                X
                            </div>
                        </div>

                        {/* Status notification */}
                        <div className="status-popup px-4 py-2 bg-white/80 backdrop-blur-md border border-slate-100 rounded-full flex items-center gap-2 shadow-[0_4px_15px_rgba(0,0,0,0.03)] opacity-0">
                            <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full pulse-dot shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                            <span className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Ghost Activated</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Out-smart detection seamlessly.",
            description: "ExamGhost takes an invisible, secure snapshot of your screen. It precisely extracts the question without ever triggering Proctorio, Respondus, or any screen-recording flags. You stay 100% safe while the AI does the heavy lifting.",
            icon: ShieldCheck,
            visual: (
                <div className="w-full h-full bg-[#f8fafc] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                    <div className="relative z-10 w-[260px] h-[160px] bg-transparent flex flex-col justify-center gap-3.5 relative">
                        {/* Animated Scanner Brackets */}
                        <div className="scanner-container absolute inset-0 transition-all duration-700 pointer-events-none">
                            <div className="bracket-top-left absolute top-0 left-0 w-[22px] h-[22px] border-t-[2.5px] border-l-[2.5px] border-[#2563eb] rounded-tl-md" />
                            <div className="bracket-top-right absolute top-0 right-0 w-[22px] h-[22px] border-t-[2.5px] border-r-[2.5px] border-[#2563eb] rounded-tr-md" />
                            <div className="bracket-bottom-left absolute bottom-0 left-0 w-[22px] h-[22px] border-b-[2.5px] border-l-[2.5px] border-[#2563eb] rounded-bl-md" />
                            <div className="bracket-bottom-right absolute bottom-0 right-0 w-[22px] h-[22px] border-b-[2.5px] border-r-[2.5px] border-[#2563eb] rounded-br-md" />
                        </div>

                        {/* Skeleton Lines */}
                        <div className="flex flex-col gap-3 px-6 z-0">
                            <div className="h-4 bg-[#e2e8f0]/40 rounded-full w-[95%]" />
                            <div className="h-4 bg-[#e2e8f0]/40 rounded-full w-[100%]" />
                            <div className="h-4 bg-[#e2e8f0]/40 rounded-full w-[85%]" />
                            <div className="h-4 bg-[#e2e8f0]/40 rounded-full w-[90%]" />
                            <div className="h-4 bg-[#e2e8f0]/40 rounded-full w-[60%]" />
                        </div>

                        {/* Scanning Laser Effect (Optional addition for flair) */}
                        <div className="scan-laser absolute left-0 w-full h-[60px] bg-gradient-to-b from-transparent via-[#2563eb]/5 to-transparent border-t border-[#2563eb]/20 z-10 hidden" />

                        {/* Status Pill */}
                        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-white rounded-full shadow-[0_2px_10px_rgb(0,0,0,0.06)] border border-slate-100 flex items-center justify-center gap-1.5 z-20">
                            <Crosshair className="w-3 h-3 text-[#2563eb] animate-spin-slow" />
                            <span className="text-[9px] font-black text-[#2563eb] uppercase tracking-wider">SCANNING</span>
                        </div>
                    </div>
                </div>
            )
        },
        {
            title: "Get guaranteed correct answers.",
            description: "A sleek, transparent window pops up over the question. It doesn't just give you the answer—it provides the exact logic and step-by-step breakdown so you can understand the reasoning and crush your exam with confidence.",
            icon: Bot,
            visual: (
                <div className="w-full h-full bg-[#f8fafc] flex items-center justify-center relative overflow-hidden">
                    {/* Background Grid */}
                    <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #e2e8f0 1px, transparent 0)', backgroundSize: '24px 24px' }} />

                    {/* Glowing Orbs for Depth */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#2563eb]/20 rounded-full blur-3xl opacity-60 animate-pulse" />
                    <div className="absolute top-1/4 right-1/4 w-[150px] h-[150px] bg-emerald-400/20 rounded-full blur-3xl opacity-50" />

                    <div className="float-card relative z-10 w-full max-w-[280px]">
                        {/* Premium Glassmorphic AI Window */}
                        <div className="bg-white/70 backdrop-blur-2xl rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.5)_inset] border border-white/80 overflow-hidden relative group">

                            {/* Animated Top Gradient Line */}
                            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#2563eb] to-transparent opacity-50 group-hover:opacity-100 transition-opacity" />

                            <div className="p-5">
                                {/* Prompt Input Simulation */}
                                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-200/50">
                                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2563eb] to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
                                        <Sparkles className="w-4 h-4 text-white" />
                                    </div>
                                    <div className="flex-1 space-y-2 relative">
                                        {/* Typing Cursor Effect */}
                                        <div className="h-2 w-3/4 bg-slate-200 rounded-full overflow-hidden relative">
                                            <div className="absolute inset-0 bg-gradient-to-r from-slate-200 via-slate-300 to-slate-200 -translate-x-full animate-[shimmer_2s_infinite]" />
                                        </div>
                                        <div className="h-2 w-1/2 bg-slate-200 rounded-full" />
                                    </div>
                                </div>

                                {/* Answer Reveal Area */}
                                <div className="relative">
                                    {/* Success Badge */}
                                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200/60 rounded-full mb-3 shadow-sm">
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                        <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-widest">Confirmed Match</span>
                                    </div>

                                    {/* The Answer */}
                                    <div className="bg-white rounded-xl p-3.5 shadow-sm border border-slate-100 relative overflow-hidden">
                                        <div className="text-sm font-semibold text-slate-800 leading-relaxed relative z-10">
                                            The correct answer is <span className="text-[#2563eb] font-bold bg-blue-50 px-1.5 py-0.5 rounded-md">Mitochondria</span>, as it acts as the powerhouse of the cell.
                                        </div>

                                        {/* Subtle Shine */}
                                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/40 to-transparent -translate-x-full group-hover:animate-[shimmerEffect_2s_ease-out]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    ];

    return (
        <section id="features" className="py-16 md:py-20 lg:py-24 bg-[#2563eb] relative overflow-hidden">

            {/* INJECTED CUSTOM CSS ANIMATIONS FOR THE GRAPHICS */}
            <style dangerouslySetInnerHTML={{
                __html: `
                /* Step 1 Animations */
                @keyframes k1 {
                    0%, 20%, 100% { transform: translateY(0) scale(1); box-shadow: 0 2px 10px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02); }
                    10% { transform: translateY(2px) scale(0.95); box-shadow: 0 0px 4px rgba(0,0,0,0.02); }
                }
                @keyframes k2 {
                    0%, 15%, 35%, 100% { transform: translateY(0) scale(1); box-shadow: 0 2px 10px rgba(0,0,0,0.04), 0 1px 3px rgba(0,0,0,0.02); }
                    25% { transform: translateY(2px) scale(0.95); box-shadow: 0 0px 4px rgba(0,0,0,0.02); }
                }
                @keyframes k3 {
                    0%, 30%, 50%, 100% { transform: translateY(0) scale(1); box-shadow: 0 4px 14px rgba(37,99,235,0.3); }
                    40% { transform: translateY(2px) scale(0.95); box-shadow: 0 0px 4px rgba(37,99,235,0.1); }
                }
                @keyframes pPop {
                    0%, 45%, 100% { opacity: 0; transform: translateY(10px); }
                    55%, 90% { opacity: 1; transform: translateY(0); }
                }
                .key-press-1 { animation: k1 3.5s ease-in-out infinite; }
                .key-press-2 { animation: k2 3.5s ease-in-out infinite; }
                .key-press-3 { animation: k3 3.5s ease-in-out infinite; }
                .status-popup { animation: pPop 3.5s ease-in-out infinite; }
                .pulse-dot { animation: pulse 1s infinite alternate; }

                /* Step 2 Animations */
                @keyframes scanInOut {
                    0%, 100% { transform: scale(1); }
                    50% { transform: scale(1.04); }
                }
                @keyframes btl { 0%, 50%, 100% { transform: translate(0,0); } 20%, 30% { transform: translate(-3px, -3px); } }
                @keyframes btr { 0%, 50%, 100% { transform: translate(0,0); } 20%, 30% { transform: translate(3px, -3px); } }
                @keyframes bbl { 0%, 50%, 100% { transform: translate(0,0); } 20%, 30% { transform: translate(-3px, 3px); } }
                @keyframes bbr { 0%, 50%, 100% { transform: translate(0,0); } 20%, 30% { transform: translate(3px, 3px); } }
                
                .scanner-container { animation: scanInOut 3.5s ease-in-out infinite; }
                .bracket-top-left { animation: btl 3.5s ease-in-out infinite; }
                .bracket-top-right { animation: btr 3.5s ease-in-out infinite; }
                .bracket-bottom-left { animation: bbl 3.5s ease-in-out infinite; }
                .bracket-bottom-right { animation: bbr 3.5s ease-in-out infinite; }

                /* Step 3 Animations */
                @keyframes floating {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-8px); }
                }
                @keyframes shimmerEffect {
                    0% { transform: translateX(-150%) skewX(12deg); }
                    40%, 100% { transform: translateX(250%) skewX(12deg); }
                }
                @keyframes growBar {
                    0% { width: 0%; }
                    20%, 100% { width: 99.9%; }
                }
                .float-card { animation: floating 4s ease-in-out infinite; }
                .continuous-shimmer { animation: shimmerEffect 2.5s ease-out infinite; }
                .progress-bar { animation: growBar 4s cubic-bezier(0.1, 0.8, 0.2, 1) infinite; }
            `}} />

            {/* Ambient background decoration */}
            <div className="absolute top-0 inset-x-0 h-[300px] bg-gradient-to-b from-white/10 to-transparent opacity-50 pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12 md:mb-16 flex flex-col items-center justify-center"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 border border-white/20 rounded-full mb-5 backdrop-blur-sm">
                        <Sparkles className="w-3.5 h-3.5 text-blue-100" />
                        <span className="text-[13px] font-semibold text-white tracking-wide">Simple 3-step process</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] max-w-3xl">
                        No more boring tools... <br className="hidden sm:block" />
                        <span className="text-blue-200 italic font-medium">Find what to do in 2 seconds.</span>
                    </h2>
                </motion.div>


                {/* ========================================= */}
                {/* MOBILE ACCORDION VIEW (hidden on md screens) */}
                {/* ========================================= */}
                <div className="md:hidden space-y-3 lg:hidden">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="border border-white/10 rounded-2xl overflow-hidden bg-white shadow-lg transition-all duration-300 relative z-20"
                        >
                            <button
                                onClick={() => setOpenAccordion(openAccordion === idx ? null : idx)}
                                className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors"
                            >
                                <div className="flex items-center gap-3">
                                    <div className="w-7 h-7 rounded-md bg-blue-50 flex items-center justify-center text-[#2563eb] font-bold text-xs shrink-0">
                                        {idx + 1}
                                    </div>
                                    <h3 className="text-[16px] font-bold text-slate-900 leading-tight pr-2">
                                        {step.title}
                                    </h3>
                                </div>
                                <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${openAccordion === idx ? 'rotate-180' : ''}`} />
                            </button>

                            <div className={`grid transition-all duration-300 ease-in-out ${openAccordion === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                                <div className="overflow-hidden">
                                    <div className="p-4 border-t border-slate-100">
                                        <div className="w-full aspect-video rounded-xl overflow-hidden mb-4 bg-slate-50 border border-slate-100">
                                            {step.visual}
                                        </div>
                                        <p className="text-[14px] text-slate-600 leading-relaxed font-medium">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>


                {/* ========================================= */}
                {/* DESKTOP ZIGZAG VIEW (hidden on mobile) */}
                {/* ========================================= */}
                <div className="hidden md:flex flex-col gap-8 lg:gap-10">
                    {steps.map((step, idx) => {
                        const isEven = idx % 2 === 1;
                        return (
                            <div
                                key={idx}
                                className={`flex items-center gap-8 lg:gap-12 bg-white p-6 lg:p-8 rounded-[2rem] shadow-xl border border-slate-100 max-w-5xl mx-auto w-full transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${isEven ? 'flex-row-reverse' : 'flex-row'} relative z-20`}
                            >
                                {/* Text Content */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    className="flex-1 space-y-4"
                                >
                                    <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-50 text-[#2563eb] mb-1 shadow-sm border border-blue-100">
                                        <step.icon className="w-5 h-5" />
                                    </div>
                                    <h3 className="text-2xl lg:text-[2rem] font-bold text-slate-900 leading-[1.15] tracking-tight">
                                        {step.title}
                                    </h3>
                                    <p className="text-[15px] lg:text-[16px] text-slate-600 leading-[1.6] font-medium max-w-lg">
                                        {step.description}
                                    </p>
                                </motion.div>

                                {/* Visual Container */}
                                <motion.div
                                    initial={{ opacity: 0, x: isEven ? -40 : 40, scale: 0.95 }}
                                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                                    className="flex-1 h-[260px] lg:h-[300px] rounded-2xl overflow-hidden border border-slate-200/60 shadow-inner bg-[#f8fafc] w-full relative"
                                >
                                    {step.visual}
                                </motion.div>
                            </div>
                        );
                    })}
                </div>

                {/* Call to Action Bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-12 md:mt-16 text-center"
                >
                    <a href="#pricing" className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-slate-900 rounded-full font-bold text-[15px] hover:bg-slate-50 transition-all shadow-xl shadow-white/10 group hover:-translate-y-0.5 relative overflow-hidden z-20">
                        <span className="relative z-10 flex items-center gap-2">
                            Stop stressful exams <Zap className="w-4 h-4 text-[#2563eb] group-hover:scale-110 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-100/50 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_ease-out_infinite]" />
                    </a>
                </motion.div>

            </div>
        </section>
    );
}
