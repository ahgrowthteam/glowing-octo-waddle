import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Reviews from "@/components/Reviews";
import DiscordSection from "@/components/DiscordSection";
import Footer from "@/components/Footer";

const Features = dynamic(() => import("@/components/Features"));
const DemoVideo = dynamic(() => import("@/components/DemoVideo"));
const GhostMode = dynamic(() => import("@/components/GhostMode"));
const QuestionExamples = dynamic(() => import("@/components/QuestionExamples"));
const Pricing = dynamic(() => import("@/components/Pricing"));
const FAQ = dynamic(() => import("@/components/FAQ"));

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://examghost.com/#webpage",
        "url": "https://examghost.com",
        "name": "ExamGhost — Invisible AI Quiz Solver for Canvas & Moodle",
        "description": "Double-click any question on Canvas, Blackboard, Moodle & 20+ platforms for 0.3s inline AI answers. Screen-share safe, Alt+S Snip OCR, 5 free solves/day, and a full Claude/ChatGPT/DeepSeek Study AI Hub.",
        "datePublished": "2026-01-15",
        "dateModified": "2026-03-29",
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://examghost.com/#website" },
        "about": { "@id": "https://examghost.com/#software" },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".aeo-summary", "#faq h3"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://examghost.com/#website",
        "url": "https://examghost.com",
        "name": "ExamGhost",
        "description": "The invisible AI quiz solver for Canvas, Blackboard, Moodle, and 20+ platforms. Double-click any question for instant answers inline.",
        "publisher": { "@id": "https://examghost.com/#organization" },
        "potentialAction": {
          "@type": "SearchAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://examghost.com/faq?q={search_term_string}"
          },
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://examghost.com/#organization",
        "name": "ExamGhost",
        "url": "https://examghost.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://examghost.com/images/ghost/ghost_mascot_hero.jpg",
          "width": 120,
          "height": 120
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@examghost.com",
          "contactType": "customer support",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://discord.gg/aCcsyKYJq4",
          "https://x.com/examghost",
          "https://github.com/examghost",
          "https://www.youtube.com/@examghost"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://examghost.com/#software",
        "name": "ExamGhost",
        "applicationCategory": "EducationalApplication",
        "operatingSystem": "Chrome, Edge, Brave, Arc, macOS, Windows",
        "description": "The invisible AI quiz solver for Canvas, Blackboard, Moodle, and 20+ LMSs. Double-click any question to solve inline, Snap-It sniping for locked diagrams, 3 stealth display modes, and 3 answer delivery methods.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "1240",
          "bestRating": "5",
          "worstRating": "1"
        },
        "offers": [
          {
            "@type": "Offer",
            "name": "Free Tier",
            "price": "0.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "description": "5 Free Solves / Day (Auto-Refills Every 24 Hours, no credit card required)",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Monthly Pass",
            "price": "19.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Yearly Academic Pass",
            "price": "99.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
            "availability": "https://schema.org/InStock"
          },
          {
            "@type": "Offer",
            "name": "Lifetime VIP Pass",
            "price": "199.00",
            "priceCurrency": "USD",
            "priceValidUntil": "2027-12-31",
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
              "text": "ExamGhost is an invisible AI quiz solver Chrome extension that helps students answer questions inline. Double-click any question on Canvas, Moodle, Blackboard, or 20+ other platforms and ExamGhost fills in the correct answer right on the page — with no tab-switching, no copy-pasting, and zero on-screen traces."
            }
          },
          {
            "@type": "Question",
            "name": "How does double-click solving work?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Open your exam on any supported platform, ensure ExamGhost is toggled on (⌘+Shift+U), and double-click any question. ExamGhost reads the question text and options directly from the page DOM and highlights or auto-fills the correct answer in under a second. Need step-by-step reasoning? Press Alt+3 to switch to Explain Mode and open the full explanation card."
            }
          },
          {
            "@type": "Question",
            "name": "What are the 3 display modes?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ExamGhost has three display modes you can pick in one click from the extension popup or via keyboard hotkeys: Invisible (Alt+1) applies the answer and copies it to clipboard with nothing shown on screen (0 cursor, 0 overlay, 100% screen-share safe); Stealth (Alt+2, default) auto-fills answers or marks the right option with a subtle ✓ tick; Explain (Alt+3) applies the answer and slides in a step-by-step reasoning card."
            }
          },
          {
            "@type": "Question",
            "name": "What are the 3 answer methods?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Choose how the answer lands on your quiz: Auto-Fill selects the right radio, checkbox, dropdown, or text input directly on the page; Highlight marks the correct option with a subtle ✓ indicator so you click it yourself; Clipboard silently copies the answer so you can paste it into short-answer or essay fields."
            }
          },
          {
            "@type": "Question",
            "name": "Can ExamGhost solve image-based questions and locked content?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Using Snap-It Sniping (Alt+S or clicking Launch Snip Tool in the popup), you can draw a crop box around any mathematical graph, calculus integral, organic chemistry diagram, or scanned PDF worksheet. Our hybrid Vision + DOM AI reads the image and returns the solution with step-by-step reasoning."
            }
          },
          {
            "@type": "Question",
            "name": "What platforms does ExamGhost work on?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "ExamGhost works on all major LMS platforms including Canvas (Classic and New Quizzes), Blackboard Learn & Ultra, Moodle, Google Classroom, D2L Brightspace, and Schoology, as well as homework platforms like Coursera, edX, Quizlet, McGraw-Hill Connect, Pearson MyLab, and Google Forms — plus any quiz site that runs in Chrome."
            }
          },
          {
            "@type": "Question",
            "name": "How do I turn ExamGhost on and off?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The extension stays completely dormant until you activate it — it never runs background polling loops. Toggle the Master Power Switch instantly using ⌘+Shift+U or the ON/OFF pill in the popup header. Switch modes with Alt+1 (Invisible), Alt+2 (Stealth), and Alt+3 (Explain), or trigger Snap-It Region Solve with Alt+S."
            }
          },
          {
            "@type": "Question",
            "name": "Why not just use ChatGPT?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Because switching tabs or copying and pasting during an exam is slow, stressful, and easily detected by proctoring software. ChatGPT requires opening a new tab, copying the question, pasting it, waiting, and switching back. ExamGhost answers directly on the exam page in two clicks without leaving the window."
            }
          },
          {
            "@type": "Question",
            "name": "Is ExamGhost free to start?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes! Every student gets 5 free question solves per day (auto-refills every 24 hours) immediately upon installing the extension. No credit card or billing details are required. You can test all 3 display modes (Alt+1, Alt+2, Alt+3), all 3 answer delivery methods, and Alt+S Snap-It Vision OCR before deciding whether to upgrade."
            }
          },
          {
            "@type": "Question",
            "name": "What pricing plans do you offer, and what is the Study & Homework AI Hub?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer three simple, honest plans: Monthly at $19/month (flexible, cancel anytime), Yearly Academic Pass at $99/year (our most popular plan, works out to $8.25/month for the full academic year), and Lifetime VIP at $199 (one-time payment, lifetime access). All paid plans include both unlimited stealth extension solves AND full access to the ExamGhost Study & Homework AI Workspace — a dedicated study chatbot powered by Claude 3.7 Sonnet, ChatGPT (GPT-4o / o3-mini), and DeepSeek-R1 for homework, essays, syllabus PDFs, and step-by-step LaTeX math proofs."
            }
          },
          {
            "@type": "Question",
            "name": "What is your refund policy?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We offer a 100% money-back guarantee. If ExamGhost does not perform exactly as promised on your quizzes, contact our 24/7 Discord support team within 14 days for a prompt, hassle-free refund."
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
