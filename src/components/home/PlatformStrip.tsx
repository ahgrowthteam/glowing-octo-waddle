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
                <ul className="flex flex-wrap justify-center gap-2">
                    {PLATFORMS_DATA.map((p) => (
                        <li key={p.slug}>
                            {p.indexable ? (
                                <Link
                                    href={`/${p.slug}`}
                                    className="inline-flex items-center rounded-full bg-white/90 border border-black/[0.07] px-3.5 py-1.5 text-[13px] font-medium text-ink-secondary shadow-[0_1px_2px_rgba(40,30,10,0.03)] hover:border-black/20 hover:bg-white hover:text-ink hover:-translate-y-0.5 hover:shadow-soft transition-all"
                                >
                                    {p.name}
                                </Link>
                            ) : (
                                <span className="inline-flex items-center rounded-full bg-white/55 border border-black/[0.05] px-3.5 py-1.5 text-[13px] font-medium text-ink-muted">
                                    {p.name}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
                <p className="mt-5 text-center text-sm text-ink-muted">
                    Not listed? Press <kbd className="kbd-key mx-0.5">Alt+S</kbd> and drag a box around any question: ExamGhost solves whatever is on your screen.
                </p>
            </div>
        </section>
    );
}
