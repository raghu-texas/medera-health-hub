import practiceMgmtImage from "@/assets/feature-practice-mgmt.png";
import patientPortalImage from "@/assets/feature-patient-portal.png";
import revenueCycleImage from "@/assets/feature-revenue-cycle.png";
import emrImage from "@/assets/feature-emr.png";
import referralImage from "@/assets/referral.jpeg";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HealthcareFeatures = () => {
  const features = [
    {
      image: practiceMgmtImage,
      title: "Practice Management Solutions",
      description: "Comprehensive practice management software that streamlines scheduling, billing, and workflow optimization. Our integrated platform helps you manage every aspect of your healthcare practice efficiently, from appointment booking to revenue cycle management. Reduce administrative burden and focus more on patient care with our intelligent automation features.",
    },
    {
      image: patientPortalImage,
      title: "Patient Portal & Engagement",
      description: "Empower your patients with 24/7 access to their health records, lab results, and appointment scheduling. Our secure patient portal enhances communication between providers and patients, improving satisfaction and outcomes. Features include online bill pay, prescription refills, secure messaging, and telehealth integration for modern healthcare delivery.",
    },
    {
      image: emrImage,
      title: "Electronic Medical Records",
      description: "Advanced EMR system designed for seamless clinical documentation and data management. Our intuitive interface reduces charting time while ensuring accurate, comprehensive patient records. Built-in clinical decision support, customizable templates, and interoperability standards help you deliver evidence-based care efficiently and effectively.",
    },
    {
      image: revenueCycleImage,
      title: "Revenue Cycle Management",
      description: "Maximize your practice's financial performance with our intelligent billing and revenue cycle management solution. Automated claim submission, denial management, and real-time eligibility verification streamline your billing processes. Our analytics dashboard provides insights into financial performance, helping you identify opportunities for revenue optimization.",
    },
    {
      image: referralImage,
      title: 'Referral Portal',
      description: 'Streamline patient referrals with our secure and efficient referral portal, ensuring seamless communication between providers.',
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span style={{ color: '#2589CB' }}>
              Your Complete Practice Management Solution
            </span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Discover our comprehensive suite of healthcare services designed to provide exceptional care.
          </p>
        </div>

        <div className="space-y-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`grid lg:grid-cols-2 gap-12 items-center p-8 rounded-2xl ${feature.title === 'Practice Management Solutions' || feature.title === 'Electronic Medical Records' || feature.title === 'Intelligent Workflow Automation' || feature.title === 'Referral Portal' ? 'bg-[#FAFCFD] text-black' : ''}`}
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-[400px] object-cover"
                    onError={(e) => {
                      const img = e.currentTarget as HTMLImageElement;
                      if (feature.title === 'Referral Portal') {
                        img.src = '/assets/feature-referral-portal.png';
                      }
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className={`text-3xl font-bold mb-4 ${feature.title === 'Practice Management Solutions' || feature.title === 'Electronic Medical Records' || feature.title === 'Intelligent Workflow Automation' || feature.title === 'Referral Portal' ? 'text-black' : 'text-foreground'}`}>
                  {feature.title}
                </h3>
                <p className={`text-lg leading-relaxed ${feature.title === 'Practice Management Solutions' || feature.title === 'Electronic Medical Records' || feature.title === 'Intelligent Workflow Automation' || feature.title === 'Referral Portal' ? 'text-black/90' : 'text-muted-foreground'}`}>
                  {feature.description}
                </p>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareFeatures;
