"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { 
    RefreshCw, CheckCircle2, 
    ArrowRight, Lock, Check,
    Camera, MousePointerClick, BookOpen, Clock,
    Copy
} from 'lucide-react';
import { FaChrome, FaDiscord } from 'react-icons/fa';

const QUESTION = {
    numberLabel: 'Question 14 of 40 · Biology',
    courseUrl: 'canvas.university.edu/courses/BIO-101/quizzes/attempt',
    points: '2.0 pts',
    prompt: 'What is the primary function of mitochondria in eukaryotic cells?',
    options: [
        'Protein synthesis via ribosomal translation',
        'ATP production through cellular respiration',
        'Chromosomal DNA replication during mitosis',
        'Selective plasma membrane lipid transport'
    ],
    correctIndex: 1,
    explanation: 'Mitochondria generate ATP through cellular respiration (the citric acid cycle and oxidative phosphorylation). Ribosomes synthesize proteins, while the nucleus handles DNA replication.'
};

export default function Hero() {
    const [displayMode, setDisplayMode] = useState<'invisible' | 'stealth' | 'explain'>('stealth');
    const [answerMethod, setAnswerMethod] = useState<'autofill' | 'highlight' | 'clipboard'>('autofill');
    const [solved, setSolved] = useState(true);
    const [selectedOption, setSelectedOption] = useState<number | null>(QUESTION.correctIndex);
    const [isScanning, setIsScanning] = useState(false);
    const [isSnipping, setIsSnipping] = useState(false);
    const [copiedClipboard, setCopiedClipboard] = useState(false);

    const applyAnswerDelivery = useCallback((method: 'autofill' | 'highlight' | 'clipboard') => {
        if (method === 'autofill') {
            setSelectedOption(QUESTION.correctIndex);
            setCopiedClipboard(false);
        } else if (method === 'highlight') {
            setSelectedOption(null);
            setCopiedClipboard(false);
        } else if (method === 'clipboard') {
            setSelectedOption(null);
            setCopiedClipboard(true);
            if (typeof navigator !== 'undefined' && navigator.clipboard) {
                navigator.clipboard.writeText(QUESTION.options[QUESTION.correctIndex]).catch(() => {});
            }
        }
    }, []);

    const triggerSolve = useCallback((
        overrideMode?: 'invisible' | 'stealth' | 'explain',
        overrideMethod?: 'autofill' | 'highlight' | 'clipboard',
        viaSnip = false
    ) => {
        const activeMode = overrideMode ?? displayMode;
        const activeMethod = overrideMethod ?? answerMethod;

        if (viaSnip) {
            setIsSnipping(true);
        }
        setIsScanning(true);

        const delay = viaSnip ? 450 : activeMode === 'invisible' ? 140 : 260;

        setTimeout(() => {
            setIsScanning(false);
            setIsSnipping(false);
            setSolved(true);
            applyAnswerDelivery(activeMethod);
        }, delay);
    }, [displayMode, answerMethod, applyAnswerDelivery]);

    const handleModeSelect = useCallback((mode: 'invisible' | 'stealth' | 'explain') => {
        setDisplayMode(mode);
        setSolved(true);
        applyAnswerDelivery(answerMethod);
    }, [answerMethod, applyAnswerDelivery]);

    const handleMethodSelect = useCallback((method: 'autofill' | 'highlight' | 'clipboard') => {
        setAnswerMethod(method);
        setSolved(true);
        applyAnswerDelivery(method);
    }, [applyAnswerDelivery]);

    // Keyboard shortcut listeners (Alt+1, Alt+2, Alt+3, Alt+S)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const isAlt = e.altKey;
            const key = e.key.toLowerCase();

            if (isAlt && key === 's') {
                e.preventDefault();
                triggerSolve(displayMode, answerMethod, true);
            } else if (isAlt && e.key === '1') {
                e.preventDefault();
                handleModeSelect('invisible');
            } else if (isAlt && e.key === '2') {
                e.preventDefault();
                handleModeSelect('stealth');
            } else if (isAlt && e.key === '3') {
                e.preventDefault();
                handleModeSelect('explain');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [displayMode, answerMethod, triggerSolve, handleModeSelect]);

    return (
        <section className="relative pt-12 sm:pt-16 pb-24 md:pb-32 overflow-hidden bg-cream text-ink">
            
            {/* Backdrop: Ghost Wordmark + Torn Paper Collage */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
                <div className="absolute top-12 left-1/2 -translate-x-1/2 font-display font-extrabold text-[12vw] tracking-[-0.04em] text-ink opacity-[0.032] select-none whitespace-nowrap">
                    EXAMGHOST
                </div>

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
                            <img src="/images/ghost/ghost_mascot_hero.jpg" alt="ExamGhost Mascot" width={20} height={20} className="w-full h-full object-cover" />
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="font-semibold hidden sm:inline">THE INVISIBLE AI QUIZ SOLVER · CANVAS, BLACKBOARD, MOODLE &amp; 20+ MORE</span>
                        <span className="font-semibold sm:hidden">CANVAS · BLACKBOARD · MOODLE · 20+</span>
                    </span>
                </div>

                {/* Editorial Headline */}
                <h1 className="font-display text-[40px] sm:text-6xl lg:text-[68px] font-bold tracking-tight text-ink leading-[1.03] text-center mb-6 max-w-5xl mx-auto">
                    <span className="block">The Invisible AI Quiz Solver</span>
                    <span className="block text-ink-secondary/80">That Answers Any Question in Seconds.</span>
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
                        <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
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
                        <FaDiscord className="w-4 h-4 text-white transition-transform group-hover:scale-110" aria-hidden="true" />
                        <span>Join Student Discord</span>
                    </a>
                </div>

                {/* Fine print */}
                <p className="text-center text-xs text-ink-muted mb-14 sm:mb-16">
                    Free · 5 Free Solves / Day · Paid Plans Include Claude, ChatGPT &amp; DeepSeek Study Hub
                </p>

                {/* Hero Stage Window with Clean Single-Line Floating Chips */}
                <div className="relative max-w-4xl mx-auto mt-10 mb-8">

                    {/* Floating 3D Ghost Mascot (Left) */}
                    <button
                        type="button"
                        onClick={() => handleModeSelect('invisible')}
                        className="hidden xl:flex absolute -left-28 2xl:-left-36 top-1/4 z-30 flex-col items-center animate-float-left group cursor-pointer focus:outline-none"
                        title="Switch to Invisible Mode (Alt+1)"
                    >
                        <div className="w-24 h-24 2xl:w-28 2xl:h-28 rounded-3xl overflow-hidden border-2 border-white shadow-lift bg-cream transition-transform duration-300 group-hover:scale-105">
                            <img src="/images/ghost/ghost_peace.jpg" alt="ExamGhost Peace Mascot" width={112} height={112} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                        </div>
                        <div className="mt-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-black/10 text-[11px] font-bold text-ink shadow-soft flex items-center gap-1.5 whitespace-nowrap">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" />
                            <span>100% Invisible ✌️</span>
                        </div>
                    </button>

                    {/* Floating 3D Ghost Mascot (Right) */}
                    <button
                        type="button"
                        onClick={() => handleModeSelect('explain')}
                        className="hidden xl:flex absolute -right-28 2xl:-right-36 top-1/3 z-30 flex-col items-center animate-float-right group cursor-pointer focus:outline-none"
                        title="Switch to Explain Mode (Alt+3)"
                    >
                        <div className="w-24 h-24 2xl:w-28 2xl:h-28 rounded-3xl overflow-hidden border-2 border-white shadow-lift bg-cream transition-transform duration-300 group-hover:scale-105">
                            <img src="/images/ghost/ghost_grad.jpg" alt="ExamGhost Grad Mascot" width={112} height={112} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                        </div>
                        <div className="mt-2 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md border border-black/10 text-[11px] font-bold text-ink shadow-soft flex items-center gap-1.5 whitespace-nowrap">
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                            <span>A+ Guaranteed 🎓</span>
                        </div>
                    </button>

                    {/* Floating Chip 1 (Top Left) */}
                    <button
                        type="button"
                        onClick={() => triggerSolve(displayMode, answerMethod, false)}
                        className="hidden lg:flex absolute -top-11 left-0 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#c4d0f8] text-ink border border-white/90 shadow-soft -rotate-1 hover:rotate-0 transition-all duration-200 cursor-pointer text-xs font-semibold"
                    >
                        <MousePointerClick className="w-3.5 h-3.5 text-ink shrink-0" />
                        <span>Double-Click to Solve</span>
                    </button>

                    {/* Floating Chip 2 (Top Right) */}
                    <button
                        type="button"
                        onClick={() => triggerSolve(displayMode, answerMethod, true)}
                        className="hidden lg:flex absolute -top-11 right-0 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e2d3fa] text-ink border border-white/90 shadow-soft rotate-1 hover:rotate-0 transition-all duration-200 cursor-pointer text-xs font-semibold"
                    >
                        <Camera className="w-3.5 h-3.5 text-ink shrink-0" />
                        <span>Snap-It OCR (Alt+S)</span>
                    </button>

                    {/* Floating Chip 3 (Bottom Left) */}
                    <button
                        type="button"
                        onClick={() => {
                            const order: ('invisible' | 'stealth' | 'explain')[] = ['invisible', 'stealth', 'explain'];
                            handleModeSelect(order[(order.indexOf(displayMode) + 1) % order.length]);
                        }}
                        className="hidden lg:flex absolute -bottom-11 left-0 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#cdeecb] text-ink border border-white/90 shadow-soft rotate-1 hover:rotate-0 transition-all duration-200 cursor-pointer text-xs font-semibold"
                    >
                        <Lock className="w-3.5 h-3.5 text-ink shrink-0" />
                        <span>3 Modes (Alt+1 / 2 / 3)</span>
                    </button>

                    {/* Floating Chip 4 (Bottom Right) */}
                    <div
                        className="hidden lg:flex absolute -bottom-11 right-0 z-20 items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ffd5cc] text-ink border border-white/90 shadow-soft -rotate-1 text-xs font-semibold select-none"
                    >
                        <CheckCircle2 className="w-3.5 h-3.5 text-ink shrink-0" />
                        <span>Zero Tab-Switch Logs</span>
                    </div>

                    {/* Central macOS Native Window */}
                    <div className="bg-white rounded-3xl border border-black/10 shadow-lift overflow-hidden relative">

                        {/* Clean macOS Window Title Bar */}
                        <div className="bg-[#f7f5f0] border-b border-black/5 px-4 sm:px-6 py-3.5 flex items-center justify-between gap-2">
                            <div className="flex items-center gap-2 min-w-0">
                                <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 inline-block shrink-0" />
                                <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 inline-block shrink-0" />
                                <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 inline-block shrink-0" />
                                <span className="text-xs text-ink-muted font-medium ml-2 truncate hidden sm:inline-block font-mono">
                                    {QUESTION.courseUrl}
                                </span>
                            </div>

                            <div className="flex items-center gap-1.5 bg-white px-3 py-1 rounded-full border border-black/10 shadow-2xs text-xs font-semibold text-ink shrink-0">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                <span className="capitalize">{displayMode} Active</span>
                            </div>
                        </div>

                        {/* Window Content Body */}
                        <div className="p-6 sm:p-8 relative">

                            {/* Snap-It Region Crop Overlay Animation */}
                            {isSnipping && (
                                <div className="absolute inset-4 sm:inset-6 z-30 rounded-2xl border-2 border-dashed border-[#10b981] bg-[#10b981]/5 pointer-events-none flex flex-col justify-between p-4 overflow-hidden">
                                    <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#10b981] to-transparent animate-laser-scan" />
                                    <div className="inline-flex items-center gap-1.5 self-start bg-ink text-white text-[11px] font-bold px-3 py-1 rounded-full shadow-md">
                                        <Camera className="w-3.5 h-3.5 text-[#3DDC97]" />
                                        <span>Snap-It Region OCR (Alt+S)...</span>
                                    </div>
                                </div>
                            )}

                            {/* Question Header */}
                            <div className="flex items-start justify-between pb-4 border-b border-black/5 mb-5 gap-4">
                                <div>
                                    <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider font-mono block mb-1">
                                        {QUESTION.numberLabel}
                                    </span>
                                    <p 
                                        onDoubleClick={() => triggerSolve(displayMode, answerMethod, false)}
                                        className="font-display text-lg sm:text-xl font-bold text-ink cursor-pointer select-none"
                                        title="Double-click to solve"
                                    >
                                        {QUESTION.prompt}
                                    </p>
                                </div>
                                <span className="text-xs bg-[#f4f1ea] px-2.5 py-1 rounded-full font-semibold text-ink shrink-0">
                                    {QUESTION.points}
                                </span>
                            </div>

                            {/* Multiple Choice Options */}
                            <div className="space-y-2.5 mb-6">
                                {QUESTION.options.map((optText, optIdx) => {
                                    const isTarget = optIdx === QUESTION.correctIndex;
                                    const isChosen = selectedOption === optIdx;
                                    const isHighlighted = solved && isTarget && answerMethod === 'highlight';
                                    const isAutoSelected = solved && isTarget && answerMethod === 'autofill';
                                    const showStealthOrExplainVisuals = displayMode !== 'invisible';

                                    return (
                                        <div
                                            key={optIdx}
                                            onClick={() => setSelectedOption(optIdx)}
                                            className={`p-3.5 sm:p-4 rounded-2xl border text-sm font-medium transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 select-none ${
                                                isAutoSelected && showStealthOrExplainVisuals
                                                    ? 'bg-[#cdeecb]/45 border-emerald-500 shadow-xs text-ink'
                                                    : isHighlighted && showStealthOrExplainVisuals
                                                    ? 'bg-amber-50/90 border-amber-400 ring-2 ring-amber-300/70 text-ink'
                                                    : isAutoSelected || isChosen
                                                    ? 'bg-black/[0.03] border-ink text-ink'
                                                    : 'bg-white border-black/10 hover:border-black/25 text-ink'
                                            }`}
                                        >
                                            <span className="flex items-center gap-3 min-w-0">
                                                <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] shrink-0 transition-colors ${
                                                    isAutoSelected || isChosen
                                                        ? 'border-ink bg-ink text-white'
                                                        : isHighlighted
                                                        ? 'border-emerald-600 bg-emerald-500 text-white'
                                                        : 'border-black/25 bg-white'
                                                }`}>
                                                    {isAutoSelected || isChosen || isHighlighted ? '✓' : ''}
                                                </span>
                                                <span className="leading-snug">{optText}</span>
                                            </span>

                                            {solved && isTarget && showStealthOrExplainVisuals && (
                                                <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-0.5 rounded-full font-mono shrink-0 ${
                                                    isHighlighted
                                                        ? 'bg-amber-100 text-amber-900 border border-amber-300'
                                                        : 'bg-[#cdeecb] text-emerald-900'
                                                }`}>
                                                    <Check className="w-3.5 h-3.5" />
                                                    <span>{isHighlighted ? 'Hint ✓' : '99.8% match'}</span>
                                                </span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Step-by-Step Explanation Drawer (Shown only when Explain Mode is selected) */}
                            {solved && displayMode === 'explain' && (
                                <div className="p-4 rounded-2xl bg-[#e2d3fa]/30 border border-[#6741d9]/25 text-xs text-ink mb-5">
                                    <div className="flex items-center justify-between gap-2 font-bold text-[#4c2889] mb-1.5">
                                        <span className="flex items-center gap-1.5">
                                            <BookOpen className="w-4 h-4 text-[#6741d9] shrink-0" />
                                            <span>Step-by-Step Explanation (Alt+3)</span>
                                        </span>
                                        <button
                                            type="button"
                                            onClick={() => handleMethodSelect('clipboard')}
                                            className="inline-flex items-center gap-1 text-[11px] underline hover:no-underline"
                                        >
                                            <Copy className="w-3 h-3" />
                                            <span>Copy</span>
                                        </button>
                                    </div>
                                    <p className="text-xs text-ink/85 leading-relaxed">
                                        {QUESTION.explanation}
                                    </p>
                                </div>
                            )}

                            {/* Clipboard Notice (Shown only when Clipboard method is selected) */}
                            {solved && (copiedClipboard || answerMethod === 'clipboard') && (
                                <div className="p-3 rounded-2xl bg-amber-50 border border-amber-300 text-xs text-amber-950 font-semibold mb-5 flex items-center justify-between gap-2">
                                    <span className="flex items-center gap-2">
                                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                                        <span>Copied to clipboard: <strong>&ldquo;{QUESTION.options[QUESTION.correctIndex]}&rdquo;</strong></span>
                                    </span>
                                    <span className="text-[10px] font-mono uppercase bg-amber-200/70 px-2 py-0.5 rounded-full font-bold shrink-0">
                                        ⌘+V Ready
                                    </span>
                                </div>
                            )}

                            {/* Clean Mode & Delivery Selector Bar */}
                            <div className="p-3.5 rounded-2xl bg-[#faf8f4] border border-black/5 mb-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-wider text-ink-muted mb-1.5">
                                            Display Mode
                                        </div>
                                        <div className="grid grid-cols-3 gap-1 bg-white p-1 rounded-xl border border-black/10 text-xs font-semibold">
                                            {(['invisible', 'stealth', 'explain'] as const).map(mode => (
                                                <button
                                                    key={mode}
                                                    type="button"
                                                    onClick={() => handleModeSelect(mode)}
                                                    className={`py-1.5 rounded-lg capitalize transition-all cursor-pointer ${
                                                        displayMode === mode
                                                            ? 'bg-ink text-white shadow-xs'
                                                            : 'text-ink-secondary hover:text-ink hover:bg-black/[0.03]'
                                                    }`}
                                                >
                                                    {mode}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <div>
                                        <div className="text-[10px] font-bold uppercase tracking-wider text-ink-muted mb-1.5">
                                            Answer Method
                                        </div>
                                        <div className="grid grid-cols-3 gap-1 bg-white p-1 rounded-xl border border-black/10 text-xs font-semibold">
                                            {(['autofill', 'highlight', 'clipboard'] as const).map(method => (
                                                <button
                                                    key={method}
                                                    type="button"
                                                    onClick={() => handleMethodSelect(method)}
                                                    className={`py-1.5 rounded-lg capitalize transition-all cursor-pointer ${
                                                        answerMethod === method
                                                            ? 'bg-ink text-white shadow-xs'
                                                            : 'text-ink-secondary hover:text-ink hover:bg-black/[0.03]'
                                                    }`}
                                                >
                                                    {method === 'autofill' ? 'Auto-Fill' : method}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Clean Bottom Action Bar */}
                            <div className="flex flex-wrap items-center justify-between gap-3">
                                <div className="flex flex-wrap items-center gap-2.5">
                                    <button
                                        type="button"
                                        onClick={() => triggerSolve(displayMode, answerMethod, false)}
                                        disabled={isScanning}
                                        className="btn-dark px-5 py-2.5 text-xs sm:text-sm font-bold shadow-xs hover:shadow-soft cursor-pointer"
                                    >
                                        {isScanning && !isSnipping ? (
                                            <RefreshCw className="w-4 h-4 animate-spin text-white" />
                                        ) : (
                                            <MousePointerClick className="w-4 h-4 text-[#ffd23f]" />
                                        )}
                                        <span>
                                            {isScanning && !isSnipping ? 'Solving...' : 'Double-Click to Solve'}
                                        </span>
                                    </button>

                                    <button
                                        type="button"
                                        onClick={() => triggerSolve(displayMode, answerMethod, true)}
                                        disabled={isScanning}
                                        className="btn-soft px-4 py-2.5 text-xs sm:text-sm font-semibold text-ink bg-[#e2d3fa]/45 hover:bg-[#e2d3fa]/75 border border-[#6741d9]/15 cursor-pointer"
                                    >
                                        <Camera className="w-4 h-4 text-[#6741d9]" />
                                        <span>Snap-It (Alt+S)</span>
                                    </button>
                                </div>

                                <div className="flex items-center gap-1.5 text-xs text-ink-muted font-medium">
                                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>Solved in 0.8s · Zero tab switches</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
