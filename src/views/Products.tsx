import React from 'react'

import { CreateProduct } from '@/components/CreateProduct'
import { ProductsTable } from '@/components/ProductsTable/ProductsTable'
import { PRODUCTS } from '@/config'
import { useProductsContext } from '@/contexts/ProductsContext'
import { IProduct } from '@/models'

interface IProductsProps {}

export const Products: React.FC<IProductsProps> = () => {
  const [createModalOpen, setCreateModalOpen] = React.useState<boolean>(false)
  const [updateModalOpen, setUpdateModalOpen] = React.useState<boolean>(false)
  const { createProduct, products, updateProduct, deleteProduct } =
    useProductsContext()

  const columns = PRODUCTS.DATA_TABLE.COLUMNS

  const handleCreate = (newProduct: IProduct) => {
    createProduct(newProduct)
    setUpdateModalOpen(false)
  }

  const handleUpdate = (updatedProduct: IProduct) => {
    updateProduct(updatedProduct)
    setUpdateModalOpen(false)
  }

  const handleDelete = (id: string) => {
    deleteProduct(id)
  }

  return (
    <>
      <CreateProduct
        onCreate={handleCreate}
        createModalOpen={createModalOpen}
        onCreateModalOpenChange={setCreateModalOpen}
      />
      <ProductsTable
        columns={columns}
        data={products}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
        updateModalOpen={updateModalOpen}
        onUpdateModalOpenChange={setUpdateModalOpen}
      />
    </>
  )
}

Products.displayName = 'Products'
