import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Clock, Users, Zap } from "lucide-react";
import { useEffect, useRef } from "react";

const transformations = [
  { 
    company: "Global Retail Corp", 
    metric: "40%", 
    label: "Faster Order Processing",
    icon: Clock,
    description: "Reduced manual workflows by automating end-to-end fulfillment"
  },
  { 
    company: "FinServe Holdings", 
    metric: "3x", 
    label: "Productivity Increase",
    icon: TrendingUp,
    description: "Streamlined compliance reporting with intelligent automation"
  },
  { 
    company: "HealthFirst Systems", 
    metric: "60%", 
    label: "Cost Reduction",
    icon: Zap,
    description: "Eliminated redundant processes across 50+ departments"
  },
  { 
    company: "TechVentures Inc", 
    metric: "10K+", 
    label: "Hours Saved Monthly",
    icon: Users,
    description: "Automated customer onboarding and support workflows"
  },
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
      {/* Combined Hero Section - Full viewport with 70/30 split */}
      <section className="relative h-screen flex flex-col overflow-hidden">
        {/* Animated Speed Lines Canvas - covers entire section */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 w-full h-full"
          style={{ background: "linear-gradient(135deg, hsl(220 30% 12%) 0%, hsl(240 25% 8%) 50%, hsl(220 30% 15%) 100%)" }}
        />

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/80 pointer-events-none z-[1]" />

        {/* Hero Content - 70% */}
        <div className="relative z-10 flex-[7] flex items-center justify-center pt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-foreground">
                A Intelligent workflow for the
                <br />
                Modern Enterprise
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Break down barriers with enterprise workflow management that enables seamless collaboration across domains and accelerates delivery
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
        </div>

        {/* Trusted Partners - 30% */}
        <div className="relative z-10 flex-[3] flex flex-col justify-center bg-gradient-to-t from-background via-background to-background/60 border-t border-border/20">
          <div className="container mx-auto px-4 mb-6">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                Trusted by various of Line of Business
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                Powering the JPMorganChase leading enterprises
              </h2>
            </div>
          </div>

          {/* Minimal Logo Carousel */}
          <div className="relative flex-1 flex items-center overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
            
            <div className="flex animate-scroll">
              {[...Array(2)].flatMap(() => 
                [
                  "Asset Management",
                  "Corporate Banking",
                  "Investment Banking",
                  "Commercial Banking",
                  "Wealth Management",
                  "Risk Management",
                  "Treasury Services",
                  "Private Banking",
                  "Securities Services",
                  "Digital Platforms",
                  "Global Markets",
                  "Research",
                ].map((partner, index) => (
                  <div
                    key={`${partner}-${index}`}
                    className="flex-shrink-0 mx-10 group"
                  >
                    <span className="text-lg font-light tracking-wide text-foreground/40 
                                     hover:text-foreground/90 transition-all duration-500 cursor-default
                                     whitespace-nowrap">
                      {partner}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Business Transformation Section */}
      <section className="relative min-h-[35vh] bg-gradient-to-b from-background via-card/30 to-background overflow-hidden py-12">
        {/* Ambient glow effects */}
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-64 bg-primary/10 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-64 bg-teal/10 blur-[120px] rounded-full" />
        
        {/* Header */}
        <div className="text-center mb-10 relative z-10 px-4">
          <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground mb-3">Real Results. Real Impact.</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
            <span className="text-foreground">Business </span>
            <span className="gradient-text">Transformation</span>
            <span className="text-foreground"> in Action</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            See how enterprises achieve breakthrough results with our Managed Workflow services
          </p>
        </div>

        {/* Transformation Cards Grid */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {transformations.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card/50 backdrop-blur-sm rounded-2xl border border-border/50 p-6
                             hover:border-primary/50 hover:bg-card/80 transition-all duration-300
                             hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2"
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-teal/20 
                                  flex items-center justify-center mb-4
                                  group-hover:from-primary/40 group-hover:to-teal/40 transition-all duration-300
                                  border border-primary/20 group-hover:border-primary/40">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  
                  {/* Metric */}
                  <div className="mb-3">
                    <span className="text-4xl md:text-5xl font-bold gradient-text">{item.metric}</span>
                    <p className="text-sm text-primary/80 font-medium mt-1">{item.label}</p>
                  </div>
                  
                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                    {item.description}
                  </p>
                  
                  {/* Company */}
                  <p className="text-xs text-foreground/60 font-medium uppercase tracking-wider">
                    {item.company}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
