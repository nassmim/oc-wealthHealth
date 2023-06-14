import { Container, MainContainer } from '../../shared/style.ts'
import { Link } from 'react-router-dom'
import { ButtonStyled } from '../../shared/style.ts'
import { Title } from '../../shared/style.ts'
import PulseLoader from 'react-spinners/PulseLoader'

import { useCallback, useEffect, useState } from 'react'
import { useLazyGetEmployeesQuery } from '../api/apiEmployeesSlice'

import type { TableColumn } from './types.tsx'
import DisplayTable from './DisplayTable.tsx'
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts'
import { employeesFetched } from './employeesSlice.ts'
import entriesNumberOptionsProps from './entriesOptionsNumberProps.ts'

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

const ViewEmployees = () => {
  const dispatch = useAppDispatch()

  const hasBeenFetched = useAppSelector(
    (state) => state.employees.hasBeenFetched
  )

  const [tableIsVisible, setTableIsVisible] = useState(false)

  const [
    getEmployeesTrigger,
    { data: employeesUpdated = [], isError, isLoading, isSuccess },
  ] = useLazyGetEmployeesQuery()
  const [employees, setEmployees] = useState(employeesUpdated)

  const getEmployees = useCallback(
    async (fromIndex = 0, toIndex?: number) => {
      const employeesListFetched = await getEmployeesTrigger(undefined, true)
        .unwrap()
        .catch(() => {
          throw new Error()
        })

      setEmployees(
        employeesListFetched.slice(
          fromIndex,
          toIndex ? toIndex : employeesListFetched.length
        )
      )

      dispatch(employeesFetched())
    },
    [getEmployeesTrigger]
  )

  useEffect(() => {
    getEmployees()
  }, [getEmployees])

  useEffect(() => {
    let showTable = 1
    if (isLoading) {
      showTable = setTimeout(() => setTableIsVisible(true), 2000)
    } else setTableIsVisible(true)

    return () => {
      clearTimeout(showTable)
    }
  }, [isLoading])

  return (
    <Container>
      <MainContainer>
        <ButtonStyled>
          <Link to="/">Create Employee</Link>
        </ButtonStyled>

        <Title>Current Employees</Title>
        {!hasBeenFetched && !tableIsVisible ? (
          <PulseLoader
            cssOverride={{
              position: 'absolute',
              top: '50%',
              left: '50%',
            }}
          />
        ) : (
          <DisplayTable
            data={employees}
            columns={columns}
            // initialSort={{ column: 'firstName', order: 'asc' }}
            entriesNumberOptionsProps={
              entriesNumberOptionsProps.selectNativeProps
            }
            showEntriesNumberText={
              entriesNumberOptionsProps.showEntriesNumberText
            }
            entriesUnits={entriesNumberOptionsProps.entriesUnits}
            isSearchable={true}
            searchOnFullWord={false}
            searchLabel="Search"
            isPaginable={true}
            pagesNumberVisible={true}
          />
        )}
      </MainContainer>
    </Container>
  )
}

export default ViewEmployees
