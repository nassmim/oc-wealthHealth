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
  fieldsSearched,
  searchOnFullWord = false,
  searchLabel = 'Search',
  isPaginable = true,
}: {
  data: EmployeeEntity[]
  columns: TableColumn[]
  initialSort: { column: keyof EmployeeEntity; order: 'asc' | 'desc' }
  entriesNumberOptions: OptionValue[]
  isSearchable: boolean
  fieldsSearched?: { column: string }[]
  searchOnFullWord: boolean
  searchLabel: string
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
        .sort(
          (a: EmployeeEntity, b: EmployeeEntity) =>
            b[initialSort.column].localeCompare(a[initialSort.column]) *
            (initialSort.order === 'asc' ? 1 : -1)
        )
    } else {
      return data
    }
  }, [data])

  const [tableData, setTableData] = useState(dataInitiallySorted)

  const [tableDataSorted, sortData] = useSortTable(tableData)

  const searchEmployees = () => {
    if (!searchValue.length) {
      setTableData(tableDataSorted)
      return
    }

    let dataToSort = tableData

    if (searchValue.length <= previousSearchValue.length)
      dataToSort = tableDataSorted

    const regexToMatch = searchOnFullWord
      ? new RegExp(`(\\s|^)${searchValue}`, 'i')
      : new RegExp(`${searchValue}`, 'i')

    const dataFound = dataToSort.reduce(
      (listOfItems: EmployeeEntity[], item: EmployeeEntity) => {
        const keepValue = (isMatched: boolean) => {
          if (isMatched) {
            listOfItems.push(item)
            return false
          }
          return true
        }

        if (!fieldsSearched) {
          Object.values(item).every((key) => {
            return keepValue(key.match(regexToMatch))
          })
        } else {
          Object.values(item).every((key) => {
            return keepValue(
              fieldsSearched.includes(key) && key.match(regexToMatch)
            )
          })
        }

        return listOfItems
      },
      []
    )

    setTableData(dataFound)
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
              onChange={(e) => setSearchValue(e.target.value)}
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
