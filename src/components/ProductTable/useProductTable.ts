/* eslint-disable @typescript-eslint/no-explicit-any */

import { ProductTableColumn } from './ProductTable'

const useProductTable = () => {
  const getCellValue = (
    { nestedKey, key, formatFn, suffix }: ProductTableColumn,
    row: any
  ) => {
    const value = nestedKey ? row[key]?.[nestedKey] : row[key]
    const formattedValue = formatFn ? formatFn(value) : value
    return suffix ? `${formattedValue}${suffix}` : formattedValue
  }

  return [getCellValue]
}

export default useProductTable
