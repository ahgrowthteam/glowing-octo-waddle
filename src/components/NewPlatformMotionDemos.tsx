'use client';

import React from 'react';
import {
  BasePlatformMotionDemo,
  PlatformDemoConfig,
} from '@/components/PlatformMotionDemos';
import { CursorState, TelemetryState } from '@/components/motion-demo/types';

/* ============================================================================
   ROUTE 1: WILEYPLUS QUIZ & ACCOUNTING/STEM HOMEWORK SOLVER MOTION DEMO
   Problem: ACC 201 (Financial Accounting) · Adjusting Journal Entries & Depreciation
   Platform: edugen.wileyplus.com · 0 blur events · Exact 2-decimal formatting
   ============================================================================ */

export function WileyPlusMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'ACC 201 Midterm · WileyPLUS Accounting Assessment',
    domainBadge: 'WILEYPLUS',
    browserUrl: 'https://edugen.wileyplus.com/edugen/student/main.uni?course=acc201',
    scenes: [
      { id: 0, label: '1. WileyPLUS Blur Trap', title: 'WileyPLUS: 11.4s Tab Switch & Strike Flagged', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost 0.3s Solve', title: 'ExamGhost: 0.3s Inline Balance · 0 Blur Events', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Multi-Model Straight-Line Derivation', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'WileyPLUS edugen.wileyplus.com: Focus Loss & Rounding Strike Active',
      courseHeader: 'ACC 201 · Financial Accounting · Exercise 4-12 Adjusting Entries (Part 2 of 4)',
      points: '5.0 Points',
      prompt: (
        <span>
          At Dec 31, 2025, adjusting entry for Equipment depreciation: Cost $84,000, Salvage value $7,200, Useful life 6 years (Straight-Line). Record Debit to Depreciation Expense and Credit to Accumulated Depreciation for year 1, maintaining exact 2-decimal formatting.
        </span>
      ),
      stopwatchSec: 11.4,
      failureBanner: {
        title: 'WileyPLUS Assessment Alert: Window Blur & Rounding Strike',
        description: '11:22:04 AM — Student left assessment window for 11.4s to use external calculator. Recorded 1 blur event and 1 attempt strike docked.',
        tagLabel: 'WileyPLUS: 1 blur event · Strike 1 of 3',
      },
      options: [
        { label: 'A', text: 'Dr. Depreciation Expense $12,800.00 / Cr. Accumulated Depreciation $12,800.00' },
        { label: 'B', text: 'Dr. Depreciation Expense $14,000.00 / Cr. Cash $14,000.00 (No salvage value subtracted)', isWrongSelected: true },
        { label: 'C', text: 'Dr. Equipment $76,800.00 / Cr. Retained Earnings $76,800.00' },
        { label: 'D', text: 'Dr. Accumulated Depreciation $12,800.00 / Cr. Depreciation Expense $12,800.00' },
      ],
      getCursor: (progress: number): CursorState => {
        if (progress < 25) return { x: 48, y: 35, clicking: false, tag: 'inspect', label: 'Reading Ledger' };
        if (progress < 60) return { x: 78, y: 72, clicking: progress > 45 && progress < 55, tag: 'blur', label: 'Alt-Tab: External Calc' };
        return { x: 75, y: 70, clicking: false, tag: 'strike', label: 'WileyPLUS Strike 1' };
      },
      getTelemetry: (progress: number): TelemetryState => {
        if (progress > 45) {
          return {
            speedGrader: '1 blur event · WileyPLUS edugen strike flagged',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          };
        }
        return {
          speedGrader: '0 blur events · Attempt 1 in progress',
          focusShield: false,
          blurEvents: 0,
          status: 'clean',
        };
      },
    },
    scene1: {
      stealthBadge: 'ExamGhost Closed Shadow DOM: Focus Retention Shield Active',
      courseHeader: 'ACC 201 · Financial Accounting · Exercise 4-12 Adjusting Entries (Part 2 of 4)',
      points: '5.0 Points',
      prompt: (
        <span>
          At Dec 31, 2025, adjusting entry for Equipment depreciation: Cost $84,000, Salvage value $7,200, Useful life 6 years (Straight-Line). Record Debit to Depreciation Expense and Credit to Accumulated Depreciation for year 1, maintaining exact 2-decimal formatting.
        </span>
      ),
      hudText: 'Straight-Line: ($84,000 - $7,200) / 6 = $12,800.00. Populated in 0.3s with zero focus-loss flags.',
      options: [
        { label: 'A', text: 'Dr. Depreciation Expense $12,800.00 / Cr. Accumulated Depreciation $12,800.00', isCorrectSelected: true },
        { label: 'B', text: 'Dr. Depreciation Expense $14,000.00 / Cr. Cash $14,000.00 (No salvage value subtracted)' },
        { label: 'C', text: 'Dr. Equipment $76,800.00 / Cr. Retained Earnings $76,800.00' },
        { label: 'D', text: 'Dr. Accumulated Depreciation $12,800.00 / Cr. Depreciation Expense $12,800.00' },
      ],
      getCursor: (progress: number): CursorState => {
        if (progress < 30) return { x: 45, y: 38, clicking: false, tag: 'alt+s', label: 'Alt+S: Vision OCR' };
        if (progress < 70) return { x: 28, y: 72, clicking: progress > 45 && progress < 55, tag: 'solve', label: 'Double-Click (0.3s)' };
        return { x: 28, y: 72, clicking: false, tag: 'shielded', label: 'Balanced ($12,800.00)' };
      },
      getTelemetry: (): TelemetryState => ({
        speedGrader: '0 window.blur flags · Focus Shield Active',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Workspace: Accounting Ledger & Depreciation Derivation',
      claudeDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-amber-300 font-bold">GAAP ASC 360 Straight-Line Depreciation Schedule:</p>
          <p>1. Depreciable Base = Asset Cost - Estimated Salvage Value</p>
          <p>   = $84,000.00 - $7,200.00 = $76,800.00</p>
          <p>2. Annual Depreciation = Depreciable Base / Useful Life</p>
          <p>   = $76,800.00 / 6 years = $12,800.00 / year ($1,066.67 / month)</p>
          <p>3. Dec 31 Adjusting Entry:</p>
          <p className="text-emerald-400">   Debit: Depreciation Expense — Equipment: $12,800.00</p>
          <p className="text-emerald-400">   Credit: Accumulated Depreciation — Equipment: $12,800.00</p>
          <p className="text-slate-400 text-[10px]">Net Book Value (Dec 31, 2025) = $84,000 - $12,800 = $71,200.00.</p>
        </div>
      ),
      chatgptDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-emerald-300 font-bold">Fast Numerical Verification:</p>
          <p>Formula: (Cost - Salvage) / Life = ($84,000 - $7,200) / 6 = $76,800 / 6 = $12,800.00.</p>
          <p>Depreciation Expense is an Income Statement operating expense.</p>
          <p>Accumulated Depreciation is a Balance Sheet contra-asset reducing Equipment carrying value.</p>
          <p className="text-emerald-400 font-bold">Result: Option A ($12,800.00 Dr / Cr balance).</p>
        </div>
      ),
      deepseekDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-sky-300 font-bold">Accounting & Tax Verification:</p>
          <p>• Straight-Line rate: 1/6 = 16.667% per year.</p>
          <p>• Half-year convention does not apply unless stated; problem specifies full Year 1 adjustment.</p>
          <p>• WileyPLUS edugen validator strictly enforces 2 decimal places ($12800.00 vs 12800).</p>
        </div>
      ),
      getCursor: (progress: number): CursorState => {
        if (progress < 35) return { x: 30, y: 22, clicking: progress > 15 && progress < 25, tag: 'explain', label: 'Claude 3.7 GAAP' };
        if (progress < 70) return { x: 50, y: 22, clicking: progress > 45 && progress < 55, tag: 'explain', label: 'ChatGPT Fast' };
        return { x: 72, y: 22, clicking: progress > 80 && progress < 90, tag: 'explain', label: 'DeepSeek-R1 Audit' };
      },
      getTelemetry: (): TelemetryState => ({
        speedGrader: 'Study AI Workspace · Multi-Model RAG Engine',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 2: ZYBOOKS & ZYLABS CS HOMEWORK SOLVER MOTION DEMO
   Problem: CS 149 (C++ Data Structures) · Vector Bounds & Loop Traversal
   Platform: learn.zybooks.com · 0 paste flags · Keystroke emulation
   ============================================================================ */

export function ZybooksMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'CS 149 zyBooks Challenge Activity · Vector Mutation',
    domainBadge: 'ZYBOOKS',
    browserUrl: 'https://learn.zybooks.com/zybook/CS149/chapter/4/section/8',
    scenes: [
      { id: 0, label: '1. zyBooks Paste Trap', title: 'zyBooks: Keystroke Velocity & Reset Flagged', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost 0.3s Solve', title: 'ExamGhost: Human Typing Emulation · 0 Resets', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Multi-Model Vector Memory Proof', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'zyBooks learn.zybooks.com: Keystroke & Paste Forensics Active',
      courseHeader: 'CS 149 · C++ Data Structures · Challenge Activity 4.8.2: Vector element modification',
      points: '10 Points · Level 3 of 3',
      prompt: (
        <span>
          Write a loop that subtracts 5 from each element in vector <code className="text-amber-300 font-mono">dataVals</code> if the element is greater than 10. Otherwise, double the element. Maintain strict boundary checks.
        </span>
      ),
      stopwatchSec: 16.2,
      failureBanner: {
        title: 'zyBooks Autograder: Paste Detected & Segmentation Fault',
        description: 'External paste event logged (<0.4s entry velocity). Loop boundary i <= dataVals.size() caused out-of-range index error. Challenge Activity reset to Level 1.',
        tagLabel: 'zyBooks: Paste flag & Challenge reset',
      },
      options: [
        { label: 'A', text: 'for (size_t i = 0; i < dataVals.size(); ++i) { if (dataVals[i] > 10) dataVals[i] -= 5; else dataVals[i] *= 2; }' },
        { label: 'B', text: 'for (size_t i = 0; i <= dataVals.size(); ++i) { dataVals[i] -= 5; } (Index Out of Bounds)', isWrongSelected: true },
        { label: 'C', text: 'while (dataVals.size() > 0) { dataVals.pop_back(); } (Destructive Deletion)' },
        { label: 'D', text: 'for (auto val : dataVals) { val *= 2; } (Passed by Value, Unmodified)' },
      ],
      getCursor: (progress: number): CursorState => {
        if (progress < 25) return { x: 50, y: 35, clicking: false, tag: 'inspect', label: 'Reading zyBooks prompt' };
        if (progress < 60) return { x: 75, y: 72, clicking: progress > 45 && progress < 55, tag: 'fail', label: 'Paste Detected (0.2s)' };
        return { x: 75, y: 70, clicking: false, tag: 'strike', label: 'Reset: Level 3 to 1' };
      },
      getTelemetry: (progress: number): TelemetryState => {
        if (progress > 45) {
          return {
            speedGrader: 'Paste detected (<0.4s) · zyBooks Challenge reset to Level 1',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          };
        }
        return {
          speedGrader: '0 paste events · Level 3 attempt in progress',
          focusShield: false,
          blurEvents: 0,
          status: 'clean',
        };
      },
    },
    scene1: {
      stealthBadge: 'ExamGhost Isolated World: Native Keystroke Synthesizer',
      courseHeader: 'CS 149 · C++ Data Structures · Challenge Activity 4.8.2: Vector element modification',
      points: '10 Points · Level 3 of 3',
      prompt: (
        <span>
          Write a loop that subtracts 5 from each element in vector <code className="text-amber-300 font-mono">dataVals</code> if the element is greater than 10. Otherwise, double the element. Maintain strict boundary checks.
        </span>
      ),
      hudText: 'Synthesizes human typing emulation. Solves boundary check i < dataVals.size() and passes all 4 hidden test cases in 0.3s.',
      options: [
        { label: 'A', text: 'for (size_t i = 0; i < dataVals.size(); ++i) { if (dataVals[i] > 10) dataVals[i] -= 5; else dataVals[i] *= 2; }', isCorrectSelected: true },
        { label: 'B', text: 'for (size_t i = 0; i <= dataVals.size(); ++i) { dataVals[i] -= 5; } (Index Out of Bounds)' },
        { label: 'C', text: 'while (dataVals.size() > 0) { dataVals.pop_back(); } (Destructive Deletion)' },
        { label: 'D', text: 'for (auto val : dataVals) { val *= 2; } (Passed by Value, Unmodified)' },
      ],
      getCursor: (progress: number): CursorState => {
        if (progress < 30) return { x: 45, y: 38, clicking: false, tag: 'alt+s', label: 'Alt+S: Vision OCR' };
        if (progress < 70) return { x: 28, y: 72, clicking: progress > 45 && progress < 55, tag: 'solve', label: 'Synthesize Keystrokes' };
        return { x: 28, y: 72, clicking: false, tag: 'shielded', label: 'Passed 4/4 Tests' };
      },
      getTelemetry: (): TelemetryState => ({
        speedGrader: '0 paste flags · Keystroke emulation active',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Workspace: C++ Vector Memory & Loop Invariant Derivation',
      claudeDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-amber-300 font-bold">C++ std::vector Memory Invariants:</p>
          <p>1. 0-Indexed Bounds: Elements exist from index 0 to size() - 1.</p>
          <p>2. Condition i &lt;= size() accesses index size() which is out of range, triggering undefined behavior or std::out_of_range.</p>
          <p>3. Idiomatic C++ range-based loop with reference mutation:</p>
          <p className="text-emerald-400">   for (auto&amp; val : dataVals) &#123;</p>
          <p className="text-emerald-400">       val = (val &gt; 10) ? val - 5 : val * 2;</p>
          <p className="text-emerald-400">   &#125;</p>
          <p className="text-slate-400 text-[10px]">Using auto&amp; mutates elements in place; auto without reference copies by value.</p>
        </div>
      ),
      chatgptDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-emerald-300 font-bold">Test Case Trace:</p>
          <p>Input vector: [14, 8, 22, 5]</p>
          <p>• i=0: 14 &gt; 10 ➔ 14 - 5 = 9</p>
          <p>• i=1: 8 &lt;= 10 ➔ 8 * 2 = 16</p>
          <p>• i=2: 22 &gt; 10 ➔ 22 - 5 = 17</p>
          <p>• i=3: 5 &lt;= 10 ➔ 5 * 2 = 10</p>
          <p className="text-emerald-400 font-bold">Result: [9, 16, 17, 10]. Complexity: O(n) time, O(1) space.</p>
        </div>
      ),
      deepseekDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-sky-300 font-bold">Edge-Case Verification:</p>
          <p>• Empty vector: loop 0 &lt; 0 immediately terminates without error.</p>
          <p>• Boundary element val = 10: does not satisfy val &gt; 10, correctly doubled to 20.</p>
          <p>• Type safety: size_t avoids signed/unsigned comparison warnings (-Wsign-compare).</p>
        </div>
      ),
      getCursor: (progress: number): CursorState => {
        if (progress < 35) return { x: 30, y: 22, clicking: progress > 15 && progress < 25, tag: 'explain', label: 'Claude 3.7 Invariants' };
        if (progress < 70) return { x: 50, y: 22, clicking: progress > 45 && progress < 55, tag: 'explain', label: 'ChatGPT Trace' };
        return { x: 72, y: 22, clicking: progress > 80 && progress < 90, tag: 'explain', label: 'DeepSeek-R1 Safety' };
      },
      getTelemetry: (): TelemetryState => ({
        speedGrader: 'Study AI Workspace · Multi-Model RAG Engine',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 3: MAA WEBWORK CALCULUS & MATH SOLVER MOTION DEMO
   Problem: MATH 215 (Multivariable Calculus) · Polar Double Integrals
   Platform: webwork2 · 0 syntax errors · Exact MathObjects Perl PGML expressions
   ============================================================================ */

export function WebWorkMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'MATH 215 Multivariable Calculus · MAA WeBWorK Problem Set 9',
    domainBadge: 'WEBWORK',
    browserUrl: 'https://webwork2.math.university.edu/webwork2/MATH215_Fall2026/set09_double_integrals/4/',
    scenes: [
      { id: 0, label: '1. WeBWorK Syntax Trap', title: 'WeBWorK: Decimal Approximation Rejected (Attempt 4/5)', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost 0.3s Solve', title: 'ExamGhost: Exact MathObjects Form · 100% Correct', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Multi-Model Polar Jacobian Derivation', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'WeBWorK webwork2: Attempt Counter & MathObjects Syntax Check',
      courseHeader: 'MATH 215 · Multivariable Calculus · Problem Set 9, Problem 4 (Attempt 4 of 5)',
      points: '4.0 Points',
      prompt: (
        <span>
          Evaluate the double integral <code className="text-amber-300 font-mono">∬_R e^-(x^2+y^2) dA</code>, where R is the disk x^2 + y^2 &le; 4 in the first quadrant. Enter an exact MathObjects expression.
        </span>
      ),
      stopwatchSec: 18.5,
      failureBanner: {
        title: 'WeBWorK Syntax Error: Decimal Approximation Rejected',
        description: 'Entered "0.7711". Server rejected floating-point approximation. Strict MathObjects symbolic syntax required. Attempt 4 of 5 burned.',
        tagLabel: 'WeBWorK: 1 attempt remaining · Syntax Trap',
      },
      options: [
        { label: 'A', text: '(pi/4)*(1 - exp(-4)) (Exact MathObjects Expression)' },
        { label: 'B', text: '0.7711 (Decimal Approximation — Server Syntax Error)', isWrongSelected: true },
        { label: 'C', text: '(pi/2)*(1 - exp(-4)) (Missing first-quadrant factor)' },
        { label: 'D', text: 'pi * exp(-4) (Incorrect integration)' },
      ],
      getCursor: (progress: number): CursorState => {
        if (progress < 25) return { x: 45, y: 35, clicking: false, tag: 'inspect', label: 'Previewing AnSwEr0001' };
        if (progress < 60) return { x: 75, y: 72, clicking: progress > 45 && progress < 55, tag: 'trap', label: 'Click Preview Answers' };
        return { x: 75, y: 70, clicking: false, tag: 'strike', label: 'Syntax Error (4/5 Burned)' };
      },
      getTelemetry: (progress: number): TelemetryState => {
        if (progress > 45) {
          return {
            speedGrader: 'WeBWorK Syntax Rejection: Decimal approximation · 1 attempt left',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          };
        }
        return {
          speedGrader: 'Attempt 4 of 5 in progress · AnSwEr0001 active',
          focusShield: false,
          blurEvents: 0,
          status: 'clean',
        };
      },
    },
    scene1: {
      stealthBadge: 'ExamGhost MathObjects CAS Engine: Exact Symbolic Form',
      courseHeader: 'MATH 215 · Multivariable Calculus · Problem Set 9, Problem 4 (Attempt 4 of 5)',
      points: '4.0 Points',
      prompt: (
        <span>
          Evaluate the double integral <code className="text-amber-300 font-mono">∬_R e^-(x^2+y^2) dA</code>, where R is the disk x^2 + y^2 &le; 4 in the first quadrant. Enter an exact MathObjects expression.
        </span>
      ),
      hudText: 'Converts Cartesian integral to polar coordinates (r dr dθ). Formats exact MathObjects string (pi/4)*(1 - exp(-4)) in 0.3s.',
      options: [
        { label: 'A', text: '(pi/4)*(1 - exp(-4)) (Exact MathObjects Expression)', isCorrectSelected: true },
        { label: 'B', text: '0.7711 (Decimal Approximation — Server Syntax Error)' },
        { label: 'C', text: '(pi/2)*(1 - exp(-4)) (Missing first-quadrant factor)' },
        { label: 'D', text: 'pi * exp(-4) (Incorrect integration)' },
      ],
      getCursor: (progress: number): CursorState => {
        if (progress < 30) return { x: 45, y: 38, clicking: false, tag: 'alt+s', label: 'Alt+S: Vision OCR' };
        if (progress < 70) return { x: 28, y: 72, clicking: progress > 45 && progress < 55, tag: 'solve', label: 'Inject MathObjects AST' };
        return { x: 28, y: 72, clicking: false, tag: 'shielded', label: '100% Correct (Green)' };
      },
      getTelemetry: (): TelemetryState => ({
        speedGrader: '0 syntax errors · Exact symbolic parser active',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Workspace: Polar Coordinates & Jacobian Transformation',
      claudeDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-amber-300 font-bold">Polar Coordinate Transformation:</p>
          <p>1. Conversion: x = r cos(θ), y = r sin(θ) ➔ x² + y² = r².</p>
          <p>2. Area element Jacobian: dA = r dr dθ.</p>
          <p>3. First quadrant disk bounds: 0 &le; θ &le; π/2, 0 &le; r &le; 2.</p>
          <p>4. Separable iterated integral: ∫₀^(π/2) dθ · ∫₀² r e^(-r²) dr.</p>
          <p>   • Angular part: [θ]₀^(π/2) = π/2.</p>
          <p>   • Radial part (u = -r², du = -2r dr): [-1/2 e^(-r²)]₀² = 1/2 (1 - e^(-4)).</p>
          <p className="text-emerald-400 font-bold">5. Total: (π/2) · (1/2)(1 - e^(-4)) = (pi/4)*(1 - exp(-4)).</p>
        </div>
      ),
      chatgptDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-emerald-300 font-bold">Numerical & Syntax Check:</p>
          <p>• π/4 ≈ 0.785398</p>
          <p>• 1 - e^(-4) = 1 - 0.018316 = 0.981684</p>
          <p>• Exact Product = 0.771097</p>
          <p>• WeBWorK MathObjects string: <code className="text-emerald-400">(pi/4)*(1 - exp(-4))</code></p>
        </div>
      ),
      deepseekDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-sky-300 font-bold">Theoretical Rigor & AST Grammar:</p>
          <p>• Continuous integrand e^(-r²) on compact domain confirms Fubini applicability.</p>
          <p>• PGML parser recognizes standard transcendental tokens: pi, exp(), sqrt(), sin().</p>
          <p>• Relative tolerance (tolType =&gt; 'relative', tol =&gt; 0.001) automatically satisfied by exact closed form.</p>
        </div>
      ),
      getCursor: (progress: number): CursorState => {
        if (progress < 35) return { x: 30, y: 22, clicking: progress > 15 && progress < 25, tag: 'explain', label: 'Claude 3.7 Jacobian' };
        if (progress < 70) return { x: 50, y: 22, clicking: progress > 45 && progress < 55, tag: 'explain', label: 'ChatGPT Symbolic' };
        return { x: 72, y: 22, clicking: progress > 80 && progress < 90, tag: 'explain', label: 'DeepSeek-R1 AST' };
      },
      getTelemetry: (): TelemetryState => ({
        speedGrader: 'Study AI Workspace · Multi-Model RAG Engine',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 4: SAKAI LMS SAMIGO TESTS & QUIZZES SOLVER MOTION DEMO
   Problem: BIO 150 (Molecular Biology) · Citric Acid Cycle ATP/NADH Yield
   Platform: /portal/site/ · Samigo jsf form delivery · 0 event log gaps
   ============================================================================ */

export function SakaiMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'BIO 150 Cellular Biology · Sakai LMS Samigo Assessment',
    domainBadge: 'SAKAI LMS',
    browserUrl: 'https://sakai.university.edu/portal/site/bio150-f26/tool/samigo-delivery',
    scenes: [
      { id: 0, label: '1. Sakai Event Log Gap', title: 'Sakai: 48s AutoSave Ping Gap & Stoichiometry Error', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost 0.3s Solve', title: 'ExamGhost: Continuous AutoSave Heartbeat · 0 Gaps', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Multi-Model Respiration Accounting', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'Sakai Samigo Assessment: Event Log AutoSave & JSF State Tracking',
      courseHeader: 'BIO 150 · Cell & Molecular Biology · Quiz 5 (Question 12 of 25)',
      points: '2.0 Points',
      prompt: (
        <span>
          For each molecule of Glucose (C6H12O6) entering cellular respiration, how many molecules of NADH, FADH2, and GTP/ATP are directly produced during the Citric Acid Cycle?
        </span>
      ),
      stopwatchSec: 22.0,
      failureBanner: {
        title: 'Sakai Event Log: 48s AutoSave Ping Gap & Stoichiometry Error',
        description: 'Student switched tabs to look up Krebs cycle diagram. Samigo Event Log recorded 48-second gap. Submitted 1 turn instead of 2 turns per glucose.',
        tagLabel: 'Sakai: Event Log Gap & Attempt Error',
      },
      options: [
        { label: 'A', text: '6 NADH, 2 FADH2, 2 GTP/ATP (Two turns per glucose molecule)' },
        { label: 'B', text: '3 NADH, 1 FADH2, 1 GTP/ATP (Single turn only — Failed glucose stoichiometry)', isWrongSelected: true },
        { label: 'C', text: '10 NADH, 2 FADH2, 4 ATP (Total respiration yield, not Krebs cycle alone)' },
        { label: 'D', text: '2 NADH, 0 FADH2, 2 ATP (Glycolysis yield only)' },
      ],
      getCursor: (progress: number): CursorState => {
        if (progress < 25) return { x: 45, y: 35, clicking: false, tag: 'inspect', label: 'Reading JSF Question' };
        if (progress < 60) return { x: 75, y: 72, clicking: progress > 45 && progress < 55, tag: 'blur', label: 'Tab Switch: Google Diagram' };
        return { x: 75, y: 70, clicking: false, tag: 'strike', label: 'Sakai Log Gap: 48s' };
      },
      getTelemetry: (progress: number): TelemetryState => {
        if (progress > 45) {
          return {
            speedGrader: 'Sakai Event Log Alert: 48s autoSave gap detected',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          };
        }
        return {
          speedGrader: 'Sakai Samigo autoSave: Ping OK · Attempt in progress',
          focusShield: false,
          blurEvents: 0,
          status: 'clean',
        };
      },
    },
    scene1: {
      stealthBadge: 'ExamGhost JSF In-Memory Evaluator: Continuous Heartbeat Active',
      courseHeader: 'BIO 150 · Cell & Molecular Biology · Quiz 5 (Question 12 of 25)',
      points: '2.0 Points',
      prompt: (
        <span>
          For each molecule of Glucose (C6H12O6) entering cellular respiration, how many molecules of NADH, FADH2, and GTP/ATP are directly produced during the Citric Acid Cycle?
        </span>
      ),
      hudText: 'Maintains Samigo autoSave AJAX heartbeat in background. Detects 2 Acetyl-CoA per glucose: 6 NADH, 2 FADH2, 2 ATP in 0.3s.',
      options: [
        { label: 'A', text: '6 NADH, 2 FADH2, 2 GTP/ATP (Two turns per glucose molecule)', isCorrectSelected: true },
        { label: 'B', text: '3 NADH, 1 FADH2, 1 GTP/ATP (Single turn only — Failed glucose stoichiometry)' },
        { label: 'C', text: '10 NADH, 2 FADH2, 4 ATP (Total respiration yield, not Krebs cycle alone)' },
        { label: 'D', text: '2 NADH, 0 FADH2, 2 ATP (Glycolysis yield only)' },
      ],
      getCursor: (progress: number): CursorState => {
        if (progress < 30) return { x: 45, y: 38, clicking: false, tag: 'alt+s', label: 'Alt+S: Vision OCR' };
        if (progress < 70) return { x: 28, y: 72, clicking: progress > 45 && progress < 55, tag: 'solve', label: 'Double-Click Inline' };
        return { x: 28, y: 72, clicking: false, tag: 'shielded', label: 'AutoSaved in Samigo' };
      },
      getTelemetry: (): TelemetryState => ({
        speedGrader: '0 event log gaps · Continuous Samigo autoSave heartbeat',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Workspace: Citric Acid Cycle Stoichiometry & Respiration Accounting',
      claudeDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-amber-300 font-bold">Stoichiometric Pathway per Glucose:</p>
          <p>1. Glycolysis: 1 Glucose ➔ 2 Pyruvate + 2 ATP + 2 NADH.</p>
          <p>2. Pyruvate Oxidation: 2 Pyruvate ➔ 2 Acetyl-CoA + 2 CO2 + 2 NADH.</p>
          <p>3. Citric Acid Cycle (2 turns total):</p>
          <p>   • Per 1 Acetyl-CoA: 3 NADH, 1 FADH2, 1 GTP/ATP, 2 CO2.</p>
          <p className="text-emerald-400 font-bold">   • Per 2 Acetyl-CoA (1 Glucose): 6 NADH, 2 FADH2, 2 GTP/ATP, 4 CO2.</p>
          <p className="text-slate-400 text-[10px]">Net yield from Krebs cycle alone: 6 NADH + 2 FADH2 + 2 ATP.</p>
        </div>
      ),
      chatgptDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-emerald-300 font-bold">Enzyme-by-Enzyme Generation:</p>
          <p>• Isocitrate dehydrogenase: 2 NADH</p>
          <p>• α-Ketoglutarate dehydrogenase: 2 NADH</p>
          <p>• Succinyl-CoA synthetase: 2 GTP (converted to 2 ATP)</p>
          <p>• Succinate dehydrogenase: 2 FADH2</p>
          <p>• Malate dehydrogenase: 2 NADH</p>
          <p className="text-emerald-400 font-bold">Total = 6 NADH, 2 FADH2, 2 ATP.</p>
        </div>
      ),
      deepseekDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-sky-300 font-bold">Bioenergetic Coupling & Sakai Telemetry:</p>
          <p>• In oxidative phosphorylation, 6 NADH generate ~15 ATP; 2 FADH2 generate ~3 ATP.</p>
          <p>• Sakai Samigo Event Log tracks form-level viewstate: takeAssessmentForm:autoSaveTimer.</p>
          <p>• ExamGhost injects answers inside the active JSF component tree without triggering full-page postbacks.</p>
        </div>
      ),
      getCursor: (progress: number): CursorState => {
        if (progress < 35) return { x: 30, y: 22, clicking: progress > 15 && progress < 25, tag: 'explain', label: 'Claude 3.7 Krebs' };
        if (progress < 70) return { x: 50, y: 22, clicking: progress > 45 && progress < 55, tag: 'explain', label: 'ChatGPT Enzymes' };
        return { x: 72, y: 22, clicking: progress > 80 && progress < 90, tag: 'explain', label: 'DeepSeek-R1 Bioenergetics' };
      },
      getTelemetry: (): TelemetryState => ({
        speedGrader: 'Study AI Workspace · Multi-Model RAG Engine',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 5: MACMILLAN ACHIEVE & SMARTWORK5 SOLVER MOTION DEMO
   Problem: CHEM 231 (Organic Chemistry I) · SN2 Inversion & ChemAxon Canvas
   Platform: achieve.macmillanlearning.com · 0 hint penalties · Walden inversion
   ============================================================================ */

export function MacmillanAchieveMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'CHEM 231 Organic Chemistry I · Macmillan Achieve Assessment',
    domainBadge: 'MACMILLAN ACHIEVE',
    browserUrl: 'https://achieve.macmillanlearning.com/courses/chem231/assessment/ch06-quiz',
    scenes: [
      { id: 0, label: '1. Achieve Hint Penalty', title: 'Achieve: 15% Score Deducted for Hint & Wrong Inversion', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost 0.3s Solve', title: 'ExamGhost: ChemAxon Vision OCR · Walden Inversion Solved', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Multi-Model SN2 Orbital Derivation', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'Macmillan Achieve: Multi-Attempt Hint Penalty & Canvas Telemetry',
      courseHeader: 'CHEM 231 · Organic Chemistry I · Chapter 6: Alkyl Halides (Attempt 2 of 3)',
      points: '5.0 Points (Deducted 15% for Hint Usage)',
      prompt: (
        <span>
          Predict the major organic product when (R)-2-bromobutane reacts with sodium methoxide (NaOCH3) in DMSO. Draw the correct stereoisomer showing inversion of configuration (Walden Inversion).
        </span>
      ),
      stopwatchSec: 17.5,
      failureBanner: {
        title: 'Macmillan Achieve Penalty: Incorrect Stereocenter & Hint Deduction',
        description: 'Drawn product retained (R) configuration. SN2 backside attack inverts chiral center to (S). 15% score deducted for hint request.',
        tagLabel: 'Achieve: 15% hint penalty · Attempt 2 failed',
      },
      options: [
        { label: 'A', text: '(2S)-2-methoxybutane (Inverted stereocenter via Walden inversion)' },
        { label: 'B', text: '(2R)-2-methoxybutane (Retention of stereochemistry — Deducted 15%)', isWrongSelected: true },
        { label: 'C', text: '2-butene (E2 elimination minor byproduct under cold DMSO)' },
        { label: 'D', text: '1-methoxybutane (Constitutional isomer)' },
      ],
      getCursor: (progress: number): CursorState => {
        if (progress < 25) return { x: 45, y: 35, clicking: false, tag: 'inspect', label: 'Inspecting ChemAxon' };
        if (progress < 60) return { x: 75, y: 72, clicking: progress > 45 && progress < 55, tag: 'fail', label: 'Click Hint (-15%)' };
        return { x: 75, y: 70, clicking: false, tag: 'strike', label: '15% Hint Penalty' };
      },
      getTelemetry: (progress: number): TelemetryState => {
        if (progress > 45) {
          return {
            speedGrader: 'Macmillan Achieve: 15% hint penalty docked · Attempt 2 of 3',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          };
        }
        return {
          speedGrader: 'Attempt 2 in progress · MarvinJS canvas active',
          focusShield: false,
          blurEvents: 0,
          status: 'clean',
        };
      },
    },
    scene1: {
      stealthBadge: 'ExamGhost ChemAxon Vision OCR: Stereochemical Inverter',
      courseHeader: 'CHEM 231 · Organic Chemistry I · Chapter 6: Alkyl Halides (Attempt 2 of 3)',
      points: '5.0 Points',
      prompt: (
        <span>
          Predict the major organic product when (R)-2-bromobutane reacts with sodium methoxide (NaOCH3) in DMSO. Draw the correct stereoisomer showing inversion of configuration (Walden Inversion).
        </span>
      ),
      hudText: 'Alt+S Vision OCR parses molecular canvas. Identifies backside attack on chiral C-2, inverting (R) to (S)-2-methoxybutane in 0.3s.',
      options: [
        { label: 'A', text: '(2S)-2-methoxybutane (Inverted stereocenter via Walden inversion)', isCorrectSelected: true },
        { label: 'B', text: '(2R)-2-methoxybutane (Retention of stereochemistry — Deducted 15%)' },
        { label: 'C', text: '2-butene (E2 elimination minor byproduct under cold DMSO)' },
        { label: 'D', text: '1-methoxybutane (Constitutional isomer)' },
      ],
      getCursor: (progress: number): CursorState => {
        if (progress < 30) return { x: 45, y: 38, clicking: false, tag: 'alt+s', label: 'Alt+S: Canvas OCR' };
        if (progress < 70) return { x: 28, y: 72, clicking: progress > 45 && progress < 55, tag: 'solve', label: 'Draw Inverted Wedge' };
        return { x: 28, y: 72, clicking: false, tag: 'shielded', label: '100% Full Credit' };
      },
      getTelemetry: (): TelemetryState => ({
        speedGrader: '0 hint penalties · 100% attempt credit preserved',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Workspace: SN2 Stereochemistry & Walden Inversion Derivation',
      claudeDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-amber-300 font-bold">SN2 Reaction Stereochemistry Mechanism:</p>
          <p>1. Reactants: (R)-2-bromobutane (secondary alkyl halide) + NaOCH3 (strong nucleophile/strong base).</p>
          <p>2. Solvent: DMSO (polar aprotic), which accelerates SN2 by leaving methoxide anions un-solvated.</p>
          <p>3. Attack Trajectory: Methoxide nucleophile attacks C-2 from 180° opposite the C-Br bond (backside attack).</p>
          <p className="text-emerald-400 font-bold">4. Stereochemical Result: Complete Walden Inversion converts (2R) to (2S)-2-methoxybutane.</p>
          <p className="text-slate-400 text-[10px]">C-I-P Priorities: -OCH3 (1) &gt; -CH2CH3 (2) &gt; -CH3 (3) &gt; -H (4). (S) configuration confirmed.</p>
        </div>
      ),
      chatgptDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-emerald-300 font-bold">Fast Competition Audit (SN2 vs E2):</p>
          <p>• NaOCH3 is both a strong nucleophile and strong base.</p>
          <p>• On secondary carbon in DMSO at room temp, SN2 substitution dominates.</p>
          <p>• E2 (producing 2-butene) is a minor pathway.</p>
          <p className="text-emerald-400 font-bold">Correct Structure: (2S)-2-methoxybutane.</p>
        </div>
      ),
      deepseekDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-sky-300 font-bold">Frontier Molecular Orbital (FMO) Proof:</p>
          <p>• HOMO of methoxide (oxygen lone pair non-bonding orbital) attacks LUMO of substrate (σ* C-Br antibonding orbital).</p>
          <p>• Trigonal bipyramidal transition state with partial C-O and C-Br bonds.</p>
          <p>• ChemAxon coordinates: dashed wedge on C-2 ensures exact (S) chirality tag in Achieve metadata.</p>
        </div>
      ),
      getCursor: (progress: number): CursorState => {
        if (progress < 35) return { x: 30, y: 22, clicking: progress > 15 && progress < 25, tag: 'explain', label: 'Claude 3.7 Walden' };
        if (progress < 70) return { x: 50, y: 22, clicking: progress > 45 && progress < 55, tag: 'explain', label: 'ChatGPT Kinetics' };
        return { x: 72, y: 22, clicking: progress > 80 && progress < 90, tag: 'explain', label: 'DeepSeek-R1 FMO' };
      },
      getTelemetry: (): TelemetryState => ({
        speedGrader: 'Study AI Workspace · Multi-Model RAG Engine',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 6: TOP HAT LECTURE QUIZ & PROCTORED TEST SOLVER MOTION DEMO
   Problem: ECON 101 (Macroeconomics) · Open Market Operations & Focus Mode
   Platform: app.tophat.com · 0 focus-loss flags · Focus Mode indicator GREEN
   ============================================================================ */

export function TopHatMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'ECON 101 Principles of Macroeconomics · Top Hat Live Lecture',
    domainBadge: 'TOP HAT',
    browserUrl: 'https://app.tophat.com/e/829104/lecture/econ101',
    scenes: [
      { id: 0, label: '1. Top Hat Focus Alarm', title: 'Top Hat: Focus Mode RED Alert Broadcast to Podium', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost 0.3s Solve', title: 'ExamGhost: 100% In-Tab Focus Shield · 0 Alerts', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Multi-Model Monetary Policy Model', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'Top Hat Focus Mode: Real-Time Tab & Window Blur Broadcast Active',
      courseHeader: 'ECON 101 · Macroeconomics Live Lecture · Polling Question 3 (30s Timer)',
      points: '1.0 Point (Attendance + Correctness)',
      prompt: (
        <span>
          If the Federal Reserve engages in Open Market Purchases of government securities, how does this affect the money supply, equilibrium nominal interest rates, and aggregate demand?
        </span>
      ),
      stopwatchSec: 13.8,
      failureBanner: {
        title: 'Top Hat Focus Mode Alert: Student Left Presentation Tab',
        description: '10:41:19 AM — Window blur event streamed to professor podium dashboard. Focus Mode status changed from GREEN to RED.',
        tagLabel: 'Top Hat: Focus Mode RED Alert',
      },
      options: [
        { label: 'A', text: 'Money Supply Increases · Interest Rates Decrease · Aggregate Demand Shifts Right' },
        { label: 'B', text: 'Money Supply Decreases · Interest Rates Increase · Aggregate Demand Shifts Left', isWrongSelected: true },
        { label: 'C', text: 'Money Supply Increases · Interest Rates Increase · Aggregate Demand Unchanged' },
        { label: 'D', text: 'Money Supply Unchanged · Currency in Circulation Decreases' },
      ],
      getCursor: (progress: number): CursorState => {
        if (progress < 25) return { x: 45, y: 35, clicking: false, tag: 'inspect', label: '30s Polling Countdown' };
        if (progress < 60) return { x: 88, y: 15, clicking: progress > 45 && progress < 55, tag: 'fail', label: 'Tab Switch ➔ Google' };
        return { x: 85, y: 15, clicking: false, tag: 'strike', label: 'Podium Focus RED' };
      },
      getTelemetry: (progress: number): TelemetryState => {
        if (progress > 45) {
          return {
            speedGrader: 'Top Hat Focus Alert: Student left tab · RED badge broadcast',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          };
        }
        return {
          speedGrader: 'Focus Mode: GREEN · Polling timer: 24s remaining',
          focusShield: false,
          blurEvents: 0,
          status: 'clean',
        };
      },
    },
    scene1: {
      stealthBadge: 'ExamGhost WebSocket Focus Shield: 100% In-Tab Concurrency',
      courseHeader: 'ECON 101 · Macroeconomics Live Lecture · Polling Question 3 (30s Timer)',
      points: '1.0 Point (Attendance + Correctness)',
      prompt: (
        <span>
          If the Federal Reserve engages in Open Market Purchases of government securities, how does this affect the money supply, equilibrium nominal interest rates, and aggregate demand?
        </span>
      ),
      hudText: 'Intercepts question directly inside active Top Hat WebSocket session. Zero window blur events, Focus Mode indicator stays 100% green.',
      options: [
        { label: 'A', text: 'Money Supply Increases · Interest Rates Decrease · Aggregate Demand Shifts Right', isCorrectSelected: true },
        { label: 'B', text: 'Money Supply Decreases · Interest Rates Increase · Aggregate Demand Shifts Left' },
        { label: 'C', text: 'Money Supply Increases · Interest Rates Increase · Aggregate Demand Unchanged' },
        { label: 'D', text: 'Money Supply Unchanged · Currency in Circulation Decreases' },
      ],
      getCursor: (progress: number): CursorState => {
        if (progress < 30) return { x: 45, y: 38, clicking: false, tag: 'alt+s', label: 'Double-Click Inline' };
        if (progress < 70) return { x: 28, y: 72, clicking: progress > 45 && progress < 55, tag: 'solve', label: 'Submit (24s Left)' };
        return { x: 28, y: 72, clicking: false, tag: 'shielded', label: 'Focus Mode: 100% GREEN' };
      },
      getTelemetry: (): TelemetryState => ({
        speedGrader: '0 focus-loss flags · Top Hat Focus Mode stays GREEN',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Workspace: Federal Reserve Monetary Transmission Mechanism',
      claudeDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-amber-300 font-bold">Monetary Policy Transmission Chain:</p>
          <p>1. Open Market Purchase: Fed buys Treasury bonds from commercial banks, paying with freshly created electronic bank reserves.</p>
          <p>2. Money Supply Expansion: Bank reserves increase, shifting the vertical Money Supply (Ms) curve to the right.</p>
          <p>3. Interest Rate Decrease: Lower federal funds rate lowers short-term and long-term interest rates.</p>
          <p>4. Expenditure Shift: Lower interest rates stimulate investment (I) and interest-sensitive consumer spending (C).</p>
          <p className="text-emerald-400 font-bold">5. Aggregate Demand: AD = C + I + G + (X - M) shifts outward to the right.</p>
        </div>
      ),
      chatgptDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-emerald-300 font-bold">Quick Economic Logic:</p>
          <p>Fed Buys Bonds ➔ Cash Enters Economy ➔ Money Supply (Ms) ↑</p>
          <p>More Cash Available ➔ Cost of Borrowing ↓ (Nominal Interest Rate ↓)</p>
          <p>Cheaper Loans ➔ Businesses Invest &amp; Consumers Buy ➔ AD ↑ (Shifts Right)</p>
          <p className="text-emerald-400 font-bold">Correct Option: A.</p>
        </div>
      ),
      deepseekDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-sky-300 font-bold">IS-LM & Liquidity Preference Verification:</p>
          <p>• In the Keynesian Liquidity Preference model, Ms / P = L(Y, r). When Ms rises with fixed P, r must fall.</p>
          <p>• Shift of LM curve rightward along downward-sloping IS curve boosts equilibrium output Y.</p>
          <p>• Top Hat WebSocket connection verifies active presence via visibilitychange event suppression.</p>
        </div>
      ),
      getCursor: (progress: number): CursorState => {
        if (progress < 35) return { x: 30, y: 22, clicking: progress > 15 && progress < 25, tag: 'explain', label: 'Claude 3.7 IS-LM' };
        if (progress < 70) return { x: 50, y: 22, clicking: progress > 45 && progress < 55, tag: 'explain', label: 'ChatGPT Summary' };
        return { x: 72, y: 22, clicking: progress > 80 && progress < 90, tag: 'explain', label: 'DeepSeek-R1 Telemetry' };
      },
      getTelemetry: (): TelemetryState => ({
        speedGrader: 'Study AI Workspace · Multi-Model RAG Engine',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 7: WILEY KNEWTON ALTA ADAPTIVE MASTERY SOLVER MOTION DEMO
   Problem: STAT 200 (Elementary Statistics) · Two-Sample Welch t-Test
   Platform: knewton.com/alta · 0 mastery drops · Adaptive bar locked at 100%
   ============================================================================ */

export function KnewtonAltaMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'STAT 200 Elementary Statistics · Wiley Knewton Alta Mastery',
    domainBadge: 'KNEWTON ALTA',
    browserUrl: 'https://knewton.com/alta/course/stat200/assignment/hyp-tests',
    scenes: [
      { id: 0, label: '1. Alta Mastery Drop', title: 'Knewton Alta: Wrong Answer Regresses Mastery 82% ➔ 60%', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost 0.3s Solve', title: 'ExamGhost: Welch t-Kernel · Mastery Jumps to 100%', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Multi-Model Welch-Satterthwaite Proof', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'Knewton Alta: Adaptive Mastery Regression & Remediation Loop',
      courseHeader: 'STAT 200 · Elementary Statistics · Topic: Two-Sample Hypothesis Tests',
      points: 'Mastery: 82% (Target: 100%)',
      prompt: (
        <span>
          Sample 1: n1=15, x̄1=84.2, s1=5.1. Sample 2: n2=18, x̄2=79.6, s2=6.8. Calculate Welch t-statistic and one-tailed p-value for H0: μ1 - μ2 = 0 vs Ha: μ1 - μ2 &gt; 0.
        </span>
      ),
      stopwatchSec: 15.6,
      failureBanner: {
        title: 'Knewton Alta Regression: Mastery Dropped to 60%',
        description: 'Incorrect pooled variance answer entered. Adaptive engine triggered mastery regression: 6 additional remediation problems inserted into queue.',
        tagLabel: 'Alta: Mastery regressed -22% · 6 problems added',
      },
      options: [
        { label: 'A', text: 't = 2.22 · p = 0.0171 · Reject H0 at α=0.05 (Welch unequal variances)' },
        { label: 'B', text: 't = 2.14 · p = 0.0512 · Fail to reject H0 (Pooled variance error)', isWrongSelected: true },
        { label: 'C', text: 't = 1.68 · p = 0.0980 (Z-test distribution assumption error)' },
        { label: 'D', text: 't = 3.45 · p = 0.0008 (Ignored sample standard deviations)' },
      ],
      getCursor: (progress: number): CursorState => {
        if (progress < 25) return { x: 45, y: 35, clicking: false, tag: 'inspect', label: 'Alta Mastery Bar 82%' };
        if (progress < 60) return { x: 75, y: 72, clicking: progress > 45 && progress < 55, tag: 'fail', label: 'Submit Guess (Pooled)' };
        return { x: 75, y: 70, clicking: false, tag: 'strike', label: 'Mastery Drops to 60%' };
      },
      getTelemetry: (progress: number): TelemetryState => {
        if (progress > 45) {
          return {
            speedGrader: 'Alta Adaptive Regression: Mastery 60% · +6 Remedial Problems',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          };
        }
        return {
          speedGrader: 'Mastery: 82% · 2 questions remaining to target',
          focusShield: false,
          blurEvents: 0,
          status: 'clean',
        };
      },
    },
    scene1: {
      stealthBadge: 'ExamGhost Statistical Kernel: Exact Welch-Satterthwaite df',
      courseHeader: 'STAT 200 · Elementary Statistics · Topic: Two-Sample Hypothesis Tests',
      points: 'Mastery: 82% ➔ 100% Complete',
      prompt: (
        <span>
          Sample 1: n1=15, x̄1=84.2, s1=5.1. Sample 2: n2=18, x̄2=79.6, s2=6.8. Calculate Welch t-statistic and one-tailed p-value for H0: μ1 - μ2 = 0 vs Ha: μ1 - μ2 &gt; 0.
        </span>
      ),
      hudText: 'Calculates Welch standard error SE = 2.0743, t = 2.22, df = 30.6, p = 0.0171. Injects into Alta in 0.3s; Mastery advances to 100%.',
      options: [
        { label: 'A', text: 't = 2.22 · p = 0.0171 · Reject H0 at α=0.05 (Welch unequal variances)', isCorrectSelected: true },
        { label: 'B', text: 't = 2.14 · p = 0.0512 · Fail to reject H0 (Pooled variance error)' },
        { label: 'C', text: 't = 1.68 · p = 0.0980 (Z-test distribution assumption error)' },
        { label: 'D', text: 't = 3.45 · p = 0.0008 (Ignored sample standard deviations)' },
      ],
      getCursor: (progress: number): CursorState => {
        if (progress < 30) return { x: 45, y: 38, clicking: false, tag: 'alt+s', label: 'Alt+S: Vision OCR' };
        if (progress < 70) return { x: 28, y: 72, clicking: progress > 45 && progress < 55, tag: 'solve', label: 'Compute Welch t-Test' };
        return { x: 28, y: 72, clicking: false, tag: 'shielded', label: '100% Mastery Locked' };
      },
      getTelemetry: (): TelemetryState => ({
        speedGrader: '0 mastery drops · Adaptive Mastery locked at 100%',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Workspace: Welch Two-Sample t-Test & Degrees of Freedom',
      claudeDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-amber-300 font-bold">Welch Unequal Variances t-Test Step-by-Step:</p>
          <p>1. Difference in Sample Means: x̄1 - x̄2 = 84.2 - 79.6 = 4.60.</p>
          <p>2. Standard Error: SE = √(s1²/n1 + s2²/n2) = √(26.01/15 + 46.24/18) = √(1.734 + 2.5689) = √4.3029 ≈ 2.0743.</p>
          <p>3. Test Statistic: t = (4.60 - 0) / 2.0743 = 2.2176 ≈ 2.22.</p>
          <p>4. Welch-Satterthwaite df ≈ 30.6 (Student-t with unequal variances).</p>
          <p className="text-emerald-400 font-bold">5. One-tailed p-value = P(T &gt; 2.218 | df=30.6) = 0.0171 &lt; 0.05 ➔ Reject H0.</p>
        </div>
      ),
      chatgptDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-emerald-300 font-bold">Fast Hypothesis Audit:</p>
          <p>• Null H0: μ1 - μ2 = 0 vs Ha: μ1 - μ2 &gt; 0 (right-tailed test).</p>
          <p>• Since s1² (26.01) ≠ s2² (46.24), pooling variance produces biased standard errors.</p>
          <p>• p = 0.0171 is statistically significant at α = 0.05.</p>
          <p className="text-emerald-400 font-bold">Answer: Option A.</p>
        </div>
      ),
      deepseekDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-sky-300 font-bold">Item-Response Theory & Alta Scoring Engine:</p>
          <p>• Knewton Alta uses Bayesian Knowledge Tracing (BKT) to update mastery probability.</p>
          <p>• A single incorrect response on an advanced item triggers regression below mastery threshold.</p>
          <p>• ExamGhost guarantees exact numeric values, locking mastery progression at 100%.</p>
        </div>
      ),
      getCursor: (progress: number): CursorState => {
        if (progress < 35) return { x: 30, y: 22, clicking: progress > 15 && progress < 25, tag: 'explain', label: 'Claude 3.7 Welch' };
        if (progress < 70) return { x: 50, y: 22, clicking: progress > 45 && progress < 55, tag: 'explain', label: 'ChatGPT Stats' };
        return { x: 72, y: 22, clicking: progress > 80 && progress < 90, tag: 'explain', label: 'DeepSeek-R1 BKT' };
      },
      getTelemetry: (): TelemetryState => ({
        speedGrader: 'Study AI Workspace · Multi-Model RAG Engine',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}

/* ============================================================================
   ROUTE 8: HAWKES LEARNING CERTIFY MODE SOLVER MOTION DEMO
   Problem: MATH 110 (College Algebra) · Rational Equations with Extraneous Roots
   Platform: learn.hawkeslearning.com · 0 strikes burned · Certify Mode complete
   ============================================================================ */

export function HawkesLearningMotionDemo() {
  const config: PlatformDemoConfig = {
    title: 'MATH 110 College Algebra · Hawkes Learning Certify Mode',
    domainBadge: 'HAWKES LEARNING',
    browserUrl: 'https://learn.hawkeslearning.com/Portal/Course/Certify/Math110/Sec2.6',
    scenes: [
      { id: 0, label: '1. Hawkes 3-Strike Reset', title: 'Hawkes: Strike 3 Burned · Full Lesson Reset to Question 1', durationMs: 7000 },
      { id: 1, label: '2. ExamGhost 0.3s Solve', title: 'ExamGhost: Extraneous Root Validator · 0 Strikes Used', durationMs: 6500 },
      { id: 2, label: '3. 2-in-1 Study Hub', title: 'Study AI Hub: Multi-Model Domain Restriction Proof', durationMs: 7500 },
    ],
    scene0: {
      warningBadge: 'Hawkes Learning Certify Mode: 3-Strike Reset Penalty Active',
      courseHeader: 'MATH 110 · College Algebra · Section 2.6: Rational Equations (Certify Mode)',
      points: 'Strikes Remaining: 1 of 3 (Question 8 of 10)',
      prompt: (
        <span>
          Solve for x: <code className="text-amber-300 font-mono">x/(x-3) + 2/(x+1) = 8/(x^2 - 2x - 3)</code>. State all valid real solutions and identify any extraneous roots.
        </span>
      ),
      stopwatchSec: 19.4,
      failureBanner: {
        title: 'Hawkes Certify Failure: Strike 3 Burned · Full Lesson Reset',
        description: 'Entered extraneous candidate x = 3 causing division by zero. Hawkes burned 3rd strike: Certify Mode terminated, student reset to Practice Mode.',
        tagLabel: 'Hawkes: Strike 3 Burned · Certify Failed',
      },
      options: [
        { label: 'A', text: 'x = (-3 ± √65)/2 ≈ 2.53, -5.53 (Domain: x ≠ 3, x ≠ -1; both roots valid)' },
        { label: 'B', text: 'x = 3, x = -1 (Extraneous roots causing division by zero — Strike Burned)', isWrongSelected: true },
        { label: 'C', text: 'x = 2, x = -7 (Arithmetic sign error)' },
        { label: 'D', text: 'No real solutions' },
      ],
      getCursor: (progress: number): CursorState => {
        if (progress < 25) return { x: 45, y: 35, clicking: false, tag: 'inspect', label: 'Hawkes Certify Q8/10' };
        if (progress < 60) return { x: 75, y: 72, clicking: progress > 45 && progress < 55, tag: 'fail', label: 'Enter x=3 (Extraneous)' };
        return { x: 75, y: 70, clicking: false, tag: 'strike', label: 'Certify Reset to Q1' };
      },
      getTelemetry: (progress: number): TelemetryState => {
        if (progress > 45) {
          return {
            speedGrader: 'Hawkes Certify Terminated: Strike 3 Burned · Reset to Q1',
            focusShield: false,
            blurEvents: 1,
            status: 'flagged',
          };
        }
        return {
          speedGrader: 'Certify Mode: Strike 2 of 3 used · 2 questions to certify',
          focusShield: false,
          blurEvents: 0,
          status: 'clean',
        };
      },
    },
    scene1: {
      stealthBadge: 'ExamGhost Extraneous Root Validator: 0 Strikes Guarantee',
      courseHeader: 'MATH 110 · College Algebra · Section 2.6: Rational Equations (Certify Mode)',
      points: 'Question 8 of 10 · 0 Strikes Used',
      prompt: (
        <span>
          Solve for x: <code className="text-amber-300 font-mono">x/(x-3) + 2/(x+1) = 8/(x^2 - 2x - 3)</code>. State all valid real solutions and identify any extraneous roots.
        </span>
      ),
      hudText: 'Multiplies by LCD (x-3)(x+1), factors quadratic x² + 3x - 14 = 0. Validates domain constraints in 0.3s; preserves 0 strikes.',
      options: [
        { label: 'A', text: 'x = (-3 ± √65)/2 ≈ 2.53, -5.53 (Domain: x ≠ 3, x ≠ -1; both roots valid)', isCorrectSelected: true },
        { label: 'B', text: 'x = 3, x = -1 (Extraneous roots causing division by zero — Strike Burned)' },
        { label: 'C', text: 'x = 2, x = -7 (Arithmetic sign error)' },
        { label: 'D', text: 'No real solutions' },
      ],
      getCursor: (progress: number): CursorState => {
        if (progress < 30) return { x: 45, y: 38, clicking: false, tag: 'alt+s', label: 'Alt+S: Vision OCR' };
        if (progress < 70) return { x: 28, y: 72, clicking: progress > 45 && progress < 55, tag: 'solve', label: 'Validate Domain' };
        return { x: 28, y: 72, clicking: false, tag: 'shielded', label: 'Certified (0 Strikes)' };
      },
      getTelemetry: (): TelemetryState => ({
        speedGrader: '0 strikes burned · Hawkes Certification completed',
        focusShield: true,
        blurEvents: 0,
        status: 'shielded',
      }),
    },
    scene2: {
      hubTitle: 'Study AI Workspace: Rational Equations & Extraneous Root Elimination',
      claudeDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-amber-300 font-bold">Rational Equation Factorization & Domain Analysis:</p>
          <p>1. Factor denominators: x² - 2x - 3 = (x - 3)(x + 1).</p>
          <p>2. Restricted Domain: x ≠ 3 and x ≠ -1 (values producing zero in denominator).</p>
          <p>3. Multiply both sides by LCD (x - 3)(x + 1):</p>
          <p>   x(x + 1) + 2(x - 3) = 8</p>
          <p>   x² + x + 2x - 6 = 8 ➔ x² + 3x - 14 = 0.</p>
          <p>4. Quadratic formula: x = [-3 ± √(9 - 4(1)(-14))] / 2 = [-3 ± √(9 + 56)] / 2 = (-3 ± √65) / 2.</p>
          <p className="text-emerald-400 font-bold">5. √65 ≈ 8.06225 ➔ x1 ≈ 2.531, x2 ≈ -5.531. Neither root equals 3 or -1; both are valid.</p>
        </div>
      ),
      chatgptDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-emerald-300 font-bold">Fast Extraneous Root Verification:</p>
          <p>• Restricted values: x = 3 (makes x-3 = 0) and x = -1 (makes x+1 = 0).</p>
          <p>• Quadratic roots: x = (-3 + 8.062)/2 = 2.531 and x = (-3 - 8.062)/2 = -5.531.</p>
          <p>• Since 2.531 ≠ 3 and -5.531 ≠ -1, no extraneous roots occur.</p>
          <p className="text-emerald-400 font-bold">Option A is completely verified.</p>
        </div>
      ),
      deepseekDerivation: (
        <div className="space-y-1.5 font-mono text-[11px] leading-relaxed">
          <p className="text-sky-300 font-bold">Hawkes Learning Strike Prevention Architecture:</p>
          <p>• Hawkes Certify mode enforces a hard strike limit (usually 2 to 4 mistakes allowed before kicking out to Practice).</p>
          <p>• Extraneous root traps are intentionally planted by Hawkes question designers to burn strikes.</p>
          <p>• ExamGhost checks algebraic domain restrictions before confirming input, guaranteeing 0 burned strikes.</p>
        </div>
      ),
      getCursor: (progress: number): CursorState => {
        if (progress < 35) return { x: 30, y: 22, clicking: progress > 15 && progress < 25, tag: 'explain', label: 'Claude 3.7 Algebra' };
        if (progress < 70) return { x: 50, y: 22, clicking: progress > 45 && progress < 55, tag: 'explain', label: 'ChatGPT Domain' };
        return { x: 72, y: 22, clicking: progress > 80 && progress < 90, tag: 'explain', label: 'DeepSeek-R1 Strikes' };
      },
      getTelemetry: (): TelemetryState => ({
        speedGrader: 'Study AI Workspace · Multi-Model RAG Engine',
        focusShield: true,
        blurEvents: 0,
        status: 'clean',
      }),
    },
  };

  return <BasePlatformMotionDemo config={config} />;
}
