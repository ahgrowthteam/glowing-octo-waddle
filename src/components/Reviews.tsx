'use client';

import React from 'react';
import { Star, ShieldCheck, CheckCircle2, GraduationCap } from 'lucide-react';

export default function Reviews() {
    const stats = [
        { value: "99.8%", label: "Stealth Pass Rate", desc: "0 tab-switch flags registered" },
        { value: "50,000+", label: "Active Students", desc: "Across 400+ universities" },
        { value: "<1.2s", label: "Solve Latency", desc: "Direct in-DOM answer rendering" },
        { value: "4.9 / 5", label: "Average Rating", desc: "From 4,200+ verified users" }
    ];

    const reviews = [
        {
            name: "Alex M.",
            uni: "University of California, San Diego",
            major: "Computer Science",
            rating: 5,
            text: "My biology prof checks Canvas quiz logs religiously. ExamGhost completely blocked every blur and visibility event—my attempt history looked 100% clean with zero leaves.",
            highlight: "Zero Canvas logs recorded"
        },
        {
            name: "Marcus K.",
            uni: "Penn State University",
            major: "Economics & Finance",
            rating: 5,
            text: "The Snap-It screenshot crop is pure magic. We had macro questions with shift curves that weren't selectable. Drew a box around it with ⌘+Shift+S and got the right equilibrium point in 1 second.",
            highlight: "Snap-It solved locked graphs"
        },
        {
            name: "Sarah T.",
            uni: "University of Texas at Austin",
            major: "Pre-Med / Biochemistry",
            rating: 5,
            text: "Went from a 74% to a 96% on organic chemistry quizzes. What makes ExamGhost better than anything else is the Discreet HUD mode—it just puts a soft green dot next to the answer so nobody peeking over your shoulder notices.",
            highlight: "Discreet HUD mode is undetectable"
        },
        {
            name: "David L.",
            uni: "New York University",
            major: "Business Administration",
            rating: 5,
            text: "The 2nd attempt auto-memory saved my entire semester. It loaded all my correct answers from attempt 1 automatically, and solved the three I missed. Easiest 100% ever.",
            highlight: "Smart 2nd-attempt auto memory"
        },
        {
            name: "Elena R.",
            uni: "University of Washington",
            major: "Psychology & Stats",
            rating: 5,
            text: "I was super skeptical about proctors detecting extensions. ExamGhost uses a shadow DOM layer so the university scripts can't even see the element. Truly 100% stealth.",
            highlight: "Shadow DOM isolation works"
        },
        {
            name: "Jordan P.",
            uni: "University of Michigan",
            major: "Mechanical Engineering",
            rating: 5,
            text: "Solves calculus integrals with limits flawlessly. No copy-pasting required, which was the biggest issue with ChatGPT. ExamGhost is in a completely different league.",
            highlight: "Solved complex calculus"
        }
    ];

    return (
        <section id="reviews" className="py-20 bg-white text-slate-900 border-b border-slate-200/80">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 mb-3">
                        <GraduationCap className="w-3.5 h-3.5 text-blue-600" />
                        <span className="text-xs font-semibold text-slate-700">
                            Verified Student Feedback
                        </span>
                    </div>
                    <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-3">
                        Trusted by 50,000+ students nationwide
                    </h2>
                    <p className="text-sm sm:text-base text-slate-600">
                        See how students use ExamGhost to stay calm, protect their GPA, and maintain clean Canvas logs.
                    </p>
                </div>

                {/* Metrics Bar */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
                    {stats.map((stat, idx) => (
                        <div
                            key={idx}
                            className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-center"
                        >
                            <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-1">
                                {stat.value}
                            </div>
                            <div className="text-xs font-semibold text-slate-800 mb-0.5">
                                {stat.label}
                            </div>
                            <div className="text-[11px] text-slate-500">
                                {stat.desc}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Reviews Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-all"
                        >
                            <div>
                                {/* Rating Stars */}
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(review.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                                    ))}
                                </div>

                                {/* Review Quote */}
                                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-6">
                                    &ldquo;{review.text}&rdquo;
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-100">
                                <div className="flex items-center justify-between mb-1">
                                    <h3 className="font-semibold text-xs sm:text-sm text-slate-900">
                                        {review.name}
                                    </h3>
                                    <span className="text-[10px] text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 flex items-center gap-1">
                                        <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Verified
                                    </span>
                                </div>
                                <div className="text-[11px] text-slate-500">
                                    {review.uni} • {review.major}
                                </div>
                                <div className="mt-2 text-[11px] text-blue-700 font-medium">
                                    Highlight: {review.highlight}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
