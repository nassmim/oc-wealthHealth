import { useState } from 'react'
import { EmployeeEntity } from '../../employeesSlice'

const useSortTable = (
  data: EmployeeEntity[]
): [
  EmployeeEntity[],
  React.Dispatch<React.SetStateAction<EmployeeEntity[]>>,
  (sortingField: string, sortingOrder: string) => void
] => {
  const [tableData, setTableData] = useState(data)

  const sortData = (sortingField: string, sortingOrder: string): void => {
    const dataSorted = [...tableData].sort((a, b): number => {
      let result: number
      if (a[sortingField as keyof EmployeeEntity] === null) result = 1
      else if (b[sortingField as keyof EmployeeEntity] === null) result = -1
      else {
        result =
          a[sortingField as keyof EmployeeEntity]
            .toString()
            .localeCompare(
              b[sortingField as keyof EmployeeEntity].toString(),
              'en',
              {
                numeric: true,
              }
            ) * (sortingOrder === 'asc' ? 1 : -1)
      }

      return result
    })

    setTableData(dataSorted)
  }

  return [tableData, setTableData, sortData]
}

export default useSortTable
