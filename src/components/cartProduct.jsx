import '../styles/cartProduct.css'

export function CartProduct ({ thumbnail, title, price, quantity, addToCart }) {
  return (
    <div className='cart-product-container'>
      <div className='cart-img-container'>
        <img src={thumbnail} alt={title} />
      </div>
      <div className='cart-description-container'>
        <p className='cart-info'>
          <span>{title} - ${price}</span>
          <span className='cart-quantity'>
            <p>
              Qty - {quantity}
            </p>
            <button onClick={addToCart}>+</button>
          </span>
        </p>
        <hr className='next' />
      </div>
    </div>
  )
}
