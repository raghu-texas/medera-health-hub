import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import dentalHero1 from "@/assets/dental-hero-1.jpg";
import dentalHero2 from "@/assets/dental-hero-2.jpg";
import dentalHero3 from "@/assets/dental-hero-3.jpg";
import dentalHero4 from "@/assets/dental-hero-4.jpg";
import dentalHero5 from "@/assets/dental-hero-5.jpg";

const Hero = () => {
  const slides = [
    {
      image: dentalHero1,
      title: "AI-Powered Dental Diagnostics",
      subtitle: "Revolutionizing Dental Care",
      description: "Experience cutting-edge AI technology that enables faster, more accurate dental diagnoses for better patient outcomes and treatment planning.",
    },
    {
      image: dentalHero2,
      title: "Advanced Dental Technology",
      subtitle: "Future of Digital Dentistry",
      description: "State-of-the-art 3D imaging and digital x-ray systems delivering precision diagnostics and comprehensive treatment visualization.",
    },
    {
      image: dentalHero3,
      title: "Collaborative Dental Teams",
      subtitle: "Excellence Through Teamwork",
      description: "Expert dental professionals working together with integrated digital workflows to provide comprehensive, coordinated care.",
    },
    {
      image: dentalHero5,
      title: "Robotic-Assisted Dental Surgery",
      subtitle: "Precision & Innovation",
      description: "Advanced robotic technology delivering unmatched precision in complex dental procedures with faster recovery and optimal results.",
    },
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        className="w-full h-screen"
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative w-full h-screen flex items-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 mb-6 animate-fade-in">
                      <span className="text-sm font-medium">{slide.subtitle}</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in text-foreground">
                      {slide.title.split(" ").map((word, i) => (
                        <span key={i}>
                          {i > 0 && " "}
                          {i === slide.title.split(" ").length - 1 ? (
                            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                              {word}
                            </span>
                          ) : (
                            word
                          )}
                        </span>
                      ))}
                    </h1>

                    <p className="text-xl text-foreground mb-8 leading-relaxed animate-fade-in">
                      {slide.description}
                    </p>

                    <div className="flex flex-wrap gap-4 animate-fade-in">
                      <Button size="lg" className="text-base group">
                        Explore Services
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-background/80 backdrop-blur-sm hover:bg-background" />
        <CarouselNext className="right-4 bg-background/80 backdrop-blur-sm hover:bg-background" />
      </Carousel>
    </section>
  );
};

export default Hero;
