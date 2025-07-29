import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: "Why video?",
    answer: "Humans naturally relate to videos 10x more than text and some basic photos. Not only do videos grab attention, they keep it. Because they can combine movement, sound, and text, videos can pack a lot of information into a smaller package."
  },
  {
    question: "Will this have an impact on the load time of our site?",
    answer: "Nope. As the videos are loaded on demand when the user clicks on the video. The videos are served via the CDNs (Content Delivery Networks) which doesn't impact the website loading time at all."
  },
  {
    question: "How much increase in conversion can I expect after integrating Vplus plugin?",
    answer: "Shoppable Short Clips have a conversion rate upto 10-15%. At some places, the conversions has increased from 1.8% to whopping 21%!!! More than 10x growth! So it is possible! It's just we have to keep trying until we make it!"
  },
  {
    question: "I dont get much traffic on my online store, should I integrate Vplus?",
    answer: "Yes, definitely. Video shopping helps in increasing the user engagement and retention. We recommend you to start integrating shoppable videos as early as possible."
  }
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-gradient-section relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about Vplus
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-gradient-card border border-border/50 rounded-lg px-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-6">
                  <span className="font-medium">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;