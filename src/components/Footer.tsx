'use client';

import React from 'react';
import Link from 'next/link';
import { Ghost, Star } from 'lucide-react';
import { FaChrome } from 'react-icons/fa';

export default function Footer() {
    return (
        <footer className="bg-cream text-ink relative pt-12">

            {/* Pre-Footer CTA Card (OneMacApp Style) */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 w-full mb-16">
                <div className="bg-[#111111] text-white rounded-3xl p-8 sm:p-14 text-center shadow-lift">
                    <div className="flex items-center justify-center mb-5">
                        <div className="flex -space-x-1.5">
                            {['#c4d0f8', '#bfe3f6', '#e2d3fa', '#cdeecb', '#ffd5cc'].map((bg, i) => (
                                <div 
                                    key={i} 
                                    className="w-7 h-7 rounded-full border-2 border-black flex items-center justify-center text-[10px] font-bold text-ink"
                                    style={{ backgroundColor: bg }}
                                />
                            ))}
                        </div>
                        <div className="flex flex-col items-start ml-3 text-left">
                            <div className="flex gap-0.5 mb-0.5">
                                {[1, 2, 3, 4, 5].map(i => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-[#ffd23f] text-[#ffd23f]" />
                                ))}
                            </div>
                            <span className="text-[#a09e99] text-[11px] font-semibold tracking-wide uppercase">
                                50,000+ Students Shielded
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

                    <a 
                        href="#pricing"
                        className="inline-flex items-center gap-2.5 bg-white text-ink font-semibold px-7 py-3.5 text-sm rounded-full hover:bg-[#f4f1ea] transition-all shadow-sm"
                    >
                        <FaChrome className="w-4 h-4 text-[#0077b6]" />
                        <span>Get ExamGhost · $19.99 Lifetime</span>
                    </a>
                </div>
            </div>
 
            {/* Footer Navigation Columns */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full pb-14 border-t border-black/5 pt-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
 
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center gap-2.5 mb-3 inline-flex">
                            <div className="w-8 h-8 rounded-full bg-[#c4d0f8] flex items-center justify-center text-ink shadow-xs">
                                <Ghost className="w-4 h-4 fill-current stroke-[2.2]" />
                            </div>
                            <span className="font-display font-bold text-xl tracking-tight text-ink">
                                ExamGhost
                            </span>
                        </Link>
                        <p className="text-xs sm:text-sm text-ink-muted leading-relaxed max-w-sm mb-4">
                            All your exam tools, in one invisible box. 24 stealth tools for Canvas, Blackboard, Moodle and D2L. Zero SpeedGrader logs, private on-device execution.
                        </p>
                        <p className="text-xs text-ink-muted">
                            24 tools · Pay once · Chrome, Edge, Brave
                        </p>
                    </div>

                    {/* Tools Column */}
                    <div>
                        <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-ink mb-3.5">
                            Tools
                        </h4>
                        <ul className="space-y-2 text-xs text-ink-secondary">
                            <li><a href="/#tools" className="hover:text-ink transition-colors">Focus Shield</a></li>
                            <li><a href="/#tools" className="hover:text-ink transition-colors">Snap-It Vision OCR</a></li>
                            <li><a href="/#tools" className="hover:text-ink transition-colors">MCQ Auto-Select</a></li>
                            <li><a href="/#tools" className="hover:text-ink transition-colors">LaTeX Mathpix Engine</a></li>
                            <li><a href="/#tools" className="hover:text-ink transition-colors">Stealth Opacity Dial</a></li>
                            <li><a href="/#tools" className="hover:text-ink transition-colors">Emergency Panic Switch</a></li>
                        </ul>
                    </div>

                    {/* Competitor Pages Column */}
                    <div>
                        <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-ink mb-3.5">
                            Comparisons
                        </h4>
                        <ul className="space-y-2 text-xs text-ink-secondary">
                            <li><Link href="/cheatmate-vs-examghost" className="hover:text-ink transition-colors">vs Cheatmate</Link></li>
                            <li><Link href="/testbro-vs-examghost" className="hover:text-ink transition-colors">vs TestBro</Link></li>
                            <li><Link href="/mindko-vs-examghost" className="hover:text-ink transition-colors">vs Mindko</Link></li>
                            <li><Link href="/usequietly-vs-examghost" className="hover:text-ink transition-colors">vs UseQuietly</Link></li>
                            <li><Link href="/quizard-vs-examghost" className="hover:text-ink transition-colors">vs Quizard</Link></li>
                            <li><Link href="/classlogy-vs-examghost" className="hover:text-ink transition-colors">vs Classlogy</Link></li>
                        </ul>
                    </div>

                    {/* Resources & Legal Column */}
                    <div>
                        <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-ink mb-3.5">
                            Resources
                        </h4>
                        <ul className="space-y-2 text-xs text-ink-secondary">
                            <li><Link href="/features" className="hover:text-ink transition-colors">All 24 Features</Link></li>
                            <li><a href="/#privacy" className="hover:text-ink transition-colors">Privacy & Shield</a></li>
                            <li><a href="/#faq" className="hover:text-ink transition-colors">FAQ</a></li>
                            <li><a href="https://discord.gg" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors">Discord Community</a></li>
                            <li><span className="text-ink-muted">14-Day Refund Guarantee</span></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
                    <p>© 2026 ExamGhost. All your exam tools, in one invisible box.</p>
                    <p>Designed for academic research & study verification.</p>
                </div>
            </div>

        </footer>
    );
}
