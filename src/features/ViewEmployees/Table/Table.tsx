import { EmployeesTableStyled } from './style.ts'

import TableHead from './TableHead.tsx'
import TableBody from './TableBody.tsx'
import type { TableColumn } from '../types.tsx'
import { EmployeeEntity } from '../employeesSlice.ts'

const EmployeesTable = ({
  columns,
  employees,
}: {
  columns: TableColumn[]
  employees: EmployeeEntity[]
}) => {
  return (
    <EmployeesTableStyled>
      <TableHead columns={columns} />
      <TableBody employees={employees} />
    </EmployeesTableStyled>
  )
}

export default EmployeesTable
