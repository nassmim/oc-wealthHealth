import { Container, MainContainer } from '../../shared/style.ts'
import { Link } from 'react-router-dom'
import { ButtonStyled } from '../../shared/style.ts'
import { Title } from '../../shared/style.ts'

import { useEffect, useState } from 'react'
import { useLazyGetEmployeesQuery } from '../api/apiEmployeesSlice'

import type { TableColumn } from './types.tsx'
import type { OptionValue } from '../../shared/Inputs/SelectDropdown.tsx'
import DisplayTable from './DisplayTable.tsx'

const columns: TableColumn[] = [
  { label: 'First Name', accessor: 'firstName', sortable: true },
  { label: 'Last Name', accessor: 'lastName', sortable: true },
  { label: 'Start Date', accessor: 'startDate', sortable: true },
  { label: 'Department', accessor: 'department', sortable: true },
  { label: 'Date of Birth', accessor: 'birthdate', sortable: true },
  { label: 'Street', accessor: 'street', sortable: true },
  { label: 'City', accessor: 'city', sortable: true },
  { label: 'State', accessor: 'state', sortable: true },
  { label: 'Zipcode', accessor: 'zipcode', sortable: true },
]

const entriesNumberOptions: OptionValue[] = [
  { value: '10', label: '10' },
  { value: '25', label: '25' },
  { value: '50', label: '50' },
  { value: '100', label: '100' },
]

const ViewEmployees = () => {
  const getEmployees = async (fromIndex: number, toIndex: number) => {
    const employeesFetched = await getEmployeesTrigger(undefined, true)
      .unwrap()
      .catch((err) => {
        throw new Error()
      })

    setEmployees(employeesFetched.slice(fromIndex, toIndex))
  }
  const [
    getEmployeesTrigger,
    { data: employeesUpdated = [], isError, isLoading, isSuccess },
  ] = useLazyGetEmployeesQuery()
  const [employees, setEmployees] = useState(employeesUpdated)

  useEffect(() => {
    if (isError) throw new Error()
  }, [isError])
  useEffect(() => {
    // console.log('useEffect employees')
    // console.log(employees)
  }, [employees])

  useEffect(() => {
    // console.log('useeffet is success')
    // console.log(employees)
  }, [isSuccess])
  return (
    <Container>
      <MainContainer>
        <ButtonStyled>
          <Link to="/">Create Employee</Link>
        </ButtonStyled>

        <Title>Current Employees</Title>
        {isLoading ? (
          <div>It's coming</div>
        ) : (
          <DisplayTable
            fetchData={getEmployees}
            data={employees}
            columns={columns}
            initialSort={{ column: 'id', order: 'asc' }}
            entriesNumberOptions={entriesNumberOptions}
            isSearchable={true}
            searchOnFullWord={false}
            searchLabel="Search"
            isPaginable={true}
          />
        )}
      </MainContainer>
    </Container>
  )
}

export default ViewEmployees
