"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export interface CompareRow {
    slug: string;
    name: string;
    domain: string;
    priceSummary: string | null;
    monthly: number | null;
    freeTier: string | null;
    platforms: string[];
    platformCount: number;
    hasFree: boolean;
    mentionsCanvas: boolean;
    kind: "answers" | "study" | "blocker" | "other";
    verified: boolean;
    confidence: "high" | "medium" | "low";
}

type Sort = "name" | "price" | "platforms";

function Pills({ r }: { r: CompareRow }) {
    if (r.kind !== "blocker" && r.verified) return null;
    return (
        <span className="mt-1 flex flex-wrap gap-1.5">
            {r.kind === "blocker" && <span className="rounded-full bg-amber-100 text-amber-900 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">Tab-activity blocker</span>}
            {!r.verified && <span className="rounded-full bg-black/5 text-ink-secondary px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide">Not verified yet</span>}
        </span>
    );
}

export default function CompareTable({ rows, examghost }: { rows: CompareRow[]; examghost: { priceSummary: string; freeTier: string; platformCount: number } }) {
    const [q, setQ] = useState("");
    const [onlyFree, setOnlyFree] = useState(false);
    const [onlyCanvas, setOnlyCanvas] = useState(false);
    const [onlyAnswers, setOnlyAnswers] = useState(false);
    const [sort, setSort] = useState<Sort>("name");

    const shown = useMemo(() => {
        const needle = q.trim().toLowerCase();
        let out = rows.filter((r) => (!needle || r.name.toLowerCase().includes(needle) || r.domain.includes(needle)) && (!onlyFree || r.hasFree) && (!onlyCanvas || r.mentionsCanvas) && (!onlyAnswers || r.kind === "answers" || r.kind === "study"));
        out = [...out].sort((a, b) => {
            if (sort === "platforms") {
                return b.platformCount === a.platformCount ? a.name.localeCompare(b.name) : b.platformCount - a.platformCount;
            }
            if (sort === "price") {
                const av = a.monthly ?? Infinity, bv = b.monthly ?? Infinity;
                return av === bv ? a.name.localeCompare(b.name) : av - bv;
            }
            return a.name.localeCompare(b.name);
        });
        return out;
    }, [rows, q, onlyFree, onlyCanvas, onlyAnswers, sort]);

    const chip = (on: boolean) =>
        `rounded-full border px-4 py-2 text-sm font-medium transition-colors ${on ? "bg-ink text-white border-ink" : "bg-white border-black/10 hover:border-black/25"}`;

    return (
        <div>
            <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-5">
                <label className="relative md:w-72">
                    <span className="sr-only">Search extensions</span>
                    <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-ink-muted" aria-hidden="true" />
                    <input
                        value={q}
                        onChange={(e) => setQ(e.target.value)}
                        placeholder="Search by name"
                        className="w-full rounded-full border border-black/10 bg-white pl-10 pr-4 py-2.5 text-sm focus:outline-none focus:border-black/30"
                    />
                </label>
                <div className="flex flex-wrap gap-2 items-center">
                    <button type="button" aria-pressed={onlyFree} onClick={() => setOnlyFree((v) => !v)} className={chip(onlyFree)}>Has a free tier or trial</button>
                    <button type="button" aria-pressed={onlyAnswers} onClick={() => setOnlyAnswers((v) => !v)} className={chip(onlyAnswers)}>AI answer tools only</button>
                    <button type="button" aria-pressed={onlyCanvas} onClick={() => setOnlyCanvas((v) => !v)} className={chip(onlyCanvas)}>Mentions Canvas</button>
                    <label className="text-sm text-ink-muted flex items-center gap-2">
                        Sort
                        <select value={sort} onChange={(e) => setSort(e.target.value as Sort)} className="rounded-full border border-black/10 bg-white px-3 py-2 text-sm text-ink">
                            <option value="name">Name A–Z</option>
                            <option value="price">Lowest listed price</option>
                            <option value="platforms">Most platforms named</option>
                        </select>
                    </label>
                </div>
            </div>
            <p className="text-xs text-ink-muted mb-3" aria-live="polite">Showing {shown.length} of {rows.length} extensions plus ExamGhost</p>

            {/* Desktop table */}
            <div className="hidden md:block bg-white rounded-3xl border border-black/10 shadow-card overflow-hidden">
                <table className="w-full text-left text-[15px]">
                    <thead className="bg-[#faf8f4] text-xs uppercase tracking-wider text-ink-muted">
                        <tr>
                            <th className="px-5 py-3.5 font-semibold">Extension</th>
                            <th className="px-5 py-3.5 font-semibold">Price (as listed)</th>
                            <th className="px-5 py-3.5 font-semibold">Free tier / trial</th>
                            <th className="px-5 py-3.5 font-semibold">Platforms</th>
                            <th className="px-5 py-3.5" />
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-[#eef3ff] border-t border-black/5">
                            <th scope="row" className="px-5 py-4 font-display font-bold">ExamGhost</th>
                            <td className="px-5 py-4">{examghost.priceSummary}</td>
                            <td className="px-5 py-4">{examghost.freeTier}</td>
                            <td className="px-5 py-4"><span className="font-semibold">{examghost.platformCount} named</span> plus any page via Alt+S screenshot</td>
                            <td className="px-5 py-4 text-right"><Link href="/" className="inline-flex items-center gap-1 font-medium underline underline-offset-4 decoration-black/20 hover:decoration-ink">Home</Link></td>
                        </tr>
                        {shown.map((r) => (
                            <tr key={r.slug} className="border-t border-black/5 align-top">
                                <th scope="row" className="px-5 py-4 font-display font-semibold">
                                    {r.name}
                                    <span className="block text-xs font-sans font-normal text-ink-muted">{r.domain}</span>
                                    <Pills r={r} />
                                </th>
                                <td className="px-5 py-4 text-ink-secondary max-w-[260px]">{r.priceSummary ?? <span className="text-ink-muted">Not stated</span>}</td>
                                <td className="px-5 py-4 text-ink-secondary max-w-[220px]">{r.freeTier ?? <span className="text-ink-muted">Not stated</span>}</td>
                                <td className="px-5 py-4 text-ink-secondary max-w-[200px]">{r.platformCount ? <><span className="font-semibold text-ink">{r.platformCount} named:</span> {r.platforms.slice(0, 3).join(", ")}{r.platformCount > 3 ? "…" : ""}</> : <span className="text-ink-muted">Not stated</span>}</td>
                                <td className="px-5 py-4 text-right whitespace-nowrap">
                                    <Link href={`/${r.slug}`} className="inline-flex items-center gap-1 font-medium hover:underline">
                                        Compare <ArrowRight className="w-4 h-4" aria-hidden="true" />
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {shown.length === 0 && <p className="px-5 py-8 text-center text-ink-muted">No extensions match those filters.</p>}
            </div>

            {/* Mobile cards */}
            <div className="md:hidden space-y-3">
                <div className="rounded-2xl bg-[#eef3ff] border border-black/10 p-4">
                    <p className="font-display font-bold mb-1">ExamGhost</p>
                    <p className="text-sm">{examghost.priceSummary}</p>
                    <p className="text-sm text-ink-secondary">{examghost.freeTier}</p>
                    <p className="text-sm text-ink-secondary">{examghost.platformCount} platforms named, plus any page via Alt+S</p>
                </div>
                {shown.map((r) => (
                    <Link key={r.slug} href={`/${r.slug}`} className="block rounded-2xl bg-white border border-black/10 p-4 shadow-card">
                        <div className="flex items-center justify-between">
                            <p className="font-display font-semibold">{r.name}</p>
                            <ArrowRight className="w-4 h-4" aria-hidden="true" />
                        </div>
                        <p className="text-xs text-ink-muted mb-2">{r.domain}</p>
                        <Pills r={r} />
                        <p className="text-sm text-ink-secondary">{r.priceSummary ?? "Price not stated"}</p>
                        <p className="text-sm text-ink-muted">{r.freeTier ?? "Free tier not stated"}</p>
                    </Link>
                ))}
                {shown.length === 0 && <p className="py-6 text-center text-ink-muted">No extensions match those filters.</p>}
            </div>
        </div>
    );
}
