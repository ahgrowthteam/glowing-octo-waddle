import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeHero from "@/components/home/HomeHero";
import PlatformStrip from "@/components/home/PlatformStrip";
import TryDemo from "@/components/home/TryDemo";
import FeatureDemos from "@/components/home/FeatureDemos";
import QuestionGrid from "@/components/home/QuestionGrid";
import AnswerStyles from "@/components/home/AnswerStyles";
import GuideVideo from "@/components/home/GuideVideo";
import Difference from "@/components/home/Difference";
import HowItWorks from "@/components/home/HowItWorks";
import HomePricing from "@/components/home/HomePricing";
import HomeFaq from "@/components/home/HomeFaq";
import CommunitySection from "@/components/home/CommunitySection";
import FinalCta from "@/components/home/FinalCta";
import { HOME_FAQS } from "@/components/home/homeFaqs";

export default function Home() {
  const homeJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.examghost.com/#webpage",
        "url": "https://www.examghost.com",
        "name": "ExamGhost: AI Quiz Solver Chrome Extension, Free Plan",
        "description": "Double-click a quiz or homework question for an AI answer and explanation, or snip graphs with Alt+S. Works on Canvas, Blackboard & more. Free plan.",
        "datePublished": "2026-01-15",
        "dateModified": "2026-11-19",
        "inLanguage": "en-US",
        "isPartOf": { "@id": "https://www.examghost.com/#website" },
        "about": { "@id": "https://www.examghost.com/#software" },
        "speakable": {
          "@type": "SpeakableSpecification",
          "cssSelector": ["h1", ".aeo-summary", "#faq h3"]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://www.examghost.com/#website",
        "url": "https://www.examghost.com",
        "name": "ExamGhost",
        "description": "AI Chrome extension for quiz and homework questions on Canvas, Blackboard, Moodle and more. Double-click a question for an answer and explanation.",
        "publisher": { "@id": "https://www.examghost.com/#organization" }
      },
      {
        "@type": "Organization",
        "@id": "https://www.examghost.com/#organization",
        "name": "ExamGhost",
        "legalName": "FoundryOne LLC",
        "url": "https://www.examghost.com",
        "email": "support@examghost.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "1209 Mountain Road Pl NE, Ste N",
          "addressLocality": "Albuquerque",
          "addressRegion": "NM",
          "postalCode": "87110",
          "addressCountry": "US"
        },
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.examghost.com/icon-512.png",
          "width": 512,
          "height": 512
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "email": "support@examghost.com",
          "contactType": "customer support",
          "availableLanguage": "English"
        },
        "sameAs": [
          "https://discord.gg/aCcsyKYJq4",
          "https://www.youtube.com/@examghost"
        ]
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.examghost.com/#software",
        "name": "ExamGhost",
        "applicationCategory": "EducationalApplication",
        "featureList": [
          "Works on 20 named quiz and homework platforms",
          "Alt+S screenshot solving for any page you can see",
          "Double-click answers with step-by-step explanations",
          "Free tier with 5 solves a day; unlimited solves on paid plans"
        ],
        "operatingSystem": "Chrome, Edge, Brave, Arc, macOS, Windows",
        "description": "AI Chrome extension that answers quiz and homework questions on the page. Double-click a question for an answer and explanation, or press Alt+S to solve graphs and diagrams from a screenshot. Free plan available.",
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
        "@id": "https://www.examghost.com/#faq",
        "mainEntity": HOME_FAQS.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a }
        }))
      }
    ]
  };

  return (
    <main id="main-content" className="min-h-screen bg-cream text-ink page-glow">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeJsonLd) }}
      />
      <Navbar />
      <HomeHero />
      <PlatformStrip />
      <HowItWorks />
      <TryDemo />
      <GuideVideo />
      <QuestionGrid />
      <AnswerStyles />
      <FeatureDemos />
      <Difference />
      <HomePricing />
      <HomeFaq />
      <CommunitySection />
      <FinalCta secondary="demo" />
      <Footer hideCta />
    </main>
  );
}
