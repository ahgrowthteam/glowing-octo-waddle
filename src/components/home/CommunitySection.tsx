import React from "react";
import { FaDiscord } from "react-icons/fa";
import { MessageCircleQuestion, Lightbulb, Bug, Code2, ArrowRight } from "lucide-react";
import Reveal from "./Reveal";
import { DISCORD_URL } from "./config";

const TILES = [
    { icon: Lightbulb, tint: "#ffe9a0", title: "Ask for a missing feature", body: "Tell us what ExamGhost should do next, or what's getting in your way." },
    { icon: Code2, tint: "#c4d0f8", title: "Talk with the developer", body: "Ask how something works, or share what you'd change." },
    { icon: MessageCircleQuestion, tint: "#cdeecb", title: "Get unstuck", body: "Setup trouble, or a question that won't solve? Ask here." },
    { icon: Bug, tint: "#ffd5cc", title: "Report a bug or a wrong answer", body: "Spotted something off? Send it over so it can be fixed." },
];

export default function CommunitySection() {
    return (
        <section id="community" className="py-16 sm:py-24 scroll-mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <Reveal>
                    <div className="relative overflow-hidden rounded-[2rem] bg-[#eceefd] border border-[#5865F2]/15 ring-1 ring-inset ring-white/60 shadow-card p-7 sm:p-12 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-14 items-center">
                        <div aria-hidden="true" className="pointer-events-none absolute -top-24 -left-20 w-72 h-72 rounded-full bg-[#5865F2] opacity-[0.08] blur-3xl" />

                        <div className="relative text-center lg:text-left">
                            <span className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-semibold text-[#4752c4] shadow-sm mb-5">
                                <FaDiscord className="w-4 h-4" aria-hidden="true" /> Community
                            </span>
                            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-[1.08] mb-4">
                                Help shape what we build next
                            </h2>
                            <p className="text-base sm:text-lg text-ink-secondary leading-relaxed mb-7 max-w-md mx-auto lg:mx-0">
                                ExamGhost has a Discord community. Join to suggest features, talk with the developer and swap tips with other students. It&apos;s free to join.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                                <a
                                    href={DISCORD_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#5865F2] hover:bg-[#4752c4] text-white px-8 py-4 font-medium transition-colors shadow-lift"
                                >
                                    <FaDiscord className="w-5 h-5" aria-hidden="true" />
                                    Join the Discord
                                </a>
                                <a
                                    href="mailto:support@examghost.com"
                                    className="btn-soft px-8 py-4"
                                >
                                    Email us instead <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                </a>
                            </div>
                            <p className="mt-4 text-xs text-ink-muted">Please follow your school&apos;s academic integrity policy in the community, too.</p>
                        </div>

                        <ul className="relative grid sm:grid-cols-2 gap-3">
                            {TILES.map(({ icon: Icon, tint, title, body }) => (
                                <li key={title} className="rounded-2xl bg-white border border-black/[0.06] surface-card hover:-translate-y-0.5 hover:border-black/15 transition-all duration-200 p-5">
                                    <span className="grid place-items-center w-10 h-10 rounded-xl mb-4" style={{ backgroundColor: tint }}>
                                        <Icon className="w-5 h-5 text-ink" strokeWidth={1.9} aria-hidden="true" />
                                    </span>
                                    <h3 className="font-display font-bold text-ink text-[17px] leading-snug mb-1">{title}</h3>
                                    <p className="text-[14px] text-ink-muted leading-relaxed">{body}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
