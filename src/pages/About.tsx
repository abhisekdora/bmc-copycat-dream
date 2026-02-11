import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { ArrowRight, Zap, Shield, Globe, Users, Database, Server, Monitor, Search, Lock, BarChart3, Cloud } from "lucide-react";
import ArchitectureDiagram from "@/components/landing/ArchitectureDiagram";

const architectureComponents = [
  {
    title: "RDT-SmartFlow Portal",
    description: "Standardized services to display and access Pegasus and app-provided screens",
    icon: Monitor,
    color: "text-teal"
  },
  {
    title: "RDT-SmartFlow Core",
    description: "Managed service with APIs to maintain workflow and task definitions, create/manage cases, workflows and tasks",
    icon: Server,
    color: "text-primary"
  },
  {
    title: "GAIA Deployed",
    description: "Domain-specific clusters with logical environment segregation",
    icon: Cloud,
    color: "text-purple"
  },
  {
    title: "JBPM 7.x Engine",
    description: "Open source BPM engine with custom task types for flexible design",
    icon: Zap,
    color: "text-orange"
  },
  {
    title: "GTI Search Service",
    description: "Search index of cases and tasks for fast display",
    icon: Search,
    color: "text-teal"
  },
  {
    title: "GAIA Oracle Service",
    description: "Cloud-native Oracle database for robust data management",
    icon: Database,
    color: "text-primary"
  },
  {
    title: "IDA & CEM",
    description: "Pegasus supports RSAM and IDA for provisioning, authentication, and centralized entitlements",
    icon: Lock,
    color: "text-purple"
  },
  {
    title: "Reference Data Analytics",
    description: "Standardized dashboards based on RDI messages with near real-time data mart feeds",
    icon: BarChart3,
    color: "text-orange"
  }
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            About RDT-SmartFlow
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Enterprise Workflow
            <br />
            <span className="gradient-text">Management Platform</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            RDT-SmartFlow is a comprehensive workflow automation platform that integrates 
            case management, task orchestration, and analytics into a unified enterprise solution.
          </p>
        </div>
      </section>

      {/* Architecture Overview Section */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">System Architecture</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of the RDT-SmartFlow platform showing how all components 
              work together to deliver seamless workflow management.
            </p>
          </div>
          
          {/* Architecture Diagram - DOM based */}
          <div className="bg-card rounded-2xl shadow-xl border border-border/20 mb-12 overflow-hidden">
            <ArchitectureDiagram />
          </div>

          {/* Architecture Components Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {architectureComponents.map((component, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <component.icon className={`w-10 h-10 ${component.color} mb-4`} />
                <h3 className="font-semibold text-foreground mb-2">{component.title}</h3>
                <p className="text-sm text-muted-foreground">{component.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section - commented out */}
      {/* <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                We believe that every organization deserves access to cutting-edge workflow 
                automation technology. Our mission is to democratize intelligent process management, 
                making it accessible, scalable, and impactful for businesses of all sizes.
              </p>
              <a href="#" className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium">
                Learn more about our vision
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-card p-6 rounded-xl border border-border">
                <Zap className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Speed</h3>
                <p className="text-sm text-muted-foreground">Process faster than humanly possible</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <Shield className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Security</h3>
                <p className="text-sm text-muted-foreground">Enterprise-grade protection</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <Globe className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Scale</h3>
                <p className="text-sm text-muted-foreground">Global infrastructure</p>
              </div>
              <div className="bg-card p-6 rounded-xl border border-border">
                <Users className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-foreground mb-2">Support</h3>
                <p className="text-sm text-muted-foreground">24/7 expert assistance</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Features Section */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <Zap className="w-4 h-4" />
              Platform Capabilities
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-4">SmartFlow Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A powerful suite of tools designed to streamline enterprise workflows, automate processes, and drive operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Server,
                title: "Workflow Automation",
                description: "Automate complex business processes with drag-and-drop workflow builder and customizable task orchestration.",
              },
              {
                icon: Search,
                title: "Case Management",
                description: "Track, manage, and resolve cases with a unified view across all business lines and departments.",
              },
              {
                icon: BarChart3,
                title: "Real-Time Analytics",
                description: "Standardized dashboards with near real-time data feeds for actionable insights and reporting.",
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                description: "Role-based access control, centralized entitlements, and IDA authentication for robust security.",
              },
              {
                icon: Globe,
                title: "Cross-Domain Collaboration",
                description: "Seamlessly collaborate across lines of business with shared workflows and unified task management.",
              },
              {
                icon: Database,
                title: "Scalable Infrastructure",
                description: "Cloud-native architecture deployed on GAIA with domain-specific clusters and environment segregation.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-card p-6 rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">500+</p>
              <p className="text-sm text-muted-foreground">Enterprise Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">80%</p>
              <p className="text-sm text-muted-foreground">Forbes Global 100</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">50+</p>
              <p className="text-sm text-muted-foreground">Countries Served</p>
            </div>
            <div>
              <p className="text-4xl font-bold gradient-text mb-2">10M+</p>
              <p className="text-sm text-muted-foreground">Workflows Daily</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
