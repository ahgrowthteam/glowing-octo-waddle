import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Features from "@/components/Features";
import DemoVideo from "@/components/DemoVideo";
import GhostMode from "@/components/GhostMode";
import QuestionExamples from "@/components/QuestionExamples";
import Reviews from "@/components/Reviews";
import DiscordSection from "@/components/DiscordSection";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://examghost.com/#website",
        "url": "https://examghost.com",
        "name": "ExamGhost",
        "description": "The invisible AI quiz solver for Canvas, Blackboard, Moodle, and 20+ platforms. Double-click any question for instant answers inline."
      },
      {
        "@type": "Organization",
        "@id": "https://examghost.com/#organization",
        "name": "ExamGhost",
        "url": "https://examghost.com",
        "logo": "https://examghost.com/images/ghost/ghost_mascot_hero.jpg",
        "sameAs": ["https://discord.gg/aCcsyKYJq4"]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://examghost.com/#software",
        "name": "ExamGhost",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Chrome, Edge, Brave, Arc, macOS, Windows",
        "description": "The invisible AI quiz solver for Canvas, Blackboard, Moodle, and 20+ LMSs. Double-click any question to solve inline, Snap-It sniping for locked diagrams, 3 stealth display modes, and 3 answer delivery methods.",
        "offers": [
          {
            "@type": "Offer",
            "name": "Free Trial",
            "price": "0",
            "priceCurrency": "USD",
            "description": "50 Free Question Solves, no credit card required",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Monthly Pass",
            "price": "19.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Yearly Academic Pass",
            "price": "99.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Lifetime VIP Pass",
            "price": "199.00",
            "priceCurrency": "USD",
            "availability": "https://schema.org/InStock"
          }
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://examghost.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What is ExamGhost?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ExamGhost is an invisible AI quiz solver Chrome extension that answers questions inline. Double-click any question on Canvas, Moodle, Blackboard, or 20+ platforms and the correct answer fills in on the page with no tab-switching or copy-pasting."
            }
          },
          {
            "@type": "Question",
            "name": "How does double-click solving work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Open your exam, toggle ExamGhost on with ⌘+Shift+U, and double-click any question. ExamGhost reads the question text and options directly from the page DOM and highlights or auto-fills the correct answer in under a second."
            }
          },
          {
            "@type": "Question",
            "name": "What are the 3 display modes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Invisible mode applies answers with zero on-screen traces for screen-shares; Stealth mode (default) shows a quiet micro-cursor while solving; Explain mode applies the answer and displays full step-by-step reasoning."
            }
          },
          {
            "@type": "Question",
            "name": "What are the 3 answer delivery methods?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Auto-fill selects the right choice directly on the page; Highlight glows on the correct option for 1–10 seconds so you click it yourself; Clipboard silently copies the answer for essay and short-answer prompts."
            }
          },
          {
            "@type": "Question",
            "name": "Can ExamGhost solve image-based questions and locked content?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Snap-It Sniping (⌘+Shift+S) lets you draw a crop box around equations, chemical structures, diagrams, and locked PDFs. Multimodal AI reads the image and returns the solution with step-by-step reasoning."
            }
          },
          {
            "@type": "Question",
            "name": "What platforms does ExamGhost work on?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ExamGhost works on Canvas (Classic & New Quizzes), Blackboard Learn & Ultra, Moodle, Google Classroom, D2L Brightspace, Coursera, edX, Quizlet, McGraw-Hill Connect, Pearson MyLab, and any web quiz in Chrome."
            }
          },
          {
            "@type": "Question",
            "name": "Is ExamGhost free to start?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Every student gets 50 free question solves immediately upon installing the extension. No credit card or billing details required."
            }
          },
          {
            "@type": "Question",
            "name": "What pricing plans do you offer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer Monthly at $19/month, Yearly Academic Pass at $99/year ($8.25/month), and Lifetime VIP at $199 one-time. All paid plans include unlimited question solves and priority speed."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-cream text-ink">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Navbar />
      <Hero />
      <Integrations />
      <Features />
      <DemoVideo />
      <GhostMode />
      <QuestionExamples />
      <Reviews />
      <DiscordSection />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
