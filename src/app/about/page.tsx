import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
  { label: "Product", value: "ExamGhost Chrome extension + Study & Homework AI Hub" },
  { label: "Operated by", value: "FoundryOne LLC" },
  { label: "Address", value: "1209 Mountain Road Pl NE, Ste N, Albuquerque, NM 87110, USA" },
  { label: "Support", value: "support@examghost.com · Discord" },
  { label: "Free tier", value: "5 free solves per day, no credit card" },
  { label: "Paid plans", value: "$19/month · $99/year · $199 lifetime" },
  { label: "Refunds", value: "14-day money-back guarantee" },
  { label: "Browsers", value: "Chrome, Edge, Brave, Arc (macOS & Windows)" },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar />

      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-24">
        <nav aria-label="Breadcrumb" className="text-xs text-ink-muted mb-6">
          <Link href="/" className="hover:text-ink">Home</Link> <span aria-hidden="true">/</span> About
        </nav>

        <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight mb-6">About ExamGhost</h1>

        {/* Answer-first summary: the passage most likely to be quoted */}
        <p className="aeo-summary text-lg sm:text-xl text-ink-secondary leading-relaxed mb-10">
          ExamGhost is a Chrome extension that answers quiz and homework questions directly on the page in
          Canvas, Blackboard, Moodle and 20+ other learning platforms, plus a study workspace that gives you
          Claude, ChatGPT and DeepSeek in one place. It is built and operated by FoundryOne LLC, a company based
          in Albuquerque, New Mexico.
        </p>

        <dl className="grid sm:grid-cols-2 gap-px bg-black/10 rounded-2xl overflow-hidden border border-black/10 mb-14">
          {facts.map((f) => (
            <div key={f.label} className="bg-white p-4">
              <dt className="text-[11px] font-semibold uppercase tracking-wider text-ink-muted mb-1">{f.label}</dt>
              <dd className="text-sm font-medium text-ink">{f.value}</dd>
            </div>
          ))}
        </dl>

        <section className="mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">Who is behind ExamGhost?</h2>
          <p className="text-ink-secondary leading-relaxed">
            ExamGhost is a product of FoundryOne LLC, registered at 1209 Mountain Road Pl NE, Ste N, Albuquerque,
            NM 87110. FoundryOne LLC owns the extension, the website and the ExamGhost mascot artwork, and is the
            entity you contract with when you buy a plan. Our full legal terms are in the{" "}
            <Link href="/terms" className="underline underline-offset-2 hover:text-ink">Terms of Service</Link> and
            the{" "}
            <Link href="/privacy" className="underline underline-offset-2 hover:text-ink">Privacy Policy</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">How does ExamGhost work?</h2>
          <p className="text-ink-secondary leading-relaxed mb-4">
            You install the extension in Chrome or another Chromium browser and switch it on when you need it.
            Double-clicking a question reads the question text and answer options from the page and returns an
            answer in place, so you don&apos;t have to copy it into a separate chat tab. For images, graphs and
            scanned worksheets, the Snap-It tool (Alt+S) lets you draw a box around the content to read it with
            vision AI.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-ink-secondary">
            <li><strong className="text-ink">Display modes:</strong> Invisible (Alt+1), Stealth (Alt+2) and Explain (Alt+3), which adds a step-by-step explanation.</li>
            <li><strong className="text-ink">Answer methods:</strong> auto-fill, highlight, or copy to clipboard.</li>
            <li><strong className="text-ink">Study Hub:</strong> paid plans include a workspace with Claude, ChatGPT and DeepSeek for essays, PDFs and worked math.</li>
          </ul>
          <p className="text-ink-secondary leading-relaxed mt-4">
            Try it without installing anything in the{" "}
            <Link href="/canvas-quiz-solver-free-demo" className="underline underline-offset-2 hover:text-ink">interactive demo</Link>
            , or read the full list of capabilities on the{" "}
            <Link href="/features" className="underline underline-offset-2 hover:text-ink">features page</Link>.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">What does ExamGhost cost?</h2>
          <p className="text-ink-secondary leading-relaxed">
            Every account gets 5 free solves per day, refilled every 24 hours, with no credit card required. Paid
            plans are $19 per month, $99 per year (about $8.25 per month) or $199 once for lifetime access. Every
            paid plan is covered by a 14-day money-back guarantee: email support@examghost.com or message us on
            Discord within 14 days of purchase for a full refund.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">Which platforms does it support?</h2>
          <p className="text-ink-secondary leading-relaxed">
            ExamGhost works on Canvas (Classic and New Quizzes), Blackboard Learn and Ultra, Moodle, D2L
            Brightspace, Schoology and Google Classroom, as well as homework platforms such as McGraw-Hill
            Connect, Pearson MyLab, Cengage, WebAssign, Coursera, edX and Google Forms. See the{" "}
            <Link href="/compare-canvas-hack-extensions" className="underline underline-offset-2 hover:text-ink">comparison hub</Link>{" "}
            for how it differs from other extensions.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold mb-3">Using ExamGhost responsibly</h2>
          <p className="text-ink-secondary leading-relaxed">
            Schools set their own rules for what help is allowed on graded work. You are responsible for
            following your institution&apos;s academic-integrity policy and your instructor&apos;s instructions.
            Explain mode and the Study Hub are built for practice, review and understanding how an answer is
            reached.
          </p>
        </section>

        <section className="rounded-2xl bg-white border border-black/10 p-6 sm:p-8">
          <h2 className="font-display text-xl sm:text-2xl font-bold mb-2">How can I contact ExamGhost?</h2>
          <p className="text-ink-secondary leading-relaxed mb-5">
            Email <a href="mailto:support@examghost.com" className="underline underline-offset-2 hover:text-ink">support@examghost.com</a>{" "}
            or join the student Discord for help with activation, billing and refunds.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-dark px-6 py-3 text-sm">Contact support</Link>
            <Link href="/faq" className="btn-soft px-6 py-3 text-sm">Read the FAQ</Link>
          </div>
        </section>
      </article>

      <Footer />
    </main>
  );
}
