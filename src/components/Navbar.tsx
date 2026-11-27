'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight, Menu, X } from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import { DISCORD_URL, INSTALL_URL } from '@/components/home/config';

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
    const menuBtnRef = useRef<HTMLButtonElement>(null);
    const drawerRef = useRef<HTMLDivElement>(null);
    const wasOpenRef = useRef(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 12);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Close the mobile menu on navigation.
    useEffect(() => setOpen(false), [pathname]);

    // Accessible mobile drawer: scroll lock, Escape close, focus move/trap/restore.
    useEffect(() => {
        if (!open) {
            if (wasOpenRef.current) {
                wasOpenRef.current = false;
                menuBtnRef.current?.focus();
            }
            return;
        }
        wasOpenRef.current = true;
        const prevOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        const frame = requestAnimationFrame(() => {
            drawerRef.current?.querySelector<HTMLElement>('a, button')?.focus();
        });

        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                e.preventDefault();
                setOpen(false);
                return;
            }
            if (e.key === 'Tab') {
                const drawerFocusables = Array.from(
                    drawerRef.current?.querySelectorAll<HTMLElement>(
                        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                    ) ?? []
                );
                const focusables = [menuBtnRef.current, ...drawerFocusables].filter(
                    (el): el is HTMLElement => Boolean(el)
                );
                if (!focusables.length) return;
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                const active = document.activeElement as HTMLElement | null;
                if (e.shiftKey) {
                    if (!active || active === first || !focusables.includes(active)) {
                        e.preventDefault();
                        last.focus();
                    }
                } else {
                    if (!active || active === last || !focusables.includes(active)) {
                        e.preventDefault();
                        first.focus();
                    }
                }
            }
        };
        window.addEventListener('keydown', onKey);
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('keydown', onKey);
            document.body.style.overflow = prevOverflow;
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

    const isActive = (l: NavLink) => {
        if (l.section) return pathname === '/' && activeSection === l.section;
        if (l.href === '/compare') return pathname === '/compare' || pathname.endsWith('-vs-examghost');
        return pathname === l.href;
    };

    const linkClass = (l: NavLink) =>
        `px-2.5 xl:px-3.5 py-1.5 min-h-[36px] rounded-full transition-colors whitespace-nowrap flex items-center gap-1.5 ${
            l.live && isActive(l)
                ? 'bg-emerald-700 text-white font-semibold shadow-xs'
                : l.live
                ? 'bg-emerald-500/[0.08] text-emerald-800 font-semibold border border-emerald-600/20 hover:bg-emerald-500/15'
                : isActive(l)
                ? 'bg-ink text-white font-semibold shadow-xs'
                : 'text-ink-secondary hover:bg-ink/[0.05] hover:text-ink'
        }`;

    return (
        <>
            <a
                href="#main-content"
                className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:text-white"
            >
                Skip to content
            </a>
            {open && (
                <div
                    className="fixed inset-0 z-40 bg-ink/25 backdrop-blur-sm lg:hidden"
                    aria-hidden="true"
                    onClick={() => setOpen(false)}
                />
            )}
            <header className="sticky top-3 sm:top-4 z-50 pointer-events-none px-3 sm:px-6">
                <nav
                    className={`pointer-events-auto max-w-6xl mx-auto rounded-full transition-all duration-200 flex items-center justify-between gap-2 px-2.5 sm:px-3.5 xl:px-4 py-1.5 sm:py-2 backdrop-blur-xl ${
                        scrolled
                            ? 'bg-white/95 border border-ink/10 shadow-[0_10px_30px_rgba(16,17,20,0.08)]'
                            : 'bg-white/85 border border-ink/[0.08] shadow-[0_4px_16px_rgba(16,17,20,0.05)]'
                    }`}
                    aria-label="Main"
                >
                    <Link href="/" prefetch={false} className="flex items-center gap-2 xl:gap-2.5 pl-1 sm:pl-1.5 shrink-0 group" aria-label="ExamGhost home">
                        <span className="w-8 h-8 rounded-full overflow-hidden border border-ink/10 transition-transform duration-200 group-hover:scale-105 shadow-xs bg-[#c4d0f8] shrink-0">
                            <img src="/images/ghost/ghost_mascot_avatar.jpg" alt="" width={32} height={32} className="w-full h-full object-cover scale-110" />
                        </span>
                        <span className="font-display font-bold text-[17px] xl:text-[19px] tracking-tight text-ink whitespace-nowrap">ExamGhost</span>
                    </Link>

                    <ul className="hidden lg:flex items-center gap-0.5 xl:gap-1 text-[13px] xl:text-[13.5px] font-medium text-ink-secondary">
                        {NAV_LINKS.map((l) => (
                            <li key={l.name}>
                                <Link href={l.href} prefetch={false} aria-current={isActive(l) ? 'page' : undefined} className={linkClass(l)}>
                                    {l.live && (
                                        <span
                                            className={`w-1.5 h-1.5 rounded-full ${isActive(l) ? 'bg-white' : 'bg-emerald-600'} animate-pulse`}
                                            aria-hidden="true"
                                        />
                                    )}
                                    <span>{l.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>

                    <div className="flex items-center gap-1.5 shrink-0">
                        <a
                            href={DISCORD_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Join ExamGhost Discord"
                            className="inline-flex items-center justify-center gap-1.5 w-10 h-10 sm:w-auto sm:h-auto sm:px-3 sm:py-2 min-h-[36px] rounded-full bg-[#5865F2]/[0.08] border border-[#5865F2]/25 text-[#3440B8] hover:bg-[#5865F2]/15 hover:border-[#5865F2]/40 text-[13px] font-semibold whitespace-nowrap shrink-0 transition-colors"
                        >
                            <FaDiscord className="w-4 h-4 text-[#5865F2] shrink-0" aria-hidden="true" />
                            <span className="hidden sm:inline">Discord</span>
                        </a>
                        <a
                            href={INSTALL_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-dark whitespace-nowrap shrink-0 px-3 sm:px-4 xl:px-5 py-2 min-h-[36px] text-[13px] xl:text-[13.5px] font-medium rounded-full"
                        >
                            <FaChrome className="w-3.5 h-3.5 text-[#bfe3f6] shrink-0" aria-hidden="true" />
                            <span className="sm:hidden">Install</span>
                            <span className="hidden sm:inline">Add to Chrome</span>
                        </a>
                        <button
                            ref={menuBtnRef}
                            type="button"
                            onClick={() => setOpen((v) => !v)}
                            className="lg:hidden grid place-items-center w-11 h-11 rounded-full hover:bg-ink/5 text-ink transition-colors"
                            aria-label={open ? 'Close menu' : 'Open menu'}
                            aria-expanded={open}
                            aria-controls="mobile-menu"
                        >
                            {open ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
                        </button>
                    </div>
                </nav>

                {open && (
                    <div
                        id="mobile-menu"
                        ref={drawerRef}
                        role="dialog"
                        aria-modal="true"
                        aria-label="Mobile navigation"
                        className="pointer-events-auto lg:hidden mt-2 max-w-6xl mx-auto rounded-2xl bg-white border border-ink/10 p-3 shadow-[0_20px_50px_rgba(16,17,20,0.16)] animate-pop-in"
                    >
                        <ul className="flex flex-col gap-0.5">
                            {NAV_LINKS.map((l) => (
                                <li key={l.name}>
                                    <Link
                                        href={l.href}
                                        prefetch={false}
                                        onClick={() => setOpen(false)}
                                        aria-current={isActive(l) ? 'page' : undefined}
                                        className={`flex items-center justify-between rounded-xl px-4 min-h-[48px] text-[15px] font-medium transition-colors ${
                                            isActive(l) ? 'bg-ink text-white' : 'text-ink-secondary hover:bg-ink/[0.04] hover:text-ink'
                                        }`}
                                    >
                                        <span className="flex items-center gap-2">
                                            {l.live && (
                                                <span
                                                    className={`w-1.5 h-1.5 rounded-full ${isActive(l) ? 'bg-white' : 'bg-emerald-600'}`}
                                                    aria-hidden="true"
                                                />
                                            )}
                                            {l.name}
                                        </span>
                                        <ChevronRight className="w-4 h-4 opacity-40" aria-hidden="true" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                        <div className="mt-3 pt-3 border-t border-ink/[0.08] flex flex-col gap-2">
                            <a
                                href={DISCORD_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOpen(false)}
                                className="inline-flex items-center justify-center gap-2 w-full min-h-[46px] px-4 py-2.5 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white text-[15px] font-semibold transition-colors"
                            >
                                <FaDiscord className="w-4 h-4 text-white shrink-0" aria-hidden="true" />
                                <span>Join Discord</span>
                            </a>
                            <a
                                href={INSTALL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setOpen(false)}
                                className="btn-dark w-full py-3 min-h-[48px] text-[15px] rounded-xl gap-2"
                            >
                                <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
                                Add to Chrome — it&apos;s free
                            </a>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
}
