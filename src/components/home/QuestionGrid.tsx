"use client";

import React, { useEffect, useRef, useState } from "react";
import { RotateCcw, MousePointerClick, Check } from "lucide-react";

// Every card maps to a question format the extension handles: single choice, multi-select,
// short text, dropdown (single and grouped for matching) and longer written answers.
type Kind = "choice" | "multi" | "blank" | "dropdown" | "match" | "short";
const KINDS: Kind[] = ["choice", "multi", "blank", "dropdown", "match", "short"];

const MATCH_ROWS = [
    { term: "Supply", answer: "Quantity sellers offer" },
    { term: "Demand", answer: "Quantity buyers want" },
    { term: "Inflation", answer: "A general rise in prices" },
    { term: "GDP", answer: "Total value of goods and services" },
];
const MATCH_OPTIONS = MATCH_ROWS.map((r) => r.answer);
const SHORT_ANSWER = "The total value of goods and services produced in a country.";

const WHY: Record<Kind, string> = {
    choice: "The derivative of x² is 2x (power rule: bring the exponent down, subtract one).",
    multi: "2 and 7 are prime; 4 and 9 each have another factor (2×2 and 3×3).",
    blank: "Pythagorean theorem: c = √(3² + 4²) = √25 = 5.",
    dropdown: "Na comes from natrium, the Latin name for sodium. Jupiter is the largest planet by far.",
    match: "Supply is what sellers offer, demand is what buyers want, inflation is a general price rise, GDP is total output.",
    short: "GDP adds up the market value of all final goods and services a country produces in a period.",
};

const none = (): Record<Kind, boolean> => ({ choice: false, multi: false, blank: false, dropdown: false, match: false, short: false });

function Head({ label, kind, solved, onSolve }: { label: string; kind: Kind; solved: boolean; onSolve: (k: Kind) => void }) {
    return (
        <div className="flex items-center justify-between mb-4">
            <span className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#2b55c7]">{label}</span>
            {solved ? (
                <span className="animate-pop-in inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700">
                    <Check className="w-3.5 h-3.5" aria-hidden="true" /> Solved
                </span>
            ) : (
                <button
                    onClick={() => onSolve(kind)}
                    className="inline-flex items-center gap-1 text-[11px] text-ink-muted hover:text-ink transition-colors"
                    aria-label={`Double click to solve the ${label} example`}
                >
                    <MousePointerClick className="w-3.5 h-3.5" aria-hidden="true" /> Double click
                </button>
            )}
        </div>
    );
}

