import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PLATFORMS_DATA } from "@/data/platforms";

export default function PlatformStrip() {
    return (
        <section aria-label="Supported platforms" className="py-12 sm:py-16 border-y border-ink/[0.08] bg-paper">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6">
                    <p className="font-display text-sm sm:text-base font-semibold text-ink">
                        Works on {PLATFORMS_DATA.length} platforms, and any page you can see
                    </p>
                    <span className="inline-flex items-center self-start sm:self-auto gap-1.5 rounded-md bg-cobalt-soft border border-cobalt/15 px-2.5 py-1 font-mono text-[11px] font-medium text-cobalt">
                        {PLATFORMS_DATA.length} supported
                    </span>
                </div>

                <ul className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-5 gap-px bg-ink/[0.08] rounded-2xl border border-ink/[0.09] overflow-hidden shadow-xs">
                    {PLATFORMS_DATA.map((p) => (
                        <li key={p.slug} className="bg-paper">
                            <Link
                                prefetch={false}
                                href={`/${p.slug}`}
                                className="group flex flex-col justify-between gap-1.5 h-full p-3.5 sm:p-4 hover:bg-cobalt-soft/45 transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-cobalt"
                            >
                                <span className="flex items-start justify-between gap-2">
                                    <span className="font-display text-[13.5px] sm:text-[14px] font-semibold text-ink group-hover:text-cobalt leading-snug transition-colors">
                                        {p.name}
                                    </span>
                                    <ArrowUpRight
                                        className="w-3.5 h-3.5 text-ink-muted/55 group-hover:text-cobalt shrink-0 mt-0.5 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                        aria-hidden="true"
                                    />
                                </span>
                                <span className="text-[12px] text-ink-muted leading-tight truncate">
                                    {p.kind}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="mt-6 flex justify-center">
                    <p className="inline-flex flex-wrap items-center justify-center gap-1.5 rounded-xl bg-surface-subtle border border-ink/[0.08] px-4 py-2.5 text-xs sm:text-[13px] text-ink-secondary">
                        Not listed? Press <kbd className="kbd-key mx-0.5">Alt+S</kbd> and drag a box around any question: ExamGhost solves whatever is on your screen.
                    </p>
                </div>
            </div>
        </section>
    );
}
