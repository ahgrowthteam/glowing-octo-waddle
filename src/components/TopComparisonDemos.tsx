'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MotionDemoFrame,
  MotionCursor,
  MotionTimelineScrubber,
} from '@/components/motion-demo';
import { SpeedOption, MotionScene, TelemetryState, CursorState } from '@/components/motion-demo/types';
import {
  AlertCircle,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Calculator,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock,
  Code2,
  Copy,
  Cpu,
  Crop,
  DollarSign,
  ExternalLink,
  Eye,
  EyeOff,
  FileCode2,
  FileText,
  FileWarning,
  FlaskConical,
  HelpCircle,
  KeyRound,
  Layers,
  Lock,
  Moon,
  RefreshCw,
  Search,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  Split,
  Terminal,
  Zap,
} from 'lucide-react';

/* ============================================================================
   1. CANVASHACK VS EXAMGHOST DEMO:
   Organic Chemistry II (DIBAL-H hexanal), 42.4s Stopwatch Latency vs SpeedGrader,
   0.3s Double-Click inline solve, Study Hub (Claude 3.7 tetrahedral mechanism,
   ChatGPT o3-mini/4o selectivity matrix, DeepSeek-R1 activation energy proof)
   ============================================================================ */
export function CanvasHackStopwatchDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. CanvasHack Latency',
      title: 'CanvasHack: 42.4s Split-Screen & No-AI Paywall',
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
      title: 'Study AI Hub: DIBAL-H Mechanistic Proof & Multi-Model RAG',
      durationMs: 7500,
    },
  ];

  // Timer loop
  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene].durationMs;
    const stepIncrement = (intervalMs * playbackSpeed / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  // Telemetry status per scene
  const telemetry: TelemetryState =
    currentScene === 0
      ? sceneProgress > 50
        ? {
            speedGrader: '1 window.blur flag · 42.4s Dead Gap Logged',
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

  // Simulated elapsed stopwatch seconds
  const stopwatchSeconds = (sceneProgress * 0.424).toFixed(1);

  // Dynamic Cursor
  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (sceneProgress < 25) {
        return { x: 30, y: 35, clicking: false, label: 'Reading Question Text' };
      } else if (sceneProgress < 50) {
        return { x: 42, y: 38, clicking: true, label: 'Select & Copy Attempt' };
      } else if (sceneProgress < 80) {
        return { x: 88, y: 12, clicking: true, label: 'Tab Switch → Separate ChatGPT Window', tag: 'fail' };
      } else {
        return { x: 26, y: 72, clicking: true, label: 'Click Radio Button (42.4s elapsed)', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (sceneProgress < 35) {
        return { x: 40, y: 36, clicking: true, label: 'Double-Click (0.3s)', tag: 'solve' };
      } else if (sceneProgress < 70) {
        return { x: 58, y: 52, clicking: false, label: 'Alt+S: Hybrid Vision + DOM Snip', tag: 'snip' };
      } else {
        return { x: 68, y: 70, clicking: false, label: 'Alt+1 Invisible / Alt+3 Derivation', tag: 'invisible' };
      }
    } else {
      if (sceneProgress < 35) {
        return { x: 28, y: 18, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
      } else if (sceneProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 Math Proof', tag: 'explain' };
      }
    }
  };

  const cursorState = getCursor();

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="CHEM 204 Midterm II · Canvas Quiz Viewport"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/31802/quizzes/89412"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={sceneProgress}
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

          {/* SCENE 0: CANVASHACK FAILURE (42.4s STOPWATCH LATENCY) */}
          {currentScene === 0 && (
            <motion.div
              key="canvashack-scene-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  CanvasHack Split-Screen Latency ($149.99 One-Time · Zero AI Included)
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  {sceneProgress > 50 ? 'SpeedGrader: 1 window.blur flag · 42.4s Inactive Gap' : 'Copying prompt to external window'}
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 mb-2 border-b border-white/10">
                  <span>CHEM 204 · Question 8 of 30</span>
                  <span className="text-amber-400 font-bold">Points: 4.0</span>
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  Which reagent selectively reduces ethyl hexanoate{' '}
                  <code className="text-amber-300 font-mono">CH3(CH2)4COOCH2CH3</code> to hexanal{' '}
                  <code className="text-amber-300 font-mono">CH3(CH2)4CHO</code> at −78 °C without over-reduction to 1-hexanol?
                </p>

                {/* Split-screen Stopwatch Box */}
                {sceneProgress > 30 && (
                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="mt-3 p-3.5 rounded-xl bg-slate-950 border border-rose-500/60 flex flex-wrap items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div className="px-3 py-1.5 rounded-lg bg-rose-950/80 border border-rose-500 font-mono font-black text-rose-400 text-lg sm:text-xl tracking-wider">
                        ⏱ {stopwatchSeconds}s
                      </div>
                      <div className="text-xs space-y-0.5">
                        <p className="font-bold text-rose-300">Manual ChatGPT Copy-Paste Loop</p>
                        <p className="text-[11px] text-slate-400">
                          {sceneProgress < 50
                            ? '1. Select & copy Canvas text...'
                            : sceneProgress < 75
                            ? '2. Tab switch to $20/mo ChatGPT window (window.blur fired)'
                            : '3. Read 300-word generation & return to Canvas'}
                        </p>
                      </div>
                    </div>

                    <div className="text-[11px] font-mono text-rose-300/90 text-right">
                      <span>42.4s elapsed on 1 question</span>
                      <br />
                      <span className="text-slate-400">~35 Minutes Lost Across Exam</span>
                    </div>
                  </motion.div>
                )}

                {/* Multiple Choice Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {[
                    { label: 'A', text: 'LiAlH4 in anhydrous diethyl ether at 25 °C' },
                    { label: 'B', text: 'DIBAL-H (1.0 equiv, −78 °C, toluene) followed by cold aqueous workup', correct: true },
                    { label: 'C', text: 'NaBH4 in absolute ethanol at reflux' },
                    { label: 'D', H2: 'H2 with Lindlar catalyst in hexane', text: 'H2 with Lindlar catalyst in hexane' },
                  ].map((opt) => (
                    <div
                      key={opt.label}
                      className={`p-2.5 rounded-xl border flex items-center justify-between ${
                        opt.correct && sceneProgress > 80
                          ? 'bg-rose-950/40 border-rose-500/60 text-white font-medium'
                          : 'bg-white/[0.02] border-white/10 text-slate-400'
                      }`}
                    >
                      <span>{opt.label}) {opt.text}</span>
                      {opt.correct && sceneProgress > 80 && (
                        <span className="px-1.5 py-0.5 rounded bg-rose-500 text-slate-950 font-mono text-[10px] font-bold">
                          Selected @ 42.4s
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
              key="canvashack-scene-1"
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
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold">
                    Alt+2 Stealth
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                    Alt+3 Explain
                  </span>
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  Which reagent selectively reduces ethyl hexanoate{' '}
                  <code className="text-emerald-300 font-mono">CH3(CH2)4COOCH2CH3</code> to hexanal{' '}
                  <code className="text-emerald-300 font-mono">CH3(CH2)4CHO</code> at −78 °C without over-reduction to 1-hexanol?
                </p>

                {/* Snip Bounding Box overlay */}
                {sceneProgress > 35 && sceneProgress < 70 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-2.5 p-2 rounded-lg bg-sky-950/60 border border-sky-400/50 text-[11px] font-mono text-sky-300 flex items-center justify-between"
                  >
                    <span>[Alt+S Hybrid Vision + DOM Snip Active · 40ms OCR OCR Parse]</span>
                    <span className="text-white font-bold">0.3s Solve</span>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {[
                    { label: 'A', text: 'LiAlH4 in anhydrous diethyl ether at 25 °C' },
                    { label: 'B', text: 'DIBAL-H (1.0 equiv, −78 °C, toluene) followed by cold aqueous workup', correct: true },
                    { label: 'C', text: 'NaBH4 in absolute ethanol at reflux' },
                    { label: 'D', text: 'H2 with Lindlar catalyst in hexane' },
                  ].map((opt) => {
                    const isSolved = opt.correct && sceneProgress > 25;
                    return (
                      <div
                        key={opt.label}
                        className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                          isSolved
                            ? 'bg-emerald-500/20 border-emerald-400 text-white font-bold ring-2 ring-emerald-500/20'
                            : 'bg-white/[0.02] border-white/10 text-slate-400'
                        }`}
                      >
                        <span>{opt.label}) {opt.text}</span>
                        {isSolved && (
                          <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                            ✓ 99.8% Match · 0.3s
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Alt+3 Inline Derivation Drawer */}
                {sceneProgress > 65 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="mt-3 p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs text-slate-300 font-mono space-y-1"
                  >
                    <div className="text-[11px] text-emerald-400 font-bold flex items-center justify-between">
                      <span>[Alt+3 Inline LaTeX Mechanism · Closed Shadow DOM]:</span>
                      <span>⌘+Shift+U Panic Ready</span>
                    </div>
                    <p className="text-[11px]">
                      DIBAL-H forms bulky tetrahedral hemiacetal aluminate intermediate at −78 °C. Steric hindrance prevents second hydride addition until cold aqueous workup liberates hexanal.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* SCENE 2: 2-IN-1 STUDY HUB */}
          {currentScene === 2 && (
            <motion.div
              key="canvashack-scene-2"
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
                        ? 'ChatGPT o3-mini'
                        : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    CHEM 204 Chapter 19: Selective Carbonyl Reductions &amp; Steric Control
                  </span>
                  <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                    {activeModelTab === 'claude'
                      ? 'Best for Lab Mechanisms & Organic Synthesis'
                      : activeModelTab === 'chatgpt'
                      ? 'Best for Reagent Selectivity Matrices'
                      : 'Best for Thermodynamic & Kinetic Proofs'}
                  </span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  {activeModelTab === 'claude' && (
                    <p>
                      <strong>Mechanism:</strong> DIBAL-H acts as an electrophilic reducing agent. The vacant 3p orbital of aluminium coordinates with the carbonyl oxygen of ethyl hexanoate, forming a Lewis acid-base adduct. Hydride transfers from Al-H to the carbonyl carbon, producing a bulky tetrahedral hemiacetal aluminate intermediate <code className="text-indigo-300 font-mono">[R-CH(OAl(i-Bu)2)(OEt)]</code>. At −78 °C in toluene, steric hindrance from the two isobutyl groups prevents further reduction or premature intermediate collapse. Hexanal is released ONLY upon subsequent cold aqueous acid quenching, preventing over-reduction to 1-hexanol.
                    </p>
                  )}
                  {activeModelTab === 'chatgpt' && (
                    <p>
                      <strong className="text-emerald-300">Reagent Selectivity Breakdown: </strong>
                      LiAlH4 is an unhindered, nucleophilic reducing agent; its tetrahedral intermediate collapses spontaneously at room temp to an aldehyde, which reduces faster than the starting ester, yielding 1-hexanol. NaBH4 lacks electrophilic coordination power and does not reduce esters under neutral conditions. H2/Lindlar catalyst reduces alkynes to cis-alkenes and has zero reactivity on aliphatic esters.
                    </p>
                  )}
                  {activeModelTab === 'deepseek' && (
                    <p className="font-mono text-[11px] text-slate-200">
                      Kinetic Control Proof: k_collapse(-78°C) &lt;&lt; k_quench. Activation barrier ΔG‡ for aluminate expulsion &gt; 68 kJ/mol at 195 K. Formal oxidation state of aluminium remains +3 throughout coordination. Standard reduction potential ΔE° favors stable adduct formation prior to protonolysis.
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Included in ExamGhost ($19/mo or $8.25/mo on $99/yr pass)</span>
                  <span className="text-emerald-400 font-bold">Never Pay $240/yr for Separate ChatGPT Plus</span>
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
   2. APEXVISION VS EXAMGHOST DEMO:
   CS 301 Data Structures (Dijkstra Fibonacci heap), 500-request quota exhaustion modal,
   DOM mutation flag, 0.3s Shadow DOM solve, Study Hub amortized complexity proof
   ============================================================================ */
export function ApexVisionTelemetryDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('chatgpt');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Apex Vision Trap',
      title: 'Apex Vision: SpeedGrader Mutation & 500-Request Cap',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Inline Solve & 0 Blur Flags',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Dijkstra Asymptotic Analysis',
      durationMs: 7500,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene].durationMs;
    const stepIncrement = (intervalMs * playbackSpeed / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const telemetry: TelemetryState =
    currentScene === 0
      ? sceneProgress > 40
        ? {
            speedGrader: '2 window.blur flags · Host DOM Mutation Flagged',
            focusShield: false,
            blurEvents: 2,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · Quiz In Progress',
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
          speedGrader: 'Study AI Workspace · Computer Science & Algorithms',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (sceneProgress < 30) {
        return { x: 35, y: 35, clicking: false, label: 'Reading Dijkstra Prompt' };
      } else if (sceneProgress < 65) {
        return { x: 92, y: 45, clicking: true, label: 'Clicking Floating Sidebar Widget', tag: 'fail' };
      } else {
        return { x: 50, y: 65, clicking: false, label: 'Quota Limit Exhausted (500/500)', tag: 'flag' };
      }
    } else if (currentScene === 1) {
      if (sceneProgress < 30) {
        return { x: 38, y: 32, clicking: true, label: 'Double-Click (0.3s)', tag: 'solve' };
      } else if (sceneProgress < 65) {
        return { x: 52, y: 58, clicking: false, label: 'Alt+1: 15% Opacity Shift (Zero HUD)', tag: 'invisible' };
      } else {
        return { x: 70, y: 75, clicking: false, label: 'Alt+3: Inline Amortized Proof', tag: 'explain' };
      }
    } else {
      if (sceneProgress < 35) {
        return { x: 28, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o', tag: 'default' };
      } else if (sceneProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 Math Proof', tag: 'explain' };
      }
    }
  };

  const cursorState = getCursor();

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="CS 301 Algorithms Midterm · Canvas Quiz Viewport"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/54210/quizzes/77102"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={sceneProgress}
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

          {/* SCENE 0: APEX VISION TRAP */}
          {currentScene === 0 && (
            <motion.div
              key="apex-scene-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                  Apex Vision AI ($29.99/mo · 500 Requests Cap · DOM Injected)
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  {sceneProgress > 40 ? 'SpeedGrader Alert: Stopped viewing quiz (focus lost)' : 'Docked Sidebar Detected'}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                <div className="lg:col-span-8 rounded-2xl bg-white/[0.04] border border-white/10 p-4 relative">
                  <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                    <span className="font-bold text-white">Q18 (Graph Algorithms): </span>
                    Given a connected directed graph <code className="text-amber-300 font-mono">G = (V, E)</code> with non-negative edge weights, what is the tight asymptotic upper bound of Dijkstra&apos;s algorithm implemented with a Fibonacci heap versus a standard binary min-heap?
                  </p>

                  <div className="grid grid-cols-1 gap-2 mt-3 text-xs">
                    {[
                      { label: 'A', text: 'O(|V| log |V| + |E|) with Fibonacci heap vs O((|V| + |E|) log |V|) with Binary heap' },
                      { label: 'B', text: 'O(|E| log |V|) with Fibonacci heap vs O(|V|² ) with Binary heap' },
                    ].map((opt) => (
                      <div key={opt.label} className="p-2.5 rounded-xl border bg-white/[0.02] border-white/10 text-slate-400">
                        {opt.label}) {opt.text}
                      </div>
                    ))}
                  </div>

                  {sceneProgress > 40 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-3 p-2.5 rounded-xl bg-rose-950/80 border border-rose-500 text-xs text-rose-200 font-mono"
                    >
                      <strong className="text-rose-400">Canvas DOM Mutation Observer: </strong>
                      Injected element <code className="bg-rose-900/60 px-1 py-0.5 rounded">&lt;div class=&quot;apex-vision-container&quot;&gt;</code> detected outside shadow boundary!
                    </motion.div>
                  )}
                </div>

                {/* Floating Sidebar & Quota Exhaustion Modal */}
                <div className="lg:col-span-4 rounded-2xl bg-slate-900 border border-rose-500/50 p-4 space-y-2.5 shadow-xl relative">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-200">
                    <span>Apex Vision Widget</span>
                    <span className="text-[10px] text-rose-400 font-mono">Quota Burned</span>
                  </div>

                  <div className="p-2 rounded bg-black/60 border border-white/10 text-[11px] font-mono text-slate-300">
                    <div>Monthly Limit: 500 / 500</div>
                    <div className="w-full bg-slate-800 h-1.5 rounded-full mt-1.5 overflow-hidden">
                      <div className="bg-rose-500 h-full w-full" />
                    </div>
                  </div>

                  {sceneProgress > 50 && (
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="p-3 rounded-xl bg-rose-950 border border-rose-500 text-xs space-y-1.5"
                    >
                      <div className="font-bold text-rose-300 flex items-center gap-1.5">
                        <AlertTriangle className="w-4 h-4 text-rose-400 shrink-0" />
                        QUOTA REACHED (500/500)
                      </div>
                      <p className="text-[11px] text-rose-200/90 leading-tight">
                        Monthly solves exhausted. Locked until next billing cycle unless upgraded to $29.99/mo tier.
                      </p>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3s SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="apex-scene-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ExamGhost Zero-DOM Mutation · Closed Shadow DOM (0.3s Solve)
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                  0 Blur Flags · document.hasFocus() === true
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  <span className="font-bold text-white">Q18 (Graph Algorithms): </span>
                  Given a connected directed graph <code className="text-emerald-300 font-mono">G = (V, E)</code> with non-negative edge weights, what is the tight asymptotic upper bound of Dijkstra&apos;s algorithm implemented with a Fibonacci heap versus a standard binary min-heap?
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {[
                    { label: 'A', text: 'O(|V| log |V| + |E|) with Fibonacci heap vs O((|V| + |E|) log |V|) with Binary heap', correct: true },
                    { label: 'B', text: 'O(|E| log |V|) with Fibonacci heap vs O(|V|² ) with Binary heap' },
                    { label: 'C', text: 'O(|V|² ) with Fibonacci heap vs O(|E| log |E|) with Binary heap' },
                    { label: 'D', text: 'O(|V| log |E|) with Fibonacci heap vs O(|E| log |V|) with Binary heap' },
                  ].map((opt) => {
                    const isSolved = opt.correct && sceneProgress > 25;
                    return (
                      <div
                        key={opt.label}
                        className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                          isSolved
                            ? 'bg-emerald-500/20 border-emerald-400 text-white font-bold ring-2 ring-emerald-500/20'
                            : 'bg-white/[0.02] border-white/10 text-slate-400'
                        }`}
                      >
                        <span>{opt.label}) {opt.text}</span>
                        {isSolved && (
                          <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                            ✓ 100% Match · 0.3s
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {sceneProgress > 60 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs text-slate-300 font-mono flex items-center justify-between"
                  >
                    <div>
                      <span className="text-emerald-400 font-bold">SpeedGrader Telemetry Log: </span>
                      Answered in 0.3s · 0 DOM mutations · 0 blur events · ⌘+Shift+U Unmount Ready
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* SCENE 2: 2-IN-1 STUDY HUB */}
          {currentScene === 2 && (
            <motion.div
              key="apex-scene-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  ExamGhost Study AI Workspace (CS &amp; Algorithms Lab)
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === m
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {m === 'claude'
                        ? 'Claude 3.7 Sonnet'
                        : m === 'chatgpt'
                        ? 'ChatGPT o3-mini'
                        : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    CLRS Chapter 24: Single-Source Shortest Paths &amp; Fibonacci Heaps
                  </span>
                  <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                    {activeModelTab === 'chatgpt'
                      ? 'Best for Fast CS Complexity Proofs'
                      : activeModelTab === 'claude'
                      ? 'Best for Potential Function Invariants'
                      : 'Best for Formal LaTeX Proofs'}
                  </span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  {activeModelTab === 'chatgpt' && (
                    <p>
                      <strong>Amortized Operation Analysis:</strong> Extract-Min is called |V| times; in a binary min-heap it costs O(|V| log |V|), and in a Fibonacci heap it costs O(|V| log |V|) amortized. Decrease-Key is called |E| times (once per edge); in a binary min-heap it costs O(|E| log |V|), whereas in a Fibonacci heap it takes O(1) amortized time. Total time: <code className="text-emerald-300 font-mono">O(|V| log |V| + |E|)</code> vs <code className="text-indigo-300 font-mono">O((|V| + |E|) log |V|)</code>. For dense graphs (|E| ≈ |V|²), Fibonacci heap reduces complexity from O(|V|² log |V|) to O(|V|²).
                    </p>
                  )}
                  {activeModelTab === 'claude' && (
                    <p>
                      <strong>Potential Function Analysis:</strong> The amortized time of Decrease-Key is O(1) because cutting a node from its parent requires cascading cuts that decrease the potential Φ = trees(H) + 2·marked(H). Thus |E| decrease-key operations cost O(|E|) total time, dominating binary heap&apos;s O(|E| log |V|) re-heapify overhead.
                    </p>
                  )}
                  {activeModelTab === 'deepseek' && (
                    <p className="font-mono text-[11px] text-slate-200">
                      Greedy Invariant Proof: Dijkstra assumes d(u) + w(u, v) &gt;= d(u). When negative edges exist, settled vertices can be reopened, invalidating the greedy invariant and requiring Bellman-Ford (O(|V|·|E|)) or Johnson&apos;s algorithm.
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>5 Free Solves/Day ($0) · Unlimited Extension + Study Hub on Paid ($19/mo or $8.25/mo)</span>
                  <span className="text-emerald-400 font-bold">No 500-Request Monthly Cap</span>
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
   3. COLLEGETOOLS VS EXAMGHOST DEMO:
   BIO 340 Genetics & CRISPR (SpCas9 PAM motif 5'-NGG-3'), 24 exposed manifest files,
   Mindko rebrand history, 0.3s Double-Click solve, Study Hub PAM binding derivation
   ============================================================================ */
export function CollegeToolsManifestDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. College Tools Leak',
      title: 'College Tools: 24 Exposed Files & SidePanel Blur',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Inline Solve & Zero-Footprint Manifest',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: CRISPR-Cas9 Biochemistry Proof',
      durationMs: 7500,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene].durationMs;
    const stepIncrement = (intervalMs * playbackSpeed / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const telemetry: TelemetryState =
    currentScene === 0
      ? sceneProgress > 35
        ? {
            speedGrader: '1 window.blur flag · 24 Signature Files Exposed',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · DevTools probing...',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · 0 Manifest Files Exposed',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Molecular Genetics & CRISPR',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (sceneProgress < 30) {
        return { x: 35, y: 35, clicking: true, label: 'Alt+Shift+2: Opening SidePanel', tag: 'fail' };
      } else if (sceneProgress < 65) {
        return { x: 50, y: 65, clicking: false, label: '24 Files Exposed in web_accessible_resources', tag: 'flag' };
      } else {
        return { x: 70, y: 82, clicking: false, label: '<all_urls> + 29 Bank Exclusions', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (sceneProgress < 30) {
        return { x: 42, y: 32, clicking: true, label: 'Double-Click (0.3s)', tag: 'solve' };
      } else if (sceneProgress < 65) {
        return { x: 60, y: 55, clicking: false, label: 'Alt+S: Hybrid Vision + DOM Snip', tag: 'snip' };
      } else {
        return { x: 72, y: 70, clicking: false, label: 'Alt+1 Invisible / Alt+3 Derivation', tag: 'invisible' };
      }
    } else {
      if (sceneProgress < 35) {
        return { x: 28, y: 18, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
      } else if (sceneProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 DSB Proof', tag: 'explain' };
      }
    }
  };

  const cursorState = getCursor();

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="BIO 340 Genetics Midterm · Chrome DevTools Forensic Console"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/68102/quizzes/31405"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={sceneProgress}
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

          {/* SCENE 0: COLLEGE TOOLS MANIFEST LEAK */}
          {currentScene === 0 && (
            <motion.div
              key="collegetools-scene-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <FileWarning className="w-3.5 h-3.5 text-rose-500" />
                  College Tools (Mindko) Manifest Exposure · 24 Public Files
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  {sceneProgress > 35 ? 'SpeedGrader: window.blur triggered by SidePanel' : 'Probing web_accessible_resources'}
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  <span className="font-bold text-white">Q9 (CRISPR Engineering): </span>
                  In CRISPR-Cas9 genome editing, what is the mandatory sequence motif required immediately 3&apos; adjacent to the 20-nucleotide target protospacer on the non-target DNA strand for Streptococcus pyogenes Cas9 (SpCas9) cleavage?
                </p>

                {/* DevTools Probe Box */}
                {sceneProgress > 30 && (
                  <motion.div
                    initial={{ y: 15, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="mt-3 p-3.5 rounded-xl bg-slate-950 border border-rose-500/70 font-mono text-[11px] space-y-1"
                  >
                    <div className="text-rose-400 font-bold flex items-center justify-between">
                      <span>[PROCTOR_PROBE] Testing web_accessible_resources for CRX iiikmhonbbmbdjfokdmmncdohjionkmf:</span>
                      <span className="text-rose-300">200 OK (LEAKED)</span>
                    </div>
                    <p className="text-slate-400">
                      • fetch(&quot;chrome-extension://.../js/jquery-3.1.1.min.js&quot;) -&gt; 200 OK (86.7 KB)
                      <br />
                      • fetch(&quot;chrome-extension://.../js/lottie.min.js&quot;) -&gt; 200 OK (248.2 KB)
                      <br />
                      • fetch(&quot;chrome-extension://.../css/solve.css&quot;) -&gt; 200 OK (19.8 KB)
                      <br />
                      • 18 PNG icons exposed · window.jQuery.fn.jquery === &quot;3.1.1&quot; injected into host
                    </p>
                    <div className="text-[10px] text-rose-300/90 pt-1 border-t border-rose-950">
                      Permissions: &lt;all_urls&gt; · 29 hardcoded bank exclusions (chase.com, bankofamerica.com, irs.gov)
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {[
                    { label: 'A', text: "5'-TTTV-3' (PAM for Cas12a/Cpf1)" },
                    { label: 'B', text: "5'-NGG-3' (Protospacer Adjacent Motif for SpCas9)", correct: true },
                    { label: 'C', text: "5'-NNNNGATT-3' (PAM for N. meningitidis Cas9)" },
                    { label: 'D', text: "5'-YG-3' (Splice donor recognition dinucleotide)" },
                  ].map((opt) => (
                    <div key={opt.label} className="p-2.5 rounded-xl border bg-white/[0.02] border-white/10 text-slate-400">
                      {opt.label}) {opt.text}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3s SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="collegetools-scene-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ExamGhost Zero-Footprint Sandbox (web_accessible_resources: [])
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                  0 Prototype Pollution · 0 Manifest Files
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  <span className="font-bold text-white">Q9 (CRISPR Engineering): </span>
                  In CRISPR-Cas9 genome editing, what is the mandatory sequence motif required immediately 3&apos; adjacent to the 20-nucleotide target protospacer on the non-target DNA strand for Streptococcus pyogenes Cas9 (SpCas9) cleavage?
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {[
                    { label: 'A', text: "5'-TTTV-3' (PAM for Cas12a/Cpf1)" },
                    { label: 'B', text: "5'-NGG-3' (Protospacer Adjacent Motif for SpCas9)", correct: true },
                    { label: 'C', text: "5'-NNNNGATT-3' (PAM for N. meningitidis Cas9)" },
                    { label: 'D', text: "5'-YG-3' (Splice donor recognition dinucleotide)" },
                  ].map((opt) => {
                    const isSolved = opt.correct && sceneProgress > 25;
                    return (
                      <div
                        key={opt.label}
                        className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                          isSolved
                            ? 'bg-emerald-500/20 border-emerald-400 text-white font-bold ring-2 ring-emerald-500/20'
                            : 'bg-white/[0.02] border-white/10 text-slate-400'
                        }`}
                      >
                        <span>{opt.label}) {opt.text}</span>
                        {isSolved && (
                          <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                            ✓ 99.9% Match · 0.3s
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {sceneProgress > 60 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs text-slate-300 font-mono flex items-center justify-between"
                  >
                    <div>
                      <span className="text-emerald-400 font-bold">Closed Shadow DOM Isolation: </span>
                      window.jQuery === undefined · document.querySelector(&apos;.examghost-*&apos;) === null
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* SCENE 2: 2-IN-1 STUDY HUB */}
          {currentScene === 2 && (
            <motion.div
              key="collegetools-scene-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  ExamGhost Study AI Workspace (CRISPR &amp; Molecular Biology)
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === m
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {m === 'claude'
                        ? 'Claude 3.7 Sonnet'
                        : m === 'chatgpt'
                        ? 'ChatGPT o3-mini'
                        : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    BIO 340 Module 7: Cas9 Catalytic Cleavage &amp; PAM Recognition
                  </span>
                  <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                    {activeModelTab === 'claude'
                      ? 'Best for Biochemical Mechanism & PI Domain'
                      : activeModelTab === 'chatgpt'
                      ? 'Best for Comparative CRISPR Nucleases'
                      : 'Best for Double-Strand Break Proofs'}
                  </span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  {activeModelTab === 'claude' && (
                    <p>
                      <strong>Molecular Interaction:</strong> SpCas9 interrogates genomic DNA by scanning for the 5&apos;-NGG-3&apos; PAM via major-groove base-specific hydrogen bonding with arginine residues Arg1333 and Arg1335 in the Cas9 C-terminal PAM-interacting (PI) domain. PAM recognition induces local DNA unwinding at the adjacent seed region (bases 1–8), allowing the crRNA guide strand to form an R-loop with the target DNA strand. If the PAM is absent, Cas9 dissociates within milliseconds without triggering R-loop formation or activating the HNH and RuvC nuclease domains.
                    </p>
                  )}
                  {activeModelTab === 'chatgpt' && (
                    <p>
                      <strong className="text-emerald-300">Alternative PAM Motifs Across Cas Nucleases: </strong>
                      SpCas9: 5&apos;-NGG-3&apos; (3&apos; of protospacer). SpCas9-NG / SpG / SpRY: Relaxed to 5&apos;-NGN-3&apos; and near-PAMless. AsCas12a / LbCas12a (Cpf1): 5&apos;-TTTV-3&apos; (5&apos; of protospacer, creates 5-nt staggered overhang). SaCas9 (Staphylococcus aureus): 5&apos;-NNGRRT-3&apos; (compact size allows single-AAV in vivo delivery).
                    </p>
                  )}
                  {activeModelTab === 'deepseek' && (
                    <p className="font-mono text-[11px] text-slate-200">
                      Catalytic Cleavage Mechanism: The HNH endonuclease domain cleaves the target strand complementary to gRNA exactly 3 base pairs upstream of the PAM motif, while the RuvC domain cleaves the non-target strand, generating a blunt-ended double-strand break (DSB) repaired via error-prone NHEJ or precise HDR.
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Included with ExamGhost · 5 Free Solves/Day ($0)</span>
                  <span className="text-emerald-400 font-bold">Unlimited Solves + Study Workspace on Paid ($19/mo or $8.25/mo)</span>
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
   4. TRANSCRIPT VS EXAMGHOST DEMO:
   Macroeconomics (IS-LM interest rate shift), window.blur 38s SpeedGrader flag,
   0.3s Alt+1/2/3 stealth solve, Study Hub IS-LM Keynesian derivation
   ============================================================================ */
export function TranscriptStudyHubDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Transcript DOM Trap',
      title: 'Injected DOM Button & 38s SpeedGrader Tab-Blur Flag',
      durationMs: 6500,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'Zero-Button Double-Click & Alt+1/2/3 Stealth Modes',
      durationMs: 7000,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Claude 3.7 + ChatGPT + DeepSeek-R1 Macroeconomics Proof',
      durationMs: 7500,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene].durationMs;
    const stepIncrement = (intervalMs * playbackSpeed / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const telemetry: TelemetryState =
    currentScene === 0
      ? sceneProgress > 55
        ? {
            speedGrader: '1 window.blur flag · SpeedGrader Alert: Tab blur 38.2s',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · Transcript active',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Focus Shield active · SpeedGrader Clean',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Local RAG Isolation',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (sceneProgress < 25) {
        return { x: 22, y: 35, clicking: false, label: 'Selecting Question Text' };
      } else if (sceneProgress < 50) {
        return { x: 58, y: 46, clicking: false, label: 'Highlighting Prompt' };
      } else if (sceneProgress < 75) {
        return { x: 68, y: 52, clicking: true, label: 'Clicking Injected Button', tag: 'fail' };
      } else {
        return { x: 85, y: 28, clicking: false, label: 'Focus Lost to Chat Drawer (38s)', tag: 'flag' };
      }
    } else if (currentScene === 1) {
      if (sceneProgress < 30) {
        return { x: 38, y: 36, clicking: true, label: 'Double-Click Solve (0.3s)', tag: 'solve' };
      } else if (sceneProgress < 60) {
        return { x: 50, y: 58, clicking: false, label: 'Alt+1: Invisible Auto-Tick', tag: 'invisible' };
      } else {
        return { x: 65, y: 72, clicking: false, label: 'Alt+3: Inline Derivation', tag: 'explain' };
      }
    } else {
      if (sceneProgress < 35) {
        return { x: 28, y: 18, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
      } else if (sceneProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
      } else {
        return { x: 72, y: 18, clicking: true, label: 'DeepSeek-R1 Math Proof', tag: 'explain' };
      }
    }
  };

  const cursorState = getCursor();

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="ECON 302 · Intermediate Macroeconomics Exam #2"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/84102/quizzes/4901"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={sceneProgress}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying((p) => !p)}
            onSeekScene={handleSeekScene}
            playbackSpeed={playbackSpeed}
            onSpeedChange={(sp) => setPlaybackSpeed(sp)}
            onRestart={() => handleSeekScene(0)}
          />
        }
      >
        <div className="relative p-5 sm:p-7 min-h-[380px] flex flex-col justify-between">
          <MotionCursor cursor={cursorState} />

          {/* SCENE 0: TRANSCRIPT FAILURE */}
          {currentScene === 0 && (
            <motion.div
              key="transcript-scene-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider">
                  ❌ Transcript AI Workflow (transcript.study · $18.00/mo)
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300">
                  {sceneProgress > 55 ? 'SpeedGrader: Tab Blur 38.2s Flagged' : 'Waiting for Injected Button Click'}
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  <span className="font-bold text-white">Q12 (Macroeconomics): </span>
                  Given IS curve <code className="text-amber-300 font-mono">Y = 1800 − 50r</code> and initial LM curve{' '}
                  <code className="text-amber-300 font-mono">Y = 1000 + 150r</code>. Suppose the central bank contracts money supply, shifting LM to{' '}
                  <code className="text-amber-300 font-mono">Y = 800 + 150r</code>. Find the new equilibrium interest rate{' '}
                  <code className="text-amber-300 font-mono">r*</code> and output <code className="text-amber-300 font-mono">Y*</code>.
                </p>

                {sceneProgress > 30 && (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mt-3 p-3 rounded-xl bg-purple-950/70 border-2 border-dashed border-purple-400 flex flex-wrap items-center justify-between gap-2"
                  >
                    <div className="flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-md bg-purple-600 text-white text-xs font-bold shadow animate-pulse">
                        ✦ Solve with Transcript
                      </span>
                      <code className="text-[10px] font-mono text-purple-300 bg-purple-900/60 px-2 py-0.5 rounded border border-purple-500/30">
                        &lt;div class=&quot;transcript-btn-inject&quot;&gt;
                      </code>
                    </div>
                    <span className="text-[11px] text-purple-300 font-semibold">
                      Visible in Screen Recordings &amp; Desk Glances
                    </span>
                  </motion.div>
                )}

                {sceneProgress > 55 && (
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="mt-3 p-3.5 rounded-xl bg-rose-950/90 border border-rose-500/60 text-xs text-rose-200 flex items-start gap-3"
                  >
                    <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-rose-300">SpeedGrader Focus-Loss Event Logged:</p>
                      <p className="text-[11px] text-rose-300/90 mt-0.5">
                        &quot;Student stopped viewing the Canvas quiz at 14:02:11 (external tab-switch to transcript.study/chat for 38.2s).&quot;
                      </p>
                      <p className="text-[10px] text-slate-400 mt-1 font-mono">
                        $18.00/mo Recurring Subscription Trap · Single-Model Output · Zero Focus Shield
                      </p>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3s SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="transcript-scene-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  ✓ ExamGhost Zero-Button Double-Click (0.3s Solve)
                </span>
                <div className="flex items-center gap-1.5 text-[10px] font-mono">
                  <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                    Alt+1 Invisible
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-bold">
                    Alt+2 Stealth
                  </span>
                  <span className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                    Alt+3 Explain
                  </span>
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  <span className="font-bold text-white">Q12 (Macroeconomics): </span>
                  Given IS curve <code className="text-emerald-300 font-mono">Y = 1800 − 50r</code> and LM curve{' '}
                  <code className="text-emerald-300 font-mono">Y = 800 + 150r</code>. Find equilibrium{' '}
                  <code className="text-emerald-300 font-mono">r*</code> and <code className="text-emerald-300 font-mono">Y*</code>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-3 text-xs">
                  {[
                    { label: 'A', text: 'r* = 4.0%, Y* = 1600' },
                    { label: 'B', text: 'r* = 5.0%, Y* = 1550', correct: true },
                    { label: 'C', text: 'r* = 6.0%, Y* = 1500' },
                    { label: 'D', text: 'r* = 3.5%, Y* = 1625' },
                  ].map((opt) => {
                    const isSolved = opt.correct && sceneProgress > 25;
                    return (
                      <div
                        key={opt.label}
                        className={`p-3 rounded-xl border transition-all flex items-center justify-between ${
                          isSolved
                            ? 'bg-emerald-500/15 border-emerald-500/60 text-white font-bold shadow-md shadow-emerald-950/40'
                            : 'bg-white/[0.02] border-white/10 text-slate-400'
                        }`}
                      >
                        <span>{opt.label}) {opt.text}</span>
                        {isSolved && (
                          <span className="px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 text-[10px] font-mono font-bold">
                            ✓ 0.3s Solve
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {sceneProgress > 60 && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="mt-3 p-3.5 rounded-xl bg-slate-900/95 border border-emerald-500/40 text-xs text-slate-300 space-y-1 font-mono"
                  >
                    <div className="text-[11px] text-emerald-400 font-bold">
                      [Alt+3 Inline LaTeX Derivation · Closed Shadow DOM]:
                    </div>
                    <p className="text-[11px]">
                      1800 − 50r = 800 + 150r ⟹ 200r = 1000 ⟹ <span className="text-emerald-300 font-bold">r* = 5.0%</span>
                    </p>
                    <p className="text-[11px]">
                      Y* = 1800 − 50(5) = 1800 − 250 = <span className="text-emerald-300 font-bold">1550</span>.
                    </p>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* SCENE 2: 2-IN-1 STUDY HUB */}
          {currentScene === 2 && (
            <motion.div
              key="transcript-scene-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider">
                  ✨ ExamGhost Study &amp; Homework AI Workspace (Included on Paid Plans)
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
                        ? 'ChatGPT o3-mini'
                        : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    ECON 302 Lecture 14 RAG: Monetary Tightening &amp; Taylor Rule Dynamics
                  </span>
                  <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                    {activeModelTab === 'claude'
                      ? 'Best for Policy Intuition & Essays'
                      : activeModelTab === 'chatgpt'
                      ? 'Best for Exam Heuristics & Drills'
                      : 'Best for Formal LaTeX Math Proofs'}
                  </span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  {activeModelTab === 'claude' && (
                    <p>
                      When the central bank conducts open market sales, the money supply contracts from M₀ to M₁. At the initial rate of 4%, an excess demand for real balances forces interest rates up to 5.0%. Higher debt yields increase the cost of capital for firms, depressing planned gross private domestic investment (I = Ī − 50r) by 50 units (Y* = 1550). Under the Taylor Rule, this hawkish transmission mitigates demand-pull inflation without collapsing output below potential GDP.
                    </p>
                  )}
                  {activeModelTab === 'chatgpt' && (
                    <p>
                      <strong className="text-emerald-300">Exam Shortcut: </strong>
                      Equate IS and LM: 1800 − 50r = 800 + 150r ⟹ 200r = 1000 ⟹ r = 5%. Substitute into IS: Y = 1800 − 50(5) = 1550.
                      <br />
                      <strong className="text-indigo-300">Key Formula: </strong>
                      Fiscal multiplier k = 1/(1−MPC); Monetary transmission slope ΔY/Δr = −50.
                    </p>
                  )}
                  {activeModelTab === 'deepseek' && (
                    <p className="font-mono text-[11px] text-slate-200">
                      System Matrix: [1, 50; 1, -150] · [Y; r] = [1800; 800].
                      <br />
                      det(A) = −150 − 50 = −200. By Cramer&apos;s Rule:
                      <br />
                      r* = (800 − 1800) / (−200) = −1000 / −200 = 5.0%.
                      <br />
                      Y* = (−270000 − 40000) / (−200) = −310000 / −200 = 1550.
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Included on $19/mo, $99/yr [$8.25/mo] &amp; $199 Lifetime</span>
                  <span className="text-emerald-400 font-bold">Zero $18/mo lock-in</span>
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
   5. QUIZONATOR VS EXAMGHOST DEMO:
   Healthcare Histology (cardiac muscle intercalated discs), locked LTI 1.3
   Canvas New Quizzes iframe, Alt+S Hybrid Vision Snip, Study Hub breakdown
   ============================================================================ */
export function QuizonatorIframeSnipDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Quizonator LTI Crash',
      title: 'Canvas New Quizzes Cross-Origin Iframe DOMException',
      durationMs: 6500,
    },
    {
      id: 1,
      label: '2. Alt+S Hybrid Snip',
      title: 'ExamGhost Vision OCR & Subframe Bridge in 0.8s',
      durationMs: 7000,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Claude 3.7 + ChatGPT + DeepSeek-R1 Histology Breakdown',
      durationMs: 7500,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene].durationMs;
    const stepIncrement = (intervalMs * playbackSpeed / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const telemetry: TelemetryState =
    currentScene === 0
      ? sceneProgress > 45
        ? {
            speedGrader: 'DOMException: Blocked cross-origin frame (LTI 1.3)',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: 'Quizonator DOM Scraper Active',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Alt+S Vision Snip Active',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Medical Histology RAG',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (sceneProgress < 30) {
        return { x: 30, y: 35, clicking: false, label: 'Reading Question Text' };
      } else if (sceneProgress < 60) {
        return { x: 82, y: 22, clicking: true, label: 'Click Quizonator Icon', tag: 'fail' };
      } else {
        return { x: 50, y: 55, clicking: false, label: 'Blocked by Same-Origin Policy', tag: 'flag' };
      }
    } else if (currentScene === 1) {
      if (sceneProgress < 20) {
        return { x: 20, y: 25, clicking: false, label: 'Press Alt+S (Hybrid Snip)', tag: 'snip' };
      } else if (sceneProgress < 50) {
        return { x: 75, y: 65, clicking: true, label: 'Dragging Snip Box (0.8s)', tag: 'snip' };
      } else if (sceneProgress < 75) {
        return { x: 50, y: 62, clicking: false, label: 'Vision OCR Parsed Intercalated Discs', tag: 'solve' };
      } else {
        return { x: 65, y: 75, clicking: false, label: 'Alt+3: Cellular Physiology Derivation', tag: 'explain' };
      }
    } else {
      if (sceneProgress < 35) {
        return { x: 30, y: 18, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
      } else if (sceneProgress < 70) {
        return { x: 52, y: 18, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 Cable Theory', tag: 'explain' };
      }
    }
  };

  const cursorState = getCursor();

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="Canvas New Quizzes (LTI 1.3 Cross-Origin Frame)"
        domainBadge="LTI 1.3 IFRAME"
        browserUrl="https://assessment.instructure.com/lti/launch?quiz_id=9214"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={sceneProgress}
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

          {/* SCENE 0: QUIZONATOR LTI CRASH */}
          {currentScene === 0 && (
            <motion.div
              key="quizonator-scene-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider">
                  ❌ Quizonator DOM Text Scraper ($14.99/mo · 300 answers limit)
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300">
                  {sceneProgress > 45 ? 'Error: Same-Origin Policy Blocked' : 'Top Window Query'}
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border-2 border-dashed border-rose-500/40 p-4 sm:p-5 relative">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 mb-2 border-b border-white/10">
                  <span>Embedded Frame: assessment.instructure.com</span>
                  <span className="text-rose-400 font-bold">Cross-Origin Isolation</span>
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  <span className="font-bold text-white">Q7 (Histology &amp; Cardiology): </span>
                  Identify the junctional complex indicated by <strong className="text-amber-300">Arrow X</strong> at the boundary between adjacent cardiac myocytes on the electron micrograph below.
                </p>

                <div className="mt-3 p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-center gap-4">
                  <div className="text-center font-mono text-xs text-slate-300">
                    <span className="block text-[10px] text-slate-500">[High-Res Myocardial Micrograph]</span>
                    <span className="text-amber-300 font-bold">Arrow X ──► [Intercalated Disc &amp; Gap Junctions]</span>
                  </div>
                </div>

                {sceneProgress > 45 && (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mt-3 p-3.5 rounded-xl bg-slate-950 border border-rose-500 text-xs font-mono space-y-1.5"
                  >
                    <div className="text-rose-400 font-bold flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 text-rose-500" />
                      Uncaught DOMException: Blocked a frame with origin &quot;https://canvas.instructure.com&quot; from accessing a cross-origin frame.
                    </div>
                    <p className="text-[11px] text-slate-400">
                      Quizonator Scraper Error: document.querySelector() returned 0 nodes inside LTI 1.3 subframe.
                    </p>
                    <div className="text-[10px] text-rose-300 pt-1 border-t border-rose-950 flex items-center justify-between">
                      <span>Monthly answer cap: 299/300 (1 credit burned on failed scrape)</span>
                      <span>Chrome ID: dhphdklknbffcgahfpiipdmafoncnndi (3.5★)</span>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST ALT+S HYBRID SNIP */}
          {currentScene === 1 && (
            <motion.div
              key="quizonator-scene-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  ✓ ExamGhost `Alt+S` Hybrid Vision + DOM Snip (0.8s Latency)
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                  Subframe OCR Bridge Active · 0 Blur Flags
                </span>
              </div>

              <div className="relative rounded-2xl bg-white/[0.04] border-2 border-dashed border-emerald-500 p-4 sm:p-5 shadow-lg shadow-emerald-950/20">
                <span className="absolute -top-1.5 -left-1.5 h-3 w-3 bg-emerald-400 rounded-sm shadow-sm" />
                <span className="absolute -top-1.5 -right-1.5 h-3 w-3 bg-emerald-400 rounded-sm shadow-sm" />
                <span className="absolute -bottom-1.5 -left-1.5 h-3 w-3 bg-emerald-400 rounded-sm shadow-sm" />
                <span className="absolute -bottom-1.5 -right-1.5 h-3 w-3 bg-emerald-400 rounded-sm shadow-sm" />

                <div className="flex items-center justify-between text-[11px] font-mono text-emerald-400 font-bold mb-2">
                  <span>[Alt+S Bounding Box Captured · Direct Pixel OCR]</span>
                  <span>0.8s</span>
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-200">
                  <span className="font-bold text-white">Q7 (Histology &amp; Cardiology): </span>
                  Identify junctional complex at boundary of adjacent cardiac myocytes (Arrow X).
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {[
                    { label: 'A', text: 'Tight junctions (zonula occludens)' },
                    { label: 'B', text: 'Intercalated discs with gap junctions (connexons)', winner: true },
                    { label: 'C', text: 'Neuromuscular motor endplate' },
                    { label: 'D', text: 'Hemidesmosomes' },
                  ].map((opt) => {
                    const isSolved = opt.winner && sceneProgress > 50;
                    return (
                      <div
                        key={opt.label}
                        className={`p-2.5 rounded-xl border flex items-center justify-between ${
                          isSolved
                            ? 'bg-emerald-500/20 border-emerald-400 text-white font-bold'
                            : 'bg-white/[0.02] border-white/10 text-slate-400'
                        }`}
                      >
                        <span>{opt.label}) {opt.text}</span>
                        {isSolved && (
                          <span className="px-1.5 py-0.5 rounded bg-emerald-500 text-slate-950 text-[10px] font-mono font-bold">
                            Auto-Filled ✓
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {sceneProgress > 65 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs text-slate-300 font-mono"
                  >
                    <strong className="text-emerald-400">Alt+3 Cellular Proof: </strong>
                    Connexon channels (hexameric Connexin-43) lower intercellular longitudinal resistance to ~2–5 Ω·cm², enabling electrical syncytium.
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* SCENE 2: 2-IN-1 STUDY HUB */}
          {currentScene === 2 && (
            <motion.div
              key="quizonator-scene-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider">
                  ✨ ExamGhost Study AI Workspace (Histology &amp; Cardiology Proof)
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === m
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {m === 'claude'
                        ? 'Claude 3.7 Sonnet'
                        : m === 'chatgpt'
                        ? 'ChatGPT o3-mini'
                        : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    Robbins Pathology Chapter 12: Myocardial Junctional Architecture
                  </span>
                  <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                    {activeModelTab === 'claude'
                      ? 'Best for Tissue Anatomy & Ultrastructure'
                      : activeModelTab === 'chatgpt'
                      ? 'Best for USMLE / NCLEX Clinical Pearls'
                      : 'Best for Cable Theory & Math Biophysics'}
                  </span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed">
                  {activeModelTab === 'claude' && (
                    <p>
                      Intercalated discs join cardiomyocytes along two planes: (1) Transverse component containing Fascia Adherens (anchoring terminal actin microfilaments) and Macula Adherens (desmosomes preventing cell detachment under 120 mmHg systolic pressure); and (2) Longitudinal component oriented parallel to myofibrils containing extensive Gap Junctions (clusters of hexameric Connexin-43 channels) that allow direct intercellular ionic current flow.
                    </p>
                  )}
                  {activeModelTab === 'chatgpt' && (
                    <p>
                      <strong className="text-emerald-300">USMLE High-Yield Pearl: </strong>
                      Connexin-43 uncoupling occurs during acute myocardial infarction (ischemia causes intracellular acidosis and calcium overload, closing gap junction pores). This dramatically slows conduction velocity and triggers fatal ventricular re-entrant arrhythmias.
                    </p>
                  )}
                  {activeModelTab === 'deepseek' && (
                    <p className="font-mono text-[11px]">
                      Cable theory relation: ∂Vm/∂t = (1/Cm) · [1/(r_myo + R_gap/L) · ∂²Vm/∂x² − I_ion]. Under normal conditions R_gap &lt;&lt; r_myo ⟹ θ ≈ 0.8 m/s. When R_gap ➔ ∞, axial conduction drops to zero.
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Works across 20+ LMSs (Canvas New Quizzes, ALEKS, Blackboard Ultra)</span>
                  <span className="text-emerald-400 font-bold">Uncapped Solves</span>
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
   6. BETTERCAMPUS VS EXAMGHOST DEMO:
   Physics Electrodynamics (Maxwell wave equations), fake dark mode DOM contamination,
   0.3s Alt+1 15% opacity solve, Study Hub wave equation derivation
   ============================================================================ */
export function BetterCampusCoPilotDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. BetterCampus Pro Trap',
      title: 'Floating Copilot Window Steals Focus & Triggers Blur Flag',
      durationMs: 6500,
    },
    {
      id: 1,
      label: '2. The Ultimate Stack',
      title: 'Free Dark Mode + ExamGhost 0.3s Closed Shadow DOM',
      durationMs: 7000,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Claude 3.7 + ChatGPT + DeepSeek-R1 Electrodynamics Proof',
      durationMs: 7500,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene].durationMs;
    const stepIncrement = (intervalMs * playbackSpeed / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const telemetry: TelemetryState =
    currentScene === 0
      ? sceneProgress > 45
        ? {
            speedGrader: '1 window.blur flag · SpeedGrader Alert: Lost focus 14.2s',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: 'BetterCampus Pro Copilot Active',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Focus Shield active · Midnight Theme',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Physics Electrodynamics RAG',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (sceneProgress < 30) {
        return { x: 28, y: 35, clicking: false, label: 'Reading Physics Question' };
      } else if (sceneProgress < 60) {
        return { x: 78, y: 32, clicking: true, label: 'Focus Copilot Input Box', tag: 'fail' };
      } else {
        return { x: 80, y: 55, clicking: false, label: 'Focus Lost (window.blur flagged!)', tag: 'flag' };
      }
    } else if (currentScene === 1) {
      if (sceneProgress < 30) {
        return { x: 38, y: 36, clicking: true, label: 'Double-Click Solve (0.3s)', tag: 'solve' };
      } else if (sceneProgress < 60) {
        return { x: 55, y: 58, clicking: false, label: 'Alt+1: Invisible Auto-Tick', tag: 'invisible' };
      } else {
        return { x: 68, y: 72, clicking: false, label: 'Alt+3: Maxwell Derivation Drawer', tag: 'explain' };
      }
    } else {
      if (sceneProgress < 35) {
        return { x: 30, y: 18, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
      } else if (sceneProgress < 70) {
        return { x: 52, y: 18, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 Vector Proof', tag: 'explain' };
      }
    }
  };

  const cursorState = getCursor();

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="PHYS 301 · Classical Electrodynamics Midterm"
        domainBadge="CANVAS MIDNIGHT"
        browserUrl="https://canvas.instructure.com/courses/84102/quizzes/3811"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={sceneProgress}
            isPlaying={isPlaying}
            onTogglePlay={() => setIsPlaying((p) => !p)}
            onSeekScene={handleSeekScene}
            playbackSpeed={playbackSpeed}
            onSpeedChange={(sp) => setPlaybackSpeed(sp)}
            onRestart={() => handleSeekScene(0)}
          />
        }
      >
        <div className="relative p-5 sm:p-7 min-h-[390px] flex flex-col justify-between bg-[#0a0e17]">
          <MotionCursor cursor={cursorState} />

          {/* SCENE 0: BETTERCAMPUS PRO FAILURE */}
          {currentScene === 0 && (
            <motion.div
              key="bettercampus-scene-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider">
                  ❌ BetterCampus Pro AI Copilot ($19.99/mo · Floating Overlay)
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300">
                  {sceneProgress > 45 ? 'SpeedGrader: Lost Focus 14.2s (Flagged)' : 'Floating Sidebar Active'}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                <div className="lg:col-span-8 rounded-2xl bg-white/[0.04] border border-white/10 p-4 relative">
                  <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                    <span className="font-bold text-white">Q14 (Electrodynamics): </span>
                    Derive phase velocity <code className="text-amber-300 font-mono">v_p</code> of an EM wave in non-conducting dielectric with{' '}
                    <code className="text-amber-300 font-mono">ε_r = 4.00, μ_r = 1.00</code>.
                  </p>

                  <div className="mt-2.5 p-2 rounded-lg bg-white text-slate-900 border border-slate-300 font-mono text-[11px]">
                    <span className="text-rose-600 font-bold">[CSS Override Conflict]: </span>
                    Global dark mode script injected un-scoped styles over LaTeX equation container.
                  </div>
                </div>

                <div className="lg:col-span-4 rounded-2xl bg-slate-900 border border-rose-500/50 p-3.5 space-y-2 shadow-xl">
                  <div className="text-[11px] font-bold text-slate-200 flex items-center justify-between">
                    <span>BetterCampus Copilot</span>
                    <span className="text-[10px] text-rose-400 font-mono">Focus Lost</span>
                  </div>
                  <div className="p-2 rounded bg-black/60 border border-rose-500/40 text-[11px] text-rose-300 font-mono">
                    Typing in copilot steals browser focus...
                  </div>
                  {sceneProgress > 45 && (
                    <div className="p-2 rounded bg-rose-950/90 border border-rose-500 text-[10px] text-rose-200 font-mono">
                      SpeedGrader: window.blur triggered!
                      <br />
                      Monthly Fee: $19.99/mo (Canvas only)
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 1: THE ULTIMATE STACK */}
          {currentScene === 1 && (
            <motion.div
              key="bettercampus-scene-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider">
                  ✓ The #1 2026 Stack: Free BetterCampus Dark Mode + ExamGhost 0.3s
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                  Closed Shadow DOM · 0 CSS Conflict
                </span>
              </div>

              <div className="rounded-2xl bg-[#0e1422] border border-white/10 p-4 sm:p-5 relative shadow-xl">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 mb-2 border-b border-white/10">
                  <span className="text-indigo-400 font-bold">Midnight Theme Active (BetterCampus Free $0)</span>
                  <span className="text-emerald-400 font-bold">ExamGhost 100% Focus Shield</span>
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-200">
                  <span className="font-bold text-white">Q14 (Electrodynamics): </span>
                  Derive phase velocity <code className="text-emerald-300 font-mono">v_p</code> of an EM wave in non-conducting dielectric with{' '}
                  <code className="text-emerald-300 font-mono">ε_r = 4.00, μ_r = 1.00</code>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {[
                    { label: 'A', text: 'v_p = c = 3.00 × 10⁸ m/s' },
                    { label: 'B', text: 'v_p = c / √ε_r = 1.50 × 10⁸ m/s', winner: true },
                    { label: 'C', text: 'v_p = c / ε_r = 0.75 × 10⁸ m/s' },
                    { label: 'D', text: 'v_p = c √ε_r = 6.00 × 10⁸ m/s' },
                  ].map((opt) => {
                    const isSolved = opt.winner && sceneProgress > 30;
                    return (
                      <div
                        key={opt.label}
                        className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                          isSolved
                            ? 'bg-emerald-500/20 border-emerald-400 text-white font-bold'
                            : 'bg-white/[0.02] border-white/10 text-slate-400'
                        }`}
                      >
                        <span>{opt.label}) {opt.text}</span>
                        {isSolved && (
                          <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                            ✓ 0.3s Solve
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {sceneProgress > 60 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs text-slate-300 font-mono"
                  >
                    <strong className="text-emerald-400">Alt+3 Wave Derivation: </strong>
                    v_p = 1 / √(μ₀ ε) = c / √ε_r = (3.00 × 10⁸) / √4.00 = 1.50 × 10⁸ m/s.
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* SCENE 2: 2-IN-1 STUDY HUB */}
          {currentScene === 2 && (
            <motion.div
              key="bettercampus-scene-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider">
                  ✨ ExamGhost Study AI Workspace (Physics &amp; Electrodynamics)
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === m
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {m === 'claude'
                        ? 'Claude 3.7 Sonnet'
                        : m === 'chatgpt'
                        ? 'ChatGPT o3-mini'
                        : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    Griffiths Electrodynamics Chapter 9: EM Waves in Dielectric Media
                  </span>
                  <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                    {activeModelTab === 'claude'
                      ? 'Best for Physical Intuition & Poynting Vector'
                      : activeModelTab === 'chatgpt'
                      ? 'Best for Fresnel Equations & Brewster Angles'
                      : 'Best for First-Principles Vector Curl Proofs'}
                  </span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed">
                  {activeModelTab === 'claude' && (
                    <p>
                      In linear isotropic non-magnetic dielectrics, bound charges polarize under the electric field, establishing an opposing dipole moment that retards phase propagation. The refractive index n = √ε_r = 2.00, halving wave speed to v = c/2 = 1.50 × 10⁸ m/s. Energy transport rate is given by Poynting vector S = (1/μ₀)(E × B) with time-averaged intensity &lt;I&gt; = (1/2) ε v E₀².
                    </p>
                  )}
                  {activeModelTab === 'chatgpt' && (
                    <p>
                      <strong className="text-emerald-300">Exam Formulas to Remember: </strong>
                      (1) Phase velocity v_p = c/√ε_r; (2) Wave impedance η = η₀/√ε_r = 377/2 = 188.5 Ω; (3) Brewster angle θ_B = arctan(√ε_r) = arctan(2) ≈ 63.4°.
                    </p>
                  )}
                  {activeModelTab === 'deepseek' && (
                    <p className="font-mono text-[11px]">
                      Take curl of Faraday&apos;s law: ∇ × (∇ × E) = −μ₀ ε ∂²E/∂t². Using ∇(∇·E) − ∇²E = 0 − ∇²E, we arrive at: ∇²E − μ₀ ε_r ε₀ ∂²E/∂t² = 0 ⟹ v_p = 1 / √(μ₀ ε_r ε₀) = c / √ε_r = 1.50 × 10⁸ m/s.
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Pair BetterCampus Free ($0) + ExamGhost ($8.25/mo on $99/yr pass)</span>
                  <span className="text-emerald-400 font-bold">Save $140/yr vs BetterCampus Pro</span>
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
   7. GAUTH VS EXAMGHOST DEMO:
   Calculus ODE (undamped resonance y'' + 16y = 8cos 4t), 35° downward phone camera
   gaze vector flagged by Proctorio, 0.3s Double-Click solve, Study Hub resonance derivation
   ============================================================================ */
export function GauthWebcamGazeDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'deepseek' | 'claude' | 'chatgpt'>('deepseek');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Gauth Phone Lag',
      title: 'Gauth Phone Lag: 35° Downward Gaze & Biometric Proctor Flag',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost 0.3s Solve: 0.0° Gaze Horizon & Hotkey Suite',
      durationMs: 7000,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Workspace: DeepSeek-R1 + Claude 3.7 + ChatGPT Resonance Proof',
      durationMs: 8000,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene].durationMs;
    const stepIncrement = (intervalMs * playbackSpeed / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const telemetry: TelemetryState =
    currentScene === 0
      ? sceneProgress > 40
        ? {
            speedGrader: 'Proctorio Alert: Off-Screen Gaze & Multi-Device Detected',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: 'Webcam Monitoring Active · Gaze Baseline 0.0°',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Focus Shield active · 0.0° Horizon',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Calculus & Physics Lab',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (sceneProgress < 30) {
        return { x: 35, y: 30, clicking: false, label: 'Reading ODE Equation' };
      } else if (sceneProgress < 65) {
        return { x: 80, y: 82, clicking: true, label: 'Picking up phone (18.4s lag)...', tag: 'fail' };
      } else {
        return { x: 82, y: 75, clicking: false, label: '35° Downward Gaze Flagged!', tag: 'flag' };
      }
    } else if (currentScene === 1) {
      if (sceneProgress < 30) {
        return { x: 35, y: 28, clicking: true, label: 'Double-Click (0.3s)', tag: 'solve' };
      } else if (sceneProgress < 60) {
        return { x: 50, y: 48, clicking: false, label: 'Alt+1: Invisible 15% Shift', tag: 'invisible' };
      } else {
        return { x: 65, y: 68, clicking: false, label: 'Alt+3: Inline Undetermined Coeffs', tag: 'explain' };
      }
    } else {
      if (sceneProgress < 35) {
        return { x: 28, y: 18, clicking: true, label: 'DeepSeek-R1 Math Proof', tag: 'explain' };
      } else if (sceneProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'ChatGPT o3-mini SymPy', tag: 'default' };
      }
    }
  };

  const cursorState = getCursor();

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="MATH 285 · Differential Equations Final (Proctorio Proctored)"
        domainBadge="PROCTORIO + CANVAS"
        browserUrl="https://canvas.instructure.com/courses/41920/quizzes/88021"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={sceneProgress}
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

          {/* SCENE 0: GAUTH PHONE GAZE & BIOMETRIC ANOMALY */}
          {currentScene === 0 && (
            <motion.div
              key="gauth-scene-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                  Gauth Mobile App Workflow (ByteDance · 35° Downward Gaze Anomaly)
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  {sceneProgress > 40 ? 'Proctorio Incident: Off-Screen Gaze Logged' : '18.4s Phone Camera Capture Latency'}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-3">
                <div className="lg:col-span-8 rounded-2xl bg-white/[0.04] border border-white/10 p-4 relative">
                  <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                    <span className="font-bold text-white">Q15 (Harmonic Resonance): </span>
                    Solve initial value problem for undamped forced oscillator:{' '}
                    <code className="text-amber-300 font-mono">y&apos;&apos; + 16y = 8 cos(4t)</code>, with{' '}
                    <code className="text-amber-300 font-mono">y(0) = 0, y&apos;(0) = 2</code>. Determine exact solution{' '}
                    <code className="text-amber-300 font-mono">y(t)</code> and amplitude envelope at{' '}
                    <code className="text-amber-300 font-mono">t = 5π</code>.
                  </p>

                  <div className="grid grid-cols-1 gap-2 mt-3 text-xs">
                    {[
                      { label: 'A', text: 'y(t) = (1/2)sin(4t) + t sin(4t); amplitude envelope A(5π) = 5π' },
                      { label: 'B', text: 'y(t) = cos(4t) + 2sin(4t) - (1/4)t cos(4t)' },
                    ].map((opt) => (
                      <div key={opt.label} className="p-2.5 rounded-xl border bg-white/[0.02] border-white/10 text-slate-400">
                        {opt.label}) {opt.text}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Biometric Proctoring HUD */}
                <div className="lg:col-span-4 rounded-2xl bg-slate-950 border border-rose-500/60 p-3.5 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-rose-400 font-bold text-[11px]">
                    <span>AI Webcam Telemetry</span>
                    <span>Proctorio v10.4</span>
                  </div>

                  <div className="p-2 rounded bg-black/60 border border-white/10 space-y-1 text-[10px]">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Gaze Pitch Angle:</span>
                      <span className={sceneProgress > 40 ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                        {sceneProgress > 40 ? '-35.2° [CRITICAL > 15°]' : '0.0° [CENTER]'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Corneal OLED Glare:</span>
                      <span className={sceneProgress > 40 ? 'text-rose-400 font-bold' : 'text-emerald-400'}>
                        {sceneProgress > 40 ? '84% (Phone Screen Reflection)' : '12% (Normal)'}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Capture Lag:</span>
                      <span className="text-amber-400">18.4s Phone Aiming</span>
                    </div>
                  </div>

                  {sceneProgress > 50 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="p-2 rounded bg-rose-950 border border-rose-500 text-[10px] text-rose-200"
                    >
                      <strong className="text-rose-300">Gauth Plus Modal: </strong>
                      $11.99/mo required for step-by-step calculus derivation.
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3s SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="gauth-scene-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ExamGhost 0.0° Gaze Horizon · 0.3s Symbolic Solve
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                  Focus Shield: 0 Webcam Deviations
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  <span className="font-bold text-white">Q15 (Harmonic Resonance): </span>
                  Solve initial value problem for undamped forced oscillator:{' '}
                  <code className="text-emerald-300 font-mono">y&apos;&apos; + 16y = 8 cos(4t)</code>, with{' '}
                  <code className="text-emerald-300 font-mono">y(0) = 0, y&apos;(0) = 2</code>.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {[
                    { label: 'A', text: 'y(t) = (1/2)sin(4t) + t sin(4t); envelope A(5π) = 5π', correct: true },
                    { label: 'B', text: 'y(t) = cos(4t) + 2sin(4t) - (1/4)t cos(4t)' },
                    { label: 'C', text: 'y(t) = (1/8)cos(4t) + sin(4t) + t² sin(4t)' },
                    { label: 'D', text: 'y(t) = 2sin(4t) + (1/2)t cos(4t)' },
                  ].map((opt) => {
                    const isSolved = opt.correct && sceneProgress > 25;
                    return (
                      <div
                        key={opt.label}
                        className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                          isSolved
                            ? 'bg-emerald-500/20 border-emerald-400 text-white font-bold ring-2 ring-emerald-500/20'
                            : 'bg-white/[0.02] border-white/10 text-slate-400'
                        }`}
                      >
                        <span>{opt.label}) {opt.text}</span>
                        {isSolved && (
                          <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                            ✓ 0.3s Symbolic Solve · 0.0° Gaze
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {sceneProgress > 60 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs text-slate-300 font-mono flex items-center justify-between"
                  >
                    <div>
                      <strong className="text-emerald-400">Alt+3 Undetermined Coefficients: </strong>
                      Driving frequency ω = 4 matches ω₀ = 4 ⟹ Secular term yp(t) = t sin(4t) ⟹ Amplitude grows linearly with time.
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* SCENE 2: 2-IN-1 STUDY HUB */}
          {currentScene === 2 && (
            <motion.div
              key="gauth-scene-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  ExamGhost Study AI Workspace (Calculus &amp; Physics Lab)
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['deepseek', 'claude', 'chatgpt'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === m
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {m === 'deepseek'
                        ? 'DeepSeek-R1'
                        : m === 'claude'
                        ? 'Claude 3.7 Sonnet'
                        : 'ChatGPT o3-mini'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    Boyce &amp; DiPrima ODE Chapter 3: Forced Vibrations &amp; Resonance
                  </span>
                  <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                    {activeModelTab === 'deepseek'
                      ? 'Best for Chain-of-Thought Derivation'
                      : activeModelTab === 'claude'
                      ? 'Best for Physical Intuition & Distractor Traps'
                      : 'Best for SymPy Verification & Python Scripts'}
                  </span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  {activeModelTab === 'deepseek' && (
                    <p className="font-mono text-[11px]">
                      1. Homogeneous: r² + 16 = 0 ⟹ r = ±4i ⟹ yh(t) = c₁ cos(4t) + c₂ sin(4t).
                      <br />
                      2. Driving frequency ω = 4 equals ω₀ = √16 = 4 (pure undamped resonance). Standard trial duplicated in yh(t); multiply by t: yp(t) = t(A cos 4t + B sin 4t).
                      <br />
                      3. Substitute: −8A sin(4t) + 8B cos(4t) = 8 cos(4t) ⟹ A = 0, B = 1 ⟹ yp(t) = t sin(4t).
                      <br />
                      4. Initial conditions: y(0) = c₁ = 0; y&apos;(0) = 4c₂ = 2 ⟹ c₂ = 1/2.
                      <br />
                      5. Solution: y(t) = (1/2)sin(4t) + t sin(4t). At t = 5π, secular envelope A(5π) = 5π. Option A verified.
                    </p>
                  )}
                  {activeModelTab === 'claude' && (
                    <p>
                      <strong>Resonance Catastrophe Analysis:</strong> Without damping (c = 0), energy pumped into the system at its natural frequency accumulates without dissipation, causing displacement amplitude to grow linearly with time (secular term t). Distractor B is the classic student error of attempting standard undetermined coefficients without the secular t factor. Distractor C wrongly assumes quadratic growth.
                    </p>
                  )}
                  {activeModelTab === 'chatgpt' && (
                    <p className="font-mono text-[11px]">
                      import sympy as sp
                      <br />
                      t = sp.Symbol(&apos;t&apos;, real=True)
                      <br />
                      y = sp.Function(&apos;y&apos;)(t)
                      <br />
                      ode = sp.Eq(y.diff(t, 2) + 16*y, 8*sp.cos(4*t))
                      <br />
                      sol = sp.dsolve(ode, ics=&#123;y.subs(t, 0): 0, y.diff(t).subs(t, 0): 2&#125;)
                      <br />
                      # sol: y(t) = (t + 1/2)*sin(4*t)
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>5 Free Solves/Day ($0) · Unlimited Extension + Study Hub on Paid ($19/mo or $8.25/mo)</span>
                  <span className="text-emerald-400 font-bold">0.0° Proctor Evasion Horizon</span>
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
   8. COURSEHERO VS EXAMGHOST DEMO:
   Financial Accounting (ASC 842 lease liability / ASC 740 DTA), $39.95/mo blurred
   paywall, 0.3s in-tab solve, Study Hub balance sheet breakdown
   ============================================================================ */
export function CourseHeroPaywallDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'deepseek' | 'chatgpt'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Course Hero Paywall',
      title: 'Course Hero: Blurred $39.95 Paywall & Obsolete 2021 Key',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost 0.3s Solve: Live In-Tab Computation & Hotkeys',
      durationMs: 7000,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Workspace: Corporate Financial Accounting Lab',
      durationMs: 8000,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene].durationMs;
    const stepIncrement = (intervalMs * playbackSpeed / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  const telemetry: TelemetryState =
    currentScene === 0
      ? sceneProgress > 30
        ? {
            speedGrader: '1 window.blur flag · Course Hero Tab Switch Logged!',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: 'Canvas Quiz Viewport',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Focus Shield active · In-Tab Shadow DOM',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Corporate Financial Accounting',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (sceneProgress < 25) {
        return { x: 32, y: 32, clicking: true, label: 'Select Accounting Prompt' };
      } else if (sceneProgress < 60) {
        return { x: 88, y: 15, clicking: true, label: 'Tab Switch → coursehero.com', tag: 'fail' };
      } else {
        return { x: 50, y: 65, clicking: false, label: 'Blurred $39.95 Paywall + 2021 Obsolete Key', tag: 'flag' };
      }
    } else if (currentScene === 1) {
      if (sceneProgress < 30) {
        return { x: 36, y: 30, clicking: true, label: 'Double-Click (0.3s Solve)', tag: 'solve' };
      } else if (sceneProgress < 60) {
        return { x: 55, y: 52, clicking: false, label: 'Alt+1 Invisible / Alt+2 Stealth Dot', tag: 'invisible' };
      } else {
        return { x: 68, y: 72, clicking: false, label: 'Alt+3 Journal Entries Drawer', tag: 'explain' };
      }
    } else {
      if (sceneProgress < 35) {
        return { x: 28, y: 18, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
      } else if (sceneProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'DeepSeek-R1 Amortization', tag: 'explain' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'ChatGPT o3-mini Python', tag: 'default' };
      }
    }
  };

  const cursorState = getCursor();

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="ACCT 301 · Intermediate Accounting Midterm II"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/52109/quizzes/66201"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={sceneProgress}
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

          {/* SCENE 0: COURSE HERO PAYWALL */}
          {currentScene === 0 && (
            <motion.div
              key="coursehero-scene-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                  Course Hero ($39.95/mo · 30 Unlocks Cap · Static 2021 PDFs)
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  {sceneProgress > 30 ? 'SpeedGrader: Tab switch logged (window.blur fired)' : 'Copying randomized parameters'}
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  <span className="font-bold text-white">Q11 (ASC 842 &amp; ASC 740): </span>
                  On Jan 1, 2026, Nexus Global Corp enters a 5-year lease with annual payments of $120,000 due at year-end. Incremental borrowing rate is 6.0% (PV annuity factor = 4.212364). Lease payments deductible when paid (tax basis $0, 25% tax rate). Calculate: (1) ROU Lease Liability and (2) Net Deferred Tax Asset (DTA) at inception.
                </p>

                {/* Blurred Paywall Overlay */}
                {sceneProgress > 30 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mt-3 p-4 rounded-xl bg-slate-950/95 border border-rose-500/70 relative overflow-hidden"
                  >
                    <div className="filter blur-sm select-none opacity-40 text-xs font-mono text-slate-300">
                      Document Title: ACCT301_Exam_Key_Fall2021.pdf (Uploaded Oct 2021)
                      <br />
                      Solution: Annual payment $100,000 at 5% rate ⟹ Lease Liability = $421,236 ⟹ Correct answer is C.
                    </div>

                    <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-center bg-black/75">
                      <Lock className="w-5 h-5 text-amber-400 mb-1" />
                      <p className="text-xs font-bold text-white">UNBLUR THIS DOCUMENT ($39.95 / Month)</p>
                      <p className="text-[11px] text-rose-400 font-mono mt-0.5">
                        ❌ PROFESSOR DISTRACTOR TRAP: Professor randomized payments to $120k at 6%. Option C is a planted trap for students copying old PDFs!
                      </p>
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {[
                    { label: 'A', text: 'Lease Liability: $505,484; Net DTA: $0' },
                    { label: 'B', text: 'Lease Liability: $600,000; Net DTA: $150,000' },
                    { label: 'C', text: 'Lease Liability: $421,236; Net DTA: $105,309 (Distractor Key)' },
                    { label: 'D', text: 'Lease Liability: $505,484; Net DTL: $126,371' },
                  ].map((opt) => (
                    <div key={opt.label} className="p-2.5 rounded-xl border bg-white/[0.02] border-white/10 text-slate-400">
                      {opt.label}) {opt.text}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3s SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="coursehero-scene-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ExamGhost Live In-Tab Computation (0.3s Solve)
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300">
                  0 Tab Switches · 0 SpeedGrader Blur Events
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  <span className="font-bold text-white">Q11 (ASC 842 &amp; ASC 740): </span>
                  Nexus Global Corp 5-year lease: $120,000 payments, 6.0% discount factor 4.212364. Calculate ROU liability and Net DTA.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {[
                    { label: 'A', text: 'Lease Liability: $505,484; Net DTA: $0', correct: true },
                    { label: 'B', text: 'Lease Liability: $600,000; Net DTA: $150,000' },
                    { label: 'C', text: 'Lease Liability: $421,236; Net DTA: $105,309' },
                    { label: 'D', text: 'Lease Liability: $505,484; Net DTL: $126,371' },
                  ].map((opt) => {
                    const isSolved = opt.correct && sceneProgress > 25;
                    return (
                      <div
                        key={opt.label}
                        className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                          isSolved
                            ? 'bg-emerald-500/20 border-emerald-400 text-white font-bold ring-2 ring-emerald-500/20'
                            : 'bg-white/[0.02] border-white/10 text-slate-400'
                        }`}
                      >
                        <span>{opt.label}) {opt.text}</span>
                        {isSolved && (
                          <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                            ✓ Verified Live Match: $505,484 · Net DTA $0
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>

                {sceneProgress > 60 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-3 p-3 rounded-xl bg-slate-900 border border-emerald-500/40 text-xs text-slate-300 font-mono flex items-center justify-between"
                  >
                    <div>
                      <strong className="text-emerald-400">Alt+3 Journal Entries: </strong>
                      Dr. ROU Asset $505,484 / Cr. Lease Liability $505,484. Gross DTL ($126,371) nets with Gross DTA ($126,371) ⟹ Net DTA = $0.
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* SCENE 2: 2-IN-1 STUDY HUB */}
          {currentScene === 2 && (
            <motion.div
              key="coursehero-scene-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  ExamGhost Study AI Workspace (Corporate Financial Accounting Lab)
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['claude', 'deepseek', 'chatgpt'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === m
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {m === 'claude'
                        ? 'Claude 3.7 Sonnet'
                        : m === 'deepseek'
                        ? 'DeepSeek-R1'
                        : 'ChatGPT o3-mini'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-indigo-500/30 p-4 sm:p-5 space-y-3">
                <div className="flex items-center justify-between text-xs pb-2 border-b border-white/10">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-400" />
                    Kieso Intermediate Accounting Chapter 21: Leases &amp; Income Taxes
                  </span>
                  <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                    {activeModelTab === 'claude'
                      ? 'Best for ASC 842 & ASC 740 Tax Synthesis'
                      : activeModelTab === 'deepseek'
                      ? 'Best for 5-Year Amortization Schedule'
                      : 'Best for Python Modeling Scripts'}
                  </span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  {activeModelTab === 'claude' && (
                    <p>
                      <strong>ASC 842 &amp; ASC 740 Synthesis:</strong> Present value of 5 annual $120,000 payments discounted at 6.0%: PV = $120,000 × 4.212364 = $505,483.68. Initial entry: Dr. ROU Asset $505,484 / Cr. Lease Liability $505,484. Under ASC 740, the tax basis of both the asset and liability is $0 at inception. The ROU Asset creates a taxable temporary difference ($505,484 × 25% = $126,371 DTL), while the Lease Liability creates an equal deductible temporary difference ($505,484 × 25% = $126,371 DTA). Because they net to zero, initial Net DTA recognized on the balance sheet is $0!
                    </p>
                  )}
                  {activeModelTab === 'deepseek' && (
                    <p className="font-mono text-[11px] text-slate-200">
                      5-Year Amortization Schedule (Interest @ 6%, Payment $120,000):
                      <br />
                      • Year 1: Interest $30,329 | Principal $89,671 | Ending Balance $415,813
                      <br />
                      • Year 2: Interest $24,949 | Principal $95,051 | Ending Balance $320,762
                      <br />
                      • Year 3: Interest $19,246 | Principal $100,754 | Ending Balance $220,008
                      <br />
                      • Year 4: Interest $13,200 | Principal $106,800 | Ending Balance $113,208
                      <br />
                      • Year 5: Interest $6,792 | Principal $113,208 | Ending Balance $0
                    </p>
                  )}
                  {activeModelTab === 'chatgpt' && (
                    <p className="font-mono text-[11px]">
                      pmt, r, n, tax_rate = 120000, 0.06, 5, 0.25
                      <br />
                      pv = pmt * (1 - (1 + r)**(-n)) / r
                      <br />
                      print(f&quot;ROU Asset &amp; Liability: $&#123;pv:,.2f&#125;&quot;) # $505,483.68
                      <br />
                      gross_dta, gross_dtl = pv * tax_rate, pv * tax_rate
                      <br />
                      print(f&quot;Net DTA: $&#123;gross_dta - gross_dtl:,.2f&#125;&quot;) # $0.00
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Live Dynamic Computation vs Dead $39.95 PDFs</span>
                  <span className="text-emerald-400 font-bold">Included in $19/mo, $99/yr [$8.25/mo] &amp; $199 Lifetime</span>
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
   9. COMPARE HUB STACK CALCULATOR DEMO:
   58 extensions master benchmark matrix, interactive LMS/extension selector,
   3-model Study Workspace derivation preview, and TCO savings calculator
   ============================================================================ */
export function CompareHubStackCalculator() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');
  const [selectedLms, setSelectedLms] = useState<'canvas' | 'newquizzes' | 'blackboard' | 'moodle' | 'brightspace'>('canvas');

  // Interactive TCO Calculator State
  const [hasQuizExt, setHasQuizExt] = useState(true); // $25/mo
  const [hasChatGptPlus, setHasChatGptPlus] = useState(true); // $20/mo
  const [hasClaudePro, setHasClaudePro] = useState(true); // $20/mo
  const [hasCourseHero, setHasCourseHero] = useState(false); // $39.95/mo
  const [hasChegg, setHasChegg] = useState(false); // $19.95/mo
  const [selectedPlan, setSelectedPlan] = useState<'annual' | 'monthly' | 'lifetime'>('annual');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. 58 Competitors Audited',
      title: '58 Competitors Audited: The Detection Honeytrap & Injected DOM Flaws',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. Universal 0.3s Solve',
      title: 'Universal 0.3s Solve: Multi-LMS Compatibility & Hotkey Suite',
      durationMs: 7000,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study AI Suite',
      title: '2-in-1 Study AI Suite: Frontier AI Workspace & TCO Calculator',
      durationMs: 8000,
    },
  ];

  useEffect(() => {
    if (!isPlaying) return;
    const intervalMs = 50;
    const currentDuration = scenes[currentScene].durationMs;
    const stepIncrement = (intervalMs * playbackSpeed / currentDuration) * 100;

    const timer = setInterval(() => {
      setSceneProgress((prev) => {
        if (prev + stepIncrement >= 100) {
          setCurrentScene((sc) => (sc + 1) % scenes.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPlaying, currentScene, playbackSpeed, scenes]);

  const handleSeekScene = useCallback((sceneIndex: number) => {
    setCurrentScene(sceneIndex);
    setSceneProgress(0);
  }, []);

  // TCO Math Calculations
  const currentMonthlyCost = useMemo(() => {
    let cost = 0;
    if (hasQuizExt) cost += 25;
    if (hasChatGptPlus) cost += 20;
    if (hasClaudePro) cost += 20;
    if (hasCourseHero) cost += 39.95;
    if (hasChegg) cost += 19.95;
    return cost;
  }, [hasQuizExt, hasChatGptPlus, hasClaudePro, hasCourseHero, hasChegg]);

  const currentYearlyCost = currentMonthlyCost * 12;

  const examGhostYearlyCost =
    selectedPlan === 'annual' ? 99 : selectedPlan === 'monthly' ? 19 * 12 : 199;
  const examGhostMonthlyEq =
    selectedPlan === 'annual' ? 8.25 : selectedPlan === 'monthly' ? 19 : 16.58;

  const annualSavings = Math.max(0, currentYearlyCost - examGhostYearlyCost);

  const telemetry: TelemetryState =
    currentScene === 0
      ? sceneProgress > 40
        ? {
            speedGrader: '58 Audited: 44 Inject DOM · 38 Fire blur · 29 Manifest Leaks',
            focusShield: false,
            blurEvents: 3,
            status: 'flagged',
          }
        : {
            speedGrader: '58 Canvas AI Quiz Extensions Benchmark',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · 4-Layer Focus Shield Active · Closed Shadow DOM v1',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'ExamGhost 2-in-1 Suite · Unlimited Extension + Frontier AI Study Hub',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (sceneProgress < 30) {
        return { x: 30, y: 35, clicking: false, label: 'Auditing 58 Canvas Extensions' };
      } else if (sceneProgress < 65) {
        return { x: 75, y: 55, clicking: true, label: 'Injected DOM Buttons Detected', tag: 'fail' };
      } else {
        return { x: 80, y: 32, clicking: false, label: 'Chrome SidePanel Window Blur', tag: 'flag' };
      }
    } else if (currentScene === 1) {
      if (sceneProgress < 30) {
        return { x: 35, y: 34, clicking: true, label: 'Double-Click (0.3s Inline Solve)', tag: 'solve' };
      } else if (sceneProgress < 60) {
        return { x: 62, y: 50, clicking: false, label: 'Alt+S Hybrid Vision + DOM Snip', tag: 'snip' };
      } else {
        return { x: 70, y: 72, clicking: false, label: '⌘+Shift+U Panic Kill-Switch (<8ms)', tag: 'invisible' };
      }
    } else {
      if (sceneProgress < 35) {
        return { x: 28, y: 18, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
      } else if (sceneProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 Math Proofs', tag: 'explain' };
      }
    }
  };

  const cursorState = getCursor();

  return (
    <div className="w-full space-y-6">
      {/* PART 1: 3-SCENE ANIMATED MOTION VIDEO DEMO */}
      <MotionDemoFrame
        title="58 Canvas Extensions Master Benchmark &amp; Telemetry Matrix"
        domainBadge="UNIVERSAL LMS"
        browserUrl="https://examghost.com/compare-canvas-hack-extensions"
        telemetryState={telemetry}
        footer={
          <MotionTimelineScrubber
            scenes={scenes}
            currentScene={currentScene}
            sceneProgress={sceneProgress}
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

          {/* SCENE 0: 58 COMPETITORS AUDITED */}
          {currentScene === 0 && (
            <motion.div
              key="hub-scene-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertCircle className="w-3.5 h-3.5 text-rose-500" />
                  58 Canvas AI Quiz Extensions Audited (2026 Detection Forensic)
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  {sceneProgress > 40 ? 'Critical: 75%+ alternatives trigger integrity flags' : 'Auditing Canvas quiz viewport'}
                </span>
              </div>

              {/* Master Forensic Matrix Grid */}
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center mb-4">
                  <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40">
                    <div className="text-xl sm:text-2xl font-black text-rose-400 font-mono">44 / 58</div>
                    <div className="text-[10px] text-slate-300 uppercase tracking-wider mt-0.5">Inject Visible HTML</div>
                  </div>
                  <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40">
                    <div className="text-xl sm:text-2xl font-black text-rose-400 font-mono">38 / 58</div>
                    <div className="text-[10px] text-slate-300 uppercase tracking-wider mt-0.5">Fire window.blur</div>
                  </div>
                  <div className="p-3 rounded-xl bg-rose-950/40 border border-rose-500/40">
                    <div className="text-xl sm:text-2xl font-black text-rose-400 font-mono">29 / 58</div>
                    <div className="text-[10px] text-slate-300 uppercase tracking-wider mt-0.5">Expose Manifest Files</div>
                  </div>
                  <div className="p-3 rounded-xl bg-amber-950/40 border border-amber-500/40">
                    <div className="text-xl sm:text-2xl font-black text-amber-400 font-mono">52 / 58</div>
                    <div className="text-[10px] text-slate-300 uppercase tracking-wider mt-0.5">$9.99/wk Billing Traps</div>
                  </div>
                </div>

                {sceneProgress > 40 && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 rounded-xl bg-rose-950/80 border border-rose-500 text-xs font-mono text-rose-200"
                  >
                    <span className="font-bold text-rose-300">Honeytrap Warning: </span>
                    Extensions using Chrome SidePanel or external popups lose window focus immediately, generating 30–60 second inactive gaps in Canvas SpeedGrader logs.
                  </motion.div>
                )}
              </div>
            </motion.div>
          )}

          {/* SCENE 1: UNIVERSAL 0.3s SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="hub-scene-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                  ExamGhost Universal LMS Engine (Canvas, Blackboard, Moodle, Brightspace)
                </span>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/40 text-emerald-300 font-bold">
                  0 Blur Flags · Closed Shadow DOM v1
                </span>
              </div>

              {/* LMS Selector Chips */}
              <div className="flex flex-wrap gap-1.5 pb-1">
                {[
                  { id: 'canvas', label: 'Canvas Classic' },
                  { id: 'newquizzes', label: 'New Quizzes (LTI 1.3)' },
                  { id: 'blackboard', label: 'Blackboard Ultra' },
                  { id: 'moodle', label: 'Moodle' },
                  { id: 'brightspace', label: 'Brightspace D2L' },
                ].map((lms) => (
                  <button
                    key={lms.id}
                    type="button"
                    onClick={() => setSelectedLms(lms.id as typeof selectedLms)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all ${
                      selectedLms === lms.id
                        ? 'bg-emerald-500 text-slate-950 font-bold shadow-sm'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    {lms.label}
                  </button>
                ))}
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 mb-2 border-b border-white/10">
                  <span className="text-emerald-400 font-bold">LMS Target: {selectedLms.toUpperCase()}</span>
                  <span className="text-slate-300">Inline 0.3s Solve Active</span>
                </div>

                <p className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed">
                  Universal exam question rendered on {selectedLms}. Double-click solves in 0.3s without leaving the browser tab.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {[
                    { label: 'A', text: 'Universal 0.3s Inline Solve', correct: true },
                    { label: 'B', text: 'Zero DOM Injection (<1ms Closed Shadow DOM)' },
                    { label: 'C', text: 'Alt+S Hybrid Vision + DOM Snip for Locked Diagrams' },
                    { label: 'D', text: '⌘+Shift+U Panic Kill-Switch (<8ms Instant Unmount)' },
                  ].map((opt) => (
                    <div
                      key={opt.label}
                      className={`p-2.5 rounded-xl border flex items-center justify-between ${
                        opt.correct && sceneProgress > 25
                          ? 'bg-emerald-500/20 border-emerald-400 text-white font-bold ring-2 ring-emerald-500/20'
                          : 'bg-white/[0.02] border-white/10 text-slate-400'
                      }`}
                    >
                      <span>{opt.label}) {opt.text}</span>
                      {opt.correct && sceneProgress > 25 && (
                        <span className="px-2 py-0.5 rounded bg-emerald-500 text-slate-950 font-mono text-[10px] font-bold">
                          ✓ 0.3s
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 2: 2-IN-1 STUDY AI SUITE */}
          {currentScene === 2 && (
            <motion.div
              key="hub-scene-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  ExamGhost 2-in-1 Powerhouse (Stealth Extension + Frontier AI Workspace)
                </span>
                <div className="inline-flex rounded-lg bg-white/5 border border-white/10 p-0.5">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md text-[11px] font-bold transition-all ${
                        activeModelTab === m
                          ? 'bg-indigo-600 text-white shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {m === 'claude'
                        ? 'Claude 3.7 Sonnet'
                        : m === 'chatgpt'
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
                    Frontier Multi-Model Academic Workspace
                  </span>
                  <span className="text-[10px] font-mono text-indigo-300 bg-indigo-950/80 px-2 py-0.5 rounded border border-indigo-500/30">
                    {activeModelTab === 'claude'
                      ? 'Claude 3.7: Essays, Reasoning & Synthesis'
                      : activeModelTab === 'chatgpt'
                      ? 'ChatGPT o3-mini/4o: Fast Quantitative STEM & Code'
                      : 'DeepSeek-R1: Step-by-Step LaTeX Derivations'}
                  </span>
                </div>

                <div className="text-xs text-slate-300 leading-relaxed font-sans">
                  {activeModelTab === 'claude' && (
                    <p>
                      <strong>Claude 3.7 Sonnet Specialization:</strong> Long-form humanities essays, complex conceptual logic, multi-page lab reports, and nuanced debate prompts with human-level academic tone.
                    </p>
                  )}
                  {activeModelTab === 'chatgpt' && (
                    <p>
                      <strong>ChatGPT (GPT-4o / o3-mini) Specialization:</strong> Lightning-fast code generation, algorithmic proofs, data structures, and rapid STEM calculations.
                    </p>
                  )}
                  {activeModelTab === 'deepseek' && (
                    <p>
                      <strong>DeepSeek-R1 Specialization:</strong> Chain-of-thought mathematical proofs, physics tensor mechanics, calculus differential equations, and formal symbolic logic.
                    </p>
                  )}
                </div>

                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-slate-400">
                  <span>Included on all paid passes ($19/mo, $99/yr [$8.25/mo], $199 Lifetime)</span>
                  <span className="text-emerald-400 font-bold">5 Free Solves/Day ($0 No Card Needed)</span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </MotionDemoFrame>

      {/* PART 2: INTERACTIVE TCO STACK SAVINGS CALCULATOR */}
      <div className="rounded-[28px] bg-white border border-black/10 p-6 sm:p-8 shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-black/10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-xs font-mono font-bold text-emerald-950 mb-1.5">
              <Calculator className="w-3.5 h-3.5 text-emerald-700" />
              <span>INTERACTIVE TCO SAVINGS CALCULATOR</span>
            </div>
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-ink tracking-tight">
              Calculate Your 2026 Student Subscription Savings
            </h3>
            <p className="text-xs sm:text-sm text-ink-secondary mt-0.5">
              Select what tools you currently pay for to see how much you save with ExamGhost&apos;s 2-in-1 pass.
            </p>
          </div>

          {/* Plan Selector */}
          <div className="inline-flex rounded-xl bg-slate-100 p-1 border border-black/5">
            {[
              { id: 'monthly', label: '$19/mo' },
              { id: 'annual', label: '$99/yr ($8.25/mo)' },
              { id: 'lifetime', label: '$199 Lifetime' },
            ].map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => setSelectedPlan(p.id as typeof selectedPlan)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  selectedPlan === p.id
                    ? 'bg-ink text-white shadow-sm'
                    : 'text-ink-secondary hover:text-ink'
                }`}
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Checkbox List of Separate Subscriptions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mb-6">
          {[
            {
              id: 'quiz',
              label: 'Generic Quiz Solver',
              sub: 'CanvasHack / CheatMate / Apex',
              cost: 25,
              checked: hasQuizExt,
              toggle: () => setHasQuizExt((v) => !v),
            },
            {
              id: 'chatgpt',
              label: 'ChatGPT Plus',
              sub: 'OpenAI o3-mini & GPT-4o',
              cost: 20,
              checked: hasChatGptPlus,
              toggle: () => setHasChatGptPlus((v) => !v),
            },
            {
              id: 'claude',
              label: 'Claude Pro',
              sub: 'Anthropic Claude 3.7 Sonnet',
              cost: 20,
              checked: hasClaudePro,
              toggle: () => setHasClaudePro((v) => !v),
            },
            {
              id: 'coursehero',
              label: 'Course Hero Premier',
              sub: 'Blurred static document unlocks',
              cost: 39.95,
              checked: hasCourseHero,
              toggle: () => setHasCourseHero((v) => !v),
            },
            {
              id: 'chegg',
              label: 'Chegg Study Pack',
              sub: 'Textbook answers library',
              cost: 19.95,
              checked: hasChegg,
              toggle: () => setHasChegg((v) => !v),
            },
          ].map((item) => (
            <label
              key={item.id}
              className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-start gap-3 select-none ${
                item.checked
                  ? 'bg-emerald-50/60 border-emerald-400 ring-2 ring-emerald-400/20'
                  : 'bg-black/[0.02] border-black/10 hover:border-black/20'
              }`}
            >
              <input
                type="checkbox"
                checked={item.checked}
                onChange={item.toggle}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-xs text-ink">{item.label}</span>
                  <span className="font-mono text-xs font-bold text-ink-secondary">${item.cost}/mo</span>
                </div>
                <p className="text-[11px] text-ink-secondary truncate mt-0.5">{item.sub}</p>
              </div>
            </label>
          ))}
        </div>

        {/* TCO Result Callout Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-emerald-950 via-slate-900 to-emerald-950 p-5 text-white flex flex-wrap items-center justify-between gap-4">
          <div>
            <div className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-bold">
              Your Estimated Annual Savings
            </div>
            <div className="text-3xl sm:text-4xl font-black font-display tracking-tight text-white mt-1">
              Save ${annualSavings.toFixed(0)} / year
            </div>
            <p className="text-xs text-slate-300 mt-1">
              Separate tools cost: <span className="line-through text-rose-300 font-mono">${currentYearlyCost.toFixed(0)}/yr</span> (${currentMonthlyCost.toFixed(2)}/mo) vs ExamGhost: <span className="text-emerald-400 font-bold font-mono">${examGhostYearlyCost}/yr</span> (${examGhostMonthlyEq.toFixed(2)}/mo equivalent).
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="px-5 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-emerald-950/40 transition-all flex items-center gap-2"
            >
              <span>Get 2-in-1 Pass</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
