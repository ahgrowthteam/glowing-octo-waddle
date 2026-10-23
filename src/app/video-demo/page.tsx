'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
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
  ArrowLeft,
  Volume2,
  VolumeX,
  Clock,
  Lock,
  Puzzle,
  ChevronLeft,
  ChevronRight,
  Activity,
  MousePointerClick
} from 'lucide-react';
import { FaChrome } from 'react-icons/fa';

interface SolvedQuestion {
  id: number;
  number: string;
  subject: 'Science' | 'Math' | 'General';
  courseCode: string;
  pts: string;
  type: 'mcq' | 'multi' | 'dropdown' | 'short';
  isOcr?: boolean;
  question: string;
  options?: { label: string; text: string }[];
  correctOption?: string | null;
  correctOptions?: string[];
  dropdownAnswers?: string[];
  answerText: string;
  explanation: string;
}

const DEMO_QUESTIONS: SolvedQuestion[] = [
  {
    id: 1,
    number: '1',
    subject: 'Science',
    courseCode: 'BIO-204 · Cellular Bioenergetics',
    pts: '2.0 pts',
    type: 'mcq',
    question:
      'Which organelle is responsible for generating over 90% of cellular ATP via oxidative phosphorylation across its inner cristae membrane?',
    options: [
      { label: 'A', text: 'Golgi apparatus (cis-trans cisternae)' },
      { label: 'B', text: 'Mitochondria (oxidative phosphorylation)' },
      { label: 'C', text: 'Smooth endoplasmic reticulum' },
      { label: 'D', text: 'Peroxisome vesicle matrix' },
    ],
    correctOption: 'B',
    correctOptions: ['B'],
    answerText: 'Mitochondria (oxidative phosphorylation)',
    explanation:
      'Mitochondria synthesize ~30–32 ATP molecules per glucose via the TCA cycle and F1Fo-ATP synthase proton gradient across the inner mitochondrial membrane.',
  },
  {
    id: 2,
    number: '2',
    subject: 'General',
    courseCode: 'CS-301 · Data Structures & Algorithms',
    pts: '3.0 pts',
    type: 'multi',
    question:
      'Which of the following operations or architectural properties apply to a LIFO (Last In, First Out) Stack? Select all that apply.',
    options: [
      { label: 'A', text: 'push(x) inserts an element at the top pointer in O(1) time' },
      { label: 'B', text: 'pop() removes and returns the most recently inserted element' },
      { label: 'C', text: 'FIFO head-to-tail ring buffer scheduling' },
      { label: 'D', text: 'Manages activation records (stack frames) during recursion' },
    ],
    correctOption: 'A',
    correctOptions: ['A', 'B', 'D'],
    answerText: 'push(x) O(1), pop() latest element, Manages recursion stack frames',
    explanation:
      'A Stack enforces Last-In, First-Out (LIFO) ordering via O(1) push() and pop() operations at a single top pointer and manages call stack frames. FIFO is a Queue property.',
  },
  {
    id: 3,
    number: '3',
    subject: 'Science',
    courseCode: 'NEURO-310 · Membrane Electrophysiology',
    pts: '3.0 pts',
    type: 'dropdown',
    question:
      'During a neuronal action potential, rapid depolarization is triggered by the opening of voltage-gated [Blank 1] channels, whereas repolarization is driven by the delayed efflux of [Blank 2] ions.',
    dropdownAnswers: ['Sodium (Na+)', 'Potassium (K+)'],
    answerText: 'Sodium (Na+) ➔ Potassium (K+)',
    explanation:
      'Threshold depolarization (-55 mV) opens fast voltage-gated Na+ channels causing rapid Na+ influx (+30 mV peak), followed by Na+ inactivation and delayed K+ efflux.',
  },
  {
    id: 4,
    number: '4',
    subject: 'General',
    courseCode: 'CS-301 · Asymptotic Complexity',
    pts: '2.0 pts',
    type: 'short',
    question:
      'State the worst-case time complexity (in Big-O notation) of searching for a key in a height-balanced AVL Binary Search Tree with n nodes.',
    correctOption: null,
    correctOptions: [],
    answerText: 'O(log n)',
    explanation:
      'Because an AVL tree maintains a strict balance factor of {-1, 0, +1} at every node, its height is bounded by 1.44 log2(n), guaranteeing O(log n) worst-case lookup.',
  },
  {
    id: 5,
    number: '5',
    subject: 'Math',
    courseCode: 'MATH-221 · Multivariable & Differential Calculus',
    pts: '5.0 pts',
    type: 'mcq',
    isOcr: true,
    question:
      'From the figure below, determine hypotenuse c (given legs a = 6, b = 8) and the instantaneous tangent slope dy/dx of y = 0.5x² - 2x + 4 at x = 4:',
    options: [
      { label: 'A', text: 'c = 9.0,  dy/dx = 1.5' },
      { label: 'B', text: 'c = 10.0, dy/dx = 2.0' },
      { label: 'C', text: 'c = 12.0, dy/dx = 0.5' },
      { label: 'D', text: 'c = 14.0, dy/dx = 3.0' },
    ],
    correctOption: 'B',
    correctOptions: ['B'],
    answerText: 'c = 10.0, dy/dx = 2.0',
    explanation:
      'By the Pythagorean theorem, c = √(6² + 8²) = √100 = 10.0. Differentiating y = 0.5x² - 2x + 4 yields dy/dx = x - 2; evaluating at x = 4 gives 4 - 2 = 2.0.',
  },
];

interface StoryChapter {
  id: number;
  code: string;
  label: string;
  caption: string;
  durationMs: number;
}

const STORY_CHAPTERS: StoryChapter[] = [
  {
    id: 0,
    code: '01',
    label: 'Double-Click Explain + Banner',
    caption: 'Double-clicking Question 1 triggers an indigo pulse, auto-fills Option B, and slides in the glassmorphic Right-Side Answer Banner.',
    durationMs: 6800,
  },
  {
    id: 1,
    code: '02',
    label: 'Double-Click Cloze Dropdowns',
    caption: 'Double-clicking a multi-blank sentence parses both blanks in context and selects each native HTML <select> dropdown (Ans 1 ➔ Ans 2).',
    durationMs: 6800,
  },
  {
    id: 2,
    code: '03',
    label: 'Stealth Checkmark Hint (✓)',
    caption: 'In Stealth Mode (Alt+2) with "Highlight Hint Only" active, double-clicking places a subtle green ✓ next to the right option without clicking.',
    durationMs: 6800,
  },
  {
    id: 3,
    code: '04',
    label: 'Invisible Ghost Mode (Alt+1)',
    caption: 'Zero toasts, zero banners, zero DOM glow. Double-clicking Question 2 silently ticks the right checkboxes and copies to clipboard in 180ms.',
    durationMs: 6400,
  },
  {
    id: 4,
    code: '05',
    label: 'Double-Click Short Answer',
    caption: 'Double-clicking a text-entry question card automatically types the exact analytical answer ("O(log n)") into the input field.',
    durationMs: 6400,
  },
  {
    id: 5,
    code: '06',
    label: 'Screenshot Snip OCR (Alt+S)',
    caption: 'Press Alt+S and drag the emerald crop box over any locked graph, geometry figure, or formula to solve via multimodal Vision AI.',
    durationMs: 7400,
  },
];

