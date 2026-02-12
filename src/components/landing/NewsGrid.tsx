import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import newsData from "@/data/news.json";

const news = newsData.slice(0, 3);

const getGradient = (gradient: string) => {
  switch (gradient) {
    case "gradient-1":
      return "bg-gradient-to-br from-primary/30 via-[hsl(var(--purple))]/20 to-primary/10";
    case "gradient-2":
      return "bg-gradient-to-br from-accent/30 via-accent/10 to-[hsl(var(--purple))]/20";
    case "gradient-3":
      return "bg-gradient-to-br from-[hsl(var(--purple))]/30 via-primary/20 to-accent/10";
    default:
      return "bg-gradient-to-br from-primary/30 to-primary/10";
  }
};

const getCategoryColor = (color: string) => {
  switch (color) {
    case "primary":
      return "bg-primary/20 text-primary";
    case "accent":
      return "bg-accent/20 text-accent";
    case "purple":
      return "bg-[hsl(var(--purple))]/20 text-[hsl(var(--purple))]";
    default:
      return "bg-primary/20 text-primary";
  }
};

const NewsGrid = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Latest <span className="gradient-text">News</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Stay updated with the latest innovations, customer stories, and
              industry insights
            </p>
          </div>
          {/* <a
            href="#"
            className="mt-4 md:mt-0 inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors"
          >
            View all news
            <ArrowRight className="w-4 h-4 ml-1" />
          </a> */}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {news.map((item, index) => (
            <Link
              key={index}
              to={`/news/${item.id}`}
              className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
            >
              {/* Image */}
              <div
                className="aspect-video relative overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: `url(${item.image})`,
                }}
              >
                {/* <div
                  className="absolute inset-0 opacity-30"
                  style={{
                    backgroundImage: `linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                                     linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)`,
                    backgroundSize: "20px 20px",
                  }}
                /> */}
              </div>

              {/* Content */}
              <div className="p-6">
                <span
                  className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getCategoryColor(
                    item.categoryColor,
                  )}`}
                >
                  {item.category}
                </span>
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm line-clamp-8">
                  {item.description}
                </p>
                <div className="mt-4 flex items-center text-primary font-medium text-sm">
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;
