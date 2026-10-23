function Hero() {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-amber-950 text-white"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center opacity-50"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=1800')",
        }}
      />

      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/90 via-amber-950/75 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-36">
        <p className="font-bold uppercase tracking-[0.3em] text-amber-400">
          A Taste of Ethiopia
        </p>

        <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-tight md:text-7xl">
          Where Every Cup Tells a{' '}
          <span className="font-serif italic text-amber-400">
            Story
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg leading-8 text-amber-50/90">
          Discover the rich flavors of Ethiopian coffee, fresh
          ingredients, and the warmth of sharing a cup together.
        </p>

        <div className="mt-9 flex flex-wrap gap-4">
          <a
            href="#menu"
            className="rounded-full bg-amber-400 px-8 py-4 font-bold text-amber-950 transition hover:bg-amber-300"
          >
            Explore Our Menu →
          </a>

          <a
            href="#story"
            className="rounded-full border border-white/70 px-8 py-4 font-semibold transition hover:bg-white hover:text-amber-950"
          >
            Our Story
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero