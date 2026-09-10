
function AboutUs() {
  return (
    <div className="bg-background text-foreground">
      {/* Hero Section */}
      <section className="bg-primary/5 py-20">
        <div className="container mx-auto px-6 text-center">
          <span className="inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            About Us
          </span>

          <h1 className="mx-auto mt-5 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            Making Every Journey{" "}
            <span className="text-primary">Simple & Memorable</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            We provide a simple and reliable platform for discovering,
            planning, booking, and managing tours all in one place.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="container mx-auto px-6 py-20">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Who We Are
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Your Trusted Travel Companion
            </h2>

            <p className="mt-6 leading-7 text-muted-foreground">
              Our Tour Management System is built to make travel planning
              easier for everyone. We bring tours, destinations, bookings,
              and travel information together in one convenient platform.
            </p>

            <p className="mt-4 leading-7 text-muted-foreground">
              Our goal is to reduce the complexity of tour management while
              giving travelers a smooth and enjoyable experience from
              planning to completing their journey.
            </p>
          </div>

          <div className="rounded-3xl bg-primary/10 p-8 sm:p-10">
            <h3 className="text-2xl font-bold">What We Believe</h3>

            <div className="mt-6 space-y-5">
              <div className="flex gap-4">
                <div className="text-2xl">🌍</div>
                <div>
                  <h4 className="font-semibold">Explore Freely</h4>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Discover new destinations and exciting experiences.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">🤝</div>
                <div>
                  <h4 className="font-semibold">Travel Together</h4>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Make travel planning easier and more connected.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-2xl">✨</div>
                <div>
                  <h4 className="font-semibold">Create Memories</h4>
                  <p className="mt-1 text-sm leading-6 text-muted-foreground">
                    Focus on enjoying your journey instead of managing the
                    details.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-muted/40 py-20">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border bg-background p-8 shadow-sm">
              <div className="mb-5 text-3xl">🎯</div>

              <h3 className="text-2xl font-bold">Our Mission</h3>

              <p className="mt-4 leading-7 text-muted-foreground">
                To simplify tour planning and management by providing a
                user-friendly platform where travelers and tour managers can
                manage everything efficiently.
              </p>
            </div>

            <div className="rounded-2xl border bg-background p-8 shadow-sm">
              <div className="mb-5 text-3xl">🚀</div>

              <h3 className="text-2xl font-bold">Our Vision</h3>

              <p className="mt-4 leading-7 text-muted-foreground">
                To create a modern and trusted travel platform that makes
                discovering and managing tours easier, faster, and more
                enjoyable for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="rounded-3xl bg-primary px-8 py-14 text-center text-primary-foreground sm:px-16">
          <h2 className="text-3xl font-bold sm:text-4xl">
            Your Next Adventure Starts Here
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 opacity-90">
            Find your perfect destination, choose a tour, and start creating
            unforgettable memories.
          </p>

          <button className="mt-8 rounded-lg bg-background px-6 py-3 font-semibold text-foreground transition hover:opacity-90">
            Explore Tours
          </button>
        </div>
      </section>
    </div>
  );
}

export default AboutUs;

