import React from "react";
import { FaDiscord } from "react-icons/fa";
import { MessageCircleQuestion, Lightbulb, Bug, Code2 } from "lucide-react";
import Reveal from "./Reveal";
import { DISCORD_URL } from "./config";

const TILES = [
    { icon: Lightbulb, chip: "bg-cobalt-soft text-cobalt", title: "Ask for a missing feature", body: "Tell us what ExamGhost should do next, or what's getting in your way." },
    { icon: Code2, chip: "bg-discord-soft text-discord", title: "Talk with the developer", body: "Ask how something works, or share what you'd change." },
    { icon: MessageCircleQuestion, chip: "bg-emeraldBrand-soft text-emeraldBrand", title: "Get unstuck", body: "Setup trouble, or a question that won't solve? Ask here." },
    { icon: Bug, chip: "bg-surface-subtle text-ink", title: "Report a bug or a wrong answer", body: "Spotted something off? Send it over so it can be fixed." },
];

export default function CommunitySection() {
    return (
        <section id="community" className="py-16 sm:py-24 scroll-mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <Reveal>
                    <div className="relative overflow-hidden rounded-2xl bg-discord-soft/75 border border-discord/20 shadow-xs p-7 sm:p-11 grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-12 items-center">
                        <div className="relative text-center lg:text-left">
                            <div className="inline-flex items-center gap-2.5 mb-5">
                                <span className="w-9 h-9 rounded-full overflow-hidden border border-ink/10 bg-paper shadow-xs shrink-0">
                                    <img src="/images/ghost/ghost_peace.jpg" alt="" width={36} height={36} className="w-full h-full object-cover scale-105" />
                                </span>
                                <span className="inline-flex items-center gap-2 rounded-full bg-paper border border-discord/20 px-3.5 py-1.5 text-sm font-semibold text-discord shadow-xs">
                                    <FaDiscord className="w-4 h-4" aria-hidden="true" /> Community
                                </span>
                            </div>
                            <h2 className="font-display text-[32px] sm:text-[44px] font-bold tracking-[-0.03em] text-ink leading-[1.08] mb-4">
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
                                    className="inline-flex items-center justify-center gap-2.5 rounded-full bg-discord hover:bg-discord-hover text-white px-7 py-3.5 sm:py-4 font-semibold transition-colors shadow-soft"
                                >
                                    <FaDiscord className="w-5 h-5" aria-hidden="true" />
                                    Join the Discord
                                </a>
                                <a
                                    href="mailto:support@examghost.com"
                                    className="btn-soft px-7 py-3.5 sm:py-4"
                                >
                                    Email us instead
                                </a>
                            </div>
                            <p className="mt-4 text-xs text-ink-muted">Please follow your school&apos;s academic integrity policy in the community, too.</p>
                        </div>

                        <ul className="relative grid sm:grid-cols-2 gap-px bg-ink/[0.08] rounded-xl border border-ink/[0.09] overflow-hidden shadow-xs">
                            {TILES.map(({ icon: Icon, chip, title, body }) => (
                                <li key={title} className="bg-paper p-5 sm:p-6">
                                    <span className={`grid place-items-center w-9 h-9 rounded-lg mb-3.5 ${chip}`}>
                                        <Icon className="w-4 h-4" strokeWidth={2} aria-hidden="true" />
                                    </span>
                                    <h3 className="font-display font-bold text-ink text-[16px] leading-snug mb-1">{title}</h3>
                                    <p className="text-[13.5px] text-ink-muted leading-relaxed">{body}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
