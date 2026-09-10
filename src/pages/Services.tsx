
function Services() {
  const services = [
    {
      icon: "🌍",
      title: "Tour Planning",
      description:
        "Plan and organize complete tour packages with destinations, schedules, activities, and travel details.",
    },
    {
      icon: "🎒",
      title: "Tour Packages",
      description:
        "Explore a variety of tour packages designed for different destinations, budgets, and travel preferences.",
    },
    {
      icon: "📅",
      title: "Easy Booking",
      description:
        "Book your favorite tours quickly and manage your bookings from a simple and convenient platform.",
    },
    {
      icon: "🏨",
      title: "Accommodation",
      description:
        "Find and manage suitable accommodation options as part of your complete travel experience.",
    },
    {
      icon: "🚗",
      title: "Transportation",
      description:
        "Get organized transportation options to make traveling between destinations comfortable and convenient.",
    },
    {
      icon: "📋",
      title: "Booking Management",
      description:
        "Keep track of tour bookings, customer information, schedules, and booking status in one place.",
    },
  ];

  return (
    <div className="bg-background text-foreground">
      {/* Hero */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Our Services
          </span>

          <h1 className="mx-auto mt-5 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
            Everything You Need for a{" "}
            <span className="text-primary">Better Journey</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            From discovering destinations to managing bookings, our platform
            provides everything you need to plan and manage your tours easily.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl border bg-background p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-2xl transition-transform duration-300 group-hover:scale-110">
                {service.icon}
              </div>

              <h2 className="text-xl font-semibold">{service.title}</h2>

              <p className="mt-3 leading-7 text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-6 text-sm font-medium text-primary">
                Learn more →
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 pb-20">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground sm:px-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Ready to Start Your Journey?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg leading-7 opacity-90">
            Discover amazing destinations, choose your perfect tour, and make
            your next journey memorable.
          </p>

          <button className="mt-8 rounded-lg bg-background px-6 py-3 font-semibold text-foreground shadow-sm transition hover:opacity-90">
            Explore Tours
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;

