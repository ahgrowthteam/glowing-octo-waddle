import React from "react";
import Reveal from "./Reveal";
import { HeroVideo } from "./HomeHero";
import { MEDIA } from "./config";

const CHAPTERS = ["Install", "Modes", "Double-click", "Snap-It"];

export default function GuideVideo() {
    return (
        <section id="guide" className="py-16 sm:py-24 bg-surface-subtle border-y border-ink/[0.08] scroll-mt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <p className="text-sm font-semibold text-ink-muted mb-3">
                    Full walkthrough
                </p>
                <h2 className="font-display text-[32px] sm:text-[46px] font-bold tracking-[-0.03em] text-ink leading-[1.06] mb-4">
                    See exactly how it works
                </h2>
                <p className="text-base sm:text-lg text-ink-muted max-w-xl mx-auto mb-10">
                    A start-to-finish walkthrough: installing the extension, switching modes, double-clicking a question and using Snap-It.
                </p>
                <Reveal>
                    <div className="dark-surface rounded-2xl bg-surface-dark p-2 sm:p-3 border border-ink/15 surface-dark-card text-left">
                        <div className="flex flex-wrap items-center justify-between gap-2 px-3 py-2.5 text-xs text-white/75 border-b border-white/10 mb-2">
                            <span className="font-medium text-white/90 truncate">
                                Walkthrough · Install, modes, double-click &amp; Snap-It
                            </span>
                            <div className="hidden sm:flex items-center gap-1.5" aria-hidden="true">
                                {CHAPTERS.map((ch) => (
                                    <span
                                        key={ch}
                                        className="rounded-md bg-white/[0.07] border border-white/[0.08] px-2 py-0.5 font-mono text-[10px] text-white/70"
                                    >
                                        {ch}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <HeroVideo slot="guide" videoId={MEDIA.guide.youtube} />
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
