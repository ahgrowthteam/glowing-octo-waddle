import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

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
                "dateModified": "2026-03-01",
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
        <div className="min-h-screen bg-cream text-ink flex flex-col justify-between">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(privacyJsonLd) }}
            />
            <Navbar />

            <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-24 w-full">
                <header className="mb-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-4">Legal</p>
                    <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-5">Privacy Policy</h1>
                    <p className="text-base text-ink-muted leading-relaxed">
                        Last updated: March 1, 2026 · ExamGhost is operated by FoundryOne LLC (1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110) and operates with a strict zero-telemetry architecture: quiz questions and Snap-It OCR crops are processed ephemerally in RAM with zero remote query logs, zero school credential harvesting, and zero third-party ad trackers.
                    </p>
                </header>

                <nav aria-label="Contents" className="bg-white rounded-3xl border border-black/10 shadow-card p-6 mb-8">
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-muted mb-3">Contents</p>
                    <ol className="grid sm:grid-cols-2 gap-x-6 gap-y-1.5 text-[15px] text-ink-secondary list-decimal pl-5">
                        <li><a href="#s1" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">Information We Collect (and What We Do Not)</a></li>
                        <li><a href="#s2" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">How Questions and AI Solves Are Handled</a></li>
                        <li><a href="#s3" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">Canvas & LMS Audit Log Protection</a></li>
                        <li><a href="#s4" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">Third-Party Disclosures & Data Sharing</a></li>
                        <li><a href="#s5" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">FERPA, GDPR & CCPA Compliance</a></li>
                        <li><a href="#s6" className="hover:text-ink underline underline-offset-4 decoration-black/20 hover:decoration-black">Contact & Data Deletion Requests</a></li>
                    </ol>
                </nav>

                <div className="rounded-3xl bg-white border border-black/10 p-6 sm:p-10 shadow-card space-y-10 text-[15px] text-ink-secondary leading-relaxed">
                    <section id="s1" className="space-y-3 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">1. Information We Collect (and What We Do Not)</h2>
                        <p>
                            ExamGhost, operated by FoundryOne LLC (1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110), was engineered from day one with a strict <strong>privacy-first, zero-knowledge philosophy</strong>. Because our tools operate directly on-device inside your browser, our data collection footprint is minimal:
                        </p>
                        <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm">
                            <li><strong>Local Preferences (On-Device Only):</strong> Your chosen solver mode (Alt+1, Alt+2, Alt+3), keybinding preferences (e.g., Alt+S, ⌘+Shift+U), and attempt memory cache are stored strictly within Chrome’s encrypted local storage (`chrome.storage.local`). This data never leaves your laptop.</li>
                            <li><strong>License Verification:</strong> When activating your license key (whether 5 Free Solves / Day Tier, Monthly, Yearly, or Lifetime), the extension verifies the cryptographic hash with our licensing server. We only record an anonymous license token and creation timestamp.</li>
                            <li><strong>Payment Data:</strong> Payments are processed via encrypted third-party processors (such as Stripe). ExamGhost never accesses or stores credit card numbers, CVVs, or billing addresses.</li>
                        </ul>
                    </section>

                    <section id="s2" className="space-y-3 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">2. How Questions and AI Solves Are Handled</h2>
                        <p>
                            When you Double-Click a question, use hotkey auto-solve, or crop a diagram with Snap-It (Alt+S):
                        </p>
                        <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm">
                            <li>Text and cropped bitmap data are processed in volatile memory buffers.</li>
                            <li>Requests sent to our edge inference endpoints are stripped of all student-identifying metadata, IP origin logs, and school session cookies.</li>
                            <li>Once the response is calculated and returned to your closed Shadow DOM HUD, the ephemeral memory buffer is immediately flushed.</li>
                            <li>Your question data is <strong>never used to train public machine learning models</strong>.</li>
                        </ul>
                    </section>

                    <section id="s3" className="space-y-3 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">3. Canvas & LMS Audit Log Protection</h2>
                        <p>
                            Our Focus Shield operates by neutralizing the browser’s `window.blur` and `document.visibilitychange` event dispatches. While this prevents Learning Management Systems (Canvas, Blackboard, Moodle, D2L) from registering false departure logs in SpeedGrader, it does not modify the school's server-side gradebook or corrupt exam databases.
                        </p>
                    </section>

                    <section id="s4" className="space-y-3 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">4. Third-Party Disclosures & Data Sharing</h2>
                        <p>
                            We do not sell, rent, monetize, or trade student data under any circumstances. We will never share usage statistics with educational institutions, proctoring vendors, academic integrity boards, or advertising syndicates.
                        </p>
                    </section>

                    <section id="s5" className="space-y-3 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">5. FERPA, GDPR & CCPA Compliance</h2>
                        <p>
                            Because ExamGhost does not harvest educational records, student PII (Personally Identifiable Information), or grade transcripts, our architecture is compliant with the Family Educational Rights and Privacy Act (FERPA), the General Data Protection Regulation (GDPR), and the California Consumer Privacy Act (CCPA).
                        </p>
                    </section>

                    <section id="s6" className="space-y-3 scroll-mt-24">
                        <h2 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-ink">6. Contact & Data Deletion Requests</h2>
                        <p>
                            If you wish to revoke an anonymous license key or have questions regarding our cryptographic privacy architecture, you may contact our privacy engineering team directly:
                        </p>
                        <div className="p-4 rounded-2xl bg-[#faf8f4] border border-black/5 text-xs space-y-1">
                            <div><strong>Operating Entity:</strong> FoundryOne LLC (1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110)</div>
                            <div><strong>Email:</strong> privacy@examghost.com</div>
                            <div><strong>Discord Support:</strong> Open a private ticket on our <a href="https://discord.gg/aCcsyKYJq4" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold underline">Official Student Discord</a>.</div>
                            <div><strong>Guaranteed Response:</strong> Under 24 hours (under 2 hours during exam finals).</div>
                        </div>
                    </section>
                </div>
            </main>

            <Footer hideCta />
        </div>
    );
}
