'use client';
import React from 'react';
import { Bot, ShieldCheck } from 'lucide-react';
import { FaChrome } from 'react-icons/fa';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 h-20 bg-white/80 dark:bg-[#0B101E]/80 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/10 z-50 flex items-center transition-all">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex items-center justify-between">

                {/* Logo */}
                <a href="#" className="flex items-center gap-2.5 group">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                        <Bot className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-extrabold text-xl tracking-tight text-slate-900 dark:text-white leading-none">
                            ExamGhost <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent italic">AI</span>
                        </span>
                    </div>
                </a>

                {/* Live Status Badge */}
                <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-500/30 rounded-full">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                        Canvas & Blackboard Undetected
                    </span>
                </div>

                {/* Links */}
                <div className="hidden md:flex items-center gap-7">
                    {[
                        { name: 'Proof & Simulator', href: '#demo' },
                        { name: 'Features', href: '#features' },
                        { name: 'How It Works', href: '#how-it-works' },
                        { name: 'Pricing', href: '#pricing' },
                        { name: 'FAQ', href: '#faq' }
                    ].map(link => (
                        <a 
                            key={link.name} 
                            href={link.href} 
                            className="text-[13px] font-semibold text-slate-600 hover:text-blue-600 dark:text-slate-300 dark:hover:text-white transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-3">
                    <a 
                        href="#pricing" 
                        className="flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-[13px] font-bold rounded-xl shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all active:scale-95"
                    >
                        <FaChrome className="w-4 h-4" />
                        <span>Add to Chrome</span>
                    </a>
                </div>

            </div>
        </nav>
    );
}
