import { createContext, useState } from 'react'

// 1- Crear el contexto
export const CartContext = createContext()

// 2- Crear el provider para proveer el contexto
export function CartProvider ({ children }) {
  const [cart, setCart] = useState([])

  const addToCart = (product) => {
    // Conocer si el producto se encuentra en el carrito
    const isInCart = cart.findIndex(obj => obj.id === product.id)

    if (isInCart >= 0) {
      const newCart = structuredClone(cart)
      newCart[isInCart].quantity += 1
      return setCart(newCart)
    }

    setCart(prevState => ([
      ...prevState,
      {
        ...product,
        quantity: 1
      }
    ]))
  }

  const clearCart = () => {
    setCart([])
  }

  const removeFromCart = (product) => {
    setCart(prevState => prevState.filter(item => item.id !== product.id))
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      clearCart,
      removeFromCart
    }}
    >
      {children}
    </CartContext.Provider>
  )
}
