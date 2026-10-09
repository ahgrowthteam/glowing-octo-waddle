'use client';
import React from 'react';
import { Shield, Lock, CheckCircle2 } from 'lucide-react';

export default function Integrations() {
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
        <section className="bg-slate-50/60 text-slate-900 py-16 border-b border-slate-200/80">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-semibold text-slate-700 shadow-sm mb-3">
                        <Shield className="w-3.5 h-3.5 text-blue-600" />
                        <span>Cross-Platform Support</span>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900 mb-2">
                        Works on all major learning platforms
                    </h2>
                    <p className="text-sm text-slate-600">
                        Engineered to intercept visibility APIs and DOM focus listeners across modern LMS test environments.
                    </p>
                </div>

                {/* Platforms Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 mb-14">
                    {platforms.map((platform, idx) => (
                        <div 
                            key={idx}
                            className="p-4 rounded-xl bg-white border border-slate-200/80 shadow-sm hover:border-slate-300 hover:shadow transition-all"
                        >
                            <div className="flex items-center justify-between mb-1.5">
                                <span className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">
                                    {platform.type}
                                </span>
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            </div>
                            <h3 className="font-semibold text-sm sm:text-base text-slate-900">
                                {platform.name}
                            </h3>
                            <p className="text-xs text-blue-600 font-medium mt-1">
                                {platform.tag}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Value Banner */}
                <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium rounded-full mb-3">
                                <Lock className="w-3 h-3 text-emerald-600" />
                                <span>Zero-Log Guarantee</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-3 tracking-tight">
                                Designed specifically for exams, not just another chat box.
                            </h3>
                            <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                Standard AI tools require copying text, opening new windows, or using split screen—which Canvas logs instantly as &quot;Stopped viewing quiz&quot;. ExamGhost executes right on the question element with zero tab leaves.
                            </p>
                        </div>

                        <div className="space-y-3 bg-slate-50/80 rounded-xl p-5 border border-slate-200/70">
                            {[
                                { title: "Window Blur Silencer", desc: "Prevents Canvas from firing focus-lost alerts." },
                                { title: "Isolated Shadow DOM", desc: "No script artifacts or DOM modifications that proctors can detect." },
                                { title: "Instant In-Place Highlighting", desc: "Correct answers are identified on screen in under 1.2 seconds." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                    <div>
                                        <h4 className="text-xs font-semibold text-slate-900">{item.title}</h4>
                                        <p className="text-xs text-slate-500 leading-normal">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
