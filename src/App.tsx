import { BrowserRouter } from 'react-router-dom'

import { ProductsProvider } from './contexts/ProductsContext'
import { Router } from './routing/Router'

export const App: React.FC = () => {
  return (
    <ProductsProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ProductsProvider>
  )
}
