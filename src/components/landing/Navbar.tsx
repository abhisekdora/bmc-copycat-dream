import { useState } from "react";
import { Menu, X, Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { name: "Solutions", hasDropdown: true },
  { name: "Products", hasDropdown: true },
  { name: "Partners", hasDropdown: true },
  { name: "Support", hasDropdown: true },
  { name: "About", hasDropdown: true },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Announcement Bar */}
      <div className="bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 py-2 px-4 text-center text-sm">
        <span className="text-foreground/90">
          Looking for SMARTFLOW Helix?{" "}
          <a href="#" className="text-primary hover:underline font-medium">
            See what's new →
          </a>
        </span>
      </div>

      {/* Main Nav */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg gradient-border flex items-center justify-center">
                <span className="text-background font-bold text-xl">S</span>
              </div>
              <span className="text-xl font-bold text-foreground">SMARTFLOW</span>
            </a>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
            </div>

            {/* Right Actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a href="#" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                Free Trials
              </a>
              <a href="#" className="text-sm text-foreground/80 hover:text-foreground transition-colors">
                Request Pricing
              </a>
              <Button variant="default" size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Contact Us
              </Button>
              <button className="p-2 text-foreground/80 hover:text-foreground transition-colors">
                <Search className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href="#"
                  className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border space-y-2">
                <a href="#" className="block px-4 py-2 text-foreground/80">Free Trials</a>
                <a href="#" className="block px-4 py-2 text-foreground/80">Request Pricing</a>
                <Button className="w-full mt-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
