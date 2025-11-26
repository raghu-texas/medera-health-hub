import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Briefcase, Users, FileText, Scan, UserCircle, CreditCard, Workflow } from "lucide-react";
import flowChart from "@/assets/flow-chart.png";

const Services = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

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
    {
      icon: Workflow,
      title: "Process Chart",
      description: "Comprehensive workflow visualization showing the integration of all systems from practice management to financial reporting.",
      isProcessChart: true,
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
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
                className="group transition-all duration-300 hover:-translate-y-1 border-border/50 cursor-pointer"
                style={{ backgroundColor: '#0066b1' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#A9A9A9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = '#0066b1';
                }}
                onClick={() => service.isProcessChart && setIsDialogOpen(true)}
              >
                <CardHeader>
                  <div className="h-14 w-14 rounded-xl bg-white/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="text-white" size={28} />
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

      {/* Process Chart Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">System Process Workflow</DialogTitle>
            <DialogDescription>
              Our integrated healthcare management system connects all essential components for seamless operations.
            </DialogDescription>
          </DialogHeader>
          <div className="mt-4">
            <img 
              src={flowChart} 
              alt="Process Workflow Chart" 
              className="w-full h-auto rounded-lg"
            />
            <div className="mt-6 space-y-3 text-sm text-muted-foreground">
              <p>
                <strong className="text-foreground">Practice Manager:</strong> Central hub for scheduling diagnostics and managing patient records electronically.
              </p>
              <p>
                <strong className="text-foreground">Human Resources:</strong> Coordinates with payroll processing and maintains template charts for staff management.
              </p>
              <p>
                <strong className="text-foreground">Group Purchasing & Accounts Payable:</strong> Manages expenses through invoice processing to maintain financial statements.
              </p>
              <p>
                <strong className="text-foreground">Integrated System:</strong> All components work together to deliver comprehensive practice management from patient care to financial reporting.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Services;
