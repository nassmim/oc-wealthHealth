import { EmployeeEntity } from '../employeesSlice'

const TableBody = ({ employees }: { employees: EmployeeEntity[] }) => {
  return (
    <tbody>
      {employees.map((employee: EmployeeEntity, index: number) => (
        <tr key={employee.employeeId + '-' + index}>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.startDate}</td>
          <td>{employee.department}</td>
          <td>{employee.birthdate}</td>
          <td>{employee.address.street}</td>
          <td>{employee.address.city}</td>
          <td>{employee.address.state}</td>
          <td>{employee.address.zipcode}</td>
        </tr>
      ))}
    </tbody>
  )
}
export default TableBody
