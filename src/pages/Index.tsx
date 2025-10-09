import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Screenshots } from "@/components/Screenshots";
import { HowItWorks } from "@/components/HowItWorks";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <Screenshots />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
