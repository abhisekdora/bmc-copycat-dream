import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import newsData from "@/data/news.json";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = newsData.find((n) => n.id === id);

  if (!article) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-32 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/" className="text-primary hover:underline inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

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

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>

          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 ${getCategoryColor(article.categoryColor)}`}
          >
            {article.category}
          </span>

          <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            {article.title}
          </h1>

          <div className="rounded-2xl overflow-hidden border border-border mb-10">
            <img
              src={article.image}
              alt={article.title}
              className="w-full aspect-video object-cover"
            />
          </div>

          <article className="prose prose-lg prose-invert max-w-none">
            {article.description.split("\n\n").map((paragraph, i) => {
              if (paragraph.startsWith("- ")) {
                const items = paragraph.split("\n").filter(Boolean);
                return (
                  <ul key={i} className="space-y-2 my-6">
                    {items.map((item, j) => (
                      <li
                        key={j}
                        className="text-muted-foreground flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                        <span>{item.replace(/^- /, "")}</span>
                      </li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {paragraph}
                </p>
              );
            })}
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsDetail;
