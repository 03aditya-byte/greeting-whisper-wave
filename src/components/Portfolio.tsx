import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const projects = [
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Mobile Banking App",
    category: "Mobile Design",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Analytics Dashboard",
    category: "Data Visualization",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Social Network",
    category: "Full Stack",
    color: "from-orange-500 to-red-500",
  },
  {
    title: "AI Assistant",
    category: "Machine Learning",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Fitness Tracker",
    category: "Health & Wellness",
    color: "from-teal-500 to-green-500",
  },
];

const Portfolio = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 bg-gradient-to-b from-background to-secondary/20" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Showcasing our best work across various industries and technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden cursor-pointer hover-lift border-2 hover:border-primary/50 transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`h-64 bg-gradient-to-br ${project.color} relative`}>
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                    <ExternalLink className="w-6 h-6 text-gray-900" />
                  </div>
                </div>
              </div>
              <div className="p-6 space-y-2">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
