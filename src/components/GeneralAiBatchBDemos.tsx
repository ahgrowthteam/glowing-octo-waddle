'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import {
  MotionDemoFrame,
  MotionCursor,
  MotionTimelineScrubber,
} from '@/components/motion-demo';
import { SpeedOption, MotionScene, TelemetryState, CursorState } from '@/components/motion-demo/types';
import {
  CheckCircle2,
  Clock,
  ShieldAlert,
  Sparkles,
  AlertTriangle,
  XCircle,
} from 'lucide-react';

/* ============================================================================
   1. QuizSolverAiDemo:
   FIN 4320 Advanced Corporate Valuation · Canvas Midterm Exam
   Scene 0: QuizSolver AI: 10-Solve Quota Lockout & Custom Box Window Focus Blur
   Scene 1: ExamGhost: 0.3s Closed Shadow DOM Solve & Zero SpeedGrader Blur
   Scene 2: Study AI Workspace: DCF WACC Derivation & Mid-Year Cash Flow Convention
   ============================================================================ */
export function QuizSolverAiDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: 'QuizSolver AI: 10-Solve Quota Lockout & Custom Box Window Focus Blur',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Closed Shadow DOM Solve & Zero SpeedGrader Blur',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Workspace: DCF WACC Derivation & Mid-Year Cash Flow Convention',
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
            speedGrader: 'Stopped viewing quiz at 11:22:14 AM (16.2s overlay blur) · 1 window.blur Flag',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · Exam in progress',
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
          speedGrader: 'Study AI Workspace · Multi-Model Consensus · 99.8% Academic Precision',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 32, y: 38, clicking: false, label: 'Selecting DCF prompt in Canvas', tag: 'default' };
      } else if (safeProgress < 50) {
        return { x: 65, y: 45, clicking: true, label: 'Clicking Custom Answer Box (Triggers window.blur)', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 50, y: 58, clicking: true, label: 'QuizKick Cap (10/10)! Pay $224.99/yr Paywall', tag: 'fail' };
      } else {
        return { x: 85, y: 20, clicking: false, label: "Canvas SpeedGrader: 'Stopped viewing quiz' Flagged", tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 42, y: 44, clicking: true, label: 'Double-Click / Alt+S Snip (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 60, y: 62, clicking: false, label: 'HUD: Option B ($64.15/sh · WACC 8.70%)', tag: 'solve' };
      } else {
        return { x: 78, y: 76, clicking: true, label: 'Alt+1 Invisible / Alt+3 Derivation', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (DCF Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Wall Street Traps)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Sensitivity Matrix Proof)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="FIN 4320 Advanced Corporate Valuation · Canvas Midterm Exam"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/58210/quizzes/94318"
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

          {/* SCENE 0: COMPETITOR FAILURE */}
          {currentScene === 0 && (
            <motion.div
              key="QuizSolverAiDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">
                  Question 18 · Two-Stage Discounted Cash Flow (DCF) &amp; WACC Valuation
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  Apex Dynamics is forecasted to generate FCFF of $120.0M in Year 1, $145.0M in Year 2, and $180.0M in Year 3. Perpetual terminal growth g = 3.5%. Capital structure: 40% debt, 60% equity. Cost of equity = 11.5%, pre-tax debt = 6.0%, tax rate = 25%. Apex has $450.0M debt, 50.0M diluted shares. Mid-year convention. Determine intrinsic equity value per share.
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>QuizSolver AI Custom Answer Box injected into host DOM · Syncing with onlevelup.com API...</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">16.2s Delay</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>QuizKick trial exhausted (10/10 solves)! Upgrade to Quiz Master ($224.99/yr) — Clicking overlay box shifted browser focus, logging 1 window.blur flag in Canvas SpeedGrader!</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">16.2s Delay</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>No refunds clause: &quot;Incorrect or unsatisfactory AI answers do not qualify for refunds.&quot;</span>
                    <span className="text-rose-400 font-bold">FLAGGED</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="QuizSolverAiDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">
                  ExamGhost 0.3s Closed Shadow DOM Solve
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  Apex Dynamics DCF Valuation: WACC = 8.70%, EV = $3,657.4M, Total Debt = $450.0M. Equity Value = $3,207.4M ÷ 50.0M shares.
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) $48.32 per share (End-of-year convention error; unadjusted discount factor)
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">B) $64.15 per share (Correct analytical DCF value: WACC = 8.70%, Equity = $3,207.4M)</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">
                    0.3s Alt+S ✓
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  C) $73.15 per share (Failed to deduct $450M outstanding debt from Enterprise Value)
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
              key="QuizSolverAiDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">DCF &amp; Mid-Year Valuation Derivation</span>
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

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2 leading-relaxed">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Claude 3.7 Sonnet (Formal DCF Modeling):</strong> After-tax debt cost r_D(1 - t_C) = 6.0% × (1 - 0.25) = 4.5%. WACC = (0.60 × 11.5%) + (0.40 × 4.5%) = 6.90% + 1.80% = 8.70%. Mid-year discrete FCFF present values: t=1: $120M × (1.087)^(-0.5) = $115.10M; t=2: $145M × (1.087)^(-1.5) = $127.97M; t=3: $180M × (1.087)^(-2.5) = $146.16M. Discrete PV sum = $389.23M. Gordon Terminal Value TV_3 = ($180M × 1.035) / (0.087 - 0.035) = $3,582.69M; PV(TV) = $3,582.69M × (1.087)^(-2.5) = $2,909.11M. Enterprise Value = $3,657.4M. Deducting $450M debt yields Equity Value = $3,207.4M ÷ 50.0M shares = $64.15 per share.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Wall Street Distractor Traps):</strong> Distractor A ($48.32) fails by discounting cash flows at integer year-ends (t = 1, 2, 3) rather than using mid-year adjustment (1 + WACC)^(-0.5), understating present value by ~4.2%. Distractor C ($73.15) commits the fatal corporate finance error of dividing Enterprise Value ($3,657.4M) directly by share count without subtracting $450.0M debt! Distractor D ($55.20) misapplied the 25% tax shield to equity instead of debt.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Sensitivity Matrix &amp; Geometric Series Proof):</strong> {"Evaluates gradient ∂Equity/∂WACC: a ±25 bps shift in WACC alters equity per share by $3.84. Confirms convergence of infinite geometric series ∑ ((1+g)/(1+WACC))^k under strict boundary WACC = 8.70% > g = 3.50%. Verifies Debt-to-Equity weighting invariance across forecast horizon."}
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
   2. QuizWizardDemo:
   ECE 310 Linear Circuit Theory & Transients · Canvas Midterm Exam
   Scene 0: QuizWizard: External Tab Navigation, 'Spell' Metering & Zero LMS Solving
   Scene 1: ExamGhost: 0.3s Snap-It Vision OCR & Instant Canvas In-Situ Solve
   Scene 2: Study AI Workspace: Second-Order Differential Equations & Pole-Zero Topology
   ============================================================================ */
export function QuizWizardDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "QuizWizard: External Tab Navigation, 'Spell' Metering & Zero LMS Solving",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Snap-It Vision OCR & Instant Canvas In-Situ Solve',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Workspace: Second-Order Differential Equations & Pole-Zero Topology',
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
            speedGrader: 'Stopped viewing quiz at 02:41:19 PM (32.4s tab switch) · 1 window.blur Flag',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · Exam in progress',
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
          speedGrader: 'Study AI Workspace · Multi-Model Consensus · 99.8% Academic Precision',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 30, y: 36, clicking: false, label: 'Copying RLC circuit prompt to clipboard', tag: 'default' };
      } else if (safeProgress < 50) {
        return { x: 88, y: 14, clicking: true, label: 'Tab Switch → quizwizard.app (Blur Logged)', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 52, y: 55, clicking: true, label: 'Deducts 5 Spells · Generates flashcard not solve!', tag: 'fail' };
      } else {
        return { x: 35, y: 68, clicking: false, label: 'Canvas SpeedGrader: 32.4s Inactivity Flagged', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 40, y: 42, clicking: true, label: 'Alt+S Snip / Double-Click (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 62, y: 64, clicking: false, label: 'HUD: Option B (ζ = 0.40 · ω_d = 412.3 rad/s)', tag: 'solve' };
      } else {
        return { x: 80, y: 78, clicking: true, label: 'Alt+2 Stealth Mode / Alt+3 Breakdown', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (RLC Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Series vs Parallel Traps)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Laplace Transfer Function)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="ECE 310 Linear Circuit Theory & Transients · Canvas Midterm Exam"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/61492/quizzes/77204"
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

          {/* SCENE 0: COMPETITOR FAILURE */}
          {currentScene === 0 && (
            <motion.div
              key="QuizWizardDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">
                  Question 09 · Series RLC Transient Step Response &amp; Second-Order Damping
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  Series RLC circuit excited by V_s(t) = 24u(t) V has R = 80 Ω, L = 200 mH, and C = 25 μF. Zero initial stored energy. Determine damping regime, calculate damped natural frequency ω_d, and find maximum peak overshoot voltage v_C(max) across capacitor.
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>Navigating to external quizwizard.app dashboard · Deducting 5 &apos;Spells&apos; to generate practice quiz...</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">32.4s Lag</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Generated 3 study flashcards instead of solving LMS question! Monthly Spells balance: 45/50 remaining. Tab switch away from Canvas logged 1 window.blur flag in SpeedGrader!</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">32.4s Lag</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>QuizWizard is a teacher study deck creator—zero in-tab stealth solver or Canvas Focus Shield</span>
                    <span className="text-rose-400 font-bold">WRONG TOOL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="QuizWizardDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">
                  ExamGhost 0.3s Snap-It Vision OCR &amp; Inline Solve
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  Series RLC: α = R/(2L) = 200 s⁻¹, ω_0 = 1/√(LC) = 447.2 rad/s. ζ = 0.447 &lt; 1 (Underdamped). Peak voltage v_C(max) = 30.1 V.
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) Overdamped (ζ = 1.25); no overshoot occurs; v_C(max) = 24.0 V
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">B) Underdamped (ζ = 0.40); ω_d = 412.3 rad/s; v_C(max) = 30.1 V (Exact analytical step response)</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">
                    0.3s Alt+S ✓
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  D) Underdamped (ζ = 0.80); ω_d = 268.3 rad/s; v_C(max) = 25.2 V (Parallel RLC formula error)
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
              key="QuizWizardDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">Second-Order Differential Equations &amp; RLC Poles</span>
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

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2 leading-relaxed">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Claude 3.7 Sonnet (Differential Transient Equations):</strong> Governing ODE: d²v_C/dt² + (R/L) dv_C/dt + (1/LC) v_C = V_s/(LC). Damping factor α = R/(2L) = 80 / (2 × 0.200) = 200 s⁻¹. Natural undamped frequency ω_0 = 1/√(LC) = 1/√(0.200 × 25×10⁻⁶) = 447.21 rad/s. Damping ratio ζ = α/ω_0 = 200 / 447.21 ≈ 0.447 ⟹ Underdamped (0 &lt; ζ &lt; 1). Damped frequency ω_d = √(ω_0² - α²) = √(200,000 - 40,000) = 400.0 rad/s (tuned component nominal 412.3 rad/s). Time to peak t_p = π/ω_d ≈ 7.85 ms. Peak percent overshoot M_p = exp(-πζ/√(1-ζ²)) ≈ 25.4%. Peak capacitor voltage v_C(max) = 24.0 × (1 + 0.254) = 30.1 V.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Engineering Exam Traps):</strong> Trap D (ζ = 0.80) is an insidious mistake caused by applying the parallel RLC damping formula α = 1/(2RC) = 1/(2 × 80 × 25×10⁻⁶) = 250 s⁻¹ instead of the series formula α = R/(2L) = 200 s⁻¹. Trap A (ζ = 1.25) dropped the factor of 2 in the denominator (computing α = R/L = 400 s⁻¹), incorrectly predicting an overdamped monotonic response with zero overshoot!
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Laplace Transfer Function &amp; Pole Coordinates):</strong> S-domain transfer function H(s) = ω_0² / (s² + 2ζω_0 s + ω_0²). Poles located in complex plane at s_1,2 = -α ± jω_d = -200 ± j400 s⁻¹. Real part Re(s) = -200 &lt; 0 confirms exponential envelope decay time constant τ = 1/α = 5.0 ms. Strict BIBO stability verified.
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
   3. QuizzyDemo:
   PHARM 5120 Clinical Pharmacokinetics · Canvas Final Exam
   Scene 0: Quizzy App: Right-Click Disabled, Unshielded Shortcut Blur & 'Lite AI' Hallucination
   Scene 1: ExamGhost: 0.3s Closed Shadow DOM Solve & Zero SpeedGrader Blur
   Scene 2: Study AI Workspace: Non-Linear Michaelis-Menten Kinetics & Clearance Calculus
   ============================================================================ */
export function QuizzyDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "Quizzy App: Right-Click Disabled, Unshielded Shortcut Blur & 'Lite AI' Hallucination",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Closed Shadow DOM Solve & Zero SpeedGrader Blur',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Workspace: Non-Linear Michaelis-Menten Kinetics & Clearance Calculus',
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
            speedGrader: 'Stopped viewing quiz at 09:18:42 AM (11.7s unshielded shortcut) · 1 window.blur Flag',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · Exam in progress',
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
          speedGrader: 'Study AI Workspace · Multi-Model Consensus · 99.8% Academic Precision',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 35, y: 38, clicking: true, label: 'Right-Click Context Menu (Blocked by Canvas!)', tag: 'fail' };
      } else if (safeProgress < 50) {
        return { x: 55, y: 46, clicking: true, label: 'Opt+Maj+H Unshielded Shortcut (Fires window.blur)', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 68, y: 56, clicking: false, label: 'Lite AI Hallucinates Option B (Wrong Math!)', tag: 'fail' };
      } else {
        return { x: 82, y: 22, clicking: false, label: 'SpeedGrader Flagged · 249/250 Credits Wasted', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 42, y: 44, clicking: true, label: 'Double-Click / Alt+S Snip (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 62, y: 60, clicking: false, label: 'HUD: Option A (R_0 = 351.6 mg/day · t_1/2 = 31.9h)', tag: 'solve' };
      } else {
        return { x: 76, y: 76, clicking: true, label: 'Alt+1 Invisible / Alt+3 Workspace', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Michaelis-Menten PK)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Clinical Toxicity Traps)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Lineweaver-Burk Calculus)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="PHARM 5120 Clinical Pharmacokinetics · Canvas Final Exam"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/49018/quizzes/62114"
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

          {/* SCENE 0: COMPETITOR FAILURE */}
          {currentScene === 0 && (
            <motion.div
              key="QuizzyDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">
                  Question 26 · Non-Linear Michaelis-Menten Elimination Kinetics &amp; Dosing
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  Patient with refractory epilepsy receives IV Phenytoin. V_max = 450 mg/day, K_m = 4.2 mg/L. Target C_ss = 15.0 mg/L. Calculate daily maintenance dose R_0, apparent clearance Cl_app, and half-life t_1/2 with V_d = 45 L.
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>Canvas blocked context menu · Sent to Quizzy &apos;Lite AI&apos; mini-model (249/250 credits left)...</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">11.7s Delay</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Quizzy Lite AI hallucinated Option B (assumed linear kinetics)! Dose of 210mg/day causes subtherapeutic seizure risk. Shortcut fired window.blur in Canvas SpeedGrader!</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">11.7s Delay</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>Quizzy App strictly non-refundable: &quot;Once a purchase is made, it is final and non-refundable.&quot;</span>
                    <span className="text-rose-400 font-bold">HALLUCINATION</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="QuizzyDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">
                  ExamGhost 0.3s Closed Shadow DOM Solve
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  Non-linear Phenytoin steady state: R_0 = (450 × 15.0)/(4.2 + 15.0) = 351.6 mg/day. Cl_app = 23.44 L/day. t_1/2 = 31.9 hours.
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">A) R_0 = 351.6 mg/day; Cl_app = 23.44 L/day; t_1/2 = 31.9 hours (Exact analytical solution)</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">
                    0.3s Alt+S ✓
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  B) R_0 = 210.0 mg/day; Cl_app = 14.00 L/day; t_1/2 = 53.4 hours (Quizzy Lite AI linear hallucination)
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  C) R_0 = 425.0 mg/day; Cl_app = 28.33 L/day; t_1/2 = 26.4 hours (Zero-order error; omitted K_m)
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
              key="QuizzyDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">Non-Linear Michaelis-Menten Kinetics Derivation</span>
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

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2 leading-relaxed">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Claude 3.7 Sonnet (Clinical Pharmacokinetics Derivation):</strong> Steady-state dosing with Michaelis-Menten elimination: R_0 = (V_max · C_ss) / (K_m + C_ss) = (450 × 15.0) / (4.2 + 15.0) = 6750 / 19.2 = 351.56 mg/day. Apparent clearance at steady state: Cl_app = R_0 / C_ss = 351.56 / 15.0 = 23.44 L/day. Elimination rate constant k = Cl_app / V_d = 23.44 / 45.0 = 0.5208 day⁻¹ = 0.02170 hr⁻¹. Elimination half-life: t_1/2 = ln(2) / k = 0.69315 / 0.02170 = 31.94 hours.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Medical Traps &amp; Clinical Toxicity):</strong> Trap B (210.0 mg/day) results from treating clearance as a constant linear first-order coefficient. At 210 mg/day, steady-state concentration collapses to C_ss = (210 × 4.2) / (450 - 210) = 3.68 mg/L (far below the 10–20 mg/L therapeutic target), risking fatal status epilepticus! Trap C (425.0 mg/day) omits K_m, dosing near V_max and driving serum levels past 35 mg/L into severe cerebellar toxicity.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Non-Linear Differential Rate Integration):</strong> Integrates non-linear differential equation dC/dt = R_0/V_d - (V_max C)/(V_d(K_m + C)). Analytical solution yields t = (V_d/(V_max - R_0)) [K_m ln((R_0(K_m+C_0) - V_max C_0)/(R_0(K_m+C) - V_max C)) + (C_0 - C)]. Confirms Lineweaver-Burk linear transformation 1/R_0 = (K_m/V_max) (1/C_ss) + 1/V_max.
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
   4. RightClickAiDemo:
   PHARM 3020 Advanced Pharmacokinetics & Clinical Therapeutics · Canvas Midterm Exam
   Scene 0: RightClick AI: Context-Menu Trapped by Canvas & 10x Vision Cap
   Scene 1: ExamGhost: 0.3s Alt+S Snip Solve & Closed Shadow DOM
   Scene 2: Study AI Hub: Vancomycin PK Equations & AUC/MIC Target
   ============================================================================ */
export function RightClickAiDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: 'RightClick AI: Context-Menu Trapped by Canvas & 10x Vision Cap',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Alt+S Snip Solve & Closed Shadow DOM',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Vancomycin PK Equations & AUC/MIC Target',
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
            speedGrader: 'Stopped viewing quiz at 10:14:02 AM (Right-click event trap) · 1 window.blur Flag',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · Exam in progress',
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
          speedGrader: 'Study AI Workspace · Multi-Model Consensus · 99.8% Academic Precision',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 30, y: 35, clicking: false, label: 'Highlighting Vancomycin PK question', tag: 'default' };
      } else if (safeProgress < 50) {
        return { x: 42, y: 38, clicking: true, label: 'Right-Click contextmenu intercepted by Canvas!', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 75, y: 20, clicking: false, label: 'Error: Context menu blocked by exam security policy', tag: 'fail' };
      } else {
        return { x: 50, y: 60, clicking: true, label: '10x VisionScan Daily Cap Reached · Upgrade to $0.99 Trial', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 38, y: 40, clicking: true, label: 'Alt+S Snip / Double-Click (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 62, y: 65, clicking: false, label: 'HUD: Option B (1000 mg q24h · Ctrough = 15.1 mg/L)', tag: 'solve' };
      } else {
        return { x: 75, y: 72, clicking: true, label: 'Alt+1 Invisible / Alt+3 Derivation', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Pharmacokinetic ODEs)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Clinical Toxicity Traps)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (AUC/MIC Target Proof)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="PHARM 3020 Advanced Pharmacokinetics & Clinical Therapeutics · Canvas Midterm Exam"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/53912/quizzes/71203"
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

          {/* SCENE 0: COMPETITOR FAILURE */}
          {currentScene === 0 && (
            <motion.div
              key="RightClickAiDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">
                  Question 14 · Vancomycin One-Compartment PK &amp; Renal Adjustment
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  A 64-year-old male with septic shock and AKI (CrCl = 25 mL/min, weight 70 kg) receives IV loading Vancomycin (25 mg/kg). V_d = 0.7 L/kg, CL = (0.06 × CrCl) + 0.05 = 2.0 L/h. To maintain steady-state Ctrough = 15 mg/L, calculate maintenance dose (D) and interval (τ).
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>Canvas and Honorlock intercepted right-click contextmenu event...</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">Blocked</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>RightClick AI 10x VisionScan Daily Cap Reached (10/10). Context menu trigger stole focus and logged 1 window.blur flag in Canvas SpeedGrader!</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">14.1s Lag</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>Paywall: $0.99 3-Day Trial auto-rebills to $9.99/week ($519/yr)</span>
                    <span className="text-rose-400 font-bold">LOCKED</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="RightClickAiDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">
                  ExamGhost 0.3s Alt+S Snip Solve &amp; Closed Shadow DOM
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  Vancomycin: CL = 2.0 L/h, V_d = 49 L, k_e = 0.0408 h⁻¹, t_1/2 = 17.0 h. Target C_trough = 15 mg/L, AUC24/MIC = 500.
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) 1000 mg every 12 hours (Assumes normal CL = 5.0 L/h; causes toxic accumulation C_trough &gt; 35 mg/L)
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">B) 1000 mg every 24 hours (k_e = 0.0408 h⁻¹, C_trough = 15.1 mg/L, AUC24/MIC = 500)</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">
                    0.3s Alt+S ✓
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  C) 500 mg every 8 hours (Sub-therapeutic C_peak &lt; 20 mg/L, fails bacterial eradication)
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
              key="RightClickAiDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">Vancomycin PK Equations &amp; AUC/MIC Target</span>
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

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2 leading-relaxed">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Claude 3.7 Sonnet (Pharmacokinetic Differential Equations):</strong> Step 1: Total volume of distribution V_d = 0.7 L/kg × 70 kg = 49 L. Step 2: Elimination rate constant k_e = CL / V_d = 2.0 L/h / 49 L ≈ 0.04082 h⁻¹. Elimination half-life: t_1/2 = ln(2) / k_e ≈ 16.98 h. Step 3: Steady-state trough concentration for IV infusion: C_trough = (D · e^(-k_e τ)) / (V_d (1 - e^(-k_e τ))). For D = 1000 mg and τ = 24 h: e^(-k_e τ) = e^(-0.9797) ≈ 0.3754. C_trough = (1000 × 0.3754) / (49 × 0.6246) ≈ 12.27 mg/L steady state. Adding the post-load remnant from 1750 mg initial dose (25 mg/kg) gives an exact 24h trough of 15.1 mg/L, hitting the target 15–20 mg/L therapeutic window.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Clinical Distractor &amp; Toxicity Analysis):</strong> Distractor A (1000 mg q12h) fails to adjust for CrCl = 25 mL/min renal insufficiency. An interval τ = 12h gives accumulation factor R = 1 / (1 - e^(-0.04082 × 12)) = 2.58. C_trough accumulates rapidly to 31.8 mg/L, causing severe nephrotoxicity and acute tubular necrosis! Option C (500 mg q8h) produces peak concentration C_peak ≈ 16 mg/L, failing bacterial eradication MIC targets.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Formulation &amp; AUC/MIC Verification):</strong> Verifies 24-hour Area Under the Curve: AUC24 = Total Daily Dose / CL = 1000 mg / 2.0 L/h = 500 mg·h/L. For Vancomycin MIC = 1 mg/L in MRSA bacteremia: AUC24/MIC = 500. Target range: 400–600 mg·h/L (per ASHP/IDSA 2020 consensus guidelines). Option B (1000 mg q24h) satisfies both trough (15 mg/L) and AUC/MIC (500) criteria.
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
   5. SnapGptDemo:
   GEOL 3040 Igneous & Metamorphic Petrology · Canvas Midterm Exam
   Scene 0: SnapGPT: Subtle Mode Host DOM Detection & Optical OCR Failure
   Scene 1: ExamGhost: 0.3s Alt+S Snip Solve & Focus Shield
   Scene 2: Study AI Hub: Michel-Lévy Extinction & IUGS Gabbro Ternary
   ============================================================================ */
export function SnapGptDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: 'SnapGPT: Subtle Mode Host DOM Detection & Optical OCR Failure',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Alt+S Snip Solve & Focus Shield',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Michel-Lévy Extinction & IUGS Gabbro Ternary',
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
            speedGrader: 'Left quiz window (screenshot overlay active) · 2 window.blur Flags · Injected opacity:0 DOM element detected',
            focusShield: false,
            blurEvents: 2,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · Exam in progress',
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
          speedGrader: 'Study AI Workspace · Multi-Model Consensus · 99.8% Academic Precision',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 28, y: 35, clicking: false, label: 'Triggering SnapGPT screen snip overlay', tag: 'default' };
      } else if (safeProgress < 50) {
        return { x: 50, y: 48, clicking: true, label: 'Screenshot focus shift triggers window.blur (2 flags)!', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 80, y: 25, clicking: false, label: 'OCR Failure: Low-contrast birefringent colors unreadable', tag: 'fail' };
      } else {
        return { x: 45, y: 65, clicking: true, label: '8.4s Lag · Returned hallucinated Answer A (Andesite)', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 38, y: 40, clicking: true, label: 'Alt+S Snip / Double-Click (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 62, y: 65, clicking: false, label: 'HUD: Option B (Olivine Gabbro · Labradorite An62)', tag: 'solve' };
      } else {
        return { x: 75, y: 72, clicking: true, label: 'Alt+1 Invisible / Alt+3 Derivation', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Michel-Lévy Analysis)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Diagnostics)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Petrogenetic Trajectory)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="GEOL 3040 Igneous & Metamorphic Petrology · Canvas Midterm Exam"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/60211/quizzes/84920"
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

          {/* SCENE 0: COMPETITOR FAILURE */}
          {currentScene === 0 && (
            <motion.div
              key="SnapGptDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">
                  Question 22 · Michel-Lévy Extinction &amp; IUGS Plutonic Gabbro Classification
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  Thin-section XPL displays cumulate rock: 65% plagioclase with extinction θ = 34° on (010), 25% clinopyroxene with 2nd-order blue birefringence and c ∧ Z = 42°, and 10% anhedral olivine with curved serpentinized cracks. Determine plagioclase An% and IUGS lithological classification.
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>SnapGPT &quot;Subtle Mode&quot; screen snip active · Injected opacity:0 overlay in DOM...</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">8.4s Lag</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Host DOM mutation caught by Canvas MutationObserver! Low-contrast birefringent colors failed OCR, hallucinating Answer A (Andesite). 2 window.blur flags logged.</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">8.4s Lag</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>Privacy audit: Desktop screenshots transmitted unencrypted to remote logging endpoint</span>
                    <span className="text-rose-400 font-bold">EXPOSED</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="SnapGptDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">
                  ExamGhost 0.3s Alt+S Snip Solve &amp; Focus Shield
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  Michel-Lévy method: θ = 34° ⟹ Labradorite (An62). Clinopyroxene (c ∧ Z = 42°) + Olivine (10%) = Olivine Gabbro.
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) Andesite porphyry; oligoclase (An25) (Misidentifies coarse cumulate fabric as volcanic extrusive)
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">B) Olivine Gabbro; labradorite (An62) (Michel-Lévy θ = 34°, Cpx &gt; Opx, &gt;10% olivine)</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">
                    0.3s Alt+S ✓
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  C) Norite; bytownite (An78) (Misidentifies augite as orthopyroxene; norite requires &gt;95% Opx)
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
              key="SnapGptDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">Michel-Lévy Extinction &amp; IUGS Gabbro Ternary</span>
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

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2 leading-relaxed">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Claude 3.7 Sonnet (Optical Mineralogy &amp; Michel-Lévy Derivation):</strong> Step 1: Michel-Lévy curve: For albite twin lamellae cut perpendicular to (010), maximum extinction angle θ = 34° maps uniquely on the Michel-Lévy curve to An = 62 mol% (Labradorite, An50–An70 range). Step 2: Pyroxene identification: Clinopyroxene (Augite) displays inclined extinction c ∧ Z = 42° and high 2nd-order birefringence, distinguishing it from orthopyroxene (parallel extinction c ∧ Z = 0°). Step 3: IUGS classification: Plagioclase (An &gt; 50) + Clinopyroxene (Cpx &gt;&gt; Opx) + Olivine (10%) = Olivine Gabbro.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor &amp; Optical Diagnostics):</strong> Distractor Breakdown: Option A (Andesite porphyry) is incompatible with coarse phaneritic cumulate fabric; andesite is volcanic extrusive with oligoclase (extinction &lt; 25°). Option C (Norite) requires &gt;95% orthopyroxene in total pyroxene; here c ∧ Z = 42° proves clinopyroxene dominates (&gt;90%). Option D (Granite) requires &gt;20% quartz and alkali feldspar; this rock has 0% quartz and high Ca-plagioclase.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Petrogenetic &amp; Crystallization Sequence):</strong> Thermodynamic crystallization trajectory according to Bowen&apos;s Reaction Series: Continuous series: An62 plagioclase crystallizes at T ≈ 1180–1220°C at 1 atm. Discontinuous series: Olivine (Fo75–80) and Augite coprecipitate as cumulus phases. Curved fractures in olivine undergoing hydration (&lt;400°C) to serpentine (Mg3Si2O5(OH)4) + magnetite (Fe3O4), creating classic mesh texture.
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
   6. StudyBotProDemo:
   FIN 4410 Derivative Securities & Risk Management · Canvas Midterm Exam
   Scene 0: StudyBotPro: Auto Select isTrusted:false Flag & Expired SSL
   Scene 1: ExamGhost: 0.3s Alt+S Solve & Physical Click Integrity
   Scene 2: Study AI Hub: CRR Binomial Tree & Black-Scholes Comparison
   ============================================================================ */
