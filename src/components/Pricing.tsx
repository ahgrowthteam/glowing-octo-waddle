'use client';
import React, { useState } from 'react';
import { Check, Sparkles, Zap, Shield, HelpCircle, Lock } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';
import { motion } from 'framer-motion';

export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'lifetime'>('monthly');

    return (
        <section id="pricing" className="py-24 bg-[#090e1a] text-white relative overflow-hidden border-b border-white/5">
            {/* Ambient Lighting */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-blue-500/10 border border-blue-500/30 rounded-full mb-4">
                        <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-xs font-bold text-blue-400 uppercase tracking-wider">
                            Affordable Student Pricing
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                        Invest in Your GPA for Less Than Lunch
                    </h2>
                    <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
                        Cancel anytime with one click. Backed by our 100% Always Working & 7-Day Refund Guarantee.
                    </p>
                </motion.div>

                {/* Lifetime Community VIP Banner */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto mb-16 bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-purple-900/40 border border-indigo-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl relative overflow-hidden shadow-[0_0_50px_rgba(99,102,241,0.15)]"
                >
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 relative z-10">
                        <div>
                            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest mb-1.5">
                                <Sparkles className="w-3.5 h-3.5" />
                                Discord Early Adopter Offer
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                                Join the Official Community & Win Free Access
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
                                Get 24/7 priority support, sneak peeks of upcoming LMS bypass patches, and participate in weekly free license drops.
                            </p>
                        </div>
                        <a
                            href="#"
                            className="shrink-0 px-6 py-3.5 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-xs sm:text-sm rounded-xl transition-all flex items-center gap-2.5 shadow-lg shadow-[#5865F2]/30 active:scale-95"
                        >
                            <SiDiscord className="w-4 h-4" />
                            <span>Join Discord (Free)</span>
                        </a>
                    </div>
                </motion.div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">

                    {/* Tier 1: Free Trial */}
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
                        <div>
                            <h4 className="text-base font-bold text-slate-200 mb-1">Free Trial</h4>
                            <p className="text-xs text-slate-400 mb-6">Test the stealth engine risk-free.</p>
                            
                            <div className="flex items-baseline gap-1.5 mb-6">
                                <span className="text-4xl font-extrabold text-white">$0</span>
                                <span className="text-xs text-slate-400">/ forever</span>
                            </div>

                            <div className="space-y-3 mb-8 text-xs text-slate-300">
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-slate-400 shrink-0" />
                                    <span>5 Solves per Day</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-slate-400 shrink-0" />
                                    <span>Basic Focus Interceptor</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-slate-400 shrink-0" />
                                    <span>Supports Canvas & Blackboard</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-slate-500">
                                    <span>✕ No Snap-It Screenshot Mode</span>
                                </div>
                            </div>
                        </div>

                        <a 
                            href="#"
                            className="w-full py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-bold text-xs text-center transition-all block"
                        >
                            Install Free
                        </a>
                    </div>

                    {/* Tier 2: Monthly Pro (Popular) */}
                    <div className="p-8 rounded-3xl bg-gradient-to-b from-blue-600/10 via-white/[0.03] to-white/[0.01] border-2 border-blue-500/60 flex flex-col justify-between relative shadow-[0_0_40px_rgba(59,130,246,0.18)] hover:-translate-y-1 transition-all">
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md">
                            Most Popular • 50% Off
                        </div>

                        <div>
                            <h4 className="text-base font-bold text-white mb-1">Monthly Pro</h4>
                            <p className="text-xs text-slate-400 mb-6">Full power for active semesters.</p>

                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-slate-500 line-through text-lg font-bold">$15.99</span>
                                <span className="text-4xl font-extrabold text-white">$7.99</span>
                                <span className="text-xs text-slate-400">/ month</span>
                            </div>

                            <div className="space-y-3 mb-8 text-xs text-slate-200">
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-blue-400 shrink-0 stroke-[2.5]" />
                                    <span className="font-semibold text-white">Unlimited Quiz & Exam Solves</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-blue-400 shrink-0 stroke-[2.5]" />
                                    <span>100% Focus Interceptor (Zero Log Flags)</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-blue-400 shrink-0 stroke-[2.5]" />
                                    <span>Snap-It Screenshot & Diagram Solve</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-blue-400 shrink-0 stroke-[2.5]" />
                                    <span>2nd-Attempt Auto-Memory</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-blue-400 shrink-0 stroke-[2.5]" />
                                    <span>Step-by-Step AI Reasoning</span>
                                </div>
                            </div>
                        </div>

                        <a 
                            href="#"
                            className="w-full py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs text-center shadow-lg shadow-blue-600/30 transition-all block active:scale-95"
                        >
                            Start Pro Access
                        </a>
                    </div>

                    {/* Tier 3: Semester / Lifetime Pass */}
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all">
                        <div>
                            <div className="inline-block text-[10px] font-bold text-amber-400 uppercase tracking-wider mb-2">
                                Best Value
                            </div>
                            <h4 className="text-base font-bold text-slate-200 mb-1">Lifetime Pass</h4>
                            <p className="text-xs text-slate-400 mb-6">Pay once, protected for your entire degree.</p>

                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-slate-500 line-through text-lg font-bold">$129</span>
                                <span className="text-4xl font-extrabold text-white">$49.99</span>
                                <span className="text-xs text-slate-400">/ one-time</span>
                            </div>

                            <div className="space-y-3 mb-8 text-xs text-slate-300">
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span className="font-semibold text-white">Lifetime Unlimited Access</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>Free Automatic Updates Forever</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>All Future LMS Patches Included</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                                    <span>Priority VIP Discord Ticket Support</span>
                                </div>
                            </div>
                        </div>

                        <a 
                            href="#"
                            className="w-full py-3.5 rounded-xl border border-white/15 bg-white/10 hover:bg-white/15 text-white font-bold text-xs text-center transition-all block"
                        >
                            Get Lifetime Pass
                        </a>
                    </div>

                </div>

                {/* Trust & Guarantee Footer */}
                <div className="max-w-2xl mx-auto text-center flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-400 border-t border-white/5 pt-8">
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-emerald-400" />
                        <span>100% Always Working Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-blue-400" />
                        <span>7-Day Hassle-Free Full Refund</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-400" />
                        <span>Instant Chrome Setup in 60s</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
