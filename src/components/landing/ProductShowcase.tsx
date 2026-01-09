import { ArrowRight, Workflow, Server, Cloud, Shield } from "lucide-react";

const products = [
  {
    icon: Workflow,
    title: "Workflow Orchestration",
    description: "Automate complex business processes with intelligent workflow management across your entire organization.",
    color: "primary",
    link: "#",
  },
  {
    icon: Server,
    title: "Mainframe Transformation",
    description: "Modernize legacy systems while maximizing your mainframe investment with cutting-edge solutions.",
    color: "accent",
    link: "#",
  },
  {
    icon: Cloud,
    title: "Cloud Operations",
    description: "Optimize multi-cloud environments with AI-powered monitoring, cost management, and automation.",
    color: "purple",
    link: "#",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description: "Protect your enterprise with automated security operations and continuous compliance monitoring.",
    color: "teal",
    link: "#",
  },
];

const getColorClasses = (color: string) => {
  switch (color) {
    case "primary":
      return "text-primary group-hover:text-primary bg-primary/10 group-hover:bg-primary/20";
    case "accent":
      return "text-accent group-hover:text-accent bg-accent/10 group-hover:bg-accent/20";
    case "purple":
      return "text-[hsl(var(--purple))] bg-[hsl(var(--purple))]/10 group-hover:bg-[hsl(var(--purple))]/20";
    case "teal":
      return "text-primary bg-primary/10 group-hover:bg-primary/20";
    default:
      return "text-primary bg-primary/10";
  }
};

const ProductShowcase = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Solutions That <span className="gradient-text">Transform</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover enterprise-grade solutions designed to accelerate your digital transformation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <a
              key={index}
              href={product.link}
              className="group relative p-6 bg-card rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-4 transition-colors ${getColorClasses(product.color)}`}>
                <product.icon className="w-7 h-7" />
              </div>
              
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {product.description}
              </p>
              
              <div className="flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all">
                Learn more
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
