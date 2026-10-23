"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
    Shield, Sparkles, RefreshCw, CheckCircle2, 
    ArrowRight, Eye, Lock, Zap, Check, AlertCircle,
    Camera, MousePointerClick, BookOpen, Clock
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';

export default function Hero() {
    const [displayMode, setDisplayMode] = useState<'invisible' | 'stealth' | 'explain'>('stealth');
    const [answerMethod, setAnswerMethod] = useState<'autofill' | 'highlight' | 'clipboard'>('autofill');
    const [solved, setSolved] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isScanning, setIsScanning] = useState(false);
    const [hudOpacity, setHudOpacity] = useState(100);
    const [shortcutNotice, setShortcutNotice] = useState<string | null>(null);
    const [copiedClipboard, setCopiedClipboard] = useState(false);

    const handleSolve = () => {
        setIsScanning(true);
        setTimeout(() => {
            setIsScanning(false);
            setSolved(true);
            if (answerMethod === 'autofill') {
                setSelectedOption(1); // Mitochondria
            } else if (answerMethod === 'clipboard') {
                setCopiedClipboard(true);
                setTimeout(() => setCopiedClipboard(false), 3000);
            }
        }, displayMode === 'invisible' ? 150 : 450);
    };

    const handleReset = () => {
        setSolved(false);
        setSelectedOption(null);
        setIsScanning(false);
        setShortcutNotice(null);
        setCopiedClipboard(false);
    };

    // Keyboard shortcut listeners: Cmd+Shift+U (toggle) and Cmd+Shift+S (snip)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const isCmdOrCtrl = e.metaKey || e.ctrlKey;
            const isShift = e.shiftKey;
            const key = e.key.toLowerCase();

            if (isCmdOrCtrl && isShift && key === 'u') {
                e.preventDefault();
                setShortcutNotice(`ExamGhost Toggled (${isCmdOrCtrl ? '⌘' : 'Ctrl'}+Shift+U)`);
                setTimeout(() => setShortcutNotice(null), 3000);
            }

            if (isCmdOrCtrl && isShift && key === 's') {
                e.preventDefault();
                setShortcutNotice(`Snap-It Sniping Mode Triggered (${isCmdOrCtrl ? '⌘' : 'Ctrl'}+Shift+S)`);
                setTimeout(() => setShortcutNotice(null), 3000);
            }

            if (isCmdOrCtrl && key === 'b') {
                e.preventDefault();
                setHudOpacity(prev => (prev === 100 ? 25 : prev === 25 ? 0 : 100));
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section className="relative pt-12 sm:pt-16 pb-24 md:pb-32 overflow-hidden bg-cream text-ink">
            
            {/* Backdrop: Ghost Wordmark + Torn Paper Collage */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                {/* Giant Ghost Word */}
                <div className="absolute top-12 left-1/2 -translate-x-1/2 font-display font-extrabold text-[12vw] tracking-[-0.04em] text-ink opacity-[0.032] select-none whitespace-nowrap">
                    EXAMGHOST
                </div>

                {/* Organic Torn Paper Collage SVG */}
                <svg 
                    className="absolute bottom-0 left-0 right-0 w-full h-[600px] object-cover opacity-90"
                    viewBox="0 0 1440 800" 
                    preserveAspectRatio="xMidYMax slice"
                >
                    <g>
                        <path 
                            d="M-80 520 C 60 440, 180 480, 300 430 C 420 380, 540 450, 590 570 C 640 680, 560 760, 600 850 L -80 850 Z" 
                            fill="#c4d0f8" 
                            stroke="#fff" 
                            strokeWidth="18" 
                            strokeLinejoin="round"
                        />
                        <path 
                            d="M1520 480 C 1400 420, 1270 480, 1180 440 C 1070 390, 970 470, 930 580 C 890 690, 980 760, 940 850 L 1520 850 Z" 
                            fill="#cdeecb" 
                            stroke="#fff" 
                            strokeWidth="18" 
                            strokeLinejoin="round"
                        />
                        <path 
                            d="M980 480 C 1040 430, 1120 460, 1170 435 C 1230 405, 1290 450, 1270 510 C 1250 565, 1150 550, 1070 570 C 990 590, 930 535, 980 480 Z" 
                            fill="#e2d3fa" 
                            stroke="#fff" 
                            strokeWidth="14" 
                            strokeLinejoin="round"
                        />
                        <path 
                            d="M260 480 C 310 430, 380 440, 420 415 C 470 390, 520 430, 500 485 C 480 540, 390 530, 330 540 C 270 550, 230 520, 260 480 Z" 
                            fill="#111111" 
                            stroke="#fff" 
                            strokeWidth="12" 
                            strokeLinejoin="round"
                        />
                    </g>
                </svg>
            </div>

            {/* Main Hero Container */}
            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Eyebrow Pill */}
                <div className="flex justify-center mb-6">
                    <span className="eyebrow bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-black/5 shadow-sm text-xs flex items-center gap-2">
                        <span className="w-5 h-5 rounded-full overflow-hidden border border-black/10 inline-block shrink-0 bg-[#c4d0f8]">
                            <img src="/images/ghost/ghost_mascot_hero.jpg" alt="ExamGhost Mascot" width={20} height={20} className="w-full h-full object-cover scale-110" />
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-semibold">THE INVISIBLE AI QUIZ SOLVER · CANVAS, BLACKBOARD, MOODLE & 20+ MORE</span>
                    </span>
                </div>

                {/* Editorial Headline */}
                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-ink leading-[1.04] text-center mb-6 max-w-4xl mx-auto">
                    <span>The Invisible AI Quiz Solver</span>
                    <br />
                    <span className="text-ink-secondary">That Answers Any Question in Seconds.</span>
                </h1>

                {/* Subtitle */}
                <p className="aeo-summary text-base sm:text-lg md:text-xl text-ink-muted text-center max-w-2xl mx-auto mb-8 font-normal leading-relaxed">
                    Double-click any question on Canvas, Moodle, Blackboard or 20+ more and ExamGhost fills in the correct answer right on the page — no tab-switching, no copy-paste, and 100% screen-share safe.
                </p>

                {/* Live Demo Callout Pill */}
                <div className="flex justify-center mb-6">
                    <Link
                        href="/canvas-quiz-solver-free-demo"
                        prefetch={false}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-300 text-xs sm:text-[13px] font-semibold text-emerald-900 transition-all hover:scale-[1.02] shadow-xs group"
                    >
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
                        </span>
                        <span>Try the interactive Canvas demo — no install required</span>
                        <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-emerald-700" />
                    </Link>
                </div>

                {/* Call To Actions */}
                <div className="flex flex-wrap items-center justify-center gap-3.5 mb-5">
                    <a
                        href="https://discord.gg/aCcsyKYJq4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-dark px-7 py-3.5 text-base shadow-soft hover:shadow-lift inline-flex items-center gap-2.5"
                    >
                        <FaChrome className="w-4 h-4 text-[#bfe3f6]"  aria-hidden="true"/>
                        <span>Add to Chrome — Free</span>
                    </a>

                    <Link
                        href="/canvas-quiz-solver-free-demo"
                        prefetch={false}
                        className="btn-soft px-6 py-3.5 text-base group inline-flex items-center gap-2 bg-white border border-black/10 text-ink shadow-xs hover:bg-[#faf8f4]"
                    >
                        <span>Live Sandbox Demo</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-ink" />
                    </Link>

                    <a
                        href="https://discord.gg/aCcsyKYJq4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-dark !bg-[#5865F2] hover:!bg-[#4752c4] px-6 py-3.5 text-base text-white border-transparent inline-flex items-center gap-2.5 group transition-all !shadow-[0_4px_16px_rgba(88,101,242,0.25)] hover:!shadow-[0_6px_22px_rgba(88,101,242,0.4)]"
                    >
                        <FaDiscord className="w-4 h-4 text-white transition-transform group-hover:scale-110"  aria-hidden="true"/>
                        <span>Join Student Discord</span>
                    </a>
                </div>

                {/* Fine print */}
                <p className="text-center text-xs text-ink-muted mb-12 sm:mb-16">
                    Free · 50 Free Questions · No Account Needed · Works in 1 Click · Off until you switch it on
                </p>

                {/* Shortcut Notification Banner */}
                {shortcutNotice && (
                    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-ink text-white px-5 py-2.5 rounded-full text-xs font-medium shadow-2xl flex items-center gap-2 animate-bounce">
                        <Sparkles className="w-4 h-4 text-[#ffd23f]" />
                        <span>{shortcutNotice}</span>
                    </div>
                )}

                {/* Hero Stage Window with Floating Tilt Badges & 3D Ghost Characters */}
                <div className="relative max-w-4xl mx-auto mt-6">

                    {/* Floating 3D Ghost Mascot (Left): Peace Sign Ghost */}
                    <div className="hidden xl:flex absolute -left-44 top-1/4 z-30 flex-col items-center pointer-events-none animate-float-left">
                        <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-white shadow-lift bg-cream pointer-events-auto group cursor-pointer transition-transform duration-300 hover:scale-105">
                            <img src="/images/ghost/ghost_peace.jpg" alt="ExamGhost Peace Mascot" width={128} height={128} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                        </div>
                        <div className="mt-2.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-black/5 text-[11px] font-bold text-ink shadow-soft flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span>100% Invisible ✌️</span>
                        </div>
                    </div>

                    {/* Floating 3D Ghost Mascot (Right): Grad A+ Star Ghost */}
                    <div className="hidden xl:flex absolute -right-44 top-1/3 z-30 flex-col items-center pointer-events-none animate-float-right">
                        <div className="w-32 h-32 rounded-3xl overflow-hidden border-2 border-white shadow-lift bg-cream pointer-events-auto group cursor-pointer transition-transform duration-300 hover:scale-105">
                            <img src="/images/ghost/ghost_grad.jpg" alt="ExamGhost Grad Mascot" width={128} height={128} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                        </div>
                        <div className="mt-2.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-black/5 text-[11px] font-bold text-ink shadow-soft flex items-center gap-1.5">
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                            <span>A+ Guaranteed 🎓</span>
                        </div>
                    </div>

                    {/* Floating Card Chip 1 (Top Left): Double-Tap Solve */}
                    <div className="hidden lg:flex absolute -top-8 -left-12 z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#c4d0f8] text-ink border border-white/80 shadow-soft -rotate-3 hover:rotate-0 transition-transform duration-300">
                        <MousePointerClick className="w-4 h-4 text-ink" />
                        <div className="text-xs font-semibold leading-tight">
                            <div>Double-Click to Solve</div>
                            <div className="text-[10px] font-normal opacity-80">Direct inline answer · No tab switch</div>
                        </div>
                    </div>

                    {/* Floating Card Chip 2 (Top Right): Snap-It Sniping */}
                    <div className="hidden lg:flex absolute -top-6 -right-12 z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#e2d3fa] text-ink border border-white/80 shadow-soft rotate-3 hover:rotate-0 transition-transform duration-300">
                        <Camera className="w-4 h-4 text-ink" />
                        <div className="text-xs font-semibold leading-tight">
                            <div>Snap-It Sniping (⌘+Shift+S)</div>
                            <div className="text-[10px] font-normal opacity-80">Draw box to solve diagrams &amp; math</div>
                        </div>
                    </div>

                    {/* Floating Card Chip 3 (Bottom Left): 3 Stealth Modes */}
                    <div className="hidden lg:flex absolute -bottom-6 -left-10 z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#cdeecb] text-ink border border-white/80 shadow-soft rotate-2 hover:rotate-0 transition-transform duration-300">
                        <Lock className="w-4 h-4 text-ink" />
                        <div className="text-xs font-semibold leading-tight">
                            <div>Invisible · Stealth · Explain</div>
                            <div className="text-[10px] font-normal opacity-80">Screen-share safe by design</div>
                        </div>
                    </div>

                    {/* Floating Card Chip 4 (Bottom Right): Hotkey Toggle */}
                    <div className="hidden lg:flex absolute -bottom-6 -right-10 z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#ffd5cc] text-ink border border-white/80 shadow-soft -rotate-2 hover:rotate-0 transition-transform duration-300">
                        <Zap className="w-4 h-4 text-ink" />
                        <div className="text-xs font-semibold leading-tight">
                            <div>⌘+Shift+U Master Toggle</div>
                            <div className="text-[10px] font-normal opacity-80">Off until you switch it on</div>
                        </div>
                    </div>

                    {/* Central macOS Native Window */}
                    <div className="bg-white rounded-3xl border border-black/10 shadow-lift overflow-hidden">

                        {/* macOS Window Title Bar */}
                        <div className="bg-[#f7f5f0] border-b border-black/5 px-4 sm:px-6 py-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 inline-block" />
                                <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 inline-block" />
                                <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 inline-block" />
                                <span className="text-xs text-ink-muted font-medium ml-2 hidden sm:inline-block font-mono">
                                    canvas.university.edu/courses/BIO-101/quizzes/attempt
                                </span>
                            </div>

                            {/* Mode Indicator Pill */}
                            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-black/5 shadow-xs text-xs font-semibold text-ink">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                <span className="capitalize">{displayMode} Mode</span>
                                <span className="text-ink-muted font-normal">·</span>
                                <span className="text-ink-secondary capitalize">{answerMethod}</span>
                            </div>
                        </div>

                        {/* Window Content Body */}
                        <div className="p-6 sm:p-8">
                            
                            {/* Question Header & Double-Click Hint */}
                            <div className="flex items-start justify-between pb-4 border-b border-black/5 mb-6">
                                <div>
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider font-mono">
                                            Question 14 of 40 · Biology
                                        </span>
                                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200">
                                            Double-Click Enabled
                                        </span>
                                    </div>
                                    <p 
                                        onDoubleClick={handleSolve}
                                        className="font-display text-lg sm:text-xl font-bold text-ink mt-1 cursor-pointer hover:text-emerald-800 transition-colors select-none"
                                        title="Double-click to solve this question"
                                    >
                                        What is the primary function of mitochondria in eukaryotic cells?
                                    </p>
                                </div>
                                <div className="text-right shrink-0 ml-4">
                                    <span className="text-xs bg-[#f4f1ea] px-2.5 py-1 rounded-full font-semibold text-ink">
                                        2.0 pts
                                    </span>
                                </div>
                            </div>

                            {/* Multiple Choice Options */}
                            <div className="space-y-3 mb-6">
                                {[
                                    { id: 0, text: 'Protein synthesis' },
                                    { id: 1, text: 'ATP production through cellular respiration' },
                                    { id: 2, text: 'DNA replication' },
                                    { id: 3, text: 'Cell membrane transport' }
                                ].map((opt) => {
                                    const isTarget = opt.id === 1;
                                    const isChosen = selectedOption === opt.id;
                                    const isHighlighted = solved && isTarget && answerMethod === 'highlight';
                                    const isAutoSelected = solved && isTarget && answerMethod === 'autofill';

                                    return (
                                        <div
                                            key={opt.id}
                                            onDoubleClick={handleSolve}
                                            onClick={() => setSelectedOption(opt.id)}
                                            className={`p-3.5 sm:p-4 rounded-2xl border text-sm font-medium transition-all duration-200 cursor-pointer flex items-center justify-between select-none ${
                                                isAutoSelected
                                                    ? 'bg-[#cdeecb]/40 border-emerald-500 shadow-sm text-ink'
                                                    : isHighlighted
                                                    ? 'bg-amber-100/60 border-amber-400 ring-2 ring-amber-300 text-ink'
                                                    : isChosen
                                                    ? 'bg-black/5 border-ink text-ink'
                                                    : 'bg-white border-black/5 hover:border-black/20 text-ink'
                                            }`}
                                        >
                                            <span className="flex items-center gap-3">
                                                <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                                                    isAutoSelected || isChosen
                                                        ? 'border-ink bg-ink text-white'
                                                        : isHighlighted
                                                        ? 'border-amber-500 bg-amber-400 text-black'
                                                        : 'border-black/20'
                                                }`}>
                                                    {isAutoSelected || isChosen ? '✓' : isHighlighted ? '★' : ''}
                                                </span>
                                                <span>{opt.text}</span>
                                            </span>

                                            {solved && isTarget && (
                                                <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 bg-[#cdeecb] px-2.5 py-0.5 rounded-full font-mono">
                                                    <Check className="w-3.5 h-3.5" />
                                                    <span>99.8% match</span>
                                                </span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Step-by-Step Explanation Drawer (Shown in Explain Mode) */}
                            {solved && displayMode === 'explain' && (
                                <div className="p-4 rounded-2xl bg-[#e2d3fa]/25 border border-[#6741d9]/30 text-xs text-ink mb-6 animate-fade-in">
                                    <div className="flex items-center justify-between font-bold text-[#4c2889] mb-1.5">
                                        <span className="flex items-center gap-1.5">
                                            <BookOpen className="w-4 h-4 text-[#6741d9]" />
                                            <span>Step-by-Step Reasoner (Shift + Double-Click):</span>
                                        </span>
                                        <span className="text-[10px] uppercase bg-[#6741d9] text-white px-2 py-0.5 rounded-full font-bold">
                                            Biology Verified
                                        </span>
                                    </div>
                                    <p className="text-[11px] text-ink-muted leading-relaxed">
                                        Mitochondria generate adenosine triphosphate (ATP) via the Krebs cycle and oxidative phosphorylation on the inner mitochondrial cristae. Ribosomes handle protein synthesis, while the nucleus governs DNA replication.
                                    </p>
                                </div>
                            )}

                            {/* Clipboard Toast */}
                            {copiedClipboard && (
                                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-300 text-xs text-amber-950 font-semibold mb-6 flex items-center gap-2">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    <span>Answer copied to clipboard! (Ready to paste into essay/short-answer)</span>
                                </div>
                            )}

                            {/* Mode & Method Switcher Controls Inside Simulator */}
                            <div className="p-4 rounded-2xl bg-[#faf8f4] border border-black/5 mb-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {/* Display Mode Switcher */}
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-wider text-ink-muted mb-1.5">
                                            Display Mode:
                                        </div>
                                        <div className="grid grid-cols-3 gap-1 bg-white p-1 rounded-xl border border-black/10 text-xs font-semibold">
                                            {(['invisible', 'stealth', 'explain'] as const).map(mode => (
                                                <button
                                                    key={mode}
                                                    type="button"
                                                    onClick={() => setDisplayMode(mode)}
                                                    className={`py-1.5 rounded-lg capitalize transition-all ${
                                                        displayMode === mode
                                                            ? 'bg-ink text-white shadow-xs'
                                                            : 'text-ink-secondary hover:text-ink'
                                                    }`}
                                                >
                                                    {mode}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Answer Method Switcher */}
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-wider text-ink-muted mb-1.5">
                                            Answer Method:
                                        </div>
                                        <div className="grid grid-cols-3 gap-1 bg-white p-1 rounded-xl border border-black/10 text-xs font-semibold">
                                            {(['autofill', 'highlight', 'clipboard'] as const).map(method => (
                                                <button
                                                    key={method}
                                                    type="button"
                                                    onClick={() => setAnswerMethod(method)}
                                                    className={`py-1.5 rounded-lg capitalize transition-all ${
                                                        answerMethod === method
                                                            ? 'bg-ink text-white shadow-xs'
                                                            : 'text-ink-secondary hover:text-ink'
                                                    }`}
                                                >
                                                    {method === 'autofill' ? 'Auto-fill' : method}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Action Bar */}
                            <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={handleSolve}
                                        disabled={isScanning || solved}
                                        className="btn-dark px-5 py-2.5 text-xs sm:text-sm font-bold shadow-xs hover:shadow-soft"
                                    >
                                        {isScanning ? (
                                            <RefreshCw className="w-4 h-4 animate-spin text-white" />
                                        ) : (
                                            <MousePointerClick className="w-4 h-4 text-[#ffd23f]" />
                                        )}
                                        <span>{solved ? '✓ Solved Inline' : 'Double-Click to Solve'}</span>
                                    </button>

                                    {solved && (
                                        <button
                                            onClick={handleReset}
                                            className="btn-soft px-4 py-2.5 text-xs text-ink rounded-full hover:bg-black/5"
                                        >
                                            <RefreshCw className="w-3.5 h-3.5" />
                                            <span>Reset Demo</span>
                                        </button>
                                    )}
                                </div>

                                <div className="flex items-center gap-2 text-xs text-ink-muted font-medium">
                                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>Average solve: &lt;1.2s · Zero tab switching</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
