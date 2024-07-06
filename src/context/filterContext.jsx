import { createContext, useState } from 'react'

// paso1 - Crear el contexto
export const FilterContext = createContext()

// paso2 - Crear el Provider para proveer el contexto
export function FilterProvider ({ children }) {
  const [filterProducts, setFilterProducts] = useState({
    minPrice: '0',
    category: 'all'
  })

  return (
    <FilterContext.Provider value={{
      filterProducts,
      setFilterProducts
    }}
    >
      {children}
    </FilterContext.Provider>
  )
}
