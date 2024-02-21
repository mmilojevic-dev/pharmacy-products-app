import { PricesBarChart } from '@/components/PricesBarChart'
import { useProductsContext } from '@/contexts/ProductsContext'

interface IStatisticsProps {}

export const Statistics: React.FC<IStatisticsProps> = () => {
  const { products } = useProductsContext()
  return (
    <div className="flex justify-center">
      <PricesBarChart products={products} />
    </div>
  )
}

Statistics.displayName = 'Statistics'
