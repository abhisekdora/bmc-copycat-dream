import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

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
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (fullRandom = true) => {
      if (fullRandom) {
        // Distribute across entire canvas
        return {
          x: Math.random() * canvas.width * 1.5 - canvas.width * 0.25,
          y: Math.random() * canvas.height * 1.5,
          speed: 1 + Math.random() * 3,
          length: 30 + Math.random() * 120,
          opacity: 0.05 + Math.random() * 0.3,
        };
      }
      // Reset particle to start from left/bottom edge
      return {
        x: -Math.random() * 200,
        y: canvas.height + Math.random() * 300,
        speed: 1 + Math.random() * 3,
        length: 30 + Math.random() * 120,
        opacity: 0.05 + Math.random() * 0.3,
      };
    };

    const init = () => {
      resize();
      // Many more particles for full coverage
      particles = Array.from({ length: 150 }, () => createParticle(true));
    };

    const animate = () => {
      ctx.fillStyle = "rgba(14, 51, 134, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, index) => {
        // Create gradient for each line
        const gradient = ctx.createLinearGradient(
          particle.x,
          particle.y,
          particle.x + particle.length,
          particle.y - particle.length * 0.3
        );
        gradient.addColorStop(0, `rgba(45, 212, 191, 0)`);
        gradient.addColorStop(0.5, `rgba(45, 212, 191, ${particle.opacity})`);
        gradient.addColorStop(1, `rgba(139, 92, 246, ${particle.opacity * 0.5})`);

        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(
          particle.x + particle.length,
          particle.y - particle.length * 0.3
        );
        ctx.stroke();

        // Move particle diagonally (simulating speed/motion)
        particle.x += particle.speed;
        particle.y -= particle.speed * 0.3;

        // Reset if off screen - spawn from left/bottom edge
        if (particle.x > canvas.width + particle.length || particle.y < -particle.length) {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Animated Speed Lines Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
        style={{ background: "hsl(var(--background))" }}
      />

      {/* Gradient Orbs for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(var(--purple))]/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="text-foreground">Business,</span>
            <br />
            <span className="gradient-text">faster than</span>
            <br />
            <span className="text-foreground">humanly possible</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            AI and automation solutions that transform your enterprise operations
            and drive unprecedented efficiency
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 glow-teal"
            >
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="text-lg px-8 py-6 border-border hover:bg-secondary"
            >
              Watch Demo
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-1">
          <div className="w-1.5 h-2.5 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
