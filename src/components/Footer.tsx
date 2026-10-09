'use client';
import React from 'react';
import { Bot, Star, Youtube, Instagram } from 'lucide-react';
import { FaTiktok, FaChrome } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-white text-slate-900 relative pt-10">

            {/* Pre-Footer CTA Card */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full mb-16">
                <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 text-center shadow-lg">
                    <div className="flex items-center justify-center mb-5">
                        <div className="flex -space-x-1.5">
                            {['bg-blue-400', 'bg-indigo-400', 'bg-sky-400', 'bg-teal-400', 'bg-emerald-400'].map((bg, i) => (
                                <div key={i} className={`w-7 h-7 rounded-full border-2 border-slate-900 ${bg} flex items-center justify-center text-[10px] font-bold text-slate-900`} />
                            ))}
                        </div>
                        <div className="flex flex-col items-start ml-3 text-left">
                            <div className="flex gap-0.5 mb-0.5">
                                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />)}
                            </div>
                            <span className="text-slate-300 text-[11px] font-semibold tracking-wide uppercase">50,000+ Active Students</span>
                        </div>
                    </div>

                    <h2 className="text-2xl sm:text-4xl font-extrabold text-white mb-3 tracking-tight">
                        Ready to make Canvas tests effortless?
                    </h2>
                    <p className="text-slate-300 text-sm sm:text-base mb-8 max-w-xl mx-auto font-normal">
                        Install in 30 seconds. Silences window-blur events, auto-solves quiz questions, and stays 100% invisible to professors.
                    </p>

                    <a 
                        href="#pricing"
                        className="inline-flex items-center gap-2.5 bg-white text-slate-900 font-bold px-6 py-3.5 text-xs sm:text-sm rounded-xl hover:bg-slate-100 transition-colors shadow-sm"
                    >
                        <FaChrome className="w-4 h-4 text-blue-600" />
                        <span>Add ExamGhost to Chrome — Free</span>
                    </a>
                </div>
            </div>
 
            {/* Footer Navigation Columns */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full pb-10 border-t border-slate-200/80 pt-12">
                <div className="flex flex-wrap justify-between gap-10">
 
                    {/* Brand Column */}
                    <div className="w-full lg:w-[34%]">
                        <a href="/" className="flex items-center gap-2 group mb-3 inline-flex">
                            <div className="w-7 h-7 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm">
                                <Bot className="w-4 h-4" />
                            </div>
                            <span className="font-bold text-lg tracking-tight text-slate-900">
                                ExamGhost <span className="text-blue-600 text-sm font-semibold">AI</span>
                            </span>
                        </a>
                        <p className="text-slate-500 text-xs sm:text-sm leading-relaxed mb-4">
                            Undetectable AI homework helper & test companion. Intercepts focus-loss event listeners on Canvas, Blackboard, Moodle, and Brightspace.
                        </p>

                        <div className="inline-flex items-center gap-2 px-2.5 py-1 bg-emerald-50 border border-emerald-200 rounded-full text-xs font-medium text-emerald-800 mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span>100% Stealth Active</span>
                        </div>

                        {/* Social */}
                        <div className="flex gap-4 text-slate-400">
                            <a href="#" className="hover:text-slate-700 transition-colors"><Instagram className="w-4 h-4" /></a>
                            <a href="#" className="hover:text-slate-700 transition-colors"><FaTiktok className="w-4 h-4" /></a>
                            <a href="#" className="hover:text-slate-700 transition-colors"><Youtube className="w-4 h-4" /></a>
                        </div>
                    </div>
 
                    {/* Link Columns */}
                    <div className="w-full lg:w-[58%] flex flex-wrap gap-10 md:gap-16 text-xs sm:text-sm">
 
                        {/* Column 1: Navigation */}
                        <div>
                            <h4 className="font-bold text-slate-900 mb-3 tracking-tight uppercase text-xs">Product</h4>
                            <ul className="space-y-2">
                                <li><a href="/#demo" className="text-slate-600 hover:text-slate-900 transition-colors">Quiz Simulator</a></li>
                                <li><a href="/#demo" className="text-slate-600 hover:text-slate-900 transition-colors">Teacher Log Proof</a></li>
                                <li><a href="/features" className="text-slate-600 hover:text-slate-900 transition-colors">All Features (24+)</a></li>
                                <li><a href="/#pricing" className="text-slate-600 hover:text-slate-900 transition-colors">Pricing</a></li>
                                <li><a href="#faq" className="text-slate-600 hover:text-slate-900 transition-colors">FAQ</a></li>
                            </ul>
                        </div>
 
                        {/* Column 2: Compare */}
                        <div>
                            <h4 className="font-bold text-slate-900 mb-3 tracking-tight uppercase text-xs">Alternative Comparisons</h4>
                            <ul className="space-y-2">
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
                                        <a href={link.path} className="text-slate-600 hover:text-slate-900 transition-colors">
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
 
                    </div>
 
                </div>
 
                <div className="pt-6 mt-10 border-t border-slate-100 text-center flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400">
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
