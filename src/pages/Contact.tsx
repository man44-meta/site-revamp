import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background font-display">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 animate-fade-in">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in-up">
              Have questions about our shoppable video platform? We'd love to
              hear from you. Send us a message and we'll respond as soon as
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gradient-section">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-gradient-card border-primary/30 shadow-brand animate-scale-in">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground flex items-center space-x-2">
                    <MessageSquare className="h-6 w-6 text-primary" />
                    <span>Send us a Message</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-background/50 border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-foreground">
                      Company (Optional)
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your Company"
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="How can we help you?"
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project or questions..."
                      rows={6}
                      className="bg-background/50 border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    size="lg"
                    className="w-full bg-gradient-brand hover:opacity-90 shadow-brand text-lg py-3 group"
                  >
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">
                    Contact Information
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Ready to transform your Shopify store with interactive
                    shoppable videos? Reach out to us through any of these
                    channels.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Email */}
                  <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Mail className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Email Us
                          </h3>
                          <p className="text-muted-foreground mb-2">
                            We'll get back to you within 24 hours
                          </p>
                          <a
                            href="mailto:hello@vplus.com"
                            className="text-primary hover:underline font-medium"
                          >
                            hello@vplus.com
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Phone */}
                  <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Phone className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Call Us
                          </h3>
                          <p className="text-muted-foreground mb-2">
                            Mon-Fri from 9am to 6pm EST
                          </p>
                          <a
                            href="tel:+1-555-0123"
                            className="text-primary hover:underline font-medium"
                          >
                            +1 (555) 012-3456
                          </a>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Location */}
                  <Card className="bg-gradient-card border-primary/20 shadow-card hover:shadow-glow transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <MapPin className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Visit Us
                          </h3>
                          <p className="text-muted-foreground mb-2">
                            Our office location
                          </p>
                          <p className="text-foreground font-medium">
                            123 Innovation Drive
                            <br />
                            Tech City, TC 12345
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Support Hours */}
                  <Card className="bg-gradient-card border-primary/20 shadow-card">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <Clock className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground mb-1">
                            Support Hours
                          </h3>
                          <p className="text-muted-foreground mb-2">
                            When we're available to help
                          </p>
                          <div className="space-y-1 text-sm">
                            <p className="text-foreground">
                              <span className="font-medium">
                                Monday - Friday:
                              </span>{" "}
                              9:00 AM - 6:00 PM EST
                            </p>
                            <p className="text-foreground">
                              <span className="font-medium">Saturday:</span>{" "}
                              10:00 AM - 4:00 PM EST
                            </p>
                            <p className="text-foreground">
                              <span className="font-medium">Sunday:</span>{" "}
                              Closed
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Contact;
