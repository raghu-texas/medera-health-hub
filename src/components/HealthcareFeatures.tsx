import diagnosticImage from "@/assets/service-diagnostic.jpg";
import telehealthImage from "@/assets/service-telehealth.jpg";
import labImage from "@/assets/service-lab.jpg";
import careImage from "@/assets/service-care.jpg";

const HealthcareFeatures = () => {
  const features = [
    {
      image: diagnosticImage,
      title: "AI-Enhanced Diagnostics",
      description: "Leverage artificial intelligence to analyze medical imaging and patient data with unprecedented accuracy. Our AI systems assist healthcare professionals in detecting diseases earlier and more reliably.",
    },
    {
      image: telehealthImage,
      title: "Virtual Care Solutions",
      description: "Access healthcare professionals from the comfort of your home through secure video consultations. Get prescriptions, follow-up care, and specialist opinions without the need for travel.",
    },
    {
      image: labImage,
      title: "Advanced Laboratory Services",
      description: "State-of-the-art diagnostic testing with automated precision equipment ensures accurate results. Our labs handle everything from routine blood work to specialized genetic testing.",
    },
    {
      image: careImage,
      title: "Personalized Patient Care",
      description: "Experience healthcare tailored to your unique needs with comprehensive treatment plans. Our team coordinates all aspects of your care to ensure the best possible outcomes.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            Advanced Healthcare{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Features
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
              className="grid md:grid-cols-2 gap-8 items-center"
            >
              {/* Image */}
              <div className={`${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HealthcareFeatures;
