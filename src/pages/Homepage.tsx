export default function Homepage() {
  const popularTours = [
    {
      title: "Sajek Valley Adventure",
      location: "Rangamati",
      price: "$120",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Cox's Bazar Sea Escape",
      location: "Cox's Bazar",
      price: "$180",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Sundarbans Wildlife Tour",
      location: "Khulna",
      price: "$210",
      image:
        "https://images.unsplash.com/photo-1519046904884-53103b34b206?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative h-[85vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1600&auto=format&fit=crop"
          alt="Travel"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55" />

        <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center text-white">
          <p className="mb-4 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
            Explore Bangladesh Like Never Before
          </p>

          <h1 className="max-w-4xl text-5xl font-bold leading-tight md:text-7xl">
            Discover Amazing Tours & Adventures
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-200 md:text-xl">
            Find breathtaking destinations, affordable travel packages, and unforgettable memories with our modern tour management platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button className="rounded-2xl bg-white px-7 py-3 text-lg font-semibold text-slate-900 shadow-xl transition hover:scale-105">
              Explore Tours
            </button>

            <button className="rounded-2xl border border-white/40 bg-white/10 px-7 py-3 text-lg font-semibold backdrop-blur-md transition hover:bg-white/20">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-16 md:grid-cols-4">
        {[
          { label: "Happy Travelers", value: "12K+" },
          { label: "Tour Packages", value: "250+" },
          { label: "Destinations", value: "80+" },
          { label: "Positive Reviews", value: "98%" },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-3xl bg-white p-8 text-center shadow-sm ring-1 ring-slate-200"
          >
            <h2 className="text-4xl font-bold text-slate-900">
              {item.value}
            </h2>
            <p className="mt-2 text-slate-600">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Popular Tours */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Popular Tours
            </p>
            <h2 className="mt-2 text-4xl font-bold">
              Trending Destinations
            </h2>
          </div>

          <button className="rounded-xl border border-slate-300 px-5 py-2 font-medium transition hover:bg-slate-100">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {popularTours.map((tour) => (
            <div
              key={tour.title}
              className="group overflow-hidden rounded-3xl bg-white shadow-md transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-72 overflow-hidden">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-lg">
                  {tour.price}
                </div>
              </div>

              <div className="p-6">
                <p className="text-sm text-slate-500">{tour.location}</p>

                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {tour.title}
                </h3>

                <p className="mt-4 text-slate-600">
                  Experience beautiful landscapes, local culture, and premium travel services.
                </p>

                <button className="mt-6 w-full rounded-2xl bg-slate-900 py-3 font-semibold text-white transition hover:bg-slate-800">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              Why Choose Us
            </p>
            <h2 className="mt-3 text-4xl font-bold">
              Travel With Comfort & Confidence
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Affordable Packages",
                desc: "Enjoy premium travel experiences at budget-friendly prices.",
              },
              {
                title: "Trusted Guides",
                desc: "Professional tour guides to ensure a safe and enjoyable journey.",
              },
              {
                title: "Easy Booking",
                desc: "Book your next adventure in minutes with our simple platform.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-slate-50 p-8 shadow-sm ring-1 ring-slate-200"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-900 text-xl font-bold text-white">
                  ✈
                </div>

                <h3 className="text-2xl font-bold">{item.title}</h3>

                <p className="mt-4 text-slate-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="rounded-[40px] bg-slate-900 px-8 py-16 text-center text-white md:px-16">
          <h2 className="text-4xl font-bold md:text-5xl">
            Ready For Your Next Adventure?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-300">
            Start exploring breathtaking destinations and create unforgettable travel memories today.
          </p>

          <button className="mt-8 rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-slate-900 transition hover:scale-105">
            Get Started
          </button>
        </div>
      </section>
    </div>
  );
}
