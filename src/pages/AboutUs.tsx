import teamCollaboration from "@/assets/team-collaboration.jpg";
import partnersImage from "@/assets/image.png";
import practiceMgmtImage from "@/assets/feature-practice-mgmt.png";
import revenueCycleImage from "@/assets/feature-revenue-cycle.png";
import accountsPayableImage from "@/assets/feature-accounts-payable.png";
import cloudSecurity from "@/assets/cloud-security.jpg";

const AboutUs = () => {
  return (
    <div>
      <main>
        {/* Page Title Section with Horizontal Gradient */}
        <section className="pt-24 pb-2">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative mb-2">
              {/* Centered fit-content container */}
              <div className="flex justify-center">
                <div
                  className="relative inline-block"
                  style={{ width: 'min(100%, 56rem)', height: 'fit-content' }}
                >
                  {/* Horizontal gradient background */}
                  <div
                    className="absolute inset-0 rounded-3xl overflow-hidden"
                    style={{
                      background: "linear-gradient(90deg, #EAF3FA 0%, #F4F8FC 50%, #EAF3FA 100%)"
                    }}
                  />
                  {/* Radial soft highlights */}
                  <div className="absolute top-4 left-10 w-32 h-32 bg-[#E3EEF7] rounded-full blur-3xl opacity-70" />
                  <div className="absolute bottom-4 right-10 w-40 h-40 bg-[#E3EEF7] rounded-full blur-3xl opacity-60" />
                  {/* Content */}
                  <div className="relative text-center py-4 px-10 w-full">
                    <div className="flex items-center justify-center gap-6 mb-3">
                      <div className="h-1 w-16 bg-gradient-to-r from-transparent to-[#2589CB] rounded-full" />
                      <div className="h-2 w-2 bg-[#2589CB] rounded-full" />
                      <div className="h-1 w-16 bg-gradient-to-l from-transparent to-[#2589CB] rounded-full" />
                    </div>
                    <h1 className="text-4xl sm:text-5xl font-bold mb-3 tracking-tight text-[#0D47A1]">
                      About <span className="text-[#2589CB]">Us</span>
                    </h1>
                    <div className="flex items-center justify-center gap-6 mt-1">
                      <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-[#617CB5]" />
                      <div className="h-3 w-3 border-2 border-[#2589CB] rounded-full" />
                      <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-[#617CB5]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-4 pb-24 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Image - Left Side */}
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src={teamCollaboration}
                  alt="OnlineMedSys Team"
                  className="w-full h-[500px] object-cover"
                />
              </div>

              {/* Content - Right Side */}
              <div className="space-y-6">
                {/* Modern Title Container */}
                <div className="relative">
                  <div 
                    className="inline-block px-8 py-4 rounded-lg shadow-lg transform -skew-x-2"
                    style={{ backgroundColor: '#980826' }}
                  >
                    <h2 className="text-2xl sm:text-3xl font-bold text-white transform skew-x-2">
                      WELCOME TO ONLINE MEDSYS.COM
                    </h2>
                  </div>
                  <div 
                    className="absolute -bottom-2 -right-2 w-full h-full rounded-lg -z-10 opacity-30"
                    style={{ backgroundColor: '#980826' }}
                  />
                </div>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p className="font-semibold text-foreground">
                    OnlineMedSys.com is your complete Practice Management Solution.
                  </p>
                  <p>
                    For over 25 years, the OnlineMedSys.com system has provided features that translate
                    into increased productivity and enhanced patient care. Designed for oral surgery by
                    a network of oral surgeons, the application modules are tightly integrated to minimize
                    the need for duplicate data entry, to streamline the workflow process, and to give
                    comprehensive reports about patients and practice activity.​
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Services Cards */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
            {[
              {
                title: "Additional Business Service Options",
                description:
                  "By combining the talents of our professionals and partners, we can provide you with additional tools and the insight for complete and efficient Practice Management. We have built a suite of services and products that gives providers and staff the ability to solve the practical challenges of running a practice more efficiently and profitably.",
                image: practiceMgmtImage,
              },
              {
                title: "Full Financial Services",
                description:
                  "OnlineMedSys.com offers a complete suite of practice management services by providing comprehensive financial and operational services to medical and dental practices through OMS Partners at www.OMSP.com.",
                image: accountsPayableImage,
              },
              {
                title: "Billing & Collections",
                description:
                  "Streamline your operational workflow of the traditional billing and collection processes with help from OMS Partners. Patient scheduling, patient alerts, patient office flow, proper billing, and timely collections are the lifeblood of any medical and dental practice.",
                image: revenueCycleImage,
              },
              {
                title: "IT Review",
                description:
                  "OnlineMedSys.com can work with your local technology vendor to review the design, purchase and installation of your customized practice's computer resources to ensure compatibility with our applications.",
                image: cloudSecurity,
              },
            ].map((card, idx) => (
              <div
                key={idx}
                className={`grid lg:grid-cols-2 gap-8 items-center p-8 rounded-2xl bg-white shadow-sm`}
              >
                {/* Image */}
                <div className={`${idx % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-[360px] object-cover"
                    />
                  </div>
                </div>
                {/* Content */}
                <div className={`${idx % 2 === 1 ? "lg:order-1" : ""}`}>
                  <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">
                    {card.title}
                  </h3>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section className="py-0">
          <div className="w-full">
            <img
              src={partnersImage}
              alt="Our Partners - DrFirst, OMS Partners LLC, Texas AI"
              className="w-full h-auto object-cover"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUs;
