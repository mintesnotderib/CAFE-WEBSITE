function MenuCard({ item, onAdd }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-amber-900/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-5">
        <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900">
          {item.category}
        </span>

        <h3 className="mt-3 text-xl font-bold text-stone-900">
          {item.name}
        </h3>

        <p className="mt-2 min-h-12 text-sm leading-6 text-stone-600">
          {item.description}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-bold text-amber-950">
            {item.price} ETB
          </span>
        </div>

        <button
          type="button"
          onClick={() => onAdd(item)}
          className="mt-4 w-full rounded-lg bg-amber-900 px-4 py-3 font-semibold text-white transition hover:bg-amber-950 active:scale-95"
        >
          + Add to Cart
        </button>
      </div>
    </article>
  )
}

export default MenuCard