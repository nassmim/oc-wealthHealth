import { EmployeesTableStyled } from './style.ts'

import TableHead from './TableHead.tsx'
import TableBody from './TableBody.tsx'
import type { TableColumn } from '../types.tsx'
import { EmployeeEntity } from '../employeesSlice.ts'
import useSortTable from './hooks/useSortTable.ts'

const EmployeesTable = ({
  columns,
  employees,
}: {
  columns: TableColumn[]
  employees: EmployeeEntity[]
}) => {
  const [tableData, sortData] = useSortTable(employees)

  return (
    <EmployeesTableStyled>
      <TableHead columns={columns} sortData={sortData} />
      <TableBody columns={columns} employees={tableData} />
    </EmployeesTableStyled>
  )
}

export default EmployeesTable
