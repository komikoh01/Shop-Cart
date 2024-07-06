import '../styles/nav.css'
import { useId } from 'react'
import { useFilters } from '../hooks/useFilters'

export function Filters () {
  const minPriceId = useId()
  const categoryId = useId()
  const { filterProducts, setFilterProducts } = useFilters()

  const handlePriceChange = (e) => {
    setFilterProducts(prevState => ({
      ...prevState,
      minPrice: e.target.value
    }))
  }

  const handleCategoryChange = (e) => {
    setFilterProducts(prevState => ({
      ...prevState,
      category: e.target.value
    }))
  }
  return (
    <section className='filter'>
      <div className='price-filter'>
        <label htmlFor={minPriceId}>price:</label>
        <input
          id={minPriceId}
          type='range'
          name='price-range'
          min={0}
          max={3000}
          onChange={handlePriceChange}
          value={filterProducts.minPrice}
        />
        <span>$ {filterProducts.minPrice}</span>
      </div>
      <div>
        <label htmlFor={categoryId}>category:</label>
        <select
          id={categoryId}
          name='categories'
          onChange={handleCategoryChange}
          defaultValue='all'
        >
          <option value='all'>All</option>
          <option value='smartphones'>Smartphones</option>
          <option value='laptops'>Laptops</option>
          <option value='home-decoration'>Home-Decoration</option>
        </select>
      </div>
    </section>
  )
}
