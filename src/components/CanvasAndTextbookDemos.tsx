'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MotionDemoFrame,
  MotionCursor,
  MotionTimelineScrubber,
} from '@/components/motion-demo';
import { SpeedOption, MotionScene, TelemetryState, CursorState } from '@/components/motion-demo/types';
import {
  AlertTriangle,
  BookOpen,
  CheckCircle2,
  Clock,
  Cpu,
  Layers,
  Lock,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Zap,
} from 'lucide-react';

/* ============================================================================
   1. CANVASCRACK VS EXAMGHOST DEMO:
   General Chemistry I (CHEM 110) · Stoichiometry & Gas Laws (KClO3 decomposition)
   Scene 0: 41.8s manual tab-flipping, document.oncopy logged, dead mouse gap
   Scene 1: ExamGhost 0.3s inline solve, 1.39 L, closed Shadow DOM, 0 blur events
   Scene 2: Multi-Model Gas Law Derivation (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function CanvasCrackStoichiometryDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. CanvasCrack Latency',
      title: 'CanvasCrack: 41.8s Manual Tab-Flipping & No-AI Trap',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Inline Double-Click & Focus Shield',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Multi-Model Gas Law Derivation',
      durationMs: 7500,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene]?.durationMs ?? 6500;
    const stepIncrement = ((intervalMs * playbackSpeed) / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return Math.min(100, Math.max(0, prev + stepIncrement));
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const safeProgress = Math.min(100, Math.max(0, sceneProgress));
  const stopwatchSeconds = (safeProgress * 0.418).toFixed(1);

  const telemetry: TelemetryState =
    currentScene === 0
      ? safeProgress > 45
        ? {
            speedGrader: 'document.oncopy fired · 41.8s Dead Mouse Gap Logged',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · Quiz in progress',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Focus Shield Active',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 30, y: 32, clicking: false, label: 'Reading Question Text' };
      } else if (safeProgress < 50) {
        return { x: 42, y: 36, clicking: true, label: 'Ctrl+C: document.oncopy Logged!', tag: 'fail' };
      } else if (safeProgress < 80) {
        return { x: 86, y: 14, clicking: true, label: 'Tab Switch → External ChatGPT Tab', tag: 'fail' };
      } else {
        return { x: 28, y: 68, clicking: true, label: 'Click Option B (41.8s elapsed)', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 35, y: 32, clicking: true, label: 'Double-Click (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 55, y: 50, clicking: false, label: 'Alt+S: Hybrid Vision + DOM Snip', tag: 'snip' };
      } else {
        return { x: 68, y: 72, clicking: false, label: 'Alt+1 Invisible / Alt+3 Derivation', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 Non-Ideality Proof', tag: 'explain' };
      }
    }
  };

  const cursorState = getCursor();

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="CHEM 110 Exam II · Canvas Quiz Viewport"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/41920/quizzes/78411"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={safeProgress}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying((p) => !p)}
            onSeekScene={handleSeekScene}
            playbackSpeed={playbackSpeed}
            onSpeedChange={(sp) => setPlaybackSpeed(sp)}
            onRestart={() => handleSeekScene(0)}
          />
        }
      >
        <div className="relative p-5 sm:p-7 min-h-[390px] flex flex-col justify-between">
          <MotionCursor cursor={cursorState} />

          {/* SCENE 0: CANVASCRACK FAILURE */}
          {currentScene === 0 && (
            <motion.div
              key="crack-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  CanvasCrack: $139.99 Upfront · Zero AI Solver · FAQ: &quot;We don&apos;t offer a free trial&quot;
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  {safeProgress > 45 ? 'SpeedGrader: 1 window.blur flag · 41.8s Inactive Gap' : 'Copying formula to clipboard'}
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 mb-2 border-b border-white/10">
                  <span>CHEM 110 · Midterm II · Question 14 of 40</span>
                  <span className="text-amber-400 font-bold">4.0 Points</span>
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  A 4.50 g sample of solid potassium chlorate (
                  <code className="text-amber-300 font-mono">2 KClO3(s) → 2 KCl(s) + 3 O2(g)</code>)
                  decomposes completely upon heating. The generated oxygen gas is collected over water at 25.0 °C and a
                  total atmospheric pressure of 752.4 Torr. Given the vapor pressure of water at 25.0 °C is 23.8 Torr,
                  and R = 0.08206 L·atm/(mol·K), calculate the dry volume of O2 gas collected.
                </p>

                {safeProgress > 30 && (
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="mt-3 p-3.5 rounded-xl bg-slate-950 border border-rose-500/60 flex flex-wrap items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1.5 rounded-lg bg-rose-950/80 border border-rose-500 font-mono font-black text-rose-400 text-lg sm:text-xl">
                        ⏱ {stopwatchSeconds}s
                      </div>
                      <div className="text-xs space-y-0.5">
                        <p className="font-bold text-rose-300">Canvas SpeedGrader Audit Log Flag</p>
                        <p className="text-[11px] text-slate-400">
                          {safeProgress < 50
                            ? '1. [00:12] document.oncopy triggered on #question_78411'
                            : safeProgress < 75
                            ? '2. [00:13–00:44] 31.8s dead mouse gap while student pasted in ChatGPT'
                            : '3. [00:45] Window focus restored after external AI lookup'}
                        </p>
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-rose-300/90 text-right">
                      <span>41.8s lost on 1 question</span>
                      <br />
                      <span className="text-slate-400">~32 Minutes Wasted Across 50 Qs</span>
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {[
                    { label: 'A', text: '0.892 L (1:1 stoichiometry error)' },
                    { label: 'B', text: '1.39 L (P_dry = 728.6 Torr, n_O2 = 0.0551 mol)', correct: true },
                    { label: 'C', text: '2.14 L (Total pressure without vapor subtraction)' },
                    { label: 'D', text: '0.928 L (Inverted mole ratio)' },
                  ].map((opt) => (
                    <div
                      key={opt.label}
                      className={`p-2.5 rounded-xl border flex items-center justify-between ${
                        opt.correct && safeProgress > 80
                          ? 'bg-rose-950/40 border-rose-500/60 text-white font-medium'
                          : 'bg-white/[0.02] border-white/10 text-slate-400'
                      }`}
                    >
                      <span>
                        <strong>{opt.label})</strong> {opt.text}
                      </span>
                      {opt.correct && safeProgress > 80 && (
                        <span className="px-1.5 py-0.5 rounded bg-rose-500 text-slate-950 font-mono text-[10px] font-bold">
                          Selected @ 41.8s
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3s SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="crack-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ExamGhost 0.3s Inline Double-Click &amp; Focus Shield
                </span>
                <div className="flex items-center gap-1.5 text-[10px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                    Alt+1 Invisible
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold">Alt+2 Stealth</span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                    Alt+3 Explain
                  </span>
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  A 4.50 g sample of solid potassium chlorate (
                  <code className="text-emerald-300 font-mono">2 KClO3(s) → 2 KCl(s) + 3 O2(g)</code>)
                  decomposes completely upon heating. The generated oxygen gas is collected over water at 25.0 °C and a
                  total atmospheric pressure of 752.4 Torr. Given the vapor pressure of water at 25.0 °C is 23.8 Torr...
                </p>

                {safeProgress > 35 && safeProgress < 70 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2.5 p-2 rounded-lg bg-sky-950/60 border border-sky-400/50 text-[11px] font-mono text-sky-300 flex items-center justify-between"
                  >
                    <span>[Alt+S Gas Law Vision Snip · 38ms Mathpix OCR Parse]</span>
                    <span className="text-white font-bold">0.3s Solve</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {[
                    { label: 'A', text: '0.892 L' },
                    { label: 'B', text: '1.39 L (Dry O2 Volume at 298.15 K)', correct: true },
                    { label: 'C', text: '2.14 L' },
                    { label: 'D', text: '0.928 L' },
                  ].map((opt) => {
                    const isSolved = opt.correct && safeProgress > 25;
                    return (
                      <div
                        key={opt.label}
                        className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                          isSolved
                            ? 'bg-emerald-500/20 border-emerald-400 text-white font-bold ring-2 ring-emerald-500/20'
                            : 'bg-white/[0.02] border-white/10 text-slate-400'
                        }`}
                      >
                        <span>
                          <strong>{opt.label})</strong> {opt.text}
                        </span>
                        {isSolved && (
                          <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                            ✓ 1.39 L · 0.3s · 0 Blur
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {safeProgress > 65 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="mt-3 p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs text-slate-300 font-mono space-y-1"
                  >
                    <div className="text-[11px] text-emerald-400 font-bold flex items-center justify-between">
                      <span>[Alt+3 Closed Shadow DOM Micro-HUD]:</span>
                      <span>⌘+Shift+U Panic Ready</span>
                    </div>
                    <p className="text-[11px]">
                      P_dry = 752.4 - 23.8 = 728.6 Torr = 0.9587 atm. n_O2 = (4.50 / 122.55) × (3/2) = 0.05508 mol. V = nRT/P = (0.05508 × 0.08206 × 298.15) / 0.9587 = 1.405 L ≈ 1.39 L.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* SCENE 2: 2-IN-1 STUDY HUB */}
          {currentScene === 2 && (
            <motion.div
              key="crack-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  ExamGhost Study &amp; Homework AI Workspace (Included on Paid Plans)
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((model) => (
                    <button
                      key={model}
                      type="button"
                      onClick={() => setActiveModelTab(model)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === model
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {model === 'claude'
                        ? 'Claude 3.7 Sonnet'
                        : model === 'chatgpt'
                        ? 'ChatGPT o3-mini/4o'
                        : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    CHEM 110 Chapter 10: Stoichiometry &amp; Dalton&apos;s Law of Partial Pressures
                  </span>
                  <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                    {activeModelTab === 'claude'
                      ? 'Best for Step-by-Step Stoichiometric Proofs'
                      : activeModelTab === 'chatgpt'
                      ? 'Best for Student Trap Identification'
                      : 'Best for Real Gas Van der Waals Derivations'}
                  </span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  {activeModelTab === 'claude' && (
                    <div className="space-y-1">
                      <p>
                        <strong>1. Molar Mass:</strong> M(KClO3) = 39.10 + 35.45 + 3(16.00) = 122.55 g/mol.
                      </p>
                      <p>
                        <strong>2. Moles of Reactant:</strong> n(KClO3) = 4.50 g / 122.55 g/mol = 0.03672 mol.
                      </p>
                      <p>
                        <strong>3. Reaction Mole Ratio:</strong> 2 mol KClO3 produces 3 mol O2 → n(O2) = 0.03672 × (3/2) = 0.05508 mol O2.
                      </p>
                      <p>
                        <strong>4. Dalton&apos;s Law:</strong> P(dry O2) = P(total) - P(H2O) = 752.4 - 23.8 = 728.6 Torr = 0.9587 atm.
                      </p>
                      <p>
                        <strong>5. Volume:</strong> V = nRT/P = (0.05508 mol × 0.08206 L·atm/(mol·K) × 298.15 K) / 0.9587 atm = 1.405 L ≈ <strong>1.39 L</strong>.
                      </p>
                    </div>
                  )}
                  {activeModelTab === 'chatgpt' && (
                    <div className="space-y-1">
                      <p className="text-amber-300 font-bold">Exam Trap Analysis:</p>
                      <p>
                        • <strong>Trap A (0.892 L):</strong> Occurs if the student omits the 3:2 stoichiometry multiplier (treating n_O2 = n_KClO3 = 0.03672 mol).
                      </p>
                      <p>
                        • <strong>Trap C (2.14 L):</strong> Occurs if the student forgets to subtract the 23.8 Torr water vapor pressure and uses total atmospheric pressure.
                      </p>
                    </div>
                  )}
                  {activeModelTab === 'deepseek' && (
                    <div className="font-mono text-[11px] text-slate-200 space-y-1">
                      <p>Van der Waals Correction for O2 (a = 1.36 L²·atm/mol², b = 0.0318 L/mol):</p>
                      <p>[P + a(n/V)²](V - nb) = nRT → Compressibility factor Z = PV/(nRT) = 0.9982 at 298.15 K and 0.9587 atm.</p>
                      <p>Deviation from ideal gas behavior is &lt;0.18%, proving ideal gas law introduces negligible error.</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </MotionDemoFrame>
    </div>
  );
}

/* ============================================================================
   2. CANVASNINJA VS EXAMGHOST DEMO:
   Discrete Mathematics (CS 240 / MATH 300) · Planar Graphs, Euler's Formula & Kuratowski
   Scene 0: LTI 1.3 iframe cross-origin crash, 19.11MiB telemetry bundle, 2 blur events
   Scene 1: ExamGhost native LTI 1.3 solve, Double-Click, closed Shadow DOM, 0 blur events
   Scene 2: Multi-Model Graph Theory Proofs (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function CanvasNinjaDiscreteMathDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. CanvasNinja LTI Crash',
      title: 'CanvasNinja: LTI 1.3 Failure & 19.11MiB Telemetry',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s LTI 1.3 Solve & Snap-It Vision',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Planar Graph Theory & Kuratowski Proof',
      durationMs: 7500,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene]?.durationMs ?? 6500;
    const stepIncrement = ((intervalMs * playbackSpeed) / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return Math.min(100, Math.max(0, prev + stepIncrement));
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const safeProgress = Math.min(100, Math.max(0, sceneProgress));

  const telemetry: TelemetryState =
    currentScene === 0
      ? {
          speedGrader: 'Cross-Origin Frame Access Blocked · DOM Injected Script Flagged',
          focusShield: false,
          blurEvents: 2,
          status: 'flagged',
        }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Native LTI 1.3 Focus Shield',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 30) {
        return { x: 35, y: 32, clicking: false, label: 'Hovering LTI 1.3 iframe' };
      } else if (safeProgress < 65) {
        return { x: 48, y: 45, clicking: true, label: 'Uncaught DOMException: Blocked cross-origin', tag: 'fail' };
      } else {
        return { x: 75, y: 60, clicking: false, label: 'Scraper Blocked (19.11MiB bundle)', tag: 'alert' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 34, y: 32, clicking: true, label: 'Double-Click (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 55, y: 50, clicking: false, label: 'Alt+S: Snap-It Vision OCR', tag: 'snip' };
      } else {
        return { x: 68, y: 72, clicking: false, label: 'Alt+1 Invisible / ⌘+Shift+U Panic', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 Degree Bound Proof', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="CS 240 Discrete Math · Canvas New Quizzes (LTI 1.3)"
        domainBadge="CANVAS LTI 1.3"
        browserUrl="https://new-quizzes.instructure.com/courses/52104/quizzes/lti-run"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={safeProgress}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying((p) => !p)}
            onSeekScene={handleSeekScene}
            playbackSpeed={playbackSpeed}
            onSpeedChange={(sp) => setPlaybackSpeed(sp)}
            onRestart={() => handleSeekScene(0)}
          />
        }
      >
        <div className="relative p-5 sm:p-7 min-h-[390px] flex flex-col justify-between">
          <MotionCursor cursor={getCursor()} />

          {/* SCENE 0 */}
          {currentScene === 0 && (
            <motion.div key="ninja-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  CanvasNinja ($16.99/mo): Chrome Store Admission: &quot;Not supported on New Quizzes&quot;
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  SpeedGrader: 2 blur events · 19.11MiB Telemetry
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  Let G = (V, E) be a connected planar simple graph with |V| = 14 vertices, where every vertex has degree
                  at least 3, and the plane embedding divides the surface into F faces. If each face is bounded by at
                  least 4 edges (girth g ≥ 4), what is the maximum possible number of edges |E| in G, and can G contain
                  a subgraph homeomorphic to K_3,3?
                </p>

                {safeProgress > 30 && (
                  <motion.div
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="mt-3 p-3.5 rounded-xl bg-slate-950 border border-rose-500/60 font-mono text-xs text-rose-300 space-y-1.5"
                  >
                    <div className="text-rose-400 font-bold">Uncaught DOMException: Blocked cross-origin frame access: canvasninja_content.js</div>
                    <div className="text-[11px] text-slate-400">
                      CanvasNinja cannot pierce the New Quizzes LTI 1.3 iframe sandbox. Telemetry logged to terabits.xyz.
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {[
                    { label: 'A', text: '|E|_max = 24; subgraph K_3,3 is possible' },
                    { label: 'B', text: '|E|_max = 24; subgraph K_3,3 is impossible by Kuratowski\'s Theorem', correct: true },
                    { label: 'C', text: '|E|_max = 36; subgraph K_3,3 is possible' },
                    { label: 'D', text: '|E|_max = 22; subgraph K_3,3 is impossible' },
                  ].map((opt) => (
                    <div key={opt.label} className="p-2.5 rounded-xl border bg-white/[0.02] border-white/10 text-slate-400">
                      <strong>{opt.label})</strong> {opt.text}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 1 */}
          {currentScene === 1 && (
            <motion.div key="ninja-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ExamGhost Native LTI 1.3 Solve &amp; Focus Shield
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold">
                  0.3s Solve · 0 Blur Events
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  Let G = (V, E) be a connected planar simple graph with |V| = 14 vertices, girth g ≥ 4...
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {[
                    { label: 'A', text: '|E|_max = 24; K_3,3 possible' },
                    { label: 'B', text: '|E|_max = 24; K_3,3 impossible by Kuratowski', correct: true },
                    { label: 'C', text: '|E|_max = 36' },
                    { label: 'D', text: '|E|_max = 22' },
                  ].map((opt) => {
                    const isSolved = opt.correct && safeProgress > 25;
                    return (
                      <div
                        key={opt.label}
                        className={`p-2.5 rounded-xl border flex items-center justify-between ${
                          isSolved
                            ? 'bg-emerald-500/20 border-emerald-400 text-white font-bold ring-2 ring-emerald-500/20'
                            : 'bg-white/[0.02] border-white/10 text-slate-400'
                        }`}
                      >
                        <span>
                          <strong>{opt.label})</strong> {opt.text}
                        </span>
                        {isSolved && (
                          <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                            ✓ Euler: E ≤ 2V - 4 = 24 · 0.3s
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 2 */}
          {currentScene === 2 && (
            <motion.div key="ninja-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Study AI Workspace: Discrete Math &amp; Graph Theory Proofs
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((model) => (
                    <button
                      key={model}
                      type="button"
                      onClick={() => setActiveModelTab(model)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === model ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {model === 'claude' ? 'Claude 3.7 Sonnet' : model === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 space-y-2 text-xs text-slate-300">
                {activeModelTab === 'claude' && (
                  <div>
                    <p className="font-bold text-white mb-1">Euler&apos;s Formula &amp; Face-Edge Inequality:</p>
                    <p>1. V - E + F = 2 (Euler&apos;s formula for connected planar graphs).</p>
                    <p>2. Girth g ≥ 4 means each face has at least 4 bounding edges: 2E = ∑ deg(f) ≥ 4F → F ≤ E/2.</p>
                    <p>3. Substitute F: 14 - E + E/2 ≥ 2 → 12 ≥ E/2 → E ≤ 24.</p>
                    <p>4. Kuratowski&apos;s Theorem: G is planar ⇔ G contains no subgraph homeomorphic to K5 or K3,3. Since G is planar, K3,3 is impossible.</p>
                  </div>
                )}
                {activeModelTab === 'chatgpt' && (
                  <div>
                    <p className="font-bold text-emerald-300 mb-1">Topological Minors vs Wagner Minors:</p>
                    <p>Complete bipartite graph K_3,3 has V=6, E=9. For K_3,3, girth is 4, requiring 2(9) ≥ 4F → F ≤ 4.5 → F ≤ 4. Then V - E + F = 6 - 9 + 4 = 1 ≠ 2, proving non-planarity.</p>
                  </div>
                )}
                {activeModelTab === 'deepseek' && (
                  <div className="font-mono text-[11px]">
                    <p>Handshaking Lemma Bound on Minimum Edges:</p>
                    <p>Every vertex has deg(v) ≥ 3 → 2E = ∑ deg(v) ≥ 3|V| = 42 → E ≥ 21. Therefore, valid planar graphs exist for all integer edge counts 21 ≤ |E| ≤ 24.</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </MotionDemoFrame>
    </div>
  );
}

/* ============================================================================
   3. CANVASPASS VS EXAMGHOST DEMO:
   Cognitive Psychology (PSYC 330) · Working Memory & Beck CBT
   Scene 0: 800-char truncation, 10 cr/smart Q meter, disabled tab blocker on $0/$5
   Scene 1: ExamGhost 0.3s solve, full 1,150 chars, 0 credits, 0 blur flags
   Scene 2: Multi-Model Psychology & CBT Analysis (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function CanvasPassCognitivePsychDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. CanvasPass Truncation',
      title: 'CanvasPass: 800-Char Cutoff, 10 Cr/Q & Paywalled Shield',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Solve, Full 1,150 Chars & Focus Shield',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Working Memory Architecture & CBT Triad',
      durationMs: 7500,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene]?.durationMs ?? 6500;
    const stepIncrement = ((intervalMs * playbackSpeed) / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return Math.min(100, Math.max(0, prev + stepIncrement));
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const safeProgress = Math.min(100, Math.max(0, sceneProgress));

  const telemetry: TelemetryState =
    currentScene === 0
      ? {
          speedGrader: '1 window.blur flag · Tab-Switch Blocker Paywalled (OFF)',
          focusShield: false,
          blurEvents: 1,
          status: 'flagged',
        }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Focus Shield Active on Free Tier',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="PSYC 330 Cognitive Psychology · Canvas Quiz Viewport"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/68902/quizzes/41029"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={safeProgress}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying((p) => !p)}
            onSeekScene={handleSeekScene}
            playbackSpeed={playbackSpeed}
            onSpeedChange={(sp) => setPlaybackSpeed(sp)}
            onRestart={() => handleSeekScene(0)}
          />
        }
      >
        <div className="relative p-5 sm:p-7 min-h-[390px] flex flex-col justify-between">
          <MotionCursor
            cursor={
              currentScene === 0
                ? { x: 48, y: 68, clicking: safeProgress > 40, label: 'Get Smart Answer (-10 credits)', tag: 'fail' }
                : currentScene === 1
                ? { x: 35, y: 30, clicking: safeProgress < 35, label: 'Double-Click (0.3s)', tag: 'solve' }
                : { x: 50, y: 18, clicking: true, label: 'Frontier Model Switch', tag: 'default' }
            }
          />

          {currentScene === 0 && (
            <motion.div key="pass-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  CanvasPass: 800-Char Limit · Tab-Switch Blocker Disabled on $0 &amp; $5 Tiers
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  Credits Remaining: 790 / 800
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  A 22-year-old college senior presents to an academic counseling center reporting severe cognitive
                  fatigue during exams. When presented with dual-task paradigms, she shows normal performance when
                  combining a visual spatial-rotation task with an auditory digit-span rehearsal task...
                  <span className="text-rose-400 font-bold bg-rose-950/80 px-1 rounded ml-1">
                    [TRUNCATED AT 800 CHARS — UPGRADE TO PRO FOR 3,000 CHARS]
                  </span>
                </p>

                {safeProgress > 40 && (
                  <div className="mt-3 p-3 rounded-xl bg-slate-950 border border-rose-500/60 font-mono text-xs text-rose-300">
                    <div>⚠️ SpeedGrader: window.blur logged at 00:18. Focus Shield is locked behind $10/mo Pro.</div>
                    <div className="text-[11px] text-slate-400">Separate $25/mo OverlayPass is Windows-only.</div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {currentScene === 1 && (
            <motion.div key="pass-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ExamGhost: Full 1,150 Chars Parsed · 0 Credits Used · 0 Blur Flags
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold">
                  0.3s Solve
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  According to Baddeley and Hitch&apos;s multi-component model of working memory, which specific
                  subcomponent is primarily impaired by articulatory suppression, and how does Beck&apos;s cognitive
                  model explain the secondary intrusive negative automatic thoughts triggered during overload?
                </p>

                <div className="mt-3 p-2.5 rounded-xl border bg-emerald-500/20 border-emerald-400 text-white font-bold text-xs flex items-center justify-between">
                  <span>
                    <strong>B)</strong> Phonological Loop (articulatory rehearsal mechanism); Beck Triad: negative views of self triggered when cognitive load depletes executive control
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                    ✓ 0.3s · 0 Blur
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {currentScene === 2 && (
            <motion.div key="pass-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Study AI Workspace: Cognitive Science &amp; CBT Synthesis
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((model) => (
                    <button
                      key={model}
                      type="button"
                      onClick={() => setActiveModelTab(model)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === model ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {model === 'claude' ? 'Claude 3.7 Sonnet' : model === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 text-xs text-slate-300">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Baddeley&apos;s Architecture:</strong> Articulatory suppression selectively blocks the active subvocal rehearsal mechanism of the phonological loop without disrupting the visuospatial sketchpad. Acoustic traces decay in 1.5–2s without refresh.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Beckian CBT Overload:</strong> When executive working memory resources are fully consumed by dual-task load, prefrontal top-down inhibitory control weakens, allowing latent depressogenic core schemas (&quot;I will fail&quot;) to surface as intrusive automatic thoughts.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Empirical literature synthesis: Baddeley, Thomson &amp; Buchanan (1975) word-length effect + Engle (2002) executive attention theory validating working memory capacity limits.
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </MotionDemoFrame>
    </div>
  );
}

/* ============================================================================
   4. CANVASQUIZ VS EXAMGHOST DEMO:
   Cellular Biology (BIO 201) · Cellular Respiration & Citric Acid Cycle
   Scene 0: Injected DOM button inside host #questions, MutationObserver alert, $48.99/4mo
   Scene 1: ExamGhost 0 DOM mutations, closed Shadow DOM, 0.3s solve, Focus Shield
   Scene 2: Multi-Model Metabolic Pathway Derivations (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function CanvasQuizMetabolicPathwaysDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. CanvasQuiz DOM Flag',
      title: 'CanvasQuiz: Injected DOM Buttons & MutationObserver Flag',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0-DOM Solve, Closed Shadow DOM & Focus Shield',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Cellular Respiration Stoichiometry & P/O Ratios',
      durationMs: 7500,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene]?.durationMs ?? 6500;
    const stepIncrement = ((intervalMs * playbackSpeed) / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return Math.min(100, Math.max(0, prev + stepIncrement));
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const safeProgress = Math.min(100, Math.max(0, sceneProgress));

  const telemetry: TelemetryState =
    currentScene === 0
      ? {
          speedGrader: 'DOM Mutation Flagged: Button Injected · No Proctoring Protection',
          focusShield: false,
          blurEvents: 1,
          status: 'flagged',
        }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · 0 DOM Mutations · Focus Shield Active',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="BIO 201 Cellular Biology · Canvas Quiz Viewport"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/77402/quizzes/39108"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={safeProgress}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying((p) => !p)}
            onSeekScene={handleSeekScene}
            playbackSpeed={playbackSpeed}
            onSpeedChange={(sp) => setPlaybackSpeed(sp)}
            onRestart={() => handleSeekScene(0)}
          />
        }
      >
        <div className="relative p-5 sm:p-7 min-h-[390px] flex flex-col justify-between">
          <MotionCursor
            cursor={
              currentScene === 0
                ? { x: 35, y: 58, clicking: safeProgress > 45, label: 'Click Injected <button>', tag: 'fail' }
                : currentScene === 1
                ? { x: 30, y: 32, clicking: safeProgress < 35, label: 'Double-Click (0.3s)', tag: 'solve' }
                : { x: 50, y: 18, clicking: true, label: 'Model Select', tag: 'default' }
            }
          />

          {currentScene === 0 && (
            <motion.div key="quiz-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  CanvasQuiz: Injected DOM Button · FAQ: &quot;CanvasQuiz is built for unproctored quizzes&quot;
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  $48.99 Every 4 Months ($146.97/yr)
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  During aerobic cellular respiration in human myocardium, 1 mole of glucose undergoes glycolysis,
                  pyruvate oxidation, the Citric Acid (Krebs) cycle, and oxidative phosphorylation. Under physiological
                  conditions where the malate-aspartate shuttle is active, what is the net yield of ATP synthesized per
                  glucose molecule, and which specific allosteric regulatory event prevents wasteful metabolic flux?
                </p>

                {safeProgress > 30 && (
                  <div className="mt-3 p-3 rounded-xl bg-slate-950 border border-rose-500/60 font-mono text-xs text-rose-300 space-y-1">
                    <div className="text-rose-400 font-bold">MutationObserver Warning: Unauthorized DOM Node Inserted:</div>
                    <div>&lt;button class=&quot;canvasquiz-btn&quot;&gt;Get Answer&lt;/button&gt; inside #questions</div>
                    <div className="text-slate-400 text-[11px]">SpeedGrader logs Host DOM Mutation Event.</div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {currentScene === 1 && (
            <motion.div key="quiz-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ExamGhost 0-DOM Solve · Closed Shadow DOM Stealth
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold">
                  0 DOM Mutations · 0.3s Solve
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  During aerobic cellular respiration in human myocardium...
                </p>

                <div className="mt-3 p-2.5 rounded-xl border bg-emerald-500/20 border-emerald-400 text-white font-bold text-xs flex items-center justify-between">
                  <span>
                    <strong>B)</strong> 30–32 ATP; Allosteric inhibition of isocitrate dehydrogenase and citrate synthase by high [ATP] and [NADH]
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                    ✓ 30–32 ATP · 0.3s
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {currentScene === 2 && (
            <motion.div key="quiz-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Study AI Workspace: Cellular Respiration Stoichiometry &amp; P/O Ratios
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((model) => (
                    <button
                      key={model}
                      type="button"
                      onClick={() => setActiveModelTab(model)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === model ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {model === 'claude' ? 'Claude 3.7 Sonnet' : model === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 text-xs text-slate-300">
                {activeModelTab === 'claude' && (
                  <div>
                    <p className="font-bold text-white mb-1">Full Glucose Oxidation Balance:</p>
                    <p>• Glycolysis: 2 ATP (net) + 2 NADH (5 ATP via malate-aspartate shuttle).</p>
                    <p>• Pyruvate Dehydrogenase: 2 NADH (5 ATP).</p>
                    <p>• Citric Acid Cycle: 2 GTP + 6 NADH (15 ATP) + 2 FADH2 (3 ATP).</p>
                    <p>• Total: 2 + 5 + 5 + 2 + 15 + 3 = <strong>32 ATP</strong>.</p>
                  </div>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Shuttle Differences:</strong> Cardiac muscle/liver utilize the malate-aspartate shuttle yielding 32 ATP. Skeletal muscle/brain utilize the glycerol-3-phosphate shuttle which yields 30 ATP due to cytosolic NADH transfer to mitochondrial FAD.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Chemiosmotic Coupling &amp; P/O Ratios: 10 H+ translocated per matrix NADH (4 at Complex I, 4 at Complex III, 2 at Complex IV). With 4 H+ required per ATP synthesized (3 for F0 c-ring rotation + 1 for Pi/H+ symport), P/O = 10/4 = 2.5.
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </MotionDemoFrame>
    </div>
  );
}

/* ============================================================================
   5. CANVASSCHOLAR VS EXAMGHOST DEMO:
   Linear Algebra (MATH 214) · Eigenvalues, Characteristic Polynomial & Vector Spaces
   Scene 0: Attempt #1 lockout, Ctrl+Shift+C returns no prior cached answers, 38.6s blur
   Scene 1: ExamGhost 0.3s solve, closed Shadow DOM, 0 blur events, Alt+S matrix snip
   Scene 2: Multi-Model Linear Algebra Proofs (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function CanvasScholarLinearAlgebraDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Canvas Scholar Clipper Lag',
      title: 'Canvas Scholar: Ctrl+Shift+C Clipboard Snip & 38.6s SpeedGrader Blur',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Double-Click Solve in Closed Shadow DOM',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Characteristic Polynomial Proof & Multi-Model RAG',
      durationMs: 7500,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene]?.durationMs ?? 6500;
    const stepIncrement = ((intervalMs * playbackSpeed) / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return Math.min(100, Math.max(0, prev + stepIncrement));
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const safeProgress = Math.min(100, Math.max(0, sceneProgress));

  const telemetry: TelemetryState =
    currentScene === 0
      ? safeProgress > 45
        ? {
            speedGrader: '1 window.blur flag · 38.6s Away in ChatGPT',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 blur events · Attempt #1 in progress',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Focus Shield Active',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="MATH 214 Linear Algebra · Canvas Quiz Viewport"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/51820/quizzes/62114"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={safeProgress}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying((p) => !p)}
            onSeekScene={handleSeekScene}
            playbackSpeed={playbackSpeed}
            onSpeedChange={(sp) => setPlaybackSpeed(sp)}
            onRestart={() => handleSeekScene(0)}
          />
        }
      >
        <div className="relative p-5 sm:p-7 min-h-[390px] flex flex-col justify-between">
          <MotionCursor
            cursor={
              currentScene === 0
                ? { x: 88, y: 15, clicking: safeProgress > 50, label: 'Alt-Tab to External ChatGPT (38.6s departure)', tag: 'fail' }
                : currentScene === 1
                ? { x: 38, y: 36, clicking: safeProgress < 35, label: 'Double-Click Matrix (0.3s)', tag: 'solve' }
                : { x: 50, y: 18, clicking: true, label: 'Multi-Model Switch', tag: 'default' }
            }
          />

          {currentScene === 0 && (
            <motion.div key="scholar-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  Canvas Scholar: Requires Prior Retake Attempts · Blind on Attempt #1
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  {safeProgress > 45 ? 'SpeedGrader: 1 window.blur flag · 38.6s Away' : 'Hovering Matrix'}
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  Let A = [[4, 2], [1, 3]]. Compute the eigenvalues λ1 ≥ λ2 and identify a basis vector for the eigenspace
                  E_λ1 corresponding to the dominant eigenvalue λ1.
                </p>

                {safeProgress > 30 && (
                  <div className="mt-3 p-3.5 rounded-xl bg-slate-950 border border-rose-500/60 font-mono text-xs text-rose-300 space-y-1">
                    <div className="text-rose-400 font-bold">Attempt #1 · No previous submission cached in local storage.</div>
                    <div className="text-slate-400 text-[11px]">
                      Student forced to Alt-Tab to external ChatGPT. SpeedGrader logs 38.6s departure.
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {currentScene === 1 && (
            <motion.div key="scholar-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ExamGhost 0.3s Double-Click Solve in Closed Shadow DOM
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold">
                  0.3s Solve · 0 Blur Flags
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  Let A = [[4, 2], [1, 3]]. Compute the eigenvalues λ1 ≥ λ2...
                </p>

                <div className="mt-3 p-2.5 rounded-xl border bg-emerald-500/20 border-emerald-400 text-white font-bold text-xs flex items-center justify-between">
                  <span>
                    <strong>A)</strong> λ1 = 5, v1 = [2, 1]^T; λ2 = 2, v2 = [-1, 1]^T
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                    ✓ λ1=5, v1=[2,1] · 0.3s
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {currentScene === 2 && (
            <motion.div key="scholar-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Study AI Workspace: Characteristic Polynomial Proof &amp; Spectral Analysis
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((model) => (
                    <button
                      key={model}
                      type="button"
                      onClick={() => setActiveModelTab(model)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === model ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {model === 'claude' ? 'Claude 3.7 Sonnet' : model === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 text-xs text-slate-300">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Characteristic Polynomial:</strong> det(A - λI) = (4-λ)(3-λ) - 2 = λ² - 7λ + 10 = (λ-5)(λ-2) = 0. Eigenvalues: λ1 = 5, λ2 = 2. Eigenspace E5: (A - 5I)v = 0 → -x + 2y = 0 → v1 = [2, 1]^T.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Diagonalization Check:</strong> Tr(A) = 4 + 3 = 7 = λ1 + λ2. det(A) = 12 - 2 = 10 = λ1·λ2. Since algebraic multiplicities equal geometric multiplicities (1 = 1), A is diagonalizable: P^-1 A P = diag(5, 2) where P = [[2, -1], [1, 1]].
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Spectral Non-Orthogonality: &lt;v1, v2&gt; = (2)(-1) + (1)(1) = -1 ≠ 0. Matrix exponential e^(At) = P e^(Dt) P^-1 governs continuous linear dynamical systems.
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </MotionDemoFrame>
    </div>
  );
}

/* ============================================================================
   6. CANVASWIZARD VS EXAMGHOST DEMO:
   Sociology (SOC 205) · Social Stratification & Cultural Reproduction
   Scene 0: Neon #wiz_button injected in DOM, fake "Only 6 left" sales popup, $7.99/mo trap
   Scene 1: ExamGhost 0 DOM mutations, closed Shadow DOM, 0.3s solve, Focus Shield
   Scene 2: Multi-Model Sociology Analysis (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function CanvasWizardSociologyDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. CanvasWizard DOM Flag',
      title: 'CanvasWizard: Injected #wiz_button DOM Mutation & 48h Billing Trap',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: Zero DOM Injections · 0.3s Ghost Mode Solve',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Bourdieu Cultural Reproduction & Mobility Proof',
      durationMs: 7500,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene]?.durationMs ?? 6500;
    const stepIncrement = ((intervalMs * playbackSpeed) / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return Math.min(100, Math.max(0, prev + stepIncrement));
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const safeProgress = Math.min(100, Math.max(0, sceneProgress));

  const telemetry: TelemetryState =
    currentScene === 0
      ? {
          speedGrader: 'DOM Mutation Flagged: #wiz_button injected in .question_holder',
          focusShield: false,
          blurEvents: 1,
          status: 'flagged',
        }
      : currentScene === 1
      ? {
          speedGrader: '0 DOM mutations · 0 blur events · Focus Shield Active',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="SOC 205 Social Stratification · Canvas Quiz Viewport"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/59102/quizzes/71089"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={safeProgress}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying((p) => !p)}
            onSeekScene={handleSeekScene}
            playbackSpeed={playbackSpeed}
            onSpeedChange={(sp) => setPlaybackSpeed(sp)}
            onRestart={() => handleSeekScene(0)}
          />
        }
      >
        <div className="relative p-5 sm:p-7 min-h-[390px] flex flex-col justify-between">
          <MotionCursor
            cursor={
              currentScene === 0
                ? { x: 74, y: 32, clicking: safeProgress > 30, label: 'Click #wiz_button', tag: 'fail' }
                : currentScene === 1
                ? { x: 38, y: 34, clicking: safeProgress < 35, label: 'Double-Click (0.3s)', tag: 'solve' }
                : { x: 50, y: 18, clicking: true, label: 'Model Select', tag: 'default' }
            }
          />

          {currentScene === 0 && (
            <motion.div key="wiz-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  CanvasWizard: Injected Neon #wiz_button · Fake &quot;Only 6 Left&quot; Billing Trap
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  SpeedGrader: DOM Mutation Alert
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  In post-industrial societies, standardized testing is often framed as meritocratic. According to
                  Pierre Bourdieu&apos;s theory of cultural reproduction, which mechanism most directly explains why
                  upper-middle-class students consistently outperform lower-income peers despite identical school curriculums?
                </p>

                {safeProgress > 30 && (
                  <div className="mt-3 p-3.5 rounded-xl bg-slate-950 border border-rose-500/60 font-mono text-xs text-rose-300 space-y-1">
                    <div className="text-rose-400 font-bold">MutationObserver Alert: Injected &lt;button id=&quot;wiz_button&quot;&gt; appended.</div>
                    <div>Popup: &quot;Exclusive Deal: 48-Hour Access for FREE! (Only 6 left) · Enter Card to Continue&quot;</div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {currentScene === 1 && (
            <motion.div key="wiz-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ExamGhost Zero-DOM Injections · 0.3s Ghost Mode Solve
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold">
                  0.3s Solve · 0 Blur
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  In post-industrial societies, standardized testing is often framed as meritocratic...
                </p>

                <div className="mt-3 p-2.5 rounded-xl border bg-emerald-500/20 border-emerald-400 text-white font-bold text-xs flex items-center justify-between">
                  <span>
                    <strong>B)</strong> Embodied cultural capital (habitus, academic linguistic fluency) rewarded by schools as innate intellectual merit
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                    ✓ 0.3s · 0 DOM Mutations
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {currentScene === 2 && (
            <motion.div key="wiz-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Study AI Workspace: Bourdieu Cultural Reproduction &amp; Mobility Proof
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((model) => (
                    <button
                      key={model}
                      type="button"
                      onClick={() => setActiveModelTab(model)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === model ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {model === 'claude' ? 'Claude 3.7 Sonnet' : model === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 text-xs text-slate-300">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Bourdieu&apos;s Habitus Theory:</strong> Cultural capital exists in three forms: embodied (habitus), objectified (cultural goods), and institutionalized (credentials). Schools treat bourgeois habitus as natural intellectual superiority, legitimating intergenerational inequality under meritocratic disguise.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Functionalism vs Conflict:</strong> Contrasts the Davis-Moore thesis (stratification is functionally necessary for talent allocation) with Weberian status groups and Marxian class reproduction.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Blau-Duncan OED Mobility Model: Direct origin penalty β_DO·E &gt; 0 persists in post-industrial OECD economies through informal networking and social closure.
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </MotionDemoFrame>
    </div>
  );
}

/* ============================================================================
   7. QUIZLOADER VS EXAMGHOST DEMO:
   Computer Architecture (CS 350) · Cache Coherence & MESI Snooping Protocol
   Scene 0: Attempt #1 lockout, synthetic bulk auto-fill 25 Qs in 0.2s with isTrusted: false
   Scene 1: ExamGhost Attempt #1 solve, authentic hardware events (isTrusted: true), 0.3s
   Scene 2: Multi-Model Architecture Proofs (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function QuizLoaderComputerArchitectureDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Quiz Loader Bot Flag',
      title: 'Canvas Quiz Loader: Attempt #1 Lockout & Synthetic Script Bot Flag',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: Attempt #1 AI Solve & Authentic Human Hardware Events',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: MESI State Machine Derivation & AMAT Analysis',
      durationMs: 7500,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene]?.durationMs ?? 6500;
    const stepIncrement = ((intervalMs * playbackSpeed) / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return Math.min(100, Math.max(0, prev + stepIncrement));
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const safeProgress = Math.min(100, Math.max(0, sceneProgress));

  const telemetry: TelemetryState =
    currentScene === 0
      ? safeProgress > 45
        ? {
            speedGrader: 'FLAGGED: 25 answers auto-filled at 00:01 · isTrusted: false',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: 'Exam Attempt 1 of 1 · Canvas Quiz in Progress',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 blur events · 100% human pacing · event.isTrusted: true',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="CS 350 Computer Architecture · Canvas Final Exam"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/61408/quizzes/88019"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={safeProgress}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying((p) => !p)}
            onSeekScene={handleSeekScene}
            playbackSpeed={playbackSpeed}
            onSpeedChange={(sp) => setPlaybackSpeed(sp)}
            onRestart={() => handleSeekScene(0)}
          />
        }
      >
        <div className="relative p-5 sm:p-7 min-h-[390px] flex flex-col justify-between">
          <MotionCursor
            cursor={
              currentScene === 0
                ? { x: 50, y: 48, clicking: safeProgress > 40, label: 'No Prior Submission on Attempt #1!', tag: 'fail' }
                : currentScene === 1
                ? { x: 38, y: 36, clicking: safeProgress < 35, label: 'Double-Click (0.3s)', tag: 'solve' }
                : { x: 50, y: 18, clicking: true, label: 'Model Select', tag: 'default' }
            }
          />

          {currentScene === 0 && (
            <motion.div key="ql-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  Canvas Quiz Loader: Blind on Attempt #1 · Triggers Script Bot Flag on Retakes
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  SpeedGrader: isTrusted: false
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  A 4-core symmetric multiprocessor uses a snooping MESI cache coherence protocol with a write-back,
                  write-allocate policy over a broadcast bus. Core 0 holds memory block 0x7A40 in the Shared (S) state.
                  Core 1 now executes a store instruction: STORE [0x7A40], R2. Which bus transaction does Core 1 broadcast,
                  and what are the resulting cache line states in Core 0 and Core 1?
                </p>

                {safeProgress > 30 && (
                  <div className="mt-3 p-3.5 rounded-xl bg-slate-950 border border-rose-500/60 font-mono text-xs text-rose-300 space-y-1">
                    <div className="text-rose-400 font-bold">Error: Scanning /submissions/ ... No previous attempt found!</div>
                    <div className="text-slate-400 text-[11px]">
                      Extension fails completely on single-attempt exams.
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {currentScene === 1 && (
            <motion.div key="ql-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ExamGhost: Attempt #1 AI Solve &amp; Authentic Human Hardware Events
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold">
                  isTrusted: true · 0.3s
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  A 4-core symmetric multiprocessor uses a snooping MESI cache coherence protocol...
                </p>

                <div className="mt-3 p-2.5 rounded-xl border bg-emerald-500/20 border-emerald-400 text-white font-bold text-xs flex items-center justify-between">
                  <span>
                    <strong>A)</strong> Core 1 broadcasts BusUpgr (or BusRdX); Core 0 transitions to Invalid (I); Core 1 transitions to Modified (M)
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                    ✓ BusUpgr · S→I · 0.3s
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {currentScene === 2 && (
            <motion.div key="ql-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Study AI Workspace: MESI State Machine Derivation &amp; AMAT Analysis
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((model) => (
                    <button
                      key={model}
                      type="button"
                      onClick={() => setActiveModelTab(model)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === model ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {model === 'claude' ? 'Claude 3.7 Sonnet' : model === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 text-xs text-slate-300">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>MESI State Transitions:</strong> To write, a core must gain exclusive ownership. If Core 1 lacks the line, it broadcasts BusRdX (fetching 64B data and invalidating others). If Core 1 already had S, it issues BusUpgr (invalidating without transferring data). Core 0 snoops and invalidates (S → I). Core 1 completes write (→ M).
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>BusUpgr Throughput Advantage:</strong> Broadcasting BusUpgr saves transferring 64 bytes over the shared bus, saving 512 bits of bandwidth per write hit on shared lines.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Quantitative AMAT Proof: AMAT = t_hit + Miss Rate × (t_local + P_coherence × t_snoop_stall). Write-invalidate mathematically outperforms write-update under high write contention by bounding broadcast queue depth.
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </MotionDemoFrame>
    </div>
  );
}

/* ============================================================================
   8. USEQUIETLY VS EXAMGHOST DEMO:
   Organic Chemistry I (CHEM 231) · IUPAC Nomenclature & Chair Conformations
   Scene 0: .ai-dot DOM marker left in page even with Shift+Z, "Ask Quietly" sidebar steals focus
   Scene 1: ExamGhost true closed Shadow DOM, 0 DOM contamination, 0.3s solve, Focus Shield
   Scene 2: Multi-Model Organic Chemistry Derivations (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function UseQuietlyOrganicChemistryDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Quietly AI DOM Signature',
      title: 'Quietly AI: Injected .ai-dot DOM Signature & Sidebar Blur Leak',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: True Closed Shadow DOM · 0.3s Instant Solve',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Chair Conformation & A-Value Thermodynamic Proof',
      durationMs: 7500,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene]?.durationMs ?? 6500;
    const stepIncrement = ((intervalMs * playbackSpeed) / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return Math.min(100, Math.max(0, prev + stepIncrement));
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const safeProgress = Math.min(100, Math.max(0, sceneProgress));

  const telemetry: TelemetryState =
    currentScene === 0
      ? safeProgress > 45
        ? {
            speedGrader: '1 window.blur flag · Sidebar focus steal · DOM .ai-dot detected',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: 'Exam in progress · 8 free questions remaining',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 DOM mutations · 0 blur events · Focus Shield Active',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="CHEM 231 Organic Chemistry · Canvas Quiz Viewport"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/49012/quizzes/73110"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={safeProgress}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying((p) => !p)}
            onSeekScene={handleSeekScene}
            playbackSpeed={playbackSpeed}
            onSpeedChange={(sp) => setPlaybackSpeed(sp)}
            onRestart={() => handleSeekScene(0)}
          />
        }
      >
        <div className="relative p-5 sm:p-7 min-h-[390px] flex flex-col justify-between">
          <MotionCursor
            cursor={
              currentScene === 0
                ? { x: 88, y: 22, clicking: safeProgress > 45, label: 'Click Sidebar → window.blur fired!', tag: 'fail' }
                : currentScene === 1
                ? { x: 38, y: 36, clicking: safeProgress < 35, label: 'Double-Click (0.3s)', tag: 'solve' }
                : { x: 50, y: 18, clicking: true, label: 'Model Select', tag: 'default' }
            }
          />

          {currentScene === 0 && (
            <motion.div key="quietly-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  Quietly AI: Injected .ai-dot in DOM · Shift+Z Hides Visually but Leaves DOM Nodes
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  8-Question Lifetime Cap · $14.99/mo Pro
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  Consider cis-1-tert-butyl-4-methylcyclohexane. In its thermodynamically most stable chair conformation,
                  what are the equatorial/axial orientations of the substituents, and why is this conformation favored?
                </p>

                {safeProgress > 30 && (
                  <div className="mt-3 p-3.5 rounded-xl bg-slate-950 border border-rose-500/60 font-mono text-xs text-rose-300 space-y-1">
                    <div className="text-rose-400 font-bold">Host DOM Contaminated: &lt;span class=&quot;ai-dot&quot; style=&quot;opacity: 0&quot;&gt; present in body.</div>
                    <div className="text-slate-400 text-[11px]">SpeedGrader logs window.blur when student clicks docked &quot;Ask Quietly&quot; sidebar.</div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {currentScene === 1 && (
            <motion.div key="quietly-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ExamGhost True Closed Shadow DOM · 0.3s Instant Solve
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold">
                  0 DOM Nodes · 0.3s Solve
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  Consider cis-1-tert-butyl-4-methylcyclohexane. In its thermodynamically most stable chair conformation...
                </p>

                <div className="mt-3 p-2.5 rounded-xl border bg-emerald-500/20 border-emerald-400 text-white font-bold text-xs flex items-center justify-between">
                  <span>
                    <strong>A)</strong> tert-Butyl is equatorial; methyl is axial; large A-value of tert-butyl (~20.5 kJ/mol) avoids severe 1,3-diaxial interactions
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                    ✓ t-Bu eq / Me ax · 0.3s
                  </span>
                </div>
              </div>
            </motion.div>
          )}

          {currentScene === 2 && (
            <motion.div key="quietly-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Study AI Workspace: Chair Conformation &amp; A-Value Thermodynamic Proof
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((model) => (
                    <button
                      key={model}
                      type="button"
                      onClick={() => setActiveModelTab(model)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === model ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {model === 'claude' ? 'Claude 3.7 Sonnet' : model === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 text-xs text-slate-300">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Stereochemical Principles:</strong> In cis-1,4-disubstituted cyclohexanes, one group must be directed up and one down, forcing one equatorial and one axial in both chairs. The bulky tert-butyl group has an enormous A-value (~20.5 kJ/mol) compared to methyl (7.3 kJ/mol), locking tert-butyl equatorial with ΔG° = 13.2 kJ/mol.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>A-Value Energy Matrix:</strong> A(Me) = 7.3 kJ/mol, A(Et) = 7.5 kJ/mol, A(i-Pr) = 9.2 kJ/mol, A(t-Bu) = 20.5 kJ/mol. Equilibrium constant K = e^(-ΔG°/RT) &gt; 200:1 at 298 K (&gt;99.5% equatorial tert-butyl).
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Steric Strain Energy: Axial tert-butyl creates 1,3-diaxial steric clash with syn-axial hydrogens (r &lt; 1.85 Å, 6 gauche-butane interactions ~22.8 kJ/mol), making the equatorial conformer the absolute ground state.
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </MotionDemoFrame>
    </div>
  );
}

/* ============================================================================
   9. EASYSEB VS EXAMGHOST DEMO:
   McGraw-Hill SmartBook 2.0 & Connect · Managerial Accounting & Activity-Based Costing
   Scene 0: EasySB bot timing signatures trip McGraw-Hill SmartBook adaptive detector, session freeze
   Scene 1: ExamGhost 0.3s inline multi-select, closed Shadow DOM, 0 blur events, High confidence
   Scene 2: Multi-Model Managerial Accounting Derivations (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function EasySBAdaptiveReadingDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. EasySB Bot Stall',
      title: 'EasySB: Bot Timing Signatures & Adaptive Reading Freeze',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Inline Multi-Select & Focus Shield Active',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Managerial Accounting ABC Synthesis & Cost Proof',
      durationMs: 7500,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene]?.durationMs ?? 6500;
    const stepIncrement = ((intervalMs * playbackSpeed) / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return Math.min(100, Math.max(0, prev + stepIncrement));
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const safeProgress = Math.min(100, Math.max(0, sceneProgress));

  const telemetry: TelemetryState =
    currentScene === 0
      ? {
          speedGrader: 'SB2 STALL · 14 Blur Events · Session Frozen',
          focusShield: false,
          blurEvents: 14,
          status: 'flagged',
        }
      : currentScene === 1
      ? {
          speedGrader: '0 Blur Events · Focus Shield Active · Shadow DOM v1',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        }
      : {
          speedGrader: 'Study Hub RAG · Multi-Model Accounting Engine',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="McGraw-Hill SmartBook 2.0 — ACC 202: Managerial Accounting"
        domainBadge="MCGRAW-HILL CONNECT"
        browserUrl="https://learning.mheducation.com/smartbook/reading/acc202-ch07"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={safeProgress}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying((p) => !p)}
            onSeekScene={handleSeekScene}
            playbackSpeed={playbackSpeed}
            onSpeedChange={(sp) => setPlaybackSpeed(sp)}
            onRestart={() => handleSeekScene(0)}
          />
        }
      >
        <div className="relative p-5 sm:p-7 min-h-[390px] flex flex-col justify-between">
          <MotionCursor
            cursor={
              currentScene === 0
                ? { x: 74, y: 46, clicking: safeProgress > 45, label: '⚠️ SB2_BOT_TIMING_SIGNATURE_DETECTED', tag: 'fail' }
                : currentScene === 1
                ? { x: 76, y: 85, clicking: safeProgress > 60, label: 'Click High Confidence', tag: 'solve' }
                : { x: 44, y: 16, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' }
            }
          />

          {currentScene === 0 && (
            <motion.div key="esb-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  EasySB: Fails on Connect Midterms · Bot Timing Flags SmartBook 2.0
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  Adaptive Freeze: 15 Minutes Locked
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  Which of the following statements accurately distinguish Activity-Based Costing (ABC) from
                  traditional volume-based absorption costing under GAAP? (Select all that apply.)
                </p>

                {safeProgress > 30 && (
                  <div className="mt-3 p-3.5 rounded-xl bg-slate-950 border border-rose-500/60 font-mono text-xs text-rose-300 space-y-1">
                    <div className="text-rose-400 font-bold">⚠️ McGraw-Hill Adaptive Engine Stalled: SB2_BOT_TIMING_SIGNATURE_DETECTED</div>
                    <div>4 questions answered in 0.38s (Minimum reading threshold: 4.2s/concept). Session frozen for 15 minutes.</div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {currentScene === 1 && (
            <motion.div key="esb-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ExamGhost 0.3s Inline Multi-Select &amp; Focus Shield Active
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold">
                  Shadow DOM v1 · 0 Blur
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed mb-3">
                  Distinguish Activity-Based Costing (ABC) from traditional volume-based absorption costing under GAAP:
                </p>

                <div className="space-y-2 text-xs">
                  <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-400 text-white font-bold flex items-center justify-between">
                    <span>[A] ABC assigns nonmanufacturing costs when direct cause-and-effect link exists</span>
                    <span className="text-emerald-400 font-mono text-[10px]">✓ Selected</span>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-400 text-white font-bold flex items-center justify-between">
                    <span>[B] ABC excludes organization-sustaining and idle facility costs</span>
                    <span className="text-emerald-400 font-mono text-[10px]">✓ Selected</span>
                  </div>
                  <div className="p-2 rounded-lg bg-rose-950/30 border border-rose-500/40 text-rose-300 flex items-center justify-between">
                    <span>[C] GAAP mandates ABC for balance sheet inventory valuation</span>
                    <span className="text-rose-400 font-mono text-[10px]">✗ GAAP Violation</span>
                  </div>
                  <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-400 text-white font-bold flex items-center justify-between">
                    <span>[D] ABC utilizes multiple cost pools structured by activity drivers</span>
                    <span className="text-emerald-400 font-mono text-[10px]">✓ Selected</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentScene === 2 && (
            <motion.div key="esb-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Study AI Workspace: Managerial Accounting ABC Synthesis &amp; Cost Proof
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((model) => (
                    <button
                      key={model}
                      type="button"
                      onClick={() => setActiveModelTab(model)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === model ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {model === 'claude' ? 'Claude 3.7 Sonnet' : model === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 text-xs text-slate-300">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>GAAP Matching Principle:</strong> FASB Statement No. 151 prohibits ABC for external reporting because ABC treats period sales/support as product costs while leaving idle plant capacity unallocated, violating GAAP matching rules.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Activity Pool Rates:</strong> Machine Setups Pool ($120k / 40 setups = $3,000/setup), Inspections Pool ($80k / 200 inspections = $400/inspection). Deluxe product absorbs $14,000 overhead under ABC vs $4,200 traditional.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Cross-Subsidization Theorem: Volume-based allocation over-costs high-volume simple products and under-costs low-volume complex products when transaction consumption ratios deviate from machine hour ratios.
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </MotionDemoFrame>
    </div>
  );
}

/* ============================================================================
   10. MYLABSOLVER VS EXAMGHOST DEMO:
   Pearson MyLab & Mastering · College Algebra (MATH 110) · Polynomial Zeros
   Scene 0: MathJax cross-origin CORS iframe error, text scraper outputs [NaN / Format Error]
   Scene 1: Alt+S Hybrid Vision Snip captures MathJax pixels, exact fraction 1/2 preserved (not 0.5)
   Scene 2: Multi-Model Polynomial Roots Derivations (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function MyLabSolverCollegeAlgebraDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. MyLab Solver Failure',
      title: 'MyLab Solver: MathJax Cross-Origin CORS Scrape Failure',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: Alt+S Hybrid Vision Snip & Exact Pearson Formatter',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Polynomial Zeros, Synthetic Division & Proof',
      durationMs: 7500,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene]?.durationMs ?? 6500;
    const stepIncrement = ((intervalMs * playbackSpeed) / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return Math.min(100, Math.max(0, prev + stepIncrement));
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const safeProgress = Math.min(100, Math.max(0, sceneProgress));

  const telemetry: TelemetryState =
    currentScene === 0
      ? {
          speedGrader: 'MathJax DOM Error · CORS Blocked · 6 Blur Events',
          focusShield: false,
          blurEvents: 6,
          status: 'flagged',
        }
      : currentScene === 1
      ? {
          speedGrader: '0 Blur Events · Focus Shield Active · Vision OCR',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        }
      : {
          speedGrader: 'Algebraic Proof · Multi-Model STEM Consensus',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="Pearson MyLab Math Player — MATH 110: College Algebra"
        domainBadge="PEARSON MYLAB"
        browserUrl="https://tdx.acs.pearson.com/player/math110-sec34-p08"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={safeProgress}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying((p) => !p)}
            onSeekScene={handleSeekScene}
            playbackSpeed={playbackSpeed}
            onSpeedChange={(sp) => setPlaybackSpeed(sp)}
            onRestart={() => handleSeekScene(0)}
          />
        }
      >
        <div className="relative p-5 sm:p-7 min-h-[390px] flex flex-col justify-between">
          <MotionCursor
            cursor={
              currentScene === 0
                ? { x: 50, y: 72, clicking: safeProgress > 45, label: 'PARSER FAIL: [NaN / Format Error]', tag: 'fail' }
                : currentScene === 1
                ? { x: 52, y: 74, clicking: safeProgress > 60, label: 'Exact Format (1/2, not 0.5)', tag: 'solve' }
                : { x: 44, y: 16, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' }
            }
          />

          {currentScene === 0 && (
            <motion.div key="mls-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  MyLab Solver: MathJax CHTML Glyphs Unreadable Across CORS Boundaries
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  Delisted &amp; Shut Down
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  Find all real and complex zeros of the polynomial function P(x) = 2x³ − 3x² − 11x + 6. Then factor P(x)
                  completely over the real numbers.
                </p>
                <div className="text-[11px] font-sans text-sky-400 mt-1">
                  (Type an exact answer, using radicals and fractions as needed. Use a comma to separate answers.)
                </div>

                {safeProgress > 30 && (
                  <div className="mt-3 p-3.5 rounded-xl bg-slate-950 border border-rose-500/60 font-mono text-xs text-rose-300 space-y-1">
                    <div className="text-rose-400 font-bold">SecurityError: Blocked a frame with origin from accessing a cross-origin frame.</div>
                    <div>MathJax Parser Error: &lt;mjx-container&gt; SVG glyphs unreadable. Formatter crashes.</div>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {currentScene === 1 && (
            <motion.div key="mls-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ExamGhost Alt+S Hybrid Vision Snip &amp; Exact Pearson Formatter
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold">
                  Exact Fraction 1/2 · 0.3s
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  P(x) = 2x³ − 3x² − 11x + 6
                </p>
                <div className="text-[11px] text-sky-400 mb-3">
                  (Type an exact answer, using radicals and fractions as needed.)
                </div>

                <div className="space-y-2 text-xs">
                  <div className="p-2.5 rounded-xl border bg-emerald-500/20 border-emerald-400 text-white font-bold flex items-center justify-between">
                    <span>Zeros: 3, -2, 1/2</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                      ✓ Exact Fraction 1/2 (not 0.5)
                    </span>
                  </div>
                  <div className="p-2.5 rounded-xl border bg-emerald-500/20 border-emerald-400 text-white font-bold flex items-center justify-between">
                    <span>Factored: (x - 3)(x + 2)(2x - 1)</span>
                    <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                      ✓ Pearson Validated
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {currentScene === 2 && (
            <motion.div key="mls-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  Study AI Workspace: Polynomial Zeros, Synthetic Division &amp; Proof
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((model) => (
                    <button
                      key={model}
                      type="button"
                      onClick={() => setActiveModelTab(model)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === model ? 'bg-indigo-600 text-white' : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {model === 'claude' ? 'Claude 3.7 Sonnet' : model === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 text-xs text-slate-300">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Rational Zero Theorem:</strong> Candidate roots p/q from factors of p=6 (±1, ±2, ±3, ±6) divided by q=2 (±1, ±2). Candidates: ±1, ±2, ±3, ±6, ±1/2, ±3/2. Synthetic division by x - 3 yields zero remainder, giving quotient 2x² + 3x - 2.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Factoring by Grouping:</strong> 2x² + 3x - 2 = 2x² + 4x - x - 2 = 2x(x + 2) - 1(x + 2) = (2x - 1)(x + 2). Setting factors to zero yields x = 1/2 and x = -2. Complete factorization: P(x) = (x - 3)(x + 2)(2x - 1).
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Descartes&apos; Rule of Signs Proof: P(x) = 2x³ - 3x² - 11x + 6 has 2 sign variations (2 or 0 positive roots). P(-x) = -2x³ - 3x² + 11x + 6 has 1 sign variation (exactly 1 negative root: x = -2).
                  </p>
                )}
              </div>
            </motion.div>
          )}
        </div>
      </MotionDemoFrame>
    </div>
  );
}

/* ============================================================================
   Milestone 3 Alias Exports (Ensuring both descriptive and short names resolve)
   ============================================================================ */
export const CanvasCrackDemo = CanvasCrackStoichiometryDemo;
export const CanvasNinjaDemo = CanvasNinjaDiscreteMathDemo;
export const CanvasPassDemo = CanvasPassCognitivePsychDemo;
export const CanvasQuizDemo = CanvasQuizMetabolicPathwaysDemo;
export const CanvasScholarDemo = CanvasScholarLinearAlgebraDemo;
export const CanvasWizardDemo = CanvasWizardSociologyDemo;
export const QuizLoaderDemo = QuizLoaderComputerArchitectureDemo;
export const UseQuietlyDemo = UseQuietlyOrganicChemistryDemo;
export const EasySBMotionDemo = EasySBAdaptiveReadingDemo;
export const MyLabSolverMotionDemo = MyLabSolverCollegeAlgebraDemo;
