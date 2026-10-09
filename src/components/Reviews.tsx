'use client';

import React from 'react';
import { Star, ShieldCheck, CheckCircle2, ThumbsUp, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

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
            date: "Fall 2024",
            text: "My biology prof checks Canvas quiz logs religiously. ExamGhost completely blocked every blur and visibility event—my attempt history looked 100% clean with zero leaves.",
            highlight: "Zero Canvas logs recorded"
        },
        {
            name: "Marcus K.",
            uni: "Penn State University",
            major: "Economics & Finance",
            rating: 5,
            date: "Fall 2024",
            text: "The Snap-It screenshot crop is pure magic. We had macro questions with shift curves that weren't selectable. Drew a box around it with ⌘+Shift+S and got the right equilibrium point in 1 second.",
            highlight: "Snap-It solved locked graphs"
        },
        {
            name: "Sarah T.",
            uni: "University of Texas at Austin",
            major: "Pre-Med / Biochemistry",
            rating: 5,
            date: "Fall 2024",
            text: "Went from a 74% to a 96% on organic chemistry quizzes. What makes ExamGhost better than anything else is the Discreet HUD mode—it just puts a soft green dot next to the answer so nobody peeking over your shoulder notices.",
            highlight: "Discreet HUD mode is undetectable"
        },
        {
            name: "David L.",
            uni: "New York University",
            major: "Business Administration",
            rating: 5,
            date: "Spring 2024",
            text: "The 2nd attempt auto-memory saved my entire semester. It loaded all my correct answers from attempt 1 automatically, and solved the three I missed. Easiest 100% ever.",
            highlight: "Smart 2nd-attempt auto memory"
        },
        {
            name: "Elena R.",
            uni: "University of Washington",
            major: "Psychology & Stats",
            rating: 5,
            date: "Fall 2024",
            text: "I was super skeptical about proctors detecting extensions. ExamGhost uses a shadow DOM layer so the university scripts can't even see the element. Truly 100% stealth.",
            highlight: "Shadow DOM isolation works"
        },
        {
            name: "Jordan P.",
            uni: "University of Florida",
            major: "Mechanical Engineering",
            rating: 5,
            date: "Spring 2024",
            text: "Way better than CanvasHack or Cheatmate. Doesn't crash when math symbols or matrices show up. Lifetime degree pass was the best investment of my college career.",
            highlight: "Calculus & matrix support"
        }
    ];

    return (
        <section id="reviews" className="py-24 sm:py-32 bg-[#060a14] text-white relative overflow-hidden border-t border-white/[0.06]">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10 w-full">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 mb-4">
                        <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-[11px] font-bold text-emerald-400 tracking-widest uppercase">
                            Verified Student Results
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
                        Trusted by Students at 400+ Universities
                    </h2>
                    <p className="text-base text-slate-400 max-w-xl mx-auto">
                        See why students rely on ExamGhost to protect their GPA across Canvas, Blackboard, and online exam platforms.
                    </p>
                </div>

                {/* Performance Metrics Bar */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
                    {stats.map((stat, idx) => (
                        <div 
                            key={idx}
                            className="p-5 rounded-2xl bg-[#090f1d] border border-white/10 flex flex-col justify-between"
                        >
                            <div>
                                <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                                    {stat.value}
                                </span>
                                <h4 className="text-xs font-semibold text-blue-400 mt-1 uppercase tracking-wider">
                                    {stat.label}
                                </h4>
                            </div>
                            <p className="text-[11px] text-slate-400 mt-2 font-mono">
                                {stat.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, idx) => (
                        <div
                            key={idx}
                            className="rounded-2xl bg-[#090f1d] border border-white/10 p-6 flex flex-col justify-between hover:border-white/20 transition-all shadow-[0_4px_25px_rgba(0,0,0,0.3)]"
                        >
                            <div>
                                {/* Rating & Highlight Badge */}
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex gap-0.5">
                                        {[...Array(review.rating)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-emerald-400 text-emerald-400" />
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-medium">
                                        Verified Student
                                    </span>
                                </div>

                                {/* Review Quote */}
                                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                                    "{review.text}"
                                </p>
                            </div>

                            {/* User Attribution */}
                            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                                <div>
                                    <h4 className="text-xs font-bold text-white flex items-center gap-1.5">
                                        <span>{review.name}</span>
                                        <span className="text-[10px] font-normal text-slate-400">• {review.major}</span>
                                    </h4>
                                    <p className="text-[11px] text-slate-400">
                                        {review.uni}
                                    </p>
                                </div>
                                <span className="text-[10px] font-mono text-slate-500">
                                    {review.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
