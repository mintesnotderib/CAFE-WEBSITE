import { useState } from 'react'
import menuItems from '../data/menu'
import MenuCard from './MenuCard'

const categories = ['All', 'Coffee', 'Tea', 'Juice', 'Food']

function MenuSection({ onAdd }) {
  const [activeCategory, setActiveCategory] = useState('All')

  const filteredItems =
    activeCategory === 'All'
      ? menuItems
      : menuItems.filter(
          (item) => item.category === activeCategory
        )

  return (
    <section id="menu" className="bg-[#fffaf3] px-5 py-20 md:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-800">
              Our Menu
            </p>

            <h2 className="mt-2 text-4xl font-bold text-stone-900">
              Fresh & Authentic
            </h2>

            <p className="mt-3 text-stone-600">
              Handcrafted with care, using ingredients from Ethiopia.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-3 text-sm font-semibold transition ${
                  activeCategory === category
                    ? 'bg-amber-900 text-white'
                    : 'bg-white text-stone-700 hover:bg-amber-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {filteredItems.map((item) => (
            <MenuCard
              key={item.id}
              item={item}
              onAdd={onAdd}
            />
          ))}
        </div>

        {filteredItems.length === 0 && (
          <p className="mt-10 text-center text-stone-600">
            No menu items found.
          </p>
        )}
      </div>
    </section>
  )
}

export default MenuSection