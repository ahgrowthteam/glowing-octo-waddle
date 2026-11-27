import React from "react";
import Reveal from "./Reveal";
import { ChevronDown } from "lucide-react";
import { HOME_FAQS } from "./homeFaqs";

export default function HomeFaq() {
    return (
        <section id="faq" className="py-16 sm:py-24 bg-white/70 border-y border-black/[0.06] scroll-mt-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6">
                <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink text-center mb-10">
                    Questions
                </h2>
                <Reveal className="space-y-3">
                    {HOME_FAQS.map((f) => (
                        <details key={f.q} className="group bg-white rounded-2xl border border-black/10 surface-card hover:border-black/20 transition-colors px-5 sm:px-6 py-4 sm:py-5 open:shadow-card">
                            <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-semibold text-ink [&::-webkit-details-marker]:hidden">
                                <h3 className="text-base sm:text-lg">{f.q}</h3>
                                <ChevronDown className="w-5 h-5 shrink-0 text-ink-muted transition-transform group-open:rotate-180" aria-hidden="true" />
                            </summary>
                            <p className="mt-3 pt-3 border-t border-black/5 text-[15px] text-ink-muted leading-relaxed">{f.a}</p>
                        </details>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
