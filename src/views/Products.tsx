import React from 'react'
import { Link } from 'react-router-dom'

import { buttonVariants } from '@/components/Button'
import { ProductsTable } from '@/components/ProductsTable/ProductsTable'
import { PRODUCTS, ROUTES } from '@/config'
import { useProductsContext } from '@/contexts/ProductsContext'

interface IProductsProps {}

export const Products: React.FC<IProductsProps> = () => {
  const { products, deleteProduct } = useProductsContext()

  const columns = PRODUCTS.DATA_TABLE.COLUMNS

  const handleDelete = (id: string) => {
    deleteProduct(id)
  }

  return (
    <>
      <div className="mt-10 flex justify-end">
        <Link
          to={ROUTES.CREATE_PRODUCT.PATH}
          className={buttonVariants({
            size: 'lg'
          })}
        >
          {ROUTES.CREATE_PRODUCT.LABEL}
        </Link>
      </div>
      <ProductsTable
        columns={columns}
        data={products}
        onDelete={handleDelete}
      />
    </>
  )
}

Products.displayName = 'Products'
