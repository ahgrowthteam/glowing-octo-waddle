"use client";

import React, { useMemo, useState } from "react";
import { MousePointerClick, SlidersHorizontal, ListChecks, ScanLine, Power, Search, X, type LucideIcon } from "lucide-react";
import { FEATURES, FEATURE_CATEGORIES, type FeatureCategory } from "./featuresData";

const ICON: Record<FeatureCategory, { icon: LucideIcon; tint: string }> = {
    Solve: { icon: MousePointerClick, tint: "#c4d0f8" },
    "Answer styles": { icon: SlidersHorizontal, tint: "#cdeecb" },
    "Question types": { icon: ListChecks, tint: "#e2d3fa" },
    Screenshots: { icon: ScanLine, tint: "#bfe3f6" },
    Control: { icon: Power, tint: "#ffe9a0" },
};

export default function FeatureCatalog() {
    const [q, setQ] = useState("");
    const [cat, setCat] = useState<FeatureCategory | "All">("All");

    const shown = useMemo(() => {
        const needle = q.trim().toLowerCase();
        return FEATURES.filter(
            (f) =>
                (cat === "All" || f.category === cat) &&
                (!needle || `${f.title} ${f.body} ${f.key ?? ""} ${f.category}`.toLowerCase().includes(needle))
        );
    }, [q, cat]);

    const count = (c: FeatureCategory | "All") => (c === "All" ? FEATURES.length : FEATURES.filter((f) => f.category === c).length);
    const chip = (on: boolean) =>
        `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${on ? "bg-ink text-white border-ink" : "bg-white border-black/10 hover:border-black/25 text-ink-secondary"}`;

    return (
        <div>
            <div className="rounded-3xl bg-white/85 border border-black/[0.08] surface-card p-3 sm:p-4 backdrop-blur-sm mb-5">
                <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
                    <label className="relative lg:w-80">
                        <span className="sr-only">Search features</span>
                        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
                        <input
                            value={q}
                            onChange={(e) => setQ(e.target.value)}
                            placeholder={`Search ${FEATURES.length} features`}
                            className="w-full rounded-full border border-black/10 bg-white pl-10 pr-9 py-2.5 text-sm focus:outline-none focus:border-black/30"
                        />
                        {q && (
                            <button
                                type="button"
                                onClick={() => setQ("")}
                                aria-label="Clear search"
                                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-full hover:bg-black/5 text-ink-muted"
                            >
                                <X className="w-3.5 h-3.5" aria-hidden="true" />
                            </button>
                        )}
                    </label>
                    <div role="group" aria-label="Filter by category" className="flex flex-wrap gap-2">
                        {(["All", ...FEATURE_CATEGORIES] as const).map((c) => (
                            <button key={c} type="button" aria-pressed={cat === c} onClick={() => setCat(c)} className={chip(cat === c)}>
                                {c} <span className="opacity-60">{count(c)}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-xs text-ink-muted mb-4" aria-live="polite">
                Showing {shown.length} of {FEATURES.length} features
            </p>

            {shown.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-black/15 bg-white/60 px-6 py-12 text-center text-ink-muted">
                    <p>No features match &ldquo;{q}&rdquo;. Try &ldquo;screenshot&rdquo;, &ldquo;mode&rdquo; or &ldquo;shortcut&rdquo;.</p>
                    <button
                        type="button"
                        onClick={() => { setQ(""); setCat("All"); }}
                        className="btn-soft mt-4 px-5 py-2 text-sm"
                    >
                        Reset filters
                    </button>
                </div>
            ) : (
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {shown.map((f) => {
                        const { icon: Icon, tint } = ICON[f.category];
                        return (
                            <li key={f.id} className="flex flex-col bg-white rounded-3xl border border-black/10 surface-card p-6 hover:border-black/20 hover:shadow-lift hover:-translate-y-0.5 transition-all duration-200">
                                <div className="flex items-center justify-between mb-4">
                                    <span className="grid place-items-center w-10 h-10 rounded-xl" style={{ backgroundColor: tint }}>
                                        <Icon className="w-5 h-5 text-ink" strokeWidth={1.9} aria-hidden="true" />
                                    </span>
                                    {f.key && (
                                        <kbd className="kbd-key">{f.key}</kbd>
                                    )}
                                </div>
                                <h3 className="font-display text-lg font-bold text-ink leading-snug mb-1.5">{f.title}</h3>
                                <p className="text-[15px] text-ink-muted leading-relaxed">{f.body}</p>
                                <p className="mt-auto pt-4 text-[11px] font-semibold uppercase tracking-wider text-ink-secondary">{f.category}</p>
                            </li>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}
