'use client';
import React from 'react';
import { Check, Shield, Zap, Eye } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Integrations() {
    const features = [
        { icon: Zap, text: "Instantly solves questions overlaid on your screen." },
        { icon: Check, text: "Provides 100% correct answers directly inside the quiz." },
        { icon: Shield, text: "Works flawlessly on Canvas, Blackboard, and McGraw Hill." },
        { icon: Eye, text: "Proven to bypass all screen recording and proctoring tools." }
    ];

    const logos = [
        { name: "Canvas", color: "#E74C3C", circle: true },
        { name: "Blackboard", color: "#262626", bold: true },
        { name: "D2L Brightspace", color: "#F47C20", italic: true },
        { name: "McGraw Hill", color: "#004B87", serif: true },
        { name: "Schoology", color: "#58A946", rounded: true },
        { name: "Moodle", color: "#F98012", bold: true },
    ];

    return (
        <section className="bg-slate-50/50 flex flex-col items-center justify-center overflow-hidden border-b border-slate-100 pb-20 pt-16">

            {/* Logo Marquee Breaker */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full bg-transparent mb-20 relative"
            >
                <div className="max-w-7xl mx-auto px-4 text-center mb-8">
                    <p className="text-sm font-semibold text-slate-500 uppercase tracking-widest">
                        Join 50,000+ top students crushing exams on
                    </p>
                </div>

                {/* Infinite Marquee Container */}
                <div className="relative flex overflow-x-hidden group mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)">
                    <div className="py-2 animate-[marquee_30s_linear_infinite] whitespace-nowrap flex items-center gap-12 sm:gap-20 group-hover:[animation-play-state:paused] px-10">
                        {/* Render logos twice for infinite effect */}
                        {[...logos, ...logos, ...logos].map((logo, idx) => (
                            <div key={idx} className="flex items-center justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                                <span className={`text-xl font-bold tracking-tight text-slate-800 flex items-center gap-2 ${logo.serif ? 'font-serif' : ''} ${logo.italic ? 'italic' : ''} ${logo.bold ? 'font-black' : ''}`}>
                                    {logo.circle && (
                                        <svg viewBox="0 0 24 24" className="w-6 h-6">
                                            <circle cx="12" cy="12" r="10" fill={logo.color} opacity="0.9" />
                                            <circle cx="12" cy="7" r="1.5" fill="white" />
                                            <circle cx="7" cy="12" r="1.5" fill="white" />
                                            <circle cx="17" cy="12" r="1.5" fill="white" />
                                            <circle cx="12" cy="17" r="1.5" fill="white" />
                                            <circle cx="12" cy="12" r="2" fill="white" />
                                        </svg>
                                    )}
                                    {logo.rounded && (
                                        <svg viewBox="0 0 24 24" className="w-6 h-6">
                                            <circle cx="12" cy="12" r="10" fill={logo.color} />
                                            <path d="M8 12.5C9 11 11 10 12 10s3 1 4 2.5" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
                                            <circle cx="9.5" cy="9" r="1.2" fill="white" />
                                            <circle cx="14.5" cy="9" r="1.2" fill="white" />
                                        </svg>
                                    )}
                                    {!logo.circle && !logo.rounded && (
                                        <span className="text-2xl" style={{ color: logo.color }}>
                                            {logo.name.charAt(0)}
                                        </span>
                                    )}
                                    {logo.name}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </motion.div>

            <div className="max-w-6xl mx-auto px-4 w-full relative z-10">

                {/* 2-Column Features Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center max-w-5xl mx-auto bg-white rounded-3xl p-8 sm:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">

                    {/* Left: Copy & CTA */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="max-w-md mx-auto lg:mx-0 text-center lg:text-left"
                    >
                        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
                            Like ChatGPT, but <br />
                            <span className="text-primary tracking-normal relative inline-block">
                                with real stealth.
                                <motion.span
                                    className="absolute -bottom-2 left-0 w-full h-1.5 bg-blue-200 rounded-full z-[-1]"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                                />
                            </span>
                        </h2>

                        <a href="#" className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-white rounded-xl font-bold text-[15px] hover:bg-blue-600 transition-all shadow-lg shadow-blue-500/30 mb-4 w-full sm:w-auto hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40 relative overflow-hidden group">
                            <span className="relative z-10">Get started for free</span>
                            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                        </a>
                        <p className="text-[13px] font-medium text-slate-400">
                            No credit card &bull; No commitment
                        </p>
                    </motion.div>

                    {/* Right: Feature Stack */}
                    <div className="flex flex-col gap-3.5 w-full max-w-lg mx-auto lg:ml-auto">
                        {features.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: 0.2 + (idx * 0.1), ease: "easeOut" }}
                                className="flex items-center gap-4 p-4 lg:p-5 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-100 hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                            >
                                <div className="w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                                    <Check className="w-3.5 h-3.5 text-primary" strokeWidth={3} />
                                </div>
                                <p className="text-slate-700 font-medium text-[14px] group-hover:text-slate-900 transition-colors">
                                    {feature.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
