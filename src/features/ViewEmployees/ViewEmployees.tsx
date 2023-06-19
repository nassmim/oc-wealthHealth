import { Container, MainContainer } from '../../shared/style.ts'
import { Link } from 'react-router-dom'
import { ButtonStyled } from '../../shared/style.ts'
import { Title } from '../../shared/style.ts'
import PulseLoader from 'react-spinners/PulseLoader'
import PaginateLeftArrow from '../../assets/pagination-left-arrow.svg'
import { useCallback, useEffect, useState } from 'react'
import { useLazyGetEmployeesQuery } from '../api/apiEmployeesSlice'

import { TableColumn } from '../utils/types/types.ts'
import DisplayTable from '../utils/DisplayTable.tsx'
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

  // RTQ query trigger to run the request to get the list of employees
  const [getEmployeesTrigger, { data: employeesUpdated = [], isLoading }] =
    useLazyGetEmployeesQuery()
  const [employees, setEmployees] = useState(employeesUpdated)

  /**
   * Memoized function to get the truncated list of employees depending on
   * the size and the offset of the data we want to display to our users.
   * Depends if we want to get all data at page loading or if we want to get
   * it each time the user paginate/scrolls and this should be done server-side
   */
  const getEmployees = useCallback(
    /**
     * Gets the truncated list
     * @param fromIndex indicates from which position on the list we start retrieving items
     * @param toIndex indicates until which position on the list we start retrieving items
     */
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
            // initialSort={{ column: 'startDate', order: 'asc' }}
            // sortArrowsProps={{
            //   ascending: {src: , alt: , style: {}},
            //   descending: {src: , alt: , style: {}},
            // }}
            entriesNumberOptionsProps={
              entriesNumberOptionsProps.selectNativeProps
            }
            showEntriesNumberText={
              entriesNumberOptionsProps.showEntriesNumberText
            }
            entriesUnits={entriesNumberOptionsProps.entriesUnits}
            isSearchable={true}
            // fieldsSearched={['street', 'city']}
            searchOnFullWord={false}
            searchLabel="Search"
            // searchInputsProps={{ id: 'search-employee' }}
            isPaginable={true}
            pagesNumberVisible={true}
            paginateArrowProps={{
              previous: {
                attributes: {
                  src: PaginateLeftArrow,
                  alt: 'Previous page',
                },
                style: {
                  width: '20px',
                  rotate: `rotate(0deg)`,
                },
              },
              next: {
                attributes: {
                  src: PaginateLeftArrow,
                  alt: 'Next page',
                },
                style: {
                  width: '20px',
                  transform: `rotate(180deg)`,
                },
              },
            }}
            textForDataNull="There is no employee in your company. Please add them from the form"
            textForDataFilteredNull="No results from your search"
          />
        )}
      </MainContainer>
    </Container>
  )
}

export default ViewEmployees
