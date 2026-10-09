import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Features from "@/components/Features";
import GhostMode from "@/components/GhostMode";
import QuestionExamples from "@/components/QuestionExamples";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream text-ink">
      <Navbar />
      <Hero />
      <Integrations />
      <Features />
      <GhostMode />
      <QuestionExamples />
      <Reviews />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
