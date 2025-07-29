import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";
import TypewriterEffect from "./TypewriterEffect";
import logoSvg from "@/assets/shopclips-logo.svg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(31,248,45,0.25),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(31,248,45,0.15),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(31,248,45,0.2),transparent_50%)]" />

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Logo and Brand */}
        <div className="flex items-center justify-center mb-6 animate-fade-in">
          <img src={logoSvg} alt="Vplus" className="h-16 w-16 mx-0.5" />
          <span className="ml-2 text-4xl md:text-6xl font-bold text-foreground">
            plus
          </span>
        </div>

        {/* Main Headline with Typewriter */}
        <div className="mb-6 animate-fade-in-up">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
            Your Goto for
          </h2>
          <div className="text-3xl md:text-5xl lg:text-6xl font-bold">
            <TypewriterEffect
              baseText="Shoppable"
              words={["videos", "reels", "stories", "floats"]}
              className="text-foreground"
            />
          </div>
        </div>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up">
          Transform your Shopify store with interactive video content that
          converts browsers into buyers
        </p>

        {/* Shopify App Store Button */}
        <div className="mb-6 animate-fade-in-up">
          <Button
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 mb-4"
            asChild
          >
            <a
              href="https://apps.shopify.com/shopclips-shoppable-clips"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <span>Find us on the Shopify App Store</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>

          {/* 5 Stars Rating */}
          <div className="flex items-center justify-center space-x-1 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-5 w-5 fill-primary text-primary" />
            ))}
            <span className="ml-2 text-sm text-muted-foreground">
              5/5 stars on Shopify
            </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up">
          <Button
            size="lg"
            className="bg-gradient-brand hover:opacity-90 shadow-brand text-lg px-8 py-3"
          >
            Book a Demo
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-3"
            asChild
          >
            <a
              href="https://apps.shopify.com/shopclips-shoppable-clips"
              target="_blank"
              rel="noopener noreferrer"
            >
              Start for Free
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
