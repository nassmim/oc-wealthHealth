import { Employee } from '../../ViewEmployees/employeesSlice.ts'
import type { TableColumn } from '../types.ts'

const TableBody = ({
  employees,
  columns,
}: {
  employees: Employee[]
  columns: TableColumn[]
}) => {
  return (
    <tbody>
      {employees.map((employee: Employee, index: number) => (
        <tr key={`${index}-${employee.firstName}`}>
          {columns.map(({ accessor }, index) => {
            const value = employee[accessor as keyof Employee]
              ? employee[accessor as keyof Employee]
              : '——'
            return <td key={index}>{value}</td>
          })}
        </tr>
      ))}
    </tbody>
  )
}
export default TableBody
