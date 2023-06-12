import { useSelector } from 'react-redux'

import { EmployeesTableStyled } from './style.ts'

import TableHead from './TableHead.tsx'
import TableBody from './TableBody.tsx'
import type { TableColumn } from '../types.tsx'

const EmployeesTable = ({ columns }: { columns: TableColumn[] }) => {
  return (
    <EmployeesTableStyled>
      <TableHead columns={columns} />
      <TableBody />
    </EmployeesTableStyled>
  )
}

export default EmployeesTable
