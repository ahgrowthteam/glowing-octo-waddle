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
} from 'lucide-react';

/* ============================================================================
   WolframalphaCauchyEulerDemo:
   MATH 2415 Ordinary Differential Equations · Canvas Midterm Exam
   Scene 0: Wolfram|Alpha: 680-Character Cap Truncation & 8.0s Timeout
   Scene 1: ExamGhost: 0.3s Alt+S Snip Solve & Focus Shield
   Scene 2: Study AI Hub: Cauchy-Euler Resonance & Variation of Parameters
   ============================================================================ */
export function WolframalphaCauchyEulerDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "Wolfram|Alpha: 680-Character Cap Truncation & 8.0s Timeout",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: "ExamGhost: 0.3s Alt+S Snip Solve & Focus Shield",
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: "Study AI Hub: Cauchy-Euler Resonance & Variation of Parameters",
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
            speedGrader: "Stopped viewing quiz at 10:14:02 AM (14.8s tab switch) · 1 window.blur Flag",
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
        return { x: 28, y: 35, clicking: false, label: "Pasting ODE into Wolfram Query Box", tag: "default" };
      } else if (safeProgress < 50) {
        return { x: 50, y: 48, clicking: true, label: "Error: 680-Character Cap Truncated Input!", tag: "fail" };
      } else if (safeProgress < 75) {
        return { x: 88, y: 15, clicking: true, label: "Tab Switch → wolframalpha.com (Blur Logged)", tag: "fail" };
      } else {
        return { x: 30, y: 65, clicking: false, label: "14.8s Lag · Canvas SpeedGrader Flagged", tag: "fail" };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 38, y: 40, clicking: true, label: "Alt+S Snip / Double-Click (0.3s)", tag: "solve" };
      } else if (safeProgress < 70) {
        return { x: 62, y: 65, clicking: false, label: "HUD: Option B (13/3 e² ≈ 32.02)", tag: "solve" };
      } else {
        return { x: 75, y: 72, clicking: true, label: "Alt+1 Invisible / Alt+3 Derivation", tag: "invisible" };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Formal Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Analytical Formalism)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={"MATH 2415 Ordinary Differential Equations · Canvas Midterm Exam"}
        domainBadge={"CANVAS LMS"}
        browserUrl={"https://canvas.instructure.com/courses/41920/quizzes/88102"}
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
              key="WolframalphaCauchyEulerDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">{"Question 14 · Second-Order Non-Homogeneous Cauchy-Euler ODE"}</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Solve x² y''(x) - 3x y'(x) + 4y(x) = 8x² ln(x) for x > 0, subject to initial conditions y(1) = 2 and y'(1) = 5. Determine the exact value of y(e)."}
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>{"Wolfram|Alpha query engine parsing: Character limit cap 680 / 680 characters (Input truncated)..."}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">{"14.8s Delay"}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{"Computation timed out (8.00s exceeded) · Tab switch to wolframalpha.com fired 1 window.blur flag in Canvas SpeedGrader!"}</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">{"14.8s Delay"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>{"Free tier query cut off · Upgrade to Wolfram|Alpha Pro Premium ($9.99/mo) for extended 30s limits"}</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="WolframalphaCauchyEulerDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Solve x² y''(x) - 3x y'(x) + 4y(x) = 8x² ln(x) for x > 0, subject to initial conditions y(1) = 2 and y'(1) = 5. Determine the exact value of y(e)."}
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  {"A) y(e) = (11/3) e² (Dropped derivative product rule term on x² ln x)"}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{"B) y(e) = (13/3) e² ≈ 32.02 (Exact analytical solution with resonance)"}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">{"0.3s Alt+S ✓"}</span>
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
              key="WolframalphaCauchyEulerDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{"MATH 2415 Cauchy-Euler Resonance Proof"}</span>
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
                    <strong>Claude 3.7 Sonnet (Formal Derivation):</strong> {"Characteristic equation for Euler operator xʳ: r(r-1) - 3r + 4 = 0 ⟹ (r-2)² = 0. Repeated root r = 2 gives homogeneous basis y₁(x) = x², y₂(x) = x² ln(x). Wronskian determinant W(y₁, y₂) = x³. Variation of parameters integrals yield u₁'(x) = -8(ln x)²/x ⟹ u₁(x) = -(8/3)(ln x)³, and u₂'(x) = 8(ln x)/x ⟹ u₂(x) = 4(ln x)². Particular solution yₚ(x) = (4/3) x² (ln x)³. General solution y(x) = c₁ x² + c₂ x² ln(x) + (4/3) x² (ln x)³. Initial conditions: y(1) = c₁ = 2, y'(1) = 2(2) + c₂ = 5 ⟹ c₂ = 1. Evaluating at x = e yields y(e) = 2e² + e² + (4/3)e² = (13/3)e²."}
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor Analysis):</strong> {"Exam Trap Analysis: Substituting x = eᵗ gives y''(t) - 4y'(t) + 4y(t) = 8t e²ᵗ. The forcing function e²ᵗ resonates with the double characteristic root r = 2, requiring a t² multiplier so yₚ = t²(At+B)e²ᵗ = At³ e²ᵗ. Forgetting this resonance produces distractor Option C. Differentiating y₂(x) = x² ln x requires the product rule; dropping the derivative term at x=1 yields Option A."}
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Proof):</strong> {"Green's Function Formalism: The causal Green's function for L = x² D² - 3x D + 4 is G(x, ξ) = [y₁(ξ)y₂(x) - y₁(x)y₂(ξ)] / [ξ² W(ξ)] = x²(ln x - ln ξ)/ξ. Convolving with forcing term f(ξ) = 8 ln ξ gives yₚ(x) = 8x² ∫₁ˣ [(ln x - ln ξ)ln ξ / ξ] dξ = (4/3)x²(ln x)³. Confirms Wronskian normalization without coordinate transformations."}
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
   MathosaiContourIntegralDemo:
   MATH 20C Multivariable Calculus & Complex Analysis · Canvas Midterm
   Scene 0: Mathos AI: OCR Misread, Substitution Hallucination & $9.98/wk Paywall
   Scene 1: ExamGhost: 0.3s Snap-It Vision OCR & Instant Solve
   Scene 2: Study AI Hub: Complex Contour Integration & Residue Calculus
   ============================================================================ */
export function MathosaiContourIntegralDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "Mathos AI: OCR Misread, Substitution Hallucination & $9.98/wk Paywall",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: "ExamGhost: 0.3s Snap-It Vision OCR & Instant Solve",
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: "Study AI Hub: Complex Contour Integration & Residue Calculus",
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
            speedGrader: "Stopped viewing quiz at 14:22:15 (21.3s in mathos.ai tab) · 1 window.blur Flag",
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
        return { x: 32, y: 38, clicking: false, label: "Uploading Integral to Mathos AI", tag: "default" };
      } else if (safeProgress < 50) {
        return { x: 55, y: 52, clicking: true, label: "OCR Error: Hallucinated x=tan(θ) Substitution!", tag: "fail" };
      } else if (safeProgress < 75) {
        return { x: 50, y: 50, clicking: true, label: "Paywall: Upgrade to Mathos Prime $9.98/wk", tag: "fail" };
      } else {
        return { x: 88, y: 15, clicking: false, label: "Canvas SpeedGrader logs window.blur flag", tag: "fail" };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 36, y: 36, clicking: true, label: "Alt+S Snap-It Vision OCR (0.3s)", tag: "snip" };
      } else if (safeProgress < 70) {
        return { x: 60, y: 62, clicking: false, label: "HUD: Option B (π / 2√2 ≈ 1.1107)", tag: "solve" };
      } else {
        return { x: 70, y: 72, clicking: true, label: "Alt+1 Invisible / Alt+3 Derivation", tag: "invisible" };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Formal Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Analytical Formalism)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={"MATH 20C Multivariable Calculus & Complex Analysis · Canvas Midterm"}
        domainBadge={"CANVAS LMS"}
        browserUrl={"https://canvas.instructure.com/courses/33104/quizzes/77109"}
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
              key="MathosaiContourIntegralDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">{"Question 9 · Improper Rational Contour Integration"}</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Evaluate the definite improper integral: I = ∫[0 to ∞] x² / (x⁴ + 1) dx using complex contour integration or exact algebraic substitution."}
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>{"Mathos AI (MathGPTPro) OCR parsing: Scanning formula image at mathos.ai/app/ask..."}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">{"21.3s Delay"}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{"OCR misparsed x⁴+1 as (x²+1)² · Hallucinated x=tan(θ) substitution · Tab switch to mathos.ai fired 1 window.blur flag!"}</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">{"21.3s Delay"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>{"Daily limit reached (10 solves) · Upgrade to Mathos Prime for $9.98/week ($39.92/mo) to unlock derivation"}</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="MathosaiContourIntegralDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Evaluate the definite improper integral: I = ∫[0 to ∞] x² / (x⁴ + 1) dx using complex contour integration or exact algebraic substitution."}
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  {"A) I = π / 4 (Dropped √2 factor in denominator)"}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{"B) I = π / (2√2) = (π√2)/4 ≈ 1.1107 (Exact Cauchy Residue Evaluation)"}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">{"0.3s OCR ✓"}</span>
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
              key="MathosaiContourIntegralDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{"MATH 20C Contour Integration & Residues"}</span>
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
                    <strong>Claude 3.7 Sonnet (Formal Derivation):</strong> {"Residue Calculus in Complex Plane: Since the integrand f(x) = x²/(x⁴+1) is even, I = (1/2) ∫[-∞ to ∞] x²/(x⁴+1) dx. Poles of f(z) = z²/(z⁴+1) occur at z⁴ = -1 = e^(iπ). Upper half-plane poles are z₀ = e^(iπ/4) and z₁ = e^(i3π/4). Residue formula for simple pole: Res(f, zₖ) = zₖ² / (4zₖ³) = 1 / (4zₖ) = (1/4) zₖ⁻¹. Thus Res(f, z₀) = (1-i)/(4√2) and Res(f, z₁) = (-1-i)/(4√2). Sum of residues = -2i / (4√2) = -i / (2√2). By Cauchy's Residue Theorem: ∫[-∞ to ∞] x²/(x⁴+1) dx = 2πi (-i / (2√2)) = π / √2. Pre-multiplying by 1/2 yields I = π / (2√2)."}
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor Analysis):</strong> {"Real Variable Symmetry & Inversion Method: Let x = 1/t, dx = -dt/t². Then I = ∫[0 to ∞] (1/t²) / (1/t⁴ + 1) dt/t² = ∫[0 to ∞] 1/(t⁴+1) dt. Adding both forms: 2I = ∫[0 to ∞] (x²+1)/(x⁴+1) dx = ∫[0 to ∞] (1 + 1/x²) / ((x - 1/x)² + 2) dx. Substituting u = x - 1/x with du = (1 + 1/x²)dx gives 2I = ∫[-∞ to ∞] du / (u² + 2) = [ (1/√2) arctan(u/√2) ] = π / √2 ⟹ I = π / (2√2). Missing the 1/2 multiplier causes students to pick distractor Option C."}
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Proof):</strong> {"Euler Beta Function Representation: Substitute u = x⁴, x = u^(1/4), dx = (1/4) u^(-3/4) du. The integral becomes I = (1/4) ∫[0 to ∞] u^(-1/4) / (1+u) du. Using the Beta function identity B(p, 1-p) = ∫[0 to ∞] u^(p-1)/(1+u) du = π / sin(pπ) with p = 3/4: I = (1/4) B(3/4, 1/4) = (1/4) π / sin(3π/4) = (1/4) π / (1/√2) = π / (2√2). Verified in 1 step."}
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
   SolvelyOpticsSnellDemo:
   PHYS 212 Wave Optics & Electromagnetism · Final Exam
   Scene 0: Solvely: Diagram Bounding-Box Failure & Mobile Camera Trap
   Scene 1: ExamGhost: 0.3s Hybrid Vision Snip & Closed Shadow DOM
   Scene 2: Study AI Hub: Prism Refraction, Snell's Law & TIR Proof
   ============================================================================ */
export function SolvelyOpticsSnellDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "Solvely: Diagram Bounding-Box Failure & Mobile Camera Trap",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: "ExamGhost: 0.3s Hybrid Vision Snip & Closed Shadow DOM",
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: "Study AI Hub: Prism Refraction, Snell's Law & TIR Proof",
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
            speedGrader: "Stopped viewing quiz at 09:18:44 (34.2s sidepanel delay) · 1 window.blur Flag",
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
        return { x: 26, y: 34, clicking: false, label: "Snipping Prism Optics Diagram", tag: "default" };
      } else if (safeProgress < 50) {
        return { x: 48, y: 46, clicking: true, label: "Solvely Error: Diagram Bounding Box Failed!", tag: "fail" };
      } else if (safeProgress < 75) {
        return { x: 80, y: 55, clicking: true, label: "Scan Phone QR Code (Webcam Proctor Flag)", tag: "fail" };
      } else {
        return { x: 50, y: 85, clicking: false, label: "SpeedGrader: 34.2s delay · 1 blur flag", tag: "alert" };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 34, y: 36, clicking: true, label: "Alt+S Hybrid Vision Snip (0.3s)", tag: "snip" };
      } else if (safeProgress < 70) {
        return { x: 58, y: 64, clicking: false, label: "HUD: Option A (δ = 39.3°, No TIR)", tag: "solve" };
      } else {
        return { x: 68, y: 72, clicking: true, label: "Alt+1 Invisible / Alt+3 Derivation", tag: "invisible" };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Formal Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Analytical Formalism)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={"PHYS 212 Wave Optics & Electromagnetism · Final Exam"}
        domainBadge={"CANVAS LMS"}
        browserUrl={"https://canvas.instructure.com/courses/61204/quizzes/94310"}
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
              key="SolvelyOpticsSnellDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">{"Question 18 · Triangular Prism Refraction & Total Internal Reflection"}</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Monochromatic ray (λ=589 nm) enters equilateral triangular glass prism (A=60.0°, n=1.520) at θ₁=45.0°. Determine total angle of deviation δ and confirm if TIR occurs at the second face."}
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>{"Solvely Chrome extension v0.8.4 parsing ray diagram: Bounding box parsing error..."}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">{"34.2s Delay"}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{"Unable to extract geometric vector angles · Solvely displays QR code demanding mobile camera scan · iframe-sidepanel.js fired window.blur!"}</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">{"34.2s Delay"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>{"Mobile camera scan triggers webcam proctoring gaze flag · Solvely Pro $12.99/mo paywall prompt"}</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="SolvelyOpticsSnellDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Monochromatic ray (λ=589 nm) enters equilateral triangular glass prism (A=60.0°, n=1.520) at θ₁=45.0°. Determine total angle of deviation δ and confirm if TIR occurs at the second face."}
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  {"A) δ = 39.3°, Ray refracts into air (No TIR, r₂ = 32.3° < θ_c = 41.1°)"}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{"A) δ = 39.3°, Ray refracts into air (No TIR, r₂ = 32.3° < θ_c = 41.1°)"}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">{"0.3s Snip ✓"}</span>
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
              key="SolvelyOpticsSnellDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{"PHYS 212 Geometric Optics & TIR"}</span>
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
                    <strong>Claude 3.7 Sonnet (Formal Derivation):</strong> {"Rigorous Geometric Optics & TIR Proof: At first interface: 1.000 · sin(θ₁) = n · sin(r₁) ⟹ sin(r₁) = sin(45.0°)/1.520 = 0.46520 ⟹ r₁ = 27.72°. Apex geometry for equilateral prism requires r₁ + r₂ = A = 60.00° ⟹ r₂ = 60.00° - 27.72° = 32.28°. Critical angle for glass-air interface: sin(θ_c) = 1/n = 1/1.520 = 0.65789 ⟹ θ_c = 41.14°. Because internal angle r₂ = 32.28° < θ_c = 41.14°, Total Internal Reflection does NOT occur. At second interface: n · sin(r₂) = 1.000 · sin(θ₂) ⟹ sin(θ₂) = 1.520 · sin(32.28°) = 0.81177 ⟹ θ₂ = 54.27°. Total angular deviation δ = θ₁ + θ₂ - A = 45.00° + 54.27° - 60.00° = 39.27° ≈ 39.3°."}
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor Analysis):</strong> {"Exam Trap Breakdown: Distractor Option B incorrectly compares the incident angle θ₁ = 45° with critical angle θ_c = 41.1°, concluding TIR occurs. This is a fatal optical error: critical angle checks must occur inside the medium at angle r₂, not external angle θ₁. Distractor Option D calculates minimum deviation δ_m = 2 arcsin(n sin(A/2)) - A = 38.92°, which only occurs at symmetric incidence θ₁ = 49.46°, not θ₁ = 45°."}
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Proof):</strong> {"Sellmeier Angular Dispersion Analysis: Angular dispersion through the prism is dδ/dn = sin A / (cos θ₂ cos r₁) = sin 60° / (cos 54.27° cos 27.72°) = 0.8660 / (0.5840 · 0.8852) = 1.675 rad/RIU. For crown glass across visible spectrum (F to C Fraunhofer lines, Δn = 0.0086), the angular chromatic splitting is Δδ = 1.675 · 0.0086 = 0.0144 rad = 0.82°."}
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
   FastsolveBraytonCycleDemo:
   ME 200 Thermodynamics II · Power Generation Exam
   Scene 0: FastSolve: HTTP 429 Mid-Exam Crash & DOM Mutation Flag
   Scene 1: ExamGhost: 0.3s Dedicated Cluster & Read-Only Stealth HUD
   Scene 2: Study AI Hub: Regenerative Gas Turbine State Analysis
   ============================================================================ */
export function FastsolveBraytonCycleDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "FastSolve: HTTP 429 Mid-Exam Crash & DOM Mutation Flag",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: "ExamGhost: 0.3s Dedicated Cluster & Read-Only Stealth HUD",
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: "Study AI Hub: Regenerative Gas Turbine State Analysis",
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
            speedGrader: "DOM Mutation Warning: Untrusted click (isTrusted: false) on Radio Option A",
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
        return { x: 28, y: 35, clicking: false, label: "Clicking FastSolve Solve Button", tag: "default" };
      } else if (safeProgress < 50) {
        return { x: 50, y: 50, clicking: true, label: "HTTP 429 Rate Limit Crash! Server Busy", tag: "fail" };
      } else if (safeProgress < 75) {
        return { x: 30, y: 65, clicking: true, label: "Canvas Flagged: isTrusted: false Synthetic Click", tag: "fail" };
      } else {
        return { x: 80, y: 80, clicking: false, label: "SpeedGrader alert: DOM mutation detected", tag: "alert" };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 35, y: 34, clicking: true, label: "Double-Click / Alt+1 Stealth Mode (0.3s)", tag: "solve" };
      } else if (safeProgress < 70) {
        return { x: 58, y: 62, clicking: false, label: "HUD: Option B (η_th = 54.9%)", tag: "solve" };
      } else {
        return { x: 72, y: 72, clicking: true, label: "⌘+Shift+U Instant RAM Wipe", tag: "invisible" };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Formal Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Analytical Formalism)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={"ME 200 Thermodynamics II · Power Generation Exam"}
        domainBadge={"CANVAS LMS"}
        browserUrl={"https://canvas.instructure.com/courses/52019/quizzes/83190"}
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
              key="FastsolveBraytonCycleDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">{"Question 11 · Regenerative Brayton Gas Turbine Thermal Efficiency"}</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"An ideal regenerative gas-turbine Brayton cycle operates on air with pressure ratio r_p = 8.0, T₁ = 300 K, T₃ = 1300 K, regenerator effectiveness ε = 0.80, k = 1.4, c_p = 1.005 kJ/kg·K. Calculate thermal efficiency η_th."}
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>{"FastSolve v3.3.15 dispatching query to shared Gemini Flash endpoint..."}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">{"12.8s Delay"}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{"[HTTP 429 Too Many Requests] Server capacity exhausted on shared cluster · Injected script dispatched synthetic isTrusted: false click!"}</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">{"12.8s Delay"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>{"FastSolve auto-rebills $9.99/week · Question logs stored permanently on unencrypted database"}</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="FastsolveBraytonCycleDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"An ideal regenerative gas-turbine Brayton cycle operates on air with pressure ratio r_p = 8.0, T₁ = 300 K, T₃ = 1300 K, regenerator effectiveness ε = 0.80, k = 1.4, c_p = 1.005 kJ/kg·K. Calculate thermal efficiency η_th."}
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  {"A) η_th = 44.8% (Calculated non-regenerative simple Brayton efficiency)"}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{"B) η_th = 54.9% (Exact regenerative efficiency with ε = 0.80)"}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">{"0.3s Stealth ✓"}</span>
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
              key="FastsolveBraytonCycleDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{"ME 200 Gas Turbine Cycle Optimization"}</span>
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
                    <strong>Claude 3.7 Sonnet (Formal Derivation):</strong> {"Thermodynamic State Equations & Enthalpy Balances: Pressure ratio r_p = 8.0. Isentropic temperature exponent (k-1)/k = 0.4/1.4 = 2/7 ≈ 0.2857. Compressor outlet: T₂ₛ = T₁ · r_p^((k-1)/k) = 300 · 8.0^(2/7) = 543.43 K. Turbine outlet: T₄ₛ = T₃ / r_p^((k-1)/k) = 1300 / 1.81145 = 717.66 K. Maximum regenerator heat transfer: q_regen,max = c_p (T₄ₛ - T₂ₛ) = c_p (717.66 - 543.43) = c_p (174.23 K). Actual heat transfer with ε = 0.80: q_regen = 0.80 · c_p(174.23) = c_p (139.38 K). Combustor inlet: T_x = T₂ₛ + 139.38 = 682.81 K. Heat input: q_in = c_p (T₃ - T_x) = c_p (1300 - 682.81) = c_p (617.19 K). Net work: w_net = w_turb - w_comp = c_p[(1300 - 717.66) - (543.43 - 300)] = c_p(582.34 - 243.43) = c_p(338.91 K). Thermal efficiency: η_th = w_net / q_in = 338.91 / 617.19 = 54.91% ≈ 54.9%."}
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor Analysis):</strong> {"Distractor Analysis & FastSolve Shortcut Trap: FastSolve routes math queries to Gemini Flash, which often defaults to the standard non-regenerative formula η_std = 1 - 1/r_p^((k-1)/k) = 1 - 1/1.81145 = 44.80% (Option A), completely omitting the regenerator. Option C (58.2%) incorrectly assumes an ideal regenerator (ε = 1.0, T_x = T₄ₛ), neglecting realistic heat exchanger thermal pinches."}
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Proof):</strong> {"Second-Law Exergy Destruction Analysis: The entropy generation rate across the regenerator is S_gen,regen = m c_p [ln(T_x/T₂) + ln(T_y/T₄)] where T_y = T₄ - 139.38 = 578.28 K. Evaluating: S_gen = m c_p [ln(682.81/543.43) + ln(578.28/717.66)] = 0.0124 m c_p. The associated exergy destruction is X_dest = T₀ S_gen = 300 · 0.0124 · 1.005 = 3.74 kJ/kg."}
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
   MindkoHermitianMatrixDemo:
   PHYS 320 / MATH 214 Quantum Mechanics & Linear Algebra · Final Exam
   Scene 0: MindKo: UTF-8 Matrix Corruption & Alt+Shift+2 Sidepanel Blur
   Scene 1: ExamGhost: 0.3s Native LaTeX Parsing & Zero Blur
   Scene 2: Study AI Hub: Hermitian Spectral Decomposition & Pauli Projections
   ============================================================================ */
export function MindkoHermitianMatrixDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "MindKo: UTF-8 Matrix Corruption & Alt+Shift+2 Sidepanel Blur",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: "ExamGhost: 0.3s Native LaTeX Parsing & Zero Blur",
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: "Study AI Hub: Hermitian Spectral Decomposition & Pauli Projections",
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
            speedGrader: "Stopped viewing quiz at 11:04:12 (18.5s sidepanel focus loss) · 1 window.blur Flag",
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
        return { x: 30, y: 32, clicking: false, label: "MindKo Scraping Matrix LaTeX", tag: "default" };
      } else if (safeProgress < 50) {
        return { x: 52, y: 48, clicking: true, label: "MindKo Error: UTF-8 Matrix String Corrupted [?]", tag: "fail" };
      } else if (safeProgress < 75) {
        return { x: 85, y: 20, clicking: true, label: "Alt+Shift+2 Sidepanel (window.blur Logged)", tag: "fail" };
      } else {
        return { x: 50, y: 85, clicking: false, label: "SpeedGrader flag: 18.5s sidepanel focus loss", tag: "alert" };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 36, y: 35, clicking: true, label: "Double-Click / Alt+S (0.3s)", tag: "solve" };
      } else if (safeProgress < 70) {
        return { x: 60, y: 64, clicking: false, label: "HUD: Option B (λ₁=1, λ₂=4; |v₁⟩=1/√3[-(1-i), 1]ᵀ)", tag: "solve" };
      } else {
        return { x: 72, y: 72, clicking: true, label: "Alt+1 Invisible / Alt+3 Derivation", tag: "invisible" };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Formal Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Analytical Formalism)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={"PHYS 320 / MATH 214 Quantum Mechanics & Linear Algebra · Final Exam"}
        domainBadge={"CANVAS LMS"}
        browserUrl={"https://canvas.instructure.com/courses/48190/quizzes/69104"}
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
              key="MindkoHermitianMatrixDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">{"Question 22 · Hermitian Quantum Observable Spectral Decomposition"}</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Observable H = [2, 1-i; 1+i, 3]. Determine eigenvalues λ₁, λ₂ (with λ₁ < λ₂), and find the normalized eigenvector |v₁⟩ corresponding to λ₁."}
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>{"MindKo v3.0.5 (College Tools) injecting 24 content scripts into Canvas DOM..."}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">{"18.5s Delay"}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{"Regex parser corrupted UTF-8 LaTeX matrix notation: [ 2 & 1 ? i ; 1 + i & 3 ] · Pressing Alt+Shift+2 opened sidepanel and fired window.blur!"}</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">{"18.5s Delay"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>{"MindKo LemonSqueezy subscription $19.99/month ($959/deg) · 75 exposed web_accessible_resources"}</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="MindkoHermitianMatrixDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Observable H = [2, 1-i; 1+i, 3]. Determine eigenvalues λ₁, λ₂ (with λ₁ < λ₂), and find the normalized eigenvector |v₁⟩ corresponding to λ₁."}
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  {"A) λ₁ = 2, λ₂ = 3; |v₁⟩ = [1, 0]ᵀ (Assumed diagonal elements are eigenvalues)"}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{"B) λ₁ = 1, λ₂ = 4; |v₁⟩ = (1/√3) [-(1-i), 1]ᵀ (Exact Spectral Decomposition)"}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">{"0.3s Solve ✓"}</span>
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
              key="MindkoHermitianMatrixDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{"PHYS 320 Hermitian Matrix Spectral Theory"}</span>
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
                    <strong>Claude 3.7 Sonnet (Formal Derivation):</strong> {"Hermitian Spectral Decomposition & Projection Operators: Characteristic equation det(H - λI) = (2-λ)(3-λ) - (1-i)(1+i) = λ² - 5λ + 6 - 2 = λ² - 5λ + 4 = 0 ⟹ (λ-1)(λ-4) = 0 ⟹ λ₁ = 1, λ₂ = 4. Lower eigenvalue λ₁ = 1: (H - I)|v₁⟩ = [1, 1-i; 1+i, 2][x, y]ᵀ = [0, 0]ᵀ ⟹ x + (1-i)y = 0 ⟹ x = -(1-i)y. Normalization condition: ‖v₁‖² = |x|² + |y|² = |-(1-i)|² |y|² + |y|² = (1+1)|y|² + |y|² = 3|y|² = 1 ⟹ |y| = 1/√3. Setting y = 1/√3 gives |v₁⟩ = (1/√3) [-(1-i), 1]ᵀ. Projection operator P₁ = |v₁⟩⟨v₁| = (1/3) [2, -(1-i); -(1+i), 1], satisfying P₁² = P₁ and H = 1·P₁ + 4·P₂."}
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor Analysis):</strong> {"Complex Conjugation & Phase Conventions: When forming the dual bra ⟨v₁| = (|v₁⟩)†, taking the conjugate transpose gives ⟨v₁| = (1/√3) [-(1+i), 1]. Missing the complex conjugate on the imaginary term creates an invalid norm. Distractor Option A treats diagonal entries (2, 3) as eigenvalues, which only holds when off-diagonal coupling 1-i is zero."}
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Proof):</strong> {"Pauli Matrix Decomposition & Spin-1/2 Hamiltonian: Expanding H in Pauli basis H = c₀ I + c_x σ_x + c_y σ_y + c_z σ_z: c₀ = (1/2)Tr(H) = 5/2; c_x = 1; c_y = 1; c_z = -1/2. The Bloch vector is c = (1, 1, -1/2) with magnitude ‖c‖ = √(1 + 1 + 1/4) = 3/2. Under SU(2) rotation, eigenvalues are λ = c₀ ± ‖c‖ = 5/2 ± 3/2 = {1, 4}. Identical outcome in quantum spin algebra."}
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
   AnswerAiSidebarBlurDemo:
   CHEM 2320 Organic Chemistry II · Canvas Midterm Exam
   Scene 0: AnswerAI: Floating Sidebar Focus Loss & 3-Bolt Quota Wall
   Scene 1: ExamGhost: 0.3s Double-Click Solve in Closed Shadow DOM
   Scene 2: Study AI Hub: Corey-Chaykovsky HSAB & Reversibility Mechanics
   ============================================================================ */
export function AnswerAiSidebarBlurDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "AnswerAI: Floating Sidebar Focus Loss & 3-Bolt Quota Wall",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: "ExamGhost: 0.3s Double-Click Solve in Closed Shadow DOM",
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: "Study AI Hub: Corey-Chaykovsky HSAB & Reversibility Mechanics",
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
            speedGrader: "SpeedGrader Flag: window.blur logged (8.6s away) · 3-Solve Cap Reached",
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
        return { x: 28, y: 32, clicking: false, label: "Highlighting Corey-Chaykovsky prompt", tag: "default" };
      } else if (safeProgress < 50) {
        return { x: 88, y: 45, clicking: true, label: "Click Answer.AI Floating Sidebar (Focus lost!)", tag: "fail" };
      } else if (safeProgress < 75) {
        return { x: 88, y: 65, clicking: false, label: "Paywall: 3 Lightning Bolts Depleted!", tag: "fail" };
      } else {
        return { x: 50, y: 88, clicking: false, label: "Canvas SpeedGrader logs blur event #1", tag: "alert" };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 35, y: 34, clicking: true, label: "Double-Click Question Stem (0.3s)", tag: "solve" };
      } else if (safeProgress < 70) {
        return { x: 30, y: 56, clicking: false, label: "Option A Highlighted in Closed Shadow HUD", tag: "solve" };
      } else {
        return { x: 75, y: 80, clicking: false, label: "Alt+1 Invisible / ⌘+Shift+U Panic Shield", tag: "invisible" };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Formal Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Analytical Formalism)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={"CHEM 2320 Organic Chemistry II · Canvas Midterm Exam"}
        domainBadge={"CANVAS LMS"}
        browserUrl={"https://canvas.instructure.com/courses/59102/quizzes/81934"}
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
              key="AnswerAiSidebarBlurDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">{"Question 15 · Sulfur Ylide Regiochemistry (Corey-Chaykovsky)"}</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Predict the major organic product when (E)-4-phenylbut-3-en-2-one is treated with dimethylsulfoxonium methylide ((CH₃)₂S(=O)CH₂) vs dimethylsulfonium methylide ((CH₃)₂SCH₂)."}
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>{"Answer.AI v1.5.4 mounting persistent sidebar (relayMessage.js, 75 Plasmo files)..."}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">{"08.6s Lag"}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{"Clicking floating sidebar transferred window focus away from Canvas · SpeedGrader logged window.blur (8.6s away) · 3 Lightning Bolts depleted!"}</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">{"08.6s Lag"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>{"SuperAI quota empty mid-exam · Demanding $9.99/mo upgrade to solve Question 15"}</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="AnswerAiSidebarBlurDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Predict the major organic product when (E)-4-phenylbut-3-en-2-one is treated with dimethylsulfoxonium methylide ((CH₃)₂S(=O)CH₂) vs dimethylsulfonium methylide ((CH₃)₂SCH₂)."}
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  {"A) Dimethylsulfoxonium yields trans-cyclopropyl ketone (1,4-addition); dimethylsulfonium yields epoxide (1,2-addition)"}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{"A) Dimethylsulfoxonium yields trans-cyclopropyl ketone (1,4-addition); dimethylsulfonium yields epoxide (1,2-addition)"}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">{"0.3s Solve ✓"}</span>
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
              key="AnswerAiSidebarBlurDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{"CHEM 2320 Corey-Chaykovsky Reversibility"}</span>
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
                    <strong>Claude 3.7 Sonnet (Formal Derivation):</strong> {"Hard-Soft Acid-Base (HSAB) & Reversibility Analysis: Dimethylsulfoxonium methylide has charge delocalization over the S=O bond, lowering electron density and making it a soft nucleophile. Initial 1,2-addition to the carbonyl is reversible because the sulfoxonium group is a stable leaving group. Reversible conjugate 1,4-addition to the soft β-carbon forms an enolate that rapidly performs intramolecular nucleophilic displacement of DMSO to yield the trans-cyclopropyl ketone (thermodynamic product). Conversely, unstabilized dimethylsulfonium methylide is an un-delocalized, hard nucleophile whose 1,2-addition is irreversible; rapid alkoxide attack displaces DMS to form the α,β-unsaturated epoxide (kinetic product)."}
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor Analysis):</strong> {"Reagent Diagnostic Comparison: Dimethylsulfoxonium ((CH₃)₂S(=O)CH₂) is soft, reversible 1,2, and yields trans-cyclopropane (steric minimization of benzoyl vs phenyl). Dimethylsulfonium ((CH₃)₂SCH₂) is hard, irreversible 1,2, yielding oxirane epoxide. Distractor Option B ignores HSAB orbital differences; Option C reverses reaction pathways."}
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Proof):</strong> {"Frontier Molecular Orbital (FMO) Proof: Enone LUMO coefficients are c = 0.42 at carbonyl carbon and c = 0.58 at β-carbon. Soft ylides with diffuse electron clouds interact under orbital control with the largest LUMO coefficient at the β-carbon (ΔE = 2.14 eV), yielding trans-cyclopropane with 98:2 selectivity. Hard ylides interact under electrostatic charge control at the carbonyl carbon (δ+), yielding epoxide."}
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
   CoursologyBeaconBlockDemo:
   ECON 3010 Intermediate Microeconomics · Canvas Quiz
   Scene 0: Coursology: Campus IT Firewall Block & 'Rate Us' DOM Injection
   Scene 1: ExamGhost: 0.3s Double-Click Solve & Zero Network Footprint
   Scene 2: Study AI Hub: Backward Induction & First-Mover Output Expansion
   ============================================================================ */
export function CoursologyBeaconBlockDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "Coursology: Campus IT Firewall Block & 'Rate Us' DOM Injection",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: "ExamGhost: 0.3s Double-Click Solve & Zero Network Footprint",
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: "Study AI Hub: Backward Induction & First-Mover Output Expansion",
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
            speedGrader: "Network Beacon Blocked: api.coursology.com · Rate-us DOM Injected · 1 blur event",
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
        return { x: 26, y: 35, clicking: false, label: "Inspecting Stackelberg demand function", tag: "default" };
      } else if (safeProgress < 50) {
        return { x: 78, y: 42, clicking: true, label: "Coursology Injected 'Rate Us' Box Appears", tag: "fail" };
      } else if (safeProgress < 75) {
        return { x: 82, y: 62, clicking: false, label: "Campus Firewall: api.coursology.com blocked!", tag: "alert" };
      } else {
        return { x: 45, y: 88, clicking: false, label: "SpeedGrader flag: DOM mutation & 1 blur event", tag: "fail" };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 32, y: 34, clicking: true, label: "Double-Click Question Stem (0.3s)", tag: "solve" };
      } else if (safeProgress < 70) {
        return { x: 30, y: 60, clicking: false, label: "Option B Highlighted (q₁=60, q₂=20, P=$80)", tag: "solve" };
      } else {
        return { x: 70, y: 80, clicking: false, label: "Alt+2 Smart Highlight / Alt+1 Invisible", tag: "mode" };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Formal Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Analytical Formalism)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={"ECON 3010 Intermediate Microeconomics · Canvas Quiz"}
        domainBadge={"CANVAS LMS"}
        browserUrl={"https://canvas.instructure.com/courses/44192/quizzes/76201"}
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
              key="CoursologyBeaconBlockDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">{"Question 7 · Asymmetric Stackelberg Duopoly SPNE Equilibrium"}</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"In an asymmetric Stackelberg duopoly with market demand P(Q) = 240 - 2Q, Leader marginal cost c₁ = $20, and Follower c₂ = $40. Determine SPNE quantities (q₁*, q₂*) and market price P*."}
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>{"Coursology extension injecting <div class=\"coursology-answer-box\"> with Rate Us button..."}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">{"09.2s Lag"}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{"Campus IT firewall blocked api.coursology.com/v1/telemetry · Opening side drawer shifted focus and fired window.blur!"}</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">{"09.2s Lag"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>{"Coursology pushes $9.99/mo subscription · Plaintext background telemetry leaked user tokens"}</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="CoursologyBeaconBlockDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"In an asymmetric Stackelberg duopoly with market demand P(Q) = 240 - 2Q, Leader marginal cost c₁ = $20, and Follower c₂ = $40. Determine SPNE quantities (q₁*, q₂*) and market price P*."}
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  {"A) q₁* = 40, q₂* = 30, P* = $100 (Cournot-like symmetric output)"}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{"B) q₁* = 60, q₂* = 20, P* = $80 (Stackelberg First-Mover Advantage)"}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">{"0.3s Solve ✓"}</span>
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
              key="CoursologyBeaconBlockDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{"ECON 3010 Stackelberg Leadership Proof"}</span>
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
                    <strong>Claude 3.7 Sonnet (Formal Derivation):</strong> {"Backward Induction Derivation: Stage 2 (Follower Firm 2): Maximizes profit π₂ = (240 - 2q₁ - 2q₂ - 40)q₂ = (200 - 2q₁ - 2q₂)q₂. First-order condition: ∂π₂/∂q₂ = 200 - 2q₁ - 4q₂ = 0 ⟹ q₂(q₁) = 50 - 0.5q₁. Stage 1 (Leader Firm 1): Incorporates Follower's reaction into revenue: π₁ = (240 - 2q₁ - 2(50 - 0.5q₁) - 20)q₁ = (140 - q₁ - 20)q₁ = (120 - q₁)q₁. FOC: dπ₁/dq₁ = 120 - 2q₁ = 0 ⟹ q₁* = 60. Follower output: q₂* = 50 - 0.5(60) = 20. Total industry output Q* = 60 + 20 = 80. Equilibrium market price P* = 240 - 2(80) = $80."}
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor Analysis):</strong> {"Profit & Welfare Benchmark: Leader profit π₁* = (80 - 20) · 60 = $3,600. Follower profit π₂* = (80 - 40) · 20 = $800. Consumer surplus CS = (1/2)(240 - 80) · 80 = $6,400. In Cournot simultaneous competition, outputs are q₁^C = 46.67, q₂^C = 26.67, P^C = $93.33. Stackelberg leadership expands Leader profit from $2,904 to $3,600 while lowering consumer price by $13.33."}
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Proof):</strong> {"Kuhn-Tucker Boundary Analysis: SOC confirms concavity: ∂²π₁/∂q₁² = -2 < 0 and ∂²π₂/∂q₂² = -4 < 0. Entry deterrence requires producing limit quantity q₁ ≥ 100 to force q₂ = 0. However, π₁(100) = (240 - 200 - 20) · 100 = $2,000 < $3,600. Accommodation strictly dominates deterrence."}
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
   ClassologyManifestDomDemo:
   CS 416 Operating Systems · Canvas Final Exam
   Scene 0: Classology: 40.8MiB Bundle, Injected [Solve] & Cmd+Shift+1 Focus Loss
   Scene 1: ExamGhost: 0.3s Double-Click Solve & Zero-Footprint Focus Shield
   Scene 2: Study AI Hub: x86-64 Paging Architecture & #PF Handler Traversal
   ============================================================================ */
export function ClassologyManifestDomDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "Classology: 40.8MiB Bundle, Injected [Solve] & Cmd+Shift+1 Focus Loss",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: "ExamGhost: 0.3s Double-Click Solve & Zero-Footprint Focus Shield",
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: "Study AI Hub: x86-64 Paging Architecture & #PF Handler Traversal",
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
            speedGrader: "SpeedGrader Alert: Stopped viewing quiz (18s) · Injected [Solve] DOM Node",
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
        return { x: 30, y: 35, clicking: false, label: "Selecting Page Fault #PF prompt", tag: "default" };
      } else if (safeProgress < 50) {
        return { x: 42, y: 44, clicking: true, label: "Click Injected [Solve] Button (40.8MiB Bundle)", tag: "fail" };
      } else if (safeProgress < 75) {
        return { x: 85, y: 50, clicking: false, label: "Persistent Sidebar Opens → Focus Lost (18s)", tag: "fail" };
      } else {
        return { x: 50, y: 88, clicking: false, label: "SpeedGrader audit flag: 18s window.blur", tag: "alert" };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 34, y: 34, clicking: true, label: "Double-Click Question Stem (0.3s)", tag: "solve" };
      } else if (safeProgress < 70) {
        return { x: 30, y: 64, clicking: false, label: "Option C Highlighted in Closed Shadow HUD", tag: "solve" };
      } else {
        return { x: 72, y: 80, clicking: false, label: "Alt+1 Invisible / ⌘+Shift+U Panic Shield", tag: "mode" };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Formal Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Analytical Formalism)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={"CS 416 Operating Systems · Canvas Final Exam"}
        domainBadge={"CANVAS LMS"}
        browserUrl={"https://canvas.instructure.com/courses/51028/quizzes/89210"}
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
              key="ClassologyManifestDomDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">{"Question 27 · 64-Bit Hierarchical Page Fault Exception (#PF 0x0005)"}</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"64-bit virtual memory with 4-level page tables (PML4, PDPT, PD, PT) and 4 KiB pages. Instruction fetch TLB miss causes Page Fault Exception (#PF, Vector 14) with error code 0x0005. What do the bits of 0x0005 indicate?"}
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>{"Classology AI v4.0.2 loading 40.87MiB bundle into Canvas quiz tab..."}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">{"18.2s Lag"}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{"Floating [Solve] button injected into DOM · Cmd+Shift+1 snapshot opened sidebar, stealing focus for 18.2s · SpeedGrader logged window.blur!"}</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">{"18.2s Lag"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>{"Zou Labs LLC collects PII & website content · Free trial locks after limited questions"}</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="ClassologyManifestDomDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"64-bit virtual memory with 4-level page tables (PML4, PDPT, PD, PT) and 4 KiB pages. Instruction fetch TLB miss causes Page Fault Exception (#PF, Vector 14) with error code 0x0005. What do the bits of 0x0005 indicate?"}
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  {"A) User mode, instruction fetch violation on non-executable page; kernel sends SIGBUS"}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{"C) User mode, read access violation on a page that is present; kernel determines COW or issues SIGSEGV"}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">{"0.3s Solve ✓"}</span>
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
              key="ClassologyManifestDomDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{"CS 416 x86-64 Paging & Kernel Fault Traversal"}</span>
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
                    <strong>Claude 3.7 Sonnet (Formal Derivation):</strong> {"Architectural Bitwise Decoding of #PF Error Code 0x0005 (0b00000101): Bit 0 (P = 1): Page-protection violation on a page that IS present. Bit 1 (W/R = 0): Caused by a memory read access. Bit 2 (U/S = 1): Processor was executing in user mode (CPL = 3). Bit 3 (RSVD = 0): No reserved bits were overwritten in PTE. Bit 4 (I/D = 0): Not an instruction fetch fault. The kernel reads CR2 to retrieve faulting address, inspects vm_area_struct in mm_struct, finds page present but user read permissions denied, and delivers SIGSEGV (SEGV_ACCERR)."}
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor Analysis):</strong> {"Kernel Flowchart & Trap Frame: Hardware pushes SS, RSP, RFLAGS, CS, RIP, and Error Code (0x0005) onto Interrupt Stack Table (IST). Dispatches to exc_page_fault() ⟹ do_user_addr_fault(). find_vma() verifies faulting address against VMA list: because page is already present, this is not an on-demand allocation. Since vma->vm_flags prohibits user read, kernel invokes force_sig_fault(SIGSEGV, SEGV_ACCERR, address)."}
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Proof):</strong> {"TLB & 4-Level MMU Walker Math: 48-bit Canonical Virtual Address: [47:39] PML4, [38:30] PDPT, [29:21] PD, [20:12] PT, [11:0] Offset. 512-entry 4-way associative TLB has 128 sets (7-bit set index). On TLB miss, hardware MMU walker reads CR3 ⟹ PML4E ⟹ PDPTE ⟹ PDE ⟹ PTE. Because PTE User bit is 0, hardware translation aborts without caching and fires Vector 14 with 0x0005."}
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
   DoubleCheckAiCircularLoopDemo:
   POLS 3310 Constitutional Law · Canvas Exam
   Scene 0: DoubleCheckAI: 22.4s Circular Verification Loop & Truncated Prompt
   Scene 1: ExamGhost: 0.3s Double-Click Solve & Natural Click Integrity
   Scene 2: Study AI Hub: Dormant Commerce Clause & Pike Balancing Jurisprudence
   ============================================================================ */
export function DoubleCheckAiCircularLoopDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "DoubleCheckAI: 22.4s Circular Verification Loop & Truncated Prompt",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: "ExamGhost: 0.3s Double-Click Solve & Natural Click Integrity",
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: "Study AI Hub: Dormant Commerce Clause & Pike Balancing Jurisprudence",
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
            speedGrader: "SpeedGrader Flag: Synthetic Click (isTrusted: false) · 22.4s Verification Lag",
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
        return { x: 28, y: 35, clicking: false, label: "Reading Pike v. Bruce Church prompt", tag: "default" };
      } else if (safeProgress < 50) {
        return { x: 45, y: 44, clicking: true, label: "Click Injected [Double Check AI] Button", tag: "fail" };
      } else if (safeProgress < 75) {
        return { x: 50, y: 65, clicking: false, label: "Circular Loop: 'Verifying... (22s)' · Truncated Tokens", tag: "fail" };
      } else {
        return { x: 30, y: 55, clicking: true, label: "Synthetic radio.click() fires isTrusted: false flag", tag: "fail" };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 34, y: 34, clicking: true, label: "Double-Click Question Stem (0.3s)", tag: "solve" };
      } else if (safeProgress < 70) {
        return { x: 30, y: 58, clicking: false, label: "Option B Highlighted in Closed Shadow HUD", tag: "solve" };
      } else {
        return { x: 74, y: 80, clicking: false, label: "Alt+1 Invisible / ⌘+Shift+U Panic Shield", tag: "mode" };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Formal Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Analytical Formalism)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={"POLS 3310 Constitutional Law · Canvas Exam"}
        domainBadge={"CANVAS LMS"}
        browserUrl={"https://canvas.instructure.com/courses/39105/quizzes/68291"}
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
              key="DoubleCheckAiCircularLoopDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">{"Question 19 · Dormant Commerce Clause & Pike Balancing Test"}</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Under the Dormant Commerce Clause and Pike v. Bruce Church (1970), if a facially neutral state agricultural statute serves a legitimate local interest against fraud but imposes $14M out-of-state compliance cost, which legal standard determines constitutionality?"}
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>{"DoubleCheck AI re-prompting model in recursive loop (Are you sure? Verify 1/4)..."}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">{"22.4s Lag"}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{"Prompt truncated at 250 tokens · Programmatic radio.click() fired synthetic event (isTrusted: false) · 22.4s delay logged in SpeedGrader!"}</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">{"22.4s Lag"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>{"Only 244 real Chrome users (claims 1,200+) · 5 daily solves limit with aggressive upsells"}</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="DoubleCheckAiCircularLoopDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Under the Dormant Commerce Clause and Pike v. Bruce Church (1970), if a facially neutral state agricultural statute serves a legitimate local interest against fraud but imposes $14M out-of-state compliance cost, which legal standard determines constitutionality?"}
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  {"A) Statute is per se invalid because any disparate economic impact triggers strict scrutiny"}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{"B) Statute is upheld unless incidental burden on interstate commerce is clearly excessive in relation to putative local benefits"}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">{"0.3s Solve ✓"}</span>
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
              key="DoubleCheckAiCircularLoopDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{"POLS 3310 Pike v. Bruce Church Balancing Test"}</span>
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
                    <strong>Claude 3.7 Sonnet (Formal Derivation):</strong> {"Two-Tier Scrutiny under Dormant Commerce Clause: (1) Facial discrimination or protectionist purpose/effect triggers strict scrutiny under Philadelphia v. New Jersey (1978); virtually per se unconstitutional unless state proves no non-discriminatory alternative exists. (2) Facially neutral statutes with incidental burdens are governed by Pike v. Bruce Church, Inc. (397 U.S. 137 (1970)): where the statute regulates even-handedly to effectuate a legitimate local public interest, it will be upheld unless the burden imposed on interstate commerce is clearly excessive in relation to putative local benefits. Option B directly states the controlling rule."}
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor Analysis):</strong> {"Distractor Evaluation: Distractor Option A fails because disparate economic impact alone does NOT trigger strict scrutiny (Minnesota v. Clover Leaf Creamery Co., 1981, upholding plastic milk container ban). Option C is false because federal Commerce Clause powers supersede state police powers. Option D is false because corporations cannot invoke Article IV Privileges and Immunities."}
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Proof):</strong> {"Comparative Case Precedent Synthesis: Contrast with Hunt v. Washington State Apple Advertising Comm'n (1977): NC statute was facially neutral but eliminated Washington's superior grading system, imposing direct discriminatory competitive effects ⟹ per se invalidity. Contrast with Bibb v. Navajo Freight Lines (1959): Illinois curved mudguard law imposed massive re-rigging costs with zero safety gain ⟹ failed Pike balancing."}
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
   ExamClutchClipboardPasteDemo:
   BIO 325 Molecular Genetics · Canvas Midterm Exam
   Scene 0: ExamClutch: Clipboard Copy/Paste Interception & 30.2s Batch Lag
   Scene 1: ExamGhost: 0.3s Double-Click Solve & Zero Clipboard Access
   Scene 2: Study AI Hub: Chromatin Looping, CTCF-Cohesin & PRC2 Epigenetics
   ============================================================================ */
export function ExamClutchClipboardPasteDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "ExamClutch: Clipboard Copy/Paste Interception & 30.2s Batch Lag",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: "ExamGhost: 0.3s Double-Click Solve & Zero Clipboard Access",
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: "Study AI Hub: Chromatin Looping, CTCF-Cohesin & PRC2 Epigenetics",
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
            speedGrader: "Proctorio Alert: Clipboard copy/paste captured · 30.2s Batch Lag · isTrusted: false",
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
        return { x: 26, y: 35, clicking: false, label: "ExamClutch copies question stem to clipboard", tag: "default" };
      } else if (safeProgress < 50) {
        return { x: 50, y: 45, clicking: false, label: "Proctorio listener flags unauthorized clipboard paste!", tag: "fail" };
      } else if (safeProgress < 75) {
        return { x: 80, y: 55, clicking: false, label: "30-second batch queue delay... ($9/wk rebill)", tag: "fail" };
      } else {
        return { x: 30, y: 60, clicking: true, label: "Synthetic auto-click fires isTrusted: false flag", tag: "fail" };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 34, y: 34, clicking: true, label: "Double-Click Question Stem (0.3s, 0 clipboard calls)", tag: "solve" };
      } else if (safeProgress < 70) {
        return { x: 30, y: 58, clicking: false, label: "Option B Highlighted in Closed Shadow HUD", tag: "solve" };
      } else {
        return { x: 74, y: 80, clicking: false, label: "Alt+1 Invisible / ⌘+Shift+U Panic Shield", tag: "mode" };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Formal Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Analytical Formalism)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={"BIO 325 Molecular Genetics · Canvas Midterm Exam"}
        domainBadge={"CANVAS LMS"}
        browserUrl={"https://canvas.instructure.com/courses/60114/quizzes/91204"}
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
              key="ExamClutchClipboardPasteDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">{"Question 12 · β-Globin LCR Chromatin Looping & Fetal Switching"}</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"In the human β-globin cluster, which transcription factor complex mediates long-range chromatin looping between LCR and promoters, and what epigenetic histone modification marks silenced fetal γ-globin in adults?"}
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>{"ExamClutch copying question stem to clipboard buffer (firing copy listener)..."}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">{"30.2s Lag"}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{"Proctorio intercepted unauthorized clipboard copy & paste · 30.2s batch delay before answer returned · Synthetic radio click flagged!"}</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">{"30.2s Lag"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>{"Mandatory pairing code required · Auto-renews at $9.00/week ($36/mo, $432/yr)"}</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="ExamClutchClipboardPasteDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"In the human β-globin cluster, which transcription factor complex mediates long-range chromatin looping between LCR and promoters, and what epigenetic histone modification marks silenced fetal γ-globin in adults?"}
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  {"A) TATA-binding protein (TBP); Histone H3K4me3 (Active promoter mark)"}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{"B) CTCF and Cohesin ring complex; Histone H3K27me3 (Polycomb Repressive Mark)"}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">{"0.3s Solve ✓"}</span>
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
              key="ExamClutchClipboardPasteDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{"BIO 325 Eukaryotic Gene Regulation & Epigenetics"}</span>
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
                    <strong>Claude 3.7 Sonnet (Formal Derivation):</strong> {"3D Genome Architecture & Developmental Silencing: CCCTC-binding factor (CTCF) binds convergent motifs at HS5 of the LCR and downstream 3'HS1. The Cohesin ring complex (SMC1A, SMC3, RAD21) performs ATP-dependent loop extrusion until arrested at convergent CTCF boundaries, creating a topologically associating domain (TAD) that juxtaposes the LCR enhancer core with the promoter. In adult erythroblasts, transcriptional repressors BCL11A and ZBTB7A (LRF) bind fetal γ-globin promoters, recruiting Polycomb Repressive Complex 2 (PRC2, EZH2 methyltransferase) to deposit repressive H3K27me3 marks, silencing γ-globin."}
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor Analysis):</strong> {"Biological Distractor Evaluation: Option A is false because TBP is part of general TFIID at the core TATA box and does not organize TAD loops; H3K4me3 is an active euchromatic mark. Option C is false because σ⁷⁰ is prokaryotic. Option D is false because Gal4-UAS is yeast recombinant."}
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Proof):</strong> {"Clinical & CRISPR Therapeutics (Casgevy): In Sickle Cell Disease (HbS, β^E6V), reactivating fetal hemoglobin (HbF, α₂γ₂) inhibits sickling. FDA-approved CRISPR therapy Exagamglogene autotemcel (Casgevy) uses SpCas9 to disrupt the erythroid-specific GATA1 enhancer of BCL11A (+58 kb intron 2). This prevents BCL11A expression in erythroid lineage, lifting PRC2 H3K27me3 repression and restoring curative HbF (>20%)."}
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
   AnswerlyWebScrapingLatencyDemo:
   NEUR 301 Cellular & Molecular Neurobiology · Midterm Exam
   Scene 0: Answerly AI: 12.4s Scraping Latency, Injected scoreReporter.js & Outdated 2012 Key
   Scene 1: ExamGhost: 0.3s Double-Click Solve & Focus Shield Active
   Scene 2: Study AI Hub: Hippocampal LTP & Synaptic Plasticity Proof
   ============================================================================ */
export function AnswerlyWebScrapingLatencyDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "Answerly AI: 12.4s Scraping Latency, Injected scoreReporter.js & Outdated 2012 Key",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: "ExamGhost: 0.3s Double-Click Solve & Focus Shield Active",
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: "Study AI Hub: Hippocampal LTP & Synaptic Plasticity Proof",
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
            speedGrader: "Mutation Alert: scoreReporter.js injected · 1 window.blur flag logged in SpeedGrader",
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
        return { x: 32, y: 30, clicking: false, label: "Reading Neurobiology LTP Prompt", tag: "default" };
      } else if (safeProgress < 50) {
        return { x: 48, y: 44, clicking: true, label: "Click Answerly: Scraping 2012 Web Archives... (12s)", tag: "fail" };
      } else if (safeProgress < 75) {
        return { x: 85, y: 18, clicking: true, label: "Answerly Popover injects styles.css · window.blur logged!", tag: "fail" };
      } else {
        return { x: 30, y: 62, clicking: true, label: "Wrong Answer: Option A (Outdated Testbank Key) · 12.4s Lag", tag: "fail" };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 35, y: 32, clicking: true, label: "Double-Click Inline Solve (0.3s)", tag: "solve" };
      } else if (safeProgress < 70) {
        return { x: 30, y: 68, clicking: false, label: "Option B Highlighted in Closed Shadow DOM", tag: "solve" };
      } else {
        return { x: 70, y: 84, clicking: false, label: "Alt+1 Ghost / ⌘+Shift+U Panic Wipe Ready", tag: "invisible" };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Formal Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Analytical Formalism)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={"NEUR 301 Cellular & Molecular Neurobiology · Midterm Exam"}
        domainBadge={"CANVAS LMS"}
        browserUrl={"https://canvas.instructure.com/courses/55190/quizzes/82049"}
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
              key="AnswerlyWebScrapingLatencyDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">{"Question 21 · Hippocampal CA1 Long-Term Potentiation (LTP)"}</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"During 100 Hz tetanic stimulation of Schaffer collateral CA1 neurons, which sequence of biophysical events governs E-LTP induction, and what retrograde signaling mechanism resolves the edition discrepancy with 2012 testbanks?"}
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>{"Answerly AI v1.3.52 scraping DOM and querying 2012 legacy web testbanks..."}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">{"12.4s Lag"}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{"12.4s cloud scraping delay · Selected outdated 2012 key (Option A) · Injected scoreReporter.js and content/styles.css fired window.blur!"}</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">{"12.4s Lag"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>{"Answerly popover injected into host DOM · Outdated testbank answer incorrect on 2026 exams"}</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="AnswerlyWebScrapingLatencyDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"During 100 Hz tetanic stimulation of Schaffer collateral CA1 neurons, which sequence of biophysical events governs E-LTP induction, and what retrograde signaling mechanism resolves the edition discrepancy with 2012 testbanks?"}
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  {"A) Passive opening of NMDA channels; retrograde diffusion of nitric oxide (NO) as sole messenger (Outdated 2012 key)"}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{"B) AMPA depolarization repels Mg²⁺ unblocking NMDA; Ca²⁺ activates CaMKII Thr286; 2-AG endocannabinoid retrograde signaling"}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">{"0.3s Solve ✓"}</span>
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
              key="AnswerlyWebScrapingLatencyDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{"NEUR 301 Synaptic Plasticity & LTP Kinetics"}</span>
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
                    <strong>Claude 3.7 Sonnet (Formal Derivation):</strong> {"Biophysical NMDA Kinetics & Depolarization Proof: Voltage-dependent Mg²⁺ block of NMDA channel is modeled by Woodhull equation I_NMDA = g_max(V - V_rev) / [1 + ([Mg²⁺]_o/δ) e^(-αV)]. Postsynaptic AMPA-mediated depolarization from -70 mV to -30 mV expels hydrated Mg²⁺ via electrostatic repulsion. Calcium influx through the high-conductance pore binds Calmodulin (CaM), driving CaMKII autophosphorylation at Thr286, converting the dodecameric kinase into an autonomous active state that phosphorylates AMPA GluA1 subunits."}
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor Analysis):</strong> {"Edition Discrepancy & Distractor Breakdown: Option A reflects outdated early-2000s literature (Bear 3rd ed) where nitric oxide gas was hypothesized as the sole retrograde messenger. Modern consensus (Kandel 6th ed, Ch. 67) proves postsynaptic calcium spikes stimulate diacylglycerol lipase (DAGL) to synthesize 2-Arachidonoylglycerol (2-AG), which travels retrogradely across the synaptic cleft to bind presynaptic CB₁ receptors."}
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Proof):</strong> {"Molecular Reaction Proof: Active CaMKII phosphorylates Ser831 on GluA1 and promotes exocytosis of intracellular AMPA receptor storage pools to the postsynaptic density. The probability of sustained LTP transition is modeled by P(LTP) = 1 / [1 + e^(-([Ca²⁺]_i - θ_LTP)/k)]. Option C is non-associative presynaptic facilitation; Option D falsely isolates mGluR1 from NMDA receptor activation."}
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
   GetQuizSolvePlaintextPrivacyLeakDemo:
   BETH 410 / LAW 642 Bioethics & Health Information Privacy · Canvas Midterm
   Scene 0: GetQuizSolve: Plaintext Question Logging, isTrusted:false Trap & Daily Paywall
   Scene 1: ExamGhost: 0.3s Double-Click Solve & Zero Remote Logging
   Scene 2: Study AI Hub: The Common Rule & FERPA Statutory Oversight
   ============================================================================ */
export function GetQuizSolvePlaintextPrivacyLeakDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "GetQuizSolve: Plaintext Question Logging, isTrusted:false Trap & Daily Paywall",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: "ExamGhost: 0.3s Double-Click Solve & Zero Remote Logging",
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: "Study AI Hub: The Common Rule & FERPA Statutory Oversight",
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
            speedGrader: "Security Alert: Plaintext Question Leak · event.isTrusted: false Auto-Fill · 1 blur flag",
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
        return { x: 30, y: 28, clicking: false, label: "Reading Bioethics Privacy Prompt", tag: "default" };
      } else if (safeProgress < 50) {
        return { x: 52, y: 42, clicking: true, label: "GetQuizSolve Auto-fill: Sending Plaintext POST to api.getquizsolve.com", tag: "fail" };
      } else if (safeProgress < 75) {
        return { x: 86, y: 20, clicking: true, label: "Canvas logs event.isTrusted:false · Session Token Leaked!", tag: "fail" };
      } else {
        return { x: 28, y: 65, clicking: true, label: "5 Questions/Day Cap Hit: DEMANDING $4.99/WEEK PRO UPGRADE", tag: "fail" };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 35, y: 30, clicking: true, label: "Double-Click Inline Solve (0.3s)", tag: "solve" };
      } else if (safeProgress < 70) {
        return { x: 30, y: 66, clicking: false, label: "Option B Verified in Closed Shadow DOM", tag: "solve" };
      } else {
        return { x: 68, y: 84, clicking: false, label: "Focus Shield Active · 0 Outbound Beacons", tag: "invisible" };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Formal Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Analytical Formalism)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={"BETH 410 / LAW 642 Bioethics & Health Information Privacy · Canvas Midterm"}
        domainBadge={"CANVAS LMS"}
        browserUrl={"https://canvas.instructure.com/courses/49103/quizzes/72018"}
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
              key="GetQuizSolvePlaintextPrivacyLeakDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">{"Question 16 · Federal Research Oversight & Student Privacy Compliance"}</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Under 45 CFR 46 (Common Rule) and FERPA (34 CFR § 99.30), a clinical platform deployed an AI quiz solver transmitting student IDs and exam prompts over plaintext HTTP POST packets (api.getquizsolve.com). What sanctions and institutional actions are mandated?"}
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>{"GetQuizSolve v1.2.2 sending unencrypted HTTP POST packets containing bearer tokens..."}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">{"09.5s Lag"}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{"Plaintext student PII & quiz URLs leaked · Synthetic event dispatch (event.isTrusted: false) flagged · 5/5 solves quota exhausted mid-exam!"}</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">{"09.5s Lag"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>{"Locks exam with $4.99/week Pro paywall · Transmits unencrypted student credentials"}</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="GetQuizSolvePlaintextPrivacyLeakDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Under 45 CFR 46 (Common Rule) and FERPA (34 CFR § 99.30), a clinical platform deployed an AI quiz solver transmitting student IDs and exam prompts over plaintext HTTP POST packets (api.getquizsolve.com). What sanctions and institutional actions are mandated?"}
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  {"A) IRB review is waived because educational tests qualify as exempt research under Category 1"}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{"B) Immediate cessation of data transmission; mandatory IRB full-board escalation; FERPA statutory notification"}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">{"0.3s Solve ✓"}</span>
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
              key="GetQuizSolvePlaintextPrivacyLeakDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{"BETH 410 / LAW 642 Common Rule & FERPA Proof"}</span>
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
                    <strong>Claude 3.7 Sonnet (Formal Derivation):</strong> {"Statutory & Regulatory Synthesis of 45 CFR 46: Under 45 CFR § 46.104(d)(1), research conducted in educational settings is exempt ONLY IF information recorded cannot be identified directly or through identifiers linked to subjects, and disclosure would not place subjects at risk. Transmitting unencrypted student test data to third-party domains directly breaches 34 CFR § 99.30 (FERPA), which requires prior written consent. Because identifiable educational records were exposed externally, the institutional IRB must escalate from expedited review to full-board oversight and report the confidentiality breach."}
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor Analysis):</strong> {"Exam Trap Breakdown: Option A fails because Category 1 exemption is strictly contingent on confidentiality; plaintext external leakage invalidates exemption immediately. Option D is an erroneous distractor: Subpart D of 45 CFR 46 provides additional protections specifically for children (<18) and does not grant blanket exemptions to adult university students."}
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Proof):</strong> {"Network Protocol Forensic Verification: An HTTP POST without TLS 1.3 exposes the packet payload over campus Wi-Fi: Content-Type: application/json; {\"student_id\": \"u84920\", \"exam_url\": \"canvas.edu/quiz/12\", \"prompt\": \"...\"}. Packet sniffing exposes session cookies and authentication headers, violating FTC Act § 5 unfair data practices and university Acceptable Use Policies."}
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
   HomeworkHelperAdClutterAndLagDemo:
   ECON 311 / ECON 401 Advanced Microeconomics · Midterm Exam
   Scene 0: AI Homework Helper: Ad Clutter, Redirection Popups & 14.6s Lag
   Scene 1: ExamGhost: 0.3s Inline Solve & Zero Ad Interstitials
   Scene 2: Study AI Hub: Asymmetric Stackelberg Derivation & Welfare Loss
   ============================================================================ */
export function HomeworkHelperAdClutterAndLagDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "AI Homework Helper: Ad Clutter, Redirection Popups & 14.6s Lag",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: "ExamGhost: 0.3s Inline Solve & Zero Ad Interstitials",
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: "Study AI Hub: Asymmetric Stackelberg Derivation & Welfare Loss",
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
            speedGrader: "Ad Iframe Injected · Redirect fired window.blur · 1 flag logged in SpeedGrader",
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
        return { x: 32, y: 28, clicking: false, label: "Reading Stackelberg Duopoly Prompt", tag: "default" };
      } else if (safeProgress < 50) {
        return { x: 50, y: 45, clicking: true, label: "Click Homework-Helper: Injects Floating Ad Banner", tag: "fail" };
      } else if (safeProgress < 75) {
        return { x: 82, y: 22, clicking: true, label: "Clicking [x] to dismiss ad redirects to livepolls.app! window.blur!", tag: "fail" };
      } else {
        return { x: 30, y: 64, clicking: false, label: "14.6s Ad Delay · SpeedGrader Proctoring Flag Triggered", tag: "fail" };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 34, y: 30, clicking: true, label: "Double-Click Inline Solve (0.3s)", tag: "solve" };
      } else if (safeProgress < 70) {
        return { x: 30, y: 64, clicking: false, label: "Option B Highlighted in Closed Shadow DOM", tag: "solve" };
      } else {
        return { x: 68, y: 84, clicking: false, label: "Alt+1 Ghost Mode · ⌘+Shift+U Panic Wipe Ready", tag: "invisible" };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Formal Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Analytical Formalism)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={"ECON 311 / ECON 401 Advanced Microeconomics · Midterm Exam"}
        domainBadge={"CANVAS LMS"}
        browserUrl={"https://canvas.instructure.com/courses/47281/quizzes/69105"}
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
              key="HomeworkHelperAdClutterAndLagDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">{"Question 13 · Asymmetric Stackelberg & Deadweight Loss (DWL)"}</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"In an asymmetric duopoly with P(Q) = 240 - 2Q, Leader marginal cost c₁ = $20, Follower c₂ = $40. Assuming zero fixed costs, what is Leader output q₁*, Follower output q₂*, market price P*, and deadweight loss (DWL)?"}
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>{"AI Homework Helper v2.5.1 injecting sponsored ad banners and promo iframes..."}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">{"14.6s Lag"}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{"Modal popup: Watch 15s video ad to unlock solution · Dismiss click redirected tab to livepolls.app/chrome_addons · SpeedGrader logged window.blur!"}</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">{"14.6s Lag"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>{"VIP upgrade $14.99/mo demanded · 14.6s layout shift and ad redirection delay"}</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="HomeworkHelperAdClutterAndLagDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"In an asymmetric duopoly with P(Q) = 240 - 2Q, Leader marginal cost c₁ = $20, Follower c₂ = $40. Assuming zero fixed costs, what is Leader output q₁*, Follower output q₂*, market price P*, and deadweight loss (DWL)?"}
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  {"A) q₁* = 45.0, q₂* = 35.0, P* = $80.00, DWL = $450.00 (Cournot simultaneous-move)"}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{"B) q₁* = 55.0, q₂* = 22.5, P* = $85.00, DWL = $600.63 (Stackelberg SPNE)"}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">{"0.3s Solve ✓"}</span>
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
              key="HomeworkHelperAdClutterAndLagDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{"ECON 311 Stackelberg Leadership & DWL"}</span>
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
                    <strong>Claude 3.7 Sonnet (Formal Derivation):</strong> {"Backward Induction Calculus Derivation: Stage 2 (Follower Firm 2): Maximizes profit π₂ = (240 - 2q₁ - 2q₂ - 40)q₂. First-order condition: ∂π₂/∂q₂ = 200 - 2q₁ - 4q₂ = 0 ⟹ q₂*(q₁) = 50 - 0.5q₁. Stage 1 (Leader Firm 1): Anticipates Firm 2's response: π₁ = (240 - 2q₁ - 2(50 - 0.5q₁) - 20)q₁ = (120 - q₁)q₁. FOC: dπ₁/dq₁ = 120 - 2q₁ = 0 ⟹ q₁* = 55.0. Follower output: q₂* = 50 - 0.5(55) = 22.5. Total market output Q* = 55.0 + 22.5 = 77.5. Market clearing price P* = 240 - 2(77.5) = $85.00."}
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor Analysis):</strong> {"Deadweight Loss Integration & Distractor Traps: Option A represents the Cournot simultaneous-move equilibrium where q₁^C = 46.67, q₂^C = 26.67. For Deadweight Loss: Competitive benchmark with lower cost leader: P = MC₁ = 20 ⟹ 240 - 2Q = 20 ⟹ Q_comp = 110. DWL integration evaluates the welfare triangle plus follower production penalty, yielding exactly $600.63."}
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Proof):</strong> {"Surplus Verification: Leader profit π₁* = (85 - 20)(55) = $3,575.00. Follower profit π₂* = (85 - 40)(22.5) = $1,012.50. Consumer surplus CS = (1/2)(240 - 85)(77.5) = $6,006.25. Total welfare W = 3575 + 1012.50 + 6006.25 = $10,593.75. Maximum potential welfare W_max = (1/2)(240 - 20)(110) = $12,100.00. Welfare gap confirms DWL = $600.63."}
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
   KnowtFlashcardMismatchAndNoStealthDemo:
   BIOC 401 / CHEM 330 Advanced Enzymology · Canvas Exam
   Scene 0: Knowt: Quizlet Flashcard Mismatch, Tab-Switch window.blur & Zero Stealth
   Scene 1: ExamGhost: 0.3s Double-Click Solve & Focus Shield Active
   Scene 2: Study AI Hub: Cleland Enzyme Kinetics & Lineweaver-Burk Derivation
   ============================================================================ */
export function KnowtFlashcardMismatchAndNoStealthDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "Knowt: Quizlet Flashcard Mismatch, Tab-Switch window.blur & Zero Stealth",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: "ExamGhost: 0.3s Double-Click Solve & Focus Shield Active",
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: "Study AI Hub: Cleland Enzyme Kinetics & Lineweaver-Burk Derivation",
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
            speedGrader: "Tab Switch Alert: Left Canvas to knowt.com · window.blur logged · 1 flag",
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
        return { x: 32, y: 28, clicking: false, label: "Reading Enzyme Kinetics Mixed Inhibition Prompt", tag: "default" };
      } else if (safeProgress < 50) {
        return { x: 52, y: 44, clicking: true, label: "Alt-Tab to knowt.com / Kai AI Flashcards: Canvas fires window.blur!", tag: "fail" };
      } else if (safeProgress < 75) {
        return { x: 85, y: 20, clicking: true, label: "Flashcard mismatch: Quizlet card says Km unchanged (Option B)!", tag: "fail" };
      } else {
        return { x: 30, y: 64, clicking: true, label: "Wrong Answer: Option B · Canvas SpeedGrader logs tab switch", tag: "fail" };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 34, y: 30, clicking: true, label: "Double-Click Inline Solve (0.3s)", tag: "solve" };
      } else if (safeProgress < 70) {
        return { x: 30, y: 64, clicking: false, label: "Option A Verified in Closed Shadow DOM (0.3s)", tag: "solve" };
      } else {
        return { x: 68, y: 84, clicking: false, label: "Alt+1 Ghost / ⌘+Shift+U Panic Wipe Ready", tag: "invisible" };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Formal Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Analytical Formalism)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={"BIOC 401 / CHEM 330 Advanced Enzymology · Canvas Exam"}
        domainBadge={"CANVAS LMS"}
        browserUrl={"https://canvas.instructure.com/courses/53192/quizzes/84019"}
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
              key="KnowtFlashcardMismatchAndNoStealthDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">{"Question 10 · Mixed Allosteric Enzyme Inhibition & Lineweaver-Burk Plots"}</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Michaelis-Menten enzyme V_max = 120 μmol/min, K_m = 4.0 mM. Mixed inhibitor [I] = 5.0 mM with K_i = 2.5 mM (α = 3.0) and K_i' = 10.0 mM (α' = 1.5). What are apparent parameters V_max^app, K_m^app, and intersection quadrant?"}
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>{"Searching Knowt / Quizlet imported flashcards at knowt.com..."}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">{"16.4s Delay"}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{"Tab switch to knowt.com logged window.blur in SpeedGrader · Crowdsourced card stated non-competitive Km is unchanged (Option B) · Exam failed!"}</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">{"16.4s Delay"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>{"Knowt Ultra demands $24.99/month · Zero stealth overlay or closed Shadow DOM"}</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="KnowtFlashcardMismatchAndNoStealthDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Michaelis-Menten enzyme V_max = 120 μmol/min, K_m = 4.0 mM. Mixed inhibitor [I] = 5.0 mM with K_i = 2.5 mM (α = 3.0) and K_i' = 10.0 mM (α' = 1.5). What are apparent parameters V_max^app, K_m^app, and intersection quadrant?"}
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  {"A) V_max^app = 80.0 μmol/min, K_m^app = 8.0 mM; plots intersect in Quadrant II (x < 0, y > 0)"}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{"A) V_max^app = 80.0 μmol/min, K_m^app = 8.0 mM; plots intersect in Quadrant II (x < 0, y > 0)"}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">{"0.3s Solve ✓"}</span>
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
              key="KnowtFlashcardMismatchAndNoStealthDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{"BIOC 401 Mixed Enzyme Kinetics & Cleland Plots"}</span>
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
                    <strong>Claude 3.7 Sonnet (Formal Derivation):</strong> {"Lineweaver-Burk Mixed Inhibition Derivation: In general mixed inhibition, initial velocity is v = (V_max [S]) / (α K_m + α'[S]) = [(V_max/α')[S]] / [(α/α')K_m + [S]]. Hence: V_max^app = V_max / α' = 120 / 1.5 = 80.0 μmol/min. K_m^app = K_m · (α / α') = 4.0 · (3.0 / 1.5) = 8.0 mM. The double-reciprocal equation is 1/v = (α K_m / V_max)(1/[S]) + α'/V_max. The uninhibited line is 1/v₀ = (K_m / V_max)(1/[S]) + 1/V_max. Equating 1/v = 1/v₀ gives 1/[S] = -(α' - 1) / [(α - 1)K_m] = -0.5 / (2.0 · 4.0) = -0.0625 mM⁻¹. Since 1/[S] < 0 and 1/v = 0.00625 > 0, the intersection occurs in Quadrant II."}
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor Analysis):</strong> {"Quizlet Flashcard Error & Distractor Analysis: Static flashcards oversimplify mixed inhibition by treating it as pure non-competitive (α = α'). In pure non-competitive inhibition, inhibitor binds free enzyme and ES complex equally (α/α' = 1), leaving K_m unchanged (Option B). When α > α', the inhibitor binds free enzyme with higher affinity (K_i < K_i'), driving substrate binding into a higher apparent K_m. Option C represents competitive inhibition."}
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Proof):</strong> {"Thermodynamic Affinity & Cleland Diagram Invariants: Binding free energies: ΔG_E = -RT ln(1/2.5 mM) vs ΔG_ES = -RT ln(1/10.0 mM). ΔΔG = RT ln(10/2.5) = RT ln(4) ≈ 3.43 kJ/mol at 298 K. The higher affinity for free E depletes active catalytic units available for substrate binding, increasing K_m^app by a factor of 2.0."}
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
   QuestionAiSingleModelHallucinationDemo:
   ECON 482 / STAT 450 Applied Time Series Econometrics · Canvas Midterm
   Scene 0: QuestionAI: ChatGPT Wrapper Hallucination, 400px Sidebar & Public Indexing
   Scene 1: ExamGhost: 0.3s Double-Click Solve & Zero Search Indexing
   Scene 2: Study AI Hub: ARMA Stability Polynomials & Wold Invertibility
   ============================================================================ */
export function QuestionAiSingleModelHallucinationDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "QuestionAI: ChatGPT Wrapper Hallucination, 400px Sidebar & Public Indexing",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: "ExamGhost: 0.3s Double-Click Solve & Zero Search Indexing",
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: "Study AI Hub: ARMA Stability Polynomials & Wold Invertibility",
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
            speedGrader: "Sidebar Resized Viewport · window.blur logged · Hallucinated Option A",
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
        return { x: 32, y: 28, clicking: false, label: "Reading ARMA(2,1) Econometrics Prompt", tag: "default" };
      } else if (safeProgress < 50) {
        return { x: 52, y: 44, clicking: true, label: "Open QuestionAI 400px Sidebar: Resizes Viewport · fires window.blur!", tag: "fail" };
      } else if (safeProgress < 75) {
        return { x: 85, y: 20, clicking: true, label: "Single-Model Hallucination: Inverts AR roots (confuses z with 1/z)", tag: "fail" };
      } else {
        return { x: 30, y: 64, clicking: true, label: "Wrong Answer: Option A · Public Q&A indexing leak", tag: "fail" };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 34, y: 30, clicking: true, label: "Double-Click Inline Solve (0.3s)", tag: "solve" };
      } else if (safeProgress < 70) {
        return { x: 30, y: 64, clicking: false, label: "Option B Verified in Closed Shadow DOM (0.3s)", tag: "solve" };
      } else {
        return { x: 68, y: 84, clicking: false, label: "Alt+1 Ghost / ⌘+Shift+U Panic Wipe Ready", tag: "invisible" };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Formal Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Analytical Formalism)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={"ECON 482 / STAT 450 Applied Time Series Econometrics · Canvas Midterm"}
        domainBadge={"CANVAS LMS"}
        browserUrl={"https://canvas.instructure.com/courses/46190/quizzes/75102"}
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
              key="QuestionAiSingleModelHallucinationDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">{"Question 15 · ARMA(2,1) Covariance Stationarity & Invertibility"}</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Consider the ARMA(2,1) time series process: (1 - 1.2L + 0.35L²)X_t = (1 + 0.6L)ε_t, where L is lag operator and ε_t ~ WN(0, σ²). Determine roots, covariance stationarity, and invertibility."}
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>{"QuestionAI unanchored GPT-4o-mini wrapper querying lag operator polynomial..."}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">{"13.2s Delay"}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{"QuestionAI confused lag polynomial roots z with companion matrix eigenvalues λ=1/z · Concluded roots are inside unit circle (Option A) · 400px sidebar resized viewport & fired window.blur!"}</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">{"13.2s Delay"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>{"Student questions indexed on public Google search · Free tier throttled during exams"}</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="QuestionAiSingleModelHallucinationDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"Consider the ARMA(2,1) time series process: (1 - 1.2L + 0.35L²)X_t = (1 + 0.6L)ε_t, where L is lag operator and ε_t ~ WN(0, σ²). Determine roots, covariance stationarity, and invertibility."}
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  {"A) Non-stationary because AR roots z₁ = 0.5, z₂ = 0.7 lie inside unit circle; invertible (QuestionAI hallucination)"}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{"B) Strictly stationary because AR roots z₁ = 2.0, z₂ = 1.4286 lie outside unit circle (|z| > 1); MA root z_MA = -1.6667 (|z| > 1)"}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">{"0.3s Solve ✓"}</span>
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
              key="QuestionAiSingleModelHallucinationDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{"ECON 482 ARMA Time Series Stability Proof"}</span>
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
                    <strong>Claude 3.7 Sonnet (Formal Derivation):</strong> {"Mathematical Derivation: In standard time series notation, the autoregressive operator is Φ(L) = 1 - 1.2L + 0.35L² = (1 - 0.5L)(1 - 0.7L). Setting Φ(z) = 1 - 1.2z + 0.35z² = 0, the quadratic formula yields z = [1.2 ± √(1.44 - 1.40)] / 0.7 = (1.2 ± 0.2) / 0.7. Thus z₁ = 1.4 / 0.7 = 2.0 and z₂ = 1.0 / 0.7 = 1.4286. Because |z₁| = 2.0 > 1 and |z₂| = 1.4286 > 1, all roots lie strictly outside the unit circle, proving covariance stationarity. The moving average polynomial Θ(z) = 1 + 0.6z = 0 yields root z_MA = -1/0.6 = -1.6667. Since |z_MA| > 1, the process is strictly invertible."}
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor Analysis):</strong> {"Root Convention Inversion Fallacy: Generic AI wrappers frequently confuse the lag polynomial formulation Φ(z) = 1 - φ₁ z - φ₂ z² = 0 with the forward characteristic equation λ² - φ₁ λ - φ₂ = 0. The roots λ₁ = 0.7 and λ₂ = 0.5 are the eigenvalues of the companion matrix, which must lie inside the unit circle (|λ| < 1). Because λ = 1/z, z₁ = 1/0.5 = 2.0 and z₂ = 1/0.7 = 1.4286 lie outside the unit circle. QuestionAI hallucinated that 0.5 and 0.7 were the z-roots and applied the |z| > 1 test backwards!"}
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Proof):</strong> {"Spectral Matrix Proof: State space form: [X_t, X_{t-1}]ᵀ = [1.2, -0.35; 1, 0][X_{t-1}, X_{t-2}]ᵀ + [(1+0.6L)ε_t, 0]ᵀ. The spectral radius is ρ(F) = max(|0.7|, |0.5|) = 0.7 < 1. By Gelfand's formula, ‖F^k‖ ⟹ 0 exponentially as k ⟹ ∞, guaranteeing existence of convergent causal MA(∞) representation X_t = ∑ ψ_j ε_{t-j}."}
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
   QuizardDiscordBotAndFocusLossDemo:
   CS 423 Distributed Systems · Canvas Final Exam
   Scene 0: Quizard: Discord Bot Dependency, 11.8s Gateway Lag & Canvas window.blur
   Scene 1: ExamGhost: 0.3s In-Tab Solve & Zero Window Focus Shifts
   Scene 2: Study AI Hub: Raft Section 5.4.1 Election Safety Formal Proof
   ============================================================================ */
export function QuizardDiscordBotAndFocusLossDemo() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const scenes: MotionScene[] = [
    {
      id: 0,
      label: '1. Competitor Failure',
      title: "Quizard: Discord Bot Dependency, 11.8s Gateway Lag & Canvas window.blur",
      durationMs: 7000,
    },
    {
      id: 1,
      label: '2. ExamGhost 0.3s Solve',
      title: "ExamGhost: 0.3s In-Tab Solve & Zero Window Focus Shifts",
      durationMs: 6500,
    },
    {
      id: 2,
      label: '3. 2-in-1 Study Hub',
      title: "Study AI Hub: Raft Section 5.4.1 Election Safety Formal Proof",
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
            speedGrader: "Focus Alert: Switched to Discord.exe · 2 blur flags logged in SpeedGrader",
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
        return { x: 32, y: 28, clicking: false, label: "Reading Raft Consensus Prompt", tag: "default" };
      } else if (safeProgress < 50) {
        return { x: 52, y: 44, clicking: true, label: "Alt-Tab to Discord App (/solve bot command): Canvas fires window.blur!", tag: "fail" };
      } else if (safeProgress < 75) {
        return { x: 85, y: 20, clicking: true, label: "Discord Gateway round-trip lag (11.8s) · Second monitor gaze flag!", tag: "fail" };
      } else {
        return { x: 30, y: 64, clicking: true, label: "Wrong Answer: Option A · SpeedGrader logs 2 blur events", tag: "fail" };
      }
    } else if (currentScene === 1) {
      if (safeProgress < 35) {
        return { x: 34, y: 30, clicking: true, label: "Double-Click Inline Solve (0.3s)", tag: "solve" };
      } else if (safeProgress < 70) {
        return { x: 30, y: 64, clicking: false, label: "Option B Verified in Closed Shadow DOM (0.3s)", tag: "solve" };
      } else {
        return { x: 68, y: 84, clicking: false, label: "Alt+1 Ghost / ⌘+Shift+U Panic Wipe Ready", tag: "invisible" };
      }
    } else {
      if (safeProgress < 35) {
        return { x: 26, y: 18, clicking: true, label: 'Claude 3.7 Sonnet (Formal Derivation)', tag: 'default' };
      } else if (safeProgress < 70) {
        return { x: 50, y: 18, clicking: true, label: 'ChatGPT o3-mini/4o (Distractor Breakdown)', tag: 'default' };
      } else {
        return { x: 74, y: 18, clicking: true, label: 'DeepSeek-R1 (Analytical Formalism)', tag: 'explain' };
      }
    }
  };

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={"CS 423 Distributed Systems · Canvas Final Exam"}
        domainBadge={"CANVAS LMS"}
        browserUrl={"https://canvas.instructure.com/courses/58104/quizzes/93012"}
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
              key="QuizardDiscordBotAndFocusLossDemo-s0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase">{"Question 18 · Raft Consensus Protocol Section 5.4.1 Election Safety"}</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"In a 5-node Raft cluster, Candidate S1 (Term 4, lastLogIndex=18, lastLogTerm=3) sends RequestVote to Follower S2 (Term 4, lastLogIndex=17, lastLogTerm=4). Under Section 5.4.1, what is S2's response?"}
                </p>
              </div>

              {safeProgress < 45 ? (
                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-between text-xs text-amber-300">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 animate-spin text-amber-400 shrink-0" />
                    <span>{"Quizard Discord bot (/solve) transmitting screenshot over Discord gateway..."}</span>
                  </div>
                  <span className="font-mono font-bold text-amber-200">{"11.8s Lag"}</span>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/40 text-xs text-rose-200 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{"11.8s Discord gateway latency · Switched windows to Discord.exe, firing 2 window.blur flags in Canvas · Bot misapplied log length rule (Option A)!"}</span>
                    </div>
                    <span className="font-mono text-rose-300 font-bold">{"11.8s Lag"}</span>
                  </div>
                  <div className="p-3 rounded-lg bg-black/40 border border-white/10 font-mono text-[11px] text-slate-300 flex items-center justify-between">
                    <span>{"Quizard desktop app requires Discord authentication and public channel logging"}</span>
                    <span className="text-rose-400 font-bold">FAIL</span>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3S SOLVE */}
          {currentScene === 1 && (
            <motion.div
              key="QuizardDiscordBotAndFocusLossDemo-s1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase">ExamGhost 0.3s Stealth Solve</span>
                <p className="text-xs sm:text-sm text-slate-200 mt-1 font-mono leading-relaxed">
                  {"In a 5-node Raft cluster, Candidate S1 (Term 4, lastLogIndex=18, lastLogTerm=3) sends RequestVote to Follower S2 (Term 4, lastLogIndex=17, lastLogTerm=4). Under Section 5.4.1, what is S2's response?"}
                </p>
              </div>

              <div className="space-y-2">
                <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-400">
                  {"A) S2 grants vote because S1 has higher log index (18 > 17), satisfying log length precedence (Quizard bot error)"}
                </div>
                <div className="p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/50 text-xs text-emerald-200 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span className="font-semibold">{"B) S2 denies vote (voteGranted = false) because S2 last log entry has higher term (4 > 3), making S2 strictly more up-to-date"}</span>
                  </div>
                  <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-300 font-bold">{"0.3s Solve ✓"}</span>
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
              key="QuizardDiscordBotAndFocusLossDemo-s2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-slate-200">{"CS 423 Raft Consensus Section 5.4.1 Invariants"}</span>
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
                    <strong>Claude 3.7 Sonnet (Formal Derivation):</strong> {"Raft Specification Section 5.4.1 Formal Proof: Raft Section 5.4.1 defines the log up-to-dateness invariant: 'If the logs have last entries with different terms, then the log with the later term is more up-to-date. If the logs end with the same term, then whichever log is longer is more up-to-date.' Here, Candidate S1 has last entry term 3, whereas Voter S2 has last entry term 4. Since 4 > 3, S2's log is strictly more up-to-date. Therefore, S2 MUST deny the vote (voteGranted = false). If S2 granted the vote, S1 could win and overwrite uncommitted entries from term 4 with stale entries from term 3, violating the Leader Completeness property."}
                  </p>
                )}
                {activeModelTab === 'chatgpt' && (
                  <p>
                    <strong>ChatGPT o3-mini/4o (Distractor Analysis):</strong> {"Log Length vs Term Precedence Fallacy: Option A falls for the common log length trap (18 > 17). In distributed consensus, a partitioned candidate might accumulate many uncommitted entries from an obsolete term (term 3). A follower with fewer entries from a newer term (term 4) has witnessed higher-term state transitions. Term precedence strictly dominates log index length. Option C is wrong because followers only convert to candidate when their randomized election timer expires."}
                  </p>
                )}
                {activeModelTab === 'deepseek' && (
                  <p className="font-mono text-[11px]">
                    <strong>DeepSeek-R1 (Analytical Proof):</strong> {"TLA+ State Machine Verification: Let invariant LeaderCompleteness state that if a log entry is committed in term T, then that entry is present in the logs of the leaders for all terms > T. If S2 granted its vote to S1, S1 could win an election without knowing the committed entries of term 4. In TLA+: ∀ c ∈ Candidates, v ∈ Voters: (v.lastLogTerm > c.lastLogTerm) ⟹ ¬GrantVote(v, c). Denying the vote preserves linearizability across partition recoveries."}
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
