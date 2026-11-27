import React from "react";
import { Check } from "lucide-react";
import { FaChrome } from "react-icons/fa";
import Reveal from "./Reveal";
import { INSTALL_URL } from "./config";

export default function Difference() {
    return (
        <section className="py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
                <p className="text-sm font-semibold text-ink-muted mb-3">The difference</p>
                <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink leading-[1.05] mb-4">
                    Same homework.<br />Different nights.
                </h2>
                <p className="text-ink-muted max-w-lg mx-auto mb-10">
                    Ten questions due tonight. One student looks every answer up. The other double-clicks.
                </p>

                <Reveal className="grid sm:grid-cols-2 gap-4 text-left">
                    <div className="rounded-3xl bg-white border border-black/10 shadow-card p-6 sm:p-7">
                        <div className="flex items-center justify-between text-sm text-ink-muted mb-6">
                            <span>Looking it up</span><span>9:52 PM</span>
                        </div>
                        <p className="font-display text-xl font-semibold text-ink mb-5">Copying the question…</p>
                        <div className="h-2.5 rounded-full bg-black/10 overflow-hidden mb-2"><span className="block h-full w-[30%] bg-black/35 rounded-full" /></div>
                        <p className="text-sm text-ink-muted">3 of 10 done</p>
                    </div>
                    <div className="rounded-3xl bg-ink text-white ring-1 ring-white/10 shadow-lift p-6 sm:p-7">
                        <div className="flex items-center justify-between text-sm text-white/70 mb-6">
                            <span>With ExamGhost</span><span>9:06 PM</span>
                        </div>
                        <p className="font-display text-xl font-semibold mb-5 flex items-center gap-2">
                            <Check className="w-5 h-5 text-[#cdeecb]" aria-hidden="true" /> All 10 done. Night&apos;s free.
                        </p>
                        <div className="h-2.5 rounded-full bg-white/15 overflow-hidden mb-2"><span className="block h-full w-full bg-[#cdeecb] rounded-full" /></div>
                        <p className="text-sm text-white/70">10 of 10 done</p>
                    </div>
                </Reveal>
                <p className="text-xs text-ink-muted mt-3">Illustration. Your time will vary.</p>

                <div className="mt-12">
                    <p className="font-display text-xl sm:text-2xl font-semibold text-ink mb-6">
                        Every question you look up the slow way is time you don&apos;t get back.
                    </p>
                    <a href={INSTALL_URL} target="_blank" rel="noopener noreferrer" className="btn-dark px-8 py-4 text-base shadow-lift">
                        <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" /> Get my nights back
                    </a>
                    <p className="text-sm text-ink-muted mt-4">Yearly is just $8.25 a month. 14-day money-back guarantee.</p>
                </div>
            </div>
        </section>
    );
}
