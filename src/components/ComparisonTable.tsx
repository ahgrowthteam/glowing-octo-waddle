'use client';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, AlertTriangle } from 'lucide-react';

export default function ComparisonTable() {
    const tableRows = [
        { feature: "Shadow DOM Stealth", examghost: true, cheatmate: false, quietly: false, testbro: false },
        { feature: "100% Canvas Focus Immunity", examghost: true, cheatmate: 'warn', quietly: false, testbro: 'warn' },
        { feature: "Off-screen Rendering", examghost: true, cheatmate: false, quietly: false, testbro: false },
        { feature: "Graph Analysis", examghost: true, cheatmate: true, quietly: false, testbro: false },
    ];

    const getIcon = (val: boolean | string) => {
        if (val === true) return <CheckCircle2 className="w-5 h-5 text-emerald-500 mx-auto" />;
        if (val === false) return <XCircle className="w-5 h-5 text-red-400 mx-auto" />;
        return <AlertTriangle className="w-5 h-5 text-yellow-500 mx-auto" />;
    };

    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-center mb-12"
                >
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase">The Ultimate Comparison</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2">Don't Get Caught With Inferior Tools</h2>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.98, y: 20 }}
                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                    className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl"
                >
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-800/50">
                                <th className="p-6 text-sm font-semibold text-slate-500 uppercase tracking-wider">Features</th>
                                <th className="p-6 text-center">
                                    <div className="flex flex-col items-center">
                                        <span className="text-xl font-bold text-primary">ExamGhost</span>
                                        <span className="text-xs text-emerald-500 font-medium">Recommended</span>
                                    </div>
                                </th>
                                <th className="p-6 text-center text-lg font-semibold text-slate-500 dark:text-slate-400">CheatMate</th>
                                <th className="p-6 text-center text-lg font-semibold text-slate-500 dark:text-slate-400">Quietly</th>
                                <th className="p-6 text-center text-lg font-semibold text-slate-500 dark:text-slate-400">TestBro</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700 bg-white dark:bg-surface-dark">
                            {tableRows.map((row, index) => (
                                <motion.tr
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                                    className="hover:bg-slate-50/50 transition-colors"
                                >
                                    <td className="p-6 font-medium text-slate-900 dark:text-white">{row.feature}</td>
                                    <td className="p-6 text-center">{getIcon(row.examghost)}</td>
                                    <td className="p-6 text-center">{getIcon(row.cheatmate)}</td>
                                    <td className="p-6 text-center">{getIcon(row.quietly)}</td>
                                    <td className="p-6 text-center">{getIcon(row.testbro)}</td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </motion.div>
            </div>
        </section>
    );
}
