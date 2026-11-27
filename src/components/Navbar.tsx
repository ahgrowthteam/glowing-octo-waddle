'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Menu, X } from 'lucide-react';
import { FaChrome } from 'react-icons/fa';
import { INSTALL_URL } from '@/components/home/config';

type NavLink = { name: string; href: string; section?: string; live?: boolean };

const NAV_LINKS: NavLink[] = [
    { name: 'Live Demo', href: '/canvas-quiz-solver-free-demo', live: true },
    { name: 'Features', href: '/features' },
    { name: 'How it works', href: '/#how-it-works', section: 'how-it-works' },
    { name: 'Pricing', href: '/#pricing', section: 'pricing' },
    { name: 'Compare', href: '/compare' },
    { name: 'FAQ', href: '/faq' },
];

export default function Navbar() {
    const pathname = usePathname();
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close the mobile menu on navigation and with Escape; lock page scroll while it's open.
    useEffect(() => setOpen(false), [pathname]);
    useEffect(() => {
        if (!open) return;
        const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        const prev = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => {
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = prev;
        };
    }, [open]);

    // On the homepage, highlight the section you're reading.
    useEffect(() => {
        if (pathname !== '/') {
            setActiveSection(null);
            return;
        }
        const ids = NAV_LINKS.map((l) => l.section).filter(Boolean) as string[];
        const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
        if (!els.length || typeof IntersectionObserver === 'undefined') return;
        const inView = new Set<string>();
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => (e.isIntersecting ? inView.add(e.target.id) : inView.delete(e.target.id)));
                // Latest section in page order that crosses the reading line wins; none = nothing highlighted.
                const current = ids.filter((id) => inView.has(id)).pop() ?? null;
                setActiveSection(current);
            },
            { rootMargin: '-35% 0px -55% 0px' }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, [pathname]);

    const isActive = (l: NavLink) => (l.section ? pathname === '/' && activeSection === l.section : pathname === l.href);

    const linkClass = (l: NavLink) =>
        `px-3 lg:px-3.5 py-2 min-h-[36px] rounded-full transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            l.live && isActive(l)
                ? 'bg-emerald-600 text-white font-semibold shadow-sm'
                : l.live
                ? 'bg-emerald-500/10 text-emerald-800 font-semibold border border-emerald-500/25 hover:bg-emerald-500/20'
                : isActive(l)
                ? 'bg-ink text-white shadow-sm'
                : 'hover:bg-black/5 hover:text-ink'
        }`;

    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
            >
                Skip to content
            </a>
            <header className="sticky top-3 sm:top-4 z-50 pointer-events-none px-3 sm:px-6">
                <nav
                    className={`pointer-events-auto max-w-[1080px] mx-auto rounded-full transition-all duration-300 flex items-center justify-between gap-2 px-2.5 sm:px-4 py-2 backdrop-blur-xl ${
                        scrolled
                            ? 'bg-white/92 border border-black/10 ring-1 ring-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.85),0_12px_36px_rgba(40,30,10,0.12)]'
                            : 'bg-white/78 border border-black/5 shadow-[0_8px_24px_rgba(40,30,10,0.07)]'
                    }`}
                    aria-label="Main"
                >
                    <Link href="/" prefetch={false} className="flex items-center gap-2.5 pl-1.5 sm:pl-2 shrink-0 group" aria-label="ExamGhost home">
                        <span className="w-8 h-8 rounded-full overflow-hidden border border-black/10 transition-transform duration-200 group-hover:scale-110 shadow-sm bg-[#c4d0f8] shrink-0">
                            <img src="/images/ghost/ghost_mascot_avatar.jpg" alt="" width={32} height={32} className="w-full h-full object-cover scale-110" />
                        </span>
                        <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-ink whitespace-nowrap">ExamGhost</span>
                    </Link>

                    <ul className="hidden lg:flex items-center gap-0.5 text-[14px] font-medium text-ink-secondary">
                        {NAV_LINKS.map((l) => (
                            <li key={l.name}>
                                <Link href={l.href} prefetch={false} aria-current={isActive(l) ? 'page' : undefined} className={linkClass(l)}>
                                    {l.live && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />}
                                    <span>{l.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-1.5 shrink-0">
                        <a
                            href={INSTALL_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-dark whitespace-nowrap shrink-0 px-4 sm:px-5 py-2.5 text-[13px] sm:text-[14px] font-medium rounded-full shadow-sm"
                        >
                            <FaChrome className="w-3.5 h-3.5 text-[#bfe3f6] shrink-0" aria-hidden="true" />
                            <span className="sm:hidden">Install</span>
                            <span className="hidden sm:inline">Add to Chrome</span>
                        </a>
                        <button
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            className="lg:hidden grid place-items-center w-11 h-11 rounded-full hover:bg-black/5 text-ink transition-colors"
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                        >
                            {open ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
                        </button>
                    </div>
                </nav>

                {open && (
                    <div id="mobile-menu" className="pointer-events-auto lg:hidden mt-2 max-w-[1080px] mx-auto rounded-3xl bg-white/95 backdrop-blur-2xl border border-black/10 p-3 shadow-xl animate-pop-in">
                        <ul className="flex flex-col">
                            {NAV_LINKS.map((l) => (
                                <li key={l.name}>
                                    <Link
                                        href={l.href}
                                        prefetch={false}
                                        aria-current={isActive(l) ? 'page' : undefined}
                                        className={`flex items-center justify-between rounded-2xl px-4 min-h-[48px] text-[15px] font-medium transition-colors ${
                                            isActive(l) ? 'bg-ink text-white' : 'text-ink-secondary hover:bg-black/5 hover:text-ink'
                                        }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            {l.live && <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />}
                                            {l.name}
                                        </span>
                                        <ChevronRight className="w-4 h-4 opacity-40" aria-hidden="true" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <a
                            href={INSTALL_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-dark w-full mt-2 py-3.5 text-[15px] rounded-2xl gap-2"
                        >
                            <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
                            Add to Chrome — it&apos;s free
                        </a>
                    </div>
                )}
            </header>
        </>
    );
}
