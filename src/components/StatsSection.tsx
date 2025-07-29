import { Card, CardContent } from '@/components/ui/card';
import { TrendingUp, Zap, Clock } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    title: "20% Increase",
    subtitle: "Conversion Rates",
    description: "Average increase in conversion rates after implementing Vplus shoppable videos",
    color: "text-primary"
  },
  {
    icon: Zap,
    title: "100% Speed",
    subtitle: "Site Performance",
    description: "Maintain perfect site load times with our optimized video delivery system",
    color: "text-primary"
  },
  {
    icon: Clock,
    title: "10 Minutes",
    subtitle: "Setup Time",
    description: "From installation to first shoppable video - get started faster than ever",
    color: "text-primary"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-gradient-section relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Results That Speak for Themselves
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of Shopify stores that have transformed their customer experience
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card 
              key={index}
              className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow group animate-scale-in text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-8">
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <stat.icon className={`h-8 w-8 ${stat.color}`} />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-foreground mb-2">
                  {stat.title}
                </h3>
                <p className="text-lg font-medium text-primary mb-4">
                  {stat.subtitle}
                </p>
                <p className="text-muted-foreground">
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;