import React from "react";
import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import { FaDiscord } from "react-icons/fa";
import { INSTALL_URL, DEMO_URL, DISCORD_URL } from "./config";

// secondary: "discord" (default) or "demo". Use "demo" on pages that already have a Discord section.
export default function FinalCta({ secondary = "discord" }: { secondary?: "discord" | "demo" }) {
    return (
        <section className="py-16 sm:py-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6">
                <div className="relative overflow-hidden bg-[#1b1918] text-white rounded-[2rem] px-6 py-14 sm:py-20 text-center shadow-lift">
                    <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,111,224,0.18),transparent_65%)]" />
                    <div className="relative">
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 mb-7">
                            <Zap className="w-4 h-4 text-[#6b97f0]" aria-hidden="true" /> Start free today
                        </span>
                        <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
                            Your next deadline<br />
                            just got <span className="text-[#6b97f0]">easier</span>
                        </h2>
                        <p className="text-white/60 max-w-md mx-auto mb-9 text-base sm:text-lg">
                            Install ExamGhost in 30 seconds and get 5 free solves every day.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                            <a
                                href={INSTALL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#3b6fe0] hover:bg-[#2f5fcb] px-8 py-4 font-medium transition-colors shadow-[0_8px_30px_rgba(59,111,224,0.45)]"
                            >
                                Add to Chrome <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </a>
                            {secondary === "discord" ? (
                                <a
                                    href={DISCORD_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 hover:border-white/30 px-8 py-4 font-medium transition-colors"
                                >
                                    <FaDiscord className="w-4 h-4" aria-hidden="true" /> Join our Discord
                                </a>
                            ) : (
                                <Link
                                    href={DEMO_URL}
                                    className="inline-flex items-center justify-center rounded-full border border-white/15 hover:border-white/30 px-8 py-4 font-medium transition-colors"
                                >
                                    Try the live demo
                                </Link>
                            )}
                        </div>
                        <p className="mt-6 text-sm text-white/50">
                            Questions? Ask on Discord or email{" "}
                            <a href="mailto:support@examghost.com" className="underline underline-offset-4 decoration-white/30 hover:decoration-white/70">support@examghost.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
