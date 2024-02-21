import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { IProduct } from '@/models'

interface IPricesBarChartProps {
  products: IProduct[]
}

export const PricesBarChart: React.FC<IPricesBarChartProps> = ({
  products
}) => {
  return (
    <BarChart width={730} height={250} data={products}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis dataKey="price" />
      <Tooltip />
      <Legend />
      <Bar dataKey="price" fill="#8884d8" />
    </BarChart>
  )
}
