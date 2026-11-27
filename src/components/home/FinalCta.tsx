import React from "react";
import Link from "next/link";
import { Zap } from "lucide-react";
import { FaChrome, FaDiscord } from "react-icons/fa";
import Ghost from "./Ghost";
import { INSTALL_URL, DEMO_URL, DISCORD_URL } from "./config";

// secondary: "discord" (default) or "demo". Use "demo" on pages that already have a Discord section.
export default function FinalCta({ secondary = "discord" }: { secondary?: "discord" | "demo" }) {
    return (
        <section className="dark-surface py-16 sm:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="relative overflow-hidden bg-surface-dark bg-dark-grid text-white rounded-3xl px-6 py-14 sm:py-20 text-center surface-dark-card border border-white/10">
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-x-0 -top-20 h-72 bg-[radial-gradient(ellipse_55%_90%_at_50%_0%,rgba(59,91,219,0.22),transparent_75%)]"
                    />
                    <div className="relative">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] pl-2 pr-4 py-1.5 text-sm text-white/90 mb-7">
                            <Ghost size={20} />
                            <Zap className="w-3.5 h-3.5 text-[#ffd23f]" aria-hidden="true" /> Start free today
                        </span>
                        <h2 className="font-display text-[34px] sm:text-[50px] lg:text-[54px] font-bold tracking-[-0.03em] leading-[1.05] mb-5">
                            Your next deadline<br />
                            just got easier.
                        </h2>
                        <p className="text-white/70 max-w-md mx-auto mb-9 text-base sm:text-lg">
                            Install ExamGhost in 30 seconds and get 5 free solves every day.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href={INSTALL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-paper text-ink hover:bg-cream px-8 py-4 font-semibold transition-colors shadow-lift"
                            >
                                <FaChrome className="w-4 h-4 text-cobalt" aria-hidden="true" />
                                Add to Chrome
                            </a>
                            {secondary === "discord" ? (
                                <a
                                    href={DISCORD_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.05] hover:bg-white/[0.11] hover:border-white/30 px-8 py-4 font-medium transition-colors"
                                >
                                    <FaDiscord className="w-4 h-4 text-[#8EA4FF]" aria-hidden="true" /> Join our Discord
                                </a>
                            ) : (
                                <Link
                                    href={DEMO_URL}
                                    className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.05] hover:bg-white/[0.11] hover:border-white/30 px-8 py-4 font-medium transition-colors"
                                >
                                    Try the live demo
                                </Link>
                            )}
                        </div>
                        <p className="mt-6 text-sm text-white/60">
                            Questions? Ask on Discord or email{" "}
                            <a href="mailto:support@examghost.com" className="underline underline-offset-4 decoration-white/30 hover:decoration-white/75">
                                support@examghost.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
