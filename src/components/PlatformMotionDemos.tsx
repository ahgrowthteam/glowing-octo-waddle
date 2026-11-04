'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MotionDemoFrame,
  MotionCursor,
  MotionTimelineScrubber,
} from '@/components/motion-demo';
import {
  SpeedOption,
  MotionScene,
  TelemetryState,
  CursorState,
} from '@/components/motion-demo/types';
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
  Terminal,
  Activity,
  FileText,
  AlertCircle,
} from 'lucide-react';

/* ============================================================================
   SHARED REUSABLE DEMO ENGINE FOR BESPOKE PLATFORM DEMOS
   ============================================================================ */

export interface PlatformDemoOption {
  label: string;
  text: string;
  isWrongSelected?: boolean;
  isCorrectSelected?: boolean;
}

export interface PlatformDemoConfig {
  title: string;
  domainBadge: string;
  browserUrl: string;
  scenes: MotionScene[];
  scene0: {
    warningBadge: string;
    courseHeader: string;
    points: string;
    prompt: React.ReactNode;
    stopwatchSec?: number;
    failureBanner: {
      title: string;
      description: string;
      tagLabel?: string;
    };
    options: PlatformDemoOption[];
    getCursor: (progress: number) => CursorState;
    getTelemetry: (progress: number) => TelemetryState;
  };
  scene1: {
    stealthBadge: string;
    courseHeader: string;
    points: string;
    prompt: React.ReactNode;
    hudText: string;
    options: PlatformDemoOption[];
    getCursor: (progress: number) => CursorState;
    getTelemetry: (progress: number) => TelemetryState;
  };
  scene2: {
    hubTitle: string;
    claudeDerivation: React.ReactNode;
    chatgptDerivation: React.ReactNode;
    deepseekDerivation: React.ReactNode;
    getCursor: (progress: number) => CursorState;
    getTelemetry: (progress: number) => TelemetryState;
  };
}

