'use client';

import React from 'react';
import { Star, CheckCircle2, GraduationCap } from 'lucide-react';

export default function Reviews() {
    const stats = [
        { value: "0 Flags", label: "SpeedGrader Log Rate", desc: "Across 140,000+ completed tests" },
        { value: "50,000+", label: "Verified Students", desc: "Ivy League & top state universities" },
        { value: "310ms", label: "Vision Latency", desc: "Instant on-screen OCR decoding" },
        { value: "4.9 / 5", label: "Average Rating", desc: "From 4,200+ authenticated users" }
    ];

    const reviews = [
        {
            name: "Alex M.",
            uni: "UC San Diego",
            major: "Computer Science",
            rating: 5,
            text: "My biology prof checks Canvas quiz logs religiously. ExamGhost completely blocked every blur and visibility event—my attempt history looked 100% clean with zero leaves.",
            highlight: "Zero Canvas logs recorded"
        },
        {
            name: "Marcus K.",
            uni: "Penn State",
            major: "Economics & Finance",
            rating: 5,
            text: "The Snap-It screenshot crop is pure magic. We had macro questions with shift curves that weren't selectable. Drew a box around it with ⌘+Shift+S and got the right equilibrium point in 1 second.",
            highlight: "Snap-It solved locked graphs"
        },
        {
            name: "Sarah T.",
            uni: "UT Austin",
            major: "Pre-Med / Biochemistry",
            rating: 5,
            text: "Went from a 74% to a 96% on organic chemistry quizzes. What makes ExamGhost better is the 5% Opacity Mode—it just puts a soft whisper next to the answer so nobody peeking over your shoulder notices.",
            highlight: "Stealth opacity dial is undetectable"
        },
        {
            name: "David L.",
            uni: "NYU",
            major: "Business Administration",
            rating: 5,
            text: "The 2nd attempt auto-memory saved my entire semester. It loaded all my correct answers from attempt 1 automatically, and solved the three I missed. Easiest 100% ever.",
            highlight: "Smart 2nd-attempt auto memory"
        },
        {
            name: "Elena R.",
            uni: "Univ. of Washington",
            major: "Psychology & Stats",
            rating: 5,
            text: "I was super skeptical about proctors detecting extensions. ExamGhost uses a shadow DOM layer so the university scripts can't even see the element. Truly 100% stealth.",
            highlight: "Shadow DOM isolation works"
        },
        {
            name: "Jordan P.",
            uni: "Univ. of Michigan",
            major: "Mechanical Engineering",
            rating: 5,
            text: "Solves calculus integrals with limits flawlessly. No copy-pasting required, which was the biggest issue with ChatGPT. ExamGhost is in a completely different league.",
            highlight: "Instant LaTeX calculus engine"
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-cream text-ink border-b border-black/5" id="reviews">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Section Head */}
                <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>VERIFIED REVIEWS</span>
                    </p>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-5">
                        Students who never worry<br />
                        about exam logs again.
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                        Over 50,000 university students rely on ExamGhost to stay completely shielded on Canvas, Blackboard, Moodle, and D2L.
                    </p>
                </div>

                {/* Stat Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 max-w-5xl mx-auto">
                    {stats.map((s, idx) => (
                        <div key={idx} className="p-5 sm:p-6 rounded-3xl bg-white border border-black/5 shadow-xs text-center">
                            <div className="font-display font-bold text-2xl sm:text-3xl text-ink mb-1">
                                {s.value}
                            </div>
                            <div className="text-xs font-semibold text-ink-secondary mb-1">
                                {s.label}
                            </div>
                            <div className="text-[11px] text-ink-muted">
                                {s.desc}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Reviews 3-Col Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    {reviews.map((r, idx) => (
                        <div
                            key={idx}
                            className="p-6 sm:p-7 rounded-3xl bg-white border border-black/10 shadow-card flex flex-col justify-between hover:-translate-y-1 transition-transform duration-200"
                        >
                            <div>
                                {/* Rating Stars */}
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-[#ffd23f] text-[#ffd23f]" />
                                    ))}
                                </div>

                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed mb-6">
                                    &ldquo;{r.text}&rdquo;
                                </p>
                            </div>

                            <div className="pt-4 border-t border-black/5">
                                <div className="flex items-center justify-between mb-1">
                                    <span className="font-display font-bold text-sm text-ink">
                                        {r.name}
                                    </span>
                                    <span className="text-[10px] font-semibold text-emerald-800 bg-[#cdeecb] px-2 py-0.5 rounded-full flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                                        <span>Verified Student</span>
                                    </span>
                                </div>
                                <div className="text-xs text-ink-muted flex items-center gap-1">
                                    <GraduationCap className="w-3.5 h-3.5" />
                                    <span>{r.uni} · {r.major}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
