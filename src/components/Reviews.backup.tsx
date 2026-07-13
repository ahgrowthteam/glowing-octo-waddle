'use client';
import React from 'react';
import { Star, Quote } from 'lucide-react';

export default function Reviews() {
    const reviews = [
        {
            name: "Alex M.",
            university: "State University",
            text: "Literally saved my semester. The fact that it doesn't open new tabs or inject code means I can finally take my Canvas quizzes without having a panic attack about being flagged.",
            rating: 5,
            avatar: "AM",
            color: "bg-blue-500"
        },
        {
            name: "Sarah K.",
            university: "Nursing Major",
            text: "I've tried every other extension (CheatMate, Quizard) and they all got detected eventually or had terrible OCR. ExamGhost is the only one that actually works seamlessly. It's like magic.",
            rating: 5,
            avatar: "SK",
            color: "bg-purple-500"
        },
        {
            name: "David T.",
            university: "Computer Science",
            text: "As a CS student, I checked their network requests and DOM structure. They aren't lying about the Shadow DOM architecture. It's completely isolated from the LMS tracking scripts. Worth every penny.",
            rating: 5,
            avatar: "DT",
            color: "bg-emerald-500"
        },
        {
            name: "Jessica L.",
            university: "Pre-Med",
            text: "The multiple choice auto-solve is incredibly fast. I used to waste so much time frantically typing out chemistry equations into ChatGPT. Now I just double click and the answer is there instantly.",
            rating: 5,
            avatar: "JL",
            color: "bg-amber-500"
        },
        {
            name: "Michael R.",
            university: "Business Admin",
            text: "The support team on Discord is amazing. They literally pushed an update within 2 hours when McGraw Hill changed their quiz formatting. You guys are the best.",
            rating: 5,
            avatar: "MR",
            color: "bg-red-500"
        },
        {
            name: "Emily C.",
            university: "Biology",
            text: "10/10. The matching and fill-in-the-blank support is what sold me. Other tools can only handle basic text, but ExamGhost actually understands diagrams and complex formatting perfectly.",
            rating: 5,
            avatar: "EC",
            color: "bg-indigo-500"
        }
    ];

    return (
        <section id="reviews" className="py-24 bg-white relative overflow-hidden">
            {/* Background accents */}
            <div className="absolute top-20 left-0 w-64 h-64 bg-blue-50/50 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-20 right-0 w-64 h-64 bg-purple-50/50 rounded-full blur-[100px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 relative z-10 w-full">

                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-50 border border-amber-100 rounded-full mb-6">
                        <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                        <span className="text-sm font-semibold text-amber-700">4.9/5 average rating</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
                        Loved by 50,000+ Students
                    </h2>
                    <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                        Don&apos;t just take our word for it. See why ExamGhost is the ultimate tool for stress-free exams.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((review, i) => (
                        <div key={i} className="bg-white border border-slate-100 p-8 rounded-[2rem] flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300 shadow-sm group relative">
                            {/* Quote decoration */}
                            <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <Quote className="w-8 h-8 text-slate-100" />
                            </div>

                            <div className="flex items-center gap-1 mb-6">
                                {[...Array(review.rating)].map((_, idx) => (
                                    <Star key={idx} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <p className="text-slate-700 leading-relaxed mb-8 flex-1">
                                &ldquo;{review.text}&rdquo;
                            </p>

                            <div className="mt-auto flex items-center gap-3">
                                <div className={`w-10 h-10 ${review.color} rounded-full flex items-center justify-center text-white text-sm font-bold shadow-sm`}>
                                    {review.avatar}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900">{review.name}</p>
                                    <p className="text-sm text-slate-500 font-medium">{review.university}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
