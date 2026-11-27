import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Ghost from "@/components/home/Ghost";
import { ArrowUpRight } from "lucide-react";

// Override the root layout's index/follow robots and homepage canonical so error pages carry
// exactly one robots directive (noindex) and no canonical pointing at the homepage.
export const metadata: Metadata = {
  title: "Page not found",
  description: "This page doesn't exist. Head back to the ExamGhost homepage.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: null },
  openGraph: { url: undefined },
};

const ROUTES = [
  {
    href: "/",
    title: "Homepage",
    desc: "Overview of ExamGhost, supported platforms, and pricing.",
  },
  {
    href: "/canvas-quiz-solver-free-demo",
    title: "Live demo",
    desc: "Try double-click and Snap-It on an interactive Canvas quiz.",
  },
  {
    href: "/compare",
    title: "Compare tools",
    desc: "See how ExamGhost compares across features and pricing.",
  },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-cream text-ink page-glow flex flex-col">
      <Navbar />
      <main id="main-content" className="flex-1 flex items-center py-12 sm:py-20">
        <div className="max-w-2xl mx-auto w-full px-4 sm:px-6">
          <div className="rounded-3xl bg-paper border border-ink/[0.09] shadow-card p-7 sm:p-10">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div className="flex items-center gap-3">
                <Ghost size={48} />
                <span className="font-mono text-xs font-medium px-2.5 py-1 rounded-md bg-surface-subtle border border-ink/[0.08] text-ink-muted">
                  HTTP 404
                </span>
              </div>
              <Link href="/" className="btn-dark px-5 py-2.5 text-sm">
                Back to homepage
              </Link>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-[-0.03em] leading-[1.05] text-ink mb-3">
              Nothing here.
            </h1>
            <p className="text-base sm:text-lg text-ink-muted max-w-[52ch] leading-relaxed mb-8">
              The link may be old or mistyped. Pick one of these routes to get back on track.
            </p>

            <div className="grid sm:grid-cols-3 gap-3">
              {ROUTES.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  prefetch={false}
                  className="group rounded-xl bg-surface-subtle/70 hover:bg-paper border border-ink/[0.08] hover:border-cobalt/40 p-4 transition-all"
                >
                  <div className="flex items-center justify-between gap-2 mb-1.5">
                    <span className="font-display font-semibold text-sm text-ink group-hover:text-cobalt transition-colors">
                      {route.title}
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-ink-muted group-hover:text-cobalt transition-colors shrink-0" aria-hidden="true" />
                  </div>
                  <p className="text-xs text-ink-muted leading-relaxed">{route.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer hideCta />
    </div>
  );
}
