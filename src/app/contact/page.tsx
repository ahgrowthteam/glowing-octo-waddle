'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { 
    Mail, MessageSquare, Shield, Clock, CheckCircle2, 
    Send, AlertCircle, ArrowRight, Zap, LifeBuoy
} from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';

export default function ContactPage() {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        topic: 'License Key Help',
        lms: 'Canvas',
        message: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitting(true);
        setTimeout(() => {
            setSubmitting(false);
            setFormSubmitted(true);
        }, 800);
    };

    return (
        <div className="min-h-screen bg-cream text-ink flex flex-col justify-between">
            <Navbar />

            <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20 w-full">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>24/7 STUDENT SUPPORT</span>
                    </p>
                    <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-4">
                        Contact Support.
                    </h1>
                    <p className="text-sm sm:text-base text-ink-muted leading-relaxed font-normal">
                        Stuck on an exam, need license activation help, or have a refund request? Our engineering team and Discord moderators are on standby 24/7.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
                    
                    {/* Left Column: Direct Support Channels */}
                    <div className="lg:col-span-5 space-y-5">
                        
                        {/* Discord Card */}
                        <div className="p-7 rounded-3xl bg-[#3642c8] text-white shadow-lift relative overflow-hidden">
                            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white mb-4">
                                <FaDiscord className="w-6 h-6"  aria-hidden="true"/>
                            </div>
                            <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white text-[#3642c8] px-2.5 py-0.5 rounded-full inline-block mb-2">
                                Fastest Response · &lt;10 Min
                            </span>
                            <h2 className="font-display font-bold text-xl mb-1.5 text-white">Official Student Discord</h2>
                            <p className="text-xs text-white font-normal leading-relaxed mb-6">
                                Connect directly with core developers for instant ticket support. Canvas patch alerts posted in real time.
                            </p>
                            <a
                                href="https://discord.gg/aCcsyKYJq4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 px-5 rounded-full bg-white text-ink font-bold text-xs sm:text-sm text-center inline-flex items-center justify-center gap-2 hover:bg-[#faf8f4] transition-all shadow-sm"
                            >
                                <FaDiscord className="w-4 h-4 text-[#3642c8]"  aria-hidden="true"/>
                                <span>Open Discord Ticket</span>
                                <ArrowRight className="w-3.5 h-3.5" />
                            </a>
                        </div>

                        {/* Email Card */}
                        <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-xs">
                            <div className="flex items-center gap-3.5 mb-3">
                                <div className="w-10 h-10 rounded-2xl bg-emerald-50 border border-emerald-200/60 flex items-center justify-center text-emerald-700">
                                    <Mail className="w-5 h-5" />
                                </div>
                                <div>
                                    <h2 className="font-display font-bold text-base text-ink">Email Support</h2>
                                    <p className="text-xs text-ink-muted">support@examghost.com</p>
                                </div>
                            </div>
                            <p className="text-xs text-ink-muted leading-relaxed">
                                Guaranteed response within 4 hours during midterm and finals weeks. Include your license key for rapid resolution.
                            </p>
                        </div>

                        {/* Live Status Pill */}
                        <div className="p-5 rounded-3xl bg-[#faf8f4] border border-black/10 space-y-2 text-xs">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-ink-muted block mb-2">
                                Real-Time Shield Status
                            </span>
                            <div className="flex items-center justify-between text-ink-secondary">
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>Canvas SpeedGrader Masking</span>
                                </span>
                                <span className="text-emerald-700 font-bold">Operational</span>
                            </div>
                            <div className="flex items-center justify-between text-ink-secondary">
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <span>Snap-It Vision OCR Engine</span>
                                </span>
                                <span className="font-mono text-ink font-medium">310ms</span>
                            </div>
                            <div className="flex items-center justify-between text-ink-secondary">
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <span>Blackboard & Moodle Hooks</span>
                                </span>
                                <span className="text-emerald-700 font-bold">100% Shielded</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Contact & Message Form */}
                    <div className="lg:col-span-7">
                        <div className="rounded-3xl bg-white border border-black/10 p-7 sm:p-10 shadow-sm">
                            <h2 className="font-display font-bold text-xl sm:text-2xl text-ink mb-1.5">
                                Send us a message
                            </h2>
                            <p className="text-xs sm:text-sm text-ink-muted mb-7">
                                Fill out the details below and an engineer will reply directly to your inbox.
                            </p>

                            {formSubmitted ? (
                                <div className="py-12 px-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                                    <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-sm">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <h3 className="font-display font-bold text-lg text-emerald-950">
                                        Ticket Received!
                                    </h3>
                                    <p className="text-xs sm:text-sm text-emerald-800 max-w-sm mx-auto leading-relaxed">
                                        Thank you, {formData.name || 'Student'}. Our support team has logged your ticket for <strong>{formData.topic}</strong>. We will reply to <strong>{formData.email}</strong> shortly.
                                    </p>
                                    <button
                                        onClick={() => setFormSubmitted(false)}
                                        className="mt-4 px-5 py-2 text-xs font-bold text-emerald-800 underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="student-name" className="block text-xs font-semibold text-ink mb-1.5">
                                                Your Name / Student Alias
                                            </label>
                                            <input
                                                id="student-name"
                                                name="name"
                                                type="text"
                                                autoComplete="name"
                                                required
                                                value={formData.name}
                                                onChange={(e) => setFormData({...formData, name: e.target.value})}
                                                placeholder="Alex"
                                                className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-[#faf8f4] text-ink text-sm focus:outline-none focus:border-ink transition-colors"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="student-email" className="block text-xs font-semibold text-ink mb-1.5">
                                                Email Address
                                            </label>
                                            <input
                                                id="student-email"
                                                name="email"
                                                type="email"
                                                autoComplete="email"
                                                required
                                                value={formData.email}
                                                onChange={(e) => setFormData({...formData, email: e.target.value})}
                                                placeholder="alex@university.edu"
                                                className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-[#faf8f4] text-ink text-sm focus:outline-none focus:border-ink transition-colors"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor="support-topic" className="block text-xs font-semibold text-ink mb-1.5">
                                                Support Topic
                                            </label>
                                            <select
                                                id="support-topic"
                                                name="topic"
                                                aria-label="Support Topic"
                                                value={formData.topic}
                                                onChange={(e) => setFormData({...formData, topic: e.target.value})}
                                                className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-[#faf8f4] text-ink text-sm focus:outline-none focus:border-ink transition-colors"
                                            >
                                                <option value="License Key Help">License Key Help</option>
                                                <option value="Free 50-Solve Trial Question">Free 50-Solve Trial</option>
                                                <option value="Refund Request (14-Day Guarantee)">14-Day Refund Request</option>
                                                <option value="Canvas / Quiz Bug Report">Canvas / Quiz Bug Report</option>
                                                <option value="Feature Suggestion">Feature Suggestion</option>
                                                <option value="Other">Other Inquiry</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label htmlFor="primary-lms" className="block text-xs font-semibold text-ink mb-1.5">
                                                Primary LMS Platform
                                            </label>
                                            <select
                                                id="primary-lms"
                                                name="lms"
                                                aria-label="Primary LMS Platform"
                                                value={formData.lms}
                                                onChange={(e) => setFormData({...formData, lms: e.target.value})}
                                                className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-[#faf8f4] text-ink text-sm focus:outline-none focus:border-ink transition-colors"
                                            >
                                                <option value="Canvas">Canvas (Classic / New Quizzes)</option>
                                                <option value="Blackboard">Blackboard Learn & Ultra</option>
                                                <option value="D2L Brightspace">D2L Brightspace</option>
                                                <option value="Moodle">Moodle</option>
                                                <option value="Other">Other / Standalone</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="ticket-message" className="block text-xs font-semibold text-ink mb-1.5">
                                            How can we help?
                                        </label>
                                        <textarea
                                            id="ticket-message"
                                            name="message"
                                            aria-label="How can we help?"
                                            required
                                            rows={4}
                                            value={formData.message}
                                            onChange={(e) => setFormData({...formData, message: e.target.value})}
                                            placeholder="Describe what you need help with (include your license key if applicable)..."
                                            className="w-full px-4 py-2.5 rounded-xl border border-black/10 bg-[#faf8f4] text-ink text-sm focus:outline-none focus:border-ink transition-colors resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={submitting}
                                        className="btn-dark w-full py-3.5 rounded-full text-sm font-semibold justify-center shadow-soft hover:shadow-lift transition-all"
                                    >
                                        {submitting ? (
                                            <span>Sending ticket...</span>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 text-[#bfe3f6]" />
                                                <span>Send Support Message</span>
                                            </>
                                        )}
                                    </button>

                                    <p className="text-center text-[11px] text-ink-muted">
                                        Your email is never shared or stored in public trackers.
                                    </p>
                                </form>
                            )}

                        </div>
                    </div>

                </div>

            </main>

            <Footer />
        </div>
    );
}
