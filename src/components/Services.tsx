import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Users, FileText, Scan, UserCircle, CreditCard } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Practice Manager",
      description: "Streamline your medical practice operations with comprehensive management tools for scheduling, billing, and administrative tasks.",
    },
    {
      icon: Users,
      title: "Human Resource",
      description: "Efficient HR solutions for healthcare facilities including staff management, training coordination, and compliance tracking.",
    },
    {
      icon: FileText,
      title: "Consent Forms",
      description: "Digital consent management system ensuring secure, compliant documentation for all medical procedures and treatments.",
    },
    {
      icon: Scan,
      title: "Scan Application",
      description: "Advanced medical imaging and scanning solutions with integrated AI analysis for accurate diagnostic results.",
    },
    {
      icon: UserCircle,
      title: "Patient Portal",
      description: "Secure online portal for patients to access health records, test results, appointments, and communicate with providers.",
    },
    {
      icon: CreditCard,
      title: "Account Payable",
      description: "Automated financial management system for handling payments, invoicing, and maintaining transparent billing records.",
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
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                style={{ backgroundColor: '#002868' }}
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-primary" size={28} />
                  </div>
                  <CardTitle className="text-xl text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-white/90">
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
