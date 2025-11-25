import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import statsDashboard from "@/assets/stats-dashboard.jpg";
import teamCollaboration from "@/assets/team-collaboration.jpg";
import workflowAutomation from "@/assets/workflow-automation.jpg";
import cloudSecurity from "@/assets/cloud-security.jpg";

const Solutions = () => {
  const solutions = [
    {
      image: statsDashboard,
      title: "Real-Time Analytics & Insights",
      description: "Make data-driven decisions with comprehensive analytics dashboards that track patient outcomes, operational efficiency, and financial performance in real-time.",
      features: [
        "Customizable reporting dashboards",
        "Predictive analytics for patient care",
        "Financial performance tracking",
        "Population health management insights"
      ]
    },
    {
      image: teamCollaboration,
      title: "Seamless Team Collaboration",
      description: "Connect your entire healthcare team with integrated communication tools that ensure everyone stays informed and coordinated for optimal patient care delivery.",
      features: [
        "Secure messaging and file sharing",
        "Multi-disciplinary care coordination",
        "Real-time patient data access",
        "Cross-department workflow integration"
      ]
    },
    {
      image: workflowAutomation,
      title: "Intelligent Workflow Automation",
      description: "Streamline repetitive tasks and reduce administrative burden with AI-powered automation that learns from your practice patterns and optimizes operations.",
      features: [
        "Automated appointment scheduling",
        "Smart prescription management",
        "Automated billing and claims processing",
        "Intelligent task prioritization"
      ]
    },
    {
      image: cloudSecurity,
      title: "Enterprise-Grade Security",
      description: "Protect sensitive patient data with military-grade encryption and comprehensive compliance tools that meet HIPAA, GDPR, and other regulatory requirements.",
      features: [
        "End-to-end data encryption",
        "HIPAA compliant infrastructure",
        "Automated compliance reporting",
        "24/7 security monitoring"
      ]
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Complete Healthcare{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Management Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything your practice needs to deliver exceptional patient care and drive operational excellence
          </p>
        </div>

        <div className="space-y-24">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} animate-fade-in`}>
                <Card className="overflow-hidden border-none shadow-card hover:shadow-soft transition-all duration-300">
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-[500px] object-cover"
                  />
                </Card>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} space-y-6 animate-fade-in`}>
                <h3 className="text-3xl lg:text-4xl font-bold text-foreground">
                  {solution.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {solution.description}
                </p>
                
                <div className="space-y-3 pt-4">
                  {solution.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <div className="mt-1 rounded-full bg-primary/10 p-1">
                        <Check className="h-4 w-4 text-primary" />
                      </div>
                      <p className="text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
