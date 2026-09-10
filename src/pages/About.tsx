function About() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary/5 py-20">
        <div className="container mx-auto px-6 text-center">
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            About Our Tour Management System
          </span>

          <h1 className="mx-auto max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Explore More. <span className="text-primary">Travel Better.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            We make tour planning simple, organized, and enjoyable by
            connecting travelers with amazing destinations, tours, and
            experiences.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">
              Who We Are
            </p>

            <h2 className="text-3xl font-bold sm:text-4xl">
              Your Journey, Our Management
            </h2>

            <p className="mt-6 leading-7 text-muted-foreground">
              Our Tour Management System is designed to make the entire travel
              process easier. From discovering destinations to managing tour
              bookings, everything can be handled from one convenient
              platform.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              Whether you are a traveler looking for your next adventure or an
              administrator managing tours and bookings, our system provides
              the tools needed for a smooth and organized experience.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-primary/10 p-8 text-center">
              <h3 className="text-3xl font-bold text-primary">100+</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Tour Packages
              </p>
            </div>

            <div className="rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-3xl font-bold">50+</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Destinations
              </p>
            </div>

            <div className="rounded-2xl bg-muted p-8 text-center">
              <h3 className="text-3xl font-bold">1K+</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Happy Travelers
              </p>
            </div>

            <div className="rounded-2xl bg-primary/10 p-8 text-center">
              <h3 className="text-3xl font-bold text-primary">24/7</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Easy Access
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Why Choose Us
            </p>

            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">
              Everything You Need for Better Tours
            </h2>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-background p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                🌍
              </div>

              <h3 className="text-xl font-semibold">Discover Destinations</h3>

              <p className="mt-3 leading-6 text-muted-foreground">
                Explore exciting destinations and find tour packages that
                match your travel interests.
              </p>
            </div>

            <div className="rounded-2xl border bg-background p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                📅
              </div>

              <h3 className="text-xl font-semibold">Easy Booking</h3>

              <p className="mt-3 leading-6 text-muted-foreground">
                Book your preferred tours easily and keep track of your
                bookings from one place.
              </p>
            </div>

            <div className="rounded-2xl border bg-background p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl">
                🧳
              </div>

              <h3 className="text-xl font-semibold">Organized Management</h3>

              <p className="mt-3 leading-6 text-muted-foreground">
                Manage tours, travelers, bookings, and other tour-related
                activities efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="container mx-auto px-6 py-20">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground sm:px-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Our Mission
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 opacity-90">
            Our mission is to simplify tour management and create a better
            travel experience by bringing tour discovery, booking, and
            management together in one reliable platform.
          </p>
        </div>
      </section>
    </div>
  );
}

export default About;