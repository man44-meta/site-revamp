import { Card, CardContent } from '@/components/ui/card';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    name: "Urbn World",
    company: "Urbn World",
    rating: 5,
    text: "Adding product videos directly to our site was incredibly easy. The interface is clean, intuitive, and requires minimal technical expertise. We also noticed a tangible increase in user engagement and time spent on product pages after embedding videos."
  },
  {
    name: "The Minimal Strokes",
    company: "The Minimal Strokes",
    rating: 5,
    text: "Shopclips has really helped us make our store more engaging. We started using it for UGC videos, and we instantly saw more clicks on the products. It's super smooth to use and looks great on the site!"
  },
  {
    name: "Vergo",
    company: "Vergo",
    rating: 5,
    text: "Shopclip has been a great add-on! The shoppable videos make our store more interactive, and the app's easy-to-use interface and customization options are a big plus."
  },
  {
    name: "The Little Farm Co.",
    company: "The Little Farm Co.",
    rating: 5,
    text: "Integrating Shopclips into our website has been a game-changer. The video content we added through Shopclips has boosted customer engagement and helped us communicate our product value more effectively."
  },
  {
    name: "WANDERLOOMS",
    company: "WANDERLOOMS",
    rating: 5,
    text: "Amazing app! Super easy to use and works well. It lets us add videos to our website easily, and the videos make our store look more lively and engaging."
  },
  {
    name: "Boombay",
    company: "Boombay",
    rating: 5,
    text: "Super easy to use, and adding videos to our site has made it feel way more lively and engaging."
  },
  {
    name: "My Family Farmer",
    company: "My Family Farmer",
    rating: 5,
    text: "Thanks to ShopClips, my store now offers a modern, video-first shopping experience. The way it integrates short, engaging video clips directly onto my product pages is brilliant."
  },
  {
    name: "Lumy",
    company: "Lumy",
    rating: 5,
    text: "Shopclips has been phenomenal in how we engage customers on our product pages. Embedding shoppable videos with direct 'Add to Cart' CTAs has boosted our conversion rates and drastically improved time on site."
  },
  {
    name: "Gavyamart Store",
    company: "Gavyamart Store",
    rating: 5,
    text: "We've been using the Shop Clips Video App on our Shopify store, and it has completely transformed the way we showcase our products. As a brand that sells A2 Bilona Ghee and cow-based wellness products, we always struggled to convey the purity and process behind our offerings through static images alone."
  },
  {
    name: "Eatopia",
    company: "Eatopia",
    rating: 5,
    text: "Been using this app for over a year. Really easy UI and good customisation options, helps in clicks and page interactivity too. Would recommend."
  },
  {
    name: "Ogeez Shop",
    company: "Ogeez Shop",
    rating: 5,
    text: "Outstanding App! The shoppable videos from Shopclips are a hit! Our engagement has gone up, and customers love buying directly from the videos."
  },
  {
    name: "Dessoi",
    company: "Dessoi",
    rating: 5,
    text: "We've been using ShopClips to add shoppable video content to our website, and the impact has been fantastic. Not only have we seen a noticeable spike in our conversion rate, but we've also received great feedback from our customers."
  },
  {
    name: "Justin Whyte",
    company: "Justin Whyte",
    rating: 5,
    text: "I have been using shopclips for a year now. Useful patch for increasing sellability. Helps great length in increasing visibility & engagement. Highly recommended."
  },
  {
    name: "Pet's of Paradise India",
    company: "Pet's of Paradise India",
    rating: 5,
    text: "Shopclips has been a game-changer for our website. Being a content-first brand, we want to actively showcase the UGCs and have shoppable videos to make the UI more interactive and personalized for visitors."
  },
  {
    name: "Life & Jam",
    company: "Life & Jam",
    rating: 5,
    text: "Using Shopclips has been a great addition to our website. It's made the overall experience more engaging and enjoyable for our customers."
  },
  {
    name: "Vitalcep",
    company: "Vitalcep",
    rating: 5,
    text: "Thrilled to Start Using This App – Amazing First Impressions! Even in these early stages, what really stands out is the support team incredibly responsive, helpful, and genuinely committed to making sure we get the most out of the app."
  },
  {
    name: "Hrideya Jewel",
    company: "Hrideya Jewel",
    rating: 5,
    text: "As the owner of a jewelry business on Shopify, I'm always looking for ways to make my products stand out and create an unforgettable shopping experience. Implementing ShopClips has been one of the best decisions I've made!"
  },
  {
    name: "Herf Apparel",
    company: "Herf Apparel",
    rating: 5,
    text: "Have to say thanks to Abhinav, I had trouble adding features to my store, I mention I was having trouble in the chat and Abhinav hopped on and video chat and started walking me thru. But it ended up being a problem with my themes. But Abhinav and his team fixed the problem and I have to thank you for your help job well done!!!"
  },
  {
    name: "Divyaa Imagine Cosmetics Pvt. Ltd",
    company: "Divyaa Imagine Cosmetics Pvt. Ltd",
    rating: 5,
    text: "We saw a good improvement in conversions after integrating Shopclips. The videos are engaging, and the analytics are top-notch."
  },
  {
    name: "52 Degree",
    company: "52 Degree",
    rating: 5,
    text: "Amazing amazing app, must try. Will definitely increase your conversions. Loved it <3"
  },
  {
    name: "oddpod",
    company: "oddpod",
    rating: 5,
    text: "Good app to showcase Instagram Reels and other videos. I love the personalised attention the team gives even for those on the free plan. Must-have app for all E-commerce brands and D2C websites."
  },
  {
    name: "FIG Living",
    company: "FIG Living",
    rating: 5,
    text: "Great app! Shopclips team has helped us make out website more engaging, immersive and entertaining. It's a great app for brands that have great short format videos to sharply deliver product RTBs."
  },
  {
    name: "Lemonade",
    company: "Lemonade",
    rating: 5,
    text: "We've been using Shop Clips on our Shopify website, and it has been a game-changer! The app makes it so easy to showcase product videos and allows our customers to get a better look and feel of the products."
  },
  {
    name: "Rufa Beauty",
    company: "Rufa Beauty",
    rating: 5,
    text: "Easy to use and improved my sales"
  },
  {
    name: "YOUTH ROBE",
    company: "YOUTH ROBE",
    rating: 5,
    text: "I love how ShopClips helps me focus on the types of videos that are performing well. The detailed analytics are exactly what I needed to optimize my media strategy"
  },
  {
    name: "BCOS Its Silver",
    company: "BCOS Its Silver",
    rating: 5,
    text: "If something is worth referring to, it must be good! I've recommended the Shop Clips app to a few friends in the DTC sector. The app's analytics are impressive, the pricing is affordable, and the support team ensures queries are handled swiftly."
  },
  {
    name: "Sandook",
    company: "Sandook",
    rating: 5,
    text: "Shopclips has been our go to tool to increase our conversion rate through video commerce. The team is approachable, friendly and always willing to help. We have just onboarded them and are seeing visible improvement in our conversion rate."
  },
  {
    name: "stotodo",
    company: "stotodo",
    rating: 5,
    text: "We recently integrated the Shopclips Shoppable Video UGC app into our Shopify store, and it has been an absolute game-changer! This app perfectly aligned with our vision as a brand focused on delivering a vibrant and dynamic shopping experience."
  },
  {
    name: "Pahadi Hatti (पहाड़ी हट्टी)",
    company: "Pahadi Hatti (पहाड़ी हट्टी)",
    rating: 5,
    text: "We've been using Shopclips at Pahadi Hatti to post engaging videos, reels, and stories for our Himalayan products, and it's been fantastic! The app is user-friendly and helps us showcase our products effectively."
  },
  {
    name: "House of Mangalam",
    company: "House of Mangalam",
    rating: 5,
    text: "Introduction of Shop Clips to our store has helped us up the incremental revenue and even has helped us improve the order to session ratio for orders coming in via shop clips. Has been a good addition to the array of features."
  }
];

const TestimonialsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [slideDirection, setSlideDirection] = useState<'left' | 'right' | null>(null);
  const cardsPerPage = 2;
  const totalPages = Math.ceil(testimonials.length / cardsPerPage);

  const nextPage = () => {
    setSlideDirection('left');
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setSlideDirection('right');
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const goToPage = (page: number) => {
    if (page === currentPage) return;
    setSlideDirection(page > currentPage ? 'left' : 'right');
    setCurrentPage(page);
  };

  const currentTestimonials = testimonials.slice(
    currentPage * cardsPerPage,
    (currentPage + 1) * cardsPerPage
  );

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

        {/* Carousel Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-4 hover:bg-background/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            aria-label="Previous testimonials"
          >
            <ChevronLeft className="h-6 w-6 text-foreground" />
          </button>

          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-10 bg-background/80 backdrop-blur-sm border border-border/50 rounded-full p-4 hover:bg-background/90 transition-all duration-200 shadow-lg hover:shadow-xl"
            aria-label="Next testimonials"
          >
            <ChevronRight className="h-6 w-6 text-foreground" />
          </button>

          {/* Cards Container with Fixed Height */}
          <div className="flex gap-8 justify-center h-[400px] overflow-hidden">
            {currentTestimonials.map((testimonial, index) => (
              <Card 
                key={`${currentPage}-${index}`}
                className={`bg-gradient-card border-border/50 flex-1 max-w-lg hover:shadow-glow transition-all duration-500 transform ${
                  slideDirection === 'left' ? 'animate-slide-left' : 
                  slideDirection === 'right' ? 'animate-slide-right' : ''
                }`}
                style={{
                  minHeight: '400px'
                }}
              >
                <CardContent className="p-8 h-full flex flex-col">
                  {/* Stars */}
                  <div className="flex items-center mb-6 flex-shrink-0">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  
                  {/* Review Text */}
                  <p className="text-muted-foreground mb-6 leading-relaxed flex-1 text-lg">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author - Always at bottom */}
                  <div className="flex-shrink-0 mt-auto">
                    <p className="font-semibold text-foreground text-lg">{testimonial.name}</p>
                    <p className="text-sm text-primary">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center items-center space-x-3 mt-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentPage
                    ? 'bg-primary scale-125'
                    : 'bg-border hover:bg-primary/50'
                }`}
                aria-label={`Go to page ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideLeft {
          0% {
            opacity: 0;
            transform: translateX(50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideRight {
          0% {
            opacity: 0;
            transform: translateX(-50px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-left {
          animation: slideLeft 0.5s ease-out forwards;
        }
        
        .animate-slide-right {
          animation: slideRight 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;