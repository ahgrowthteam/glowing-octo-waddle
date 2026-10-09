'use client';

import React, { useState, useEffect } from 'react';
import { 
    Play, Pause, Volume2, VolumeX, Maximize2, RotateCcw, 
    Sparkles, ShieldCheck, CheckCircle2, Clock, Eye
} from 'lucide-react';

export default function DemoVideo() {
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [progress, setProgress] = useState(42);
    const [playbackSpeed, setPlaybackSpeed] = useState<number>(1);
    const [currentStep, setCurrentStep] = useState(1);

    // Auto-advance simulation loop when playing
    useEffect(() => {
        if (!isPlaying) return;
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) return 0;
                return prev + 1;
            });
        }, 300 / playbackSpeed);

        return () => clearInterval(interval);
    }, [isPlaying, playbackSpeed]);

    // Map progress percentage to demo steps
    useEffect(() => {
        if (progress < 25) setCurrentStep(1); // Reading question
        else if (progress < 55) setCurrentStep(2); // Snap-It Vision OCR & reasoning
        else if (progress < 85) setCurrentStep(3); // Silent Shadow DOM solve
        else setCurrentStep(4); // SpeedGrader clean audit verified
    }, [progress]);

    return (
        <section className="py-20 md:py-32 bg-cream text-ink border-b border-black/5" id="demo">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>LIVE DEMONSTRATION</span>
                    </p>
                    <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-5">
                        See 100% invisible exam solving in real time.
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                        Watch how ExamGhost bypasses timed Canvas Quizzes, answers multi-step questions with zero SpeedGrader alert logs, and stays completely undetectable.
                    </p>
                </div>

                {/* macOS Native Video Player Frame */}
                <div className="max-w-4xl mx-auto rounded-[32px] sm:rounded-[40px] bg-white border border-black/10 shadow-lift overflow-hidden">
                    
                    {/* Window Title Bar */}
                    <div className="bg-[#f7f5f0] border-b border-black/5 px-4 sm:px-6 py-3.5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 inline-block" />
                            <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 inline-block" />
                            <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 inline-block" />
                            <span className="text-xs font-semibold text-ink-muted ml-2 truncate">
                                ExamGhost_Canvas_Midterm_LiveDemo_1080p.mp4
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-[10px] font-bold text-ink-secondary bg-black/5 px-2 py-0.5 rounded-full">
                                1080p · 60fps
                            </span>
                            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                                0 Flags
                            </span>
                        </div>
                    </div>

                    {/* 
                        NOTE FOR USER: 
                        To replace this interactive simulator with a real video file, simply drop your video file into /public 
                        and replace this container with:
                        <video src="/demo.mp4" controls autoPlay muted loop playsInline className="w-full aspect-video object-cover" />
                        Or for a YouTube/Loom embed:
                        <iframe src="https://www.youtube-nocookie.com/embed/YOUR_VIDEO_ID" className="w-full aspect-video border-0" allowFullScreen />
                    */}

                    {/* Interactive Video Playback Screen */}
                    <div className="relative aspect-video bg-[#111319] text-white overflow-hidden flex flex-col justify-between p-4 sm:p-8">
                        
                        {/* Simulated Canvas Quiz Top Bar */}
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                            <div className="flex items-center gap-2 text-xs text-white/70">
                                <span className="font-semibold text-white">BIOL 204: Molecular Biology Midterm</span>
                                <span>·</span>
                                <span className="text-amber-400 font-mono">Time Left: 38:14</span>
                            </div>
                            <div className="flex items-center gap-2 text-xs">
                                <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30 flex items-center gap-1 text-[11px]">
                                    <ShieldCheck className="w-3 h-3" />
                                    Focus Shield: 100% Active
                                </span>
                            </div>
                        </div>

                        {/* Center Stage: Simulated Question & Ghost HUD Overlay */}
                        <div className="my-auto max-w-2xl mx-auto w-full">
                            <div className="text-xs text-white/50 mb-1.5 font-mono">QUESTION 14 OF 40 (2.5 PTS)</div>
                            <h4 className="text-base sm:text-xl font-bold text-white mb-5 leading-snug">
                                Which organelle is responsible for generating most of the chemical energy needed to power the cell's biochemical reactions?
                            </h4>

                            {/* Multiple Choice Options with Ghost Auto-Solve */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                {[
                                    { key: 'A', text: 'Ribosome', desc: 'Protein synthesis' },
                                    { key: 'B', text: 'Endoplasmic Reticulum', desc: 'Lipid transport' },
                                    { key: 'C', text: 'Mitochondria (ATP Synthase)', desc: 'Correct · 99.8% Confidence', correct: true },
                                    { key: 'D', text: 'Golgi Apparatus', desc: 'Macromolecule sorting' }
                                ].map((opt) => {
                                    const isSelected = opt.correct && currentStep >= 3;
                                    return (
                                        <div 
                                            key={opt.key}
                                            className={`p-3 rounded-xl border transition-all duration-300 flex items-center justify-between ${
                                                isSelected
                                                    ? 'bg-emerald-500/20 border-emerald-500/80 text-white shadow-lg shadow-emerald-900/30'
                                                    : 'bg-white/5 border-white/10 text-white/80'
                                            }`}
                                        >
                                            <div className="flex items-center gap-2.5">
                                                <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-bold ${
                                                    isSelected ? 'bg-emerald-500 text-black' : 'bg-white/10 text-white/70'
                                                }`}>
                                                    {opt.key}
                                                </span>
                                                <span className="text-xs font-medium">{opt.text}</span>
                                            </div>
                                            {isSelected && (
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                                            )}
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Step Status Pill in Video */}
                            <div className="mt-4 flex items-center justify-between text-[11px] text-white/60 bg-black/40 backdrop-blur-md rounded-lg px-3 py-1.5 border border-white/10">
                                <span className="flex items-center gap-1.5">
                                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                                    {currentStep === 1 && "Phase 1: Scanning Canvas question in-memory..."}
                                    {currentStep === 2 && "Phase 2: Decoded with on-device AI reasoning in 0.3s"}
                                    {currentStep === 3 && "Phase 3: Answer highlighted in Shadow DOM (0 blur flags)"}
                                    {currentStep === 4 && "Phase 4: Verified clean SpeedGrader timeline. Ready for next question."}
                                </span>
                                <span className="font-mono text-white/40">00:{progress < 10 ? `0${progress}` : progress} / 01:18</span>
                            </div>
                        </div>

                        {/* Video Controls Bar */}
                        <div className="space-y-2 pt-3 border-t border-white/10">
                            {/* Scrubber Timeline */}
                            <div className="relative w-full h-1.5 bg-white/20 rounded-full cursor-pointer overflow-hidden group">
                                <div 
                                    className="h-full bg-white transition-all duration-150 rounded-full"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>

                            {/* Buttons */}
                            <div className="flex items-center justify-between text-xs text-white/70">
                                <div className="flex items-center gap-3">
                                    <button 
                                        onClick={() => setIsPlaying(!isPlaying)}
                                        className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center hover:bg-white/90 transition-transform active:scale-95"
                                        aria-label={isPlaying ? "Pause video" : "Play video"}
                                    >
                                        {isPlaying ? <Pause className="w-3.5 h-3.5 fill-current" /> : <Play className="w-3.5 h-3.5 fill-current ml-0.5" />}
                                    </button>

                                    <button 
                                        onClick={() => setProgress(0)}
                                        className="hover:text-white transition-colors"
                                        title="Restart"
                                    >
                                        <RotateCcw className="w-3.5 h-3.5" />
                                    </button>

                                    <button 
                                        onClick={() => setIsMuted(!isMuted)}
                                        className="hover:text-white transition-colors"
                                        title={isMuted ? "Unmute" : "Mute"}
                                    >
                                        {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                                    </button>

                                    <span className="font-mono text-[11px]">
                                        00:{progress < 10 ? `0${progress}` : progress} / 01:18
                                    </span>
                                </div>

                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-1 bg-white/10 px-2 py-0.5 rounded-md text-[10px]">
                                        {[1, 1.5, 2].map((spd) => (
                                            <button
                                                key={spd}
                                                onClick={() => setPlaybackSpeed(spd)}
                                                className={`px-1 rounded ${playbackSpeed === spd ? 'text-white font-bold' : 'text-white/40'}`}
                                            >
                                                {spd}x
                                            </button>
                                        ))}
                                    </div>
                                    <button className="hover:text-white transition-colors">
                                        <Maximize2 className="w-3.5 h-3.5" />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Bottom Features Strip */}
                    <div className="bg-[#faf8f5] p-4 sm:p-6 border-t border-black/5 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-ink">0.3s Average Latency</span>
                            <span className="text-[11px] text-ink-muted">In-memory OCR & instant solve</span>
                        </div>
                        <div className="flex flex-col items-center border-y sm:border-y-0 sm:border-x border-black/5 py-2 sm:py-0">
                            <span className="text-xs font-bold text-ink">0 Teacher Audit Flags</span>
                            <span className="text-[11px] text-ink-muted">Window.blur & visibility silenced</span>
                        </div>
                        <div className="flex flex-col items-center">
                            <span className="text-xs font-bold text-ink">100% Shadow DOM Sandbox</span>
                            <span className="text-[11px] text-ink-muted">Mathematically undetectable</span>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
}
