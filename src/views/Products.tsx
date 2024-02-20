import React from 'react'

import { DataTable } from '@/components/DataTable/DataTable'
import { PRODUCTS } from '@/config'
import { useProductsContext } from '@/contexts/ProductsContext'

interface IProductsProps {}

export const Products: React.FC<IProductsProps> = () => {
  const { products, deleteProduct } = useProductsContext()

  const columns = PRODUCTS.DATA_TABLE.COLUMNS

  const handleEdit = (id: string) => {
    // Handle edit logic here, e.g., navigate to edit page or show modal
    console.log('Edit clicked for row:', id)
  }

  const handleDelete = (id: string) => {
    // Handle delete logic here, e.g., show confirmation modal
    deleteProduct(id)
  }

  return (
    <DataTable
      columns={columns}
      data={products}
      onEditItem={handleEdit}
      onDeleteItem={handleDelete}
    />
  )
}

Products.displayName = 'Products'
