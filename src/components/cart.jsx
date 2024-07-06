import { useCart } from '../hooks/useCart'
import { RemoveToCart, ShowCart } from '../icons/icons'
import '../styles/cart.css'
import { CartProduct } from './cartProduct'

export function Cart () {
  const { cart, clearCart, addToCart } = useCart()

  return (
    <>
      <label htmlFor='cart' className='cart-label'>
        <ShowCart />
      </label>
      <input type='checkbox' id='cart' hidden />
      <aside className='cart-container'>
        <ul className='cart-products'>
          {cart.map(product => (
            <CartProduct
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
          <button onClick={clearCart} className='remove-button'>
            <RemoveToCart />
          </button>
        </ul>
      </aside>
    </>
  )
}
