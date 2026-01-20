import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const StatsBanner = () => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const targetCount = 30;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = targetCount / steps;
    const interval = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= targetCount) {
        setCount(targetCount);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={ref} className="py-16 bg-gradient-to-r from-secondary via-card to-secondary">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <div className="flex items-baseline gap-2">
            <span className="text-6xl md:text-8xl font-bold gradient-text">
              {count}
            </span>
            <span className="text-4xl md:text-6xl font-bold text-foreground">
              million+
            </span>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-xl md:text-2xl text-foreground font-medium">
              Daily automated actions powered by SMARTFLOW
            </p>
            <p className="text-muted-foreground">
              Transforming enterprises worldwide with AI-driven automation
            </p>
          </div>
          <Button 
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground glow-orange"
          >
            Join Us
          </Button>
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;
