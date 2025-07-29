import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-section relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-card border-primary/30 shadow-brand relative overflow-hidden animate-scale-in">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent" />
            <div className="absolute top-4 right-4 opacity-20">
              <Sparkles className="h-12 w-12 text-primary animate-pulse" />
            </div>
            
            <CardContent className="p-12 text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What are you waiting for?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of Shopify merchants who have already transformed their stores 
                with interactive shoppable videos. Start your journey today!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <Button 
                  size="lg"
                  className="bg-gradient-brand hover:opacity-90 shadow-brand text-lg px-8 py-3 group"
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
                  className="border-primary/30 hover:bg-primary/10 text-lg px-8 py-3"
                >
                  Book a Demo
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;