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
  return (
    <main className="min-h-screen bg-cream text-ink">
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
