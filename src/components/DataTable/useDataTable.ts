/* eslint-disable @typescript-eslint/no-explicit-any */

import { DataTableColumn } from './DataTable'

const useDataTable = () => {
  const getCellValue = (
    { nestedKey, key, formatFn, suffix }: DataTableColumn,
    row: any
  ) => {
    const value = nestedKey ? row[key]?.[nestedKey] : row[key]
    const formattedValue = formatFn ? formatFn(value) : value
    return suffix ? `${formattedValue}${suffix}` : formattedValue
  }

  return [getCellValue]
}

export default useDataTable
