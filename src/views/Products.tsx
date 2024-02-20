import React from 'react'

import { Button } from '@/components/Button'
import { Dialog, DialogTrigger } from '@/components/Dialog'
import { ProductForm } from '@/components/ProductForm'
import { ProductTable } from '@/components/ProductTable/ProductTable'
import { UpdateCreateProductDialog } from '@/components/UpdateCreateProductDialog'
import { PRODUCTS } from '@/config'
import { useProductsContext } from '@/contexts/ProductsContext'
import { IProduct } from '@/models'

interface IProductsProps {}

export const Products: React.FC<IProductsProps> = () => {
  const { createProduct, products, updateProduct, deleteProduct } =
    useProductsContext()

  const columns = PRODUCTS.DATA_TABLE.COLUMNS

  const handleCreate = (newProduct: IProduct) => {
    createProduct(newProduct)
  }

  const handleUpdate = (updatedProduct: IProduct) => {
    updateProduct(updatedProduct)
  }

  const handleDelete = (id: string) => {
    deleteProduct(id)
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <Button size="sm">Create</Button>
        </DialogTrigger>
        <UpdateCreateProductDialog>
          <ProductForm onSubmit={handleCreate} updateMode={false} />
        </UpdateCreateProductDialog>
      </Dialog>
      <ProductTable
        columns={columns}
        data={products}
        onDelete={handleDelete}
        productFormComponent={
          <ProductForm
            onSubmit={handleUpdate}
            product={products[0]}
            updateMode
          />
        }
      />
    </>
  )
}

Products.displayName = 'Products'
