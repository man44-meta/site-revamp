import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import logoSvg from "@/assets/shopclips-logo.svg";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="/"
          className="flex items-center hover:opacity-80 transition-opacity font-bold text-xl text-foreground"
        >
          <img src={logoSvg} alt="Vplus" className="h-8 w-8 mx-0.5" />
          <span className="ml-1">plus</span>
        </a>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex items-center space-x-8">
            <a
              href="#about"
              className="text-foreground hover:text-primary transition-colors"
            >
              About us
            </a>
            <a
              href="#pricing"
              className="text-foreground hover:text-primary transition-colors"
            >
              Pricing
            </a>
            <a
              href="#blogs"
              className="text-foreground hover:text-primary transition-colors"
            >
              Blogs
            </a>
            <a
              href="/contact"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center space-x-3">
            <Button
              variant="outline"
              size="sm"
              className="border-primary/20 hover:bg-primary/10"
              asChild
            >
              <a
                href="https://shopclips-demo.myshopify.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Demo Store
              </a>
            </Button>
            <Button
              size="sm"
              className="bg-gradient-brand hover:opacity-90 shadow-brand"
            >
              Book a Demo
            </Button>
            <ThemeToggle />
          </div>
        </div>

        {/* Mobile Actions */}
        <div className="flex md:hidden items-center space-x-3">
          <Button
            size="sm"
            className="bg-gradient-brand hover:opacity-90 shadow-brand"
          >
            Demo
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
