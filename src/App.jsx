import './App.css'
import { products as initialProducts } from './mocks/products.json'
import { Products } from './components/products'
import { Nav } from './components/nav'
import { useFilters } from './hooks/useFilters'
import { useState } from 'react'
import { Cart } from './components/cart'
import { CartProvider } from './context/cartContext'

export default function App () {
  const [products] = useState(initialProducts)
  const { filteredProducts } = useFilters()

  const newProducts = filteredProducts(products)

  return (
    <CartProvider>
      <Nav />
      <Cart />
      <Products products={newProducts} />
    </CartProvider>
  )
}
