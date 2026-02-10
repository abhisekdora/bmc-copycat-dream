import {
  Network,
  ListChecks,
  Layers,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const processSteps = [
  {
    step: "01",
    title: "Orchestration",
    description:
      "Seamlessly coordinate workflows across your entire organization with intelligent automation and real-time monitoring.",
    icon: Network,
    color: "from-primary to-primary/60",
  },
  {
    step: "02",
    title: "Queue Management",
    description:
      "Efficiently manage workloads with smart queue prioritization, load balancing, and automated task distribution.",
    icon: ListChecks,
    color: "from-teal to-teal/60",
  },
  {
    step: "03",
    title: "Platform Integration",
    description:
      "Connect all your systems into a unified platform with secure APIs, webhooks, and enterprise-grade integrations.",
    icon: Layers,
    color: "from-orange to-orange/60",
  },
  {
    step: "04",
    title: "Data & Metrics",
    description:
      "Transform raw data into actionable insights with comprehensive analytics, reporting, and performance dashboards.",
    icon: BarChart3,
    color: "from-purple to-purple/60",
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background via-card/30 to-background relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-teal/5 blur-[150px] rounded-full" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Our Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How We <span className="gradient-text">Transform</span> Your
            Business
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A proven methodology that takes your operations from complexity to
            clarity, delivering measurable results at every stage.
          </p>
        </div>

        {/* Process Flow */}
        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary via-teal via-50% to-purple" />

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={step.step} className="relative group">
                  {/* Step Card */}
                  <div
                    className="bg-card/60 backdrop-blur-sm border border-border/50 rounded-2xl p-6 
                                  hover:border-primary/50 hover:bg-card/80 transition-all duration-300
                                  hover:shadow-2xl hover:shadow-primary/10 hover:-translate-y-2 h-full"
                  >
                    {/* Icon with number */}
                    <div className="relative mb-6">
                      <div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} 
                                      flex items-center justify-center shadow-lg
                                      group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      {/* Step number badge */}
                      <div
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-background border-2 border-border
                                      flex items-center justify-center text-xs font-bold text-foreground"
                      >
                        {step.step}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    {/* Arrow to next - Desktop */}
                    {index < processSteps.length - 1 && (
                      <div
                        className="hidden lg:flex absolute -right-4 top-24 w-8 h-8 rounded-full bg-card border border-border
                                      items-center justify-center z-10 group-hover:border-primary/50 transition-colors"
                      >
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </div>
                    )}
                  </div>

                  {/* Arrow to next - Mobile/Tablet */}
                  {index < processSteps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-8 h-8 rounded-full bg-card border border-border flex items-center justify-center rotate-90">
                        <ArrowRight className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to transform your workflows?
          </p>
          <button
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium
                           hover:bg-primary/90 transition-colors"
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
