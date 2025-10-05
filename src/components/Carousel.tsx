import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const slides = [
  {
    title: "Innovation at Scale",
    description: "Building tomorrow's technology with today's vision",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Design Excellence",
    description: "Where creativity meets functionality",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Performance Driven",
    description: "Speed and reliability in every line of code",
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "User Focused",
    description: "Creating experiences that users love",
    color: "from-orange-500 to-yellow-500",
  },
];

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <Card className="max-w-5xl mx-auto overflow-hidden border-2 shadow-glow">
          <div className="relative h-96 md:h-[500px]">
            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-700 ${
                  index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              >
                <div className={`h-full bg-gradient-to-br ${slide.color} flex items-center justify-center p-8 md:p-16`}>
                  <div className="text-center text-white space-y-4 animate-fade-in-up">
                    <h3 className="text-4xl md:text-6xl font-bold">{slide.title}</h3>
                    <p className="text-xl md:text-2xl opacity-90">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white ripple-effect"
              onClick={prevSlide}
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white ripple-effect"
              onClick={nextSlide}
            >
              <ChevronRight className="w-6 h-6" />
            </Button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? "bg-white w-8" : "bg-white/50"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default Carousel;
