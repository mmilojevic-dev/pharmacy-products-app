import { Dialog } from '@radix-ui/react-dialog'

import { Button } from '@/components/Button'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/Table'
import { PRODUCTS } from '@/config'

import { DeleteConfirmationDialog } from '../DeleteConfirmationDialog'
import { DialogTrigger } from '../Dialog'
import useDataTable from './useDataTable'
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
  data: any[]
  columns: DataTableColumn[]
  onEditItem: (id: any) => void
  onDeleteItem: (id: any) => void
  rowIdKey?: string
}

export const DataTable: React.FC<DataTableProps> = ({
  columns,
  data,
  onEditItem,
  onDeleteItem,
  rowIdKey = 'id'
}) => {
  const [getCellValue] = useDataTable()

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
            <TableCell key="actions" className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onEditItem(row[rowIdKey])}
              >
                Edit
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="destructive" size="sm">
                    Delete
                  </Button>
                </DialogTrigger>
                <DeleteConfirmationDialog
                  onConfirm={() => onDeleteItem(row[rowIdKey])}
                />
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

DataTable.displayName = 'DataTable'
