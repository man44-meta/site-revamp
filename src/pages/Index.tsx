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
import { FadeInSection } from "@/components/FadeInSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-display">
      <Header />
      <HeroSection />
      <FadeInSection delay={0}>
        <ShoppableSection />
      </FadeInSection>
      <FadeInSection delay={50}>
        <HowItWorksSection />
      </FadeInSection>
      <FadeInSection delay={100}>
        <GetStartedSection />
      </FadeInSection>
      <FadeInSection delay={150}>
        <StatsSection />
      </FadeInSection>
      <FadeInSection delay={200}>
        <TestimonialsSection />
      </FadeInSection>
      <FadeInSection delay={250}>
        <PricingSection />
      </FadeInSection>
      <FadeInSection delay={300}>
        <CTASection />
      </FadeInSection>
      <FadeInSection delay={350}>
        <FAQSection />
      </FadeInSection>
      <Footer />
    </div>
  );
};

export default Index;