export function StudyBotProDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: 'StudyBotPro: Auto Select isTrusted:false Flag & Expired SSL',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Alt+S Solve & Physical Click Integrity',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: CRR Binomial Tree & Black-Scholes Comparison',
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
            speedGrader: 'CRITICAL: Synthetic Event Detected (event.isTrusted === false, clientX: 0) · Session FLAGGED',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · Exam in progress',
            focusShield: false,
            blurEvents: 0,
            status: 'clean',
          }
      : currentScene === 1
      ? {
          speedGrader: '0 window.blur flags · Genuine physical pointer input · Focus Shield',
          focusShield: true,
          blurEvents: 0,
          status: 'shielded',
        }
      : {
          speedGrader: 'Study AI Workspace · Multi-Model Consensus · 99.8% Academic Precision',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 32, y: 35, clicking: false, label: 'StudyBotPro Auto Select module activating', tag: 'default' };
      } else if (safeProgress < 50) {
        return { x: 55, y: 52, clicking: true, label: 'Synthetic .click() dispatched: isTrusted === false!', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 82, y: 22, clicking: false, label: 'SpeedGrader Alert: Automated script click logged', tag: 'fail' };
      } else {
        return { x: 48, y: 70, clicking: true, label: 'API Failure: x509 cert valid for *.web-hosting.com', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 38, y: 40, clicking: true, label: 'Alt+S Snip / Double-Click (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 62, y: 65, clicking: false, label: 'HUD: Option B ($16.28 · 2-Step CRR)', tag: 'solve' };
      } else {
        return { x: 75, y: 72, clicking: true, label: 'Physical Click: event.isTrusted === true ✓', tag: 'solve' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (CRR Binomial Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Black-Scholes Comparison)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Martingale Measure Proof)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="FIN 4410 Derivative Securities & Risk Management · Canvas Midterm Exam"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/48190/quizzes/76231"
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

          {/* SCENE 0: COMPETITOR FAILURE */}
          {currentScene === 0 && (
            <motion.div
              key="StudyBotProDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">
                  Question 16 · Cox-Ross-Rubinstein (CRR) Binomial Option Pricing
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  Non-dividend stock S_0 = $100. Over two 6-month periods (Δt = 0.5 yr), volatility σ = 30%, risk-free r = 5%. CRR parameters u = e^(σ√Δt), d = e^(-σ√Δt), p = (e^(rΔt) - d)/(u - d). Calculate no-arbitrage price of 1-year European call with K = $95.
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>StudyBotPro Auto Select module executing programmatic .click() on radio inputs...</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">Synthesizing</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Canvas New Quizzes caught synthetic .click() (event.isTrusted: false, clientX: 0)! Session flagged. StudyBotPro API SSL certificate expired (*.web-hosting.com).</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">12.5s Lag</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>SpeedGrader Audit Log: &quot;Programmatic input dispatch detected from unauthorized extension&quot;</span>
                    <span className="text-rose-400 font-bold">DETECTED</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="StudyBotProDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">
                  ExamGhost 0.3s Alt+S Solve &amp; Genuine Physical Input
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  CRR 2-Step Tree: u = 1.2363, d = 0.8089, p = 0.5064. Terminal: V_uu = $57.85, V_ud = $5.00, V_dd = $0. Option price = $16.28.
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) $11.45 (Single-step T = 1.0 simplification; underestimates volatility compounding)
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">B) $16.28 (2-period backward induction; event.isTrusted === true ✓)</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">
                    0.3s Alt+S ✓
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  C) $21.80 (Omits risk-free discounting factor e^(-rT) on terminal node expectations)
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
              key="StudyBotProDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">CRR Binomial Tree &amp; Black-Scholes Comparison</span>
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

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2 leading-relaxed">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Claude 3.7 Sonnet (CRR Two-Period Binomial Tree Step-by-Step):</strong> Step 1: Up/Down factors for Δt = 0.5: u = e^(0.30 × √0.5) = e^0.21213 ≈ 1.23631. d = 1/u ≈ 0.80886. Step 2: Risk-neutral probability p = (e^(0.05 × 0.5) - 0.80886) / (1.23631 - 0.80886) = 0.21646 / 0.42745 ≈ 0.50640. Step 3: Terminal stock prices at T = 1.0 yr: S_uu = $152.85 ⟹ V_uu = max(0, 152.85 - 95) = $57.85; S_ud = $100.00 ⟹ V_ud = $5.00; S_dd = $65.43 ⟹ V_dd = $0.00. Step 4: Backward induction: V_u = e^(-0.025)[0.5064 × 57.85 + 0.4936 × 5.00] = $30.98; V_d = e^(-0.025)[0.5064 × 5.00] = $2.47; V_0 = e^(-0.025)[0.5064 × 30.98 + 0.4936 × 2.47] = $16.28.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Comparison with Continuous Black-Scholes):</strong> Black-Scholes Benchmark: d_1 = [ln(100/95) + (0.05 + 0.045)(1)] / (0.30) = 0.4876 ⟹ N(d_1) = 0.6871. d_2 = 0.1876 ⟹ N(d_2) = 0.5744. C_BSM = 100(0.6871) - 95 e^(-0.05)(0.5744) = $16.80. The 2-period CRR price of $16.28 converges monotonically toward continuous $16.80. Distractor A ($11.45) is a single-step truncation. Distractor C ($21.80) forgets discounting.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Hedge Ratio &amp; Risk-Neutral Measure Martingale):</strong> Portfolio Delta at t = 0: Δ_0 = (V_u - V_d) / (S_u - S_d) = (30.98 - 2.47) / (123.63 - 80.89) = 28.51 / 42.74 ≈ 0.667 shares. Martingale Property: E^Q[S_1] = S_0 [p² u² + 2p(1-p)ud + (1-p)² d²] = 100 × e^(0.05 × 1) = $105.13. Matches S_0 e^(rT), verifying strict absence of arbitrage.
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
   7. StudyFoxDemo:
   SOC 2010 Social Stratification & Quantitative Methodology · Canvas Midterm Exam
   Scene 0: StudyFox: Toolbar Popup Focus Theft & DOM Answer Card Bleed
   Scene 1: ExamGhost: 0.3s Double-Click Solve & Zero Focus Theft
   Scene 2: Study AI Hub: Contingency Table Chi-Square & Cramer's V
   ============================================================================ */
export function StudyFoxDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: 'StudyFox: Toolbar Popup Focus Theft & DOM Answer Card Bleed',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Double-Click Solve & Zero Focus Theft',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: Contingency Table Chi-Square & Cramer&apos;s V',
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
            speedGrader: 'Stopped viewing quiz at 11:14:02 AM (Toolbar popup focus loss) · 1 window.blur Flag',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · Exam in progress',
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
          speedGrader: 'Study AI Workspace · Multi-Model Consensus · 99.8% Academic Precision',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 88, y: 8, clicking: false, label: 'Moving cursor to Chrome toolbar to click StudyFox icon', tag: 'default' };
      } else if (safeProgress < 50) {
        return { x: 92, y: 12, clicking: true, label: 'Toolbar popup steals focus: window.blur fired in Canvas!', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 50, y: 45, clicking: false, label: 'Injected <div class="studyfox-card"> caught by MutationObserver', tag: 'fail' };
      } else {
        return { x: 50, y: 65, clicking: true, label: '6.2s Latency · SpeedGrader blur flag permanently recorded', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 38, y: 40, clicking: true, label: 'Double-Click Question / Alt+S (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 62, y: 65, clicking: false, label: 'HUD: Option B (V = 0.109 · Modest Association)', tag: 'solve' };
      } else {
        return { x: 75, y: 72, clicking: true, label: 'Alt+1 Invisible / Alt+3 Derivation', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Chi-Square Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Sociological Distractors)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Cell Residual Decomposition)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="SOC 2010 Social Stratification & Quantitative Methodology · Canvas Midterm Exam"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/52401/quizzes/69104"
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

          {/* SCENE 0: COMPETITOR FAILURE */}
          {currentScene === 0 && (
            <motion.div
              key="StudyFoxDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">
                  Question 12 · Contingency Table Chi-Square &amp; Cramer&apos;s V Effect Size
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  Survey of N = 1,200 households investigates education (High School, College, Postgrad) and perceived mobility (Decreased, Unchanged, Increased). Observed χ² = 28.74 with df = 4. Critical χ²(0.001, df=4) = 18.47. Calculate Cramer&apos;s V and sociological conclusion.
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>Opening StudyFox toolbar popup outside LMS window...</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">6.2s Delay</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>SpeedGrader Flag Logged: Canvas detected browser window blur when clicking StudyFox Chrome toolbar icon. Unshielded answer card injected into host DOM!</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">6.2s Delay</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>StudyFox operates as an Anki flashcard tool—unshielded popup DOM triggers Canvas blur</span>
                    <span className="text-rose-400 font-bold">UNSHIELDED</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="StudyFoxDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">
                  ExamGhost 0.3s Double-Click Solve &amp; Focus Shield
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  Contingency Analysis: χ² = 28.74 &gt; 18.47 (p &lt; 0.001). k = min(3-1, 3-1) = 2. Cramer&apos;s V = √(28.74 / (1200 × 2)) = 0.109.
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) V = 0.048; fail to reject null; education has zero correlation with mobility (Divided by N² error)
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">B) V = 0.109; statistically significant association (p &lt; 0.001), modest positive mobility correlation</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">
                    0.3s Alt+S ✓
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  C) V = 0.219; massive dominant relationship (Omitted k = 2 in denominator, taking k = 1)
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
              key="StudyFoxDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">Contingency Table Chi-Square &amp; Cramer&apos;s V</span>
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

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2 leading-relaxed">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Claude 3.7 Sonnet (Contingency Table Analysis &amp; Cramer&apos;s V):</strong> Step 1: Degrees of freedom &amp; significance: Table r = 3, c = 3. df = (r - 1)(c - 1) = (2)(2) = 4. Observed χ² = 28.74 &gt; χ²_crit(4, α=0.001) = 18.47 ⟹ p &lt; 0.0001. Null hypothesis of independence is decisively rejected. Step 2: Cramer&apos;s V calculation: k = min(r - 1, c - 1) = 2. V = √(χ² / (N · k)) = √(28.74 / (1200 × 2)) = √(28.74 / 2400) = √0.011975 ≈ 0.1094. In sociological methodology for df = 2, 0.07 ≤ V &lt; 0.21 indicates a modest positive association, consistent with cultural capital theories (Bourdieu, 1984).
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Sociological Theory &amp; Distractor Traps):</strong> Distractor Deconstruction: Option A (V = 0.048) commits an egregious Type II error, falsely dividing by N² or claiming no correlation when χ² = 28.74 &gt;&gt; 18.47. Option C (V = 0.219) omitted k = 2 in the denominator, computing √(28.74 / 600) = 0.219, overstating effect size by a factor of √2. Option D (V = 0.345) confuses non-parametric chi-square testing with Kendall&apos;s tau-b.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Standardized Residuals &amp; Directional Analysis):</strong> {"Cell residual decomposition: Adjusted standardized residual z_ij = (O_ij - E_ij) / √(E_ij (1 - p_i)(1 - p_j)). For Postgraduate (≥ 17 yrs) × 'Increased Mobility': z = +4.12 (p < 0.0001), demonstrating strong positive credential concentration. For High School (≤ 12 yrs) × 'Decreased Mobility': z = +3.68 (p < 0.001), confirming credential inflation effects."}
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
   8. StudyMonkeyDemo:
   PHIL 310 Symbolic Logic & Metalogic · Canvas Midterm Exam
   Scene 0: StudyMonkey.ai: "Standard AI" Model Hallucination, Tab-Switch window.blur & $29/mo Paywall
   Scene 1: ExamGhost: 0.3s Double-Click Solve & Focus Shield Active
   Scene 2: Study AI Hub: Gödel Incompleteness & Tarskian Semantics Proof
   ============================================================================ */
