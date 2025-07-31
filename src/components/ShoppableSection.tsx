import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import floatVideo from "@/assets/float.mp4";
import reelsVideo from "@/assets/reels.mp4";
import storiesVideo from "@/assets/stories.mp4";

const ShoppableSection = () => {
  const features = [
    {
      title: "Shoppable Reels",
      description:
        "Shoppable reels transform short video content into a dynamic shopping platform, allowing viewers to discover and purchase products featured in the videos with just a click.",
      features: [
        "Real-time product tagging during video playback",
        "Mobile-optimized shopping experience with one-tap purchases",
      ],
      image: reelsVideo,
    },
    {
      title: "Shoppable Floats",
      description:
        "Shoppable floats provide an innovative way to showcase products through floating elements on a webpage, making it easy for customers to explore and buy items without disrupting their browsing experience.",
      features: [
        "Non-intrusive floating product displays that follow user scroll",
        "Customizable positioning and timing for optimal conversion rates",
      ],
      image: floatVideo,
    },
    {
      title: "Shoppable Stories",
      description:
        "Shoppable stories allow users to engage with interactive content that seamlessly integrates product links, enabling a smooth shopping experience directly from visual storytelling.",
      features: [
        "Interactive product hotspots with instant purchase options",
        "Seamless integration with your existing Shopify product catalog",
      ],
      image: storiesVideo,
    },
  ];

  return (
    <section className="py-20 bg-gradient-section relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-brand bg-clip-text text-transparent">
            Shoppable Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your content into interactive shopping experiences with
            our powerful shoppable features
          </p>
        </div>

        <div className="flex flex-col space-y-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              className="bg-gradient-card border-primary/20 shadow-card transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    <h3 className="text-3xl font-bold mb-6 bg-gradient-brand bg-clip-text text-transparent">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                      {feature.description}
                    </p>

                    {/* Feature Bullet Points */}
                    <div className="mb-8">
                      {feature.features.map((featurePoint, idx) => (
                        <div
                          key={idx}
                          className="flex items-start space-x-3 mb-4 justify-center lg:justify-start"
                        >
                          <Star className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                          <p className="text-base text-foreground leading-relaxed">
                            {featurePoint}
                          </p>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-3 sm:space-y-0 sm:space-x-4">
                      <Button
                        size="sm"
                        className="bg-gradient-brand hover:opacity-90 shadow-brand px-6"
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
                        size="sm"
                        variant="outline"
                        className="border-primary/30 hover:bg-primary/10 px-6"
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

                  {/* Media */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      {feature.image.endsWith(".mp4") ? (
                        <video
                          src={feature.image}
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full max-w-48 mx-auto rounded-lg"
                        />
                      ) : (
                        <img
                          src={feature.image}
                          alt={feature.title}
                          className="w-full max-w-48 mx-auto rounded-lg"
                        />
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShoppableSection;
