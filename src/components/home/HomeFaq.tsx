import React from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { ChevronDown } from "lucide-react";
import { HOME_FAQS } from "./homeFaqs";

export default function HomeFaq() {
    return (
        <section id="faq" className="py-16 sm:py-24 bg-paper border-y border-ink/[0.08] scroll-mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 grid lg:grid-cols-[0.8fr_1.4fr] gap-10 lg:gap-16 items-start">
                <div className="lg:sticky lg:top-24 text-center lg:text-left">
                    <p className="text-sm font-semibold text-ink-muted mb-3">FAQ</p>
                    <h2 className="font-display text-[32px] sm:text-[46px] font-bold tracking-[-0.03em] text-ink leading-[1.06] mb-6">
                        Questions
                    </h2>
                    <Link href="/faq" className="btn-soft px-6 py-3 text-sm">
                        See all answers on the FAQ page
                    </Link>
                </div>

                <Reveal>
                    <div className="divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
                        {HOME_FAQS.map((f) => (
                            <details key={f.q} className="group py-4 sm:py-5">
                                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-semibold text-ink [&::-webkit-details-marker]:hidden">
                                    <h3 className="text-base sm:text-[17px] leading-snug group-hover:text-cobalt transition-colors">
                                        {f.q}
                                    </h3>
                                    <span className="w-8 h-8 rounded-full bg-surface-subtle border border-ink/[0.08] text-ink-muted grid place-items-center shrink-0 transition-colors group-open:bg-surface-dark group-open:text-white group-open:border-surface-dark">
                                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                                    </span>
                                </summary>
                                <p className="mt-3 pr-10 text-[15px] text-ink-muted leading-relaxed">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
