'use client';
import React from 'react';
import { Bot, Star, Youtube, Instagram, ShieldCheck } from 'lucide-react';
import { FaTiktok, FaChrome } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-[#050811] text-white relative pt-12">

            {/* Pre-Footer CTA Card */}
            <div className="max-w-5xl mx-auto px-4 relative z-20 w-full mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-10 md:p-14 text-center shadow-[0_0_60px_rgba(59,130,246,0.3)] relative overflow-hidden"
                >
                    <div className="flex items-center justify-center mb-6">
                        <div className="flex -space-x-2">
                            {['bg-blue-300', 'bg-purple-300', 'bg-indigo-300', 'bg-sky-300', 'bg-emerald-300'].map((bg, i) => (
                                <div key={i} className={`w-8 h-8 rounded-full border-2 border-indigo-600 ${bg} flex items-center justify-center`} />
                            ))}
                        </div>
                        <div className="flex flex-col items-start ml-4 text-left">
                            <div className="flex gap-1 mb-0.5">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-white text-white" />)}
                            </div>
                            <span className="text-white text-[11px] font-bold tracking-wider opacity-90 uppercase">50,000+ Active Students</span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight leading-tight">
                        Ready to make Canvas tests effortless?
                    </h2>
                    <p className="text-blue-100 text-sm sm:text-base mb-8 font-medium max-w-xl mx-auto">
                        Install in 30 seconds. Switch tabs safely, auto-solve quiz questions, and stay 100% invisible to professors.
                    </p>

                    <a 
                        href="#pricing"
                        className="inline-flex items-center gap-3 bg-white text-slate-900 font-bold px-8 py-4 text-sm rounded-xl hover:scale-105 transition-all shadow-xl shadow-black/20"
                    >
                        <FaChrome className="w-5 h-5 text-blue-600" />
                        <span>Add ExamGhost to Chrome — Free</span>
                    </a>
                </motion.div>
            </div>
 
            {/* 3-Column Footer Links */}
            <div className="max-w-7xl mx-auto px-4 w-full pb-12 border-t border-white/5 pt-16">
                <div className="flex flex-wrap justify-between gap-10">
 
                    {/* Brand Column */}
                    <div className="w-full lg:w-[32%]">
                        <a href="/" className="flex items-center gap-2.5 group mb-4 inline-flex">
                            <div className="w-8 h-8 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                                <Bot className="w-5 h-5" />
                            </div>
                            <span className="font-extrabold text-xl tracking-tight text-white">ExamGhost <span className="text-blue-400 italic">AI</span></span>
                        </a>
                        <p className="text-slate-400 text-xs sm:text-sm font-normal mb-6 leading-relaxed">
                            Undetectable AI homework helper & test companion. Intercepts focus-loss event listeners on Canvas, Blackboard, Moodle, and Brightspace.
                        </p>

                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded-full text-xs font-semibold text-emerald-400 mb-6">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                            <span>100% Stealth Active</span>
                        </div>

                        {/* Social */}
                        <div className="flex gap-4 text-slate-400">
                            <a href="#" className="hover:text-blue-400 transition-colors"><Instagram className="w-4 h-4" /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><FaTiktok className="w-4 h-4" /></a>
                            <a href="#" className="hover:text-blue-400 transition-colors"><Youtube className="w-4 h-4" /></a>
                        </div>
                    </div>
 
                    {/* Link Columns */}
                    <div className="w-full lg:w-[60%] flex flex-wrap gap-12 md:gap-20 text-xs sm:text-sm">
 
                        {/* Column 1: Navigation */}
                        <div>
                            <h4 className="font-bold text-white mb-4 tracking-tight uppercase text-xs">Product</h4>
                            <ul className="space-y-3">
                                <li><a href="/#demo" className="text-slate-400 hover:text-white transition-colors">Quiz Simulator</a></li>
                                <li><a href="/#demo" className="text-slate-400 hover:text-white transition-colors">Teacher Log Proof</a></li>
                                <li><a href="/features" className="text-slate-400 hover:text-white transition-colors">All Features (24+)</a></li>
                                <li><a href="/#pricing" className="text-slate-400 hover:text-white transition-colors">Pricing</a></li>
                                <li><a href="#faq" className="text-slate-400 hover:text-white transition-colors">FAQ</a></li>
                            </ul>
                        </div>
 
                        {/* Column 2: Compare */}
                        <div>
                            <h4 className="font-bold text-white mb-4 tracking-tight uppercase text-xs">Competitor Comparisons</h4>
                            <ul className="space-y-2.5">
                                {[
                                    { name: 'CanvasHack Alternative', path: '/cheatmate-vs-examghost' },
                                    { name: 'CheatMate Alternative', path: '/cheatmate-vs-examghost' },
                                    { name: 'UseQuietly Alternative', path: '/usequietly-vs-examghost' },
                                    { name: 'TestBro Alternative', path: '/testbro-vs-examghost' },
                                    { name: 'Quizard Alternative', path: '/quizard-vs-examghost' },
                                    { name: 'Mindko Alternative', path: '/mindko-vs-examghost' },
                                    { name: 'Classlogy Alternative', path: '/classlogy-vs-examghost' }
                                ].map((link, idx) => (
                                    <li key={idx}>
                                        <a href={link.path} className="text-slate-400 hover:text-blue-400 transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
 
                    </div>
 
                </div>
 
                <div className="pt-8 mt-12 border-t border-white/5 text-center flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
                    <p>
                        Copyright © {new Date().getFullYear()} ExamGhost. All rights reserved.
                    </p>
                    <p>
                        Engineered for student privacy and test-taking workflow support.
                    </p>
                </div>
 
            </div>
        </footer>
    );
}
