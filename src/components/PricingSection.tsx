import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

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

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 bg-gradient-section relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pricing
          </h2>
          <p className="text-lg text-muted-foreground">
            Choose the perfect plan for your store's growth
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow animate-fade-in-up ${
                plan.popular ? "border-primary/50 shadow-brand" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
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
                  className={`w-full ${index === 0 ? "mt-[7.2rem]" : ""}`}
                  variant={plan.popular ? "default" : "trial"}
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
      </div>
    </section>
  );
};

export default PricingSection;
