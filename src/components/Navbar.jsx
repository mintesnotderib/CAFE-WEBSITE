function Navbar({ cartCount }) {
  return (
    <nav className="sticky top-0 z-50 border-b border-amber-900/10 bg-[#fffaf3]/95 px-5 py-4 backdrop-blur md:px-12">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-extrabold tracking-tight text-amber-950"
        >
          ☕ Buna Cafe
        </a>

        <div className="hidden items-center gap-8 md:flex">
          <a href="#home" className="hover:text-amber-700">Home</a>
          <a href="#menu" className="hover:text-amber-700">Menu</a>
          <a href="#story" className="hover:text-amber-700">Our Story</a>
          <a href="#contact" className="hover:text-amber-700">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#menu"
            aria-label={`Shopping cart, ${cartCount} items`}
            className="relative rounded-full p-2 text-xl hover:bg-amber-100"
          >
            🛒
            {cartCount > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-600 px-1 text-xs text-white">
                {cartCount}
              </span>
            )}
          </a>

          <a
            href="#menu"
            className="rounded-full bg-amber-900 px-6 py-3 font-semibold text-white transition hover:bg-amber-950"
          >
            Order Now
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar