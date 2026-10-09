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
                        <h4 className="font-display font-semibold text-xs uppercase tracking-wider text-ink mb-3.5 flex items-center justify-between">
                            <span>Comparisons</span>
                            <Link href="/compare" className="text-[10px] text-indigo-700 font-bold hover:underline">
                                View All (45) →
                            </Link>
                        </h4>
                        <ul className="space-y-1.5 text-xs text-ink-secondary max-h-72 overflow-y-auto pr-1">
                            <li><Link href="/canvashack-vs-examghost" className="hover:text-ink transition-colors">vs CanvasHack</Link></li>
                            <li><Link href="/cheatmate-vs-examghost" className="hover:text-ink transition-colors">vs CheatMate</Link></li>
                            <li><Link href="/canvasquiz-vs-examghost" className="hover:text-ink transition-colors">vs CanvasQuiz</Link></li>
                            <li><Link href="/canvasninja-vs-examghost" className="hover:text-ink transition-colors">vs CanvasNinja</Link></li>
                            <li><Link href="/canvaswizard-vs-examghost" className="hover:text-ink transition-colors">vs CanvasWizard</Link></li>
                            <li><Link href="/quizsolverai-vs-examghost" className="hover:text-ink transition-colors">vs QuizSolver AI</Link></li>
                            <li><Link href="/getquizsolve-vs-examghost" className="hover:text-ink transition-colors">vs GetQuizSolve</Link></li>
                            <li><Link href="/usequietly-vs-examghost" className="hover:text-ink transition-colors">vs UseQuietly</Link></li>
                            <li><Link href="/testbro-vs-examghost" className="hover:text-ink transition-colors">vs TestBro</Link></li>
                            <li><Link href="/fastsolve-vs-examghost" className="hover:text-ink transition-colors">vs FastSolve</Link></li>
                            <li><Link href="/quizard-vs-examghost" className="hover:text-ink transition-colors">vs Quizard</Link></li>
                            <li><Link href="/classology-vs-examghost" className="hover:text-ink transition-colors">vs Classology</Link></li>
                            <li><Link href="/mindko-vs-examghost" className="hover:text-ink transition-colors">vs Mindko</Link></li>
                            <li><Link href="/campusai-vs-examghost" className="hover:text-ink transition-colors">vs Campus AI</Link></li>
                            <li><Link href="/answerai-vs-examghost" className="hover:text-ink transition-colors">vs AnswerAI</Link></li>
                            <li><Link href="/studyx-vs-examghost" className="hover:text-ink transition-colors">vs StudyX</Link></li>
                            <li><Link href="/studybotpro-vs-examghost" className="hover:text-ink transition-colors">vs StudyBotPro</Link></li>
                            <li><Link href="/solvely-vs-examghost" className="hover:text-ink transition-colors">vs Solvely</Link></li>
                            <li><Link href="/gauth-vs-examghost" className="hover:text-ink transition-colors">vs Gauth</Link></li>
                            <li><Link href="/truststudy-vs-examghost" className="hover:text-ink transition-colors">vs TrustStudy</Link></li>
                            <li><Link href="/answerly-vs-examghost" className="hover:text-ink transition-colors">vs Answerly AI</Link></li>
                            <li><Link href="/homework-helper-vs-examghost" className="hover:text-ink transition-colors">vs Homework Helper+</Link></li>
                            <li><Link href="/bettercampus-vs-examghost" className="hover:text-ink transition-colors">vs BetterCampus</Link></li>
                            <li><Link href="/coursology-vs-examghost" className="hover:text-ink transition-colors">vs Coursology</Link></li>
                            <li><Link href="/questionai-vs-examghost" className="hover:text-ink transition-colors">vs QuestionAI</Link></li>
                            <li><Link href="/studyfox-vs-examghost" className="hover:text-ink transition-colors">vs StudyFox</Link></li>
                            <li><Link href="/canvascrack-vs-examghost" className="hover:text-ink transition-colors">vs Canvas Crack</Link></li>
                            <li><Link href="/quizmate-vs-examghost" className="hover:text-ink transition-colors">vs QuizMate</Link></li>
                            <li><Link href="/canvasscholar-vs-examghost" className="hover:text-ink transition-colors">vs Canvas Scholar</Link></li>
                            <li><Link href="/schoolcheats-vs-examghost" className="hover:text-ink transition-colors">vs SchoolCheats</Link></li>
                            <li><Link href="/knowt-vs-examghost" className="hover:text-ink transition-colors">vs Knowt</Link></li>
                            <li><Link href="/cramly-vs-examghost" className="hover:text-ink transition-colors">vs Cramly AI</Link></li>
                            <li><Link href="/quizzy-vs-examghost" className="hover:text-ink transition-colors">vs Quizzy AI</Link></li>
                            <li><Link href="/canvaspass-vs-examghost" className="hover:text-ink transition-colors">vs CanvasPass</Link></li>
                            <li><Link href="/examclutch-vs-examghost" className="hover:text-ink transition-colors">vs ExamClutch</Link></li>
                            <li><Link href="/mathosai-vs-examghost" className="hover:text-ink transition-colors">vs Mathos AI</Link></li>
                            <li><Link href="/quizwizard-vs-examghost" className="hover:text-ink transition-colors">vs Quiz Wizard</Link></li>
                            <li><Link href="/snapgpt-vs-examghost" className="hover:text-ink transition-colors">vs SnapGPT</Link></li>
                            <li><Link href="/testwhiz-vs-examghost" className="hover:text-ink transition-colors">vs TestWhiz</Link></li>
                            <li><Link href="/brainly-vs-examghost" className="hover:text-ink transition-colors">vs Brainly</Link></li>
                            <li><Link href="/coursehero-vs-examghost" className="hover:text-ink transition-colors">vs Course Hero</Link></li>
                            <li><Link href="/quizplus-vs-examghost" className="hover:text-ink transition-colors">vs QuizPlus</Link></li>
                            <li><Link href="/studymonkey-vs-examghost" className="hover:text-ink transition-colors">vs StudyMonkey</Link></li>
                            <li><Link href="/wolframalpha-vs-examghost" className="hover:text-ink transition-colors">vs Wolfram|Alpha</Link></li>
                            <li><Link href="/homeworkify-vs-examghost" className="hover:text-ink transition-colors">vs Homeworkify</Link></li>
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
