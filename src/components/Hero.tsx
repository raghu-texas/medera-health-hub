import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Shield, Sparkles } from "lucide-react";
import heroImage from "@/assets/hero-healthcare.jpg";
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Healthcare Technology" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/95 to-background/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 animate-fade-in">
            <Sparkles size={16} />
            <span className="text-sm font-medium">Advanced Healthcare Solutions</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Your Health,{" "}
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Our Priority
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed animate-fade-in">
            Access world-class healthcare services, cutting-edge treatments, and comprehensive patient care. 
            Medera connects you with the best hospitals and advanced medical technology for critical diseases.
          </p>

          {/* Features */}
          

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-in">
            <Button size="lg" className="text-base group">
              Explore Services
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;