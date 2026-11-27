import type { Metadata } from "next";
import Image from "next/image";
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

const link = "font-medium text-ink underline underline-offset-4 decoration-ink/30 hover:text-cobalt hover:decoration-cobalt transition-colors";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream text-ink page-glow flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />
      <main id="main-content" className="flex-1">

      <section className="pt-10 sm:pt-14 pb-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-6 mb-6">
            <div>
              <p className="text-sm font-medium text-cobalt mb-3">About ExamGhost</p>
              <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-[-0.03em] leading-[1.05]">
                Built to help you study faster.
              </h1>
            </div>
            <div className="self-start shrink-0 rounded-2xl bg-paper p-1.5 border border-ink/[0.09] shadow-card">
              <Image
                src="/images/ghost/ghost_mascot_hero.jpg"
                alt="ExamGhost mascot"
                width={96}
                height={96}
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl object-cover"
              />
            </div>
          </div>
          <p className="text-lg sm:text-xl text-ink-secondary max-w-[64ch] leading-relaxed">
            ExamGhost is a Chrome extension that answers quiz and homework questions right on the page, with a
            step-by-step explanation when you want one. It is built and run by FoundryOne LLC in Albuquerque,
            New Mexico.
          </p>
        </div>
      </section>

      <section className="pb-14 sm:pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="rounded-2xl bg-paper border border-ink/[0.09] shadow-xs overflow-hidden">
            <div className="px-5 py-3 bg-surface-subtle border-b border-ink/[0.08] flex items-center justify-between">
              <span className="text-xs font-semibold text-ink-muted">Company &amp; product specification</span>
              <span className="font-mono text-[11px] text-ink-muted">FoundryOne LLC</span>
            </div>
            <dl className="divide-y divide-ink/[0.08]">
              {facts.map((f) => (
                <div key={f.label} className="px-5 py-3.5 sm:py-4 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6">
                  <dt className="sm:w-36 shrink-0 text-xs font-medium text-ink-muted">{f.label}</dt>
                  <dd className="text-[15px] font-medium text-ink">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="py-14 sm:py-20 bg-surface-subtle border-y border-ink/[0.08]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-[-0.025em] mb-4">How it works</h2>
          <p className="text-ink-secondary max-w-[64ch] leading-relaxed mb-6">
            Install the extension, open a quiz or homework page, and double-click a question. ExamGhost reads the
            question and options, asks an AI model, and shows the answer on the page.
          </p>
          <ul className="rounded-2xl bg-paper border border-ink/[0.09] divide-y divide-ink/[0.08] text-ink-secondary">
            <li className="px-5 py-4">
              <strong className="text-ink">Three answer styles.</strong> <kbd className="kbd-key">Alt+1</kbd> quick answer, <kbd className="kbd-key">Alt+2</kbd> highlight, <kbd className="kbd-key">Alt+3</kbd> explain.
            </li>
            <li className="px-5 py-4">
              <strong className="text-ink">Snap-It (<kbd className="kbd-key">Alt+S</kbd>).</strong> Draw a box around a graph, diagram or image and solve that.
            </li>
            <li className="px-5 py-4">
              <strong className="text-ink">Works on 20+ platforms,</strong> including Canvas, Blackboard, Moodle, D2L Brightspace and Google Forms.
            </li>
          </ul>
          <p className="text-ink-secondary leading-relaxed mt-6">
            Want to see it first? Try the{" "}
            <Link href="/canvas-quiz-solver-free-demo" className={link}>live demo</Link>{" "}
            or read the <Link href="/faq" className={link}>FAQ</Link>. Legal details are in the{" "}
            <Link href="/terms" className={link}>Terms</Link> and{" "}
            <Link href="/privacy" className={link}>Privacy Policy</Link>.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div className="rounded-r-2xl rounded-l-md bg-paper border border-ink/[0.09] border-l-4 border-l-cobalt p-6 sm:p-8 shadow-xs">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[-0.025em] mb-3">Use it responsibly</h2>
            <p className="text-ink-secondary max-w-[64ch] leading-relaxed">
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

      </main>
      <FinalCta />
      <Footer hideCta />
    </div>
  );
}
