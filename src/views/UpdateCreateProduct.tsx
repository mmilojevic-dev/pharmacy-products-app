import React, { useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'

import { ProductForm } from '@/components/ProductForm'
import { useProductsContext } from '@/contexts/ProductsContext'
import { IProduct } from '@/models'
import { generateId } from '@/utils/generateId'

const initializeProduct = () => ({
  id: generateId(),
  name: '',
  manufacturer: {
    id: generateId(),
    name: ''
  },
  price: 0,
  expiryDate: new Date()
})

export const UpdateCreateProduct: React.FC = () => {
  const { productId } = useParams<{ productId: string }>()
  const { getProductById, updateProduct, createProduct } = useProductsContext()
  const initialProduct = useMemo(() => initializeProduct(), [])

  const [selectedProduct, setSelectedProduct] = useState<IProduct>(
    getProductById(productId ?? '') || initialProduct
  )

  useEffect(() => {
    setSelectedProduct(
      productId ? getProductById(productId) || initialProduct : initialProduct
    )
  }, [productId, initialProduct, getProductById])

  return (
    <div>
      <span>{productId ? 'Update' : 'Create'} Product</span>
      <ProductForm
        onSubmit={productId ? updateProduct : createProduct}
        product={selectedProduct}
      />
    </div>
  )
}
