import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import dentalHero1 from "@/assets/dental-hero-1.jpg";
import dentalHero2 from "@/assets/dental-hero-2.jpg";
import dentalHero3 from "@/assets/dental-hero-3.jpg";

const Hero = () => {
  const slides = [
    {
      image: dentalHero2,
      title: "Your Oral Surgery Practice Management Solution",
      subtitle: "Future of Digital Dentistry",
      description: "Our cloud-based technology delivers powerful solutions – providing the practice management tools necessary for your success."
    },
    {
      image: dentalHero1,
      title: "AI-Powered Dental Diagnostics",
      subtitle: "Revolutionizing Dental Care",
      description: "Experience cutting-edge AI technology that enables faster, more accurate dental diagnoses for better patient outcomes and treatment planning."
    },
    {
      image: dentalHero3,
      title: "Collaborative Dental Teams",
      subtitle: "Excellence Through Teamwork",
      description: "Expert dental professionals working together with integrated digital workflows to provide comprehensive, coordinated care."
    }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        plugins={[
          Autoplay({
            delay: 5000
          })
        ]}
        className="w-full h-screen"
      >
        <CarouselContent className="h-screen -ml-0">
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="pl-0">
              <div className="relative w-full h-screen flex items-center">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                  <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/50 to-transparent" />
                </div>

                {/* Content */}
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                  <div className="max-w-3xl">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in text-foreground">
                      {index === 0 ? (
                        <>
                          <span className="block">Your Oral Surgery</span>
                          <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                            Practice Management Solution
                          </span>
                        </>
                      ) : (
                        slide.title.split(" ").map((word, i) => (
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
                        ))
                      )}
                    </h1>

                    <p className="text-xl text-foreground mb-8 leading-relaxed animate-fade-in">
                      {index === 0 ? (
                        <>
                          <span className="block">Our cloud-based technology delivers powerful solutions –</span>
                          <span className="block">providing the practice management tools necessary for your success.</span>
                        </>
                      ) : (
                        slide.description
                      )}
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
