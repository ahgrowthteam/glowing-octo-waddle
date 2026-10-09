'use client';

import React, { useState, useEffect } from 'react';
import { 
    Command, ShieldCheck, Zap, Eye, CheckCircle2, 
    Sparkles, Lock, ArrowRight, Shield, RefreshCw
} from 'lucide-react';

export default function GhostMode() {
    const [opacityVal, setOpacityVal] = useState(80);
    const [activeKey, setActiveKey] = useState<string | null>(null);
    const [inspectorMode, setInspectorMode] = useState<'normal' | 'shadow'>('normal');
    const [blurCount, setBlurCount] = useState(0);

    // Keyboard listener for real-time key reflection
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const isCmd = e.metaKey || e.ctrlKey;
            if (isCmd && e.shiftKey && e.key.toLowerCase() === 'x') {
                setActiveKey('⌘+Shift+X');
                setTimeout(() => setActiveKey(null), 1200);
            } else if (isCmd && e.key.toLowerCase() === 'b') {
                setActiveKey('⌘+B');
                setTimeout(() => setActiveKey(null), 1200);
            } else if (e.key === 'Escape') {
                setActiveKey('Esc');
                setTimeout(() => setActiveKey(null), 1200);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    return (
        <section className="py-20 md:py-32 bg-cream text-ink border-b border-black/5" id="motion">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Section Head */}
                <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-ink" />
                        <span>THE EXPERIENCE</span>
                    </p>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-5">
                        Details you feel<br />
                        before you notice.
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                        We obsessed over the micro-interactions, native shortcuts, and memory mechanics so you never feel a spike in your heart rate during high-stakes exams.
                    </p>
                </div>

                {/* 3 Interactive Experience Showcase Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 mb-14">

                    {/* Card 1: Dynamic Stealth Opacity Dial */}
                    <div className="rounded-3xl bg-white p-6 sm:p-7 border border-black/10 shadow-card flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="w-9 h-9 rounded-2xl bg-[#c4d0f8] flex items-center justify-center text-ink shadow-xs">
                                    <Eye className="w-4 h-4" />
                                </span>
                                <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[#f4f1ea] text-ink">
                                    {opacityVal}% Opacity
                                </span>
                            </div>
                            <h3 className="font-display text-xl font-bold text-ink mb-2">
                                Stealth Opacity Dial
                            </h3>
                            <p className="text-xs text-ink-muted leading-relaxed mb-6 font-normal">
                                Dial the Ghost HUD down so only your eyes can see it from your seating angle. Completely unreadable from behind.
                            </p>
                        </div>

                        {/* Interactive Slider & Live Target */}
                        <div className="space-y-4 pt-4 border-t border-black/5">
                            <input
                                type="range"
                                min="5"
                                max="100"
                                value={opacityVal}
                                onChange={(e) => setOpacityVal(Number(e.target.value))}
                                className="w-full accent-ink cursor-pointer"
                                aria-label="Stealth opacity range"
                            />

                            <div 
                                className="p-3.5 rounded-2xl bg-[#faf8f4] border border-black/5 transition-opacity duration-150"
                                style={{ opacity: opacityVal / 100 }}
                            >
                                <div className="text-[11px] font-bold text-ink mb-0.5">
                                    ✓ Target: B) Krebs Cycle (99.8%)
                                </div>
                                <div className="text-[10px] text-ink-muted leading-normal">
                                    Produces NADH and FADH2 in the mitochondrial matrix.
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Native Hotkey Resonance */}
                    <div className="rounded-3xl bg-white p-6 sm:p-7 border border-black/10 shadow-card flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="w-9 h-9 rounded-2xl bg-[#e2d3fa] flex items-center justify-center text-ink shadow-xs">
                                    <Command className="w-4 h-4" />
                                </span>
                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#cdeecb] text-emerald-900">
                                    Instant Reaction
                                </span>
                            </div>
                            <h3 className="font-display text-xl font-bold text-ink mb-2">
                                Native Hotkeys
                            </h3>
                            <p className="text-xs text-ink-muted leading-relaxed mb-6 font-normal">
                                Zero mouse movements toward suspicious corners. Press shortcuts to solve, dim, or instantly vaporize the HUD.
                            </p>
                        </div>

                        {/* Interactive Key Buttons */}
                        <div className="space-y-2 pt-4 border-t border-black/5">
                            <div className="flex gap-2">
                                <button
                                    onClick={() => {
                                        setActiveKey('⌘+Shift+X');
                                        setTimeout(() => setActiveKey(null), 1200);
                                    }}
                                    className={`flex-1 py-2 px-2.5 rounded-xl border text-xs font-medium transition-all ${
                                        activeKey === '⌘+Shift+X'
                                            ? 'bg-ink text-white border-ink scale-95 shadow-sm'
                                            : 'bg-[#faf8f4] border-black/10 hover:border-black/20 text-ink'
                                    }`}
                                >
                                    ⌘+Shift+X (Solve)
                                </button>
                                <button
                                    onClick={() => {
                                        setActiveKey('⌘+B');
                                        setTimeout(() => setActiveKey(null), 1200);
                                    }}
                                    className={`flex-1 py-2 px-2.5 rounded-xl border text-xs font-medium transition-all ${
                                        activeKey === '⌘+B'
                                            ? 'bg-ink text-white border-ink scale-95 shadow-sm'
                                            : 'bg-[#faf8f4] border-black/10 hover:border-black/20 text-ink'
                                    }`}
                                >
                                    ⌘+B (Stealth)
                                </button>
                            </div>

                            <button
                                onClick={() => {
                                    setActiveKey('Esc');
                                    setTimeout(() => setActiveKey(null), 1200);
                                }}
                                className={`w-full py-2 px-3 rounded-xl border text-xs font-medium transition-all ${
                                    activeKey === 'Esc'
                                        ? 'bg-red-600 text-white border-red-600 scale-95'
                                        : 'bg-[#faf8f4] border-black/10 hover:border-black/20 text-ink'
                                }`}
                            >
                                Esc (Emergency Kill Switch)
                            </button>

                            {activeKey && (
                                <div className="text-center text-[11px] font-semibold text-emerald-700 animate-pulse pt-1">
                                    Triggered: {activeKey}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Card 3: SpeedGrader Event Interceptor */}
                    <div className="rounded-3xl bg-white p-6 sm:p-7 border border-black/10 shadow-card flex flex-col justify-between">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="w-9 h-9 rounded-2xl bg-[#cdeecb] flex items-center justify-center text-ink shadow-xs">
                                    <ShieldCheck className="w-4 h-4" />
                                </span>
                                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                                    0 SpeedGrader Flags
                                </span>
                            </div>
                            <h3 className="font-display text-xl font-bold text-ink mb-2">
                                Focus Shield Silencer
                            </h3>
                            <p className="text-xs text-ink-muted leading-relaxed mb-6 font-normal">
                                Canvas listens for when your window loses focus. ExamGhost traps the event at the native browser layer and responds with an active focus token.
                            </p>
                        </div>

                        {/* Interactive Blur Intercept */}
                        <div className="space-y-3 pt-4 border-t border-black/5">
                            <button
                                onClick={() => setBlurCount(b => b + 1)}
                                className="btn-dark w-full py-2 text-xs justify-center shadow-xs"
                            >
                                Intercept Tab Blur Event
                            </button>

                            <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-center justify-between">
                                <span className="text-[11px] font-medium">Logged in SpeedGrader:</span>
                                <span className="font-bold font-mono">0 Flags ({blurCount} Silenced)</span>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
