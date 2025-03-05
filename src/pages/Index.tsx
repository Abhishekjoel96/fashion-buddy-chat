
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import Analytics from "@/components/Analytics";
import Footer from "@/components/Footer";
import { 
  Smartphone, 
  BarChart3, 
  PaintBucket, 
  ShoppingBag, 
  Shirt,
  MessageSquare, 
  Users 
} from "lucide-react";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(element => {
      observer.observe(element);
    });

    return () => {
      document.querySelectorAll('.animate-on-scroll').forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <Hero />

        {/* Features Section */}
        <section id="features" className="py-20">
          <div className="container px-4 mx-auto">
            <div className="text-center mb-16 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Features</h2>
              <p className="text-fashion-600 max-w-2xl mx-auto">
                Discover how our platform can help you connect with your clients and provide personalized fashion experiences.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={Smartphone}
                title="WhatsApp Integration"
                description="Engage with clients directly through WhatsApp, sending personalized recommendations and updates."
                delay={100}
              />
              <FeatureCard 
                icon={Shirt}
                title="Virtual Try-On"
                description="Let clients virtually try on clothing items to visualize how they would look before purchasing."
                delay={200}
              />
              <FeatureCard 
                icon={PaintBucket}
                title="Skin Color Analysis"
                description="Analyze client skin tones to provide tailored color recommendations for their wardrobe."
                delay={300}
              />
              <FeatureCard 
                icon={ShoppingBag}
                title="Product Recommendations"
                description="AI-powered product suggestions based on client preferences and previous purchases."
                delay={400}
              />
              <FeatureCard 
                icon={MessageSquare}
                title="Automated Responses"
                description="Set up automated responses for common client queries and appointment bookings."
                delay={500}
              />
              <FeatureCard 
                icon={Users}
                title="Client Management"
                description="Organize client information, preferences, and interaction history in one place."
                delay={600}
              />
            </div>
          </div>
        </section>

        <Analytics />

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="container px-4 mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="w-full md:w-1/2 animate-on-scroll">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl blur-2xl -z-10 animate-pulse-slow"></div>
                  <div className="glass-card rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1577975882846-431adc8c2009?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                      alt="Fashion consultation"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 space-y-6 animate-on-scroll">
                <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  About Us
                </div>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Revolutionizing Fashion Retail Through Technology
                </h2>
                <p className="text-fashion-600">
                  WhatsApp Fashion combines cutting-edge technology with the personal touch of WhatsApp 
                  to create seamless shopping experiences. Our platform helps fashion businesses connect 
                  with clients on a deeper level, providing personalized recommendations and virtual try-on 
                  experiences that drive sales and build loyalty.
                </p>
                <p className="text-fashion-600">
                  With our advanced analytics, you can track client preferences, measure engagement, 
                  and optimize your fashion offerings for maximum impact. Join the future of fashion retail today.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container px-4 mx-auto text-center">
            <div className="max-w-3xl mx-auto space-y-8 animate-on-scroll">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Transform Your Fashion Business?
              </h2>
              <p className="text-fashion-600 text-lg">
                Join thousands of fashion businesses already using WhatsApp Fashion to increase engagement, 
                boost sales, and provide personalized shopping experiences.
              </p>
              <div className="pt-4">
                <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-lg font-medium">
                  Get Started Today
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
