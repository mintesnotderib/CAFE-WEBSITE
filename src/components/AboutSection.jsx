function AboutSection() {
  return (
    <section id="story" className="bg-white px-5 py-20 md:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-2 md:items-center">
        <img
          src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=1000"
          alt="Coffee beans growing on a coffee plant"
          loading="lazy"
          className="h-80 w-full rounded-3xl object-cover md:h-[450px]"
        />

        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-800">
            Our Story
          </p>

          <h2 className="mt-3 text-4xl font-bold leading-tight text-stone-900 md:text-5xl">
            More Than Just Coffee
          </h2>

          <p className="mt-6 leading-8 text-stone-600">
            Buna Cafe celebrates the culture of Ethiopian coffee
            and the connections we make around every cup.
          </p>

          <p className="mt-4 leading-8 text-stone-600">
            We want to create a welcoming place where friends,
            families, and visitors can relax, share stories,
            and enjoy freshly prepared drinks and food.
          </p>

          <a
            href="#contact"
            className="mt-7 inline-block rounded-full bg-amber-900 px-6 py-3 font-semibold text-white transition hover:bg-amber-950"
          >
            Come Visit Us →
          </a>

          <div className="mt-8 grid grid-cols-2 gap-4">
            <div className="rounded-xl bg-amber-50 p-4">
              <p className="font-bold text-amber-950">
                Ethiopian Beans
              </p>
              <p className="mt-1 text-sm text-stone-600">
                Coffee rooted in local culture.
              </p>
            </div>

            <div className="rounded-xl bg-amber-50 p-4">
              <p className="font-bold text-amber-950">
                Warm Hospitality
              </p>
              <p className="mt-1 text-sm text-stone-600">
                Everyone is welcome.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection