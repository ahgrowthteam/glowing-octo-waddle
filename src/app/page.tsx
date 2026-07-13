import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import GhostMode from "@/components/GhostMode";
import Integrations from "@/components/Integrations";
import Features from "@/components/Features";
import QuestionExamples from "@/components/QuestionExamples";
import Reviews from "@/components/Reviews";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Integrations />
      <GhostMode />
      <Features />
      <QuestionExamples />
      <Reviews />
      <Pricing />
      <FAQ />
      <Footer />
    </>
  );
}
