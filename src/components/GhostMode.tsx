'use client';

import React, { useState, useEffect } from 'react';
import { 
    Eye, CheckCircle2, Sparkles, Lock, 
    RefreshCw, Copy, Check, MousePointer
} from 'lucide-react';

export default function GhostMode() {
    const [displayMode, setDisplayMode] = useState<'invisible' | 'stealth' | 'explain'>('stealth');
    const [answerMethod, setAnswerMethod] = useState<'autofill' | 'highlight' | 'clipboard'>('autofill');
    
    // Live question state — starts solved so the live preview immediately reflects the active Mode & Method
    const [isSolving, setIsSolving] = useState(false);
    const [isSolved, setIsSolved] = useState(true);
    const [liveKeyDown, setLiveKeyDown] = useState<string | null>(null);

    // Keyboard listener for Alt+1, Alt+2, Alt+3
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (!e.altKey) return;
            if (e.key === '1') {
                e.preventDefault();
                setDisplayMode('invisible');
                setIsSolved(true);
                setLiveKeyDown('Alt+1 · Invisible Mode');
                setTimeout(() => setLiveKeyDown(null), 1400);
            } else if (e.key === '2') {
                e.preventDefault();
                setDisplayMode('stealth');
                setIsSolved(true);
                setLiveKeyDown('Alt+2 · Stealth Mode');
                setTimeout(() => setLiveKeyDown(null), 1400);
            } else if (e.key === '3') {
                e.preventDefault();
                setDisplayMode('explain');
                setIsSolved(true);
                setLiveKeyDown('Alt+3 · Explain Mode');
                setTimeout(() => setLiveKeyDown(null), 1400);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleSelectMode = (mode: 'invisible' | 'stealth' | 'explain') => {
        setDisplayMode(mode);
        setIsSolved(true);
    };

    const handleSelectMethod = (method: 'autofill' | 'highlight' | 'clipboard') => {
        setAnswerMethod(method);
        setIsSolved(true);
        if (method === 'clipboard' && typeof navigator !== 'undefined' && navigator.clipboard) {
            navigator.clipboard.writeText('Stack').catch(() => {});
        }
    };

    const handleSolveQuestion = () => {
        setIsSolving(true);
        setIsSolved(false);

        const delay = displayMode === 'invisible' ? 160 : 320;

        setTimeout(() => {
            setIsSolving(false);
            setIsSolved(true);
        }, delay);
    };

    const handleResetQuestion = () => {
        setIsSolving(false);
        setIsSolved(false);
    };

    return (
        <section className="py-24 md:py-36 bg-[#0f0f12] text-white border-b border-white/5 relative overflow-hidden" id="motion">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
                    <p className="eyebrow justify-center mb-3 !text-emerald-400 font-bold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span className="text-emerald-400 font-bold">MODES &amp; METHODS PLAYGROUND</span>
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.06] mb-5">
                        Choose your mode.<br />
                        Pick your landing.
                    </h2>
                    <p className="text-base sm:text-lg text-white/60 leading-relaxed font-normal">
                        ExamGhost adapts to your specific testing scenario. Configure your display visibility, choose how the answer lands on the page, and test it in real time below.
                    </p>
                </div>

                {/* Keypress Toast */}
                {liveKeyDown && (
                    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-white text-ink px-5 py-2.5 rounded-full text-xs font-bold shadow-2xl flex items-center gap-2 border border-black/10">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>{liveKeyDown}</span>
                    </div>
                )}

                {/* Responsive Grid of 3 Interactive Cream Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14 items-stretch">

                    {/* Card 1: 3 Display Modes */}
                    <div className="rounded-[32px] bg-[#faf8f5] text-ink p-7 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div>
                            <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-5">
                                <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider">
                                    Display Mode
                                </span>
                                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                                    {displayMode === 'stealth' ? 'Default · Alt+2' : displayMode === 'invisible' ? 'Zero Trace · Alt+1' : 'Full Proof · Alt+3'}
                                </span>
                            </div>

                            {/* Mode Segmented Controls */}
                            <div className="grid grid-cols-3 gap-1.5 p-1.5 rounded-2xl bg-black/5 border border-black/5 mb-5">
                                {[
                                    { id: 'invisible', label: 'Invisible' },
                                    { id: 'stealth', label: 'Stealth' },
                                    { id: 'explain', label: 'Explain' }
                                ].map((m) => (
                                    <button
                                        key={m.id}
                                        type="button"
                                        onClick={() => handleSelectMode(m.id as 'invisible' | 'stealth' | 'explain')}
                                        className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                            displayMode === m.id
                                                ? 'bg-ink text-white shadow-xs'
                                                : 'text-ink-secondary hover:text-ink'
                                        }`}
                                    >
                                        {m.label}
                                    </button>
                                ))}
                            </div>

                            {/* Mode Dynamic Description Box */}
                            <div className="rounded-2xl bg-white p-5 border border-black/10 shadow-xs space-y-2.5">
                                {displayMode === 'invisible' && (
                                    <>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-xs font-bold text-purple-700">
                                                <Lock className="w-3.5 h-3.5" />
                                                <span>Invisible Mode</span>
                                            </div>
                                            <kbd className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/5 text-ink">Alt + 1</kbd>
                                        </div>
                                        <p className="text-xs text-ink-muted leading-relaxed">
                                            Silent answer selection + clipboard copy with zero colored outlines, zero banners, and zero toasts. 100% screen-share safe.
                                        </p>
                                    </>
                                )}
                                {displayMode === 'stealth' && (
                                    <>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                                                <Eye className="w-3.5 h-3.5" />
                                                <span>Stealth Mode (Default)</span>
                                            </div>
                                            <kbd className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/5 text-ink">Alt + 2</kbd>
                                        </div>
                                        <p className="text-xs text-ink-muted leading-relaxed">
                                            Auto-fills answers &amp; inputs inline or places a subtle ✓ tick mark beside the right option. Built for everyday quizzes.
                                        </p>
                                    </>
                                )}
                                {displayMode === 'explain' && (
                                    <>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-xs font-bold text-blue-700">
                                                <Sparkles className="w-3.5 h-3.5" />
                                                <span>Explain Mode</span>
                                            </div>
                                            <kbd className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/5 text-ink">Alt + 3</kbd>
                                        </div>
                                        <p className="text-xs text-ink-muted leading-relaxed">
                                            Selects the correct choice and reveals a step-by-step factual rationale card for study &amp; homework review.
                                        </p>
                                    </>
                                )}
                            </div>

                            {/* Quick Mode Pills */}
                            <div className="flex flex-wrap items-center gap-1.5 mt-4">
                                <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/[0.04] text-ink/75">
                                    ✓ Instant cross-tab sync
                                </span>
                                <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/[0.04] text-ink/75">
                                    ✓ Works with Alt+S Snip
                                </span>
                            </div>
                        </div>

                        <div className="pt-5 border-t border-black/5 mt-6">
                            <h3 className="font-display text-lg font-bold text-ink mb-1">
                                How visible it is
                            </h3>
                            <p className="text-xs text-ink-muted">
                                Switch modes via <code className="font-mono font-semibold text-ink">Alt+1</code>, <code className="font-mono font-semibold text-ink">Alt+2</code>, <code className="font-mono font-semibold text-ink">Alt+3</code> or in 1 click from the popup.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: 3 Answer Delivery Methods */}
                    <div className="rounded-[32px] bg-[#faf8f5] text-ink p-7 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div>
                            <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-5">
                                <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider">
                                    Answer Method
                                </span>
                                <span className="text-[10px] font-bold text-blue-800 bg-blue-100 px-2.5 py-0.5 rounded-full">
                                    {answerMethod === 'autofill' ? 'Direct Select' : answerMethod === 'highlight' ? 'Subtle ✓ Hint' : 'Silent Copy'}
                                </span>
                            </div>

                            {/* Method Segmented Controls */}
                            <div className="grid grid-cols-3 gap-1.5 p-1.5 rounded-2xl bg-black/5 border border-black/5 mb-5">
                                {[
                                    { id: 'autofill', label: 'Auto-fill' },
                                    { id: 'highlight', label: 'Highlight' },
                                    { id: 'clipboard', label: 'Clipboard' }
                                ].map((met) => (
                                    <button
                                        key={met.id}
                                        type="button"
                                        onClick={() => handleSelectMethod(met.id as 'autofill' | 'highlight' | 'clipboard')}
                                        className={`py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                            answerMethod === met.id
                                                ? 'bg-ink text-white shadow-xs'
                                                : 'text-ink-secondary hover:text-ink'
                                        }`}
                                    >
                                        {met.label}
                                    </button>
                                ))}
                            </div>

                            {/* Method Dynamic Description */}
                            <div className="rounded-2xl bg-white p-5 border border-black/10 shadow-xs space-y-2.5">
                                {answerMethod === 'autofill' && (
                                    <>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                                                <CheckCircle2 className="w-3.5 h-3.5" />
                                                <span>Auto-fill (Default)</span>
                                            </div>
                                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/5 text-ink">1-Click Fill</span>
                                        </div>
                                        <p className="text-xs text-ink-muted leading-relaxed">
                                            Selects the matching radio, checkbox, or dropdown and fills short-answer text inputs directly on the page.
                                        </p>
                                    </>
                                )}
                                {answerMethod === 'highlight' && (
                                    <>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-xs font-bold text-blue-700">
                                                <Sparkles className="w-3.5 h-3.5" />
                                                <span>Highlight Hint Only</span>
                                            </div>
                                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/5 text-ink">Subtle ✓ Tick</span>
                                        </div>
                                        <p className="text-xs text-ink-muted leading-relaxed">
                                            Marks the right option with a subtle indicator so you can click the radio button yourself at your own pace.
                                        </p>
                                    </>
                                )}
                                {answerMethod === 'clipboard' && (
                                    <>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2 text-xs font-bold text-purple-700">
                                                <Copy className="w-3.5 h-3.5" />
                                                <span>Silent Clipboard</span>
                                            </div>
                                            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-black/5 text-ink">⌘+V Ready</span>
                                        </div>
                                        <p className="text-xs text-ink-muted leading-relaxed">
                                            Silently copies the exact answer text to your clipboard. Ideal for fill-in-the-blank and short-answer prompts.
                                        </p>
                                    </>
                                )}
                            </div>

                            {/* Supported Formats Pills */}
                            <div className="flex flex-wrap items-center gap-1.5 mt-4">
                                <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/[0.04] text-ink/75">
                                    ✓ Radios &amp; Multi-Select
                                </span>
                                <span className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-black/[0.04] text-ink/75">
                                    ✓ Dropdowns &amp; Text Inputs
                                </span>
                            </div>
                        </div>

                        <div className="pt-5 border-t border-black/5 mt-6">
                            <h3 className="font-display text-lg font-bold text-ink mb-1">
                                How it lands
                            </h3>
                            <p className="text-xs text-ink-muted">
                                Pick what fits the specific quiz or LMS platform.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: Live Interactive Test Sandbox */}
                    <div className="rounded-[32px] bg-[#faf8f5] text-ink p-7 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                        <div>
                            <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-4">
                                <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>Live Canvas Question</span>
                                </span>
                                <span className="text-[10px] font-mono font-semibold text-ink-muted bg-black/5 px-2 py-0.5 rounded-full">
                                    CS-201 · 2.0 pts
                                </span>
                            </div>

                            {/* Simulated Question Card */}
                            <div 
                                onDoubleClick={handleSolveQuestion}
                                className="rounded-2xl bg-white border border-black/10 p-4 space-y-2.5 mb-4 shadow-xs relative select-none cursor-pointer"
                                title="Double-click to solve"
                            >
                                {isSolving && (
                                    <div className="absolute inset-0 bg-white/85 backdrop-blur-[1px] rounded-2xl flex items-center justify-center gap-2 text-xs font-bold text-emerald-800 z-10">
                                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                        <span>Solving question...</span>
                                    </div>
                                )}

                                <p className="text-xs font-bold text-ink leading-snug">
                                    Which data structure operates on LIFO (Last In, First Out) ordering?
                                </p>

                                <div className="space-y-1.5">
                                    {[
                                        { key: 'A', text: 'Queue', correct: false },
                                        { key: 'B', text: 'Linked List', correct: false },
                                        { key: 'C', text: 'Stack', correct: true },
                                        { key: 'D', text: 'Binary Tree', correct: false }
                                    ].map((opt) => {
                                        const isTarget = opt.correct && isSolved;
                                        const isAutoFilled = isTarget && answerMethod === 'autofill';
                                        const isHint = isTarget && answerMethod === 'highlight';
                                        const isInvisible = displayMode === 'invisible';

                                        return (
                                            <div
                                                key={opt.key}
                                                className={`px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all duration-200 ${
                                                    isAutoFilled && !isInvisible
                                                        ? 'bg-emerald-500/15 border-2 border-emerald-500 text-emerald-950 font-bold'
                                                        : isHint && !isInvisible
                                                        ? 'bg-blue-500/10 border-2 border-blue-400 text-blue-950 font-bold'
                                                        : isAutoFilled && isInvisible
                                                        ? 'bg-black/[0.04] border border-ink/40 text-ink font-semibold'
                                                        : 'bg-black/5 border border-transparent text-ink/75'
                                                }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${
                                                        isAutoFilled && !isInvisible
                                                            ? 'bg-emerald-500 text-black'
                                                            : isAutoFilled && isInvisible
                                                            ? 'bg-ink text-white'
                                                            : isHint
                                                            ? 'bg-blue-500 text-white'
                                                            : 'bg-black/10 text-ink/60'
                                                    }`}>
                                                        {isAutoFilled || isHint ? '✓' : opt.key}
                                                    </span>
                                                    <span>{opt.text}</span>
                                                </div>

                                                {isAutoFilled && !isInvisible && (
                                                    <span className="text-[10px] font-bold text-emerald-700">Auto-filled</span>
                                                )}
                                                {isAutoFilled && isInvisible && (
                                                    <span className="text-[10px] font-mono text-ink-muted">0 traces</span>
                                                )}
                                                {isHint && (
                                                    <span className="text-[10px] font-bold text-blue-700">✓ Hint</span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {isSolved && answerMethod === 'clipboard' && (
                                    <div className="p-2 rounded-lg bg-purple-100 text-purple-900 text-[11px] font-bold text-center border border-purple-200 flex items-center justify-center gap-1.5">
                                        <Check className="w-3.5 h-3.5 text-purple-700" />
                                        <span>Copied &ldquo;Stack&rdquo; to clipboard (⌘+V)</span>
                                    </div>
                                )}

                                {isSolved && displayMode === 'explain' && (
                                    <div className="p-2.5 rounded-xl bg-blue-50/90 border border-blue-200 text-[11px] text-blue-950 leading-snug">
                                        <span className="font-bold text-blue-800 mr-1">Explain (Alt+3):</span>
                                        <span>A Stack inserts and removes items from the top (LIFO). Queues use FIFO.</span>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={handleSolveQuestion}
                                    className="flex-1 py-2.5 px-4 rounded-xl bg-ink text-white text-xs font-bold hover:bg-black transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                                >
                                    <MousePointer className="w-3.5 h-3.5 text-emerald-400" />
                                    <span>Double-Click to Solve</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={handleResetQuestion}
                                    className="p-2.5 rounded-xl bg-black/5 text-ink hover:bg-black/10 transition-colors cursor-pointer"
                                    title="Reset question"
                                >
                                    <RefreshCw className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        </div>

                        <div className="pt-4 border-t border-black/5 mt-4">
                            <h3 className="font-display text-lg font-bold text-ink mb-1">
                                Test in real-time
                            </h3>
                            <p className="text-xs text-ink-muted">
                                Matches your selected Mode and Answer Method.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
