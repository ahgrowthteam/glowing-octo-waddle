import React from 'react';
import Link from 'next/link';
import { Star } from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';
import { allFacts, isIndexable } from '@/data/competitor-facts';
import { PLATFORMS_DATA } from '@/data/platforms';
import { DISCORD_URL, INSTALL_URL } from '@/components/home/config';

export default function Footer({ hideCta = false }: { hideCta?: boolean } = {}) {
    return (
        <footer className="bg-cream text-ink relative pt-12">

            {/* Pre-Footer CTA Sheet */}
            {!hideCta && (
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full mb-16">
                <div className="relative overflow-hidden bg-[#101114] bg-dark-grid text-white rounded-2xl border border-white/10 p-8 sm:p-14 text-center surface-dark-card dark-surface">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
                    <div className="relative flex items-center justify-center mb-5">
                        <div className="flex -space-x-1.5">
                            {[
                                { src: '/images/avatars/student_1.jpg', alt: 'Student user' },
                                { src: '/images/avatars/student_2.jpg', alt: 'Student user' },
                                { src: '/images/avatars/student_3.jpg', alt: 'Student user' },
                                { src: '/images/avatars/student_4.jpg', alt: 'Student user' },
                                { src: '/images/avatars/student_5.jpg', alt: 'Student user' },
                            ].map((avatar, i) => (
                                <div 
                                    key={i} 
                                    className="w-7 h-7 rounded-full border-2 border-[#101114] overflow-hidden bg-[#181A20] shadow-xs shrink-0"
                                >
                                    <img 
                                        src={avatar.src} 
                                        alt={avatar.alt} 
                                        width={28}
                                        height={28}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover" 
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col items-start ml-3 text-left">
                            <div className="flex gap-0.5 mb-0.5">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-[#ffd23f] text-[#ffd23f]" />
                                ))}
                            </div>
                            <span className="text-white/75 text-xs font-medium">
                                Free to try, no card needed
                            </span>
                        </div>
                    </div>

                    <h2 className="relative font-display text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight leading-[1.08]">
                        Your next quiz just
                        got easier.
                    </h2>
                    <p className="relative text-white/75 text-sm sm:text-base mb-8 max-w-xl mx-auto font-normal leading-relaxed">
                        Install in 30 seconds. Double-click any question for an instant answer and explanation. 5 free solves a day.
                    </p>

                    <div className="relative flex flex-wrap items-center justify-center gap-3">
                        <a 
                            href={INSTALL_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2.5 min-h-[46px] bg-white text-ink font-semibold px-7 py-3 text-sm rounded-full hover:bg-cream transition-all shadow-xs"
                        >
                            <FaChrome className="w-4 h-4 text-[#0077b6]" aria-hidden="true" />
                            <span>Get Extension</span>
                        </a>
                        <a 
                            href={DISCORD_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2.5 min-h-[46px] bg-[#5865F2] text-white font-semibold px-6 py-3 text-sm rounded-full hover:bg-[#4752C4] transition-all shadow-xs"
                        >
                            <FaDiscord className="w-4 h-4 text-white" aria-hidden="true" />
                            <span>Join Discord for Free Access</span>
                        </a>
                    </div>
                </div>
            </div>
            )}
 
            {/* Footer navigation */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full pb-12 border-t border-ink/[0.08] pt-14">
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
                    <div className="col-span-2 lg:col-span-4">
                        <Link prefetch={false} href="/" className="inline-flex items-center gap-2.5 mb-4">
                            <span className="w-8 h-8 rounded-full overflow-hidden border border-ink/10 bg-[#c4d0f8] shrink-0">
                                <img src="/images/ghost/ghost_mascot_avatar.jpg" alt="" width={32} height={32} className="w-full h-full object-cover scale-110" />
                            </span>
                            <span className="font-display font-bold text-lg tracking-tight text-ink">ExamGhost</span>
                        </Link>
                        <p className="text-sm text-ink-muted leading-relaxed max-w-xs">
                            An AI Chrome extension that answers quiz and homework questions on the page, with an explanation. Free plan available.
                        </p>
                    </div>

                    <nav aria-label="Product" className="lg:col-span-2">
                        <h3 className="font-display font-semibold text-[13px] text-ink mb-3.5">Product</h3>
                        <ul className="space-y-1 text-sm text-ink-secondary">
                            {[
                                ['Features', '/features'],
                                ['How it works', '/#how-it-works'],
                                ['Live demo', '/canvas-quiz-solver-free-demo'],
                                ['Pricing', '/#pricing'],
                                ['FAQ', '/faq'],
                                ['Video demos', '/video-demo'],
                            ].map(([label, href]) => (
                                <li key={href}><Link prefetch={false} href={href} className="inline-block py-1.5 hover:text-ink hover:underline underline-offset-4 decoration-ink/25 transition-colors">{label}</Link></li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Compare" className="lg:col-span-3">
                        <h3 className="font-display font-semibold text-[13px] text-ink mb-3.5">Compare</h3>
                        <ul className="space-y-1 text-sm text-ink-secondary">
                            {allFacts().filter(isIndexable).slice(0, 7).map((f) => (
                                <li key={f.slug}><Link prefetch={false} href={`/${f.slug}`} className="inline-block py-1.5 hover:text-ink hover:underline underline-offset-4 decoration-ink/25 transition-colors">{f.name} vs ExamGhost</Link></li>
                            ))}
                            <li><Link prefetch={false} href="/compare" className="inline-block py-1.5 font-medium text-ink underline underline-offset-4 decoration-ink/25 hover:decoration-ink">All comparisons</Link></li>
                        </ul>
                    </nav>

                    <nav aria-label="Company" className="lg:col-span-3">
                        <h3 className="font-display font-semibold text-[13px] text-ink mb-3.5">Company</h3>
                        <ul className="space-y-1 text-sm text-ink-secondary">
                            {[
                                ['About', '/about'],
                                ['Contact', '/contact'],
                                ['Privacy policy', '/privacy'],
                                ['Terms of service', '/terms'],
                            ].map(([label, href]) => (
                                <li key={href}><Link prefetch={false} href={href} className="inline-block py-1.5 hover:text-ink hover:underline underline-offset-4 decoration-ink/25 transition-colors">{label}</Link></li>
                            ))}
                            <li><a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="inline-block py-1.5 hover:text-ink hover:underline underline-offset-4 decoration-ink/25 transition-colors">Discord</a></li>
                            <li><a href="mailto:support@examghost.com" className="inline-block py-1.5 hover:text-ink hover:underline underline-offset-4 decoration-ink/25 transition-colors">support@examghost.com</a></li>
                        </ul>
                    </nav>
                </div>

                <nav aria-label="Quiz solvers by platform" className="mt-10 pt-8 border-t border-ink/[0.08]">
                    <h3 className="font-display font-semibold text-[13px] text-ink mb-3.5">Quiz solvers by platform</h3>
                    <ul className="flex flex-wrap gap-1.5 text-[13px] text-ink-secondary">
                        {PLATFORMS_DATA.map((pl) => (
                            <li key={pl.slug}>
                                <Link
                                    prefetch={false}
                                    href={`/${pl.slug}`}
                                    className="inline-flex items-center rounded-lg bg-white border border-ink/[0.09] px-3 py-1.5 font-medium text-ink-secondary hover:border-ink/25 hover:text-ink hover:shadow-xs transition-all"
                                >
                                    {pl.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <p className="mt-4 text-sm text-ink-muted">Not on the list? Press <kbd className="kbd-key mx-0.5">Alt+S</kbd> to solve any page you can see.</p>
                </nav>

                <div className="mt-10 pt-6 border-t border-ink/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-ink-muted">
                    <p>© 2026 FoundryOne LLC. ExamGhost is a product of FoundryOne LLC.</p>
                    <p>Use AI tools in line with your school&apos;s academic integrity policy.</p>
                </div>
            </div>

        </footer>
    );
}
