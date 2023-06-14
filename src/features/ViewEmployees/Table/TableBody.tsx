import { EmployeeEntity } from '../employeesSlice'
import type { TableColumn } from '../types.tsx'

const TableBody = ({
  employees,
  columns,
}: {
  employees: EmployeeEntity[]
  columns: TableColumn[]
}) => {
  return (
    <tbody>
      {employees.map((employee: EmployeeEntity) => (
        <tr key={employee.id}>
          {columns.map(({ accessor }, index) => {
            const value = employee[accessor as keyof EmployeeEntity]
              ? employee[accessor as keyof EmployeeEntity]
              : '——'
            return <td key={index}>{value}</td>
          })}
        </tr>
      ))}
    </tbody>
  )
}
export default TableBody
