import React from 'react'

import { useProductsContext } from '@/contexts/ProductsContext'
import { generateRandomHexColor } from '@/utils/generateRandomHexColor'
import { sortArrayOfObjects } from '@/utils/sortArrayOfObjects'

export const useStatistics = () => {
  const { products } = useProductsContext()

  const sortProducts = React.useMemo(
    () => sortArrayOfObjects([...products]),
    [products]
  )

  const getMostCheapestAndExpensive = React.useCallback(() => {
    const cheapestFive = sortProducts.slice(0, 5)
    const expensiveFive = sortProducts.slice(-5)

    return [...cheapestFive, ...expensiveFive].map((product) => ({
      name: product.name,
      value: product.price,
      color: generateRandomHexColor()
    }))
  }, [sortProducts])

  const getManufacturersAndTotalProducts = React.useCallback(() => {
    const manufacturersTotalProducts = products.reduce(
      (acc: Record<string, number>, product) => {
        acc[product.manufacturer.name] =
          (acc[product.manufacturer.name] || 0) + 1
        return acc
      },
      {}
    )

    return Object.entries(manufacturersTotalProducts).map(
      ([manufacturer, totalProducts]) => ({
        name: manufacturer,
        value: totalProducts,
        color: generateRandomHexColor()
      })
    )
  }, [products])

  const mostCheapestAndExpensive = React.useMemo(getMostCheapestAndExpensive, [
    getMostCheapestAndExpensive
  ])
  const manufacturersAndTotalProducts = React.useMemo(
    getManufacturersAndTotalProducts,
    [getManufacturersAndTotalProducts]
  )

  return {
    mostCheapestAndExpensive,
    manufacturersAndTotalProducts
  }
}
