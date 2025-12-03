import practiceMgmtImage from "@/assets/feature-practice-mgmt.png";
import patientPortalImage from "@/assets/feature-patient-portal.png";
import revenueCycleImage from "@/assets/feature-revenue-cycle.png";
import emrImage from "@/assets/feature-emr.png";
import referralImage from "@/assets/referral.jpeg";
import hrImage from "@/assets/feature-hr.png";
import accountsPayableImage from "@/assets/feature-accounts-payable.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
const HealthcareFeatures = () => {
  const features = [{
    image: practiceMgmtImage,
    title: "Practice Management Solutions",
    description: "Comprehensive practice management software that streamlines scheduling, billing, and workflow optimization. Our integrated platform helps you manage every aspect of your healthcare practice efficiently, from appointment booking to revenue cycle management. Reduce administrative burden and focus more on patient care with our intelligent automation features."
  }, {
    image: patientPortalImage,
    title: "Patient Portal & Engagement",
    description: "Empower your patients with 24/7 access to their health records, lab results, and appointment scheduling. Our secure patient portal enhances communication between providers and patients, improving satisfaction and outcomes. Features include online bill pay, prescription refills, secure messaging, and telehealth integration for modern healthcare delivery."
  }, {
    image: emrImage,
    title: "Electronic Medical Records",
    description: "Advanced EMR system designed for seamless clinical documentation and data management. Our intuitive interface reduces charting time while ensuring accurate, comprehensive patient records. Built-in clinical decision support, customizable templates, and interoperability standards help you deliver evidence-based care efficiently and effectively."
  }, {
    image: revenueCycleImage,
    title: "Revenue Cycle Management",
    description: "Maximize your practice's financial performance with our intelligent billing and revenue cycle management solution. Automated claim submission, denial management, and real-time eligibility verification streamline your billing processes. Our analytics dashboard provides insights into financial performance, helping you identify opportunities for revenue optimization."
  }, {
    image: hrImage,
    title: "Human Resources",
    description: "Manage and approve your staff's time punches, time off records for payroll processing with ADP."
  }, {
    image: accountsPayableImage,
    title: "Accounts Payable",
    description: "Scan and upload new invoices to track and manage payables."
  }, {
    image: referralImage,
    title: "Referral Portal",
    description: "Streamline patient referrals with our secure and efficient referral portal, ensuring seamless communication between providers."
  }];
  const lightBgTitles = ["Practice Management Solutions", "Electronic Medical Records", "Human Resources", "Referral Portal"];
  return <section className="pt-8 pb-8 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16">
          <h2 className="font-bold mb-4 text-center uppercase tracking-wide text-[40px] leading-tight" style={{
          color: '#2589CB'
        }}>
            <span className="block">YOUR ORAL SURGERY</span>
            <span className="block">PRACTICE MANAGEMENT SOLUTION</span>
          </h2>
            <p className="text-xl text-muted-foreground text-center">
              <span className="block">Our cloud-based technology delivers powerful solutions – providing</span>
              <span className="block">the practice management tools necessary for your success.</span>
            </p>
        </div>

        <div className="space-y-8">
          {features.map((feature, index) => {
          const isLightBg = lightBgTitles.includes(feature.title);
          return <div key={index} className={`grid lg:grid-cols-2 gap-8 items-center p-8 rounded-2xl ${isLightBg ? 'bg-[#FAFCFD] text-black' : ''}`}>
                {/* Image */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <img src={feature.image} alt={feature.title} className="w-full h-[400px] object-cover" />
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <h3 className={`text-3xl font-bold mb-4 ${isLightBg ? 'text-black' : 'text-foreground'}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-lg leading-relaxed ${isLightBg ? 'text-black/90' : 'text-muted-foreground'}`}>
                    {feature.description}
                  </p>
                  <div className="mt-6">
                    <Link to="/products-services">
                      <Button size="lg" className="bg-[#980826] hover:bg-[#7d0620] text-white shadow-sm">
                        Explore more
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>;
        })}
        </div>
      </div>
    </section>;
};
export default HealthcareFeatures;