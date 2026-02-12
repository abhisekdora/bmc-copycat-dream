import { useEffect, useRef, useState } from "react";
import { Quote } from "lucide-react";
import testimonials from "@/data/testimonials.json";

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);
  };

  useEffect(() => {
    if (!paused) {
      startAutoPlay();
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [paused]);

  const goTo = (index: number) => {
    setCurrent(index);
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!paused) startAutoPlay();
  };

  const t = testimonials[current];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Trusted by leading enterprises to power their mission-critical workflows
          </p>
        </div>

        <div
          className="max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden transition-all duration-500">
            <Quote className="absolute top-6 right-6 w-16 h-16 text-primary/10" />

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Photo */}
              <div className="shrink-0">
                <img
                  src={t.photo}
                  alt={t.name}
                  className="w-24 h-24 rounded-full object-cover border-2 border-primary/30 shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left">
                <p className="text-foreground text-lg md:text-xl leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
                <div>
                  <p className="text-foreground font-semibold text-lg">{t.name}</p>
                  <p className="text-primary font-medium text-sm">{t.designation}</p>
                  <p className="text-muted-foreground text-sm">{t.company}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
