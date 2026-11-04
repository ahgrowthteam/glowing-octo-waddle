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
   1. CHEATMATE VS EXAMGHOST DEMO:
   Systems Programming & Concurrency (CS 241 / CS 340) · C11 Acquire-Release
   Scene 0: CheatMate 10.4s lag, DOM mutation, $9.99/wk auto-rebill, 1 blur flag
   Scene 1: ExamGhost 0.3s inline solve, Option B, closed Shadow DOM, 0 blur events
   Scene 2: Multi-Model Concurrency Derivation (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function CheatmateAcquireReleaseDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. CheatMate 10s Lag',
      title: 'CheatMate: 10.4s Delay, DOM Mutation & $9.99/wk Auto-Rebill',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Double-Click Solve & Focus Shield',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: C11 Acquire-Release Memory Ordering Proof',
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
            speedGrader: 'DOM Mutation Alert: div.answer_text altered · 1 window.blur flag',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · CS 241 Exam in progress',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Closed Shadow DOM Active · Focus Shield',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine · 99.4% Concurrency Consensus',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 30, y: 32, clicking: false, label: 'Reading Concurrency C11 Prompt' };
      } else if (safeProgress < 50) {
        return { x: 45, y: 40, clicking: true, label: 'Click CheatMate: 10s Countdown Trap', tag: 'fail' };
      } else if (safeProgress < 80) {
        return { x: 88, y: 15, clicking: true, label: 'Popup Click fires window.blur!', tag: 'fail' };
      } else {
        return { x: 28, y: 68, clicking: true, label: '10.4s Lag + $9.99/wk Billing Alert', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 35, y: 34, clicking: true, label: 'Double-Click Inline Solve (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 28, y: 64, label: 'Option B Highlighted in Closed Shadow DOM', clicking: false, tag: 'solve' };
      } else {
        return { x: 68, y: 82, label: 'Alt+1 Invisible / ⌘+Shift+U Panic Wipe Ready', clicking: false, tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Happens-Before Proof)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Trap Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (x86 TSO & Fence Assembly)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="CS 241 Systems Programming · Canvas Midterm II"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/54120/quizzes/91024"
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

          {/* SCENE 0: CHEATMATE FAILURE */}
          {currentScene === 0 && (
            <motion.div
              key="cheatmate-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">Question 8 · Concurrency & Memory Ordering</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  Thread 1: atomic_store(&data, 42, relaxed); atomic_store(&flag, 1, release);<br />
                  Thread 2: while (!atomic_load(&flag, acquire)); int val = atomic_load(&data, relaxed);<br />
                  Which memory ordering guarantees hold on x86-64 hardware?
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400" />
                    <span>CheatMate (Study Buddy v4.5) scraping DOM... Mandatory 10-second wait in progress</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">⏱ 08.4s</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>SpeedGrader Alert: MutationObserver caught injected &lt;span class=&quot;study-buddy-highlight&quot;&gt; · window.blur logged!</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">10.4s Lag</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>Billing Notification: $0.99 trial expired → $9.99/week auto-rebill activated ($519.48/yr)</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="cheatmate-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  Thread 1: atomic_store(&data, 42, relaxed); atomic_store(&flag, 1, release);<br />
                  Thread 2: while (!atomic_load(&flag, acquire)); int val = atomic_load(&data, relaxed);
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) Data race occurs because data uses memory_order_relaxed.
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">B) Synchronizes-with established; x86-64 TSO prevents store/load reordering (0 explicit fences needed).</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">0.3s ✓</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                <span className="text-emerald-300">Focus Shield Active · 0 SpeedGrader flags</span>
                <span>Closed Shadow DOM · Alt+1/2/3 · ⌘+Shift+U Ready</span>
              </div>
            </motion.div>
          )}

          {/* SCENE 2: 2-IN-1 STUDY HUB */}
          {currentScene === 2 && (
            <motion.div
              key="cheatmate-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">2-in-1 Study AI Hub · Multi-Model Consensus</span>
                </div>
                <div className="flex rounded-lg bg-black/40 p-1 border border-white/10 gap-1 text-[11px] font-mono">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeModelTab === m ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {m === 'claude' ? 'Claude 3.7 Sonnet' : m === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Formal C11 Release-Acquire Semantics:</strong> A release store on <code className="text-emerald-300">flag</code> synchronizes-with an acquire load on <code className="text-emerald-300">flag</code>. Because Thread 1&apos;s store to <code className="text-emerald-300">data</code> is sequenced-before the release store, an inter-thread happens-before relationship guarantees <code className="text-emerald-300">data == 42</code> is visible to Thread 2 without data races.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Exam Trap Analysis:</strong> Option A fails because relaxed operations on secondary variables ARE synchronized if sequenced before a release operation. Option C is a distractor: Store-Buffer delays in x86 only affect StoreLoad reordering, never Release-Acquire pairs.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    x86-64 Disassembly Proof: GCC -O3 emits plain `movl $1, flag(%rip)` (release) and `movl flag(%rip), %eax` (acquire). On x86 TSO, hardware guarantees store-store and load-load ordering natively; zero `mfence` instructions are needed. Contrast with ARM64 (`stlr`/`ldar`).
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
   2. CHEATPAL VS EXAMGHOST DEMO:
   Molecular Genetics (MCB 102 / BIO 311D) · E. coli Lac Operon Complementation
   Scene 0: Cheatpal floating overlay div, LTI 1.3 iframe access failure, 1 blur flag
   Scene 1: ExamGhost 0.3s solve via Alt+S Hybrid Vision, Option B, closed Shadow DOM
   Scene 2: Multi-Model Jacob-Monod Derivation (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function CheatpalLacOperonDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Cheatpal LTI Failure',
      title: 'Cheatpal: LTI 1.3 Iframe Access Denied & Legacy Overlay Trap',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Alt+S Hybrid Vision Solve & Focus Shield',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Jacob-Monod Cis-Trans Complementation Proof',
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
            speedGrader: 'Security Alert: Cross-origin LTI iframe access denied · 1 window.blur flag',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · Canvas New Quizzes (LTI 1.3)',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Focus Shield Active · Closed Shadow DOM',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine · 99.4% Genetics Consensus',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 30) {
        return { x: 32, y: 34, clicking: false, label: 'Reading Lac Operon Diploid Genotype' };
      } else if (safeProgress < 60) {
        return { x: 48, y: 45, clicking: true, label: 'Cheatpal: div#cheatpal-overlay-container', tag: 'fail' };
      } else {
        return { x: 88, y: 15, clicking: true, label: 'LTI Cross-Origin Block → window.blur!', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 36, y: 32, clicking: true, label: 'Alt+S Hybrid Vision Snip (0.3s)', tag: 'snip' };
      } else if (safeProgress < 70) {
        return { x: 26, y: 64, clicking: false, label: 'Option B Highlighted in Closed Shadow DOM', tag: 'solve' };
      } else {
        return { x: 68, y: 82, clicking: false, label: 'Alt+1 Invisible / Focus Shield Active', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 25, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Jacob-Monod Model)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Cis-Dominance Analysis)', tag: 'default' };
      } else {
        return { x: 75, y: 18, clicking: true, label: 'DeepSeek-R1 (Kd Binding Equilibrium)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="MCB 102 Molecular Genetics · Canvas New Quizzes (LTI 1.3)"
        domainBadge="CANVAS LTI 1.3"
        browserUrl="https://canvas.instructure.com/courses/61204/lti/quiz_launch"
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
            <motion.div key="cp-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">Genetics Midterm · LTI 1.3 Cross-Origin Iframe</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  Merozygote genotype: I⁺ P⁺ Oᶜ Z⁻ Y⁺ / Iˢ P⁺ O⁺ Z⁺ Y⁻.<br />
                  Under glucose absent, lactose present (IPTG added), what is the phenotype for LacZ and LacY?
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
                  Cheatpal injecting floating window &lt;div id=&quot;cheatpal-overlay-container&quot;&gt;... Screen proctoring detection risk high.
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <span className="font-bold">LTI 1.3 Access Denied: Cheatpal script blocked by cross-origin iframe security</span>
                    <span className="text-rose-400 font-mono">window.blur flagged</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-400">
                    Cheatpal fallback: Outdated GPT-3.5 hallucinates Option D (fails to realize Oᶜ acts in cis).
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1 */}
          {currentScene === 1 && (
            <motion.div key="cp-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Alt+S Hybrid Vision</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  Genotype: I⁺ P⁺ Oᶜ Z⁻ Y⁺ / Iˢ P⁺ O⁺ Z⁺ Y⁻ (Lactose Present)
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) Both LacZ and LacY are expressed constitutively.
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">B) LacZ is uninducible (never expressed); LacY is expressed constitutively (always on).</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">0.3s ✓</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                <span className="text-emerald-300">Focus Shield Active · 0 window.blur flags</span>
                <span>Closed Shadow DOM · Alt+S Snip · ⌘+Shift+U Ready</span>
              </div>
            </motion.div>
          )}

          {/* SCENE 2 */}
          {currentScene === 2 && (
            <motion.div key="cp-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">2-in-1 Study AI Hub · Genetics Complementation</span>
                </div>
                <div className="flex rounded-lg bg-black/40 p-1 border border-white/10 gap-1 text-[11px] font-mono">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeModelTab === m ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {m === 'claude' ? 'Claude 3.7 Sonnet' : m === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Jacob-Monod Complementation Matrix:</strong> Chromosome 1 has operator-constitutive mutation <code className="text-emerald-300">Oᶜ</code>, preventing repressor binding in cis. Thus <code className="text-emerald-300">LacY⁺</code> is transcribed constitutively. Chromosome 2 produces super-repressor <code className="text-emerald-300">Iˢ</code>, which acts in trans and binds wild-type <code className="text-emerald-300">O⁺</code> irreversibly, rendering <code className="text-emerald-300">LacZ⁺</code> completely uninducible.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Cis vs Trans Trap:</strong> Operators act STRICTLY in cis upon adjacent genes on the same DNA molecule. Therefore, trans-acting <code className="text-emerald-300">Iˢ</code> cannot suppress the constitutive expression of <code className="text-emerald-300">LacY⁺</code> located downstream of <code className="text-emerald-300">Oᶜ</code>. Cheatpal&apos;s GPT-3.5 misses this fundamental cis-dominance rule.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Thermodynamic Equilibrium Proof: Kd(Iˢ, O⁺) ≈ 10⁻¹³ M vs Kd(Iˢ, Oᶜ) &gt; 10⁻⁷ M. In the presence of IPTG, allosteric transition is lost in Iˢ (ΔG° &gt; 32 kJ/mol), locking wild-type O⁺ permanently shut while Oᶜ remains permanently transcribed. Net: LacZ uninducible, LacY constitutive.
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
   3. SCHOOLCHEATS VS EXAMGHOST DEMO:
   Econometrics & Biostatistics (STAT 420 / ECON 471) · Instrumental Variables 2SLS
   Scene 0: SchoolCheats bookmarklet TypeError, redirects to external retrieve tab, 1 blur flag
   Scene 1: ExamGhost 0.3s inline solve via Double-Click, Option B, closed Shadow DOM
   Scene 2: Multi-Model 2SLS Derivation (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function Schoolcheats2SLSEconometricsDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. SchoolCheats Tab Redirect',
      title: 'SchoolCheats: Bookmarklet Crash & schoolcheats.net/retrieve Redirect',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Double-Click Solve & Focus Shield Active',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: 2SLS Asymptotic Bias & Weak Instrument Proof',
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
            speedGrader: 'Quiz abandoned: Tab redirected to schoolcheats.net/retrieve · 1 window.blur flag',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · ECON 471 Midterm Exam',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Focus Shield Active · Local Browser IP',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine · 99.4% Econometrics Consensus',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 30) {
        return { x: 30, y: 32, clicking: false, label: 'Reading 2SLS Wage Endogeneity Prompt' };
      } else if (safeProgress < 60) {
        return { x: 15, y: 12, clicking: true, label: 'Click SchoolCheats Bookmarklet (TypeError)', tag: 'fail' };
      } else {
        return { x: 85, y: 15, clicking: true, label: 'Redirect to schoolcheats.net/retrieve!', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 35, y: 34, clicking: true, label: 'Double-Click Question Text (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 28, y: 64, clicking: false, label: 'Option B Highlighted in Closed Shadow DOM', tag: 'solve' };
      } else {
        return { x: 68, y: 82, clicking: false, label: 'Alt+1 Invisible / Focus Shield Active', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 25, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Asymptotic Bias 1/F)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Staiger-Stock F > 10 Rule)', tag: 'default' };
      } else {
        return { x: 75, y: 18, clicking: true, label: 'DeepSeek-R1 (Projection Matrix & Non-Normal t)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="ECON 471 Econometrics · Canvas LMS Midterm"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/58340/quizzes/87219"
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
            <motion.div key="sc-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">Question 14 · Instrumental Variables 2SLS</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  ln(Wage_i) = β₀ + β₁ Educ_i + u_i with Cov(Educ_i, u_i) ≠ 0.<br />
                  If Distance to College is instrument Z_i, what conditions are required and what is the asymptotic bias if F &lt; 10?
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
                  SchoolCheats K-12 bookmarklet running: `TypeError: Cannot read properties of undefined` on Canvas quiz engine.
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <span className="font-bold">SpeedGrader Flagged: Browser tab redirected to schoolcheats.net/retrieve</span>
                    <span className="text-rose-400 font-mono">1 window.blur flag</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-400">
                    Bot completion trap: SchoolCheats auto-completes 20-min exam in 1.4 seconds → Datacenter VM IP flag raised.
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1 */}
          {currentScene === 1 && (
            <motion.div key="sc-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Double-Click Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  Instrumental Variables: Cov(Z, Educ) ≠ 0, Cov(Z, u) = 0, F &lt; 10 asymptotic properties
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) Instrument exogeneity only; weak instruments only inflate standard errors.
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">B) Both relevance &amp; exogeneity; if weak (F &lt; 10), 2SLS is asymptotically biased toward OLS.</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">0.3s ✓</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                <span className="text-emerald-300">Focus Shield Active · 0 window.blur flags</span>
                <span>Closed Shadow DOM · Local Browser IP · ⌘+Shift+U Ready</span>
              </div>
            </motion.div>
          )}

          {/* SCENE 2 */}
          {currentScene === 2 && (
            <motion.div key="sc-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">2-in-1 Study AI Hub · Econometric Proofs</span>
                </div>
                <div className="flex rounded-lg bg-black/40 p-1 border border-white/10 gap-1 text-[11px] font-mono">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeModelTab === m ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {m === 'claude' ? 'Claude 3.7 Sonnet' : m === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Formal 2SLS Asymptotic Bias Derivation:</strong> In the first stage Educ = π₀ + π₁Z + v. Bound, Jaeger, and Baker (1995) proved that the asymptotic relative bias of 2SLS relative to OLS satisfies: <code className="text-emerald-300">(plim β̂₂ₛₗₛ - β) / (plim β̂ₒₗₛ - β) ≈ 1 / F</code>. When F &lt; 10, the bias of 2SLS approaches OLS bias!
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Staiger-Stock (1997) Rule of Thumb:</strong> F-statistic on the instrument in the first-stage regression must exceed 10 to ensure maximal 2SLS bias is under 10% of OLS bias. Distance to college also risks violating the exclusion restriction if wealthy suburban parents live closer to elite institutions.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Matrix Algebra Proof: P_Z = Z(Z&apos;Z)⁻¹Z&apos;. When π → 0, the denominator of the 2SLS estimator approaches zero, causing the finite-sample distribution of β̂₂ₛₗₛ to have Cauchy-like thick tails, destroying the validity of conventional Wald t-statistics.
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
   4. TESTBRO VS EXAMGHOST DEMO:
   Constitutional & Administrative Law (LAW 601 / POLS 315) · Loper Bright (2024)
   Scene 0: Right-click disabled, TestBro Side Panel click fires window.blur, credits expire
   Scene 1: ExamGhost 0.3s solve via Alt+S or Double-Click, Option B, closed Shadow DOM
   Scene 2: Multi-Model APA § 706 Derivation (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function TestbroAdminLawDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. TestBro Side Panel Blur',
      title: 'TestBro: Right-Click Disabled, Chrome Side Panel Blur & Expiring Credits',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Inline Double-Click & Focus Shield Active',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: APA § 706 & Loper Bright vs Chevron Derivation',
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
            speedGrader: 'Stopped viewing quiz: window.blur triggered by Chrome Side Panel click',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · LAW 601 Final Exam',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Focus Shield Active · 0 Expiring Credits',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine · 99.4% Legal Rigor',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 30) {
        return { x: 30, y: 32, clicking: true, label: 'Right-Click Disabled (oncontextmenu=false)', tag: 'fail' };
      } else if (safeProgress < 60) {
        return { x: 92, y: 35, clicking: true, label: 'Click Chrome Side Panel → window.blur!', tag: 'fail' };
      } else {
        return { x: 92, y: 65, clicking: false, label: '400 Ask Credits Expired · Balance: 0', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 35, y: 34, clicking: true, label: 'Double-Click Question Prompt (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 28, y: 64, clicking: false, label: 'Option B Highlighted in Closed Shadow DOM', tag: 'solve' };
      } else {
        return { x: 68, y: 82, clicking: false, label: 'Alt+1 Invisible / Alt+3 Legal Citations', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 25, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (APA § 706 Analysis)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Bar Exam Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 75, y: 18, clicking: true, label: 'DeepSeek-R1 (Separation of Powers Lineage)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="LAW 601 Administrative Law · Canvas Final Exam"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/59201/quizzes/88204"
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
            <motion.div key="tb-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">Question 5 · Loper Bright (2024) & APA § 706</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  Under Loper Bright v. Raimondo (2024), overruling Chevron, how must a federal court evaluate an agency interpretation of an ambiguous statutory provision challenged under APA § 706?
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
                  Right-click context menu blocked by page script (`oncontextmenu=&quot;return false;&quot;`). TestBro context menu fails.
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <span className="font-bold">SpeedGrader Flagged: Focus lost to Chrome Side Panel</span>
                    <span className="text-rose-400 font-mono">1 window.blur flag</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-400">
                    TestBro billing trap: 400 Ask Credits expired (30-day limit) · $5.99 re-purchase prompt blocks interface.
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1 */}
          {currentScene === 1 && (
            <motion.div key="tb-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Double-Click Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  Judicial Review of Agency Statutory Interpretation: Loper Bright (2024) &amp; APA § 706
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) Court must defer to agency if interpretation is reasonable (former Chevron Step Two).
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">B) Court exercises independent judgment under APA § 706, considering agency views under Skidmore respect.</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">0.3s ✓</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                <span className="text-emerald-300">Focus Shield Active · 0 window.blur flags</span>
                <span>Closed Shadow DOM · 0 Expiring Credits · ⌘+Shift+U Ready</span>
              </div>
            </motion.div>
          )}

          {/* SCENE 2 */}
          {currentScene === 2 && (
            <motion.div key="tb-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">2-in-1 Study AI Hub · Constitutional Legal Analysis</span>
                </div>
                <div className="flex rounded-lg bg-black/40 p-1 border border-white/10 gap-1 text-[11px] font-mono">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeModelTab === m ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {m === 'claude' ? 'Claude 3.7 Sonnet' : m === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Doctrinal Administrative Law Analysis:</strong> APA § 706 explicitly mandates that &quot;the reviewing court shall decide all relevant questions of law, interpret constitutional and statutory provisions, and determine the meaning of agency action.&quot; Chief Justice Roberts held that Chevron was irreconcilable with § 706 and Article III judicial independence, while affirming that Skidmore v. Swift &amp; Co. (1944) &quot;power to persuade&quot; remains intact.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Bar Exam Distractor Analysis:</strong> Option A states defunct law overruled on June 28, 2024. Option D confuses the Major Questions Doctrine (West Virginia v. EPA, 2022) with general statutory interpretation.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Jurisprudential Lineage Proof: From Marbury v. Madison (&quot;province and duty of judicial department to say what the law is&quot;) through Crowell v. Benson (1932) to APA 1946. Matrix confirms Skidmore respect (proportional to thoroughness, validity of reasoning, consistency) is the constitutional baseline post-Chevron.
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
   5. QUIZMATE VS EXAMGHOST DEMO:
   Fluid Dynamics & Mechanical Engineering (ME 333 / PHYS 310) · Hagen-Poiseuille Flow
   Scene 0: QuizMate DOM button injection, 450px wide explanation card, $7.99/wk tuition trap
   Scene 1: ExamGhost 0.3s inline solve via Double-Click, Option B, closed Shadow DOM
   Scene 2: Multi-Model Navier-Stokes Derivation (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function QuizmateNavierStokesDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. QuizMate DOM Injection',
      title: 'QuizMate: Injected DOM Solve Button & $7.99/wk Tuition Trap',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Inline Double-Click & Focus Shield Active',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Navier-Stokes Cylindrical Integration Proof',
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
            speedGrader: 'DOM Mutation Warning: Injected button on div#question_9281 · 1 window.blur flag',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · ME 333 Fluid Dynamics Exam',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Focus Shield Active · 0 Injected DOM Buttons',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine · 99.4% Engineering Consensus',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 30) {
        return { x: 30, y: 32, clicking: false, label: 'Reading Navier-Stokes Pipe Flow Question' };
      } else if (safeProgress < 60) {
        return { x: 48, y: 45, clicking: true, label: 'Click Injected Green Button &lt;button class=&quot;quizmate-btn&quot;&gt;', tag: 'fail' };
      } else {
        return { x: 88, y: 15, clicking: true, label: 'Switch Tab to QuizMate Hub → window.blur!', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 35, y: 34, clicking: true, label: 'Double-Click Formula Stem (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 28, y: 64, clicking: false, label: 'Option B Highlighted in Closed Shadow DOM', tag: 'solve' };
      } else {
        return { x: 68, y: 82, clicking: false, label: 'Alt+1 Invisible / ⌘+Shift+U Panic Wipe Ready', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 25, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Navier-Stokes Cylindrical PDE)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Hagen-Poiseuille R⁴ Scaling)', tag: 'default' };
      } else {
        return { x: 75, y: 18, clicking: true, label: 'DeepSeek-R1 (Centerline Velocity & Shear Stress)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="ME 333 Fluid Mechanics · Canvas LMS Exam"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/52119/quizzes/89402"
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
            <motion.div key="qm-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">Question 11 · Hagen-Poiseuille Laminar Pipe Flow</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  For steady, incompressible laminar flow through circular pipe radius R driven by ΔP, determine centerline velocity u_max and flow rate Q scaling with radius R.
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
                  QuizMate Tutor injecting green button into Canvas quiz DOM... MutationObserver listener firing.
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <span className="font-bold">SpeedGrader Flagged: Foreign elements appended to host DOM · 1 window.blur flag</span>
                    <span className="text-rose-400 font-mono">$7.99/wk Auto-Rebill</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-400">
                    Shoulder-surfing risk: QuizMate opens a 450px wide visible panel directly on the student&apos;s exam screen.
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1 */}
          {currentScene === 1 && (
            <motion.div key="qm-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Double-Click Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  Navier-Stokes Cylindrical Solution: u_max = (ΔP R²) / (4μL) and Q = (π ΔP R⁴) / (8μL)
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) u_max = (ΔP R²) / (2μL); volumetric flow rate scales as Q ∝ R².
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">B) u_max = (ΔP R²) / (4μL); volumetric flow rate scales as Q = (π ΔP R⁴) / (8μL) (quartic R⁴).</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">0.3s ✓</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                <span className="text-emerald-300">Focus Shield Active · 0 Injected DOM Buttons</span>
                <span>Closed Shadow DOM · ⌘+Shift+U Ready (&lt;8ms wipe)</span>
              </div>
            </motion.div>
          )}

          {/* SCENE 2 */}
          {currentScene === 2 && (
            <motion.div key="qm-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">2-in-1 Study AI Hub · Fluid Dynamics Proof</span>
                </div>
                <div className="flex rounded-lg bg-black/40 p-1 border border-white/10 gap-1 text-[11px] font-mono">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeModelTab === m ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {m === 'claude' ? 'Claude 3.7 Sonnet' : m === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Cylindrical Navier-Stokes PDE Integration:</strong> In cylindrical coordinates (r, θ, z), the axial momentum equation reduces to: <code className="text-emerald-300">(1/r) d/dr [ r du/dr ] = (1/μ) dP/dz = -ΔP / (μL)</code>. Integrating twice with boundary conditions u(R) = 0 and finite centerline velocity yields the parabolic profile <code className="text-emerald-300">u(r) = [ΔP / (4μL)] (R² - r²)</code>.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Hagen-Poiseuille Quartic Scaling:</strong> Integrating volumetric flow rate <code className="text-emerald-300">Q = ∫₀ᴿ 2πr u(r) dr = 2π [ΔP / (4μL)] ∫₀ᴿ (R²r - r³) dr = (π ΔP R⁴) / (8μL)</code>. Doubling pipe radius increases flow rate by a factor of 2⁴ = 16!
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Shear Stress &amp; Boundary Conditions: Wall shear stress τ_w = -μ (du/dr)|_{`r=R`} = (ΔP R) / (2L). Centerline maximum velocity occurs at r=0 where du/dr = 0: u_max = (ΔP R²) / (4μL). Proves Option B rigorously.
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
   6. QUIZPER VS EXAMGHOST DEMO:
   Molecular Genetics (GEN 304 / BIOCHEM 410) · CRISPR-Cas9 SpCas9 PAM & HDR Repair
   Scene 0: Quizper blue DOM mutation, isTrusted: false synthetic event, exposed BYOK key
   Scene 1: ExamGhost 0.3s inline solve via Double-Click in closed Shadow DOM, Option B
   Scene 2: Multi-Model CRISPR-Cas9 Derivation (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function QuizperByokDomTrapDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Quizper DOM Mutation',
      title: 'Quizper: Blue DOM Mutation Flag & Exposed BYOK Developer Key',
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
      title: 'Study AI Hub: CRISPR-Cas9 SpCas9 PAM & HDR Repair Mechanics',
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
            speedGrader: 'MutationObserver Flagged! style="color: blue" · isTrusted: false synthetic event',
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
          speedGrader: '0 window.blur flags · Closed Shadow DOM Active · 0 DOM mutations',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine · 99.4% STEM Consensus',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 32, y: 34, clicking: false, label: 'Reading CRISPR-Cas9 Target Question' };
      } else if (safeProgress < 50) {
        return { x: 45, y: 40, clicking: true, label: 'Click Injected Quizper Button', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 28, y: 64, clicking: false, label: 'Inline style="color: blue" mutated in DOM!', tag: 'fail' };
      } else {
        return { x: 82, y: 16, clicking: true, label: 'Console: sk-proj-... exposed!', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 35, y: 34, clicking: true, label: 'Double-Click Question Text (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 28, y: 64, clicking: false, label: 'Option B Softly Highlighted in Closed Shadow DOM', tag: 'solve' };
      } else {
        return { x: 68, y: 82, clicking: false, label: 'Alt+1 Invisible / ⌘+Shift+U Panic Wipe', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 33) {
        return { x: 25, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Structural PAM Recognition)', tag: 'default' };
      } else if (safeProgress < 66) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (DNA Repair Pathway Matrix)', tag: 'default' };
      } else {
        return { x: 75, y: 18, clicking: true, label: 'DeepSeek-R1 (R-Loop Energetics Proof)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="GEN 304 Molecular Genetics · Canvas Quiz Viewport"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/53190/quizzes/86104"
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
            <motion.div key="qp-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">Question 9 · CRISPR-Cas9 Target Recognition & Repair</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  In SpCas9 genome editing of HBB gene to correct sickle-cell mutation, which PAM motif is required 3&apos; of the gRNA, and which pathway mediates error-free single-base knock-ins with ssODN donor?
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
                  Quizper Auto-Assist running: mutating host DOM labels with `style=&quot;color: blue; background: #dbeafe&quot;`...
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <span className="font-bold">MutationObserver Listener Triggered: Injected inline styling &amp; synthetic isTrusted=false event</span>
                    <span className="text-rose-400 font-mono">FLAGGED</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-400">
                    Console Leak: Unencrypted OpenAI API key `sk-proj-...` exposed in client script.
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1 */}
          {currentScene === 1 && (
            <motion.div key="qp-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Double-Click Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  SpCas9 PAM: 5&apos;-NGG-3&apos; | Error-Free Knock-In: Homology-Directed Repair (HDR)
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) 5&apos;-TTN-3&apos; PAM; Non-Homologous End Joining (NHEJ)
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">B) 5&apos;-NGG-3&apos; PAM; Homology-Directed Repair (HDR) with ssODN donor template.</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">0.3s ✓</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                <span className="text-emerald-300">Focus Shield Active · 0 Host DOM Modifications</span>
                <span>Closed Shadow DOM · Natural Click (isTrusted: true)</span>
              </div>
            </motion.div>
          )}

          {/* SCENE 2 */}
          {currentScene === 2 && (
            <motion.div key="qp-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">2-in-1 Study AI Hub · CRISPR-Cas9 Mechanics</span>
                </div>
                <div className="flex rounded-lg bg-black/40 p-1 border border-white/10 gap-1 text-[11px] font-mono">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeModelTab === m ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {m === 'claude' ? 'Claude 3.7 Sonnet' : m === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Structural PAM Recognition:</strong> Streptococcus pyogenes Cas9 requires a canonical <code className="text-emerald-300">5&apos;-NGG-3&apos;</code> protospacer adjacent motif, recognized by Cas9 PI domain residues Arg1333 and Arg1335. Double-strand breaks occur 3 bp upstream of PAM. Knock-in requires Homology-Directed Repair (HDR) via Rad51 nucleoprotein filament assembly active in S/G2 phase.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>DNA Repair Pathway Matrix:</strong> NHEJ is error-prone (Ku70/Ku80) and creates indels. HDR is high-fidelity and requires an exogenous donor template (ssODN) with &ge; 40 bp homology arms. Without ssODN, NHEJ dominates, ruining point mutation repair.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    R-Loop Energetics: ΔG(R-loop) &lt; 0 coupled to PAM binding (Kd ≈ 10 nM). Thermodynamic mismatch penalties across base pairs 1–10 (seed region) prevent off-target cleavage. Validates Option B with mathematical rigor.
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
   7. CAMPUSAI VS EXAMGHOST DEMO:
   Intermediate Microeconomics (ECON 301 / ECON 410) · Asymmetric Cournot Duopoly
   Scene 0: Campus AI Chrome sidePanel opens, document.hasFocus() false, 34.2s SpeedGrader gap
   Scene 1: ExamGhost 0.3s solve via Double-Click in closed Shadow DOM, Option A
   Scene 2: Multi-Model Reaction Function Derivation (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function CampusAiSidepanelBlurDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Campus AI sidePanel Blur',
      title: 'Campus AI: Native sidePanel Focus Loss & 34.2s SpeedGrader Departure',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Inline Double-Click & Focus Shield Active',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Cournot-Nash Reaction Functions & Deadweight Loss',
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
            speedGrader: '1 window.blur flag · 34.2s Away in Chrome sidePanel · document.hasFocus() = false',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 blur flags · ECON 301 Quiz in progress',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Focus Shield Active · document.hasFocus() = true',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine · Zero Cloud Retention',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 30, y: 32, clicking: false, label: 'Reading Cournot Demand: P = 180 - 3(q1 + q2)' };
      } else if (safeProgress < 50) {
        return { x: 48, y: 38, clicking: true, label: 'Click Campus AI Injected Button', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 92, y: 40, clicking: true, label: 'Click Chrome sidePanel → window.blur Logged!', tag: 'fail' };
      } else {
        return { x: 92, y: 65, clicking: false, label: 'Screenshot Uploaded to Memory Bank Cloud', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 34, y: 32, clicking: true, label: 'Double-Click Prompt (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 26, y: 62, clicking: false, label: 'Option A Highlighted in Closed Shadow DOM HUD', tag: 'solve' };
      } else {
        return { x: 70, y: 82, clicking: false, label: 'Alt+2 Stealth Dot / Alt+3 Step-Through', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 33) {
        return { x: 25, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Reaction Curves)', tag: 'default' };
      } else if (safeProgress < 66) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Deadweight Loss Integral)', tag: 'default' };
      } else {
        return { x: 75, y: 18, clicking: true, label: 'DeepSeek-R1 (Dynamical Stability Proof)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="ECON 301 Intermediate Microeconomics · Canvas Quiz Viewport"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/55219/quizzes/87410"
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
            <motion.div key="cai-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">Question 7 · Cournot Duopoly with Asymmetric Costs</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  P = 180 - 3(q₁ + q₂), MC₁ = 15, MC₂ = 30. Determine Cournot-Nash outputs (q₁*, q₂*), market price P*, and Deadweight Loss (DWL).
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
                  Campus AI opening Chrome native sidePanel (`openPanelOnActionClick: true`)...
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <span className="font-bold">SpeedGrader Flagged: Focus shifted to Chrome sidePanel · 34.2s departure logged</span>
                    <span className="text-rose-400 font-mono">window.blur flagged</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-400">
                    Privacy Warning: Exam screenshot uploaded to persistent Memory Bank on `dashboard.thecampusai.com`.
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1 */}
          {currentScene === 1 && (
            <motion.div key="cai-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Double-Click Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  Cournot-Nash: q₁* = 20, q₂* = 15, P* = 75, DWL = 262.50
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">A) q₁* = 20, q₂* = 15, P* = 75, DWL = 262.50</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">0.3s ✓</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  B) q₁* = 18, q₂* = 18, P* = 72, DWL = 216.00
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                <span className="text-emerald-300">Focus Shield Active · document.hasFocus() = true</span>
                <span>Closed Shadow DOM · Zero Cloud Storage Retention</span>
              </div>
            </motion.div>
          )}

          {/* SCENE 2 */}
          {currentScene === 2 && (
            <motion.div key="cai-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">2-in-1 Study AI Hub · Game Theory & Microeconomics</span>
                </div>
                <div className="flex rounded-lg bg-black/40 p-1 border border-white/10 gap-1 text-[11px] font-mono">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeModelTab === m ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {m === 'claude' ? 'Claude 3.7 Sonnet' : m === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Reaction Function Derivation:</strong> Firm 1: MR₁ = 180 - 6q₁ - 3q₂ = 15 ⇒ q₁ = 27.5 - 0.5q₂. Firm 2: MR₂ = 180 - 3q₁ - 6q₂ = 30 ⇒ q₂ = 25 - 0.5q₁. Substituting yields <code className="text-emerald-300">q₁* = 20, q₂* = 15</code>. Total Q* = 35, P* = 180 - 3(35) = 75.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Deadweight Loss Calculation:</strong> In competitive benchmark, lowest-cost firm produces at P = MC₁ = 15 ⇒ Q_c = 55. Evaluated consumer surplus loss plus allocative distortion across Firm 2 yields exact <code className="text-emerald-300">DWL = 262.50</code>.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Dynamic Stability Proof: Jacobian eigenvalues λ₁, λ₂ = ±0.5. Since |λ| &lt; 1, Cournot equilibrium is globally asymptotically stable. Zero cloud leaks compared to Campus AI&apos;s external dashboard.
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
   8. ASKSIA VS EXAMGHOST DEMO:
   Multivariable Calculus (MATH 234 / MATH 251) · Divergence Theorem (Gauss's Theorem)
   Scene 0: AskSia external course importer, 48.5s tab departure to asksia.ai, 1 blur flag
   Scene 1: ExamGhost 0.3s solve via Alt+S Hybrid Vision OCR, Option A, closed Shadow DOM
   Scene 2: Multi-Model Flux Integral Derivation (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function AskSiaCourseScraperDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. AskSia Tab Departure',
      title: 'AskSia: External Course Importer & 48.5s SpeedGrader Tab Departure',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Alt+S Hybrid Vision Solve & Focus Shield',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Divergence Theorem & Spherical Coordinates Proof',
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
            speedGrader: '1 window.blur flag · 48.5s Departure to asksia.ai · Dead Mouse Gap',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 blur flags · MATH 234 Final Exam',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Focus Shield Active · Closed Shadow DOM',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine · 99.4% STEM Consensus',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 32, y: 34, clicking: false, label: 'Reading Vector Flux Integral Prompt' };
      } else if (safeProgress < 50) {
        return { x: 48, y: 38, clicking: true, label: 'Click Sync to AskSia Button', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 88, y: 15, clicking: true, label: 'Switch Tab to asksia.ai → window.blur!', tag: 'fail' };
      } else {
        return { x: 26, y: 72, clicking: true, label: 'Paste Answer (48.5s elapsed)', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 36, y: 32, clicking: true, label: 'Alt+S Hybrid Vision Snip on LaTeX (0.3s)', tag: 'snip' };
      } else if (safeProgress < 70) {
        return { x: 26, y: 64, clicking: false, label: 'Option A Highlighted in Closed Shadow DOM HUD', tag: 'solve' };
      } else {
        return { x: 65, y: 82, clicking: false, label: 'Alt+1 Invisible / Alt+3 Step Derivation', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 33) {
        return { x: 25, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Divergence Calculation)', tag: 'default' };
      } else if (safeProgress < 66) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Spherical Integral Execution)', tag: 'default' };
      } else {
        return { x: 75, y: 18, clicking: true, label: 'DeepSeek-R1 (Radial Shell Symmetry Proof)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="MATH 234 Multivariable Calculus · Canvas Final Exam"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/57218/quizzes/89021"
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
            <motion.div key="ask-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">Question 12 · Gauss&apos;s Divergence Theorem</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  Evaluate surface flux ∬_S F · dS for F = (x³ + sin(yz))i + (y³ + cos(xz))j + (z³ + e^xy)k over unit sphere x² + y² + z² ≤ 1.
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
                  AskSia has zero inline quiz solver—requires copying question and switching tabs to external asksia.ai workspace...
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <span className="font-bold">SpeedGrader Flagged: 48.5s tab abandonment logged while in asksia.ai</span>
                    <span className="text-rose-400 font-mono">window.blur flagged</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-400">
                    Paywall notification: AskSia DeltaMath import quota reached · $25/mo upgrade required.
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1 */}
          {currentScene === 1 && (
            <motion.div key="ask-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Alt+S Hybrid Vision Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  ∇ · F = 3(x² + y² + z²) ⇒ Flux Φ = 12π/5
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">A) Φ = 12π/5</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">0.3s ✓</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  B) Φ = 4π
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                <span className="text-emerald-300">Focus Shield Active · 0 window.blur flags</span>
                <span>Closed Shadow DOM · 0 External Tab Departures</span>
              </div>
            </motion.div>
          )}

          {/* SCENE 2 */}
          {currentScene === 2 && (
            <motion.div key="ask-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">2-in-1 Study AI Hub · Vector Calculus</span>
                </div>
                <div className="flex rounded-lg bg-black/40 p-1 border border-white/10 gap-1 text-[11px] font-mono">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeModelTab === m ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {m === 'claude' ? 'Claude 3.7 Sonnet' : m === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Divergence Theorem:</strong> ∬_S F · dS = ∭_V (∇ · F) dV. Divergence: ∂/∂x(x³ + sin(yz)) + ∂/∂y(y³ + cos(xz)) + ∂/∂z(z³ + e^xy) = <code className="text-emerald-300">3x² + 3y² + 3z² = 3(x² + y² + z²)</code>.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Spherical Coordinates Integration:</strong> In spherical coordinates, x² + y² + z² = ρ² and dV = ρ² sinφ dρ dφ dθ. Integrating ρ from 0 to 1, φ from 0 to π, and θ from 0 to 2π gives: <code className="text-emerald-300">3 · (2π) · (2) · (1/5) = 12π/5</code>.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Radial Shell Symmetry: By spherical isotropy, volume integral reduces to concentric spherical shells of area 4πr²: ∫₀¹ 3r²(4πr²) dr = 12π [r⁵/5]₀¹ = 12π/5. Option A verified.
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
   9. BRAINLY VS EXAMGHOST DEMO:
   Organic Chemistry II (CHEM 242 / CHEM 330) · Diels-Alder [4+2] FMO Regiochemistry
   Scene 0: Brainly unverified student comments, 52.1s tab departure, honeypot fail
   Scene 1: ExamGhost 0.3s solve via Double-Click in closed Shadow DOM, Option A
   Scene 2: Multi-Model FMO & Alder Endo Rule Derivation (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function BrainlyCrowdsourcedForumDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Brainly Forum Guesswork',
      title: 'Brainly: Crowdsourced Forum Guesswork & 52.1s SpeedGrader Departure',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Double-Click Solve & Focus Shield Active',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Frontier Molecular Orbital (FMO) Theory & Alder Endo Rule',
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
            speedGrader: '1 window.blur flag · 52.1s Departure to brainly.com · Honeypot Risk',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 blur flags · CHEM 242 Midterm in progress',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Focus Shield Active · 0 clipboard events',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine · 99.4% STEM Consensus',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 32, y: 34, clicking: false, label: 'Reading Diels-Alder Regiochemistry Prompt' };
      } else if (safeProgress < 50) {
        return { x: 88, y: 15, clicking: true, label: 'Switch Tab to brainly.com → window.blur Logged!', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 52, y: 48, clicking: true, label: 'Ad Paywall: $9.99/mo + Contradictory Posts', tag: 'fail' };
      } else {
        return { x: 28, y: 68, clicking: true, label: 'Return to Canvas @ 52.1s (Honeypot Copied)', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 35, y: 34, clicking: true, label: 'Double-Click Question Text (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 26, y: 64, clicking: false, label: 'Option A Highlighted in Closed Shadow DOM HUD', tag: 'solve' };
      } else {
        return { x: 68, y: 80, clicking: false, label: 'Alt+1 Invisible / Alt+3 Molecular Orbital View', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 33) {
        return { x: 25, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (HOMO-LUMO Overlap)', tag: 'default' };
      } else if (safeProgress < 66) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Secondary Orbital Interactions)', tag: 'default' };
      } else {
        return { x: 75, y: 18, clicking: true, label: 'DeepSeek-R1 (Kinetic Control Proof)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="CHEM 242 Organic Chemistry II · Canvas Midterm"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/56102/quizzes/88029"
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
            <motion.div key="br-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">Question 10 · Diels-Alder [4+2] Regio- and Stereochemistry</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  Thermal reaction between 1-methoxy-1,3-butadiene and methyl acrylate under kinetic control: Predict major product.
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
                  Searching Brainly crowdsourced answers... Contradicting user answers: &quot;Answer is B not A!&quot; vs &quot;It&apos;s exo due to steric bulk!&quot;
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <span className="font-bold">SpeedGrader Flagged: 52.1s tab absence logged · Honeypot trap question copied</span>
                    <span className="text-rose-400 font-mono">window.blur flagged</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-400">
                    Brainly Plus paywall popup ($9.99/mo) blocked access until video ad watched.
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1 */}
          {currentScene === 1 && (
            <motion.div key="br-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Double-Click Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  1-Methoxy-1,3-butadiene + Methyl Acrylate ⇒ Methyl 2-methoxycyclohex-3-ene-1-carboxylate (ortho, endo)
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">A) Methyl 2-methoxycyclohex-3-ene-1-carboxylate (ortho, endo isomer)</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">0.3s ✓</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  B) Methyl 4-methoxycyclohex-3-ene-1-carboxylate (para, exo isomer)
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                <span className="text-emerald-300">Focus Shield Active · 0 window.blur flags</span>
                <span>Closed Shadow DOM · 0 Clipboard Events · 0 Honeypot Vulnerabilities</span>
              </div>
            </motion.div>
          )}

          {/* SCENE 2 */}
          {currentScene === 2 && (
            <motion.div key="br-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">2-in-1 Study AI Hub · Organic Chemistry Derivation</span>
                </div>
                <div className="flex rounded-lg bg-black/40 p-1 border border-white/10 gap-1 text-[11px] font-mono">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeModelTab === m ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {m === 'claude' ? 'Claude 3.7 Sonnet' : m === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>FMO Theory Regiochemistry:</strong> Diene C1-methoxy (+M) places largest HOMO coefficient at C4. Dienophile methyl acrylate (-M) places largest LUMO coefficient at C3 (terminal). Aligning large-with-large orbital coefficients yields the <code className="text-emerald-300">1,2-disubstituted (ortho)</code> regiochemistry.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Alder Endo Rule Stereochemistry:</strong> Secondary orbital interaction between the dienophile carbonyl π* orbital and diene developing C2-C3 double bond lowers the transition state activation barrier, favoring the <code className="text-emerald-300">endo</code> orientation under kinetic control.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Activation Energy Proof: ΔΔG‡ = 1.8 kcal/mol favoring endo isomer at 25°C, yielding endo:exo ratio &gt; 95:5. Disproves Brainly crowdsourced student comments claiming exo due to steric hindrance.
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
   10. CRAMLY VS EXAMGHOST DEMO:
   Philosophy of Mind & Cognitive Science (PHIL 315 / COGS 201) · Searle's Chinese Room
   Scene 0: Cramly essay generator in external tab, 44.8s departure, 95% AI detection flag
   Scene 1: ExamGhost 0.3s solve via Double-Click in closed Shadow DOM, Option A
   Scene 2: Multi-Model Searle Chinese Room Derivation (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function CramlyEssayVsQuizDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Cramly Essay Tab Switch',
      title: 'Cramly AI: Essay Generator in External Tab & 44.8s SpeedGrader Departure',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Double-Click Solve & Focus Shield Active',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Searle\'s Chinese Room, Syntax vs Semantics & Intentionality',
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
            speedGrader: '1 window.blur flag · 44.8s Departure to cramly.ai · 95% AI Detection Risk',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 blur flags · PHIL 315 Exam in progress',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Focus Shield Active · Closed Shadow DOM',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine · 99.4% Philosophical Rigor',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 32, y: 34, clicking: false, label: 'Reading Searle Chinese Room Prompt' };
      } else if (safeProgress < 50) {
        return { x: 88, y: 15, clicking: true, label: 'Switch Tab to cramly.ai → window.blur Logged!', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 50, y: 55, clicking: false, label: 'Cramly generates 300w generic essay filler', tag: 'fail' };
      } else {
        return { x: 28, y: 68, clicking: true, label: 'Alt-Tab back to Canvas @ 44.8s (Turnitin Flag)', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 35, y: 34, clicking: true, label: 'Double-Click Question Prompt (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 26, y: 64, clicking: false, label: 'Option A Highlighted in Closed Shadow DOM HUD', tag: 'solve' };
      } else {
        return { x: 68, y: 80, clicking: false, label: 'Alt+1 Invisible / Alt+3 Philosophical Derivation', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 33) {
        return { x: 25, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Searle\'s Formal Syllogism)', tag: 'default' };
      } else if (safeProgress < 66) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Functionalism & Systems Reply)', tag: 'default' };
      } else {
        return { x: 75, y: 18, clicking: true, label: 'DeepSeek-R1 (Turing Equivalence Proof)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="PHIL 315 Philosophy of Mind · Canvas Exam Viewport"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/58129/quizzes/89418"
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
            <motion.div key="cr-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">Question 6 · Searle&apos;s Chinese Room &amp; Intentionality</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  Which distinction between syntax and semantics refutes Strong AI, and how does Searle&apos;s Systems Reply counter-rebuttal show program execution is insufficient for intentionality?
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
                  Cramly is an essay writer with zero inline quiz solver—switching tabs to cramly.ai/essay...
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <span className="font-bold">SpeedGrader Flagged: 44.8s tab departure logged · 95% Turnitin AI detection</span>
                    <span className="text-rose-400 font-mono">window.blur flagged</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-400">
                    Cramly billing: $19.99/mo for essay templates with zero exam stealth or LMS protection.
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1 */}
          {currentScene === 1 && (
            <motion.div key="cr-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Double-Click Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  Syntax vs Semantics: Syntax is neither constitutive of nor sufficient for semantics.
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">A) Syntax is neither constitutive of nor sufficient for semantics; room system merely manipulates ungrounded symbols.</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">0.3s ✓</span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  B) Syntax generates emergent semantics when recursive state complexity exceeds critical threshold.
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                <span className="text-emerald-300">Focus Shield Active · 0 window.blur flags</span>
                <span>Closed Shadow DOM · Zero AI Detection Prose Footprint</span>
              </div>
            </motion.div>
          )}

          {/* SCENE 2 */}
          {currentScene === 2 && (
            <motion.div key="cr-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">2-in-1 Study AI Hub · Cognitive Science Derivations</span>
                </div>
                <div className="flex rounded-lg bg-black/40 p-1 border border-white/10 gap-1 text-[11px] font-mono">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeModelTab === m ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {m === 'claude' ? 'Claude 3.7 Sonnet' : m === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Searle&apos;s Formal Syllogism:</strong> Premise 1: Programs are purely formal/syntactic. Premise 2: Human minds have mental contents (semantics/intentionality). Premise 3: Syntax by itself is neither constitutive of nor sufficient for semantics. Conclusion: Programs are not minds. Systems Reply refutation: If the person internalizes all rules, they ARE the system—yet understand zero Chinese.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Strong AI vs Weak AI:</strong> Weak AI uses computers to simulate mental processes. Strong AI claims an appropriately programmed computer literally IS a mind. Option A correctly captures Searle&apos;s refutation of functionalism.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Grounding &amp; AI Watermarking Contrast: Tokenized transformer generation without embodied semantic grounding produces detectable statistical patterns (Cramly&apos;s 95% Turnitin score), whereas ExamGhost provides precision academic verification.
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
   11. HOMEWORKIFY VS EXAMGHOST DEMO:
   Dynamics & Vibrations (ENGR 2302 / MATH 3301) · 2nd-Order Damped ODE
   Scene 0: Homeworkify dead domain, adware redirect, 48.2s tab gap, wrong 2018 answer
   Scene 1: ExamGhost 0.3s solve via Double-Click / Alt+S, Option D (3.54 m), closed Shadow DOM
   Scene 2: Multi-Model Undetermined Coefficients Derivation (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function HomeworkifyDeadMirrorDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Dead Mirror Fail',
      title: 'Homeworkify: 48.2s Dead Domain Redirect & Malware Trap',
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
      title: 'Study AI Hub: Multi-Model Differential Equations Derivation',
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
            speedGrader: '1 window.blur flag · 48.2s Inactive Gap Logged · Shady Mirror Redirect',
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
          speedGrader: '0 window.blur flags · Focus Shield Active · Closed Shadow DOM',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine · 99.4% Engineering Rigor',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 28, y: 32, clicking: false, label: 'Reading Question Stem' };
      } else if (safeProgress < 50) {
        return { x: 44, y: 36, clicking: true, label: 'Copy Prompt (document.oncopy logged)', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 88, y: 14, clicking: true, label: 'Tab Switch → homeworkify.im mirror', tag: 'fail' };
      } else {
        return { x: 32, y: 72, clicking: true, label: 'Pasting Stale 2018 Answer 1.77m (0/10 Fail)', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 36, y: 32, clicking: true, label: 'Double-Click (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 56, y: 50, clicking: false, label: 'Alt+S: Hybrid Vision + DOM Snip', tag: 'snip' };
      } else {
        return { x: 68, y: 72, clicking: false, label: 'Option D Selected · 0 Blur Flags', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 Chain-of-Thought', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="ENGR 2302 Dynamics & Vibrations · Canvas Midterm II"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/51829/quizzes/90241"
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
            <motion.div key="hw-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">Question 8 · Mechanical Suspension ODE</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  y&apos;&apos; + 4y&apos; + 20y = 100 cos(2t), y(0) = 0, y&apos;(0) = 5. Calculate exact position y(π/4) in meters.
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
                  Switching tab to `homeworkify.im` mirror... Cloudflare Turnstile captcha + intrusive adware alert.
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <span className="font-bold">SpeedGrader Flagged: Student left quiz page for 48.2s · document.oncopy logged</span>
                    <span className="text-rose-400 font-mono">window.blur flagged</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-400">
                    Scraper fail: Stale 2018 match assumed y&apos;&apos; + 2y&apos; + 10y = 50 cos(t), giving Option A (1.77 m · 0/10 FAIL).
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1 */}
          {currentScene === 1 && (
            <motion.div key="hw-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Double-Click Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  yp(t) = 5 cos(2t) + 2.5 sin(2t) ⇒ exact y(π/4) = 5e^(-π/2) + 2.50 = 3.54 m
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) y(π/4) = 1.77 m (Stale Chegg match)
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">D) y(π/4) = 3.54 m (yp(t) = 5.59 cos(2t - 26.6°); exact y(π/4) ≈ 3.54 m)</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">0.3s ✓</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                <span className="text-emerald-300">Focus Shield Active · 0 window.blur flags</span>
                <span>Closed Shadow DOM · Alt+1 Invisible · ⌘+Shift+U Ready</span>
              </div>
            </motion.div>
          )}

          {/* SCENE 2 */}
          {currentScene === 2 && (
            <motion.div key="hw-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">2-in-1 Study AI Hub · Differential Equations</span>
                </div>
                <div className="flex rounded-lg bg-black/40 p-1 border border-white/10 gap-1 text-[11px] font-mono">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeModelTab === m ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {m === 'claude' ? 'Claude 3.7 Sonnet' : m === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Particular &amp; Complementary Solution:</strong> Undetermined coefficients with yp = A cos 2t + B sin 2t gives 16A + 8B = 100 and -8A + 16B = 0 ⇒ A = 5, B = 2.5. Characteristic equation r² + 4r + 20 = 0 has roots r = -2 ± 4i. Applying y(0) = 0 and y&apos;(0) = 5 yields yc = e^(-2t)(-5 cos 4t - 2.5 sin 4t).
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Bode Phase Lag &amp; Frequency Response:</strong> Transfer function H(s) = 1/(s² + 4s + 20). At driving frequency ω = 2 rad/s, complex impedance yields steady-state amplitude Y = 5.59 and phase delay δ = arctan(0.5) = 26.57°.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    IVP Evaluation at t = π/4: 2t = π/2 ⇒ cos=0, sin=1; 4t = π ⇒ cos=-1, sin=0. y(π/4) = e^(-π/2)(5) + 2.5(1) = 5(0.20788) + 2.5 = 3.5394 m ≈ 3.54 m. Disproves static Chegg scrapers.
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
   12. QUIZPLUS VS EXAMGHOST DEMO:
   Corporate Finance (FIN 301 / ACC 201) · MACRS Capital Budgeting & WACC
   Scene 0: Quizplus delisted extension, tab switch to quizplus.com, $24.99/mo paywall, 35% tax error
   Scene 1: ExamGhost 0.3s solve via Double-Click / Alt+S, Option C ($138,422), closed Shadow DOM
   Scene 2: Multi-Model Capital Budgeting Derivation (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function QuizplusStaticBankPaywallDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Static Bank Fail',
      title: 'Quizplus: 36.4s Tab-Switch & $24.99/mo Blurred Paywall',
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
      title: 'Study AI Hub: Corporate Finance & DCF Model Verification',
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
            speedGrader: '1 window.blur flag · 36.4s Inactive Gap Logged · Quizplus.com search',
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
          speedGrader: '0 window.blur flags · Focus Shield Active · Closed Shadow DOM',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine · 99.4% Finance Consensus',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 28, y: 32, clicking: false, label: 'Reading Question Stem' };
      } else if (safeProgress < 50) {
        return { x: 44, y: 36, clicking: true, label: 'Copy Prompt (window.blur imminent)', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 88, y: 14, clicking: true, label: 'Tab Switch → quizplus.com search', tag: 'fail' };
      } else {
        return { x: 32, y: 72, clicking: true, label: 'Unlock Token → Wrong $84,210 (Fail)', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 36, y: 32, clicking: true, label: 'Double-Click (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 56, y: 50, clicking: false, label: 'Alt+S: Hybrid Vision + DOM Snip', tag: 'snip' };
      } else {
        return { x: 68, y: 72, clicking: false, label: 'Option C Selected ($138,422)', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 Chain-of-Thought', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="FIN 301 Corporate Finance · Canvas Capital Budgeting Exam"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/49210/quizzes/84019"
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
            <motion.div key="qp-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">Question 4 · Capital Budgeting &amp; MACRS Cash Flows</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  $1,345,000 Capex, 3-yr MACRS (33.33%, 44.45%, 14.81%, 7.41%), $620k rev, $180k opex, 21% tax, $65k NWC, $120k salvage, WACC 9.5%. Calculate NPV.
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
                  Quizplus extension delisted from Chrome Web Store... Student switches tab to quizplus.com search bar.
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <span className="font-bold">SpeedGrader Flagged: 36.4s departure to quizplus.com</span>
                    <span className="text-rose-400 font-mono">window.blur flagged</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-400">
                    Paywall: 🔒 Solution locked behind $24.99/mo paywall. Stale 2018 bank assumes 35% tax rate, giving wrong $84,210.
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1 */}
          {currentScene === 1 && (
            <motion.div key="qp-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Double-Click Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  TCJA 21% Tax Rate · MACRS Tax Shields · Exact NPV = $138,422
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) NPV = $84,210 (Stale Quizplus 2018 Weygandt bank: 35% tax rate)
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">C) NPV = $138,422 (Live solution: 21% TCJA tax rate, 9.5% WACC, MACRS tax shields)</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">0.3s ✓</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                <span className="text-emerald-300">Focus Shield Active · 0 window.blur flags</span>
                <span>Closed Shadow DOM · Alt+3 DCF Breakdown · ⌘+Shift+U Ready</span>
              </div>
            </motion.div>
          )}

          {/* SCENE 2 */}
          {currentScene === 2 && (
            <motion.div key="qp-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">2-in-1 Study AI Hub · Capital Budgeting DCF</span>
                </div>
                <div className="flex rounded-lg bg-black/40 p-1 border border-white/10 gap-1 text-[11px] font-mono">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeModelTab === m ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {m === 'claude' ? 'Claude 3.7 Sonnet' : m === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Capital Budgeting Cash Flow Schedule:</strong> Base OCF = ($620,000 - $180,000)(0.79) = $347,600. Depreciation tax shields (Dep × 0.21): Y1: $94,141 (CF1 = $441,741); Y2: $125,549 (CF2 = $473,149); Y3: $41,831 (CF3 = $389,431); Y4: $20,930 + $65k NWC + $94,800 salvage (CF4 = $528,330).
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>WACC Discounting at 9.5%:</strong> PV1 = $403,416; PV2 = $394,612; PV3 = $296,660; PV4 = $370,214. Total PV = $1,464,902. Subtracting initial outlay of $1,326,480 yields exact <code className="text-emerald-300">NPV = $138,422</code>.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    Tax Code Forensic: Quizplus&apos;s 2018 bank uses pre-TCJA 35% tax rate, introducing a $54,212 error ($84,210 vs $138,422). Proves static test banks fail algorithmic randomized university tests.
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
   13. STUDYX VS EXAMGHOST DEMO:
   Computer Systems Architecture (CS 324 / ECE 350) · 64-bit Virtual Memory EMAT
   Scene 0: Canvas New Quizzes cross-origin LTI 1.3 frame blocks StudyX, crop lag, modal lockout
   Scene 1: ExamGhost 0.3s solve via Alt+S Smart Snip over LTI 1.3 frame, Option B (161.46 ns)
   Scene 2: Multi-Model EMAT & Page Table Hierarchy Derivation (Claude 3.7 Sonnet, ChatGPT o3-mini/4o, DeepSeek-R1)
   ============================================================================ */
export function StudyXCommunityLagDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. StudyX Lag & Leak',
      title: 'StudyX: 12.8s Crop Lag, Manifest Leak & Credit Modal',
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
      title: 'Study AI Hub: Virtual Memory & Page Table Hierarchy Breakdown',
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
            speedGrader: '1 window.blur flag · 12.8s Gap · DOM Fingerprint Logged (Manifest "**/*")',
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
          speedGrader: '0 window.blur flags · Focus Shield Active · Closed Shadow DOM',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model RAG Engine · 99.4% Architecture Rigor',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 28, y: 32, clicking: false, label: 'Reading Question in LTI 1.3' };
      } else if (safeProgress < 50) {
        return { x: 44, y: 40, clicking: true, label: 'Drag Manual Crop Box', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 60, y: 60, clicking: true, label: 'Click [Get Answer] (window.blur logged)', tag: 'fail' };
      } else {
        return { x: 50, y: 50, clicking: true, label: 'UltraUsageThresholdModal Blocked!', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 36, y: 32, clicking: true, label: 'Alt+S Crosshair Smart Snip (0.3s)', tag: 'snip' };
      } else if (safeProgress < 70) {
        return { x: 56, y: 50, clicking: false, label: 'Traversing LTI 1.3 Frame · 0 Blur', tag: 'solve' };
      } else {
        return { x: 68, y: 72, clicking: false, label: 'Option B Selected (161.46 ns)', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 Chain-of-Thought', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="CS 324 Computer Architecture · Canvas New Quizzes (LTI 1.3)"
        domainBadge="CANVAS LTI 1.3"
        browserUrl="https://canvas.instructure.com/courses/60114/lti/launch_quizzes"
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
            <motion.div key="sx-s0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">Question 7 · 64-bit 4-Level Page Table &amp; Split TLB EMAT</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  48-bit VA, 4KB page, 4-level PT, L1 TLB 0.8ns (94%), L2 TLB 4.5ns (98%), DRAM 65ns, page fault 0.002% (8ms penalty). Calculate EMAT.
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300">
                  Canvas New Quizzes LTI 1.3 iframe blocks StudyX injection (lacks `&quot;all_frames&quot;: true`). Student dragging manual crop box...
                </div>
              ) : (
                <div className="space-y-2">
                  <div className="p-3.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <span className="font-bold">SpeedGrader Flagged: 12.8s crop lag + window.blur. Manifest V3 wildcard &quot;**/*&quot; fingerprint detected.</span>
                    <span className="text-rose-400 font-mono">FLAGGED</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-400">
                    Blocking Modal: UltraUsageThresholdModal — Daily limit reached mid-exam! Upgrade to StudyX Pro ($19.95/mo).
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1 */}
          {currentScene === 1 && (
            <motion.div key="sx-s1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Alt+S Smart Snip Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono">
                  Translation Overhead = 1.46 ns + Page Fault Overhead = 160.00 ns ⇒ EMAT = 161.46 ns
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) EMAT = 67.24 ns (Assumes 32-bit single-level walk)
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">B) EMAT = 161.46 ns (Exact 64-bit 4-level paging + L1/L2 TLB hierarchy + fault overhead)</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">0.3s ✓</span>
                </div>
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-white/10">
                <span className="text-emerald-300">Focus Shield Active · 0 window.blur flags</span>
                <span>Closed Shadow DOM · Alt+3 Virtual Memory Derivation · ⌘+Shift+U Ready</span>
              </div>
            </motion.div>
          )}

          {/* SCENE 2 */}
          {currentScene === 2 && (
            <motion.div key="sx-s2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">2-in-1 Study AI Hub · Virtual Memory &amp; TLB Architecture</span>
                </div>
                <div className="flex rounded-lg bg-black/40 p-1 border border-white/10 gap-1 text-[11px] font-mono">
                  {(['claude', 'chatgpt', 'deepseek'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setActiveModelTab(m)}
                      className={`px-2.5 py-1 rounded-md transition-all ${
                        activeModelTab === m ? 'bg-emerald-500/30 text-emerald-300 font-bold' : 'text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {m === 'claude' ? 'Claude 3.7 Sonnet' : m === 'chatgpt' ? 'ChatGPT o3-mini/4o' : 'DeepSeek-R1'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Virtual Address Decomposition:</strong> 48-bit address with 4KB (2¹² B) page size ⇒ 12-bit offset, 36-bit VPN. With 8-byte entries (512 per page = 2⁹), the 36-bit VPN splits into four 9-bit indices: PML4, PDPT, PD, PT. Translation probabilities: L1 hit = 0.94; L2 hit = 0.0588; 4-level DRAM walk = 0.0012.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>Effective Memory Access Time (EMAT):</strong> Average translation time = (0.94)(0.8) + (0.0588)(5.3) + (0.0012)(265.3) = 1.46 ns. Page fault penalty overhead = (0.00002)(8,000,000 ns) = 160.00 ns. Total EMAT overhead = <code className="text-emerald-300">1.46 + 160.00 = 161.46 ns</code>.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    x86-64 Hardware MMU Contrast: Hardware page-table walker (CR3) requires 4 serial DRAM accesses upon TLB miss. StudyX community scrapers confuse 32-bit single-level paging (67.24 ns) with 64-bit 4-level paging (161.46 ns).
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
   Milestone 4 Alias Exports (Ensuring both descriptive and short names resolve)
   ============================================================================ */
export const CheatmateDemo = CheatmateAcquireReleaseDemo;
export const CheatpalDemo = CheatpalLacOperonDemo;
export const SchoolcheatsDemo = Schoolcheats2SLSEconometricsDemo;
export const TestbroDemo = TestbroAdminLawDemo;
export const QuizmateDemo = QuizmateNavierStokesDemo;
export const QuizperDemo = QuizperByokDomTrapDemo;
export const CampusAiDemo = CampusAiSidepanelBlurDemo;
export const AskSiaDemo = AskSiaCourseScraperDemo;
export const BrainlyDemo = BrainlyCrowdsourcedForumDemo;
export const CramlyDemo = CramlyEssayVsQuizDemo;
export const HomeworkifyDemo = HomeworkifyDeadMirrorDemo;
export const QuizplusDemo = QuizplusStaticBankPaywallDemo;
export const StudyXDemo = StudyXCommunityLagDemo;
