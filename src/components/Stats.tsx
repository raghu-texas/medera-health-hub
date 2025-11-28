const Stats = () => {
  const stats = [
    {
      number: "2,500+",
      label: "Healthcare Facilities",
      description: "Trust our platform globally"
    },
    {
      number: "99.9%",
      label: "Uptime Guarantee",
      description: "Always available when you need it"
    },
    {
      number: "5M+",
      label: "Patient Records",
      description: "Securely managed daily"
    },
    {
      number: "45%",
      label: "Time Saved",
      description: "On administrative tasks"
    }
  ];

  return (
    <section className="py-4 bg-gradient-to-br from-primary via-secondary to-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-2">
                <span className="text-5xl lg:text-6xl font-bold text-white">
                  {stat.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-white/90 mb-2">
                {stat.label}
              </h3>
              <p className="text-white/80">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
