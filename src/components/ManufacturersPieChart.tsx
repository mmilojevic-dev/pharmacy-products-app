import React from 'react'
import { Cell, Legend, Pie, PieChart } from 'recharts'

interface IPieChartData {
  name: string
  value: number
  color: string
}

interface IManufacturersPieChartProps {
  data: IPieChartData[]
}

export const ManufacturersPieChart: React.FC<IManufacturersPieChartProps> = ({
  data
}) => {
  const RADIAN = Math.PI / 180
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  }: any) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }
  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx="50%"
        cy="50%"
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
        legendType="circle"
      >
        {data.map((entry, index) => (
          <Cell key={`pie-cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
      <Legend />
    </PieChart>
  )
}
