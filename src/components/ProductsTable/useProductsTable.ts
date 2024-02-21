/* eslint-disable @typescript-eslint/no-explicit-any */

import { ProductsTableColumn } from './ProductsTable'

const useProductsTable = () => {
  const getCellValue = (
    { nestedKey, key, formatFn, suffix }: ProductsTableColumn,
    row: any
  ) => {
    const value = nestedKey ? row[key]?.[nestedKey] : row[key]
    const formattedValue = formatFn ? formatFn(value) : value
    return suffix ? `${formattedValue}${suffix}` : formattedValue
  }

  return [getCellValue]
}

export default useProductsTable
