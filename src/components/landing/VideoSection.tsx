import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              Powered by <span className="gradient-text">AI</span>, built for the{" "}
              <span className="text-primary">cloud</span>, driven by{" "}
              <span className="text-accent">data</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our integrated platform combines artificial intelligence, cloud-native 
              architecture, and real-time analytics to deliver unprecedented 
              automation and insights across your enterprise.
            </p>
            <ul className="space-y-3">
              {[
                "Reduce operational costs by up to 70%",
                "Deploy in weeks, not months",
                "Scale seamlessly across multi-cloud environments",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Video Placeholder */}
          <div className="relative group cursor-pointer">
            <div className="aspect-video bg-card rounded-2xl overflow-hidden border border-border">
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-[hsl(var(--purple))]/20 to-accent/20" />
              
              {/* Grid Pattern */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                                   linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
                  backgroundSize: '30px 30px'
                }}
              />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg glow-teal">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" />
                </div>
              </div>
              
              {/* Video Label */}
              <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm px-4 py-2 rounded-lg">
                <p className="text-sm font-medium text-foreground">Watch: Platform Overview</p>
                <p className="text-xs text-muted-foreground">3:45 min</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
