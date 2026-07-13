"use client";

import { Bot, PlayCircle, ArrowRight, Sparkles, Shield, Zap, CheckCircle2, Clock, BarChart3 } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaChrome } from 'react-icons/fa';

// Animation Variants
const mockupContainerVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1], // Custom bouncy ease out
            when: "beforeChildren",
            staggerChildren: 0.15
        }
    }
};

const sidebarVariants = {
    hidden: { opacity: 0, x: -25 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const canvasVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.2
        }
    }
};

const rowVariants = {
    hidden: { opacity: 0, x: -15, scale: 0.98 },
    visible: {
        opacity: 1,
        x: 0,
        scale: 1,
        transition: { type: "spring", stiffness: 120, damping: 15 }
    }
};

const tooltipVariants = {
    hidden: { opacity: 0, scale: 0.8, x: 20 },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: { type: "spring", stiffness: 300, damping: 25, delay: 1.2 }
    }
};

export default function Hero() {
    return (
        <section className="relative pt-32 pb-24 overflow-hidden bg-white">
            {/* Ambient background effects */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-b from-primary/[0.06] to-transparent rounded-full blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-100/30 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                {/* Trust Badge */}
                <div className="flex justify-center mb-8">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50/80 border border-blue-100 rounded-full backdrop-blur-sm">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">Trusted by 50,000+ students worldwide</span>
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-center max-w-4xl mx-auto mb-16 relative z-30">
                    <h1 className="text-4xl sm:text-6xl md:text-[4.5rem] font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                        Ace your exams & homework <br className="hidden md:block" />
                        <span className="text-primary italic relative">
                            invisibly
                            <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                                <path d="M2 6c30-4 60-4 90-2s70 2 106-2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-primary/30" />
                            </svg>
                        </span>{' '}with ExamGhost.
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
                        The only 100% undetectable AI extension. Get instant, accurate solutions overlaid directly on your screen.
                    </p>

                    {/* Feature pills */}
                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {[
                            { icon: Shield, text: "100% Undetectable" },
                            { icon: Zap, text: "<1.5s Response" },
                            { icon: Bot, text: "AI-Powered" }
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 border border-slate-100 rounded-full text-xs font-semibold text-slate-600">
                                <item.icon className="w-3.5 h-3.5 text-primary" />
                                {item.text}
                            </div>
                        ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <a href="#how-it-works" className="px-6 py-3.5 bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50 rounded-full font-semibold transition-all flex items-center justify-center gap-2 shadow-sm">
                            <PlayCircle className="w-[18px] h-[18px] text-primary" />
                            See how it works
                        </a>
                        <button className="px-8 py-4 bg-[#4F71E5] hover:bg-blue-600 text-[16px] text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40">
                            <FaChrome className="w-5 h-5" />
                            <span>Chrome extension</span>
                        </button>
                    </div>
                </div>

                {/* ============================== */}
                {/* PREMIUM BROWSER MOCKUP GRAPHIC */}
                {/* ============================== */}
                <motion.div
                    variants={mockupContainerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="relative w-full max-w-[1000px] mx-auto z-20 mt-12 mb-12 group"
                >
                    {/* Hover glow */}
                    <div className="absolute -inset-6 bg-gradient-to-b from-primary/[0.07] via-primary/[0.03] to-transparent rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-xl" />

                    {/* Shadow frame */}
                    <div className="bg-white/80 rounded-2xl p-1.5 sm:p-2 border border-slate-200/80 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.12),0_0_0_1px_rgba(0,0,0,0.02)] relative backdrop-blur-xl">

                        {/* The Actual Mockup */}
                        <div className="rounded-xl border border-slate-200 shadow-sm relative bg-white flex flex-col overflow-hidden">

                            {/* ========= BROWSER CHROME ========= */}
                            <div className="bg-gradient-to-b from-[#f8f9fb] to-[#f3f4f6] px-4 py-3 flex items-center gap-3 border-b border-slate-200/70">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-[#FF5F57] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.12)]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.12)]"></div>
                                    <div className="w-3 h-3 rounded-full bg-[#27C840] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.12)]"></div>
                                </div>

                                {/* URL bar */}
                                <div className="flex-1 max-w-md mx-auto relative">
                                    <div className="bg-white text-[11px] text-center text-slate-400 py-2 px-4 rounded-lg border border-slate-200 shadow-[inset_0_1px_2px_rgba(0,0,0,0.03)] flex items-center justify-center gap-2 font-medium">
                                        <svg className="w-3 h-3 text-emerald-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" /></svg>
                                        canvas.instructure.com/quiz
                                    </div>
                                </div>

                                {/* Tabs indicator */}
                                <div className="hidden sm:flex items-center gap-1.5">
                                    <div className="w-7 h-5 bg-white rounded border border-slate-200 flex items-center justify-center">
                                        <span className="text-[9px] font-bold text-slate-400">3</span>
                                    </div>
                                </div>
                            </div>

                            {/* ========= DASHBOARD BODY ========= */}
                            <div className="flex flex-col md:flex-row h-auto md:h-[460px]">

                                {/* -------- SIDEBAR -------- */}
                                <motion.div
                                    variants={sidebarVariants}
                                    className="hidden md:flex w-[220px] bg-gradient-to-b from-white to-[#fafbfc] border-r border-slate-100 p-5 flex-col shrink-0"
                                >
                                    {/* Brand */}
                                    <div className="flex items-center gap-2.5 font-bold text-primary mb-8 px-1 text-[15px]">
                                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center shadow-sm">
                                            <Bot className="w-4.5 h-4.5 text-white" />
                                        </div>
                                        <span>ExamGhost</span>
                                    </div>

                                    {/* Nav Items */}
                                    <div className="space-y-1 flex-1">
                                        <div className="px-3 py-2.5 bg-primary/[0.07] text-primary text-[13px] font-bold rounded-lg flex items-center justify-between border border-primary/10">
                                            Dashboard
                                            <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_rgba(16,185,129,0.5)] animate-pulse"></span>
                                        </div>
                                        <div className="px-3 py-2.5 text-slate-500 text-[13px] font-medium rounded-lg hover:bg-slate-50 transition-colors">Settings</div>
                                        <div className="px-3 py-2.5 text-slate-500 text-[13px] font-medium rounded-lg hover:bg-slate-50 transition-colors">History Logs</div>
                                        <div className="px-3 py-2.5 text-slate-500 text-[13px] font-medium rounded-lg hover:bg-slate-50 transition-colors">Auto-Solver</div>
                                    </div>

                                    {/* Bottom Stats Card */}
                                    <div className="bg-slate-50 rounded-xl p-3.5 border border-slate-100 mt-auto">
                                        <div className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mb-3">Session Stats</div>
                                        <div className="space-y-2.5">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1.5">
                                                    <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                                                    <span className="text-[11px] font-semibold text-slate-600">Solved</span>
                                                </div>
                                                <span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">12/15</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1.5">
                                                    <Clock className="w-3 h-3 text-blue-500" />
                                                    <span className="text-[11px] font-semibold text-slate-600">Avg Time</span>
                                                </div>
                                                <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded">0.8s</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-1.5">
                                                    <BarChart3 className="w-3 h-3 text-purple-500" />
                                                    <span className="text-[11px] font-semibold text-slate-600">Accuracy</span>
                                                </div>
                                                <span className="text-[11px] font-bold text-purple-600 bg-purple-50 px-1.5 py-0.5 rounded">100%</span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>

                                {/* -------- MAIN CANVAS -------- */}
                                <div className="flex-1 p-6 sm:p-8 bg-[#fafbfc] relative overflow-visible flex flex-col">
                                    {/* Top bar */}
                                    <div className="flex items-center justify-between mb-6">
                                        <h3 className="text-[20px] font-bold text-slate-900 tracking-tight">
                                            Active Quiz Session
                                        </h3>
                                        <div className="hidden sm:flex items-center gap-2">
                                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-100 rounded-full">
                                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                                                <span className="text-[10px] font-bold text-emerald-600 tracking-wide uppercase">Ghost Active</span>
                                            </div>
                                            <div className="flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 border border-blue-100 rounded-full">
                                                <span className="text-[10px] font-bold text-blue-600">Q4 of 15</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Quiz Card */}
                                    <motion.div
                                        variants={canvasVariants}
                                        className="bg-white border border-slate-200 rounded-xl p-6 sm:p-7 shadow-[0_2px_8px_rgba(0,0,0,0.04)] max-w-[560px] relative transition-all duration-300"
                                    >
                                        {/* Q Header */}
                                        <motion.div variants={rowVariants} className="flex justify-between items-center mb-5">
                                            <span className="text-[10px] font-black text-slate-400 font-mono tracking-[0.15em] uppercase">Question 4</span>
                                            <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md tracking-wider uppercase">Matching</span>
                                        </motion.div>
                                        <motion.div variants={rowVariants} className="text-[15px] font-bold text-slate-800 mb-6 tracking-tight leading-snug">
                                            Match each molecule with its role in photosynthesis:
                                        </motion.div>

                                        {/* Matching rows */}
                                        <div className="space-y-3 relative">
                                            {/* Row 1: CO2 → Carbon Source (Solved) */}
                                            <motion.div variants={rowVariants} className="grid grid-cols-[1fr_1.5fr] gap-3 items-center">
                                                <div className="font-semibold text-[13px] text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
                                                    CO₂
                                                </div>
                                                <div className="p-3 border rounded-lg text-[12px] font-semibold text-emerald-700 bg-emerald-50/50 border-emerald-200 text-center relative">
                                                    Carbon Source
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 absolute right-2.5 top-1/2 -translate-y-1/2" />
                                                </div>
                                            </motion.div>

                                            {/* Row 2: H2O → Electron Donor (Active + Tooltip) */}
                                            <motion.div variants={rowVariants} className="grid grid-cols-[1fr_1.5fr] gap-3 items-center relative z-20">
                                                <div className="font-semibold text-[13px] text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
                                                    H₂O
                                                </div>
                                                <div className="p-3 border-2 rounded-lg text-[12px] font-semibold text-emerald-700 bg-emerald-50/50 border-emerald-300 text-center relative shadow-[0_0_0_3px_rgba(16,185,129,0.1)]">
                                                    Electron Donor
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 absolute right-2.5 top-1/2 -translate-y-1/2" />
                                                </div>

                                                {/* ===== FLOATING TOOLTIP ===== */}
                                                <motion.div
                                                    variants={tooltipVariants}
                                                    className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-[calc(100%+20px)] w-[220px] z-50 hidden sm:block"
                                                >
                                                    <div className="bg-[#0f172a] text-white p-4 rounded-xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.6),0_0_0_1px_rgba(255,255,255,0.05)] relative">
                                                        {/* Arrow */}
                                                        <div className="absolute top-1/2 -left-[6px] -translate-y-1/2 w-0 h-0 border-t-[7px] border-t-transparent border-r-[7px] border-r-[#0f172a] border-b-[7px] border-b-transparent"></div>

                                                        <div className="flex items-center gap-2 mb-2">
                                                            <div className="w-5 h-5 bg-emerald-500/20 rounded-full flex items-center justify-center">
                                                                <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                                                            </div>
                                                            <span className="text-[10px] font-black text-emerald-400 tracking-[0.12em] uppercase">All Matched</span>
                                                        </div>
                                                        <p className="text-[12px] font-medium text-slate-300 leading-relaxed">
                                                            H₂O splits to provide electrons, releasing O₂.
                                                        </p>
                                                    </div>
                                                </motion.div>
                                            </motion.div>

                                            {/* Row 3: O2 → Byproduct (Solved) */}
                                            <motion.div variants={rowVariants} className="grid grid-cols-[1fr_1.5fr] gap-3 items-center">
                                                <div className="font-semibold text-[13px] text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
                                                    O₂
                                                </div>
                                                <div className="p-3 border rounded-lg text-[12px] font-semibold text-emerald-700 bg-emerald-50/50 border-emerald-200 text-center relative">
                                                    Byproduct
                                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 absolute right-2.5 top-1/2 -translate-y-1/2" />
                                                </div>
                                            </motion.div>

                                            {/* Row 4: C6H12O6 → Product (Solving animation) */}
                                            <motion.div variants={rowVariants} className="grid grid-cols-[1fr_1.5fr] gap-3 items-center">
                                                <div className="font-semibold text-[13px] text-slate-700 bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
                                                    C₆H₁₂O₆
                                                </div>
                                                <div className="p-3 border rounded-lg text-[12px] font-medium text-slate-400 bg-white border-slate-200 text-center relative overflow-hidden">
                                                    {/* Shimmer scanning effect */}
                                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-50 to-transparent animate-[shimmer_2s_ease-in-out_infinite]" />
                                                    <span className="relative z-10 flex items-center justify-center gap-2">
                                                        <div className="flex gap-0.5 items-end h-2.5">
                                                            <div className="w-0.5 bg-primary/70 rounded-full h-full animate-bounce [animation-delay:-0.3s]" />
                                                            <div className="w-0.5 bg-primary/70 rounded-full h-1.5 animate-bounce [animation-delay:-0.15s]" />
                                                            <div className="w-0.5 bg-primary/70 rounded-full h-2.5 animate-bounce" />
                                                        </div>
                                                        Solving...
                                                    </span>
                                                </div>
                                            </motion.div>
                                        </div>

                                        {/* Bottom progress indicator */}
                                        <motion.div variants={rowVariants} className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <div className="h-1 w-32 bg-slate-100 rounded-full overflow-hidden">
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: "75%" }}
                                                        transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
                                                        className="h-full bg-emerald-500 rounded-full"
                                                    />
                                                </div>
                                                <span className="text-[10px] font-bold text-slate-400">75%</span>
                                            </div>
                                            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">3 of 4 matched</span>
                                        </motion.div>
                                    </motion.div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
