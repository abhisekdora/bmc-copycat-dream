import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Users, Zap, Building2, Wallet, TrendingDown, Shield, Landmark, Briefcase, Globe, BarChart3 } from "lucide-react";
import { useEffect, useRef } from "react";

const linesOfBusiness = [
  { name: "Asset Management", icon: TrendingUp },
  { name: "Corporate Banking", icon: Building2 },
  { name: "Investment Banking", icon: Wallet },
  { name: "Commercial Banking", icon: Briefcase },
  { name: "Wealth Management", icon: TrendingDown },
  { name: "Risk Management", icon: Shield },
  { name: "Treasury Services", icon: Landmark },
  { name: "Private Banking", icon: Users },
  { name: "Securities Services", icon: BarChart3 },
  { name: "Digital Platforms", icon: Globe },
];

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
        {/* Animated Speed Lines Canvas - covers hero portion */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 z-0 w-full h-[70%]"
          style={{ background: "linear-gradient(135deg, hsl(221 83% 25%) 0%, hsl(221 83% 15%) 50%, hsl(221 83% 20%) 100%)" }}
        />

        {/* Hero Content - 70% */}
        <div className="relative z-10 flex-[7] flex items-center justify-center pt-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-white">
                A Intelligent workflow for the
                <br />
                Modern Enterprise
              </h1>
              
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Break down barriers with enterprise workflow management that enables seamless collaboration across domains and accelerates delivery
              </p>

              <Button 
                variant="outline"
                size="lg" 
                className="text-lg px-8 py-6 border-white/50 text-white hover:bg-white hover:text-primary"
              >
                Contact us
              </Button>
            </div>
          </div>
        </div>

        {/* Trusted Partners - 30% Carousel */}
        <div className="relative z-10 flex-[3] flex flex-col justify-center bg-gradient-to-b from-card/50 to-secondary/40 border-t border-border/30">
          <div className="container mx-auto px-4 mb-4">
            <div className="text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">
                Trusted by various of Line of Business
              </p>
              <h2 className="text-xl md:text-2xl font-semibold text-foreground">
                Powering the JPMorganChase leading enterprises
              </h2>
            </div>
          </div>

          {/* Styled Carousel */}
          <div className="relative flex-1 flex items-center overflow-hidden">
            {/* Gradient fades */}
            <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-secondary/60 via-secondary/40 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-secondary/60 via-secondary/40 to-transparent z-10" />
            
            <div className="flex animate-scroll">
              {[...Array(2)].flatMap(() => 
                linesOfBusiness.map((line, index) => {
                  const IconComponent = line.icon;
                  return (
                    <div
                      key={`${line.name}-${index}`}
                      className="flex-shrink-0 mx-3 group"
                    >
                      <div className="flex items-center gap-2 px-5 py-2.5 rounded-full 
                                      bg-card border border-border/60
                                      group-hover:border-primary/50 group-hover:bg-primary/5
                                      group-hover:shadow-md group-hover:shadow-primary/10
                                      transition-all duration-300 cursor-default">
                        <IconComponent className="w-4 h-4 text-primary" />
                        <span className="text-sm font-medium text-foreground/80 whitespace-nowrap
                                         group-hover:text-primary transition-colors">
                          {line.name}
                        </span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Business Transformation Section */}
      <section className="relative min-h-[35vh] bg-gradient-to-b from-secondary/50 via-background to-secondary/30 overflow-hidden py-12">
        {/* Subtle background pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/8 via-transparent to-transparent" />
        
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
