'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Bot, Shield, ChevronRight, Menu, X } from 'lucide-react';
import { FaChrome } from 'react-icons/fa';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 15);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Live Proof', href: '/#demo' },
        { name: 'Features (24+)', href: '/features' },
        { name: 'How It Works', href: '/#how-it-works' },
        { name: 'Question Types', href: '/#question-types' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'FAQ', href: '/#faq' }
    ];

    return (
        <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-200 px-4 sm:px-6 lg:px-8 pt-3 pb-3">
            <nav className={`max-w-7xl mx-auto rounded-xl transition-all duration-200 ${
                scrolled 
                    ? 'bg-white/95 backdrop-blur-md border border-slate-200 shadow-sm py-2.5 px-4 sm:px-6' 
                    : 'bg-white/80 backdrop-blur-sm border border-slate-200/70 py-3 px-4 sm:px-6'
            }`}>
                <div className="flex items-center justify-between">

                    {/* Logo & Brand */}
                    <Link href="/" className="flex items-center gap-2.5 group">
                        <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
                            <Bot className="w-4.5 h-4.5 text-white" />
                        </div>
                        <div className="flex items-center gap-1.5">
                            <span className="font-bold text-base sm:text-lg tracking-tight text-slate-900">
                                ExamGhost
                            </span>
                            <span className="text-[11px] font-semibold px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
                                AI
                            </span>
                        </div>
                    </Link>

                    {/* Verified Status Pill */}
                    <div className="hidden xl:inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-medium text-emerald-800">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Canvas & Blackboard Undetected</span>
                    </div>

                    {/* Desktop Navigation Links */}
                    <div className="hidden md:flex items-center gap-1 lg:gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="px-3 py-1.5 rounded-md text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Action CTA & Mobile Toggle */}
                    <div className="flex items-center gap-2.5">
                        <a
                            href="#pricing"
                            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs sm:text-sm font-semibold shadow-sm transition-colors"
                        >
                            <FaChrome className="w-3.5 h-3.5 text-blue-400" />
                            <span>Add to Chrome — Free</span>
                        </a>

                        {/* Mobile Menu Trigger */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-lg bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900"
                            aria-label="Toggle Navigation Menu"
                        >
                            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                        </button>
                    </div>

                </div>

                {/* Mobile Menu Drawer */}
                {mobileMenuOpen && (
                    <div className="md:hidden mt-3 pt-3 border-t border-slate-200 flex flex-col gap-1 pb-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setMobileMenuOpen(false)}
                                className="px-3 py-2 rounded-md text-sm font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-100 flex items-center justify-between"
                            >
                                <span>{link.name}</span>
                                <ChevronRight className="w-4 h-4 text-slate-400" />
                            </Link>
                        ))}
                        <a
                            href="#pricing"
                            onClick={() => setMobileMenuOpen(false)}
                            className="mt-2 w-full py-2.5 rounded-lg bg-slate-900 text-white text-center font-semibold text-sm flex items-center justify-center gap-2 shadow-sm"
                        >
                            <FaChrome className="w-4 h-4 text-blue-400" />
                            <span>Add to Chrome — Free</span>
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
}
