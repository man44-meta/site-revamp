import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ShoppableSection from "@/components/ShoppableSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import GetStartedSection from "@/components/GetStartedSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-display">
      <Header />
      <HeroSection />
      <ShoppableSection />
      <HowItWorksSection />
      <GetStartedSection />
      <StatsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
