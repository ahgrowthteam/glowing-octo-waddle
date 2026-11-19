import React from "react";
import Link from "next/link";
import { PLATFORMS_DATA } from "@/data/platforms";

export default function PlatformStrip() {
    return (
        <section aria-label="Supported platforms" className="py-9 border-y border-black/5 bg-white/50">
            <p className="text-center text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-5">
                Works on {PLATFORMS_DATA.length} platforms, and any page you can see
            </p>
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2.5 text-[14px] font-display font-semibold text-ink-secondary/80">
                    {PLATFORMS_DATA.map((p) => (
                        <li key={p.slug}>
                            {p.indexable ? <Link href={`/${p.slug}`} className="hover:text-ink transition-colors">{p.name}</Link> : <span>{p.name}</span>}
                        </li>
                    ))}
                </ul>
                <p className="mt-5 text-center text-sm text-ink-muted">
                    Not listed? Press <kbd className="rounded-md bg-black/5 px-1.5 py-0.5 text-xs font-sans font-medium text-ink">Alt+S</kbd> and drag a box around any question: ExamGhost solves whatever is on your screen.
                </p>
            </div>
        </section>
    );
}
