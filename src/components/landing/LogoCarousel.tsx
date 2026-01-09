const logos = [
  "Microsoft", "Google", "Amazon", "Apple", "Meta", 
  "Netflix", "Salesforce", "Oracle", "SAP", "IBM",
  "Adobe", "Cisco", "Dell", "HP", "Intel",
];

const LogoCarousel = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 mb-12">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Trusted Partner
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            AI and automation engine for
            <br />
            <span className="gradient-text">~80% of Forbes Global 100</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Leading enterprises worldwide trust our platform to power their 
            digital transformation and drive business outcomes
          </p>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        {/* Scrolling Container */}
        <div className="flex animate-scroll">
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-8 w-40 h-20 bg-card rounded-xl border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
            >
              <span className="text-muted-foreground font-semibold text-lg">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 mt-12 text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
        >
          Explore customer stories
          <span className="text-lg">→</span>
        </a>
      </div>
    </section>
  );
};

export default LogoCarousel;
