import React from "react";
import Reveal from "./Reveal";
import { HeroVideo } from "./HomeHero";
import { MEDIA } from "./config";

export default function GuideVideo() {
    return (
        <section id="guide" className="py-16 sm:py-24 bg-white/60 border-y border-black/5 scroll-mt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <p className="inline-block text-xs font-semibold uppercase tracking-wider text-[#2b55c7] bg-[#e8effd] rounded-full px-3 py-1 mb-4">
                    Full guide
                </p>
                <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink leading-[1.05] mb-4">
                    See exactly how it works
                </h2>
                <p className="text-base sm:text-lg text-ink-muted max-w-xl mx-auto mb-10">
                    A start-to-finish walkthrough: installing the extension, switching modes, double-clicking a question and using Snap-It.
                </p>
                <Reveal>
                    <HeroVideo slot="guide" videoId={MEDIA.guide.youtube} />
                </Reveal>
            </div>
        </section>
    );
}
