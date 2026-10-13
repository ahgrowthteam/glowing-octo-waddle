'use client';

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
                        <Link href="/" className="flex items-center gap-2.5 mb-3 inline-flex group">
                            <div className="w-8 h-8 rounded-full overflow-hidden border border-black/10 bg-[#c4d0f8] shadow-xs shrink-0">
                                <img src="/images/ghost/ghost_mascot_hero.jpg" alt="ExamGhost Mascot" width={32} height={32} className="w-full h-full object-cover scale-110" />
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
                            <li><a href="/#features" className="hover:text-ink transition-colors inline-block py-1">Double-Click Solve</a></li>
                            <li><a href="/#demo" className="hover:text-ink transition-colors inline-block py-1">Snap-It Sniping</a></li>
                            <li><a href="/#ghost-mode" className="hover:text-ink transition-colors inline-block py-1">3 Display Modes</a></li>
                            <li><a href="/#ghost-mode" className="hover:text-ink transition-colors inline-block py-1">3 Answer Methods</a></li>
                            <li><a href="/#platforms" className="hover:text-ink transition-colors inline-block py-1">Universal LMS Mode</a></li>
                            <li><a href="/#privacy" className="hover:text-ink transition-colors inline-block py-1">Master Toggle (⌘+Shift+U)</a></li>
                        </ul>
                    </div>

                    {/* Competitor Pages Column */}
                    <div className="lg:col-span-3">
                        <div className="flex items-baseline gap-2.5 mb-3.5">
                            <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-ink">
                                Comparisons
                            </h3>
                            <Link 
                                href="/compare-canvas-hack-extensions" 
                                className="text-[11px] font-semibold text-indigo-600 hover:text-indigo-800 transition-colors inline-block py-1"
                            >
                                View All (45) →
                            </Link>
                        </div>
                        <ul className="space-y-1 text-xs text-ink-secondary max-h-56 overflow-y-auto pr-3 custom-scrollbar max-w-[190px]">
                            <li><Link href="/canvashack-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs CanvasHack</Link></li>
                            <li><Link href="/cheatmate-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs CheatMate</Link></li>
                            <li><Link href="/canvasquiz-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs CanvasQuiz</Link></li>
                            <li><Link href="/canvasninja-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs CanvasNinja</Link></li>
                            <li><Link href="/canvaswizard-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs CanvasWizard</Link></li>
                            <li><Link href="/quizsolverai-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs QuizSolver AI</Link></li>
                            <li><Link href="/getquizsolve-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs GetQuizSolve</Link></li>
                            <li><Link href="/usequietly-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs UseQuietly</Link></li>
                            <li><Link href="/testbro-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs TestBro</Link></li>
                            <li><Link href="/fastsolve-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs FastSolve</Link></li>
                            <li><Link href="/quizard-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Quizard</Link></li>
                            <li><Link href="/classology-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Classology</Link></li>
                            <li><Link href="/mindko-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Mindko</Link></li>
                            <li><Link href="/campusai-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Campus AI</Link></li>
                            <li><Link href="/answerai-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs AnswerAI</Link></li>
                            <li><Link href="/studyx-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs StudyX</Link></li>
                            <li><Link href="/studybotpro-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs StudyBotPro</Link></li>
                            <li><Link href="/solvely-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Solvely</Link></li>
                            <li><Link href="/gauth-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Gauth</Link></li>
                            <li><Link href="/truststudy-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs TrustStudy</Link></li>
                            <li><Link href="/answerly-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Answerly AI</Link></li>
                            <li><Link href="/homework-helper-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Homework Helper+</Link></li>
                            <li><Link href="/bettercampus-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs BetterCampus</Link></li>
                            <li><Link href="/coursology-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Coursology</Link></li>
                            <li><Link href="/questionai-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs QuestionAI</Link></li>
                            <li><Link href="/studyfox-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs StudyFox</Link></li>
                            <li><Link href="/canvascrack-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Canvas Crack</Link></li>
                            <li><Link href="/quizmate-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs QuizMate</Link></li>
                            <li><Link href="/canvasscholar-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Canvas Scholar</Link></li>
                            <li><Link href="/schoolcheats-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs SchoolCheats</Link></li>
                            <li><Link href="/knowt-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Knowt</Link></li>
                            <li><Link href="/cramly-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Cramly AI</Link></li>
                            <li><Link href="/quizzy-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Quizzy AI</Link></li>
                            <li><Link href="/canvaspass-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs CanvasPass</Link></li>
                            <li><Link href="/examclutch-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs ExamClutch</Link></li>
                            <li><Link href="/mathosai-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Mathos AI</Link></li>
                            <li><Link href="/quizwizard-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Quiz Wizard</Link></li>
                            <li><Link href="/snapgpt-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs SnapGPT</Link></li>
                            <li><Link href="/testwhiz-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs TestWhiz</Link></li>
                            <li><Link href="/brainly-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Brainly</Link></li>
                            <li><Link href="/coursehero-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Course Hero</Link></li>
                            <li><Link href="/quizplus-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs QuizPlus</Link></li>
                            <li><Link href="/studymonkey-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs StudyMonkey</Link></li>
                            <li><Link href="/wolframalpha-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Wolfram|Alpha</Link></li>
                            <li><Link href="/homeworkify-vs-examghost" className="hover:text-ink transition-colors inline-block py-1">vs Homeworkify</Link></li>
                        </ul>
                    </div>

                    {/* Resources & Support Column */}
                    <div className="lg:col-span-3">
                        <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-ink mb-3.5">
                            Resources &amp; Support
                        </h3>
                        <ul className="space-y-1 text-xs text-ink-secondary">
                            <li><Link href="/demo" className="hover:text-ink transition-colors inline-block py-1 font-semibold text-emerald-800">Live Demo Sandbox</Link></li>
                            <li><Link href="/features" className="hover:text-ink transition-colors inline-block py-1">MVP Features</Link></li>
                            <li><Link href="/faq" className="hover:text-ink transition-colors inline-block py-1">Knowledge Base &amp; FAQ</Link></li>
                            <li><Link href="/contact" className="hover:text-ink transition-colors inline-block py-1">Contact Support (24/7)</Link></li>
                            <li><Link href="/privacy" className="hover:text-ink transition-colors inline-block py-1">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="hover:text-ink transition-colors inline-block py-1">Terms of Service</Link></li>
                            <li><a href="https://discord.gg/aCcsyKYJq4" target="_blank" rel="noopener noreferrer" className="hover:text-ink transition-colors inline-block py-1">Discord Community</a></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="mt-12 pt-6 border-t border-black/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink-muted">
                    <p>© 2026 ExamGhost. The invisible AI quiz solver for Canvas, Blackboard &amp; Moodle.</p>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="hover:text-ink transition-colors inline-block py-1">Privacy</Link>
                        <span>·</span>
                        <Link href="/terms" className="hover:text-ink transition-colors inline-block py-1">Terms</Link>
                        <span>·</span>
                        <Link href="/faq" className="hover:text-ink transition-colors inline-block py-1">FAQ</Link>
                        <span>·</span>
                        <Link href="/contact" className="hover:text-ink transition-colors inline-block py-1">Support</Link>
                    </div>
                </div>
            </div>

        </footer>
    );
}
