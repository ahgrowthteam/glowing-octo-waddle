'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Mail, ArrowRight } from 'lucide-react';
import { FaDiscord } from 'react-icons/fa';
import { DISCORD_URL } from '@/components/home/config';

const EMAIL = 'support@examghost.com';

const TOPICS = [
    'License help',
    'Refund request (14-day guarantee)',
    'Bug report',
    'Feature suggestion',
    'Something else',
];

const field =
    'w-full px-4 py-3 rounded-xl border border-black/10 bg-cream text-ink text-[15px] focus:outline-none focus:border-ink transition-colors';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', topic: TOPICS[0], message: '' });

    // The form opens the visitor's email app with the message filled in. Nothing is sent from this page.
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = `[${form.topic}] ${form.name}`.trim();
        const body = `${form.message}\n\n--\n${form.name}\n${form.email}`;
        window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    return (
        <main id="main-content" className="min-h-screen bg-cream text-ink page-glow">
            <Navbar />

            <section className="pt-12 sm:pt-16 pb-10 text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-4">Contact</p>
                    <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
                        Talk to a human.
                    </h1>
                    <p className="text-base sm:text-lg text-ink-muted max-w-xl mx-auto">
                        Help with your license, a bug report, or a refund within the 14-day guarantee. Email us or ask on Discord.
                    </p>
                </div>
            </section>

            <section className="pb-16 sm:pb-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-5 items-start">
                    <div className="lg:col-span-2 space-y-5">
                        <div className="dark-surface bg-ink text-white rounded-3xl surface-dark-card ring-1 ring-white/10 p-6 sm:p-8">
                            <FaDiscord className="w-7 h-7 mb-4 text-white/80" aria-hidden="true" />
                            <h2 className="font-display text-xl font-bold mb-1.5">Discord</h2>
                            <p className="text-sm text-white/70 leading-relaxed mb-6">
                                Usually the quickest way to get help. Ask a question or open a private ticket.
                            </p>
                            <a
                                href={DISCORD_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-ink px-6 py-3 text-sm font-semibold hover:bg-cream transition-colors"
                            >
                                Join our Discord <ArrowRight className="w-4 h-4" aria-hidden="true" />
                            </a>
                        </div>

                        <div className="bg-white rounded-3xl border border-black/10 surface-card p-6 sm:p-8">
                            <Mail className="w-6 h-6 mb-4 text-ink-muted" aria-hidden="true" />
                            <h2 className="font-display text-xl font-bold mb-1.5">Email</h2>
                            <p className="text-[15px] mb-2">
                                <a href={`mailto:${EMAIL}`} className="underline underline-offset-4 decoration-black/30 hover:decoration-black">{EMAIL}</a>
                            </p>
                            <p className="text-sm text-ink-muted leading-relaxed">
                                We reply by email as soon as we can. Include your order email so we can find your account.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-3 bg-white rounded-3xl border border-black/10 surface-card p-6 sm:p-8">
                        <h2 className="font-display text-xl sm:text-2xl font-bold mb-1.5">Send a message</h2>
                        <p className="text-sm text-ink-muted mb-6">
                            This opens your email app with the message ready to send to {EMAIL}.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="contact-name" className="block text-sm font-medium mb-1.5">Name</label>
                                    <input id="contact-name" name="name" type="text" autoComplete="name" required value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })} className={field} />
                                </div>
                                <div>
                                    <label htmlFor="contact-email" className="block text-sm font-medium mb-1.5">Your email</label>
                                    <input id="contact-email" name="email" type="email" autoComplete="email" required value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })} className={field} />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="contact-topic" className="block text-sm font-medium mb-1.5">Topic</label>
                                <select id="contact-topic" name="topic" value={form.topic}
                                    onChange={(e) => setForm({ ...form, topic: e.target.value })} className={`${field} select-chevron appearance-none`}>
                                    {TOPICS.map((t) => (<option key={t} value={t}>{t}</option>))}
                                </select>
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="block text-sm font-medium mb-1.5">How can we help?</label>
                                <textarea id="contact-message" name="message" required rows={5} value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${field} resize-none`} />
                            </div>
                            <button type="submit" className="btn-dark w-full justify-center py-3.5 text-sm font-semibold">
                                Open in email app
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            <Footer hideCta />
        </main>
    );
}
