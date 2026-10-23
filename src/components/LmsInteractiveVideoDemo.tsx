'use client';

import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Sparkles,
    Sliders,
    Sun,
    Moon,
    EyeOff,
    Shield,
    BookOpen,
    Crop,
    Check,
    Play,
    Pause,
    RotateCcw,
    Volume2,
    VolumeX,
    Clock,
    Lock,
    Puzzle,
    ChevronLeft,
    ChevronRight,
    Activity,
    MousePointerClick,
} from 'lucide-react';

export interface LmsDemoQuestion {
    id: number;
    number?: string;
    subject?: 'Science' | 'Math' | 'General';
    courseCode?: string;
    code?: string;
    pts?: string;
    points?: string;
    type: string;
    isOcr?: boolean;
    requiresOcr?: boolean;
    question?: string;
    prompt?: string;
    clozePrefix?: string;
    clozeMiddle?: string;
    clozeSuffix?: string;
    blank1Options?: string[];
    blank2Options?: string[];
    options?: ({ label: string; text: string } | string)[];
    correctOption?: string | null;
    correctIndex?: number;
    correctOptions?: string[];
    dropdownAnswers?: [string, string];
    answerText?: string;
    confidence?: string;
    explanation: string;
    diagramLabel?: string;
    diagramSvg?: React.ReactNode;
    diagramLabels?: {
        legA: string;
        legB: string;
        hypC: string;
        curveLabel: string;
    };
}

interface NormalizedQuestion {
    id: number;
    number: string;
    courseCode: string;
    pts: string;
    kind: 'mcq' | 'multi' | 'dropdown' | 'short';
    typeBadge: string;
    isOcr: boolean;
    question: string;
    clozePrefix?: string;
    clozeMiddle?: string;
    clozeSuffix?: string;
    blank1Options?: string[];
    blank2Options?: string[];
    options: { label: string; text: string }[];
    correctOption: string;
    correctOptions: string[];
    dropdownAnswers?: [string, string];
    answerText: string;
    confidence: string;
    explanation: string;
    diagramLabel?: string;
    diagramSvg?: React.ReactNode;
    diagramLabels?: {
        legA: string;
        legB: string;
        hypC: string;
        curveLabel: string;
    };
}

export interface LmsInteractiveVideoDemoProps {
    platformName: string;
    platformSub: string;
    browserUrl: string;
    accentColor?: string;
    badgeBg?: string;
    badgeText?: string;
    telemetryLabel?: string;
    questions: LmsDemoQuestion[];
}

interface StoryChapter {
    id: number;
    code: string;
    label: string;
    caption: string;
    durationMs: number;
}

const OPTION_LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

