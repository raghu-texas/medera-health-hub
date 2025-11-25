import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HealthcareFeatures from "@/components/HealthcareFeatures";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HealthcareFeatures />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
