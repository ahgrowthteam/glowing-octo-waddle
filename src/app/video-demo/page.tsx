import React from "react";
import Link from "next/link";
import { ArrowUpRight, Lock } from "lucide-react";
import { FaChrome } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCta from "@/components/home/FinalCta";
import Reveal from "@/components/home/Reveal";
import MediaSlot from "@/components/home/MediaSlot";
import MockQuiz from "@/components/home/MockQuiz";
import { HeroVideo } from "@/components/home/HomeHero";
import { INSTALL_URL, DEMO_URL, MEDIA } from "@/components/home/config";

// One card per platform page that exists in src/app. Set `src` (an .mp4 path or URL) and optional `poster`
// to show a recording; leave src empty to show the built-in graphic.
// NOTE: the older clips in /public/videos contain outdated claims and wrong plan details,
// so they are deliberately not used here. Re-record them, then point `src` at the new files.
const PLATFORMS: { name: string; slug: string; src: string; poster?: string }[] = [
    { name: "Canvas", slug: "canvas-lms-quiz-solver", src: "" },
    { name: "Blackboard", slug: "blackboard-quiz-solver", src: "" },
    { name: "Moodle", slug: "moodle-quiz-solver", src: "" },
    { name: "D2L Brightspace", slug: "d2l-brightspace-quiz-solver", src: "" },
    { name: "Schoology", slug: "schoology-quiz-solver", src: "" },
    { name: "Google Forms", slug: "google-forms-quiz-solver", src: "" },
    { name: "McGraw Hill Connect & ALEKS", slug: "mcgraw-hill-connect-aleks-solver", src: "" },
    { name: "Pearson MyLab & Mastering", slug: "pearson-mylab-mastering-solver", src: "" },
    { name: "Cengage MindTap & WebAssign", slug: "cengage-mindtap-webassign-solver", src: "" },
    { name: "Edgenuity", slug: "edgenuity-quiz-solver", src: "" },
    { name: "DeltaMath", slug: "deltamath-homework-solver", src: "" },
    { name: "Gradescope", slug: "gradescope-exam-solver", src: "" },
];

const VARIANTS = ["solve", "snap", "scan", "study"] as const;

export default function VideoDemoPage() {
    return (
        <div className="min-h-screen bg-cream text-ink page-glow flex flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">

            <section className="relative pt-12 sm:pt-16 pb-14 sm:pb-20 overflow-hidden">
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <p className="inline-flex items-center gap-2 text-xs font-medium text-ink-secondary bg-paper border border-ink/[0.09] rounded-full px-3.5 py-1.5 mb-5 shadow-xs">
                        <span className="w-2 h-2 rounded-full bg-emeraldBrand" aria-hidden="true" />
                        Demos
                    </p>
                    <h1 className="font-display text-[36px] sm:text-[54px] font-bold tracking-[-0.035em] leading-[1.05] text-ink mb-5">
                        Watch the demos
                    </h1>
                    <p className="aeo-summary text-base sm:text-lg text-ink-muted max-w-xl mx-auto mb-8 leading-relaxed">
                        See ExamGhost answer a quiz question on the page, then open the guide for your platform.
                    </p>

                    <div className="relative mb-8 text-left">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -inset-4 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(59,91,219,0.12),transparent_65%)] -z-10"
                        />
                        <div className="rounded-2xl sm:rounded-3xl bg-paper p-2 sm:p-2.5 ring-1 ring-ink/[0.09] shadow-lift">
                            <div className="flex items-center gap-2 rounded-xl bg-surface-subtle border border-ink/[0.07] px-3 py-2 mb-2">
                                <span className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                                </span>
                                <span className="ml-1 flex-1 min-w-0 inline-flex items-center gap-1.5 rounded-lg bg-paper border border-ink/[0.07] px-2.5 py-1 text-[11px] font-mono text-ink-muted">
                                    <Lock className="w-2.5 h-2.5 shrink-0" aria-hidden="true" />
                                    <span className="truncate">quiz-walkthrough · 45s</span>
                                </span>
                                <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-emeraldBrand-soft border border-emeraldBrand/20 px-2.5 py-0.5 text-[11px] font-semibold text-emeraldBrand shrink-0">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emeraldBrand" aria-hidden="true" />
                                    ExamGhost · Active
                                </span>
                            </div>
                            <HeroVideo slot="hero" videoId={MEDIA.hero.youtube} src={MEDIA.hero.video} />
                        </div>
                    </div>

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

            <section className="py-16 sm:py-24 bg-surface-subtle/75 border-y border-ink/[0.08]">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-center mb-10 sm:mb-14">By platform</h2>
                    <Reveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {PLATFORMS.map((p, i) => (
                            <Link
                                key={p.slug}
                                href={`/${p.slug}`}
                                className="group rounded-2xl bg-paper border border-ink/[0.09] surface-card overflow-hidden hover:border-cobalt/40 hover:shadow-card transition-all duration-200"
                            >
                                <div className="aspect-video bg-surface-subtle bg-warm-grid p-3 overflow-hidden border-b border-ink/[0.07]">
                                    <div className="w-full h-full rounded-xl overflow-hidden border border-ink/[0.08] shadow-xs">
                                        <MediaSlot
                                            slot={`demo.${p.slug}`}
                                            src={p.src}
                                            label={`${p.name} demo`}
                                            fallback={<MockQuiz variant={VARIANTS[i % VARIANTS.length]} />}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between gap-3 px-5 py-4">
                                    <h3 className="font-display text-[17px] font-bold text-ink group-hover:text-cobalt transition-colors">{p.name}</h3>
                                    <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-cobalt shrink-0 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                                </div>
                            </Link>
                        ))}
                    </Reveal>
                </div>
            </section>

            </main>
            <FinalCta />
            <Footer hideCta />
        </div>
    );
}
