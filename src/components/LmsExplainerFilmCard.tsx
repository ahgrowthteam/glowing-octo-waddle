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
    { id: 3, time: 10.5, code: '0:10', label: 'Focus & Telemetry Audit' },
    { id: 4, time: 13.5, code: '0:13', label: '5 Free Solves/Day CTA' },
];

export default function LmsExplainerFilmCard({
    slug,
    platformName,
    heroDotColor,
}: LmsExplainerFilmCardProps) {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(true);
    const [currentTime, setCurrentTime] = useState(0);
    // Defer the ~2.7 MB MP4 until the film card scrolls near the viewport (protects mobile LCP / TBT)
    const [isInView, setIsInView] = useState(false);

    // Normalize blog/* slugs to match film/facts.json keys
    const filmKey = slug.startsWith('blog/') ? slug.replace('blog/', '') : slug;
    const safeSlug = filmKey.replace(/\//g, '-');
    const videoSrc = `/videos/${safeSlug}.mp4`;
    const posterSrc = `/videos/posters/${safeSlug}-poster.jpg`;

    useEffect(() => {
        const vid = videoRef.current;
        if (!vid) return;
        if (typeof IntersectionObserver === 'undefined') {
            setIsInView(true);
            return;
        }
        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                if (!entry) return;
                if (entry.isIntersecting) {
                    setIsInView(true);
                    vid.play().catch(() => {});
                } else if (!vid.paused) {
                    vid.pause();
                }
            },
            { rootMargin: '200px 0px', threshold: 0.25 }
        );
        observer.observe(vid);
        return () => observer.disconnect();
    }, []);

    // Start playback once the deferred source has been attached
    useEffect(() => {
        if (!isInView) return;
        const vid = videoRef.current;
        if (vid && vid.paused) vid.play().catch(() => {});
    }, [isInView]);

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
        if (!isInView) setIsInView(true);
        vid.currentTime = sec;
        setCurrentTime(sec);
        if (vid.paused) {
            vid.play().catch(() => {});
        }
    };

    const togglePlay = () => {
        const vid = videoRef.current;
        if (!vid) return;
        if (!isInView) {
            setIsInView(true);
            return;
        }
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
            className="rounded-3xl bg-paper border border-ink/[0.09] shadow-lift p-5 sm:p-8 space-y-5"
        >
            <meta itemProp="name" content={`${platformName} AI Quiz Solver — 2.5D Explainer & Product Demo Film`} />
            <meta
                itemProp="description"
                content={`16-second 2.5D motion-graphic explainer film demonstrating how ExamGhost solves ${platformName} questions one by one via double-click and Alt+S Vision OCR inside a Closed Shadow DOM with zero blur events.`}
            />
            <meta itemProp="thumbnailUrl" content={`https://www.examghost.com${posterSrc}`} />
            <meta itemProp="contentUrl" content={`https://www.examghost.com${videoSrc}`} />
            <meta itemProp="uploadDate" content="2026-10-22T00:00:00Z" />
            <meta itemProp="duration" content="PT16S" />

            {/* Top Header Row */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="space-y-1.5">
                    <div className="inline-flex items-center gap-2 text-xs font-medium text-ink-muted">
                        <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: heroDotColor }}
                            aria-hidden="true"
                        />
                        <Film className="w-3.5 h-3.5 text-ink" aria-hidden="true" />
                        <span>2.5D motion explainer film · 16s HD (120 BPM audio &amp; foley)</span>
                    </div>
                    <h2 className="font-display text-2xl sm:text-3xl font-bold text-ink tracking-[-0.025em]">
                        Watch how ExamGhost runs inside {platformName} in 16 seconds
                    </h2>
                </div>

                {/* Controls */}
                <div className="flex flex-wrap items-center gap-2">
                    <button
                        type="button"
                        onClick={toggleMute}
                        aria-label={isMuted ? 'Unmute explainer film audio' : 'Mute explainer film audio'}
                        className={`min-h-[40px] px-3.5 py-2 rounded-full text-xs font-semibold flex items-center gap-1.5 border transition-colors cursor-pointer ${
                            !isMuted
                                ? 'bg-emeraldBrand-soft text-emeraldBrand border-emeraldBrand/25'
                                : 'bg-surface-subtle text-ink border-ink/[0.09] hover:border-ink/25'
                        }`}
                    >
                        {!isMuted ? (
                            <>
                                <Volume2 className="w-3.5 h-3.5 text-emeraldBrand" aria-hidden="true" />
                                <span>120 BPM Sound On</span>
                            </>
                        ) : (
                            <>
                                <VolumeX className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                                <span>Unmute Audio &amp; SFX</span>
                            </>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={togglePlay}
                        aria-label={isPlaying ? 'Pause explainer film' : 'Play explainer film'}
                        className="min-h-[40px] px-4 py-2 rounded-full bg-surface-dark text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-[#1E2129] transition-colors cursor-pointer"
                    >
                        {isPlaying ? (
                            <>
                                <Pause className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                                <span>Pause</span>
                            </>
                        ) : (
                            <>
                                <Play className="w-3.5 h-3.5 fill-current" aria-hidden="true" />
                                <span>Play Film</span>
                            </>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={() => handleSeek(0)}
                        aria-label="Replay film from 0:00"
                        className="min-h-[40px] px-3.5 py-2 rounded-full bg-surface-subtle hover:bg-paper border border-ink/[0.09] hover:border-ink/25 text-xs font-semibold text-ink flex items-center gap-1.5 transition-colors cursor-pointer"
                        title="Replay from 0:00"
                    >
                        <RotateCcw className="w-3.5 h-3.5" aria-hidden="true" />
                        <span className="hidden sm:inline">Replay</span>
                    </button>

                    <a
                        href={videoSrc}
                        download={`${safeSlug}-examghost-explainer.mp4`}
                        aria-label={`Download ${platformName} MP4 explainer film`}
                        className="min-h-[40px] px-3.5 py-2 rounded-full bg-surface-subtle hover:bg-paper border border-ink/[0.09] hover:border-ink/25 text-xs font-semibold text-ink flex items-center gap-1.5 transition-colors"
                        title="Download MP4 Film"
                    >
                        <Download className="w-3.5 h-3.5" aria-hidden="true" />
                        <span className="hidden md:inline">MP4</span>
                    </a>
                </div>
            </div>

            {/* Video Viewport Frame */}
            <div className="relative rounded-2xl overflow-hidden border border-ink/[0.1] bg-surface-subtle shadow-card">
                <video
                    ref={videoRef}
                    src={isInView ? videoSrc : undefined}
                    poster={posterSrc}
                    loop
                    muted={isMuted}
                    playsInline
                    preload="none"
                    aria-label={`${platformName} ExamGhost 16-second explainer film`}
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
                            className={`text-left p-3 rounded-xl border transition-colors cursor-pointer min-h-[56px] ${
                                isActive
                                    ? 'dark-surface bg-surface-dark text-white border-surface-dark shadow-xs'
                                    : 'bg-surface-subtle hover:bg-paper text-ink border-ink/[0.08] hover:border-ink/20'
                            }`}
                        >
                            <div className="flex items-center justify-between gap-1 text-[11px] font-mono mb-0.5">
                                <span className={isActive ? 'text-emerald-300 font-bold' : 'text-ink-muted'}>
                                    {scene.code}
                                </span>
                                {isActive && (
                                    <Sparkles className="w-3 h-3 text-emerald-300 shrink-0" aria-hidden="true" />
                                )}
                            </div>
                            <div className="text-xs font-semibold leading-snug truncate">
                                {scene.label}
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
