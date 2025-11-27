import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <section className="py-24 bg-background">
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
                <h1 className="text-4xl sm:text-5xl font-bold" style={{ color: '#2589CB' }}>
                  WELCOME TO ONLINE MEDSYS.COM
                </h1>
                <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    OnlineMedSys.com is your complete Practice Management Solution.
                  </p>
                  <p>
                    This new web-based technology delivers powerful solutions - providing the healthcare 
                    practice management tools necessary for your success. OnlineMedSys.com was created 
                    and thoroughly tested for the medical community - integrating a suite of management 
                    tools to successfully run and manage practices of any volume. Our team is always 
                    available to work directly with you in order to make your everyday experiences with 
                    OnlineMedSys.com a dream come true.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
