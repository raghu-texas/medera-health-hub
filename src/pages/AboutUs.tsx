import Header from "@/components/Header";
import Footer from "@/components/Footer";
import teamCollaboration from "@/assets/team-collaboration.jpg";

const AboutUs = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Page Title Section */}
        <section className="py-12 bg-gradient-to-r from-[#2589CB] to-[#617CB5]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl font-bold text-white text-center">
              About Us
            </h1>
          </div>
        </section>

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
