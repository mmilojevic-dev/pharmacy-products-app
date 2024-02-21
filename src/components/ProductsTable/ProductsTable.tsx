import React from 'react'

import { Button } from '@/components/Button'
import { Dialog, DialogTrigger } from '@/components/Dialog'
import { ProductForm } from '@/components/ProductForm'
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
import { IProduct } from '@/models'

import { DeleteConfirmation } from '../DeleteConfirmation'
import useProductsTable from './useProductsTable'
// TODO: Improve typings here in order to make the component safe and generic
/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProductsTableColumn {
  key: string
  headerLabel: string
  nestedKey?: string
  formatFn?: (value: any) => void
  suffix?: string
}

interface ProductsTableProps {
  data: any[]
  columns: ProductsTableColumn[]
  onUpdate: (product: IProduct) => void
  onDelete: (id: any) => void
  updateModalOpen: boolean
  onUpdateModalOpenChange: (open: boolean) => void
  rowIdKey?: string
}

export const ProductsTable: React.FC<ProductsTableProps> = ({
  columns,
  data,
  onUpdate,
  onDelete,
  updateModalOpen,
  onUpdateModalOpenChange,
  rowIdKey = 'id'
}) => {
  const [getCellValue] = useProductsTable()

  return (
    <Table className="text-center">
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
                  <Dialog
                    open={updateModalOpen}
                    onOpenChange={onUpdateModalOpenChange}
                  >
                    <DialogTrigger asChild>
                      <Button variant="outline" size="sm">
                        Update
                      </Button>
                    </DialogTrigger>
                    <ProductForm onSubmit={onUpdate} product={row} updateMode />
                  </Dialog>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="destructive" size="sm">
                        Delete
                      </Button>
                    </DialogTrigger>
                    <DeleteConfirmation
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

ProductsTable.displayName = 'ProductsTable'
