import React from 'react'

import { DataTable } from '@/components/DataTable/DataTable'
import { ProductForm } from '@/components/ProductForm'
import { PRODUCTS } from '@/config'
import { useProductsContext } from '@/contexts/ProductsContext'
import { IProduct } from '@/models'

interface IProductsProps {}

export const Products: React.FC<IProductsProps> = () => {
  const { products, deleteProduct } = useProductsContext()

  const columns = PRODUCTS.DATA_TABLE.COLUMNS

  const handleEdit = (id: string) => {
    // Handle edit logic here, e.g., navigate to edit page or show modal
    console.log('Edit clicked for row:', id)
  }

  const handleDelete = (id: string) => {
    deleteProduct(id)
  }

  const handleFormSubmit = (product: IProduct) => {
    console.log(product)
  }

  return (
    <>
      <DataTable
        columns={columns}
        data={products}
        onEditItem={handleEdit}
        onDeleteItem={handleDelete}
      />
      <ProductForm
        onSubmit={handleFormSubmit}
        initialProduct={products[0]}
        editMode={!!products[0]}
      />
    </>
  )
}

Products.displayName = 'Products'
