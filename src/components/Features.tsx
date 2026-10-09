'use client';

import React from 'react';
import { 
    EyeOff, Check, Scan, Shield, Camera, CheckCircle2, Lock
} from 'lucide-react';
import { SiDiscord } from 'react-icons/si';

export default function Features() {
    return (
        <section id="features" className="py-20 sm:py-24 bg-white text-slate-900 border-b border-slate-200/80">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
                        <Shield className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-xs font-semibold text-slate-700">
                            Core Architecture
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
                        Built for total privacy & reliability
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        Proprietary Shadow DOM isolation and event-loop interception keep your activity completely private from school monitoring tools.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">

                    {/* Card 1: Technical Invisibility (Col 5) */}
                    <div className="md:col-span-5 rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all">
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center mb-5">
                                <EyeOff className="w-5 h-5 text-blue-600" />
                            </div>
                            <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                                Zero-Footprint Invisibility
                            </h3>
                            <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                Overlays and answer highlights are rendered inside an isolated Shadow DOM container. No script tags or styling classes ever touch the quiz page code.
                            </p>
                        </div>

                        <div className="space-y-2.5 pt-4 border-t border-slate-100">
                            {[
                                'Zero DOM modifications visible to Canvas',
                                'Blocks window-blur & focus-loss listeners',
                                'Undetectable by screen-sharing tools'
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2.5">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                    <span className="text-xs font-medium text-slate-700">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: Clean Shadow DOM Architecture Diagram (Col 7) */}
                    <div className="md:col-span-7 rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                                    Isolated Shadow Root Architecture
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-600">
                                    How ExamGhost stays completely separated from school monitoring scripts:
                                </p>
                            </div>
                            <span className="px-2.5 py-1 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-medium rounded-full">
                                Encapsulated
                            </span>
                        </div>

                        {/* Clean Diagram */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-3 text-xs">
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                <div className="font-semibold text-slate-800 mb-1 flex items-center justify-between">
                                    <span>Host Page DOM</span>
                                    <span className="text-slate-400 font-mono text-[10px]">Canvas Quiz</span>
                                </div>
                                <p className="text-slate-500 text-[11px] mb-3 leading-normal">
                                    Proctor scripts only have access to read this tree:
                                </p>
                                <div className="space-y-1.5 font-mono text-[11px]">
                                    <div className="p-1.5 rounded bg-white border border-slate-200 text-slate-700">
                                        &lt;div class=&quot;quiz-question&quot;&gt;
                                    </div>
                                    <div className="p-1.5 rounded bg-white border border-slate-200 text-slate-700">
                                        &lt;input type=&quot;radio&quot;&gt; Option B
                                    </div>
                                    <div className="text-[10px] text-emerald-600 font-semibold pt-1">
                                        ✓ 0 third-party extensions found
                                    </div>
                                </div>
                            </div>

                            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200">
                                <div className="font-semibold text-blue-950 mb-1 flex items-center justify-between">
                                    <span>ExamGhost Shadow Root</span>
                                    <span className="text-blue-600 font-mono text-[10px]">Isolated</span>
                                </div>
                                <p className="text-blue-800/80 text-[11px] mb-3 leading-normal">
                                    Private execution boundary invisible to host:
                                </p>
                                <div className="space-y-1.5 font-mono text-[11px]">
                                    <div className="p-1.5 rounded bg-white border border-blue-200 text-blue-900">
                                        #shadow-root (closed)
                                    </div>
                                    <div className="p-1.5 rounded bg-white border border-blue-200 text-emerald-800">
                                        &lt;ghost-solver state=&quot;active&quot;&gt;
                                    </div>
                                    <div className="text-[10px] text-blue-700 font-semibold pt-1">
                                        ✓ 100% Protected execution
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
                            <span>Security level: Encapsulated shadow boundary</span>
                            <span className="text-emerald-700 font-medium">0 Injections</span>
                        </div>
                    </div>

                    {/* Card 3: Focus Protection Code Mockup (Col 5) */}
                    <div className="md:col-span-5 rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all">
                        <div>
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="text-lg sm:text-xl font-bold text-slate-900">Focus-Loss Protection</h3>
                                <span className="px-2 py-0.5 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-semibold text-slate-700">
                                    INTERCEPTOR
                                </span>
                            </div>
                            <p className="text-sm text-slate-600 leading-relaxed mb-4">
                                Overrides the browser window visibility API so Canvas continuously registers the tab as active, even when you switch desktop workspaces.
                            </p>
                        </div>

                        <div className="rounded-xl bg-slate-50 border border-slate-200 p-3.5 font-mono text-xs space-y-2">
                            <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80">
                                <span className="text-slate-600">window.blur</span>
                                <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 text-[11px]">
                                    SILENCED
                                </span>
                            </div>
                            <div className="flex items-center justify-between pb-1.5 border-b border-slate-200/80">
                                <span className="text-slate-600">document.hasFocus()</span>
                                <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 text-[11px]">
                                    TRUE
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-600">document.visibilityState</span>
                                <span className="text-emerald-700 font-semibold bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200 text-[11px]">
                                    &quot;VISIBLE&quot;
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Snap-It Multimodal Vision (Col 7) */}
                    <div className="md:col-span-7 rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all">
                        <div>
                            <div className="flex justify-between items-start mb-3">
                                <div>
                                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-1">
                                        Snap-It Multimodal Vision
                                    </h3>
                                    <p className="text-sm text-slate-600 max-w-md">
                                        Can&apos;t copy text? Drag a crop box over any chemical reaction, calculus graph, or locked PDF element for an instant solve in &lt;1.2s.
                                    </p>
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-200 flex items-center justify-center shrink-0">
                                    <Camera className="w-5 h-5 text-blue-600" />
                                </div>
                            </div>
                        </div>

                        {/* Interactive Crop Simulation */}
                        <div className="mt-4 rounded-xl bg-slate-50 border border-slate-200 p-4 font-mono text-xs">
                            <div className="flex items-center justify-between text-slate-600 mb-2">
                                <span className="text-blue-600 font-medium flex items-center gap-1.5">
                                    <Scan className="w-3.5 h-3.5" />
                                    <span>[Crop Area: 420 × 180px]</span>
                                </span>
                                <span className="text-emerald-700 font-semibold">Solved in 0.84s</span>
                            </div>

                            <div className="p-3 rounded-lg bg-white border border-dashed border-slate-300 text-slate-800">
                                <div className="text-slate-400 text-[10px] mb-1">Detected Formula:</div>
                                <div className="text-sm font-bold text-slate-900 mb-2">
                                    ∫ (6x² + 2) dx from x = 1 to x = 3
                                </div>
                                <div className="flex items-center justify-between text-[11px] pt-2 border-t border-slate-100">
                                    <span className="text-emerald-700 font-semibold">Answer: 56</span>
                                    <span className="text-slate-500">Confidence: 99.9%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Zero-Knowledge Security (Col 4) */}
                    <div className="md:col-span-4 rounded-2xl bg-white border border-slate-200 p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:border-slate-300 transition-all">
                        <div>
                            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5">
                                <Lock className="w-5 h-5 text-emerald-600" />
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-2">
                                Zero-Knowledge Security
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                                In-memory processing with strict zero-logging. Your clipboard and exam data are never written to disk or third-party tracking APIs.
                            </p>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono">
                            <span className="text-slate-600">ENCRYPTION</span>
                            <span className="text-emerald-700 font-bold">AES-256 GCM</span>
                        </div>
                    </div>

                    {/* Card 6: Community Discord Banner (Col 8) */}
                    <div className="md:col-span-8 rounded-2xl bg-slate-900 text-white p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
                        <div className="max-w-md">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold text-slate-300 mb-3 border border-slate-700">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                                <span>2,400+ Active Students</span>
                            </div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                                Stay Protected on Every Update
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                When Canvas or Blackboard roll out an update, our engineers test and patch compatibility within 2 hours. Join our private Discord for instant updates.
                            </p>
                        </div>

                        <a 
                            href="#pricing"
                            className="w-full sm:w-auto px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm shrink-0 transition-colors"
                        >
                            <SiDiscord className="w-4 h-4 text-white" />
                            <span>Join Discord Community</span>
                        </a>
                    </div>

                </div>

            </div>
        </section>
    );
}
