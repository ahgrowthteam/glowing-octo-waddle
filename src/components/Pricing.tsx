'use client';
import React from 'react';
import { Check, Sparkles, Shield, Lock, Zap } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 bg-white text-slate-900 border-b border-slate-200/80">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-slate-100 border border-slate-200 rounded-full mb-3">
                        <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-xs font-semibold text-slate-700">
                            Transparent Pricing
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
                        Invest in your GPA for less than lunch
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600">
                        Cancel anytime with one click. Backed by our 7-day money-back guarantee.
                    </p>
                </div>

                {/* Discord Community Callout */}
                <div className="max-w-3xl mx-auto mb-12 p-4 sm:p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#5865F2]/10 border border-[#5865F2]/20 flex items-center justify-center shrink-0">
                            <SiDiscord className="w-5 h-5 text-[#5865F2]" />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-slate-900">
                                Join 2,400+ students on Discord
                            </h3>
                            <p className="text-xs text-slate-500">
                                Real-time Canvas update alerts, test-taking strategies & weekly giveaways.
                            </p>
                        </div>
                    </div>
                    <a
                        href="#"
                        className="px-4 py-2 bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs font-semibold rounded-lg shadow-sm transition-colors shrink-0"
                    >
                        Join Discord (Free)
                    </a>
                </div>

                {/* Pricing Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-14">

                    {/* Tier 1: Free Trial */}
                    <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
                        <div>
                            <h3 className="text-base font-bold text-slate-900 mb-1">Free Trial</h3>
                            <p className="text-xs text-slate-500 mb-5">Test the stealth engine risk-free.</p>
                            
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">$0</span>
                                <span className="text-xs text-slate-500">/ forever</span>
                            </div>

                            <div className="space-y-3 mb-8 text-xs text-slate-600">
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>5 Solves per Day</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Basic Focus Interceptor</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Supports Canvas & Blackboard</span>
                                </div>
                                <div className="flex items-center gap-2.5 text-slate-400">
                                    <span>✕ No Snap-It Screenshot Mode</span>
                                </div>
                            </div>
                        </div>

                        <a 
                            href="#"
                            className="w-full py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs text-center transition-colors block"
                        >
                            Install Free
                        </a>
                    </div>

                    {/* Tier 2: Monthly Pro (Popular) */}
                    <div className="p-7 rounded-2xl bg-white border-2 border-slate-900 shadow-md flex flex-col justify-between relative">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 bg-slate-900 text-white text-[10px] font-bold uppercase tracking-wider rounded-full">
                            Most Popular
                        </div>

                        <div>
                            <h3 className="text-base font-bold text-slate-900 mb-1">Monthly Pro</h3>
                            <p className="text-xs text-slate-500 mb-5">Full power for active semesters.</p>

                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-slate-400 line-through text-sm font-semibold">$15.99</span>
                                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">$7.99</span>
                                <span className="text-xs text-slate-500">/ month</span>
                            </div>

                            <div className="space-y-3 mb-8 text-xs text-slate-700">
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span className="font-semibold text-slate-900">Unlimited Quiz Solves</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>100% Focus Interceptor (Zero Flags)</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Snap-It Screenshot & Graph Solver</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>2nd-Attempt Auto-Memory</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Step-by-Step Explanations</span>
                                </div>
                            </div>
                        </div>

                        <a 
                            href="#"
                            className="w-full py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs text-center shadow-sm transition-colors block"
                        >
                            Start Pro Access
                        </a>
                    </div>

                    {/* Tier 3: Lifetime Pass */}
                    <div className="p-7 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all">
                        <div>
                            <div className="inline-block text-[10px] font-bold text-blue-600 uppercase tracking-wider mb-1">
                                Best Value
                            </div>
                            <h3 className="text-base font-bold text-slate-900 mb-1">Lifetime Pass</h3>
                            <p className="text-xs text-slate-500 mb-5">Pay once, protected for your entire degree.</p>

                            <div className="flex items-baseline gap-2 mb-6">
                                <span className="text-slate-400 line-through text-sm font-semibold">$129</span>
                                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900">$49.99</span>
                                <span className="text-xs text-slate-500">/ one-time</span>
                            </div>

                            <div className="space-y-3 mb-8 text-xs text-slate-600">
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span className="font-semibold text-slate-900">Lifetime Unlimited Access</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Free Automatic Updates Forever</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>All Future LMS Patches Included</span>
                                </div>
                                <div className="flex items-center gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span>Priority VIP Discord Ticket Support</span>
                                </div>
                            </div>
                        </div>

                        <a 
                            href="#"
                            className="w-full py-2.5 rounded-lg border border-slate-300 hover:bg-slate-50 text-slate-800 font-semibold text-xs text-center transition-colors block"
                        >
                            Get Lifetime Pass
                        </a>
                    </div>

                </div>

                {/* Trust & Guarantee Strip */}
                <div className="max-w-2xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-6 text-xs text-slate-500 border-t border-slate-200/80 pt-8">
                    <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-emerald-600" />
                        <span>100% Always Working Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Lock className="w-4 h-4 text-blue-600" />
                        <span>7-Day Full Refund Guarantee</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Zap className="w-4 h-4 text-amber-500" />
                        <span>Instant Chrome Setup in 60s</span>
                    </div>
                </div>

            </div>
        </section>
    );
}
