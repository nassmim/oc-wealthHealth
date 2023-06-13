import { useEffect, useMemo, useRef, useState } from 'react'
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
import useSortTable from './Table/hooks/useSortTable.ts'

const DisplayTable = ({
  data,
  columns,
  initialSort,
  entriesNumberOptions,
  isSearchable = true,
  searchLabel = 'Search',
  searchOnChange,
  isPaginable = true,
}: {
  data: EmployeeEntity[]
  columns: TableColumn[]
  initialSort: { column: string; order: 'asc' | 'desc' }
  entriesNumberOptions: OptionValue[]
  isSearchable: boolean
  searchLabel: string
  searchOnChange?: React.ChangeEventHandler<HTMLInputElement>
  isPaginable: boolean
}) => {
  const usePreviousPersistent = (value: string): string => {
    const ref: React.MutableRefObject<{
      value: string
      previousValue: string
    }> = useRef({
      value: value,
      previousValue: '',
    })

    const current = ref.current.value

    if (value !== current) {
      ref.current = {
        value: value,
        previousValue: current,
      }
    }

    return ref.current.previousValue
  }

  const [searchValue, setSearchValue] = useState('')
  const previousSearchValue = usePreviousPersistent(searchValue)

  const dataInitiallySorted = useMemo(() => {
    if (initialSort) {
      return data
        .slice()
        .sort((a: EmployeeEntity, b: EmployeeEntity) =>
          b.id.localeCompare(a.id)
        )
    } else {
      return data
    }
  }, [data])

  const [tableData, setTableData] = useState(dataInitiallySorted)

  const [tableDataSorted, sortData] = useSortTable(tableData)

  function searchEmployees() {
    if (!searchValue.length) return tableData

    let dataToSort = tableData

    if (searchValue.length <= previousSearchValue.length)
      dataToSort = dataInitiallySorted
    const regexToMatch = new RegExp(`${searchValue}`, 'i')

    const employeesFound = dataToSort.reduce(
      (listOfItems: EmployeeEntity[], item: EmployeeEntity) => {
        // Récupère et regroupe tous les ingrédients dans un seul string
        Object.values(item).every((key) => {
          if (key.match(regexToMatch)) {
            listOfItems.push(item)
            return false
          }
          return true
        })

        return listOfItems
      },
      []
    )

    setTableData(employeesFound)
  }

  useEffect(() => {
    setTableData(tableDataSorted)
  }, [tableDataSorted])

  useEffect(() => {
    searchEmployees()
  }, [searchValue])

  return (
    <>
      <TableDisplayOptions>
        <EntriesLengthChoice>
          <p>Show</p>
          <EntriesNumberSelectDropdown options={entriesNumberOptions} />
          <p>entries</p>
        </EntriesLengthChoice>
        {isSearchable && (
          <SearchField>
            <p>{searchLabel}</p>
            <input
              type="search"
              name="search"
              id="search-employee"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value)
                searchOnChange ? searchOnChange(e) : undefined
              }}
            />
          </SearchField>
        )}
      </TableDisplayOptions>
      {isPaginable && (
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
      )}
      <div>
        {tableData.length ? (
          <EmployeesTable
            data={tableData}
            columns={columns}
            sortData={sortData}
          />
        ) : (
          <p>
            {searchValue.length
              ? 'No results from your search'
              : 'There is no employee in your company. Please add them from the form'}
          </p>
        )}
      </div>
    </>
  )
}

export default DisplayTable
