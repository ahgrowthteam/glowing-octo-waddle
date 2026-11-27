"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Play, Check } from "lucide-react";
import { FaChrome } from "react-icons/fa";
import { DEMO_URL, INSTALL_URL, MEDIA } from "./config";
import MediaSlot from "./MediaSlot";
import MockQuiz from "./MockQuiz";

// A 16:9 video frame. Pass `videoId` for a click-to-play YouTube embed, or `src` for an autoplaying mp4.
// `slot` is the name shown in the dev badge (see MEDIA in config.ts).
export function HeroVideo({ videoId = "", src = "", slot = "video" }: { videoId?: string; src?: string; slot?: string }) {
    const [playing, setPlaying] = useState(false);
    const hasYoutube = videoId.length > 0;

    return (
        <div className="relative w-full aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-[#111] shadow-lift ring-1 ring-black/10">
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
                        <span className="absolute left-2 bottom-2 z-20 rounded-full bg-black/70 px-2.5 py-1 font-mono text-[10px] text-white/90">
                            {slot} · youtube
                        </span>
                    )}
                </button>
            ) : src ? (
                <div className="absolute inset-0 bg-[#c4d0f8]">
                    <MediaSlot
                        slot={slot}
                        src={src}
                        defer
                        label="ExamGhost demo video"
                        fallback={
                            <div className="absolute inset-0 p-5 sm:p-8">
                                <div className="w-full h-full rounded-xl overflow-hidden shadow-lift"><MockQuiz variant="solve" /></div>
                            </div>
                        }
                    />
                </div>
            ) : (
                // Placeholder until a YouTube ID is set in config.ts: loops our own product demo.
                <>
                    <div className="absolute inset-0 bg-[#c4d0f8] p-5 sm:p-8">
                        <div className="w-full h-full rounded-xl overflow-hidden shadow-lift">
                            <MockQuiz variant="solve" />
                        </div>
                    </div>
                    <PlayBadge />
                    {process.env.NODE_ENV !== "production" && (
                        <span className="absolute left-3 bottom-3 text-[11px] font-medium text-white/90 bg-black/60 backdrop-blur px-2.5 py-1 rounded-full">
                            {slot} · graphic (no file set)
                        </span>
                    )}
                </>
            )}
        </div>
    );
}

function PlayBadge() {
    return (
        <span className="absolute inset-0 grid place-items-center bg-black/20 transition-colors group-hover:bg-black/30">
            <span className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white grid place-items-center shadow-lift transition-transform group-hover:scale-105">
                <Play className="w-7 h-7 text-ink fill-ink ml-1" aria-hidden="true" />
            </span>
        </span>
    );
}

export default function HomeHero() {
    return (
        <section className="relative pt-10 sm:pt-16 pb-16 sm:pb-24 overflow-hidden">

            <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 grid lg:grid-cols-[1fr_1.25fr] gap-10 lg:gap-12 items-center">
                {/* Left: text */}
                <div className="text-center lg:text-left">
                    <p className="inline-flex items-center gap-2 text-xs font-semibold text-ink-secondary bg-white/85 border border-black/[0.08] rounded-full px-3.5 py-1.5 mb-5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                        AI Chrome extension for 20 platforms and any page
                    </p>

                    <h1 className="font-display text-[40px] sm:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.05] text-ink mb-5">
                        Double-click any question.{" "}
                        <span className="relative isolate inline-block">
                            <span className="absolute inset-x-[-4px] bottom-[0.06em] h-[0.34em] -z-10 rounded-md bg-[#ffe9a0]" aria-hidden="true" />
                            Get the answer.
                        </span>
                    </h1>

                    <p className="aeo-summary text-base sm:text-lg text-ink-muted leading-relaxed max-w-lg mx-auto lg:mx-0 mb-7">
                        ExamGhost is an AI quiz solver that works right on your quiz page, with a step-by-step explanation for every answer. No copy-paste, no tab-switching.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start mb-5">
                        <a
                            href={INSTALL_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-dark px-7 py-4 text-base shadow-lift"
                        >
                            <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
                            Add to Chrome — it&apos;s free
                        </a>
                        <Link
                            href={DEMO_URL}
                            className="btn-soft px-7 py-4 text-base"
                        >
                            <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
                            Try the live demo
                        </Link>
                    </div>

                    <ul className="flex flex-wrap gap-x-5 gap-y-1.5 justify-center lg:justify-start text-[13px] font-medium text-ink-secondary/80">
                        {["5 free solves a day", "Cancel anytime", "14-day money-back"].map((t) => (
                            <li key={t} className="inline-flex items-center gap-1.5">
                                <Check className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                                {t}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: video */}
                <div className="rounded-[24px] sm:rounded-[30px] bg-white/75 p-1.5 sm:p-2.5 ring-1 ring-black/[0.08] shadow-lift backdrop-blur-sm">
                    <HeroVideo slot="hero" videoId={MEDIA.hero.youtube} src={MEDIA.hero.video} />
                </div>
            </div>
        </section>
    );
}
