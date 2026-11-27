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

            <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-24 w-full">
                <header className="mb-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-4">Legal</p>
                    <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-5">Privacy Policy</h1>
                    <p className="text-base text-ink-muted leading-relaxed">
                        Last updated: November 19, 2026 · ExamGhost is operated by FoundryOne LLC (1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110). This page explains what the ExamGhost Chrome extension and website collect, how your questions are processed, and how to reach us about your data.
                    </p>
                </header>

                <nav aria-label="Contents" className="bg-white rounded-3xl border border-black/10 surface-card p-6 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Contents</p>
                    <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-[15px] text-ink-secondary list-decimal pl-5">
                        <li><a href="#s1" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">Information We Collect</a></li>
                        <li><a href="#s2" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">How Questions and AI Solves Are Handled</a></li>
                        <li><a href="#s3" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">School and Course Monitoring</a></li>
                        <li><a href="#s4" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">Third-Party Disclosures & Data Sharing</a></li>
                        <li><a href="#s5" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">Your Choices and Rights</a></li>
                        <li><a href="#s6" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">Contact & Data Deletion Requests</a></li>
                    </ol>
                </nav>

                <div className="rounded-3xl bg-white border border-black/10 p-6 sm:p-10 surface-card divide-y divide-black/[0.06] text-[15px] text-ink-secondary leading-relaxed">
                    <section id="s1" className="space-y-3 pb-8 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">1. Information We Collect</h2>
                        <p>We collect only what the extension and website need to work:</p>
                        <ul className="space-y-2 pl-4 list-disc text-sm">
                            <li><strong>Account and plan details:</strong> the account information you use to sign in (such as your email address), your plan, and how many solves you have used today, so we can apply the free-plan limit and your paid plan.</li>
                            <li><strong>Questions you ask ExamGhost to solve:</strong> the question text, answer options or screenshot you choose to solve. See section 2.</li>
                            <li><strong>Preferences stored in your browser:</strong> settings such as your answer style, shortcuts and theme are saved in your browser on your device.</li>
                            <li><strong>Payments:</strong> payments are handled by a third-party payment processor such as Stripe. We do not receive or store your full card number.</li>
                            <li><strong>Messages you send us:</strong> emails and Discord messages you send to support.</li>
                        </ul>
                    </section>
                    <section id="s2" className="space-y-3 py-8 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">2. How Questions and AI Solves Are Handled</h2>
                        <p>When you double-click a question, scan a page, or use the Alt+S screenshot tool:</p>
                        <ul className="space-y-2 pl-4 list-disc text-sm">
                            <li>The question text, options or screenshot you chose is sent to our servers so an AI model can produce the answer, and the answer is returned to your page.</li>
                            <li>We use third-party AI providers to generate answers. Content you submit is shared with them only for that purpose.</li>
                            <li>Do not solve content you do not want processed this way. If a page shows personal information, avoid including it in a screenshot.</li>
                        </ul>
                    </section>
                    <section id="s3" className="space-y-3 py-8 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">3. School and Course Monitoring</h2>
                        <p>
                            Your school, instructor or testing platform may record activity on their own systems and may restrict or prohibit AI tools. ExamGhost does not control what those systems record, and we cannot predict it. You are responsible for following your course and institution rules. We do not provide your usage to schools or instructors, and we do not promise that any use will go unnoticed.
                        </p>
                    </section>
                    <section id="s4" className="space-y-3 py-8 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">4. Third-Party Disclosures & Data Sharing</h2>
                        <p>
                            We do not sell your personal information. We share data only with service providers that help us run ExamGhost (such as AI model providers, our payment processor and hosting), or when the law requires it.
                        </p>
                    </section>
                    <section id="s5" className="space-y-3 py-8 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">5. Your Choices and Rights</h2>
                        <p>
                            You can turn the extension off at any time with the on/off switch in its popup, and you can uninstall it from Chrome. Depending on where you live, you may have rights to access, correct or delete the personal information we hold about you. Contact us at the address below and we will help.
                        </p>
                    </section>
                    <section id="s6" className="space-y-3 pt-8 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">6. Contact & Data Deletion Requests</h2>
                        <p>
                            To ask a question about this policy, or to request access to or deletion of your data, contact us:
                        </p>
                        <div className="p-4 rounded-2xl bg-[#faf8f4] border border-black/5 text-sm space-y-1">
                            <div><strong>Operating Entity:</strong> FoundryOne LLC (1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110)</div>
                            <div><strong>Email:</strong> privacy@examghost.com</div>
                            <div><strong>Discord:</strong> <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold underline">Join the ExamGhost Discord</a> for general support (do not post private details in public channels).</div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer hideCta />
        </div>
    );
}
