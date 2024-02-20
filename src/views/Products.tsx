import React from 'react'

import { DataTable } from '@/components/Table/DataTable'
import { useProductsContext } from '@/contexts/ProductsContext'

interface IProductsProps {}

export const Products: React.FC<IProductsProps> = () => {
  const { products } = useProductsContext()

  React.useEffect(() => {
    console.log(products)
  }, [products])

  return <DataTable data={products} />
}

Products.displayName = 'Products'
