import { EmployeesTableStyled } from './style.ts'

import TableHead from './TableHead.tsx'
import TableBody from './TableBody.tsx'

const EmployeesTable = ({ columns }: { columns: TableColumn[] }) => {
  return (
    <EmployeesTableStyled>
      <TableHead columns={columns} />
      <TableBody columns={columns} />
    </EmployeesTableStyled>
  )
}

export default EmployeesTable
