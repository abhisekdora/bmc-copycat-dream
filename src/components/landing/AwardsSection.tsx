import { Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const AwardsSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-br from-card via-card to-primary/5 rounded-3xl p-8 md:p-12 border border-border relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -left-20 -bottom-20 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8">
            {/* Award Badge */}
            <div className="flex-shrink-0">
              <div className="w-32 h-40 bg-gradient-to-b from-primary/20 to-primary/5 rounded-xl border border-primary/30 flex flex-col items-center justify-center p-4 glow-teal">
                <Award className="w-12 h-12 text-primary mb-2" />
                <span className="text-xs text-center text-muted-foreground">
                  Gartner Magic Quadrant
                </span>
                <span className="text-lg font-bold text-foreground">2024</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Named a <span className="text-primary">Leader</span> in the 2024 Gartner
                Magic Quadrant
              </h3>
              <p className="text-muted-foreground text-lg mb-6 max-w-2xl">
                Recognized for our completeness of vision and ability to execute 
                in enterprise service management for the 11th consecutive year.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Download className="w-4 h-4 mr-2" />
                  Download Report
                </Button>
                <Button variant="outline" className="border-border hover:bg-card">
                  Learn More
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="flex lg:flex-col gap-6 lg:gap-4">
              <div className="text-center">
                <p className="text-3xl font-bold text-primary">11+</p>
                <p className="text-sm text-muted-foreground">Years as Leader</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-accent">#1</p>
                <p className="text-sm text-muted-foreground">In Execution</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
