export default function ComparisonTable() {
    return (
        <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <span className="text-primary font-semibold tracking-wider text-sm uppercase">The Ultimate Comparison</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2">Don't Get Caught With Inferior Tools</h2>
                </div>
                <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xl">
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
                            <tr>
                                <td className="p-6 font-medium text-slate-900 dark:text-white">Shadow DOM Stealth</td>
                                <td className="p-6 text-center"><span className="material-symbols-outlined text-emerald-500">check_circle</span></td>
                                <td className="p-6 text-center"><span className="material-symbols-outlined text-red-400">cancel</span></td>
                                <td className="p-6 text-center"><span className="material-symbols-outlined text-red-400">cancel</span></td>
                                <td className="p-6 text-center"><span className="material-symbols-outlined text-red-400">cancel</span></td>
                            </tr>
                            <tr>
                                <td className="p-6 font-medium text-slate-900 dark:text-white">100% Canvas Focus Immunity</td>
                                <td className="p-6 text-center"><span className="material-symbols-outlined text-emerald-500">check_circle</span></td>
                                <td className="p-6 text-center"><span className="material-symbols-outlined text-yellow-500">warning</span></td>
                                <td className="p-6 text-center"><span className="material-symbols-outlined text-red-400">cancel</span></td>
                                <td className="p-6 text-center"><span className="material-symbols-outlined text-yellow-500">warning</span></td>
                            </tr>
                            <tr>
                                <td className="p-6 font-medium text-slate-900 dark:text-white">Off-screen Rendering</td>
                                <td className="p-6 text-center"><span className="material-symbols-outlined text-emerald-500">check_circle</span></td>
                                <td className="p-6 text-center"><span className="material-symbols-outlined text-red-400">cancel</span></td>
                                <td className="p-6 text-center"><span className="material-symbols-outlined text-red-400">cancel</span></td>
                                <td className="p-6 text-center"><span className="material-symbols-outlined text-red-400">cancel</span></td>
                            </tr>
                            <tr>
                                <td className="p-6 font-medium text-slate-900 dark:text-white">Graph Analysis</td>
                                <td className="p-6 text-center"><span className="material-symbols-outlined text-emerald-500">check_circle</span></td>
                                <td className="p-6 text-center"><span className="material-symbols-outlined text-emerald-500">check_circle</span></td>
                                <td className="p-6 text-center"><span className="material-symbols-outlined text-red-400">cancel</span></td>
                                <td className="p-6 text-center"><span className="material-symbols-outlined text-red-400">cancel</span></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    );
}
