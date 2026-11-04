'use client';

import React from 'react';
import { Lock, ShieldCheck, AlertCircle, Globe } from 'lucide-react';
import { MotionDemoFrameProps } from './types';

/**
 * Simulated macOS browser viewport with traffic lights, LMS URL bar, and SpeedGrader telemetry badge
 */
export const MotionDemoFrame: React.FC<MotionDemoFrameProps> = ({
    title = 'Canvas Quiz Viewport',
    domainBadge = 'CANVAS LMS',
    browserUrl = 'https://canvas.instructure.com/courses/84102/quizzes/take',
    telemetryState,
    children,
    className = '',
    topBarExtra,
    footer,
    isFlagged: propIsFlagged,
}) => {
    const isFlagged =
        propIsFlagged !== undefined
            ? propIsFlagged
            : (telemetryState?.blurEvents ?? 0) > 0 || telemetryState?.status === 'flagged';

    const blurCount = telemetryState?.blurEvents ?? 1;
    const flagNoun = blurCount === 1 ? 'flag' : 'flags';

    const telemetryText =
        telemetryState?.speedGrader ||
        (isFlagged
            ? `${blurCount} window.blur ${flagNoun} · SpeedGrader Alert!`
            : '0 window.blur flags · Focus Shield active');

    return (
        <div
            className={`w-full rounded-2xl sm:rounded-3xl bg-[#0f141f] border border-white/12 shadow-[0_24px_70px_-16px_rgba(0,0,0,0.55)] overflow-hidden relative flex flex-col ${className}`}
        >
            {/* macOS Chrome Browser Top Toolbar */}
            <div className="bg-[#161c28] px-3.5 sm:px-5 py-2.5 sm:py-3 border-b border-white/10 flex items-center justify-between gap-2.5 sm:gap-4 shrink-0 select-none">
                {/* Left: Window Controls + URL Bar */}
                <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    {/* macOS Traffic Lights */}
                    <div className="flex items-center gap-1.5 shrink-0" aria-hidden="true">
                        <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#ff5f57] border border-black/20" />
                        <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#febc2e] border border-black/20" />
                        <span className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-[#28c840] border border-black/20" />
                    </div>

                    {/* Simulated URL Pill + Page Title */}
                    <div
                        className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-black/40 border border-white/10 text-[11px] sm:text-xs font-mono text-slate-300 min-w-0 max-w-md flex-1 truncate"
                        title={title}
                    >
                        <Lock
                            className={`w-3 h-3 shrink-0 ${
                                isFlagged ? 'text-red-400' : 'text-emerald-400'
                            }`}
                        />
                        <span className="truncate text-slate-400">{browserUrl}</span>
                        {title && (
                            <span className="hidden sm:inline text-white/35 border-l border-white/10 pl-2 ml-1 truncate">
                                {title}
                            </span>
                        )}
                    </div>

                    {/* Platform Badge */}
                    {domainBadge && (
                        <div className="hidden lg:flex items-center gap-1 px-2 py-0.5 rounded-md bg-white/5 border border-white/10 text-[10px] font-mono font-bold text-slate-400 tracking-wider shrink-0">
                            <Globe className="w-2.5 h-2.5 text-slate-400" />
                            <span>{domainBadge}</span>
                        </div>
                    )}
                </div>

                {/* Right: Telemetry Badge + Optional Extra Controls */}
                <div className="flex items-center gap-2 shrink-0">
                    {/* SpeedGrader Telemetry Badge */}
                    <div
                        className={`flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full text-[11px] font-semibold border transition-colors ${
                            isFlagged
                                ? 'bg-red-950/80 border-red-500/50 text-red-300'
                                : 'bg-emerald-950/70 border-emerald-500/30 text-emerald-300'
                        }`}
                        title={
                            isFlagged
                                ? 'LMS logged focus-loss blur events'
                                : 'Canvas SpeedGrader logs zero blur events'
                        }
                    >
                        {isFlagged ? (
                            <AlertCircle className="w-3 h-3 text-red-400 shrink-0" />
                        ) : (
                            <ShieldCheck className="w-3 h-3 text-emerald-400 shrink-0" />
                        )}
                        <span className="truncate max-w-[170px] sm:max-w-none">{telemetryText}</span>
                    </div>

                    {topBarExtra}
                </div>
            </div>

            {/* Viewport Frame Canvas */}
            <div className="relative flex-1 bg-[#0b0e14] overflow-hidden min-h-[360px] sm:min-h-[420px]">
                {children}
            </div>

            {/* Optional Integrated Scrubber or Footer */}
            {footer && <div className="border-t border-white/10 bg-[#121722] p-2 sm:p-3">{footer}</div>}
        </div>
    );
};

export default MotionDemoFrame;
