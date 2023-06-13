import { EmployeeEntity } from '../employeesSlice'
import type { TableColumn } from '../types.tsx'

const TableBody = ({
  columns,
  employees,
}: {
  columns: TableColumn[]
  employees: EmployeeEntity[]
}) => {
  return (
    <tbody>
      {employees.map((employee: EmployeeEntity) => (
        <tr key={employee.id}>
          {columns.map(({ accessor }, index) => {
            const value = employee[accessor] ? employee[accessor] : '——'
            return <td key={index}>{value}</td>
          })}
        </tr>
      ))}
    </tbody>
  )
}
export default TableBody
