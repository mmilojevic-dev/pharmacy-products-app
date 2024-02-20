'use client'

import { Table } from '@/components/Table/Table'
import { TableBody } from '@/components/Table/TableBody'
import { TableCell } from '@/components/Table/TableCell'
import { TableHead } from '@/components/Table/TableHead'
import { TableHeader } from '@/components/Table/TableHeader'
import { TableRow } from '@/components/Table/TableRow'
import { PRODUCTS } from '@/config'
import { IProduct } from '@/models'

import { TableCaption } from './TableCaption'

interface DataTableProps<IProduct> {
  data: IProduct[]
}

export const DataTable: React.FC<DataTableProps<IProduct>> = ({ data }) => {
  const productKeys: string[] = Object.keys(data[0] || {})

  return (
    <Table className="max-w-2xl">
      <TableCaption>{PRODUCTS.TITLE}</TableCaption>
      <TableHeader>
        <TableRow>
          {productKeys.map((key) => {
            return <TableHead key={key}>{key}</TableHead>
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
        {data.map((product: any) => (
          <TableRow key={product.id}>
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {productKeys.map((key: any) => {
              console.log(product[key])
              return (
                typeof product[key] !== 'object' && (
                  <TableCell key={key}>{product[key]}</TableCell>
                )
              )
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
