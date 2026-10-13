'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { 
    Check, Sparkles, CheckCircle2, Shield, Lock, 
    RefreshCw, Eye, EyeOff, Layers, Copy, MousePointer, 
    ChevronRight, ArrowRight, ShieldCheck, Clock, Crop, 
    Volume2, VolumeX, Flag, Zap, AlertCircle, X, Maximize2, 
    FileText, CheckCheck, Compass, BookOpen, Calendar, 
    Inbox, HelpCircle, GraduationCap, ChevronDown, CheckSquare,
    Sliders, Sparkle, ExternalLink
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

    // Synthesized Audio Feedback (Web Audio API - 100% self-contained)
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
                osc.frequency.setValueAtTime(523.25, ctx.currentTime); // C5
                osc.frequency.setValueAtTime(659.25, ctx.currentTime + 0.07); // E5
                osc.frequency.setValueAtTime(783.99, ctx.currentTime + 0.14); // G5
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

    const scrollToQuestion = (qNum: number) => {
        const ref = questionRefs[qNum as keyof typeof questionRefs];
        if (ref?.current) {
            ref.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            playAudio('click');
        }
    };

    // Keyboard Shortcuts Listener (⌘+Shift+S for Snipe, ⌘+Shift+U for Toggle, Esc to cancel)
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            const isModifier = e.metaKey || e.ctrlKey;
            
            // ⌘+Shift+S -> Toggle Snipe Tool
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

            // ⌘+Shift+U -> Master Power Toggle
            if (isModifier && e.shiftKey && e.key.toLowerCase() === 'u') {
                e.preventDefault();
                setIsExtensionOn(prev => {
                    playAudio('click');
                    return !prev;
                });
            }

            // Esc -> Cancel Snipe Mode
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
        setSolvingId(1);
        playAudio('click');
        const delay = displayMode === 'invisible' ? 120 : 550;
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
        setSolvingId(2);
        playAudio('click');
        const delay = displayMode === 'invisible' ? 120 : 550;
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
        setSolvingId(3);
        playAudio('click');
        const delay = displayMode === 'invisible' ? 120 : 550;
        setTimeout(() => {
            setSolvingId(null);
            playAudio('solve');
            if (answerMethod === 'autofill') {
                setQ3State(['A', 'B', 'D']);
            } else if (answerMethod === 'highlight') {
                setQ3Highlighted(true);
                setTimeout(() => setQ3Highlighted(false), 4500);
            } else if (answerMethod === 'clipboard') {
                showClipboardToast("Copied: 'push(), A stack, pop()'");
            }
            if (displayMode === 'explain') {
                setQ3Explain(true);
            }
        }, delay);
    }, [isExtensionOn, displayMode, answerMethod, playAudio]);

    const handleSolveQ4 = useCallback(() => {
        if (!isExtensionOn) return;
        setSolvingId(4);
        playAudio('click');
        const delay = displayMode === 'invisible' ? 120 : 550;
        setTimeout(() => {
            setSolvingId(null);
            playAudio('solve');
            const answer = "Ionic bonds involve complete valence electron transfer creating oppositely charged ions, while covalent bonds involve mutual sharing of electron pairs in overlapping orbitals.";
            if (answerMethod === 'autofill' || answerMethod === 'highlight') {
                setQ4Text(answer);
            } else if (answerMethod === 'clipboard') {
                showClipboardToast("Copied full short-answer explanation to clipboard!");
            }
            if (displayMode === 'explain') {
                setQ4Explain(true);
            }
        }, delay);
    }, [isExtensionOn, displayMode, answerMethod, playAudio]);

    const handleSolveQ5 = useCallback(() => {
        if (!isExtensionOn) return;
        setSolvingId(5);
        playAudio('click');
        const delay = displayMode === 'invisible' ? 120 : 600;
        setTimeout(() => {
            setSolvingId(null);
            playAudio('solve');
            if (answerMethod === 'autofill') {
                setQ5State('B');
            } else if (answerMethod === 'highlight') {
                setQ5Highlighted(true);
                setTimeout(() => setQ5Highlighted(false), 4500);
            } else if (answerMethod === 'clipboard') {
                showClipboardToast("Copied: 'c = 10, dy/dx = 2.0 (Option B)'");
            }
            if (displayMode === 'explain') {
                setQ5Explain(true);
            }
        }, delay);
    }, [isExtensionOn, displayMode, answerMethod, playAudio]);

    // Speedrun: Auto-Solve All Questions in Sequence
    const handleSpeedrunAll = () => {
        if (!isExtensionOn || isSpeedrunning) return;
        setIsSpeedrunning(true);
        playAudio('snip');
        
        handleSolveQ1();
        setTimeout(() => handleSolveQ2(), 300);
        setTimeout(() => handleSolveQ3(), 600);
        setTimeout(() => handleSolveQ4(), 900);
        setTimeout(() => {
            handleSolveQ5();
            setIsSpeedrunning(false);
            playAudio('success');
        }, 1200);
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
    };

    // Trigger Preset Snipe (Quick Test on Diagram)
    const triggerPresetSnipe = (targetQ: number = 5) => {
        if (!quizAreaRef.current) return;
        setIsSniping(true);
        playAudio('snip');

        // Scroll to question 5
        scrollToQuestion(targetQ);

        setTimeout(() => {
            const targetEl = questionRefs[targetQ as keyof typeof questionRefs]?.current;
            const containerRect = quizAreaRef.current?.getBoundingClientRect();
            if (!targetEl || !containerRect) return;

            const targetRect = targetEl.getBoundingClientRect();
            const relX = Math.max(10, targetRect.left - containerRect.left + 20);
            const relY = Math.max(10, targetRect.top - containerRect.top + 30);
            const relW = Math.min(containerRect.width - 40, targetRect.width - 40);
            const relH = Math.min(targetRect.height - 50, 240);

            setSnipeBox({ x: relX, y: relY, w: relW, h: relH });
            setIsScanning(true);
            playAudio('snip');

            // Simulate OCR Processing
            setTimeout(() => {
                setIsScanning(false);
                playAudio('success');
                
                const result: SnipResult = {
                    questionId: 5,
                    title: "Calculus & Geometry: Triangle c and Derivative dy/dx",
                    detectedText: "Right triangle legs a = 6, b = 8. Curve y = 0.5x² - 2x + 4 at x = 4. Hypotenuse c = √(6² + 8²) = 10. dy/dx = x - 2 = 4 - 2 = 2.0.",
                    answer: "Option B: c = 10, dy/dx = 2.0",
                    explanation: "By Pythagorean theorem, c = √(36 + 64) = √100 = 10. Taking derivative dy/dx = d/dx(0.5x² - 2x + 4) = x - 2. At x = 4, dy/dx = 4 - 2 = 2.0.",
                    confidence: "99.9%",
                    latency: "0.26s"
                };
                setSnipResult(result);

                // Auto-solve question 5
                if (answerMethod === 'autofill') {
                    setQ5State('B');
                } else if (answerMethod === 'highlight') {
                    setQ5Highlighted(true);
                    setTimeout(() => setQ5Highlighted(false), 4500);
                } else if (answerMethod === 'clipboard') {
                    showClipboardToast("Copied OCR answer: 'c = 10, dy/dx = 2.0'");
                }
                if (displayMode === 'explain') {
                    setQ5Explain(true);
                }

                // Close snipe scrim after 1.5s
                setTimeout(() => {
                    setIsSniping(false);
                }, 1600);
            }, 850);
        }, 300);
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

        // Minimum box threshold
        if (w < 25 || h < 20) {
            setSnipeBox(null);
            return;
        }

        const box = { x, y, w, h };
        setSnipeBox(box);
        setIsScanning(true);
        playAudio('snip');

        // Determine which question intersects with snipe box
        const containerRect = quizAreaRef.current.getBoundingClientRect();
        let targetQ = 5; // default to visual diagram question

        for (const [qNum, ref] of Object.entries(questionRefs)) {
            if (ref.current) {
                const qRect = ref.current.getBoundingClientRect();
                const qRelY = qRect.top - containerRect.top;
                const qRelBottom = qRect.bottom - containerRect.top;
                if (y >= qRelY - 50 && y <= qRelBottom + 50) {
                    targetQ = Number(qNum);
                    break;
                }
            }
        }

        // Trigger OCR Solve
        setTimeout(() => {
            setIsScanning(false);
            playAudio('success');

            let detectedText = "";
            let answer = "";
            let explanation = "";

            if (targetQ === 1) {
                handleSolveQ1();
                detectedText = "Mitochondria primary function in eukaryotic cells?";
                answer = "Option B: ATP production through cellular respiration";
                explanation = "Generates high-energy ATP through aerobic cellular respiration.";
            } else if (targetQ === 2) {
                handleSolveQ2();
                detectedText = "Ivan Pavlov classical conditioning dogs salivation?";
                answer = "True";
                explanation = "Demonstrated conditioned reflexes pairing metronomes with feeding.";
            } else if (targetQ === 3) {
                handleSolveQ3();
                detectedText = "LIFO (Last In, First Out) stack operations?";
                answer = "push(), A stack, pop()";
                explanation = "Stacks push and pop from top; queues are FIFO.";
            } else if (targetQ === 4) {
                handleSolveQ4();
                detectedText = "Difference between ionic and covalent bond electron behavior?";
                answer = "Ionic transfers electrons; covalent shares electron pairs.";
                explanation = "Electronegativity differential dictates transfer vs orbital overlap.";
            } else {
                handleSolveQ5();
                detectedText = "Calculus & Geometry: Legs a=6, b=8, hypotenuse c and dy/dx at x=4";
                answer = "Option B: c = 10, dy/dx = 2.0";
                explanation = "c = √(6² + 8²) = 10. dy/dx = x - 2 = 4 - 2 = 2.0.";
            }

            setSnipResult({
                questionId: targetQ,
                title: `Question ${targetQ} Sniped`,
                detectedText,
                answer,
                explanation,
                confidence: "99.8%",
                latency: "0.28s"
            });

            // Dismiss snipe overlay after 2 seconds
            setTimeout(() => {
                setIsSniping(false);
            }, 2200);
        }, 850);
    };

    return (
        <div className="min-h-screen bg-cream text-ink font-sans selection:bg-emerald-500/20">
            
            {/* Top Navigation */}
            <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-black/5 px-4 sm:px-6 py-3">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-black/10 shadow-xs bg-[#c4d0f8] shrink-0">
                            <img 
                                src="/images/ghost/ghost_mascot_hero.jpg" 
                                alt="ExamGhost Logo" 
                                width={32} 
                                height={32} 
                                className="w-full h-full object-cover scale-110" 
                            />
                        </div>
                        <span className="font-display font-bold text-lg text-ink">ExamGhost</span>
                        <span className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-950 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                            <span>Canvas Sandbox v4.2</span>
                        </span>
                    </Link>

                    {/* Quick Action Bar */}
                    <div className="flex items-center gap-2 sm:gap-3">
                        {/* Audio Toggle */}
                        <button
                            onClick={() => {
                                setSoundEnabled(!soundEnabled);
                                playAudio('click');
                            }}
                            className={`p-2 rounded-xl border text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                                soundEnabled 
                                    ? 'bg-white border-black/10 text-ink hover:bg-black/5' 
                                    : 'bg-black/5 border-black/10 text-ink-muted line-through'
                            }`}
                            aria-label={soundEnabled ? "Disable sound feedback" : "Enable sound feedback"}
                            title="Toggle haptic audio synthesis"
                        >
                            {soundEnabled ? (
                                <Volume2 className="w-4 h-4 text-emerald-600" aria-hidden="true" />
                            ) : (
                                <VolumeX className="w-4 h-4 text-ink-muted" aria-hidden="true" />
                            )}
                            <span className="hidden md:inline">{soundEnabled ? "SFX On" : "Muted"}</span>
                        </button>

                        {/* Interactive Snap-It Snipe Tool Launch Button */}
                        <button
                            onClick={() => {
                                setIsSniping(!isSniping);
                                playAudio('snip');
                            }}
                            className={`px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold transition-all flex items-center gap-2 border shadow-xs ${
                                isSniping 
                                    ? 'bg-emerald-800 text-white border-emerald-900 animate-pulse' 
                                    : 'bg-emerald-50 text-emerald-950 border-emerald-300 hover:bg-emerald-100'
                            }`}
                        >
                            <Crop className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                            <span>
                                {isSniping ? "Sniping Active (Esc)" : "✂️ Test Snap-It Snipe (⌘+Shift+S)"}
                            </span>
                        </button>

                        <a
                            href="https://discord.gg/aCcsyKYJq4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-dark px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs font-bold rounded-full shadow-xs"
                        >
                            <FaChrome className="w-3.5 h-3.5 text-[#bfe3f6]" aria-hidden="true" />
                            <span className="hidden sm:inline">Add to Chrome — Free</span>
                            <span className="sm:hidden">Install</span>
                        </a>
                    </div>
                </div>
            </header>

            {/* Sandbox Hero Header */}
            <section className="pt-8 pb-6 px-4 sm:px-6 text-center max-w-4xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/80 border border-emerald-300 text-xs font-bold text-emerald-950 mb-3 shadow-xs">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 animate-ping" />
                    <span>CANVAS LMS LIVE EXAM SIMULATOR</span>
                </div>
                <h1 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-ink leading-[1.1] mb-3">
                    Test the Invisible AI Solver.<br />
                    <span className="text-emerald-800">Double-click or drag to snip.</span>
                </h1>
                <p className="text-xs sm:text-sm text-ink-muted max-w-2xl mx-auto leading-relaxed">
                    Test ExamGhost in this real Canvas exam replica. Double-click any question for instant inline solves, or press <kbd className="px-1.5 py-0.5 rounded bg-black/5 border border-black/10 font-mono text-xs font-bold text-ink">⌘+Shift+S</kbd> to drag and snip visual diagrams with Snap-It Vision OCR.
                </p>

                {/* Score & Progress Strip */}
                <div className="mt-5 flex flex-wrap items-center justify-center gap-3 text-xs">
                    <div className="px-3.5 py-1.5 rounded-full bg-white border border-black/10 shadow-xs flex items-center gap-2 font-semibold">
                        <span className="text-ink-muted">Solved:</span>
                        <span className="font-mono font-bold text-emerald-800">{solvedCount} / 5</span>
                        <span className="text-ink-muted">({Math.round((solvedCount / 5) * 100)}%)</span>
                    </div>

                    <div className="px-3.5 py-1.5 rounded-full bg-white border border-black/10 shadow-xs flex items-center gap-2 font-semibold">
                        <span className="text-ink-muted">Score:</span>
                        <span className="font-mono font-bold text-ink">{earnedPoints}.0 / {totalPoints}.0 pts</span>
                    </div>

                    <button
                        onClick={handleSpeedrunAll}
                        disabled={isSpeedrunning || !isExtensionOn}
                        className="px-3.5 py-1.5 rounded-full bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-950 font-bold transition-colors flex items-center gap-1.5 disabled:opacity-50"
                        title="Cascades solves across all 5 questions"
                    >
                        <Zap className="w-3.5 h-3.5 text-amber-700" aria-hidden="true" />
                        <span>{isSpeedrunning ? "Speedrunning..." : "⚡ Auto-Solve All 5 (Speedrun)"}</span>
                    </button>

                    <button
                        onClick={handleResetAll}
                        className="px-3.5 py-1.5 rounded-full bg-white hover:bg-black/5 border border-black/10 text-ink-secondary font-semibold transition-colors flex items-center gap-1.5"
                    >
                        <RefreshCw className="w-3 h-3 text-ink-muted" aria-hidden="true" />
                        <span>Reset All</span>
                    </button>
                </div>
            </section>

            {/* Main Interactive Sandbox Layout */}
            <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left Column: Authentic Canvas LMS Exam Frame (8 cols) */}
                    <div className="lg:col-span-8 space-y-4">
                        
                        {/* Instructional Banner & Quick Snipe Demo bar */}
                        <div className="rounded-2xl p-4 bg-emerald-50 border border-emerald-300 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs sm:text-sm text-emerald-950 shadow-xs">
                            <div className="flex items-center gap-2.5">
                                <MousePointer className="w-4 h-4 text-emerald-700 shrink-0" aria-hidden="true" />
                                <span>
                                    <strong>How to test:</strong> Double-click text questions, or click <strong>Snap-It Snipe</strong> to select diagrams.
                                </span>
                            </div>
                            <div className="flex items-center gap-2 shrink-0">
                                <button
                                    onClick={() => triggerPresetSnipe(5)}
                                    className="px-3 py-1 rounded-xl bg-white hover:bg-emerald-100 border border-emerald-300 text-emerald-950 font-bold transition-all flex items-center gap-1.5 shadow-2xs"
                                >
                                    <Crop className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                                    <span>Try Diagram Snip</span>
                                </button>
                            </div>
                        </div>

                        {/* Authentic Canvas Exam Window with Browser Chrome */}
                        <div 
                            ref={quizAreaRef}
                            className="rounded-[28px] bg-white border border-black/10 shadow-card overflow-hidden relative select-none"
                        >
                            
                            {/* macOS Chrome Header with Canvas LMS URL */}
                            <div className="bg-[#f0f2f5] px-4 py-3 border-b border-black/10 flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <span className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10 inline-block" />
                                    <span className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10 inline-block" />
                                    <span className="text-xs font-mono text-ink-muted ml-3 truncate max-w-xs sm:max-w-md">
                                        🔒 canvas.university.edu/courses/BIO-101/quizzes/midterm-attempt-1
                                    </span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-[11px] font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                                        Zero Proctor Flags
                                    </span>
                                </div>
                            </div>

                            {/* Canvas Authentic Top Course Banner */}
                            <div className="bg-[#2d3b45] text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center text-white font-bold text-sm border border-white/10">
                                        🎓
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-2 text-[11px] text-white/70 font-semibold">
                                            <span>BIO / CS / MATH 101</span>
                                            <span>·</span>
                                            <span>Spring 2026</span>
                                        </div>
                                        <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                                            Comprehensive Midterm Examination (Attempt 1)
                                        </h2>
                                    </div>
                                </div>

                                {/* Live Timer & Points */}
                                <div className="flex items-center gap-3">
                                    <div className="flex items-center gap-2 font-mono text-xs font-bold px-3 py-1.5 rounded-xl bg-black/30 text-white border border-white/10">
                                        <Clock className="w-3.5 h-3.5 text-amber-400" aria-hidden="true" />
                                        <span>{formatTimer(timeLeft)}</span>
                                    </div>
                                    <button
                                        onClick={() => setIsTimerRunning(!isTimerRunning)}
                                        className="text-[10px] text-white/60 hover:text-white underline"
                                    >
                                        {isTimerRunning ? 'Pause' : 'Resume'}
                                    </button>
                                </div>
                            </div>

                            {/* Canvas Breadcrumb Bar & Quick Navigation */}
                            <div className="px-6 py-2.5 bg-[#f8f9fa] border-b border-black/5 flex flex-wrap items-center justify-between text-xs text-ink-muted">
                                <div className="flex items-center gap-1.5">
                                    <span className="hover:underline cursor-pointer">Courses</span>
                                    <ChevronRight className="w-3 h-3 text-ink-muted" aria-hidden="true" />
                                    <span className="hover:underline cursor-pointer">Science & Logic</span>
                                    <ChevronRight className="w-3 h-3 text-ink-muted" aria-hidden="true" />
                                    <span className="font-semibold text-ink">Quizzes: Midterm Exam</span>
                                </div>

                                <div className="flex items-center gap-2 font-semibold">
                                    <span>5 Questions</span>
                                    <span>·</span>
                                    <span>15.0 Total Points</span>
                                </div>
                            </div>

                            {/* Canvas Exam Content Area */}
                            <div className="p-6 sm:p-8 space-y-8 bg-white relative">

                                {/* Question 1: Biology Multiple Choice (MCQ) */}
                                <div 
                                    ref={questionRefs[1]}
                                    onDoubleClick={handleSolveQ1}
                                    className={`p-5 rounded-2xl border transition-all cursor-pointer relative group ${
                                        q1Solved 
                                            ? 'bg-emerald-50/40 border-emerald-300' 
                                            : 'bg-[#faf8f5]/60 hover:bg-[#faf8f5] border-black/10'
                                    }`}
                                >
                                    {solvingId === 1 && (
                                        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] rounded-2xl flex items-center justify-center gap-2 text-xs font-bold text-emerald-950 z-20 shadow-xs">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                                            <span>ExamGhost Solving Q1 (DeepSeek-R1 Engine)...</span>
                                        </div>
                                    )}

                                    {/* Question Header */}
                                    <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-3 text-xs">
                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); toggleFlag(1); }}
                                                className={`p-1 rounded hover:bg-black/5 transition-colors ${
                                                    flaggedQuestions.includes(1) ? 'text-red-600' : 'text-ink-muted'
                                                }`}
                                                aria-label={flaggedQuestions.includes(1) ? "Unflag question 1" : "Flag question 1"}
                                                title="Flag question for review"
                                            >
                                                <Flag className={`w-3.5 h-3.5 ${flaggedQuestions.includes(1) ? 'fill-red-600' : ''}`} aria-hidden="true" />
                                            </button>
                                            <span className="font-bold text-ink">Question 1 · Cell Biology</span>
                                        </div>
                                        <span className="text-ink-muted font-mono font-semibold">2.0 pts</span>
                                    </div>

                                    {/* Question Prompt */}
                                    <h3 className="text-sm sm:text-base font-bold text-ink mb-4 leading-snug">
                                        What is the primary function of mitochondria in eukaryotic cells?
                                    </h3>

                                    {/* Options List */}
                                    <div className="space-y-2.5">
                                        {[
                                            { id: 'A', text: 'Protein synthesis through ribosomal translation' },
                                            { id: 'B', text: 'ATP production through aerobic cellular respiration', correct: true },
                                            { id: 'C', text: 'DNA replication and chromosomal segregation' },
                                            { id: 'D', text: 'Lipid bilayer synthesis and active vesicular transport' }
                                        ].map((opt) => {
                                            const isSelected = q1State === opt.id;
                                            const isGlow = opt.correct && q1Highlighted;
                                            return (
                                                <div 
                                                    key={opt.id}
                                                    onClick={() => setQ1State(opt.id)}
                                                    className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                                                        isSelected 
                                                            ? 'bg-emerald-500/15 border-2 border-emerald-600 text-emerald-950 font-bold shadow-xs'
                                                            : isGlow
                                                            ? 'bg-blue-500/20 border-2 border-blue-600 text-blue-950 font-bold animate-pulse'
                                                            : 'bg-white border-black/10 text-ink/80 hover:bg-black/5'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center font-bold text-[10px] transition-colors ${
                                                            isSelected ? 'border-emerald-700 bg-emerald-700 text-white' : 'border-black/30 bg-white'
                                                        }`}>
                                                            {isSelected ? '✓' : opt.id}
                                                        </span>
                                                        <span>{opt.text}</span>
                                                    </div>
                                                    {isSelected && (
                                                        <span className="text-[10px] font-bold text-emerald-950 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full">
                                                            Auto-Selected
                                                        </span>
                                                    )}
                                                    {isGlow && (
                                                        <span className="text-[10px] font-bold text-blue-950 bg-blue-100 border border-blue-300 px-2 py-0.5 rounded-full">
                                                            ExamGhost Highlight
                                                        </span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Explain Mode Drawer */}
                                    {q1Explain && (
                                        <div className="mt-3.5 p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 animate-fade-in space-y-1">
                                            <span className="font-bold flex items-center gap-1.5 text-blue-900">
                                                <Sparkles className="w-3.5 h-3.5 text-blue-700" aria-hidden="true" />
                                                <span>Reasoning (ExamGhost Explain Mode):</span>
                                            </span>
                                            <p className="leading-relaxed">
                                                Mitochondria are often called the powerhouse of eukaryotic cells. They generate over 90% of cellular energy in the form of ATP via the citric acid cycle and oxidative phosphorylation across the inner mitochondrial cristae membrane.
                                            </p>
                                        </div>
                                    )}

                                    {/* Action Footnote */}
                                    <div className="mt-3.5 flex items-center justify-between text-[11px] text-ink-muted pt-2 border-t border-black/5">
                                        <span className="flex items-center gap-1.5 group-hover:text-ink transition-colors">
                                            <MousePointer className="w-3 h-3 text-emerald-700" aria-hidden="true" />
                                            <span>Double-click to solve Question 1</span>
                                        </span>
                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); handleSolveQ1(); }}
                                                className="px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-bold border border-emerald-300 transition-colors"
                                            >
                                                Solve Q1
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                {/* Question 2: Psychology True/False */}
                                <div 
                                    ref={questionRefs[2]}
                                    onDoubleClick={handleSolveQ2}
                                    className={`p-5 rounded-2xl border transition-all cursor-pointer relative group ${
                                        q2Solved 
                                            ? 'bg-emerald-50/40 border-emerald-300' 
                                            : 'bg-[#faf8f5]/60 hover:bg-[#faf8f5] border-black/10'
                                    }`}
                                >
                                    {solvingId === 2 && (
                                        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] rounded-2xl flex items-center justify-center gap-2 text-xs font-bold text-emerald-950 z-20 shadow-xs">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                                            <span>ExamGhost Solving Q2...</span>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-3 text-xs">
                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); toggleFlag(2); }}
                                                className={`p-1 rounded hover:bg-black/5 transition-colors ${
                                                    flaggedQuestions.includes(2) ? 'text-red-600' : 'text-ink-muted'
                                                }`}
                                                aria-label={flaggedQuestions.includes(2) ? "Unflag question 2" : "Flag question 2"}
                                            >
                                                <Flag className={`w-3.5 h-3.5 ${flaggedQuestions.includes(2) ? 'fill-red-600' : ''}`} aria-hidden="true" />
                                            </button>
                                            <span className="font-bold text-ink">Question 2 · Psychology & Cognition</span>
                                        </div>
                                        <span className="text-ink-muted font-mono font-semibold">1.0 pt</span>
                                    </div>

                                    <h3 className="text-sm sm:text-base font-bold text-ink mb-4 leading-snug">
                                        Classical conditioning was first formally described by Ivan Pavlov through his experiments with dogs and conditioned salivation responses.
                                    </h3>

                                    <div className="grid grid-cols-2 gap-3">
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
                                                    className={`p-3.5 rounded-xl border text-xs sm:text-sm font-bold transition-all flex items-center justify-between ${
                                                        isSelected
                                                            ? 'bg-emerald-500/15 border-2 border-emerald-600 text-emerald-950 shadow-xs'
                                                            : isGlow
                                                            ? 'bg-blue-500/20 border-2 border-blue-600 text-blue-950 animate-pulse'
                                                            : 'bg-white border-black/10 text-ink/80 hover:bg-black/5'
                                                    }`}
                                                >
                                                    <span>{opt.label}</span>
                                                    {isSelected && <span className="text-[10px] text-emerald-950 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full">✓ Selected</span>}
                                                    {isGlow && <span className="text-[10px] text-blue-950 bg-blue-100 border border-blue-300 px-2 py-0.5 rounded-full">✓ Correct</span>}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    {q2Explain && (
                                        <div className="mt-3.5 p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 animate-fade-in space-y-1">
                                            <span className="font-bold flex items-center gap-1.5 text-blue-900">
                                                <Sparkles className="w-3.5 h-3.5 text-blue-700" aria-hidden="true" />
                                                <span>Reasoning (Explain Mode):</span>
                                            </span>
                                            <p className="leading-relaxed">
                                                Ivan Pavlov demonstrated classical conditioning in the 1890s by pairing an unconditioned stimulus (meat powder) with a neutral stimulus (auditory metronome tone), leading to conditioned salivation.
                                            </p>
                                        </div>
                                    )}

                                    <div className="mt-3.5 flex items-center justify-between text-[11px] text-ink-muted pt-2 border-t border-black/5">
                                        <span className="flex items-center gap-1.5 group-hover:text-ink transition-colors">
                                            <MousePointer className="w-3 h-3 text-emerald-700" aria-hidden="true" />
                                            <span>Double-click to solve Question 2</span>
                                        </span>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ2(); }}
                                            className="px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-bold border border-emerald-300 transition-colors"
                                        >
                                            Solve Q2
                                        </button>
                                    </div>
                                </div>

                                {/* Question 3: Computer Science Multi-Select */}
                                <div 
                                    ref={questionRefs[3]}
                                    onDoubleClick={handleSolveQ3}
                                    className={`p-5 rounded-2xl border transition-all cursor-pointer relative group ${
                                        q3Solved 
                                            ? 'bg-emerald-50/40 border-emerald-300' 
                                            : 'bg-[#faf8f5]/60 hover:bg-[#faf8f5] border-black/10'
                                    }`}
                                >
                                    {solvingId === 3 && (
                                        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] rounded-2xl flex items-center justify-center gap-2 text-xs font-bold text-emerald-950 z-20 shadow-xs">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                                            <span>ExamGhost Solving Q3...</span>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-3 text-xs">
                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); toggleFlag(3); }}
                                                className={`p-1 rounded hover:bg-black/5 transition-colors ${
                                                    flaggedQuestions.includes(3) ? 'text-red-600' : 'text-ink-muted'
                                                }`}
                                                aria-label={flaggedQuestions.includes(3) ? "Unflag question 3" : "Flag question 3"}
                                            >
                                                <Flag className={`w-3.5 h-3.5 ${flaggedQuestions.includes(3) ? 'fill-red-600' : ''}`} aria-hidden="true" />
                                            </button>
                                            <span className="font-bold text-ink">Question 3 · Data Structures & Algorithms</span>
                                        </div>
                                        <span className="text-ink-muted font-mono font-semibold">3.0 pts</span>
                                    </div>

                                    <h3 className="text-sm sm:text-base font-bold text-ink mb-4 leading-snug">
                                        Which of the following operations and concepts relate to a LIFO (Last In, First Out) structure? Select all that apply.
                                    </h3>

                                    <div className="space-y-2.5">
                                        {[
                                            { id: 'A', text: 'push() operation (inserts element onto the top)', correct: true },
                                            { id: 'B', text: 'A stack abstract data type (call stack / DFS)', correct: true },
                                            { id: 'C', text: 'A circular FIFO ring buffer queue', correct: false },
                                            { id: 'D', text: 'pop() operation (removes most recently added element)', correct: true }
                                        ].map((opt) => {
                                            const isChecked = q3State.includes(opt.id);
                                            const isGlow = opt.correct && q3Highlighted;
                                            return (
                                                <div 
                                                    key={opt.id}
                                                    onClick={() => {
                                                        setQ3State(prev => isChecked ? prev.filter(x => x !== opt.id) : [...prev, opt.id]);
                                                    }}
                                                    className={`p-3.5 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                                                        isChecked
                                                            ? 'bg-emerald-500/15 border-2 border-emerald-600 text-emerald-950 font-bold shadow-xs'
                                                            : isGlow
                                                            ? 'bg-blue-500/20 border-2 border-blue-600 text-blue-950 font-bold animate-pulse'
                                                            : 'bg-white border-black/10 text-ink/80 hover:bg-black/5'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-3">
                                                        <span className={`w-5 h-5 rounded-md border-2 flex items-center justify-center font-bold text-[10px] transition-colors ${
                                                            isChecked ? 'border-emerald-700 bg-emerald-700 text-white' : 'border-black/30 bg-white'
                                                        }`}>
                                                            {isChecked && '✓'}
                                                        </span>
                                                        <span>{opt.text}</span>
                                                    </div>
                                                    {isChecked && opt.correct && (
                                                        <span className="text-[10px] font-bold text-emerald-950 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full">
                                                            Correct
                                                        </span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {q3Explain && (
                                        <div className="mt-3.5 p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 animate-fade-in space-y-1">
                                            <span className="font-bold flex items-center gap-1.5 text-blue-900">
                                                <Sparkles className="w-3.5 h-3.5 text-blue-700" aria-hidden="true" />
                                                <span>Reasoning (Explain Mode):</span>
                                            </span>
                                            <p className="leading-relaxed">
                                                A stack data structure strictly implements LIFO semantics using `push()` to add elements and `pop()` to remove the latest element. A FIFO queue buffer represents First In, First Out.
                                            </p>
                                        </div>
                                    )}

                                    <div className="mt-3.5 flex items-center justify-between text-[11px] text-ink-muted pt-2 border-t border-black/5">
                                        <span className="flex items-center gap-1.5 group-hover:text-ink transition-colors">
                                            <MousePointer className="w-3 h-3 text-emerald-700" aria-hidden="true" />
                                            <span>Double-click to solve Question 3</span>
                                        </span>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ3(); }}
                                            className="px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-bold border border-emerald-300 transition-colors"
                                        >
                                            Solve Q3
                                        </button>
                                    </div>
                                </div>

                                {/* Question 4: Chemistry Short Answer Essay */}
                                <div 
                                    ref={questionRefs[4]}
                                    onDoubleClick={handleSolveQ4}
                                    className={`p-5 rounded-2xl border transition-all cursor-pointer relative group ${
                                        q4Solved 
                                            ? 'bg-emerald-50/40 border-emerald-300' 
                                            : 'bg-[#faf8f5]/60 hover:bg-[#faf8f5] border-black/10'
                                    }`}
                                >
                                    {solvingId === 4 && (
                                        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] rounded-2xl flex items-center justify-center gap-2 text-xs font-bold text-emerald-950 z-20 shadow-xs">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                                            <span>ExamGhost Synthesizing Essay Response...</span>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-3 text-xs">
                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); toggleFlag(4); }}
                                                className={`p-1 rounded hover:bg-black/5 transition-colors ${
                                                    flaggedQuestions.includes(4) ? 'text-red-600' : 'text-ink-muted'
                                                }`}
                                                aria-label={flaggedQuestions.includes(4) ? "Unflag question 4" : "Flag question 4"}
                                            >
                                                <Flag className={`w-3.5 h-3.5 ${flaggedQuestions.includes(4) ? 'fill-red-600' : ''}`} aria-hidden="true" />
                                            </button>
                                            <span className="font-bold text-ink">Question 4 · General Chemistry</span>
                                        </div>
                                        <span className="text-ink-muted font-mono font-semibold">4.0 pts</span>
                                    </div>

                                    <h3 className="text-sm sm:text-base font-bold text-ink mb-3 leading-snug">
                                        In one or two sentences, explain the fundamental difference between an ionic bond and a covalent bond in terms of electron behavior.
                                    </h3>

                                    <div className="relative">
                                        <textarea
                                            rows={3}
                                            value={q4Text}
                                            onChange={(e) => setQ4Text(e.target.value)}
                                            placeholder="Type your response here or double-click to auto-populate with ExamGhost..."
                                            className="w-full p-3.5 rounded-xl border border-black/15 bg-white text-xs sm:text-sm text-ink leading-relaxed focus:outline-none focus:border-emerald-600 resize-none shadow-inner"
                                            aria-label="Short answer essay text field for Question 4"
                                        />
                                        {q4Solved && (
                                            <div className="absolute bottom-3 right-3 text-[10px] font-bold text-emerald-950 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-md pointer-events-none">
                                                ✓ Verified Answer Injected
                                            </div>
                                        )}
                                    </div>

                                    {q4Explain && (
                                        <div className="mt-3.5 p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 animate-fade-in space-y-1">
                                            <span className="font-bold flex items-center gap-1.5 text-blue-900">
                                                <Sparkles className="w-3.5 h-3.5 text-blue-700" aria-hidden="true" />
                                                <span>Reasoning (Explain Mode):</span>
                                            </span>
                                            <p className="leading-relaxed">
                                                Electronegativity differential dictates the bond type: in ionic bonds (e.g., NaCl), one atom completely surrenders electrons forming electrostatic ions, whereas in covalent bonds (e.g., H₂O), electron pairs are shared symmetrically or asymmetrically.
                                            </p>
                                        </div>
                                    )}

                                    <div className="mt-3.5 flex items-center justify-between text-[11px] text-ink-muted pt-2 border-t border-black/5">
                                        <span className="flex items-center gap-1.5 group-hover:text-ink transition-colors">
                                            <MousePointer className="w-3 h-3 text-emerald-700" aria-hidden="true" />
                                            <span>Double-click to solve Question 4</span>
                                        </span>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ4(); }}
                                            className="px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-bold border border-emerald-300 transition-colors"
                                        >
                                            Solve Q4
                                        </button>
                                    </div>
                                </div>

                                {/* Question 5: Visual Diagram & Calculus (The Star Feature for Snap-It OCR!) */}
                                <div 
                                    ref={questionRefs[5]}
                                    onDoubleClick={handleSolveQ5}
                                    className={`p-5 rounded-2xl border transition-all cursor-pointer relative group ${
                                        q5Solved 
                                            ? 'bg-emerald-50/40 border-emerald-300' 
                                            : 'bg-[#faf8f5]/60 hover:bg-[#faf8f5] border-black/10'
                                    }`}
                                >
                                    {solvingId === 5 && (
                                        <div className="absolute inset-0 bg-white/85 backdrop-blur-[2px] rounded-2xl flex items-center justify-center gap-2 text-xs font-bold text-emerald-950 z-20 shadow-xs">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-ping" />
                                            <span>ExamGhost Snap-It Vision OCR Solving...</span>
                                        </div>
                                    )}

                                    <div className="flex items-center justify-between pb-3 border-b border-black/5 mb-3 text-xs">
                                        <div className="flex items-center gap-2">
                                            <button 
                                                onClick={(e) => { e.stopPropagation(); toggleFlag(5); }}
                                                className={`p-1 rounded hover:bg-black/5 transition-colors ${
                                                    flaggedQuestions.includes(5) ? 'text-red-600' : 'text-ink-muted'
                                                }`}
                                                aria-label={flaggedQuestions.includes(5) ? "Unflag question 5" : "Flag question 5"}
                                            >
                                                <Flag className={`w-3.5 h-3.5 ${flaggedQuestions.includes(5) ? 'fill-red-600' : ''}`} aria-hidden="true" />
                                            </button>
                                            <span className="font-bold text-ink">Question 5 · Calculus & Trigonometry (Visual OCR Target)</span>
                                            <span className="text-[10px] font-bold text-purple-950 bg-purple-100 border border-purple-300 px-2 py-0.5 rounded-full">
                                                Image / LaTeX Question
                                            </span>
                                        </div>
                                        <span className="text-ink-muted font-mono font-semibold">5.0 pts</span>
                                    </div>

                                    <h3 className="text-sm sm:text-base font-bold text-ink mb-3 leading-snug">
                                        Using the geometric triangle with legs <span className="font-mono text-emerald-800 font-bold">a = 6</span>, <span className="font-mono text-emerald-800 font-bold">b = 8</span> and the curve function <span className="font-mono text-ink font-bold">y = 0.5x² - 2x + 4</span> plotted below, calculate the hypotenuse <span className="font-mono font-bold">c</span> and the instantaneous derivative <span className="font-mono font-bold">dy/dx</span> at <span className="font-mono font-bold">x = 4</span>:
                                    </h3>

                                    {/* High-Fidelity SVG Math / Diagram Visual Card */}
                                    <div className="my-4 p-4 rounded-2xl bg-white border border-black/10 shadow-xs relative overflow-hidden">
                                        <div className="flex items-center justify-between pb-2 mb-2 border-b border-black/5 text-xs text-ink-muted">
                                            <span className="font-mono font-semibold flex items-center gap-1.5">
                                                <span>FIG 5.1: Right-Triangle & Tangent Curve System</span>
                                            </span>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    triggerPresetSnipe(5);
                                                }}
                                                className="px-2.5 py-1 rounded-lg bg-emerald-800 hover:bg-emerald-700 text-white text-[11px] font-bold transition-all flex items-center gap-1 shadow-xs"
                                                title="Trigger Snap-It Vision OCR on this exact diagram"
                                            >
                                                <Crop className="w-3 h-3" aria-hidden="true" />
                                                <span>✂️ Snip Diagram Now</span>
                                            </button>
                                        </div>

                                        {/* SVG Diagram Canvas */}
                                        <div className="w-full flex justify-center py-2 bg-[#fdfdfd] rounded-xl border border-black/5">
                                            <svg 
                                                viewBox="0 0 460 170" 
                                                className="w-full max-w-md h-auto"
                                                aria-label="Geometric diagram showing right triangle with legs a=6 and b=8, hypotenuse c, and a parabolic curve"
                                            >
                                                {/* Grid Lines */}
                                                <defs>
                                                    <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                                                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#f0f0f0" strokeWidth="1"/>
                                                    </pattern>
                                                </defs>
                                                <rect width="460" height="170" fill="url(#grid)" />

                                                {/* Cartesian Axes */}
                                                <line x1="30" y1="150" x2="430" y2="150" stroke="#94a3b8" strokeWidth="1.5" />
                                                <line x1="40" y1="160" x2="40" y2="15" stroke="#94a3b8" strokeWidth="1.5" />
                                                <text x="425" y="145" fontSize="10" fill="#64748b" fontFamily="monospace">x</text>
                                                <text x="25" y="25" fontSize="10" fill="#64748b" fontFamily="monospace">y</text>

                                                {/* Right Triangle */}
                                                <polygon points="60,150 240,150 240,40" fill="#e0f2fe" fillOpacity="0.7" stroke="#0284c7" strokeWidth="2.5" />
                                                
                                                {/* Right-angle square */}
                                                <rect x="225" y="135" width="15" height="15" fill="none" stroke="#0284c7" strokeWidth="1.5" />

                                                {/* Labels */}
                                                <text x="140" y="165" fontSize="12" fontWeight="bold" fill="#0369a1" fontFamily="sans-serif">leg a = 6</text>
                                                <text x="250" y="95" fontSize="12" fontWeight="bold" fill="#0369a1" fontFamily="sans-serif">leg b = 8</text>
                                                <text x="125" y="85" fontSize="13" fontWeight="bold" fill="#d97706" fontFamily="sans-serif">hypotenuse c = ?</text>

                                                {/* Parabola Curve y = 0.5x^2 - 2x + 4 */}
                                                <path 
                                                    d="M 260,130 Q 330,60 410,25" 
                                                    fill="none" 
                                                    stroke="#10b981" 
                                                    strokeWidth="2.5" 
                                                    strokeDasharray="4 2"
                                                />
                                                <circle cx="350" cy="50" r="4.5" fill="#10b981" />
                                                <text x="315" y="35" fontSize="11" fontWeight="bold" fill="#065f46" fontFamily="monospace">dy/dx at x = 4</text>
                                            </svg>
                                        </div>
                                    </div>

                                    {/* Question 5 Options */}
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
                                                    className={`p-3 rounded-xl border text-xs sm:text-sm font-medium transition-all flex items-center justify-between cursor-pointer ${
                                                        isSelected 
                                                            ? 'bg-emerald-500/15 border-2 border-emerald-600 text-emerald-950 font-bold shadow-xs'
                                                            : isGlow
                                                            ? 'bg-blue-500/20 border-2 border-blue-600 text-blue-950 font-bold animate-pulse'
                                                            : 'bg-white border-black/10 text-ink/80 hover:bg-black/5'
                                                    }`}
                                                >
                                                    <div className="flex items-center gap-2.5">
                                                        <span className={`w-5 h-5 rounded-full border-2 flex items-center justify-center font-bold text-[10px] ${
                                                            isSelected ? 'border-emerald-700 bg-emerald-700 text-white' : 'border-black/30 bg-white'
                                                        }`}>
                                                            {isSelected ? '✓' : opt.id}
                                                        </span>
                                                        <span className="font-mono">{opt.text}</span>
                                                    </div>
                                                    {isSelected && (
                                                        <span className="text-[10px] font-bold text-emerald-950 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full">
                                                            OCR Verified
                                                        </span>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {/* Explain Mode Drawer */}
                                    {q5Explain && (
                                        <div className="mt-3.5 p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-xs text-blue-950 animate-fade-in space-y-1">
                                            <span className="font-bold flex items-center gap-1.5 text-blue-900">
                                                <Sparkles className="w-3.5 h-3.5 text-blue-700" aria-hidden="true" />
                                                <span>Reasoning (Snap-It Vision OCR Math Engine):</span>
                                            </span>
                                            <p className="leading-relaxed">
                                                1. Using the Pythagorean Theorem: c² = a² + b² = 6² + 8² = 36 + 64 = 100. Thus, hypotenuse c = √100 = 10.<br />
                                                2. Differentiating y = 0.5x² - 2x + 4 with respect to x gives dy/dx = x - 2. At x = 4, dy/dx = 4 - 2 = 2.0. Hence, Option B is exact.
                                            </p>
                                        </div>
                                    )}

                                    <div className="mt-3.5 flex items-center justify-between text-[11px] text-ink-muted pt-2 border-t border-black/5">
                                        <span className="flex items-center gap-1.5 group-hover:text-ink transition-colors">
                                            <MousePointer className="w-3 h-3 text-emerald-700" aria-hidden="true" />
                                            <span>Double-click or drag-to-snip to solve Question 5</span>
                                        </span>
                                        <button 
                                            onClick={(e) => { e.stopPropagation(); handleSolveQ5(); }}
                                            className="px-2.5 py-1 rounded-lg bg-emerald-100 hover:bg-emerald-200 text-emerald-950 font-bold border border-emerald-300 transition-colors"
                                        >
                                            Solve Q5
                                        </button>
                                    </div>
                                </div>

                            </div>

                            {/* Canvas Quiz Bottom Toolbar & Submit Quiz Bar */}
                            <div className="p-4 sm:p-6 bg-[#f8f9fa] border-t border-black/10 flex flex-wrap items-center justify-between gap-4 text-xs">
                                <div className="flex items-center gap-2 text-ink-secondary">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                                    <span className="font-semibold">All answers automatically autosaved locally in Canvas cache.</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button
                                        onClick={handleResetAll}
                                        className="px-3.5 py-2 rounded-xl bg-white border border-black/10 text-ink font-bold hover:bg-black/5 transition-colors flex items-center gap-1.5"
                                    >
                                        <RefreshCw className="w-3.5 h-3.5" aria-hidden="true" />
                                        <span>Reset Quiz</span>
                                    </button>
                                    <button
                                        onClick={() => {
                                            playAudio('click');
                                            setIsSubmitModalOpen(true);
                                        }}
                                        className="px-5 py-2 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white font-bold transition-all shadow-xs flex items-center gap-1.5"
                                    >
                                        <CheckCircle2 className="w-4 h-4" aria-hidden="true" />
                                        <span>Submit Quiz Attempt</span>
                                    </button>
                                </div>
                            </div>

                            {/* Interactive In-Page Snipe Overlay (When isSniping is Active) */}
                            {isSniping && (
                                <div 
                                    className="absolute inset-0 z-40 cursor-crosshair bg-slate-900/40 backdrop-blur-[1px] select-none"
                                    onMouseDown={handleSnipeMouseDown}
                                    onMouseMove={handleSnipeMouseMove}
                                    onMouseUp={handleSnipeMouseUp}
                                    role="region"
                                    aria-label="Snap-It Snipe Tool Interactive Selection Canvas"
                                >
                                    {/* Snipe Tool Instruction Pill */}
                                    <div className="sticky top-4 z-50 flex justify-center pointer-events-none px-4">
                                        <div className="pointer-events-auto px-4 py-2 rounded-full bg-slate-950/90 text-white text-xs font-semibold shadow-lift border border-emerald-400/40 flex items-center gap-3 backdrop-blur-md">
                                            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                                            <span>
                                                <strong>Snap-It Vision OCR:</strong> Click and drag anywhere to snip a formula or diagram
                                            </span>
                                            <button
                                                onClick={() => {
                                                    setIsSniping(false);
                                                    setSnipeBox(null);
                                                    playAudio('click');
                                                }}
                                                className="px-2 py-0.5 rounded-md bg-white/10 hover:bg-white/20 text-white text-[11px] font-mono"
                                            >
                                                Esc to Exit
                                            </button>
                                        </div>
                                    </div>

                                    {/* Active Dragging Bounding Box */}
                                    {isDragging && dragStart && currentDrag && (
                                        <div 
                                            className="absolute border-2 border-emerald-400 bg-emerald-400/15 pointer-events-none shadow-[0_0_25px_rgba(16,185,129,0.35)]"
                                            style={{
                                                left: Math.min(dragStart.x, currentDrag.x),
                                                top: Math.min(dragStart.y, currentDrag.y),
                                                width: Math.abs(currentDrag.x - dragStart.x),
                                                height: Math.abs(currentDrag.y - dragStart.y),
                                            }}
                                        >
                                            {/* Reticle Corner Brackets */}
                                            <div className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-emerald-300" />
                                            <div className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-emerald-300" />
                                            <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-emerald-300" />
                                            <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-emerald-300" />

                                            {/* Live Dimensions Tag */}
                                            <div className="absolute -bottom-6 left-0 bg-slate-950 text-emerald-400 text-[10px] font-mono px-1.5 py-0.5 rounded border border-emerald-400/30 whitespace-nowrap">
                                                {Math.round(Math.abs(currentDrag.x - dragStart.x))} × {Math.round(Math.abs(currentDrag.y - dragStart.y))} px
                                            </div>
                                        </div>
                                    )}

                                    {/* Locked Snipe Box with Futuristic Laser Scan Animation */}
                                    {snipeBox && (
                                        <div
                                            className="absolute border-2 border-emerald-400 bg-emerald-400/10 shadow-[0_0_30px_rgba(16,185,129,0.4)] overflow-hidden"
                                            style={{
                                                left: snipeBox.x,
                                                top: snipeBox.y,
                                                width: snipeBox.w,
                                                height: snipeBox.h,
                                            }}
                                        >
                                            {/* Laser Scanning Beam */}
                                            {isScanning && (
                                                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-cyan-300 to-emerald-400 shadow-[0_0_15px_#10b981] animate-laser-scan" />
                                            )}

                                            {/* Corner brackets */}
                                            <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-emerald-300" />
                                            <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-emerald-300" />
                                            <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-emerald-300" />
                                            <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-emerald-300" />

                                            {/* OCR Status Badge */}
                                            <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-slate-950/90 border border-emerald-400/40 text-[10px] font-mono font-bold text-emerald-400">
                                                {isScanning ? "⚡ DeepSeek-R1 OCR Scanning..." : "✓ OCR Matched (99.8%)"}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Right Column: Sticky ExamGhost Settings & Canvas Question Drawer (4 cols) */}
                    <div className="lg:col-span-4 lg:sticky lg:top-20 space-y-5">
                        
                        {/* Canvas Question Palette / Navigator Card */}
                        <div className="rounded-[28px] bg-white border border-black/10 p-5 shadow-card space-y-3">
                            <div className="flex items-center justify-between pb-2 border-b border-black/5">
                                <span className="text-xs font-bold text-ink uppercase tracking-wider">
                                    Questions Navigator
                                </span>
                                <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                                    {solvedCount} of 5 Solved
                                </span>
                            </div>

                            {/* Question Pills Grid */}
                            <div className="grid grid-cols-5 gap-2 text-xs font-bold">
                                {[
                                    { id: 1, solved: q1Solved, label: 'Q1' },
                                    { id: 2, solved: q2Solved, label: 'Q2' },
                                    { id: 3, solved: q3Solved, label: 'Q3' },
                                    { id: 4, solved: q4Solved, label: 'Q4' },
                                    { id: 5, solved: q5Solved, label: 'Q5 ✂️' },
                                ].map((q) => {
                                    const isFlagged = flaggedQuestions.includes(q.id);
                                    return (
                                        <button
                                            key={q.id}
                                            onClick={() => scrollToQuestion(q.id)}
                                            className={`py-2 px-1 rounded-xl border text-center transition-all flex flex-col items-center justify-center gap-0.5 relative ${
                                                q.solved
                                                    ? 'bg-emerald-500/15 border-emerald-500 text-emerald-950 font-bold'
                                                    : 'bg-black/5 border-black/10 text-ink hover:bg-black/10'
                                            }`}
                                        >
                                            <span>{q.label}</span>
                                            <span className="text-[9px] font-normal">
                                                {q.solved ? '✓ Solved' : 'Empty'}
                                            </span>
                                            {isFlagged && (
                                                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-red-600 border border-white" />
                                            )}
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* ExamGhost Stealth Control Deck */}
                        <div className="rounded-[28px] bg-white border border-black/10 p-6 shadow-lift space-y-5">
                            
                            {/* HUD Header & Master Toggle */}
                            <div className="flex items-center justify-between pb-4 border-b border-black/5">
                                <div className="flex items-center gap-2.5">
                                    <div className="w-8 h-8 rounded-xl bg-ink text-white flex items-center justify-center font-bold text-xs shadow-xs">
                                        EG
                                    </div>
                                    <div>
                                        <span className="font-display font-bold text-sm text-ink block leading-none">
                                            ExamGhost HUD
                                        </span>
                                        <span className="text-[10px] text-emerald-700 font-semibold">
                                            Stealth Engine v4.2 Active
                                        </span>
                                    </div>
                                </div>

                                <button
                                    onClick={() => {
                                        setIsExtensionOn(!isExtensionOn);
                                        playAudio('click');
                                    }}
                                    className={`w-12 h-6 rounded-full p-0.5 transition-colors ${
                                        isExtensionOn ? 'bg-emerald-600' : 'bg-black/20'
                                    }`}
                                    aria-label="Toggle Extension Master Power"
                                >
                                    <div className={`w-5 h-5 rounded-full bg-white transition-transform ${
                                        isExtensionOn ? 'translate-x-6' : 'translate-x-0'
                                    }`} />
                                </button>
                            </div>

                            <p className="text-xs text-ink-muted leading-relaxed">
                                {isExtensionOn 
                                    ? "On — double-click any question or use Snap-It to snip diagrams."
                                    : "Off — Extension dormant. Toggle switch to re-enable."
                                }
                            </p>

                            {/* Display Mode Selector */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between text-[11px] font-bold text-ink-muted uppercase tracking-wider">
                                    <span>Display Mode</span>
                                    <span className="font-semibold text-emerald-950 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full lowercase">
                                        {displayMode}
                                    </span>
                                </div>
                                <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-black/5 border border-black/5 text-xs font-bold">
                                    {[
                                        { id: 'invisible', label: 'Invisible' },
                                        { id: 'stealth', label: 'Stealth' },
                                        { id: 'explain', label: 'Explain' }
                                    ].map((m) => (
                                        <button
                                            key={m.id}
                                            onClick={() => {
                                                setDisplayMode(m.id as any);
                                                playAudio('click');
                                            }}
                                            className={`py-1.5 rounded-lg transition-all ${
                                                displayMode === m.id ? 'bg-white text-ink shadow-xs' : 'text-ink-secondary hover:text-ink'
                                            }`}
                                        >
                                            {m.label}
                                        </button>
                                    ))}
                                </div>
                                <p className="text-[11px] text-ink-muted min-h-[30px] pt-1 leading-snug">
                                    {displayMode === 'invisible' && "Invisible: Silent answer injection with zero screen traces or popups."}
                                    {displayMode === 'stealth' && "Stealth: Subtle quiet indicator while solving, then auto-applies."}
                                    {displayMode === 'explain' && "Explain: Solves answer and unlocks complete step-by-step mathematical reasoning."}
                                </p>
                            </div>

                            {/* Answer Delivery Method Selector */}
                            <div className="space-y-2 pt-2 border-t border-black/5">
                                <div className="flex items-center justify-between text-[11px] font-bold text-ink-muted uppercase tracking-wider">
                                    <span>Answer Method</span>
                                    <span className="font-semibold text-blue-950 bg-blue-100 border border-blue-300 px-2 py-0.5 rounded-full lowercase">
                                        {answerMethod}
                                    </span>
                                </div>
                                <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-black/5 border border-black/5 text-xs font-bold">
                                    {[
                                        { id: 'autofill', label: 'Auto-fill' },
                                        { id: 'highlight', label: 'Highlight' },
                                        { id: 'clipboard', label: 'Clipboard' }
                                    ].map((met) => (
                                        <button
                                            key={met.id}
                                            onClick={() => {
                                                setAnswerMethod(met.id as any);
                                                playAudio('click');
                                            }}
                                            className={`py-1.5 rounded-lg transition-all ${
                                                answerMethod === met.id ? 'bg-white text-ink shadow-xs' : 'text-ink-secondary hover:text-ink'
                                            }`}
                                        >
                                            {met.label}
                                        </button>
                                    ))}
                                </div>
                                <p className="text-[11px] text-ink-muted min-h-[30px] pt-1 leading-snug">
                                    {answerMethod === 'autofill' && "Auto-fill: Directly selects or inputs the correct option for you."}
                                    {answerMethod === 'highlight' && "Highlight: Marks the correct option with a subtle glow so you click it yourself."}
                                    {answerMethod === 'clipboard' && "Clipboard: Copies the answer silently so you can paste into essay boxes."}
                                </p>
                            </div>

                            {/* Snap-It Snipe Tool Launch & Quick Actions */}
                            <div className="pt-2 border-t border-black/5 space-y-2">
                                <button
                                    onClick={() => {
                                        setIsSniping(!isSniping);
                                        playAudio('snip');
                                    }}
                                    className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-950 text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-2xs"
                                >
                                    <Crop className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                                    <span>{isSniping ? "Cancel Sniping (Esc)" : "Launch Snap-It Snipe (⌘+Shift+S)"}</span>
                                </button>

                                <button
                                    onClick={() => triggerPresetSnipe(5)}
                                    className="w-full py-2 rounded-xl bg-black/5 hover:bg-black/10 text-ink text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                                >
                                    <Sparkles className="w-3.5 h-3.5 text-ink-muted" aria-hidden="true" />
                                    <span>Auto-Snip Diagram Target (Q5)</span>
                                </button>
                            </div>

                            {/* Shortcut Badges */}
                            <div className="pt-3 border-t border-black/5 space-y-2 text-xs text-ink-secondary">
                                <div className="flex items-center justify-between">
                                    <span>Master Power Toggle:</span>
                                    <kbd className="px-2 py-0.5 rounded bg-black/5 border border-black/10 font-mono font-bold text-ink text-[11px]">
                                        ⌘+Shift+U
                                    </kbd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Snap-It Vision OCR:</span>
                                    <kbd className="px-2 py-0.5 rounded bg-black/5 border border-black/10 font-mono font-bold text-ink text-[11px]">
                                        ⌘+Shift+S
                                    </kbd>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span>Cancel Snipe Overlay:</span>
                                    <kbd className="px-2 py-0.5 rounded bg-black/5 border border-black/10 font-mono font-bold text-ink text-[11px]">
                                        Esc
                                    </kbd>
                                </div>
                            </div>

                        </div>

                        {/* Live OCR Telemetry Box (When Snip Result is Available) */}
                        {snipResult && (
                            <div className="rounded-[28px] bg-white border border-emerald-300 p-5 shadow-lift space-y-3 animate-fade-in">
                                <div className="flex items-center justify-between pb-2 border-b border-black/5">
                                    <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-950">
                                        <Crop className="w-3.5 h-3.5 text-emerald-700" aria-hidden="true" />
                                        <span>Snap-It Vision OCR Telemetry</span>
                                    </span>
                                    <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded-full border border-emerald-300">
                                        {snipResult.latency}
                                    </span>
                                </div>

                                <div className="text-xs space-y-1.5">
                                    <div>
                                        <span className="text-[10px] font-bold text-ink-muted uppercase">Extracted Prompt:</span>
                                        <p className="font-mono text-[11px] text-ink bg-black/5 p-2 rounded-lg mt-0.5">
                                            {snipResult.detectedText}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-ink-muted uppercase">Verified Answer:</span>
                                        <p className="font-bold text-xs text-emerald-900 bg-emerald-50 border border-emerald-200 p-2 rounded-lg mt-0.5">
                                            {snipResult.answer}
                                        </p>
                                    </div>
                                    <div>
                                        <span className="text-[10px] font-bold text-ink-muted uppercase">Reasoning:</span>
                                        <p className="text-[11px] text-ink-secondary leading-relaxed mt-0.5">
                                            {snipResult.explanation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        )}

                        {/* Clipboard Toast banner */}
                        {clipboardNotice && (
                            <div className="p-3.5 rounded-2xl bg-purple-100 border border-purple-300 text-purple-950 text-xs font-semibold flex items-center gap-2 shadow-xs animate-bounce">
                                <Check className="w-4 h-4 text-purple-800 shrink-0" aria-hidden="true" />
                                <span>{clipboardNotice}</span>
                            </div>
                        )}

                        {/* CTA Card */}
                        <div className="rounded-[28px] bg-ink text-white p-6 shadow-lift space-y-3.5">
                            <span className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest block">
                                Ready for real Canvas quizzes?
                            </span>
                            <h3 className="font-display text-lg font-bold leading-snug">
                                Add ExamGhost to Chrome
                            </h3>
                            <p className="text-xs text-white/70 leading-relaxed">
                                Install in 1 click. Includes 50 free solves immediately. Works on Canvas, Moodle, Blackboard, and 20+ more.
                            </p>
                            <a
                                href="https://discord.gg/aCcsyKYJq4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-xs"
                            >
                                <FaChrome className="w-4 h-4" aria-hidden="true" />
                                <span>Add to Chrome — Free (No Account)</span>
                            </a>
                        </div>

                    </div>

                </div>
            </main>

            {/* Canvas Submit Quiz Confirmation Modal */}
            {isSubmitModalOpen && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fade-in"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="submit-modal-title"
                >
                    <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-lift border border-black/10 space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-black/5">
                            <div className="flex items-center gap-2 text-ink font-bold text-sm">
                                <GraduationCap className="w-4 h-4 text-emerald-700" aria-hidden="true" />
                                <span id="submit-modal-title">Canvas Quiz Submission Result</span>
                            </div>
                            <button
                                onClick={() => setIsSubmitModalOpen(false)}
                                className="p-1 rounded-lg hover:bg-black/5 text-ink-muted"
                                aria-label="Close modal"
                            >
                                <X className="w-4 h-4" aria-hidden="true" />
                            </button>
                        </div>

                        <div className="text-center py-4 space-y-2">
                            <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 flex items-center justify-center mx-auto text-2xl font-bold shadow-xs">
                                💯
                            </div>
                            <h4 className="font-display text-xl font-bold text-ink">
                                {solvedCount === 5 ? "Perfect Score: 100%!" : `${earnedPoints}.0 / ${totalPoints}.0 Points`}
                            </h4>
                            <p className="text-xs text-ink-muted max-w-xs mx-auto">
                                {solvedCount === 5 
                                    ? "ExamGhost answered all 5 college questions correctly with 0 proctor detections and zero tab-switching."
                                    : `You have answered ${solvedCount} of 5 questions. Score: ${Math.round((earnedPoints / totalPoints) * 100)}%.`
                                }
                            </p>
                        </div>

                        <div className="p-3.5 rounded-xl bg-[#faf8f5] border border-black/5 text-xs space-y-1.5">
                            <div className="flex justify-between">
                                <span className="text-ink-muted">Attempt Duration:</span>
                                <span className="font-mono font-bold text-ink">{formatTimer(1694 - timeLeft)} elapsed</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-ink-muted">Proctor Detection:</span>
                                <span className="font-bold text-emerald-800">0 Flags (Clean)</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-ink-muted">Accuracy:</span>
                                <span className="font-bold text-emerald-800">100% Verified</span>
                            </div>
                        </div>

                        <div className="flex items-center gap-3 pt-2">
                            <button
                                onClick={() => setIsSubmitModalOpen(false)}
                                className="flex-1 py-2.5 rounded-xl border border-black/10 hover:bg-black/5 text-ink text-xs font-semibold transition-colors"
                            >
                                Keep Reviewing
                            </button>
                            <a
                                href="https://discord.gg/aCcsyKYJq4"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-700 text-white text-xs font-bold text-center transition-all shadow-xs"
                            >
                                Get Extension Free
                            </a>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <footer className="border-t border-black/10 bg-white/50 py-10 text-center text-xs text-ink-muted">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p>© 2026 ExamGhost. All rights reserved. Runs 100% locally in your browser.</p>
                    <div className="flex items-center gap-4">
                        <Link href="/privacy" className="hover:text-ink transition-colors inline-block py-1">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-ink transition-colors inline-block py-1">Terms of Service</Link>
                        <Link href="/faq" className="hover:text-ink transition-colors inline-block py-1">FAQ</Link>
                        <Link href="/contact" className="hover:text-ink transition-colors inline-block py-1">Support</Link>
                    </div>
                </div>
            </footer>

        </div>
    );
}
