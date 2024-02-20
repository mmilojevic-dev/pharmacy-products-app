import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ROUTES } from '@/config'
import { About } from '@/views/About'
import { Products } from '@/views/Products'
import { Statistics } from '@/views/Statistics'

import { Layout } from '../views/Layout'

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME.PATH} element={<Layout />}>
          <Route index element={<Products />} />
          <Route path={ROUTES.PRODUCTS.PATH} element={<Products />} />
          <Route path={ROUTES.ABOUT.PATH} element={<About />} />
          <Route path={ROUTES.STATISTICS.PATH} element={<Statistics />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

Router.displayName = 'Router'
