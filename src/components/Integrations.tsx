import React from 'react';
import Link from 'next/link';
import { 
    Shield, Sparkles, Lock, Eye, CheckCircle2, 
    Layers, ScanLine, Crop
} from 'lucide-react';
import { 
    SiCanvas, SiLinkedin, SiMoodle, SiPearson, SiCoursera 
} from 'react-icons/si';

export default function Integrations() {
    const categories = [
        {
            count: "3 Modes",
            title: "3 Solver Modes",
            desc: "Switch instantly between Invisible (Alt+1) for screen-shares, Stealth (Alt+2) for subtle ✓ hints, and Explain (Alt+3) for step-by-step proofs.",
            bg: "#c3ccf9", // Periwinkle stage matching ghost_scene_modes.jpg
            accent: "#4361ee",
            icon: Shield,
            badge: "Alt+1 / Alt+2 / Alt+3",
            image: "/images/ghost/ghost_scene_modes.jpg",
            features: [
                "Invisible (Alt+1): Silent auto-fill & copy",
                "Stealth (Alt+2): Subtle ✓ checkmark hint",
                "Explain (Alt+3): Side step-by-step banner"
            ]
        },
        {
            count: "3 Methods",
            title: "3 Answer Delivery Methods",
            desc: "Choose how ExamGhost delivers every solution: instant Auto-Fill selection, subtle ✓ Highlight, or Silent Clipboard copy for essays.",
            bg: "#bce0fb", // Sky stage matching ghost_scene_methods.jpg
            accent: "#0077b6",
            icon: ScanLine,
            badge: "Double-Click",
            image: "/images/ghost/ghost_scene_methods.jpg",
            features: [
                "Auto-fill radio, checkbox & numeric inputs",
                "Discreet green ✓ hint next to verified choice",
                "Silent clipboard copy for written responses"
            ]
        },
        {
            count: "Vision AI",
            title: "Snap-It Region OCR",
            desc: "Press Alt+S and drag a selection box over any locked math equation, graph, circuit, or PDF diagram to solve visually in under 1.2s.",
            bg: "#dfc9fb", // Lilac stage matching ghost_scene_snapit.jpg
            accent: "#7209b7",
            icon: Sparkles,
            badge: "Alt+S",
            image: "/images/ghost/ghost_scene_snapit.jpg",
            features: [
                "Calculus, matrices & chemical structures",
                "Graphs, tables & free-body diagrams",
                "Hybrid Vision AI + live DOM context"
            ]
        },
        {
            count: "20+ LMSs",
            title: "Universal LMS Support",
            desc: "Engineered for native Double-Click and Alt+S solving across Canvas Classic & New Quizzes, Blackboard Ultra, Moodle, and D2L.",
            bg: "#b8efd4", // Mint stage matching ghost_scene_lms.jpg
            accent: "#2d6a4f",
            icon: Layers,
            badge: "All Major Portals",
            image: "/images/ghost/ghost_scene_lms.jpg",
            features: [
                "Canvas Classic & New Quizzes (LTI)",
                "Blackboard Learn & Blackboard Ultra",
                "Moodle, D2L Brightspace & STEM portals"
            ]
        },
        {
            count: "Universal",
            title: "Locked Content Bypass",
            desc: "When exams disable right-click, block text selection, or lock questions inside cross-origin iframes, ExamGhost reads them effortlessly.",
            bg: "#f9d2bb", // Peach stage matching ghost_scene_bypass.jpg
            accent: "#d90429",
            icon: Lock,
            badge: "Zero Copy-Paste",
            image: "/images/ghost/ghost_scene_bypass.jpg",
            features: [
                "Bypasses disabled right-click & copy locks",
                "Works in ALEKS, MyLab & WebAssign iframes",
                "Solves uncopyable canvas & PDF worksheets"
            ]
        },
        {
            count: "Client-Side",
            title: "Zero-Footprint Privacy",
            desc: "Stays 100% dormant until toggled on (⌘+Shift+U). Runs inside an isolated Closed Shadow DOM with zero tab-switch or blur logs.",
            bg: "#b6e7dc", // Seafoam stage matching ghost_scene_privacy.jpg
            accent: "#006d77",
            icon: Eye,
            badge: "⌘+Shift+U",
            image: "/images/ghost/ghost_scene_privacy.jpg",
            features: [
                "Instant ON / OFF master toggle (⌘+Shift+U)",
                "5 free solves / day + Paid Study AI Hub",
                "Closed Shadow DOM (0 SpeedGrader flags)"
            ]
        }
    ];

    const platforms = [
        {
            id: 'canvas',
            name: 'Canvas',
            subtitle: 'Classic & New Quizzes',
            href: '/canvas-lms-quiz-solver',
            badge: '0 Flags',
            badgeBg: '#cdeecb',
            badgeText: '#14532d',
            feature: 'Zero SpeedGrader blur logs',
            iconBg: '#fff1f2',
            iconBorder: '#fecdd3',
            renderIcon: () => <SiCanvas className="w-5 h-5 text-[#E63946]" aria-hidden="true" />
        },
        {
            id: 'blackboard',
            name: 'Blackboard',
            subtitle: 'Learn & Blackboard Ultra',
            href: '/blackboard-quiz-solver',
            badge: 'Shielded',
            badgeBg: '#ffe9a0',
            badgeText: '#713f12',
            feature: 'No tab-switch warnings',
            iconBg: '#1c1917',
            iconBorder: '#292524',
            renderIcon: () => <span className="font-display font-black text-sm tracking-tight text-[#E5A823]">Bb</span>
        },
        {
            id: 'mcgrawhill',
            name: 'McGraw Hill',
            subtitle: 'Connect & ALEKS',
            href: '/mcgraw-hill-connect-aleks-solver',
            badge: 'Math & Chem',
            badgeBg: '#e2d3fa',
            badgeText: '#4c1d95',
            feature: 'Reads LaTeX & graph figures',
            iconBg: '#D6001C',
            iconBorder: '#b91c1c',
            renderIcon: () => <span className="font-display font-black text-xs tracking-tighter text-white">MH</span>
        },
        {
            id: 'pearson',
            name: 'Pearson',
            subtitle: 'MyLab & Mastering',
            href: '/pearson-mylab-mastering-solver',
            badge: 'Multi-Part',
            badgeBg: '#bfe9d9',
            badgeText: '#115e59',
            feature: 'Step-by-step part breakdowns',
            iconBg: '#ecfeff',
            iconBorder: '#a5f3fc',
            renderIcon: () => <SiPearson className="w-5 h-5 text-[#00778B]" aria-hidden="true" />
        },
        {
            id: 'moodle',
            name: 'Moodle',
            subtitle: 'Moodle 3.x, 4.x & Cloud',
            href: '/moodle-quiz-solver',
            badge: '1-Click',
            badgeBg: '#ffedd5',
            badgeText: '#9a3412',
            feature: 'Double-click .que solving',
            iconBg: '#fff7ed',
            iconBorder: '#fed7aa',
            renderIcon: () => <SiMoodle className="w-5 h-5 text-[#F98012]" aria-hidden="true" />
        },
        {
            id: 'd2l',
            name: 'D2L Brightspace',
            subtitle: 'Quizzes & Assessments',
            href: '/d2l-brightspace-quiz-solver',
            badge: 'In-Window',
            badgeBg: '#ffd5cc',
            badgeText: '#7f1d1d',
            feature: 'Stays inside quiz iframes',
            iconBg: '#fff7ed',
            iconBorder: '#fdba74',
            renderIcon: () => (
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" aria-hidden="true">
                    <rect width="24" height="24" rx="6" fill="#F15A24" />
                    <path d="M12 4.5l2.2 4.5 4.8.7-3.5 3.4.8 4.9-4.3-2.3-4.3 2.3.8-4.9-3.5-3.4 4.8-.7L12 4.5z" fill="#FFFFFF" />
                </svg>
            )
        },
        {
            id: 'gradescope',
            name: 'Gradescope',
            subtitle: 'Online Exams & PDFs',
            href: '/gradescope-exam-solver',
            badge: 'Vision OCR',
            badgeBg: '#c4d0f8',
            badgeText: '#1e3a8a',
            feature: 'Code & diagram auto-parse',
            iconBg: '#006e5d',
            iconBorder: '#047857',
            renderIcon: () => <span className="font-display font-black text-xs text-white">GS</span>
        },
        {
            id: 'cengage',
            name: 'Cengage',
            subtitle: 'MindTap & WebAssign',
            href: '/cengage-mindtap-webassign-solver',
            badge: 'Red Vars',
            badgeBg: '#bfe3f6',
            badgeText: '#0c4a6e',
            feature: 'Solves red-number variants',
            iconBg: '#eff6ff',
            iconBorder: '#bfdbfe',
            renderIcon: () => <SiCoursera className="w-5 h-5 text-[#0056D2]" aria-hidden="true" />
        },
        {
            id: 'googleforms',
            name: 'Google Forms',
            subtitle: 'Classroom & Quizzes',
            href: '/google-forms-quiz-solver',
            badge: 'Image OCR',
            badgeBg: '#c4d0f8',
            badgeText: '#1e3a8a',
            feature: 'Double-click & Alt+S cards',
            iconBg: '#673ab7',
            iconBorder: '#5b21b6',
            renderIcon: () => <SiLinkedin className="w-4 h-4 text-white" aria-hidden="true" />
        }
    ];

    const extraPortalLinks = [
        { label: 'Schoology Assessments', href: '/schoology-quiz-solver' },
        { label: 'DeltaMath Graphing', href: '/deltamath-homework-solver' },
        { label: 'Imagine Edgenuity', href: '/edgenuity-quiz-solver' },
        { label: 'Free Canvas Simulator', href: '/canvas-quiz-solver-free-demo' },
    ];

    return (
        <section className="py-20 md:py-32 bg-cream text-ink border-b border-black/5" id="all-in-one">
            <div className="max-w-6xl mx-auto px-4 sm:px-6">

                {/* Section Head */}
                <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
                    <p className="eyebrow justify-center mb-3">
                        <span className="w-2 h-2 rounded-full bg-ink" />
                        <span>ALL IN ONE</span>
                    </p>
                    <h2 className="font-display text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-ink leading-[1.06] mb-5">
                        One box. Every tool<br />
                        you keep reaching for.
                    </h2>
                    <p className="text-base sm:text-lg text-ink-muted leading-relaxed font-normal">
                        Stop hunting for a clunky screenshot tool, a risky copy-paste script, or an AI extension that forces you to switch tabs. ExamGhost packages double-click solving, Snap-It screenshot OCR, and 3 stealth display modes in one calm, undetectable browser extension.
                    </p>
                </div>

                {/* Categories Grid (Top Unobstructed 16:9 3D Mascot Stage + Clean White Content Body) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
                    {categories.map((cat, idx) => {
                        const IconComponent = cat.icon;
                        return (
                            <article
                                key={idx}
                                className="rounded-[28px] bg-white border border-black/8 shadow-card hover:shadow-lift hover:-translate-y-1 transition-all duration-300 flex flex-col overflow-hidden group"
                            >
                                {/* Top Full-Bleed 16:9 3D Character Stage (100% Uncropped & Unobstructed) */}
                                <div
                                    className="relative w-full aspect-[16/9] overflow-hidden border-b border-black/5 flex items-center justify-center"
                                    style={{ backgroundColor: cat.bg }}
                                >
                                    <img 
                                        src={cat.image} 
                                        alt={`${cat.title} — ${cat.badge} in ExamGhost AI`} 
                                        width={960}
                                        height={536}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500 ease-out select-none"
                                    />
                                </div>

                                {/* Bottom Crisp White Card Body */}
                                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between bg-white">
                                    <div>
                                        {/* Clean Pill Row Inside Card Body */}
                                        <div className="flex items-center justify-between gap-2 mb-3.5">
                                            <span
                                                className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-black/8 text-ink"
                                                style={{ backgroundColor: `${cat.bg}66` }}
                                            >
                                                {cat.count}
                                            </span>
                                            <span className="text-[11px] font-mono font-semibold text-ink-secondary bg-[#faf8f5] px-2.5 py-0.5 rounded-full border border-black/8 flex items-center gap-1.5">
                                                <IconComponent className="w-3 h-3 text-ink shrink-0" />
                                                <span>{cat.badge}</span>
                                            </span>
                                        </div>

                                        <h3 className="font-display text-xl sm:text-[22px] font-bold text-ink mb-2 tracking-tight leading-snug">
                                            {cat.title}
                                        </h3>
                                        <p className="text-[13.5px] sm:text-sm text-ink-secondary leading-relaxed mb-5">
                                            {cat.desc}
                                        </p>
                                    </div>

                                    {/* Compact Feature Checklist */}
                                    <div className="pt-4 border-t border-black/6 space-y-2">
                                        {cat.features.map((feat, fIdx) => (
                                            <div key={fIdx} className="flex items-center gap-2 text-xs text-ink-secondary font-medium">
                                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                                                <span>{feat}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>

                {/* Editorial Bridge Statement (Matches Reference Layout Rhythm) */}
                <p className="mt-14 sm:mt-16 text-center font-display text-xl sm:text-2xl md:text-[28px] font-bold tracking-tight text-ink max-w-2xl mx-auto leading-[1.3]">
                    ExamGhost puts instant answers, Vision OCR, and step-by-step proofs{' '}
                    <span className="text-emerald-700">right inside your active quiz tab</span>, so nothing ever triggers a tab-switch log.
                </p>

                {/* =========================================================================
                    SCHOOL PORTAL COMPATIBILITY GRID (CLEAN 3x3 BENTO + UNIVERSAL OCR BAR)
                   ========================================================================= */}
                <div className="mt-24 sm:mt-28 max-w-5xl mx-auto scroll-mt-28" id="platforms">
                    
                    <div className="rounded-[32px] bg-white border border-black/8 p-6 sm:p-10 shadow-card">
                        
                        {/* Compact Header Row */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8 pb-6 border-b border-black/6">
                            <div>
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-[11px] font-bold uppercase tracking-wider text-emerald-900 mb-3">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                                    <span>20+ School Portals Supported</span>
                                </div>
                                <h3 className="font-display font-bold text-2xl sm:text-3xl text-ink tracking-tight">
                                    Works inside your school portal.
                                </h3>
                                <p className="text-sm text-ink-muted mt-1 max-w-xl">
                                    Zero tab-switching and zero clipboard flags across major university LMS platforms.
                                </p>
                            </div>

                            <div className="flex flex-wrap items-center gap-2 shrink-0">
                                <span className="px-3 py-1.5 rounded-full bg-[#faf8f5] border border-black/8 text-xs font-semibold text-ink flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>Double-Click Inline</span>
                                </span>
                                <span className="px-3 py-1.5 rounded-full bg-[#faf8f5] border border-black/8 text-xs font-semibold text-ink flex items-center gap-1.5">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>Closed Shadow DOM</span>
                                </span>
                            </div>
                        </div>

                        {/* Clean 3x3 Platform Cards Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-5">
                            {platforms.map((platform) => (
                                <Link
                                    prefetch={false}
                                    key={platform.id}
                                    href={platform.href}
                                    className="p-4 sm:p-5 rounded-2xl bg-[#faf8f5] hover:bg-white border border-black/6 hover:border-black/15 transition-all duration-200 hover:shadow-soft flex items-start gap-3.5 group"
                                >
                                    <div
                                        className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 shadow-2xs"
                                        style={{
                                            backgroundColor: platform.iconBg,
                                            border: `1px solid ${platform.iconBorder}`
                                        }}
                                    >
                                        {platform.renderIcon()}
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-2 mb-0.5">
                                            <h4 className="font-display font-bold text-[15px] text-ink group-hover:text-black truncate">
                                                {platform.name}
                                            </h4>
                                            <span
                                                className="text-[10px] font-bold px-2 py-0.5 rounded-md shrink-0"
                                                style={{
                                                    backgroundColor: platform.badgeBg,
                                                    color: platform.badgeText
                                                }}
                                            >
                                                {platform.badge}
                                            </span>
                                        </div>

                                        <div className="text-xs text-ink-secondary font-medium">
                                            {platform.subtitle}
                                        </div>

                                        <div className="text-[11px] text-ink-muted mt-1.5 flex items-center gap-1.5">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                            <span>{platform.feature}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>

                        {/* Interactive Demo Links for Additional Portals */}
                        <div className="flex flex-wrap items-center gap-2 mb-6">
                            <span className="text-[11px] font-bold uppercase tracking-wider text-ink-muted mr-1">
                                Live Interactive Demos:
                            </span>
                            {extraPortalLinks.map((item) => (
                                <Link
                                    prefetch={false}
                                    key={item.href}
                                    href={item.href}
                                    className="px-3 py-1 rounded-full bg-[#faf8f5] hover:bg-ink hover:text-white border border-black/8 text-xs font-semibold text-ink transition-colors"
                                >
                                    {item.label} →
                                </Link>
                            ))}
                        </div>

                        {/* Compact Universal Snap-It Vision OCR Banner */}
                        <div className="rounded-2xl bg-[#141413] text-white p-5 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6">
                            <div className="flex items-start gap-4">
                                <div className="w-11 h-11 rounded-xl bg-[#e2d3fa] text-ink flex items-center justify-center shrink-0 mt-0.5">
                                    <Crop className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-display font-bold text-base sm:text-lg text-white leading-snug">
                                        Works on any website, locked PDF, or custom portal
                                    </h4>
                                    <p className="text-xs sm:text-[13px] text-white/70 mt-1 max-w-xl leading-relaxed">
                                        Taking a quiz on Google Classroom, WileyPLUS, Cengage WebAssign, Schoology, or a locked PDF? Drag a Snap-It box over any question or graph to solve it in 0.3s.
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap md:flex-col items-center md:items-end justify-between gap-2.5 shrink-0 pt-3 md:pt-0 border-t md:border-t-0 border-white/10">
                                <div className="font-mono text-xs font-bold text-white flex items-center gap-1.5">
                                    <kbd className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-[#e2d3fa]">Alt + S</kbd>
                                    <span className="text-white/75 text-[11px]">or</span>
                                    <kbd className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 text-white/90">Double-Click</kbd>
                                </div>
                                <span className="text-[11px] font-semibold text-emerald-300 flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-400/20 px-3 py-1 rounded-full whitespace-nowrap">
                                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                                    <span>100% of Webpages Covered</span>
                                </span>
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}
