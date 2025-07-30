import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="py-16 bg-card text-card-foreground relative animate-fade-in-up border-t border-border/30">
      <div className="container mx-auto px-4 text-center">
        {/* Main Brand Text */}
        <div className="mb-8">
          <h2 className="text-5xl md:text-7xl font-bold bg-gradient-brand bg-clip-text text-transparent tracking-wide">
            Vplus
          </h2>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors group"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors group"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors group"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-secondary hover:bg-primary/20 transition-colors group"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
          </a>
        </div>

        {/* Shopify App Store Button */}
        <div className="mb-8">
          <Button
            variant="outline"
            className="border-primary/30 hover:bg-primary/10"
            asChild
          >
            <a
              href="https://apps.shopify.com/shopclips-shoppable-clips"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2"
            >
              <span>Find us on the Shopify App Store</span>
              <ExternalLink className="h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Copyright and Privacy */}
        <div className="text-sm text-muted-foreground">
          <p>
            © 2025{" "}
            <span className="bg-gradient-brand bg-clip-text text-transparent font-semibold">
              Vplus
            </span>
            ™. All Rights Reserved.
            <Link
              to="/privacy-policy"
              className="hover:text-primary transition-colors ml-2"
            >
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
