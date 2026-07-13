'use client';
import { motion } from 'framer-motion';

export default function Community() {
    return (
        <section className="py-24 bg-white dark:bg-background-dark relative">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 40 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="bg-[#5865F2] rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(88,101,242,0.25)] relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-12 group"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[60px] transform translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:bg-white/20 transition-colors duration-500"></div>
                    <div className="text-white relative z-10 max-w-lg">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight"
                        >
                            Join the Secret Society
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="text-blue-100 text-lg mb-8"
                        >
                            Get direct access to our developers, request new features, and join a community of 50,000+ elite students.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center justify-between text-[11px] font-bold text-blue-200 tracking-wider uppercase mb-1">
                                <span>Lifetime Licenses Left</span>
                                <span>194/250</span>
                            </div>
                            <div className="w-full h-3.5 bg-black/20 rounded-full overflow-hidden shadow-inner p-0.5">
                                <motion.div
                                    className="h-full bg-white rounded-full relative overflow-hidden"
                                    initial={{ width: 0 }}
                                    whileInView={{ width: "77.6%" }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
                                </motion.div>
                            </div>
                            <p className="text-xs text-blue-200/80 font-medium">Restocking in 12 days</p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, x: 40, rotate: 0 }}
                        whileInView={{ opacity: 1, x: 0, rotate: 3 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                        className="bg-white rounded-2xl p-6 shadow-2xl w-full max-w-xs relative z-10 transform md:rotate-3 hover:rotate-0 hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-5">
                            <div className="w-10 h-10 bg-[#5865F2] rounded-full flex items-center justify-center shadow-md">
                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.085 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.085 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
                                </svg>
                            </div>
                            <div>
                                <p className="font-bold text-slate-900 text-[15px] leading-tight mb-0.5">ExamGhost Official</p>
                                <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)] animate-pulse" />
                                    <p className="text-[12px] text-slate-500 font-semibold tracking-wide uppercase">4,203 Online</p>
                                </div>
                            </div>
                        </div>
                        <a href="#" className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold py-3 rounded-xl transition-colors shadow-lg shadow-[#5865F2]/20 text-[15px] flex items-center justify-center relative overflow-hidden group/btn">
                            <span className="relative z-10">Join Server</span>
                            <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover/btn:animate-[shimmer_1.5s_infinite]" />
                        </a>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
