import { Button } from "@/components/ui/button";
import { Star, ExternalLink } from "lucide-react";
import TypewriterEffect from "./TypewriterEffect";
import logoSvg from "@/assets/shopclips-logo.svg";
import demoVideo from "@/assets/demo.mp4";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(31,248,45,0.25),transparent_60%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(31,248,45,0.25),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(31,248,45,0.15),transparent_40%)] dark:bg-[radial-gradient(circle_at_30%_30%,rgba(31,248,45,0.15),transparent_25%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(31,248,45,0.2),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_70%,rgba(31,248,45,0.2),transparent_35%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 items-center min-h-screen">
          {/* Video - Top on mobile, right on desktop */}
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <div className="relative max-w-[200px] sm:max-w-xs md:max-w-sm mx-auto lg:ml-auto lg:mr-0 lg:ml-28 mb-8 lg:mb-0 mt-20 lg:mt-12">
              <video
                className="w-full h-auto rounded-2xl shadow-2xl border border-border/30"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              >
                <source src={demoVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {/* Video overlay for better text contrast */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Text Content - Bottom on mobile, left on desktop */}
          <div className="order-2 lg:order-1 text-center lg:text-left lg:ml-24 animate-fade-in-up">
            {/* Logo and Brand */}
            <div className="flex items-center justify-center lg:justify-start mb-6 animate-fade-in">
              <img
                src={logoSvg}
                alt="Vplus"
                className="h-12 w-12 lg:h-16 lg:w-16 mx-0.5"
              />
              <span className="ml-2 text-3xl lg:text-4xl xl:text-6xl font-bold text-foreground">
                plus
              </span>
            </div>

            {/* Main Headline with Typewriter */}
            <div className="mb-6 animate-fade-in-up">
              <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-4 leading-tight">
                Your Goto for
              </h2>
              <div className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
                <TypewriterEffect
                  baseText="Shoppable"
                  words={["videos", "reels", "stories", "floats"]}
                  className="text-foreground"
                />
              </div>
            </div>

            {/* Subheadline */}
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-8 animate-fade-in-up px-4 lg:px-0">
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
              <div className="flex items-center justify-center lg:justify-start space-x-1 mb-8">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className="h-5 w-5 fill-primary text-primary"
                  />
                ))}
                <span className="ml-2 text-sm text-muted-foreground">
                  5/5 stars on Shopify
                </span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start space-y-4 sm:space-y-0 sm:space-x-4 animate-fade-in-up">
              <Button
                size="lg"
                className="bg-gradient-brand hover:opacity-90 shadow-brand text-lg px-8 py-3 w-full sm:w-auto"
                asChild
              >
                <a
                  href="https://calendly.com/abhinav-vplus/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a Demo
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-3 w-full sm:w-auto"
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
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
