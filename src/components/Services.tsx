import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Brain, HeartPulse, Stethoscope } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Patient Health Information",
      description: "Comprehensive health records management with secure access to your complete medical history, test results, and treatment plans.",
      color: "primary",
    },
    {
      icon: HeartPulse,
      title: "Best Hospitals Network",
      description: "Connect with top-tier hospitals offering world-class facilities, experienced specialists, and state-of-the-art medical equipment.",
      color: "secondary",
    },
    {
      icon: Brain,
      title: "Advanced Treatments",
      description: "Access cutting-edge treatment options for critical diseases using the latest medical technology and innovative therapeutic approaches.",
      color: "accent",
    },
    {
      icon: Activity,
      title: "Health Monitoring",
      description: "Real-time health tracking and monitoring services to keep you informed about your wellness journey and vital health metrics.",
      color: "primary",
    },
  ];

  return (
    <section id="services" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Our Healthcare{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Comprehensive healthcare solutions tailored to your needs, powered by advanced technology and compassionate care.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => {
            const Icon = service.icon;
            const iconColorClass = service.color === 'primary' ? 'text-primary' : 
                                    service.color === 'secondary' ? 'text-secondary' : 
                                    'text-accent';
            const bgColorClass = service.color === 'primary' ? 'bg-primary/10' : 
                                  service.color === 'secondary' ? 'bg-secondary/10' : 
                                  'bg-accent/10';
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
              >
                <CardHeader>
                  <div className={`h-14 w-14 rounded-xl ${bgColorClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={iconColorClass} size={28} />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
