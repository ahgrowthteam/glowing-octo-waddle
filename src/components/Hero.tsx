"use client";

import React, { useState, useEffect } from 'react';
import { 
    Shield, Sparkles, RefreshCw, CheckCircle2, 
    ArrowRight, Eye, Lock, Zap, Check, AlertCircle
} from 'lucide-react';
import { FaChrome } from 'react-icons/fa';

export default function Hero() {
    const [activeTab, setActiveTab] = useState<'simulator' | 'teacherLog'>('simulator');
    const [solved, setSolved] = useState(false);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isScanning, setIsScanning] = useState(false);
    const [hudOpacity, setHudOpacity] = useState(100);
    const [shortcutNotice, setShortcutNotice] = useState<string | null>(null);

    const handleSolve = () => {
        setIsScanning(true);
        setTimeout(() => {
            setIsScanning(false);
            setSolved(true);
            setSelectedOption(1); // Mitochondria
        }, 450);
    };

    const handleReset = () => {
        setSolved(false);
        setSelectedOption(null);
        setIsScanning(false);
        setShortcutNotice(null);
    };

    // Keyboard shortcut listeners: Cmd+Shift+X (solve) and Cmd+B (stealth opacity)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const isCmdOrCtrl = e.metaKey || e.ctrlKey;
            const isShift = e.shiftKey;
            const key = e.key.toLowerCase();

            if (isCmdOrCtrl && isShift && (key === 'x' || key === 's')) {
                e.preventDefault();
                setActiveTab('simulator');
                setShortcutNotice(`Auto-solve triggered (${isCmdOrCtrl ? '⌘' : 'Ctrl'}+Shift+${key.toUpperCase()})`);
                handleSolve();
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
                    <g filter="url(#torn)">
                        {/* Periwinkle Bottom Left Scrap */}
                        <path 
                            d="M-80 520 C 60 440, 180 480, 300 430 C 420 380, 540 450, 590 570 C 640 680, 560 760, 600 850 L -80 850 Z" 
                            fill="#c4d0f8" 
                            stroke="#fff" 
                            strokeWidth="18" 
                            strokeLinejoin="round"
                        />
                        {/* Mint Bottom Right Scrap */}
                        <path 
                            d="M1520 480 C 1400 420, 1270 480, 1180 440 C 1070 390, 970 470, 930 580 C 890 690, 980 760, 940 850 L 1520 850 Z" 
                            fill="#cdeecb" 
                            stroke="#fff" 
                            strokeWidth="18" 
                            strokeLinejoin="round"
                        />
                        {/* Lilac Accent Scrap */}
                        <path 
                            d="M980 480 C 1040 430, 1120 460, 1170 435 C 1230 405, 1290 450, 1270 510 C 1250 565, 1150 550, 1070 570 C 990 590, 930 535, 980 480 Z" 
                            fill="#e2d3fa" 
                            stroke="#fff" 
                            strokeWidth="14" 
                            strokeLinejoin="round"
                        />
                        {/* Ink Dark Contrast Scrap */}
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
                    <span className="eyebrow bg-white/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-black/5 shadow-sm text-xs">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>24 STEALTH TOOLS · 100% INVISIBLE EXAM SUITE</span>
                    </span>
                </div>

                {/* Editorial Headline */}
                <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-bold tracking-tight text-ink leading-[1.03] text-center mb-6 max-w-4xl mx-auto">
                    <span>All your exam tools,</span>
                    <br />
                    <span>in one invisible box.</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg md:text-xl text-ink-muted text-center max-w-2xl mx-auto mb-9 font-normal leading-relaxed">
                    24 powerful stealth tools for Canvas, Blackboard, Moodle and D2L. Private, on-device AI vision, zero SpeedGrader logs, and so completely undetectable you’ll never take an exam with anxiety again.
                </p>

                {/* Call To Actions */}
                <div className="flex flex-wrap items-center justify-center gap-3.5 mb-6">
                    <a
                        href="/#pricing"
                        className="btn-dark px-7 py-3.5 text-base shadow-soft hover:shadow-lift"
                    >
                        <FaChrome className="w-4 h-4 text-[#bfe3f6]" />
                        <span>Get ExamGhost</span>
                        <span className="opacity-70 font-normal">· $19.99</span>
                    </a>

                    <a
                        href="#tools"
                        className="btn-soft px-6 py-3.5 text-base group"
                    >
                        <span>Explore the tools</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 text-ink" />
                    </a>
                </div>

                {/* Fine print */}
                <p className="text-center text-xs text-ink-muted mb-12 sm:mb-16">
                    Chrome, Edge & Brave · 100% On-Device · 0 SpeedGrader Logs · 14-day refund guarantee
                </p>

                {/* Shortcut Notification Banner */}
                {shortcutNotice && (
                    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 bg-ink text-white px-5 py-2.5 rounded-full text-xs font-medium shadow-2xl flex items-center gap-2 animate-bounce">
                        <Sparkles className="w-4 h-4 text-[#ffd23f]" />
                        <span>{shortcutNotice}</span>
                    </div>
                )}

                {/* Hero Stage Window with Floating Tilt Badges */}
                <div className="relative max-w-4xl mx-auto mt-6">

                    {/* Floating Card Chip 1 (Top Left): Focus Shield */}
                    <div className="hidden lg:flex absolute -top-8 -left-12 z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#c4d0f8] text-ink border border-white/80 shadow-soft -rotate-3 hover:rotate-0 transition-transform duration-300">
                        <Shield className="w-4 h-4 text-ink" />
                        <div className="text-xs font-semibold leading-tight">
                            <div>Focus Shield Active</div>
                            <div className="text-[10px] font-normal opacity-80">0 SpeedGrader Logs · Blur Masked</div>
                        </div>
                    </div>

                    {/* Floating Card Chip 2 (Top Right): Snap-It Vision */}
                    <div className="hidden lg:flex absolute -top-6 -right-12 z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#e2d3fa] text-ink border border-white/80 shadow-soft rotate-3 hover:rotate-0 transition-transform duration-300">
                        <Sparkles className="w-4 h-4 text-ink" />
                        <div className="text-xs font-semibold leading-tight">
                            <div>Snap-It Vision OCR</div>
                            <div className="text-[10px] font-normal opacity-80">0.3s · LaTeX & Diagrams Decoded</div>
                        </div>
                    </div>

                    {/* Floating Card Chip 3 (Bottom Left): Stealth DOM */}
                    <div className="hidden lg:flex absolute -bottom-6 -left-10 z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#cdeecb] text-ink border border-white/80 shadow-soft rotate-2 hover:rotate-0 transition-transform duration-300">
                        <Lock className="w-4 h-4 text-ink" />
                        <div className="text-xs font-semibold leading-tight">
                            <div>Shadow DOM Sandbox</div>
                            <div className="text-[10px] font-normal opacity-80">Zero Footprint in Page Inspector</div>
                        </div>
                    </div>

                    {/* Floating Card Chip 4 (Bottom Right): Ghost HUD Opacity */}
                    <div className="hidden lg:flex absolute -bottom-6 -right-10 z-20 items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#ffd5cc] text-ink border border-white/80 shadow-soft -rotate-2 hover:rotate-0 transition-transform duration-300">
                        <Eye className="w-4 h-4 text-ink" />
                        <div className="text-xs font-semibold leading-tight">
                            <div>Ghost HUD: {hudOpacity}%</div>
                            <div className="text-[10px] font-normal opacity-80">Press ⌘+B to toggle stealth</div>
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
                                <span className="text-xs text-ink-muted font-medium ml-2 hidden sm:inline-block">
                                    Canvas LMS — BIOL 204 Midterm Exam (Timed)
                                </span>
                            </div>

                            {/* View Switcher Tabs */}
                            <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-black/5 shadow-sm text-xs font-medium">
                                <button
                                    onClick={() => setActiveTab('simulator')}
                                    className={`px-3 py-1 rounded-full transition-all ${
                                        activeTab === 'simulator'
                                            ? 'bg-ink text-white shadow-xs'
                                            : 'text-ink-muted hover:text-ink'
                                    }`}
                                >
                                    Student View
                                </button>
                                <button
                                    onClick={() => setActiveTab('teacherLog')}
                                    className={`px-3 py-1 rounded-full transition-all flex items-center gap-1.5 ${
                                        activeTab === 'teacherLog'
                                            ? 'bg-ink text-white shadow-xs'
                                            : 'text-ink-muted hover:text-ink'
                                    }`}
                                >
                                    <span>Teacher Log</span>
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                </button>
                            </div>
                        </div>

                        {/* Window Content Body */}
                        <div className="p-6 sm:p-8">
                            {activeTab === 'simulator' ? (
                                <div>
                                    {/* Question Header & Points */}
                                    <div className="flex items-start justify-between pb-4 border-b border-black/5 mb-6">
                                        <div>
                                            <span className="text-xs font-semibold text-ink-muted uppercase tracking-wider">
                                                Question 14 of 40
                                            </span>
                                            <h3 className="font-display text-lg sm:text-xl font-bold text-ink mt-1">
                                                Which organelle is responsible for generating most of the chemical energy needed to power the cell&apos;s biochemical reactions?
                                            </h3>
                                        </div>
                                        <div className="text-right shrink-0 ml-4">
                                            <span className="text-xs bg-[#f4f1ea] px-2.5 py-1 rounded-full font-semibold text-ink">
                                                2.5 pts
                                            </span>
                                        </div>
                                    </div>

                                    {/* Multiple Choice Options */}
                                    <div className="space-y-3 mb-6">
                                        {[
                                            { id: 0, text: 'A) Golgi apparatus' },
                                            { id: 1, text: 'B) Mitochondria' },
                                            { id: 2, text: 'C) Endoplasmic reticulum' },
                                            { id: 3, text: 'D) Lysosome' }
                                        ].map((opt) => {
                                            const isCorrectTarget = opt.id === 1;
                                            const isSelected = selectedOption === opt.id;

                                            return (
                                                <div
                                                    key={opt.id}
                                                    onClick={() => setSelectedOption(opt.id)}
                                                    className={`p-3.5 sm:p-4 rounded-2xl border text-sm font-medium transition-all duration-200 cursor-pointer flex items-center justify-between ${
                                                        solved && isCorrectTarget
                                                            ? 'bg-[#cdeecb]/40 border-emerald-500/60 shadow-sm text-ink'
                                                            : isSelected
                                                            ? 'bg-black/5 border-ink text-ink'
                                                            : 'bg-white border-black/5 hover:border-black/20 text-ink'
                                                    }`}
                                                >
                                                    <span className="flex items-center gap-3">
                                                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center text-[10px] ${
                                                            isSelected || (solved && isCorrectTarget)
                                                                ? 'border-ink bg-ink text-white'
                                                                : 'border-black/20'
                                                        }`}>
                                                            {isSelected || (solved && isCorrectTarget) ? '✓' : ''}
                                                        </span>
                                                        <span>{opt.text}</span>
                                                    </span>

                                                    {solved && isCorrectTarget && (
                                                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 bg-[#cdeecb] px-2.5 py-0.5 rounded-full">
                                                            <Check className="w-3.5 h-3.5" />
                                                            <span>99.8% Match</span>
                                                        </span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* ExamGhost Live Ghost HUD Overlay Box */}
                                    <div 
                                        className="transition-opacity duration-300 rounded-2xl p-4 border border-black/5 bg-[#fbf9f4] shadow-sm mb-6"
                                        style={{ opacity: hudOpacity / 100 }}
                                    >
                                        <div className="flex items-center justify-between mb-2">
                                            <div className="flex items-center gap-2">
                                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                                <span className="text-xs font-bold text-ink">
                                                    ExamGhost Stealth HUD (⌘+B to hide)
                                                </span>
                                            </div>
                                            <span className="text-[11px] font-mono text-ink-muted">
                                                Latency: 380ms · Shadow DOM
                                            </span>
                                        </div>
                                        <p className="text-xs text-ink-secondary leading-relaxed">
                                            {solved
                                                ? "Mitochondria produce ATP through cellular respiration and oxidative phosphorylation, earning the designation as the 'powerhouse of the cell'."
                                                : "Ready. Click 'Auto-Solve' or press ⌘+Shift+X to inject high-confidence answer."}
                                        </p>
                                    </div>

                                    {/* Action Bar */}
                                    <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                                        <div className="flex items-center gap-2">
                                            <button
                                                onClick={handleSolve}
                                                disabled={isScanning || solved}
                                                className="btn-dark px-5 py-2.5 text-xs sm:text-sm"
                                            >
                                                {isScanning ? (
                                                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                                                ) : (
                                                    <Sparkles className="w-4 h-4 text-[#ffd23f]" />
                                                )}
                                                <span>{solved ? 'Solved & Selected' : 'Auto-Solve (⌘+Shift+X)'}</span>
                                            </button>

                                            {solved && (
                                                <button
                                                    onClick={handleReset}
                                                    className="btn-soft px-4 py-2.5 text-xs text-ink"
                                                >
                                                    <RefreshCw className="w-3.5 h-3.5" />
                                                    <span>Reset Demo</span>
                                                </button>
                                            )}
                                        </div>

                                        <div className="flex items-center gap-2 text-xs text-ink-muted">
                                            <Shield className="w-4 h-4 text-emerald-600" />
                                            <span>Canvas Tab Blurs Intercepted: 0</span>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                /* Teacher SpeedGrader Audit Log View */
                                <div>
                                    <div className="flex items-center justify-between pb-4 border-b border-black/5 mb-6">
                                        <div>
                                            <span className="text-xs font-semibold text-emerald-700 uppercase tracking-wider flex items-center gap-1.5">
                                                <CheckCircle2 className="w-3.5 h-3.5" />
                                                SpeedGrader Session Audit Log
                                            </span>
                                            <h3 className="font-display text-lg font-bold text-ink mt-0.5">
                                                Student: Alexander Wright (Canvas ID: #882910)
                                            </h3>
                                        </div>
                                        <span className="bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs px-3 py-1 rounded-full font-semibold">
                                            Clean Session · 0 Flags
                                        </span>
                                    </div>

                                    {/* Log Table / List */}
                                    <div className="space-y-2.5 font-mono text-xs mb-6">
                                        <div className="p-3 rounded-xl bg-white border border-black/5 flex items-center justify-between">
                                            <span className="text-ink">10:04:12 AM — Quiz session initialized</span>
                                            <span className="text-emerald-700 font-semibold">Normal</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white border border-black/5 flex items-center justify-between">
                                            <span className="text-ink">10:04:15 AM — Question 1 answered</span>
                                            <span className="text-emerald-700 font-semibold">Normal</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-white border border-black/5 flex items-center justify-between">
                                            <span className="text-ink">10:08:42 AM — Question 14 answered (Mitochondria)</span>
                                            <span className="text-emerald-700 font-semibold">Normal</span>
                                        </div>
                                        <div className="p-3 rounded-xl bg-emerald-50/60 border border-emerald-200/80 flex items-center justify-between text-emerald-900">
                                            <span className="flex items-center gap-2">
                                                <Check className="w-4 h-4 text-emerald-600" />
                                                <span>Tab blur / unfocused events detected:</span>
                                            </span>
                                            <span className="font-bold">0 events</span>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-2xl bg-[#c4d0f8]/30 border border-[#c4d0f8] text-xs text-ink">
                                        <strong>Why this matters:</strong> Other tools leave suspicious gaps or trigger Canvas&apos;s &quot;Stopped viewing the Canvas quiz checklist&quot; warning in SpeedGrader. ExamGhost blocks DOM visibility events at the native browser layer so your professor sees only continuous, uninterrupted focus.
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
