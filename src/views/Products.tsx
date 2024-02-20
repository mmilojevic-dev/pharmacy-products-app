import React from 'react'

import { DataTable } from '@/components/DataTable'
import { PRODUCTS } from '@/config'
import { useProductsContext } from '@/contexts/ProductsContext'

interface IProductsProps {}

export const Products: React.FC<IProductsProps> = () => {
  const { products } = useProductsContext()

  const columns = PRODUCTS.DATA_TABLE.COLUMNS

  return <DataTable columns={columns} data={products} />
}

Products.displayName = 'Products'
