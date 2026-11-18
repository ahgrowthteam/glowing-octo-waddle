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
    <main className="min-h-screen bg-cream text-ink">
      <Navbar />
      <section className="max-w-xl mx-auto px-6 py-32 text-center">
        <p className="eyebrow mb-4 justify-center">404</p>
        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-4">
          That page doesn&apos;t exist.
        </h1>
        <p className="text-ink-muted mb-8">
          The link may be outdated or mistyped. Start from the homepage or try the free demo.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link href="/" className="btn-dark px-6 py-3 text-base">
            Back to homepage
          </Link>
          <Link
            href="/canvas-quiz-solver-free-demo"
            prefetch={false}
            className="btn-soft px-6 py-3 text-base"
          >
            Try the live demo
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