export default function LmsInteractiveVideoDemo({
    platformName,
    platformSub,
    browserUrl,
    badgeBg = '#cdeecb',
    badgeText = '#14532d',
    telemetryLabel = 'window.onblur: 0',
    questions: rawQuestions,
}: LmsInteractiveVideoDemoProps) {
    const questions: NormalizedQuestion[] = useMemo(() => {
        return rawQuestions.map((q, idx) => {
            const normOptions: { label: string; text: string }[] = (q.options || []).map((opt, oIdx) => {
                if (typeof opt === 'string') {
                    return { label: OPTION_LETTERS[oIdx] || String(oIdx + 1), text: opt };
                }
                return {
                    label: opt.label || OPTION_LETTERS[oIdx] || String(oIdx + 1),
                    text: opt.text,
                };
            });

            const derivedCorrectOption =
                q.correctOption ||
                (typeof q.correctIndex === 'number'
                    ? OPTION_LETTERS[q.correctIndex] || 'B'
                    : normOptions[1]?.label || 'B');

            const matchedOptionText =
                normOptions.find((o) => o.label === derivedCorrectOption)?.text ||
                normOptions[0]?.text ||
                'Verified solution';

            const kind: 'mcq' | 'multi' | 'dropdown' | 'short' =
                q.type === 'multi'
                    ? 'multi'
                    : q.type === 'dropdown'
                    ? 'dropdown'
                    : q.type === 'short'
                    ? 'short'
                    : 'mcq';

            return {
                id: q.id || idx + 1,
                number: q.number || String(q.id || idx + 1),
                courseCode: q.courseCode || q.code || `${platformName.toUpperCase()}-Q${idx + 1}`,
                pts: q.pts || q.points || '2.0 pts',
                kind,
                typeBadge:
                    q.type && !['mcq', 'multi', 'dropdown', 'short'].includes(q.type)
                        ? q.type
                        : kind === 'dropdown'
                        ? 'Cloze Dropdown'
                        : kind === 'multi'
                        ? 'Multi-Select'
                        : kind === 'short'
                        ? 'Short Answer'
                        : Boolean(q.isOcr || q.requiresOcr)
                        ? 'Vision OCR (Alt+S)'
                        : 'Multiple Choice',
                isOcr: Boolean(q.isOcr || q.requiresOcr),
                question: q.question || q.prompt || '',
                clozePrefix: q.clozePrefix,
                clozeMiddle: q.clozeMiddle,
                clozeSuffix: q.clozeSuffix,
                blank1Options: q.blank1Options,
                blank2Options: q.blank2Options,
                options: normOptions,
                correctOption: derivedCorrectOption,
                correctOptions: q.correctOptions || ['A', 'B', 'D'],
                dropdownAnswers: q.dropdownAnswers,
                answerText: q.answerText || matchedOptionText,
                confidence: q.confidence || '99.8%',
                explanation: q.explanation,
                diagramLabel: q.diagramLabel,
                diagramSvg: q.diagramSvg,
                diagramLabels: q.diagramLabels,
            };
        });
    }, [rawQuestions, platformName]);

    const ocrQuestion = useMemo(
        () => questions.find((q) => q.isOcr) || questions[questions.length - 1] || questions[0],
        [questions]
    );

    const STORY_CHAPTERS: StoryChapter[] = useMemo(
        () => [
            {
                id: 0,
                code: '01',
                label: 'Double-Click Explain + Banner',
                caption: `Double-clicking Question 1 on ${platformName} triggers an inline solve, selects the verified option, and opens the Right-Side Answer Banner.`,
                durationMs: 6400,
            },
            {
                id: 1,
                code: '02',
                label: 'Question 2 One-by-One Solve',
                caption: `Double-clicking Question 2 evaluates ${platformName} formulas in place with zero tab-switching or clipboard events.`,
                durationMs: 6400,
            },
            {
                id: 2,
                code: '03',
                label: 'Stealth Checkmark Hint (✓)',
                caption: 'In Stealth Mode (Alt+2) with "Highlight Hint Only" enabled, double-clicking places a subtle green ✓ next to the verified choice without auto-clicking.',
                durationMs: 6400,
            },
            {
                id: 3,
                code: '04',
                label: 'Invisible Ghost Mode (Alt+1)',
                caption: `Zero toasts, zero banners, zero DOM glow. Double-clicking Question 4 silently selects the verified answer and copies to clipboard in 180ms.`,
                durationMs: 6000,
            },
            {
                id: 4,
                code: '05',
                label: 'Question 5 Verification',
                caption: `Double-clicking Question 5 solves one question at a time to keep ${platformName} per-item latency timestamps 100% natural.`,
                durationMs: 6000,
            },
            {
                id: 5,
                code: '06',
                label: 'Screenshot Snip OCR (Alt+S)',
                caption: `Press Alt+S (or ⌘+Shift+S) and drag the crop box over any locked ${platformName} graph, equation, or iframe diagram to solve via Vision AI.`,
                durationMs: 7200,
            },
        ],
        [platformName]
    );

    const [activeQ, setActiveQ] = useState<number>(1);

    // Extension Popup State (Strictly One-by-One Double Click + Screenshot Snip)
    const [popupOpen, setPopupOpen] = useState<boolean>(true);
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');
    const [solverMode, setSolverMode] = useState<'invisible' | 'stealth' | 'explain'>('explain');
    const [showSettings, setShowSettings] = useState(false);
    const [apiKey, setApiKey] = useState('AIzaSyExamGhostPro••••••••••••');
    const [showLicenseModal, setShowLicenseModal] = useState(false);
    const [licenseKey, setLicenseKey] = useState('');
    const [licenseSuccess, setLicenseSuccess] = useState(false);
    const [usedMessages, setUsedMessages] = useState(14);
    const [totalMessages, setTotalMessages] = useState(50);

    // Mode 1: Invisible Toggles
    const [invisibleAutoFill, setInvisibleAutoFill] = useState(true);
    const [invisibleClipboardCopy, setInvisibleClipboardCopy] = useState(true);
    const [invisibleDoubleClick, setInvisibleDoubleClick] = useState(true);

    // Mode 2: Stealth Toggles
    const [stealthAutoFill, setStealthAutoFill] = useState(true);
    const [stealthHighlightOnly, setStealthHighlightOnly] = useState(false);
    const [stealthDoubleClick, setStealthDoubleClick] = useState(true);

    // Mode 3: Explain Toggles
    const [explainAutoFill, setExplainAutoFill] = useState(true);
    const [explainSideBanner, setExplainSideBanner] = useState(true);
    const [explainDetailed, setExplainDetailed] = useState(true);

    const q1Obj = questions[0];

    // Unified Per-Question Answer States
    const [mcqSelected, setMcqSelected] = useState<Record<number, string | null>>({
        1: q1Obj?.correctOption || 'B',
    });
    const [q2MultiSelected, setQ2MultiSelected] = useState<string[]>([]);
    const [q3Blank1, setQ3Blank1] = useState<string>('');
    const [q3Blank2, setQ3Blank2] = useState<string>('');
    const [q4Input, setQ4Input] = useState<string>('');

    // Visual Feedback States
    const [stealthMarks, setStealthMarks] = useState<Record<number, boolean>>({});
    const [solvingCardId, setSolvingCardId] = useState<number | null>(null);
    const [successCardId, setSuccessCardId] = useState<number | null>(1);
    const [cardToast, setCardToast] = useState<{ qId: number; text: string; isSolving: boolean } | null>({
        qId: 1,
        text: `✓ Solved: ${q1Obj?.correctOption || 'B'}) ${q1Obj?.answerText || ''}`,
        isSolving: false,
    });
    const [stealthHudText, setStealthHudText] = useState<string | null>(null);
    const [clipboardNotice, setClipboardNotice] = useState<string | null>(null);

    // Smart Right-Side Answer Banner
    const [sideBanner, setSideBanner] = useState<{
        visible: boolean;
        isSolving: boolean;
        questionTitle: string;
        result: NormalizedQuestion | null;
        pinned: boolean;
        progress: number;
    }>({
        visible: true,
        isSolving: false,
        questionTitle: q1Obj?.question || '',
        result: q1Obj || null,
        pinned: false,
        progress: 84,
    });

    // Screenshot Snipping Tool
    const [snipModeActive, setSnipModeActive] = useState(false);
    const [snipDragging, setSnipDragging] = useState(false);
    const [snipStart, setSnipStart] = useState<{ x: number; y: number } | null>(null);
    const [snipCurrent, setSnipCurrent] = useState<{ x: number; y: number } | null>(null);
    const [choreoSnipRect, setChoreoSnipRect] = useState<{ x: number; y: number; w: number; h: number } | null>(null);

    // Director / Autoplay Engine
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const [chapterIdx, setChapterIdx] = useState<number>(0);
    const [chapterProgress, setChapterProgress] = useState<number>(0);
    const [soundEnabled, setSoundEnabled] = useState<boolean>(false);
    const [cursor, setCursor] = useState<{ x: number; y: number; clicking: boolean; rippleKey: number; tag?: string }>({
        x: 28,
        y: 54,
        clicking: false,
        rippleKey: 0,
        tag: '✓ Double-Click Solved + Banner',
    });

    const canvasViewportRef = useRef<HTMLDivElement>(null);

    const playSound = useCallback(
        (kind: 'click' | 'solve' | 'snip' | 'tab') => {
            if (!soundEnabled || typeof window === 'undefined') return;
            try {
                const AudioCtx =
                    window.AudioContext ||
                    (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
                if (!AudioCtx) return;
                const ctx = new AudioCtx();
                if (ctx.state === 'suspended') ctx.resume();
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.connect(gain);
                gain.connect(ctx.destination);

                if (kind === 'click' || kind === 'tab') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(kind === 'tab' ? 520 : 640, ctx.currentTime);
                    gain.gain.setValueAtTime(0.025, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.045);
                    osc.start();
                    osc.stop(ctx.currentTime + 0.045);
                } else if (kind === 'snip') {
                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(360, ctx.currentTime);
                    osc.frequency.exponentialRampToValueAtTime(920, ctx.currentTime + 0.14);
                    gain.gain.setValueAtTime(0.035, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.14);
                    osc.start();
                    osc.stop(ctx.currentTime + 0.14);
                } else if (kind === 'solve') {
                    osc.type = 'sine';
                    osc.frequency.setValueAtTime(523.25, ctx.currentTime);
                    osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.06);
                    osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.12);
                    gain.gain.setValueAtTime(0.04, ctx.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.24);
                    osc.start();
                    osc.stop(ctx.currentTime + 0.24);
                }
            } catch {
                // Ignore audio playback restrictions
            }
        },
        [soundEnabled]
    );

    // Side Banner Countdown
    useEffect(() => {
        if (!sideBanner.visible || sideBanner.isSolving || sideBanner.pinned) return;
        const interval = setInterval(() => {
            setSideBanner((prev) => {
                if (!prev.visible || prev.isSolving || prev.pinned) return prev;
                if (prev.progress <= 2) return { ...prev, visible: false, progress: 0 };
                return { ...prev, progress: prev.progress - 2 };
            });
        }, 120);
        return () => clearInterval(interval);
    }, [sideBanner.visible, sideBanner.isSolving, sideBanner.pinned]);

    const applyAnswerToDom = useCallback(
        (q: NormalizedQuestion, mode: 'invisible' | 'stealth' | 'explain', highlightOnly: boolean) => {
            if (highlightOnly) {
                setStealthMarks((prev) => ({ ...prev, [q.id]: true }));
                const hint =
                    q.kind === 'dropdown' && q.dropdownAnswers
                        ? q.dropdownAnswers.join(' ➔ ')
                        : `${q.correctOption ? q.correctOption + ') ' : ''}${q.answerText}`;
                setStealthHudText(hint);
                setTimeout(() => setStealthHudText(null), 2800);
                return;
            }

            setStealthMarks((prev) => ({ ...prev, [q.id]: false }));
            if (q.kind === 'multi') {
                setQ2MultiSelected(q.correctOptions);
            } else if (q.kind === 'dropdown' && q.dropdownAnswers) {
                setQ3Blank1(q.dropdownAnswers[0]);
                setQ3Blank2(q.dropdownAnswers[1]);
            } else if (q.kind === 'short') {
                setQ4Input(q.answerText);
            } else {
                setMcqSelected((prev) => ({ ...prev, [q.id]: q.correctOption }));
            }

            if (mode === 'invisible') {
                setClipboardNotice(`Copied to clipboard: "${q.answerText}"`);
                setTimeout(() => setClipboardNotice(null), 2400);
            }
        },
        []
    );

    const triggerSolveQuestion = useCallback(
        (
            qId: number,
            opts?: {
                mode?: 'invisible' | 'stealth' | 'explain';
                highlightOnly?: boolean;
            }
        ) => {
            const q = questions.find((item) => item.id === qId) || questions[0];
            if (!q) return;

            const mode = opts?.mode ?? solverMode;
            const highlightOnly =
                typeof opts?.highlightOnly === 'boolean'
                    ? opts.highlightOnly
                    : mode === 'stealth' && !stealthAutoFill && stealthHighlightOnly;

            setActiveQ(q.id);
            playSound('click');

            if (mode !== 'invisible') {
                setSolvingCardId(q.id);
                if (mode === 'explain') {
                    setCardToast({ qId: q.id, text: '⚡ Solving inline with AI...', isSolving: true });
                    if (explainSideBanner || opts?.mode === 'explain') {
                        setSideBanner({
                            visible: true,
                            isSolving: true,
                            questionTitle: q.question,
                            result: null,
                            pinned: false,
                            progress: 100,
                        });
                    }
                }
            }

            const delay = mode === 'invisible' ? 180 : 480;

            setTimeout(() => {
                setSolvingCardId(null);
                playSound('solve');
                applyAnswerToDom(q, mode, highlightOnly);

                if (mode === 'explain') {
                    setSuccessCardId(q.id);
                    setTimeout(() => setSuccessCardId(null), 1600);
                    const displayAns =
                        q.kind === 'dropdown' && q.dropdownAnswers
                            ? q.dropdownAnswers.join(' ➔ ')
                            : q.correctOption
                            ? `${q.correctOption}) ${q.answerText}`
                            : q.answerText;
                    setCardToast({ qId: q.id, text: `✓ Solved: ${displayAns}`, isSolving: false });
                    setTimeout(() => setCardToast(null), 3200);

                    if (explainSideBanner || opts?.mode === 'explain') {
                        setSideBanner({
                            visible: true,
                            isSolving: false,
                            questionTitle: q.question,
                            result: q,
                            pinned: false,
                            progress: 100,
                        });
                    }
                }

                setUsedMessages((prev) => Math.min(totalMessages, prev + 1));
            }, delay);
        },
        [questions, solverMode, stealthAutoFill, stealthHighlightOnly, explainSideBanner, totalMessages, playSound, applyAnswerToDom]
    );

    const resetAllState = useCallback(() => {
        setMcqSelected({});
        setQ2MultiSelected([]);
        setQ3Blank1('');
        setQ3Blank2('');
        setQ4Input('');
        setStealthMarks({});
        setSolvingCardId(null);
        setSuccessCardId(null);
        setCardToast(null);
        setStealthHudText(null);
        setClipboardNotice(null);
        setSideBanner((prev) => ({ ...prev, visible: false }));
        setSnipModeActive(false);
        setChoreoSnipRect(null);
    }, []);

    // Choreographed 6-Chapter Auto-Play Engine
    useEffect(() => {
        if (!isPlaying) return;

        const currentChapter = STORY_CHAPTERS[chapterIdx] || STORY_CHAPTERS[0];
        const duration = currentChapter.durationMs;
        const timers: NodeJS.Timeout[] = [];
        const at = (ms: number, fn: () => void) => {
            timers.push(setTimeout(fn, ms));
        };

        setChapterProgress(0);
        const startTs = Date.now();
        const progInterval = setInterval(() => {
            const elapsed = Date.now() - startTs;
            setChapterProgress(Math.min(100, (elapsed / duration) * 100));
        }, 50);

        resetAllState();

        if (chapterIdx === 0) {
            setActiveQ(1);
            setSolverMode('explain');
            setExplainSideBanner(true);
            setCursor({ x: 86, y: 24, clicking: false, rippleKey: 1, tag: 'Explain Mode (Alt+3)' });

            at(450, () => setCursor({ x: 28, y: 44, clicking: false, rippleKey: 2, tag: 'Double-Click Question 1' }));
            at(1050, () => {
                setCursor({ x: 28, y: 44, clicking: true, rippleKey: 3, tag: 'Double-Click Solve!' });
                triggerSolveQuestion(1, { mode: 'explain', highlightOnly: false });
            });
            at(2300, () => setCursor({ x: 38, y: 74, clicking: false, rippleKey: 3, tag: 'Explainer Card + Rationale' }));
        } else if (chapterIdx === 1) {
            const targetId = questions[1]?.id || 2;
            setActiveQ(targetId);
            setSolverMode('explain');
            setCursor({ x: 18, y: 17, clicking: true, rippleKey: 4, tag: `Select Question ${targetId}` });

            at(850, () => setCursor({ x: 31, y: 45, clicking: false, rippleKey: 4, tag: `Double-Click Question ${targetId}` }));
            at(1500, () => {
                setCursor({ x: 31, y: 45, clicking: true, rippleKey: 5, tag: 'Double-Click Solve!' });
                triggerSolveQuestion(targetId, { mode: 'explain', highlightOnly: false });
            });
            at(2800, () =>
                setCursor({
                    x: 34,
                    y: 58,
                    clicking: false,
                    rippleKey: 5,
                    tag: 'Verified Answer Selected',
                })
            );
        } else if (chapterIdx === 2) {
            setActiveQ(1);
            setSolverMode('stealth');
            setStealthAutoFill(false);
            setStealthHighlightOnly(true);
            setCursor({ x: 78, y: 24, clicking: true, rippleKey: 6, tag: 'Stealth Mode (Alt+2)' });

            at(700, () => setCursor({ x: 88, y: 55, clicking: true, rippleKey: 7, tag: 'Toggle "Highlight Hint Only"' }));
            at(1450, () => setCursor({ x: 29, y: 42, clicking: false, rippleKey: 7, tag: 'Double-Click Question 1' }));
            at(2050, () => {
                setCursor({ x: 29, y: 42, clicking: true, rippleKey: 8, tag: 'Subtle Hint Only (✓)' });
                triggerSolveQuestion(1, { mode: 'stealth', highlightOnly: true });
            });
        } else if (chapterIdx === 3) {
            const targetId = questions[3]?.id || 4;
            setActiveQ(targetId);
            setSolverMode('invisible');
            setCursor({ x: 69, y: 24, clicking: true, rippleKey: 9, tag: 'Invisible Mode (Alt+1)' });

            at(750, () => setCursor({ x: 30, y: 44, clicking: false, rippleKey: 9, tag: `Double-Click Question ${targetId}` }));
            at(1350, () => {
                setCursor({ x: 30, y: 44, clicking: true, rippleKey: 10, tag: '180ms Silent Inject + Clipboard' });
                triggerSolveQuestion(targetId, { mode: 'invisible', highlightOnly: false });
            });
        } else if (chapterIdx === 4) {
            const targetId = questions[4]?.id || 5;
            setActiveQ(targetId);
            setSolverMode('explain');
            setCursor({ x: 27, y: 17, clicking: true, rippleKey: 11, tag: `Select Question ${targetId}` });

            at(800, () => setCursor({ x: 30, y: 42, clicking: false, rippleKey: 11, tag: `Double-Click Question ${targetId}` }));
            at(1400, () => {
                setCursor({ x: 30, y: 42, clicking: true, rippleKey: 12, tag: 'One-by-One Solve!' });
                triggerSolveQuestion(targetId, { mode: 'explain', highlightOnly: false });
            });
        } else if (chapterIdx === 5) {
            const targetOcrId = ocrQuestion?.id || 3;
            setActiveQ(targetOcrId);
            setSolverMode('explain');
            setCursor({ x: 78, y: 33, clicking: false, rippleKey: 13, tag: 'Activate Screenshot Tool (Alt+S)' });

            at(700, () => {
                setCursor({ x: 78, y: 33, clicking: true, rippleKey: 14, tag: 'Alt + S Activated' });
                setSnipModeActive(true);
                playSound('snip');
            });
            at(1400, () => {
                setCursor({ x: 11, y: 34, clicking: true, rippleKey: 15, tag: 'Drag Crop Box Around Diagram' });
                setChoreoSnipRect({ x: 8, y: 28, w: 6, h: 6 });
            });
            at(2150, () => {
                setCursor({ x: 52, y: 70, clicking: true, rippleKey: 15, tag: 'Capturing Viewport + OCR Context' });
                setChoreoSnipRect({ x: 8, y: 26, w: 48, h: 44 });
            });
            at(3500, () => {
                setSnipModeActive(false);
                setChoreoSnipRect(null);
                triggerSolveQuestion(targetOcrId, { mode: 'explain', highlightOnly: false });
                setCursor({
                    x: 32,
                    y: 76,
                    clicking: false,
                    rippleKey: 16,
                    tag: `Vision OCR Solved (${ocrQuestion?.confidence || '99.6%'})`,
                });
            });
        }

        at(duration, () => {
            setChapterIdx((prev) => (prev + 1) % STORY_CHAPTERS.length);
        });

        return () => {
            clearInterval(progInterval);
            timers.forEach(clearTimeout);
        };
    }, [isPlaying, chapterIdx, STORY_CHAPTERS, questions, ocrQuestion, resetAllState, triggerSolveQuestion, playSound]);

    const onViewportMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!snipModeActive || !canvasViewportRef.current) return;
        setIsPlaying(false);
        const rect = canvasViewportRef.current.getBoundingClientRect();
        const pt = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        setSnipDragging(true);
        setSnipStart(pt);
        setSnipCurrent(pt);
    };

    const onViewportMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!snipDragging || !canvasViewportRef.current) return;
        const rect = canvasViewportRef.current.getBoundingClientRect();
        setSnipCurrent({
            x: Math.max(0, Math.min(rect.width, e.clientX - rect.left)),
            y: Math.max(0, Math.min(rect.height, e.clientY - rect.top)),
        });
    };

    const onViewportMouseUp = () => {
        if (!snipDragging || !snipStart || !snipCurrent) {
            setSnipDragging(false);
            return;
        }
        const w = Math.abs(snipCurrent.x - snipStart.x);
        const h = Math.abs(snipCurrent.y - snipStart.y);
        setSnipDragging(false);
        setSnipModeActive(false);
        setSnipStart(null);
        setSnipCurrent(null);
        if (w > 24 && h > 20) {
            triggerSolveQuestion(activeQ);
        }
    };

    const solvedMap: Record<number, boolean> = useMemo(() => {
        const map: Record<number, boolean> = {};
        for (const q of questions) {
            if (q.kind === 'multi') {
                map[q.id] =
                    q.correctOptions.every((k) => q2MultiSelected.includes(k)) &&
                    q2MultiSelected.length === q.correctOptions.length;
            } else if (q.kind === 'dropdown' && q.dropdownAnswers) {
                map[q.id] = q3Blank1 === q.dropdownAnswers[0] && q3Blank2 === q.dropdownAnswers[1];
            } else if (q.kind === 'short') {
                map[q.id] = q4Input.trim().toLowerCase() === q.answerText.trim().toLowerCase();
            } else {
                map[q.id] = mcqSelected[q.id] === q.correctOption;
            }
        }
        return map;
    }, [questions, mcqSelected, q2MultiSelected, q3Blank1, q3Blank2, q4Input]);

    const totalSolvedCount = Object.values(solvedMap).filter(Boolean).length;
    const currentQ = questions.find((q) => q.id === activeQ) || questions[0];
    const activeChapter = STORY_CHAPTERS[chapterIdx] || STORY_CHAPTERS[0];

    return (
        <div className="space-y-4">
            {/* Film Control Header Strip */}
            <div className="flex flex-wrap items-center justify-between gap-3 px-1">
                <div className="flex items-center gap-2.5">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#cdeecb] text-[#14532d] border border-black/10 shadow-2xs">
                        Live {platformName} Product Film
                    </span>
                    <span className="text-xs text-ink-muted hidden sm:inline">
                        Watch the 6-chapter motion walkthrough or click inside to test one-by-one double-click solving
                    </span>
                </div>

                <div className="flex items-center gap-2">
                    <button
                        type="button"
                        onClick={() => setSoundEnabled((prev) => !prev)}
                        className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs font-semibold text-ink-secondary hover:text-ink flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
                        title={soundEnabled ? 'Mute UI Audio' : 'Enable UI Audio'}
                    >
                        {soundEnabled ? (
                            <>
                                <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                                <span className="hidden sm:inline">Sound On</span>
                            </>
                        ) : (
                            <>
                                <VolumeX className="w-3.5 h-3.5 text-ink-muted" />
                                <span className="hidden sm:inline">Muted</span>
                            </>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={() => setIsPlaying((prev) => !prev)}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-2xs ${
                            isPlaying
                                ? 'bg-ink text-white hover:bg-ink/90'
                                : 'bg-[#cdeecb] text-ink border border-emerald-600/20 hover:bg-[#bde6ba]'
                        }`}
                    >
                        {isPlaying ? (
                            <>
                                <Pause className="w-3 h-3 fill-current" />
                                <span>Pause Film (Try Live)</span>
                            </>
                        ) : (
                            <>
                                <Play className="w-3 h-3 fill-current" />
                                <span>Auto-Play Film</span>
                            </>
                        )}
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setIsPlaying(false);
                            resetAllState();
                        }}
                        className="px-3 py-1.5 rounded-full bg-white hover:bg-[#faf8f4] border border-black/10 text-ink-secondary hover:text-ink text-xs font-semibold transition-colors flex items-center gap-1 shadow-2xs cursor-pointer"
                    >
                        <RotateCcw className="w-3 h-3" />
                        <span>Reset</span>
                    </button>
                </div>
            </div>

            {/* Unified macOS Browser + Cloned Extension Frame */}
            <div className="rounded-[28px] sm:rounded-[34px] bg-[#f7f5f0] border border-black/12 shadow-[0_28px_80px_-16px_rgba(20,20,19,0.16)] overflow-hidden relative">
                {/* Choreographed Spring Cursor */}
                <AnimatePresence>
                    {isPlaying && (
                        <motion.div
                            key="virtual-cursor"
                            initial={{ opacity: 0 }}
                            animate={{
                                opacity: 1,
                                left: `${cursor.x}%`,
                                top: `${cursor.y}%`,
                            }}
                            exit={{ opacity: 0 }}
                            transition={{
                                left: { type: 'spring', stiffness: 150, damping: 22 },
                                top: { type: 'spring', stiffness: 150, damping: 22 },
                                opacity: { duration: 0.2 },
                            }}
                            className="pointer-events-none absolute z-[120] hidden lg:block"
                        >
                            <div className="relative flex items-center">
                                {cursor.clicking && (
                                    <motion.span
                                        key={cursor.rippleKey}
                                        initial={{ scale: 0.4, opacity: 0.9 }}
                                        animate={{ scale: 2.1, opacity: 0 }}
                                        transition={{ duration: 0.55, ease: 'easeOut' }}
                                        className="absolute -left-3 -top-3 w-9 h-9 rounded-full border-2 border-emerald-500 bg-emerald-400/25"
                                    />
                                )}
                                <motion.svg
                                    animate={{ scale: cursor.clicking ? 0.86 : 1 }}
                                    transition={{ duration: 0.12 }}
                                    width="26"
                                    height="26"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    className="drop-shadow-[0_6px_14px_rgba(0,0,0,0.35)]"
                                >
                                    <path
                                        d="M5.5 3.21V20.8c0 .45.54.67.85.35l4.86-4.86a.5.5 0 0 1 .35-.15h6.87a.5.5 0 0 0 .35-.85L6.35 2.85a.5.5 0 0 0-.85.35Z"
                                        fill="#141413"
                                        stroke="#ffffff"
                                        strokeWidth="1.8"
                                    />
                                </motion.svg>
                                {cursor.tag && (
                                    <motion.div
                                        key={cursor.tag}
                                        initial={{ opacity: 0, y: 4 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="ml-2.5 px-3 py-1 rounded-full bg-[#141413]/95 text-white text-[11px] font-semibold tracking-tight shadow-xl border border-white/15 whitespace-nowrap"
                                    >
                                        {cursor.tag}
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* macOS Chrome Browser Top Toolbar */}
                <div className="bg-[#efece4] px-4 sm:px-6 py-3 border-b border-black/8 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2 min-w-0">
                        <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 shrink-0" />
                        <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 shrink-0" />
                        <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 shrink-0" />

                        <div className="ml-2 px-3.5 py-1.5 rounded-full bg-white border border-black/8 text-xs font-mono text-ink-secondary flex items-center gap-2 truncate shadow-2xs">
                            <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span className="truncate">{browserUrl}</span>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cdeecb]/70 border border-emerald-600/20 text-ink text-xs font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                            <span>0 Focus-Loss Flags</span>
                        </div>

                        <button
                            type="button"
                            onClick={() => {
                                setIsPlaying(false);
                                setPopupOpen((prev) => !prev);
                            }}
                            className={`px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                                popupOpen
                                    ? 'bg-[#0a0e14] text-emerald-400 border-emerald-500/40 shadow-xs'
                                    : 'bg-white text-ink border-black/10 hover:bg-black/5'
                            }`}
                        >
                            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                            <span>ExamGhost HUD</span>
                            <Puzzle className="w-3.5 h-3.5 opacity-60" />
                        </button>
                    </div>
                </div>

                {/* Main Split Viewport */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-7 bg-[#f7f5f0] items-start">
                    {/* Left 7 Cols: Simulated LMS Quiz Window */}
                    <div
                        ref={canvasViewportRef}
                        onMouseDown={onViewportMouseDown}
                        onMouseMove={onViewportMouseMove}
                        onMouseUp={onViewportMouseUp}
                        onClick={() => {
                            if (isPlaying) setIsPlaying(false);
                        }}
                        className={`relative ${
                            popupOpen ? 'lg:col-span-7' : 'lg:col-span-12'
                        } rounded-3xl bg-white border border-black/10 shadow-soft p-5 sm:p-7 flex flex-col justify-between select-none overflow-hidden transition-all`}
                    >
                        {/* Stealth Micro HUD */}
                        <AnimatePresence>
                            {stealthHudText && (
                                <motion.div
                                    initial={{ opacity: 0, y: -8 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -8 }}
                                    className="absolute top-4 right-4 z-40 bg-[#0a0e14]/95 backdrop-blur-md text-[#10b981] font-bold text-xs px-4 py-2 rounded-full border border-emerald-500/40 shadow-xl"
                                >
                                    ● Hint: [{stealthHudText}]
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Snip Overlay */}
                        <AnimatePresence>
                            {snipModeActive && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="absolute inset-0 z-40 bg-black/35 backdrop-blur-[1.5px] cursor-crosshair"
                                >
                                    <div className="mt-4 mx-auto w-fit bg-[#0f172a]/95 backdrop-blur-md text-[#e2e8f0] text-xs font-medium px-5 py-2 rounded-full border border-white/20 shadow-2xl flex items-center gap-3 pointer-events-none">
                                        <span>
                                            <strong>Snap-It Vision OCR</strong>: Drag around {platformName} diagram &amp; options
                                        </span>
                                        <span className="opacity-40">|</span>
                                        <span className="text-[11px] text-[#94a3b8]">
                                            Press <strong>Esc</strong> to cancel
                                        </span>
                                    </div>

                                    {snipDragging && snipStart && snipCurrent && (
                                        <div
                                            className="absolute border-2 border-dashed border-[#10b981] bg-[#10b981]/15 shadow-[0_0_20px_rgba(16,185,129,0.4)] rounded-[5px] pointer-events-none"
                                            style={{
                                                left: Math.min(snipStart.x, snipCurrent.x),
                                                top: Math.min(snipStart.y, snipCurrent.y),
                                                width: Math.abs(snipCurrent.x - snipStart.x),
                                                height: Math.abs(snipCurrent.y - snipStart.y),
                                            }}
                                        />
                                    )}

                                    {choreoSnipRect && (
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: 1,
                                                left: `${choreoSnipRect.x}%`,
                                                top: `${choreoSnipRect.y}%`,
                                                width: `${choreoSnipRect.w}%`,
                                                height: `${choreoSnipRect.h}%`,
                                            }}
                                            transition={{ duration: 0.65, ease: 'easeInOut' }}
                                            className="absolute border-2 border-dashed border-[#10b981] bg-[#10b981]/15 shadow-[0_0_20px_rgba(16,185,129,0.4)] rounded-[5px] pointer-events-none"
                                        />
                                    )}
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Top Question Tabs */}
                        <div>
                            <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-black/8">
                                <div className="flex items-center gap-1.5 flex-wrap">
                                    {questions.map((q) => {
                                        const isCurrent = activeQ === q.id;
                                        const isDone = solvedMap[q.id];
                                        return (
                                            <button
                                                key={q.id}
                                                type="button"
                                                onClick={() => {
                                                    setIsPlaying(false);
                                                    setActiveQ(q.id);
                                                    playSound('tab');
                                                }}
                                                className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                                                    isCurrent
                                                        ? 'bg-ink text-white shadow-2xs'
                                                        : isDone
                                                        ? 'bg-[#cdeecb]/65 text-ink border border-emerald-600/25'
                                                        : 'bg-[#f7f5f0] text-ink-secondary hover:text-ink border border-black/6'
                                                }`}
                                            >
                                                <span>Q{q.number}</span>
                                                <span
                                                    className={`hidden sm:inline text-[11px] font-normal ${
                                                        isCurrent ? 'text-white/75' : 'text-ink-muted'
                                                    }`}
                                                >
                                                    · {q.isOcr ? 'OCR' : q.kind === 'dropdown' ? 'Cloze' : q.kind === 'multi' ? 'Multi' : q.kind === 'short' ? 'Input' : 'MCQ'}
                                                </span>
                                                {isDone && <Check className="w-3 h-3 text-emerald-600 stroke-[3]" />}
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="flex items-center gap-1.5 text-xs font-mono text-ink-muted bg-[#f7f5f0] px-3 py-1.5 rounded-xl border border-black/6">
                                    <Clock className="w-3.5 h-3.5 text-ink" />
                                    <span>41:18 left</span>
                                </div>
                            </div>

                            {/* Active Question Card */}
                            {currentQ && (
                                <div
                                    onDoubleClick={() => {
                                        setIsPlaying(false);
                                        triggerSolveQuestion(currentQ.id);
                                    }}
                                    title="Double-click anywhere on this question card to solve inline!"
                                    className={`relative rounded-2xl border p-5 sm:p-6 transition-all duration-200 cursor-pointer ${
                                        solvingCardId === currentQ.id
                                            ? 'border-indigo-500 ring-4 ring-indigo-500/15 bg-indigo-50/10'
                                            : successCardId === currentQ.id
                                            ? 'border-emerald-500 ring-4 ring-emerald-500/15 bg-[#cdeecb]/10'
                                            : 'border-black/10 bg-[#fcfbf9] hover:border-black/25'
                                    }`}
                                >
                                    {/* Inline Card Toast */}
                                    <AnimatePresence>
                                        {cardToast && cardToast.qId === currentQ.id && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -6 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -6 }}
                                                className={`mb-3 inline-flex items-center gap-2 px-3.5 py-2 rounded-2xl text-xs font-bold border shadow-2xs ${
                                                    cardToast.isSolving
                                                        ? 'bg-[#c4d0f8] text-[#141413] border-indigo-600/25'
                                                        : 'bg-[#cdeecb] text-[#064e3b] border-emerald-700/25'
                                                }`}
                                            >
                                                <span>{cardToast.text}</span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    {/* Question Meta Header */}
                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-4 border-b border-black/6">
                                        <div className="flex items-center gap-2 flex-wrap">
                                            <span className="font-display font-bold text-sm text-ink">
                                                Question {currentQ.number}
                                            </span>
                                            <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-white border border-black/8 text-ink-secondary">
                                                {currentQ.courseCode}
                                            </span>
                                            <span className="text-xs text-ink-muted">{currentQ.pts}</span>
                                        </div>

                                        <div className="flex items-center gap-1.5">
                                            {currentQ.isOcr && (
                                                <button
                                                    type="button"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setIsPlaying(false);
                                                        setSnipModeActive(true);
                                                        playSound('snip');
                                                    }}
                                                    className="px-3 py-1 rounded-full bg-ink text-white text-xs font-semibold flex items-center gap-1.5 hover:bg-ink/90 cursor-pointer"
                                                >
                                                    <Crop className="w-3 h-3 text-[#cdeecb]" />
                                                    <span>Drag &amp; Snip (Alt+S)</span>
                                                </button>
                                            )}
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    setIsPlaying(false);
                                                    triggerSolveQuestion(currentQ.id);
                                                }}
                                                className="px-3 py-1 rounded-full bg-[#cdeecb] hover:bg-[#bde6ba] text-ink text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                                            >
                                                <MousePointerClick className="w-3.5 h-3.5" />
                                                <span>Double-Click Card to Solve</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Multi-Select Question */}
                                    {currentQ.kind === 'multi' && (
                                        <div>
                                            <h3 className="font-display text-lg sm:text-xl font-bold text-ink mb-4 leading-snug">
                                                {currentQ.question}
                                            </h3>
                                            <div className="space-y-2">
                                                {currentQ.options.map((opt) => {
                                                    const checked = q2MultiSelected.includes(opt.label);
                                                    const stealthTick =
                                                        stealthMarks[currentQ.id] &&
                                                        currentQ.correctOptions.includes(opt.label);
                                                    return (
                                                        <label
                                                            key={opt.label}
                                                            onClick={(e) => e.stopPropagation()}
                                                            className={`flex items-center justify-between p-3.5 rounded-xl border text-sm font-medium cursor-pointer transition-all ${
                                                                checked
                                                                    ? 'bg-[#cdeecb]/40 border-emerald-500 text-ink font-semibold'
                                                                    : 'bg-white border-black/10 text-ink hover:border-black/25'
                                                            }`}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <input
                                                                    type="checkbox"
                                                                    checked={checked}
                                                                    onChange={() => {
                                                                        setIsPlaying(false);
                                                                        setQ2MultiSelected((prev) =>
                                                                            prev.includes(opt.label)
                                                                                ? prev.filter((item) => item !== opt.label)
                                                                                : [...prev, opt.label]
                                                                        );
                                                                    }}
                                                                    className="accent-emerald-600 w-4 h-4"
                                                                />
                                                                <span>
                                                                    <strong className="mr-1.5">{opt.label}.</strong>
                                                                    {opt.text}
                                                                    {stealthTick && (
                                                                        <span className="text-[#10b981] font-extrabold text-xs ml-2">✓</span>
                                                                    )}
                                                                </span>
                                                            </div>
                                                            {checked && (
                                                                <span className="text-[11px] font-mono font-bold text-emerald-900 bg-[#cdeecb] px-2.5 py-0.5 rounded-full">
                                                                    ✓ Selected
                                                                </span>
                                                            )}
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}

                                    {/* Cloze Dropdown Question */}
                                    {currentQ.kind === 'dropdown' && (
                                        <div>
                                            <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-md mb-3">
                                                {platformName} Inline Dropdown / Cloze Question
                                            </span>
                                            <div className="p-5 rounded-xl bg-[#faf8f5] border border-black/8 text-base sm:text-lg font-medium text-ink leading-loose">
                                                {currentQ.clozePrefix || 'Select the first parameter'}{' '}
                                                <select
                                                    value={q3Blank1}
                                                    onClick={(e) => e.stopPropagation()}
                                                    onChange={(e) => {
                                                        setIsPlaying(false);
                                                        setQ3Blank1(e.target.value);
                                                    }}
                                                    className={`px-3 py-1.5 rounded-xl border font-bold text-sm mx-1 transition-all ${
                                                        currentQ.dropdownAnswers && q3Blank1 === currentQ.dropdownAnswers[0]
                                                            ? 'bg-[#cdeecb] border-emerald-600 text-ink shadow-2xs'
                                                            : 'bg-white border-black/15 text-ink'
                                                    }`}
                                                >
                                                    <option value="">[ Select Blank 1 ]</option>
                                                    {(currentQ.blank1Options || ['Option 1', 'Option 2', 'Option 3']).map((o) => (
                                                        <option key={o} value={o}>
                                                            {o}
                                                        </option>
                                                    ))}
                                                </select>
                                                {stealthMarks[currentQ.id] && (
                                                    <span className="text-[#10b981] font-extrabold text-sm mr-1">✓</span>
                                                )}{' '}
                                                {currentQ.clozeMiddle || 'and the second parameter'}{' '}
                                                <select
                                                    value={q3Blank2}
                                                    onClick={(e) => e.stopPropagation()}
                                                    onChange={(e) => {
                                                        setIsPlaying(false);
                                                        setQ3Blank2(e.target.value);
                                                    }}
                                                    className={`px-3 py-1.5 rounded-xl border font-bold text-sm mx-1 transition-all ${
                                                        currentQ.dropdownAnswers && q3Blank2 === currentQ.dropdownAnswers[1]
                                                            ? 'bg-[#cdeecb] border-emerald-600 text-ink shadow-2xs'
                                                            : 'bg-white border-black/15 text-ink'
                                                    }`}
                                                >
                                                    <option value="">[ Select Blank 2 ]</option>
                                                    {(currentQ.blank2Options || ['Option A', 'Option B', 'Option C']).map((o) => (
                                                        <option key={o} value={o}>
                                                            {o}
                                                        </option>
                                                    ))}
                                                </select>
                                                {stealthMarks[currentQ.id] && (
                                                    <span className="text-[#10b981] font-extrabold text-sm">✓</span>
                                                )}{' '}
                                                {currentQ.clozeSuffix || '.'}
                                            </div>
                                        </div>
                                    )}

                                    {/* Short Answer Question */}
                                    {currentQ.kind === 'short' && (
                                        <div>
                                            <h3 className="font-display text-lg sm:text-xl font-bold text-ink mb-4 leading-snug">
                                                {currentQ.question}
                                            </h3>
                                            <div className="p-4 rounded-xl bg-[#faf8f5] border border-black/8 space-y-2">
                                                <label className="text-xs font-mono font-semibold text-ink-muted block">
                                                    {platformName} Short-Answer / Numerical Response Box:
                                                </label>
                                                <div className="flex items-center gap-2">
                                                    <input
                                                        type="text"
                                                        value={q4Input}
                                                        onClick={(e) => e.stopPropagation()}
                                                        onChange={(e) => {
                                                            setIsPlaying(false);
                                                            setQ4Input(e.target.value);
                                                        }}
                                                        placeholder="Double-click question card to auto-populate..."
                                                        className={`w-full px-4 py-3 rounded-xl border text-sm font-mono font-bold outline-none transition-all ${
                                                            q4Input
                                                                ? 'bg-[#cdeecb]/40 border-emerald-600 text-ink'
                                                                : 'bg-white border-black/15 text-ink'
                                                        }`}
                                                    />
                                                    {stealthMarks[currentQ.id] && (
                                                        <span className="text-[#10b981] font-extrabold text-base">✓</span>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* Standard MCQ & Diagram OCR Questions */}
                                    {currentQ.kind === 'mcq' && (
                                        <div>
                                            {/* Optional Custom or Default Diagram */}
                                            {(currentQ.diagramSvg || currentQ.isOcr) && (
                                                <div className="mb-4 p-3.5 rounded-2xl bg-[#faf8f5] border border-black/8">
                                                    {currentQ.diagramLabel && (
                                                        <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-ink-muted mb-2 flex items-center justify-between">
                                                            <span>{currentQ.diagramLabel}</span>
                                                            <span className="text-emerald-700 font-semibold">Alt+S Vision OCR Ready</span>
                                                        </div>
                                                    )}
                                                    <div className="flex justify-center">
                                                        {currentQ.diagramSvg ? (
                                                            currentQ.diagramSvg
                                                        ) : (
                                                            <svg viewBox="0 0 460 140" className="w-full max-w-md h-auto">
                                                                <defs>
                                                                    <pattern id="lmsDemoGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                                                                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e9e4da" strokeWidth="1" />
                                                                    </pattern>
                                                                </defs>
                                                                <rect width="460" height="140" fill="url(#lmsDemoGrid)" rx="10" />
                                                                <line x1="30" y1="120" x2="430" y2="120" stroke="#94a3b8" strokeWidth="1.5" />
                                                                <line x1="40" y1="130" x2="40" y2="15" stroke="#94a3b8" strokeWidth="1.5" />
                                                                <polygon
                                                                    points="60,120 220,120 220,25"
                                                                    fill="#c4d0f8"
                                                                    fillOpacity="0.6"
                                                                    stroke="#4f46e5"
                                                                    strokeWidth="2.5"
                                                                />
                                                                <rect x="206" y="106" width="14" height="14" fill="none" stroke="#4f46e5" strokeWidth="1.5" />
                                                                <text x="120" y="134" fontSize="12" fontWeight="bold" fill="#1e1b4b" fontFamily="monospace">
                                                                    {currentQ.diagramLabels?.legA || 'a = 6'}
                                                                </text>
                                                                <text x="228" y="78" fontSize="12" fontWeight="bold" fill="#1e1b4b" fontFamily="monospace">
                                                                    {currentQ.diagramLabels?.legB || 'b = 8'}
                                                                </text>
                                                                <text x="105" y="66" fontSize="13" fontWeight="bold" fill="#4f46e5" fontFamily="monospace">
                                                                    {currentQ.diagramLabels?.hypC || 'c = ?'}
                                                                </text>
                                                                <path
                                                                    d="M 265,110 Q 335,48 410,18"
                                                                    fill="none"
                                                                    stroke="#059669"
                                                                    strokeWidth="2.5"
                                                                    strokeDasharray="4 2"
                                                                />
                                                                <circle cx="350" cy="40" r="4.5" fill="#059669" />
                                                                <text x="295" y="26" fontSize="11" fontWeight="bold" fill="#065f46" fontFamily="monospace">
                                                                    {currentQ.diagramLabels?.curveLabel || 'dy/dx at x = 4'}
                                                                </text>
                                                            </svg>
                                                        )}
                                                    </div>
                                                </div>
                                            )}

                                            <h3 className="font-display text-base sm:text-lg font-bold text-ink mb-4 leading-snug">
                                                {currentQ.question}
                                            </h3>

                                            <div className="space-y-2">
                                                {currentQ.options.map((opt) => {
                                                    const selected = mcqSelected[currentQ.id] === opt.label;
                                                    const stealthTick =
                                                        stealthMarks[currentQ.id] && opt.label === currentQ.correctOption;
                                                    return (
                                                        <label
                                                            key={`${currentQ.id}-${opt.label}`}
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                setIsPlaying(false);
                                                                setMcqSelected((prev) => ({ ...prev, [currentQ.id]: opt.label }));
                                                            }}
                                                            className={`flex items-center justify-between p-3.5 rounded-xl border text-sm font-medium cursor-pointer transition-all ${
                                                                selected
                                                                    ? 'bg-[#cdeecb]/40 border-emerald-500 text-ink font-semibold'
                                                                    : 'bg-white border-black/10 text-ink hover:border-black/25'
                                                            }`}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                                <input
                                                                    type="radio"
                                                                    name={`lms_q_${currentQ.id}`}
                                                                    checked={selected}
                                                                    onChange={() =>
                                                                        setMcqSelected((prev) => ({
                                                                            ...prev,
                                                                            [currentQ.id]: opt.label,
                                                                        }))
                                                                    }
                                                                    className="accent-emerald-600 w-4 h-4 shrink-0"
                                                                />
                                                                <span>
                                                                    <strong className="mr-1.5">{opt.label}.</strong>
                                                                    {opt.text}
                                                                    {stealthTick && (
                                                                        <span className="text-[#10b981] font-extrabold text-xs ml-2">✓</span>
                                                                    )}
                                                                </span>
                                                            </div>
                                                            {selected && (
                                                                <span className="text-[11px] font-mono font-bold text-emerald-900 bg-[#cdeecb] px-2.5 py-0.5 rounded-full shrink-0 ml-2">
                                                                    {currentQ.isOcr ? 'OCR ✓' : 'Verified ✓'}
                                                                </span>
                                                            )}
                                                        </label>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                            {/* In-Page Smart Answer Banner */}
                            <AnimatePresence>
                                {sideBanner.visible && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 12 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 12 }}
                                        transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                                        onClick={(e) => e.stopPropagation()}
                                        style={{ backgroundColor: '#141413', color: '#f8fafc' }}
                                        className="mt-4 w-full bg-[#141413] border border-black/20 rounded-2xl shadow-lg text-white overflow-hidden"
                                    >
                                        <div
                                            style={{ backgroundColor: '#1e1e1c' }}
                                            className="flex items-center justify-between px-4 py-2.5 border-b border-white/10"
                                        >
                                            <div
                                                className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider ${
                                                    sideBanner.isSolving ? 'text-[#a5b4fc]' : 'text-[#34d399]'
                                                }`}
                                            >
                                                <span>{sideBanner.isSolving ? '⚡' : '✓'}</span>
                                                <span>
                                                    {sideBanner.isSolving
                                                        ? 'Explain Mode Banner · Solving inline...'
                                                        : `Explain Mode Banner · Verified (${sideBanner.result?.confidence || '99.8%'})`}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <button
                                                    type="button"
                                                    onClick={() => setSideBanner((prev) => ({ ...prev, visible: false }))}
                                                    className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/20 text-white/80 flex items-center justify-center text-xs cursor-pointer"
                                                    title="Close"
                                                >
                                                    ✕
                                                </button>
                                            </div>
                                        </div>

                                        <div className="p-3.5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center text-xs">
                                            {sideBanner.isSolving ? (
                                                <div className="md:col-span-12 bg-white/5 border border-white/15 rounded-lg p-2.5">
                                                    <span className="text-[#a5b4fc] font-bold text-xs">
                                                        Parsing {platformName} DOM inside Closed Shadow Root...
                                                    </span>
                                                </div>
                                            ) : (
                                                sideBanner.result && (
                                                    <>
                                                        <div className="md:col-span-5 bg-emerald-500/15 border border-emerald-500/35 rounded-xl p-3">
                                                            <div className="text-[10px] uppercase tracking-wider text-[#34d399] font-bold mb-0.5">
                                                                Verified Answer
                                                            </div>
                                                            <span className="text-white text-xs sm:text-[13px] font-bold break-words">
                                                                {sideBanner.result.kind === 'multi' &&
                                                                sideBanner.result.correctOptions.length > 1
                                                                    ? `[${sideBanner.result.correctOptions.join(', ')}] `
                                                                    : sideBanner.result.correctOption
                                                                    ? `${sideBanner.result.correctOption}) `
                                                                    : ''}
                                                                {sideBanner.result.answerText}
                                                            </span>
                                                        </div>

                                                        {explainDetailed && sideBanner.result.explanation && (
                                                            <div className="md:col-span-7 text-[11.5px] text-white/85 leading-relaxed bg-white/5 rounded-xl p-3 border-l-2 border-[#34d399]">
                                                                <strong className="text-[#cdeecb]">Step-by-Step Proof:</strong>{' '}
                                                                {sideBanner.result.explanation}
                                                            </div>
                                                        )}
                                                    </>
                                                )
                                            )}
                                        </div>

                                        {!sideBanner.isSolving && (
                                            <div className="h-[3px] bg-white/10 w-full">
                                                <div
                                                    className="h-full bg-[#10b981] transition-all duration-100 ease-linear"
                                                    style={{ width: `${sideBanner.progress}%` }}
                                                />
                                            </div>
                                        )}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Bottom Bar */}
                        <div className="pt-4 mt-5 border-t border-black/8 flex flex-wrap items-center justify-between gap-3 text-xs">
                            <div className="flex items-center gap-2">
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsPlaying(false);
                                        setActiveQ((prev) => Math.max(1, prev - 1));
                                    }}
                                    disabled={activeQ === 1}
                                    className="px-3 py-1.5 rounded-xl bg-[#f7f5f0] border border-black/8 font-semibold text-ink disabled:opacity-40 flex items-center gap-1 cursor-pointer"
                                >
                                    <ChevronLeft className="w-3.5 h-3.5" />
                                    <span>Prev</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => {
                                        setIsPlaying(false);
                                        setActiveQ((prev) => Math.min(questions.length, prev + 1));
                                    }}
                                    disabled={activeQ === questions.length}
                                    className="px-3 py-1.5 rounded-xl bg-[#f7f5f0] border border-black/8 font-semibold text-ink disabled:opacity-40 flex items-center gap-1 cursor-pointer"
                                >
                                    <span>Next</span>
                                    <ChevronRight className="w-3.5 h-3.5" />
                                </button>
                            </div>

                            <div className="flex items-center gap-3 font-mono text-[11px] text-ink-secondary">
                                <span className="inline-flex items-center gap-1">
                                    <Activity className="w-3.5 h-3.5 text-emerald-600" />
                                    <span>{telemetryLabel}</span>
                                </span>
                                <span>·</span>
                                <span>
                                    Solved: <strong className="text-ink">{totalSolvedCount}/{questions.length}</strong>
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right 5 Cols: Cloned Chrome Extension Popup (Strictly One-by-One Double Click + Screenshot Tool) */}
                    {popupOpen && (
                        <div
                            onClick={() => {
                                if (isPlaying) setIsPlaying(false);
                            }}
                            className="lg:col-span-5 flex flex-col items-center justify-start relative"
                        >
                            <div className="hidden lg:block absolute -top-2 right-10 w-4 h-4 rotate-45 bg-[#141413] border-l border-t border-white/15 z-20" />

                            <div
                                className={`w-full max-w-[430px] rounded-[24px] border shadow-[0_24px_60px_-12px_rgba(20,20,19,0.42)] p-4 flex flex-col relative z-10 transition-colors ${
                                    theme === 'light'
                                        ? 'bg-[#fcf9f5] text-[#141413] border-black/12'
                                        : 'bg-[#141413] text-white border-white/12'
                                }`}
                            >
                                {/* Popup Header */}
                                <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-[36px] h-[36px] rounded-xl overflow-hidden border border-emerald-500/40 bg-[#cdeecb] flex items-center justify-center shadow-[0_4px_12px_rgba(16,185,129,0.22)] shrink-0">
                                            <img
                                                src="/images/ghost/ghost_mascot_hero.jpg"
                                                alt="ExamGhost Mascot"
                                                width={36}
                                                height={36}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <div className="text-[15px] font-display font-bold tracking-tight leading-none">
                                                ExamGhost · {platformName}
                                            </div>
                                            <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#a8a49c] mt-1">
                                                <span className="w-[6.5px] h-[6.5px] rounded-full bg-[#10b981] shadow-[0_0_7px_rgba(16,185,129,0.7)] inline-block" />
                                                <span className="truncate max-w-[200px]">{platformSub}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-1.5">
                                        <button
                                            type="button"
                                            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                                            className="w-8 h-8 rounded-xl bg-[#1e1d1b] border border-white/10 text-[#a8a49c] hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                                            title="Toggle Theme"
                                        >
                                            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowSettings((prev) => !prev)}
                                            className="w-8 h-8 rounded-xl bg-[#1e1d1b] border border-white/10 text-[#a8a49c] hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                                            title="Settings"
                                        >
                                            <Sliders size={15} />
                                        </button>
                                    </div>
                                </div>

                                {showSettings && (
                                    <div className="bg-[#151d28] border border-emerald-500/40 rounded-xl p-3.5 mb-3 text-xs">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold">Engine Configuration</span>
                                            <button
                                                type="button"
                                                onClick={() => setShowSettings(false)}
                                                className="text-slate-400 hover:text-white"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                        <label className="block text-[11px] text-[#94a3b8] mb-1">AI Routing Key</label>
                                        <input
                                            type="password"
                                            value={apiKey}
                                            onChange={(e) => setApiKey(e.target.value)}
                                            className="w-full px-2.5 py-1.5 rounded-lg bg-[#0a0e14] border border-white/10 text-xs font-mono text-white mb-2.5"
                                        />
                                        <div className="flex justify-end">
                                            <button
                                                type="button"
                                                onClick={() => setShowSettings(false)}
                                                className="px-3 py-1 rounded-md bg-[#10b981] text-[#022c19] font-bold text-[11px] cursor-pointer"
                                            >
                                                Save
                                            </button>
                                        </div>
                                    </div>
                                )}

                                {showLicenseModal && (
                                    <div className="bg-[#151d28] border border-emerald-500/40 rounded-xl p-3.5 mb-3 text-xs">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="font-bold">Activate Academic Pass</span>
                                            <button
                                                type="button"
                                                onClick={() => setShowLicenseModal(false)}
                                                className="text-slate-400 hover:text-white"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                        <input
                                            type="text"
                                            value={licenseKey}
                                            onChange={(e) => setLicenseKey(e.target.value)}
                                            placeholder="XXXX-XXXX-XXXX-XXXX"
                                            className="w-full px-2.5 py-1.5 rounded-lg bg-[#0a0e14] border border-white/10 text-xs font-mono text-white mb-2.5"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setTotalMessages(999);
                                                setUsedMessages(0);
                                                setLicenseSuccess(true);
                                                setTimeout(() => setShowLicenseModal(false), 900);
                                            }}
                                            className="w-full py-1.5 rounded-md bg-[#10b981] text-[#022c19] font-bold cursor-pointer"
                                        >
                                            {licenseSuccess ? '✓ Pass Activated!' : 'Activate License'}
                                        </button>
                                    </div>
                                )}

                                {/* 3-Mode Segmented Control */}
                                <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-[#1e1d1b] border border-white/10 mb-3 relative">
                                    {[
                                        { id: 'invisible', label: 'Invisible', kbd: 'Alt+1', Icon: EyeOff },
                                        { id: 'stealth', label: 'Stealth', kbd: 'Alt+2', Icon: Shield },
                                        { id: 'explain', label: 'Explain', kbd: 'Alt+3', Icon: BookOpen },
                                    ].map(({ id, label, kbd, Icon }) => {
                                        const active = solverMode === id;
                                        return (
                                            <button
                                                key={id}
                                                type="button"
                                                onClick={() => {
                                                    setSolverMode(id as 'invisible' | 'stealth' | 'explain');
                                                    playSound('tab');
                                                }}
                                                className={`relative z-10 flex items-center justify-center gap-1 py-2 px-1.5 rounded-lg text-[11.5px] font-semibold transition-colors cursor-pointer ${
                                                    active ? 'text-[#cdeecb]' : 'text-[#a8a49c] hover:text-white'
                                                }`}
                                            >
                                                {active && (
                                                    <motion.span
                                                        layoutId="lmsExtModePill"
                                                        transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                                                        className="absolute inset-0 rounded-lg bg-emerald-500/20 border border-emerald-500/40 -z-10"
                                                    />
                                                )}
                                                <Icon size={13} />
                                                <span>{label}</span>
                                                <kbd className="text-[9px] font-mono px-1 py-0.5 rounded bg-white/5 border border-white/10">
                                                    {kbd}
                                                </kbd>
                                            </button>
                                        );
                                    })}
                                </div>

                                {/* Activate Screenshot Tool (No Solve-All Button) */}
                                <div className="flex flex-col gap-2 mb-3">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setActiveQ(ocrQuestion?.id || 3);
                                            setSnipModeActive((prev) => !prev);
                                            playSound('snip');
                                        }}
                                        className={`w-full h-[40px] rounded-[20px] border text-xs font-extrabold tracking-wide uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                                            snipModeActive
                                                ? 'bg-[#cdeecb] text-[#064e3b] border-emerald-400 shadow-[0_4px_14px_rgba(16,185,129,0.35)]'
                                                : 'bg-[#1e1d1b] border-white/12 text-white hover:border-emerald-500/50 hover:text-[#cdeecb]'
                                        }`}
                                    >
                                        <Crop size={15} />
                                        <span>
                                            {snipModeActive
                                                ? `DRAG ON QUESTION ${ocrQuestion?.number || 3} DIAGRAM`
                                                : 'ACTIVATE SCREENSHOT TOOL'}
                                        </span>
                                        <span
                                            className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${
                                                snipModeActive
                                                    ? 'bg-black/20 border-black/20 text-[#022c19]'
                                                    : 'bg-white/10 border-white/15 text-[#94a3b8]'
                                            }`}
                                        >
                                            Alt + S
                                        </span>
                                    </button>
                                </div>

                                {/* Mode Status Pill */}
                                {solverMode === 'invisible' && (
                                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-[11.5px] font-semibold mb-3 bg-indigo-500/10 border border-indigo-500/25 text-[#a5b4fc]">
                                        <span className="w-2 h-2 rounded-full bg-[#818cf8] animate-pulse" />
                                        <span>Invisible Mode Active (Zero Screen Traces)</span>
                                    </div>
                                )}
                                {solverMode === 'stealth' && (
                                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-[11.5px] font-semibold mb-3 bg-emerald-500/10 border border-emerald-500/25 text-[#10b981]">
                                        <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                                        <span>Stealth Solver Active (Double-Click Question)</span>
                                    </div>
                                )}
                                {solverMode === 'explain' && (
                                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-[11.5px] font-semibold mb-3 bg-sky-500/10 border border-sky-500/25 text-[#38bdf8]">
                                        <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                                        <span>Explain HUD Active (Answer + Step-by-Step)</span>
                                    </div>
                                )}

                                {/* Preferences Card */}
                                <div className="bg-[#1e1d1b] border border-white/10 rounded-xl p-3 mb-3 space-y-2">
                                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#a8a49c]">
                                        PREFERENCES
                                    </div>

                                    {solverMode === 'invisible' && (
                                        <>
                                            <LmsSwitchRow
                                                checked={invisibleAutoFill}
                                                onChange={setInvisibleAutoFill}
                                                label="Silent Auto-Fill Answers"
                                                info="No floating banner or toasts; silently selects choices directly"
                                            />
                                            <LmsSwitchRow
                                                checked={invisibleClipboardCopy}
                                                onChange={setInvisibleClipboardCopy}
                                                label="Copy Answer to Clipboard"
                                                info="Silently copies the exact answer text to clipboard on solve"
                                            />
                                            <LmsSwitchRow
                                                checked={invisibleDoubleClick}
                                                onChange={setInvisibleDoubleClick}
                                                label="Double-Click Question Solver"
                                                info="Double-click on any question card silently ticks the answer"
                                            />
                                        </>
                                    )}

                                    {solverMode === 'stealth' && (
                                        <>
                                            <LmsSwitchRow
                                                checked={stealthAutoFill}
                                                onChange={(val) => {
                                                    setStealthAutoFill(val);
                                                    setStealthHighlightOnly(!val);
                                                }}
                                                label="Auto-Fill Answers & Inputs"
                                                info="Automatically selects answers and fills inputs without banners"
                                            />
                                            <LmsSwitchRow
                                                checked={!stealthAutoFill && stealthHighlightOnly}
                                                onChange={(val) => {
                                                    setStealthHighlightOnly(val);
                                                    if (val) setStealthAutoFill(false);
                                                }}
                                                label="Highlight Hint Only (No Fill)"
                                                info="Subtly marks the right option with a tick (✓) so you click it yourself"
                                            />
                                            <LmsSwitchRow
                                                checked={stealthDoubleClick}
                                                onChange={setStealthDoubleClick}
                                                label="Double-Click Question Solver"
                                                info="Double-click any question card on your page to get its answer"
                                            />
                                        </>
                                    )}

                                    {solverMode === 'explain' && (
                                        <>
                                            <LmsSwitchRow
                                                checked={explainAutoFill}
                                                onChange={setExplainAutoFill}
                                                label="Auto-Fill Answers on Page"
                                                info="Highlights and auto-fills the right option beside each question"
                                            />
                                            <LmsSwitchRow
                                                checked={explainSideBanner}
                                                onChange={setExplainSideBanner}
                                                label="Right-Side Answer Banner"
                                                info="A compact card slides in with the verified answer and proof"
                                            />
                                            <LmsSwitchRow
                                                checked={explainDetailed}
                                                onChange={setExplainDetailed}
                                                label="Detailed Explanations"
                                                info="Full step-by-step derivation and concept rationale"
                                            />
                                        </>
                                    )}
                                </div>

                                {/* One-by-One Double-Click Trigger Row */}
                                <div className="bg-[#1e1d1b] border border-white/10 rounded-xl p-3 mb-3 flex items-center justify-between gap-3">
                                    <div className="flex items-center gap-2.5">
                                        <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-[#34d399] shrink-0">
                                            <MousePointerClick size={15} />
                                        </div>
                                        <div>
                                            <div className="text-xs font-bold text-white leading-tight">
                                                Double-Click Any Question
                                            </div>
                                            <div className="text-[11px] text-[#a8a49c]">
                                                Solves one question at a time inside {platformName}
                                            </div>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => currentQ && triggerSolveQuestion(currentQ.id)}
                                        className="px-2.5 py-1.5 rounded-lg bg-[#cdeecb] hover:bg-[#b5e4b2] text-[#064e3b] text-[11px] font-extrabold shrink-0 cursor-pointer transition-colors"
                                    >
                                        Solve Q{currentQ?.number || 1}
                                    </button>
                                </div>

                                {/* Quota Footer */}
                                <div className="bg-[#1e1d1b] border border-white/10 rounded-xl p-3 mt-auto">
                                    <div className="flex justify-between items-center text-xs mb-1.5">
                                        <span className="font-semibold">Free Trial Solves</span>
                                        <span className="font-mono">
                                            {usedMessages} / {totalMessages}
                                        </span>
                                    </div>
                                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden mb-1.5">
                                        <div
                                            className="h-full bg-[#34d399] transition-all duration-300"
                                            style={{ width: `${Math.min(100, (usedMessages / totalMessages) * 100)}%` }}
                                        />
                                    </div>
                                    <div className="flex justify-between items-center text-[11px]">
                                        <span className="text-[#a8a49c]">{Math.max(0, totalMessages - usedMessages)} free left</span>
                                        <button
                                            type="button"
                                            onClick={() => setShowLicenseModal(true)}
                                            className="text-[#cdeecb] font-semibold hover:underline cursor-pointer"
                                        >
                                            Have a license key?
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Clipboard Toast */}
                            <AnimatePresence>
                                {clipboardNotice && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 6 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 6 }}
                                        className="mt-3 w-full max-w-[430px] px-3.5 py-2 rounded-xl bg-[#0a0e14] border border-emerald-500/40 text-emerald-300 text-xs font-semibold flex items-center gap-2 shadow-lg"
                                    >
                                        <Check size={14} className="text-emerald-400 shrink-0" />
                                        <span className="truncate">{clipboardNotice}</span>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    )}
                </div>

                {/* 6-Chapter Film Scrubber Bar */}
                <div className="bg-[#141413] text-white px-4 sm:px-6 py-4 border-t border-black/10">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-3 mb-3 border-b border-white/10">
                        <div className="flex items-center gap-2.5">
                            <span className="px-2 py-0.5 rounded bg-[#cdeecb] text-ink font-mono text-[11px] font-bold">
                                CHAPTER {activeChapter.code}
                            </span>
                            <span className="font-display font-bold text-sm sm:text-base text-white">
                                {activeChapter.label}
                            </span>
                        </div>
                        <p className="text-xs text-white/75">{activeChapter.caption}</p>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
                        {STORY_CHAPTERS.map((ch) => {
                            const isActive = chapterIdx === ch.id;
                            return (
                                <button
                                    key={ch.id}
                                    type="button"
                                    onClick={() => {
                                        setChapterIdx(ch.id);
                                        setIsPlaying(true);
                                    }}
                                    className={`text-left p-2.5 rounded-xl border transition-all cursor-pointer relative overflow-hidden ${
                                        isActive
                                            ? 'bg-white/10 border-[#cdeecb]/60 text-white'
                                            : 'bg-white/[0.03] border-white/10 text-white/65 hover:text-white hover:bg-white/[0.06]'
                                    }`}
                                >
                                    <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                                        <span className={isActive ? 'text-[#cdeecb] font-bold' : 'text-white/50'}>
                                            {ch.code}
                                        </span>
                                        {isActive && isPlaying && <span className="text-[#cdeecb]">PLAYING</span>}
                                    </div>
                                    <div className="text-xs font-semibold truncate">{ch.label}</div>

                                    {isActive && (
                                        <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/10">
                                            <div
                                                className="h-full bg-[#cdeecb] transition-all duration-75 ease-linear"
                                                style={{ width: `${isPlaying ? chapterProgress : 100}%` }}
                                            />
                                        </div>
                                    )}
                                </button>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

function LmsSwitchRow({
    checked,
    onChange,
    label,
    info,
}: {
    checked: boolean;
    onChange: (val: boolean) => void;
    label: string;
    info: string;
}) {
    return (
        <div className="flex items-center gap-2.5 min-h-[26px]">
            <button
                type="button"
                role="switch"
                aria-checked={checked}
                onClick={() => onChange(!checked)}
                className={`relative w-10 h-[22px] rounded-full transition-colors cursor-pointer shrink-0 ${
                    checked ? 'bg-[#10b981]' : 'bg-[#2a3441]'
                }`}
            >
                <span
                    className={`absolute top-[2px] left-[2px] w-[18px] h-[18px] rounded-full bg-white shadow transition-transform ${
                        checked ? 'translate-x-[18px]' : 'translate-x-0'
                    }`}
                />
            </button>
            <span className="text-xs font-semibold flex-1">{label}</span>
            <span className="text-xs text-[#94a3b8] opacity-70 hover:opacity-100 cursor-help" title={info}>
                ⓘ
            </span>
        </div>
    );
}
