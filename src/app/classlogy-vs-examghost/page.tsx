import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, XCircle, Zap, ShieldAlert, Timer, EyeOff } from "lucide-react";
import { FaChrome } from "react-icons/fa";
import ComparisonTable from "@/components/ComparisonTable";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

export const metadata = {
    title: "ExamGhost vs Classlogy | Premium Stealth Canvas Assistant (2026)",
    description: "Looking for a Classlogy alternative? ExamGhost protects your active Canvas session with 100% focus immunity and automatic document visibility masking.",
};

export default function ClasslogyComparison() {
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
                        <span className="text-[11px] font-bold text-slate-800 tracking-widest uppercase">The #1 Classlogy Alternative</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
                        Don't let <br className="hidden md:block" />
                        <span className="text-rose-500 relative">
                            focus leaks
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-rose-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 0 100 5 Q 50 10 0 5" fill="currentColor" />
                            </svg>
                        </span> ruin your midterm.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                        Basic tools like Classlogy fail to intercept window 'blur' events, meaning Canvas immediately knows when you interact with their extension. ExamGhost provides <span className="font-bold text-slate-800">100% Focus Immunity</span>, masking your activity completely.
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

                        {/* The Problem (Classlogy Risk) */}
                        <div className="bg-rose-50 rounded-[2rem] p-8 md:p-10 border border-rose-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <ShieldAlert className="w-40 h-40 text-rose-500" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-rose-500 font-bold text-xl">
                                        <XCircle className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">Classlogy's Security Flaw</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed mb-8">
                                    Classlogy offers a neat UI, but severely lacks stealth engineering. Clicking on their interface components fires system events that tell the host page (your Canvas quiz) that it is <strong className="text-rose-600">no longer the active, focused window</strong>.
                                </p>
                                <div className="space-y-4">
                                    <div className="bg-white/60 backdrop-blur rounded-xl p-4 border border-rose-200/50 flex gap-3 items-start">
                                        <Timer className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">Prone to Focus Loss Flags</h4>
                                            <p className="text-xs text-slate-500 mt-1.5">Fails to adequate mask 'tab out' or window blur events on secure portals.</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur rounded-xl p-4 border border-rose-200/50 flex gap-3 items-start">
                                        <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">Visible DOM Elements</h4>
                                            <p className="text-xs text-slate-500 mt-1.5">Triggers automated academic integrity flags by altering the page HTML.</p>
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
                                            <h4 className="font-bold text-slate-800 text-sm">Zero-Click Auto Detection</h4>
                                            <p className="text-xs text-slate-500 mt-1.5">Questions are scanned and solved instantly without touching your mouse.</p>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm flex gap-3 items-start hover:shadow-md transition-shadow">
                                        <EyeOff className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">100% Canvas Safe</h4>
                                            <p className="text-xs text-slate-500 mt-1.5">No copy events. No highlight tracking. Completely invisible overlay.</p>
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
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center tracking-tight">Classlogy vs ExamGhost: Detailed Analysis</h2>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded flex items-center justify-center text-sm shrink-0">1</span>
                                    Handling "Focus Loss" Traps
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    One of the easiest ways students get flagged during an online test is when the portal detects a browser "blur" event. This happens anytime you click outside the test window, switch to a new tab, or interact with a basic browser extension like Classlogy. Classlogy does not have the technical depth to hide these interactions from your professor's dashboard.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    <strong>The ExamGhost Advantage:</strong> ExamGhost proactively intercepts and overrides the browser's native event listeners. By aggressively patching the `window.onblur` events and locking the `document.visibilityState` to 'visible', ExamGhost mathematically guarantees your testing portal believes you are staring right at it, 100% of the time.
                                </p>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded flex items-center justify-center text-sm shrink-0">2</span>
                                    The Risk of DOM Injection
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Like many basic extensions, Classlogy renders its buttons and popups by modifying the HTML structure (DOM) of the webpage you are currently on. Basic proctoring scripts routinely diff the DOM tree, instantly catching these unauthorized nodes and flagging the exam attempt for review.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    <strong>The ExamGhost Advantage:</strong> ExamGhost is entirely injected into an isolated Shadow DOM container. It exists completely asynchronously from the main testing application. Your Canvas test literally cannot see the ExamGhost overlay, ensuring perfect stealth.
                                </p>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded flex items-center justify-center text-sm shrink-0">3</span>
                                    Speed When Processing
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Classlogy routes requests through traditional cloud servers, leading to unpredictable latency. In a timed final, you do not have 12 seconds to wait while the server spins up to generate an OCR result.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    <strong>The ExamGhost Advantage:</strong> The ExamGhost engine runs via distributed Edge Compute nodes, processing optical character recognition locally and delivering fully accurate, complex AI solved responses back to your screen in <strong className="text-slate-800 font-bold">1.2 seconds or less</strong>. You will never wait on ExamGhost.
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
