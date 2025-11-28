import teamCollaboration from "@/assets/team-collaboration.jpg";

const AboutUs = () => {
  return (
    <div>
      <main>
        {/* Page Title Section with Horizontal Gradient */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative mb-4">
              {/* Horizontal gradient background */}
              <div
                className="absolute inset-0 rounded-3xl overflow-hidden"
                style={{
                  background: "linear-gradient(90deg, #EAF3FA 0%, #F4F8FC 50%, #EAF3FA 100%)"
                }}
              />
              {/* Radial soft highlights */}
              <div className="absolute top-6 left-10 w-40 h-40 bg-[#E3EEF7] rounded-full blur-3xl opacity-70" />
              <div className="absolute bottom-6 right-10 w-48 h-48 bg-[#E3EEF7] rounded-full blur-3xl opacity-60" />
              {/* Content */}
              <div className="relative text-center max-w-4xl mx-auto py-14 px-10">
                <div className="flex items-center justify-center gap-6 mb-6">
                  <div className="h-1 w-16 bg-gradient-to-r from-transparent to-[#2589CB] rounded-full" />
                  <div className="h-2 w-2 bg-[#2589CB] rounded-full" />
                  <div className="h-1 w-16 bg-gradient-to-l from-transparent to-[#2589CB] rounded-full" />
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight text-[#0D47A1]">
                  About <span className="text-[#2589CB]">Us</span>
                </h1>
                <div className="flex items-center justify-center gap-6 mt-2">
                  <div className="h-0.5 w-20 bg-gradient-to-r from-transparent to-[#617CB5]" />
                  <div className="h-3 w-3 border-2 border-[#2589CB] rounded-full" />
                  <div className="h-0.5 w-20 bg-gradient-to-l from-transparent to-[#617CB5]" />
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default AboutUs;
