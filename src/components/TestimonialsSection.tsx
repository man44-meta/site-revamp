import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Fashion Forward",
    rating: 5,
    text: "Vplus transformed our conversion rates! Our customers love the interactive video experience."
  },
  {
    name: "Mike Chen",
    company: "Tech Gadgets Pro",
    rating: 5,
    text: "Setup was incredibly easy and the results were immediate. 30% increase in engagement within the first week!"
  },
  {
    name: "Emily Rodriguez",
    company: "Home & Garden Co",
    rating: 5,
    text: "The best investment we've made for our Shopify store. Customer feedback has been overwhelmingly positive."
  },
  {
    name: "David Thompson",
    company: "Sports Equipment Plus",
    rating: 5,
    text: "Finally, a solution that doesn't slow down our site but dramatically improves our sales funnel."
  },
  {
    name: "Lisa Wang",
    company: "Beauty Essentials",
    rating: 5,
    text: "Our customers are spending 3x more time on product pages since we added Vplus videos."
  },
  {
    name: "James Miller",
    company: "Outdoor Adventures",
    rating: 5,
    text: "The analytics insights help us understand customer behavior like never before. Highly recommend!"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-section relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of satisfied merchants who've transformed their stores
          </p>
        </div>

        {/* Continuous Marquee */}
        <div className="relative">
          <div className="flex space-x-6 animate-marquee">
            {/* First set of testimonials */}
            {testimonials.map((testimonial, index) => (
              <Card 
                key={`first-${index}`}
                className="bg-gradient-card border-border/50 flex-shrink-0 w-80 hover:shadow-glow transition-shadow"
              >
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <Card 
                key={`second-${index}`}
                className="bg-gradient-card border-border/50 flex-shrink-0 w-80 hover:shadow-glow transition-shadow"
              >
                <CardContent className="p-6">
                  {/* Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;