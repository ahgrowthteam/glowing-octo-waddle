import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Override the root layout's index/follow robots and homepage canonical so error pages carry
// exactly one robots directive (noindex) and no canonical pointing at the homepage.
export const metadata: Metadata = {
  title: "Page not found",
  description: "This page doesn't exist. Head back to the ExamGhost homepage.",
  robots: { index: false, follow: false, googleBot: { index: false, follow: false } },
  alternates: { canonical: null },
  openGraph: { url: undefined },
};

export default function NotFound() {
  return (
    <main id="main-content" className="min-h-screen bg-cream text-ink">
      <Navbar />
      <section className="max-w-xl mx-auto px-4 sm:px-6 py-20 sm:py-28 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-4">404</p>
        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-4">
          Nothing here.
        </h1>
        <p className="text-base sm:text-lg text-ink-muted mb-8">
          The link may be old or mistyped. Here are a few places to go instead.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn-dark px-7 py-4 text-base">
            Back to homepage
          </Link>
          <Link
            href="/canvas-quiz-solver-free-demo"
            prefetch={false}
            className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-black/10 bg-white text-base font-medium hover:border-black/25 transition-colors"
          >
            Try the live demo
          </Link>
          <Link
            href="/compare"
            prefetch={false}
            className="inline-flex items-center justify-center px-7 py-4 rounded-full border border-black/10 bg-white text-base font-medium hover:border-black/25 transition-colors"
          >
            Compare tools
          </Link>
        </div>
      </section>
      <Footer hideCta />
    </main>
  );
}
