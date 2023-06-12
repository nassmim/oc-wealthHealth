import { useAppSelector } from '../../../app/hooks'

const TableBody = () => {
  const employees = useAppSelector((state) => state.employees)
  console.log(employees)
  return (
    <tbody>
      {employees.map((employee, index) => (
        <tr key={employee.id + '-' + index}>
          <td>{employee.firstName}</td>
          <td>{employee.lastName}</td>
          <td>{employee.startDate}</td>
          <td>{employee.department}</td>
          <td>{employee.birthdate}</td>
          <td>{employee.street}</td>
          <td>{employee.city}</td>
          <td>{employee.state}</td>
          <td>{employee.zipcode}</td>
        </tr>
      ))}
    </tbody>
  )
}
export default TableBody
