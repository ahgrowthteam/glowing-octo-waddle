'use client';

import React from 'react';
import { Play, Pause, RotateCcw, Clock } from 'lucide-react';
import { ScrubberProps, SpeedOption } from './types';

const SPEED_OPTIONS: SpeedOption[] = [1, 1.5, 2];

/**
 * Format milliseconds to MM:SS string
 */
function formatTime(ms: number): string {
    if (!Number.isFinite(ms) || ms < 0) return '00:00';
    const totalSec = Math.floor(ms / 1000);
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

/**
 * Interactive Timeline Scrubber with Play/Pause, speed selector, chapter pills, and time display
 */
export const MotionTimelineScrubber: React.FC<ScrubberProps> = ({
    scenes: rawScenes = [],
    currentScene = 0,
    sceneProgress = 0,
    isPlaying = false,
    onTogglePlay,
    onSeekScene,
    playbackSpeed = 1,
    onSpeedChange,
    onRestart,
    totalElapsedMs: propElapsed,
    totalDurationMs: propDuration,
    className = '',
}) => {
    const scenes = Array.isArray(rawScenes) ? rawScenes : [];

    // Normalize progress to 0-100% with NaN sanitization
    const safeProgress = Math.min(100, Math.max(0, Number.isFinite(sceneProgress) ? sceneProgress : 0));
    const normalizedProgress = safeProgress;

    // Calculate total duration from scenes if not explicitly passed
    const totalDuration =
        propDuration ??
        scenes.reduce((acc, s) => acc + (s.durationMs ?? 6500), 0);

    // Calculate elapsed time from current scene and progress with finite clamping
    const calculatedElapsed = React.useMemo(() => {
        if (propElapsed !== undefined) {
            const safeElapsed = Number.isFinite(propElapsed) ? propElapsed : 0;
            return Math.min(totalDuration, Math.max(0, safeElapsed));
        }
        let elapsed = 0;
        for (let i = 0; i < currentScene && i < scenes.length; i++) {
            elapsed += scenes[i].durationMs ?? 6500;
        }
        if (scenes[currentScene]) {
            elapsed += ((scenes[currentScene].durationMs ?? 6500) * normalizedProgress) / 100;
        }
        return Math.min(totalDuration, Math.max(0, elapsed));
    }, [propElapsed, currentScene, scenes, normalizedProgress, totalDuration]);

    const handleRestart = () => {
        if (onRestart) {
            onRestart();
        } else {
            onSeekScene(0);
        }
    };

    return (
        <div
            className={`w-full rounded-2xl bg-[#0d121c]/95 border border-white/10 backdrop-blur-md p-3 sm:p-4 text-white shadow-xl ${className}`}
            role="region"
            aria-label="Motion Demo Video Timeline Controls"
        >
            {/* Top Row: Play/Pause, Time, Restart, Speed */}
            <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
                {/* Left: Play/Pause & Restart */}
                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={onTogglePlay}
                        aria-label={isPlaying ? 'Pause Demo' : 'Play Demo'}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-sm ${
                            isPlaying
                                ? 'bg-white text-slate-950 hover:bg-white/90 active:scale-95'
                                : 'bg-emerald-500 text-slate-950 hover:bg-emerald-400 active:scale-95'
                        }`}
                    >
                        {isPlaying ? (
                            <>
                                <Pause className="w-3.5 h-3.5 fill-current" />
                                <span>Pause</span>
                            </>
                        ) : (
                            <>
                                <Play className="w-3.5 h-3.5 fill-current" />
                                <span>Play Demo</span>
                            </>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={handleRestart}
                        aria-label="Restart Demo from Beginning"
                        className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white transition-all cursor-pointer active:scale-95"
                        title="Restart from Scene 1"
                    >
                        <RotateCcw className="w-3.5 h-3.5" />
                    </button>

                    {/* Time Counter */}
                    <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 font-mono text-[11px] text-white/80">
                        <Clock className="w-3 h-3 text-emerald-400" />
                        <span>{formatTime(calculatedElapsed)}</span>
                        <span className="text-white/40">/</span>
                        <span className="text-white/50">{formatTime(totalDuration)}</span>
                    </div>
                </div>

                {/* Right: Playback Speed Selector */}
                {onSpeedChange && (
                    <div className="flex items-center gap-1 bg-white/5 border border-white/10 rounded-full p-0.5 text-[11px] font-semibold">
                        <span className="px-2 text-white/50 hidden md:inline text-[10px] uppercase tracking-wider">
                            Speed:
                        </span>
                        {SPEED_OPTIONS.map((speed) => (
                            <button
                                key={speed}
                                type="button"
                                onClick={() => onSpeedChange(speed)}
                                className={`px-2 py-0.5 rounded-full transition-all cursor-pointer ${
                                    playbackSpeed === speed
                                        ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/40 shadow-xs'
                                        : 'text-white/60 hover:text-white hover:bg-white/5'
                                }`}
                                aria-label={`Set speed to ${speed}x`}
                            >
                                {speed}x
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Bottom Row: 3 Chapter Progress Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                {scenes.map((scene, idx) => {
                    const isActive = currentScene === idx;
                    const isPast = idx < currentScene;

                    // Progress percentage for this pill's internal bar
                    let fillPercentage = 0;
                    if (isPast) {
                        fillPercentage = 100;
                    } else if (isActive) {
                        fillPercentage = normalizedProgress;
                    }

                    return (
                        <button
                            key={scene.id || idx}
                            type="button"
                            onClick={() => onSeekScene(idx)}
                            className={`group relative overflow-hidden rounded-xl border text-left p-2.5 transition-all cursor-pointer ${
                                isActive
                                    ? 'bg-white/10 border-emerald-400/50 shadow-md ring-1 ring-emerald-400/30'
                                    : 'bg-white/[0.03] border-white/10 hover:bg-white/[0.07] hover:border-white/20'
                            }`}
                            aria-label={`Seek to Scene ${idx + 1}: ${scene.label}`}
                        >
                            {/* Header: Scene Number + Status */}
                            <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                                <span
                                    className={`font-semibold ${
                                        isActive ? 'text-emerald-400' : 'text-white/40 group-hover:text-white/60'
                                    }`}
                                >
                                    SCENE {String(idx + 1).padStart(2, '0')}
                                </span>
                                {isActive && (
                                    <span className="px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-300 text-[9px] font-bold uppercase tracking-wider">
                                        {isPlaying ? 'Playing' : 'Active'}
                                    </span>
                                )}
                                {isPast && (
                                    <span className="text-emerald-400/70 text-[9px]">✓ Done</span>
                                )}
                            </div>

                            {/* Label */}
                            <div
                                className={`text-xs font-semibold truncate ${
                                    isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                                }`}
                            >
                                {scene.label}
                            </div>

                            {/* Optional Subtitle */}
                            {scene.subtitle && (
                                <div className="text-[10px] text-white/40 truncate mt-0.5">
                                    {scene.subtitle}
                                </div>
                            )}

                            {/* Continuous Progress Fill Line at Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
                                <div
                                    className="h-full bg-emerald-400 transition-[width] duration-100 ease-linear"
                                    style={{ width: `${fillPercentage}%` }}
                                />
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default MotionTimelineScrubber;
