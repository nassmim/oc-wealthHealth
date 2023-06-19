import { EmployeesTableStyled } from './style.ts'

import TableHead from './TableHead.tsx'
import TableBody from './TableBody.tsx'
import type { TableColumn } from '../types.ts'
import { Employee } from '../../ViewEmployees/employeesSlice.ts'

const EmployeesTable = ({
  data,
  columns,
  sortData,
}: {
  data: Employee[]
  columns: TableColumn[]
  sortData: (sortingField: string, sortingOrder: string) => void
}) => {
  return (
    <EmployeesTableStyled>
      <TableHead columns={columns} sortData={sortData} />
      <TableBody columns={columns} employees={data} />
    </EmployeesTableStyled>
  )
}

export default EmployeesTable
