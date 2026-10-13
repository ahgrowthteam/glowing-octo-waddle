'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Ghost } from 'lucide-react';
import { FaChrome } from 'react-icons/fa';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Live Demo', href: '/demo', isLive: true },
        { name: 'Tools', href: '/#tools' },
        { name: 'Sniping', href: '/#demo' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Privacy', href: '/privacy' },
        { name: 'Support', href: '/contact' }
    ];

    return (
        <header className="sticky top-4 sm:top-5 z-50 pointer-events-none px-4 sm:px-6">
            <nav
                className={`pointer-events-auto max-w-[980px] mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-3 sm:px-4 py-2 ${
                    scrolled
                        ? 'bg-white/90 backdrop-blur-xl border border-black/10 shadow-[0_10px_32px_rgba(40,30,10,0.1)]'
                        : 'bg-white/70 backdrop-blur-lg border border-black/5 shadow-[0_8px_24px_rgba(40,30,10,0.06)]'
                }`}
                aria-label="Main Navigation"
            >
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2.5 pl-2 sm:pl-3 group shrink-0">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-black/10 transition-transform duration-200 group-hover:scale-110 shadow-sm bg-[#c4d0f8] shrink-0">
                        <img src="/images/ghost/ghost_mascot_hero.jpg" alt="ExamGhost Mascot" width={32} height={32} className="w-full h-full object-cover scale-110" />
                    </div>
                    <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-ink whitespace-nowrap">
                        ExamGhost
                    </span>
                    <span className="hidden sm:inline-block text-[11px] font-medium text-ink-muted bg-[#f2ede4] px-2 py-0.5 rounded-full border border-black/5 shrink-0">
                        2026
                    </span>
                </Link>

                {/* Nav Links */}
                <ul className="hidden md:flex items-center gap-0.5 lg:gap-1 text-[13px] lg:text-[14px] font-medium text-ink-secondary">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className={`px-3 lg:px-3.5 py-2 min-h-[32px] rounded-full transition-colors whitespace-nowrap flex items-center gap-1.5 ${
                                    link.isLive 
                                        ? 'bg-emerald-500/10 text-emerald-800 font-bold border border-emerald-500/30 hover:bg-emerald-500/20' 
                                        : 'hover:bg-black/5 hover:text-ink'
                                }`}
                            >
                                {link.isLive && (
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                                )}
                                <span>{link.name}</span>
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <div className="flex items-center gap-2 pr-1 shrink-0">
                    <a
                        href="https://discord.gg/aCcsyKYJq4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-dark whitespace-nowrap shrink-0 px-4 sm:px-5 py-2 text-xs sm:text-[14px] font-medium rounded-full shadow-sm"
                    >
                        <FaChrome className="w-3.5 h-3.5 text-[#bfe3f6] shrink-0" aria-hidden="true" />
                        <span className="whitespace-nowrap">Get Extension</span>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-full hover:bg-black/5 text-ink transition-colors shrink-0 min-h-[36px] min-w-[36px] flex items-center justify-center"
                        aria-label="Toggle Navigation"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
                <div className="pointer-events-auto md:hidden mt-2 max-w-[940px] mx-auto bg-white/95 backdrop-blur-2xl border border-black/10 rounded-2xl p-4 shadow-xl flex flex-col gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-4 py-2.5 rounded-xl text-sm font-medium text-ink-secondary hover:bg-black/5 hover:text-ink transition-colors flex items-center justify-between min-h-[44px]"
                        >
                            <span>{link.name}</span>
                            <span className="text-xs text-muted-custom">→</span>
                        </Link>
                    ))}
                    <a
                        href="https://discord.gg/aCcsyKYJq4"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="btn-dark w-full py-3 mt-2 text-sm justify-center rounded-xl min-h-[44px] flex items-center gap-2"
                    >
                        <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
                        <span>Get Extension</span>
                    </a>
                </div>
            )}
        </header>
    );
}
