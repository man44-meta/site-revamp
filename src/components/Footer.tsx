import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import logoSvg from "@/assets/shopclips-logo.svg";

const Footer = () => {
  return (
    <footer className="py-12 bg-black text-white dark:bg-white dark:text-black relative animate-fade-in-up border-t border-gray-300 dark:border-gray-700">
      <div className="container mx-auto px-4 text-center">
        {/* Main Brand Text */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-2">
            <img
              src={logoSvg}
              alt="Vplus"
              className="h-12 w-12 lg:h-16 lg:w-16"
            />
            <span className="text-5xl md:text-7xl font-bold bg-gradient-brand bg-clip-text text-transparent tracking-wide">
              plus
            </span>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="#"
            className="p-3 rounded-full bg-gray-800 hover:bg-primary/20 transition-colors group dark:bg-gray-200"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5 text-gray-300 group-hover:text-primary dark:text-gray-700" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-gray-800 hover:bg-primary/20 transition-colors group dark:bg-gray-200"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5 text-gray-300 group-hover:text-primary dark:text-gray-700" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-gray-800 hover:bg-primary/20 transition-colors group dark:bg-gray-200"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5 text-gray-300 group-hover:text-primary dark:text-gray-700" />
          </a>
          <a
            href="#"
            className="p-3 rounded-full bg-gray-800 hover:bg-primary/20 transition-colors group dark:bg-gray-200"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-primary dark:text-gray-700" />
          </a>
        </div>

        {/* Shopify App Store Button */}
        <div className="mb-8">
          <Button
            variant="outline"
            className="border-white/30 hover:bg-white/10 text-white dark:border-black/30 dark:hover:bg-black/10 dark:text-black bg-transparent"
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
        <div className="text-sm text-gray-300 dark:text-gray-700">
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
