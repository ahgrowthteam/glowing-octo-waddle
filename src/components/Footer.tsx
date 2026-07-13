'use client';
import React from 'react';
import { Bot, Star, Youtube, Instagram } from 'lucide-react';
import { FaTiktok } from 'react-icons/fa';
import { FaChrome } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="bg-white relative">

            {/* Pre-Footer Blue CTA Card */}
            <div className="max-w-[1000px] mx-auto px-4 relative z-20 w-full mb-16 pt-10 -mt-20">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-gradient-to-r from-[#3b82f6] to-[#2563eb] rounded-[2rem] p-12 md:p-16 text-center shadow-[0_20px_60px_rgba(59,130,246,0.3)] relative overflow-hidden"
                >
                    {/* Avatars */}
                    <div className="flex items-center justify-center mb-6">
                        <div className="flex -space-x-2">
                            {['bg-blue-300', 'bg-purple-300', 'bg-indigo-300', 'bg-sky-300', 'bg-emerald-300'].map((bg, i) => (
                                <div key={i} className={`w-8 h-8 rounded-full border-2 border-primary ${bg} flex items-center justify-center`}></div>
                            ))}
                        </div>
                        <div className="flex flex-col items-start ml-4">
                            <div className="flex gap-1 mb-0.5">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3 h-3 fill-white text-white" />)}
                            </div>
                            <span className="text-white text-[11px] font-bold tracking-wider opacity-90">250K+ STUDENTS TRUST US</span>
                        </div>
                    </div>

                    <h2 className="text-3xl md:text-[2.75rem] leading-tight font-bold text-white mb-4 tracking-tight">Ready to fast-track your homework?</h2>
                    <p className="text-blue-100 text-[17px] mb-10 font-medium">Save hours on homework and never worry about exams ever again.</p>

                    <button className="bg-white text-slate-900 font-bold px-10 py-4 text-[15px] rounded-xl hover:scale-105 transition-transform shadow-xl shadow-black/10 hover:shadow-black/20">
                        Get started - Its free
                    </button>

                    {/* Glow Accents Behind Button */}
                    <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-white/10 blur-[80px] pointer-events-none rounded-full" />
                </motion.div>
            </div>
 
            {/* 3-Column Footer */}
            <div className="max-w-7xl mx-auto px-4 w-full pb-10 border-t border-slate-100 pt-20">
                <div className="flex flex-wrap justify-between gap-10">
 
                    {/* Brand Column */}
                    <div className="w-full lg:w-[30%]">
                        <a href="/" className="flex items-center gap-2 group mb-5 inline-flex">
                            <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-white shadow-sm">
                                <Bot className="w-5 h-5" />
                            </div>
                            <span className="font-extrabold text-xl tracking-tight text-slate-800">ExamGhost</span>
                        </a>
                        <p className="text-slate-500 text-[14px] font-medium mb-6 leading-relaxed">
                            Instant, Expert Homework Help.
                        </p>
                        <button className="w-full flex items-center justify-center gap-2.5 px-6 py-3.5 bg-[#4F71E5] hover:bg-blue-600 text-white rounded-xl font-bold transition-all shadow-md mb-8">
                            <FaChrome className="w-[18px] h-[18px]" />
                            <span className="text-[15px]">Chrome extension</span>
                        </button>
 
                        {/* Social */}
                        <div className="flex gap-4 opacity-60">
                            <a href="#" className="hover:text-primary transition-colors"><Instagram className="w-4 h-4" /></a>
                            <a href="#" className="hover:text-primary transition-colors"><FaTiktok className="w-4 h-4" /></a>
                            <a href="#" className="hover:text-primary transition-colors"><Youtube className="w-4 h-4" /></a>
                        </div>
                    </div>
 
                    {/* Link Columns */}
                    <div className="w-full lg:w-[60%] flex flex-wrap gap-12 md:gap-24 text-[13px]">
 
                        {/* Column 2: Navigation */}
                        <div>
                            <h4 className="font-bold text-slate-800 mb-5 tracking-tight text-[14px]">General</h4>
                            <ul className="space-y-3.5">
                                <li>
                                    <a href="/" className="text-slate-500 hover:text-[#3b82f6] transition-colors font-medium">Home</a>
                                </li>
                            </ul>
                        </div>
 
                        {/* Column 3: Compare */}
                        <div>
                            <h4 className="font-bold text-slate-800 mb-5 tracking-tight text-[14px]">Compare Alternatives</h4>
                            <ul className="space-y-3.5">
                                {[
                                    { name: 'CheatMate Alternative', path: '/cheatmate-vs-examghost' },
                                    { name: 'Quietly Alternative', path: '/usequietly-vs-examghost' },
                                    { name: 'TestBro Alternative', path: '/testbro-vs-examghost' },
                                    { name: 'Quizard Alternative', path: '/quizard-vs-examghost' },
                                    { name: 'Mindko Alternative', path: '/mindko-vs-examghost' },
                                    { name: 'Classlogy Alternative', path: '/classlogy-vs-examghost' }
                                ].map(link => (
                                    <li key={link.path}>
                                        <a href={link.path} className="text-slate-500 hover:text-[#3b82f6] transition-colors font-medium">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
 
                    </div>
 
                </div>
 
                <div className="pt-10 mt-16 border-t border-slate-100 text-center">
                    <p className="text-[11px] text-slate-400 font-medium">
                        Copyright © {new Date().getFullYear()}, ExamGhost
                    </p>
                </div>
 
            </div>
        </footer>
    );
}
