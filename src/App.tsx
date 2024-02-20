import { ProductsProvider } from './contexts/ProductsContext'
import { Router } from './routing/Router'

export const App: React.FC = () => {
  return (
    <ProductsProvider>
      <Router />
    </ProductsProvider>
  )
}
