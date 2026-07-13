import React from 'react';
import { Check, Sparkles, Zap } from 'lucide-react';

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
            {/* Background */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">

                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-100 rounded-full mb-6">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">Limited time: 50% off first month</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Simple, Student-Friendly Pricing
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Invest in your GPA for less than the price of lunch.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center items-stretch gap-8 max-w-4xl mx-auto">

                    {/* Free Tier */}
                    <div className="flex-1 bg-white border border-slate-200 rounded-[2rem] p-10 flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-sm">
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Free Trial</h3>
                        <div className="flex items-baseline gap-2 mb-8">
                            <span className="text-5xl font-extrabold text-slate-900">$0</span>
                            <span className="text-slate-500 font-medium">/ forever</span>
                        </div>

                        <div className="space-y-4 mb-10 flex-1">
                            {[
                                "5 Daily Solves",
                                "Basic Invisibility",
                                "Works on all platforms"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-slate-500" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#" className="w-full py-4 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl text-center transition-all hover:shadow-sm">
                            Install Free
                        </a>
                    </div>

                    {/* Premium Tier */}
                    <div className="flex-1 bg-white border-2 border-primary rounded-[2rem] p-10 flex flex-col relative shadow-xl shadow-blue-900/10 scale-100 md:scale-105 hover:shadow-2xl hover:shadow-blue-900/15 transition-all duration-300">
                        {/* Glow effect */}
                        <div className="absolute -inset-px bg-gradient-to-b from-primary/20 to-transparent rounded-[2rem] pointer-events-none opacity-50" />

                        <div className="absolute top-0 right-0 bg-primary text-white text-[11px] font-bold px-4 py-2 rounded-bl-xl rounded-tr-[1.8rem] tracking-wider uppercase flex items-center gap-1.5">
                            <Zap className="w-3 h-3" />
                            Most Popular
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-2 relative">Premium</h3>
                        <div className="flex items-baseline gap-2 mb-3 relative">
                            <span className="text-5xl font-extrabold text-slate-900">$7.99</span>
                            <span className="text-slate-500 font-medium">/ month</span>
                        </div>

                        <div className="inline-block px-3 py-1 bg-blue-50 text-primary text-xs font-bold rounded-lg mb-8 max-w-max uppercase tracking-wider relative">
                            <del className="text-slate-400 mr-2">$15.99</del> $7.99/mo
                        </div>

                        <div className="space-y-4 mb-10 flex-1 relative">
                            {[
                                "Unlimited Solves",
                                "Advanced Shadow DOM Stealth",
                                "Screenshot & Proctor Immunity",
                                "Step-by-Step Explanations",
                                "Priority Discord Support"
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                        <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                                    </div>
                                    <span className="text-slate-800 font-semibold">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <a href="#" className="w-full py-4 px-6 bg-primary hover:bg-blue-600 text-white font-bold rounded-xl text-center transition-all shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:-translate-y-0.5 relative">
                            Start 7-Day Free Trial
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
}
