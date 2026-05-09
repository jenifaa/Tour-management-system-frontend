import { Link } from "react-router";


export default function HeroSection() {
  return (
    <div> <section className="relative h-[85vh] overflow-hidden">
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
             <Link to="/tours">Explore Tours</Link>
            </button>

            <button className="rounded-2xl border border-white/40 bg-white/10 px-7 py-3 text-lg font-semibold backdrop-blur-md transition hover:bg-white/20">
              Learn More
            </button>
          </div>
        </div>
      </section></div>
  )
}
