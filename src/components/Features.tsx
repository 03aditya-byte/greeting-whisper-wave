import { Code2, Palette, Zap, Shield, Layers, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const features = [
  {
    icon: Code2,
    title: "Clean Code",
    description: "Write maintainable, scalable code following industry best practices and modern standards.",
  },
  {
    icon: Palette,
    title: "Stunning Design",
    description: "Pixel-perfect interfaces that captivate users and deliver exceptional experiences.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance ensuring your applications load instantly and run smoothly.",
  },
  {
    icon: Shield,
    title: "Secure by Default",
    description: "Built-in security measures to protect your data and users from vulnerabilities.",
  },
  {
    icon: Layers,
    title: "Component Library",
    description: "Comprehensive collection of reusable components to accelerate development.",
  },
  {
    icon: Rocket,
    title: "Deploy Anywhere",
    description: "Seamless deployment to any platform with zero configuration required.",
  },
];

const Features = () => {
  const { elementRef, isVisible } = useIntersectionObserver();

  return (
    <section className="py-24 bg-secondary/20" ref={elementRef}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Powerful <span className="text-gradient">Features</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to build modern web applications that stand out
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`group p-6 hover-lift hover:shadow-glow border-2 hover:border-primary/50 transition-all duration-300 ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
