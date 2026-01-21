import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import { Linkedin, Twitter, Mail } from "lucide-react";

const teamMembers = [
  // Leadership
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Michael Roberts",
    role: "Chief Technology Officer",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Emily Watson",
    role: "Chief Product Officer",
    category: "Leadership",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face",
  },
  // Product Team
  {
    name: "David Kim",
    role: "Senior Product Owner",
    category: "Product",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Rachel Martinez",
    role: "Product Owner",
    category: "Product",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "James Wilson",
    role: "Product Manager",
    category: "Product",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
  },
  // Engineering
  {
    name: "Alex Thompson",
    role: "Lead Engineer",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Lisa Park",
    role: "Senior Developer",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Chris Johnson",
    role: "Full Stack Developer",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Priya Sharma",
    role: "Frontend Developer",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Marcus Lee",
    role: "Backend Developer",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=300&fit=crop&crop=face",
  },
  {
    name: "Amanda Foster",
    role: "DevOps Engineer",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face",
  },
];

const categories = ["Leadership", "Product", "Engineering"];

const Teams = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary" />
            Our Team
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Meet the People Behind
            <br />
            <span className="gradient-text">SMARTFLOW</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our diverse team of experts brings together decades of experience in AI, 
            automation, and enterprise software to build the future of intelligent business.
          </p>
        </div>
      </section>

      {/* Team Sections */}
      {categories.map((category) => (
        <section key={category} className="py-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-3">
              <span className="w-1 h-8 bg-primary rounded-full" />
              {category}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamMembers
                .filter((member) => member.category === category)
                .map((member) => (
                  <div
                    key={member.name}
                    className="bg-card rounded-xl border border-border p-6 hover:border-primary/50 transition-all hover:shadow-lg group"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-16 h-16 rounded-full object-cover ring-2 ring-primary/20 group-hover:ring-primary/50 transition-all"
                      />
                      <div>
                        <h3 className="font-semibold text-foreground">{member.name}</h3>
                        <p className="text-sm text-muted-foreground">{member.role}</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Twitter className="w-4 h-4" />
                      </a>
                      <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                        <Mail className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      ))}

      {/* Join Us CTA */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Join Our Team</h2>
          <p className="text-muted-foreground mb-6">
            We're always looking for talented individuals who share our passion for 
            innovation and excellence.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
          >
            View Open Positions
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Teams;