export default function QuestionGrid() {
    const [solved, setSolved] = useState<Record<Kind, boolean>>(none());
    const [typed, setTyped] = useState("");
    const [shortText, setShortText] = useState("");
    const [matched, setMatched] = useState(0);
    const [touched, setTouched] = useState(false);
    const timers = useRef<ReturnType<typeof setTimeout>[]>([]);

    useEffect(() => () => timers.current.forEach(clearTimeout), []);
    const later = (fn: () => void, ms: number) => timers.current.push(setTimeout(fn, ms));

    const solve = (k: Kind) => {
        if (solved[k]) return;
        setTouched(true);
        setSolved((s) => ({ ...s, [k]: true }));
        if (k === "blank") later(() => setTyped("5"), 250);
        if (k === "match") MATCH_ROWS.forEach((_, i) => later(() => setMatched(i + 1), 200 + i * 260));
        if (k === "short") {
            for (let i = 2; i <= SHORT_ANSWER.length + 1; i += 2) later(() => setShortText(SHORT_ANSWER.slice(0, i)), 150 + i * 22);
        }
    };
    const reset = () => {
        timers.current.forEach(clearTimeout);
        timers.current = [];
        setSolved(none());
        setTyped("");
        setShortText("");
        setMatched(0);
    };
    const anySolved = KINDS.some((k) => solved[k]);
    const allSolved = KINDS.every((k) => solved[k]);

    const card = (isSolved: boolean) =>
        `relative flex flex-col bg-white rounded-3xl border shadow-card p-6 select-none cursor-pointer transition-all duration-200 ${
            isSolved ? "border-emerald-500/35 shadow-lift" : "border-black/10 hover:border-black/20 hover:shadow-lift"
        }`;
    const why = (k: Kind) => (
        <p className={`mt-auto pt-4 text-[13px] leading-relaxed text-ink-muted transition-opacity duration-500 ${solved[k] ? "opacity-100" : "opacity-0"}`} aria-live="polite">
            {solved[k] ? <><span className="font-semibold text-ink-secondary">Why: </span>{WHY[k]}</> : "\u00a0"}
        </p>
    );
    const row = (on: boolean) => `flex items-center gap-3 rounded-lg px-3 py-2 transition-colors duration-300 ${on ? "bg-emerald-100" : ""}`;
    const field = (on: boolean) =>
        `select-chevron w-full rounded-lg border px-3 py-2 text-sm pointer-events-none transition-colors duration-300 ${on ? "border-emerald-500 bg-emerald-100 text-ink font-medium" : "border-black/15 bg-white text-ink-muted"}`;

    return (
        <section id="question-types" className="py-16 sm:py-24 scroll-mt-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center mb-12">
                    <p className="text-sm font-semibold text-ink-muted mb-3">
                        Every question format
                    </p>
                    <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink leading-[1.05] mb-4">
                        Solves every question type
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted max-w-lg mx-auto">
                        Try answering one yourself, or double-click a card and watch it solve itself.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {/* Single choice */}
                    <article className={card(solved.choice)} onDoubleClick={() => solve("choice")} aria-label="Single choice example">
                        {!touched && (
                            <span className="absolute -top-3 right-5 rounded-full bg-ink px-3.5 py-1 text-xs font-semibold text-white ring-2 ring-cream shadow-card">
                                Double click
                            </span>
                        )}
                        <Head label="MCQ · Single choice" kind="choice" solved={solved.choice} onSolve={solve} />
                        <p className="font-medium text-ink mb-3">What is the derivative of f(x) = x²?</p>
                        <ul>
                            {["x", "2x", "x²", "2"].map((o, i) => (
                                <li key={o} className={row(solved.choice && i === 1)}>
                                    <input type="radio" readOnly checked={solved.choice && i === 1} className="w-4 h-4 accent-[#0b6bff] pointer-events-none" aria-label={o} />
                                    <span>{String.fromCharCode(65 + i)}. {o}</span>
                                </li>
                            ))}
                        </ul>
                                            {why("choice")}
                    </article>

                    {/* Multi-select */}
                    <article className={card(solved.multi)} onDoubleClick={() => solve("multi")} aria-label="Multi-select example">
                        <Head label="Multi-select" kind="multi" solved={solved.multi} onSolve={solve} />
                        <p className="font-medium text-ink mb-3">Which of these numbers are prime?</p>
                        <ul>
                            {["2", "4", "7", "9"].map((o, i) => {
                                const on = solved.multi && (i === 0 || i === 2);
                                return (
                                    <li key={o} className={row(on)}>
                                        <input type="checkbox" readOnly checked={on} className="w-4 h-4 accent-[#0b6bff] pointer-events-none" aria-label={o} />
                                        <span>{String.fromCharCode(65 + i)}. {o}</span>
                                    </li>
                                );
                            })}
                        </ul>
                                            {why("multi")}
                    </article>

                    {/* Fill in the blank */}
                    <article className={card(solved.blank)} onDoubleClick={() => solve("blank")} aria-label="Fill in the blank example">
                        <Head label="Fill in the blank" kind="blank" solved={solved.blank} onSolve={solve} />
                        <div className="mx-auto mb-3 w-[130px] rounded-lg border border-black/10 bg-[#faf8f4] p-2">
                            <svg viewBox="0 0 120 90" className="w-full" aria-label="Right triangle with legs 3 and 4">
                                <path d="M14 76 L14 16 L94 76 Z" fill="#e9eefc" stroke="#4361ee" strokeWidth="2" />
                                <path d="M14 66 L24 66 L24 76" fill="none" stroke="#4361ee" strokeWidth="1.5" />
                                <text x="3" y="50" fontSize="11" fill="#111">3</text>
                                <text x="50" y="87" fontSize="11" fill="#111">4</text>
                                <text x="60" y="38" fontSize="11" fill="#111">c</text>
                            </svg>
                        </div>
                        <p className="text-ink-secondary leading-relaxed">
                            A right triangle has legs 3 and 4. The hypotenuse c ={" "}
                            <span className={`inline-block min-w-[64px] rounded-md border px-3 py-1 text-center align-middle transition-colors duration-300 ${solved.blank ? "border-emerald-500 bg-emerald-100 text-ink" : "border-black/20 text-transparent"}`}>
                                {typed || "·"}
                            </span>
                            .
                        </p>
                                            {why("blank")}
                    </article>

                    {/* Dropdown select */}
                    <article className={card(solved.dropdown)} onDoubleClick={() => solve("dropdown")} aria-label="Dropdown example">
                        <Head label="Dropdown select" kind="dropdown" solved={solved.dropdown} onSolve={solve} />
                        <p className="font-medium text-ink mb-3">What is the chemical symbol for sodium?</p>
                        <select
                            value={solved.dropdown ? "Na" : ""}
                            onChange={() => {}}
                            aria-label="Chemical symbol for sodium"
                            className={`${field(solved.dropdown)} appearance-none`}
                        >
                            <option value="">Select an answer…</option>
                            {["K", "Na", "S", "So"].map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                        <p className="font-medium text-ink mt-5 mb-3">Which planet is the largest in our solar system?</p>
                        <select
                            value={solved.dropdown ? "Jupiter" : ""}
                            onChange={() => {}}
                            aria-label="Largest planet in our solar system"
                            className={`${field(solved.dropdown)} appearance-none`}
                        >
                            <option value="">Select an answer…</option>
                            {["Saturn", "Jupiter", "Neptune", "Earth"].map((o) => <option key={o} value={o}>{o}</option>)}
                        </select>
                                            {why("dropdown")}
                    </article>

                    {/* Matching */}
                    <article className={card(solved.match)} onDoubleClick={() => solve("match")} aria-label="Matching example">
                        <Head label="Matching" kind="match" solved={solved.match} onSolve={solve} />
                        <p className="font-medium text-ink mb-3">Match each term with its meaning:</p>
                        <div className="space-y-2">
                            {MATCH_ROWS.map((r, i) => {
                                const filled = solved.match && i < matched;
                                return (
                                    <div key={r.term} className="flex flex-col gap-1 text-sm">
                                        <span className="text-xs font-semibold text-ink-muted">{r.term}</span>
                                        <select
                                            value={filled ? r.answer : ""}
                                            onChange={() => {}}
                                            aria-label={`Meaning of ${r.term}`}
                                            className={`${field(filled)} appearance-none py-2`}
                                        >
                                            <option value="">Select…</option>
                                            {MATCH_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                                        </select>
                                    </div>
                                );
                            })}
                        </div>
                                            {why("match")}
                    </article>

                    {/* Short written answer */}
                    <article className={card(solved.short)} onDoubleClick={() => solve("short")} aria-label="Short answer example">
                        <Head label="Short answer" kind="short" solved={solved.short} onSolve={solve} />
                        <p className="font-medium text-ink mb-3">In one sentence, what does GDP measure?</p>
                        <div
                            className={`min-h-[116px] rounded-lg border px-3 py-2.5 text-sm leading-relaxed transition-colors duration-300 ${
                                solved.short ? "border-emerald-500 bg-emerald-50 text-ink" : "border-black/15 bg-white text-ink-muted"
                            }`}
                            aria-label="Answer box"
                        >
                            {shortText || "Type your answer here…"}
                        </div>
                                            {why("short")}
                    </article>
                </div>

                <div className="flex justify-center gap-3 mt-8">
                    {!allSolved && (
                        <button onClick={() => KINDS.forEach(solve)} className="btn-dark px-6 py-3 text-sm">
                            Solve all six
                        </button>
                    )}
                    {anySolved && (
                        <button onClick={reset} className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-white px-6 py-3 text-sm font-medium hover:border-black/25 transition-colors">
                            <RotateCcw className="w-4 h-4" aria-hidden="true" /> Reset
                        </button>
                    )}
                </div>
            </div>
        </section>
    );
}
