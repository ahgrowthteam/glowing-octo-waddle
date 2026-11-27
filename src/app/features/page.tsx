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
    { id: "doubleClick", title: "Double-click to solve", body: "The answer lands on the question itself.", variant: "solve" as const },
    { id: "snap", title: "Alt+S screenshot snip", body: "Drag a box around a graph or diagram.", variant: "snap" as const },
    { id: "scan", title: "Scan the whole page", body: "Every question, filled in batches.", variant: "scan" as const },
] as const;

export default function FeaturesPage() {
    const compared = allFacts().length;
    const lastChecked = allFacts().reduce((m, f) => (f.lastChecked > m ? f.lastChecked : m), "2026-01-01");
    const checked = new Date(lastChecked + "T00:00:00Z").toLocaleDateString("en-US", { month: "long", year: "numeric", timeZone: "UTC" });

    return (
        <main id="main-content" className="min-h-screen bg-cream text-ink page-glow">
            <Navbar />

            <section className="pt-12 sm:pt-16 pb-10 sm:pb-12 text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <p className="inline-flex items-center gap-2 text-xs font-semibold text-ink-secondary bg-white/85 border border-black/[0.08] rounded-full px-3.5 py-1.5 mb-5 shadow-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                        {FEATURES.length} features
                    </p>
                    <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
                        Everything ExamGhost does, in one place
                    </h1>
                    <p className="aeo-summary text-base sm:text-lg text-ink-muted max-w-2xl mx-auto mb-8">
                        ExamGhost is an AI Chrome extension that answers quiz and homework questions on the page. Double-click a question, snip a graph with Alt+S, or scan a whole page. Every feature below is something the extension does today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <a href={INSTALL_URL} target="_blank" rel="noopener noreferrer" className="btn-dark px-7 py-4 text-base shadow-lift">
                            <FaChrome className="w-4 h-4 text-[#bfe3f6]" aria-hidden="true" />
                            Add to Chrome — it&apos;s free
                        </a>
                        <Link href={DEMO_URL} className="btn-soft px-7 py-4 text-base">
                            <span className="w-2 h-2 rounded-full bg-emerald-500" aria-hidden="true" />
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

            <section className="dark-surface relative overflow-hidden bg-dark-grid py-16 sm:py-24 bg-[#18181b] text-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                    <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-center mb-10 sm:mb-14">See it in action</h2>
                    <Reveal className="grid md:grid-cols-3 gap-6">
                        {DEMOS.map((d) => (
                            <div key={d.id} className="rounded-3xl bg-gradient-to-b from-white/[0.055] to-white/[0.02] border border-white/[0.08] surface-dark-card p-5 flex flex-col hover:border-white/[0.16] hover:-translate-y-0.5 transition-all duration-300">
                                <div className="aspect-video rounded-2xl overflow-hidden bg-[#0c0c0e] ring-1 ring-white/10 shadow-lift mb-4">
                                    <MediaSlot slot={`features.${d.id}`} src={MEDIA.features[d.id]} label={`${d.title} demo`} fallback={<MockQuiz variant={d.variant} />} />
                                </div>
                                <h3 className="font-display text-lg font-bold mb-1">{d.title}</h3>
                                <p className="text-sm text-white/65">{d.body}</p>
                            </div>
                        ))}
                    </Reveal>
                </div>
            </section>

            <section className="py-16 sm:py-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6">
                    <Reveal>
                        <div className="rounded-[2rem] bg-white border border-black/10 surface-card p-7 sm:p-12 grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-12 items-center">
                            <div>
                                <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight leading-[1.1] mb-3">How does it compare?</h2>
                                <p className="text-ink-muted leading-relaxed mb-6">
                                    We compared ExamGhost with {compared} other quiz and homework tools on listed price, free tier and supported platforms, using each vendor&apos;s own site (checked {checked}). We make ExamGhost, so we&apos;re not neutral, and we say where details aren&apos;t published.
                                </p>
                                <Link href="/compare" className="btn-dark px-6 py-3.5 text-sm">
                                    See the full comparison <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                </Link>
                            </div>
                            <dl className="grid grid-cols-3 gap-3 text-center">
                                {[
                                    { n: String(compared), l: "tools compared" },
                                    { n: String(PLATFORMS_DATA.length), l: "platforms named" },
                                    { n: "5/day", l: "free solves" },
                                ].map((s) => (
                                    <div key={s.l} className="rounded-2xl bg-[#faf8f4] border border-black/[0.08] px-3 py-5">
                                        <dt className="sr-only">{s.l}</dt>
                                        <dd className="font-display text-3xl font-bold text-ink tabular-nums">{s.n}</dd>
                                        <dd className="text-xs text-ink-muted mt-1">{s.l}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </Reveal>
                </div>
            </section>

            <section className="pb-16 sm:pb-24">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-center mb-8">Questions</h2>
                    <div className="space-y-3">
                        {FEATURE_FAQS.map((f) => (
                            <details key={f.q} className="group bg-white rounded-2xl border border-black/10 surface-card hover:border-black/20 transition-colors px-5 sm:px-6 py-4 sm:py-5 open:shadow-card">
                                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-semibold [&::-webkit-details-marker]:hidden">
                                    <h3 className="text-base sm:text-lg">{f.q}</h3>
                                    <span className="w-8 h-8 rounded-full bg-[#f7f4ee] group-open:bg-ink group-open:text-white grid place-items-center shrink-0 text-ink-muted transition-colors">
                                        <ChevronDown className="w-4 h-4 transition-transform group-open:rotate-180" aria-hidden="true" />
                                    </span>
                                </summary>
                                <p className="mt-3 pt-3 border-t border-black/5 text-[15px] text-ink-muted leading-relaxed">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCta />
            <Footer hideCta />
        </main>
    );
}
