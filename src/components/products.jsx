import '../styles/products.css'
import { AddToCart, RemoveToCart } from '../icons/icons'
import { useCart } from '../hooks/useCart'

export function Products ({ products }) {
  const { cart, addToCart, removeFromCart } = useCart()

  const checkIsIfProcuctInCart = (product) => {
    return cart.some(item => item.id === product.id)
  }

  return (
    <main className='products-container'>
      <ul className='product-list'>
        {products.slice(0, 10).map(product => {
          const isProductInCart = checkIsIfProcuctInCart(product)
          return (
            <li key={product.id} className='product'>
              <img src={product.thumbnail} alt={product.description} className='product-img' />
              <div className='product-info'>
                <h3>{product.title} - ${product.price}</h3>
              </div>
              <div>
                <button className={isProductInCart ? 'remove' : 'add'} onClick={() => (isProductInCart ? removeFromCart(product) : addToCart(product))}> {isProductInCart ? <RemoveToCart /> : <AddToCart />} </button>
              </div>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