export default function VideoDemoPage() {
  // Active Canvas question tab (1..5)
  const [activeQ, setActiveQ] = useState<number>(1);

  // ==================== REAL EXTENSION POPUP STATE (ONE-BY-ONE DOUBLE CLICK) ====================
  const [popupOpen, setPopupOpen] = useState<boolean>(true);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [solverMode, setSolverMode] = useState<'invisible' | 'stealth' | 'explain'>('explain');
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState('AIzaSyExamGhostPro••••••••••••');
  const [showLicenseModal, setShowLicenseModal] = useState(false);
  const [licenseKey, setLicenseKey] = useState('');
  const [licenseSuccess, setLicenseSuccess] = useState(false);
  const [usedMessages, setUsedMessages] = useState(32);
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

  // ==================== IN-PAGE CANVAS QUIZ DOM STATE ====================
  const [q1Selected, setQ1Selected] = useState<string | null>('B');
  const [q2Selected, setQ2Selected] = useState<string[]>([]);
  const [q3Blank1, setQ3Blank1] = useState<string>('');
  const [q3Blank2, setQ3Blank2] = useState<string>('');
  const [q4Input, setQ4Input] = useState<string>('');
  const [q5Selected, setQ5Selected] = useState<string | null>(null);

  // Content Script Visual Feedback States (from content.js)
  const [stealthMarks, setStealthMarks] = useState<Record<number, boolean>>({});
  const [solvingCardId, setSolvingCardId] = useState<number | null>(null);
  const [successCardId, setSuccessCardId] = useState<number | null>(1);
  const [cardToast, setCardToast] = useState<{ qId: number; text: string; isSolving: boolean } | null>({
    qId: 1,
    text: '✓ Solved: B) Mitochondria (oxidative phosphorylation)',
    isSolving: false,
  });
  const [stealthHudText, setStealthHudText] = useState<string | null>(null);
  const [clipboardNotice, setClipboardNotice] = useState<string | null>(null);

  // Smart Right-Side Answer Banner (.agy-side-banner)
  const [sideBanner, setSideBanner] = useState<{
    visible: boolean;
    isSolving: boolean;
    questionTitle: string;
    result: SolvedQuestion | null;
    pinned: boolean;
    progress: number;
  }>({
    visible: true,
    isSolving: false,
    questionTitle: DEMO_QUESTIONS[0].question,
    result: DEMO_QUESTIONS[0],
    pinned: false,
    progress: 82,
  });

  // Screenshot Snipping Tool (#agy-snip-overlay & #agy-snip-selection)
  const [snipModeActive, setSnipModeActive] = useState(false);
  const [snipDragging, setSnipDragging] = useState(false);
  const [snipStart, setSnipStart] = useState<{ x: number; y: number } | null>(null);
  const [snipCurrent, setSnipCurrent] = useState<{ x: number; y: number } | null>(null);
  const [choreoSnipRect, setChoreoSnipRect] = useState<{ x: number; y: number; w: number; h: number } | null>(null);

  // ==================== DIRECTOR / AUTOPLAY ENGINE ====================
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

  // Audio Synthesizer
  const playSound = useCallback(
    (kind: 'click' | 'solve' | 'snip' | 'tab') => {
      if (!soundEnabled || typeof window === 'undefined') return;
      try {
        const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
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
        // Ignore audio restrictions
      }
    },
    [soundEnabled]
  );

  // Side Banner Progress Bar Countdown
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

  // Apply answer to Canvas DOM
  const applyAnswerToDom = useCallback(
    (q: SolvedQuestion, mode: 'invisible' | 'stealth' | 'explain', highlightOnly: boolean) => {
      if (highlightOnly) {
        setStealthMarks((prev) => ({ ...prev, [q.id]: true }));
        const hint =
          q.type === 'dropdown' && q.dropdownAnswers
            ? q.dropdownAnswers.join(' ➔ ')
            : `${q.correctOption ? q.correctOption + ') ' : ''}${q.answerText}`;
        setStealthHudText(hint);
        setTimeout(() => setStealthHudText(null), 2800);
        return;
      }

      setStealthMarks((prev) => ({ ...prev, [q.id]: false }));
      if (q.id === 1) setQ1Selected('B');
      if (q.id === 2) setQ2Selected(['A', 'B', 'D']);
      if (q.id === 3) {
        setQ3Blank1('Sodium (Na+)');
        setQ3Blank2('Potassium (K+)');
      }
      if (q.id === 4) setQ4Input('O(log n)');
      if (q.id === 5) setQ5Selected('B');

      if (mode === 'invisible') {
        setClipboardNotice(`Copied to clipboard: "${q.answerText}"`);
        setTimeout(() => setClipboardNotice(null), 2400);
      }
    },
    []
  );

  // Trigger Single Question Solve via Double-Click (1:1 with content.js dblclick)
  const triggerSolveQuestion = useCallback(
    (
      qId: number,
      opts?: {
        mode?: 'invisible' | 'stealth' | 'explain';
        highlightOnly?: boolean;
      }
    ) => {
      const q = DEMO_QUESTIONS.find((item) => item.id === qId);
      if (!q) return;

      const mode = opts?.mode ?? solverMode;
      const highlightOnly =
        typeof opts?.highlightOnly === 'boolean'
          ? opts.highlightOnly
          : mode === 'stealth' && !stealthAutoFill && stealthHighlightOnly;

      setActiveQ(qId);
      playSound('click');

      if (mode !== 'invisible') {
        setSolvingCardId(qId);
        if (mode === 'explain') {
          setCardToast({ qId, text: '⚡ Solving with AI...', isSolving: true });
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

      const delay = mode === 'invisible' ? 180 : 520;

      setTimeout(() => {
        setSolvingCardId(null);
        playSound('solve');
        applyAnswerToDom(q, mode, highlightOnly);

        if (mode === 'explain') {
          setSuccessCardId(qId);
          setTimeout(() => setSuccessCardId(null), 1600);
          const displayAns =
            q.type === 'dropdown' && q.dropdownAnswers
              ? q.dropdownAnswers.join(' ➔ ')
              : q.correctOption
              ? `${q.correctOption}) ${q.answerText}`
              : q.answerText;
          setCardToast({ qId, text: `✓ Solved: ${displayAns}`, isSolving: false });
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
    [solverMode, stealthAutoFill, stealthHighlightOnly, explainSideBanner, totalMessages, playSound, applyAnswerToDom]
  );

  // Reset all quiz & extension state
  const resetAllState = useCallback(() => {
    setQ1Selected(null);
    setQ2Selected([]);
    setQ3Blank1('');
    setQ3Blank2('');
    setQ4Input('');
    setQ5Selected(null);
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

  // Keyboard shortcuts (Alt+1, Alt+2, Alt+3, Alt+S, Esc)
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.altKey && e.key === '1') {
        e.preventDefault();
        setIsPlaying(false);
        setSolverMode('invisible');
        playSound('tab');
      } else if (e.altKey && e.key === '2') {
        e.preventDefault();
        setIsPlaying(false);
        setSolverMode('stealth');
        playSound('tab');
      } else if (e.altKey && e.key === '3') {
        e.preventDefault();
        setIsPlaying(false);
        setSolverMode('explain');
        playSound('tab');
      } else if (e.altKey && e.key.toLowerCase() === 's') {
        e.preventDefault();
        setIsPlaying(false);
        setActiveQ(5);
        setSnipModeActive((prev) => !prev);
        playSound('snip');
      } else if (e.key === 'Escape' && snipModeActive) {
        setSnipModeActive(false);
        setSnipDragging(false);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [snipModeActive, playSound]);

  // ==================== CHOREOGRAPHED 6-CHAPTER ONE-BY-ONE MOTION ENGINE ====================
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
      // CHAPTER 01: Double-Click Explain Mode + Banner on Q1
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
      // CHAPTER 02: Double-Click Inline Cloze Dropdowns (Blank 1 ➔ Blank 2) on Q3
      setActiveQ(3);
      setSolverMode('explain');
      setCursor({ x: 22, y: 17, clicking: true, rippleKey: 4, tag: 'Select Question 3 (Cloze Dropdowns)' });

      at(850, () => setCursor({ x: 31, y: 45, clicking: false, rippleKey: 4, tag: 'Double-Click Cloze Sentence' }));
      at(1500, () => {
        setCursor({ x: 31, y: 45, clicking: true, rippleKey: 5, tag: 'Double-Click Solve!' });
        triggerSolveQuestion(3, { mode: 'explain', highlightOnly: false });
      });
      at(2800, () => setCursor({ x: 34, y: 50, clicking: false, rippleKey: 5, tag: 'Sodium (Na+) ➔ Potassium (K+)' }));
    } else if (chapterIdx === 2) {
      // CHAPTER 03: Stealth Mode Checkmark Hint (✓) on Q1
      setActiveQ(1);
      setSolverMode('stealth');
      setStealthAutoFill(false);
      setStealthHighlightOnly(true);
      setCursor({ x: 78, y: 24, clicking: true, rippleKey: 6, tag: 'Stealth Mode (Alt+2)' });

      at(800, () => setCursor({ x: 75, y: 53, clicking: true, rippleKey: 7, tag: 'Highlight Hint Only (No Fill)' }));
      at(1600, () => setCursor({ x: 28, y: 49, clicking: false, rippleKey: 7, tag: 'Double-Click Question' }));
      at(2200, () => {
        setCursor({ x: 28, y: 49, clicking: true, rippleKey: 8, tag: 'Subtle ✓ Injected' });
        triggerSolveQuestion(1, { mode: 'stealth', highlightOnly: true });
      });
      at(3400, () => setCursor({ x: 33, y: 55, clicking: false, rippleKey: 8, tag: 'Subtle green ✓ beside Option B' }));
      at(duration - 200, () => {
        setStealthAutoFill(true);
        setStealthHighlightOnly(false);
      });
    } else if (chapterIdx === 3) {
      // CHAPTER 04: Invisible Ghost Mode (Alt+1) on Q2 Multi-Select
      setActiveQ(2);
      setSolverMode('invisible');
      setCursor({ x: 69, y: 24, clicking: true, rippleKey: 9, tag: 'Invisible Mode (Alt+1)' });

      at(950, () => setCursor({ x: 28, y: 48, clicking: false, rippleKey: 9, tag: 'Double-Click Multi-Select Q2' }));
      at(1600, () => {
        setCursor({ x: 28, y: 48, clicking: true, rippleKey: 10, tag: '180ms Silent Auto-Fill' });
        triggerSolveQuestion(2, { mode: 'invisible', highlightOnly: false });
      });
      at(2700, () => setCursor({ x: 28, y: 55, clicking: false, rippleKey: 10, tag: 'Zero Banners · 0 Tab-Switch Flags' }));
    } else if (chapterIdx === 4) {
      // CHAPTER 05: Double-Click Short Answer Auto-Type on Q4
      setActiveQ(4);
      setSolverMode('stealth');
      setStealthAutoFill(true);
      setStealthHighlightOnly(false);
      setCursor({ x: 28, y: 17, clicking: true, rippleKey: 11, tag: 'Select Question 4 (Short Answer)' });

      at(900, () => setCursor({ x: 30, y: 46, clicking: false, rippleKey: 11, tag: 'Double-Click Short Answer Card' }));
      at(1600, () => {
        setCursor({ x: 30, y: 46, clicking: true, rippleKey: 12, tag: 'Double-Click Auto-Type!' });
        triggerSolveQuestion(4, { mode: 'explain', highlightOnly: false });
      });
      at(2900, () => setCursor({ x: 30, y: 53, clicking: false, rippleKey: 12, tag: 'Auto-Typed: O(log n)' }));
    } else if (chapterIdx === 5) {
      // CHAPTER 06: Screenshot Snip Tool (Alt+S) on Q5 Diagram
      setActiveQ(5);
      setSolverMode('explain');
      setCursor({ x: 78, y: 33, clicking: false, rippleKey: 13, tag: 'Activate Screenshot Tool (Alt+S)' });

      at(700, () => {
        setCursor({ x: 78, y: 33, clicking: true, rippleKey: 14, tag: 'Alt + S Activated' });
        setSnipModeActive(true);
        playSound('snip');
      });
      at(1400, () => {
        setCursor({ x: 11, y: 34, clicking: true, rippleKey: 15, tag: 'Drag Crop Box Around Diagram' });
        setChoreoSnipRect({ x: 8, y: 32, w: 4, h: 4 });
      });
      at(2150, () => {
        setCursor({ x: 52, y: 70, clicking: true, rippleKey: 15, tag: 'Capturing Canvas + DOM Context' });
        setChoreoSnipRect({ x: 8, y: 31, w: 48, h: 41 });
      });
      at(3500, () => {
        setSnipModeActive(false);
        setChoreoSnipRect(null);
        triggerSolveQuestion(5, { mode: 'explain', highlightOnly: false });
        setCursor({ x: 32, y: 76, clicking: false, rippleKey: 16, tag: 'Vision OCR Solved: c = 10.0, dy/dx = 2.0' });
      });
    }

    at(duration, () => {
      setChapterIdx((prev) => (prev + 1) % STORY_CHAPTERS.length);
    });

    return () => {
      clearInterval(progInterval);
      timers.forEach(clearTimeout);
    };
  }, [isPlaying, chapterIdx, resetAllState, triggerSolveQuestion, playSound]);

  // Manual Snip Dragging inside the Canvas Quiz Viewport
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

  const solvedMap: Record<number, boolean> = {
    1: q1Selected === 'B',
    2: q2Selected.includes('A') && q2Selected.includes('B') && q2Selected.includes('D'),
    3: q3Blank1 === 'Sodium (Na+)' && q3Blank2 === 'Potassium (K+)',
    4: q4Input.trim().toLowerCase() === 'o(log n)',
    5: q5Selected === 'B',
  };
  const totalSolvedCount = Object.values(solvedMap).filter(Boolean).length;
  const currentQ = DEMO_QUESTIONS.find((q) => q.id === activeQ) || DEMO_QUESTIONS[0];
  const activeChapter = STORY_CHAPTERS[chapterIdx] || STORY_CHAPTERS[0];

  return (
    <div className="min-h-screen bg-cream text-ink font-sans selection:bg-emerald-500/20">
      {/* Top Editorial Navigation Bar */}
      <header className="sticky top-0 z-50 bg-cream/90 backdrop-blur-md border-b border-black/8 px-4 sm:px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Link
              href="/canvas-quiz-solver-free-demo"
              prefetch={false}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-secondary hover:text-ink transition-colors px-3 py-1.5 rounded-full hover:bg-black/5"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Sandbox</span>
            </Link>
            <span className="h-4 w-px bg-black/10" />
            <Link href="/" prefetch={false} className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full overflow-hidden border border-black/10 bg-[#c4d0f8] shrink-0">
                <img
                  src="/images/ghost/ghost_mascot_hero.jpg"
                  alt="ExamGhost"
                  width={28}
                  height={28}
                  className="w-full h-full object-cover scale-110"
                />
              </div>
              <span className="font-display font-bold text-base text-ink tracking-tight">ExamGhost</span>
            </Link>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setSoundEnabled((prev) => !prev)}
              className="px-3 py-1.5 rounded-full bg-white border border-black/10 text-xs font-semibold text-ink-secondary hover:text-ink flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
              title={soundEnabled ? 'Mute UI Audio' : 'Enable UI Audio'}
            >
              {soundEnabled ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="hidden sm:inline">Audio On</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 text-ink-muted" />
                  <span className="hidden sm:inline">Audio Muted</span>
                </>
              )}
            </button>

            <a
              href="https://discord.gg/aCcsyKYJq4"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark px-4 py-2 text-xs font-semibold rounded-full shadow-xs inline-flex items-center gap-2"
            >
              <FaChrome className="w-3.5 h-3.5 text-[#bfe3f6]" />
              <span>Add to Chrome — Free</span>
            </a>
          </div>
        </div>
      </header>

      {/* Editorial Hero Header */}
      <section className="pt-6 pb-5 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-black/8 shadow-2xs text-[11px] font-semibold text-ink mb-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>INTERACTIVE PRODUCT FILM · DOUBLE-CLICK ONE BY ONE</span>
            </div>
            <h1 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-ink leading-[1.08]">
              Double-Click Any Question to Solve Live — Or Click Inside to Test.
            </h1>
          </div>

          {/* Playback Controls Pill */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsPlaying((prev) => !prev)}
              className={`px-4 py-2.5 rounded-full text-xs font-bold flex items-center gap-2 transition-all cursor-pointer shadow-soft ${
                isPlaying
                  ? 'bg-ink text-white hover:bg-ink/90'
                  : 'bg-[#cdeecb] text-ink border border-emerald-600/20 hover:bg-[#bde6ba]'
              }`}
            >
              {isPlaying ? (
                <>
                  <Pause className="w-3.5 h-3.5 fill-current" />
                  <span>Pause Film (Interactive Mode)</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Resume Auto-Play Film</span>
                </>
              )}
            </button>

            <button
              onClick={() => {
                setIsPlaying(false);
                resetAllState();
              }}
              className="px-3.5 py-2.5 rounded-full bg-white hover:bg-[#faf8f4] border border-black/10 text-ink-secondary hover:text-ink text-xs font-semibold transition-colors flex items-center gap-1.5 shadow-2xs cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          </div>
        </div>
      </section>

      {/* ==================== UNIFIED macOS CHROME BROWSER WINDOW ==================== */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="rounded-[28px] sm:rounded-[34px] bg-[#f7f5f0] border border-black/12 shadow-[0_28px_80px_-16px_rgba(20,20,19,0.16)] overflow-hidden relative">
          {/* Spring-Physics Choreographed Cursor */}
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

              {/* URL Bar */}
              <div className="ml-2 px-3.5 py-1.5 rounded-full bg-white border border-black/8 text-xs font-mono text-ink-secondary flex items-center gap-2 truncate shadow-2xs">
                <Lock className="w-3 h-3 text-emerald-600 shrink-0" />
                <span className="truncate">canvas.stanford.edu/courses/49102/quizzes/88312/take</span>
              </div>
            </div>

            {/* Right Chrome Extensions Toolbar Area */}
            <div className="flex items-center gap-2 shrink-0">
              <div className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cdeecb]/70 border border-emerald-600/20 text-ink text-xs font-semibold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                <span>0 Tab-Switch Flags</span>
              </div>

              <button
                onClick={() => {
                  setIsPlaying(false);
                  setPopupOpen((prev) => !prev);
                }}
                className={`px-3 py-1.5 rounded-full border text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                  popupOpen
                    ? 'bg-[#0a0e14] text-emerald-400 border-emerald-500/40 shadow-xs'
                    : 'bg-white text-ink border-black/10 hover:bg-black/5'
                }`}
                title="Toggle Chrome Extension Popup"
              >
                <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                <span>Study Assistant</span>
                <Puzzle className="w-3.5 h-3.5 opacity-60" />
              </button>
            </div>
          </div>

          {/* Unified Browser Viewport: Warm Paper Canvas LMS Workspace + Floating Chrome Extension Popover */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-5 sm:p-7 bg-[#f7f5f0] items-start">
            {/* ==================== LEFT 7 COLS: CANVAS LMS QUIZ CARD + IN-PAGE BANNER ==================== */}
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
              {/* In-Page Stealth Micro HUD (.agy-stealth-hud from content.js) */}
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

              {/* In-Page Snip Overlay (#agy-snip-overlay from content.js) */}
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
                        ✂️ <strong>Snip Tool</strong>: Drag around question &amp; options
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

              {/* Top Question Switcher Bar */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 pb-4 mb-5 border-b border-black/8">
                  <div className="flex items-center gap-1.5 flex-wrap">
                    {DEMO_QUESTIONS.map((q) => {
                      const isCurrent = activeQ === q.id;
                      const isDone = solvedMap[q.id];
                      return (
                        <button
                          key={q.id}
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
                            ·{' '}
                            {q.type === 'dropdown'
                              ? 'Cloze'
                              : q.type === 'multi'
                              ? 'Multi'
                              : q.isOcr
                              ? 'OCR Graph'
                              : q.type.toUpperCase()}
                          </span>
                          {isDone && (
                            <span
                              className={`w-3.5 h-3.5 rounded-full flex items-center justify-center text-[9px] font-bold ${
                                isCurrent ? 'bg-[#cdeecb] text-ink' : 'bg-emerald-600 text-white'
                              }`}
                            >
                              ✓
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex items-center gap-1.5 text-xs font-mono text-ink-muted">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>28:14 left</span>
                  </div>
                </div>

                {/* Focused Active Canvas Question Card (Double-Click to Solve) */}
                <div
                  onDoubleClick={() => {
                    setIsPlaying(false);
                    triggerSolveQuestion(currentQ.id);
                  }}
                  className={`relative rounded-2xl bg-white border p-5 sm:p-6 transition-all cursor-pointer ${
                    solvingCardId === currentQ.id
                      ? 'ring-2 ring-indigo-500 shadow-[0_0_0_6px_rgba(99,102,241,0.15)]'
                      : successCardId === currentQ.id
                      ? 'ring-2 ring-emerald-500 shadow-[0_0_0_6px_rgba(16,185,129,0.15)]'
                      : solvedMap[currentQ.id] || stealthMarks[currentQ.id]
                      ? 'border-emerald-500/50 bg-emerald-50/15'
                      : 'border-black/10 hover:border-black/20 shadow-2xs'
                  }`}
                >
                  {/* Floating Card Toast (.agy-floating-toast from content.js) */}
                  {cardToast && cardToast.qId === currentQ.id && (
                    <div
                      className={`absolute -top-3.5 right-4 px-3 py-1 rounded-full text-[11px] font-semibold shadow-lg border z-20 ${
                        cardToast.isSolving
                          ? 'bg-[#111827] text-[#a5b4fc] border-indigo-500/40'
                          : 'bg-[#111827] text-[#34d399] border-emerald-500/40'
                      }`}
                    >
                      {cardToast.text}
                    </div>
                  )}

                  {/* Question Header */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3.5 mb-4 border-b border-black/6">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono font-semibold text-ink-muted uppercase tracking-wider">
                        Question {currentQ.number} of 5 · {currentQ.courseCode}
                      </span>
                      <span className="text-xs bg-[#f4f1ea] px-2.5 py-0.5 rounded-full font-semibold text-ink">
                        {currentQ.pts}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      {currentQ.isOcr && (
                        <button
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

                  {/* Question Body by Type */}
                  {currentQ.id === 1 && (
                    <div>
                      <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-4 leading-snug">
                        {currentQ.question}
                      </h2>
                      <div className="space-y-2">
                        {currentQ.options?.map((opt) => {
                          const selected = q1Selected === opt.label;
                          const stealthTick = stealthMarks[1] && opt.label === 'B';
                          return (
                            <label
                              key={opt.label}
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsPlaying(false);
                                setQ1Selected(opt.label);
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
                                  name="canvas_q1"
                                  checked={selected}
                                  onChange={() => setQ1Selected(opt.label)}
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
                              {selected && (
                                <span className="text-[11px] font-mono font-bold text-emerald-900 bg-[#cdeecb] px-2.5 py-0.5 rounded-full">
                                  Auto-Filled
                                </span>
                              )}
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {currentQ.id === 2 && (
                    <div>
                      <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-4 leading-snug">
                        {currentQ.question}
                      </h2>
                      <div className="space-y-2">
                        {currentQ.options?.map((opt) => {
                          const checked = q2Selected.includes(opt.label);
                          const stealthTick = stealthMarks[2] && ['A', 'B', 'D'].includes(opt.label);
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
                                    setQ2Selected((prev) =>
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

                  {currentQ.id === 3 && (
                    <div>
                      <span className="inline-block text-[11px] font-mono font-bold uppercase tracking-wider text-indigo-700 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-md mb-3">
                        Multiple Dropdowns / Cloze Fill-in-the-Blank
                      </span>
                      <div className="p-5 rounded-xl bg-[#faf8f5] border border-black/8 text-base sm:text-lg font-medium text-ink leading-loose">
                        During a neuronal action potential, rapid depolarization is triggered by the opening of
                        voltage-gated{' '}
                        <select
                          value={q3Blank1}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => {
                            setIsPlaying(false);
                            setQ3Blank1(e.target.value);
                          }}
                          className={`px-3 py-1.5 rounded-xl border font-bold text-sm mx-1 transition-all ${
                            q3Blank1 === 'Sodium (Na+)'
                              ? 'bg-[#cdeecb] border-emerald-600 text-ink shadow-2xs'
                              : 'bg-white border-black/15 text-ink'
                          }`}
                        >
                          <option value="">[ Select Blank 1 ]</option>
                          <option value="Chloride (Cl-)">Chloride (Cl-)</option>
                          <option value="Sodium (Na+)">Sodium (Na+)</option>
                          <option value="Magnesium (Mg2+)">Magnesium (Mg2+)</option>
                        </select>
                        {stealthMarks[3] && <span className="text-[#10b981] font-extrabold text-sm mr-1">✓</span>}{' '}
                        channels, whereas repolarization is driven by the delayed efflux of{' '}
                        <select
                          value={q3Blank2}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) => {
                            setIsPlaying(false);
                            setQ3Blank2(e.target.value);
                          }}
                          className={`px-3 py-1.5 rounded-xl border font-bold text-sm mx-1 transition-all ${
                            q3Blank2 === 'Potassium (K+)'
                              ? 'bg-[#cdeecb] border-emerald-600 text-ink shadow-2xs'
                              : 'bg-white border-black/15 text-ink'
                          }`}
                        >
                          <option value="">[ Select Blank 2 ]</option>
                          <option value="Calcium (Ca2+)">Calcium (Ca2+)</option>
                          <option value="Potassium (K+)">Potassium (K+)</option>
                          <option value="Bicarbonate (HCO3-)">Bicarbonate (HCO3-)</option>
                        </select>
                        {stealthMarks[3] && <span className="text-[#10b981] font-extrabold text-sm">✓</span>} ions.
                      </div>
                    </div>
                  )}

                  {currentQ.id === 4 && (
                    <div>
                      <h2 className="font-display text-lg sm:text-xl font-bold text-ink mb-4 leading-snug">
                        {currentQ.question}
                      </h2>
                      <div className="p-4 rounded-xl bg-[#faf8f5] border border-black/8 space-y-2">
                        <label className="text-xs font-mono font-semibold text-ink-muted block">
                          Canvas Short-Answer Input Field:
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
                            placeholder="Double-click question card to auto-type..."
                            className={`w-full px-4 py-3 rounded-xl border text-sm font-mono font-bold outline-none transition-all ${
                              q4Input
                                ? 'bg-[#cdeecb]/40 border-emerald-600 text-ink'
                                : 'bg-white border-black/15 text-ink'
                            }`}
                          />
                          {stealthMarks[4] && <span className="text-[#10b981] font-extrabold text-base">✓</span>}
                        </div>
                      </div>
                    </div>
                  )}

                  {currentQ.id === 5 && (
                    <div>
                      <h2 className="font-display text-base sm:text-lg font-bold text-ink mb-3.5 leading-snug">
                        {currentQ.question}
                      </h2>

                      {/* Clean Vector Geometry + Calculus Diagram */}
                      <div className="mb-4 p-3 rounded-2xl bg-[#faf8f5] border border-black/8 flex justify-center">
                        <svg viewBox="0 0 460 140" className="w-full max-w-md h-auto">
                          <defs>
                            <pattern id="demoGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e9e4da" strokeWidth="1" />
                            </pattern>
                          </defs>
                          <rect width="460" height="140" fill="url(#demoGrid)" rx="10" />
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
                          <text x="125" y="134" fontSize="12" fontWeight="bold" fill="#1e1b4b" fontFamily="monospace">
                            a = 6
                          </text>
                          <text x="228" y="78" fontSize="12" fontWeight="bold" fill="#1e1b4b" fontFamily="monospace">
                            b = 8
                          </text>
                          <text x="110" y="66" fontSize="13" fontWeight="bold" fill="#4f46e5" fontFamily="monospace">
                            c = ?
                          </text>
                          <path
                            d="M 265,110 Q 335,48 410,18"
                            fill="none"
                            stroke="#059669"
                            strokeWidth="2.5"
                            strokeDasharray="4 2"
                          />
                          <circle cx="350" cy="40" r="4.5" fill="#059669" />
                          <text x="305" y="26" fontSize="11" fontWeight="bold" fill="#065f46" fontFamily="monospace">
                            dy/dx at x = 4
                          </text>
                        </svg>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {currentQ.options?.map((opt) => {
                          const selected = q5Selected === opt.label;
                          const stealthTick = stealthMarks[5] && opt.label === 'B';
                          return (
                            <label
                              key={opt.label}
                              onClick={(e) => {
                                e.stopPropagation();
                                setIsPlaying(false);
                                setQ5Selected(opt.label);
                              }}
                              className={`flex items-center justify-between p-3 rounded-xl border text-xs sm:text-sm font-mono font-semibold cursor-pointer transition-all ${
                                selected
                                  ? 'bg-[#cdeecb]/40 border-emerald-500 text-ink'
                                  : 'bg-white border-black/10 text-ink hover:border-black/25'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <input
                                  type="radio"
                                  name="canvas_q5"
                                  checked={selected}
                                  onChange={() => setQ5Selected(opt.label)}
                                  className="accent-emerald-600"
                                />
                                <span>
                                  <strong>{opt.label}.</strong> {opt.text}
                                  {stealthTick && (
                                    <span className="text-[#10b981] font-extrabold text-xs ml-1.5">✓</span>
                                  )}
                                </span>
                              </div>
                              {selected && (
                                <span className="text-[10px] font-mono font-bold text-emerald-900 bg-[#cdeecb] px-2 py-0.5 rounded-full">
                                  OCR ✓
                                </span>
                              )}
                            </label>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>

                {/* In-Page Smart Answer Banner (.agy-side-banner from content.js) */}
                <AnimatePresence>
                  {sideBanner.visible && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 24 }}
                      onClick={(e) => e.stopPropagation()}
                      className="mt-4 w-full bg-[#0f172a] border border-slate-700/80 rounded-2xl shadow-lg text-[#f1f5f9] overflow-hidden"
                    >
                      <div className="flex items-center justify-between px-4 py-2.5 bg-[#1e293b]/80 border-b border-white/10">
                        <div
                          className={`flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider ${
                            sideBanner.isSolving ? 'text-[#818cf8]' : 'text-[#34d399]'
                          }`}
                        >
                          <span>{sideBanner.isSolving ? '⚡' : '✓'}</span>
                          <span>
                            {sideBanner.isSolving
                              ? 'Explain Mode Banner · Solving with AI...'
                              : 'Explain Mode Banner · Answer Solved'}
                          </span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          {!sideBanner.isSolving && (
                            <>
                              <button
                                onClick={() => setSideBanner((prev) => ({ ...prev, pinned: !prev.pinned }))}
                                className={`w-6 h-6 rounded-md flex items-center justify-center text-xs cursor-pointer transition-colors ${
                                  sideBanner.pinned
                                    ? 'bg-[#6366f1] text-white'
                                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                                }`}
                                title={sideBanner.pinned ? 'Unpin' : 'Pin'}
                              >
                                📌
                              </button>
                              <button
                                onClick={() => {
                                  if (sideBanner.result) {
                                    navigator.clipboard?.writeText(sideBanner.result.answerText).catch(() => {});
                                    setClipboardNotice(`Copied: "${sideBanner.result.answerText}"`);
                                    setTimeout(() => setClipboardNotice(null), 2200);
                                  }
                                }}
                                className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center text-xs cursor-pointer"
                                title="Copy Answer"
                              >
                                📋
                              </button>
                            </>
                          )}
                          <button
                            onClick={() => setSideBanner((prev) => ({ ...prev, visible: false }))}
                            className="w-6 h-6 rounded-md bg-white/10 hover:bg-white/20 text-slate-300 flex items-center justify-center text-xs cursor-pointer"
                            title="Close"
                          >
                            ✕
                          </button>
                        </div>
                      </div>

                      <div className="p-3.5 grid grid-cols-1 md:grid-cols-12 gap-3 items-center text-xs">
                        {sideBanner.isSolving ? (
                          <div className="md:col-span-12 bg-emerald-500/12 border border-emerald-500/30 rounded-lg p-2.5">
                            <span className="text-[#a5b4fc] font-bold text-xs">
                              Analyzing question &amp; eliminating distractors...
                            </span>
                          </div>
                        ) : (
                          sideBanner.result && (
                            <>
                              <div className="md:col-span-5 bg-emerald-500/12 border border-emerald-500/30 rounded-xl p-3">
                                <div className="text-[10px] uppercase tracking-wider text-[#34d399] font-bold mb-0.5">
                                  Predicted Answer
                                </div>
                                <span className="text-[#34d399] text-xs sm:text-[13px] font-bold break-words">
                                  {sideBanner.result.correctOptions && sideBanner.result.correctOptions.length > 1
                                    ? `[${sideBanner.result.correctOptions.join(', ')}] `
                                    : sideBanner.result.correctOption
                                    ? `${sideBanner.result.correctOption}) `
                                    : ''}
                                  {sideBanner.result.answerText}
                                </span>
                              </div>

                              {explainDetailed && sideBanner.result.explanation && (
                                <div className="md:col-span-7 text-[11.5px] text-[#cbd5e1] leading-relaxed bg-white/[0.04] rounded-xl p-3 border-l-2 border-[#6366f1]">
                                  <strong className="text-white">Rationale:</strong> {sideBanner.result.explanation}
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

              {/* Bottom Canvas Proctor & Pagination Bar */}
              <div className="pt-4 mt-5 border-t border-black/8 flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <button
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
                    onClick={() => {
                      setIsPlaying(false);
                      setActiveQ((prev) => Math.min(5, prev + 1));
                    }}
                    disabled={activeQ === 5}
                    className="px-3 py-1.5 rounded-xl bg-[#f7f5f0] border border-black/8 font-semibold text-ink disabled:opacity-40 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Next</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="flex items-center gap-3 font-mono text-[11px] text-ink-secondary">
                  <span className="inline-flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-emerald-600" />
                    window.onblur: <strong className="text-emerald-700">0</strong>
                  </span>
                  <span>·</span>
                  <span>
                    Solved: <strong className="text-ink">{totalSolvedCount}/5</strong>
                  </span>
                </div>
              </div>
            </div>

            {/* ==================== RIGHT 5 COLS: FLOATING CHROME EXTENSION POPOVER (NO SOLVE-ALL BUTTON) ==================== */}
            {popupOpen && (
              <div
                onClick={() => {
                  if (isPlaying) setIsPlaying(false);
                }}
                className="lg:col-span-5 flex flex-col items-center justify-start relative"
              >
                {/* Chrome Toolbar Popover Pointer Caret */}
                <div className="hidden lg:block absolute -top-2 right-10 w-4 h-4 rotate-45 bg-[#0a0e14] border-l border-t border-white/15 z-20" />

                {/* Cloned Extension Popup (Strictly One-by-One Double-Click + Screenshot Snip Tool) */}
                <div
                  className={`w-full max-w-[430px] rounded-2xl border shadow-[0_24px_60px_-12px_rgba(10,14,20,0.45)] p-4 flex flex-col relative z-10 transition-colors ${
                    theme === 'light'
                      ? 'bg-[#f1f4f8] text-[#0f172a] border-black/12'
                      : 'bg-[#0a0e14] text-white border-white/12'
                  }`}
                >
                  {/* Popup Header */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/8">
                    <div className="flex items-center gap-2.5">
                      <div className="w-[34px] h-[34px] rounded-[9px] bg-[#10b981] flex items-center justify-center text-[#042f1a] shadow-[0_4px_12px_rgba(16,185,129,0.25)] shrink-0">
                        <Sparkles size={19} />
                      </div>
                      <div>
                        <div className="text-[15px] font-bold tracking-tight leading-none">Study Assistant</div>
                        <div className="flex items-center gap-1.5 text-[11px] font-medium text-[#94a3b8] mt-1">
                          <span className="w-[6.5px] h-[6.5px] rounded-full bg-[#10b981] shadow-[0_0_7px_rgba(16,185,129,0.7)] inline-block" />
                          <span className="truncate max-w-[190px]">{currentQ.courseCode}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5">
                      <button
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                        className="w-8 h-8 rounded-lg bg-[#151d28] border border-white/10 text-[#94a3b8] hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                        title="Toggle Theme"
                      >
                        {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
                      </button>
                      <button
                        onClick={() => setShowSettings((prev) => !prev)}
                        className="w-8 h-8 rounded-lg bg-[#151d28] border border-white/10 text-[#94a3b8] hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                        title="Settings & API Key"
                      >
                        <Sliders size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Settings Panel */}
                  {showSettings && (
                    <div className="bg-[#151d28] border border-emerald-500/40 rounded-xl p-3.5 mb-3 text-xs">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">Configuration</span>
                        <button onClick={() => setShowSettings(false)} className="text-slate-400 hover:text-white">
                          ✕
                        </button>
                      </div>
                      <label className="block text-[11px] text-[#94a3b8] mb-1">Gemini API Key</label>
                      <input
                        type="password"
                        value={apiKey}
                        onChange={(e) => setApiKey(e.target.value)}
                        className="w-full px-2.5 py-1.5 rounded-lg bg-[#0a0e14] border border-white/10 text-xs font-mono text-white mb-2.5"
                      />
                      <div className="flex justify-end">
                        <button
                          onClick={() => setShowSettings(false)}
                          className="px-3 py-1 rounded-md bg-[#10b981] text-[#022c19] font-bold text-[11px] cursor-pointer"
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  )}

                  {/* License Modal */}
                  {showLicenseModal && (
                    <div className="bg-[#151d28] border border-emerald-500/40 rounded-xl p-3.5 mb-3 text-xs">
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-bold">Activate License</span>
                        <button onClick={() => setShowLicenseModal(false)} className="text-slate-400 hover:text-white">
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
                        onClick={() => {
                          setTotalMessages(999);
                          setUsedMessages(0);
                          setLicenseSuccess(true);
                          setTimeout(() => setShowLicenseModal(false), 900);
                        }}
                        className="w-full py-1.5 rounded-md bg-[#10b981] text-[#022c19] font-bold cursor-pointer"
                      >
                        {licenseSuccess ? '✓ License Activated!' : 'Activate License'}
                      </button>
                    </div>
                  )}

                  {/* 3-Mode Segmented Tab Pane with Smooth Layout Indicator */}
                  <div className="grid grid-cols-3 gap-1 p-1 rounded-xl bg-gradient-to-b from-[#131a24] to-[#0e131b] border border-white/10 mb-3 relative">
                    {[
                      { id: 'invisible', label: 'Invisible', kbd: 'Alt+1', Icon: EyeOff },
                      { id: 'stealth', label: 'Stealth', kbd: 'Alt+2', Icon: Shield },
                      { id: 'explain', label: 'Explain', kbd: 'Alt+3', Icon: BookOpen },
                    ].map(({ id, label, kbd, Icon }) => {
                      const active = solverMode === id;
                      return (
                        <button
                          key={id}
                          onClick={() => {
                            setSolverMode(id as 'invisible' | 'stealth' | 'explain');
                            playSound('tab');
                          }}
                          className={`relative z-10 flex items-center justify-center gap-1 py-2 px-1.5 rounded-lg text-[11.5px] font-semibold transition-colors cursor-pointer ${
                            active ? 'text-[#34d399]' : 'text-[#94a3b8] hover:text-white'
                          }`}
                        >
                          {active && (
                            <motion.span
                              layoutId="extModePill"
                              transition={{ type: 'spring', stiffness: 320, damping: 28 }}
                              className="absolute inset-0 rounded-lg bg-gradient-to-b from-emerald-500/20 to-emerald-500/5 border border-emerald-500/40 -z-10"
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

                  {/* Single Hero Action Button: Activate Screenshot Tool (No Solve All Button) */}
                  <div className="flex flex-col gap-2 mb-3">
                    <button
                      onClick={() => {
                        setActiveQ(5);
                        setSnipModeActive((prev) => !prev);
                        playSound('snip');
                      }}
                      className={`w-full h-[40px] rounded-[20px] border text-xs font-extrabold tracking-wide uppercase flex items-center justify-center gap-2 transition-all cursor-pointer ${
                        snipModeActive
                          ? 'bg-emerald-500 text-[#022c19] border-emerald-400 shadow-[0_4px_14px_rgba(16,185,129,0.35)]'
                          : 'bg-[#151d28] border-white/12 text-white hover:border-emerald-500/50 hover:text-[#10b981]'
                      }`}
                    >
                      <Crop size={15} />
                      <span>{snipModeActive ? 'DRAG ON QUESTION 5 DIAGRAM' : 'ACTIVATE SCREENSHOT TOOL'}</span>
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

                  {/* Mode Status Badge */}
                  {solverMode === 'invisible' && (
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-[11.5px] font-semibold mb-3 bg-indigo-500/10 border border-indigo-500/25 text-[#a5b4fc]">
                      <span className="w-2 h-2 rounded-full bg-[#818cf8] animate-pulse" />
                      <span>Invisible Ghost Mode Active (Zero Screen Traces)</span>
                    </div>
                  )}
                  {solverMode === 'stealth' && (
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-[11.5px] font-semibold mb-3 bg-emerald-500/10 border border-emerald-500/25 text-[#10b981]">
                      <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
                      <span>Stealth Solver Active (Double-Click Any Question)</span>
                    </div>
                  )}
                  {solverMode === 'explain' && (
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg text-[11.5px] font-semibold mb-3 bg-sky-500/10 border border-sky-500/25 text-[#38bdf8]">
                      <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
                      <span>Study Explainer HUD Active</span>
                    </div>
                  )}

                  {/* Compact Preferences Card */}
                  <div className="bg-[#151d28] border border-white/10 rounded-xl p-3 mb-3 space-y-2">
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-[#94a3b8]">
                      PREFERENCES
                    </div>

                    {solverMode === 'invisible' && (
                      <>
                        <ExtSwitchRow
                          checked={invisibleAutoFill}
                          onChange={setInvisibleAutoFill}
                          label="Silent Auto-Fill Answers"
                          info="No floating banner or toasts; silently checks choices directly"
                        />
                        <ExtSwitchRow
                          checked={invisibleClipboardCopy}
                          onChange={setInvisibleClipboardCopy}
                          label="Copy Answer to Clipboard"
                          info="Silently copies the exact answer text to clipboard on solve"
                        />
                        <ExtSwitchRow
                          checked={invisibleDoubleClick}
                          onChange={setInvisibleDoubleClick}
                          label="Double-Click Question Solver"
                          info="Double-click on any question card silently ticks the answer"
                        />
                      </>
                    )}

                    {solverMode === 'stealth' && (
                      <>
                        <ExtSwitchRow
                          checked={stealthAutoFill}
                          onChange={(val) => {
                            setStealthAutoFill(val);
                            setStealthHighlightOnly(!val);
                          }}
                          label="Auto-Fill Answers & Inputs"
                          info="Automatically selects answers and fills inputs without banners"
                        />
                        <ExtSwitchRow
                          checked={!stealthAutoFill && stealthHighlightOnly}
                          onChange={(val) => {
                            setStealthHighlightOnly(val);
                            if (val) setStealthAutoFill(false);
                          }}
                          label="Highlight Hint Only (No Fill)"
                          info="Subtly marks the right option with a tick (✓) so you can choose it yourself"
                        />
                        <ExtSwitchRow
                          checked={stealthDoubleClick}
                          onChange={setStealthDoubleClick}
                          label="Double-Click Question Solver"
                          info="Double-click any question card on your page to get its answer"
                        />
                      </>
                    )}

                    {solverMode === 'explain' && (
                      <>
                        <ExtSwitchRow
                          checked={explainAutoFill}
                          onChange={setExplainAutoFill}
                          label="Auto-Fill Answers on Page"
                          info="Highlights and auto-fills the right option beside each question"
                        />
                        <ExtSwitchRow
                          checked={explainSideBanner}
                          onChange={setExplainSideBanner}
                          label="Right-Side Answer Banner"
                          info="A small card slides in with the answer and reason"
                        />
                        <ExtSwitchRow
                          checked={explainDetailed}
                          onChange={setExplainDetailed}
                          label="Detailed Explanations"
                          info="Two or three sentences on why the answer is right"
                        />
                      </>
                    )}
                  </div>

                  {/* One-by-One Double-Click Guide Card */}
                  <div className="bg-[#151d28] border border-white/10 rounded-xl p-3 mb-3 flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-[#10b981] shrink-0">
                        <MousePointerClick size={15} />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-white leading-tight">
                          Double-Click Any Question Card
                        </div>
                        <div className="text-[11px] text-[#94a3b8]">
                          Solves one question at a time directly on your exam page
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={() => triggerSolveQuestion(currentQ.id)}
                      className="px-2.5 py-1.5 rounded-lg bg-[#10b981] hover:bg-[#059669] text-[#022c19] text-[11px] font-extrabold shrink-0 cursor-pointer transition-colors"
                    >
                      Test Q{currentQ.number}
                    </button>
                  </div>

                  {/* Footer Quota Card */}
                  <div className="bg-[#151d28] border border-white/10 rounded-xl p-3 mt-auto">
                    <div className="flex justify-between items-center text-xs mb-1.5">
                      <span className="font-semibold">Free messages</span>
                      <span className="font-mono">
                        {usedMessages} / {totalMessages}
                      </span>
                    </div>
                    <div className="w-full h-1.5 bg-[#1e2836] rounded-full overflow-hidden mb-1.5">
                      <div
                        className="h-full bg-[#10b981] transition-all duration-300"
                        style={{ width: `${Math.min(100, (usedMessages / totalMessages) * 100)}%` }}
                      />
                    </div>
                    <div className="flex justify-between items-center text-[11px]">
                      <span className="text-[#64748b]">{Math.max(0, totalMessages - usedMessages)} left</span>
                      <button
                        onClick={() => setShowLicenseModal(true)}
                        className="text-[#10b981] font-semibold hover:underline cursor-pointer"
                      >
                        Have a license key?
                      </button>
                    </div>
                  </div>
                </div>

                {/* Invisible Mode Clipboard Toast */}
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

          {/* ==================== 6-CHAPTER FILM SCRUBBER BAR ==================== */}
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
                      <span className={isActive ? 'text-[#cdeecb] font-bold' : 'text-white/50'}>{ch.code}</span>
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
      </main>

      <Footer />
    </div>
  );
}

function ExtSwitchRow({
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
