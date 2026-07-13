import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, XCircle, Zap, ShieldAlert, Timer, EyeOff } from "lucide-react";
import { FaChrome } from "react-icons/fa";
import ComparisonTable from "@/components/ComparisonTable";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

export const metadata = {
    title: "ExamGhost vs Quizard | The Ultimate AI Canvas Assistant (2026)",
    description: "Looking for a Quizard alternative? Stop risking eye-tracking flags. ExamGhost automatically solves questions directly on your screen. 100% webcam safe.",
};

export default function QuizardComparison() {
    return (
        <div className="min-h-screen bg-white selection:bg-blue-100 selection:text-blue-900">
            <Navbar />

            {/* SEO Hero Section */}
            <section className="pt-32 pb-20 relative overflow-hidden bg-[#FAFAFA] border-b border-slate-100">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/50 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

                <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-[11px] font-bold text-slate-800 tracking-widest uppercase">The #1 Quizard Alternative</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
                        Stop getting caught on <br className="hidden md:block" />
                        <span className="text-rose-500 relative">
                            your phone
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-rose-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 0 100 5 Q 50 10 0 5" fill="currentColor" />
                            </svg>
                        </span> by webcams.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                        Quizard forces you to physically point your phone at your monitor. ExamGhost is an invisible desktop extension that reads your screen directly. Never look away from the test again.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="px-8 py-4 bg-[#4F71E5] hover:bg-blue-600 text-[16px] text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/30 flex items-center justify-center gap-3 transform hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/40 w-full sm:w-auto">
                            <FaChrome className="w-5 h-5" />
                            <span>Switch to ExamGhost Free</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Head to Head Visual Section */}
            <section className="py-24 bg-white relative">
                <div className="max-w-6xl mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">Why top students are migrating.</h2>
                        <p className="text-slate-500 text-lg">A direct technical comparison of stealth infrastructures.</p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

                        {/* The Problem (Quizard Risk) */}
                        <div className="bg-rose-50 rounded-[2rem] p-8 md:p-10 border border-rose-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <ShieldAlert className="w-40 h-40 text-rose-500" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-rose-500 font-bold text-xl">
                                        <XCircle className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">Quizard's Flaw</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed mb-8">
                                    Quizard is designed as a mobile app. Using it during a midterm means you have to physically pick up your phone and point your camera at the screen. <strong className="text-rose-600">Proctoring webcams catch this instantly.</strong>
                                </p>
                                <div className="space-y-4">
                                    <div className="bg-white/60 backdrop-blur rounded-xl p-4 border border-rose-200/50 flex gap-3 items-start">
                                        <Timer className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">Eye-Tracking Triggers</h4>
                                            <p className="text-xs text-slate-500 mt-1.5">Looking down at your phone or away from the monitor flags your session.</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur rounded-xl p-4 border border-rose-200/50 flex gap-3 items-start">
                                        <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">Physical Device Detection</h4>
                                            <p className="text-xs text-slate-500 mt-1.5">Movement, reflections, or sounds from your mobile device will ruin your attempt.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* The Solution (ExamGhost Stealth) */}
                        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-[2rem] p-8 md:p-10 border border-blue-100 relative overflow-hidden transform lg:scale-105 shadow-xl shadow-blue-900/5">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center shadow-md text-white font-bold text-xl">
                                        <CheckCircle2 className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-blue-950">ExamGhost's Stealth</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed mb-8">
                                    ExamGhost completely eliminates manual interaction. Our <strong className="text-blue-600">Auto-Extract Engine</strong> reads the active DOM tree silently via the Shadow DOM, providing answers alongside the question automatically.
                                </p>
                                <div className="space-y-4">
                                    <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm flex gap-3 items-start hover:shadow-md transition-shadow">
                                        <Zap className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">Zero-Movement Auto Detection</h4>
                                            <p className="text-xs text-slate-500 mt-1.5">Questions are scanned instantly. Keep your eyes locked perfectly on the screen.</p>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm flex gap-3 items-start hover:shadow-md transition-shadow">
                                        <EyeOff className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">Webcam Safe Technology</h4>
                                            <p className="text-xs text-slate-500 mt-1.5">The transparent answers overlay directly on the canvas without leaving a trace.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Trust & Comparison */}
            <ComparisonTable />

            {/* Call to Action Footer Sections */}
            <div className="bg-slate-50">
                <Pricing />

                {/* SEO Deep Dive: Verdict & Analysis */}
                <section className="py-20 bg-white border-t border-slate-100">
                    <div className="max-w-4xl mx-auto px-4">
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center tracking-tight">Quizard vs ExamGhost: Detailed Analysis</h2>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded flex items-center justify-center text-sm shrink-0">1</span>
                                    The Webcam & Eye-Tracking Problem
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Quizard heavily markets its mobile app scanning capabilities. While scanning a worksheet at home is great, attempting to pull out your phone and snap a picture of a monitor during a locked-down Canvas or Respondus session is a massive academic integrity violation. Webcams track eye movement, pupil dilation, and physical hand movements rigorously.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    <strong>The ExamGhost Advantage:</strong> ExamGhost is built directly into your desktop environment. Our Shadow DOM overlay places the answers directly next to the questions on your screen. You never have to break eye contact with your webcam, move your hands off the keyboard, or exhibit any suspicious behavior.
                                </p>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded flex items-center justify-center text-sm shrink-0">2</span>
                                    Optical Character Recognition (OCR) Speed
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Mobile scanning apps like Quizard rely heavily on lighting conditions, monitor glare, and slow cloud uploads to process images. This often results in failed scans and lengthy 10-15 second wait times just to read the text.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    <strong>The ExamGhost Advantage:</strong> ExamGhost reads the raw DOM data of the webpage—not a glare-filled photograph. This allows us to process the text locally and hit our specialized Edge AI endpoints, returning complex answers with 100% accuracy in under 1.5 seconds.
                                </p>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded flex items-center justify-center text-sm shrink-0">3</span>
                                    Built for Midterms, not just Homework
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Quizard is fantastic for a casual study session or homework help. But when you are in a high-stakes, timed, and actively monitored environment, using a mobile study app translates to an immense, unnecessary risk.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    <strong>The ExamGhost Advantage:</strong> ExamGhost is purpose-built for the rigorous constraints of modern proctoring. By intercepting blur events, masking visibility states, and rendering strictly in the Shadow DOM, ExamGhost provides an enterprise-grade safety net that study apps simply cannot offer.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-8 md:p-12 text-center shadow-lg shadow-blue-900/5">
                            <h4 className="text-2xl font-bold text-blue-950 mb-4 tracking-tight">Stop risking detection. Upgrade your stealth today.</h4>
                            <p className="text-blue-800/80 mb-8 max-w-lg mx-auto font-medium">Join 50,000+ top-tier students who have already switched to the safest AI solver.</p>
                            <button className="px-8 py-4 bg-[#4F71E5] hover:bg-blue-600 text-[16px] text-white rounded-xl font-bold transition-all shadow-md shadow-blue-500/20 w-full sm:w-auto transform hover:-translate-y-0.5">
                                Switch to ExamGhost for Free
                            </button>
                        </div>
                    </div>
                </section>

                <FAQ />
            </div>

            <Footer />
        </div>
    );
}
