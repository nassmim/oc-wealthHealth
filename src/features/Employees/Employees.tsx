import { Container, MainContainer } from '../../shared/style'
import { Link } from 'react-router-dom'
import { ButtonStyled } from '../../shared/style.ts'
import { Title } from '../../shared/style'
import SelectDropdown from '../../shared/Inputs/SelectDropdown.tsx'
import {
  EntriesLengthChoice,
  SearchField,
  TableDisplayOptions,
  TablePagination,
  EmployeesTable,
  Arrow,
} from './style.ts'

import PaginateLeftArrow from '../../assets/pagination-left-arrow.svg'
import { OptionValue } from '../../shared/Inputs/SelectDropdown.tsx'
import TableBody from './TableBody.tsx'
import TableHead from './TableHead.tsx'
import { TableColumn } from './types.tsx'

const columns: TableColumn[] = [
  { label: 'First Name', accessor: 'firstName' },
  { label: 'Last Name', accessor: 'lastName' },
  { label: 'Start Date', accessor: 'startDate' },
  { label: 'Department', accessor: 'department' },
  { label: 'Date of Birth', accessor: 'birthdate' },
  { label: 'Street', accessor: 'street' },
  { label: 'City', accessor: 'city' },
  { label: 'State', accessor: 'state' },
  { label: 'Zipcode', accessor: 'zipcode' },
]

const entriesNumberOptions: OptionValue[] = [
  { value: '1', label: '10' },
  { value: '25', label: '25' },
  { value: '50', label: '50' },
  { value: '100', label: '100' },
]

const Employees = () => {
  return (
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
              <SelectDropdown
                options={entriesNumberOptions}
                inputId="table-entries-length"
                onChange={() => console.log('entries changed')}
                defaultValue={entriesNumberOptions[0]}
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    width: '50px',
                    backgroundColor: '#f1ecec',
                  }),
                }}
              />
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

          <div className="employees-table">
            <EmployeesTable>
              <TableHead columns={columns} />
              <TableBody columns={columns} />
            </EmployeesTable>
          </div>
        </section>
      </MainContainer>
    </Container>
  )
}

export default Employees
