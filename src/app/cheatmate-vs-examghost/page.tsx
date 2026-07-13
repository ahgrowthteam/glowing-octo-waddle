import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, XCircle, Zap, ShieldAlert, Timer, EyeOff } from "lucide-react";
import { FaChrome } from "react-icons/fa";
import ComparisonTable from "@/components/ComparisonTable";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

export const metadata = {
    title: "ExamGhost vs CheatMate | The #1 Undetectable Alternative (2026)",
    description: "Looking for a CheatMate alternative? ExamGhost is 10X faster, 100% immune to Canvas tracking, and strictly bypasses Shadow DOM detection.",
};

export default function CheatMateComparison() {
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
                        <span className="text-[11px] font-bold text-slate-800 tracking-widest uppercase">The #1 CheatMate Alternative</span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-[4.5rem] font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6 max-w-4xl mx-auto">
                        Stop risking your degree <br className="hidden md:block" />
                        with <span className="text-rose-500 relative">
                            detectable
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-rose-500/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 0 100 5 Q 50 10 0 5" fill="currentColor" />
                            </svg>
                        </span> tools.
                    </h1>

                    <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
                        CheatMate injects code directly into your page source, leaving a measurable footprint. ExamGhost operates entirely in the <span className="font-bold text-slate-800">Shadow DOM</span>, making it mathematically impossible for Canvas, Blackboard, or Canvas to detect.
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

                        {/* The Problem (CheatMate Risk) */}
                        <div className="bg-rose-50 rounded-[2rem] p-8 md:p-10 border border-rose-100 relative overflow-hidden group">
                            <div className="absolute top-0 right-0 p-6 opacity-10">
                                <ShieldAlert className="w-40 h-40 text-rose-500" />
                            </div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm text-rose-500 font-bold text-xl">
                                        <XCircle className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900">CheatMate's Flaw</h3>
                                </div>
                                <p className="text-slate-600 leading-relaxed mb-8">
                                    Other extensions use standard content scripts. This means when they overlay a button or scan your quiz, they <strong className="text-rose-600">modify the DOM</strong> (Document Object Model).
                                    Modern proctoring scripts actively hash and monitor the DOM for these exact changes.
                                </p>
                                <div className="space-y-4">
                                    <div className="bg-white/60 backdrop-blur rounded-xl p-4 border border-rose-200/50 flex gap-3 items-start">
                                        <ShieldAlert className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">Easily Detectable DOM Injection</h4>
                                            <p className="text-xs text-slate-500 mt-1.5">Triggers automated academic integrity flags on major platforms.</p>
                                        </div>
                                    </div>
                                    <div className="bg-white/60 backdrop-blur rounded-xl p-4 border border-rose-200/50 flex gap-3 items-start">
                                        <Timer className="w-5 h-5 text-rose-500 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">Slow Extraction (10+ Seconds)</h4>
                                            <p className="text-xs text-slate-500 mt-1.5">Wastes valuable exam time waiting for OCR server responses.</p>
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
                                    ExamGhost bypasses the main browser thread entirely. We utilize isolated <strong className="text-blue-600">Shadow DOM boundaries</strong> and off-screen rendering. Because we never touch the main DOM, site scripts cannot see us.
                                </p>
                                <div className="space-y-4">
                                    <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm flex gap-3 items-start hover:shadow-md transition-shadow">
                                        <EyeOff className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">100% Shadow DOM Immunity</h4>
                                            <p className="text-xs text-slate-500 mt-1.5">No injected nodes. No layout shifts. Mathematically invisible.</p>
                                        </div>
                                    </div>
                                    <div className="bg-white rounded-xl p-4 border border-blue-100 shadow-sm flex gap-3 items-start hover:shadow-md transition-shadow">
                                        <Zap className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                                        <div>
                                            <h4 className="font-bold text-slate-800 text-sm">Sub-1.5s Edge Processing</h4>
                                            <p className="text-xs text-slate-500 mt-1.5">Instant local OCR + Edge AI means answers appear before you blink.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            {/* Speed Visualizer Section */}
            <section className="py-24 bg-[#0B101E] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
                <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-16">
                        Don't wait 10 seconds <br className="hidden md:block" /> for a simple answer.
                    </h2>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-12 sm:gap-20 max-w-4xl mx-auto">
                        {/* Cheatmate Timer */}
                        <div className="text-center w-full max-w-[280px]">
                            <div className="w-32 h-32 mx-auto rounded-full border-[6px] border-slate-800 flex items-center justify-center mb-6 relative">
                                <div className="absolute inset-0 border-[6px] border-rose-500 rounded-full border-t-transparent animate-[spin_6s_linear_infinite]" />
                                <span className="text-3xl font-black text-rose-500 font-mono tracking-tighter">11.4s</span>
                            </div>
                            <h3 className="text-xl font-bold text-slate-300 mb-2">CheatMate</h3>
                            <p className="text-sm text-slate-500 font-medium">Legacy cloud processing</p>
                        </div>

                        <div className="hidden md:block w-px h-32 bg-slate-800" />

                        {/* ExamGhost Timer */}
                        <div className="text-center w-full max-w-[280px]">
                            <div className="w-40 h-40 mx-auto rounded-full border-[6px] border-blue-900/30 bg-blue-600/10 flex items-center justify-center mb-6 relative shadow-[0_0_50px_rgba(59,130,246,0.15)]">
                                <div className="absolute inset-0 border-[6px] border-blue-500 rounded-full border-t-transparent animate-[spin_1s_linear_infinite]" />
                                <span className="text-5xl font-black text-blue-400 font-mono tracking-tighter shadow-blue-500/50 drop-shadow-xl drop-shadow-blue-500">1.2s</span>
                            </div>
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/20 text-blue-400 rounded-lg text-xs font-bold uppercase tracking-wider mb-2 border border-blue-500/30">
                                <Zap className="w-3 h-3" />
                                Edge Compute
                            </div>
                            <h3 className="text-xl font-bold text-white mb-2">ExamGhost</h3>
                            <p className="text-sm text-blue-200/60 font-medium">Instant DOM extraction</p>
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
                        <h2 className="text-3xl font-extrabold text-slate-900 mb-8 text-center tracking-tight">CheatMate vs ExamGhost: Detailed Analysis</h2>

                        <div className="space-y-12">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded flex items-center justify-center text-sm shrink-0">1</span>
                                    Is CheatMate Safe to Use on Canvas?
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    The short answer is <strong>no</strong>. CheatMate relies on legacy Chrome extension architecture that injects visible scripts directly into the DOM of your learning portal. When a Canvas or Blackboard quiz is active, proctoring scripts routinely scan the DOM for these anomalies. Students using CheatMate frequently report automated academic integrity flags.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    <strong>The ExamGhost Advantage:</strong> We developed a proprietary Shadow DOM layer that exists entirely outside the main page structure. To a Canvas proctoring script, your page looks 100% untouched. It's mathematically impossible for them to detect the ExamGhost overlay.
                                </p>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded flex items-center justify-center text-sm shrink-0">2</span>
                                    Speed & Reliability During Exams
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    During midterms and finals, CheatMate's centralized servers frequently buckle under the load, resulting in answer delays of 10 to 15 seconds. In a timed exam, every second counts. You cannot afford to wait for a lagging server to return your OCR results.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    <strong>The ExamGhost Advantage:</strong> ExamGhost utilizes distributed Edge Computing and local OCR processing. This means your questions are processed practically on your own machine before being sent to our localized AI nodes. The result? 100% accurate answers delivered in <strong>under 1.5 seconds</strong>, guaranteed.
                                </p>
                            </div>

                            <div className="w-full h-px bg-slate-100" />

                            <div>
                                <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-3">
                                    <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded flex items-center justify-center text-sm shrink-0">3</span>
                                    Pricing & Overall Value
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-4">
                                    Why pay a premium for a tool that puts your academic career at risk? CheatMate charges high monthly fees for outdated technology that frequently fails focus-loss tracking and DOM audits.
                                </p>
                                <p className="text-slate-600 leading-relaxed">
                                    <strong>The ExamGhost Advantage:</strong> Get state-of-the-art stealth technology, instant edge-compute answers, and constant updates that stay ahead of Canvas patches—all for a fraction of the cost. Plus, you can try ExamGhost completely free to see the speed and stealth for yourself.
                                </p>
                            </div>
                        </div>

                        <div className="mt-16 bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl p-8 md:p-12 text-center shadow-lg shadow-blue-900/5">
                            <h4 className="text-2xl font-bold text-blue-950 mb-4 tracking-tight">Ready to upgrade your exam toolkit?</h4>
                            <p className="text-blue-800/80 mb-8 max-w-lg mx-auto font-medium">Join 50,000+ top-tier students who have already switched to the safest AI solver.</p>
                            <button className="px-8 py-4 bg-[#4F71E5] hover:bg-blue-600 text-[16px] text-white rounded-xl font-bold transition-all shadow-md shadow-blue-500/20 w-full sm:w-auto transform hover:-translate-y-0.5">
                                Add ExamGhost to Chrome
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
