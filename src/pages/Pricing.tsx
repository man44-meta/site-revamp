import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star, ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "FREE Forever",
    price: "Free",
    period: "",
    description: "Perfect for getting started",
    features: [
      "500 Views/month",
      "Unlimited Videos",
      "Unlimited Impressions",
      "All features",
      "Basic Customisation",
      "Basic Analytics",
      "Basic Support for 1 month",
    ],
    popular: false,
    cta: "Get Started Free",
    ctaLink: "https://apps.shopify.com/shopclips-shoppable-clips",
  },
  {
    name: "Basic",
    price: "$29",
    period: "/month",
    yearlyPrice: "$299/year and save 14%",
    additional: "$2 per 500 Additional Views",
    description: "Great for growing businesses",
    features: [
      "7,500 Views/month",
      "Unlimited Videos",
      "Unlimited Impressions",
      "Unlimited Product Tag",
      "All features",
      "Basic Customisation",
      "Basic Analytics",
      "Basic Support",
    ],
    trial: "14-day free trial",
    popular: false,
    cta: "Start Free Trial",
    ctaLink: "https://apps.shopify.com/shopclips-shoppable-clips",
  },
  {
    name: "Advanced",
    price: "$99",
    period: "/month",
    yearlyPrice: "$999/year and save 16%",
    additional: "$2 per 500 Additional Views",
    description: "Perfect for scaling stores",
    features: [
      "25,000 Views/month",
      "Unlimited Videos",
      "Unlimited Impressions",
      "Unlimited Product Tagging",
      "All features",
      "Advanced Customisation",
      "Premium Support",
      "Growth Based Analytics",
    ],
    trial: "14-day free trial",
    popular: true,
    cta: "Start Free Trial",
    ctaLink: "https://apps.shopify.com/shopclips-shoppable-clips",
  },
  {
    name: "Plus",
    price: "$299",
    period: "/month",
    yearlyPrice: "$2,999/year and save 16%",
    additional: "$2 per 500 Additional Views",
    description: "For enterprise level stores",
    features: [
      "75,000 Views/month",
      "Unlimited Videos",
      "Unlimited Impressions",
      "Unlimited Product Tagging",
      "All features",
      "Full Customisation",
      "Advanced Analytics + Insights",
      "Dedicated Account Manager",
    ],
    trial: "14-day free trial",
    popular: false,
    cta: "Start Free Trial",
    ctaLink: "https://apps.shopify.com/shopclips-shoppable-clips",
  },
];

const comparisonFeatures = [
  {
    feature: "Monthly Views",
    free: "500",
    basic: "7,500",
    advanced: "25,000",
    plus: "75,000",
  },
  {
    feature: "Unlimited Videos",
    free: "✓",
    basic: "✓",
    advanced: "✓",
    plus: "✓",
  },
  {
    feature: "Unlimited Impressions",
    free: "✓",
    basic: "✓",
    advanced: "✓",
    plus: "✓",
  },
  {
    feature: "Product Tagging",
    free: "Basic",
    basic: "Unlimited",
    advanced: "Unlimited",
    plus: "Unlimited",
  },
  {
    feature: "Customisation",
    free: "Basic",
    basic: "Basic",
    advanced: "Advanced",
    plus: "Full",
  },
  {
    feature: "Analytics",
    free: "Basic",
    basic: "Basic",
    advanced: "Growth Based",
    plus: "Advanced + Insights",
  },
  {
    feature: "Support",
    free: "1 month",
    basic: "Basic",
    advanced: "Premium",
    plus: "Dedicated Manager",
  },
  {
    feature: "Free Trial",
    free: "N/A",
    basic: "14 days",
    advanced: "14 days",
    plus: "14 days",
  },
];

const Pricing = () => {
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
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>

          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pricing Plans
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect plan for your store's growth. All plans include
              a 14-day free trial.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className={`relative bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow animate-fade-in-up ${
                  plan.popular ? "border-primary/50 shadow-brand" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-brand text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center space-x-1">
                      <Star className="h-3 w-3 fill-current" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <CardHeader className="text-center pb-4">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-foreground">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  {plan.yearlyPrice && (
                    <p className="text-sm text-primary">{plan.yearlyPrice}</p>
                  )}
                  {plan.additional && (
                    <p className="text-xs text-muted-foreground mt-1">
                      {plan.additional}
                    </p>
                  )}
                  <p className="text-sm text-muted-foreground">
                    {plan.description}
                  </p>
                </CardHeader>

                <CardContent className="pt-0">
                  {/* Features List */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start space-x-2"
                      >
                        <Check className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Trial Info */}
                  {plan.trial && (
                    <p className="text-sm text-primary font-medium mb-4 text-center">
                      {plan.trial}
                    </p>
                  )}

                  {/* CTA Button */}
                  <Button
                    className="w-full"
                    variant={plan.popular ? "default" : "outline"}
                    asChild
                  >
                    <a
                      href={plan.ctaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {plan.cta}
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="animate-fade-in-up">
            {/* <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Detailed Comparison
              </h2>
              <p className="text-muted-foreground">
                Compare all features across our pricing plans
              </p>
            </div> */}

            <Card className="bg-gradient-card border-primary/30 shadow-brand overflow-hidden">
              <CardContent className="p-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/50">
                        <th className="text-left p-4 font-semibold text-foreground">
                          Feature
                        </th>
                        <th className="text-center p-4 font-semibold text-foreground">
                          Free
                        </th>
                        <th className="text-center p-4 font-semibold text-foreground">
                          Basic
                        </th>
                        <th className="text-center p-4 font-semibold text-foreground bg-primary/10">
                          Advanced
                        </th>
                        <th className="text-center p-4 font-semibold text-foreground">
                          Plus
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonFeatures.map((feature, index) => (
                        <tr
                          key={index}
                          className="border-b border-border/30 hover:bg-background/50"
                        >
                          <td className="p-4 font-medium text-foreground">
                            {feature.feature}
                          </td>
                          <td className="p-4 text-center text-muted-foreground">
                            {feature.free}
                          </td>
                          <td className="p-4 text-center text-muted-foreground">
                            {feature.basic}
                          </td>
                          <td className="p-4 text-center text-muted-foreground bg-primary/5">
                            {feature.advanced}
                          </td>
                          <td className="p-4 text-center text-muted-foreground">
                            {feature.plus}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="mt-32 animate-fade-in-up">
            <Card className="bg-gradient-card border-primary/30 shadow-brand relative overflow-hidden max-w-2xl mx-auto">
              {/* Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
              <div className="absolute top-4 right-4 opacity-20">
                <Sparkles className="h-12 w-12 text-primary animate-pulse" />
              </div>

              <CardContent className="p-8 text-center relative z-10">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Ready to Get Started?
                </h2>
                <p className="text-muted-foreground mb-6">
                  Join thousands of Shopify merchants who have already
                  transformed their stores with interactive shoppable videos.
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
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