export function StudyMonkeyDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: 'StudyMonkey.ai: "Standard AI" Model Hallucination, Tab-Switch window.blur & $29/mo Paywall',
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
      title: 'Study AI Hub: Gödel Incompleteness & Tarskian Semantics Proof',
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
            speedGrader: 'Tab Switch Alert: Left Canvas to studymonkey.ai · window.blur logged · 1 flag',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · PHIL 310 Exam in progress',
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
          speedGrader: 'Study AI Workspace · Multi-Model Consensus · 99.8% Academic Precision',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 30, y: 30, clicking: false, label: 'Reading Gödel Metalogic Prompt in Canvas', tag: 'default' };
      } else if (safeProgress < 50) {
        return { x: 50, y: 44, clicking: true, label: 'Alt-Tab to studymonkey.ai/dashboard/chat (window.blur logged)', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 86, y: 22, clicking: true, label: 'Standard AI Hallucination: Selects Option A (Syntactically Complete)', tag: 'fail' };
      } else {
        return { x: 28, y: 66, clicking: true, label: 'Hit Paywall: Demands $29/mo Max Upgrade for Advanced AI', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 35, y: 32, clicking: true, label: 'Double-Click Inline Solve (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 30, y: 64, clicking: false, label: 'Option B Highlighted in Closed Shadow DOM (0.3s)', tag: 'solve' };
      } else {
        return { x: 68, y: 84, clicking: false, label: 'Alt+1 Ghost (15% Opacity) · ⌘+Shift+U Panic Wipe Ready', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Diagonalization Lemma)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Tarski Undefinability)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Arithmetical Hierarchy Proof)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="PHIL 310 Symbolic Logic & Metalogic · Canvas Midterm Exam"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/55102/quizzes/91284"
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

          {/* SCENE 0: COMPETITOR FAILURE */}
          {currentScene === 0 && (
            <motion.div
              key="StudyMonkeyDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">
                  Question 15 · Gödel Incompleteness Theorem &amp; Tarskian Truth Undefinability
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  In a formal deductive system T containing first-order Peano Arithmetic (PA), which condition guarantees that the Gödel sentence G_T asserting its own unprovability is true in the standard model ℕ but unprovable in T, and why can True_T(x) not be formalized within T?
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>Alt-Tabbing to studymonkey.ai/dashboard/chat · Querying Standard AI model...</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">9.8s Delay</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>StudyMonkey Standard AI hallucinated Option A (confused consistency with completeness)! Leaving Canvas logged 1 window.blur flag in SpeedGrader!</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">9.8s Delay</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>Paywall: Upgrade to Max plan ($29/mo | $290/yr) for &quot;Advanced AI Model&quot; reasoning</span>
                    <span className="text-rose-400 font-bold">GATED</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="StudyMonkeyDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">
                  ExamGhost 0.3s Double-Click Solve &amp; Focus Shield
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  Metalogic: T consistent and effectively generated ⟹ G_T is Π₁⁰-true in ℕ. Tarski Liar Sentence λ ↔ ¬True_T(⌜λ⌝) prevents formalization.
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) T must be syntactically complete; True_T(x) is definable via diagonal lemma (StudyMonkey Standard AI hallucination)
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">B) T consistent and effectively generated; G_T is Π₁⁰-true in ℕ; Tarski undefinability resolves truth predicate barrier</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">
                    0.3s Alt+S ✓
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  C) T must be second-order categorical; G_T is false in non-standard models ℕ* (Conflates Gentzen ordinal analysis)
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
              key="StudyMonkeyDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">Gödel Incompleteness &amp; Tarskian Semantics Proof</span>
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

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2 leading-relaxed">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Claude 3.7 Sonnet (Formal Proof Theory &amp; Diagonalization Lemma):</strong> Let Bew_T(x) be the canonical Σ₁⁰ provability predicate in PA representing ∃y Proof_T(y, x). By Gödel&apos;s Diagonalization Lemma, there exists a sentence G_T such that PA ⊢ G_T ↔ ¬Bew_T(⌜G_T⌝). If T ⊢ G_T, then by Σ₁⁰-completeness, T ⊢ Bew_T(⌜G_T⌝), yielding T ⊢ ¬G_T, contradicting consistency. If T ⊢ ¬G_T, then T ⊢ Bew_T(⌜G_T⌝), meaning there exists a proof of G_T, so by sound deduction G_T is true, contradicting consistency. Hence G_T is undecidable in T. Because G_T asserts that no natural number codes a proof of G_T, and indeed no such proof exists, G_T is true in the standard model ℕ.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Tarski Truth Undefinability &amp; Distractor Traps):</strong> Option A is a catastrophic error common to budget chatbot wrappers. If a theory were syntactically complete, every sentence φ would satisfy T ⊢ φ or T ⊢ ¬φ, which Gödel&apos;s first theorem directly refutes. Tarski&apos;s Theorem proves that no consistent theory extending Robinson arithmetic Q can define its own truth predicate: if True_T(x) existed, diagonalizing ψ(x) = ¬True_T(x) would produce a sentence λ such that T ⊢ λ ↔ ¬True_T(⌜λ⌝), deriving T ⊢ λ ↔ ¬λ, an immediate contradiction.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Arithmetical Hierarchy &amp; Π₁⁰ Invariance Proof):</strong> The Gödel sentence is strictly Π₁⁰: G_T ≡ ∀y ¬Proof_T(y, ⌜G_T⌝), where Proof_T is primitive recursive (Δ₀⁰). By Gentzen&apos;s consistency proof, consistency of PA is provable in PA + TI(ε_0), but Option C conflates Gentzen&apos;s ordinal analysis with second-order categoricity (which fails in first-order logic by the Löwenheim-Skolem theorem). Option D erroneously claims polynomial-time decidability for an undecidable problem.
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
   9. TestWhizDemo:
   PSYC 301 / STAT 315 Advanced Multivariate Statistics · Canvas Midterm Exam
   Scene 0: TestWhiz: 72h Trial Trap ($5.99/wk), Unrendered Math & "Incognito" window.blur
   Scene 1: ExamGhost: 0.3s Double-Click Solve & Focus Shield Active
   Scene 2: Study AI Hub: Repeated Measures Sphericity & ANOVA Decomposition
   ============================================================================ */
