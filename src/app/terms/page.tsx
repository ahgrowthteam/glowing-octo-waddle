import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Check } from 'lucide-react';
import { DISCORD_URL } from '@/components/home/config';

export const metadata: Metadata = {
    title: "Terms of Service",
    description: "ExamGhost terms of service: educational use, license tiers, the 14-day money-back guarantee, prohibited conduct and governing law.",
    alternates: {
        canonical: "https://www.examghost.com/terms",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Terms of Service | ExamGhost",
        description: "ExamGhost terms of service: educational use, license tiers, the 14-day money-back guarantee, prohibited conduct and governing law.",
        url: "https://www.examghost.com/terms",
        siteName: "ExamGhost",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ExamGhost Terms of Service",
            },
        ],
    },
};

const SECTIONS = [
    { id: 's1', title: 'Acceptance of Terms' },
    { id: 's2', title: 'Acceptable Use and Academic Integrity' },
    { id: 's3', title: 'License Grants & Tier Restrictions' },
    { id: 's4', title: '14-Day Money-Back Guarantee & Refund Policy' },
    { id: 's5', title: 'Intellectual Property & Prohibited Conduct' },
    { id: 's6', title: 'Disclaimer of Warranties & Limitation of Liability' },
    { id: 's7', title: 'Governing Law & Support Contacts' },
];

