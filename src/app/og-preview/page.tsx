import React from 'react';
import { Shield, Sparkles, CheckCircle2, Zap, EyeOff, Lock, Check } from 'lucide-react';

export default function OGPreview() {
  return (
    <div 
      id="og-card"
      className="w-[1200px] h-[630px] bg-[#050811] text-white relative overflow-hidden flex flex-col justify-between p-12 select-none font-sans"
      style={{
        backgroundImage: `
          radial-gradient(circle at 76% 28%, rgba(16, 185, 129, 0.32) 0%, transparent 48%),
          radial-gradient(circle at 18% 75%, rgba(6, 182, 212, 0.24) 0%, transparent 42%),
          radial-gradient(circle at 50% 50%, rgba(9, 15, 30, 0.8) 0%, transparent 100%),
          linear-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.04) 1px, transparent 1px)
        `,
        backgroundSize: '100% 100%, 100% 100%, 100% 100%, 28px 28px, 28px 28px'
      }}
    >
      {/* Outer ambient glow border */}
      <div className="absolute inset-0 border border-emerald-500/35 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-90" />

      {/* Top Header Row */}
      <div className="flex items-center justify-between z-10">
        {/* Brand Lockup */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-emerald-400/80 shadow-[0_0_35px_rgba(16,185,129,0.6)] bg-[#07101e] flex items-center justify-center p-1">
              <img 
                src="/images/ghost/ghost_neon_crop.png" 
                alt="ExamGhost Mascot" 
                className="w-full h-full object-cover scale-125 drop-shadow-[0_0_12px_#34d399]"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-4 h-4 rounded-full bg-emerald-500 border-2 border-[#050811] flex items-center justify-center shadow-lg">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
            </span>
          </div>

          <div>
            <div className="flex items-center gap-2.5">
              <span className="text-[44px] font-black tracking-tight text-white font-display leading-none">
                Exam<span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 drop-shadow-[0_0_25px_rgba(16,185,129,0.45)]">Ghost</span>
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 text-[11px] font-bold uppercase tracking-wider font-mono shadow-xs">
                Stealth AI
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono tracking-wide mt-1">
              Double-Click Instant Solves · Closed Shadow DOM
            </p>
          </div>
        </div>

        {/* Top Right Badges */}
        <div className="flex items-center gap-3">
          <div className="px-4 py-2 rounded-xl bg-slate-900/90 backdrop-blur-md border border-emerald-500/40 shadow-[0_4px_24px_rgba(0,0,0,0.5)] flex items-center gap-2.5">
            <Shield className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-slate-100 uppercase tracking-wider font-mono">
              100% Screen-Share Safe
            </span>
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
          </div>
        </div>
      </div>

      {/* Main Body (2 Columns) */}
      <div className="grid grid-cols-12 gap-10 items-center z-10 flex-1 my-2">
        
        {/* Left Column: Value Prop & Copy */}
        <div className="col-span-6 flex flex-col justify-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-950/70 border border-emerald-500/40 text-emerald-300 text-xs font-semibold tracking-wide w-fit mb-3.5 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
            <span className="uppercase tracking-wider font-mono text-[11px]">The #1 Undetectable LMS Quiz Extension</span>
          </div>

          {/* Headline */}
          <h1 className="text-[38px] font-black leading-[1.08] text-white tracking-tight mb-3.5">
            The Invisible AI Quiz Solver for <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300">Canvas, Blackboard &amp; Moodle</span>
          </h1>

          <p className="text-[14.5px] text-slate-300 leading-relaxed mb-5 font-normal">
            Double-click any question and ExamGhost fills the verified answer directly on your quiz page. Defeats SpeedGrader tab logs, proctor monitoring, and locked diagrams.
          </p>

          {/* Key Bullet Highlights */}
          <div className="grid grid-cols-2 gap-2.5">
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-xs font-semibold text-slate-200 shadow-sm">
              <Check className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Instant Inline Autofill</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-xs font-semibold text-slate-200 shadow-sm">
              <Lock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>Focus Shield (No Blur)</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-xs font-semibold text-slate-200 shadow-sm">
              <Zap className="w-4 h-4 text-amber-400 shrink-0" />
              <span>0.3s Ultra-Fast Latency</span>
            </div>
            <div className="flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-900/80 border border-slate-700/60 text-xs font-semibold text-slate-200 shadow-sm">
              <EyeOff className="w-4 h-4 text-purple-400 shrink-0" />
              <span>Closed Shadow DOM Stealth</span>
            </div>
          </div>
        </div>

        {/* Right Column: Realistic Canvas Exam Card with Live Solve */}
        <div className="col-span-6 relative">
          
          {/* Ambient Spotlight Behind Card */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/25 via-teal-500/20 to-cyan-500/25 rounded-3xl blur-2xl opacity-90" />

          {/* Canvas Window Card */}
          <div className="relative bg-[#0b1220]/95 backdrop-blur-2xl rounded-2xl border border-slate-700/90 shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden">
            
            {/* Window Title Bar */}
            <div className="bg-[#080d18] px-4 py-2.5 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                <span className="text-[11px] font-mono text-slate-400 ml-2">
                  canvas.instructure.com/quiz/BIO-101
                </span>
              </div>
              <div className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/90 border border-emerald-500/40 text-[10px] font-mono text-emerald-400 font-semibold shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <span>GHOST MODE: ACTIVE</span>
              </div>
            </div>

            {/* Window Quiz Body */}
            <div className="p-4 space-y-3">
              {/* Question Meta Row */}
              <div className="flex items-center justify-between text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-400 uppercase font-bold tracking-wider">
                    Question 14 of 40
                  </span>
                  <span className="px-2 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-semibold">
                    Double-Click Enabled
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono text-[10px]">
                    ⏱️ 18:42
                  </span>
                  <span className="text-slate-400 font-mono text-[11px] font-semibold">
                    2.0 pts
                  </span>
                </div>
              </div>

              {/* Question Text Container with Laser Scanner */}
              <div className="relative p-3 rounded-lg bg-slate-900/70 border border-slate-800 overflow-hidden">
                <div className="flex items-start justify-between gap-3">
                  <p className="text-[13.5px] font-bold text-slate-100 leading-snug">
                    Which cellular organelle produces ATP through oxidative phosphorylation?
                  </p>
                  <div className="shrink-0 flex items-center gap-1 text-[10px] font-mono text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/40 shadow-xs">
                    <Sparkles className="w-2.5 h-2.5" />
                    <span>Snap-It</span>
                  </div>
                </div>
                {/* Subtle laser scan line effect */}
                <div className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-75 shadow-[0_0_8px_#34d399]" />
              </div>

              {/* Multiple Choice Options */}
              <div className="space-y-1.5">
                {/* Option A */}
                <div className="px-3.5 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-full border border-slate-600 inline-block" />
                    <span>Ribosome</span>
                  </div>
                </div>

                {/* Option B (SOLVED & VERIFIED INLINE) */}
                <div className="relative px-3.5 py-2 rounded-lg bg-emerald-950/60 border-2 border-emerald-400 shadow-[0_0_22px_rgba(16,185,129,0.35)] flex items-center justify-between text-xs text-white">
                  <div className="flex items-center gap-2.5 font-bold">
                    <span className="w-4 h-4 rounded-full bg-emerald-400 border border-emerald-300 flex items-center justify-center shadow-md">
                      <Check className="w-2.5 h-2.5 text-black stroke-[3.5]" />
                    </span>
                    <span className="text-emerald-100">Mitochondria</span>
                  </div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded bg-emerald-500/25 border border-emerald-400/60 text-[10px] font-mono text-emerald-300 font-semibold shadow-xs">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>99.8% Match · Autofilled</span>
                  </div>
                </div>

                {/* Option C */}
                <div className="px-3.5 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-full border border-slate-600 inline-block" />
                    <span>Endoplasmic Reticulum</span>
                  </div>
                </div>

                {/* Option D */}
                <div className="px-3.5 py-2 rounded-lg bg-slate-800/40 border border-slate-700/50 flex items-center justify-between text-xs text-slate-300">
                  <div className="flex items-center gap-2.5">
                    <span className="w-3.5 h-3.5 rounded-full border border-slate-600 inline-block" />
                    <span>Golgi Apparatus</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status bar inside card */}
            <div className="bg-[#080d18] px-4 py-2 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                <span>Snap-It Sniping Ready (⌘+Shift+S)</span>
              </span>
              <span className="text-slate-400">Response: 284ms</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Row: Platform Badges */}
      <div className="flex items-center justify-between pt-3.5 border-t border-slate-800/90 z-10">
        <div className="flex items-center gap-3">
          <span className="text-[11px] font-mono uppercase text-slate-400 font-bold tracking-wider">
            Verified On:
          </span>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-200 flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-rose-500 shadow-[0_0_6px_#f43f5e]" />
              Canvas LMS
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-200 flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-amber-500 shadow-[0_0_6px_#f59e0b]" />
              Blackboard
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-200 flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-orange-500 shadow-[0_0_6px_#f97316]" />
              Moodle
            </span>
            <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700/80 text-xs font-semibold text-slate-200 flex items-center gap-1.5 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_6px_#6366f1]" />
              Brightspace
            </span>
            <span className="px-2.5 py-1 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs text-slate-300 font-medium">
              +20 More LMSs
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-slate-400">
          <span className="text-emerald-400 font-bold text-sm tracking-tight">examghost.com</span>
          <span className="text-slate-600">·</span>
          <span className="px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-200 font-semibold">
            50 Free Solves
          </span>
        </div>
      </div>
    </div>
  );
}
