import { Link } from "react-router-dom";
import { Check } from "lucide-react";
import workflowAutomation from "@/assets/workflow-automation.jpg";
import cloudSecurity from "@/assets/cloud-security.jpg";
import { Button } from "@/components/ui/button";

const solutions = [
  {
    image: cloudSecurity,
    title: "Cloud Security & Compliance",
    description:
      "Protect sensitive patient data with our robust cloud security solutions that ensure compliance with healthcare regulations and safeguard against cyber threats.",
    features: [
      "HIPAA-compliant data storage",
      "Advanced threat detection",
      "Secure access controls",
      "Regular compliance audits",
    ],
  },
  {
    image: workflowAutomation,
    title: "Intelligent Workflow Automation",
    description:
      "Streamline repetitive tasks and reduce administrative burden with AI-powered automation that learns from your practice patterns and optimizes operations.",
    features: [
      "Automated appointment scheduling",
      "Smart prescription management",
      "Automated billing and claims processing",
      "Intelligent task prioritization",
    ],
  },
];

const Solutions = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-16">
          {solutions.map((solution, index) => {
            const light = solution.title === "Cloud Security & Compliance";
            return (
              <div
                key={index}
                className="grid lg:grid-cols-2 gap-12 items-center p-8 rounded-2xl"
                style={{
                  backgroundColor: light
                    ? "#FAFCFD"
                    : index % 2 === 0
                    ? "#617CB5"
                    : "transparent",
                }}
              >
                <div
                  className={`${
                    light
                      ? "lg:order-2"
                      : solution.title === "Intelligent Workflow Automation"
                      ? ""
                      : index % 2 === 1
                      ? "lg:order-2"
                      : ""
                  } animate-fade-in overflow-hidden rounded-2xl shadow-2xl`}
                >
                  <img
                    src={solution.image}
                    alt={solution.title}
                    className="w-full h-[400px] object-cover hover:scale-110 transition-transform duration-700 ease-out"
                  />
                </div>
                <div
                  className={`animate-fade-in ${light ? "lg:order-1" : ""}`}
                >
                  <h3
                    className={`text-3xl font-bold mb-4 ${
                      light
                        ? "text-black"
                        : index % 2 === 0
                        ? "text-white"
                        : ""
                    }`}
                  >
                    {solution.title}
                  </h3>
                  <p
                    className={`text-lg mb-6 ${
                      light
                        ? "text-black/90"
                        : index % 2 === 0
                        ? "text-white/90"
                        : "text-muted-foreground"
                    }`}
                  >
                    {solution.description}
                  </p>
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className={`flex items-center gap-3 ${
                          light
                            ? "text-black/90"
                            : index % 2 === 0
                            ? "text-white/90"
                            : "text-muted-foreground"
                        }`}
                      >
                        <Check
                          className={`flex-shrink-0 ${
                            light
                              ? "text-primary"
                              : index % 2 === 0
                              ? "text-white"
                              : "text-primary"
                          }`}
                          size={18}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6">
                    <Link to="/products-services">
                      <Button
                        size="lg"
                        className="bg-[#980826] hover:bg-[#7d0620] text-white shadow-sm"
                      >
                        Explore more
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
