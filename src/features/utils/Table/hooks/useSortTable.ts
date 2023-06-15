import { useState } from 'react'
import { Employee } from '../../../ViewEmployees/employeesSlice'

const useSortTable = (
  data: Employee[] = []
): [
  Employee[],
  (sortingField: string, sortingOrder: string) => void,
  boolean
] => {
  const [tableData, setTableData] = useState(data)
  const [hasBeenSorted, setHasBeenSorted] = useState(false)

  const sortData = (sortingField: string, sortingOrder: string): void => {
    const dataSorted = [...data].sort((a, b): number => {
      let result: number
      if (a[sortingField as keyof Employee] === null) result = 1
      else if (b[sortingField as keyof Employee] === null) result = -1
      else {
        result =
          a[sortingField as keyof Employee]
            .toString()
            .localeCompare(b[sortingField as keyof Employee].toString(), 'en', {
              numeric: true,
            }) * (sortingOrder === 'asc' ? 1 : -1)
      }

      return result
    })

    setHasBeenSorted(true)
    setTableData(dataSorted)
  }

  return [tableData, sortData, hasBeenSorted]
}

export default useSortTable
