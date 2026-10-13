'use client';

import React, { useState, useEffect } from 'react';
import { 
    Command, ShieldCheck, Zap, Eye, CheckCircle2, 
    Sparkles, Lock, ArrowRight, Shield, RefreshCw, Sliders, 
    Laptop, Camera, Copy, Check, MousePointer
} from 'lucide-react';

export default function GhostMode() {
    const [displayMode, setDisplayMode] = useState<'invisible' | 'stealth' | 'explain'>('stealth');
    const [answerMethod, setAnswerMethod] = useState<'autofill' | 'highlight' | 'clipboard'>('autofill');
    const [highlightDuration, setHighlightDuration] = useState(4);
    const [isExtensionActive, setIsExtensionActive] = useState(true);
    
    // Live question interaction state
    const [isSolving, setIsSolving] = useState(false);
    const [isSolved, setIsSolved] = useState(false);
    const [isHighlighted, setIsHighlighted] = useState(false);
    const [clipboardCopied, setClipboardCopied] = useState(false);
    const [liveKeyDown, setLiveKeyDown] = useState<string | null>(null);

    // Keyboard listener for ⌘+Shift+U and ⌘+Shift+S
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const isCmd = e.metaKey || e.ctrlKey;
            if (isCmd && e.shiftKey && e.key.toLowerCase() === 'u') {
                e.preventDefault();
                setIsExtensionActive(prev => !prev);
                setLiveKeyDown('⌘+Shift+U');
                setTimeout(() => setLiveKeyDown(null), 1400);
            } else if (isCmd && e.shiftKey && e.key.toLowerCase() === 's') {
                e.preventDefault();
                setLiveKeyDown('⌘+Shift+S (Snap-It)');
                setTimeout(() => setLiveKeyDown(null), 1400);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleSolveQuestion = () => {
        if (!isExtensionActive) {
            setLiveKeyDown('Extension is OFF — Press ⌘+Shift+U');
            setTimeout(() => setLiveKeyDown(null), 1500);
            return;
        }

        setIsSolving(true);
        setIsSolved(false);
        setIsHighlighted(false);
        setClipboardCopied(false);

        // Simulate solving delay based on mode
        const delay = displayMode === 'invisible' ? 200 : 700;

        setTimeout(() => {
            setIsSolving(false);
            setIsSolved(true);

            if (answerMethod === 'highlight') {
                setIsHighlighted(true);
                setTimeout(() => setIsHighlighted(false), highlightDuration * 1000);
            } else if (answerMethod === 'clipboard') {
                setClipboardCopied(true);
                setTimeout(() => setClipboardCopied(false), 2500);
            }
        }, delay);
    };

    const handleResetQuestion = () => {
        setIsSolving(false);
        setIsSolved(false);
        setIsHighlighted(false);
        setClipboardCopied(false);
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
                    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-white text-ink px-5 py-2.5 rounded-full text-xs font-bold shadow-2xl flex items-center gap-2 border border-black/10 animate-bounce">
                        <Sparkles className="w-4 h-4 text-emerald-600" />
                        <span>{liveKeyDown}</span>
                    </div>
                )}

                {/* Responsive Grid of Interactive Cream Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14">

                    {/* Card 1: 3 Display Modes */}
                    <div className="rounded-[32px] bg-[#faf8f5] text-ink p-7 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div>
                            <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-5">
                                <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider">
                                    Display Mode
                                </span>
                                <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full">
                                    {displayMode === 'stealth' ? 'Default' : displayMode === 'invisible' ? 'Screen-Share Safe' : 'Full Proof'}
                                </span>
                            </div>

                            {/* Mode Segmented Controls */}
                            <div className="grid grid-cols-3 gap-1.5 p-1.5 rounded-2xl bg-black/5 border border-black/5 mb-6">
                                {[
                                    { id: 'invisible', label: 'Invisible' },
                                    { id: 'stealth', label: 'Stealth' },
                                    { id: 'explain', label: 'Explain' }
                                ].map((m) => (
                                    <button
                                        key={m.id}
                                        onClick={() => setDisplayMode(m.id as any)}
                                        className={`py-2 rounded-xl text-xs font-bold transition-all ${
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
                            <div className="rounded-2xl bg-white p-5 border border-black/10 shadow-xs space-y-2 min-h-[140px] flex flex-col justify-center">
                                {displayMode === 'invisible' && (
                                    <>
                                        <div className="flex items-center gap-2 text-xs font-bold text-purple-700">
                                            <Lock className="w-3.5 h-3.5" />
                                            <span>Invisible Mode</span>
                                        </div>
                                        <p className="text-xs text-ink-muted leading-relaxed">
                                            Silent answer injection. The answer is applied with zero cursor, zero overlays, and zero toasts. 100% screen-share safe.
                                        </p>
                                    </>
                                )}
                                {displayMode === 'stealth' && (
                                    <>
                                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                                            <Eye className="w-3.5 h-3.5" />
                                            <span>Stealth Mode (Default)</span>
                                        </div>
                                        <p className="text-xs text-ink-muted leading-relaxed">
                                            Quiet micro-cursor while solving, then naturally applies the answer. Perfect for everyday exams and tests.
                                        </p>
                                    </>
                                )}
                                {displayMode === 'explain' && (
                                    <>
                                        <div className="flex items-center gap-2 text-xs font-bold text-blue-700">
                                            <Sparkles className="w-3.5 h-3.5" />
                                            <span>Explain Mode</span>
                                        </div>
                                        <p className="text-xs text-ink-muted leading-relaxed">
                                            Applies the answer and opens a full step-by-step reasoning drawer in a popover. Great for homework & comprehension.
                                        </p>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className="pt-5 border-t border-black/5 mt-6">
                            <h3 className="font-display text-lg font-bold text-ink mb-1">
                                How visible it is
                            </h3>
                            <p className="text-xs text-ink-muted">
                                Switch modes in 1 click from your Chrome extension popup.
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
                                <span className="text-[10px] font-bold text-blue-800 bg-blue-100 px-2 py-0.5 rounded-full">
                                    {answerMethod === 'autofill' ? 'Direct Select' : answerMethod === 'highlight' ? `${highlightDuration}s Glow` : 'Silent Copy'}
                                </span>
                            </div>

                            {/* Method Segmented Controls */}
                            <div className="grid grid-cols-3 gap-1.5 p-1.5 rounded-2xl bg-black/5 border border-black/5 mb-6">
                                {[
                                    { id: 'autofill', label: 'Auto-fill' },
                                    { id: 'highlight', label: 'Highlight' },
                                    { id: 'clipboard', label: 'Clipboard' }
                                ].map((met) => (
                                    <button
                                        key={met.id}
                                        onClick={() => setAnswerMethod(met.id as any)}
                                        className={`py-2 rounded-xl text-xs font-bold transition-all ${
                                            answerMethod === met.id
                                                ? 'bg-ink text-white shadow-xs'
                                                : 'text-ink-secondary hover:text-ink'
                                        }`}
                                    >
                                        {met.label}
                                    </button>
                                ))}
                            </div>

                            {/* Method Dynamic Description & Duration Slider */}
                            <div className="rounded-2xl bg-white p-5 border border-black/10 shadow-xs space-y-3 min-h-[140px] flex flex-col justify-center">
                                {answerMethod === 'autofill' && (
                                    <>
                                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-700">
                                            <CheckCircle2 className="w-3.5 h-3.5" />
                                            <span>Auto-fill (Default)</span>
                                        </div>
                                        <p className="text-xs text-ink-muted leading-relaxed">
                                            Fills in the correct option for you directly on the exam page. Two clicks, zero typing.
                                        </p>
                                    </>
                                )}
                                {answerMethod === 'highlight' && (
                                    <>
                                        <div className="flex items-center justify-between text-xs font-bold text-blue-700">
                                            <div className="flex items-center gap-2">
                                                <Sparkles className="w-3.5 h-3.5" />
                                                <span>Smart Highlight</span>
                                            </div>
                                            <span className="font-mono text-ink text-[11px]">{highlightDuration}s</span>
                                        </div>
                                        <p className="text-xs text-ink-muted leading-relaxed">
                                            Glows on the correct option so you click it yourself.
                                        </p>
                                        <input
                                            type="range"
                                            min="1"
                                            max="10"
                                            value={highlightDuration}
                                            onChange={(e) => setHighlightDuration(Number(e.target.value))}
                                            className="w-full accent-ink h-1.5 bg-black/10 rounded-lg cursor-pointer"
                                        />
                                    </>
                                )}
                                {answerMethod === 'clipboard' && (
                                    <>
                                        <div className="flex items-center gap-2 text-xs font-bold text-purple-700">
                                            <Copy className="w-3.5 h-3.5" />
                                            <span>Silent Clipboard</span>
                                        </div>
                                        <p className="text-xs text-ink-muted leading-relaxed">
                                            Copies the answer silently to your clipboard. Ideal for short-answer, fill-in-the-blank, and essay prompts.
                                        </p>
                                    </>
                                )}
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
                                    <span className={`w-2 h-2 rounded-full ${isExtensionActive ? 'bg-emerald-500 animate-pulse' : 'bg-red-400'}`} />
                                    <span>Live Canvas Question</span>
                                </span>
                                <span className="text-[10px] font-mono text-ink-muted">
                                    ⌘+Shift+U: {isExtensionActive ? 'ON' : 'OFF'}
                                </span>
                            </div>

                            {/* Simulated Question Card */}
                            <div className="rounded-2xl bg-white border border-black/10 p-4 space-y-3 mb-4 shadow-xs relative">
                                {isSolving && (
                                    <div className="absolute inset-0 bg-white/80 backdrop-blur-[1px] rounded-2xl flex items-center justify-center gap-2 text-xs font-bold text-emerald-800 z-10">
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
                                        const isAutoFilled = opt.correct && isSolved && answerMethod === 'autofill';
                                        const isGlow = opt.correct && isHighlighted && answerMethod === 'highlight';
                                        return (
                                            <div
                                                key={opt.key}
                                                className={`px-3 py-2 rounded-xl text-xs flex items-center justify-between transition-all duration-300 ${
                                                    isAutoFilled 
                                                        ? 'bg-emerald-500/15 border-2 border-emerald-500 text-emerald-950 font-bold'
                                                        : isGlow
                                                        ? 'bg-blue-500/15 border-2 border-blue-500 text-blue-950 font-bold animate-pulse'
                                                        : 'bg-black/5 border border-transparent text-ink/75'
                                                }`}
                                            >
                                                <div className="flex items-center gap-2">
                                                    <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${
                                                        isAutoFilled ? 'bg-emerald-500 text-black' : isGlow ? 'bg-blue-500 text-white' : 'bg-black/10 text-ink/60'
                                                    }`}>
                                                        {isAutoFilled ? '✓' : opt.key}
                                                    </span>
                                                    <span>{opt.text}</span>
                                                </div>

                                                {isAutoFilled && (
                                                    <span className="text-[10px] font-bold text-emerald-700">Auto-filled</span>
                                                )}
                                                {isGlow && (
                                                    <span className="text-[10px] font-bold text-blue-700">Click this</span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </div>

                                {clipboardCopied && (
                                    <div className="p-2 rounded-lg bg-purple-100 text-purple-900 text-[11px] font-bold text-center border border-purple-200 animate-fade-in flex items-center justify-center gap-1.5">
                                        <Check className="w-3.5 h-3.5 text-purple-700" />
                                        <span>Copied "Stack" to clipboard!</span>
                                    </div>
                                )}

                                {isSolved && displayMode === 'explain' && (
                                    <div className="p-2.5 rounded-xl bg-blue-50/80 border border-blue-200 text-[11px] text-blue-950 space-y-1 animate-fade-in">
                                        <span className="font-bold block text-blue-800">Reasoning:</span>
                                        <span>A Stack inserts and removes items from the top (Last-In, First-Out). Queues are FIFO.</span>
                                    </div>
                                )}
                            </div>

                            {/* Action Buttons */}
                            <div className="flex items-center gap-2">
                                <button
                                    onClick={handleSolveQuestion}
                                    className="flex-1 py-2.5 px-4 rounded-xl bg-ink text-white text-xs font-bold hover:bg-black transition-all flex items-center justify-center gap-2 shadow-xs"
                                >
                                    <MousePointer className="w-3.5 h-3.5 text-emerald-400" />
                                    <span>Double-Click to Solve</span>
                                </button>
                                <button
                                    onClick={handleResetQuestion}
                                    className="p-2.5 rounded-xl bg-black/5 text-ink hover:bg-black/10 transition-colors"
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
