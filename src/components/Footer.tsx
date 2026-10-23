import React from 'react';
import Link from 'next/link';
import { Ghost, Star } from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-cream text-ink relative pt-12">

            {/* Pre-Footer CTA Card (OneMacApp Style) */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full mb-16">
                <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-14 text-center shadow-lift">
                    <div className="flex items-center justify-center mb-5">
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
                                    className="w-7 h-7 rounded-full border-2 border-black overflow-hidden bg-[#222] shadow-xs shrink-0"
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
                            <span className="text-[#a09e99] text-[11px] font-semibold tracking-wide uppercase">
                                100% Undetectable Exam Shield
                            </span>
                        </div>
                    </div>

                    <h2 className="font-display text-3xl sm:text-5xl font-bold text-white mb-4 tracking-tight leading-[1.08]">
                        All your exam tools,<br />
                        in one invisible box.
                    </h2>
                    <p className="text-[#bfbbb3] text-sm sm:text-base mb-8 max-w-xl mx-auto font-normal leading-relaxed">
                        Install in 30 seconds. Silences window-blur events, auto-solves quiz questions, and stays 100% invisible to professors.
                    </p>

                    <div className="flex flex-wrap items-center justify-center gap-3">
                        <a 
                            href="https://discord.gg/aCcsyKYJq4" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 bg-white text-ink font-semibold px-7 py-3.5 text-sm rounded-full hover:bg-[#f4f1ea] transition-all shadow-sm"
                        >
                            <FaChrome className="w-4 h-4 text-[#0077b6]" aria-hidden="true" />
                            <span>Get Extension</span>
                        </a>
                        <a 
                            href="https://discord.gg/aCcsyKYJq4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 bg-[#5865F2] text-white font-semibold px-6 py-3.5 text-sm rounded-full hover:bg-[#4752c4] transition-all shadow-sm"
                        >
                            <FaDiscord className="w-4 h-4 text-white" aria-hidden="true" />
                            <span>Join Discord for Free Access</span>
                        </a>
                    </div>
                </div>
            </div>
 
            {/* Footer Navigation Columns */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full pb-14 border-t border-black/5 pt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
 
                    {/* Brand Column */}
                    <div className="sm:col-span-2 lg:col-span-4">
                        <Link prefetch={false} href="/" className="flex items-center gap-2.5 mb-3 inline-flex group">
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-black/10 bg-[#c4d0f8] shadow-xs shrink-0">
                                <img src="/images/ghost/ghost_mascot_hero.jpg" alt="ExamGhost Mascot" width={32} height={32} loading="lazy" decoding="async" className="w-full h-full object-cover scale-110" />
                            </div>
                            <span className="font-display font-bold text-xl tracking-tight text-ink">
                                ExamGhost
                            </span>
                        </Link>
                        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed max-w-sm mb-4">
                            The invisible AI quiz solver for Canvas, Blackboard, Moodle and D2L. Double-click any question for instant answers with 3 display modes, 3 answer methods, and Snap-It sniping.
                        </p>
                        <p className="text-xs text-ink-muted">
                            3 Display Modes · 3 Answer Methods · Chrome, Edge, Brave
                        </p>
                    </div>

                    {/* Features Column */}
                    <div className="lg:col-span-2">
                        <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-ink mb-3.5">
                            MVP Features
                        </h3>
                        <ul className="space-y-1 text-xs text-ink-secondary">
                            <li><a href="/#tools" className="hover:text-ink transition-colors inline-block py-1">Double-Click Solve</a></li>
                            <li><a href="/#demo" className="hover:text-ink transition-colors inline-block py-1">Snap-It Sniping</a></li>
                            <li><a href="/#motion" className="hover:text-ink transition-colors inline-block py-1">3 Display Modes</a></li>
                            <li><a href="/#motion" className="hover:text-ink transition-colors inline-block py-1">3 Answer Methods</a></li>
                            <li><a href="/#all-in-one" className="hover:text-ink transition-colors inline-block py-1">Universal LMS Mode</a></li>
                            <li><a href="/#privacy" className="hover:text-ink transition-colors inline-block py-1">Master Toggle (⌘+Shift+U)</a></li>
                        </ul>
                    </div>

                    {/* Competitor Pages Column */}
                    <div className="lg:col-span-3">
                        <div className="flex items-baseline gap-2.5 mb-3.5">
                            <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-ink">
                                Top Comparisons
                            </h3>
                        </div>
                        <ul className="space-y-1 text-xs text-ink-secondary">
                            <li><Link prefetch={false} href="/canvashack-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">CanvasHack vs ExamGhost</Link></li>
                            <li><Link prefetch={false} href="/apexvision-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">Apex Vision AI vs ExamGhost</Link></li>
                            <li><Link prefetch={false} href="/collegetools-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">College Tools vs ExamGhost</Link></li>
                            <li><Link prefetch={false} href="/transcript-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">Transcript AI vs ExamGhost</Link></li>
                            <li><Link prefetch={false} href="/quizonator-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">Quizonator vs ExamGhost</Link></li>
                            <li><Link prefetch={false} href="/bettercampus-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">BetterCampus vs ExamGhost</Link></li>
                            <li><Link prefetch={false} href="/gauth-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">Gauth AI vs ExamGhost</Link></li>
                            <li><Link prefetch={false} href="/coursehero-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">Course Hero vs ExamGhost</Link></li>
                            <li className="pt-1.5">
                                <Link prefetch={false} 
                                    href="/compare-canvas-hack-extensions" 
                                    className="font-semibold text-indigo-700 hover:text-indigo-900 transition-colors inline-block py-1"
                                >
                                    Compare All 57 Extensions →
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources & Support Column */}
                    <div className="lg:col-span-3">
                        <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-ink mb-3.5">
                            Resources &amp; Support
                        </h3>
                        <ul className="space-y-1 text-xs text-ink-secondary">
                            <li><Link prefetch={false} href="/canvas-quiz-solver-free-demo" className="hover:text-ink transition-colors inline-block py-1 font-semibold text-emerald-800">Live Demo Sandbox</Link></li>
                            <li><Link prefetch={false} href="/features" className="hover:text-ink transition-colors inline-block py-1">MVP Features</Link></li>
                            <li><Link prefetch={false} href="/faq" className="hover:text-ink transition-colors inline-block py-1">Knowledge Base &amp; FAQ</Link></li>
                            <li><Link prefetch={false} href="/contact" className="hover:text-ink transition-colors inline-block py-1">Contact Support (24/7)</Link></li>
                            <li><Link prefetch={false} href="/privacy" className="hover:text-ink transition-colors inline-block py-1">Privacy Policy</Link></li>
                            <li><Link prefetch={false} href="/terms" className="hover:text-ink transition-colors inline-block py-1">Terms of Service</Link></li>
                            <li><a href="https://discord.gg/aCcsyKYJq4" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors inline-block py-1">Discord Community</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
                    <p>© 2026 ExamGhost. The invisible AI quiz solver for Canvas, Blackboard &amp; Moodle.</p>
                    <div className="flex items-center gap-4">
                        <Link prefetch={false} href="/privacy" className="hover:text-ink transition-colors inline-block py-1">Privacy</Link>
                        <span>·</span>
                        <Link prefetch={false} href="/terms" className="hover:text-ink transition-colors inline-block py-1">Terms</Link>
                        <span>·</span>
                        <Link prefetch={false} href="/faq" className="hover:text-ink transition-colors inline-block py-1">FAQ</Link>
                        <span>·</span>
                        <Link prefetch={false} href="/contact" className="hover:text-ink transition-colors inline-block py-1">Support</Link>
                    </div>
                </div>
            </div>

        </footer>
    );
}
