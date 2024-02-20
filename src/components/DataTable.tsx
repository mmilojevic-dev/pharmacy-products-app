import { Table } from '@/components/Table/Table'
import { TableBody } from '@/components/Table/TableBody'
import { TableCell } from '@/components/Table/TableCell'
import { TableHead } from '@/components/Table/TableHead'
import { TableHeader } from '@/components/Table/TableHeader'
import { TableRow } from '@/components/Table/TableRow'
import { PRODUCTS } from '@/config'

import { TableCaption } from './Table/TableCaption'
// TODO: Improve typings here in order to make the component safe and generic
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface DataTableColumn {
  key: string
  headerLabel: string
  nestedKey?: string
  formatFn?: (value: any) => void
  suffix?: string
}

interface DataTableProps {
  rowIdKey?: string
  columns: DataTableColumn[]
  data: any[]
}

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  rowIdKey = 'id'
}) => {
  const getCellValue = (col: DataTableColumn, row: any): string => {
    const value = col.nestedKey ? row[col.key][col.nestedKey] : row[col.key]
    const formattedValue = col.formatFn ? col.formatFn(value) : value
    return col.suffix ? `${formattedValue}${col.suffix}` : formattedValue
  }
  return (
    <Table className="max-w-2xl text-center">
      <TableCaption>{PRODUCTS.TITLE}</TableCaption>
      <TableHeader>
        <TableRow>
          {columns.map((col) => {
            return (
              <TableHead className="text-center" key={col.key as string}>
                {col.headerLabel}
              </TableHead>
            )
          })}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row[rowIdKey]}>
            {columns.map((col) => {
              return (
                <TableCell key={col.key}>{getCellValue(col, row)}</TableCell>
              )
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

DataTable.displayName = 'DataTable'