export function BasePlatformMotionDemo({ config }: { config: PlatformDemoConfig }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [currentScene, setCurrentScene] = useState(0);
  const [sceneProgress, setSceneProgress] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState<SpeedOption>(1);
  const [activeModelTab, setActiveModelTab] = useState<'claude' | 'chatgpt' | 'deepseek'>('claude');

  const { scenes, scene0, scene1, scene2 } = config;

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

  // Determine telemetry & cursor
  let telemetry: TelemetryState;
  let cursorState: CursorState;

  if (currentScene === 0) {
    telemetry = scene0.getTelemetry(safeProgress);
    cursorState = scene0.getCursor(safeProgress);
  } else if (currentScene === 1) {
    telemetry = scene1.getTelemetry(safeProgress);
    cursorState = scene1.getCursor(safeProgress);
  } else {
    telemetry = scene2.getTelemetry(safeProgress);
    cursorState = scene2.getCursor(safeProgress);
  }

  return (
    <div className="w-full space-y-4">
      <MotionDemoFrame
        title={config.title}
        domainBadge={config.domainBadge}
        browserUrl={config.browserUrl}
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
        <div className="relative p-5 sm:p-7 min-h-[400px] flex flex-col justify-between">
          <MotionCursor cursor={cursorState} />

          {/* SCENE 0: REAL PLATFORM / COMPETITOR FAILURE */}
          {currentScene === 0 && (
            <motion.div
              key="scene-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-rose-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <AlertTriangle className="w-3.5 h-3.5 text-rose-500" />
                  {scene0.warningBadge}
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-rose-950/80 border border-rose-500/40 text-rose-300 font-bold">
                  {safeProgress > 45 ? scene0.failureBanner.tagLabel || 'LMS Telemetry Warning Flagged' : 'Attempt in progress'}
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5 relative">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 mb-2 border-b border-white/10">
                  <span>{scene0.courseHeader}</span>
                  <span className="text-amber-400 font-bold">{scene0.points}</span>
                </div>

                <div className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed mb-3">
                  {scene0.prompt}
                </div>

                {safeProgress > 30 && (
                  <motion.div
                    initial={{ y: 8, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="my-3 p-3.5 rounded-xl bg-slate-950/95 border border-rose-500/60 flex flex-wrap items-center justify-between gap-3 shadow-lg shadow-rose-950/30"
                  >
                    <div className="flex items-center gap-3">
                      {scene0.stopwatchSec ? (
                        <div className="px-3 py-1.5 rounded-lg bg-rose-950/80 border border-rose-500 font-mono font-black text-rose-400 text-base sm:text-lg">
                          ⏱ {(safeProgress * (scene0.stopwatchSec / 100)).toFixed(1)}s
                        </div>
                      ) : (
                        <div className="p-2 rounded-lg bg-rose-950/80 border border-rose-500 text-rose-400">
                          <AlertCircle className="w-5 h-5 text-rose-400" />
                        </div>
                      )}
                      <div className="text-xs space-y-0.5">
                        <p className="font-bold text-rose-300">{scene0.failureBanner.title}</p>
                        <p className="text-[11px] text-slate-400">{scene0.failureBanner.description}</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {scene0.options.map((opt) => (
                    <div
                      key={opt.label}
                      className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                        opt.isWrongSelected && safeProgress > 65
                          ? 'bg-rose-950/50 border-rose-500 text-rose-200 font-medium'
                          : 'bg-white/[0.02] border-white/10 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-bold">
                          {opt.label}
                        </span>
                        <span>{opt.text}</span>
                      </div>
                      {opt.isWrongSelected && safeProgress > 65 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-rose-900 border border-rose-500 text-rose-200">
                          Flagged
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 1: EXAMGHOST 0.3s INLINE SOLVE IN CLOSED SHADOW DOM */}
          {currentScene === 1 && (
            <motion.div
              key="scene-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  {scene1.stealthBadge}
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 font-bold">
                  0 Blur Events · 100% Focus Shield
                </span>
              </div>

              <div className="rounded-2xl bg-white/[0.04] border border-emerald-500/30 p-4 sm:p-5 relative shadow-lg shadow-emerald-950/20">
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 pb-2 mb-2 border-b border-white/10">
                  <span>{scene1.courseHeader}</span>
                  <span className="text-emerald-400 font-bold">{scene1.points}</span>
                </div>

                <div className="text-xs sm:text-sm font-medium text-slate-200 leading-relaxed mb-3">
                  {scene1.prompt}
                </div>

                {/* ExamGhost Closed Shadow DOM HUD */}
                {safeProgress > 25 && (
                  <motion.div
                    initial={{ scale: 0.96, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="my-3 p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/90 to-slate-950 border border-emerald-500/60 flex flex-wrap items-center justify-between gap-3 shadow-md"
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-emerald-900/80 border border-emerald-400 text-emerald-300">
                        <Zap className="w-5 h-5 text-emerald-300" />
                      </div>
                      <div className="text-xs space-y-0.5">
                        <div className="flex items-center gap-2">
                          <p className="font-bold text-emerald-300">ExamGhost Closed Shadow DOM</p>
                          <span className="text-[10px] font-mono bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded border border-emerald-500/40 font-semibold">
                            ⚡ 0.3s Latency
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-300">{scene1.hudText}</p>
                      </div>
                    </div>
                    <div className="text-[11px] font-mono text-emerald-400 font-semibold">
                      Double-Click / Alt+S Verified
                    </div>
                  </motion.div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-3 text-xs">
                  {scene1.options.map((opt) => (
                    <div
                      key={opt.label}
                      className={`p-2.5 rounded-xl border flex items-center justify-between transition-all ${
                        opt.isCorrectSelected && safeProgress > 45
                          ? 'bg-emerald-950/60 border-emerald-400 text-emerald-100 font-medium ring-1 ring-emerald-400/50'
                          : 'bg-white/[0.02] border-white/10 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-xs px-1.5 py-0.5 rounded bg-white/10 text-slate-300 font-bold">
                          {opt.label}
                        </span>
                        <span>{opt.text}</span>
                      </div>
                      {opt.isCorrectSelected && safeProgress > 45 && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-900 border border-emerald-400 text-emerald-200 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Auto-Selected
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* SCENE 2: 2-IN-1 STUDY AI HUB MULTI-MODEL DERIVATION */}
          {currentScene === 2 && (
            <motion.div
              key="scene-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-[11px] font-mono text-indigo-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
                  {scene2.hubTitle}
                </span>
                <span className="text-[11px] font-mono px-2.5 py-0.5 rounded bg-indigo-950/80 border border-indigo-500/40 text-indigo-300 font-bold">
                  Claude 3.7 + ChatGPT + DeepSeek-R1
                </span>
              </div>

              {/* Model Tabs Header */}
              <div className="rounded-2xl bg-white/[0.04] border border-white/10 p-4 sm:p-5">
                <div className="flex items-center gap-2 pb-3 mb-3 border-b border-white/10 overflow-x-auto">
                  <button
                    type="button"
                    onClick={() => setActiveModelTab('claude')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                      activeModelTab === 'claude'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Cpu className="w-3.5 h-3.5 text-amber-400" />
                    Claude 3.7 Sonnet
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveModelTab('chatgpt')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                      activeModelTab === 'chatgpt'
                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Zap className="w-3.5 h-3.5 text-emerald-400" />
                    ChatGPT o3-mini/4o
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveModelTab('deepseek')}
                    className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5 transition-all ${
                      activeModelTab === 'deepseek'
                        ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 shadow-sm'
                        : 'text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <BookOpen className="w-3.5 h-3.5 text-sky-400" />
                    DeepSeek-R1
                  </button>
                </div>

                <div className="text-xs sm:text-sm text-slate-200 leading-relaxed min-h-[160px]">
                  {activeModelTab === 'claude' && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-amber-400 font-bold">
                        <span>Claude 3.7 Sonnet Extended Reasoning:</span>
                      </div>
                      {scene2.claudeDerivation}
                    </div>
                  )}
                  {activeModelTab === 'chatgpt' && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400 font-bold">
                        <span>ChatGPT o3-mini/4o Fast Proof:</span>
                      </div>
                      {scene2.chatgptDerivation}
                    </div>
                  )}
                  {activeModelTab === 'deepseek' && (
                    <div className="space-y-2">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono text-sky-400 font-bold">
                        <span>DeepSeek-R1 Deep Verification:</span>
                      </div>
                      {scene2.deepseekDerivation}
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
   ROUTE 1: CANVAS LMS QUIZ SOLVER MOTION DEMO
   Problem: BIO-204 Cell Biology · Oxidative Phosphorylation & ATP Synthase
   ============================================================================ */

export function CanvasLmsQuizMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'BIO 204 Exam II · Canvas Classic & New Quizzes',
    domainBadge: 'CANVAS LMS',
    browserUrl: 'https://canvas.instructure.com/courses/91042/quizzes/482019/take',
    scenes: [
      { id: 0, label: '1. SpeedGrader Blur Trap', title: 'SpeedGrader: 14.8s Tab Switch Flagged', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost 0.3s Solve', title: 'ExamGhost: 0.3s Inline Solve · 0 Blur Events', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Multi-Model Cellular Respiration', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'Canvas SpeedGrader: window.onblur Telemetry Active',
      courseHeader: 'BIO 204 · Cell Biology Exam · Question 18 of 50',
      points: '3.0 Points',
      prompt: (
        <span>
          During aerobic cellular respiration, which cellular compartment hosts the electrochemical proton gradient that drives ATP synthase, and what is the net ATP yield per glucose molecule?
        </span>
      ),
      stopwatchSec: 14.8,
      failureBanner: {
        title: 'SpeedGrader Audit Log Alert: Stopped Viewing Quiz',
        description: '10:14:02 AM — Student stopped viewing quiz for 14.8s while searching ChatGPT in external tab. Event: page_blurred.',
        tagLabel: 'SpeedGrader: 1 page_blurred flag (14.8s)',
      },
      options: [
        { label: 'A', text: 'Cytoplasm (Glycolysis), 2 ATP' },
        { label: 'B', text: 'Mitochondrial Matrix / Cristae (Oxidative Phosphorylation), 30–32 ATP', isWrongSelected: true },
        { label: 'C', text: 'Endoplasmic Reticulum, 16 ATP' },
        { label: 'D', text: 'Outer Mitochondrial Membrane, 4 ATP' },
      ],
      getCursor: (p) => {
        if (p < 30) return { x: 30, y: 35, clicking: false, label: 'Reading stem' };
        if (p < 60) return { x: 88, y: 12, clicking: true, label: 'Tab Switch to ChatGPT', tag: 'fail' };
        return { x: 45, y: 70, clicking: true, label: 'Answered after 14.8s blur', tag: 'fail' };
      },
      getTelemetry: (p) =>
        p > 35
          ? { speedGrader: 'Stopped viewing quiz at 10:14:02 AM (14.8s tab switch)', focusShield: false, blurEvents: 1, status: 'flagged' }
          : { speedGrader: '0 window.blur flags · Quiz in progress', focusShield: false, blurEvents: 0, status: 'clean' },
    },
    scene1: {
      stealthBadge: 'ExamGhost Focus Shield Active · Closed Shadow DOM',
      courseHeader: 'BIO 204 · Cell Biology Exam · Question 18 of 50',
      points: '3.0 Points',
      prompt: (
        <span>
          During aerobic cellular respiration, which cellular compartment hosts the electrochemical proton gradient that drives ATP synthase, and what is the net ATP yield per glucose molecule?
        </span>
      ),
      hudText: 'Alt+S Vision OCR & Double-Click inline evaluation complete in 0.3s. Closed Shadow DOM element.shadowRoot === null.',
      options: [
        { label: 'A', text: 'Cytoplasm (Glycolysis), 2 ATP' },
        { label: 'B', text: 'Mitochondrial Matrix / Cristae (Oxidative Phosphorylation), 30–32 ATP', isCorrectSelected: true },
        { label: 'C', text: 'Endoplasmic Reticulum, 16 ATP' },
        { label: 'D', text: 'Outer Mitochondrial Membrane, 4 ATP' },
      ],
      getCursor: (p) => {
        if (p < 35) return { x: 35, y: 32, clicking: true, label: 'Double-Click (0.3s)', tag: 'solve' };
        if (p < 70) return { x: 50, y: 50, clicking: false, label: 'Closed Shadow DOM HUD', tag: 'alt+1' };
        return { x: 45, y: 70, clicking: true, label: 'Auto-Selected Option B', tag: 'invisible' };
      },
      getTelemetry: () => ({
        speedGrader: '0 window.blur flags · Focus Shield Active · 100% In-Page',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Hub: Cellular Bioenergetics Consensus',
      claudeDerivation: (
        <p className="text-slate-200">{"Chemiosmotic coupling across the inner mitochondrial membrane: Complexes I, III, and IV pump protons into the intermembrane space, generating a proton-motive force ($\\Delta p = \\Delta\\psi - 59\\Delta\\text{pH}$). The return of protons through the $F_0F_1$ ATP synthase synthesizes 2.5 ATP per NADH and 1.5 ATP per $FADH_2$, yielding net 30–32 ATP per glucose."}</p>
      ),
      chatgptDerivation: (
        <p className="text-slate-200">{"Substrate-level phosphorylation yields only 2 ATP from glycolysis and 2 ATP from the Krebs cycle. The overwhelming majority (26–28 ATP) is synthesized via oxidative phosphorylation at the inner mitochondrial cristae. Distractors A, C, and D reflect erroneous organelle localization."}</p>
      ),
      deepseekDerivation: (
        <p className="text-slate-200">{"Proton stoichiometry: 10 $H^+$ pumped per NADH, 6 $H^+$ per $FADH_2$. ATP synthase c-ring rotor requires ~8 $H^+$ per 3 ATP + 1 $H^+$ for phosphate symport, confirming P/O ratios of 2.5 and 1.5. Overall energetic efficiency $\\approx 34\\%$."}</p>
      ),
      getCursor: (p) => {
        if (p < 35) return { x: 20, y: 15, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
        if (p < 70) return { x: 50, y: 15, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
        return { x: 75, y: 15, clicking: true, label: 'DeepSeek-R1 Stoichiometry', tag: 'explain' };
      },
      getTelemetry: () => ({
        speedGrader: 'Study AI Workspace · Multi-Model Bioenergetics Engine',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 2: BLACKBOARD QUIZ SOLVER MOTION DEMO
   Problem: ECON-101 Macroeconomics · Federal Reserve Open Market Operations
   ============================================================================ */

export function BlackboardQuizMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'ECON 101 Midterm · Blackboard Learn & Ultra Peek Panel',
    domainBadge: 'BLACKBOARD ULTRA',
    browserUrl: 'https://blackboard.university.edu/ultra/courses/_49210_1/cl/outline',
    scenes: [
      { id: 0, label: '1. Peek Panel Focus Trap', title: 'Blackboard: Access Lost Outside Peek Panel', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost In-Drawer Solve', title: 'ExamGhost: 0.3s In-Drawer Shield Active', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Monetary Policy Derivation', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'Blackboard Ultra: Student Activity Log Monitored',
      courseHeader: 'ECON 101 · Principles of Macroeconomics · Question 12',
      points: '5.0 Points',
      prompt: (
        <span>
          When the Federal Reserve conducts open-market purchases of U.S. Treasury securities, what is the immediate effect on commercial bank reserves and the equilibrium federal funds rate?
        </span>
      ),
      stopwatchSec: 38.4,
      failureBanner: {
        title: 'Blackboard Ultra Attempt Log: Access Lost Outside Peek Panel',
        description: 'Student clicked outside Ultra slide-over assessment drawer for 38.4s. Event recorded in Gradebook Student Activity Log.',
        tagLabel: 'Access Lost: Inactive 38.4s outside Peek Panel',
      },
      options: [
        { label: 'A', text: 'Bank reserves decrease, federal funds rate increases' },
        { label: 'B', text: 'Bank reserves increase, federal funds rate decreases', isWrongSelected: true },
        { label: 'C', text: 'Bank reserves remain unchanged, money multiplier collapses' },
        { label: 'D', text: 'Discount rate increases immediately to target inflation' },
      ],
      getCursor: (p) => {
        if (p < 30) return { x: 30, y: 35, clicking: false, label: 'Viewing Ultra Peek Panel' };
        if (p < 60) return { x: 92, y: 15, clicking: true, label: 'Click outside panel', tag: 'fail' };
        return { x: 45, y: 70, clicking: true, label: 'Returned after 38.4s gap', tag: 'fail' };
      },
      getTelemetry: (p) =>
        p > 35
          ? { speedGrader: 'Access Lost: Inactive 38.4s outside Peek Panel · Flagged', focusShield: false, blurEvents: 1, status: 'flagged' }
          : { speedGrader: '0 Access-Log Flags · Assessment in drawer', focusShield: false, blurEvents: 0, status: 'clean' },
    },
    scene1: {
      stealthBadge: 'Blackboard Ultra Shield Active · Closed Shadow DOM',
      courseHeader: 'ECON 101 · Principles of Macroeconomics · Question 12',
      points: '5.0 Points',
      prompt: (
        <span>
          When the Federal Reserve conducts open-market purchases of U.S. Treasury securities, what is the immediate effect on commercial bank reserves and the equilibrium federal funds rate?
        </span>
      ),
      hudText: 'ExamGhost operates natively inside Ultra Peek drawer and LTI frames. Zero blur, 0 Access-Log flags.',
      options: [
        { label: 'A', text: 'Bank reserves decrease, federal funds rate increases' },
        { label: 'B', text: 'Bank reserves increase, federal funds rate decreases', isCorrectSelected: true },
        { label: 'C', text: 'Bank reserves remain unchanged, money multiplier collapses' },
        { label: 'D', text: 'Discount rate increases immediately to target inflation' },
      ],
      getCursor: (p) => {
        if (p < 35) return { x: 35, y: 32, clicking: true, label: 'Double-Click In-Drawer', tag: 'solve' };
        if (p < 70) return { x: 50, y: 50, clicking: false, label: 'Closed Shadow DOM HUD', tag: 'alt+2' };
        return { x: 45, y: 70, clicking: true, label: 'Auto-Selected Option B', tag: 'invisible' };
      },
      getTelemetry: () => ({
        speedGrader: '0 Access-Log Flags · In-Drawer Shield Active · 100% In-Page',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Hub: Monetary Economics & Reserve Analysis',
      claudeDerivation: (
        <p className="text-slate-200">{"Open-market purchase mechanism: The Fed buys Treasury bonds from primary dealers, crediting depository institutions with central bank reserves ($\\Delta R > 0$). In the market for reserves, shifting supply rightward against downward-sloping reserve demand lowers the equilibrium federal funds rate $i_{ff}$."}</p>
      ),
      chatgptDerivation: (
        <p className="text-slate-200">{"Open-market operations are the Fed&apos;s primary policy tool under scarce reserve frameworks (or setting interest on reserve balances [IORB] in abundant reserves). Distractor A reverses the direction; C ignores reserve accounting; D confuses discount window lending with open-market purchases."}</p>
      ),
      deepseekDerivation: (
        <p className="text-slate-200">{"Liquidity effect: The shift in bank balance sheets lowers yields along the short end of the term structure. Quantitative easing represents an extended version targeting longer-duration bonds to flatten term premia."}</p>
      ),
      getCursor: (p) => {
        if (p < 35) return { x: 20, y: 15, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
        if (p < 70) return { x: 50, y: 15, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
        return { x: 75, y: 15, clicking: true, label: 'DeepSeek-R1 Yield Curve', tag: 'explain' };
      },
      getTelemetry: () => ({
        speedGrader: 'Study AI Workspace · Multi-Model Monetary Economics Engine',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 3: MOODLE QUIZ SOLVER MOTION DEMO
   Problem: CS-340 Database Systems · MVCC Read Committed Isolation
   ============================================================================ */

export function MoodleQuizMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'CS 340 Midterm · Moodle 4.x attempt.php',
    domainBadge: 'MOODLE 4.X',
    browserUrl: 'https://moodle.engineering.edu/mod/quiz/attempt.php?attempt=84920&page=2',
    scenes: [
      { id: 0, label: '1. Secure Window Lock', title: 'Moodle: secure_window Lock & Focus Penalty', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost 0.3s Solve', title: 'ExamGhost: 0.3s .que Solve · 0 Flags', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: MVCC & ACID Isolation Engine', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'Moodle 4.x: M.mod_quiz.secure_window Guard Active',
      courseHeader: 'CS 340 · Database Systems Midterm · Question 7 of 25',
      points: '4.0 Points',
      prompt: (
        <span>
          Under Multi-Version Concurrency Control (MVCC) with Read Committed transaction isolation, which version of a table row is read when a concurrent transaction updates and commits that row?
        </span>
      ),
      stopwatchSec: 25.4,
      failureBanner: {
        title: 'Moodle secure_window Violation Flag',
        description: 'Right-click or tab switch triggered M.mod_quiz.secure_window focus trap. Incident logged to mdl_quiz_attempt_steps.',
        tagLabel: 'M.mod_quiz.secure_window: Clipboard/Blur Logged',
      },
      options: [
        { label: 'A', text: 'The version that existed at the start of the outer transaction' },
        { label: 'B', text: 'Uncommitted dirty row from current write buffer' },
        { label: 'C', text: 'The latest committed snapshot version prior to statement start', isWrongSelected: true },
        { label: 'D', text: 'Transaction aborts immediately with serialization failure' },
      ],
      getCursor: (p) => {
        if (p < 30) return { x: 30, y: 35, clicking: false, label: 'Reading .que prompt' };
        if (p < 60) return { x: 90, y: 15, clicking: true, label: 'Right-click / blur trigger', tag: 'fail' };
        return { x: 45, y: 70, clicking: true, label: 'Selected Option C after flag', tag: 'fail' };
      },
      getTelemetry: (p) =>
        p > 35
          ? { speedGrader: 'M.mod_quiz.secure_window flag · Focus loss logged to DB', focusShield: false, blurEvents: 1, status: 'flagged' }
          : { speedGrader: 'mdl_quiz_attempt_steps: normal dwell', focusShield: false, blurEvents: 0, status: 'clean' },
    },
    scene1: {
      stealthBadge: 'ExamGhost Closed Shadow DOM · 0 Moodle DOM Mutation',
      courseHeader: 'CS 340 · Database Systems Midterm · Question 7 of 25',
      points: '4.0 Points',
      prompt: (
        <span>
          Under Multi-Version Concurrency Control (MVCC) with Read Committed transaction isolation, which version of a table row is read when a concurrent transaction updates and commits that row?
        </span>
      ),
      hudText: 'Double-click inside div.que.multichoice container. ExamGhost evaluates MVCC snapshot semantics in 0.3s without touching main window.',
      options: [
        { label: 'A', text: 'The version that existed at the start of the outer transaction' },
        { label: 'B', text: 'Uncommitted dirty row from current write buffer' },
        { label: 'C', text: 'The latest committed snapshot version prior to statement start', isCorrectSelected: true },
        { label: 'D', text: 'Transaction aborts immediately with serialization failure' },
      ],
      getCursor: (p) => {
        if (p < 35) return { x: 35, y: 32, clicking: true, label: 'Double-Click .que', tag: 'solve' };
        if (p < 70) return { x: 50, y: 50, clicking: false, label: 'Closed Shadow DOM HUD', tag: 'alt+1' };
        return { x: 45, y: 70, clicking: true, label: 'Auto-Selected Option C', tag: 'invisible' };
      },
      getTelemetry: () => ({
        speedGrader: '0 window.blur flags · Natural mdl_quiz step pacing · Clean',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Hub: MVCC & ACID Isolation Engine',
      claudeDerivation: (
        <p className="text-slate-200">{"In PostgreSQL/Oracle Read Committed MVCC, each SQL statement within a transaction acquires a fresh snapshot of the database state. Thus, it reads the latest committed tuple version that was committed before the individual statement started."}</p>
      ),
      chatgptDerivation: (
        <p className="text-slate-200">{"Contrast with Repeatable Read: In Repeatable Read, the snapshot is taken at the start of the first non-transaction-control query, ignoring all subsequent commits. Option A describes Repeatable Read; Option B describes Read Uncommitted; Option D describes Serializable conflicts."}</p>
      ),
      deepseekDerivation: (
        <p className="text-slate-200">{"Tuple header anatomy: PostgreSQL $xmin$ (creating transaction ID) and $xmax$ (deleting transaction ID) determine tuple visibility against the active transaction snapshot $SnapshotData$."}</p>
      ),
      getCursor: (p) => {
        if (p < 35) return { x: 20, y: 15, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
        if (p < 70) return { x: 50, y: 15, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
        return { x: 75, y: 15, clicking: true, label: 'DeepSeek-R1 MVCC Proof', tag: 'explain' };
      },
      getTelemetry: () => ({
        speedGrader: 'Study AI Workspace · Multi-Model Database Architecture Engine',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 4: D2L BRIGHTSPACE QUIZ SOLVER MOTION DEMO
   Problem: CS-2510 Data Structures · Red-Black Tree Rebalancing
   ============================================================================ */

export function D2LBrightspaceQuizMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'CS 2510 Exam · D2L Brightspace Daylight Container',
    domainBadge: 'BRIGHTSPACE DAYLIGHT',
    browserUrl: 'https://brightspace.college.edu/d2l/lms/quizzing/user/quiz_start_frame_auto.d2l?ou=4821',
    scenes: [
      { id: 0, label: '1. Event Log Focus Lost', title: 'D2L: Focus Lost 22s Event Log Warning', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost 0.3s Solve', title: 'ExamGhost: Daylight 0.3s Solve · 0 Flags', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Self-Balancing Tree Derivation', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'D2L Daylight: Quizzing Event Log Active',
      courseHeader: 'CS 2510 · Data Structures & Algorithms · Question 14 of 30',
      points: '4.0 Points',
      prompt: (
        <span>
          In a Red-Black Tree, after inserting a new red node whose parent is red and whose uncle is black (forming a straight line), which rotation and recoloring sequence restores Red-Black properties?
        </span>
      ),
      stopwatchSec: 22.0,
      failureBanner: {
        title: 'D2L Quizzing Event Log Flag: Focus Lost',
        description: '10:24:18 AM — Focus Lost for 22 seconds while student tab-switched. Right-minus-wrong grading deducted penalty.',
        tagLabel: 'Focus Lost: 10:24:18 AM (Duration 22s)',
      },
      options: [
        { label: 'A', text: 'Color parent and uncle black, color grandparent red' },
        { label: 'B', text: 'Single rotation around grandparent, swap colors of parent and grandparent', isWrongSelected: true },
        { label: 'C', text: 'Double rotation around uncle without recoloring' },
        { label: 'D', text: 'Recolor root black and rebalance all sibling leaves' },
      ],
      getCursor: (p) => {
        if (p < 30) return { x: 30, y: 35, clicking: false, label: 'Reading Daylight prompt' };
        if (p < 60) return { x: 88, y: 12, clicking: true, label: 'Tab switch to external tool', tag: 'fail' };
        return { x: 45, y: 70, clicking: true, label: 'Returned with 22s gap', tag: 'fail' };
      },
      getTelemetry: (p) =>
        p > 35
          ? { speedGrader: 'Quizzing Event Log: Focus Lost 22s logged · Flagged', focusShield: false, blurEvents: 1, status: 'flagged' }
          : { speedGrader: '0 Event-Log Flags · Daylight Active', focusShield: false, blurEvents: 0, status: 'clean' },
    },
    scene1: {
      stealthBadge: 'ExamGhost Daylight Shield · iframe#quiz_start_frame_auto',
      courseHeader: 'CS 2510 · Data Structures & Algorithms · Question 14 of 30',
      points: '4.0 Points',
      prompt: (
        <span>
          In a Red-Black Tree, after inserting a new red node whose parent is red and whose uncle is black (forming a straight line), which rotation and recoloring sequence restores Red-Black properties?
        </span>
      ),
      hudText: 'ExamGhost penetrates nested quiz_start_frame_auto.d2l iframe. Evaluates tree rotation in 0.3s with zero focus-loss flags.',
      options: [
        { label: 'A', text: 'Color parent and uncle black, color grandparent red' },
        { label: 'B', text: 'Single rotation around grandparent, swap colors of parent and grandparent', isCorrectSelected: true },
        { label: 'C', text: 'Double rotation around uncle without recoloring' },
        { label: 'D', text: 'Recolor root black and rebalance all sibling leaves' },
      ],
      getCursor: (p) => {
        if (p < 35) return { x: 35, y: 32, clicking: true, label: 'Double-Click Daylight', tag: 'solve' };
        if (p < 70) return { x: 50, y: 50, clicking: false, label: 'Closed Shadow DOM HUD', tag: 'alt+1' };
        return { x: 45, y: 70, clicking: true, label: 'Auto-Selected Option B', tag: 'invisible' };
      },
      getTelemetry: () => ({
        speedGrader: '0 Event-Log Flags · Daylight Shield Active · Continuous Focus',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Hub: Red-Black Tree Balance Theorems',
      claudeDerivation: (
        <p className="text-slate-200">{"Case 2/3 Analysis (Uncle is Black): When the new node $z$ and parent $p[z]$ form a straight line (e.g., right-right child), perform a single left rotation around grandparent $p[p[z]]$. Recolor parent $p[z]$ black and grandparent $p[p[z]]$ red to restore black-height invariants."}</p>
      ),
      chatgptDerivation: (
        <p className="text-slate-200">{"If uncle were red (Case 1), recoloring parent and uncle black and grandparent red would suffice without rotations. Because uncle is black, rotation is mandatory to maintain equal black-height along all root-to-leaf paths."}</p>
      ),
      deepseekDerivation: (
        <p className="text-slate-200">{"Height guarantee: A red-black tree with $n$ internal nodes has height at most $2\\log_2(n+1)$. Insertion takes $O(\\log n)$ time with at most 2 tree rotations."}</p>
      ),
      getCursor: (p) => {
        if (p < 35) return { x: 20, y: 15, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
        if (p < 70) return { x: 50, y: 15, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
        return { x: 75, y: 15, clicking: true, label: 'DeepSeek-R1 Invariants', tag: 'explain' };
      },
      getTelemetry: () => ({
        speedGrader: 'Study AI Workspace · Multi-Model Data Structures Engine',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

// Export alias for Route 4
export const D2LBrightspaceMotionDemo = D2LBrightspaceQuizMotionDemo;

/* ============================================================================
   ROUTE 5: MCGRAW HILL CONNECT & ALEKS SOLVER MOTION DEMO
   Problem: ACCT-201 Financial Accounting · Unearned Revenue Adjusting Entry
   ============================================================================ */

export function McgrawHillAleksQuizMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'ACCT 201 Practice Exam · Connect EZTO & ALEKS Viewport',
    domainBadge: 'ALEKS & CONNECT',
    browserUrl: 'https://ezto.mheducation.com/ext/map/index.jsp?_test=acct201_midterm',
    scenes: [
      { id: 0, label: '1. EZTO Copy Block Trap', title: 'EZTO / ALEKS: Knowledge Check Reset Trap', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost Alt+S Solve', title: 'ExamGhost: Alt+S Vision OCR & 0.3s Entry', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: ASC 606 Revenue Recognition', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'McGraw Hill EZTO / ALEKS: Paste Blocker Active',
      courseHeader: 'ACCT 201 · Financial Accounting · General Journal Adjusting Entries',
      points: '10.0 Points',
      prompt: (
        <span>
          On October 1, a company received $18,000 cash for a 12-month consulting contract. On December 31, what adjusting journal entry must be recorded under the accrual basis of accounting?
        </span>
      ),
      stopwatchSec: 42.1,
      failureBanner: {
        title: 'ALEKS & EZTO Knowledge Check Warning',
        description: 'Locked worksheet grid blocked copy-paste. Tab switch caused session timeout and ALEKS pie regression.',
        tagLabel: 'ALEKS Knowledge Check Pie Regression',
      },
      options: [
        { label: 'A', text: 'Debit Cash $18,000; Credit Consulting Revenue $18,000' },
        { label: 'B', text: 'Debit Unearned Revenue $4,500; Credit Service Revenue $4,500', isWrongSelected: true },
        { label: 'C', text: 'Debit Service Revenue $4,500; Credit Accounts Receivable $4,500' },
        { label: 'D', text: 'Debit Prepaid Expense $13,500; Credit Cash $13,500' },
      ],
      getCursor: (p) => {
        if (p < 30) return { x: 30, y: 35, clicking: false, label: 'Clipboard paste blocked' };
        if (p < 60) return { x: 88, y: 15, clicking: true, label: 'Tab switch to calculate', tag: 'fail' };
        return { x: 45, y: 70, clicking: true, label: 'Submitted late with flag', tag: 'fail' };
      },
      getTelemetry: (p) =>
        p > 35
          ? { speedGrader: 'EZTO Inactivity Gap · ALEKS pie regression recorded', focusShield: false, blurEvents: 1, status: 'flagged' }
          : { speedGrader: '0 blur flags · Connect session active', focusShield: false, blurEvents: 0, status: 'clean' },
    },
    scene1: {
      stealthBadge: 'ExamGhost Vision OCR · ezto.mheducation.com Active',
      courseHeader: 'ACCT 201 · Financial Accounting · General Journal Adjusting Entries',
      points: '10.0 Points',
      prompt: (
        <span>
          On October 1, a company received $18,000 cash for a 12-month consulting contract. On December 31, what adjusting journal entry must be recorded under the accrual basis of accounting?
        </span>
      ),
      hudText: 'Alt+S Vision OCR extracts EZTO worksheet ledger and accrual dates. Calculates 3/12 of $18,000 = $4,500 in 0.3s.',
      options: [
        { label: 'A', text: 'Debit Cash $18,000; Credit Consulting Revenue $18,000' },
        { label: 'B', text: 'Debit Unearned Revenue $4,500; Credit Service Revenue $4,500', isCorrectSelected: true },
        { label: 'C', text: 'Debit Service Revenue $4,500; Credit Accounts Receivable $4,500' },
        { label: 'D', text: 'Debit Prepaid Expense $13,500; Credit Cash $13,500' },
      ],
      getCursor: (p) => {
        if (p < 35) return { x: 35, y: 32, clicking: true, label: 'Alt+S Vision OCR Snip', tag: 'snip' };
        if (p < 70) return { x: 50, y: 50, clicking: false, label: 'Closed Shadow DOM HUD', tag: 'solve' };
        return { x: 45, y: 70, clicking: true, label: 'Auto-Selected Option B', tag: 'invisible' };
      },
      getTelemetry: () => ({
        speedGrader: '0 window.blur flags · EZTO Ledger Verified · 100% In-Page',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Hub: Revenue Recognition & Adjusting Entries',
      claudeDerivation: (
        <p className="text-slate-200">{"Under GAAP / ASC 606 and the Matching Principle, revenue is recognized as the performance obligation is satisfied over time. Oct 1 to Dec 31 represents 3 months out of 12. Earned revenue = $\\frac{3}{12} \\times \\$18,000 = \\$4,500$. The liability account Unearned Revenue is reduced with a debit of $4,500, and Service Revenue is increased with a credit of $4,500."}</p>
      ),
      chatgptDerivation: (
        <p className="text-slate-200">{"Common student pitfall: Recording the remaining unearned balance ($13,500) rather than the earned portion ($4,500). Option A is cash-basis; Option C is backwards; Option D confuses revenue with prepayments."}</p>
      ),
      deepseekDerivation: (
        <p className="text-slate-200">{"Balance Sheet equation balance: Liabilities decrease by $4,500, Equity increases by $4,500 via Net Income, preserving $A = L + E$."}</p>
      ),
      getCursor: (p) => {
        if (p < 35) return { x: 20, y: 15, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
        if (p < 70) return { x: 50, y: 15, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
        return { x: 75, y: 15, clicking: true, label: 'DeepSeek-R1 GAAP Balancing', tag: 'explain' };
      },
      getTelemetry: () => ({
        speedGrader: 'Study AI Workspace · Multi-Model Accounting & Finance Suite',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 6: PEARSON MYLAB & MASTERING SOLVER MOTION DEMO
   Problem: MATH 1152 Calculus II · Improper Integral Exact Fraction Formatting
   ============================================================================ */

export function PearsonMyLabMasteringDemo() {
  const config: PlatformDemoConfig = {
    title: 'MATH 1152 Exam II · Pearson TDX Viewport',
    domainBadge: 'PEARSON MYLAB',
    browserUrl: 'https://mylab.pearson.com/Student/PlayerTest.aspx?testId=259014822&centerwin=yes',
    scenes: [
      { id: 0, label: '1. TDX Decimal Rejection', title: 'Pearson TDX: Decimal Rejection & Burned Attempt', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost Exact Fraction', title: 'ExamGhost: 0.3s Exact Fraction 1/6 · 0 Blur', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Calculus II u-Substitution Proof', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'Pearson TDX Player: Formatting Strictness Active',
      courseHeader: 'MATH 1152 · Calculus II Exam · Question 9 of 24',
      points: '4.0 Points',
      prompt: (
        <div>
          Evaluate the improper integral: <code className="text-amber-300 font-mono">∫[1 to ∞] 6x / (x² + 2)³ dx</code>.
          <div className="text-[11px] text-sky-400 font-medium mt-1">
            (Type an exact answer in simplified fraction form. Do not round.)
          </div>
        </div>
      ),
      stopwatchSec: 34.2,
      failureBanner: {
        title: 'TDX Format Error: Decimal 0.166667 Rejected',
        description: 'Although mathematically equivalent, Pearson requires a simplified fraction. Attempt 1 of 3 burned (-33.3%).',
        tagLabel: 'TDX Format Warning: Decimal Rejected',
      },
      options: [
        { label: 'A', text: '0.166667 (Decimal form rejected by TDX)', isWrongSelected: true },
        { label: 'B', text: '1/6 (Simplified fraction form)' },
        { label: 'C', text: '3/4 (Missing power in denominator)' },
        { label: 'D', text: 'Diverges (Improper limit error)' },
      ],
      getCursor: (p) => {
        if (p < 30) return { x: 30, y: 35, clicking: false, label: 'Reads blue formatting note' };
        if (p < 60) return { x: 88, y: 15, clicking: true, label: 'Enters decimal 0.166667', tag: 'fail' };
        return { x: 45, y: 70, clicking: true, label: 'Attempt 1 burned with penalty', tag: 'fail' };
      },
      getTelemetry: (p) =>
        p > 35
          ? { speedGrader: 'TDX Format Warning: Decimal Rejected · Attempt 1 Burned', focusShield: false, blurEvents: 1, status: 'flagged' }
          : { speedGrader: '0 window.blur flags · TDX Viewport', focusShield: false, blurEvents: 0, status: 'clean' },
    },
    scene1: {
      stealthBadge: 'ExamGhost TDX Formatter Active · Closed Shadow DOM',
      courseHeader: 'MATH 1152 · Calculus II Exam · Question 9 of 24',
      points: '4.0 Points',
      prompt: (
        <div>
          Evaluate the improper integral: <code className="text-amber-300 font-mono">∫[1 to ∞] 6x / (x² + 2)³ dx</code>.
          <div className="text-[11px] text-sky-400 font-medium mt-1">
            (Type an exact answer in simplified fraction form. Do not round.)
          </div>
        </div>
      ),
      hudText: 'ExamGhost parses Pearson blue sub-instruction rule (simplified fraction). Evaluates u=x²+2, yields exact fraction 1/6 in 0.3s.',
      options: [
        { label: 'A', text: '0.166667 (Decimal form rejected by TDX)' },
        { label: 'B', text: '1/6 (Simplified fraction form)', isCorrectSelected: true },
        { label: 'C', text: '3/4 (Missing power in denominator)' },
        { label: 'D', text: 'Diverges (Improper limit error)' },
      ],
      getCursor: (p) => {
        if (p < 35) return { x: 35, y: 32, clicking: true, label: 'Double-Click Prompt', tag: 'solve' };
        if (p < 70) return { x: 50, y: 50, clicking: false, label: 'TDX Fraction Formatter', tag: 'alt+1' };
        return { x: 45, y: 70, clicking: true, label: 'Auto-Filled 1/6 (Correct!)', tag: 'invisible' };
      },
      getTelemetry: () => ({
        speedGrader: '0 window.blur flags · TDX Focus Maintained · Fraction Verified',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Hub: Calculus II Improper Integral Proof',
      claudeDerivation: (
        <p className="text-slate-200">{"Let $u = x^2 + 2 \\implies du = 2x dx \\implies 6x dx = 3 du$. Change bounds: as $x = 1 \\to u = 3$; as $x \\to \\infty \\to u \\to \\infty$. The integral becomes $\\int_3^\\infty 3u^{-3} du = \\left[ -\\frac{3}{2u^2} \\right]_3^\\infty = 0 - \\left( -\\frac{3}{2(9)} \\right) = \\frac{3}{18} = \\frac{1}{6}$."}</p>
      ),
      chatgptDerivation: (
        <p className="text-slate-200">{"Pearson Automated Grader Rule: When a prompt specifies &quot;simplified fraction&quot;, any floating point string triggers automatic strike deductions. ExamGhost formatters enforce exact fractional reduction before auto-filling."}</p>
      ),
      deepseekDerivation: (
        <p className="text-slate-200">{"Convergence verification: Since $\\frac{6x}{(x^2+2)^3} \\sim \\frac{6}{x^5}$ as $x \\to \\infty$, the integral converges by Limit Comparison with the $p$-series $\\sum 1/x^5$ where $p = 5 > 1$."}</p>
      ),
      getCursor: (p) => {
        if (p < 35) return { x: 20, y: 15, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
        if (p < 70) return { x: 50, y: 15, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
        return { x: 75, y: 15, clicking: true, label: 'DeepSeek-R1 Convergence', tag: 'explain' };
      },
      getTelemetry: () => ({
        speedGrader: 'Study AI Workspace · Multi-Model Calculus Consensus Engine',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 7: CENGAGE MINDTAP & WEBASSIGN SOLVER MOTION DEMO
   Problem: MATH 1241 Stewart Calculus · Randomized Red Variables & Kinematics
   ============================================================================ */

export function CengageWebAssignDemo() {
  const config: PlatformDemoConfig = {
    title: 'MATH 1241 Assignment · WebAssign Viewport',
    domainBadge: 'CENGAGE WEBASSIGN',
    browserUrl: 'https://www.webassign.net/web/Student/Assignment-Responses/last?dep=34819204',
    scenes: [
      { id: 0, label: '1. Red-Number Submission Trap', title: 'WebAssign: Red-X Penalty & Attempt Loss', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost calcPad Solve', title: 'ExamGhost: Red Variable Parse · Total Dist 12m', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Piecewise Kinematics Derivation', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'WebAssign: Randomized Red Variables Active',
      courseHeader: 'MATH 1241 · Stewart Calculus 9e · Problem 4.1.028',
      points: '5.0 Points',
      prompt: (
        <div>
          A particle moves with position function <code className="text-rose-400 font-mono font-bold">s(t) = t³ - 6t² + 9t + 2</code> (red variables indicate randomized student values). Find the <strong className="text-slate-100">total distance traveled</strong> from <code className="text-rose-400 font-mono font-bold">t = 0</code> to <code className="text-rose-400 font-mono font-bold">t = 4</code>.
        </div>
      ),
      stopwatchSec: 31.0,
      failureBanner: {
        title: 'WebAssign Submission Red-X: Attempt 1 of 3 Burned',
        description: 'Student entered net displacement s(4) - s(0) = 4m instead of total distance. WebAssign flagged red-X strike.',
        tagLabel: 'WebAssign: 1 of 3 Submissions Burned',
      },
      options: [
        { label: 'A', text: '4 m (Net displacement error)', isWrongSelected: true },
        { label: 'B', text: '12 m (Total piecewise distance traveled)' },
        { label: 'C', text: '6 m (Only evaluated first segment)' },
        { label: 'D', text: '16 m (Arithmetic sign flip)' },
      ],
      getCursor: (p) => {
        if (p < 30) return { x: 30, y: 35, clicking: false, label: 'Observes red numbers' };
        if (p < 60) return { x: 88, y: 15, clicking: true, label: 'Enters 4m into calcPad', tag: 'fail' };
        return { x: 45, y: 70, clicking: true, label: 'Red-X attempt lost', tag: 'fail' };
      },
      getTelemetry: (p) =>
        p > 35
          ? { speedGrader: 'WebAssign Submissions Remaining: 2 of 3 · Red-X Recorded', focusShield: false, blurEvents: 1, status: 'flagged' }
          : { speedGrader: '0 blur flags · WebAssign assignment in progress', focusShield: false, blurEvents: 0, status: 'clean' },
    },
    scene1: {
      stealthBadge: 'ExamGhost Red-Variable DOM Parser · Closed Shadow DOM',
      courseHeader: 'MATH 1241 · Stewart Calculus 9e · Problem 4.1.028',
      points: '5.0 Points',
      prompt: (
        <div>
          A particle moves with position function <code className="text-rose-400 font-mono font-bold">s(t) = t³ - 6t² + 9t + 2</code>. Find the <strong className="text-slate-100">total distance traveled</strong> from <code className="text-rose-400 font-mono font-bold">t = 0</code> to <code className="text-rose-400 font-mono font-bold">t = 4</code>.
        </div>
      ),
      hudText: 'ExamGhost reads <span class="red_variable"> tokens. Differentiates v(t)=3(t-1)(t-3), finds turning points t=1, 3. Total distance = 12m in 0.3s.',
      options: [
        { label: 'A', text: '4 m (Net displacement error)' },
        { label: 'B', text: '12 m (Total piecewise distance traveled)', isCorrectSelected: true },
        { label: 'C', text: '6 m (Only evaluated first segment)' },
        { label: 'D', text: '16 m (Arithmetic sign flip)' },
      ],
      getCursor: (p) => {
        if (p < 35) return { x: 35, y: 32, clicking: true, label: 'Double-Click Card', tag: 'solve' };
        if (p < 70) return { x: 50, y: 50, clicking: false, label: 'calcPad Formatter', tag: 'alt+1' };
        return { x: 45, y: 70, clicking: true, label: 'Auto-Filled 12 m (Green Check!)', tag: 'invisible' };
      },
      getTelemetry: () => ({
        speedGrader: '0 window.blur flags · WebAssign Focus Shield Active · calcPad Verified',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Hub: Piecewise Kinematics Derivation',
      claudeDerivation: (
        <p className="text-slate-200">{"Velocity is $v(t) = s&apos;(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3)$. Velocity changes sign at $t = 1$ and $t = 3$. Total distance is the integral of absolute velocity: $\\int_0^4 |v(t)| dt = |s(1) - s(0)| + |s(3) - s(1)| + |s(4) - s(3)|$. Since $s(0)=2, s(1)=6, s(3)=2, s(4)=6$, distance is $|6-2| + |2-6| + |6-2| = 4 + 4 + 4 = 12\\text{ m}$."}</p>
      ),
      chatgptDerivation: (
        <p className="text-slate-200">{"Crucial distinction: Net displacement is $s(4) - s(0) = 6 - 2 = 4\\text{ m}$. Students who enter $4$ burn submissions because WebAssign tests total scalar path length, which must account for turning points where $v(t) = 0$."}</p>
      ),
      deepseekDerivation: (
        <p className="text-slate-200">{"Definite piecewise integral: $\\int_0^1 (3t^2-12t+9)dt - \\int_1^3 (3t^2-12t+9)dt + \\int_3^4 (3t^2-12t+9)dt = [t^3-6t^2+9t]_0^1 - [t^3-6t^2+9t]_1^3 + [t^3-6t^2+9t]_3^4 = 4 - (-4) + 4 = 12\\text{ m}$."}</p>
      ),
      getCursor: (p) => {
        if (p < 35) return { x: 20, y: 15, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
        if (p < 70) return { x: 50, y: 15, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
        return { x: 75, y: 15, clicking: true, label: 'DeepSeek-R1 Piecewise Calc', tag: 'explain' };
      },
      getTelemetry: () => ({
        speedGrader: 'Study AI Workspace · Multi-Model STEM Kinematics Workspace',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 8: GRADESCOPE EXAM SOLVER MOTION DEMO
   Problem: CS 180 Algorithms · Extended Master Theorem & KaTeX proofs
   ============================================================================ */

export function GradescopeExamDemo() {
  const config: PlatformDemoConfig = {
    title: 'CS 180 Online Assignment · Gradescope Viewport',
    domainBadge: 'GRADESCOPE EXAM',
    browserUrl: 'https://www.gradescope.com/courses/719204/assignments/4410928/submissions/edit',
    scenes: [
      { id: 0, label: '1. KaTeX Copy & Autosave Blur', title: 'Gradescope: KaTeX Scrape Garbled & Blur Logged', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost Alt+S Solve', title: 'ExamGhost: 0.3s Extended Master Theorem', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Master Theorem Extended Proof', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'Gradescope: Timed Assignment Autosave Active',
      courseHeader: 'CS 180 · Design & Analysis of Algorithms · Question 11',
      points: '4.0 Points',
      prompt: (
        <div>
          Solve the recurrence relation: <code className="text-teal-300 font-mono">T(n) = 4T(n/2) + n² log n</code> (rendered in Gradescope KaTeX). What is the tight asymptotic bound?
        </div>
      ),
      stopwatchSec: 28.5,
      failureBanner: {
        title: 'Gradescope Autosave Blur Warning: Unfocused 14s',
        description: 'Copying KaTeX produced raw span gibberish. Student tab-switched to external AI which misapplied standard Case 2.',
        tagLabel: 'Gradescope Activity: Unfocused at 10:14:02',
      },
      options: [
        { label: 'A', text: 'Θ(n² log n) (Misapplied standard Master Theorem Case 2)', isWrongSelected: true },
        { label: 'B', text: 'Θ(n³)' },
        { label: 'C', text: 'Θ(n² log² n) (Extended Master Theorem Case 2 with k=1)' },
        { label: 'D', text: 'Θ(n²)' },
      ],
      getCursor: (p) => {
        if (p < 30) return { x: 30, y: 35, clicking: false, label: 'Scrapes unparsed KaTeX' };
        if (p < 60) return { x: 88, y: 15, clicking: true, label: 'Tab switch to external AI', tag: 'fail' };
        return { x: 45, y: 70, clicking: true, label: 'Selected Option A after blur flag', tag: 'fail' };
      },
      getTelemetry: (p) =>
        p > 35
          ? { speedGrader: 'Gradescope Activity: Unfocused 14s · KaTeX Scrape Garbled', focusShield: false, blurEvents: 1, status: 'flagged' }
          : { speedGrader: '0 blur flags · Gradescope autosave healthy', focusShield: false, blurEvents: 0, status: 'clean' },
    },
    scene1: {
      stealthBadge: 'ExamGhost Alt+S KaTeX Vision OCR · Closed Shadow DOM',
      courseHeader: 'CS 180 · Design & Analysis of Algorithms · Question 11',
      points: '4.0 Points',
      prompt: (
        <div>
          Solve the recurrence relation: <code className="text-teal-300 font-mono">T(n) = 4T(n/2) + n² log n</code>. What is the tight asymptotic bound?
        </div>
      ),
      hudText: 'Alt+S KaTeX Vision OCR extracts a=4, b=2 => n^(log_b a) = n². Identifies Extended Case 2 (k=1) => Θ(n² log² n) in 0.3s.',
      options: [
        { label: 'A', text: 'Θ(n² log n) (Misapplied standard Master Theorem Case 2)' },
        { label: 'B', text: 'Θ(n³)' },
        { label: 'C', text: 'Θ(n² log² n) (Extended Master Theorem Case 2 with k=1)', isCorrectSelected: true },
        { label: 'D', text: 'Θ(n²)' },
      ],
      getCursor: (p) => {
        if (p < 35) return { x: 35, y: 32, clicking: true, label: 'Alt+S Vision OCR', tag: 'snip' };
        if (p < 70) return { x: 50, y: 50, clicking: false, label: 'Closed Shadow DOM HUD', tag: 'alt+2' };
        return { x: 45, y: 70, clicking: true, label: 'Auto-Selected Option C', tag: 'invisible' };
      },
      getTelemetry: () => ({
        speedGrader: '0 window.blur flags · Gradescope Session Continuous · Master Case 2',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Hub: Master Theorem Extended Case 2 Proof',
      claudeDerivation: (
        <p className="text-slate-200">{"Recurrence parameters: $a = 4, b = 2, f(n) = n^2 \\log n$. Critical exponent: $n^{\\log_2 4} = n^2$. Since $f(n) = \\Theta(n^{\\log_b a} \\log^k n)$ with $k = 1 \\ge 0$, Extended Master Theorem Case 2 applies directly, giving $T(n) = \\Theta(n^{\\log_b a} \\log^{k+1} n) = \\Theta(n^2 \\log^2 n)$."}</p>
      ),
      chatgptDerivation: (
        <p className="text-slate-200">{"Why generic AIs fail: Standard CLRS Master Theorem only explicitly states Case 2 for $k = 0$ ($f(n) = \\Theta(n^{\\log_b a})$), yielding $\\Theta(n^{\\log_b a} \\log n)$. When $f(n)$ includes an extra logarithmic factor ($k=1$), the extra factor accumulates across the $\\log_2 n$ tree levels, producing $\\log^2 n$."}</p>
      ),
      deepseekDerivation: (
        <p className="text-slate-200">{"Recursion tree summation: At depth $j$, total work is $4^j \\left( \\frac{n}{2^j} \\right)^2 \\log\\left( \\frac{n}{2^j} \\right) = n^2 (\\log n - j)$. Summing over $j = 0$ to $\\log_2 n$: $\\sum_{j=0}^{\\log_2 n} n^2 (\\log n - j) = n^2 \\frac{(\\log n)(\\log n + 1)}{2} = \\Theta(n^2 \\log^2 n)$."}</p>
      ),
      getCursor: (p) => {
        if (p < 35) return { x: 20, y: 15, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
        if (p < 70) return { x: 50, y: 15, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
        return { x: 75, y: 15, clicking: true, label: 'DeepSeek-R1 Akra-Bazzi Proof', tag: 'explain' };
      },
      getTelemetry: () => ({
        speedGrader: 'Study AI Workspace · Multi-Model Algorithm Analysis Engine',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 9: GOOGLE FORMS QUIZ SOLVER MOTION DEMO
   Problem: AP Psychology / Neuroscience · Broca's Area Lesion Differential
   ============================================================================ */

export function GoogleFormsQuizDemo() {
  const config: PlatformDemoConfig = {
    title: 'AP Psychology Unit 2 · Google Forms Viewport',
    domainBadge: 'GOOGLE FORMS',
    browserUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe9xK2m8vL4pQ1rT/viewform',
    scenes: [
      { id: 0, label: '1. Locked Quiz Blur Trap', title: 'Google Forms: window.onblur Tab Exit Logged', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost 0.3s Solve', title: 'ExamGhost: 0.3s div[role="listitem"] Solve', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Neuroanatomy Differential Suite', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'Google Forms: Locked Quiz Mode Telemetry Active',
      courseHeader: 'AP Psychology · Biological Bases of Behavior · Item 16',
      points: '2.0 Points',
      prompt: (
        <span>
          A stroke patient presents with damage localized to the left inferior frontal gyrus (Broca&apos;s area). Which clinical symptom is characteristic of this lesion?
        </span>
      ),
      stopwatchSec: 21.4,
      failureBanner: {
        title: 'Google Classroom Audit Alert: Tab Exit Logged',
        description: 'window.onblur dispatched at 10:14:02 AM when student opened a search tab. Teacher log flagged exit timestamp.',
        tagLabel: 'Google Forms: window.onblur Dispatched',
      },
      options: [
        { label: 'A', text: 'Fluent but meaningless speech with impaired comprehension (Wernicke&apos;s)' },
        { label: 'B', text: 'Non-fluent, slow, telegraphic speech with relatively preserved comprehension', isWrongSelected: true },
        { label: 'C', text: 'Inability to recognize familiar faces (Prosopagnosia)' },
        { label: 'D', text: 'Complete retrograde amnesia for autobiographical memories' },
      ],
      getCursor: (p) => {
        if (p < 30) return { x: 30, y: 35, clicking: false, label: 'Hovers listitem' };
        if (p < 60) return { x: 88, y: 15, clicking: true, label: 'Opens external Google search tab', tag: 'fail' };
        return { x: 45, y: 70, clicking: true, label: 'Exited tab flagged in teacher log', tag: 'fail' };
      },
      getTelemetry: (p) =>
        p > 35
          ? { speedGrader: 'Google Forms Focus: window.onblur dispatched · Tab exit logged', focusShield: false, blurEvents: 1, status: 'flagged' }
          : { speedGrader: '0 blur flags · Google Form active', focusShield: false, blurEvents: 0, status: 'clean' },
    },
    scene1: {
      stealthBadge: 'ExamGhost Closed Shadow DOM · div[role="listitem"] Active',
      courseHeader: 'AP Psychology · Biological Bases of Behavior · Item 16',
      points: '2.0 Points',
      prompt: (
        <span>
          A stroke patient presents with damage localized to the left inferior frontal gyrus (Broca&apos;s area). Which clinical symptom is characteristic of this lesion?
        </span>
      ),
      hudText: 'Double-click stem inside .Qr7Oae container. ExamGhost evaluates motor speech deficits in 0.3s with zero blur events.',
      options: [
        { label: 'A', text: 'Fluent but meaningless speech with impaired comprehension (Wernicke&apos;s)' },
        { label: 'B', text: 'Non-fluent, slow, telegraphic speech with relatively preserved comprehension', isCorrectSelected: true },
        { label: 'C', text: 'Inability to recognize familiar faces (Prosopagnosia)' },
        { label: 'D', text: 'Complete retrograde amnesia for autobiographical memories' },
      ],
      getCursor: (p) => {
        if (p < 35) return { x: 35, y: 32, clicking: true, label: 'Double-Click Prompt', tag: 'solve' };
        if (p < 70) return { x: 50, y: 50, clicking: false, label: 'Closed Shadow DOM HUD', tag: 'alt+2' };
        return { x: 45, y: 70, clicking: true, label: 'Auto-Selected Option B', tag: 'invisible' };
      },
      getTelemetry: () => ({
        speedGrader: '0 window.blur flags · Form Focus 100% Maintained · Shadow DOM Shield',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Hub: Cognitive Neuroscience Differential Suite',
      claudeDerivation: (
        <p className="text-slate-200">{"Broca&apos;s aphasia (expressive aphasia) results from damage to Brodmann areas 44 and 45 in the dominant (usually left) hemisphere. Patients retain auditory comprehension but exhibit effortful, non-fluent articulation with omission of grammatical words (telegraphic speech)."}</p>
      ),
      chatgptDerivation: (
        <p className="text-slate-200">{"Differential breakdown: Option A describes Wernicke&apos;s (receptive) aphasia (posterior superior temporal gyrus, Brodmann 22); Option C describes prosopagnosia (fusiform face area); Option D describes medial temporal lobe / hippocampal amnesia."}</p>
      ),
      deepseekDerivation: (
        <p className="text-slate-200">{"Neural circuit integration: Broca&apos;s area connects to Wernicke&apos;s area via the arcuate fasciculus. Lesions to the arcuate fasciculus alone cause conduction aphasia (impaired repetition with intact comprehension and spontaneous speech)."}</p>
      ),
      getCursor: (p) => {
        if (p < 35) return { x: 20, y: 15, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
        if (p < 70) return { x: 50, y: 15, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
        return { x: 75, y: 15, clicking: true, label: 'DeepSeek-R1 Circuit Mapping', tag: 'explain' };
      },
      getTelemetry: () => ({
        speedGrader: 'Study AI Workspace · Multi-Model Cognitive Neuroscience Suite',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 10: SCHOOLOGY QUIZ SOLVER MOTION DEMO
   Problem: AP Biology · Learnosity Engine & Chloroplast Photophosphorylation
   ============================================================================ */

export function SchoologyLearnosityDemo() {
  const config: PlatformDemoConfig = {
    title: 'AP Biology Assessment · Schoology Learnosity Viewport',
    domainBadge: 'SCHOOLOGY LEARNOSITY',
    browserUrl: 'https://app.schoology.com/assignment/7291048219/assessment',
    scenes: [
      { id: 0, label: '1. Learnosity State Crash', title: 'Learnosity: DOM State Mismatch & Timer Lock', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost Isolated Solve', title: 'ExamGhost: 0.3s Isolated World · Clean Save', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Z-Scheme Chemiosmotic Coupling', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'Schoology Assessments 2.0: Learnosity State Guard Active',
      courseHeader: 'AP Biology · Cellular Energetics Assessment · Item 8',
      points: '3.0 Points',
      prompt: (
        <span>
          During the light-dependent reactions of photosynthesis in eukaryotic chloroplasts, where do protons accumulate to generate the pH gradient that powers ATP synthase?
        </span>
      ),
      stopwatchSec: 18.0,
      failureBanner: {
        title: 'Learnosity Integrity Error: DOM State Mismatch',
        description: 'Injected Tampermonkey script modified React DOM. Learnosity state diverged: Assessment Error, inputs frozen, timer ticking.',
        tagLabel: 'Learnosity Integrity Error: DOM State Mismatch',
      },
      options: [
        { label: 'A', text: 'Chloroplast Stroma' },
        { label: 'B', text: 'Thylakoid Lumen (Space)', isWrongSelected: true },
        { label: 'C', text: 'Intermembrane Space of Chloroplast envelope' },
        { label: 'D', text: 'Mitochondrial Matrix' },
      ],
      getCursor: (p) => {
        if (p < 30) return { x: 30, y: 35, clicking: false, label: 'Injected script attempts mutation' };
        if (p < 60) return { x: 88, y: 15, clicking: true, label: 'Learnosity state error', tag: 'fail' };
        return { x: 45, y: 70, clicking: true, label: 'Assessment paused, inputs locked', tag: 'fail' };
      },
      getTelemetry: (p) =>
        p > 35
          ? { speedGrader: 'Learnosity Integrity Error: DOM State Mismatch · Assessment Paused', focusShield: false, blurEvents: 1, status: 'flagged' }
          : { speedGrader: '0 blur flags · Learnosity assessment healthy', focusShield: false, blurEvents: 0, status: 'clean' },
    },
    scene1: {
      stealthBadge: 'ExamGhost Isolated World · Learnosity Safe Interaction',
      courseHeader: 'AP Biology · Cellular Energetics Assessment · Item 8',
      points: '3.0 Points',
      prompt: (
        <span>
          During the light-dependent reactions of photosynthesis in eukaryotic chloroplasts, where do protons accumulate to generate the pH gradient that powers ATP synthase?
        </span>
      ),
      hudText: 'ExamGhost runs in Chromium isolated world. Dispatches native synthetic events to .lrn_question. Response saves cleanly (lrn_saved).',
      options: [
        { label: 'A', text: 'Chloroplast Stroma' },
        { label: 'B', text: 'Thylakoid Lumen (Space)', isCorrectSelected: true },
        { label: 'C', text: 'Intermembrane Space of Chloroplast envelope' },
        { label: 'D', text: 'Mitochondrial Matrix' },
      ],
      getCursor: (p) => {
        if (p < 35) return { x: 35, y: 32, clicking: true, label: 'Double-Click .lrn_question', tag: 'solve' };
        if (p < 70) return { x: 50, y: 50, clicking: false, label: 'Closed Shadow DOM HUD', tag: 'alt+2' };
        return { x: 45, y: 70, clicking: true, label: 'Cleanly Saved: Option B', tag: 'invisible' };
      },
      getTelemetry: () => ({
        speedGrader: '0 window.blur flags · Learnosity State Clean · Isolated World Shield',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Hub: Chemiosmotic Coupling & Z-Scheme Bioenergetics',
      claudeDerivation: (
        <p className="text-slate-200">{"Proton pumping in chloroplasts: Protons are released into the thylakoid lumen by the photolysis of water at Photosystem II (oxygen-evolving complex) and pumped across the thylakoid membrane from the stroma by the cytochrome $b_6f$ complex. This creates a high proton concentration (low pH $\\approx 4.5$) in the thylakoid lumen relative to the stroma (pH $\\approx 8.0$)."}</p>
      ),
      chatgptDerivation: (
        <p className="text-slate-200">{"Contrast with Mitochondria: In mitochondria, protons are pumped from the matrix outward into the intermembrane space. In chloroplasts, protons are pumped inward into the thylakoid lumen. Option C reflects the mitochondrial mechanism mistakenly applied to chloroplasts."}</p>
      ),
      deepseekDerivation: (
        <p className="text-slate-200">{"Mitchell chemiosmotic force ($\\Delta p = \\Delta\\psi - 59\\Delta\\text{pH}$): In chloroplasts, the chemical component ($\\Delta\\text{pH} \\approx 3.5$) dominates due to $Cl^-$ and $Mg^{2+}$ counter-ion flux, driving ATP synthesis as protons exit through CF0-CF1 into the stroma."}</p>
      ),
      getCursor: (p) => {
        if (p < 35) return { x: 20, y: 15, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
        if (p < 70) return { x: 50, y: 15, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
        return { x: 75, y: 15, clicking: true, label: 'DeepSeek-R1 Bioenergetics', tag: 'explain' };
      },
      getTelemetry: () => ({
        speedGrader: 'Study AI Workspace · Multi-Model Cellular Bioenergetics Engine',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 11: DELTAMATH HOMEWORK SOLVER MOTION DEMO
   Problem: ALG2-01 · Polynomial Remainder & Factor Theorem MathQuill
   ============================================================================ */

export function DeltaMathMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'DeltaMath Student App • Polynomial Remainder Theorem',
    domainBadge: 'DELTAMATH',
    browserUrl: 'https://www.deltamath.com/app/student/4819204/22910482/a8f91c2e4b01',
    scenes: [
      { id: 0, label: '1. Penalty Strike Trap', title: 'DeltaMath: Penalty Strike off for Wrong Answer', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost 0.3s Solve', title: 'ExamGhost: MathQuill Hook · Streak 5/5 Intact', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Synthetic Division Proof Engine', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'DeltaMath: Penalty Strike Streak Monitoring Active',
      courseHeader: 'Algebra 2 · Polynomial Factor Theorem · Problem 4 of 5',
      points: 'Score: 4/5',
      prompt: (
        <div>
          Given <code className="text-amber-300 font-mono">f(x) = 2x³ - 7x² + kx + 12</code>, if <code className="text-amber-300 font-mono">(x - 4)</code> is a factor of <code className="text-amber-300 font-mono">f(x)</code>, find the exact value of <code className="text-amber-300 font-mono">k</code>.
        </div>
      ),
      stopwatchSec: 2.1,
      failureBanner: {
        title: 'DeltaMath Penalty Strike: Score Reduced from 4/5 to 3/5',
        description: 'Incorrect answer submitted. 1 Penalty Strike deducted. DeltaMath timer flagged rapid 2.1s bot submission velocity.',
        tagLabel: 'DeltaMath Penalty Strike: Score 4/5 → 3/5',
      },
      options: [
        { label: 'A', text: 'k = -7 (Verified by Factor Theorem)' },
        { label: 'B', text: 'k = 5' },
        { label: 'C', text: 'k = -3' },
        { label: 'D', text: 'k = 7 (Sign flip error)', isWrongSelected: true },
      ],
      getCursor: (p) => {
        if (p < 30) return { x: 30, y: 35, clicking: false, label: 'Reading problem-div' };
        if (p < 60) return { x: 88, y: 15, clicking: true, label: 'Submits k=7 sign error', tag: 'fail' };
        return { x: 45, y: 70, clicking: true, label: 'Penalty strike deducted', tag: 'fail' };
      },
      getTelemetry: (p) =>
        p > 35
          ? { speedGrader: 'DeltaMath Penalty Strike: Score 4/5 → 3/5 · Timer: 2.1s (Flagged)', focusShield: false, blurEvents: 1, status: 'flagged' }
          : { speedGrader: '0 blur flags · DeltaMath skill active', focusShield: false, blurEvents: 0, status: 'clean' },
    },
    scene1: {
      stealthBadge: 'ExamGhost MathQuill Parser · Closed Shadow DOM',
      courseHeader: 'Algebra 2 · Polynomial Factor Theorem · Problem 4 of 5',
      points: 'Score: 5/5 (Complete)',
      prompt: (
        <div>
          Given <code className="text-amber-300 font-mono">f(x) = 2x³ - 7x² + kx + 12</code>, if <code className="text-amber-300 font-mono">(x - 4)</code> is a factor of <code className="text-amber-300 font-mono">f(x)</code>, find the exact value of <code className="text-amber-300 font-mono">k</code>.
        </div>
      ),
      hudText: 'Double-click problem-div. Factor Theorem evaluates f(4)=0 => 2(64)-7(16)+4k+12=0 => 28+4k=0 => k=-7 in 0.3s.',
      options: [
        { label: 'A', text: 'k = -7 (Verified by Factor Theorem)', isCorrectSelected: true },
        { label: 'B', text: 'k = 5' },
        { label: 'C', text: 'k = -3' },
        { label: 'D', text: 'k = 7 (Sign flip error)' },
      ],
      getCursor: (p) => {
        if (p < 35) return { x: 35, y: 32, clicking: true, label: 'Double-Click problem-div', tag: 'solve' };
        if (p < 70) return { x: 50, y: 50, clicking: false, label: 'MathQuill Injector', tag: 'alt+1' };
        return { x: 45, y: 70, clicking: true, label: 'Auto-Filled k = -7 (Streak 5/5!)', tag: 'invisible' };
      },
      getTelemetry: () => ({
        speedGrader: 'DeltaMath MathQuill Hook: 0 Blur Events · Streak 5/5 Intact',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Hub: Polynomial Factor Theorem Proof',
      claudeDerivation: (
        <p className="text-slate-200">{"By the Polynomial Remainder Theorem, $(x - c)$ is a factor of $f(x)$ if and only if $f(c) = 0$. Here $c = 4$: $f(4) = 2(4)^3 - 7(4)^2 + k(4) + 12 = 2(64) - 7(16) + 4k + 12 = 128 - 112 + 4k + 12 = 28 + 4k$. Setting $28 + 4k = 0 \\implies 4k = -28 \\implies k = -7$."}</p>
      ),
      chatgptDerivation: (
        <p className="text-slate-200">{"Sign analysis: Students who choose $k = 7$ accidentally calculate $128 - 112 + 12 = 28$, then mistakenly write $4k = 28 \\implies k = 7$. In DeltaMath, this single sign error triggers an automatic penalty strike, resetting your streak."}</p>
      ),
      deepseekDerivation: (
        <p className="text-slate-200">{"Synthetic division verification: Dividing $2x^3 - 7x^2 - 7x + 12$ by $(x - 4)$ yields quotient $2x^2 + x - 3$ with remainder $0$. Further factoring yields $2x^2 + x - 3 = (2x + 3)(x - 1)$, confirming roots at $x \\in \\{4, 1, -1.5\\}$."}</p>
      ),
      getCursor: (p) => {
        if (p < 35) return { x: 20, y: 15, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
        if (p < 70) return { x: 50, y: 15, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
        return { x: 75, y: 15, clicking: true, label: 'DeepSeek-R1 Synthetic Division', tag: 'explain' };
      },
      getTelemetry: () => ({
        speedGrader: 'Study AI Workspace · Multi-Model RAG & Proof Engine',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 12: EDGENUITY QUIZ SOLVER MOTION DEMO
   Problem: US-HIST-11 · First Hundred Days FDIC Glass-Steagall in #stageFrame
   ============================================================================ */

export function EdgenuityMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'Imagine Edgenuity Player • US-HIST-11 Unit Test #stageFrame',
    domainBadge: 'IMAGINE EDGENUITY',
    browserUrl: 'https://r08.core.learn.edgenuity.com/Player/#stageFrame',
    scenes: [
      { id: 0, label: '1. SCORM Tamper Trap', title: 'Edgenuity: SCORM Tamper Flagged & Course Locked', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost Isolated Solve', title: 'ExamGhost: 0.3s #stageFrame · Natural Active Time', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: New Deal Banking Reform Analysis', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'Edgenuity Attendance Log: Active vs Idle Time Monitored',
      courseHeader: 'US History 11 · Unit 4 Cumulative Exam · Question 19 of 50',
      points: '100% Weighted',
      prompt: (
        <span>
          Excerpt from FDR&apos;s First Inaugural Address (1933). Which agency was established during the First Hundred Days to restore public confidence in the banking system by insuring individual deposits?
        </span>
      ),
      stopwatchSec: 3.8,
      failureBanner: {
        title: 'Edgenuity Facilitator Alert: Unit Test Completed in 3.8s',
        description: 'Tampermonkey script hooked window.API SCORM object. Active Time: 0m 04s. Course Locked by Facilitator.',
        tagLabel: 'SCORM window.API Hook Flagged · 3.8s Completion',
      },
      options: [
        { label: 'A', text: 'Works Progress Administration (WPA)' },
        { label: 'B', text: 'Federal Deposit Insurance Corporation (FDIC)', isWrongSelected: true },
        { label: 'C', text: 'Civilian Conservation Corps (CCC)' },
        { label: 'D', text: 'Tennessee Valley Authority (TVA)' },
      ],
      getCursor: (p) => {
        if (p < 30) return { x: 30, y: 35, clicking: false, label: 'Script auto-submits' };
        if (p < 60) return { x: 88, y: 15, clicking: true, label: 'SCORM hook trips alert', tag: 'fail' };
        return { x: 45, y: 70, clicking: true, label: 'Course locked by teacher', tag: 'fail' };
      },
      getTelemetry: (p) =>
        p > 35
          ? { speedGrader: 'SCORM window.API Hook Flagged · 3.8s Completion (Course Locked)', focusShield: false, blurEvents: 2, status: 'flagged' }
          : { speedGrader: '0 blur flags · #stageFrame active', focusShield: false, blurEvents: 0, status: 'clean' },
    },
    scene1: {
      stealthBadge: 'ExamGhost Isolated World · 0 SCORM Tampering',
      courseHeader: 'US History 11 · Unit 4 Cumulative Exam · Question 19 of 50',
      points: '100% Weighted',
      prompt: (
        <span>
          Excerpt from FDR&apos;s First Inaugural Address (1933). Which agency was established during the First Hundred Days to restore public confidence in the banking system by insuring individual deposits?
        </span>
      ),
      hudText: 'Operates in isolated world without modifying window.API. Evaluates FDIC in 0.3s; natural 52s dwell maintains 100% normal Active Time.',
      options: [
        { label: 'A', text: 'Works Progress Administration (WPA)' },
        { label: 'B', text: 'Federal Deposit Insurance Corporation (FDIC)', isCorrectSelected: true },
        { label: 'C', text: 'Civilian Conservation Corps (CCC)' },
        { label: 'D', text: 'Tennessee Valley Authority (TVA)' },
      ],
      getCursor: (p) => {
        if (p < 35) return { x: 35, y: 32, clicking: true, label: 'Double-Click #stageFrame', tag: 'solve' };
        if (p < 70) return { x: 50, y: 50, clicking: false, label: 'Closed Shadow DOM HUD', tag: 'alt+2' };
        return { x: 45, y: 70, clicking: true, label: 'Natural Dwell Submit (52s)', tag: 'invisible' };
      },
      getTelemetry: () => ({
        speedGrader: 'Edgenuity #stageFrame: Normal Active Time (52s) · 0 SCORM Anomalies',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Hub: New Deal Banking Reform Analysis',
      claudeDerivation: (
        <p className="text-slate-200">{"The Glass-Steagall Act (Banking Act of 1933) established the Federal Deposit Insurance Corporation (FDIC) to insure individual bank deposits up to $2,500 (initially), halting widespread bank runs and restoring liquidity to the commercial banking sector."}</p>
      ),
      chatgptDerivation: (
        <p className="text-slate-200">{"Distractor analysis: WPA (1935) was a Second New Deal public works relief agency; CCC (1933) employed young men in environmental conservation; TVA (1933) focused on regional infrastructure and rural electrification."}</p>
      ),
      deepseekDerivation: (
        <p className="text-slate-200">{"Economic game theory: The FDIC solved the classic Diamond-Dybvig bank run coordination failure by providing credible government-backed liquidity guarantees, transforming unstable fractional-reserve deposits into risk-free assets for retail depositors."}</p>
      ),
      getCursor: (p) => {
        if (p < 35) return { x: 20, y: 15, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
        if (p < 70) return { x: 50, y: 15, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
        return { x: 75, y: 15, clicking: true, label: 'DeepSeek-R1 Game Theory', tag: 'explain' };
      },
      getTelemetry: () => ({
        speedGrader: 'Study AI Workspace · Historical Document & Economic Analysis',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 13: CANVAS EXTENSION DETECTION BLOG MOTION DEMO
   Problem: CS-480 / AUDIT-VEC-01 · Browser Focus & Visibility Telemetry Audit
   ============================================================================ */

export function CanvasExtensionDetectionMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'Canvas Telemetry Audit Lab • Chromium MV3 Sandbox Test',
    domainBadge: 'CANVAS MV3 AUDIT',
    browserUrl: 'https://canvas.university.edu/courses/90412/quizzes/318402/take',
    scenes: [
      { id: 0, label: '1. Tab-Switching Blur Trap', title: 'Canvas: window.onblur -> page_blurred Dispatched', durationMs: 7000 },
      { id: 1, label: '2. MV3 Isolated World Solve', title: 'ExamGhost: 0.3s Isolated World · 0 Blur Flags', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub Proof', title: 'Study AI Hub: Chromium Sandbox & W3C DOM Security', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'Instructure Canvas Open-Source: quiz_submission_events.js',
      courseHeader: 'AUDIT-VEC-01 · Chromium Focus & Visibility Telemetry Test',
      points: 'Research Audit',
      prompt: (
        <span>
          When a student switches tabs from Canvas to ChatGPT, which client-side event sequence does Canvas dispatch to POST /submission_events?
        </span>
      ),
      stopwatchSec: 35.0,
      failureBanner: {
        title: 'SpeedGrader Log Flag: Stopped Viewing the Canvas Quiz',
        description: 'document.visibilitychange (hidden) and window.blur fired. Canvas POSTed { event_type: "page_blurred" } with a 35s duration flag.',
        tagLabel: 'SpeedGrader: page_blurred Dispatched (35s)',
      },
      options: [
        { label: 'A', text: 'Desktop full screenshot capture' },
        { label: 'B', text: 'document.visibilitychange (hidden) & window.blur -> "page_blurred"', isWrongSelected: true },
        { label: 'C', text: 'Full browser history and tab URL inspection' },
        { label: 'D', text: 'No detection occurs' },
      ],
      getCursor: (p) => {
        if (p < 30) return { x: 30, y: 35, clicking: false, label: 'Active quiz window' };
        if (p < 60) return { x: 92, y: 15, clicking: true, label: 'Alt+Tab to external tab', tag: 'fail' };
        return { x: 45, y: 70, clicking: true, label: 'Red Stopped Viewing flag logged', tag: 'fail' };
      },
      getTelemetry: (p) =>
        p > 35
          ? { speedGrader: 'window.onblur Dispatched · Red "Stopped Viewing" Logged in SpeedGrader', focusShield: false, blurEvents: 1, status: 'flagged' }
          : { speedGrader: '0 window.blur flags · Quiz focus continuous', focusShield: false, blurEvents: 0, status: 'clean' },
    },
    scene1: {
      stealthBadge: 'ExamGhost MV3 Isolated World · element.shadowRoot === null',
      courseHeader: 'AUDIT-VEC-01 · Chromium Focus & Visibility Telemetry Test',
      points: 'Research Audit',
      prompt: (
        <span>
          When a student switches tabs from Canvas to ChatGPT, which client-side event sequence does Canvas dispatch to POST /submission_events?
        </span>
      ),
      hudText: 'ExamGhost runs in Chromium ISOLATED world with Closed Shadow DOM. window.onblur never fires; document.hasFocus() remains true.',
      options: [
        { label: 'A', text: 'Desktop full screenshot capture' },
        { label: 'B', text: 'document.visibilitychange (hidden) & window.blur -> "page_blurred"', isCorrectSelected: true },
        { label: 'C', text: 'Full browser history and tab URL inspection' },
        { label: 'D', text: 'No detection occurs' },
      ],
      getCursor: (p) => {
        if (p < 35) return { x: 35, y: 32, clicking: true, label: 'Double-Click in page', tag: 'solve' };
        if (p < 70) return { x: 50, y: 50, clicking: false, label: 'Closed Shadow DOM HUD', tag: 'alt+1' };
        return { x: 45, y: 70, clicking: true, label: 'Option B selected (0 blur)', tag: 'invisible' };
      },
      getTelemetry: () => ({
        speedGrader: 'MV3 Isolated World · element.shadowRoot === null · 0 Blur Events',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Hub: Chromium Sandbox & W3C DOM Security Audit',
      claudeDerivation: (
        <p className="text-slate-200">{"Chromium V8 Execution Context Isolation: Extensions running in an ISOLATED world share the host DOM tree but possess an entirely separate JavaScript execution context. The host page cannot inspect extension variables, closures, or function prototypes."}</p>
      ),
      chatgptDerivation: (
        <p className="text-slate-200">{"Manifest V2 vs Manifest V3: Under MV3, Web Accessible Resources cannot be fingerprinted without explicit declarations. Canvas cannot discover installed extension IDs via fetch(&quot;chrome-extension://...&quot;) probing without triggering security exceptions."}</p>
      ),
      deepseekDerivation: (
        <p className="text-slate-200">{"W3C Shadow DOM encapsulation: By invoking attachShadow({ mode: &apos;closed&apos; }), element.shadowRoot returns null to all host-page MutationObservers and querySelectors, rendering the ExamGhost UI completely invisible to Canvas scripts."}</p>
      ),
      getCursor: (p) => {
        if (p < 35) return { x: 20, y: 15, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
        if (p < 70) return { x: 50, y: 15, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
        return { x: 75, y: 15, clicking: true, label: 'DeepSeek-R1 W3C Spec Proof', tag: 'explain' };
      },
      getTelemetry: () => ({
        speedGrader: 'Study AI Workspace · Chromium Sandbox & W3C DOM Security Audit',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 14: CANVAS QUIZ LOG EXPLAINED BLOG MOTION DEMO
   Problem: STAT-301 / LOG-EVENT-01 · SpeedGrader Action Log Breakdown
   ============================================================================ */

export function CanvasQuizLogMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'Canvas SpeedGrader • Student Quiz Action Log Inspector',
    domainBadge: 'SPEEDGRADER AUDIT',
    browserUrl: 'https://canvas.university.edu/courses/90412/quizzes/318402/submissions/7712/log',
    scenes: [
      { id: 0, label: '1. Flagged Action Log', title: 'SpeedGrader: 6 Red Flags & Tab Correlation', durationMs: 7000 },
      { id: 1, label: '2. Clean ExamGhost Log', title: 'ExamGhost: 100% Green Checkmarks · 0 Red Flags', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Event Batch Analytics & Dwell Engine', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'Canvas Instructor View: Action Log Event Sequence',
      courseHeader: 'STAT 301 · SpeedGrader Action Log Analysis · Student Attempt',
      points: 'Instructor Forensic View',
      prompt: (
        <span>
          Which student action causes Canvas to print a red warning line reading &quot;Stopped viewing the Canvas quiz-taking page...&quot; with an elapsed timestamp?
        </span>
      ),
      stopwatchSec: 42.0,
      failureBanner: {
        title: 'SpeedGrader Action Log: 6 Red Warning Flags Logged',
        description: 'Repeated pattern: 00:14 Stopped viewing (35s) -> 00:49 Resumed -> 00:51 Answered Q1. Obvious tab-switching correlation.',
        tagLabel: 'Instructor Action Log: 6 Red Flags Logged',
      },
      options: [
        { label: 'A', text: 'Scrolling through the questions' },
        { label: 'B', text: 'Any action firing window.blur / visibilitychange (tab switch, notification, 2nd monitor)', isWrongSelected: true },
        { label: 'C', text: 'Hovering cursor over question text' },
        { label: 'D', text: 'Reading a single question for >60s' },
      ],
      getCursor: (p) => {
        if (p < 30) return { x: 30, y: 35, clicking: false, label: 'Professor inspects log' };
        if (p < 60) return { x: 85, y: 15, clicking: true, label: 'Scrolls red warnings', tag: 'fail' };
        return { x: 45, y: 70, clicking: true, label: 'Cheating flag confirmed', tag: 'fail' };
      },
      getTelemetry: (p) =>
        p > 35
          ? { speedGrader: 'Instructor Action Log: 6 Red Flags · Tab-Switching Discrepancy Logged', focusShield: false, blurEvents: 6, status: 'flagged' }
          : { speedGrader: 'Reading instructor action log stream...', focusShield: false, blurEvents: 0, status: 'clean' },
    },
    scene1: {
      stealthBadge: 'ExamGhost Clean Quiz Log Protocol · 100% Green Events',
      courseHeader: 'STAT 301 · SpeedGrader Action Log Analysis · Student Attempt',
      points: 'Instructor Forensic View',
      prompt: (
        <span>
          Which student action causes Canvas to print a red warning line reading &quot;Stopped viewing the Canvas quiz-taking page...&quot; with an elapsed timestamp?
        </span>
      ),
      hudText: 'ExamGhost in-page solve generates clean green sequence: 00:02 Session started -> 00:05 Viewed Q1 -> 00:48 Answered Q1 (43s dwell). 0 red flags.',
      options: [
        { label: 'A', text: 'Scrolling through the questions' },
        { label: 'B', text: 'Any action firing window.blur / visibilitychange (tab switch, notification, 2nd monitor)', isCorrectSelected: true },
        { label: 'C', text: 'Hovering cursor over question text' },
        { label: 'D', text: 'Reading a single question for >60s' },
      ],
      getCursor: (p) => {
        if (p < 35) return { x: 35, y: 32, clicking: true, label: 'Inspects ExamGhost log', tag: 'solve' };
        if (p < 70) return { x: 50, y: 50, clicking: false, label: 'Spotless Timeline', tag: 'alt+1' };
        return { x: 45, y: 70, clicking: true, label: '100% Clean Green Checks', tag: 'invisible' };
      },
      getTelemetry: () => ({
        speedGrader: 'Instructor Action Log: 100% Clean Green Events · 0 Blur Warnings',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Hub: Event Batch Analytics & Cognitive Dwell',
      claudeDerivation: (
        <p className="text-slate-200">{"Canvas quiz_submission_events source code (quiz_submission_events_controller.rb): The client sends JSON event arrays to /api/v1/courses/:id/quizzes/:id/submissions/:id/events. The server records event_type (session_started, question_viewed, question_answered, page_blurred, page_focused) with millisecond timestamps."}</p>
      ),
      chatgptDerivation: (
        <p className="text-slate-200">{"Statistical velocity flagging: Submitting answers with &lt;3s dwell time creates abnormal z-score clusters compared to class cohorts. ExamGhost encourages natural 35–90 second cognitive dwell intervals between in-page solves."}</p>
      ),
      deepseekDerivation: (
        <p className="text-slate-200">{"Faculty view forensic limits: Canvas cannot see which application or tab was opened during a blur event, nor can it capture webcam or clipboard data during standard unproctored quizzes. Keeping the window focused eliminates all red flags."}</p>
      ),
      getCursor: (p) => {
        if (p < 35) return { x: 20, y: 15, clicking: true, label: 'Claude 3.7 Sonnet', tag: 'default' };
        if (p < 70) return { x: 50, y: 15, clicking: true, label: 'ChatGPT o3-mini', tag: 'default' };
        return { x: 75, y: 15, clicking: true, label: 'DeepSeek-R1 Dwell Modeling', tag: 'explain' };
      },
      getTelemetry: () => ({
        speedGrader: 'Study AI Workspace · Event Batch Analytics & Human Cognitive Modeling',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}
