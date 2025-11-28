import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Briefcase, Users, FileText, Scan, UserCircle, CreditCard, Workflow, Share2, Server, ShieldCheck } from "lucide-react";
import flowChart from "@/assets/flow-chart.png";

const ProductsServices = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const services = [
    {
      icon: Briefcase,
      title: "Practice Manager",
      description: "Streamline your medical practice operations with comprehensive management tools for scheduling, billing, and administrative tasks."
    },
    {
      icon: Users,
      title: "Human Resource",
      description: "Efficient HR solutions for healthcare facilities including staff management, training coordination, and compliance tracking."
    },
    {
      icon: FileText,
      title: "Consent Forms",
      description: "Digital consent management system ensuring secure, compliant documentation for all medical procedures and treatments."
    },
    {
      icon: Scan,
      title: "Scan Application",
      description: "Advanced medical imaging and scanning solutions with integrated AI analysis for accurate diagnostic results."
    },
    {
      icon: UserCircle,
      title: "Patient Portal",
      description: "Secure online portal for patients to access health records, test results, appointments, and communicate with providers."
    },
    {
      icon: Share2,
      title: "Referral Portal",
      description: "Streamline provider-to-provider referrals with secure data exchange and real-time tracking of patient handoffs."
    },
    {
      icon: Server,
      title: "EMR Systems",
      description: "Robust electronic medical records platform enabling efficient clinical documentation, interoperability, and decision support."
    },
    {
      icon: ShieldCheck,
      title: "Provider Credential",
      description: "Automated credentialing management to accelerate onboarding, maintain compliance, and reduce administrative overhead."
    },
    {
      icon: CreditCard,
      title: "Account Payable",
      description: "Automated financial management system for handling payments, invoicing, and maintaining transparent billing records."
    },
    {
      icon: Workflow,
      title: "Process Chart",
      description: "Comprehensive workflow visualization showing the integration of all systems from practice management to financial reporting.",
      isProcessChart: true
    }
  ];

  return (
    <div>
        <section className="py-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header with Horizontal Gradient */}
            <div className="relative mb-12">
              {/* Gradient background (horizontal) */}
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(90deg, #EAF3FA 0%, #F4F8FC 50%, #EAF3FA 100%)"
                }}
              />
              {/* Soft radial highlights */}
              <div className="absolute top-6 left-10 w-40 h-40 bg-[#E3EEF7] rounded-full blur-3xl opacity-70" />
              <div className="absolute bottom-6 right-10 w-48 h-48 bg-[#E3EEF7] rounded-full blur-3xl opacity-60" />

              {/* Content */}
              <div className="relative text-center max-w-4xl mx-auto py-14 px-10">
                {/* Decorative top marker */}
                <div className="flex items-center justify-center gap-6 mb-6">
                  <div className="h-1 w-16 bg-gradient-to-r from-transparent to-[#2589CB] rounded-full" />
                  <div className="h-2 w-2 bg-[#2589CB] rounded-full" />
                  <div className="h-1 w-16 bg-gradient-to-l from-transparent to-[#2589CB] rounded-full" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight">
                  Our Healthcare <span className="text-[#2589CB]">Services</span>
                </h1>
                {/* Decorative bottom marker */}
                <div className="flex items-center justify-center gap-6 mt-2">
                  <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-[#617CB5]" />
                  <div className="h-3 w-3 border-2 border-[#2589CB] rounded-full" />
                  <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-[#617CB5]" />
                </div>
              </div>
            </div>

            {/* Introduction Text */}
            <div className="max-w-4xl mx-auto mb-16 text-lg text-muted-foreground leading-relaxed space-y-4">
              <p>
                The OnlineMedSys.com system provides many features that translate into increased productivity 
                and enhanced patient care. The application modules are tightly integrated to minimize the need 
                for duplicate data entry, to streamline and speed the workflow process, and to give 
                comprehensive reports about patients and practice activity.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We link directly to the internet-providing you with fast, secure information anytime, anywhere</li>
                <li>We provide robust security and world-wide accessibility</li>
                <li>You manage your practice – we manage the technology</li>
              </ul>
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
        </section>
      {/* Process Chart Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Process Chart</DialogTitle>
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
          </div>
        </DialogContent>
      </Dialog>

    </div>
  );
};

export default ProductsServices;
