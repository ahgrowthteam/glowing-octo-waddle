import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FileText, ShieldAlert, Check, RefreshCw, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Terms of Service & 14-Day Refund Guarantee",
    description: "Official terms of service, educational usage guidelines, subscription billing policies, and our 14-day 100% money-back refund guarantee for ExamGhost.",
    alternates: {
        canonical: "https://examghost.com/terms",
    },
    openGraph: {
        type: "website",
        locale: "en_US",
        title: "Terms of Service & 14-Day Refund Guarantee | ExamGhost",
        description: "Official licensing terms, academic usage guidelines, and 14-day money-back guarantee for ExamGhost.",
        url: "https://examghost.com/terms",
        siteName: "ExamGhost",
        images: [
            {
                url: "/og-image.jpg",
                width: 1200,
                height: 630,
                alt: "ExamGhost Terms of Service & Refund Guarantee",
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
                "@id": "https://examghost.com/terms#webpage",
                "url": "https://examghost.com/terms",
                "name": "Terms of Service & 14-Day Refund Guarantee | ExamGhost",
                "description": "Terms of service, educational usage policies, subscription terms, and 14-day 100% money-back refund guarantee for ExamGhost.",
                "datePublished": "2026-01-15",
                "dateModified": "2026-03-01",
                "inLanguage": "en-US",
                "isPartOf": { "@id": "https://examghost.com/#website" },
                "breadcrumb": { "@id": "https://examghost.com/terms#breadcrumb" },
                "speakable": {
                    "@type": "SpeakableSpecification",
                    "cssSelector": ["h1", ".aeo-summary"]
                }
            },
            {
                "@type": "BreadcrumbList",
                "@id": "https://examghost.com/terms#breadcrumb",
                "itemListElement": [
                    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://examghost.com" },
                    { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://examghost.com/terms" }
                ]
            }
        ]
    };

    return (
        <div className="min-h-screen bg-cream text-ink flex flex-col justify-between">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(termsJsonLd) }}
            />
            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20 w-full">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-ink" />
                        <span>USER AGREEMENT & LICENSING</span>
                    </p>
                    <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink mb-4">
                        Terms of Service
                    </h1>
                    <p className="aeo-summary text-sm sm:text-base text-ink-muted leading-relaxed">
                        Last modified: March 1, 2026 · ExamGhost provides a 50-question free trial with no credit card required, transparent Monthly ($19/mo), Yearly ($99/yr), and Lifetime VIP ($199) licensing, and a 14-day 100% money-back refund guarantee.
                    </p>
                </div>

                {/* Quick Terms Summary Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-14">
                    <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-xs">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200 block max-w-max mb-3">
                            Free Trial
                        </span>
                        <h2 className="font-display font-bold text-base text-ink mb-1">50 Free Solves</h2>
                        <p className="text-xs text-ink-muted leading-relaxed">
                            Full stealth HUD and Focus Shield unlocked with zero credit card required.
                        </p>
                    </div>

                    <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-xs">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-900 bg-[#c4d0f8]/50 px-2.5 py-0.5 rounded-full border border-[#c4d0f8] block max-w-max mb-3">
                            Guarantee
                        </span>
                        <h2 className="font-display font-bold text-base text-ink mb-1">14-Day Full Refund</h2>
                        <p className="text-xs text-ink-muted leading-relaxed">
                            100% money-back guarantee if ExamGhost fails to perform on your live quizzes.
                        </p>
                    </div>

                    <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-xs">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-purple-900 bg-[#e2d3fa]/60 px-2.5 py-0.5 rounded-full border border-[#e2d3fa] block max-w-max mb-3">
                            Licensing
                        </span>
                        <h2 className="font-display font-bold text-base text-ink mb-1">Single User License</h2>
                        <p className="text-xs text-ink-muted leading-relaxed">
                            Personal non-exclusive license for up to 3 authenticated student devices.
                        </p>
                    </div>
                </div>

                {/* Terms Document Body */}
                <div className="rounded-3xl bg-white border border-black/10 p-8 sm:p-12 shadow-sm space-y-10 text-sm text-ink-secondary leading-relaxed">
                    
                    <section className="space-y-3">
                        <h2 className="font-display font-bold text-xl text-ink">1. Acceptance of Terms</h2>
                        <p>
                            By downloading, installing, unpacking, or activating ExamGhost (the &quot;Software&quot;, &quot;Extension&quot;, or &quot;Service&quot;), you agree to be bound by these Terms of Service. If you do not agree to these terms, do not install or use the software.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display font-bold text-xl text-ink">2. Educational & Research Purpose</h2>
                        <p>
                            ExamGhost is developed as an educational research tool, test preparation simulator, and assistive study utility. It is intended to help students review difficult course material, practice timed exams, and analyze question logic. 
                        </p>
                        <p>
                            Users are solely responsible for ensuring their usage adheres to their school, university, or testing organization’s honor codes, academic integrity policies, and syllabus guidelines. ExamGhost assumes no liability for disciplinary actions resulting from institutional honor code violations.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display font-bold text-xl text-ink">3. License Grants & Tier Restrictions</h2>
                        <p>
                            We grant you a personal, non-transferable, non-exclusive license to use the Extension subject to the plan tier you select:
                        </p>
                        <ul className="space-y-2.5 pl-4 list-disc text-xs sm:text-sm">
                            <li><strong>Free Trial:</strong> Grants 50 question credit solves for testing purposes. No credit card or recurring subscription is created.</li>
                            <li><strong>Monthly Pass ($19/mo):</strong> Grants unlimited question solves on a month-to-month basis. Automatically renews every 30 days unless canceled through your account or Discord billing support before the renewal date.</li>
                            <li><strong>Yearly Academic Pass ($99/yr):</strong> Grants unlimited question solves for 365 days (~$8.25/mo), covering Fall, Spring, Summer semesters, and Finals week.</li>
                            <li><strong>Lifetime VIP Pass ($199 one-time):</strong> Grants permanent, perpetual personal access with zero future renewals or maintenance fees. Includes multi-device sync for up to 3 authorized student laptops.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display font-bold text-xl text-ink">4. 14-Day 100% Money-Back Guarantee & Refund Policy</h2>
                        <p>
                            We stand firmly behind the stealth, accuracy, and reliability of our software. If ExamGhost fails to solve questions or triggers unexpected LMS logs on your supported platforms:
                        </p>
                        <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-200 text-xs text-emerald-950 space-y-1.5">
                            <div className="font-bold flex items-center gap-1.5 text-emerald-900">
                                <Check className="w-4 h-4 text-emerald-600" />
                                <span>No-Hassle 14-Day Refund Window</span>
                            </div>
                            <p>
                                Contact our 24/7 Discord support team or email <code>support@examghost.com</code> within 14 days of purchase with your license key or order receipt. Your refund will be processed immediately back to your original payment method.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display font-bold text-xl text-ink">5. Intellectual Property & Prohibited Conduct</h2>
                        <p>
                            All software code, user interface styling, Shadow DOM hook algorithms, and ExamGhost mascot artwork are the exclusive intellectual property of ExamGhost. You agree NOT to:
                        </p>
                        <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm">
                            <li>Decompile, reverse-engineer, or extract the proprietary source code for commercial resale.</li>
                            <li>Distribute cracked, modified, or unauthorized license keys on public forums or torrent networks.</li>
                            <li>Resell or lease individual license keys to third parties outside of personal multi-device quotas.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display font-bold text-xl text-ink">6. Disclaimer of Warranties & Limitation of Liability</h2>
                        <p>
                            While ExamGhost's architecture is engineered to prevent SpeedGrader blur event flags and DOM inspection, third-party LMS platforms frequently deploy unexpected updates. The service is provided &quot;as is&quot; without warranties of uninterrupted uptime during third-party server maintenance. Under no circumstance shall ExamGhost be liable for academic sanctions or grade disputes.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display font-bold text-xl text-ink">7. Governing Law & Support Contacts</h2>
                        <p>
                            These terms are governed by the laws of the jurisdiction where the operating entity is registered. For legal inquiries or support requests, please contact:
                        </p>
                        <div className="p-4 rounded-2xl bg-[#faf8f4] border border-black/5 text-xs space-y-1">
                            <div><strong>Legal Inquiries:</strong> legal@examghost.com</div>
                            <div><strong>Customer & Billing Support:</strong> support@examghost.com</div>
                            <div><strong>Community Server:</strong> <a href="https://discord.gg/aCcsyKYJq4" target="_blank" rel="noopener noreferrer" className="text-emerald-700 underline font-semibold">Join Discord</a> (instant ticket queue)</div>
                        </div>
                    </section>

                </div>

            </main>

            <Footer />
        </div>
    );
}
