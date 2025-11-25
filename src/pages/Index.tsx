import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import HealthcareFeatures from "@/components/HealthcareFeatures";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Stats />
        <HealthcareFeatures />
        <Solutions />
        <Services />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
