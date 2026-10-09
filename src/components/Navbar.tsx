'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bot, Shield, Sparkles, ChevronRight, Menu, X } from 'lucide-react';
import { FaChrome } from 'react-icons/fa';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Live Proof', href: '/#demo' },
        { name: 'Features (24+)', href: '/features' },
        { name: 'Stealth Architecture', href: '/#how-it-works' },
        { name: 'Question Types', href: '/#question-types' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'FAQ', href: '/#faq' }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 lg:px-8 pt-3 pb-3">
            <nav className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 ${
                scrolled 
                    ? 'bg-[#080d1a]/90 backdrop-blur-xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.6)] py-3 px-5 sm:px-6' 
                    : 'bg-[#080d1a]/60 backdrop-blur-md border border-white/[0.06] py-3.5 px-5 sm:px-6'
            }`}>
                <div className="flex items-center justify-between">

                    {/* Logo & Brand */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="relative">
                            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 via-indigo-600 to-blue-700 flex items-center justify-center text-white shadow-[0_0_20px_rgba(59,130,246,0.35)] group-hover:scale-105 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] transition-all">
                                <Bot className="w-5 h-5 text-white" />
                            </div>
                            <span className="absolute -bottom-1 -right-1 flex h-2.5 w-2.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500 border border-[#080d1a]" />
                            </span>
                        </div>
                        <div className="flex items-baseline gap-1.5">
                            <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
                                ExamGhost
                            </span>
                            <span className="text-[11px] font-mono font-bold px-1.5 py-0.5 rounded bg-blue-500/15 text-blue-400 border border-blue-500/30">
                                AI
                            </span>
                        </div>
                    </Link>

                    {/* Verified Status Pill */}
                    <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400">
                        <Shield className="w-3.5 h-3.5 text-emerald-400" />
                        <span>Canvas & Blackboard Undetected</span>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-1 lg:gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-3 py-1.5 rounded-lg text-[13px] font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] transition-all"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Action CTA & Mobile Toggle */}
                    <div className="flex items-center gap-3">
                        <a
                            href="#pricing"
                            className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-white text-[13px] font-bold shadow-[0_0_20px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] active:scale-95"
                        >
                            <FaChrome className="w-4 h-4" />
                            <span>Add to Chrome — Free</span>
                        </a>

                        {/* Mobile Menu Trigger */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white"
                            aria-label="Toggle Navigation Menu"
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>

                </div>

                {/* Mobile Menu Drawer */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-4 pt-4 border-t border-white/10 flex flex-col gap-2 pb-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 flex items-center justify-between"
                            >
                                <span>{link.name}</span>
                                <ChevronRight className="w-4 h-4 text-slate-500" />
                            </Link>
                        ))}
                        <a
                            href="#pricing"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-2 w-full py-2.5 rounded-xl bg-blue-600 text-white text-center font-bold text-sm flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                        >
                            <FaChrome className="w-4 h-4" />
                            <span>Add to Chrome — Free</span>
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}
