import React from "react";
import Reveal from "./Reveal";
import Link from "next/link";
import { Check } from "lucide-react";
import { INSTALL_URL } from "./config";

const PLANS = [
    {
        name: "Free",
        price: "$0",
        unit: "",
        note: "No card needed",
        features: ["5 solves a day", "All answer styles", "Snap-It on free solves"],
        cta: "Start free",
        featured: false,
    },
    {
        name: "Monthly",
        price: "$19",
        unit: "/mo",
        note: "Cancel anytime",
        features: ["Unlimited solves, screenshots included", "Scan page + Alt+S snips", "Priority support"],
        cta: "Get Monthly",
        featured: false,
    },
    {
        name: "Academic Year",
        price: "$99",
        unit: "/yr",
        note: "$8.25 a month · best value",
        features: ["Unlimited solves, screenshots included", "Scan page + Alt+S snips", "Priority support"],
        cta: "Get Academic Year",
        featured: true,
    },
    {
        name: "Lifetime",
        price: "$199",
        unit: " once",
        note: "Pay once, keep it",
        features: ["Unlimited solves, screenshots included", "Scan page + Alt+S snips", "All future updates"],
        cta: "Get Lifetime",
        featured: false,
    },
];

export default function HomePricing() {
    return (
        <section id="pricing" className="py-16 sm:py-24 scroll-mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-12">
                    <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink mb-3">
                        Simple pricing
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted">
                        Start free. Upgrade when you need unlimited. 14-day money-back guarantee. Prices in USD.
                    </p>
                    <p className="mt-3 text-sm text-ink-muted">
                        Comparing options?{" "}
                        <Link href="/compare" className="font-semibold text-ink underline underline-offset-4 decoration-black/20 hover:decoration-ink">
                            See how other extensions price their plans
                        </Link>
                    </p>
                </div>

                <Reveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 items-stretch">
                    {PLANS.map((p) => (
                        <div
                            key={p.name}
                            className={`relative rounded-3xl p-6 flex flex-col ${
                                p.featured
                                    ? "bg-ink text-white shadow-lift"
                                    : "bg-white border border-black/10 shadow-card"
                            }`}
                        >
                            {p.featured && (
                                <span className="absolute -top-3 left-6 text-[11px] font-bold uppercase tracking-wider bg-[#ffd23f] text-ink px-3 py-1 rounded-full">
                                    Most popular
                                </span>
                            )}
                            <h3 className="font-display text-lg font-bold mb-3">{p.name}</h3>
                            <p className="flex items-baseline gap-1 mb-1">
                                <span className="font-display text-4xl font-bold">{p.price}</span>
                                <span className={p.featured ? "text-white/60" : "text-ink-muted"}>{p.unit}</span>
                            </p>
                            <p className={`text-[13px] mb-5 ${p.featured ? "text-white/60" : "text-ink-muted"}`}>{p.note}</p>
                            <ul className="space-y-2 mb-6 text-[14px] flex-1">
                                {p.features.map((f) => (
                                    <li key={f} className="flex items-start gap-2">
                                        <Check className={`w-4 h-4 mt-0.5 shrink-0 ${p.featured ? "text-[#bfe9d9]" : "text-emerald-600"}`} aria-hidden="true" />
                                        {f}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href={INSTALL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center rounded-full py-3 text-[15px] font-medium transition-colors ${
                                    p.featured
                                        ? "bg-white text-ink hover:bg-[#f2ede4]"
                                        : "bg-ink text-white hover:bg-[#252422]"
                                }`}
                            >
                                {p.cta}
                            </a>
                        </div>
                    ))}
                </Reveal>
            </div>
        </section>
    );
}
