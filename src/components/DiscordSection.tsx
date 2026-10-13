'use client';

import React from 'react';
import { FaDiscord } from 'react-icons/fa';
import { MessageSquare, Shield, Users, Bell, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DiscordSection() {
    const channels = [
        { name: 'canvas-updates', desc: 'Real-time LMS engine updates' },
        { name: 'lms-tips-and-tricks', desc: 'Canvas & Moodle best practices' },
        { name: 'exam-study-room', desc: 'Peer study sessions & prep' },
        { name: 'success-stories', desc: 'A+ exam score proof' },
        { name: '24-7-student-support', desc: 'Live mod assistance' }
    ];

    const testimonials = [
        {
            avatar: "/images/avatars/student_2.jpg",
            quote: "The server dropped an alert when Canvas pushed their latest New Quizzes update. Devs had a compatibility patch ready right away. A+ in Orgo.",
            author: "Marcus K.",
            school: "UC Berkeley · Pre-Med"
        },
        {
            avatar: "/images/avatars/student_5.jpg",
            quote: "Best college Discord hands down. The quiet study voice channels and instant diagram breakdown tips got me through Physics II midterms.",
            author: "Elena R.",
            school: "NYU · Computer Science"
        },
        {
            avatar: "/images/avatars/student_4.jpg",
            quote: "Had an issue with a Canvas New Quizzes formula during practice and a mod helped me fix my hotkey bindings in 2 minutes. Community is legit.",
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
                            <p className="eyebrow mb-3 !text-[#3b47c4] font-bold">
                                <span className="w-2 h-2 rounded-full bg-[#5865F2] animate-pulse" />
                                <span className="text-[#3b47c4] font-bold">COMMUNITY &amp; LIVE SUPPORT</span>
                            </p>

                            <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-5">
                                Join our student Discord community.
                            </h2>

                            <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal mb-8 max-w-xl">
                                Never take an exam alone. Get real-time Canvas & Blackboard extension updates, peer study support, and 24/7 question formatting help directly from the developers and student community.
                            </p>

                            {/* Active Members Status Pill */}
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-black/10 shadow-xs mb-8">
                                <span className="flex items-center gap-1.5 text-xs font-bold text-ink">
                                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                                    Active Study Community
                                </span>
                                <span className="text-ink-muted">·</span>
                                <span className="text-xs text-ink-secondary font-medium">
                                    Live Patch Alerts & Dev Access
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
                                    href="https://discord.gg/aCcsyKYJq4"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-dark px-7 py-3.5 text-base shadow-soft hover:shadow-lift inline-flex items-center gap-2.5 bg-[#5865F2] hover:bg-[#4752c4]"
                                >
                                    <FaDiscord className="w-5 h-5 text-white" aria-hidden="true" />
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
                                        <FaDiscord className="w-6 h-6" aria-hidden="true" />
                                    </div>
                                    <div>
                                        <div className="font-display font-bold text-base text-ink flex items-center gap-1.5">
                                            <span>ExamGhost Student Community</span>
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
                                            <p className="text-ink/80 italic mb-2.5 leading-relaxed">
                                                &ldquo;{item.quote}&rdquo;
                                            </p>
                                            <div className="flex items-center gap-2.5">
                                                <div className="w-6 h-6 rounded-full overflow-hidden border border-black/10 shrink-0 bg-[#e2d3fa]">
                                                    <img src={item.avatar} alt={item.author} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="flex items-center justify-between flex-1 min-w-0">
                                                    <span className="font-bold text-ink truncate">{item.author}</span>
                                                    <span className="text-[10px] text-ink-muted font-normal shrink-0">{item.school}</span>
                                                </div>
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
