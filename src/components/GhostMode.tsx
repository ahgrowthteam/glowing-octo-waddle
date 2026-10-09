'use client';

import React, { useState, useEffect } from 'react';
import { 
    Command, ShieldCheck, Zap, Eye, CheckCircle2, 
    Sparkles, Lock, ArrowRight, Shield, RefreshCw, Sliders, Laptop, Camera
} from 'lucide-react';

export default function GhostMode() {
    const [opacityVal, setOpacityVal] = useState(85);
    const [solveLatency, setSolveLatency] = useState<'instant' | 'human'>('human');
    const [speedGraderMask, setSpeedGraderMask] = useState(true);
    const [panicKillToggle, setPanicKillToggle] = useState(true);
    const [selectedTrigger, setSelectedTrigger] = useState<'hud' | 'vision' | 'panic'>('hud');
    const [liveKeyDown, setLiveKeyDown] = useState<string | null>(null);

    // SpeedGrader live audit simulator
    const [simulatedActions, setSimulatedActions] = useState<string[]>([
        '10:14:02 AM — Session started (Normal IP)',
        '10:14:18 AM — Viewed Question 1',
        '10:14:45 AM — Answered Question 1'
    ]);
    const [blurCount, setBlurCount] = useState(0);

    // Keyboard listener for real-time key reflection
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const isCmd = e.metaKey || e.ctrlKey;
            if (isCmd && e.key.toLowerCase() === 'b') {
                e.preventDefault();
                setSelectedTrigger('hud');
                setLiveKeyDown('⌘+B');
                setTimeout(() => setLiveKeyDown(null), 1200);
            } else if (isCmd && e.shiftKey && e.key.toLowerCase() === 's') {
                e.preventDefault();
                setSelectedTrigger('vision');
                setLiveKeyDown('⌘+Shift+S');
                setTimeout(() => setLiveKeyDown(null), 1200);
            } else if (e.key === 'Escape') {
                setSelectedTrigger('panic');
                setLiveKeyDown('Esc');
                setTimeout(() => setLiveKeyDown(null), 1200);
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, []);

    const handleSimulateBlur = () => {
        setBlurCount(prev => prev + 1);
        const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
        setSimulatedActions(prev => [
            ...prev.slice(-3),
            `${time} — Focus loss blocked (0 SpeedGrader flags sent)`
        ]);
    };

    return (
        <section className="py-24 md:py-36 bg-[#0f0f12] text-white border-b border-white/5 relative overflow-hidden" id="motion">
            
            {/* Ambient Background Glow */}
            <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">

                {/* Section Header (OneMacApp The Experience Style) */}
                <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
                    <p className="eyebrow justify-center mb-3 text-white/50">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        <span>THE EXPERIENCE</span>
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white leading-[1.06] mb-5">
                        Details you feel<br />
                        before you notice.
                    </h2>
                    <p className="text-base sm:text-lg text-white/60 leading-relaxed font-normal">
                        ExamGhost is a companion you’ll actually enjoy using. Switch a setting, choose an opacity, pick your hotkey and watch how every step responds to you. Give it a try below.
                    </p>
                </div>

                {/* Keypress Toast */}
                {liveKeyDown && (
                    <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-50 bg-white text-ink px-5 py-2.5 rounded-full text-xs font-bold shadow-2xl flex items-center gap-2 border border-black/10 animate-bounce">
                        <Sparkles className="w-4 h-4 text-amber-500" />
                        <span>Hardware Resonance: Key {liveKeyDown} Triggered</span>
                    </div>
                )}

                {/* Responsive Grid of Interactive Cream Cards (Matching OneMacApp Screenshot 2) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 mb-14">

                    {/* Card 1: Tune Every Exam (macOS Settings Panel) */}
                    <div className="rounded-[32px] bg-[#faf8f5] text-ink p-7 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div>
                            {/* Inner macOS Settings Box */}
                            <div className="rounded-2xl bg-white p-5 border border-black/10 shadow-xs space-y-4 mb-6">
                                
                                {/* Row 1: Shield Mode */}
                                <div className="flex items-center justify-between text-xs font-semibold pb-3 border-b border-black/5">
                                    <span className="text-ink-secondary">Shield Mode</span>
                                    <span className="font-mono text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full font-bold">Shadow DOM</span>
                                </div>

                                {/* Row 2: Opacity Slider */}
                                <div className="space-y-1.5 pb-3 border-b border-black/5">
                                    <div className="flex items-center justify-between text-xs font-semibold">
                                        <span className="text-ink-secondary">Stealth Opacity</span>
                                        <span className="font-mono text-ink font-bold">{opacityVal}%</span>
                                    </div>
                                    <input
                                        type="range"
                                        min="10"
                                        max="100"
                                        value={opacityVal}
                                        onChange={(e) => setOpacityVal(Number(e.target.value))}
                                        className="w-full accent-ink h-1.5 bg-black/10 rounded-lg cursor-pointer"
                                    />
                                </div>

                                {/* Row 3: Solve Latency Toggle */}
                                <div className="flex items-center justify-between text-xs font-semibold pb-3 border-b border-black/5">
                                    <span className="text-ink-secondary">Solve Delay</span>
                                    <div className="flex items-center gap-1 bg-black/5 p-1 rounded-full text-[11px]">
                                        <button
                                            onClick={() => setSolveLatency('instant')}
                                            className={`px-2 py-0.5 rounded-full transition-all ${
                                                solveLatency === 'instant' ? 'bg-ink text-white shadow-xs' : 'text-ink-muted'
                                            }`}
                                        >
                                            0.3s
                                        </button>
                                        <button
                                            onClick={() => setSolveLatency('human')}
                                            className={`px-2 py-0.5 rounded-full transition-all ${
                                                solveLatency === 'human' ? 'bg-ink text-white shadow-xs' : 'text-ink-muted'
                                            }`}
                                        >
                                            1.8s
                                        </button>
                                    </div>
                                </div>

                                {/* Row 4: SpeedGrader Mask Toggle */}
                                <div className="flex items-center justify-between text-xs font-semibold pb-3 border-b border-black/5">
                                    <span className="text-ink-secondary">SpeedGrader Mask</span>
                                    <button
                                        onClick={() => setSpeedGraderMask(!speedGraderMask)}
                                        className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                                            speedGraderMask ? 'bg-ink' : 'bg-black/20'
                                        }`}
                                    >
                                        <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                                            speedGraderMask ? 'translate-x-4' : 'translate-x-0'
                                        }`} />
                                    </button>
                                </div>

                                {/* Row 5: Panic RAM Purge Toggle */}
                                <div className="flex items-center justify-between text-xs font-semibold">
                                    <span className="text-ink-secondary">Panic RAM Purge</span>
                                    <button
                                        onClick={() => setPanicKillToggle(!panicKillToggle)}
                                        className={`w-9 h-5 rounded-full p-0.5 transition-colors ${
                                            panicKillToggle ? 'bg-ink' : 'bg-black/20'
                                        }`}
                                    >
                                        <div className={`w-4 h-4 rounded-full bg-white transition-transform ${
                                            panicKillToggle ? 'translate-x-4' : 'translate-x-0'
                                        }`} />
                                    </button>
                                </div>

                            </div>
                        </div>

                        {/* Card Caption */}
                        <div>
                            <h3 className="font-display text-xl font-bold text-ink mb-1">
                                Tune every exam
                            </h3>
                            <p className="text-xs text-ink-muted">
                                Customize opacity, response delay, and stealth hooks per test.
                            </p>
                        </div>
                    </div>

                    {/* Card 2: Pick a Trigger, See the Result (Matching OneMacApp Format Picker) */}
                    <div className="rounded-[32px] bg-[#faf8f5] text-ink p-7 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1">
                        <div>
                            {/* Inner Trigger Pill Selector */}
                            <div className="text-center mb-6">
                                <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider block mb-3">
                                    Trigger Hotkey
                                </span>
                                <div className="inline-flex items-center gap-1.5 p-1.5 rounded-full bg-black/5 border border-black/5">
                                    <button
                                        onClick={() => setSelectedTrigger('hud')}
                                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                                            selectedTrigger === 'hud'
                                                ? 'bg-ink text-white shadow-xs'
                                                : 'text-ink-secondary hover:text-ink'
                                        }`}
                                    >
                                        ⌘ + B
                                    </button>
                                    <button
                                        onClick={() => setSelectedTrigger('vision')}
                                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                                            selectedTrigger === 'vision'
                                                ? 'bg-ink text-white shadow-xs'
                                                : 'text-ink-secondary hover:text-ink'
                                        }`}
                                    >
                                        ⌘ + Shift + S
                                    </button>
                                    <button
                                        onClick={() => setSelectedTrigger('panic')}
                                        className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                                            selectedTrigger === 'panic'
                                                ? 'bg-ink text-white shadow-xs'
                                                : 'text-ink-secondary hover:text-ink'
                                        }`}
                                    >
                                        Esc
                                    </button>
                                </div>
                            </div>

                            {/* Dynamic Result Chip (Morphs based on selection) */}
                            <div className="min-h-[140px] flex items-center justify-center p-4">
                                {selectedTrigger === 'hud' && (
                                    <div 
                                        className="rounded-2xl p-4 border border-black/10 bg-white shadow-lift flex items-center gap-3 transition-opacity duration-200"
                                        style={{ opacity: opacityVal / 100 }}
                                    >
                                        <div className="w-8 h-8 rounded-xl bg-[#c4d0f8] flex items-center justify-center text-ink shrink-0">
                                            <Eye className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-ink">Ghost HUD Overlay</div>
                                            <div className="text-[11px] text-ink-muted">Opacity: {opacityVal}% · 100% Shadow DOM</div>
                                        </div>
                                    </div>
                                )}

                                {selectedTrigger === 'vision' && (
                                    <div className="rounded-2xl p-4 border border-blue-200 bg-blue-50/80 shadow-lift flex items-center gap-3 animate-pulse">
                                        <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
                                            <Camera className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-blue-950">Snap-It Vision OCR</div>
                                            <div className="text-[11px] text-blue-800">Formula Decoded in 0.31s</div>
                                        </div>
                                    </div>
                                )}

                                {selectedTrigger === 'panic' && (
                                    <div className="rounded-2xl p-4 border border-emerald-200 bg-emerald-50/90 shadow-lift flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                                            <Zap className="w-4 h-4" />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-emerald-950">Panic Purge Complete</div>
                                            <div className="text-[11px] text-emerald-800">RAM flushed in 8ms · DOM clean</div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Card Caption */}
                        <div>
                            <h3 className="font-display text-xl font-bold text-ink mb-1">
                                Pick a trigger, see the response
                            </h3>
                            <p className="text-xs text-ink-muted">
                                Test shortcut resonance or press physical keys on your keyboard.
                            </p>
                        </div>
                    </div>

                    {/* Card 3: SpeedGrader Event Silencer Test */}
                    <div className="rounded-[32px] bg-[#faf8f5] text-ink p-7 sm:p-8 flex flex-col justify-between shadow-2xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 lg:col-span-1">
                        <div>
                            <div className="flex items-center justify-between mb-4">
                                <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider">
                                    Teacher Log Monitor
                                </span>
                                <span className="text-[11px] font-semibold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                                    0 Alert Flags
                                </span>
                            </div>

                            {/* Simulated Feed Box */}
                            <div className="rounded-2xl bg-white border border-black/10 p-3.5 space-y-2 font-mono text-[11px] mb-5 max-h-[140px] overflow-y-auto">
                                {simulatedActions.map((action, aIdx) => (
                                    <div key={aIdx} className="text-ink-secondary truncate">
                                        {action}
                                    </div>
                                ))}
                            </div>

                            {/* Interactivity Button */}
                            <button
                                onClick={handleSimulateBlur}
                                className="w-full py-2.5 px-4 rounded-xl bg-ink text-white text-xs font-semibold hover:bg-black/90 transition-all flex items-center justify-center gap-2 mb-4"
                            >
                                <RefreshCw className="w-3.5 h-3.5" />
                                <span>Simulate Tab Switch / Blur</span>
                            </button>
                        </div>

                        {/* Card Caption */}
                        <div>
                            <h3 className="font-display text-xl font-bold text-ink mb-1">
                                Zero SpeedGrader logs
                            </h3>
                            <p className="text-xs text-ink-muted">
                                Verified across 40+ simulated proctored Canvas sessions.
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
