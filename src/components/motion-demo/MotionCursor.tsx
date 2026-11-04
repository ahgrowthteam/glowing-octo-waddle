'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MotionCursorProps } from './types';

/**
 * Spring-physics virtual cursor with animated click ripples and action badges
 */
export const MotionCursor: React.FC<MotionCursorProps> = ({
    cursor,
    x: propX,
    y: propY,
    clicking: propClicking,
    label: propLabel,
    tag: propTag,
    visible: propVisible,
    className = '',
}) => {
    const x = propX !== undefined ? propX : cursor?.x ?? 50;
    const y = propY !== undefined ? propY : cursor?.y ?? 50;
    const clicking = propClicking !== undefined ? propClicking : cursor?.clicking ?? false;
    const actionLabel = propLabel ?? propTag ?? cursor?.label ?? cursor?.tag;
    const isVisible = propVisible !== undefined ? propVisible : cursor?.visible ?? true;
    const rippleKey = cursor?.rippleKey ?? `${x}-${y}-${clicking ? 'click' : 'idle'}`;

    if (!isVisible) return null;

    // Determine badge styling based on action type
    const getBadgeStyle = (text: string) => {
        const lower = text.toLowerCase();
        if (lower.includes('fail') || lower.includes('flag') || lower.includes('blur') || lower.includes('block') || lower.includes('trap')) {
            return 'bg-red-950/95 text-red-300 border-red-500/40 shadow-red-950/40';
        }
        if (lower.includes('alt+s') || lower.includes('snip') || lower.includes('vision')) {
            return 'bg-sky-950/95 text-sky-300 border-sky-500/40 shadow-sky-950/40';
        }
        if (lower.includes('alt+1') || lower.includes('invisible')) {
            return 'bg-purple-950/95 text-purple-300 border-purple-500/40 shadow-purple-950/40';
        }
        if (lower.includes('alt+3') || lower.includes('explain') || lower.includes('derivation')) {
            return 'bg-amber-950/95 text-amber-300 border-amber-500/40 shadow-amber-950/40';
        }
        // Default: ExamGhost stealth emerald
        return 'bg-[#0f172a]/95 text-emerald-400 border-emerald-500/40 shadow-black/40';
    };

    return (
        <motion.div
            key="motion-cursor-container"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                left: `${x}%`,
                top: `${y}%`,
            }}
            exit={{ opacity: 0 }}
            transition={{
                left: { type: 'spring', stiffness: 150, damping: 22 },
                top: { type: 'spring', stiffness: 150, damping: 22 },
                opacity: { duration: 0.18 },
            }}
            className={`pointer-events-none absolute z-[120] transform -translate-x-1.5 -translate-y-1.5 ${className}`}
        >
            <div className="relative flex items-center select-none">
                {/* Expanding click ripple */}
                <AnimatePresence>
                    {clicking && (
                        <motion.span
                            key={`ripple-${rippleKey}`}
                            initial={{ scale: 0.35, opacity: 0.95 }}
                            animate={{ scale: 2.1, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.55, ease: 'easeOut' }}
                            className="absolute -left-3 -top-3 w-10 h-10 rounded-full border-2 border-emerald-400 bg-emerald-400/25 pointer-events-none"
                        />
                    )}
                </AnimatePresence>

                {/* Simulated Cursor SVG Arrow */}
                <motion.svg
                    animate={{
                        scale: clicking ? 0.85 : 1,
                        rotate: clicking ? -3 : 0,
                    }}
                    transition={{ duration: 0.12 }}
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="drop-shadow-[0_4px_14px_rgba(0,0,0,0.45)] shrink-0"
                >
                    <path
                        d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
                        fill="#141413"
                        stroke="#ffffff"
                        strokeWidth="1.8"
                        strokeLinejoin="round"
                    />
                </motion.svg>

                {/* Animated Action Label Badge */}
                <AnimatePresence mode="wait">
                    {actionLabel && (
                        <motion.div
                            key={actionLabel}
                            initial={{ opacity: 0, x: -6, scale: 0.92 }}
                            animate={{ opacity: 1, x: 0, scale: 1 }}
                            exit={{ opacity: 0, x: 4, scale: 0.92 }}
                            transition={{ duration: 0.18, ease: 'easeOut' }}
                            className={`ml-2 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-tight shadow-xl border backdrop-blur-md whitespace-nowrap flex items-center gap-1.5 ${getBadgeStyle(
                                actionLabel
                            )}`}
                        >
                            <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse shrink-0" />
                            <span>{actionLabel}</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
};

export default MotionCursor;
