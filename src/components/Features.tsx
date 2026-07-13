'use client';
import React, { useRef } from 'react';
import { EyeOff, Check, Scan, Shield, Lock, Key, Maximize } from 'lucide-react';
import { SiDiscord } from 'react-icons/si';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';

export default function Features() {

    // Mouse tracking for Shadow DOM Card
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
        <section id="features" className="py-24 md:py-32 bg-[#FAFAFA] relative overflow-hidden">
            {/* Custom Animations for Premium Feel */}
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes cursorMove {
                    0% { transform: translate(250px, 150px) scale(1); opacity: 0; }
                    10% { opacity: 1; transform: translate(200px, 120px) scale(1); }
                    35% { transform: translate(110px, 55px) scale(1); opacity: 1; } /* Hovering over 400km */
                    40% { transform: translate(110px, 55px) scale(0.85); opacity: 1; } /* Click down */
                    45% { transform: translate(110px, 55px) scale(1); opacity: 0; } /* Disappear after click */
                    80% { opacity: 0; transform: translate(250px, 150px) scale(1); }
                    100% { opacity: 0; transform: translate(250px, 150px) scale(1); }
                }
                @keyframes radarRipple {
                    0%, 42% { transform: scale(0.5); opacity: 0; }
                    44% { transform: scale(1); opacity: 0.8; }
                    60% { transform: scale(3.5); opacity: 0; }
                    100% { transform: scale(3.5); opacity: 0; }
                }
                @keyframes textHighlight {
                    0%, 40% { background-color: transparent; border-color: transparent; box-shadow: 0 0 0 rgba(59, 130, 246, 0); }
                    43%, 65% { background-color: rgba(59, 130, 246, 0.15); border-color: rgba(59, 130, 246, 0.4); box-shadow: 0 0 10px rgba(59, 130, 246, 0.2); }
                    100% { background-color: transparent; border-color: transparent; box-shadow: 0 0 0 rgba(59, 130, 246, 0); }
                }
                /* Success Badge pops up immediately after click */
                @keyframes successPop {
                    0%, 45% { transform: scale(0.8) translateY(-50%) translateX(10px); opacity: 0; }
                    50%, 80% { transform: scale(1) translateY(-50%) translateX(0); opacity: 1; }
                    85%, 100% { transform: scale(0.8) translateY(-50%) translateX(10px); opacity: 0; }
                }
                /* Initial Extracting Badge */
                @keyframes badgePop {
                    0%, 15% { transform: translateY(-50%) translateX(10px); opacity: 0; }
                    20%, 40% { transform: translateY(-50%) translateX(0); opacity: 1; }
                    45%, 100% { transform: translateY(-50%) translateX(10px); opacity: 0; }
                }
                @keyframes pulseGlow {
                    0%, 100% { opacity: 0.5; transform: scale(1); }
                    50% { opacity: 1; transform: scale(1.2); box-shadow: 0 0 12px currentColor; }
                }
                @keyframes nodeFloat1 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-10px, 15px); }
                }
                @keyframes nodeFloat2 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(15px, -10px); }
                }
                @keyframes nodeFloat3 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-15px, -15px); }
                }
                .anim-cursor { animation: cursorMove 6s cubic-bezier(0.2, 0.8, 0.2, 1) infinite; }
                .anim-radar { animation: radarRipple 6s ease-out infinite; border-radius: 50%; border: 2px solid #3b82f6; }
                .anim-highlight { border: 1px solid transparent; border-radius: 4px; animation: textHighlight 6s ease-in-out infinite; }
                .anim-badge-pop { animation: badgePop 6s ease-in-out infinite; }
                .anim-success-pop { animation: successPop 6s ease-out infinite; }
                .anim-pulse-glow { animation: pulseGlow 2s ease-in-out infinite; }
                @keyframes targetPing {
                    0% { transform: scale(0.5); opacity: 1; border-width: 2px; }
                    100% { transform: scale(2.5); opacity: 0; border-width: 0px; }
                }
                .anim-target-ping { animation: targetPing 1.5s cubic-bezier(0, 0, 0.2, 1) infinite; }
            `}} />

            {/* Subtle Grid Background */}
            <div className="absolute inset-0 z-0 opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

            <div className="max-w-[72rem] mx-auto px-4 sm:px-6 relative z-10 w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="max-w-2xl mb-16 md:mb-20"
                >
                    <div className="inline-flex items-center gap-2 mb-6 px-3 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                        <span className="text-[11px] font-bold text-slate-800 tracking-widest uppercase">
                            Technical Deep Dive
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Engineered for <br /> Absolute Discretion
                    </h2>
                    <p className="text-[17px] text-slate-500 leading-relaxed max-w-xl">
                        A proprietary architecture designed from the ground up for zero-detection environments. Works seamlessly across major learning management systems.
                    </p>
                </motion.div>

                {/* Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 w-full auto-rows-[minmax(320px,auto)]">

                    {/* Card 1: Technical Invisibility */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="group md:col-span-5 bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
                    >
                        <div className="mb-6">
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                className="w-12 h-12 bg-white rounded-xl flex items-center justify-center shadow-sm border border-slate-100/80 transition-shadow"
                            >
                                <EyeOff className="w-5 h-5 text-slate-600 group-hover:text-blue-500 transition-colors" />
                            </motion.div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-snug">Technical Invisibility</h3>
                        <p className="text-[15px] text-slate-500 mb-8 leading-relaxed">
                            Proprietary Shadow DOM technology ensures zero code injection into the page source visible to scripts.
                        </p>

                        <div className="mt-auto space-y-3">
                            {['No DOM Injection', 'Canvas Focus-Track Immunity', 'Proctor-Safe'].map((feature, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                                    className="flex items-center gap-3"
                                >
                                    <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center shrink-0">
                                        <Check className="w-3.5 h-3.5 text-emerald-500" strokeWidth={3} />
                                    </div>
                                    <span className="text-[14px] font-medium text-slate-600">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Card 2: Shadow DOM Architecture (INTERACTIVE 360 RADAR) */}
                    <motion.div
                        ref={shadowDomRef}
                        onMouseMove={handleMouseMove}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                        className="group md:col-span-7 bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col cursor-crosshair"
                    >
                        <div className="flex justify-between items-start mb-4 relative z-20">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-snug">Shadow DOM Architecture</h3>
                                <p className="text-[15px] text-slate-500 max-w-sm">Standard scripts constantly scan the browser window, but our architecture stays completely invisible. <span className="hidden sm:inline italic text-slate-400 text-xs ml-1">(Hover to simulate scanner)</span></p>
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-emerald-50/80 rounded-full border border-emerald-100/50 relative z-20">
                                <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full anim-pulse-glow text-emerald-500" />
                                <span className="text-[10px] font-bold text-emerald-700 tracking-widest uppercase">Undetected</span>
                            </div>
                        </div>

                        {/* Premium 360 Radar sweep anchored to bottom right */}
                        <div className="absolute right-[-30px] bottom-[-30px] pointer-events-none z-10 hidden sm:flex items-center justify-end">
                            {/* Radar Screen Base */}
                            <div className="relative w-[320px] h-[320px] rounded-full border border-emerald-500/20 bg-emerald-500/5 shadow-[inset_0_0_50px_rgba(16,185,129,0.08)] flex items-center justify-center overflow-hidden mix-blend-multiply">

                                {/* Concentric Grid Rings */}
                                <div className="absolute w-[240px] h-[240px] rounded-full border border-emerald-500/10" />
                                <div className="absolute w-[160px] h-[160px] rounded-full border border-emerald-500/15" />
                                <div className="absolute w-[80px] h-[80px] rounded-full border border-emerald-500/20" />

                                {/* Crosshairs */}
                                <div className="absolute w-full h-[1px] bg-emerald-500/20" />
                                <div className="absolute h-full w-[1px] bg-emerald-500/20" />

                                {/* 360 Sweeping Light Beam */}
                                <motion.div
                                    animate={{ rotate: 360 }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-full h-full rounded-full origin-center"
                                    style={{
                                        background: 'conic-gradient(from 0deg, transparent 75%, rgba(16, 185, 129, 0.05) 85%, rgba(16, 185, 129, 0.4) 100%)'
                                    }}
                                >
                                    {/* Leading Edge Solid Line */}
                                    <div className="absolute top-0 right-1/2 w-[2px] h-1/2 bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
                                </motion.div>

                                {/* Radar Core/Transmitter */}
                                <div className="absolute w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,1)] anim-pulse-glow" />
                            </div>
                        </div>

                        {/* Interactive "Threat/Missile" Target Tracked by Mouse */}
                        <motion.div
                            className="absolute w-12 h-12 pointer-events-none z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{
                                x: useMotionTemplate`calc(${mouseX}px - 24px)`,
                                y: useMotionTemplate`calc(${mouseY}px - 24px)`,
                            }}
                        >
                            {/* Outer pulsing threat ring */}
                            <div className="absolute w-full h-full border-2 border-rose-500 rounded-full anim-target-ping" />

                            {/* Inner Target */}
                            <div className="relative w-4 h-4 flex items-center justify-center">
                                {/* Core dot */}
                                <div className="w-2.5 h-2.5 bg-rose-500 rounded-full shadow-[0_0_10px_rgba(244,63,94,0.8)] z-10" />
                                {/* Crosshairs around target */}
                                <div className="absolute w-8 h-[1px] bg-rose-500/70" />
                                <div className="absolute h-8 w-[1px] bg-rose-500/70" />
                                {/* Rotating target lock */}
                                <motion.div
                                    animate={{ rotate: -360 }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                                    className="absolute w-10 h-10 border-[1.5px] border-rose-500/50 rounded-full border-t-transparent border-l-transparent"
                                />
                            </div>

                            {/* Status Label (Simulated) */}
                            <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 flex items-center justify-center min-w-max">
                                <span className="bg-rose-500 text-white text-[9px] font-mono px-1.5 py-0.5 rounded flex items-center gap-1 shadow-[0_0_10px_rgba(244,63,94,0.4)]">
                                    <div className="w-1 h-1 bg-white rounded-full anim-pulse-glow" />
                                    TRACKING
                                </span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Card 3: Focus Protection */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                        className="group md:col-span-5 bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col relative"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold text-slate-900 tracking-snug">Focus Protection</h3>
                            <div className="flex items-center gap-1.5 px-3 py-1 bg-indigo-50 rounded-full">
                                <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full" />
                                <span className="text-[10px] font-bold text-indigo-600 tracking-widest uppercase">Active</span>
                            </div>
                        </div>
                        <p className="text-[15px] text-slate-500 mb-8 leading-relaxed max-w-[90%]">
                            Maintains window focus status programmatically. Prevents 'tab switch' flags on remote portals.
                        </p>

                        <div className="mt-auto">
                            {/* IDE mockup */}
                            <div className="bg-[#0F172A] rounded-xl border border-slate-800/80 p-5 shadow-lg relative overflow-hidden group-hover:border-slate-700 transition-colors">
                                <div className="flex gap-1.5 mb-5 px-1">
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                                    <div className="w-2.5 h-2.5 rounded-full bg-slate-600" />
                                </div>
                                <div className="space-y-4 font-mono text-[11px] font-medium tracking-tight">
                                    <div className="flex items-center justify-between border-b border-slate-800/50 pb-3">
                                        <span className="text-slate-400">window.<span className="text-blue-400">addEventListener</span>(<span className="text-emerald-300">'blur'</span>)</span>
                                        <span className="text-[#f43f5e] font-bold bg-[#f43f5e]/10 border border-[#f43f5e]/20 px-2 py-0.5 rounded text-[9px] uppercase tracking-wider">Overridden</span>
                                    </div>
                                    <div className="flex items-center justify-between border-b border-slate-800/50 pb-3">
                                        <span className="text-slate-400">document.<span className="text-blue-400">hasFocus</span>()</span>
                                        <span className="text-[#10b981] font-bold bg-[#10b981]/10 border border-[#10b981]/20 px-2 py-0.5 rounded text-[9px] uppercase tracking-wider">True</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-slate-400">document.<span className="text-blue-400">visibilityState</span></span>
                                        <span className="text-[#10b981] font-bold bg-[#10b981]/10 border border-[#10b981]/20 px-2 py-0.5 rounded text-[9px] uppercase tracking-wider">"visible"</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 4: Instant OCR Snapshot w/ Interactive Animation */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        className="group md:col-span-7 bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col relative overflow-hidden"
                    >
                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-snug">Instant OCR Snapshot</h3>
                                <p className="text-[15px] text-slate-500 max-w-[85%]">
                                    Optimized edge pipeline delivers solutions in under <span className="font-bold text-slate-800">1.2s</span>.
                                </p>
                            </div>
                            <motion.div
                                whileHover={{ scale: 1.1, rotate: 90 }}
                                className="w-10 h-10 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0 cursor-pointer"
                            >
                                <Maximize className="w-4 h-4 text-slate-400 group-hover:text-blue-500 transition-colors" />
                            </motion.div>
                        </div>

                        <div className="mt-auto relative w-full pt-4">
                            {/* Editor Mockup */}
                            <div className="bg-[#1C1C28] rounded-xl border border-slate-800/80 p-5 relative overflow-hidden shadow-lg w-full">
                                {/* Editor Header */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="w-2.5 h-2.5 bg-[#FF5F56] rounded-full" />
                                    <div className="w-2.5 h-2.5 bg-[#FFBD2E] rounded-full" />
                                    <div className="w-2.5 h-2.5 bg-[#27C93F] rounded-full" />

                                {/* Vertical Scrollbar Mockup */}
                                <div className="absolute right-3 top-12 bottom-3 w-3 bg-slate-700/20 rounded-md hidden sm:block p-0.5">
                                    <div className="w-full h-1/3 bg-[#D9D9D9]/80 rounded-md" />
                                </div>
                                </div>

                                <div className="font-mono text-[11px] sm:text-xs leading-loose text-[#cdd6f4] relative z-10 w-full overflow-x-hidden pt-2">
                                    <div className="flex whitespace-nowrap"><span className="w-6 text-slate-500 select-none text-right pr-3 shrink-0">12</span><span className="truncate"><span className="text-[#a78bfa]">function</span> <span className="text-[#38bdf8]">calculateVelocity</span>(d, t) {'{'}</span></div>
                                    <div className="flex"><span className="w-6 text-slate-500 select-none text-right pr-3 shrink-0">13</span><span className="pl-4"><span className="text-[#a78bfa]">const</span> v = d / t;</span></div>
                                    <div className="flex"><span className="w-6 text-slate-500 select-none text-right pr-3 shrink-0">14</span><span className="pl-4"><span className="text-[#a78bfa]">return</span> v;</span></div>
                                    <div className="flex"><span className="w-6 text-slate-500 select-none text-right pr-3 shrink-0">15</span><span>{'}'}</span></div>
                                    <div className="flex"><span className="w-6 text-slate-500 select-none text-right pr-3 shrink-0">16</span><span>&nbsp;</span></div>

                                    {/* Exam Question Block */}
                                    <div className="relative w-full">
                                        <div className="flex"><span className="w-6 text-slate-500 select-none text-right pr-3 shrink-0">17</span><span className="text-[#4ade80]">// QUESTION 4:</span></div>
                                        <div className="flex relative items-center">
                                            <span className="w-6 text-slate-500 select-none text-right pr-3 shrink-0">18</span>
                                            <span className="text-slate-300 tracking-wide relative inline-block">
                                                If a train travels
                                                <span className="relative inline-block mx-1">
                                                    {/* The text we click on */}
                                                    <span className="relative z-20 text-[#f43f5e] font-bold px-1 py-0.5 anim-highlight">400km</span>
                                                    {/* Central point for radar to originate from */}
                                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 flex items-center justify-center pointer-events-none z-10">
                                                        <div className="absolute w-8 h-8 anim-radar" />
                                                        <div className="absolute w-8 h-8 anim-radar" style={{ animationDelay: '0.2s' }} />
                                                    </div>
                                                </span>
                                                in <span className="text-[#f43f5e] font-bold">2.5 hours</span>,
                                            </span>
                                        </div>

                                        {/* State 1: Extracting Badge (animates out when radar ripples) */}
                                        <div className="absolute left-[130px] sm:left-[170px] top-1/2 px-2.5 py-1 bg-[#1C1C28]/90 backdrop-blur border border-slate-600/50 rounded-md shadow-lg flex items-center gap-2 anim-badge-pop z-30 pointer-events-none">
                                            <Scan className="w-3 h-3 text-slate-400" />
                                            <span className="text-[9px] font-bold text-slate-400 tracking-widest uppercase">Detecting</span>
                                        </div>

                                        {/* State 2: Success Badge (pops up after radar triggers) */}
                                        <div className="absolute left-[120px] sm:left-[145px] -translate-y-1/2 top-1/2 px-2.5 py-1 bg-[#254A41] border border-[#10B981]/20 rounded-lg shadow-lg flex items-center gap-2 anim-success-pop z-30 pointer-events-none">
                                            <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] anim-pulse-glow" />
                                            <span className="text-[9px] font-bold text-[#10B981] tracking-widest uppercase flex items-center gap-1">EXTRACTED ✓</span>
                                        </div>
                                    </div>

                                    {/* The Simulated Cursor */}
                                    <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-50">
                                        <div className="absolute anim-cursor w-5 h-5 flex items-center justify-center">
                                            <svg className="w-4 h-4 text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)] fill-[#1C1C28]" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
                                                <path d="M13 13l6 6" />
                                            </svg>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Card 5: Enterprise Encryption */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                        className="group md:col-span-4 bg-white rounded-[2rem] border border-slate-100 p-8 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col relative"
                    >
                        <div className="mb-6">
                            <motion.div
                                whileHover={{ scale: 1.1 }}
                                className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 transition-colors duration-300"
                            >
                                <Shield className="w-6 h-6 text-slate-700 transition-colors duration-300" />
                            </motion.div>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-snug">Enterprise Encryption</h3>
                        <p className="text-[15px] text-slate-500 leading-relaxed mb-8">
                            All data transmission is secured with AES-256 encryption. We utilize a strict zero-logging policy.
                        </p>

                        <div className="mt-auto flex items-center justify-between p-3.5 bg-slate-50/50 rounded-xl transition-colors">
                            <div className="flex gap-2.5">
                                <Lock className="w-4 h-4 text-slate-400" />
                                <Key className="w-4 h-4 text-slate-400" />
                            </div>
                            <span className="text-[11px] font-bold text-slate-700 tracking-widest bg-white px-2.5 py-1 flex items-center shadow-sm rounded border border-slate-100 uppercase">
                                AES-256
                            </span>
                        </div>
                    </motion.div>

                    {/* Card 6: Join Community */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
                        className="group md:col-span-8 bg-[#8b5cf6] rounded-[2rem] p-8 md:p-10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden flex flex-col justify-center cursor-pointer"
                    >
                        {/* Smooth Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#8b5cf6] to-[#7c3aed] opacity-100" />

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 h-full">
                            <div className="max-w-[400px]">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full mb-5 shadow-sm">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#10B981] anim-pulse-glow" />
                                    <span className="text-[10px] font-bold text-white tracking-widest uppercase">2,400+ Online</span>
                                </div>
                                <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-snug leading-tight">Join the ExamGhost Community</h3>
                                <p className="text-indigo-100/90 text-[16px] leading-relaxed font-medium">
                                    Connect with thousands of students, share tips, and get live support from our core developers.
                                </p>
                            </div>
                            <div className="w-full md:w-auto shrink-0 relative">
                                <a
                                    href="#"
                                    className="group/btn w-full md:w-auto px-6 py-4 bg-white text-[#7c3aed] rounded-xl font-bold flex items-center justify-center gap-2 transition-transform group-hover:scale-105 active:scale-95 shadow-lg relative z-10"
                                >
                                    <SiDiscord className="w-5 h-5 text-[#7c3aed]" />
                                    Launch Discord
                                </a>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