export default function TermsPage() {
    const termsJsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.examghost.com/terms#webpage",
                "url": "https://www.examghost.com/terms",
                "name": "Terms of Service | ExamGhost",
                "description": "ExamGhost terms of service: educational use, license tiers, the 14-day money-back guarantee, prohibited conduct and governing law.",
                "datePublished": "2026-01-15",
                "dateModified": "2026-11-19",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://www.examghost.com/#website" },
                "breadcrumb": { "@id": "https://www.examghost.com/terms#breadcrumb" }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.examghost.com/terms#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://www.examghost.com/terms" }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink page-glow flex flex-col justify-between">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(termsJsonLd) }}
            />
            <Navbar />

            <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-16 sm:pb-24 w-full">
                <header className="mb-10 pb-8 border-b border-ink/[0.08]">
                    <p className="text-sm font-medium text-cobalt mb-3">Legal &amp; terms</p>
                    <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-[-0.03em] leading-[1.05] mb-4">Terms of Service</h1>
                    <p className="text-base text-ink-muted max-w-[68ch] leading-relaxed">
                        Last modified: November 19, 2026 · ExamGhost is operated by FoundryOne LLC (1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110). There is a free plan with 5 solves a day and no credit card, paid plans at $19 a month, $99 a year or $199 lifetime, and a 14-day money-back guarantee.
                    </p>
                </header>

                <div className="grid lg:grid-cols-[220px_minmax(0,1fr)] gap-8 lg:gap-12 items-start">
                    <aside className="lg:sticky lg:top-24">
                        <nav aria-label="Contents" className="rounded-2xl bg-paper border border-ink/[0.09] p-5 lg:bg-transparent lg:border-0 lg:p-0">
                            <p className="text-xs font-semibold text-ink-muted mb-3">Contents</p>
                            <ol className="divide-y divide-ink/[0.08] border-y border-ink/[0.08] text-sm text-ink-secondary">
                                {SECTIONS.map((s, idx) => (
                                    <li key={s.id}>
                                        <a
                                            href={`#${s.id}`}
                                            className="flex items-baseline gap-2.5 py-2.5 hover:text-cobalt transition-colors"
                                        >
                                            <span className="font-mono text-xs text-ink-muted tabular-nums">{idx + 1}.</span>
                                            <span>{s.title}</span>
                                        </a>
                                    </li>
                                ))}
                            </ol>
                        </nav>
                    </aside>

                    <div className="rounded-2xl bg-paper border border-ink/[0.09] p-6 sm:p-10 surface-card divide-y divide-ink/[0.08] text-[15px] text-ink-secondary leading-relaxed">
                        <section id="s1" className="space-y-3 pb-8 scroll-mt-24 max-w-[66ch]">
                            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-ink">1. Acceptance of Terms</h2>
                            <p>
                                ExamGhost (the &quot;Software&quot;, &quot;Extension&quot; or &quot;Service&quot;) is owned and operated by FoundryOne LLC (1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110). By installing or using ExamGhost you agree to these Terms of Service, including our 14-day money-back guarantee. If you do not agree, do not install or use the software.
                            </p>
                        </section>
                        <section id="s2" className="space-y-3 py-8 scroll-mt-24 max-w-[66ch]">
                            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-ink">2. Acceptable Use and Academic Integrity</h2>
                            <p>
                                ExamGhost is an AI study and homework assistant. It is meant to help you review course material, practice, and understand how a question is solved.
                            </p>
                            <p>
                                You are solely responsible for using ExamGhost in line with your school, university or testing organization&apos;s rules, honor code and course policy. Many instructors restrict AI tools on graded work. We do not promise that your use will go unnoticed by your school or instructor, and we are not responsible for any disciplinary action that results from how you use the Service.
                            </p>
                        </section>
                        <section id="s3" className="space-y-3 py-8 scroll-mt-24 max-w-[66ch]">
                            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-ink">3. License Grants &amp; Plans</h2>
                            <p>We grant you a personal, non-transferable, non-exclusive license to use the Extension under the plan you choose:</p>
                            <ul className="space-y-2.5 pl-4 list-disc text-sm">
                                <li><strong>Free:</strong> 5 solves per day, no credit card and no recurring charge.</li>
                                <li><strong>Monthly ($19/month):</strong> removes the daily solve limit, including screenshot solves. Renews every month until you cancel; cancel before the renewal date to avoid the next charge.</li>
                                <li><strong>Yearly Academic ($99/year):</strong> the same access for 12 months (about $8.25 a month).</li>
                                <li><strong>Lifetime ($199 one-time):</strong> a one-time payment for continued personal access to the Extension for as long as we offer it, with no renewal fees.</li>
                            </ul>
                            <p>Plan features and limits may change over time; the plan description shown when you buy is what applies to your purchase.</p>
                        </section>
                        <section id="s4" className="space-y-3 py-8 scroll-mt-24 max-w-[66ch]">
                            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-ink">4. 14-Day Money-Back Guarantee &amp; Refund Policy</h2>
                            <p>
                                All paid plans come with a <strong>14-day money-back guarantee</strong>: if you are not satisfied, request a full refund within 14 days of purchase.
                            </p>
                            <div className="p-4 rounded-xl bg-emeraldBrand-soft border border-emeraldBrand/25 text-sm text-ink space-y-1.5">
                                <div className="font-bold flex items-center gap-1.5 text-emeraldBrand">
                                    <Check className="w-4 h-4 shrink-0" aria-hidden="true" />
                                    <span>14-day money-back guarantee</span>
                                </div>
                                <p className="text-ink-secondary">
                                    Email <code className="font-mono text-[13px] bg-white px-1.5 py-0.5 rounded border border-ink/[0.08] text-ink">support@examghost.com</code> or message us on Discord within 14 days of purchase with your order receipt. Refunds go back to your original payment method.
                                </p>
                            </div>
                        </section>
                        <section id="s5" className="space-y-3 py-8 scroll-mt-24 max-w-[66ch]">
                            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-ink">5. Intellectual Property &amp; Prohibited Conduct</h2>
                            <p>
                                The software, its code, user interface and the ExamGhost mascot artwork are the property of FoundryOne LLC. You agree not to:
                            </p>
                            <ul className="space-y-2.5 pl-4 list-disc text-sm">
                                <li>Decompile, reverse-engineer or extract the source code for commercial resale.</li>
                                <li>Distribute cracked, modified or unauthorized license keys.</li>
                                <li>Resell or lease your license to others.</li>
                                <li>Use the Service to break the law, or to harass or harm others.</li>
                            </ul>
                        </section>
                        <section id="s6" className="space-y-3 py-8 scroll-mt-24 max-w-[66ch]">
                            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-ink">6. Disclaimer of Warranties &amp; Limitation of Liability</h2>
                            <p>
                                AI answers can be wrong. Check important answers yourself. The Service is provided &quot;as is&quot; without warranties, including of uninterrupted availability or of compatibility with every website or platform, which may change without notice. To the fullest extent the law allows, FoundryOne LLC is not liable for academic sanctions, grade disputes or indirect damages arising from your use of the Service.
                            </p>
                        </section>
                        <section id="s7" className="space-y-3 pt-8 scroll-mt-24 max-w-[66ch]">
                            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-ink">7. Governing Law &amp; Support Contacts</h2>
                            <p>
                                These terms are governed by the laws of the State of New Mexico, United States, where FoundryOne LLC is registered. For legal inquiries or support requests, contact:
                            </p>
                            <div className="p-4 rounded-xl bg-surface-subtle border border-ink/[0.08] text-sm space-y-1.5">
                                <div><strong className="text-ink">Operating Entity:</strong> FoundryOne LLC (1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110)</div>
                                <div><strong className="text-ink">Legal Inquiries:</strong> legal@examghost.com</div>
                                <div><strong className="text-ink">Customer &amp; Billing Support:</strong> support@examghost.com</div>
                                <div>
                                    <strong className="text-ink">Community Server:</strong>{" "}
                                    <a
                                        href={DISCORD_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cobalt hover:text-discord-hover underline underline-offset-4 font-semibold transition-colors"
                                    >
                                        Join Discord
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <Footer hideCta />
        </div>
    );
}
