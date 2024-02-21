import React from 'react'
import { Link } from 'react-router-dom'

import { Button, buttonVariants } from '@/components/Button'
import { Dialog, DialogTrigger } from '@/components/Dialog'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/Table'
import { PRODUCTS, ROUTES } from '@/config'

import { DeleteConfirmation } from '../DeleteConfirmation'
import { useProductsTable } from './useProductsTable'

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
  onDelete: (id: any) => void
  rowIdKey?: string
}

export const ProductsTable: React.FC<ProductsTableProps> = ({
  columns,
  data,
  onDelete,
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
                  <Link
                    to={`${ROUTES.UPDATE_PRODUCT.PATH}/${row[rowIdKey]}`}
                    className={buttonVariants({
                      variant: 'outline',
                      size: 'sm'
                    })}
                  >
                    {ROUTES.UPDATE_PRODUCT.LABEL}
                  </Link>
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
