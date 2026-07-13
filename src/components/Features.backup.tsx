'use client';
import React from 'react';
import { EyeOff, Check, Scan, Shield, Lock, Wifi, AlertCircle, Key } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';

export default function Features() {
    return (
        <section id="features" className="py-24 md:py-32 bg-[#fafafa] relative overflow-hidden">
            {/* Custom Animations for Premium Feel */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scannerSweep {
                    0% { transform: translateY(-100%); opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { transform: translateY(400%); opacity: 0; }
                }
                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.4; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.1); box-shadow: 0 0 20px rgba(16,185,129,0.4); }
                }
                @keyframes nodeLink {
                    0% { stroke-dashoffset: 100; }
                    100% { stroke-dashoffset: 0; }
                }
                @keyframes floatIdle {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-4px); }
                }
                @keyframes codeScroll {
                    0%, 100% { transform: translateY(0); }
                    15%, 85% { transform: translateY(0); }
                    35%, 65% { transform: translateY(-20px); }
                    50% { transform: translateY(-40px); }
                }
                @keyframes meshBg {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                @keyframes lockSnap {
                    0%, 80%, 100% { transform: translateY(0); }
                    90% { transform: translateY(-3px); }
                }
                .anim-scanner { animation: scannerSweep 3s ease-in-out infinite; }
                .anim-pulse-glow { animation: pulseGlow 2s ease-in-out infinite; }
                .anim-dash { stroke-dasharray: 100; animation: nodeLink 3s linear infinite; }
                .anim-float { animation: floatIdle 4s ease-in-out infinite; }
                .anim-code-slide { animation: codeScroll 10s ease-in-out infinite; }
                .anim-mesh { background-size: 200% 200%; animation: meshBg 15s ease infinite; }
                .anim-lock { animation: lockSnap 4s ease-in-out infinite; }
            `}} />

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            {/* Ambient Blurs */}
            <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-slate-200/50 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute bottom-40 left-0 w-[400px] h-[400px] bg-blue-100/40 rounded-full blur-[100px] pointer-events-none z-0" />

            <div className="max-w-[76rem] mx-auto px-4 relative z-10 w-full">
                {/* Header */}
                <div className="max-w-2xl mb-16 md:mb-20">
                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#2563eb]" />
                        <span className="text-[11px] font-bold text-slate-800 tracking-widest uppercase">
                            Technical Deep Dive
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Engineered for <br /> Absolute Discretion
                    </h2>
                    <p className="text-[17px] text-slate-600 leading-relaxed max-w-xl">
                        A proprietary architecture designed from the ground up for zero-detection environments. Works seamlessly across major learning management systems.
                    </p>
                </div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-5 w-full auto-rows-[minmax(340px,auto)]">

                    {/* Card 1: Technical Invisibility */}
                    <div className="group md:col-span-5 bg-white rounded-3xl border border-slate-200/70 p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 overflow-hidden relative flex flex-col">
                        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/50 transition-all duration-700" />

                        <div className="mb-6">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                                <EyeOff className="w-5 h-5 text-slate-700" />
                            </div>
                        </div>
                        <h3 className="text-[22px] font-bold text-slate-900 mb-3 tracking-tight">Technical Invisibility</h3>
                        <p className="text-[15px] text-slate-500 mb-8 leading-relaxed">
                            Proprietary Shadow DOM technology ensures zero code injection into the page source visible to scripts.
                        </p>

                        <div className="mt-auto space-y-3.5">
                            {['No DOM Injection', 'Canvas Focus-Track Immunity', 'Proctor-Safe'].map((feature, i) => (
                                <div key={i} className="flex items-center gap-3 group/item">
                                    <div className="w-5 h-5 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center group-hover/item:bg-emerald-500 group-hover/item:border-emerald-500 transition-all duration-300">
                                        <Check className="w-3 h-3 text-emerald-500 group-hover/item:text-white transition-colors duration-300" />
                                    </div>
                                    <span className="text-[14px] font-medium text-slate-600 group-hover/item:text-slate-900 transition-colors duration-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Card 2: Shadow DOM Architecture */}
                    <div className="group md:col-span-7 bg-white rounded-3xl border border-slate-200/70 p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 relative overflow-hidden">
                        <h3 className="text-[22px] font-bold text-slate-900 mb-2 tracking-tight relative z-20">Shadow DOM Architecture</h3>
                        <p className="text-[15px] text-slate-500 max-w-sm relative z-20">Completely invisible to standard detection scripts.</p>

                        <div className="absolute top-6 right-6 z-20">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-50/80 backdrop-blur-sm border border-emerald-100/80 rounded-full shadow-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 anim-pulse-glow" />
                                <span className="text-[10px] font-bold text-emerald-700 tracking-widest uppercase">Undetected</span>
                            </div>
                        </div>

                        {/* Visual Animation: Hidden DOM Tree */}
                        <div className="absolute right-0 bottom-0 top-10 left-1/4 pointer-events-none z-10 flex items-center justify-end pr-10">
                            <svg width="400" height="300" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 opacity-40 group-hover:opacity-100 transition-opacity duration-700">
                                {/* Regular DOM */}
                                <circle cx="300" cy="50" r="4" fill="#cbd5e1" />
                                <circle cx="200" cy="150" r="4" fill="#cbd5e1" />
                                <circle cx="350" cy="150" r="4" fill="#cbd5e1" />
                                <path d="M300 50L200 150 M300 50L350 150" stroke="#f1f5f9" strokeWidth="2" />

                                {/* Shadow DOM branch */}
                                <path d="M200 150L250 250" stroke="#10b981" strokeWidth="2" strokeDasharray="4 4" className="anim-dash opacity-50" />
                                <circle cx="250" cy="250" r="6" fill="#10b981" className="anim-pulse-glow" />

                                {/* Scanner that misses the shadow DOM */}
                                <rect x="0" y="-100" width="400" height="80" fill="url(#scanGrad)" className="anim-scanner" />
                                <defs>
                                    <linearGradient id="scanGrad" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="rgba(203, 213, 225, 0)" />
                                        <stop offset="100%" stopColor="rgba(203, 213, 225, 0.4)" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            {/* Glass overlay hiding the shadow DOM */}
                            <div className="absolute inset-0 bg-gradient-to-l from-white/10 to-white backdrop-blur-[1px] mask-image-linear-to-r" />
                        </div>
                    </div>

                    {/* Card 3: Focus Protection */}
                    <div className="group md:col-span-5 bg-white rounded-3xl border border-slate-200/70 p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 relative flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-[22px] font-bold text-slate-900 tracking-tight">Focus Protection</h3>
                            <div className="px-3 py-1.5 bg-indigo-50/80 border border-indigo-100 rounded-full text-[10px] font-bold text-indigo-600 tracking-widest uppercase flex items-center gap-1.5">
                                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 anim-pulse-glow" />
                                Active
                            </div>
                        </div>
                        <p className="text-[15px] text-slate-500 mb-8 leading-relaxed max-w-[90%]">
                            Maintains window focus status programmatically. Prevents 'tab switch' flags on remote portals.
                        </p>

                        <div className="mt-auto">
                            {/* IDE mockup */}
                            <div className="bg-[#0f172a] rounded-xl border border-slate-800 p-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)] anim-float relative overflow-hidden">
                                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                                <div className="flex gap-1.5 mb-4 px-1">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-[#FF5F57] transition-colors" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-[#FEBC2E] transition-colors" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-700 hover:bg-[#27C840] transition-colors" />
                                </div>
                                <div className="space-y-3 font-mono text-[11px] font-medium tracking-tight">
                                    <div className="flex items-center justify-between group/code border-b border-slate-800/50 pb-2">
                                        <span className="text-slate-400">window.<span className="text-blue-400">addEventListener</span>(<span className="text-emerald-300">'blur'</span>)</span>
                                        <span className="text-red-400/90 font-bold bg-red-400/10 border border-red-400/20 px-1.5 py-0.5 rounded text-[9px] group-hover/code:bg-red-500 group-hover/code:text-white transition-colors">OVERRIDDEN</span>
                                    </div>
                                    <div className="flex items-center justify-between group/code border-b border-slate-800/50 pb-2">
                                        <span className="text-slate-400">document.<span className="text-blue-400">hasFocus</span>()</span>
                                        <span className="text-emerald-400 font-bold bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded text-[9px] group-hover/code:bg-emerald-500 group-hover/code:text-white transition-colors">TRUE</span>
                                    </div>
                                    <div className="flex items-center justify-between group/code">
                                        <span className="text-slate-400">document.<span className="text-blue-400">visibilityState</span></span>
                                        <span className="text-emerald-400 font-bold bg-emerald-400/10 border border-emerald-400/20 px-1.5 py-0.5 rounded text-[9px] group-hover/code:bg-emerald-500 group-hover/code:text-white transition-colors">"visible"</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 4: Instant OCR Snapshot */}
                    <div className="group md:col-span-7 bg-white rounded-3xl border border-slate-200/70 p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 flex flex-col relative overflow-hidden">
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-[22px] font-bold text-slate-900 mb-2 tracking-tight">Instant OCR Snapshot</h3>
                                <p className="text-[15px] text-slate-500 max-w-[80%]">
                                    Optimized edge pipeline delivers solutions in under <span className="font-bold text-slate-800 tracking-wide">1.2s</span>.
                                </p>
                            </div>
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-slate-100 group-hover:rotate-12 transition-transform duration-500">
                                <Scan className="w-5 h-5 text-slate-700" />
                            </div>
                        </div>

                        <div className="mt-auto relative">
                            {/* Editor Mockup */}
                            <div className="bg-[#1e1e2e] rounded-xl border border-[#313244] p-4 relative overflow-hidden shadow-xl sm:p-5">
                                {/* Editor Header */}
                                <div className="flex items-center gap-2 mb-3 border-b border-[#313244]/80 pb-3">
                                    <div className="w-2.5 h-2.5 bg-[#f38ba8] rounded-full" />
                                    <div className="w-2.5 h-2.5 bg-[#f9e2af] rounded-full" />
                                    <div className="w-2.5 h-2.5 bg-[#a6e3a1] rounded-full" />
                                    <span className="ml-2 text-[10px] text-[#9399b2] font-mono opacity-80">physics_exam.html</span>
                                </div>

                                <div className="font-mono text-[11px] sm:text-xs leading-relaxed text-[#cdd6f4] relative z-10">
                                    <div className="anim-code-slide">
                                        <div className="flex"><span className="w-6 text-[#6c7086] select-none text-right pr-3">12</span><span><span className="text-[#cba6f7]">function</span> <span className="text-[#89b4fa]">calculateVelocity</span>(d, t) {'{'}</span></div>
                                        <div className="flex"><span className="w-6 text-[#6c7086] select-none text-right pr-3">13</span><span className="pl-4"><span className="text-[#cba6f7]">const</span> v = d / t;</span></div>
                                        <div className="flex"><span className="w-6 text-[#6c7086] select-none text-right pr-3">14</span><span className="pl-4"><span className="text-[#cba6f7]">return</span> v;</span></div>
                                        <div className="flex"><span className="w-6 text-[#6c7086] select-none text-right pr-3">15</span><span>{'}'}</span></div>
                                        <div className="flex"><span className="w-6 text-[#6c7086] select-none text-right pr-3">16</span><span>&nbsp;</span></div>

                                        {/* Exam Question Block */}
                                        <div className="relative group/ocr">
                                            {/* OCR Highlight Overlay */}
                                            <div className="absolute -inset-x-2 -inset-y-1 bg-blue-500/10 border border-blue-500/30 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                            <div className="flex relative z-10"><span className="w-6 text-[#6c7086] select-none text-right pr-3">17</span><span className="text-[#a6e3a1]">// QUESTION 4:</span></div>
                                            <div className="flex relative z-10"><span className="w-6 text-[#6c7086] select-none text-right pr-3">18</span><span className="text-[#bac2de]">If a train travels <span className="text-[#f38ba8] font-bold">400km</span> in <span className="text-[#f38ba8] font-bold">2.5 hours</span>,</span></div>

                                            {/* Action Badge */}
                                            <div className="absolute right-0 top-1/2 -translate-y-1/2 px-2.5 py-1 bg-blue-500/20 backdrop-blur-md border border-blue-400/40 rounded-md shadow-lg flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 duration-500">
                                                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 anim-pulse-glow" />
                                                <span className="text-[9px] font-bold text-blue-300 tracking-widest uppercase">Extracting</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Shimmering laser */}
                                <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#89b4fa] to-transparent anim-scanner shadow-[0_0_10px_#89b4fa]" />
                            </div>
                        </div>
                    </div>

                    {/* Card 5: Enterprise Encryption */}
                    <div className="group md:col-span-4 bg-white rounded-3xl border border-slate-200/70 p-8 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 flex flex-col relative">
                        <div className="mb-6">
                            <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-[0_4px_20px_rgb(0,0,0,0.08)] border border-slate-100 group-hover:scale-110 transition-transform duration-500">
                                <Shield className="w-5 h-5 text-slate-700" />
                            </div>
                        </div>
                        <h3 className="text-[22px] font-bold text-slate-900 mb-3 tracking-tight">Enterprise Encryption</h3>
                        <p className="text-[15px] text-slate-500 leading-relaxed mb-8">
                            All data transmission is secured with AES-256 encryption. We utilize a strict zero-logging policy.
                        </p>
                        <div className="mt-auto flex items-center justify-between p-3.5 bg-slate-50 border border-slate-100 rounded-xl relative overflow-hidden group/enc">
                            <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent scale-x-0 group-hover/enc:scale-x-100 transition-transform duration-500" />
                            <div className="flex gap-2 relative z-10">
                                <Lock className="w-4 h-4 text-slate-400 anim-lock" />
                                <Key className="w-4 h-4 text-slate-400" />
                            </div>
                            <span className="text-[11px] font-bold text-slate-600 tracking-widest bg-white px-2 py-1 rounded shadow-sm relative z-10">
                                AES-256
                            </span>
                        </div>
                    </div>

                    {/* Card 6: Join Community */}
                    <div className="group md:col-span-8 bg-gradient-to-br from-[#4f46e5] to-[#7c3aed] rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-500 relative overflow-hidden flex flex-col justify-center anim-mesh">
                        {/* Shimmer / Noise overlay */}
                        <div className="absolute inset-0 opacity-20 pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} />

                        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none group-hover:bg-white/20 transition-colors duration-700" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
                            <div className="max-w-[400px]">
                                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-5 shadow-sm">
                                    <div className="w-2 h-2 rounded-full bg-emerald-400 border-[2px] border-emerald-400/30 anim-pulse-glow" />
                                    <span className="text-[11px] font-bold text-white tracking-widest uppercase">2,400+ Online</span>
                                </div>
                                <h3 className="text-3xl md:text-[2rem] font-bold text-white mb-3 tracking-tight leading-tight">Join the ExamGhost Community</h3>
                                <p className="text-indigo-100/90 text-[16px] leading-relaxed font-medium">
                                    Connect with thousands of students, share tips, and get live support from our core developers.
                                </p>
                            </div>
                            <div className="w-full md:w-auto shrink-0 relative">
                                <a
                                    href="#"
                                    className="group/btn w-full md:w-auto px-8 py-4 bg-white text-[#4f46e5] rounded-2xl font-bold flex items-center justify-center gap-3 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 relative z-10"
                                >
                                    <SiDiscord className="w-6 h-6 group-hover/btn:scale-110 transition-transform duration-300" />
                                    Launch Discord
                                </a>
                                {/* Button glow underlay */}
                                <div className="absolute inset-0 bg-white/40 blur-xl rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
