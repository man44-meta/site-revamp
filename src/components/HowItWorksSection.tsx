import { Card, CardContent } from '@/components/ui/card';
import { 
  Video, 
  ShoppingCart, 
  Clock, 
  Zap, 
  Palette, 
  TrendingUp 
} from 'lucide-react';

const features = [
  {
    icon: Video,
    title: "Convince customers with your best content",
    description: "Showcase your products through engaging video content that tells your brand story and builds trust."
  },
  {
    icon: TrendingUp,
    title: "Increase time on site and engagement",
    description: "Keep visitors engaged longer with interactive video content that drives higher conversion rates."
  },
  {
    icon: ShoppingCart,
    title: "Add videos to any page",
    description: "Seamlessly integrate shoppable videos across your entire store - homepage, product pages, collections."
  },
  {
    icon: Zap,
    title: "No impact on site load time",
    description: "Our optimized delivery ensures your site speed remains blazing fast while adding rich video content."
  },
  {
    icon: Palette,
    title: "Complete customisation and branding",
    description: "Match your brand perfectly with full control over colors, layouts, and interactive elements."
  },
  {
    icon: Clock,
    title: "Quick setup in minutes",
    description: "Get up and running instantly with our simple installation and intuitive video management system."
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-20 bg-gradient-section relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            How does it work?
          </h2>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            Boost your Shopify store sales with interactive and shoppable videos
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Vplus can take your shopify store to the next level by adding shoppable videos, 
            which simplifies the process of finding and purchasing your products, resulting in a 
            better shopping experience for your customers.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;