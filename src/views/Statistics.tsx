import React from 'react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { ManufacturersPieChart } from '@/components/ManufacturersPieChart'

import { useStatistics } from './hooks/useStatistics'

interface IStatisticsProps {}

export const Statistics: React.FC<IStatisticsProps> = () => {
  const { mostCheapestAndExpensive, manufacturersAndTotalProducts } =
    useStatistics()

  React.useEffect(() => {
    console.log(manufacturersAndTotalProducts)
  }, [manufacturersAndTotalProducts])
  return (
    <div className="flex flex-col items-center justify-center">
      {/* TODO: issue with the ReCharts when wrapping specific charts in a custom PricesBarChart component */}
      {/* https://github.com/recharts/recharts/issues/2788 */}
      <BarChart width={730} height={250} data={mostCheapestAndExpensive}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis dataKey="value" />
        <Tooltip />
        {/* {mockedData.map((entry, index) => (
        <Bar key={`cell-${index}`} dataKey="price" fill={entry.color} />
      ))} */}
        <Bar dataKey="value" fill="#8884d8" label={{ position: 'top' }}>
          {mostCheapestAndExpensive.map((entry, index) => (
            <Cell key={`bar-cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
      <ManufacturersPieChart data={manufacturersAndTotalProducts} />
    </div>
  )
}

Statistics.displayName = 'Statistics'
