'use client';

import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { MessageSquare, Shield, Users, Bell, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DiscordSection() {
    const channels = [
        { name: 'canvas-patch-alerts', desc: 'Real-time LMS engine updates' },
        { name: 'proctor-bypass-tips', desc: 'Honorlock & Proctorio advice' },
        { name: 'exam-study-room', desc: 'Peer study sessions & prep' },
        { name: 'success-vouches', desc: 'A+ exam score proof' },
        { name: '24-7-emergency-help', desc: 'Live mod assistance' }
    ];

    const testimonials = [
        {
            quote: "The Discord alerted us 2 hours before Canvas rolled out a stealth tracking update. The dev team patched it in 10 minutes. A+ on my Organic Chem midterm.",
            author: "Marcus K.",
            school: "UC Berkeley · Pre-Med"
        },
        {
            quote: "Hands down the most valuable college Discord I've ever joined. The study rooms and instant question breakdown channels got me through Physics II.",
            author: "Elena R.",
            school: "NYU · Computer Science"
        },
        {
            quote: "Fastest response time on campus. I had an issue with a New Quizzes formula question and a moderator solved it with me live in 30 seconds.",
            author: "David T.",
            school: "UT Austin · Finance"
        }
    ];

    return (
        <section className="py-20 md:py-32 bg-cream text-ink border-b border-black/5" id="community">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Main Enclosing Card (OneMacApp Style with Discord Theme) */}
                <div className="rounded-[36px] sm:rounded-[44px] bg-[#f2ede4] border border-black/10 p-8 sm:p-12 md:p-16 shadow-card relative overflow-hidden">
                    
                    {/* Background Soft Discord Glow */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#5865F2]/10 rounded-full blur-[100px] pointer-events-none translate-x-1/3 -translate-y-1/3" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative z-10">

                        {/* Left Side: Editorial Community Pitch */}
                        <div className="lg:col-span-7">
                            <p className="eyebrow mb-3">
                                <span className="w-2 h-2 rounded-full bg-[#5865F2] animate-pulse" />
                                <span>COMMUNITY & LIVE SUPPORT</span>
                            </p>

                            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-5">
                                Join 18,500+ students in the Underground.
                            </h2>

                            <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal mb-8 max-w-xl">
                                Never take an exam alone. Get real-time Canvas & Blackboard update warnings, verified proctor advice, and 24/7 exam-day support directly from the engineers who built the bypass.
                            </p>

                            {/* Active Members Status Pill */}
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-black/10 shadow-xs mb-8">
                                <span className="flex items-center gap-1.5 text-xs font-bold text-ink">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                    4,120 Online Now
                                </span>
                                <span className="text-ink-muted">·</span>
                                <span className="text-xs text-ink-secondary font-medium">
                                    18,940 Verified Students
                                </span>
                            </div>

                            {/* Discord Channels Preview Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 max-w-xl">
                                {channels.map((chan, idx) => (
                                    <div 
                                        key={idx} 
                                        className="flex items-center gap-2.5 px-3.5 py-2.5 rounded-2xl bg-white/80 border border-black/5 text-xs font-semibold text-ink shadow-xs"
                                    >
                                        <span className="text-[#5865F2] font-bold">#</span>
                                        <span className="truncate">{chan.name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Direct Join Button */}
                            <div>
                                <a
                                    href="https://discord.gg"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-dark px-7 py-3.5 text-base shadow-soft hover:shadow-lift inline-flex items-center gap-2.5 bg-[#5865F2] hover:bg-[#4752c4]"
                                >
                                    <FaDiscord className="w-5 h-5 text-white" />
                                    <span>Join the Discord Server</span>
                                    <span className="opacity-80 font-normal">· Free</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Side: Community Highlights & Mini Server Card */}
                        <div className="lg:col-span-5 space-y-4">
                            
                            {/* Server Card */}
                            <div className="rounded-3xl bg-white p-6 border border-black/10 shadow-lift">
                                <div className="flex items-center gap-3.5 mb-4 pb-4 border-b border-black/5">
                                    <div className="w-12 h-12 rounded-2xl bg-[#5865F2] flex items-center justify-center text-white shadow-soft">
                                        <FaDiscord className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-display font-bold text-base text-ink flex items-center gap-1.5">
                                            <span>ExamGhost Underground</span>
                                            <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-100" />
                                        </div>
                                        <div className="text-xs text-ink-muted">
                                            Official Student Discord
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    {testimonials.slice(0, 2).map((item, tIdx) => (
                                        <div key={tIdx} className="p-3.5 rounded-2xl bg-[#faf8f5] border border-black/5 text-xs">
                                            <p className="text-ink/80 italic mb-2 leading-relaxed">
                                                "{item.quote}"
                                            </p>
                                            <div className="font-bold text-ink flex items-center justify-between">
                                                <span>{item.author}</span>
                                                <span className="text-[10px] text-ink-muted font-normal">{item.school}</span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Trust Badge */}
                            <div className="rounded-2xl bg-white/70 p-4 border border-black/5 text-xs text-ink-secondary flex items-center gap-3">
                                <Shield className="w-5 h-5 text-emerald-600 shrink-0" />
                                <span>All member identities strictly protected. We never ask for your real name, student ID, or university email.</span>
                            </div>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}
