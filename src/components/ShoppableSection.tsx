import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import floatSvg from "@/assets/float.svg";
import reelsSvg from "@/assets/reels.svg";
import storiesSvg from "@/assets/stories.svg";

const ShoppableSection = () => {
  const features = [
    {
      title: "Shoppable Stories",
      description:
        "Shoppable stories allow users to engage with interactive content that seamlessly integrates product links, enabling a smooth shopping experience directly from visual storytelling.",
      features: [
        "Interactive product hotspots with instant purchase options",
        "Seamless integration with your existing Shopify product catalog",
      ],
      image: storiesSvg,
      imageLeft: true,
    },
    {
      title: "Shoppable Reels",
      description:
        "Shoppable reels transform short video content into a dynamic shopping platform, allowing viewers to discover and purchase products featured in the videos with just a click.",
      features: [
        "Real-time product tagging during video playback",
        "Mobile-optimized shopping experience with one-tap purchases",
      ],
      image: reelsSvg,
      imageLeft: false,
    },
    {
      title: "Shoppable Floats",
      description:
        "Shoppable floats provide an innovative way to showcase products through floating elements on a webpage, making it easy for customers to explore and buy items without disrupting their browsing experience.",
      features: [
        "Non-intrusive floating product displays that follow user scroll",
        "Customizable positioning and timing for optimal conversion rates",
      ],
      image: floatSvg,
      imageLeft: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-section relative">
      <div className="container mx-auto px-4">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex flex-col lg:flex-row items-center gap-12 mb-20 last:mb-0 animate-fade-in-up`}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            {/* Image */}
            <div
              className={`flex-1 ${
                feature.imageLeft ? "lg:order-1" : "lg:order-2"
              }`}
            >
              <div className="relative">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="w-full max-w-56 mx-auto rounded-2xl shadow-card"
                />
              </div>
            </div>

            {/* Content */}
            <div
              className={`flex-1 text-center lg:text-left ${
                feature.imageLeft ? "lg:order-2" : "lg:order-1"
              }`}
            >
              <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-brand bg-clip-text text-transparent">
                {feature.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {feature.description}
              </p>

              {/* Feature Bullet Points */}
              <div className="mb-8">
                {feature.features.map((featurePoint, idx) => (
                  <div key={idx} className="flex items-start space-x-3 mb-3">
                    <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-base text-foreground leading-relaxed">
                      {featurePoint}
                    </p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Button
                  size="lg"
                  className="bg-gradient-brand hover:opacity-90 shadow-brand text-lg px-8 py-3"
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
          </div>
        ))}
      </div>
    </section>
  );
};

export default ShoppableSection;
