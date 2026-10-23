function Footer() {
  return (
    <footer
      id="contact"
      className="bg-amber-950 px-5 py-12 text-amber-50 md:px-12"
    >
      <div className="mx-auto grid max-w-7xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <a href="#home" className="text-2xl font-bold">
            ☕ Buna Cafe
          </a>

          <p className="mt-4 max-w-sm leading-7 text-amber-100/70">
            Great coffee, warm conversations, and Ethiopian
            hospitality.
          </p>
        </div>

        <div>
          <h3 className="font-bold">Quick Links</h3>

          <div className="mt-4 flex flex-col items-start gap-3 text-amber-100/70">
            <a href="#home" className="hover:text-white">Home</a>
            <a href="#menu" className="hover:text-white">Our Menu</a>
            <a href="#story" className="hover:text-white">Our Story</a>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Contact</h3>

          <p className="mt-4 text-amber-100/70">
            Addis Ababa, Ethiopia
          </p>

          <a
            href="mailto:hello@bunacafe.com"
            className="mt-3 inline-block hover:text-amber-300"
          >
            hello@bunacafe.com
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-white/15 pt-6 text-sm text-amber-100/60">
        © {new Date().getFullYear()} Buna Cafe. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer