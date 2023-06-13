import { useEffect, useMemo, useState, useRef } from 'react'
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

  const deriveDataSlice = (position: number): number[] => {
    const dataSlice = [position * (pageNumber - 1), position * pageNumber]
    return dataSlice
  }

  const dataSlice = useRef(deriveDataSlice(Number(entriesNumberChoice.value)))

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
    const newDataSlice = deriveDataSlice(Number(entriesNumberChoice.value))
    dataSlice.current = newDataSlice
    fetchData(newDataSlice[0], newDataSlice[1])
  }, [entriesNumberChoice, pageNumber])

  useEffect(() => {
    console.log(data.length)
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
          <p>
            {dataSlice.current[0] + 1} - {dataSlice.current[1]} in {data.length}
          </p>
          <div className="arrows">
            <Arrow
              src={PaginateLeftArrow}
              alt="Previous page"
              width="20px"
              rotate="0deg"
              cursor="pointer"
              onClick={() => setPageNumber(pageNumber - 1)}
            />
            <Arrow
              src={PaginateLeftArrow}
              alt="Previous page"
              width="20px"
              rotate="180deg"
              cursor="pointer"
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