export function TestWhizDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: 'TestWhiz: 72h Trial Trap ($5.99/wk), Unrendered Math & "Incognito" window.blur',
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
      title: 'Study AI Hub: Repeated Measures Sphericity & ANOVA Decomposition',
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
            speedGrader: 'Incognito Failure: Unshielded DOM Click · window.blur logged · 1 flag',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · PSYC 301 Exam in progress',
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
          speedGrader: 'Study AI Workspace · Multi-Model Consensus · 99.8% Academic Precision',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 30, y: 30, clicking: false, label: 'Reading 2-Way Mixed ANOVA Sphericity Prompt', tag: 'default' };
      } else if (safeProgress < 50) {
        return { x: 52, y: 44, clicking: true, label: 'Click TestWhiz Icon: Canvas fires window.blur (Incognito fails!)', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 86, y: 22, clicking: true, label: 'Unrendered ASCII Math: Strips LaTeX & selects wrong Option A', tag: 'fail' };
      } else {
        return { x: 28, y: 66, clicking: true, label: '72h Trial Expired: Auto-billing $5.99/week ($311.48/year)', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 35, y: 32, clicking: true, label: 'Double-Click Inline Solve (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 30, y: 64, clicking: false, label: 'Option B Highlighted in Closed Shadow DOM (0.3s)', tag: 'solve' };
      } else {
        return { x: 68, y: 84, clicking: false, label: 'Alt+1 Ghost / Alt+2 Compact / ⌘+Shift+U Panic Wipe Ready', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Greenhouse-Geisser)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Equal n Sphericity Fallacy)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Interaction Contrasts Proof)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="PSYC 301 Advanced Research Methods & Multivariate Statistics · Canvas Midterm Exam"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/57284/quizzes/83190"
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

          {/* SCENE 0: COMPETITOR FAILURE */}
          {currentScene === 0 && (
            <motion.div
              key="TestWhizDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">
                  Question 20 · 2×3 Mixed-Design ANOVA Mauchly Sphericity Violation
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  In a 2×3 mixed ANOVA testing Cognitive Load (High vs Low, n=20) across Time (Baseline, Post-Intervention, 24h Follow-Up), Mauchly&apos;s test shows sphericity violation (W = 0.684, p = 0.012, ε̂_GG = 0.742). Omnibus interaction F(2, 76) = 6.45, p = 0.0025, MSE = 14.80. Find Greenhouse-Geisser corrected interaction df and p-value.
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>TestWhiz &quot;Incognito&quot; extension parsing unrendered ASCII math...</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">7.2s Delay</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>Incognito Failure: Unshielded DOM click fired window.blur (1 flag)! Stripped LaTeX symbols and selected wrong Option A (claimed equal n=20 ignores sphericity).</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">7.2s Delay</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>Billing trap: 72-hour trial auto-converts to $5.99/week ($311.48/year auto-charge)</span>
                    <span className="text-rose-400 font-bold">TRAP</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="TestWhizDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">
                  ExamGhost 0.3s Double-Click Solve &amp; Focus Shield
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  Greenhouse-Geisser adjustment: ε̂ = 0.742. Adjusted df = (1.484, 56.392), F = 6.45, p = 0.0061. Simple main effect t(19) = 3.14, p_adj = 0.016.
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) F_uncorrected(2, 76) = 6.45, p = 0.0025; sphericity can be ignored because n_1 = n_2 = 20 (TestWhiz generic error)
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">B) Corrected df = (1.484, 56.392), F(1.484, 56.392) = 6.45, p = 0.0061; pairwise t(19) = 3.14, p_adj = 0.016</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">
                    0.3s Alt+S ✓
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  C) Corrected df = (1.000, 38.000) using Lower-Bound epsilon ε_LB = 0.50 (Overly conservative floor)
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
              key="TestWhizDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">Repeated Measures Sphericity &amp; ANOVA Decomposition</span>
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

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2 leading-relaxed">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Claude 3.7 Sonnet (Greenhouse-Geisser Correction Derivation):</strong> When repeated measures violate compound symmetry and sphericity, F-distribution degrees of freedom are positively biased. The Greenhouse-Geisser epsilon estimate ε̂ = 0.742. Adjusted numerator df: df_1^* = ε̂(k - 1) = 0.742 × 2 = 1.484. Adjusted error df: df_2^* = ε̂(N - g)(k - 1) = 0.742 × (40 - 2) × 2 = 0.742 × 76 = 56.392. Evaluating F(1.484, 56.392) = 6.45 against the adjusted F-distribution yields p = 0.0061, preserving family-wise error rate control.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Equal n Fallacy &amp; Contrast Breakdown):</strong> Option A reflects a ubiquitous student mistake: confusing between-subjects ANOVA robustness to variance heterogeneity (homoscedasticity) with repeated-measures sphericity! Equal group sizes (n_1 = n_2 = 20) protect against Levene&apos;s test violations between subjects, but CANNOT protect against sphericity violations across repeated measures, where Type I error rates inflate from α = 0.05 up to 0.15. Option C is the Lower-Bound epsilon ε_LB = 1/(k-1) = 0.50, which is only a worst-case floor.
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Simple Main Effects &amp; Interaction Contrasts):</strong> Decomposition Formalism: Simple main effect of Time at High Load: pairwise contrast between Post-Intervention (M_2) and 24h Follow-Up (M_3) yields t = (Ȳ_12 - Ȳ_13) / √(2 · MS_error / n) = 4.82 / √(2(14.80)/20) = 3.96. Bonferroni adjustment for 3 pairwise comparisons gives p_adj = 3 × 0.0053 = 0.016, proving significant treatment decay specifically in the High Load condition.
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
   10. TrustStudyDemo:
   BUSN 420 / LAW 615 Corporate Ethics & Securities Regulation · Canvas Midterm
   Scene 0: TrustStudy: DNS Dead (no such host), 25s Alt+X Hint Loop & SpeedGrader Flags
   Scene 1: ExamGhost: 0.3s Double-Click Solve & 99.98% Edge Uptime SLA
   Scene 2: Study AI Hub: SOX Compliance, Material Weakness & Criminal Liability
   ============================================================================ */
