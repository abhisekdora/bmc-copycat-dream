import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

const partners = [
  { name: "Microsoft", logo: "M" },
  { name: "Google", logo: "G" },
  { name: "Amazon", logo: "A" },
  { name: "Apple", logo: "🍎" },
  { name: "Meta", logo: "M" },
  { name: "Netflix", logo: "N" },
  { name: "Salesforce", logo: "SF" },
  { name: "Oracle", logo: "O" },
  { name: "SAP", logo: "S" },
  { name: "IBM", logo: "IBM" },
  { name: "Adobe", logo: "Ai" },
  { name: "Cisco", logo: "C" },
  { name: "Dell", logo: "D" },
  { name: "HP", logo: "HP" },
  { name: "Intel", logo: "i" },
];

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let particles: Array<{
      x: number;
      y: number;
      speed: number;
      length: number;
      opacity: number;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const createParticle = (fullRandom = true) => {
      if (fullRandom) {
        // Distribute across entire canvas
        return {
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          speed: 2 + Math.random() * 4,
          length: 50 + Math.random() * 150,
          opacity: 0.05 + Math.random() * 0.25,
        };
      }
      // Reset particle to start from left edge
      return {
        x: -Math.random() * 200,
        y: Math.random() * canvas.height,
        speed: 2 + Math.random() * 4,
        length: 50 + Math.random() * 150,
        opacity: 0.05 + Math.random() * 0.25,
      };
    };

    const init = () => {
      resize();
      particles = Array.from({ length: 120 }, () => createParticle(true));
    };

    const animate = () => {
      // Dark background with slight trail effect
      ctx.fillStyle = "rgba(14, 20, 40, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Horizontal gradient for left-to-right motion
        const gradient = ctx.createLinearGradient(
          particle.x,
          particle.y,
          particle.x + particle.length,
          particle.y
        );
        gradient.addColorStop(0, `rgba(255, 100, 50, 0)`);
        gradient.addColorStop(0.3, `rgba(255, 120, 80, ${particle.opacity})`);
        gradient.addColorStop(0.6, `rgba(200, 100, 150, ${particle.opacity * 0.7})`);
        gradient.addColorStop(1, `rgba(100, 80, 180, ${particle.opacity * 0.3})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5 + Math.random() * 0.5;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x + particle.length, particle.y);
        ctx.stroke();

        // Move particle horizontally (left to right)
        particle.x += particle.speed;

        // Reset if off screen - spawn from left edge
        if (particle.x > canvas.width + particle.length) {
          particles[index] = createParticle(false);
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    init();
    animate();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      {/* Hero Section - 70vh */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden pt-16">
        {/* Animated Speed Lines Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 w-full h-full"
          style={{ background: "linear-gradient(135deg, hsl(220 30% 12%) 0%, hsl(240 25% 8%) 50%, hsl(220 30% 15%) 100%)" }}
        />

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/50 pointer-events-none" />

        {/* Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground">
              Business, faster than
              <br />
              humanly possible.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Make the most of your data and move at unstoppable speed with AI and automation that unifies, simplifies, and transforms the entire multi-cloud enterprise.
            </p>

            <Button 
              variant="outline"
              size="lg" 
              className="text-lg px-8 py-6 border-foreground/50 hover:bg-foreground hover:text-background"
            >
              Contact us
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section - 30vh */}
      <section className="relative h-[30vh] bg-card/80 border-t border-primary/30 overflow-hidden flex items-center">
        {/* Diagonal accent */}
        <div className="absolute left-0 bottom-0 w-1/3 h-full bg-gradient-to-r from-primary/20 to-transparent transform -skew-x-12 -translate-x-12" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex items-center justify-between gap-8">
            {/* Left side info */}
            <div className="flex-shrink-0">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-1">Trusted Partners</p>
              <p className="gradient-text text-lg font-bold">~80% of Forbes Global 100</p>
            </div>

            {/* Scrolling logos */}
            <div className="flex-1 overflow-hidden relative">
              <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-card/80 to-transparent z-10" />
              <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-card/80 to-transparent z-10" />
              
              <div className="flex animate-scroll">
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 mx-4 px-4 py-3 bg-card rounded-lg border border-border flex items-center gap-3 hover:border-primary/50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                      {partner.logo}
                    </div>
                    <span className="text-muted-foreground font-semibold text-sm whitespace-nowrap">
                      {partner.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <a
              href="#"
              className="flex-shrink-0 inline-flex items-center gap-2 text-primary hover:text-primary/80 text-sm font-medium transition-colors"
            >
              Explore stories
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
