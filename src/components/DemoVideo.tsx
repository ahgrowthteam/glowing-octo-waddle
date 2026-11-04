'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
    Camera, CheckCircle2, RotateCcw, 
    Check, Crop, BookOpen, Copy, Sparkles
} from 'lucide-react';

interface SnipSample {
    id: 'chemistry' | 'math' | 'locked';
    label: string;
    dotColor: string;
    url: string;
    course: string;
    questionNum: string;
    points: string;
    prompt: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

const SNIP_SAMPLES: SnipSample[] = [
    {
        id: 'chemistry',
        label: 'Organic Chemistry',
        dotColor: 'bg-emerald-500',
        url: 'moodle.university.edu/mod/quiz/attempt.php?attempt=4819',
        course: 'Organic Chemistry II · Final Exam',
        questionNum: 'Question 23 of 40',
        points: '3.0 pts',
        prompt: 'Which reagent best converts a secondary alcohol to a ketone without causing over-oxidation?',
        options: [
            'KMnO₄ / H₂SO₄ (hot, concentrated)',
            'PCC (Pyridinium chlorochromate) in CH₂Cl₂',
            'Jones reagent (CrO₃ / H₂SO₄ in acetone)',
            'LiAlH₄ in anhydrous ether'
        ],
        correctIndex: 1,
        explanation: 'PCC is a mild oxidizing agent in anhydrous CH₂Cl₂ that selectively oxidizes secondary alcohols to ketones without C–C bond cleavage or over-oxidation.'
    },
    {
        id: 'math',
        label: 'Calculus & LaTeX',
        dotColor: 'bg-blue-500',
        url: 'canvas.university.edu/courses/MATH-202/quizzes/9182',
        course: 'Calculus II · Integration Exam',
        questionNum: 'Question 8 of 25',
        points: '4.0 pts',
        prompt: 'Evaluate the definite integral ∫₀^(π/2) cos(x) · e^(sin x) dx:',
        options: [
            'e − 1',
            'e^(π/2) − 1',
            '1',
            'e + 1'
        ],
        correctIndex: 0,
        explanation: 'Using u-substitution with u = sin(x) and du = cos(x) dx changes the limits from [0, π/2] to [0, 1], giving ∫₀¹ e^u du = e¹ − e⁰ = e − 1.'
    },
    {
        id: 'locked',
        label: 'Locked Canvas Quiz',
        dotColor: 'bg-purple-500',
        url: 'canvas.university.edu/courses/BIO-304/quizzes/5510',
        course: 'Cellular Neurobiology · Midterm',
        questionNum: 'Question 12 of 30',
        points: '2.5 pts',
        prompt: 'During the rising phase of a neuronal action potential, rapid depolarization is driven by:',
        options: [
            'Efflux of K⁺ ions through voltage-gated potassium channels',
            'Influx of Na⁺ ions through voltage-gated sodium channels',
            'Activation of the Na⁺/K⁺-ATPase pump',
            'Influx of Cl⁻ ions through GABA-A receptors'
        ],
        correctIndex: 1,
        explanation: 'Threshold depolarization opens fast voltage-gated Na⁺ channels, causing a rapid inward Na⁺ current that drives membrane potential toward +40 mV.'
    }
];

export default function DemoVideo() {
    const [activeSampleId, setActiveSampleId] = useState<'chemistry' | 'math' | 'locked'>('chemistry');
    const [snipMode, setSnipMode] = useState<'stealth' | 'explain'>('explain');
    const [isScanning, setIsScanning] = useState(false);
    const [copied, setCopied] = useState(false);

    const sample = SNIP_SAMPLES.find(s => s.id === activeSampleId) || SNIP_SAMPLES[0];

    const handleSimulateSnip = () => {
        setIsScanning(true);
        setTimeout(() => {
            setIsScanning(false);
        }, 420);
    };

    const handleCopy = () => {
        setCopied(true);
        if (typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText(sample.options[sample.correctIndex]).catch(() => {});
        }
        setTimeout(() => setCopied(false), 1800);
    };

    return (
        <section className="py-20 md:py-32 bg-cream text-ink border-b border-black/5" id="demo">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>SNIP A REGION · ALT+S HYBRID VISION + DOM</span>
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-5">
                        Screenshot &amp; Draw to Solve.<br />
                        <span className="text-ink-muted font-normal">(“Snap It”)</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                        Locked text, complex math, or diagrams? Press <kbd className="px-2 py-0.5 rounded bg-white border border-black/10 text-xs font-mono font-bold text-ink shadow-2xs">Alt + S</kbd> and drag a box over any question—ExamGhost combines Vision OCR with page text and auto-fills the answer right inside your crop.
                    </p>

                    {/* Clickable Subject Switcher Pills */}
                    <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
                        {SNIP_SAMPLES.map((item) => {
                            const active = item.id === activeSampleId;
                            return (
                                <button
                                    key={item.id}
                                    type="button"
                                    onClick={() => {
                                        setActiveSampleId(item.id);
                                        handleSimulateSnip();
                                    }}
                                    className={`px-3.5 py-1.5 rounded-full text-xs font-semibold border transition-all flex items-center gap-2 cursor-pointer ${
                                        active
                                            ? 'bg-ink text-white border-ink shadow-xs'
                                            : 'bg-white border-black/10 text-ink hover:border-black/25'
                                    }`}
                                >
                                    <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />
                                    <span>{item.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>

                {/* macOS Snip Sandbox Frame */}
                <div className="max-w-4xl mx-auto rounded-[32px] bg-white border border-black/10 shadow-lift overflow-hidden">
                    
                    {/* Window Title Bar */}
                    <div className="bg-[#f7f5f0] border-b border-black/5 px-4 sm:px-6 py-3.5 flex flex-wrap items-center justify-between gap-2">
                        <div className="flex items-center gap-2 min-w-0">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 inline-block shrink-0" />
                            <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 inline-block shrink-0" />
                            <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 inline-block shrink-0" />
                            <span className="text-xs font-medium text-ink-muted ml-2 font-mono truncate hidden sm:inline-block">
                                {sample.url}
                            </span>
                        </div>

                        <div className="flex items-center gap-2 ml-auto">
                            {/* Mode Switcher */}
                            <div className="inline-flex bg-white p-0.5 rounded-full border border-black/10 text-[11px] font-semibold">
                                <button
                                    type="button"
                                    onClick={() => setSnipMode('stealth')}
                                    className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                                        snipMode === 'stealth' ? 'bg-ink text-white' : 'text-ink-muted hover:text-ink'
                                    }`}
                                >
                                    Stealth (Alt+2)
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setSnipMode('explain')}
                                    className={`px-2.5 py-1 rounded-full transition-colors cursor-pointer ${
                                        snipMode === 'explain' ? 'bg-ink text-white' : 'text-ink-muted hover:text-ink'
                                    }`}
                                >
                                    Explain (Alt+3)
                                </button>
                            </div>

                            <button
                                type="button"
                                onClick={handleSimulateSnip}
                                className="px-3 py-1.5 rounded-full bg-ink text-white text-xs font-bold flex items-center gap-1.5 hover:bg-black/85 transition-colors cursor-pointer"
                            >
                                <Camera className="w-3.5 h-3.5 text-[#3DDC97]" />
                                <span>Simulate Alt+S</span>
                            </button>
                        </div>
                    </div>

                    {/* Crisp, High-Contrast Snip Viewport */}
                    <div className="bg-[#f1efe9] p-5 sm:p-8 relative">

                        {/* Top LMS Course Bar */}
                        <div className="flex items-center justify-between text-xs text-ink-muted mb-4 px-1">
                            <span className="font-semibold text-ink/75">{sample.course}</span>
                            <span className="font-mono bg-white/80 px-2.5 py-1 rounded-full border border-black/5 text-ink/75">
                                {sample.questionNum} · {sample.points}
                            </span>
                        </div>

                        {/* Active Snip Crop Region (#3DDC97 Dashed Selection Box) */}
                        <div className="relative rounded-2xl border-2 border-dashed border-[#10b981] bg-white p-5 sm:p-6 shadow-[0_0_0_6px_rgba(16,185,129,0.08)] transition-all">
                            
                            {/* Extension Snip Badge */}
                            <div className="absolute -top-3 left-5 bg-ink text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-xs flex items-center gap-1.5">
                                <Crop className="w-3 h-3 text-[#3DDC97]" />
                                <span>
                                    {isScanning ? 'Capturing Region + DOM Text...' : 'Snip Region Captured (Alt+S)'}
                                </span>
                            </div>

                            {/* 4 Crop Corner Handles */}
                            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#10b981] rounded-xs" />
                            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#10b981] rounded-xs" />
                            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 bg-white border-2 border-[#10b981] rounded-xs" />
                            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 bg-white border-2 border-[#10b981] rounded-xs" />

                            {/* Question Prompt */}
                            <p className="font-display text-base sm:text-lg font-bold text-ink leading-snug mb-4 mt-1">
                                {sample.prompt}
                            </p>

                            {/* Options List */}
                            <div className="space-y-2.5">
                                {sample.options.map((optText, idx) => {
                                    const isCorrect = idx === sample.correctIndex;
                                    const solvedNow = isCorrect && !isScanning;
                                    const letter = String.fromCharCode(65 + idx);

                                    return (
                                        <div
                                            key={idx}
                                            className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between gap-3 ${
                                                solvedNow
                                                    ? 'bg-[#cdeecb]/50 border-emerald-500 text-ink shadow-2xs'
                                                    : 'bg-[#faf8f5] border-black/10 text-ink/80'
                                            }`}
                                        >
                                            <div className="flex items-center gap-3 min-w-0">
                                                <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[11px] font-bold shrink-0 border ${
                                                    solvedNow
                                                        ? 'bg-ink text-white border-ink'
                                                        : 'bg-white text-ink-muted border-black/20'
                                                }`}>
                                                    {solvedNow ? '✓' : letter}
                                                </span>
                                                <span className="leading-snug">{optText}</span>
                                            </div>

                                            {solvedNow && (
                                                <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#cdeecb] text-emerald-950 shrink-0">
                                                    <Check className="w-3 h-3 stroke-[2.5]" />
                                                    <span>Auto-Filled</span>
                                                </span>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Explain Mode Slide-In Rationale Banner (Shown when Explain Alt+3 is selected) */}
                            {!isScanning && snipMode === 'explain' && (
                                <div className="mt-4 p-4 rounded-xl bg-[#0a0e14] text-white border border-[#3DDC97]/40 shadow-md">
                                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                                        <div className="flex items-center gap-2 text-xs font-bold text-[#3DDC97]">
                                            <BookOpen className="w-3.5 h-3.5 shrink-0" />
                                            <span>Explain HUD (Alt+3) · Answer {String.fromCharCode(65 + sample.correctIndex)}</span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={handleCopy}
                                            className="inline-flex items-center gap-1 text-[11px] font-semibold text-white/80 hover:text-white bg-white/10 px-2.5 py-0.5 rounded-md cursor-pointer"
                                        >
                                            <Copy className="w-3 h-3" />
                                            <span>{copied ? 'Copied!' : 'Copy'}</span>
                                        </button>
                                    </div>
                                    <p className="text-xs text-white/85 leading-relaxed">
                                        {sample.explanation}
                                    </p>
                                </div>
                            )}
                        </div>

                        {/* Clean 3-Step Status Bar */}
                        <div className="mt-5 flex flex-wrap items-center justify-between gap-3 text-xs text-ink-muted px-1">
                            <div className="flex flex-wrap items-center gap-4 font-semibold text-ink/80">
                                <span className="flex items-center gap-1.5">
                                    <span className="w-4 h-4 rounded-full bg-ink text-white text-[10px] flex items-center justify-center font-bold">1</span>
                                    <span>Press Alt+S</span>
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <span className="w-4 h-4 rounded-full bg-ink text-white text-[10px] flex items-center justify-center font-bold">2</span>
                                    <span>Drag box over question</span>
                                </span>
                                <span className="flex items-center gap-1.5 text-emerald-800">
                                    <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                    <span>Auto-filled inside crop in 0.8s</span>
                                </span>
                            </div>

                            <button
                                type="button"
                                onClick={handleSimulateSnip}
                                className="inline-flex items-center gap-1 text-xs font-semibold text-ink hover:underline cursor-pointer"
                            >
                                <RotateCcw className="w-3.5 h-3.5" />
                                <span>Replay Snip</span>
                            </button>
                        </div>

                    </div>

                    {/* Clean 3-Column Bottom Strip */}
                    <div className="bg-white p-5 border-t border-black/5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div>
                            <div className="text-xs font-bold text-ink">Hybrid Vision + DOM Fusion</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Combines Retina screenshot with page text</div>
                        </div>
                        <div className="border-y sm:border-y-0 sm:border-x border-black/5 py-2 sm:py-0">
                            <div className="text-xs font-bold text-ink">In-Box Auto-Fill</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Selects radios &amp; inputs inside your crop</div>
                        </div>
                        <div>
                            <div className="text-xs font-bold text-ink">Works on Locked &amp; Image Quizzes</div>
                            <div className="text-[11px] text-ink-muted mt-0.5">Solves diagrams, PDFs &amp; unselectable math</div>
                        </div>
                    </div>

                </div>

                {/* Sandbox Link */}
                <div className="mt-8 text-center">
                    <Link
                        href="/canvas-quiz-solver-free-demo"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-black/10 text-ink text-xs sm:text-sm font-semibold shadow-2xs hover:bg-[#faf8f4] transition-all group"
                    >
                        <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Want to test live Canvas double-click &amp; snip solving?</span>
                        <span className="font-bold underline group-hover:translate-x-0.5 transition-transform">
                            Open Interactive Sandbox →
                        </span>
                    </Link>
                </div>

            </div>
        </section>
    );
}
