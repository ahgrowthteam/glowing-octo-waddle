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
        { name: 'Tools', href: '/#tools' },
        { name: 'Demo', href: '/#demo' },
        { name: 'Experience', href: '/#motion' },
        { name: 'Privacy', href: '/#privacy' },
        { name: 'Community', href: '/#community' },
        { name: 'Pricing', href: '/#pricing' },
        { name: 'FAQ', href: '/#faq' }
    ];

    return (
        <header className="sticky top-4 sm:top-5 z-50 pointer-events-none px-4 sm:px-6">
            <nav
                className={`pointer-events-auto max-w-[940px] mx-auto rounded-full transition-all duration-300 flex items-center justify-between px-3 sm:px-4 py-2 ${
                    scrolled
                        ? 'bg-white/90 backdrop-blur-xl border border-black/10 shadow-[0_10px_32px_rgba(40,30,10,0.1)]'
                        : 'bg-white/70 backdrop-blur-lg border border-black/5 shadow-[0_8px_24px_rgba(40,30,10,0.06)]'
                }`}
                aria-label="Main Navigation"
            >
                {/* Brand */}
                <Link href="/" className="flex items-center gap-2.5 pl-2 sm:pl-3 group">
                    <div className="w-8 h-8 rounded-full overflow-hidden border border-black/10 transition-transform duration-200 group-hover:scale-110 shadow-sm bg-[#c4d0f8]">
                        <img src="/images/ghost/ghost_mascot_hero.jpg" alt="ExamGhost Mascot" className="w-full h-full object-cover scale-110" />
                    </div>
                    <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-ink">
                        ExamGhost
                    </span>
                    <span className="hidden sm:inline-block text-[11px] font-medium text-ink-muted bg-[#f2ede4] px-2 py-0.5 rounded-full border border-black/5">
                        2026
                    </span>
                </Link>

                {/* Nav Links */}
                <ul className="hidden md:flex items-center gap-1 text-[14px] font-medium text-ink-secondary">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="px-3.5 py-1.5 rounded-full hover:bg-black/5 hover:text-ink transition-colors"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <div className="flex items-center gap-2 pr-1">
                    <a
                        href="/#pricing"
                        className="btn-dark px-4 sm:px-5 py-2 text-xs sm:text-[14px] font-medium rounded-full shadow-sm"
                    >
                        <FaChrome className="w-3.5 h-3.5 text-[#bfe3f6]" />
                        <span>Get ExamGhost</span>
                        <span className="hidden sm:inline-block opacity-60">· $19.99</span>
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden p-2 rounded-full hover:bg-black/5 text-ink transition-colors"
                        aria-label="Toggle Navigation"
                    >
                        {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
                            className="px-4 py-2.5 rounded-xl text-sm font-medium text-ink-secondary hover:bg-black/5 hover:text-ink transition-colors flex items-center justify-between"
                        >
                            <span>{link.name}</span>
                            <span className="text-xs text-muted-custom">→</span>
                        </Link>
                    ))}
                    <a
                        href="/#pricing"
                        onClick={() => setMobileMenuOpen(false)}
                        className="btn-dark w-full py-3 mt-2 text-sm justify-center rounded-xl"
                    >
                        <FaChrome className="w-4 h-4 text-[#bfe3f6]" />
                        <span>Get ExamGhost · Free Trial</span>
                    </a>
                </div>
            )}
        </header>
    );
}
