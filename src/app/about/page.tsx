import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FinalCta from "@/components/home/FinalCta";

const URL = "https://www.examghost.com/about";
const TITLE = "About ExamGhost — Who Builds It & How It Works";
const DESCRIPTION =
  "ExamGhost is an AI study and quiz-help Chrome extension operated by FoundryOne LLC (Albuquerque, NM). Who we are, how it works, pricing, refunds and support.";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: { canonical: URL },
  openGraph: {
    type: "website",
    url: URL,
    siteName: "ExamGhost",
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "About ExamGhost" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": `${URL}#webpage`,
      url: URL,
      name: TITLE,
      description: DESCRIPTION,
      inLanguage: "en-US",
      dateModified: "2026-11-18",
      isPartOf: { "@id": "https://www.examghost.com/#website" },
      about: { "@id": "https://www.examghost.com/#organization" },
      breadcrumb: { "@id": `${URL}#breadcrumb` },
    },
    {
      "@type": "Organization",
      "@id": "https://www.examghost.com/#organization",
      name: "ExamGhost",
      legalName: "FoundryOne LLC",
      url: "https://www.examghost.com",
      logo: { "@type": "ImageObject", url: "https://www.examghost.com/icon-512.png", width: 512, height: 512 },
      email: "support@examghost.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1209 Mountain Road Pl NE, Ste N",
        addressLocality: "Albuquerque",
        addressRegion: "NM",
        postalCode: "87110",
        addressCountry: "US",
      },
      sameAs: [
        "https://discord.gg/aCcsyKYJq4",
        "https://x.com/examghost",
        "https://github.com/examghost",
        "https://www.youtube.com/@examghost",
      ],
    },
    {
      "@type": "BreadcrumbList",
      "@id": `${URL}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://www.examghost.com" },
        { "@type": "ListItem", position: 2, name: "About", item: URL },
      ],
    },
  ],
};

const facts: { label: string; value: string }[] = [
  { label: "Operated by", value: "FoundryOne LLC" },
  { label: "Address", value: "1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110, USA" },
  { label: "Support", value: "support@examghost.com" },
  { label: "Free tier", value: "5 free solves per day, no credit card" },
  { label: "Paid plans", value: "$19/month · $99/year · $199 lifetime" },
  { label: "Refunds", value: "14-day money-back guarantee" },
  { label: "Browsers", value: "Chrome, Edge, Brave, Arc (macOS & Windows)" },
];

const link = "underline underline-offset-4 decoration-black/30 hover:decoration-black";

export default function AboutPage() {
  return (
    <main id="main-content" className="min-h-screen bg-cream text-ink page-glow">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <section className="pt-12 sm:pt-16 pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-muted mb-4">About</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight leading-[1.05] mb-5">
            Built to help you study faster.
          </h1>
          <p className="text-lg sm:text-xl text-ink-secondary leading-relaxed">
            ExamGhost is a Chrome extension that answers quiz and homework questions right on the page, with a
            step-by-step explanation when you want one. It is built and run by FoundryOne LLC in Albuquerque,
            New Mexico.
          </p>
        </div>
      </section>

      <section className="pb-16 sm:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <dl className="grid sm:grid-cols-2 gap-3">
            {facts.map((f) => (
              <div key={f.label} className="bg-white rounded-2xl border border-black/10 surface-card p-4 sm:p-5">
                <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted mb-1">{f.label}</dt>
                <dd className="text-[15px] font-medium text-ink">{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-white/60 border-y border-black/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight mb-5">How it works</h2>
          <p className="text-ink-secondary leading-relaxed mb-5">
            Install the extension, open a quiz or homework page, and double-click a question. ExamGhost reads the
            question and options, asks an AI model, and shows the answer on the page.
          </p>
          <ul className="space-y-2.5 text-ink-secondary">
            <li className="bg-white rounded-2xl border border-black/10 px-4 py-3.5">
              <strong className="text-ink">Three answer styles.</strong> <kbd className="kbd-key">Alt+1</kbd> quick answer, <kbd className="kbd-key">Alt+2</kbd> highlight, <kbd className="kbd-key">Alt+3</kbd> explain.
            </li>
            <li className="bg-white rounded-2xl border border-black/10 px-4 py-3.5">
              <strong className="text-ink">Snap-It (<kbd className="kbd-key">Alt+S</kbd>).</strong> Draw a box around a graph, diagram or image and solve that.
            </li>
            <li className="bg-white rounded-2xl border border-black/10 px-4 py-3.5">
              <strong className="text-ink">Works on 20+ platforms,</strong> including Canvas, Blackboard, Moodle, D2L Brightspace and Google Forms.
            </li>
          </ul>
          <p className="text-ink-secondary leading-relaxed mt-5">
            Want to see it first? Try the{" "}
            <Link href="/canvas-quiz-solver-free-demo" className={link}>live demo</Link>{" "}
            or read the <Link href="/faq" className={link}>FAQ</Link>. Legal details are in the{" "}
            <Link href="/terms" className={link}>Terms</Link> and{" "}
            <Link href="/privacy" className={link}>Privacy Policy</Link>.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="bg-white rounded-3xl border border-black/10 surface-card p-6 sm:p-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-3">Use it responsibly</h2>
            <p className="text-ink-secondary leading-relaxed">
              Schools and instructors set their own rules, and many restrict AI tools on graded work. You are
              responsible for following your institution&apos;s academic-integrity policy. ExamGhost is a study
              aid: use it to check your work, learn from the explanations and practise.
            </p>
          </div>
          <p className="text-ink-secondary leading-relaxed mt-6">
            Questions? Email{" "}
            <a href="mailto:support@examghost.com" className={link}>support@examghost.com</a> or visit the{" "}
            <Link href="/contact" className={link}>contact page</Link>.
          </p>
        </div>
      </section>

      <FinalCta />
      <Footer hideCta />
    </main>
  );
}