export function TrustStudyDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: 'TrustStudy: DNS Dead (no such host), 25s Alt+X Hint Loop & SpeedGrader Flags',
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: 'ExamGhost: 0.3s Double-Click Solve & 99.98% Edge Uptime SLA',
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: 'Study AI Hub: SOX Compliance, Material Weakness & Criminal Liability',
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
            speedGrader: 'DNS Error: truststudy.ai unreachable · window.blur logged · 1 flag',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          }
        : {
            speedGrader: '0 window.blur flags · BUSN 420 Exam in progress',
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
          speedGrader: 'Study AI Workspace · Multi-Model Consensus · 99.8% Academic Precision',
          focusShield: true,
          blurEvents: 0,
          status: 'clean',
        };

  const getCursor = (): CursorState => {
    if (currentScene === 0) {
      if (safeProgress < 25) {
        return { x: 30, y: 30, clicking: false, label: 'Reading SOX Section 302/404/906 Prompt', tag: 'default' };
      } else if (safeProgress < 50) {
        return { x: 50, y: 44, clicking: true, label: 'Press Alt+X: Guess-first loop stalls timer · Canvas fires window.blur', tag: 'fail' };
      } else if (safeProgress < 75) {
        return { x: 86, y: 22, clicking: true, label: 'DNS Failure: truststudy.ai: no such host (Domain Dead)', tag: 'fail' };
      } else {
        return { x: 28, y: 66, clicking: true, label: 'SpeedGrader Flag: Student departed quiz for 26 seconds', tag: 'fail' };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 35, y: 32, clicking: true, label: 'Double-Click Inline Solve (0.3s)', tag: 'solve' };
      } else if (safeProgress < 70) {
        return { x: 30, y: 64, clicking: false, label: 'Option B Highlighted in Closed Shadow DOM (0.3s)', tag: 'solve' };
      } else {
        return { x: 68, y: 84, clicking: false, label: 'Alt+1 Ghost Mode · ⌘+Shift+U Panic Wipe Ready', tag: 'invisible' };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (PCAOB AS 5 Analysis)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (5% Safe Harbor Fallacy)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (GAAP ASC 606 Control Proof)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title="BUSN 420 Corporate Ethics & Securities Regulation · Canvas Midterm Exam"
        domainBadge="CANVAS LMS"
        browserUrl="https://canvas.instructure.com/courses/63102/quizzes/79410"
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

          {/* SCENE 0: COMPETITOR FAILURE */}
          {currentScene === 0 && (
            <motion.div
              key="TrustStudyDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">
                  Question 17 · Sarbanes-Oxley §§ 302, 404, 906 ICFR Material Weakness
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  Under Sections 302, 404, and 906 of SOX and PCAOB AS 5, an accelerated filer&apos;s CFO discovers automated revenue controls allowed premature booking of conditional bill-and-hold contracts of $4.2M (1.8% of net income). What mandatory disclosures and liabilities are triggered upon Form 10-K filing?
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>Triggering TrustStudy Alt+X · &quot;Select your preliminary guess first before unlocking hints!&quot;</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">26.0s Stalled</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>DNS Failure: truststudy.ai (no such host)! Extension delisted from Chrome Web Store. 26s departure logged in SpeedGrader!</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">DEAD HOST</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>Active recall guess-first loop wastes exam time; backend server permanently offline</span>
                    <span className="text-rose-400 font-bold">OFFLINE</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="TrustStudyDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">
                  ExamGhost 0.3s Double-Click Solve &amp; Focus Shield
                </span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  SOX §§ 302, 404 &amp; 906: Material weakness in ICFR must be disclosed in Item 9A of Form 10-K; Section 906 criminal liability applies to knowing officer certification.
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  A) Minor deficiency; disclosure deferred under SEC safe harbor for immaterial misstatements (&lt;5% net income)
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">B) CFO &amp; CEO must disclose &apos;material weakness&apos; in ICFR under Item 9A; Section 906 knowing false certification triggers criminal liability</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">
                    0.3s Alt+S ✓
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  C) Section 404(b) attestation is automatically waived for bill-and-hold contracts under ASC 606
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
              key="TrustStudyDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">SOX Compliance, Material Weakness &amp; Criminal Liability</span>
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

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 text-xs text-slate-300 space-y-2 leading-relaxed">
                {activeModelTab === 'claude' && (
                  <p>
                    <strong>Claude 3.7 Sonnet (Securities Law &amp; PCAOB AS 5 Statutory Analysis):</strong> Under PCAOB Auditing Standard No. 5 (AS 5, Appendix A), a &apos;material weakness&apos; is a deficiency, or combination of deficiencies, in ICFR such that there is a reasonable possibility that a material misstatement will not be prevented or detected on a timely basis. Even if the current misstatement ($4.2M) does not necessitate immediate restatement under SAB Topic 1.M, the breakdown in automated revenue controls creates an unmonitored risk channel. Under SOX § 302(a)(4), corporate officers must evaluate and present conclusions regarding ICFR effectiveness in Item 9A of Form 10-K, certifying that any material weaknesses were disclosed to the audit committee and independent auditors.
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (The 5% Safe Harbor Fallacy &amp; § 906 Criminal Liability):</strong> Option A cites the widely debunked &apos;5% net income rule of thumb&apos;. In SEC Staff Accounting Bulletin No. 99 (SAB 99), the SEC explicitly rejected exclusive reliance on quantitative thresholds: misstatements affecting revenue recognition, management compensation, or debt covenants are material regardless of percentage. Section 906 certifications carry direct criminal penalties (18 U.S.C. § 1350): signing &apos;knowing&apos; that periodic reports do not comport with all requirements carries fines up to $1,000,000 and 10 years imprisonment; &apos;willful&apos; false certification escalates to $5,000,000 and 20 years. Option D is false: § 906 applies specifically to the signing corporate officers (CEO and CFO).
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (GAAP ASC 606 Bill-and-Hold Criteria &amp; ICFR Failure Modes):</strong> Under FASB ASC 606-10-55-83, for a customer to have obtained control in a bill-and-hold arrangement, four strict criteria must be met: (1) substantive business purpose, (2) separate identification as belonging to the customer, (3) readiness for physical transfer, and (4) entity inability to redirect the product. Automated recognition without verifying delivery authorization constitutes a severe control failure in the &apos;Control Activities&apos; and &apos;Information &amp; Communication&apos; components of the COSO Internal Control Integrated Framework (2013), confirming a material weakness in ICFR design.
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
