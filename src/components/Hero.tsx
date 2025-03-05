
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-[40%] -right-[25%] w-[80%] h-[80%] rounded-full bg-primary/5 blur-3xl animate-float" />
        <div className="absolute top-[60%] -left-[10%] w-[50%] h-[50%] rounded-full bg-blue-500/5 blur-3xl animate-scale" />
      </div>

      <div className="container px-4 mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div
            className={`w-full md:w-1/2 space-y-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }`}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
              Fashion AI Assistant
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Transform Your Fashion Business with{" "}
              <span className="text-primary">WhatsApp</span>
            </h1>
            <p className="text-lg text-fashion-600 max-w-xl">
              Engage clients through WhatsApp with personalized fashion advice, virtual try-ons, and automated styling recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button className="bg-primary hover:bg-primary/90 text-white px-6 py-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-xl group">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" className="px-6 py-6 rounded-lg border-2">
                Learn More
              </Button>
            </div>
          </div>

          <div
            className={`w-full md:w-1/2 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl -z-10 animate-pulse-slow"></div>
              <div className="glass-card rounded-3xl overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.01] duration-500">
                <img
                  src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1788&q=80"
                  alt="Men's Fashion Dashboard"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
