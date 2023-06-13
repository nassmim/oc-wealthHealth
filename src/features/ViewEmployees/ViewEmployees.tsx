import { Container, MainContainer } from '../../shared/style.ts'
import { Link } from 'react-router-dom'
import { ButtonStyled } from '../../shared/style.ts'
import { Title } from '../../shared/style.ts'

import { useEffect, useMemo } from 'react'
import { useGetEmployeesQuery } from '../api/apiEmployeesSlice'
import { EmployeeEntity } from './employeesSlice'

import {
  EntriesLengthChoice,
  SearchField,
  TableDisplayOptions,
  TablePagination,
  Arrow,
} from './style.ts'

import PaginateLeftArrow from '../../assets/pagination-left-arrow.svg'

import EmployeesTable from './Table/Table.tsx'
import type { TableColumn } from './types.tsx'
import type { OptionValue } from '../../shared/Inputs/SelectDropdown.tsx'
import EntriesNumberSelectDropdown from './EntriesNumberSelectDropdown.tsx'

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
  { value: '1', label: '10' },
  { value: '25', label: '25' },
  { value: '50', label: '50' },
  { value: '100', label: '100' },
]

const ViewEmployees = () => {
  const {
    data: employees = [],
    isSuccess,
    isError,
    isLoading,
  } = useGetEmployeesQuery({})

  const employeesSorted = useMemo(() => {
    return employees
      .slice()
      .sort((a: EmployeeEntity, b: EmployeeEntity) => b.id.localeCompare(a.id))
  }, [employees])

  useEffect(() => {
    if (isError) throw new Error()
  }, [isError])

  return isLoading ? (
    <div>It's coming</div>
  ) : (
    <Container>
      <MainContainer>
        <ButtonStyled>
          <Link to="/">Create Employee</Link>
        </ButtonStyled>

        <Title>Current Employees</Title>

        <section>
          <TableDisplayOptions>
            <EntriesLengthChoice>
              <p>Show</p>
              <EntriesNumberSelectDropdown options={entriesNumberOptions} />
              <p>entries</p>
            </EntriesLengthChoice>

            <SearchField>
              <p>Search</p>
              <input type="search" name="search" id="search-employee" />
            </SearchField>
          </TableDisplayOptions>

          <TablePagination>
            <p>1 - 10 in 252</p>
            <div className="arrows">
              <Arrow
                src={PaginateLeftArrow}
                alt="Previous page"
                width="20px"
                rotate="0deg"
              />
              <Arrow
                src={PaginateLeftArrow}
                alt="Previous page"
                width="20px"
                rotate="180deg"
              />
            </div>
          </TablePagination>

          <div>
            {employees.length ? (
              <EmployeesTable employees={employeesSorted} columns={columns} />
            ) : (
              <p>
                There is no employee in your company.
                <br />
                Please add them from the form
              </p>
            )}
          </div>
        </section>
      </MainContainer>
    </Container>
  )
}

export default ViewEmployees
