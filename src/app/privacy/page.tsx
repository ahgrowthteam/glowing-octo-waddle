import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { DISCORD_URL } from '@/components/home/config';

export const metadata: Metadata = {
    title: "Privacy Policy",
    description: "How ExamGhost handles your data: what we collect, how AI solves are processed, who we share with, and how to contact us.",
    alternates: {
        canonical: "https://www.examghost.com/privacy",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Privacy Policy | ExamGhost",
        description: "How ExamGhost handles your data: what we collect, how AI solves are processed, who we share with, and how to contact us.",
        url: "https://www.examghost.com/privacy",
        siteName: "ExamGhost",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ExamGhost Privacy Policy",
            },
        ],
    },
};

const SECTIONS = [
    { id: 's1', title: 'Information We Collect' },
    { id: 's2', title: 'How Questions and AI Solves Are Handled' },
    { id: 's3', title: 'School and Course Monitoring' },
    { id: 's4', title: 'Third-Party Disclosures & Data Sharing' },
    { id: 's5', title: 'Your Choices and Rights' },
    { id: 's6', title: 'Contact & Data Deletion Requests' },
];

export default function PrivacyPage() {
    const privacyJsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebPage",
                "@id": "https://www.examghost.com/privacy#webpage",
                "url": "https://www.examghost.com/privacy",
                "name": "Privacy Policy | ExamGhost",
                "description": "How ExamGhost handles your data: what we collect, how AI solves are processed, who we share with, and how to contact us.",
                "datePublished": "2026-01-15",
                "dateModified": "2026-11-19",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://www.examghost.com/#website" },
                "breadcrumb": { "@id": "https://www.examghost.com/privacy#breadcrumb" }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://www.examghost.com/privacy#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://www.examghost.com/privacy" }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink page-glow flex flex-col justify-between">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }}
            />
            <Navbar />

            <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-16 sm:pb-24 w-full">
                <header className="mb-10 pb-8 border-b border-ink/[0.08]">
                    <p className="text-sm font-medium text-cobalt mb-3">Legal &amp; privacy</p>
                    <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-[-0.03em] leading-[1.05] mb-4">Privacy Policy</h1>
                    <p className="text-base text-ink-muted max-w-[68ch] leading-relaxed">
                        Last updated: November 19, 2026 · ExamGhost is operated by FoundryOne LLC (1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110). This page explains what the ExamGhost Chrome extension and website collect, how your questions are processed, and how to reach us about your data.
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
                            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-ink">1. Information We Collect</h2>
                            <p>We collect only what the extension and website need to work:</p>
                            <ul className="space-y-2 pl-4 list-disc text-sm">
                                <li><strong>Account and plan details:</strong> the account information you use to sign in (such as your email address), your plan, and how many solves you have used today, so we can apply the free-plan limit and your paid plan.</li>
                                <li><strong>Questions you ask ExamGhost to solve:</strong> the question text, answer options or screenshot you choose to solve. See section 2.</li>
                                <li><strong>Preferences stored in your browser:</strong> settings such as your answer style, shortcuts and theme are saved in your browser on your device.</li>
                                <li><strong>Payments:</strong> payments are handled by a third-party payment processor such as Stripe. We do not receive or store your full card number.</li>
                                <li><strong>Messages you send us:</strong> emails and Discord messages you send to support.</li>
                            </ul>
                        </section>
                        <section id="s2" className="space-y-3 py-8 scroll-mt-24 max-w-[66ch]">
                            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-ink">2. How Questions and AI Solves Are Handled</h2>
                            <p>When you double-click a question, scan a page, or use the Alt+S screenshot tool:</p>
                            <ul className="space-y-2 pl-4 list-disc text-sm">
                                <li>The question text, options or screenshot you chose is sent to our servers so an AI model can produce the answer, and the answer is returned to your page.</li>
                                <li>We use third-party AI providers to generate answers. Content you submit is shared with them only for that purpose.</li>
                                <li>Do not solve content you do not want processed this way. If a page shows personal information, avoid including it in a screenshot.</li>
                            </ul>
                        </section>
                        <section id="s3" className="space-y-3 py-8 scroll-mt-24 max-w-[66ch]">
                            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-ink">3. School and Course Monitoring</h2>
                            <p>
                                Your school, instructor or testing platform may record activity on their own systems and may restrict or prohibit AI tools. ExamGhost does not control what those systems record, and we cannot predict it. You are responsible for following your course and institution rules. We do not provide your usage to schools or instructors, and we do not promise that any use will go unnoticed.
                            </p>
                        </section>
                        <section id="s4" className="space-y-3 py-8 scroll-mt-24 max-w-[66ch]">
                            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-ink">4. Third-Party Disclosures &amp; Data Sharing</h2>
                            <p>
                                We do not sell your personal information. We share data only with service providers that help us run ExamGhost (such as AI model providers, our payment processor and hosting), or when the law requires it.
                            </p>
                        </section>
                        <section id="s5" className="space-y-3 py-8 scroll-mt-24 max-w-[66ch]">
                            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-ink">5. Your Choices and Rights</h2>
                            <p>
                                You can turn the extension off at any time with the on/off switch in its popup, and you can uninstall it from Chrome. Depending on where you live, you may have rights to access, correct or delete the personal information we hold about you. Contact us at the address below and we will help.
                            </p>
                        </section>
                        <section id="s6" className="space-y-3 pt-8 scroll-mt-24 max-w-[66ch]">
                            <h2 className="font-display text-xl sm:text-2xl font-bold tracking-[-0.02em] text-ink">6. Contact &amp; Data Deletion Requests</h2>
                            <p>
                                To ask a question about this policy, or to request access to or deletion of your data, contact us:
                            </p>
                            <div className="p-4 rounded-xl bg-surface-subtle border border-ink/[0.08] text-sm space-y-1.5">
                                <div><strong className="text-ink">Operating Entity:</strong> FoundryOne LLC (1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110)</div>
                                <div><strong className="text-ink">Email:</strong> privacy@examghost.com</div>
                                <div>
                                    <strong className="text-ink">Discord:</strong>{" "}
                                    <a
                                        href={DISCORD_URL}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-cobalt hover:text-discord-hover font-semibold underline underline-offset-4 transition-colors"
                                    >
                                        Join the ExamGhost Discord
                                    </a>{" "}
                                    for general support (do not post private details in public channels).
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
