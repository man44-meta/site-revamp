import { Card, CardContent } from '@/components/ui/card';
import { 
  Zap, 
  Download, 
  BarChart3, 
  Smartphone 
} from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "Optimized for mobile web. Doesn't affect your site speed or Lighthouse scores. No need to worry about your SEO."
  },
  {
    icon: Download,
    title: "One-Click Migration/Import",
    description: "From your Instagram reels, TikTok, or upload in bulk from your device. We support all major formats."
  },
  {
    icon: BarChart3,
    title: "Insightful Analytics",
    description: "End to end analytics that cover engagement and conversion funnels. Get a complete overview of your users."
  },
  {
    icon: Smartphone,
    title: "Easy Integration",
            description: "Download Shopify App → Upload videos → Arrange them in an order → Tag Products → Ready for launch!"
  }
];

const GetStartedSection = () => {
  return (
    <section className="py-20 bg-gradient-section relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get Started by yourself in under 10 minutes!
          </h2>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Best way to grow is by converting more people who are already visiting your website! 
            Simply improves the website efficiency, without spending a dime on products or marketing!
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
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

export default GetStartedSection;