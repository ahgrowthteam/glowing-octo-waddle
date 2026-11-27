import React from "react";
import Link from "next/link";
import Reveal from "./Reveal";
import { ArrowRight, ChevronDown } from "lucide-react";
import { HOME_FAQS } from "./homeFaqs";

export default function HomeFaq() {
    return (
        <section id="faq" className="py-16 sm:py-24 bg-white/70 border-y border-black/[0.06] scroll-mt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-10">
                    <p className="text-sm font-semibold text-ink-muted mb-3">FAQ</p>
                    <h2 className="font-display text-[32px] sm:text-[46px] font-bold tracking-[-0.03em] text-ink leading-[1.06]">
                        Questions
                    </h2>
                </div>
                <Reveal className="space-y-3">
                    {HOME_FAQS.map((f) => (
                        <details key={f.q} className="group bg-white rounded-2xl border border-black/10 surface-card hover:border-black/20 transition-colors px-5 sm:px-6 py-4 sm:py-5 open:shadow-card">
                            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-semibold text-ink [&::-webkit-details-marker]:hidden">
                                <h3 className="text-base sm:text-lg">{f.q}</h3>
                                <span className="w-8 h-8 rounded-full bg-[#f7f4ee] text-ink-muted grid place-items-center shrink-0 transition-colors group-open:bg-ink group-open:text-white">
                                    <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                                </span>
                            </summary>
                            <p className="mt-3 pt-3 border-t border-black/5 text-[15px] text-ink-muted leading-relaxed">{f.a}</p>
                        </details>
                    ))}
                </Reveal>
                <div className="mt-8 text-center">
                    <Link href="/faq" className="btn-soft px-6 py-3 text-sm">
                        See all answers on the FAQ page <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </div>
            </div>
        </section>
    );
}
