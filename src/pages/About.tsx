import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowRight, Zap, Shield, Globe, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            About SMARTFLOW
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Transforming Business Through
            <br />
            <span className="gradient-text">Intelligent Automation</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            SMARTFLOW is the leading AI-powered automation platform that helps enterprises 
            streamline operations, reduce costs, and accelerate digital transformation.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                We believe that every organization deserves access to cutting-edge AI and automation 
                technology. Our mission is to democratize intelligent automation, making it accessible, 
                scalable, and impactful for businesses of all sizes.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
                Learn more about our vision
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-xl border border-border">
                <Zap className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Speed</h3>
                <p className="text-sm text-muted-foreground">Process faster than humanly possible</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Security</h3>
                <p className="text-sm text-muted-foreground">Enterprise-grade protection</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <Globe className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Scale</h3>
                <p className="text-sm text-muted-foreground">Global infrastructure</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Support</h3>
                <p className="text-sm text-muted-foreground">24/7 expert assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">500+</p>
              <p className="text-sm text-muted-foreground">Enterprise Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">80%</p>
              <p className="text-sm text-muted-foreground">Forbes Global 100</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">50+</p>
              <p className="text-sm text-muted-foreground">Countries Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">10M+</p>
              <p className="text-sm text-muted-foreground">Automations Daily</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
