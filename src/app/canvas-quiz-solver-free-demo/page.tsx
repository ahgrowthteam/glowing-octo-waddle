'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import FinalCta from '@/components/home/FinalCta';
import { DEMO_FAQS } from './demoFaqs';
import { INSTALL_URL } from '@/components/home/config';
import { 
    Check, Sparkles, CheckCircle2, Lock, 
    RefreshCw, ChevronRight, ChevronLeft, ArrowLeft, ArrowRight, BookOpen, ShieldCheck, Clock, Crop, 
    Volume2, VolumeX, Flag, Zap, X, GraduationCap, ChevronDown, MousePointerClick, ScrollText, Power
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
    // Active Question Tab (1 to 5) — keeps only 1 question visible at a time for zero visual clutter
    const [activeQuestion, setActiveQuestion] = useState<number>(1);

    // Simulator Mode Controls
    const [displayMode, setDisplayMode] = useState<'invisible' | 'stealth' | 'explain'>('stealth');
    const [answerMethod, setAnswerMethod] = useState<'autofill' | 'highlight' | 'clipboard'>('autofill');
    const [isExtensionOn, setIsExtensionOn] = useState(true);
    const [soundEnabled, setSoundEnabled] = useState(true);

    // Canvas Exam Time & State
    const [timeLeft, setTimeLeft] = useState(1694); // 28 mins 14 secs
    const [isTimerRunning, setIsTimerRunning] = useState(true);
    const [flaggedQuestions, setFlaggedQuestions] = useState<number[]>([]);
    const [isSubmitModalOpen, setIsSubmitModalOpen] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

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

    const toggleFlag = (qNum: number) => {
        playAudio('click');
        setFlaggedQuestions(prev => 
            prev.includes(qNum) ? prev.filter(n => n !== qNum) : [...prev, qNum]
        );
    };

    const selectQuestion = (qNum: number) => {
        setActiveQuestion(qNum);
        playAudio('click');
    };

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
                setDisplayMode('invisible');
                playAudio('click');
            }
            if (e.altKey && (e.code === 'Digit2' || e.key === '2')) {
                e.preventDefault();
                setDisplayMode('stealth');
                playAudio('click');
            }
            if (e.altKey && (e.code === 'Digit3' || e.key === '3')) {
                e.preventDefault();
                setDisplayMode('explain');
                playAudio('click');
            }

            if (isModifier && e.shiftKey && e.key.toLowerCase() === 'u') {
                e.preventDefault();
                setIsExtensionOn(prev => {
                    playAudio('click');
                    return !prev;
                });
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
        const delay = displayMode === 'invisible' ? 120 : 400;
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
        const delay = displayMode === 'invisible' ? 120 : 400;
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
        const delay = displayMode === 'invisible' ? 120 : 400;
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
        const delay = displayMode === 'invisible' ? 120 : 400;
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
        const delay = displayMode === 'invisible' ? 120 : 450;
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
        const delay = displayMode === 'invisible' ? 120 : 400;
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
        const delay = displayMode === 'invisible' ? 120 : 400;
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
        const delay = displayMode === 'invisible' ? 120 : 450;
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
        setFlaggedQuestions([]);
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
        <div className="min-h-screen bg-cream text-ink font-sans selection:bg-emerald-500/20">
            
            {/* Minimal, Breathable Top Navbar */}
            <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-black/6 px-4 sm:px-6 py-3">
                <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <Link prefetch={false} 
                            href="/" 
                            className="inline-flex items-center gap-2 text-xs font-semibold text-ink-secondary hover:text-ink transition-colors px-2.5 py-1.5 rounded-full hover:bg-black/5"
                        >
                            <ArrowLeft className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>Back</span>
                        </Link>
                        <span className="h-4 w-px bg-black/10" />
                        <Link prefetch={false} href="/" className="flex items-center gap-2 group">
                            <div className="w-7 h-7 rounded-full overflow-hidden border border-black/10 bg-[#c4d0f8] shrink-0">
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
                            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-ink-secondary hover:text-ink hover:bg-black/5 transition-colors"
                        >
                            <BookOpen className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                            <span>What it does</span>
                        </a>

                        <button
                            onClick={() => {
                                setSoundEnabled(!soundEnabled);
                                playAudio('click');
                            }}
                            className="p-2 rounded-full bg-white border border-black/8 text-ink-secondary hover:text-ink transition-colors cursor-pointer"
                            aria-label={soundEnabled ? "Mute audio" : "Unmute audio"}
                            title={soundEnabled ? "Sound On" : "Muted"}
                        >
                            {soundEnabled ? (
                                <Volume2 className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
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
                            <FaChrome className="w-3.5 h-3.5 text-[#bfe3f6]" aria-hidden="true" />
                            <span className="sm:hidden">Install</span>
                            <span className="hidden sm:inline">Add to Chrome — Free</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* Clean Editorial Header */}
            <section className="pt-5 sm:pt-6 pb-4 px-4 sm:px-6 max-w-6xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/8 shadow-2xs text-[11px] font-semibold text-ink mb-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                            <span>LIVE SANDBOX · NOTHING TO INSTALL</span>
                        </div>
                        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-ink leading-tight">
                            Try ExamGhost on a Canvas-style quiz
                        </h1>
                        <p className="aeo-summary text-xs sm:text-sm text-ink-muted mt-1.5 max-w-2xl leading-relaxed">
                            Double-click any question, switch modes with Alt+1 / 2 / 3, or press Alt+S and drag a box around the diagram in Question 5. This is a simulation with pre-written answers.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            onClick={handleSpeedrunAll}
                            disabled={isSpeedrunning || !isExtensionOn}
                            className="px-4 py-2.5 rounded-full bg-ink hover:bg-ink/90 text-white text-xs font-semibold transition-all flex items-center gap-2 disabled:opacity-50 shadow-soft cursor-pointer"
                        >
                            <Zap className="w-3.5 h-3.5 text-[#ffd23f]" aria-hidden="true" />
                            <span>{isSpeedrunning ? `Solving All ${TOTAL_Q}...` : `Auto-Solve All (${TOTAL_Q})`}</span>
                        </button>

                        <button
                            onClick={handleResetAll}
                            className="px-3.5 py-2.5 rounded-full bg-white hover:bg-[#faf8f4] border border-black/10 text-ink-secondary hover:text-ink text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
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
                            className="rounded-3xl bg-white border border-black/10 shadow-lift overflow-hidden relative select-none"
                        >
                            
                            {/* Single Clean macOS Title Bar (Single Line, Zero Wrapping) */}
                            <div className="bg-[#f7f5f0] px-4 sm:px-6 py-3 border-b border-black/6 flex items-center justify-between gap-2">
                                <div className="flex items-center gap-2 min-w-0">
                                    <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 inline-block shrink-0" />
                                    <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 inline-block shrink-0" />
                                    <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 inline-block shrink-0" />
                                    <span className="text-xs text-ink-muted font-mono ml-1.5 truncate hidden sm:inline-block">
                                        canvas.edu/quizzes/midterm
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white border border-black/8 text-xs font-mono font-semibold text-ink">
                                        <Clock className="w-3 h-3 text-emerald-600" aria-hidden="true" />
                                        <span>{formatTimer(timeLeft)}</span>
                                    </div>

                                </div>
                            </div>

                            {/* Interactive 5-Question Switcher Bar (Full Width, Zero Scrollbar) */}
                            <div className="px-4 sm:px-6 py-2.5 bg-[#faf8f5] border-b border-black/6 grid grid-cols-4 sm:grid-cols-8 gap-1.5 sm:gap-2">
                                {questionsMeta.map((q) => {
                                    const isActive = activeQuestion === q.id;
                                    return (
                                        <button
                                            key={q.id}
                                            onClick={() => selectQuestion(q.id)}
                                            title={`${q.title} · ${q.topic} · ${q.pts}`}
                                            aria-current={isActive ? 'true' : undefined}
                                            className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                                                isActive
                                                    ? 'bg-ink text-white shadow-xs'
                                                    : q.solved
                                                    ? 'bg-[#cdeecb]/60 text-ink border border-emerald-500/30 hover:bg-[#cdeecb]'
                                                    : 'bg-white text-ink-secondary border border-black/8 hover:border-black/20 hover:text-ink'
                                            }`}
                                        >
                                            <span>{q.title}</span>
                                            
                                            {q.solved && (
                                                <span className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                                                    isActive ? 'bg-[#cdeecb] text-ink' : 'bg-emerald-600 text-white'
                                                }`}>
                                                    ✓
                                                </span>
                                            )}
                                            {!q.solved && q.isOcr && (
                                                <span className={`hidden sm:inline-block text-[9px] font-bold px-1.5 py-0.5 rounded-full shrink-0 ${
                                                    isActive ? 'bg-[#e2d3fa] text-ink' : 'bg-[#e2d3fa]/80 text-ink'
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
                                    <MousePointerClick className="w-3.5 h-3.5 text-emerald-600" aria-hidden="true" />
                                    Tip: double-click a question to solve it, or press Alt+S to snip a diagram.
                                </p>
                            )}

                            {/* Focused Single-Question Stage (All 5 remain in DOM for SEO) */}
                            <div className={`p-5 sm:p-7 bg-white flex flex-col justify-between relative transition-[padding] duration-200 ${explainPanelOpen ? 'sm:pr-[304px]' : ''}`}>

                                {/* QUESTION 1: Biology MCQ */}
                                <div 
                                    ref={questionRefs[1]}
                                    onDoubleClick={handleSolveQ1}
                                    className={activeQuestion === 1 ? "block animate-fade-in cursor-pointer" : "hidden"}
                                >
                                    {solvingId === 1 && (
                                        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] z-20 flex items-center justify-center gap-2.5 text-sm font-bold text-ink">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                                            <span>Solving Question 1...</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-black/6">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
                                                Question 1 of 8 · Cell Biology
                                            </span>
                                            <span className="text-xs bg-[#f4f1ea] px-2.5 py-0.5 rounded-full font-semibold text-ink whitespace-nowrap">
                                                2.0 pts
                                            </span>
                                        </div>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ1(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-[#cdeecb] hover:bg-[#bde6ba] text-ink font-bold text-xs transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                                        >
                                            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
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
                                                <div 
                                                    key={opt.id}
                                                    onClick={() => setQ1State(opt.id)}
                                                    className={`p-4 rounded-2xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                                                        isSelected 
                                                            ? 'bg-[#cdeecb]/40 border-emerald-500 text-ink font-semibold shadow-2xs'
                                                            : isGlow
                                                            ? 'bg-[#ffe9a0]/60 border-amber-400 text-ink font-semibold ring-2 ring-amber-300'
                                                            : 'bg-white border-black/8 text-ink hover:border-black/20'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center font-bold text-[10px] ${
                                                            isSelected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-black/25 bg-white'
                                                        }`}>
                                                            {isSelected ? '✓' : ''}
                                                        </span>
                                                        <span>{opt.text}</span>
                                                    </div>
                                                    {isGlow && (
                                                        <span className="text-[11px] font-mono font-bold text-amber-950 bg-[#ffe9a0] px-2.5 py-0.5 rounded-full">
                                                            Highlighted
                                                        </span>
                                                    )}
                                                </div>
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
                                        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] z-20 flex items-center justify-center gap-2.5 text-sm font-bold text-ink">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                                            <span>Solving Question 2...</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-black/6">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
                                                Question 2 of 8 · Psychology
                                            </span>
                                            <span className="text-xs bg-[#f4f1ea] px-2.5 py-0.5 rounded-full font-semibold text-ink whitespace-nowrap">
                                                1.0 pt
                                            </span>
                                        </div>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ2(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-[#cdeecb] hover:bg-[#bde6ba] text-ink font-bold text-xs transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                                        >
                                            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
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
                                                    onClick={() => setQ2State(opt.id)}
                                                    className={`p-5 rounded-2xl border text-base font-bold transition-all flex items-center justify-between cursor-pointer ${
                                                        isSelected
                                                            ? 'bg-[#cdeecb]/40 border-emerald-500 text-ink shadow-2xs'
                                                            : isGlow
                                                            ? 'bg-[#ffe9a0]/60 border-amber-400 text-ink ring-2 ring-amber-300'
                                                            : 'bg-white border-black/8 text-ink hover:border-black/20'
                                                    }`}
                                                >
                                                    <span>{opt.label}</span>
                                                    {isSelected && <span className="text-xs font-mono font-bold text-emerald-900 bg-[#cdeecb] px-2.5 py-0.5 rounded-full">✓ Verified</span>}
                                                    {isGlow && <span className="text-xs font-mono font-bold text-amber-950 bg-[#ffe9a0] px-2.5 py-0.5 rounded-full">Highlighted</span>}
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
                                        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] z-20 flex items-center justify-center gap-2.5 text-sm font-bold text-ink">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                                            <span>Solving Question 3...</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-black/6">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
                                                Question 3 of 8 · Data Structures
                                            </span>
                                            <span className="text-xs bg-[#f4f1ea] px-2.5 py-0.5 rounded-full font-semibold text-ink whitespace-nowrap">
                                                3.0 pts
                                            </span>
                                        </div>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ3(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-[#cdeecb] hover:bg-[#bde6ba] text-ink font-bold text-xs transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                                        >
                                            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
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
                                                <div 
                                                    key={opt.id}
                                                    onClick={() => {
                                                        setQ3State(prev => isChecked ? prev.filter(x => x !== opt.id) : [...prev, opt.id]);
                                                    }}
                                                    className={`p-4 rounded-2xl border text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                                                        isChecked
                                                            ? 'bg-[#cdeecb]/40 border-emerald-500 text-ink font-semibold shadow-2xs'
                                                            : isGlow
                                                            ? 'bg-[#ffe9a0]/60 border-amber-400 text-ink font-semibold ring-2 ring-amber-300'
                                                            : 'bg-white border-black/8 text-ink hover:border-black/20'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className={`w-4 h-4 rounded border flex items-center justify-center font-bold text-[10px] ${
                                                            isChecked ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-black/25 bg-white'
                                                        }`}>
                                                            {isChecked && '✓'}
                                                        </span>
                                                        <span>{opt.text}</span>
                                                    </div>
                                                    {isChecked && opt.correct && (
                                                        <span className="text-[11px] font-mono font-bold text-emerald-900 bg-[#cdeecb] px-2.5 py-0.5 rounded-full">
                                                            Correct
                                                        </span>
                                                    )}
                                                </div>
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
                                        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] z-20 flex items-center justify-center gap-2.5 text-sm font-bold text-ink">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                                            <span>Synthesizing Short Answer...</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-black/6">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
                                                Question 4 of 8 · Chemistry
                                            </span>
                                            <span className="text-xs bg-[#f4f1ea] px-2.5 py-0.5 rounded-full font-semibold text-ink whitespace-nowrap">
                                                4.0 pts
                                            </span>
                                        </div>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ4(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-[#cdeecb] hover:bg-[#bde6ba] text-ink font-bold text-xs transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                                        >
                                            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
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
                                            className="w-full p-4 rounded-2xl border border-black/12 bg-[#faf8f5]/60 focus:bg-white text-sm text-ink leading-relaxed focus:outline-none focus:border-emerald-600 resize-none"
                                            aria-label="Short answer essay text field for Question 4"
                                        />
                                        {q4Solved && (
                                            <div className="absolute bottom-3.5 right-3.5 text-[11px] font-mono font-bold text-emerald-900 bg-[#cdeecb] px-2.5 py-0.5 rounded-full pointer-events-none">
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
                                        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] z-20 flex items-center justify-center gap-2.5 text-sm font-bold text-ink">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                                            <span>Running Snap-It Vision OCR...</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-black/6">
                                        <div className="flex items-center gap-2">
                                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
                                                Question 5 of 8 · Calculus &amp; Trig
                                            </span>
                                            <span className="text-xs bg-[#e2d3fa] px-2.5 py-0.5 rounded-full font-bold text-ink whitespace-nowrap">
                                                5.0 pts · Diagram OCR
                                            </span>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                triggerPresetSnipe(5);
                                            }}
                                            className="px-3.5 py-1.5 rounded-full bg-ink hover:bg-ink/90 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer whitespace-nowrap shrink-0"
                                        >
                                            <Crop className="w-3.5 h-3.5 text-[#cdeecb]" aria-hidden="true" />
                                            <span>Snip &amp; Solve Diagram</span>
                                        </button>
                                    </div>

                                    <h2 className="font-display text-base sm:text-lg font-bold text-ink mb-4 leading-snug">
                                        Find hypotenuse <span className="font-mono text-emerald-800">c</span> (legs <span className="font-mono">a = 6, b = 8</span>) and derivative <span className="font-mono text-emerald-800">dy/dx</span> of <span className="font-mono">y = 0.5x² - 2x + 4</span> at <span className="font-mono">x = 4</span>:
                                    </h2>

                                    {/* Clean Diagram Canvas */}
                                    <div className="mb-4 p-3 rounded-2xl bg-[#faf8f5] border border-black/8 flex justify-center">
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
                                            <polygon points="60,135 230,135 230,30" fill="#c4d0f8" fillOpacity="0.55" stroke="#4f46e5" strokeWidth="2.5" />
                                            <rect x="216" y="121" width="14" height="14" fill="none" stroke="#4f46e5" strokeWidth="1.5" />
                                            <text x="130" y="150" fontSize="12" fontWeight="bold" fill="#1e1b4b" fontFamily="monospace">a = 6</text>
                                            <text x="238" y="88" fontSize="12" fontWeight="bold" fill="#1e1b4b" fontFamily="monospace">b = 8</text>
                                            <text x="115" y="75" fontSize="13" fontWeight="bold" fill="#4f46e5" fontFamily="monospace">c = ?</text>
                                            <path d="M 265,120 Q 335,55 410,22" fill="none" stroke="#059669" strokeWidth="2.5" strokeDasharray="4 2" />
                                            <circle cx="350" cy="45" r="4.5" fill="#059669" />
                                            <text x="310" y="30" fontSize="11" fontWeight="bold" fill="#065f46" fontFamily="monospace">dy/dx at x = 4</text>
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
                                                <div 
                                                    key={opt.id}
                                                    onClick={() => setQ5State(opt.id)}
                                                    className={`p-3.5 rounded-2xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                                                        isSelected 
                                                            ? 'bg-[#cdeecb]/40 border-emerald-500 text-ink font-semibold shadow-2xs'
                                                            : isGlow
                                                            ? 'bg-[#ffe9a0]/60 border-amber-400 text-ink font-semibold ring-2 ring-amber-300'
                                                            : 'bg-white border-black/8 text-ink hover:border-black/20'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-2.5">
                                                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center font-bold text-[10px] ${
                                                            isSelected ? 'border-emerald-600 bg-emerald-600 text-white' : 'border-black/25 bg-white'
                                                        }`}>
                                                            {isSelected ? '✓' : ''}
                                                        </span>
                                                        <span className="font-mono">{opt.text}</span>
                                                    </div>
                                                    {isSelected && (
                                                        <span className="text-[10px] font-mono font-bold text-emerald-900 bg-[#cdeecb] px-2 py-0.5 rounded-full">
                                                            OCR ✓
                                                        </span>
                                                    )}
                                                </div>
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
                                        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] z-20 flex items-center justify-center gap-2.5 text-sm font-bold text-ink">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                                            <span>Solving Question 6...</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-black/6">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
                                                Question 6 of 8 · Geography
                                            </span>
                                            <span className="text-xs bg-[#f4f1ea] px-2.5 py-0.5 rounded-full font-semibold text-ink whitespace-nowrap">
                                                1.0 pt
                                            </span>
                                        </div>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ6(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-[#cdeecb] hover:bg-[#bde6ba] text-ink font-bold text-xs transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                                        >
                                            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
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
                                            className={`w-full appearance-none rounded-2xl border px-4 py-4 text-base font-medium text-ink cursor-pointer transition-all focus:outline-none ${
                                                q6Solved
                                                    ? 'bg-[#cdeecb]/40 border-emerald-500'
                                                    : q6Highlighted
                                                    ? 'bg-[#ffe9a0]/60 border-amber-400 ring-2 ring-amber-300'
                                                    : 'bg-white border-black/12 hover:border-black/25'
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
                                            <span className="absolute right-11 top-1/2 -translate-y-1/2 text-[11px] font-mono font-bold text-emerald-900 bg-[#cdeecb] px-2.5 py-0.5 rounded-full pointer-events-none">✓ Selected</span>
                                        )}
                                        {q6Highlighted && !q6Solved && (
                                            <span className="absolute right-11 top-1/2 -translate-y-1/2 text-[11px] font-mono font-bold text-amber-950 bg-[#ffe9a0] px-2.5 py-0.5 rounded-full pointer-events-none">Highlighted: Canberra</span>
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
                                        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] z-20 flex items-center justify-center gap-2.5 text-sm font-bold text-ink">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                                            <span>Solving Question 7...</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-black/6">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
                                                Question 7 of 8 · Algebra
                                            </span>
                                            <span className="text-xs bg-[#f4f1ea] px-2.5 py-0.5 rounded-full font-semibold text-ink whitespace-nowrap">
                                                3.0 pts
                                            </span>
                                        </div>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ7(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-[#cdeecb] hover:bg-[#bde6ba] text-ink font-bold text-xs transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                                        >
                                            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
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
                                            className={`w-28 rounded-xl border px-4 py-3 text-center text-lg font-semibold focus:outline-none transition-colors ${
                                                q7Solved ? 'bg-[#cdeecb]/40 border-emerald-500' : 'bg-white border-black/15 focus:border-emerald-600'
                                            }`}
                                        />
                                        {q7Solved && (
                                            <span className="text-[11px] font-mono font-bold text-emerald-900 bg-[#cdeecb] px-2.5 py-0.5 rounded-full">✓ Filled in</span>
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
                                        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] z-20 flex items-center justify-center gap-2.5 text-sm font-bold text-ink">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
                                            <span>Solving Question 8...</span>
                                        </div>
                                    )}

                                    <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-black/6">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
                                                Question 8 of 8 · Cell Biology
                                            </span>
                                            <span className="text-xs bg-[#f4f1ea] px-2.5 py-0.5 rounded-full font-semibold text-ink whitespace-nowrap">
                                                4.0 pts
                                            </span>
                                        </div>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ8(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-[#cdeecb] hover:bg-[#bde6ba] text-ink font-bold text-xs transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer whitespace-nowrap shrink-0"
                                        >
                                            <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />
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
                                                            className={`w-full appearance-none rounded-xl border px-3.5 py-2.5 text-sm cursor-pointer focus:outline-none transition-all ${
                                                                ok
                                                                    ? 'bg-[#cdeecb]/40 border-emerald-500 font-semibold'
                                                                    : q8Highlighted
                                                                    ? 'bg-[#ffe9a0]/50 border-amber-400 ring-2 ring-amber-300'
                                                                    : 'bg-white border-black/12 hover:border-black/25'
                                                            }`}
                                                        >
                                                            <option value="">Select function…</option>
                                                            {Q8_PAIRS.map((o) => (
                                                                <option key={o.answer} value={o.answer}>{o.answer}</option>
                                                            ))}
                                                        </select>
                                                        <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted" aria-hidden="true" />
                                                        {q8Highlighted && !ok && (
                                                            <span className="absolute right-9 top-1/2 -translate-y-1/2 hidden sm:inline text-[10px] font-mono font-bold text-amber-950 bg-[#ffe9a0] px-2 py-0.5 rounded-full pointer-events-none">{pr.answer}</span>
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
                                    className="animate-fade-in mx-4 mb-4 sm:mx-0 sm:mb-0 sm:absolute sm:z-30 sm:right-4 sm:top-[150px] sm:w-[272px] rounded-2xl bg-[#18181b] text-white p-4 shadow-lift ring-1 ring-white/10"
                                    aria-label="ExamGhost explanation"
                                >
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="w-5 h-5 rounded-full overflow-hidden bg-[#c4d0f8] shrink-0">
                                            <img src="/images/ghost/ghost_mascot_avatar.jpg" alt="" width={20} height={20} className="w-full h-full object-cover scale-110" />
                                        </span>
                                        <span className="text-xs font-semibold">ExamGhost</span>
                                        <span className="ml-auto text-[10px] font-semibold bg-emerald-500/20 text-emerald-300 rounded-full px-2 py-0.5">Solved</span>
                                        <button onClick={() => dismissExplain(activeQuestion)} className="p-1 -mr-1 rounded hover:bg-white/10 cursor-pointer" aria-label="Close explanation">
                                            <X className="w-3.5 h-3.5" aria-hidden="true" />
                                        </button>
                                    </div>
                                    <p className="text-[11px] text-white/50 mb-1">Answer</p>
                                    <p className="rounded-lg bg-white/10 px-3 py-2 text-[13px] font-semibold mb-3">{EXPLAIN_PANEL[activeQuestion].answer}</p>
                                    <p className="text-[12px] leading-relaxed text-white/70">{EXPLAIN_PANEL[activeQuestion].why}</p>
                                </aside>
                            )}

                            {/* Clean Bottom Question Pagination & Submit Bar */}
                            <div className="px-5 sm:px-6 py-4 bg-[#f7f5f0] border-t border-black/6 flex flex-wrap items-center justify-between gap-3 text-xs">
                                <div className="flex items-center gap-2">
                                    <button
                                        onClick={() => selectQuestion(Math.max(1, activeQuestion - 1))}
                                        disabled={activeQuestion === 1}
                                        className="px-3.5 py-2 rounded-xl bg-white border border-black/8 text-ink font-semibold hover:bg-black/5 disabled:opacity-40 transition-colors flex items-center gap-1 cursor-pointer"
                                    >
                                        <ChevronLeft className="w-3.5 h-3.5" aria-hidden="true" />
                                        <span>Prev</span>
                                    </button>
                                    <button
                                        onClick={() => selectQuestion(Math.min(TOTAL_Q, activeQuestion + 1))}
                                        disabled={activeQuestion === TOTAL_Q}
                                        className="px-3.5 py-2 rounded-xl bg-white border border-black/8 text-ink font-semibold hover:bg-black/5 disabled:opacity-40 transition-colors flex items-center gap-1 cursor-pointer"
                                    >
                                        <span>Next Question</span>
                                        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="hidden sm:block w-24 h-1.5 rounded-full bg-black/10 overflow-hidden" role="progressbar" aria-valuemin={0} aria-valuemax={TOTAL_Q} aria-valuenow={solvedCount} aria-label="Questions solved">
                                        <span className="block h-full bg-emerald-500 rounded-full transition-all duration-500" style={{ width: `${(solvedCount / TOTAL_Q) * 100}%` }} />
                                    </span>
                                    <span className="font-mono font-semibold text-ink-secondary">
                                        {solvedCount}/{TOTAL_Q} Solved · <strong className="text-ink">{earnedPoints}/{totalPoints} pts</strong>
                                    </span>
                                    <button
                                        onClick={() => {
                                            playAudio('click');
                                            setIsSubmitModalOpen(true);
                                        }}
                                        className="px-4 py-2 rounded-xl bg-ink hover:bg-ink/90 text-white font-bold transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
                                    >
                                        <CheckCircle2 className="w-3.5 h-3.5 text-[#cdeecb]" aria-hidden="true" />
                                        <span>Submit Quiz</span>
                                    </button>
                                </div>
                            </div>

                            {/* Interactive In-Page Snipe Overlay */}
                            {isSniping && (
                                <div 
                                    className="absolute inset-0 z-40 cursor-crosshair bg-slate-900/40 backdrop-blur-[1px] select-none touch-none"
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
                                        <div className="pointer-events-auto px-4 py-2 rounded-full bg-ink text-white text-xs font-semibold shadow-lift border border-white/15 flex items-center gap-2.5">
                                            <span className="w-2 h-2 rounded-full bg-[#cdeecb] animate-ping shrink-0" />
                                            <span>Drag a box over any question or diagram to solve</span>
                                            <button
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
                                            className="absolute border-2 border-emerald-400 bg-emerald-400/15 pointer-events-none"
                                            style={{
                                                left: Math.min(dragStart.x, currentDrag.x),
                                                top: Math.min(dragStart.y, currentDrag.y),
                                                width: Math.abs(currentDrag.x - dragStart.x),
                                                height: Math.abs(currentDrag.y - dragStart.y),
                                            }}
                                        />
                                    )}

                                    {snipeBox && (
                                        <div
                                            className="absolute border-2 border-emerald-400 bg-emerald-400/10 overflow-hidden"
                                            style={{
                                                left: snipeBox.x,
                                                top: snipeBox.y,
                                                width: snipeBox.w,
                                                height: snipeBox.h,
                                            }}
                                        >
                                            {isScanning && (
                                                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 animate-laser-scan" />
                                            )}
                                            <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-ink text-[10px] font-mono font-bold text-[#cdeecb]">
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
                        <div className="rounded-3xl bg-white border border-black/10 p-6 shadow-lift space-y-5">
                            
                            {/* HUD Header & Master Toggle */}
                            <div className="flex items-center justify-between pb-4 border-b border-black/6">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-2xl overflow-hidden border border-black/10 bg-[#c4d0f8] shrink-0">
                                        <img src="/images/ghost/ghost_peace.jpg" alt="ExamGhost HUD" width={40} height={40} loading="lazy" decoding="async" className="w-full h-full object-cover" />
                                    </div>
                                    <div>
                                        <span className="font-display font-bold text-base text-ink block leading-none">
                                            ExamGhost HUD
                                        </span>
                                        <span className="text-xs text-emerald-700 font-semibold flex items-center gap-1.5 mt-1">
                                            <span className={`w-2 h-2 rounded-full ${isExtensionOn ? 'bg-emerald-500 animate-pulse' : 'bg-ink-muted'}`} />
                                            <span>{isExtensionOn ? 'Extension Active' : 'Paused'}</span>
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => {
                                        setIsExtensionOn(!isExtensionOn);
                                        playAudio('click');
                                    }}
                                    className={`w-11 h-6 rounded-full p-0.5 transition-colors cursor-pointer ${
                                        isExtensionOn ? 'bg-ink' : 'bg-black/20'
                                    }`}
                                    aria-label="Toggle Extension Master Power"
                                >
                                    <div className={`w-5 h-5 rounded-full bg-white shadow-2xs transition-transform ${
                                        isExtensionOn ? 'translate-x-5' : 'translate-x-0'
                                    }`} />
                                </button>
                            </div>

                            {/* Display Mode Selector */}
                            <div className="space-y-2">
                                <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider block">
                                    1. Solver Mode (Alt+1 / 2 / 3)
                                </span>
                                <div className="grid grid-cols-3 gap-1 p-1 rounded-2xl bg-[#f4f1ea] border border-black/6 text-xs font-semibold">
                                    {[
                                        { id: 'invisible', label: 'Invisible', key: 'Alt+1' },
                                        { id: 'stealth', label: 'Stealth', key: 'Alt+2' },
                                        { id: 'explain', label: 'Explain', key: 'Alt+3' }
                                    ].map((m) => (
                                        <button
                                            key={m.id}
                                            onClick={() => {
                                                setDisplayMode(m.id as 'invisible' | 'stealth' | 'explain');
                                                playAudio('click');
                                            }}
                                            className={`py-2 rounded-xl transition-all cursor-pointer flex flex-col items-center justify-center leading-tight ${
                                                displayMode === m.id ? 'bg-white text-ink font-bold shadow-2xs' : 'text-ink-secondary hover:text-ink'
                                            }`}
                                        >
                                            <span>{m.label}</span>
                                            <span className="text-[9px] font-mono text-ink-muted mt-0.5">{m.key}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Answer Method Selector (Clean, No Redundant Badges) */}
                            <div className="space-y-2">
                                <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider block">
                                    2. Answer Delivery
                                </span>
                                <div className="grid grid-cols-3 gap-1 p-1 rounded-2xl bg-[#f4f1ea] border border-black/6 text-xs font-semibold">
                                    {[
                                        { id: 'autofill', label: 'Auto-fill' },
                                        { id: 'highlight', label: 'Highlight' },
                                        { id: 'clipboard', label: 'Clipboard' }
                                    ].map((met) => (
                                        <button
                                            key={met.id}
                                            onClick={() => {
                                                setAnswerMethod(met.id as 'autofill' | 'highlight' | 'clipboard');
                                                playAudio('click');
                                            }}
                                            className={`py-2 rounded-xl transition-all cursor-pointer ${
                                                answerMethod === met.id ? 'bg-white text-ink font-bold shadow-2xs' : 'text-ink-secondary hover:text-ink'
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
                                    onClick={handleSolveActive}
                                    disabled={!isExtensionOn}
                                    className="w-full py-3 rounded-2xl bg-[#cdeecb] hover:bg-[#bde6ba] text-ink text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
                                >
                                    <Sparkles className="w-4 h-4" aria-hidden="true" />
                                    <span>Solve Question {activeQuestion} Now</span>
                                </button>

                                <button
                                    onClick={() => triggerPresetSnipe(5)}
                                    className="w-full py-3 rounded-2xl bg-ink hover:bg-ink/90 text-white text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-2xs cursor-pointer"
                                >
                                    <Crop className="w-3.5 h-3.5 text-[#cdeecb]" aria-hidden="true" />
                                    <span>Snip Q5 Math Diagram</span>
                                    <kbd className="px-1.5 py-0.5 rounded bg-white/15 font-mono text-[10px] text-white/90">
                                        Alt+S
                                    </kbd>
                                </button>
                            </div>

                            {/* Compact Hotkey Footer */}
                            <div className="pt-3 border-t border-black/6 flex items-center justify-between text-[11px] text-ink-muted">
                                <span>Diagram Snip Shortcut</span>
                                <kbd className="kbd-key">
                                    Alt + S
                                </kbd>
                            </div>
                        </div>

                        {/* Live OCR Result Toast (Only shown after snipping) */}
                        {snipResult && (
                            <div className="rounded-2xl bg-white border border-emerald-500/40 p-4 shadow-soft flex items-center justify-between gap-3 animate-fade-in">
                                <div className="min-w-0">
                                    <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase block">
                                        ✓ Snip solved
                                    </span>
                                    <p className="text-xs font-bold text-ink truncate mt-0.5">
                                        {snipResult.answer}
                                    </p>
                                </div>
                                <button
                                    onClick={() => setSnipResult(null)}
                                    className="p-1 rounded-lg hover:bg-black/5 text-ink-muted shrink-0 cursor-pointer"
                                    aria-label="Dismiss OCR result"
                                >
                                    <X className="w-3.5 h-3.5" />
                                </button>
                            </div>
                        )}

                        {/* Clipboard Toast */}
                        {clipboardNotice && (
                            <div role="status" aria-live="polite" className="p-3.5 rounded-2xl bg-ink text-white text-xs font-semibold flex items-center gap-2 shadow-soft animate-fade-in">
                                <Check className="w-4 h-4 text-[#cdeecb] shrink-0" aria-hidden="true" />
                                <span>{clipboardNotice}</span>
                            </div>
                        )}
                    </div>

                </div>
            </main>

            {/* What the extension does (matches the extension's real behaviour) */}
            <section id="what-it-does" className="py-16 sm:py-20 bg-white/60 border-y border-black/5 scroll-mt-20">
                <div className="max-w-6xl mx-auto px-4 sm:px-6">
                    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
                        <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-[1.05] mb-3">
                            What you just tried
                        </h2>
                        <p className="text-base sm:text-lg text-ink-muted">
                            The same controls the Chrome extension gives you on a real quiz page.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {[
                            { icon: MousePointerClick, tint: '#c4d0f8', title: 'Double-click to solve', body: 'Double-click a question and the answer lands on the page. Multiple choice, true/false, multi-select, dropdowns and short answers are all handled.' },
                            { icon: Sparkles, tint: '#cdeecb', title: 'Three modes (Alt+1 / 2 / 3)', body: 'Invisible applies the answer with no panel. Stealth, the default, fills it in or marks it with a small ✓. Explain adds a side panel with the reasoning.' },
                            { icon: Check, tint: '#e2d3fa', title: 'Three ways to deliver', body: 'Auto-fill selects the answer for you, Highlight marks it so you click it yourself, and Clipboard copies it to paste into a written answer.' },
                            { icon: Crop, tint: '#bfe3f6', title: 'Snap-It (Alt+S)', body: 'Drag a box around a graph, diagram or image-based question. The extension reads the screenshot and returns the answer with the working.' },
                            { icon: ScrollText, tint: '#ffe9a0', title: 'Scan the whole page', body: 'Click Scan page & answer in the popup and the extension scrolls the page, reads every question and fills answers in batches.' },
                            { icon: Power, tint: '#ffd5cc', title: 'Master on/off switch', body: 'One toggle in the extension popup pauses everything, so shortcuts and double-click do nothing while you browse normally.' },
                        ].map((c) => {
                            const Icon = c.icon;
                            return (
                                <article key={c.title} className="bg-white rounded-3xl border border-black/10 p-6 shadow-card hover:border-black/20 hover:shadow-lift transition-all duration-200">
                                    <span className="grid place-items-center w-11 h-11 rounded-2xl mb-5" style={{ backgroundColor: c.tint }}>
                                        <Icon className="w-5 h-5 text-ink" strokeWidth={1.9} aria-hidden="true" />
                                    </span>
                                    <h3 className="font-display text-lg font-bold text-ink mb-1.5">{c.title}</h3>
                                    <p className="text-[15px] text-ink-muted leading-relaxed">{c.body}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section id="demo-faq" className="py-16 sm:py-20 scroll-mt-20">
                <div className="max-w-3xl mx-auto px-4 sm:px-6">
                    <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-ink text-center mb-8">Questions</h2>
                    <div className="space-y-3">
                        {DEMO_FAQS.map((f) => (
                            <details key={f.q} className="group bg-white rounded-2xl border border-black/10 hover:border-black/20 transition-colors px-5 sm:px-6 py-4 sm:py-5 open:shadow-card">
                                <summary className="flex items-center justify-between gap-4 cursor-pointer list-none font-display font-semibold [&::-webkit-details-marker]:hidden">
                                    <h3 className="text-base sm:text-lg">{f.q}</h3>
                                    <ChevronDown className="w-5 h-5 shrink-0 text-ink-muted transition-transform group-open:rotate-180" aria-hidden="true" />
                                </summary>
                                <p className="mt-3 pt-3 border-t border-black/5 text-[15px] text-ink-muted leading-relaxed">{f.a}</p>
                            </details>
                        ))}
                    </div>
                </div>
            </section>

            <FinalCta />


            {/* Canvas Submit Quiz Confirmation Modal */}
            {isSubmitModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="submit-modal-title"
                >
                    <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-lift border border-black/10 space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-black/6">
                            <div className="flex items-center gap-2 text-ink font-bold text-sm">
                                <GraduationCap className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                                <span id="submit-modal-title">Quiz Submission Summary</span>
                            </div>
                            <button
                                onClick={() => setIsSubmitModalOpen(false)}
                                className="p-1 rounded-lg hover:bg-black/5 text-ink-muted cursor-pointer"
                                aria-label="Close modal"
                            >
                                <X className="w-4 h-4" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="text-center py-3 space-y-2">
                            <div className="w-12 h-12 rounded-2xl bg-[#cdeecb] text-ink flex items-center justify-center mx-auto text-xl font-bold">
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
                                onClick={() => {
                                    setHasSubmitted(true);
                                    setIsSubmitModalOpen(false);
                                    playAudio('success');
                                }}
                                className="flex-1 py-2.5 rounded-xl bg-ink text-white text-xs font-bold hover:bg-ink/90 transition-colors cursor-pointer"
                            >
                                Done
                            </button>
                            <a
                                href={INSTALL_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-2.5 rounded-xl bg-[#cdeecb] hover:bg-[#bde6ba] text-ink text-xs font-bold transition-colors flex items-center justify-center gap-1.5"
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
