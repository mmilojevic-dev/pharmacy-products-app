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
import { UpdateCreateProductDialog } from '../UpdateCreateProductDialog'
import useProductTable from './useProductTable'
// TODO: Improve typings here in order to make the component safe and generic
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProductTableColumn {
  key: string
  headerLabel: string
  nestedKey?: string
  formatFn?: (value: any) => void
  suffix?: string
}

interface ProductTableProps {
  data: any[]
  columns: ProductTableColumn[]
  onDelete: (id: any) => void
  productFormComponent: React.ReactElement
  rowIdKey?: string
}

export const ProductTable: React.FC<ProductTableProps> = ({
  columns,
  data,
  onDelete,
  productFormComponent,
  rowIdKey = 'id'
}) => {
  const [getCellValue] = useProductTable()

  return (
    <Table className="mx-auto max-w-2xl text-center">
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
              return col.key ? (
                <TableCell key={col.key}>{getCellValue(col, row)}</TableCell>
              ) : (
                <TableCell key="actions" className="flex justify-center gap-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm">Update</Button>
                    </DialogTrigger>
                    <UpdateCreateProductDialog>
                      {productFormComponent}
                    </UpdateCreateProductDialog>
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </DialogTrigger>
                    <DeleteConfirmationDialog
                      onConfirm={() => onDelete(row[rowIdKey])}
                    />
                  </Dialog>
                </TableCell>
              )
            })}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

ProductTable.displayName = 'ProductTable'
