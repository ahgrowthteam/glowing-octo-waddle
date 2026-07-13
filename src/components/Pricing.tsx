'use client';
import React from 'react';
import { Check, Sparkles, Zap } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 md:py-32 bg-[#F8FAFC] relative overflow-hidden">
            {/* Background elements removed for cleaner look matching the reference */}

            <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-10"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#eff6ff] border border-[#dbeafe] rounded-full mb-8">
                        <Sparkles className="w-4 h-4 text-[#3b82f6]" />
                        <span className="text-[13px] font-semibold text-[#3b82f6]">Limited time: 50% off first month</span>
                    </div>
                    <h2 className="text-4xl md:text-[2.75rem] font-extrabold text-[#0F172A] tracking-tight mb-4 leading-tight">
                        Simple, Student-Friendly Pricing
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto font-medium">
                        Invest in your GPA for less than the price of lunch.
                    </p>
                </motion.div>

                {/* High-Conversion Free Access Promotional Banner (Moved Above Table) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 30 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="max-w-[900px] mx-auto mb-16 bg-[#0B101E] border border-indigo-500/30 rounded-[2rem] p-8 md:p-10 relative overflow-hidden group shadow-[0_0_40px_rgba(99,102,241,0.15)] transition-all duration-300 hover:border-indigo-400/50 hover:shadow-[0_0_60px_rgba(99,102,241,0.25)]"
                >
                    {/* Dark/Premium Glowing elements */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />
                    
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10 w-full">
                        
                        {/* Left Side: Value Prop */}
                        <div className="flex-1 text-center md:text-left">
                            <h3 className="text-[2.2rem] leading-tight md:text-[2.5rem] font-extrabold text-white mb-3 tracking-tight">
                                <span className="bg-gradient-to-r from-white via-blue-100 to-indigo-300 text-transparent bg-clip-text">
                                    Lifetime Free Premium.
                                </span>
                            </h3>
                            <p className="text-slate-300 font-medium text-[16px] max-w-[400px] mx-auto md:mx-0">
                                Join our official Discord community before we hit capacity and keep your Premium account <span className="text-white font-bold">100% free forever</span>.
                            </p>
                        </div>

                        {/* Right Side: Scarcity & CTA */}
                        <div className="shrink-0 w-full md:w-[380px] bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl flex flex-col gap-6">
                            
                            {/* Fake Progress Bar Mechanics */}
                            <div className="w-full">
                                <div className="flex justify-between items-end mb-2">
                                    <div className="inline-flex items-center gap-2">
                                        <div className="relative flex h-2.5 w-2.5">
                                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                                          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#EF4444] shadow-[0_0_10px_rgba(239,68,68,0.8)]"></span>
                                        </div>
                                        <span className="text-[12px] font-bold text-red-400 tracking-widest uppercase">Almost Full</span>
                                    </div>
                                    <span className="text-white text-[13px] font-bold font-mono">947 / 1000</span>
                                </div>
                                
                                {/* The Bar */}
                                <div className="w-full h-3.5 bg-slate-800/80 rounded-full overflow-hidden border border-white/5 relative">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "94.7%" }}
                                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                                        className="h-full bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-400 rounded-full relative"
                                    >
                                        {/* Animated tip glow */}
                                        <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-r from-transparent to-white/40 blur-[2px] animate-pulse" />
                                    </motion.div>
                                </div>
                                <div className="text-right mt-1.5">
                                    <span className="text-slate-400 text-[11px] uppercase tracking-wider">Free spots claimed</span>
                                </div>
                            </div>

                            {/* The CTA */}
                            <div className="flex flex-col gap-2">
                                <a 
                                    href="#" 
                                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(88,101,242,0.4)] hover:shadow-[0_0_35px_rgba(88,101,242,0.6)] hover:-translate-y-1 group/discord relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/discord:animate-[shimmer_1.2s_infinite]" />
                                    <SiDiscord className="w-6 h-6 group-hover/discord:scale-110 transition-transform duration-300 relative z-10" />
                                    <span className="text-[16px] relative z-10">Secure Your Free Spot</span>
                                </a>
                                <p className="text-center text-slate-400 text-[11px] font-medium">* No credit card required. Instantly unlocks Premium.</p>
                            </div>
                            
                        </div>
                    </div>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 lg:gap-8 max-w-[900px] mx-auto mb-10">

                    {/* Free Tier */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        className="flex-1 bg-white border border-slate-100/80 rounded-[2rem] p-10 flex flex-col hover:-translate-y-1 transition-all duration-300 shadow-[0_8px_30px_rgb(0,0,0,0.04)]"
                    >
                        <h3 className="text-[1.35rem] font-bold text-slate-800 mb-2">Free Trial</h3>
                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-[3.5rem] leading-none font-extrabold text-[#0F172A]">$0</span>
                            <span className="text-slate-500 font-medium">/ forever</span>
                        </div>

                        <div className="space-y-4 mb-10 flex-1">
                            {[
                                "5 Daily Solves",
                                "Basic Invisibility",
                                "Works on all platforms"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-5 h-5 rounded-full bg-[#f1f5f9] flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-slate-400" strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-600 font-medium text-[15px]">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#" className="w-full py-4 px-6 bg-[#f1f5f9] hover:bg-slate-200/80 text-slate-700 font-bold rounded-xl text-center transition-all">
                            Install Free
                        </a>
                    </motion.div>

                    {/* Premium Tier */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="flex-1 bg-white border-2 border-[#3b82f6] rounded-[2rem] p-10 flex flex-col relative shadow-[0_8px_30px_rgb(59,130,246,0.12)] hover:-translate-y-1 hover:shadow-[0_20px_40px_rgb(59,130,246,0.15)] transition-all duration-300 group"
                    >
                        <div className="absolute -top-0.5 -right-0.5 bg-[#3b82f6] text-white text-[10px] font-bold px-4 py-2 rounded-bl-xl rounded-tr-[1.8rem] tracking-widest uppercase flex items-center gap-1.5 shadow-sm">
                            <Sparkles className="w-3 h-3 group-hover:animate-pulse" />
                            MOST POPULAR
                        </div>

                        <h3 className="text-[1.35rem] font-bold text-slate-800 mb-2 relative">Premium</h3>
                        <div className="flex items-baseline gap-2 mb-3 relative">
                            <span className="text-[3.5rem] leading-none font-extrabold text-[#0F172A]">$7.99</span>
                            <span className="text-slate-500 font-medium">/ month</span>
                        </div>

                        <div className="inline-block text-[#3b82f6] text-xs font-bold mb-8 max-w-max uppercase tracking-wider relative">
                            <del className="text-slate-400/80 mr-2">$15.99</del> $7.99/MO
                        </div>

                        <div className="space-y-4 mb-10 flex-1 relative">
                            {[
                                "Unlimited Solves",
                                "Advanced Shadow DOM Stealth",
                                "Screenshot & Proctor Immunity",
                                "Step-by-Step Explanations",
                                "Priority Discord Support"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-4">
                                    <div className="w-5 h-5 rounded-full bg-[#eff6ff] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Check className="w-3.5 h-3.5 text-[#3b82f6]" strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-700 font-semibold text-[15px]">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#" className="w-full py-4 px-6 bg-[#3b82f6] hover:bg-blue-600 text-white font-bold rounded-xl text-center transition-all shadow-[0_4px_14px_0_rgb(59,130,246,0.39)] hover:shadow-[0_6px_20px_rgba(59,130,246,0.23)] hover:-translate-y-0.5 relative overflow-hidden">
                            <span className="relative z-10">Start 7-Day Free Trial</span>
                        </a>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
