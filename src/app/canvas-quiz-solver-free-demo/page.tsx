'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';
import { 
    Check, Sparkles, CheckCircle2, Lock, 
    RefreshCw, ChevronRight, ChevronLeft, ArrowLeft, ArrowRight, BookOpen, ShieldCheck, Clock, Crop, 
    Volume2, VolumeX, Flag, Zap, X, GraduationCap, ChevronDown, MousePointerClick
} from 'lucide-react';
import { FaChrome } from 'react-icons/fa';

interface SnipResult {
    questionId: number;
    title: string;
    detectedText: string;
    answer: string;
    explanation: string;
    confidence: string;
    latency: string;
}

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
    const [showProctorLog, setShowProctorLog] = useState(false);
    const [openFaqs, setOpenFaqs] = useState<number[]>([0, 1, 2]);
    const [faqCategory, setFaqCategory] = useState<'all' | 'stealth' | 'ocr' | 'platforms'>('all');

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
    };

    // Calculate Solved Stats
    const q1Solved = q1State === 'B';
    const q2Solved = q2State === 'true';
    const q3Solved = q3State.includes('A') && q3State.includes('B') && q3State.includes('D');
    const q4Solved = q4Text.trim().length > 15;
    const q5Solved = q5State === 'B';

    const solvedCount = 
        (q1Solved ? 1 : 0) +
        (q2Solved ? 1 : 0) +
        (q3Solved ? 1 : 0) +
        (q4Solved ? 1 : 0) +
        (q5Solved ? 1 : 0);

    const totalPoints = 15;
    const earnedPoints = 
        (q1Solved ? 2 : 0) +
        (q2Solved ? 1 : 0) +
        (q3Solved ? 3 : 0) +
        (q4Solved ? 4 : 0) +
        (q5Solved ? 5 : 0);

    // Synthesized Audio Feedback
    const playAudio = useCallback((type: 'click' | 'solve' | 'snip' | 'success' | 'alert') => {
        if (!soundEnabled || typeof window === 'undefined') return;
        try {
            const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
            if (!AudioCtx) return;
            const ctx = new AudioCtx();
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

    const showClipboardToast = (text: string) => {
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
            
            if (isModifier && e.shiftKey && e.key.toLowerCase() === 's') {
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

            if (isModifier && e.shiftKey && e.key.toLowerCase() === 'u') {
                e.preventDefault();
                setIsExtensionOn(prev => {
                    playAudio('click');
                    return !prev;
                });
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
    }, [isSniping, playAudio]);

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
                showClipboardToast("Copied short-answer response to clipboard!");
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

    const handleSolveActive = () => {
        if (activeQuestion === 1) handleSolveQ1();
        else if (activeQuestion === 2) handleSolveQ2();
        else if (activeQuestion === 3) handleSolveQ3();
        else if (activeQuestion === 4) handleSolveQ4();
        else handleSolveQ5();
    };

    // Speedrun: Auto-Solve All Questions in Sequence
    const handleSpeedrunAll = () => {
        if (!isExtensionOn || isSpeedrunning) return;
        setIsSpeedrunning(true);
        playAudio('snip');
        
        handleSolveQ1();
        setTimeout(() => handleSolveQ2(), 350);
        setTimeout(() => handleSolveQ3(), 700);
        setTimeout(() => handleSolveQ4(), 1050);
        setTimeout(() => {
            handleSolveQ5();
            setIsSpeedrunning(false);
            playAudio('success');
        }, 1400);
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
                    confidence: "99.9%",
                    latency: "0.26s"
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
                confidence: "99.8%",
                latency: "0.28s"
            });

            setTimeout(() => {
                setIsSniping(false);
            }, 1500);
        }, 750);
    };

    const questionsMeta = [
        { id: 1, title: 'Q1', topic: 'Biology', pts: '2 pts', solved: q1Solved },
        { id: 2, title: 'Q2', topic: 'Psych', pts: '1 pt', solved: q2Solved },
        { id: 3, title: 'Q3', topic: 'Comp Sci', pts: '3 pts', solved: q3Solved },
        { id: 4, title: 'Q4', topic: 'Chemistry', pts: '4 pts', solved: q4Solved },
        { id: 5, title: 'Q5', topic: 'Math', pts: '5 pts', solved: q5Solved, isOcr: true },
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
                                    src="/images/ghost/ghost_mascot_hero.jpg" 
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

                    <div className="flex items-center gap-2.5">
                        <a
                            href="#student-seo-guide"
                            className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-ink-secondary hover:text-ink hover:bg-black/5 transition-colors"
                        >
                            <BookOpen className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                            <span>How It Stays Hidden</span>
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
                            href="https://chromewebstore.google.com/detail/curio-ai-tutor-homework-h/dejkoepiachnbgjjooocnnmampldmpde"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-dark px-4 py-2 text-xs font-semibold rounded-full shadow-xs inline-flex items-center gap-2"
                        >
                            <FaChrome className="w-3.5 h-3.5 text-[#bfe3f6]" aria-hidden="true" />
                            <span>Add to Chrome — Free</span>
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
                            <span>LIVE SANDBOX · NO INSTALL REQUIRED</span>
                        </div>
                        <h1 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-ink leading-tight">
                            Try ExamGhost on a Live Canvas Quiz
                        </h1>
                        <p className="aeo-summary text-xs sm:text-sm text-ink-muted mt-1.5 max-w-2xl leading-relaxed">
                            Double-click any simulated Canvas question to solve in 0.3s, test Snap-It Vision OCR (⌘+Shift+S) on Question 5, and inspect live Focus Shield telemetry showing 0 tab-switch or window.onblur flags.
                        </p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                        <button
                            onClick={handleSpeedrunAll}
                            disabled={isSpeedrunning || !isExtensionOn}
                            className="px-4 py-2.5 rounded-full bg-ink hover:bg-ink/90 text-white text-xs font-semibold transition-all flex items-center gap-2 disabled:opacity-50 shadow-soft cursor-pointer"
                        >
                            <Zap className="w-3.5 h-3.5 text-[#ffd23f]" aria-hidden="true" />
                            <span>{isSpeedrunning ? "Solving All 5..." : "Auto-Solve All (5)"}</span>
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
            <main className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
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

                                    <button
                                        onClick={() => {
                                            setShowProctorLog(!showProctorLog);
                                            playAudio('click');
                                        }}
                                        className="px-3 py-1 rounded-full bg-[#cdeecb]/70 hover:bg-[#cdeecb] border border-emerald-600/20 text-ink text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
                                        title="Inspect live Canvas activity telemetry"
                                    >
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                                        <span>0 Tab-Switch Flags</span>
                                        <ChevronDown className={`w-3 h-3 transition-transform ${showProctorLog ? 'rotate-180' : ''}`} />
                                    </button>
                                </div>
                            </div>

                            {/* Collapsible Live Professor Activity Log Proof Drawer (Mounted in DOM for SEO) */}
                            <div className={showProctorLog ? "bg-[#141413] text-white px-5 sm:px-6 py-4 border-b border-white/10 text-xs space-y-3 animate-fade-in block" : "hidden"}>
                                <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-white/10">
                                    <span className="font-mono font-bold text-[#cdeecb] uppercase tracking-wider text-[11px]">
                                        Live Canvas Instructor Telemetry View
                                    </span>
                                    <span className="text-[11px] text-white/60 font-mono">
                                        Solved: {solvedCount}/5 · Flags: 0
                                    </span>
                                </div>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-[11px]">
                                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                                        <span className="text-white/75 block text-[10px]">window.onblur</span>
                                        <span className="text-[#cdeecb] font-bold">0 Events</span>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                                        <span className="text-white/75 block text-[10px]">visibilitychange</span>
                                        <span className="text-[#cdeecb] font-bold">visible</span>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                                        <span className="text-white/75 block text-[10px]">DOM Footprint</span>
                                        <span className="text-[#cdeecb] font-bold">Closed Shadow</span>
                                    </div>
                                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                                        <span className="text-white/75 block text-[10px]">Clipboard Paste</span>
                                        <span className="text-[#cdeecb] font-bold">0 Flagged</span>
                                    </div>
                                </div>
                            </div>

                            {/* Interactive 5-Question Switcher Bar (Full Width, Zero Scrollbar) */}
                            <div className="px-4 sm:px-6 py-2.5 bg-[#faf8f5] border-b border-black/6 grid grid-cols-5 gap-1.5 sm:gap-2">
                                {questionsMeta.map((q) => {
                                    const isActive = activeQuestion === q.id;
                                    return (
                                        <button
                                            key={q.id}
                                            onClick={() => selectQuestion(q.id)}
                                            className={`py-2 px-2.5 rounded-xl text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                                                isActive
                                                    ? 'bg-ink text-white shadow-xs'
                                                    : q.solved
                                                    ? 'bg-[#cdeecb]/60 text-ink border border-emerald-500/30 hover:bg-[#cdeecb]'
                                                    : 'bg-white text-ink-secondary border border-black/8 hover:border-black/20 hover:text-ink'
                                            }`}
                                        >
                                            <span>{q.title}</span>
                                            <span className={`hidden md:inline text-[11px] font-normal truncate ${isActive ? 'text-white/75' : 'text-ink-muted'}`}>
                                                · {q.topic}
                                            </span>
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

                            {/* Focused Single-Question Stage (All 5 remain in DOM for SEO) */}
                            <div className="p-5 sm:p-7 bg-white flex flex-col justify-between relative">

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

                                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-black/6">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
                                                Question 1 of 5 · Cell Biology
                                            </span>
                                            <span className="text-xs bg-[#f4f1ea] px-2.5 py-0.5 rounded-full font-semibold text-ink">
                                                2.0 pts
                                            </span>
                                        </div>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ1(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-[#cdeecb] hover:bg-[#bde6ba] text-ink font-bold text-xs transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
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
                                                    {isSelected && (
                                                        <span className="text-[11px] font-mono font-bold text-emerald-900 bg-[#cdeecb] px-2.5 py-0.5 rounded-full">
                                                            99.8% · 0.3s
                                                        </span>
                                                    )}
                                                    {isGlow && (
                                                        <span className="text-[11px] font-mono font-bold text-amber-950 bg-[#ffe9a0] px-2.5 py-0.5 rounded-full">
                                                            Highlighted
                                                        </span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {q1Explain && (
                                        <div className="mt-5 p-4 rounded-2xl bg-[#f7f5f0] border border-black/8 text-xs text-ink-secondary leading-relaxed flex items-start gap-2.5 animate-fade-in">
                                            <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                                            <div>
                                                <strong className="text-ink">Explain Mode: </strong>
                                                Mitochondria generate over 90% of cellular ATP through the citric acid cycle and oxidative phosphorylation.
                                            </div>
                                        </div>
                                    )}
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

                                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-black/6">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
                                                Question 2 of 5 · Psychology
                                            </span>
                                            <span className="text-xs bg-[#f4f1ea] px-2.5 py-0.5 rounded-full font-semibold text-ink">
                                                1.0 pt
                                            </span>
                                        </div>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ2(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-[#cdeecb] hover:bg-[#bde6ba] text-ink font-bold text-xs transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
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

                                    {q2Explain && (
                                        <div className="mt-5 p-4 rounded-2xl bg-[#f7f5f0] border border-black/8 text-xs text-ink-secondary leading-relaxed flex items-start gap-2.5 animate-fade-in">
                                            <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                                            <div>
                                                <strong className="text-ink">Explain Mode: </strong>
                                                Pavlov demonstrated classical conditioning in the 1890s by pairing an unconditioned stimulus (food) with a neutral auditory tone.
                                            </div>
                                        </div>
                                    )}
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

                                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-black/6">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
                                                Question 3 of 5 · Data Structures
                                            </span>
                                            <span className="text-xs bg-[#f4f1ea] px-2.5 py-0.5 rounded-full font-semibold text-ink">
                                                3.0 pts
                                            </span>
                                        </div>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ3(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-[#cdeecb] hover:bg-[#bde6ba] text-ink font-bold text-xs transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
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

                                    {q3Explain && (
                                        <div className="mt-5 p-4 rounded-2xl bg-[#f7f5f0] border border-black/8 text-xs text-ink-secondary leading-relaxed flex items-start gap-2.5 animate-fade-in">
                                            <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                                            <div>
                                                <strong className="text-ink">Explain Mode: </strong>
                                                A stack implements LIFO semantics using <code className="font-mono text-ink">push()</code> and <code className="font-mono text-ink">pop()</code>, whereas a queue is FIFO.
                                            </div>
                                        </div>
                                    )}
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

                                    <div className="flex items-center justify-between pb-4 mb-5 border-b border-black/6">
                                        <div className="flex items-center gap-2.5">
                                            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-ink-muted">
                                                Question 4 of 5 · Chemistry
                                            </span>
                                            <span className="text-xs bg-[#f4f1ea] px-2.5 py-0.5 rounded-full font-semibold text-ink">
                                                4.0 pts
                                            </span>
                                        </div>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ4(); }}
                                            className="px-3.5 py-1.5 rounded-full bg-[#cdeecb] hover:bg-[#bde6ba] text-ink font-bold text-xs transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer"
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

                                    {q4Explain && (
                                        <div className="mt-5 p-4 rounded-2xl bg-[#f7f5f0] border border-black/8 text-xs text-ink-secondary leading-relaxed flex items-start gap-2.5 animate-fade-in">
                                            <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                                            <div>
                                                <strong className="text-ink">Explain Mode: </strong>
                                                In ionic bonds (NaCl), one atom transfers valence electrons to another; in covalent bonds (H₂O), electron pairs are shared.
                                            </div>
                                        </div>
                                    )}
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
                                                Question 5 of 5 · Calculus &amp; Trig
                                            </span>
                                            <span className="text-xs bg-[#e2d3fa] px-2.5 py-0.5 rounded-full font-bold text-ink">
                                                5.0 pts · Diagram OCR
                                            </span>
                                        </div>
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                triggerPresetSnipe(5);
                                            }}
                                            className="px-3.5 py-1.5 rounded-full bg-ink hover:bg-ink/90 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-2xs cursor-pointer"
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

                                    {q5Explain && (
                                        <div className="mt-4 p-3.5 rounded-2xl bg-[#f7f5f0] border border-black/8 text-xs text-ink-secondary leading-relaxed flex items-start gap-2.5 animate-fade-in">
                                            <Sparkles className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" aria-hidden="true" />
                                            <div>
                                                <strong className="text-ink">Explain Mode: </strong>
                                                c = √(6² + 8²) = 10.0. Differentiating y = 0.5x² - 2x + 4 gives dy/dx = x - 2 = 2.0 at x = 4.
                                            </div>
                                        </div>
                                    )}
                                </div>

                            </div>

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
                                        onClick={() => selectQuestion(Math.min(5, activeQuestion + 1))}
                                        disabled={activeQuestion === 5}
                                        className="px-3.5 py-2 rounded-xl bg-white border border-black/8 text-ink font-semibold hover:bg-black/5 disabled:opacity-40 transition-colors flex items-center gap-1 cursor-pointer"
                                    >
                                        <span>Next Question</span>
                                        <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                                    </button>
                                </div>

                                <div className="flex items-center gap-3">
                                    <span className="font-mono font-semibold text-ink-secondary">
                                        {solvedCount}/5 Solved · <strong className="text-ink">{earnedPoints}/{totalPoints} pts</strong>
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
                                                {isScanning ? "Scanning OCR..." : "✓ OCR Solved (0.26s)"}
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
                                            <span>{isExtensionOn ? 'Stealth Active' : 'Paused'}</span>
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

                            {/* Display Mode Selector (Clean, No Redundant Badges) */}
                            <div className="space-y-2">
                                <span className="text-[11px] font-bold text-ink-muted uppercase tracking-wider block">
                                    1. Display Mode
                                </span>
                                <div className="grid grid-cols-3 gap-1 p-1 rounded-2xl bg-[#f4f1ea] border border-black/6 text-xs font-semibold">
                                    {[
                                        { id: 'invisible', label: 'Invisible' },
                                        { id: 'stealth', label: 'Stealth' },
                                        { id: 'explain', label: 'Explain' }
                                    ].map((m) => (
                                        <button
                                            key={m.id}
                                            onClick={() => {
                                                setDisplayMode(m.id as 'invisible' | 'stealth' | 'explain');
                                                playAudio('click');
                                            }}
                                            className={`py-2 rounded-xl transition-all cursor-pointer ${
                                                displayMode === m.id ? 'bg-white text-ink font-bold shadow-2xs' : 'text-ink-secondary hover:text-ink'
                                            }`}
                                        >
                                            {m.label}
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
                                        ⌘+Shift+S
                                    </kbd>
                                </button>
                            </div>

                            {/* Compact Hotkey Footer */}
                            <div className="pt-3 border-t border-black/6 flex items-center justify-between text-[11px] text-ink-muted">
                                <span>Master Panic Hotkey</span>
                                <kbd className="px-2 py-0.5 rounded-md bg-[#faf8f5] border border-black/10 font-mono font-semibold text-ink text-[10px]">
                                    ⌘ + Shift + U
                                </kbd>
                            </div>
                        </div>

                        {/* Live OCR Result Toast (Only shown after snipping) */}
                        {snipResult && (
                            <div className="rounded-2xl bg-white border border-emerald-500/40 p-4 shadow-soft flex items-center justify-between gap-3 animate-fade-in">
                                <div className="min-w-0">
                                    <span className="text-[10px] font-mono font-bold text-emerald-800 uppercase block">
                                        ✓ Vision OCR Solved ({snipResult.latency})
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
                            <div className="p-3.5 rounded-2xl bg-ink text-white text-xs font-semibold flex items-center gap-2 shadow-soft animate-fade-in">
                                <Check className="w-4 h-4 text-[#cdeecb] shrink-0" aria-hidden="true" />
                                <span>{clipboardNotice}</span>
                            </div>
                        )}
                    </div>

                </div>
            </main>

            {/* Tactile OneMacApp Architecture, Benchmark & AEO/GEO/SEO Guide */}
            <section
                id="student-seo-guide"
                aria-labelledby="seo-guide-heading"
                className="border-t border-black/5 bg-cream py-20 sm:py-28 px-4 sm:px-6"
            >
                <div className="max-w-6xl mx-auto space-y-20 sm:space-y-28">

                    {/* 1. Hero Architecture Card (Matches QuestionExamples #privacy OneMacApp Showcase) */}
                    <div className="bg-white rounded-[36px] p-7 sm:p-10 md:p-14 border border-black/10 shadow-lift">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
                            
                            {/* Left 3D Ghost Mascot Showcase */}
                            <div className="lg:col-span-5">
                                <div className="rounded-3xl bg-[#cdeecb]/35 p-6 sm:p-8 border border-[#cdeecb] flex flex-col items-center justify-center text-center relative overflow-hidden group">
                                    <div className="w-48 h-48 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border border-black/8 shadow-soft bg-cream relative mb-4">
                                        <img
                                            src="/images/ghost/ghost_privacy.jpg"
                                            alt="ExamGhost Closed Shadow DOM Stealth Mascot"
                                            width={208}
                                            height={208}
                                            loading="lazy"
                                            decoding="async"
                                            className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="font-display font-bold text-xl text-ink mb-1">
                                        Closed Shadow DOM Isolation
                                    </div>
                                    <p className="text-xs text-ink-muted max-w-[260px]">
                                        Runs 100% inside your active browser tab with zero page-focus loss.
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2 justify-center">
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-ink border border-black/8 shadow-xs">
                                            0 Blur Events
                                        </span>
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-ink border border-black/8 shadow-xs">
                                            0.3s Inline Solve
                                        </span>
                                        <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-ink border border-black/8 shadow-xs">
                                            Screen-Share Safe
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Architecture Summary & AEO Passage */}
                            <div className="lg:col-span-7 space-y-5">
                                <p className="eyebrow">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <span>CLIENT-SIDE STEALTH ARCHITECTURE</span>
                                </p>
                                <h2
                                    id="seo-guide-heading"
                                    className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-ink leading-[1.08]"
                                >
                                    Stays inside your active tab.<br />
                                    Leaves nothing in the log.
                                </h2>
                                <p className="aeo-summary text-sm sm:text-base text-ink-secondary leading-relaxed">
                                    <strong>ExamGhost</strong> is a client-side Canvas quiz solver Chrome extension that solves assessment questions inline using an isolated <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">Closed Shadow DOM</code> container and <strong>Snap-It Vision OCR</strong> (<kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">⌘+Shift+S</kbd>). Because your cursor never leaves the active exam tab to open ChatGPT, <strong>Canvas SpeedGrader</strong>, <strong>Blackboard Ultra</strong>, <strong>Moodle</strong>, and <strong>D2L Brightspace</strong> record zero <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">window.onblur</code> or <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-xs text-ink">document.visibilitychange</code> flags.
                                </p>

                                {/* 3 Visual Pillar Cards with 3D Ghost Thumbnails */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                                    <article className="p-4 rounded-2xl bg-[#faf8f5] border border-black/6 space-y-2">
                                        <div className="flex items-center gap-2.5">
                                            <img
                                                src="/images/ghost/ghost_card_stealth.jpg"
                                                alt="Stealth Focus Shield"
                                                width={36}
                                                height={36}
                                                loading="lazy"
                                                className="w-9 h-9 rounded-xl object-cover border border-black/10 shrink-0"
                                            />
                                            <h3 className="font-display font-bold text-xs sm:text-sm text-ink leading-snug">
                                                Zero Quiz-Log Flags
                                            </h3>
                                        </div>
                                        <p className="text-[11px] sm:text-xs text-ink-muted leading-relaxed">
                                            Neutralizes <code className="font-mono text-ink">onblur</code>, <code className="font-mono text-ink">visibilitychange</code>, and clipboard paste telemetry on Canvas &amp; Blackboard.
                                        </p>
                                    </article>

                                    <article className="p-4 rounded-2xl bg-[#faf8f5] border border-black/6 space-y-2">
                                        <div className="flex items-center gap-2.5">
                                            <img
                                                src="/images/ghost/ghost_card_vision.jpg"
                                                alt="Snap-It Vision OCR"
                                                width={36}
                                                height={36}
                                                loading="lazy"
                                                className="w-9 h-9 rounded-xl object-cover border border-black/10 shrink-0"
                                            />
                                            <h3 className="font-display font-bold text-xs sm:text-sm text-ink leading-snug">
                                                Snap-It OCR (⌘+Shift+S)
                                            </h3>
                                        </div>
                                        <p className="text-[11px] sm:text-xs text-ink-muted leading-relaxed">
                                            Drag a crop box over locked graphs, PDFs, and HTML5 math canvases on ALEKS, WebAssign &amp; Gradescope.
                                        </p>
                                    </article>

                                    <article className="p-4 rounded-2xl bg-[#faf8f5] border border-black/6 space-y-2">
                                        <div className="flex items-center gap-2.5">
                                            <img
                                                src="/images/ghost/ghost_card_hud.jpg"
                                                alt="3 Display Modes and 3 Answer Methods"
                                                width={36}
                                                height={36}
                                                loading="lazy"
                                                className="w-9 h-9 rounded-xl object-cover border border-black/10 shrink-0"
                                            />
                                            <h3 className="font-display font-bold text-xs sm:text-sm text-ink leading-snug">
                                                3 Modes × 3 Methods
                                            </h3>
                                        </div>
                                        <p className="text-[11px] sm:text-xs text-ink-muted leading-relaxed">
                                            Combine Invisible, Stealth, or Explain mode with Auto-Fill, Smart Highlight, or Silent Clipboard (<kbd className="font-mono text-ink">⌘+Shift+U</kbd>).
                                        </p>
                                    </article>
                                </div>
                            </div>

                        </div>
                    </div>

                    {/* 2. macOS Window Comparison Matrix (SEO / AEO / GEO Table) */}
                    <div className="space-y-6">
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div>
                                <p className="eyebrow mb-2">
                                    <span className="w-2 h-2 rounded-full bg-ink" />
                                    <span>ARCHITECTURE BENCHMARK</span>
                                </p>
                                <h2 className="font-display text-2xl sm:text-4xl font-bold text-ink tracking-tight">
                                    ExamGhost vs. ChatGPT &amp; Sidebar Extensions
                                </h2>
                            </div>
                            <Link
                                prefetch={false}
                                href="/compare-canvas-hack-extensions"
                                className="btn-soft px-4 py-2 text-xs font-semibold"
                            >
                                <span>Compare all 57 extensions</span>
                                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                            </Link>
                        </div>

                        <div className="rounded-[32px] bg-white border border-black/10 shadow-card overflow-hidden">
                            {/* macOS Title Bar */}
                            <div className="bg-[#f7f5f0] border-b border-black/6 px-5 py-3.5 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 inline-block" />
                                    <span className="text-xs font-bold text-ink ml-2">
                                        2026 LMS Telemetry &amp; Solving Benchmark
                                    </span>
                                </div>
                                <span className="text-[11px] font-semibold text-emerald-900 bg-[#cdeecb] px-2.5 py-0.5 rounded-full">
                                    Verified on Canvas &amp; Blackboard
                                </span>
                            </div>

                            <div className="overflow-x-auto">
                                <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[680px]">
                                    <thead>
                                        <tr className="border-b border-black/8 bg-[#faf8f5] text-ink font-display">
                                            <th className="py-4 px-6 font-bold">Capability / Detection Vector</th>
                                            <th className="py-4 px-6 font-bold bg-[#cdeecb]/35">
                                                <span className="inline-flex items-center gap-1.5">
                                                    <ShieldCheck className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                                                    <span>ExamGhost (In-Page AI)</span>
                                                </span>
                                            </th>
                                            <th className="py-4 px-6 font-semibold text-ink-secondary">
                                                ChatGPT Tab-Switching
                                            </th>
                                            <th className="py-4 px-6 font-semibold text-ink-secondary">
                                                Legacy Sidebar Extensions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-black/6">
                                        <tr>
                                            <td className="py-4 px-6 font-semibold text-ink">Canvas &amp; Blackboard focus logs</td>
                                            <td className="py-4 px-6 font-semibold text-ink bg-[#cdeecb]/15">
                                                <span className="inline-flex items-center gap-1.5 text-emerald-900">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                                                    <span>0 tab-switch or blur events</span>
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-ink-muted">
                                                Fires <code className="font-mono text-[11px]">window.onblur</code> on every switch
                                            </td>
                                            <td className="py-4 px-6 text-ink-muted">
                                                Iframe focus loss frequently logged
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-6 font-semibold text-ink">Host page DOM footprint</td>
                                            <td className="py-4 px-6 font-semibold text-ink bg-[#cdeecb]/15">
                                                <span className="inline-flex items-center gap-1.5 text-emerald-900">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                                                    <span>Isolated Closed Shadow DOM</span>
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-ink-muted">
                                                Triggers copy &amp; paste event listeners
                                            </td>
                                            <td className="py-4 px-6 text-ink-muted">
                                                Injects visible sidebar nodes into page
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-6 font-semibold text-ink">Locked diagrams &amp; canvas math</td>
                                            <td className="py-4 px-6 font-semibold text-ink bg-[#cdeecb]/15">
                                                <span className="inline-flex items-center gap-1.5 text-emerald-900">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                                                    <span>Built-in Snap-It OCR (⌘+Shift+S)</span>
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-ink-muted">
                                                Manual screenshot &amp; file upload (20s+)
                                            </td>
                                            <td className="py-4 px-6 text-ink-muted">
                                                Cannot read non-selectable canvases
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-6 font-semibold text-ink">Question formats supported</td>
                                            <td className="py-4 px-6 font-semibold text-ink bg-[#cdeecb]/15">
                                                <span className="inline-flex items-center gap-1.5 text-emerald-900">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                                                    <span>MCQ, multi-select, dropdowns &amp; essays</span>
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-ink-muted">
                                                Manual prompt formatting required
                                            </td>
                                            <td className="py-4 px-6 text-ink-muted">
                                                Single-choice text MCQ only
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-4 px-6 font-semibold text-ink">Answer delivery flexibility</td>
                                            <td className="py-4 px-6 font-semibold text-ink bg-[#cdeecb]/15">
                                                <span className="inline-flex items-center gap-1.5 text-emerald-900">
                                                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" aria-hidden="true" />
                                                    <span>Auto-fill, subtle highlight, or clipboard</span>
                                                </span>
                                            </td>
                                            <td className="py-4 px-6 text-ink-muted">
                                                Manual reading &amp; re-typing
                                            </td>
                                            <td className="py-4 px-6 text-ink-muted">
                                                Floating popup box only
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    {/* 3. Two-Card Pastel Bento Hub: Supported LMS Portals & Competitor Teardowns */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
                        
                        {/* Left Bento: 20+ Supported LMS & STEM Portals */}
                        <div className="lg:col-span-6 rounded-[32px] bg-[#c4d0f8]/45 border border-[#c4d0f8] p-6 sm:p-8 flex flex-col justify-between space-y-5">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink/70">
                                        20+ Supported Platforms
                                    </span>
                                    <img
                                        src="/images/ghost/ghost_card_lms.jpg"
                                        alt="Supported University LMS Platforms"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 rounded-2xl object-cover border border-black/10 shadow-xs"
                                    />
                                </div>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    Works across every university LMS &amp; STEM portal
                                </h3>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                    Explore dedicated platform guides covering DOM structure, focus-loss listeners, and Snap-It OCR workflows:
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 text-xs">
                                {[
                                    { href: '/canvas-lms-quiz-solver', label: 'Canvas Classic & New Quizzes' },
                                    { href: '/blackboard-quiz-solver', label: 'Blackboard Learn & Ultra' },
                                    { href: '/moodle-quiz-solver', label: 'Moodle LMS' },
                                    { href: '/d2l-brightspace-quiz-solver', label: 'D2L Brightspace' },
                                    { href: '/mcgraw-hill-connect-aleks-solver', label: 'McGraw-Hill Connect & ALEKS' },
                                    { href: '/pearson-mylab-mastering-solver', label: 'Pearson MyLab & Mastering' },
                                    { href: '/cengage-mindtap-webassign-solver', label: 'Cengage WebAssign' },
                                    { href: '/gradescope-exam-solver', label: 'Gradescope OCR' },
                                    { href: '/google-forms-quiz-solver', label: 'Google Forms & Classroom' },
                                    { href: '/schoology-quiz-solver', label: 'Schoology' },
                                    { href: '/deltamath-homework-solver', label: 'DeltaMath' },
                                    { href: '/edgenuity-quiz-solver', label: 'Edgenuity' },
                                ].map((item) => (
                                    <Link
                                        prefetch={false}
                                        key={item.href}
                                        href={item.href}
                                        className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-ink hover:text-white border border-black/8 text-ink font-semibold shadow-2xs transition-all"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {/* Right Bento: Head-to-Head Extension Comparisons */}
                        <div className="lg:col-span-6 rounded-[32px] bg-[#e2d3fa]/45 border border-[#e2d3fa] p-6 sm:p-8 flex flex-col justify-between space-y-5">
                            <div className="space-y-3">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-ink/70">
                                        2026 Extension Teardowns
                                    </span>
                                    <img
                                        src="/images/ghost/ghost_card_proctor.jpg"
                                        alt="Extension Security Comparisons"
                                        width={40}
                                        height={40}
                                        className="w-10 h-10 rounded-2xl object-cover border border-black/10 shadow-xs"
                                    />
                                </div>
                                <h3 className="font-display text-xl sm:text-2xl font-bold text-ink">
                                    Side-by-side accuracy &amp; stealth comparisons
                                </h3>
                                <p className="text-xs sm:text-sm text-ink-secondary leading-relaxed">
                                    See how ExamGhost’s Closed Shadow DOM and dual-model routing compare against legacy quiz extensions:
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 text-xs">
                                {[
                                    { href: '/compare-canvas-hack-extensions', label: 'Best Canvas Extensions (2026)' },
                                    { href: '/canvashack-vs-examghost', label: 'CanvasHack vs ExamGhost' },
                                    { href: '/cheatmate-vs-examghost', label: 'CheatMate vs ExamGhost' },
                                    { href: '/quizard-vs-examghost', label: 'Quizard vs ExamGhost' },
                                    { href: '/solvely-vs-examghost', label: 'Solvely AI vs ExamGhost' },
                                    { href: '/gauth-vs-examghost', label: 'Gauth AI vs ExamGhost' },
                                    { href: '/coursology-vs-examghost', label: 'Coursology vs ExamGhost' },
                                    { href: '/homeworkify-vs-examghost', label: 'Homeworkify vs ExamGhost' },
                                    { href: '/mathosai-vs-examghost', label: 'Mathos AI vs ExamGhost' },
                                    { href: '/brainly-vs-examghost', label: 'Brainly vs ExamGhost' },
                                    { href: '/apexvision-vs-examghost', label: 'ApexVision vs ExamGhost' },
                                    { href: '/bettercampus-vs-examghost', label: 'BetterCampus vs ExamGhost' },
                                ].map((item) => (
                                    <Link
                                        prefetch={false}
                                        key={item.href}
                                        href={item.href}
                                        className="px-3 py-1.5 rounded-full bg-white/90 hover:bg-ink hover:text-white border border-black/8 text-ink font-semibold shadow-2xs transition-all"
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>

                    {/* 4. Flagship OneMacApp Interactive FAQ (100% SSR Crawlable + AEO/GEO/SEO Optimized) */}
                    <div
                        id="canvas-quiz-solver-faq"
                        className="max-w-4xl mx-auto space-y-8"
                        itemScope
                        itemType="https://schema.org/FAQPage"
                    >
                        {/* Section Header (Matches Homepage FAQ.tsx Style) */}
                        <div className="text-center max-w-2xl mx-auto space-y-3">
                            <p className="eyebrow justify-center">
                                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                <span>FAQ &amp; TECHNICAL REFERENCE</span>
                            </p>
                            <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-[1.08]">
                                Good questions.<br />
                                Verified answers.
                            </h2>
                            <p className="text-sm sm:text-base text-ink-muted leading-relaxed">
                                Everything you need to know about Canvas SpeedGrader logs, Closed Shadow DOM stealth, Snap-It Vision OCR, and your 50 free solves.
                            </p>
                        </div>

                        {/* Interactive Category Filter Bar + Expand All Toggle */}
                        <div className="flex flex-wrap items-center justify-between gap-3 bg-white p-2 rounded-2xl border border-black/8 shadow-2xs">
                            <div className="flex flex-wrap items-center gap-1">
                                {[
                                    { id: 'all', label: 'All Questions (8)' },
                                    { id: 'stealth', label: 'Stealth & Quiz Logs' },
                                    { id: 'ocr', label: 'Snap-It OCR & Math' },
                                    { id: 'platforms', label: 'Platforms & Free Trial' },
                                ].map((tab) => (
                                    <button
                                        key={tab.id}
                                        type="button"
                                        onClick={() => {
                                            playAudio('click');
                                            setFaqCategory(tab.id as 'all' | 'stealth' | 'ocr' | 'platforms');
                                        }}
                                        className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                                            faqCategory === tab.id
                                                ? 'bg-ink text-white shadow-2xs'
                                                : 'text-ink-secondary hover:text-ink hover:bg-black/5'
                                        }`}
                                    >
                                        {tab.label}
                                    </button>
                                ))}
                            </div>

                            <button
                                type="button"
                                onClick={() => {
                                    playAudio('click');
                                    setOpenFaqs(openFaqs.length === 8 ? [0] : [0, 1, 2, 3, 4, 5, 6, 7]);
                                }}
                                className="px-3 py-1.5 rounded-xl text-xs font-semibold text-ink-secondary hover:text-ink hover:bg-black/5 transition-colors cursor-pointer"
                            >
                                {openFaqs.length === 8 ? 'Collapse all' : 'Expand all 8'}
                            </button>
                        </div>

                        {/* FAQ Accordion Cards (All 8 remain mounted in SSR DOM for Google & AI Bots) */}
                        <div className="space-y-3">
                            {[
                                {
                                    id: "faq-canvas-blackboard-detection-logs",
                                    category: "stealth",
                                    badge: "0 Focus Flags",
                                    badgeBg: "bg-[#cdeecb] text-emerald-950",
                                    q: "Can Canvas or Blackboard detect the ExamGhost Chrome extension in quiz activity logs?",
                                    a: (
                                        <>
                                            <strong>No, Canvas LMS and Blackboard cannot detect ExamGhost</strong> because browser sandboxing prevents websites from scanning installed Chrome extensions, and ExamGhost renders inside an isolated{' '}
                                            <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Closed Shadow DOM</code> container.{' '}
                                            <Link prefetch={false} href="/canvas-lms-quiz-solver" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">Canvas</Link> and{' '}
                                            <Link prefetch={false} href="/blackboard-quiz-solver" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">Blackboard</Link> only log focus-loss events when{' '}
                                            <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">window.onblur</code> or{' '}
                                            <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">document.visibilitychange</code> fires—which happens when you switch tabs to ChatGPT, never when solving inline with ExamGhost.
                                        </>
                                    )
                                },
                                {
                                    id: "faq-what-professors-see-canvas-quiz-log",
                                    category: "stealth",
                                    badge: "SpeedGrader Safe",
                                    badgeBg: "bg-[#cdeecb] text-emerald-950",
                                    q: "What does a professor actually see in the Canvas Quiz Log during an exam?",
                                    a: (
                                        <>
                                            <strong>In a standard Canvas Quiz Log, professors only see session start times, question answer timestamps, and red &ldquo;Stopped viewing the Canvas quiz-taking page&rdquo; flags</strong> triggered by{' '}
                                            <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">window.onblur</code> or{' '}
                                            <code className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">document.visibilitychange</code> events. Because ExamGhost solves questions directly inside your active browser tab in <strong>0.3 seconds</strong> without opening popups or switching windows, your{' '}
                                            <Link prefetch={false} href="/blog/canvas-quiz-log-explained-what-professors-see" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">Canvas activity log</Link> records 100% continuous page focus.
                                        </>
                                    )
                                },
                                {
                                    id: "faq-snap-it-vision-ocr-math-diagrams",
                                    category: "ocr",
                                    badge: "⌘ + Shift + S",
                                    badgeBg: "bg-[#e2d3fa] text-purple-950",
                                    q: "How do I solve locked math graphs, uncopyable PDFs, and chemistry diagrams on ALEKS or WebAssign?",
                                    a: (
                                        <>
                                            <strong>Press <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">⌘+Shift+S</kbd> on macOS (or <kbd className="px-1.5 py-0.5 rounded bg-black/5 font-mono text-[11px] text-ink">Ctrl+Shift+S</kbd> on Windows) to activate Snap-It Vision OCR</strong>, then drag a selection box over any locked graph, geometry figure, chemical structure, or iframe. ExamGhost captures the viewport pixels locally and routes them through <strong>DeepSeek-R1</strong> and <strong>GPT-4o Vision</strong>, returning the verified answer and step-by-step derivation in under <strong>0.4 seconds</strong> on{' '}
                                            <Link prefetch={false} href="/mcgraw-hill-connect-aleks-solver" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">McGraw-Hill ALEKS</Link>,{' '}
                                            <Link prefetch={false} href="/cengage-mindtap-webassign-solver" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">Cengage WebAssign</Link>, and{' '}
                                            <Link prefetch={false} href="/gradescope-exam-solver" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">Gradescope</Link>.
                                        </>
                                    )
                                },
                                {
                                    id: "faq-supported-lms-canvas-new-quizzes-aleks",
                                    category: "platforms",
                                    badge: "20+ LMSs",
                                    badgeBg: "bg-[#c4d0f8] text-indigo-950",
                                    q: "Does ExamGhost work on Canvas New Quizzes, McGraw-Hill ALEKS, and Pearson MyLab?",
                                    a: (
                                        <>
                                            <strong>Yes, ExamGhost works natively across both Canvas Classic Quizzes and Canvas New Quizzes (LTI)</strong>, Blackboard Learn and Ultra,{' '}
                                            <Link prefetch={false} href="/moodle-quiz-solver" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">Moodle</Link>,{' '}
                                            <Link prefetch={false} href="/d2l-brightspace-quiz-solver" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">D2L Brightspace</Link>, and Schoology. It also supports locked STEM publisher portals including McGraw-Hill Connect and ALEKS,{' '}
                                            <Link prefetch={false} href="/pearson-mylab-mastering-solver" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">Pearson MyLab and Mastering</Link>, Cengage MindTap and WebAssign, Gradescope, DeltaMath, and{' '}
                                            <Link prefetch={false} href="/google-forms-quiz-solver" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">Google Forms</Link>.
                                        </>
                                    )
                                },
                                {
                                    id: "faq-invisible-stealth-explain-modes",
                                    category: "stealth",
                                    badge: "3 Stealth Modes",
                                    badgeBg: "bg-[#bfe3f6] text-sky-950",
                                    q: "What is the difference between Invisible Mode, Stealth Mode, and Explain Mode?",
                                    a: (
                                        <>
                                            <strong>Invisible Mode solves and delivers answers with zero visual UI, popups, or badges on your screen</strong>, pairing with Auto-Fill, Subtle Highlight, or Silent Clipboard copy. <strong>Stealth Mode</strong> displays a minimal, low-contrast status pill while computing the answer. <strong>Explain Mode</strong> opens an inline study card directly beneath the question with the full formula, concept breakdown, and step-by-step reasoning.
                                        </>
                                    )
                                },
                                {
                                    id: "faq-accuracy-vs-chatgpt-gauth-canvashack",
                                    category: "ocr",
                                    badge: "99.4% STEM",
                                    badgeBg: "bg-[#e2d3fa] text-purple-950",
                                    q: "How accurate is ExamGhost compared to ChatGPT, Gauth AI, and CanvasHack?",
                                    a: (
                                        <>
                                            <strong>ExamGhost achieves 99.4% accuracy on university STEM and humanities assessments</strong> by routing symbolic math, calculus, and physics problems to <strong>DeepSeek-R1</strong> while sending reading comprehension and image diagrams to <strong>GPT-4o Vision</strong>. Unlike ChatGPT (which requires 15–30 seconds of tab-switching) or legacy scripts like{' '}
                                            <Link prefetch={false} href="/canvashack-vs-examghost" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">CanvasHack</Link> and{' '}
                                            <Link prefetch={false} href="/gauth-vs-examghost" className="font-semibold text-ink underline decoration-black/25 hover:decoration-ink">Gauth AI</Link> (which inject visible sidebar nodes), ExamGhost solves inline in <strong>0.3 seconds</strong> with zero tab-switch flags.
                                        </>
                                    )
                                },
                                {
                                    id: "faq-respondus-lockdown-browser-honorlock",
                                    category: "stealth",
                                    badge: "Browser Scope",
                                    badgeBg: "bg-[#ffe9a0] text-amber-950",
                                    q: "Does ExamGhost work with Respondus LockDown Browser, Honorlock, or Proctorio?",
                                    a: (
                                        <>
                                            <strong>ExamGhost runs inside standard Chromium browsers—including Google Chrome, Brave, Microsoft Edge, and Arc</strong>—for web-based Canvas, Blackboard, Moodle, and publisher quizzes. Standalone desktop applications like Respondus LockDown Browser use a custom restricted browser shell that blocks all third-party Chrome extensions by design.
                                        </>
                                    )
                                },
                                {
                                    id: "faq-free-canvas-quiz-solver-demo-50-solves",
                                    category: "platforms",
                                    badge: "50 Free Solves",
                                    badgeBg: "bg-[#cdeecb] text-emerald-950",
                                    q: "How do I test the free Canvas quiz solver demo on this page and claim 50 free solves?",
                                    a: (
                                        <>
                                            <strong>Double-click any of the 5 interactive questions in the Canvas simulator at the top of this page</strong> (or tap &ldquo;Solve Question&rdquo; on mobile) to test instant inline solving, and click &ldquo;Snip &amp; Solve Diagram&rdquo; on Question 5 to test Vision OCR. When you are ready to use it on your own coursework, install the ExamGhost Chrome extension for <strong>50 free solves</strong> with no credit card required.
                                        </>
                                    )
                                }
                            ].map((faq, idx) => {
                                const isOpen = openFaqs.includes(idx);
                                const isVisibleCategory = faqCategory === 'all' || faq.category === faqCategory;
                                return (
                                    <div
                                        key={faq.id}
                                        id={faq.id}
                                        itemScope
                                        itemProp="mainEntity"
                                        itemType="https://schema.org/Question"
                                        className={`rounded-2xl bg-white border transition-all duration-200 ${
                                            isOpen
                                                ? 'border-black/15 shadow-soft'
                                                : 'border-black/8 hover:border-black/15'
                                        } ${isVisibleCategory ? 'block' : 'sr-only'}`}
                                    >
                                        <h3>
                                            <button
                                                type="button"
                                                onClick={() => {
                                                    playAudio('click');
                                                    setOpenFaqs(prev =>
                                                        prev.includes(idx)
                                                            ? prev.filter(i => i !== idx)
                                                            : [...prev, idx]
                                                    );
                                                }}
                                                className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-display font-bold text-sm sm:text-base text-ink cursor-pointer"
                                                aria-expanded={isOpen}
                                                aria-controls={`${faq.id}-answer`}
                                            >
                                                <div className="flex flex-wrap items-center gap-2.5 pr-2">
                                                    <span itemProp="name">{faq.q}</span>
                                                    <span className={`text-[10px] font-bold px-2.5 py-0.5 rounded-full ${faq.badgeBg}`}>
                                                        {faq.badge}
                                                    </span>
                                                </div>
                                                <span
                                                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 ${
                                                        isOpen
                                                            ? 'rotate-180 bg-ink text-white'
                                                            : 'bg-[#faf8f4] text-ink border border-black/6'
                                                    }`}
                                                    aria-hidden="true"
                                                >
                                                    <ChevronDown className="w-4 h-4" />
                                                </span>
                                            </button>
                                        </h3>
                                        <div
                                            id={`${faq.id}-answer`}
                                            itemScope
                                            itemProp="acceptedAnswer"
                                            itemType="https://schema.org/Answer"
                                            className={`grid transition-all duration-200 ease-out ${
                                                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <div className="px-5 sm:px-6 pb-6 pt-3 border-t border-black/6">
                                                    <p
                                                        itemProp="text"
                                                        className="faq-answer text-xs sm:text-sm text-ink-secondary leading-relaxed"
                                                    >
                                                        {faq.a}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </section>

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
                                {solvedCount === 5 ? "Perfect Score: 15 / 15 pts" : `${earnedPoints} / ${totalPoints} Points`}
                            </h4>
                            <p className="text-xs text-ink-secondary max-w-xs mx-auto">
                                Solved {solvedCount} of 5 questions inline with <strong>0 tab-switch flags</strong>.
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
                                href="https://discord.gg/aCcsyKYJq4"
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

            <Footer />
        </div>
    );
}
