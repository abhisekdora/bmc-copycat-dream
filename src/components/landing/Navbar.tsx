import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import smartflowLogo from "../../assets/smartflow.png";

const navItems = [
  { name: "About", href: "/about" },
  { name: "Team", href: "/teams" },
  { name: "Onboarding", href: "#" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Main Nav */}
      <nav className="bg-background/95 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4">
          <div className="relative flex items-center h-16">
            {/* Logo - left */}
            <Link to="/" className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-8 h-8 rounded bg-foreground flex items-center justify-center">
                  <span className="text-background font-bold text-xs leading-none">
                    JPM
                  </span>
                </div>
                <div className="hidden sm:flex flex-col leading-none">
                  <span className="text-[10px] font-semibold text-foreground/90 tracking-wide">
                    JPMORGAN
                  </span>
                  <span className="text-[10px] font-medium text-foreground/60 tracking-wide">
                    CHASE & CO.
                  </span>
                </div>
              </div>
              <div className="w-px h-6 bg-border/50" />
              <span className="text-lg font-bold text-foreground">
                SMARTFLOW
              </span>
            </Link>

            {/* Desktop Nav - absolute center */}
            <div className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                ),
              )}
            </div>

            {/* Mobile Menu Button - right */}
            <button
              className="lg:hidden p-2 text-foreground ml-auto"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-background border-t border-border">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {navItems.map((item) =>
                item.href.startsWith("/") ? (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-4 py-3 text-foreground/80 hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                  >
                    {item.name}
                  </a>
                ),
              )}
              <div className="pt-4 border-t border-border space-y-2">
                <a href="#" className="block px-4 py-2 text-foreground/80">
                  Free Trials
                </a>
                <a href="#" className="block px-4 py-2 text-foreground/80">
                  Onboarding
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
