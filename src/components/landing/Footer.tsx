import { Linkedin, Twitter, Youtube, Facebook } from "lucide-react";

const footerLinks = {
  Solutions: ["Workflow Orchestration", "Mainframe", "Cloud Operations", "Security & Compliance"],
  Products: ["BMC Helix", "Control-M", "AMI", "MainView"],
  Company: ["About Us", "Careers", "Newsroom", "Investor Relations"],
  Resources: ["Blog", "Events", "Webinars", "Case Studies"],
  Support: ["Documentation", "Community", "Contact Support", "Training"],
};

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Logo Column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg gradient-border flex items-center justify-center">
                <span className="text-background font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold text-foreground">BMC</span>
            </a>
            <p className="text-muted-foreground text-sm mb-6">
              Business runs on software. Software runs on BMC.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 BMC Software, Inc. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms of Use
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Cookie Settings
            </a>
            <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
