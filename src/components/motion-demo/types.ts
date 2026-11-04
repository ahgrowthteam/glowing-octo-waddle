import React from 'react';

/**
 * Playback speed options for the motion demo
 */
export type SpeedOption = 1 | 1.5 | 2;

/**
 * Telemetry status of LMS SpeedGrader / Focus Shield
 */
export interface TelemetryState {
    speedGrader: string;
    focusShield: boolean;
    blurEvents: number;
    status?: 'clean' | 'flagged' | 'shielded';
    customBadge?: string;
}

/**
 * State of the simulated spring cursor
 */
export interface CursorState {
    x: number; // 0 - 100 (%)
    y: number; // 0 - 100 (%)
    clicking: boolean;
    label?: string;
    tag?: string;
    rippleKey?: number;
    visible?: boolean;
}

/**
 * Definition of a single scene / chapter in the 3-scene motion demo
 */
export interface MotionScene {
    id: number;
    label: string;
    title?: string;
    subtitle?: string;
    durationMs: number;
    competitorName?: string;
    description?: string;
    badge?: string;
}

/**
 * Props for the MotionTimelineScrubber component
 */
export interface ScrubberProps {
    scenes: MotionScene[];
    currentScene: number;
    sceneProgress: number; // 0 - 100% progress within current scene
    isPlaying: boolean;
    onTogglePlay: () => void;
    onSeekScene: (sceneIndex: number) => void;
    playbackSpeed?: SpeedOption;
    onSpeedChange?: (speed: SpeedOption) => void;
    onRestart?: () => void;
    totalElapsedMs?: number;
    totalDurationMs?: number;
    className?: string;
}

/**
 * Props for the MotionCursor primitive
 */
export interface MotionCursorProps {
    cursor?: CursorState;
    x?: number;
    y?: number;
    clicking?: boolean;
    label?: string;
    tag?: string;
    visible?: boolean;
    className?: string;
}

/**
 * Props for the MotionDemoFrame container primitive
 */
export interface MotionDemoFrameProps {
    title?: string;
    domainBadge?: string;
    browserUrl?: string;
    telemetryState?: TelemetryState;
    children: React.ReactNode;
    className?: string;
    topBarExtra?: React.ReactNode;
    footer?: React.ReactNode;
    isFlagged?: boolean;
}
