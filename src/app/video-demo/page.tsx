import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
// NOTE: the older clips in /public/videos contain claims about evading detection and wrong plan details,
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
        <main id="main-content" className="min-h-screen bg-cream text-ink page-glow">
            <Navbar />

            <section className="relative pt-12 sm:pt-16 pb-14 sm:pb-20 overflow-hidden">
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-4">Demos</p>
                    <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-5">Watch the demos</h1>
                    <p className="aeo-summary text-base sm:text-lg text-ink-muted max-w-xl mx-auto mb-8">
                        See ExamGhost answer a quiz question on the page, then open the guide for your platform.
                    </p>
                    <div className="mb-8 text-left rounded-[24px] sm:rounded-[30px] bg-white/75 p-1.5 sm:p-2.5 ring-1 ring-black/[0.08] shadow-lift backdrop-blur-sm">
                        <HeroVideo slot="hero" videoId={MEDIA.hero.youtube} src={MEDIA.hero.video} />
                    </div>
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

            <section className="py-16 sm:py-24 bg-white/60 border-y border-black/5">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-center mb-10 sm:mb-14">By platform</h2>
                    <Reveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                        {PLATFORMS.map((p, i) => (
                            <Link
                                key={p.slug}
                                href={`/${p.slug}`}
                                className="group bg-white rounded-3xl border border-black/10 shadow-card overflow-hidden hover:border-black/25 hover:shadow-lift transition-all duration-200"
                            >
                                <div className="aspect-video bg-[#eef0f3] overflow-hidden">
                                    <MediaSlot
                                        slot={`demo.${p.slug}`}
                                        src={p.src}
                                        label={`${p.name} demo`}
                                        fallback={<MockQuiz variant={VARIANTS[i % VARIANTS.length]} />}
                                    />
                                </div>
                                <div className="flex items-center justify-between gap-3 px-5 py-4">
                                    <h3 className="font-display text-lg font-bold">{p.name}</h3>
                                    <ArrowRight className="w-4 h-4 text-ink-muted transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                                </div>
                            </Link>
                        ))}
                    </Reveal>
                </div>
            </section>

            <FinalCta />
            <Footer hideCta />
        </main>
    );
}
