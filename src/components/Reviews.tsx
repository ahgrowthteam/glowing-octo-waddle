'use client';
import React from 'react';
import { Star, ThumbsUp, ThumbsDown, Play, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const ReviewCard = ({ name, date, text, rating, count, location, avatarColor, initials }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white border border-slate-100/80 rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300"
    >
        <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                    {initials}
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-[15px]">{name}</h4>
                    <p className="text-slate-500 text-xs">{count} review</p>
                </div>
            </div>
            <div className="flex flex-col items-end gap-1">
                <p className="text-slate-400 text-xs font-medium">{date}</p>
                {location && <div className="text-slate-500 text-xs flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg> {location}
                </div>}
            </div>
        </div>

        <div className="flex gap-0.5 mb-3">
            {[...Array(rating)].map((_, i) => <Star key={i} className="w-4 h-4 fill-[#00B67A] text-[#00B67A]" />)}
        </div>

        <p className="text-slate-800 font-bold mb-6 leading-snug">
            {text}
        </p>

        <div className="flex items-center justify-between mt-auto">
            <p className="text-slate-400 text-xs">3 people found this review to be helpful</p>
            <div className="flex items-center gap-3">
                <button className="text-slate-400 hover:text-slate-600 transition-colors"><ThumbsUp className="w-4 h-4" /></button>
                <button className="text-slate-400 hover:text-slate-600 transition-colors"><ThumbsDown className="w-4 h-4" /></button>
            </div>
        </div>
    </motion.div>
);

const VideoCard = ({ name, uni, thumbnailClass, avatarColor, initials }: any) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`w-full aspect-[4/5] sm:aspect-square md:aspect-[4/5] rounded-2xl ${thumbnailClass} bg-cover bg-center relative overflow-hidden group shadow-[0_4px_20px_rgba(0,0,0,0.06)] cursor-pointer`}
    >
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

        {/* Play Button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform shadow-lg">
            <Play className="w-6 h-6 text-white fill-white ml-1" />
        </div>

        {/* User Info */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3">
            <div className={`w-10 h-10 rounded-full ${avatarColor} flex items-center justify-center text-white font-bold text-sm shrink-0 border-2 border-white/20 shadow-sm`}>
                {initials}
            </div>
            <div>
                <p className="text-white font-bold text-sm">{name}</p>
                <p className="text-white/80 text-xs font-medium">{uni}</p>
            </div>
        </div>
    </motion.div>
);

export default function Reviews() {
    return (
        <section id="reviews" className="py-24 bg-[#FAFAFA] relative overflow-hidden">
            <div className="max-w-[1100px] mx-auto px-4 relative z-10 w-full">

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-[2.5rem] font-bold text-slate-800 tracking-tight mb-4">
                        Trusted by <span className="text-[#3b82f6]">250k+ students</span> worldwide
                    </h2>
                </motion.div>

                {/* Masonry Layout */}
                <div className="flex flex-col md:flex-row gap-6 items-start justify-center">

                    {/* Column 1 */}
                    <div className="flex flex-col gap-6 flex-1 w-full max-w-[350px]">
                        <ReviewCard
                            name="Tobias Morris" date="Sept 3, 2024" text="best extension for students💯"
                            rating={5} count="6" location="US" avatarColor="bg-blue-400" initials="TM"
                        />
                        <VideoCard
                            name="Dylan Paul" uni="University of California San Diego"
                            avatarColor="bg-amber-500" initials="DP"
                            thumbnailClass="bg-[url('https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=400')]"
                        />
                        <ReviewCard
                            name="Aila Singh" date="Jul 19, 2024"
                            text="absolute lifesaver 💯 I never have time to study and it comes in clutch every single time."
                            rating={5} count="5" location="US" avatarColor="bg-slate-700" initials="AS"
                        />
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col gap-6 flex-1 w-full max-w-[350px]">
                        <ReviewCard
                            name="Roman Stewart" date="Jun 14, 2024" text="great on macro graphs"
                            rating={5} count="2" location="" avatarColor="bg-orange-500" initials="RS"
                        />
                        <ReviewCard
                            name="Aubrie Miranda" date="Jun 14, 2024"
                            text="Reliable compared to the other tools I used for assignments"
                            rating={5} count="1" location="" avatarColor="bg-rose-400" initials="AM"
                        />
                        <ReviewCard
                            name="Leah Duran" date="Jun 14, 2024"
                            text="This extension is fantastic for studying"
                            rating={5} count="4" location="" avatarColor="bg-emerald-500" initials="LD"
                        />
                        <ReviewCard
                            name="Rebecca Collins" date="Jan 12, 2024"
                            text="This AI homework helper has saved me countless times for exams!!"
                            rating={5} count="3" location="" avatarColor="bg-pink-500" initials="RC"
                        />
                    </div>

                    {/* Column 3 */}
                    <div className="flex flex-col gap-6 flex-1 w-full max-w-[350px]">
                        <VideoCard
                            name="Sean Lane" uni="Pennsylvania State University"
                            avatarColor="bg-blue-600" initials="SL"
                            thumbnailClass="bg-[url('https://images.unsplash.com/photo-1592652494916-2fd74fe80f5c?auto=format&fit=crop&q=80&w=400')]"
                        />
                        <ReviewCard
                            name="James Regan" date="Feb 3, 2024" text="The absolute best!"
                            rating={5} count="1" location="US" avatarColor="bg-sky-400" initials="JR"
                        />
                        <VideoCard
                            name="Emma Moran" uni="University of California"
                            avatarColor="bg-purple-400" initials="EM"
                            thumbnailClass="bg-[url('https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=400')]"
                        />
                    </div>
                </div>

                {/* Trust Badges */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20 flex flex-col items-center justify-center"
                >
                    <span className="text-[13px] font-bold text-slate-500 mb-6 uppercase tracking-wider">BASED ON</span>

                    <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

                        {/* Trustpilot */}
                        <div className="flex items-center gap-5">
                            <div className="bg-[#00B67A] text-white px-5 py-2.5 rounded-full flex items-center gap-2 font-bold text-xl hover:scale-105 transition-transform cursor-pointer shadow-sm">
                                <Star className="w-5 h-5 fill-white" /> Trustpilot
                            </div>
                            <span className="text-[1.75rem] font-bold text-slate-800 tracking-tight">4.8/5</span>
                        </div>

                        {/* Google */}
                        <div className="flex items-center gap-5">
                            <div className="flex items-center">
                                <span className="text-[1.75rem] font-bold tracking-tight">
                                    <span className="text-[#4285F4]">G</span>
                                    <span className="text-[#EA4335]">o</span>
                                    <span className="text-[#FBBC05]">o</span>
                                    <span className="text-[#4285F4]">g</span>
                                    <span className="text-[#34A853]">l</span>
                                    <span className="text-[#EA4335]">e</span>
                                </span>
                                <div className="ml-2 mt-2">
                                    <div className="flex gap-0.5">
                                        {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-[#FBBC05] text-[#FBBC05]" />)}
                                    </div>
                                    <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Reviews</span>
                                </div>
                            </div>
                            <span className="text-[1.75rem] font-bold text-slate-800 tracking-tight">4.9/5</span>
                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
}
