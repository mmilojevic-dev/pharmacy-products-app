import React from 'react'

import { PRODUCTS } from '@/config'
import { useLocalStorageState } from '@/hooks/useLocalStorage'
import { IProduct } from '@/models'

interface IProductsContext {
  products: IProduct[]
  createProduct: (newProduct: IProduct) => void
  updateProduct: (updatedProduct: IProduct) => void
  deleteProduct: (productId: string) => void
}

const ProductsContext = React.createContext<IProductsContext | undefined>(
  undefined
)

interface IProductsProviderProps {
  children: React.ReactNode
}

export const ProductsProvider: React.FC<IProductsProviderProps> = ({
  children
}) => {
  const [products, setProducts] = useLocalStorageState<IProduct[]>(
    'products',
    PRODUCTS.INITIAL_DATA
  )

  const createProduct = (newProduct: IProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct])
  }

  const updateProduct = (updatedProduct: IProduct) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === updatedProduct.id ? updatedProduct : product
      )
    )
  }

  const deleteProduct = (productId: string) => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== productId)
    )
  }

  return (
    <ProductsContext.Provider
      value={{ products, createProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductsContext.Provider>
  )
}

ProductsProvider.displayName = 'ProductsProvider'

type IUseProductContext = IProductsContext

export const useProductsContext = (): IUseProductContext => {
  const context = React.useContext(ProductsContext)
  if (!context) {
    throw new Error('useProducts must be used within a ProductsProvider')
  }
  return context
}
