import { EmployeesTableStyled } from './style.ts'

import TableHead from './TableHead.tsx'
import TableBody from './TableBody.tsx'
import type { TableColumn } from '../types.tsx'
import { EmployeeEntity } from '../employeesSlice.ts'
import { useState } from 'react'

const EmployeesTable = ({
  columns,
  employees,
}: {
  columns: TableColumn[]
  employees: EmployeeEntity[]
}) => {
  const [tableData, setTableData] = useState(employees)

  const sortData = (sortingField: string, sortingOrder: string): void => {
    const dataSorted = [...employees].sort((a, b): number => {
      let result: number
      if (a[sortingField as keyof EmployeeEntity] === null) result = 1
      else if (b[sortingField as keyof EmployeeEntity] === null) result = -1
      else {
        console.log(sortingField)
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
      console.log(result)
      return result
    })

    setTableData(dataSorted)
  }

  return (
    <EmployeesTableStyled>
      <TableHead columns={columns} sortData={sortData} />
      <TableBody columns={columns} employees={tableData} />
    </EmployeesTableStyled>
  )
}

export default EmployeesTable
