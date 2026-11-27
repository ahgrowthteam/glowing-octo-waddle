'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import FinalCta from '@/components/home/FinalCta';
import { DEMO_FAQS } from './demoFaqs';
import { INSTALL_URL } from '@/components/home/config';
import { 
    Check, Sparkles, CheckCircle2, Lock, 
    RefreshCw, ChevronRight, ChevronLeft, ArrowLeft, BookOpen, Clock, Crop, 
    Volume2, VolumeX, Zap, X, GraduationCap, ChevronDown, MousePointerClick, ScrollText, Power
} from 'lucide-react';
import { FaChrome } from 'react-icons/fa';

interface SnipResult {
    questionId: number;
    title: string;
    detectedText: string;
    answer: string;
    explanation: string;
}

const TOTAL_Q = 8;

const Q8_PAIRS: { term: string; answer: string }[] = [
    { term: 'Nucleus', answer: 'Stores DNA' },
    { term: 'Ribosome', answer: 'Builds proteins' },
    { term: 'Mitochondrion', answer: 'Makes ATP' },
    { term: 'Chloroplast', answer: 'Carries out photosynthesis' },
];

export default function DemoPage() {
    // Active Question Tab (1 to 8) — keeps only 1 question visible at a time for zero visual clutter
    const [activeQuestion, setActiveQuestion] = useState<number>(1);

    // Simulator Mode Controls
    const [displayMode, setDisplayMode] = useState<'quick' | 'highlight' | 'explain'>('highlight');
    const [answerMethod, setAnswerMethod] = useState<'autofill' | 'highlight' | 'clipboard'>('autofill');
    const [isExtensionOn, setIsExtensionOn] = useState(true);
    const [soundEnabled, setSoundEnabled] = useState(true);

    // Canvas Exam Time & State
    const [timeLeft, setTimeLeft] = useState(1694); // 28 mins 14 secs
    const [isTimerRunning] = useState(true);
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const [, setHasSubmitted] = useState(false);

    // Modal focus management refs
    const modalRef = useRef<HTMLDivElement>(null);
    const modalCloseRef = useRef<HTMLButtonElement>(null);
    const submitBtnRef = useRef<HTMLButtonElement>(null);
    const prevModalOpenRef = useRef(false);

    // Question Answers State
    const [q1State, setQ1State] = useState<string | null>(null);
    const [q1Highlighted, setQ1Highlighted] = useState(false);
    const [q1Explain, setQ1Explain] = useState(false);

    const [q2State, setQ2State] = useState<string | null>(null);
    const [q2Highlighted, setQ2Highlighted] = useState(false);
    const [q2Explain, setQ2Explain] = useState(false);

    const [q3State, setQ3State] = useState<string[]>([]);
    const [q3Highlighted, setQ3Highlighted] = useState(false);
    const [q3Explain, setQ3Explain] = useState(false);

    const [q4Text, setQ4Text] = useState('');
    const [q4Explain, setQ4Explain] = useState(false);

    const [q5State, setQ5State] = useState<string | null>(null);
    const [q5Highlighted, setQ5Highlighted] = useState(false);
    const [q5Explain, setQ5Explain] = useState(false);

    const [q6State, setQ6State] = useState('');
    const [q6Highlighted, setQ6Highlighted] = useState(false);
    const [q6Explain, setQ6Explain] = useState(false);

    const [q7Text, setQ7Text] = useState('');
    const [q7Explain, setQ7Explain] = useState(false);

    const [q8State, setQ8State] = useState<Record<string, string>>({});
    const [q8Highlighted, setQ8Highlighted] = useState(false);
    const [q8Explain, setQ8Explain] = useState(false);

    // Feedback & Solving State
    const [clipboardNotice, setClipboardNotice] = useState<string | null>(null);
    const [solvingId, setSolvingId] = useState<number | null>(null);
    const [isSpeedrunning, setIsSpeedrunning] = useState(false);

    // In-Page Snipe Tool State (Snap-It Vision OCR)
    const [isSniping, setIsSniping] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(null);
    const [currentDrag, setCurrentDrag] = useState<{ x: number; y: number } | null>(null);
    const [snipeBox, setSnipeBox] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
    const [isScanning, setIsScanning] = useState(false);
    const [snipResult, setSnipResult] = useState<SnipResult | null>(null);

    // Ref to the Canvas Quiz Area
    const quizAreaRef = useRef<HTMLDivElement>(null);
    const questionRefs = {
        1: useRef<HTMLDivElement>(null),
        2: useRef<HTMLDivElement>(null),
        3: useRef<HTMLDivElement>(null),
        4: useRef<HTMLDivElement>(null),
        5: useRef<HTMLDivElement>(null),
        6: useRef<HTMLDivElement>(null),
        7: useRef<HTMLDivElement>(null),
        8: useRef<HTMLDivElement>(null),
    };

    // Calculate Solved Stats
    const q1Solved = q1State === 'B';
    const q2Solved = q2State === 'true';
    const q3Solved = q3State.includes('A') && q3State.includes('B') && q3State.includes('D');
    const q4Solved = q4Text.trim().length > 15;
    const q5Solved = q5State === 'B';

    const q6Solved = q6State === 'canberra';
    const q7Solved = q7Text.trim() === '4';
    const q8Solved = Q8_PAIRS.every((pr) => q8State[pr.term] === pr.answer);
    const solvedFlags = [q1Solved, q2Solved, q3Solved, q4Solved, q5Solved, q6Solved, q7Solved, q8Solved];
    const pointsPerQ = [2, 1, 3, 4, 5, 2, 3, 4];

    const solvedCount = solvedFlags.filter(Boolean).length;

    const totalPoints = pointsPerQ.reduce((a, b) => a + b, 0);
    const earnedPoints = solvedFlags.reduce((sum, ok, i) => sum + (ok ? pointsPerQ[i] : 0), 0);

    const audioCtxRef = useRef<AudioContext | null>(null);

    // Synthesized Audio Feedback
    const playAudio = useCallback((type: 'click' | 'solve' | 'snip' | 'success' | 'alert') => {
        if (!soundEnabled || typeof window === 'undefined') return;
        try {
            const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            if (!AudioCtx) return;
            // One shared AudioContext: browsers cap how many can exist at once.
            const ctx = audioCtxRef.current ?? (audioCtxRef.current = new AudioCtx());
            if (ctx.state === 'suspended') {
                ctx.resume();
            }
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);

            if (type === 'click') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(600, ctx.currentTime);
                gain.gain.setValueAtTime(0.03, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
                osc.start();
                osc.stop(ctx.currentTime + 0.05);
            } else if (type === 'snip') {
                osc.type = 'triangle';
                osc.frequency.setValueAtTime(320, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(960, ctx.currentTime + 0.16);
                gain.gain.setValueAtTime(0.05, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.16);
                osc.start();
                osc.stop(ctx.currentTime + 0.16);
            } else if (type === 'solve' || type === 'success') {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(523.25, ctx.currentTime);
                osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.07);
                osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.14);
                gain.gain.setValueAtTime(0.05, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.25);
                osc.start();
                osc.stop(ctx.currentTime + 0.25);
            } else if (type === 'alert') {
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(350, ctx.currentTime);
                gain.gain.setValueAtTime(0.04, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.12);
                osc.start();
                osc.stop(ctx.currentTime + 0.12);
            }
        } catch {
            // Ignore browser audio playback restrictions
        }
    }, [soundEnabled]);

    // Timer Countdown effect
    useEffect(() => {
        if (!isTimerRunning || timeLeft <= 0) return;
        const interval = setInterval(() => {
            setTimeLeft(prev => Math.max(0, prev - 1));
        }, 1000);
        return () => clearInterval(interval);
    }, [isTimerRunning, timeLeft]);

    const formatTimer = (secs: number) => {
        const m = Math.floor(secs / 60);
        const s = secs % 60;
        return `${m}:${s < 10 ? '0' : ''}${s}`;
    };

    // Mirrors the extension: clipboard delivery really copies the answer, then confirms with a toast.
    const showClipboardToast = (text: string, copy?: string) => {
        const value = copy ?? text.match(/'([^']+)'/)?.[1] ?? text;
        try {
            navigator.clipboard?.writeText(value).catch(() => {});
        } catch {
            // Clipboard access can be blocked by the browser; the toast still shows.
        }
        setClipboardNotice(text);
        playAudio('click');
        setTimeout(() => setClipboardNotice(null), 3000);
    };

    const selectQuestion = (qNum: number) => {
        setActiveQuestion(qNum);
        playAudio('click');
    };

    // Modal focus entry, Tab trap, and focus restore
    useEffect(() => {
        if (isSubmitModalOpen) {
            prevModalOpenRef.current = true;
            const raf = requestAnimationFrame(() => modalCloseRef.current?.focus());
            const trapFocus = (e: KeyboardEvent) => {
                if (e.key !== 'Tab' || !modalRef.current) return;
                const focusables = modalRef.current.querySelectorAll<HTMLElement>(
                    'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
                );
                if (focusables.length === 0) return;
                const first = focusables[0];
                const last = focusables[focusables.length - 1];
                if (e.shiftKey && document.activeElement === first) {
                    e.preventDefault();
                    last.focus();
                } else if (!e.shiftKey && document.activeElement === last) {
                    e.preventDefault();
                    first.focus();
                }
            };
            window.addEventListener('keydown', trapFocus);
            return () => {
                cancelAnimationFrame(raf);
                window.removeEventListener('keydown', trapFocus);
            };
        } else if (prevModalOpenRef.current) {
            prevModalOpenRef.current = false;
            submitBtnRef.current?.focus();
        }
    }, [isSubmitModalOpen]);

    // Keyboard Shortcuts Listener
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const isModifier = e.metaKey || e.ctrlKey;
            
            if ((e.altKey && (e.code === 'KeyS' || e.key.toLowerCase() === 's')) || (isModifier && e.shiftKey && e.key.toLowerCase() === 's')) {
                e.preventDefault();
                setIsSniping(prev => {
                    const next = !prev;
                    if (next) {
                        playAudio('snip');
                        setSnipeBox(null);
                        setSnipResult(null);
                    }
                    return next;
                });
            }

            if (e.altKey && (e.code === 'Digit1' || e.key === '1')) {
                e.preventDefault();
                setDisplayMode('quick');
                playAudio('click');
            }
            if (e.altKey && (e.code === 'Digit2' || e.key === '2')) {
                e.preventDefault();
                setDisplayMode('highlight');
                playAudio('click');
            }
            if (e.altKey && (e.code === 'Digit3' || e.key === '3')) {
                e.preventDefault();
                setDisplayMode('explain');
                playAudio('click');
            }

            if (e.key === 'Escape' && isSubmitModalOpen) {
                setIsSubmitModalOpen(false);
                return;
            }

            if (e.key === 'Escape' && isSniping) {
                setIsSniping(false);
                setIsDragging(false);
                setDragStart(null);
                setCurrentDrag(null);
                setSnipeBox(null);
                playAudio('click');
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isSniping, isSubmitModalOpen, playAudio]);

    // Question Solving Handlers
    const handleSolveQ1 = useCallback(() => {
        if (!isExtensionOn) return;
        setActiveQuestion(1);
        setSolvingId(1);
        playAudio('click');
        const delay = displayMode === 'quick' ? 120 : 400;
        setTimeout(() => {
            setSolvingId(null);
            playAudio('solve');
            if (answerMethod === 'autofill') {
                setQ1State('B');
            } else if (answerMethod === 'highlight') {
                setQ1Highlighted(true);
                setTimeout(() => setQ1Highlighted(false), 4500);
            } else if (answerMethod === 'clipboard') {
                showClipboardToast("Copied: 'ATP production through cellular respiration'");
            }
            if (displayMode === 'explain') {
                setQ1Explain(true);
            }
        }, delay);
    }, [isExtensionOn, displayMode, answerMethod, playAudio]);

    const handleSolveQ2 = useCallback(() => {
        if (!isExtensionOn) return;
        setActiveQuestion(2);
        setSolvingId(2);
        playAudio('click');
        const delay = displayMode === 'quick' ? 120 : 400;
        setTimeout(() => {
            setSolvingId(null);
            playAudio('solve');
            if (answerMethod === 'autofill') {
                setQ2State('true');
            } else if (answerMethod === 'highlight') {
                setQ2Highlighted(true);
                setTimeout(() => setQ2Highlighted(false), 4500);
            } else if (answerMethod === 'clipboard') {
                showClipboardToast("Copied: 'True'");
            }
            if (displayMode === 'explain') {
                setQ2Explain(true);
            }
        }, delay);
    }, [isExtensionOn, displayMode, answerMethod, playAudio]);

    const handleSolveQ3 = useCallback(() => {
        if (!isExtensionOn) return;
        setActiveQuestion(3);
        setSolvingId(3);
        playAudio('click');
        const delay = displayMode === 'quick' ? 120 : 400;
        setTimeout(() => {
            setSolvingId(null);
            playAudio('solve');
            if (answerMethod === 'autofill') {
                setQ3State(['A', 'B', 'D']);
            } else if (answerMethod === 'highlight') {
                setQ3Highlighted(true);
                setTimeout(() => setQ3Highlighted(false), 4500);
            } else if (answerMethod === 'clipboard') {
                showClipboardToast("Copied: 'push(), Stack ADT, pop()'");
            }
            if (displayMode === 'explain') {
                setQ3Explain(true);
            }
        }, delay);
    }, [isExtensionOn, displayMode, answerMethod, playAudio]);

    const handleSolveQ4 = useCallback(() => {
        if (!isExtensionOn) return;
        setActiveQuestion(4);
        setSolvingId(4);
        playAudio('click');
        const delay = displayMode === 'quick' ? 120 : 400;
        setTimeout(() => {
            setSolvingId(null);
            playAudio('solve');
            const answer = "Ionic bonds transfer valence electrons between atoms to form charged ions, whereas covalent bonds share electron pairs between atoms.";
            if (answerMethod === 'autofill' || answerMethod === 'highlight') {
                setQ4Text(answer);
            } else if (answerMethod === 'clipboard') {
                showClipboardToast("Copied short-answer response to clipboard!", answer);
            }
            if (displayMode === 'explain') {
                setQ4Explain(true);
            }
        }, delay);
    }, [isExtensionOn, displayMode, answerMethod, playAudio]);

    const handleSolveQ5 = useCallback(() => {
        if (!isExtensionOn) return;
        setActiveQuestion(5);
        setSolvingId(5);
        playAudio('click');
        const delay = displayMode === 'quick' ? 120 : 450;
        setTimeout(() => {
            setSolvingId(null);
            playAudio('solve');
            if (answerMethod === 'autofill') {
                setQ5State('B');
            } else if (answerMethod === 'highlight') {
                setQ5Highlighted(true);
                setTimeout(() => setQ5Highlighted(false), 4500);
            } else if (answerMethod === 'clipboard') {
                showClipboardToast("Copied: 'c = 10.0, dy/dx = 2.0'");
            }
            if (displayMode === 'explain') {
                setQ5Explain(true);
            }
        }, delay);
    }, [isExtensionOn, displayMode, answerMethod, playAudio]);

    const handleSolveQ6 = useCallback(() => {
        if (!isExtensionOn) return;
        setActiveQuestion(6);
        setSolvingId(6);
        playAudio('click');
        const delay = displayMode === 'quick' ? 120 : 400;
        setTimeout(() => {
            setSolvingId(null);
            playAudio('solve');
            if (answerMethod === 'autofill') {
                setQ6State('canberra');
            } else if (answerMethod === 'highlight') {
                setQ6Highlighted(true);
                setTimeout(() => setQ6Highlighted(false), 4500);
            } else if (answerMethod === 'clipboard') {
                showClipboardToast("Copied: 'Canberra'");
            }
            if (displayMode === 'explain') setQ6Explain(true);
        }, delay);
    }, [isExtensionOn, displayMode, answerMethod, playAudio]);

    const handleSolveQ7 = useCallback(() => {
        if (!isExtensionOn) return;
        setActiveQuestion(7);
        setSolvingId(7);
        playAudio('click');
        const delay = displayMode === 'quick' ? 120 : 400;
        setTimeout(() => {
            setSolvingId(null);
            playAudio('solve');
            if (answerMethod === 'autofill' || answerMethod === 'highlight') {
                setQ7Text('4');
            } else if (answerMethod === 'clipboard') {
                showClipboardToast("Copied: '4'");
            }
            if (displayMode === 'explain') setQ7Explain(true);
        }, delay);
    }, [isExtensionOn, displayMode, answerMethod, playAudio]);

    const handleSolveQ8 = useCallback(() => {
        if (!isExtensionOn) return;
        setActiveQuestion(8);
        setSolvingId(8);
        playAudio('click');
        const delay = displayMode === 'quick' ? 120 : 450;
        setTimeout(() => {
            setSolvingId(null);
            playAudio('solve');
            if (answerMethod === 'autofill') {
                setQ8State(Object.fromEntries(Q8_PAIRS.map((pr) => [pr.term, pr.answer])));
            } else if (answerMethod === 'highlight') {
                setQ8Highlighted(true);
                setTimeout(() => setQ8Highlighted(false), 4500);
            } else if (answerMethod === 'clipboard') {
                showClipboardToast('Copied all four matches to clipboard', Q8_PAIRS.map((pr) => `${pr.term}: ${pr.answer}`).join('\n'));
            }
            if (displayMode === 'explain') setQ8Explain(true);
        }, delay);
    }, [isExtensionOn, displayMode, answerMethod, playAudio]);

    const handleSolveActive = () => {
        if (activeQuestion === 1) handleSolveQ1();
        else if (activeQuestion === 2) handleSolveQ2();
        else if (activeQuestion === 3) handleSolveQ3();
        else if (activeQuestion === 4) handleSolveQ4();
        else if (activeQuestion === 5) handleSolveQ5();
        else if (activeQuestion === 6) handleSolveQ6();
        else if (activeQuestion === 7) handleSolveQ7();
        else handleSolveQ8();
    };

    // Speedrun: Auto-Solve All Questions in Sequence
    const handleSpeedrunAll = () => {
        if (!isExtensionOn || isSpeedrunning) return;
        setIsSpeedrunning(true);
        playAudio('snip');

        const solvers = [handleSolveQ1, handleSolveQ2, handleSolveQ3, handleSolveQ4, handleSolveQ5, handleSolveQ6, handleSolveQ7, handleSolveQ8];
        solvers.forEach((solve, i) => setTimeout(solve, i * 320));
        setTimeout(() => {
            setIsSpeedrunning(false);
            playAudio('success');
        }, solvers.length * 320 + 100);
    };

    // Reset All State
    const handleResetAll = () => {
        playAudio('alert');
        setQ1State(null);
        setQ1Highlighted(false);
        setQ1Explain(false);

        setQ2State(null);
        setQ2Highlighted(false);
        setQ2Explain(false);

        setQ3State([]);
        setQ3Highlighted(false);
        setQ3Explain(false);

        setQ4Text('');
        setQ4Explain(false);

        setQ5State(null);
        setQ5Highlighted(false);
        setQ5Explain(false);

        setQ6State('');
        setQ6Highlighted(false);
        setQ6Explain(false);

        setQ7Text('');
        setQ7Explain(false);

        setQ8State({});
        setQ8Highlighted(false);
        setQ8Explain(false);

        setSnipeBox(null);
        setSnipResult(null);
        setIsSniping(false);
        setHasSubmitted(false);
        setTimeLeft(1694);
        setActiveQuestion(1);
    };

    // Trigger Preset Snipe (Quick Test on Diagram)
    const triggerPresetSnipe = (targetQ: number = 5) => {
        if (!quizAreaRef.current) return;
        setActiveQuestion(targetQ);
        setIsSniping(true);
        playAudio('snip');

        setTimeout(() => {
            const containerRect = quizAreaRef.current?.getBoundingClientRect();
            if (!containerRect) return;

            const relX = Math.max(24, containerRect.width * 0.08);
            const relY = 120;
            const relW = Math.min(containerRect.width - 48, containerRect.width * 0.84);
            const relH = 220;

            setSnipeBox({ x: relX, y: relY, w: relW, h: relH });
            setIsScanning(true);
            playAudio('snip');

            setTimeout(() => {
                setIsScanning(false);
                playAudio('success');
                
                const result: SnipResult = {
                    questionId: 5,
                    title: "Calculus & Geometry OCR",
                    detectedText: "Legs a = 6, b = 8; y = 0.5x² - 2x + 4 at x = 4",
                    answer: "c = 10.0, dy/dx = 2.0 (Option B)",
                    explanation: "c = √(6² + 8²) = 10. Derivative dy/dx = x - 2 = 2.0 at x = 4.",
                                    };
                setSnipResult(result);

                if (answerMethod === 'autofill') {
                    setQ5State('B');
                } else if (answerMethod === 'highlight') {
                    setQ5Highlighted(true);
                    setTimeout(() => setQ5Highlighted(false), 4500);
                } else if (answerMethod === 'clipboard') {
                    showClipboardToast("Copied OCR answer: 'c = 10.0, dy/dx = 2.0'");
                }
                if (displayMode === 'explain') {
                    setQ5Explain(true);
                }

                setTimeout(() => {
                    setIsSniping(false);
                }, 1400);
            }, 800);
        }, 150);
    };

    // Mouse / Touch Drag Handlers for Custom Snipe Bounding Box
    const handleSnipeMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!quizAreaRef.current) return;
        const rect = quizAreaRef.current.getBoundingClientRect();
        const start = {
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        };
        setIsDragging(true);
        setDragStart(start);
        setCurrentDrag(start);
        setSnipeBox(null);
        setSnipResult(null);
        playAudio('click');
    };

    const handleSnipeMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging || !quizAreaRef.current) return;
        const rect = quizAreaRef.current.getBoundingClientRect();
        setCurrentDrag({
            x: Math.max(0, Math.min(rect.width, e.clientX - rect.left)),
            y: Math.max(0, Math.min(rect.height, e.clientY - rect.top)),
        });
    };

    const handleSnipeTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!quizAreaRef.current || e.touches.length === 0) return;
        const touch = e.touches[0];
        const rect = quizAreaRef.current.getBoundingClientRect();
        const start = {
            x: touch.clientX - rect.left,
            y: touch.clientY - rect.top,
        };
        setIsDragging(true);
        setDragStart(start);
        setCurrentDrag(start);
        setSnipeBox(null);
        setSnipResult(null);
        playAudio('click');
    };

    const handleSnipeTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging || !quizAreaRef.current || e.touches.length === 0) return;
        const touch = e.touches[0];
        const rect = quizAreaRef.current.getBoundingClientRect();
        setCurrentDrag({
            x: Math.max(0, Math.min(rect.width, touch.clientX - rect.left)),
            y: Math.max(0, Math.min(rect.height, touch.clientY - rect.top)),
        });
    };

    const handleSnipeMouseUp = () => {
        if (!isDragging || !dragStart || !currentDrag || !quizAreaRef.current) {
            setIsDragging(false);
            return;
        }

        setIsDragging(false);
        const x = Math.min(dragStart.x, currentDrag.x);
        const y = Math.min(dragStart.y, currentDrag.y);
        const w = Math.abs(currentDrag.x - dragStart.x);
        const h = Math.abs(currentDrag.y - dragStart.y);

        if (w < 25 || h < 20) {
            setSnipeBox(null);
            return;
        }

        const box = { x, y, w, h };
        setSnipeBox(box);
        setIsScanning(true);
        playAudio('snip');

        const targetQ = activeQuestion;

        setTimeout(() => {
            setIsScanning(false);
            playAudio('success');

            let detectedText = "";
            let answer = "";
            let explanation = "";

            if (targetQ === 1) {
                handleSolveQ1();
                detectedText = "Mitochondria primary function in eukaryotic cells?";
                answer = "ATP production through cellular respiration";
                explanation = "Generates cellular ATP via aerobic respiration.";
            } else if (targetQ === 2) {
                handleSolveQ2();
                detectedText = "Ivan Pavlov classical conditioning dogs salivation?";
                answer = "True";
                explanation = "Demonstrated conditioned reflexes with auditory stimuli.";
            } else if (targetQ === 3) {
                handleSolveQ3();
                detectedText = "LIFO (Last In, First Out) stack operations?";
                answer = "push(), Stack ADT, pop()";
                explanation = "Stacks push and pop from the top; queues are FIFO.";
            } else if (targetQ === 4) {
                handleSolveQ4();
                detectedText = "Difference between ionic and covalent bonds?";
                answer = "Ionic transfers electrons; covalent shares electron pairs.";
                explanation = "Electronegativity differential dictates transfer vs sharing.";
            } else if (targetQ === 6) {
                handleSolveQ6();
                detectedText = "What is the capital of Australia?";
                answer = "Canberra";
                explanation = "Canberra is the planned capital; Sydney is the largest city.";
            } else if (targetQ === 7) {
                handleSolveQ7();
                detectedText = "Solve for x: 3x + 7 = 19";
                answer = "x = 4";
                explanation = "Subtract 7 to get 3x = 12, then divide by 3.";
            } else if (targetQ === 8) {
                handleSolveQ8();
                detectedText = "Match each organelle with its function";
                answer = "Nucleus: stores DNA; ribosome: builds proteins; mitochondrion: makes ATP; chloroplast: photosynthesis";
                explanation = "Each organelle has one main job in the cell.";
            } else {
                handleSolveQ5();
                detectedText = "Legs a=6, b=8, hypotenuse c and dy/dx at x=4";
                answer = "c = 10.0, dy/dx = 2.0 (Option B)";
                explanation = "c = √(6² + 8²) = 10. dy/dx = x - 2 = 2.0.";
            }

            setSnipResult({
                questionId: targetQ,
                title: `Question ${targetQ} OCR`,
                detectedText,
                answer,
                explanation,
                            });

            setTimeout(() => {
                setIsSniping(false);
            }, 1500);
        }, 750);
    };

    // Explain mode shows a side panel (like the extension's slide-in banner) for the active question.
    const EXPLAIN_PANEL: Record<number, { answer: string; why: string }> = {
        1: { answer: 'ATP production through cellular respiration', why: 'Mitochondria make ATP through the citric acid cycle and oxidative phosphorylation. Ribosomes build proteins and the nucleus handles DNA replication.' },
        2: { answer: 'True', why: "Pavlov's dogs learned to salivate at a sound paired with food. That learned link is classical conditioning." },
        3: { answer: 'push(), Stack ADT, pop()', why: 'A stack is last-in, first-out: push adds to the top and pop removes from the top.' },
        4: { answer: 'Ionic bonds transfer electrons; covalent bonds share them', why: 'Large electronegativity differences move electrons to form ions, while similar atoms share electron pairs.' },
        6: { answer: 'Canberra', why: 'Canberra was purpose-built as the capital. Sydney and Melbourne are larger, which is why they are common wrong answers.' },
        7: { answer: 'x = 4', why: 'Subtract 7 from both sides to get 3x = 12, then divide both sides by 3.' },
        8: { answer: 'Nucleus: stores DNA; Ribosome: builds proteins; Mitochondrion: makes ATP; Chloroplast: photosynthesis', why: 'Each organelle has one main job. The nucleus holds DNA, ribosomes make proteins, mitochondria produce ATP, and chloroplasts capture light for photosynthesis.' },
        5: { answer: 'c = 10.0, dy/dx = 2.0', why: 'c = √(6² + 8²) = 10. Differentiating y = 0.5x² − 2x + 4 gives dy/dx = x − 2, which is 2.0 at x = 4.' },
    };
    const explainOpen: Record<number, boolean> = { 1: q1Explain, 2: q2Explain, 3: q3Explain, 4: q4Explain, 5: q5Explain, 6: q6Explain, 7: q7Explain, 8: q8Explain };
    const explainPanelOpen = displayMode === 'explain' && explainOpen[activeQuestion];
    const dismissExplain = (q: number) => {
        playAudio('click');
        if (q === 1) setQ1Explain(false);
        else if (q === 2) setQ2Explain(false);
        else if (q === 3) setQ3Explain(false);
        else if (q === 4) setQ4Explain(false);
        else if (q === 5) setQ5Explain(false);
        else if (q === 6) setQ6Explain(false);
        else if (q === 7) setQ7Explain(false);
        else setQ8Explain(false);
    };

    const questionsMeta = [
        { id: 1, title: 'Q1', topic: 'Biology', pts: '2 pts', solved: q1Solved },
        { id: 2, title: 'Q2', topic: 'Psych', pts: '1 pt', solved: q2Solved },
        { id: 3, title: 'Q3', topic: 'Comp Sci', pts: '3 pts', solved: q3Solved },
        { id: 4, title: 'Q4', topic: 'Chemistry', pts: '4 pts', solved: q4Solved },
        { id: 5, title: 'Q5', topic: 'Math', pts: '5 pts', solved: q5Solved, isOcr: true },
        { id: 6, title: 'Q6', topic: 'Geography', pts: '2 pts', solved: q6Solved },
        { id: 7, title: 'Q7', topic: 'Algebra', pts: '3 pts', solved: q7Solved },
        { id: 8, title: 'Q8', topic: 'Cell Biology', pts: '4 pts', solved: q8Solved },
    ];

    return (
        <div className="min-h-screen bg-cream text-ink font-sans selection:bg-cobalt/15">
            
            {/* Minimal, Breathable Top Navbar */}
            <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-xl border-b border-ink/[0.08] px-4 sm:px-6 py-3">
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Link prefetch={false} 
                            href="/" 
                            className="inline-flex items-center gap-2 text-xs font-semibold text-ink-secondary hover:text-ink transition-colors px-2.5 py-1.5 rounded-full hover:bg-surface-subtle"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Back</span>
                        </Link>
                        <span className="h-4 w-px bg-ink/[0.12]" />
                        <Link prefetch={false} href="/" className="flex items-center gap-2 group">
                            <div className="w-7 h-7 rounded-full overflow-hidden border border-ink/[0.12] bg-cobalt-soft shrink-0">
                                <img 
                                    src="/images/ghost/ghost_mascot_avatar.jpg" 
                                    alt="ExamGhost Mascot" 
                                    width={28} 
                                    height={28} 
                                    className="w-full h-full object-cover scale-110" 
                                />
                            </div>
                            <span className="font-display font-bold text-base text-ink tracking-tight">
                                ExamGhost
                            </span>
                        </Link>
                    </div>

                    <div className="flex items-center gap-1.5 sm:gap-2.5">
                        <a
                            href="#what-it-does"
                            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-ink-secondary hover:text-ink hover:bg-surface-subtle transition-colors"
                        >
                            <BookOpen className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                            <span>What it does</span>
                        </a>

                        <button
                            type="button"
                            onClick={() => {
                                setSoundEnabled(!soundEnabled);
                                playAudio('click');
                            }}
                            className="p-2 rounded-full bg-paper border border-ink/[0.09] text-ink-secondary hover:text-ink hover:border-ink/[0.20] transition-colors cursor-pointer"
                            aria-label={soundEnabled ? "Mute audio" : "Unmute audio"}
                            title={soundEnabled ? "Sound On" : "Muted"}
                        >
                            {soundEnabled ? (
                                <Volume2 className="w-3.5 h-3.5 text-emeraldBrand" aria-hidden="true" />
                            ) : (
                                <VolumeX className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                            )}
                        </button>

                        <a
                            href={INSTALL_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-dark px-3 sm:px-4 py-2 text-xs font-semibold rounded-full shadow-xs inline-flex items-center gap-2"
                        >
                            <FaChrome className="w-3.5 h-3.5 text-sky" aria-hidden="true" />
                            <span className="sm:hidden">Install</span>
                            <span className="hidden sm:inline">Add to Chrome — Free</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* Clean Editorial Header */}
            <section className="pt-5 sm:pt-7 pb-4 px-4 sm:px-6 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-paper border border-ink/[0.09] shadow-xs text-xs font-medium text-ink-secondary mb-2.5">
                            <span className="w-2 h-2 rounded-full bg-emeraldBrand animate-pulse" aria-hidden="true" />
                            <span>Live sandbox · Nothing to install</span>
                        </div>
                        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-[-0.03em] text-ink leading-tight">
                            Try ExamGhost on a Canvas-style quiz
                        </h1>
                        <p className="aeo-summary text-xs sm:text-sm text-ink-muted mt-1.5 max-w-2xl leading-relaxed">
                            Double-click any question, switch modes with Alt+1 / 2 / 3, or press Alt+S and drag a box around the diagram in Question 5. This is a simulation with pre-written answers.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            type="button"
                            onClick={handleSpeedrunAll}
                            disabled={isSpeedrunning || !isExtensionOn}
                            className="px-4 py-2.5 rounded-full bg-surface-dark hover:bg-ink-secondary text-white text-xs font-semibold transition-all flex items-center gap-2 disabled:opacity-50 shadow-soft cursor-pointer"
                        >
                            <Zap className="w-3.5 h-3.5 text-cobalt-bright" aria-hidden="true" />
                            <span>{isSpeedrunning ? `Solving All ${TOTAL_Q}...` : `Auto-Solve All (${TOTAL_Q})`}</span>
                        </button>

                        <button
                            type="button"
                            onClick={handleResetAll}
                            className="px-3.5 py-2.5 rounded-full bg-paper hover:bg-surface-subtle border border-ink/[0.12] text-ink-secondary hover:text-ink text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                        >
                            <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Reset</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Main 2-Column Interactive Workspace */}
            <main id="main-content" className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                    
                    {/* Left Column (8 Cols): Focused macOS Canvas Window */}
                    <div className="lg:col-span-8">
                        <div 
                            ref={quizAreaRef}
                            className="rounded-2xl sm:rounded-3xl bg-paper border border-ink/[0.09] shadow-lift overflow-hidden relative select-none"
                        >
                            
                            {/* Single Clean macOS Title Bar (Single Line, Zero Wrapping) */}
                            <div className="bg-surface-subtle px-4 sm:px-6 py-3 border-b border-ink/[0.08] flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2 min-w-0">
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57] inline-block shrink-0" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e] inline-block shrink-0" />
                                    <span className="w-2.5 h-2.5 rounded-full bg-[#28c840] inline-block shrink-0" />
                                    <span className="text-xs text-ink-muted font-mono ml-1.5 truncate hidden sm:inline-block">
                                        canvas.edu/quizzes/midterm
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-paper border border-ink/[0.08] text-xs font-mono font-semibold text-ink">
                                        <Clock className="w-3 h-3 text-emeraldBrand" aria-hidden="true" />
                                        <span>{formatTimer(timeLeft)}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Interactive 8-Question Switcher Bar (Full Width, Zero Scrollbar) */}
                            <div className="px-4 sm:px-6 py-2.5 bg-cream/70 border-b border-ink/[0.08] grid grid-cols-4 sm:grid-cols-8 gap-1.5 sm:gap-2">
                                {questionsMeta.map((q) => {
                                    const isActive = activeQuestion === q.id;
                                    return (
                                        <button
                                            key={q.id}
                                            type="button"
                                            onClick={() => selectQuestion(q.id)}
                                            title={`${q.title} · ${q.topic} · ${q.pts}`}
                                            aria-current={isActive ? 'true' : undefined}
                                            className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                                                isActive
                                                    ? 'bg-surface-dark text-white shadow-xs'
                                                    : q.solved
                                                    ? 'bg-emeraldBrand-soft text-ink border border-emeraldBrand/30 hover:bg-emeraldBrand/15'
                                                    : 'bg-paper text-ink-secondary border border-ink/[0.09] hover:border-cobalt/40 hover:text-ink'
                                            }`}
                                        >
                                            <span>{q.title}</span>
                                            
                                            {q.solved && (
                                                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                                                    isActive ? 'bg-emeraldBrand text-white' : 'bg-emeraldBrand text-white'
                                                }`}>
                                                    ✓
                                                </span>
                                            )}
                                            {!q.solved && q.isOcr && (
                                                <span className={`hidden sm:inline-block text-[9px] font-mono font-bold px-1.5 py-0.5 rounded-md shrink-0 ${
                                                    isActive ? 'bg-cobalt text-white' : 'bg-cobalt-soft text-cobalt'
                                                }`}>
                                                    OCR
                                                </span>
                                            )}
                                        </button>
                                    );
                                })}
                            </div>

                            {solvedCount === 0 && (
                                <p className="px-5 sm:px-7 pt-3 text-xs text-ink-muted flex items-center gap-1.5">
                                    <MousePointerClick className="w-3.5 h-3.5 text-cobalt" aria-hidden="true" />
                                    Tip: double-click a question to solve it, or press Alt+S to snip a diagram.
                                </p>
                            )}

                            {/* Focused Single-Question Stage (All 8 remain in DOM) */}
                            <div className={`p-5 sm:p-7 bg-paper flex flex-col justify-between relative transition-[padding] duration-200 ${explainPanelOpen ? 'lg:pr-[312px]' : ''}`}>

                                {/* QUESTION 1: Biology MCQ */}
                                <div 
                                    ref={questionRefs[1]}
                                    onDoubleClick={handleSolveQ1}
                                    className={activeQuestion === 1 ? "block animate-fade-in cursor-pointer" : "hidden"}
                                >
                                    {solvingId === 1 && (
                                        <div className="absolute inset-0 bg-paper/85 backdrop-blur-[2px] z-20 flex items-center justify-center gap-2.5 text-sm font-bold text-ink">
                                            <span className="w-2.5 h-2.5 rounded-full bg-cobalt animate-ping" />
                                            <span>Solving Question 1...</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-ink/[0.08]">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-medium text-ink-muted">
                                                Question 1 of 8 · Cell Biology
                                            </span>
                                            <span className="text-xs bg-surface-subtle px-2.5 py-0.5 rounded-full font-semibold text-ink-secondary whitespace-nowrap">
                                                2.0 pts
                                            </span>
                                        </div>
                                        <button 
                                            type="button"
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ1(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-emeraldBrand-soft hover:bg-emeraldBrand/20 border border-emeraldBrand/25 text-ink font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                                        >
                                            <Sparkles className="w-3.5 h-3.5 text-emeraldBrand" aria-hidden="true" />
                                            <span>{q1Solved ? 'Solved ✓' : 'Solve Question'}</span>
                                        </button>
                                    </div>

                                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-6 leading-snug">
                                        What is the primary function of mitochondria in eukaryotic cells?
                                    </h2>

                                    <div className="space-y-3">
                                        {[
                                            { id: 'A', text: 'Protein synthesis' },
                                            { id: 'B', text: 'ATP production through cellular respiration', correct: true },
                                            { id: 'C', text: 'DNA replication' },
                                            { id: 'D', text: 'Cell membrane transport' }
                                        ].map((opt) => {
                                            const isSelected = q1State === opt.id;
                                            const isGlow = opt.correct && q1Highlighted;
                                            return (
                                                <button
                                                    key={opt.id}
                                                    type="button"
                                                    aria-pressed={isSelected}
                                                    onClick={(e) => { e.stopPropagation(); setQ1State(opt.id); }}
                                                    className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                                                        isSelected 
                                                            ? 'bg-emeraldBrand-soft/55 border-emeraldBrand text-ink font-semibold shadow-xs'
                                                            : isGlow
                                                            ? 'bg-cobalt-soft/75 border-cobalt text-ink font-semibold ring-2 ring-cobalt/25'
                                                            : 'bg-paper border-ink/[0.10] text-ink hover:border-ink/[0.25]'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center font-bold text-[10px] shrink-0 ${
                                                            isSelected ? 'border-emeraldBrand bg-emeraldBrand text-white' : 'border-ink/25 bg-paper'
                                                        }`}>
                                                            {isSelected ? '✓' : ''}
                                                        </span>
                                                        <span>{opt.text}</span>
                                                    </div>
                                                    {isGlow && (
                                                        <span className="text-[11px] font-mono font-semibold text-cobalt bg-cobalt-soft border border-cobalt/20 px-2.5 py-0.5 rounded-full">
                                                            Highlighted
                                                        </span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>

                                </div>

                                {/* QUESTION 2: Psychology True/False */}
                                <div 
                                    ref={questionRefs[2]}
                                    onDoubleClick={handleSolveQ2}
                                    className={activeQuestion === 2 ? "block animate-fade-in cursor-pointer" : "hidden"}
                                >
                                    {solvingId === 2 && (
                                        <div className="absolute inset-0 bg-paper/85 backdrop-blur-[2px] z-20 flex items-center justify-center gap-2.5 text-sm font-bold text-ink">
                                            <span className="w-2.5 h-2.5 rounded-full bg-cobalt animate-ping" />
                                            <span>Solving Question 2...</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-ink/[0.08]">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-medium text-ink-muted">
                                                Question 2 of 8 · Psychology
                                            </span>
                                            <span className="text-xs bg-surface-subtle px-2.5 py-0.5 rounded-full font-semibold text-ink-secondary whitespace-nowrap">
                                                1.0 pt
                                            </span>
                                        </div>
                                        <button 
                                            type="button"
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ2(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-emeraldBrand-soft hover:bg-emeraldBrand/20 border border-emeraldBrand/25 text-ink font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                                        >
                                            <Sparkles className="w-3.5 h-3.5 text-emeraldBrand" aria-hidden="true" />
                                            <span>{q2Solved ? 'Solved ✓' : 'Solve Question'}</span>
                                        </button>
                                    </div>

                                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-6 leading-snug">
                                        Classical conditioning was first described by Ivan Pavlov through his experiments with dogs and conditioned salivation.
                                    </h2>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                        {[
                                            { id: 'true', label: 'True', correct: true },
                                            { id: 'false', label: 'False', correct: false }
                                        ].map((opt) => {
                                            const isSelected = q2State === opt.id;
                                            const isGlow = opt.correct && q2Highlighted;
                                            return (
                                                <button
                                                    key={opt.id}
                                                    type="button"
                                                    aria-pressed={isSelected}
                                                    onClick={(e) => { e.stopPropagation(); setQ2State(opt.id); }}
                                                    className={`p-5 rounded-xl border text-base font-bold transition-all flex items-center justify-between cursor-pointer ${
                                                        isSelected
                                                            ? 'bg-emeraldBrand-soft/55 border-emeraldBrand text-ink shadow-xs'
                                                            : isGlow
                                                            ? 'bg-cobalt-soft/75 border-cobalt text-ink ring-2 ring-cobalt/25'
                                                            : 'bg-paper border-ink/[0.10] text-ink hover:border-ink/[0.25]'
                                                    }`}
                                                >
                                                    <span>{opt.label}</span>
                                                    {isSelected && <span className="text-xs font-mono font-semibold text-emeraldBrand bg-emeraldBrand-soft border border-emeraldBrand/25 px-2.5 py-0.5 rounded-full">✓ Verified</span>}
                                                    {isGlow && <span className="text-xs font-mono font-semibold text-cobalt bg-cobalt-soft border border-cobalt/20 px-2.5 py-0.5 rounded-full">Highlighted</span>}
                                                </button>
                                            );
                                        })}
                                    </div>

                                </div>

                                {/* QUESTION 3: Computer Science Multi-Select */}
                                <div 
                                    ref={questionRefs[3]}
                                    onDoubleClick={handleSolveQ3}
                                    className={activeQuestion === 3 ? "block animate-fade-in cursor-pointer" : "hidden"}
                                >
                                    {solvingId === 3 && (
                                        <div className="absolute inset-0 bg-paper/85 backdrop-blur-[2px] z-20 flex items-center justify-center gap-2.5 text-sm font-bold text-ink">
                                            <span className="w-2.5 h-2.5 rounded-full bg-cobalt animate-ping" />
                                            <span>Solving Question 3...</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-ink/[0.08]">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-medium text-ink-muted">
                                                Question 3 of 8 · Data Structures
                                            </span>
                                            <span className="text-xs bg-surface-subtle px-2.5 py-0.5 rounded-full font-semibold text-ink-secondary whitespace-nowrap">
                                                3.0 pts
                                            </span>
                                        </div>
                                        <button 
                                            type="button"
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ3(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-emeraldBrand-soft hover:bg-emeraldBrand/20 border border-emeraldBrand/25 text-ink font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                                        >
                                            <Sparkles className="w-3.5 h-3.5 text-emeraldBrand" aria-hidden="true" />
                                            <span>{q3Solved ? 'Solved ✓' : 'Solve Question'}</span>
                                        </button>
                                    </div>

                                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-6 leading-snug">
                                        Which of the following relate to a LIFO (Last In, First Out) data structure? Select all that apply.
                                    </h2>

                                    <div className="space-y-3">
                                        {[
                                            { id: 'A', text: 'push() operation (inserts element onto top)', correct: true },
                                            { id: 'B', text: 'Stack abstract data type (call stack)', correct: true },
                                            { id: 'C', text: 'Circular FIFO ring buffer queue', correct: false },
                                            { id: 'D', text: 'pop() operation (removes latest element)', correct: true }
                                        ].map((opt) => {
                                            const isChecked = q3State.includes(opt.id);
                                            const isGlow = opt.correct && q3Highlighted;
                                            return (
                                                <button
                                                    key={opt.id}
                                                    type="button"
                                                    aria-pressed={isChecked}
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setQ3State(prev => isChecked ? prev.filter(x => x !== opt.id) : [...prev, opt.id]);
                                                    }}
                                                    className={`w-full text-left p-4 rounded-xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                                                        isChecked
                                                            ? 'bg-emeraldBrand-soft/55 border-emeraldBrand text-ink font-semibold shadow-xs'
                                                            : isGlow
                                                            ? 'bg-cobalt-soft/75 border-cobalt text-ink font-semibold ring-2 ring-cobalt/25'
                                                            : 'bg-paper border-ink/[0.10] text-ink hover:border-ink/[0.25]'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className={`w-4 h-4 rounded border flex items-center justify-center font-bold text-[10px] shrink-0 ${
                                                            isChecked ? 'border-emeraldBrand bg-emeraldBrand text-white' : 'border-ink/25 bg-paper'
                                                        }`}>
                                                            {isChecked && '✓'}
                                                        </span>
                                                        <span>{opt.text}</span>
                                                    </div>
                                                    {isChecked && opt.correct && (
                                                        <span className="text-[11px] font-mono font-semibold text-emeraldBrand bg-emeraldBrand-soft border border-emeraldBrand/25 px-2.5 py-0.5 rounded-full">
                                                            Correct
                                                        </span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>

                                </div>

                                {/* QUESTION 4: Chemistry Short Answer */}
                                <div 
                                    ref={questionRefs[4]}
                                    onDoubleClick={handleSolveQ4}
                                    className={activeQuestion === 4 ? "block animate-fade-in cursor-pointer" : "hidden"}
                                >
                                    {solvingId === 4 && (
                                        <div className="absolute inset-0 bg-paper/85 backdrop-blur-[2px] z-20 flex items-center justify-center gap-2.5 text-sm font-bold text-ink">
                                            <span className="w-2.5 h-2.5 rounded-full bg-cobalt animate-ping" />
                                            <span>Synthesizing Short Answer...</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-ink/[0.08]">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-medium text-ink-muted">
                                                Question 4 of 8 · Chemistry
                                            </span>
                                            <span className="text-xs bg-surface-subtle px-2.5 py-0.5 rounded-full font-semibold text-ink-secondary whitespace-nowrap">
                                                4.0 pts
                                            </span>
                                        </div>
                                        <button 
                                            type="button"
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ4(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-emeraldBrand-soft hover:bg-emeraldBrand/20 border border-emeraldBrand/25 text-ink font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                                        >
                                            <Sparkles className="w-3.5 h-3.5 text-emeraldBrand" aria-hidden="true" />
                                            <span>{q4Solved ? 'Solved ✓' : 'Solve Question'}</span>
                                        </button>
                                    </div>

                                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-5 leading-snug">
                                        In one sentence, explain the difference between an ionic bond and a covalent bond in terms of electron behavior.
                                    </h2>

                                    <div className="relative">
                                        <textarea
                                            rows={4}
                                            value={q4Text}
                                            onChange={(e) => setQ4Text(e.target.value)}
                                            placeholder="Double-click anywhere or click 'Solve Question' to auto-type the answer..."
                                            className="w-full p-4 rounded-xl border border-ink/[0.14] bg-cream/60 focus:bg-paper text-sm text-ink leading-relaxed focus:outline-none focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt/20 resize-none transition-colors"
                                            aria-label="Short answer essay text field for Question 4"
                                        />
                                        {q4Solved && (
                                            <div className="absolute bottom-3.5 right-3.5 text-[11px] font-mono font-semibold text-emeraldBrand bg-emeraldBrand-soft border border-emeraldBrand/25 px-2.5 py-0.5 rounded-full pointer-events-none">
                                                ✓ Auto-Typed
                                            </div>
                                        )}
                                    </div>

                                </div>

                                {/* QUESTION 5: Visual Diagram & Calculus (Snap-It OCR) */}
                                <div 
                                    ref={questionRefs[5]}
                                    onDoubleClick={handleSolveQ5}
                                    className={activeQuestion === 5 ? "block animate-fade-in cursor-pointer" : "hidden"}
                                >
                                    {solvingId === 5 && (
                                        <div className="absolute inset-0 bg-paper/85 backdrop-blur-[2px] z-20 flex items-center justify-center gap-2.5 text-sm font-bold text-ink">
                                            <span className="w-2.5 h-2.5 rounded-full bg-cobalt animate-ping" />
                                            <span>Running Snap-It Vision OCR...</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-ink/[0.08]">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-mono font-medium text-ink-muted">
                                                Question 5 of 8 · Calculus &amp; Trig
                                            </span>
                                            <span className="text-xs bg-cobalt-soft text-cobalt border border-cobalt/20 px-2.5 py-0.5 rounded-full font-semibold whitespace-nowrap">
                                                5.0 pts · Diagram OCR
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                triggerPresetSnipe(5);
                                            }}
                                            className="px-3.5 py-1.5 rounded-full bg-surface-dark hover:bg-ink-secondary text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-xs cursor-pointer whitespace-nowrap shrink-0"
                                        >
                                            <Crop className="w-3.5 h-3.5 text-cobalt-bright" aria-hidden="true" />
                                            <span>Snip &amp; Solve Diagram</span>
                                        </button>
                                    </div>

                                    <h2 className="font-display text-base sm:text-lg font-bold text-ink mb-4 leading-snug">
                                        Find hypotenuse <span className="font-mono text-cobalt">c</span> (legs <span className="font-mono">a = 6, b = 8</span>) and derivative <span className="font-mono text-emeraldBrand">dy/dx</span> of <span className="font-mono">y = 0.5x² - 2x + 4</span> at <span className="font-mono">x = 4</span>:
                                    </h2>

                                    {/* Clean Diagram Canvas */}
                                    <div className="mb-4 p-3 rounded-xl bg-cream border border-ink/[0.08] flex justify-center">
                                        <svg 
                                            viewBox="0 0 460 155" 
                                            className="w-full max-w-md h-auto"
                                            aria-label="Geometric diagram showing right triangle with legs a=6 and b=8, hypotenuse c, and a parabolic curve"
                                        >
                                            <defs>
                                                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#ece9e2" strokeWidth="1"/>
                                                </pattern>
                                            </defs>
                                            <rect width="460" height="155" fill="url(#grid)" rx="12" />
                                            <line x1="30" y1="135" x2="430" y2="135" stroke="#94a3b8" strokeWidth="1.5" />
                                            <line x1="40" y1="145" x2="40" y2="15" stroke="#94a3b8" strokeWidth="1.5" />
                                            <polygon points="60,135 230,135 230,30" fill="#c4d0f8" fillOpacity="0.55" stroke="#3B5BDB" strokeWidth="2.5" />
                                            <rect x="216" y="121" width="14" height="14" fill="none" stroke="#3B5BDB" strokeWidth="1.5" />
                                            <text x="130" y="150" fontSize="12" fontWeight="bold" fill="#101114" fontFamily="monospace">a = 6</text>
                                            <text x="238" y="88" fontSize="12" fontWeight="bold" fill="#101114" fontFamily="monospace">b = 8</text>
                                            <text x="115" y="75" fontSize="13" fontWeight="bold" fill="#3B5BDB" fontFamily="monospace">c = ?</text>
                                            <path d="M 265,120 Q 335,55 410,22" fill="none" stroke="#0F9D68" strokeWidth="2.5" strokeDasharray="4 2" />
                                            <circle cx="350" cy="45" r="4.5" fill="#0F9D68" />
                                            <text x="310" y="30" fontSize="11" fontWeight="bold" fill="#0F9D68" fontFamily="monospace">dy/dx at x = 4</text>
                                        </svg>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                                        {[
                                            { id: 'A', text: 'c = 9.0, dy/dx = 1.5' },
                                            { id: 'B', text: 'c = 10.0, dy/dx = 2.0', correct: true },
                                            { id: 'C', text: 'c = 12.0, dy/dx = 0.5' },
                                            { id: 'D', text: 'c = 14.0, dy/dx = 3.0' }
                                        ].map((opt) => {
                                            const isSelected = q5State === opt.id;
                                            const isGlow = opt.correct && q5Highlighted;
                                            return (
                                                <button
                                                    key={opt.id}
                                                    type="button"
                                                    aria-pressed={isSelected}
                                                    onClick={(e) => { e.stopPropagation(); setQ5State(opt.id); }}
                                                    className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                                                        isSelected 
                                                            ? 'bg-emeraldBrand-soft/55 border-emeraldBrand text-ink font-semibold shadow-xs'
                                                            : isGlow
                                                            ? 'bg-cobalt-soft/75 border-cobalt text-ink font-semibold ring-2 ring-cobalt/25'
                                                            : 'bg-paper border-ink/[0.10] text-ink hover:border-ink/[0.25]'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-2.5">
                                                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center font-bold text-[10px] shrink-0 ${
                                                            isSelected ? 'border-emeraldBrand bg-emeraldBrand text-white' : 'border-ink/25 bg-paper'
                                                        }`}>
                                                            {isSelected ? '✓' : ''}
                                                        </span>
                                                        <span className="font-mono">{opt.text}</span>
                                                    </div>
                                                    {isSelected && (
                                                        <span className="text-[10px] font-mono font-semibold text-emeraldBrand bg-emeraldBrand-soft border border-emeraldBrand/25 px-2 py-0.5 rounded-full">
                                                            OCR ✓
                                                        </span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>


                                {/* QUESTION 6 */}
                                <div
                                    ref={questionRefs[6]}
                                    onDoubleClick={handleSolveQ6}
                                    className={activeQuestion === 6 ? "block animate-fade-in cursor-pointer" : "hidden"}
                                >
                                    {solvingId === 6 && (
                                        <div className="absolute inset-0 bg-paper/85 backdrop-blur-[2px] z-20 flex items-center justify-center gap-2.5 text-sm font-bold text-ink">
                                            <span className="w-2.5 h-2.5 rounded-full bg-cobalt animate-ping" />
                                            <span>Solving Question 6...</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-ink/[0.08]">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-medium text-ink-muted">
                                                Question 6 of 8 · Geography
                                            </span>
                                            <span className="text-xs bg-surface-subtle px-2.5 py-0.5 rounded-full font-semibold text-ink-secondary whitespace-nowrap">
                                                1.0 pt
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ6(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-emeraldBrand-soft hover:bg-emeraldBrand/20 border border-emeraldBrand/25 text-ink font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                                        >
                                            <Sparkles className="w-3.5 h-3.5 text-emeraldBrand" aria-hidden="true" />
                                            <span>{q6Solved ? 'Solved ✓' : 'Solve Question'}</span>
                                        </button>
                                    </div>

                                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-6 leading-snug">
                                        What is the capital city of Australia?
                                    </h2>

                                    <div className="relative">
                                        <select
                                            value={q6State}
                                            onChange={(e) => setQ6State(e.target.value)}
                                            aria-label="Capital city of Australia"
                                            className={`w-full appearance-none rounded-xl border px-4 py-4 text-base font-medium text-ink cursor-pointer transition-all focus:outline-none focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt/20 ${
                                                q6Solved
                                                    ? 'bg-emeraldBrand-soft/55 border-emeraldBrand'
                                                    : q6Highlighted
                                                    ? 'bg-cobalt-soft/75 border-cobalt ring-2 ring-cobalt/25'
                                                    : 'bg-paper border-ink/[0.14] hover:border-ink/[0.28]'
                                            }`}
                                        >
                                            <option value="">Select an answer…</option>
                                            <option value="sydney">Sydney</option>
                                            <option value="melbourne">Melbourne</option>
                                            <option value="canberra">Canberra</option>
                                            <option value="perth">Perth</option>
                                        </select>
                                        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted" aria-hidden="true" />
                                        {q6Solved && (
                                            <span className="absolute right-11 top-1/2 -translate-y-1/2 text-[11px] font-mono font-semibold text-emeraldBrand bg-emeraldBrand-soft border border-emeraldBrand/25 px-2.5 py-0.5 rounded-full pointer-events-none">✓ Selected</span>
                                        )}
                                        {q6Highlighted && !q6Solved && (
                                            <span className="absolute right-11 top-1/2 -translate-y-1/2 text-[11px] font-mono font-semibold text-cobalt bg-cobalt-soft border border-cobalt/20 px-2.5 py-0.5 rounded-full pointer-events-none">Highlighted: Canberra</span>
                                        )}
                                    </div>
                                </div>

                                {/* QUESTION 7 */}
                                <div
                                    ref={questionRefs[7]}
                                    onDoubleClick={handleSolveQ7}
                                    className={activeQuestion === 7 ? "block animate-fade-in cursor-pointer" : "hidden"}
                                >
                                    {solvingId === 7 && (
                                        <div className="absolute inset-0 bg-paper/85 backdrop-blur-[2px] z-20 flex items-center justify-center gap-2.5 text-sm font-bold text-ink">
                                            <span className="w-2.5 h-2.5 rounded-full bg-cobalt animate-ping" />
                                            <span>Solving Question 7...</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-ink/[0.08]">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-medium text-ink-muted">
                                                Question 7 of 8 · Algebra
                                            </span>
                                            <span className="text-xs bg-surface-subtle px-2.5 py-0.5 rounded-full font-semibold text-ink-secondary whitespace-nowrap">
                                                3.0 pts
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ7(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-emeraldBrand-soft hover:bg-emeraldBrand/20 border border-emeraldBrand/25 text-ink font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                                        >
                                            <Sparkles className="w-3.5 h-3.5 text-emeraldBrand" aria-hidden="true" />
                                            <span>{q7Solved ? 'Solved ✓' : 'Solve Question'}</span>
                                        </button>
                                    </div>

                                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-6 leading-snug">
                                        Solve for x: 3x + 7 = 19
                                    </h2>

                                    <div className="flex items-center gap-3 text-lg font-mono text-ink">
                                        <span>x =</span>
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            value={q7Text}
                                            onChange={(e) => setQ7Text(e.target.value)}
                                            placeholder="?"
                                            aria-label="Answer for x"
                                            className={`w-28 rounded-xl border px-4 py-3 text-center text-lg font-semibold focus:outline-none focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt/20 transition-colors ${
                                                q7Solved ? 'bg-emeraldBrand-soft/55 border-emeraldBrand' : 'bg-paper border-ink/[0.15]'
                                            }`}
                                        />
                                        {q7Solved && (
                                            <span className="text-[11px] font-mono font-semibold text-emeraldBrand bg-emeraldBrand-soft border border-emeraldBrand/25 px-2.5 py-0.5 rounded-full">✓ Filled in</span>
                                        )}
                                    </div>
                                </div>

                                {/* QUESTION 8 */}
                                <div
                                    ref={questionRefs[8]}
                                    onDoubleClick={handleSolveQ8}
                                    className={activeQuestion === 8 ? "block animate-fade-in cursor-pointer" : "hidden"}
                                >
                                    {solvingId === 8 && (
                                        <div className="absolute inset-0 bg-paper/85 backdrop-blur-[2px] z-20 flex items-center justify-center gap-2.5 text-sm font-bold text-ink">
                                            <span className="w-2.5 h-2.5 rounded-full bg-cobalt animate-ping" />
                                            <span>Solving Question 8...</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-ink/[0.08]">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-medium text-ink-muted">
                                                Question 8 of 8 · Cell Biology
                                            </span>
                                            <span className="text-xs bg-surface-subtle px-2.5 py-0.5 rounded-full font-semibold text-ink-secondary whitespace-nowrap">
                                                4.0 pts
                                            </span>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ8(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-emeraldBrand-soft hover:bg-emeraldBrand/20 border border-emeraldBrand/25 text-ink font-semibold text-xs transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                                        >
                                            <Sparkles className="w-3.5 h-3.5 text-emeraldBrand" aria-hidden="true" />
                                            <span>{q8Solved ? 'Solved ✓' : 'Solve Question'}</span>
                                        </button>
                                    </div>

                                    <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-5 leading-snug">
                                        Match each organelle with its main function.
                                    </h2>

                                    <div className="space-y-3">
                                        {Q8_PAIRS.map((pr) => {
                                            const val = q8State[pr.term] || '';
                                            const ok = val === pr.answer;
                                            return (
                                                <div key={pr.term} className="grid grid-cols-1 sm:grid-cols-[150px_1fr] items-center gap-2 sm:gap-4">
                                                    <label htmlFor={`q8-${pr.term}`} className="text-sm font-semibold text-ink">{pr.term}</label>
                                                    <div className="relative">
                                                        <select
                                                            id={`q8-${pr.term}`}
                                                            value={val}
                                                            onChange={(e) => setQ8State((prev) => ({ ...prev, [pr.term]: e.target.value }))}
                                                            className={`w-full appearance-none rounded-xl border px-3.5 py-2.5 text-sm cursor-pointer focus:outline-none focus-visible:border-cobalt focus-visible:ring-2 focus-visible:ring-cobalt/20 transition-all ${
                                                                ok
                                                                    ? 'bg-emeraldBrand-soft/55 border-emeraldBrand font-semibold'
                                                                    : q8Highlighted
                                                                    ? 'bg-cobalt-soft/75 border-cobalt ring-2 ring-cobalt/25'
                                                                    : 'bg-paper border-ink/[0.14] hover:border-ink/[0.28]'
                                                            }`}
                                                        >
                                                            <option value="">Select function…</option>
                                                            {Q8_PAIRS.map((o) => (
                                                                <option key={o.answer} value={o.answer}>{o.answer}</option>
                                                            ))}
                                                        </select>
                                                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted" aria-hidden="true" />
                                                        {q8Highlighted && !ok && (
                                                            <span className="absolute right-9 top-1/2 -translate-y-1/2 hidden sm:inline text-[10px] font-mono font-semibold text-cobalt bg-cobalt-soft border border-cobalt/20 px-2 py-0.5 rounded-full pointer-events-none">{pr.answer}</span>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                            </div>

                            {/* Explain-mode side panel (slides in like the extension's banner) */}
                            {displayMode === 'explain' && explainOpen[activeQuestion] && (
                                <aside
                                    className="animate-fade-in mx-4 mb-4 lg:mx-0 lg:mb-0 lg:absolute lg:z-30 lg:right-4 lg:top-[150px] lg:w-[272px] rounded-2xl dark-surface bg-surface-dark-elevated text-white p-4 surface-dark-card border border-white/10"
                                    aria-label="ExamGhost explanation"
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="w-5 h-5 rounded-full overflow-hidden bg-cobalt-soft shrink-0">
                                            <img src="/images/ghost/ghost_mascot_avatar.jpg" alt="" width={20} height={20} className="w-full h-full object-cover scale-110" />
                                        </span>
                                        <span className="text-xs font-semibold">ExamGhost</span>
                                        <span className="ml-auto text-[10px] font-semibold bg-emeraldBrand/20 text-[#6EE7B7] rounded-full px-2 py-0.5">Solved</span>
                                        <button type="button" onClick={() => dismissExplain(activeQuestion)} className="p-1 -mr-1 rounded hover:bg-white/10 cursor-pointer" aria-label="Close explanation">
                                            <X className="w-3.5 h-3.5" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <p className="text-[11px] text-white/55 mb-1">Answer</p>
                                    <p className="rounded-lg bg-white/[0.08] border border-white/10 px-3 py-2 text-[13px] font-semibold mb-3">{EXPLAIN_PANEL[activeQuestion].answer}</p>
                                    <p className="text-[12px] leading-relaxed text-white/75">{EXPLAIN_PANEL[activeQuestion].why}</p>
                                </aside>
                            )}

                            {/* Clean Bottom Question Pagination & Submit Bar */}
                            <div className="px-5 sm:px-6 py-4 bg-surface-subtle/80 border-t border-ink/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs">
                                <div className="flex items-center gap-2">
                                    <button
                                        type="button"
                                        onClick={() => selectQuestion(Math.max(1, activeQuestion - 1))}
                                        disabled={activeQuestion === 1}
                                        className="px-3.5 py-2 rounded-xl bg-paper border border-ink/[0.09] text-ink font-semibold hover:bg-surface-subtle disabled:opacity-40 transition-colors flex items-center gap-1 cursor-pointer"
                                    >
                                        <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
                                        <span>Prev</span>
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => selectQuestion(Math.min(TOTAL_Q, activeQuestion + 1))}
                                        disabled={activeQuestion === TOTAL_Q}
                                        className="px-3.5 py-2 rounded-xl bg-paper border border-ink/[0.09] text-ink font-semibold hover:bg-surface-subtle disabled:opacity-40 transition-colors flex items-center gap-1 cursor-pointer"
                                    >
                                        <span>Next Question</span>
                                        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="hidden sm:block w-24 h-1.5 rounded-full bg-ink/10 overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={TOTAL_Q} aria-valuenow={solvedCount} aria-label="Questions solved">
                                        <span className="block h-full bg-emeraldBrand rounded-full transition-all duration-500" style={{ width: `${(solvedCount / TOTAL_Q) * 100}%` }} />
                                    </span>
                                    <span className="font-mono font-semibold text-ink-secondary">
                                        {solvedCount}/{TOTAL_Q} Solved · <strong className="text-ink">{earnedPoints}/{totalPoints} pts</strong>
                                    </span>
                                    <button
                                        ref={submitBtnRef}
                                        type="button"
                                        onClick={() => {
                                            playAudio('click');
                                            setIsSubmitModalOpen(true);
                                        }}
                                        className="px-4 py-2 rounded-xl bg-surface-dark hover:bg-ink-secondary text-white font-semibold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                                    >
                                        <CheckCircle2 className="w-3.5 h-3.5 text-emeraldBrand" aria-hidden="true" />
                                        <span>Submit Quiz</span>
                                    </button>
                                </div>
                            </div>

                            {/* Interactive In-Page Snipe Overlay */}
                            {isSniping && (
                                <div 
                                    className="dark-surface absolute inset-0 z-40 cursor-crosshair bg-surface-dark/45 backdrop-blur-[1px] select-none touch-none"
                                    onMouseDown={handleSnipeMouseDown}
                                    onMouseMove={handleSnipeMouseMove}
                                    onMouseUp={handleSnipeMouseUp}
                                    onTouchStart={handleSnipeTouchStart}
                                    onTouchMove={handleSnipeTouchMove}
                                    onTouchEnd={handleSnipeMouseUp}
                                    role="region"
                                    aria-label="Snap-It Snipe Tool Interactive Selection Canvas"
                                >
                                    <div className="sticky top-4 z-50 flex flex-col items-center gap-2 pointer-events-none px-3">
                                        <div className="pointer-events-auto px-4 py-2 rounded-full bg-surface-dark text-white text-xs font-semibold shadow-lift border border-white/15 flex items-center gap-2.5">
                                            <span className="w-2 h-2 rounded-full bg-cobalt-bright animate-ping shrink-0" />
                                            <span>Drag a box over any question or diagram to solve</span>
                                            <button
                                                type="button"
                                                onMouseDown={(e) => e.stopPropagation()}
                                                onClick={() => {
                                                    setIsSniping(false);
                                                    setSnipeBox(null);
                                                    playAudio('click');
                                                }}
                                                className="px-2 py-0.5 rounded bg-white/15 hover:bg-white/25 text-white text-[11px] font-mono cursor-pointer"
                                            >
                                                Esc
                                            </button>
                                        </div>
                                    </div>

                                    {isDragging && dragStart && currentDrag && (
                                        <div 
                                            className="absolute border-2 border-cobalt-bright bg-cobalt-bright/15 pointer-events-none"
                                            style={{
                                                left: Math.min(dragStart.x, currentDrag.x),
                                                top: Math.min(dragStart.y, currentDrag.y),
                                                width: Math.abs(currentDrag.x - dragStart.x),
                                                height: Math.abs(currentDrag.y - dragStart.y),
                                            }}
                                        >
                                            <span className="absolute -top-1 -left-1 w-2 h-2 bg-paper border border-cobalt-bright" />
                                            <span className="absolute -top-1 -right-1 w-2 h-2 bg-paper border border-cobalt-bright" />
                                            <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-paper border border-cobalt-bright" />
                                            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-paper border border-cobalt-bright" />
                                        </div>
                                    )}

                                    {snipeBox && (
                                        <div
                                            className="absolute border-2 border-cobalt-bright bg-cobalt-bright/10 overflow-hidden"
                                            style={{
                                                left: snipeBox.x,
                                                top: snipeBox.y,
                                                width: snipeBox.w,
                                                height: snipeBox.h,
                                            }}
                                        >
                                            {isScanning && (
                                                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-cobalt-bright via-sky to-cobalt-bright animate-laser-scan" />
                                            )}
                                            <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-surface-dark border border-white/15 text-[10px] font-mono font-semibold text-white">
                                                {isScanning ? "Reading screenshot…" : "✓ Solved"}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Right Column (4 Cols): Single Unified ExamGhost HUD Card */}
                    <div className="lg:col-span-4 space-y-4">
                        <div className="rounded-2xl bg-paper border border-ink/[0.09] p-6 surface-card space-y-5">
                            
                            {/* HUD Header & Master Toggle */}
                            <div className="flex items-center justify-between pb-4 border-b border-ink/[0.08]">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl overflow-hidden border border-ink/[0.10] bg-cobalt-soft shrink-0">
                                        <img src="/images/ghost/ghost_peace.jpg" alt="ExamGhost HUD" width={40} height={40} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <span className="font-display font-bold text-base text-ink block leading-none">
                                            ExamGhost HUD
                                        </span>
                                        <span className={`text-xs font-semibold flex items-center gap-1.5 mt-1 ${isExtensionOn ? 'text-emeraldBrand' : 'text-ink-muted'}`}>
                                            <span className={`w-2 h-2 rounded-full ${isExtensionOn ? 'bg-emeraldBrand animate-pulse' : 'bg-ink-muted'}`} />
                                            <span>{isExtensionOn ? 'Extension Active' : 'Paused'}</span>
                                        </span>
                                    </div>
                                </div>

                                <button
                                    type="button"
                                    role="switch"
                                    aria-checked={isExtensionOn}
                                    onClick={() => {
                                        setIsExtensionOn(!isExtensionOn);
                                        playAudio('click');
                                    }}
                                    className={`w-11 h-6 rounded-full p-0.5 transition-colors cursor-pointer ${
                                        isExtensionOn ? 'bg-surface-dark' : 'bg-ink/20'
                                    }`}
                                    aria-label="Toggle Extension Master Power"
                                >
                                    <div className={`w-5 h-5 rounded-full bg-paper shadow-xs transition-transform ${
                                        isExtensionOn ? 'translate-x-5' : 'translate-x-0'
                                    }`} />
                                </button>
                            </div>

                            {/* Display Mode Selector */}
                            <div className="space-y-2">
                                <span id="solver-mode-label" className="text-xs font-semibold text-ink-muted block">
                                    1. Solver mode (Alt+1 / 2 / 3)
                                </span>
                                <div role="radiogroup" aria-labelledby="solver-mode-label" className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-surface-subtle border border-ink/[0.07] text-xs font-semibold">
                                    {[
                                        { id: 'quick', label: 'Quick', key: 'Alt+1' },
                                        { id: 'highlight', label: 'Highlight', key: 'Alt+2' },
                                        { id: 'explain', label: 'Explain', key: 'Alt+3' }
                                    ].map((m) => (
                                        <button
                                            key={m.id}
                                            type="button"
                                            role="radio"
                                            aria-checked={displayMode === m.id}
                                            onClick={() => {
                                                setDisplayMode(m.id as 'quick' | 'highlight' | 'explain');
                                                playAudio('click');
                                            }}
                                            className={`py-2 rounded-lg transition-all cursor-pointer flex flex-col items-center justify-center leading-tight ${
                                                displayMode === m.id ? 'bg-paper text-ink font-bold shadow-xs border border-ink/[0.08]' : 'text-ink-secondary hover:text-ink'
                                            }`}
                                        >
                                            <span>{m.label}</span>
                                            <span className="text-[10px] font-mono text-ink-muted mt-0.5">{m.key}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Answer Method Selector */}
                            <div className="space-y-2">
                                <span id="answer-delivery-label" className="text-xs font-semibold text-ink-muted block">
                                    2. Answer delivery
                                </span>
                                <div role="radiogroup" aria-labelledby="answer-delivery-label" className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-surface-subtle border border-ink/[0.07] text-xs font-semibold">
                                    {[
                                        { id: 'autofill', label: 'Auto-fill' },
                                        { id: 'highlight', label: 'Highlight' },
                                        { id: 'clipboard', label: 'Clipboard' }
                                    ].map((met) => (
                                        <button
                                            key={met.id}
                                            type="button"
                                            role="radio"
                                            aria-checked={answerMethod === met.id}
                                            onClick={() => {
                                                setAnswerMethod(met.id as 'autofill' | 'highlight' | 'clipboard');
                                                playAudio('click');
                                            }}
                                            className={`py-2 rounded-lg transition-all cursor-pointer ${
                                                answerMethod === met.id ? 'bg-paper text-ink font-bold shadow-xs border border-ink/[0.08]' : 'text-ink-secondary hover:text-ink'
                                            }`}
                                        >
                                            {met.label}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Primary Action Buttons */}
                            <div className="pt-2 space-y-2.5">
                                <button
                                    type="button"
                                    onClick={handleSolveActive}
                                    disabled={!isExtensionOn}
                                    className="w-full py-3 rounded-xl bg-emeraldBrand-soft hover:bg-emeraldBrand/20 border border-emeraldBrand/25 text-ink text-xs font-semibold transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                                >
                                    <Sparkles className="w-4 h-4 text-emeraldBrand" aria-hidden="true" />
                                    <span>Solve Question {activeQuestion} Now</span>
                                </button>

                                <button
                                    type="button"
                                    onClick={() => triggerPresetSnipe(5)}
                                    className="w-full py-3 rounded-xl bg-surface-dark hover:bg-ink-secondary text-white text-xs font-semibold transition-all flex items-center justify-center gap-2 shadow-xs cursor-pointer"
                                >
                                    <Crop className="w-3.5 h-3.5 text-cobalt-bright" aria-hidden="true" />
                                    <span>Snip Q5 Math Diagram</span>
                                    <kbd className="kbd-key-dark">
                                        Alt+S
                                    </kbd>
                                </button>
                            </div>

                            {/* Compact Hotkey Footer */}
                            <div className="pt-3 border-t border-ink/[0.08] flex items-center justify-between text-[11px] text-ink-muted">
                                <span>Diagram Snip Shortcut</span>
                                <kbd className="kbd-key">
                                    Alt + S
                                </kbd>
                            </div>
                        </div>

                        {/* Live OCR Result Toast (Only shown after snipping) */}
                        {snipResult && (
                            <div className="rounded-2xl bg-paper border border-emeraldBrand/40 p-4 shadow-soft flex items-center justify-between gap-3 animate-fade-in">
                                <div className="min-w-0">
                                    <span className="text-[11px] font-mono font-semibold text-emeraldBrand block">
                                        ✓ Snip solved
                                    </span>
                                    <p className="text-xs font-bold text-ink truncate mt-0.5">
                                        {snipResult.answer}
                                    </p>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setSnipResult(null)}
                                    className="p-1 rounded-lg hover:bg-surface-subtle text-ink-muted shrink-0 cursor-pointer"
                                    aria-label="Dismiss OCR result"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        )}

                        {/* Clipboard Toast */}
                        {clipboardNotice && (
                            <div role="status" aria-live="polite" className="p-3.5 rounded-xl bg-surface-dark text-white text-xs font-semibold flex items-center gap-2 shadow-soft animate-fade-in">
                                <Check className="w-4 h-4 text-emeraldBrand shrink-0" aria-hidden="true" />
                                <span>{clipboardNotice}</span>
                            </div>
                        )}
                    </div>

                </div>
            </main>

            {/* What the extension does (matches the extension's real behaviour) */}
            <section id="what-it-does" className="py-16 sm:py-20 bg-surface-subtle/75 border-y border-ink/[0.08] scroll-mt-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-[-0.03em] text-ink leading-[1.05] mb-3">
                            What you just tried
                        </h2>
                        <p className="text-base sm:text-lg text-ink-muted">
                            The same controls the Chrome extension gives you on a real quiz page.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/[0.08] rounded-2xl border border-ink/[0.09] overflow-hidden shadow-xs">
                        {[
                            { icon: MousePointerClick, title: 'Double-click to solve', body: 'Double-click a question and the answer lands on the page. Multiple choice, true/false, multi-select, dropdowns and short answers are all handled.' },
                            { icon: Sparkles, title: 'Three modes (Alt+1 / 2 / 3)', body: 'Quick (Alt+1) applies the answer immediately with no panel. Highlight (Alt+2) marks the right option with a small ✓. Explain (Alt+3) adds a side panel with the reasoning.' },
                            { icon: Check, title: 'Three ways to deliver', body: 'Auto-fill selects the answer for you, Highlight marks it so you click it yourself, and Clipboard copies it to paste into a written answer.' },
                            { icon: Crop, title: 'Snap-It (Alt+S)', body: 'Drag a box around a graph, diagram or image-based question. The extension reads the screenshot and returns the answer with the working.' },
                            { icon: ScrollText, title: 'Scan the whole page', body: 'Click Scan page & answer in the popup and the extension scrolls the page, reads every question and fills answers in batches.' },
                            { icon: Power, title: 'Master on/off switch', body: 'One toggle in the extension popup pauses everything, so shortcuts and double-click do nothing while you browse normally.' },
                        ].map((c) => {
                            const Icon = c.icon;
                            return (
                                <article key={c.title} className="bg-paper p-6 hover:bg-surface-subtle/40 transition-colors">
                                    <span className="grid place-items-center w-9 h-9 rounded-lg bg-surface-subtle border border-ink/[0.08] text-ink mb-4">
                                        <Icon className="w-4 h-4" strokeWidth={1.9} aria-hidden="true" />
                                    </span>
                                    <h3 className="font-display text-lg font-bold text-ink mb-1.5">{c.title}</h3>
                                    <p className="text-[15px] text-ink-muted leading-relaxed">{c.body}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="demo-faq" className="py-16 sm:py-20 bg-paper border-b border-ink/[0.08] scroll-mt-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.03em] text-ink text-center mb-8">Questions</h2>
                    <div className="divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
                        {DEMO_FAQS.map((f) => (
                            <details key={f.q} className="group py-4 sm:py-5">
                                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-semibold text-ink [&::-webkit-details-marker]:hidden">
                                    <h3 className="text-base sm:text-[17px] leading-snug group-hover:text-cobalt transition-colors">{f.q}</h3>
                                    <span className="w-8 h-8 rounded-full bg-surface-subtle border border-ink/[0.08] text-ink-muted grid place-items-center shrink-0 transition-colors group-open:bg-surface-dark group-open:text-white group-open:border-surface-dark">
                                        <ChevronDown className="w-4 h-4 transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
                                    </span>
                                </summary>
                                <p className="mt-3 pr-10 text-[15px] text-ink-muted leading-relaxed">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCta />


            {/* Canvas Submit Quiz Confirmation Modal */}
            {isSubmitModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-surface-dark/60 backdrop-blur-sm animate-fade-in"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="submit-modal-title"
                    onClick={(e) => {
                        if (e.target === e.currentTarget) setIsSubmitModalOpen(false);
                    }}
                >
                    <div ref={modalRef} className="bg-paper rounded-2xl max-w-md w-full p-6 shadow-lift border border-ink/[0.10] space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-ink/[0.08]">
                            <div className="flex items-center gap-2 text-ink font-bold text-sm">
                                <GraduationCap className="w-4 h-4 text-emeraldBrand" aria-hidden="true" />
                                <span id="submit-modal-title">Quiz Submission Summary</span>
                            </div>
                            <button
                                ref={modalCloseRef}
                                type="button"
                                onClick={() => setIsSubmitModalOpen(false)}
                                className="p-1.5 rounded-lg hover:bg-surface-subtle text-ink-muted hover:text-ink cursor-pointer"
                                aria-label="Close modal"
                            >
                                <X className="w-4 h-4" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="text-center py-3 space-y-2">
                            <div className="w-12 h-12 rounded-2xl bg-emeraldBrand-soft text-emeraldBrand flex items-center justify-center mx-auto text-xl font-bold">
                                ✓
                            </div>
                            <h4 className="font-display text-xl font-bold text-ink">
                                {solvedCount === TOTAL_Q ? `Perfect Score: ${totalPoints} / ${totalPoints} pts` : `${earnedPoints} / ${totalPoints} Points`}
                            </h4>
                            <p className="text-xs text-ink-secondary max-w-xs mx-auto">
                                Solved {solvedCount} of {TOTAL_Q} questions right on the page with ExamGhost.
                            </p>
                        </div>

                        <div className="flex items-center gap-2.5 pt-1">
                            <button
                                type="button"
                                onClick={() => {
                                    setHasSubmitted(true);
                                    setIsSubmitModalOpen(false);
                                    playAudio('success');
                                }}
                                className="flex-1 py-2.5 rounded-xl bg-surface-dark text-white text-xs font-semibold hover:bg-ink-secondary transition-colors cursor-pointer"
                            >
                                Done
                            </button>
                            <a
                                href={INSTALL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-2.5 rounded-xl bg-emeraldBrand-soft hover:bg-emeraldBrand/20 border border-emeraldBrand/25 text-ink text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                            >
                                <FaChrome className="w-3.5 h-3.5" aria-hidden="true" />
                                <span>Add to Chrome</span>
                            </a>
                        </div>
                    </div>
                </div>
            )}

            <Footer hideCta />
        </div>
    );
}
