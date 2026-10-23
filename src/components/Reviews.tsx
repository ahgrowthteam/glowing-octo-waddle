import React from 'react';
import { Star, CheckCircle2, GraduationCap } from 'lucide-react';

export default function Reviews() {
    const stats = [
        { value: "< 1s", label: "Average Solve Speed", desc: "Instant inline DOM parsing" },
        { value: "3 Modes", label: "Display Visibility", desc: "Invisible, Stealth & Explain" },
        { value: "3 Methods", label: "Answer Landing", desc: "Auto-fill, Highlight & Clipboard" },
        { value: "0 Tabs", label: "Zero Tab-Switching", desc: "Double-click right on the page" }
    ];

    const reviews = [
        {
            name: "Alex Chen",
            avatar: "/images/avatars/student_1.jpg",
            uni: "UC Berkeley",
            course: "CS 61B Data Structures",
            date: "Yesterday",
            rating: 5,
            tag: "Double-Click Inline Solve",
            text: "Switching tabs during timed Canvas quizzes was always terrifying. With ExamGhost, I just double-click the question directly on Canvas and the answer auto-selects in under a second. Never left the tab once, never copy-pasted into ChatGPT. Easiest A of my semester."
        },
        {
            name: "Sarah Jenkins",
            avatar: "/images/avatars/student_3.jpg",
            uni: "UT Austin",
            course: "Organic Chemistry II",
            date: "3 days ago",
            rating: 5,
            tag: "Snap-It Vision OCR",
            text: "Our chemistry department disables copy-paste and uploads every synthesis mechanism as locked PNG images so you can't paste into ChatGPT. With Snap-It (⌘+Shift+S) you just drag a quick box over the reaction tree. Decoded the stereochemistry and gave the right enantiomer product in about a second. Went from a 68 to a 94 on unit quizzes."
        },
        {
            name: "Marcus Vance",
            avatar: "/images/avatars/student_2.jpg",
            uni: "Penn State",
            course: "ECON 302 Macroeconomics",
            date: "5 days ago",
            rating: 5,
            tag: "Invisible Screen-Share Mode",
            text: "The Invisible mode is unreal. When taking quizzes on Zoom or Google Meet screen-share, it injects the answer directly into the radio option with zero popups, zero cursor movement, and zero toasts. Total screen-share safety. For normal homework, I toggle to Explain mode to see the full reasoning."
        },
        {
            name: "David Lin",
            avatar: "/images/avatars/student_4.jpg",
            uni: "NYU Stern",
            course: "Financial Accounting",
            date: "1 week ago",
            rating: 5,
            tag: "Canvas New Quizzes",
            text: "Canvas New Quizzes usually breaks every other extension I’ve tried. ExamGhost worked out of the box with zero lag. Double-tapped every multiple choice and used the Highlight method so I could double check the numbers before submitting. Easiest 100% of the semester."
        },
        {
            name: "Elena Rostova",
            avatar: "/images/avatars/student_5.jpg",
            uni: "Univ. of Washington",
            course: "Psychology & Stats",
            date: "1 week ago",
            rating: 5,
            tag: "Shadow DOM Anti-Detection",
            text: "I tested 4 different quiz extensions before finals week and two of them actually injected visible divs that my roommate’s proctor flagged. ExamGhost is completely isolated in the shadow DOM. I opened DevTools during a Blackboard test to verify—zero scripts, zero DOM pollution, zero network leaks. It’s genuinely undetectable."
        },
        {
            name: "Jordan Patel",
            avatar: "/images/avatars/student_6.jpg",
            uni: "Univ. of Michigan",
            course: "MATH 215 Calculus III",
            date: "2 weeks ago",
            rating: 5,
            tag: "LaTeX Math Engine",
            text: "Solves double integrals, partial derivatives, and 3D vectors without messing up negative signs or notation like standard AI does. Also huge shoutout for not doing shady $25/month auto-renewing subscriptions like the scam extensions on TikTok. Tested the free 50 questions first, then got the lifetime pass. Best $199 I’ve spent for college."
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
                        about timed quizzes again.
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                        Private client-side solving, Snap-It screenshot OCR, and 3 stealth display modes for Canvas, Blackboard, Moodle, and beyond.
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
                            className="p-6 sm:p-7 rounded-3xl bg-white border border-black/10 shadow-card flex flex-col justify-between hover:-translate-y-1 transition-all duration-200"
                        >
                            <div>
                                {/* Top Reviewer Header with Real Face Avatar */}
                                <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-black/5">
                                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-black/10 shrink-0 bg-[#e2d3fa] shadow-xs">
                                        <img 
                                            src={r.avatar} 
                                            alt={r.name} 
                                            width={48}
                                            height={48}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover" 
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center justify-between mb-0.5">
                                            <h3 className="font-display font-bold text-sm text-ink truncate">
                                                {r.name}
                                            </h3>
                                            <span className="text-[10px] text-ink-muted shrink-0">
                                                {r.date}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-1.5 text-xs text-ink-muted truncate">
                                            <GraduationCap className="w-3.5 h-3.5 shrink-0 text-ink-secondary" />
                                            <span className="truncate">{r.uni}</span>
                                            <span>·</span>
                                            <span className="truncate text-ink-secondary font-medium">{r.course}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Rating Stars & Verified Tag */}
                                <div className="flex items-center justify-between mb-3.5">
                                    <div className="flex items-center gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} className="w-3.5 h-3.5 fill-[#ffd23f] text-[#ffd23f]" />
                                        ))}
                                    </div>
                                    <span className="text-[10px] font-semibold text-emerald-800 bg-[#cdeecb] px-2 py-0.5 rounded-full flex items-center gap-1 shrink-0">
                                        <CheckCircle2 className="w-3 h-3 text-emerald-700" />
                                        <span>Verified Student</span>
                                    </span>
                                </div>

                                {/* Review Text */}
                                <p className="text-xs sm:text-[13px] text-ink-secondary leading-relaxed mb-5">
                                    &ldquo;{r.text}&rdquo;
                                </p>
                            </div>

                            {/* Tag Badge */}
                            <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                                <span className="text-[11px] font-medium text-ink-muted bg-[#faf8f4] border border-black/5 px-2.5 py-1 rounded-full">
                                    {r.tag}
                                </span>
                                <span className="text-[10px] font-semibold text-emerald-700">
                                    100% Score
                                </span>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
