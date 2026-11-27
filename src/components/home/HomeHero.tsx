"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, Check, Lock, ArrowUpRight } from "lucide-react";
import { FaChrome, FaDiscord } from "react-icons/fa";
import { DEMO_URL, DISCORD_URL, INSTALL_URL, MEDIA } from "./config";
import MediaSlot from "./MediaSlot";
import MockQuiz from "./MockQuiz";

// A 16:9 video frame. Pass `videoId` for a click-to-play YouTube embed, or `src` for an autoplaying mp4.
// `slot` is the name shown in the dev badge (see MEDIA in config.ts).
export function HeroVideo({ videoId = "", src = "", slot = "video" }: { videoId?: string; src?: string; slot?: string }) {
    const [playing, setPlaying] = useState(false);
    const hasYoutube = videoId.length > 0;

    return (
        <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden bg-surface-dark ring-1 ring-ink/[0.10] shadow-card">
            {hasYoutube && playing ? (
                <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`}
                    title="ExamGhost demo video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                />
            ) : hasYoutube ? (
                <button
                    type="button"
                    onClick={() => setPlaying(true)}
                    className="group absolute inset-0 w-full h-full"
                    aria-label="Play the ExamGhost demo video"
                >
                    <img
                        src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <PlayBadge />
                    {process.env.NODE_ENV !== "production" && (
                        <span className="absolute left-2.5 bottom-2.5 z-20 rounded-md bg-surface-dark/85 border border-white/10 px-2 py-0.5 font-mono text-[10px] text-white/90">
                            {slot} · youtube
                        </span>
                    )}
                </button>
            ) : src ? (
                <div className="absolute inset-0 bg-surface-subtle bg-warm-grid">
                    <MediaSlot
                        slot={slot}
                        src={src}
                        defer
                        label="ExamGhost demo video"
                        fallback={
                            <div className="absolute inset-0 p-4 sm:p-6">
                                <div className="w-full h-full rounded-xl overflow-hidden border border-ink/[0.09] shadow-card">
                                    <MockQuiz variant="solve" />
                                </div>
                            </div>
                        }
                    />
                </div>
            ) : (
                <div className="absolute inset-0 bg-surface-subtle bg-warm-grid p-4 sm:p-6">
                    <div className="w-full h-full rounded-xl overflow-hidden border border-ink/[0.09] shadow-card">
                        <MockQuiz variant="solve" />
                    </div>
                    <Link
                        href={DEMO_URL}
                        className="absolute right-3 bottom-3 z-20 inline-flex items-center gap-2 rounded-full bg-surface-dark text-white px-3.5 py-2 text-xs font-semibold shadow-lift hover:bg-ink-secondary transition-colors"
                    >
                        <span className="w-2 h-2 rounded-full bg-emeraldBrand" aria-hidden="true" />
                        Try live interactive demo
                        <ArrowUpRight className="w-3.5 h-3.5 text-white/75" aria-hidden="true" />
                    </Link>
                    {process.env.NODE_ENV !== "production" && (
                        <span className="pointer-events-none absolute left-3 bottom-3 z-20 rounded-md bg-surface-dark/85 border border-white/10 px-2 py-0.5 font-mono text-[10px] text-white/90">
                            {slot} · interactive preview
                        </span>
                    )}
                </div>
            )}
        </div>
    );
}

function PlayBadge() {
    return (
        <span className="absolute inset-0 grid place-items-center bg-surface-dark/25 transition-colors group-hover:bg-surface-dark/35">
            <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-paper grid place-items-center shadow-lift transition-transform group-hover:scale-105">
                <Play className="w-7 h-7 text-ink fill-ink ml-1" aria-hidden="true" />
            </span>
        </span>
    );
}

export default function HomeHero() {
    return (
        <section className="relative pt-8 sm:pt-14 pb-14 sm:pb-20 overflow-hidden">
            <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-12 items-center">
                {/* Left: copy + CTAs + early Discord */}
                <div className="text-center lg:text-left">
                    <p className="inline-flex items-center gap-2 text-xs font-medium text-ink-secondary bg-paper border border-ink/[0.09] rounded-full px-3.5 py-1.5 mb-5 shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-emeraldBrand" aria-hidden="true" />
                        AI Chrome extension for 20 platforms and any page
                    </p>

                    <h1 className="font-display text-[38px] sm:text-[52px] lg:text-[58px] font-bold tracking-[-0.035em] leading-[1.03] text-ink mb-5">
                        Double-click any question.{" "}
                        <span className="text-ink-secondary">Get the answer.</span>
                    </h1>

                    <p className="aeo-summary text-base sm:text-lg text-ink-muted leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
                        ExamGhost is an AI quiz solver that works right on your quiz page, with a step-by-step explanation for every answer. No copy-paste, no tab-switching.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-5">
                        <a
                            href={INSTALL_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-dark px-7 py-3.5 sm:py-4 text-[15px] sm:text-base shadow-lift"
                        >
                            <FaChrome className="w-4 h-4 text-sky" aria-hidden="true" />
                            Add to Chrome — it&apos;s free
                        </a>
                        <Link
                            href={DEMO_URL}
                            className="btn-soft px-7 py-3.5 sm:py-4 text-[15px] sm:text-base"
                        >
                            <span className="w-2 h-2 rounded-full bg-emeraldBrand" aria-hidden="true" />
                            Try the live demo
                        </Link>
                    </div>

                    <ul className="flex flex-wrap gap-x-5 gap-y-2 justify-center lg:justify-start text-[13px] font-medium text-ink-secondary">
                        {["5 free solves a day", "Cancel anytime", "14-day money-back"].map((t) => (
                            <li key={t} className="inline-flex items-center gap-1.5">
                                <span className="w-4 h-4 rounded-full bg-emeraldBrand-soft text-emeraldBrand grid place-items-center shrink-0">
                                    <Check className="w-2.5 h-2.5" strokeWidth={3} aria-hidden="true" />
                                </span>
                                {t}
                            </li>
                        ))}
                    </ul>

                    {/* Upper-viewport clickable Discord highlight */}
                    <div className="mt-5 flex justify-center lg:justify-start">
                        <a
                            href={DISCORD_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-3 rounded-xl bg-discord-soft border border-discord/25 hover:border-discord/50 hover:bg-discord/[0.12] px-3.5 py-2.5 text-left transition-colors shadow-xs max-w-full"
                        >
                            <span className="w-8 h-8 rounded-lg bg-discord text-white grid place-items-center shrink-0">
                                <FaDiscord className="w-4 h-4" aria-hidden="true" />
                            </span>
                            <span className="min-w-0">
                                <span className="block text-[13px] font-semibold text-ink leading-tight">
                                    Join the Discord community
                                </span>
                                <span className="block text-[12px] text-ink-muted leading-tight mt-0.5">
                                    Free access, live help &amp; feature requests
                                </span>
                            </span>
                            <ArrowUpRight className="w-4 h-4 text-discord shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                        </a>
                    </div>
                </div>

                {/* Right: studio product frame */}
                <div className="relative">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-4 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(59,91,219,0.12),transparent_65%)] -z-10"
                    />
                    <div className="rounded-2xl sm:rounded-3xl bg-paper p-2 sm:p-2.5 ring-1 ring-ink/[0.09] shadow-lift">
                        <div className="flex items-center gap-2 rounded-xl bg-surface-subtle border border-ink/[0.07] px-3 py-2 mb-2">
                            <span className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                            </span>
                            <span className="ml-1 flex-1 min-w-0 inline-flex items-center gap-1.5 rounded-lg bg-paper border border-ink/[0.07] px-2.5 py-1 text-[11px] font-mono text-ink-muted">
                                <Lock className="w-2.5 h-2.5 shrink-0" aria-hidden="true" />
                                <span className="truncate">canvas.university.edu/quizzes/take</span>
                            </span>
                            <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emeraldBrand-soft border border-emeraldBrand/20 px-2.5 py-0.5 text-[11px] font-semibold text-emeraldBrand shrink-0">
                                <span className="w-1.5 h-1.5 rounded-full bg-emeraldBrand" aria-hidden="true" />
                                ExamGhost · Active
                            </span>
                        </div>
                        <HeroVideo slot="hero" videoId={MEDIA.hero.youtube} src={MEDIA.hero.video} />
                    </div>
                </div>
            </div>
        </section>
    );
}
