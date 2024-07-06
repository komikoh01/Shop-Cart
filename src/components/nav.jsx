import '../styles/nav.css'
import { Filters } from './filters'

export function Nav () {
  return (
    <header className='ecommerce-container'>
      <h1><strong>🏪Ecommerce🏪</strong></h1>
      <h2>🛒Shopping Cart🛒</h2>
      <Filters />
    </header>
  )
}
