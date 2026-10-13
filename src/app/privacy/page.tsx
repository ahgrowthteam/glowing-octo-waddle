import React from 'react';
import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Shield, Lock, EyeOff, FileText, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
    title: "Privacy Policy | ExamGhost Zero-Telemetry Stealth Architecture",
    description: "Learn how ExamGhost protects your academic privacy with zero server query logs, closed Shadow DOM execution, and zero tracking cookies.",
    alternates: {
        canonical: "https://examghost.com/privacy",
    },
    openGraph: {
        title: "Privacy Policy | ExamGhost",
        description: "Zero server logs, zero LMS telemetry, and zero tracking. Your academic data stays private on your local machine.",
        url: "https://examghost.com/privacy",
        siteName: "ExamGhost",
    },
};

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-cream text-ink flex flex-col justify-between">
            <Navbar />

            <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 pb-20 w-full">
                
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-14">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        <span>ZERO-TELEMETRY POLICY</span>
                    </p>
                    <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-ink mb-4">
                        Privacy Policy
                    </h1>
                    <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                        Last updated: October 2026 · Effective immediately for all ExamGhost users worldwide.
                    </p>
                </div>

                {/* Core Privacy Pillars */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
                    <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-xs">
                        <div className="w-10 h-10 rounded-2xl bg-[#c4d0f8]/50 flex items-center justify-center text-indigo-900 mb-4">
                            <EyeOff className="w-5 h-5" />
                        </div>
                        <h2 className="font-display font-bold text-base text-ink mb-1.5">Zero Remote Logs</h2>
                        <p className="text-xs text-ink-muted leading-relaxed">
                            Questions and diagram crops are solved ephemeral in RAM. We never store quiz content or search histories on remote servers.
                        </p>
                    </div>

                    <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-xs">
                        <div className="w-10 h-10 rounded-2xl bg-[#cdeecb]/70 flex items-center justify-center text-emerald-900 mb-4">
                            <Lock className="w-5 h-5" />
                        </div>
                        <h2 className="font-display font-bold text-base text-ink mb-1.5">No School Telemetry</h2>
                        <p className="text-xs text-ink-muted leading-relaxed">
                            We never harvest or monitor student credentials, university emails, Canvas tokens, or institutional course IDs.
                        </p>
                    </div>

                    <div className="p-6 rounded-3xl bg-white border border-black/10 shadow-xs">
                        <div className="w-10 h-10 rounded-2xl bg-[#ffd5cc]/70 flex items-center justify-center text-rose-950 mb-4">
                            <Shield className="w-5 h-5" />
                        </div>
                        <h2 className="font-display font-bold text-base text-ink mb-1.5">No Ad Trackers</h2>
                        <p className="text-xs text-ink-muted leading-relaxed">
                            ExamGhost contains zero third-party advertising scripts, zero tracking pixels, and zero data resale partnerships.
                        </p>
                    </div>
                </div>

                {/* Policy Document Body */}
                <div className="rounded-3xl bg-white border border-black/10 p-8 sm:p-12 shadow-sm space-y-10 text-sm text-ink-secondary leading-relaxed">
                    
                    <section className="space-y-3">
                        <h2 className="font-display font-bold text-xl text-ink">1. Information We Collect (and What We Do Not)</h2>
                        <p>
                            ExamGhost was engineered from day one with a strict <strong>privacy-first, zero-knowledge philosophy</strong>. Because our tools operate directly on-device inside your browser, our data collection footprint is minimal:
                        </p>
                        <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm">
                            <li><strong>Local Preferences (On-Device Only):</strong> Your chosen HUD opacity level, keybinding preferences (e.g., ⌘+Shift+X), and attempt memory cache are stored strictly within Chrome’s encrypted local storage (`chrome.storage.local`). This data never leaves your laptop.</li>
                            <li><strong>License Verification:</strong> When activating your license key (whether Free 50-Solve Trial, Monthly, Yearly, or Lifetime), the extension verifies the cryptographic hash with our licensing server. We only record an anonymous license token and creation timestamp.</li>
                            <li><strong>Payment Data:</strong> Payments are processed via encrypted third-party processors (such as Stripe). ExamGhost never accesses or stores credit card numbers, CVVs, or billing addresses.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display font-bold text-xl text-ink">2. How Questions and AI Solves Are Handled</h2>
                        <p>
                            When you highlight a question, use keyboard auto-solve, or crop a diagram with Snap-It (⌘+Shift+S):
                        </p>
                        <ul className="space-y-2 pl-4 list-disc text-xs sm:text-sm">
                            <li>Text and cropped bitmap data are processed in volatile memory buffers.</li>
                            <li>Requests sent to our edge inference endpoints are stripped of all student-identifying metadata, IP origin logs, and school session cookies.</li>
                            <li>Once the response is calculated and returned to your closed Shadow DOM HUD, the ephemeral memory buffer is immediately flushed.</li>
                            <li>Your question data is <strong>never used to train public machine learning models</strong>.</li>
                        </ul>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display font-bold text-xl text-ink">3. Canvas & LMS Audit Log Protection</h2>
                        <p>
                            Our Focus Shield operates by neutralizing the browser’s `window.blur` and `document.visibilitychange` event dispatches. While this prevents Learning Management Systems (Canvas, Blackboard, Moodle, D2L) from registering false departure logs in SpeedGrader, it does not modify the school's server-side gradebook or corrupt exam databases.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display font-bold text-xl text-ink">4. Third-Party Disclosures & Data Sharing</h2>
                        <p>
                            We do not sell, rent, monetize, or trade student data under any circumstances. We will never share usage statistics with educational institutions, proctoring vendors, academic integrity boards, or advertising syndicates.
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display font-bold text-xl text-ink">5. FERPA, GDPR & CCPA Compliance</h2>
                        <p>
                            Because ExamGhost does not harvest educational records, student PII (Personally Identifiable Information), or grade transcripts, our architecture is compliant with the Family Educational Rights and Privacy Act (FERPA), the General Data Protection Regulation (GDPR), and the California Consumer Privacy Act (CCPA).
                        </p>
                    </section>

                    <section className="space-y-3">
                        <h2 className="font-display font-bold text-xl text-ink">6. Contact & Data Deletion Requests</h2>
                        <p>
                            If you wish to revoke an anonymous license key or have questions regarding our cryptographic privacy architecture, you may contact our privacy engineering team directly:
                        </p>
                        <div className="p-4 rounded-2xl bg-[#faf8f4] border border-black/5 text-xs space-y-1">
                            <div><strong>Email:</strong> privacy@examghost.com</div>
                            <div><strong>Discord Support:</strong> Open a private ticket on our <a href="https://discord.gg/aCcsyKYJq4" target="_blank" rel="noopener noreferrer" className="text-emerald-700 font-semibold underline">Official Student Discord</a>.</div>
                            <div><strong>Guaranteed Response:</strong> Under 24 hours (under 2 hours during exam finals).</div>
                        </div>
                    </section>

                </div>

            </main>

            <Footer />
        </div>
    );
}
