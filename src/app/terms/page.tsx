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

            <main id="main-content" className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-24 w-full">
                <header className="mb-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-4">Legal</p>
                    <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-5">Terms of Service</h1>
                    <p className="text-base text-ink-muted leading-relaxed">
                        Last modified: November 19, 2026 · ExamGhost is operated by FoundryOne LLC (1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110). There is a free plan with 5 solves a day and no credit card, paid plans at $19 a month, $99 a year or $199 lifetime, and a 14-day money-back guarantee.
                    </p>
                </header>

                <nav aria-label="Contents" className="bg-white rounded-3xl border border-black/10 surface-card p-6 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Contents</p>
                    <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-[15px] text-ink-secondary list-decimal pl-5">
                        <li><a href="#s1" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">Acceptance of Terms</a></li>
                        <li><a href="#s2" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">Acceptable Use and Academic Integrity</a></li>
                        <li><a href="#s3" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">License Grants & Tier Restrictions</a></li>
                        <li><a href="#s4" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">14-Day Money-Back Guarantee &amp; Refund Policy</a></li>
                        <li><a href="#s5" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">Intellectual Property &amp; Prohibited Conduct</a></li>
                        <li><a href="#s6" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">Disclaimer of Warranties & Limitation of Liability</a></li>
                        <li><a href="#s7" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">Governing Law &amp; Support Contacts</a></li>
                    </ol>
                </nav>

                <div className="rounded-3xl bg-white border border-black/10 p-6 sm:p-10 surface-card divide-y divide-black/[0.06] text-[15px] text-ink-secondary leading-relaxed">
                    <section id="s1" className="space-y-3 pb-8 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">1. Acceptance of Terms</h2>
                        <p>
                            ExamGhost (the &quot;Software&quot;, &quot;Extension&quot; or &quot;Service&quot;) is owned and operated by FoundryOne LLC (1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110). By installing or using ExamGhost you agree to these Terms of Service, including our 14-day money-back guarantee. If you do not agree, do not install or use the software.
                        </p>
                    </section>
                    <section id="s2" className="space-y-3 py-8 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">2. Acceptable Use and Academic Integrity</h2>
                        <p>
                            ExamGhost is an AI study and homework assistant. It is meant to help you review course material, practice, and understand how a question is solved.
                        </p>
                        <p>
                            You are solely responsible for using ExamGhost in line with your school, university or testing organization&apos;s rules, honor code and course policy. Many instructors restrict AI tools on graded work. We do not promise that your use will be invisible to your school or instructor, and we are not responsible for any disciplinary action that results from how you use the Service.
                        </p>
                    </section>
                    <section id="s3" className="space-y-3 py-8 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">3. License Grants & Plans</h2>
                        <p>We grant you a personal, non-transferable, non-exclusive license to use the Extension under the plan you choose:</p>
                        <ul className="space-y-2.5 pl-4 list-disc text-sm">
                            <li><strong>Free:</strong> 5 solves per day, no credit card and no recurring charge.</li>
                            <li><strong>Monthly ($19/month):</strong> removes the daily solve limit, including screenshot solves. Renews every month until you cancel; cancel before the renewal date to avoid the next charge.</li>
                            <li><strong>Yearly Academic ($99/year):</strong> the same access for 12 months (about $8.25 a month).</li>
                            <li><strong>Lifetime ($199 one-time):</strong> a one-time payment for continued personal access to the Extension for as long as we offer it, with no renewal fees.</li>
                        </ul>
                        <p>Plan features and limits may change over time; the plan description shown when you buy is what applies to your purchase.</p>
                    </section>
                    <section id="s4" className="space-y-3 py-8 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">4. 14-Day Money-Back Guarantee &amp; Refund Policy</h2>
                        <p>
                            All paid plans come with a <strong>14-day money-back guarantee</strong>: if you are not satisfied, request a full refund within 14 days of purchase.
                        </p>
                        <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-sm text-emerald-950 space-y-1.5">
                            <div className="font-bold flex items-center gap-1.5 text-emerald-900">
                                <Check className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                                <span>14-day money-back guarantee</span>
                            </div>
                            <p>
                                Email <code>support@examghost.com</code> or message us on Discord within 14 days of purchase with your order receipt. Refunds go back to your original payment method.
                            </p>
                        </div>
                    </section>
                    <section id="s5" className="space-y-3 py-8 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">5. Intellectual Property &amp; Prohibited Conduct</h2>
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
                    <section id="s6" className="space-y-3 py-8 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">6. Disclaimer of Warranties & Limitation of Liability</h2>
                        <p>
                            AI answers can be wrong. Check important answers yourself. The Service is provided &quot;as is&quot; without warranties, including of uninterrupted availability or of compatibility with every website or platform, which may change without notice. To the fullest extent the law allows, FoundryOne LLC is not liable for academic sanctions, grade disputes or indirect damages arising from your use of the Service.
                        </p>
                    </section>
                    <section id="s7" className="space-y-3 pt-8 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">7. Governing Law &amp; Support Contacts</h2>
                        <p>
                            These terms are governed by the laws of the State of New Mexico, United States, where FoundryOne LLC is registered. For legal inquiries or support requests, contact:
                        </p>
                        <div className="p-4 rounded-2xl bg-[#faf8f4] border border-black/5 text-sm space-y-1">
                            <div><strong>Operating Entity:</strong> FoundryOne LLC (1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110)</div>
                            <div><strong>Legal Inquiries:</strong> legal@examghost.com</div>
                            <div><strong>Customer &amp; Billing Support:</strong> support@examghost.com</div>
                            <div><strong>Community Server:</strong> <a href={DISCORD_URL} target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Join Discord</a></div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer hideCta />
        </div>
    );
}
