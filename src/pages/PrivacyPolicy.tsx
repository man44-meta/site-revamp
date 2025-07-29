import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { Card, CardContent } from "@/components/ui/card";

const PrivacyPolicy = () => (
  <div className="min-h-screen bg-background font-display">
    <Header />
    <section className="pt-24 pb-16 bg-gradient-hero relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <Card className="bg-gradient-card border-primary/30 shadow-brand">
            <CardContent className="p-8 md:p-12">
              <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Our Privacy Policy
              </h1>
              <p className="text-muted-foreground mb-8 text-center">
                Shopclips website together with its content, subdomains, tools
                and services, the (“Site”).
              </p>
              <p className="mb-6">
                We value your privacy and your privacy is very important to us.
                To best protect your privacy, we provide this privacy policy
                (“Privacy Policy”) explaining our online information practices
                and the choices you can make about the way your information is
                collected and used at this Site.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Consent and Modification
              </h2>
              <p className="mb-6">
                By using Shopclips (The Site), you consent to the terms of our
                Privacy Policy and our processing of Personal Information for
                the purposes as discussed in this Policy. We encourage you to
                periodically review this page for the latest information on our
                privacy practices. If you do not agree to this Privacy Policy,
                please do not use our Site or Service. We reserve the right to
                change this Privacy Policy at any time, and the change will be
                effective immediately following the revised Privacy Policy on
                the Site for both existing users and new users.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Information We Collect
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <span className="font-semibold">Personal Information:</span>{" "}
                  When you install and use Shopclips, we may collect personal
                  information, including but not limited to your name, email
                  address, and Shopify store information. This information is
                  necessary for app functionality and to provide you with
                  customer support.
                </li>
                <li>
                  <span className="font-semibold">Usage Information:</span> We
                  collect information related to your use of our app, including
                  videos, images or any other media you submit on our app, data
                  of the products you tag on those media, your traffic's
                  activities and interactions with shoppable videos in order to
                  give you the analytics of our plugin.
                </li>
              </ul>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                How We Use Your Information
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <span className="font-semibold">
                    To Provide and Improve the Service:
                  </span>{" "}
                  We use your information to operate, maintain, and enhance our
                  app, including optimizing the user experience, developing new
                  features, and troubleshooting issues.
                </li>
                <li>
                  <span className="font-semibold">Communication:</span> We may
                  use your email address to send you important updates,
                  notifications, and responses to your inquiries.
                </li>
                <li>
                  <span className="font-semibold">Customer Support:</span> We
                  use your information to respond to your requests, comments, or
                  questions and provide customer support.
                </li>
              </ul>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Data Sharing and Disclosure
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <span className="font-semibold">Shopify:</span> Shopclips is
                  designed for the Shopify platform, and we may share your
                  information with Shopify as necessary to operate the app and
                  comply with Shopify's policies.
                </li>
                <li>
                  <span className="font-semibold">
                    Third-Party Service Providers:
                  </span>{" "}
                  We may use third-party service providers to assist with app
                  functionality, analytics, and other services. These providers
                  may have access to your personal information, but only to the
                  extent required to perform their functions.
                </li>
                <li>
                  <span className="font-semibold">Legal Compliance:</span> We
                  may share your information when required by law or to protect
                  our rights, privacy, safety, or property.
                </li>
              </ul>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Your Choices
              </h2>
              <ul className="list-disc pl-6 mb-6 space-y-2">
                <li>
                  <span className="font-semibold">Opt-Out:</span> You may
                  opt-out of receiving promotional emails from us by following
                  the unsubscribe instructions in those emails.
                </li>
                <li>
                  <span className="font-semibold">Access and Correction:</span>{" "}
                  You have the right to access, update, or correct your personal
                  information. You can do this by contacting us at{" "}
                  <a
                    href="mailto:team@shopclips.app"
                    className="text-primary hover:underline"
                  >
                    team@shopclips.app
                  </a>
                  .
                </li>
              </ul>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Data Security
              </h2>
              <p className="mb-6">
                We implement security measures to protect your personal
                information from unauthorized access, disclosure, alteration,
                and destruction. However, no method of data transmission over
                the internet or electronic storage is completely secure, so we
                cannot guarantee its absolute security.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Changes
              </h2>
              <p className="mb-6">
                We may update this privacy policy from time to time in order to
                reflect, for example, changes to our practices or for other
                operational, legal or regulatory reasons.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Commitment
              </h2>
              <p className="mb-6">
                Thank you for choosing Shopclips. Your privacy is important to
                us, and we are committed to protecting your data and providing
                you with a safe and enjoyable user experience. We are committed
                to protecting your privacy. Protecting your privacy online is an
                evolving area, and accordingly, we are constantly evolving the
                Site to meet these demands.
              </p>
              <h2 className="text-2xl font-semibold text-foreground mb-4 mt-8">
                Contact Us
              </h2>
              <p className="mb-2">
                If you have any questions, concerns, or requests related to this
                Privacy Policy or your personal information, please contact us:
              </p>
              <ul className="mb-6">
                <li>
                  <span className="font-semibold">By Email:</span>{" "}
                  <a
                    href="mailto:team@shopclips.app"
                    className="text-primary hover:underline"
                  >
                    team@shopclips.app
                  </a>
                </li>
                <li>
                  <span className="font-semibold">By Phone:</span> 7620487415
                </li>
              </ul>
              <p className="text-sm text-muted-foreground">
                Last Modified: Oct 6, 2023
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
    <CTASection />
    <Footer />
  </div>
);

export default PrivacyPolicy;
