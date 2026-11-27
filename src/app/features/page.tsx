import React from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { FaChrome } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCta from "@/components/home/FinalCta";
import Reveal from "@/components/home/Reveal";
import MediaSlot from "@/components/home/MediaSlot";
import MockQuiz from "@/components/home/MockQuiz";
import { INSTALL_URL, DEMO_URL, MEDIA } from "@/components/home/config";
import FeatureCatalog from "@/components/features/FeatureCatalog";
import { FEATURES, FEATURE_FAQS } from "@/components/features/featuresData";
import { allFacts } from "@/data/competitor-facts";
import { PLATFORMS_DATA } from "@/data/platforms";

const DEMOS = [
    { id: "doubleClick", tag: "Double-click", title: "Double-click to solve", body: "The answer lands on the question itself.", variant: "solve" as const },
    { id: "snap", tag: "Alt+S", title: "Alt+S screenshot snip", body: "Drag a box around a graph or diagram.", variant: "snap" as const },
    { id: "scan", tag: "Batch scan", title: "Scan the whole page", body: "Every question, filled in batches.", variant: "scan" as const },
] as const;

export default function FeaturesPage() {
    const compared = allFacts().length;
    const lastChecked = allFacts().reduce((m, f) => (f.lastChecked > m ? f.lastChecked : m), "2026-01-01");
    const checked = new Date(lastChecked + "T00:00:00Z").toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });

    return (
        <div className="min-h-screen bg-cream text-ink page-glow flex flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">

            <section className="pt-12 sm:pt-16 pb-10 sm:pb-12 text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <p className="inline-flex items-center gap-2 text-xs font-medium text-ink-secondary bg-paper border border-ink/[0.09] rounded-full px-3.5 py-1.5 mb-5 shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-emeraldBrand" aria-hidden="true" />
                        {FEATURES.length} features
                    </p>
                    <h1 className="font-display text-[36px] sm:text-[54px] font-bold tracking-[-0.035em] leading-[1.05] text-ink mb-5">
                        Everything ExamGhost does, in one place
                    </h1>
                    <p className="aeo-summary text-base sm:text-lg text-ink-muted max-w-2xl mx-auto mb-8 leading-relaxed">
                        ExamGhost is an AI Chrome extension that answers quiz and homework questions on the page. Double-click a question, snip a graph with Alt+S, or scan a whole page. Every feature below is something the extension does today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href={INSTALL_URL} target="_blank" rel="noopener noreferrer" className="btn-dark px-7 py-3.5 sm:py-4 text-[15px] sm:text-base shadow-lift">
                            <FaChrome className="w-4 h-4 text-sky" aria-hidden="true" />
                            Add to Chrome — it&apos;s free
                        </a>
                        <Link href={DEMO_URL} className="btn-soft px-7 py-3.5 sm:py-4 text-[15px] sm:text-base">
                            <span className="w-2 h-2 rounded-full bg-emeraldBrand" aria-hidden="true" />
                            Try the live demo
                        </Link>
                    </div>
                </div>
            </section>

            <section id="catalog" className="pb-16 sm:pb-24 scroll-mt-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <h2 className="sr-only">All {FEATURES.length} features</h2>
                    <FeatureCatalog />
                </div>
            </section>

            <section className="dark-surface relative overflow-hidden bg-dark-grid py-16 sm:py-24 bg-surface-dark text-white">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_60%_100%_at_50%_0%,rgba(59,91,219,0.16),transparent_75%)]"
                />
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                    <div className="text-center mb-10 sm:mb-14">
                        <p className="text-sm font-semibold text-white/55 mb-3">Workbench</p>
                        <h2 className="font-display text-[32px] sm:text-[46px] font-bold tracking-[-0.03em] leading-[1.06]">See it in action</h2>
                    </div>
                    <Reveal className="grid md:grid-cols-3 gap-6">
                        {DEMOS.map((d) => (
                            <div key={d.id} className="rounded-2xl bg-surface-dark-elevated border border-white/[0.12] surface-dark-card p-5 sm:p-6 flex flex-col hover:border-white/25 transition-colors">
                                <div className="aspect-video rounded-xl overflow-hidden bg-surface-dark ring-1 ring-white/10 mb-4">
                                    <MediaSlot slot={`features.${d.id}`} src={MEDIA.features[d.id]} label={`${d.title} demo`} fallback={<MockQuiz variant={d.variant} />} />
                                </div>
                                <div className="flex items-center justify-between gap-2 mb-1.5">
                                    <h3 className="font-display text-lg font-bold tracking-tight">{d.title}</h3>
                                    <span className="kbd-key-dark shrink-0">{d.tag}</span>
                                </div>
                                <p className="text-sm text-white/65 leading-relaxed">{d.body}</p>
                            </div>
                        ))}
                    </Reveal>
                </div>
            </section>

            <section className="py-16 sm:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <Reveal>
                        <div className="rounded-2xl bg-paper border border-ink/[0.09] surface-card p-7 sm:p-11 grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
                            <div>
                                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] leading-[1.1] mb-3">How does it compare?</h2>
                                <p className="text-ink-muted leading-relaxed mb-6">
                                    We compared ExamGhost with {compared} other quiz and homework tools on listed price, free tier and supported platforms, using each vendor&apos;s own site (checked {checked}). We make ExamGhost, so we&apos;re not neutral, and we say where details aren&apos;t published.
                                </p>
                                <Link href="/compare" className="btn-dark px-6 py-3.5 text-sm">
                                    See the full comparison <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                </Link>
                            </div>
                            <dl className="grid grid-cols-3 gap-px bg-ink/[0.08] rounded-xl border border-ink/[0.09] overflow-hidden text-center">
                                {[
                                    { n: String(compared), l: "tools compared" },
                                    { n: String(PLATFORMS_DATA.length), l: "platforms named" },
                                    { n: "5/day", l: "free solves" },
                                ].map((s) => (
                                    <div key={s.l} className="bg-surface-subtle/70 px-3 py-5">
                                        <dt className="sr-only">{s.l}</dt>
                                        <dd className="font-display text-2xl sm:text-3xl font-bold text-ink tabular-nums">{s.n}</dd>
                                        <dd className="text-xs text-ink-muted mt-1">{s.l}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="py-16 sm:py-20 bg-paper border-t border-ink/[0.08]">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-center mb-8">Questions</h2>
                    <div className="divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
                        {FEATURE_FAQS.map((f) => (
                            <details key={f.q} className="group py-4 sm:py-5">
                                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-semibold text-ink [&::-webkit-details-marker]:hidden">
                                    <h3 className="text-base sm:text-[17px] leading-snug group-hover:text-cobalt transition-colors">{f.q}</h3>
                                    <span className="w-8 h-8 rounded-full bg-surface-subtle border border-ink/[0.08] text-ink-muted grid place-items-center shrink-0 transition-colors group-open:bg-surface-dark group-open:text-white group-open:border-surface-dark">
                                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                                    </span>
                                </summary>
                                <p className="mt-3 pr-10 text-[15px] text-ink-muted leading-relaxed">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            </main>
            <FinalCta />
            <Footer hideCta />
        </div>
    );
}
