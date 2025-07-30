import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  ArrowRight,
  Sparkles,
  Clock,
  Users,
  Lightbulb,
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background font-display">
      <Header />

      <section className="pt-24 pb-20 bg-gradient-hero relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(31,248,45,0.25),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(31,248,45,0.15),transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_70%,rgba(31,248,45,0.2),transparent_50%)]" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <div className="mb-8 animate-fade-in">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/30 hover:bg-primary/10"
              asChild
            >
              <a href="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </a>
            </Button>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Main Content */}
            <div className="animate-fade-in-up">
              <div className="mb-6">
                <Sparkles className="h-16 w-16 text-primary mx-auto mb-4 animate-pulse" />
                <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
                  About Us
                </h1>
                <div className="flex items-center justify-center space-x-2 text-muted-foreground mb-6">
                  <Clock className="h-5 w-5" />
                  <span className="text-lg">Coming Soon</span>
                </div>
              </div>

              <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
                We're crafting an amazing story about our journey, mission, and
                the incredible team behind Vplus. Stay tuned for insights into
                how we're revolutionizing e-commerce with interactive video
                experiences.
              </p>

              {/* Feature Cards */}
              <div className="grid md:grid-cols-3 gap-6 mb-12">
                <Card className="bg-gradient-card border-primary/30 shadow-brand animate-fade-in-up">
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Our Team
                    </h3>
                    <p className="text-muted-foreground">
                      Meet the passionate innovators behind Vplus
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-primary/30 shadow-brand animate-fade-in-up">
                  <CardContent className="p-6 text-center">
                    <Lightbulb className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Our Mission
                    </h3>
                    <p className="text-muted-foreground">
                      Transforming how brands connect with customers
                    </p>
                  </CardContent>
                </Card>

                <Card className="bg-gradient-card border-primary/30 shadow-brand animate-fade-in-up">
                  <CardContent className="p-6 text-center">
                    <Sparkles className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      Our Story
                    </h3>
                    <p className="text-muted-foreground">
                      From idea to industry-changing innovation
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* CTA Card */}
              <div className="mt-32 animate-fade-in-up">
                <Card className="bg-gradient-card border-primary/30 shadow-brand relative overflow-hidden max-w-2xl mx-auto">
                  {/* Background Effects */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
                  <div className="absolute top-4 right-4 opacity-20">
                    <Sparkles className="h-12 w-12 text-primary animate-pulse" />
                  </div>

                  <CardContent className="p-8 text-center relative z-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                      What are you waiting for?
                    </h2>
                    <p className="text-muted-foreground mb-6">
                      Join thousands of Shopify merchants who have already
                      transformed their stores with interactive shoppable
                      videos. Start your journey today!
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                      <Button
                        size="lg"
                        className="bg-gradient-brand hover:opacity-90 shadow-brand"
                        asChild
                      >
                        <a
                          href="https://apps.shopify.com/shopclips-shoppable-clips"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2"
                        >
                          <span>Get Started</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </Button>

                      <Button
                        size="lg"
                        variant="outline"
                        className="border-primary/30 hover:bg-primary/10"
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
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUs;
