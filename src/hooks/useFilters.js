import { useContext } from 'react'
import { FilterContext } from '../context/filterContext'

export const useFilters = () => {
  const { filterProducts, setFilterProducts } = useContext(FilterContext)

  const filteredProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filterProducts.minPrice &&
        (
          filterProducts.category === 'all' || product.category === filterProducts.category
        )
      )
    })
  }
  return { filterProducts, filteredProducts, setFilterProducts }
}
