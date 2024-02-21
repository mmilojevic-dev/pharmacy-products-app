import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { ROUTES } from '@/config'
import { About } from '@/views/About'
import { Layout } from '@/views/Layout'
import { Products } from '@/views/Products'
import { Statistics } from '@/views/Statistics'
import { UpdateCreateProduct } from '@/views/UpdateCreateProduct'

export const Router: React.FC = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME.PATH} element={<Layout />}>
        <Route index element={<Products />} />
        <Route path={ROUTES.PRODUCTS.PATH} element={<Products />} />
        <Route
          path={ROUTES.CREATE_PRODUCT.PATH}
          element={<UpdateCreateProduct />}
        />
        <Route
          path={`${ROUTES.UPDATE_PRODUCT.PATH}/:productId`}
          element={<UpdateCreateProduct />}
        />
        <Route path={ROUTES.ABOUT.PATH} element={<About />} />
        <Route path={ROUTES.STATISTICS.PATH} element={<Statistics />} />
      </Route>
    </Routes>
  )
}

Router.displayName = 'Router'
