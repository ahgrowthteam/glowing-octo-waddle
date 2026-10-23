'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, RotateCcw, Film, Sparkles, Download } from 'lucide-react';

interface LmsExplainerFilmCardProps {
    slug: string;
    platformName: string;
    heroDotColor: string;
}

const FILM_SCENES = [
    { id: 0, time: 0.0, code: '0:00', label: '2.5D Architecture Hook' },
    { id: 1, time: 3.0, code: '0:03', label: '1-by-1 Double-Click Solve' },
    { id: 2, time: 7.0, code: '0:07', label: 'Alt+S Vision OCR Scan' },
    { id: 3, time: 10.5, code: '0:10', label: 'Stealth Telemetry Audit' },
    { id: 4, time: 13.5, code: '0:13', label: '50 Free Solves CTA' },
];

export default function LmsExplainerFilmCard({
    slug,
    platformName,
    heroDotColor,
}: LmsExplainerFilmCardProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isMuted, setIsMuted] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);

    // Normalize blog/* slugs to match film/facts.json keys
    const filmKey = slug.startsWith('blog/') ? slug.replace('blog/', '') : slug;
    const safeSlug = filmKey.replace(/\//g, '-');
    const videoSrc = `/videos/${safeSlug}.mp4`;
    const posterSrc = `/videos/posters/${safeSlug}-poster.jpg`;

    useEffect(() => {
        const vid = videoRef.current;
        if (!vid) return;
        const onTimeUpdate = () => setCurrentTime(vid.currentTime || 0);
        const onPlay = () => setIsPlaying(true);
        const onPause = () => setIsPlaying(false);
        vid.addEventListener('timeupdate', onTimeUpdate);
        vid.addEventListener('play', onPlay);
        vid.addEventListener('pause', onPause);
        return () => {
            vid.removeEventListener('timeupdate', onTimeUpdate);
            vid.removeEventListener('play', onPlay);
            vid.removeEventListener('pause', onPause);
        };
    }, []);

    const activeSceneIdx =
        currentTime < 3.0
            ? 0
            : currentTime < 7.0
            ? 1
            : currentTime < 10.5
            ? 2
            : currentTime < 13.5
            ? 3
            : 4;

    const handleSeek = (sec: number) => {
        const vid = videoRef.current;
        if (!vid) return;
        vid.currentTime = sec;
        setCurrentTime(sec);
        if (vid.paused) {
            vid.play().catch(() => {});
        }
    };

    const togglePlay = () => {
        const vid = videoRef.current;
        if (!vid) return;
        if (vid.paused) {
            vid.play().catch(() => {});
        } else {
            vid.pause();
        }
    };

    const toggleMute = () => {
        const vid = videoRef.current;
        if (!vid) return;
        vid.muted = !vid.muted;
        setIsMuted(vid.muted);
    };

    return (
        <div
            itemScope
            itemType="https://schema.org/VideoObject"
            className="rounded-[34px] bg-white border border-black/10 shadow-lift p-5 sm:p-8 space-y-5"
        >
            <meta itemProp="name" content={`${platformName} AI Quiz Solver — 2.5D Explainer & Product Demo Film`} />
            <meta
                itemProp="description"
                content={`16-second 2.5D motion-graphic explainer film demonstrating how ExamGhost solves ${platformName} questions one by one via double-click and Alt+S Vision OCR inside a Closed Shadow DOM with zero blur events.`}
            />
            <meta itemProp="thumbnailUrl" content={`https://examghost.com${posterSrc}`} />
            <meta itemProp="contentUrl" content={`https://examghost.com${videoSrc}`} />
            <meta itemProp="uploadDate" content="2026-10-22T00:00:00Z" />
            <meta itemProp="duration" content="PT16S" />

            {/* Top Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1">
                    <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-ink-muted">
                        <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: heroDotColor }}
                        />
                        <Film className="w-3.5 h-3.5 text-ink" />
                        <span>2.5D Motion Explainer Film • 16s HD (120 BPM Audio + Foley)</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-tight">
                        Watch how ExamGhost runs inside {platformName} in 16 seconds
                    </h2>
                </div>

                {/* Controls */}
                <div className="flex flex-wrap items-center gap-2">
                    <button
                        type="button"
                        onClick={toggleMute}
                        className={`px-3.5 py-2 rounded-full text-xs font-bold flex items-center gap-1.5 border transition-all cursor-pointer ${
                            !isMuted
                                ? 'bg-[#cdeecb] text-[#064e3b] border-emerald-600/30 shadow-2xs'
                                : 'bg-[#faf8f5] text-ink border-black/10 hover:bg-black/5'
                        }`}
                    >
                        {!isMuted ? (
                            <>
                                <Volume2 className="w-3.5 h-3.5 text-emerald-700" />
                                <span>120 BPM Sound On</span>
                            </>
                        ) : (
                            <>
                                <VolumeX className="w-3.5 h-3.5 text-ink-muted" />
                                <span>Unmute Audio &amp; SFX</span>
                            </>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={togglePlay}
                        className="px-4 py-2 rounded-full bg-ink text-white text-xs font-bold flex items-center gap-1.5 hover:bg-ink/90 transition-all cursor-pointer shadow-2xs"
                    >
                        {isPlaying ? (
                            <>
                                <Pause className="w-3.5 h-3.5 fill-current" />
                                <span>Pause</span>
                            </>
                        ) : (
                            <>
                                <Play className="w-3.5 h-3.5 fill-current" />
                                <span>Play Film</span>
                            </>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={() => handleSeek(0)}
                        className="px-3 py-2 rounded-full bg-[#faf8f5] hover:bg-black/5 border border-black/10 text-xs font-semibold text-ink flex items-center gap-1 transition-colors cursor-pointer"
                        title="Replay from 0:00"
                    >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Replay</span>
                    </button>

                    <a
                        href={videoSrc}
                        download={`${safeSlug}-examghost-explainer.mp4`}
                        className="px-3 py-2 rounded-full bg-[#faf8f5] hover:bg-black/5 border border-black/10 text-xs font-semibold text-ink flex items-center gap-1 transition-colors"
                        title="Download MP4 Film"
                    >
                        <Download className="w-3.5 h-3.5" />
                        <span className="hidden md:inline">MP4</span>
                    </a>
                </div>
            </div>

            {/* Video Viewport Frame */}
            <div className="relative rounded-[24px] overflow-hidden border border-black/12 bg-[#fcf9f5] shadow-card">
                <video
                    ref={videoRef}
                    src={videoSrc}
                    poster={posterSrc}
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                    preload="metadata"
                    onClick={togglePlay}
                    className="w-full h-auto block cursor-pointer aspect-video object-cover"
                />
            </div>

            {/* 5-Scene Beat-Synced Scrub Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1">
                {FILM_SCENES.map((scene, idx) => {
                    const isActive = activeSceneIdx === idx;
                    return (
                        <button
                            key={scene.id}
                            type="button"
                            onClick={() => handleSeek(scene.time)}
                            className={`text-left p-3 rounded-2xl border transition-all cursor-pointer ${
                                isActive
                                    ? 'bg-ink text-white border-ink shadow-xs'
                                    : 'bg-[#faf8f5] hover:bg-white text-ink border-black/8'
                            }`}
                        >
                            <div className="flex items-center justify-between gap-1 text-[11px] font-mono mb-0.5">
                                <span className={isActive ? 'text-[#cdeecb] font-bold' : 'text-ink-muted'}>
                                    {scene.code}
                                </span>
                                {isActive && (
                                    <Sparkles className="w-3 h-3 text-[#34d399] shrink-0" />
                                )}
                            </div>
                            <div className="text-xs font-bold leading-snug truncate">
                                {scene.label}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
