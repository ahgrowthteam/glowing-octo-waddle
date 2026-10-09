'use client';
import React from 'react';
import { Check, Shield, Zap, Eye, CheckCircle2, Lock } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Integrations() {
    const features = [
        { 
            title: "Focus Interceptor", 
            text: "Blocks JavaScript focus loss events so Canvas never records 'Left quiz page'." 
        },
        { 
            title: "Instant In-DOM Solves", 
            text: "Answers are highlighted directly inside the quiz layout—no floating windows." 
        },
        { 
            title: "Universal LMS Support", 
            text: "Tested on Canvas (Classic & New Quizzes), Blackboard Ultra, Moodle & Brightspace." 
        },
        { 
            title: "Proctor & Screen-Share Safe", 
            text: "Rendered via an isolated Shadow DOM layer invisible to basic recording tools." 
        }
    ];

    const platforms = [
        { name: "Canvas LMS", type: "Instructure", tag: "Full Focus Protection" },
        { name: "Blackboard Ultra", type: "Anthology", tag: "Stealth Certified" },
        { name: "D2L Brightspace", type: "D2L", tag: "Auto Detection" },
        { name: "Moodle", type: "Open LMS", tag: "Zero Log Footprint" },
        { name: "McGraw Hill Connect", type: "McGraw Hill", tag: "Auto-Fill Enabled" },
        { name: "Pearson MyLab", type: "Pearson", tag: "Math & MCQ Ready" },
        { name: "Google Classroom", type: "Google", tag: "Instant Solve" },
        { name: "WebAssign", type: "Cengage", tag: "Formula Solver" }
    ];

    return (
        <section className="bg-[#090e1a] text-white py-20 border-b border-white/5 relative overflow-hidden">
            
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

            {/* Platform Marquee Header */}
            <div className="max-w-7xl mx-auto px-4 text-center mb-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-semibold text-slate-300 mb-4">
                    <Shield className="w-3.5 h-3.5 text-blue-400" />
                    <span>Cross-Platform Stealth Engine</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                    Verified Undetected Across Major Learning Systems
                </h3>
                <p className="text-sm text-slate-400 max-w-xl mx-auto">
                    Built specifically to intercept visibility APIs and DOM monitors on every educational platform.
                </p>
            </div>

            {/* Platform Grid Showcase */}
            <div className="max-w-6xl mx-auto px-4 mb-20">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5">
                    {platforms.map((platform, idx) => (
                        <div 
                            key={idx}
                            className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-blue-500/30 hover:bg-white/[0.04] transition-all group"
                        >
                            <div className="flex items-center justify-between mb-2">
                                <span className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">
                                    {platform.type}
                                </span>
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 group-hover:animate-ping" />
                            </div>
                            <h4 className="font-bold text-sm sm:text-base text-slate-200 group-hover:text-white transition-colors">
                                {platform.name}
                            </h4>
                            <p className="text-[11px] text-blue-400 font-medium mt-1">
                                {platform.tag}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Value comparison banner */}
            <div className="max-w-6xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-3xl p-8 sm:p-12 backdrop-blur-xl">

                    {/* Left: Copy */}
                    <div className="max-w-md">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-bold text-emerald-400 mb-4">
                            <Lock className="w-3 h-3" />
                            <span>Zero Log Guarantee</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 leading-tight">
                            Like ChatGPT, but <br />
                            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                built with genuine stealth.
                            </span>
                        </h2>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            Standard AI tools force you to copy, switch tabs, or paste into another window—immediately generating red flags in Canvas audit logs. ExamGhost operates completely inside the quiz DOM.
                        </p>

                        <a 
                            href="#pricing" 
                            className="inline-flex items-center justify-center px-7 py-3.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-600/30 hover:-translate-y-0.5 transition-all"
                        >
                            Try ExamGhost Free
                        </a>
                    </div>

                    {/* Right: Feature Badges */}
                    <div className="space-y-3.5">
                        {features.map((feature, idx) => (
                            <div 
                                key={idx}
                                className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors"
                            >
                                <div className="w-7 h-7 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center shrink-0 mt-0.5">
                                    <Check className="w-4 h-4 text-blue-400 stroke-[2.5]" />
                                </div>
                                <div>
                                    <h5 className="font-bold text-sm text-white mb-0.5">{feature.title}</h5>
                                    <p className="text-xs text-slate-400 leading-relaxed">{feature.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
}
