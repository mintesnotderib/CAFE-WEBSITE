import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

function App() {
  const [cart, setCart] = useState([])

  function handleAddToCart(item) {
    setCart((currentCart) => [...currentCart, item])
  }

  return (
    <>
      <Navbar cartCount={cart.length} />

      <main>
        <Hero />
        <MenuSection onAdd={handleAddToCart} />
        <AboutSection />
      </main>

      <Footer />
    </>
  )
}

export default App