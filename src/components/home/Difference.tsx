import React from "react";
import { Check } from "lucide-react";
import { FaChrome } from "react-icons/fa";
import Reveal from "./Reveal";
import { INSTALL_URL } from "./config";

export default function Difference() {
    return (
        <section className="py-16 sm:py-24 bg-surface-subtle/75 border-y border-ink/[0.08]">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <p className="text-sm font-semibold text-ink-muted mb-3">The difference</p>
                <h2 className="font-display text-[32px] sm:text-[46px] font-bold tracking-[-0.03em] text-ink leading-[1.06] mb-4">
                    Same homework.<br />Different nights.
                </h2>
                <p className="text-ink-muted max-w-lg mx-auto mb-10">
                    Ten questions due tonight. One student looks every answer up. The other double-clicks.
                </p>

                <Reveal>
                    <div className="rounded-2xl border border-ink/[0.09] overflow-hidden grid sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-ink/[0.09] shadow-card text-left">
                        <div className="bg-paper p-6 sm:p-8 flex flex-col">
                            <div className="flex items-center justify-between text-sm text-ink-muted mb-6">
                                <span className="font-medium">Looking it up</span>
                                <span className="rounded-md bg-surface-subtle border border-ink/[0.08] px-2.5 py-0.5 font-mono text-xs font-medium text-ink-secondary tabular-nums">
                                    9:52 PM
                                </span>
                            </div>
                            <p className="font-display text-xl font-semibold text-ink mb-5">Copying the question…</p>
                            <div className="h-2 rounded-full bg-ink/10 overflow-hidden mb-2.5">
                                <span className="block h-full w-[30%] bg-ink/35 rounded-full" />
                            </div>
                            <p className="font-mono text-xs text-ink-muted tabular-nums">3 of 10 done</p>
                        </div>

                        <div className="dark-surface relative overflow-hidden bg-surface-dark text-white p-6 sm:p-8 flex flex-col">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute -top-16 -right-16 w-40 h-40 rounded-full bg-emeraldBrand/15 blur-2xl"
                            />
                            <div className="relative flex items-center justify-between text-sm text-white/75 mb-6">
                                <span className="font-medium text-white/90">With ExamGhost</span>
                                <span className="rounded-md bg-emeraldBrand/20 border border-emeraldBrand/35 px-2.5 py-0.5 font-mono text-xs font-medium text-[#6EE7B7] tabular-nums">
                                    9:06 PM
                                </span>
                            </div>
                            <p className="relative font-display text-xl font-semibold mb-5 flex items-center gap-2">
                                <Check className="w-5 h-5 text-emeraldBrand shrink-0" aria-hidden="true" />
                                All 10 done. Night&apos;s free.
                            </p>
                            <div className="relative h-2 rounded-full bg-white/15 overflow-hidden mb-2.5">
                                <span className="block h-full w-full bg-emeraldBrand rounded-full" />
                            </div>
                            <p className="relative font-mono text-xs text-white/70 tabular-nums">10 of 10 done</p>
                        </div>
                    </div>
                </Reveal>
                <p className="text-xs text-ink-muted mt-3">Illustration. Your time will vary.</p>

                <div className="mt-12 pt-9 border-t border-ink/[0.08] max-w-2xl mx-auto">
                    <p className="font-display text-xl sm:text-2xl font-semibold text-ink mb-6">
                        Every question you look up the slow way is time you don&apos;t get back.
                    </p>
                    <a href={INSTALL_URL} target="_blank" rel="noopener noreferrer" className="btn-dark px-8 py-4 text-base shadow-lift">
                        <FaChrome className="w-4 h-4 text-sky" aria-hidden="true" /> Get my nights back
                    </a>
                    <p className="text-sm text-ink-muted mt-4">Yearly is just $8.25 a month. 14-day money-back guarantee.</p>
                </div>
            </div>
        </section>
    );
}
