import { useEffect, useMemo, useState } from 'react'
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
import useSearch from './hooks/useSearch.ts'

const DisplayTable = ({
  fetchData,
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
  fetchData: (fromIndex: number, toIndex: number) => Promise<void>
  data: EmployeeEntity[]
  columns: TableColumn[]
  initialSort: { column: keyof EmployeeEntity; order: 'asc' | 'desc' }
  entriesNumberOptions: OptionValue[]
  isSearchable: boolean
  fieldsSearched?: [keyof EmployeeEntity][]
  searchOnFullWord: boolean
  searchLabel: string
  isPaginable: boolean
}) => {
  const [entriesNumberChoice, setEntriesNumberChoice]: [
    OptionValue,
    React.Dispatch<React.SetStateAction<OptionValue>>
  ] = useState(entriesNumberOptions[0])

  const [pageNumber, setPageNumber]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(1)

  const handleEntriesNumberChange = (option: OptionValue) => {
    setEntriesNumberChoice(option)
  }

  const dataInitiallySorted = useMemo(() => {
    if (initialSort) {
      return data
        .slice()
        .sort(
          (a: EmployeeEntity, b: EmployeeEntity) =>
            a[initialSort.column].localeCompare(b[initialSort.column]) *
            (initialSort.order === 'asc' ? 1 : -1)
        )
    } else {
      return data
    }
  }, [data, initialSort])

  const [tableData, setTableData] = useState(dataInitiallySorted)

  const [tableDataSorted, setTableDataSorted, sortData] =
    useSortTable(tableData)
  const [tableDataFiltered, setTableDataFiltered, searchValue, setSearchValue] =
    useSearch({
      data: tableDataSorted,
      fieldsSearched,
      searchOnFullWord,
    })

  useEffect(() => {
    setTableData(tableDataSorted)
  }, [tableDataSorted])

  useEffect(() => {
    setTableData(tableDataFiltered)
  }, [tableDataFiltered])

  useEffect(() => {
    const entriesNumber = Number(entriesNumberChoice.value)
    const dataSlice = [
      entriesNumber * (pageNumber - 1),
      entriesNumber * pageNumber,
    ]
    fetchData(dataSlice[0], dataSlice[1])
  }, [entriesNumberChoice, pageNumber])

  useEffect(() => {
    setTableDataSorted(data)
    setTableDataFiltered(data)
  }, [data])

  return (
    <>
      <TableDisplayOptions>
        <EntriesLengthChoice>
          <p>Show</p>
          <EntriesNumberSelectDropdown
            onChange={handleEntriesNumberChange}
            options={entriesNumberOptions}
          />
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
              onClick={() => setPageNumber(pageNumber - 1)}
            />
            <Arrow
              src={PaginateLeftArrow}
              alt="Previous page"
              width="20px"
              rotate="180deg"
              onClick={() => setPageNumber(pageNumber + 1)}
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
