'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Mail, ArrowUpRight } from 'lucide-react';
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

const selectClassName =
    'flex min-h-[44px] w-full rounded-lg border border-ink/[0.12] bg-white px-3.5 py-2.5 text-sm text-ink transition-colors focus:outline-none focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt/20 select-chevron appearance-none';

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
        <div className="min-h-screen bg-cream text-ink page-glow flex flex-col">
            <Navbar />
            <main id="main-content" className="flex-1">

            <section className="pt-10 sm:pt-14 pb-10 text-center">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <p className="text-sm font-medium text-cobalt mb-3">Support &amp; feedback</p>
                    <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-[-0.03em] leading-[1.05] mb-4">
                        Talk to a human.
                    </h1>
                    <p className="text-base sm:text-lg text-ink-muted max-w-[54ch] mx-auto leading-relaxed">
                        Help with your license, a bug report, or a refund within the 14-day guarantee. Email us or ask on Discord.
                    </p>
                </div>
            </section>

            <section className="pb-16 sm:pb-24">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 grid lg:grid-cols-5 gap-6 items-start">
                    <div className="lg:col-span-2 space-y-5">
                        <div className="dark-surface relative overflow-hidden bg-surface-dark bg-dark-grid text-white rounded-3xl border border-white/10 surface-dark-card p-6 sm:p-8">
                            <div
                                className="pointer-events-none absolute -top-12 -right-12 w-44 h-44 rounded-full blur-2xl"
                                style={{ background: 'radial-gradient(circle, rgba(88,101,242,0.26), transparent 70%)' }}
                                aria-hidden="true"
                            />
                            <FaDiscord className="relative w-7 h-7 mb-4 text-[#8EA4FF]" aria-hidden="true" />
                            <h2 className="relative font-display text-xl font-bold mb-1.5">Discord</h2>
                            <p className="relative text-sm text-white/75 leading-relaxed mb-6">
                                Usually the quickest way to get help. Ask a question or open a private ticket.
                            </p>
                            <a
                                href={DISCORD_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="relative inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full bg-discord hover:bg-discord-hover text-white px-6 py-2.5 text-sm font-semibold transition-colors"
                            >
                                <span>Join our Discord</span>
                                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                            </a>
                        </div>

                        <div className="bg-paper rounded-2xl border border-ink/[0.09] surface-card p-6 sm:p-8">
                            <Mail className="w-6 h-6 mb-4 text-ink-muted" aria-hidden="true" />
                            <h2 className="font-display text-xl font-bold mb-1.5">Email</h2>
                            <p className="text-[15px] mb-2">
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="font-medium text-ink underline underline-offset-4 decoration-ink/30 hover:text-cobalt hover:decoration-cobalt transition-colors"
                                >
                                    {EMAIL}
                                </a>
                            </p>
                            <p className="text-sm text-ink-muted leading-relaxed">
                                We reply by email as soon as we can. Include your order email so we can find your account.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-3 bg-paper rounded-2xl border border-ink/[0.09] surface-card p-6 sm:p-8">
                        <h2 className="font-display text-xl sm:text-2xl font-bold mb-1.5">Send a message</h2>
                        <p className="text-sm text-ink-muted mb-6">
                            This opens your email app with the message ready to send to {EMAIL}.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <Label htmlFor="contact-name" className="mb-1.5">Name</Label>
                                    <Input
                                        id="contact-name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <Label htmlFor="contact-email" className="mb-1.5">Your email</Label>
                                    <Input
                                        id="contact-email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div>
                                <Label htmlFor="contact-topic" className="mb-1.5">Topic</Label>
                                <select
                                    id="contact-topic"
                                    name="topic"
                                    value={form.topic}
                                    onChange={(e) => setForm({ ...form, topic: e.target.value })}
                                    className={selectClassName}
                                >
                                    {TOPICS.map((t) => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <Label htmlFor="contact-message" className="mb-1.5">How can we help?</Label>
                                <Textarea
                                    id="contact-message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    className="resize-none"
                                />
                            </div>
                            <Button type="submit" size="lg" className="w-full">
                                Open in email app
                            </Button>
                        </form>
                    </div>
                </div>
            </section>

            </main>
            <Footer hideCta />
        </div>
    );
}
