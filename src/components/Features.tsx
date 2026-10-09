'use client';

import React, { useRef } from 'react';
import { 
    EyeOff, Check, Scan, Shield, Lock, Key, Maximize, 
    Layers, Cpu, Sparkles, Terminal, Camera, Zap, CheckCircle2 
} from 'lucide-react';
import { SiDiscord } from 'react-icons/si';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export default function Features() {
    const shadowDomRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLDivElement>) {
        if (!shadowDomRef.current) return;
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <section id="features" className="py-24 sm:py-32 bg-[#060a14] text-white relative overflow-hidden border-t border-white/[0.06]">
            {/* Subtle atmospheric ambient glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 mb-4">
                        <Cpu className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-[11px] font-bold text-blue-400 tracking-widest uppercase">
                            Technical Architecture
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                        Engineered for Absolute Discretion
                    </h2>
                    <p className="text-base text-slate-400 leading-relaxed max-w-xl mx-auto">
                        Proprietary shadow-DOM encapsulation and event-loop interception designed from the ground up for zero detection.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full">

                    {/* Card 1: Technical Invisibility (Col 5) */}
                    <div className="md:col-span-5 rounded-2xl bg-[#090f1d] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                        <div>
                            <div className="w-11 h-11 rounded-xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center mb-6">
                                <EyeOff className="w-5 h-5 text-blue-400" />
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                                Technical Invisibility
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-6">
                                Proprietary Shadow DOM encapsulation ensures zero elements or scripts are injected into the host page source code visible to proctors.
                            </p>
                        </div>

                        <div className="space-y-2.5 pt-4 border-t border-white/10">
                            {[
                                'Zero DOM Code Injections',
                                'Canvas Focus-Track Immunity',
                                'Proctor & Screen-Share Invisible'
                            ].map((feature, i) => (
                                <div key={i} className="flex items-center gap-2.5">
                                    <div className="w-4 h-4 rounded-full bg-emerald-500/15 flex items-center justify-center shrink-0">
                                        <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                                    </div>
                                    <span className="text-xs font-medium text-slate-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: Interactive Anti-Detection Radar (Col 7) */}
                    <div 
                        ref={shadowDomRef}
                        onMouseMove={handleMouseMove}
                        className="group md:col-span-7 rounded-2xl bg-[#090f1d] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.4)] relative overflow-hidden cursor-crosshair"
                    >
                        <div className="flex justify-between items-start mb-4 relative z-20">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight">
                                    Shadow DOM Architecture
                                </h3>
                                <p className="text-xs sm:text-sm text-slate-400 max-w-sm">
                                    Canvas scans window listeners every second. Our engine remains completely isolated. <span className="italic text-slate-500">(Hover to simulate scanner)</span>
                                </p>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full shrink-0">
                                <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                                <span className="text-[10px] font-bold text-emerald-400 tracking-wider uppercase">Undetected</span>
                            </div>
                        </div>

                        {/* Interactive Radar Visual */}
                        <div className="relative h-44 w-full flex items-center justify-center my-2">
                            {/* Radar circles */}
                            <div className="relative w-40 h-40 rounded-full border border-emerald-500/20 bg-emerald-500/5 flex items-center justify-center">
                                <div className="absolute w-28 h-28 rounded-full border border-emerald-500/20" />
                                <div className="absolute w-16 h-16 rounded-full border border-emerald-500/30" />
                                <div className="absolute w-full h-[1px] bg-emerald-500/20" />
                                <div className="absolute h-full w-[1px] bg-emerald-500/20" />

                                {/* Sweeping Beam */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-full h-full rounded-full origin-center"
                                    style={{
                                        background: 'conic-gradient(from 0deg, transparent 75%, rgba(16, 185, 129, 0.08) 85%, rgba(16, 185, 129, 0.4) 100%)'
                                    }}
                                />

                                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,1)] z-10" />
                            </div>

                            {/* Floating Target Tracked by Mouse */}
                            <motion.div
                                className="absolute pointer-events-none z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                style={{
                                    x: useMotionTemplate`calc(${mouseX}px - 200px)`,
                                    y: useMotionTemplate`calc(${mouseY}px - 100px)`,
                                }}
                            >
                                <div className="w-8 h-8 border border-rose-500 rounded-full animate-ping absolute" />
                                <div className="w-2 h-2 rounded-full bg-rose-500" />
                                <span className="absolute top-4 left-4 text-[9px] font-mono text-rose-400 bg-black/80 px-1 py-0.5 rounded border border-rose-500/30 whitespace-nowrap">
                                    PROCTOR QUERY BLOCKED
                                </span>
                            </motion.div>
                        </div>

                        <div className="flex items-center justify-between text-xs text-slate-400 font-mono pt-3 border-t border-white/10">
                            <span>Isolation Status: 100% Encapsulated</span>
                            <span className="text-emerald-400">0 Flags Raised</span>
                        </div>
                    </div>

                    {/* Card 3: Focus Protection IDE Mockup (Col 5) */}
                    <div className="md:col-span-5 rounded-2xl bg-[#090f1d] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-white tracking-tight">Focus Protection</h3>
                                <span className="px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-[10px] font-bold text-blue-400 uppercase font-mono">
                                    ACTIVE
                                </span>
                            </div>
                            <p className="text-sm text-slate-400 leading-relaxed mb-6">
                                Overrides browser visibility APIs so Canvas continuously registers the window as active, even when you switch desktop workspaces.
                            </p>
                        </div>

                        <div className="rounded-xl bg-[#050811] border border-white/10 p-4 font-mono text-[11px] space-y-2.5">
                            <div className="flex items-center justify-between pb-2 border-b border-white/5">
                                <span className="text-slate-400">window.addEventListener('blur')</span>
                                <span className="text-rose-400 font-bold bg-rose-500/10 px-1.5 py-0.5 rounded border border-rose-500/20 text-[10px]">
                                    SILENCED
                                </span>
                            </div>
                            <div className="flex items-center justify-between pb-2 border-b border-white/5">
                                <span className="text-slate-400">document.hasFocus()</span>
                                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 text-[10px]">
                                    TRUE
                                </span>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-slate-400">document.visibilityState</span>
                                <span className="text-emerald-400 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded border border-emerald-500/20 text-[10px]">
                                    "VISIBLE"
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Instant OCR Snapshot & Multimodal Vision (Col 7) */}
                    <div className="md:col-span-7 rounded-2xl bg-[#090f1d] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                        <div>
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-white mb-1.5 tracking-tight">
                                        Snap-It Multimodal Vision
                                    </h3>
                                    <p className="text-sm text-slate-400 max-w-md">
                                        Can't copy text? Drag a crop box over any chemical reaction, calculus graph, or locked PDF element for an instant solve in &lt;1.2s.
                                    </p>
                                </div>
                                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                                    <Camera className="w-5 h-5 text-amber-400" />
                                </div>
                            </div>
                        </div>

                        {/* Interactive Crop Simulation */}
                        <div className="mt-4 rounded-xl bg-[#050811] border border-white/10 p-4 font-mono relative overflow-hidden">
                            <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                                <span className="text-amber-400 flex items-center gap-1.5">
                                    <Scan className="w-3.5 h-3.5" />
                                    <span>[Crop Area: 420 × 180px]</span>
                                </span>
                                <span className="text-emerald-400 font-bold">Solved in 0.84s</span>
                            </div>

                            <div className="p-3 rounded-lg bg-white/[0.02] border border-dashed border-amber-400/40 text-xs text-slate-200">
                                <div className="text-slate-400 text-[10px] mb-1">Detected Formula:</div>
                                <div className="text-sm font-bold text-white mb-2">
                                    ∫ (6x² + 2) dx from x = 1 to x = 3
                                </div>
                                <div className="flex items-center justify-between text-[11px] pt-2 border-t border-white/10">
                                    <span className="text-emerald-300 font-semibold">Answer: 56</span>
                                    <span className="text-slate-400">Confidence: 99.9%</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Enterprise Zero-Knowledge Encryption (Col 4) */}
                    <div className="md:col-span-4 rounded-2xl bg-[#090f1d] border border-white/10 p-7 flex flex-col justify-between hover:border-white/20 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                        <div>
                            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-6">
                                <Shield className="w-5 h-5 text-emerald-400" />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
                                Zero-Knowledge Security
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
                                In-memory processing with strict zero-logging. Your clipboard and exam data are never written to disk or third-party tracking APIs.
                            </p>
                        </div>

                        <div className="flex items-center justify-between p-3 rounded-xl bg-white/[0.02] border border-white/10 text-xs font-mono">
                            <span className="text-slate-400">ENCRYPTION</span>
                            <span className="text-emerald-400 font-bold">AES-256 GCM</span>
                        </div>
                    </div>

                    {/* Card 6: Join Student Community Discord (Col 8) */}
                    <div className="md:col-span-8 rounded-2xl bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-[#090f1d] border border-indigo-500/30 p-7 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 hover:border-indigo-500/50 transition-all shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
                        <div className="max-w-md">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-[11px] font-bold text-indigo-300 uppercase tracking-wider mb-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                <span>2,400+ Students Active</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
                                Stay Protected on Every Update
                            </h3>
                            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                                When Canvas or Blackboard roll out an anti-cheat patch, our engineers deploy instant stealth updates within 2 hours. Join our private Discord for real-time notifications.
                            </p>
                        </div>

                        <a 
                            href="#pricing"
                            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2.5 shadow-lg shadow-indigo-600/30 shrink-0 transition-transform active:scale-95"
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
