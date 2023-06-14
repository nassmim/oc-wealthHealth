import { useEffect, useMemo, useState, useRef, useCallback } from 'react'
import { EmployeeEntity } from './employeesSlice'
import { SingleValue } from 'react-select'
import {
  EntriesLengthChoice,
  SearchField,
  TableDisplayOptions,
  TablePagination,
  Arrow,
  NoData,
} from './style.ts'

import PaginateLeftArrow from '../../assets/pagination-left-arrow.svg'

import EmployeesTable from './Table/Table.tsx'
import type { TableColumn } from './types.tsx'
import type { OptionValue } from '../../shared/Inputs/SelectDropdown.tsx'
import EntriesNumberSelectDropdown from './EntriesNumberSelectDropdown.tsx'
import useSortTable from './Table/hooks/useSortTable.ts'
import useSearch from './hooks/useSearch.ts'

const DisplayTable = ({
  data,
  columns,
  initialSort,
  entriesNumberOptions = [],
  isSearchable = false,
  fieldsSearched = [],
  searchOnFullWord = false,
  searchLabel = 'Search',
  isPaginable = false,
}: {
  data: EmployeeEntity[]
  columns: TableColumn[]
  initialSort?: { column: keyof EmployeeEntity; order: 'asc' | 'desc' }
  entriesNumberOptions?: OptionValue[]
  isSearchable?: boolean
  fieldsSearched?: [keyof EmployeeEntity][]
  searchOnFullWord?: boolean
  searchLabel?: string
  isPaginable?: boolean
}) => {
  if (isPaginable && !entriesNumberOptions.length) {
    alert(
      'entriesNumberOptions must be specified if you set isPaginable to true'
    )
    throw new Error()
  }

  const dataSlice: React.MutableRefObject<number[]> = useRef([])

  const [pagePreviousClickable, setPagePreviousClickable] = useState(false)
  const [pageNextClickable, setPageNextClickable] = useState(true)

  const [entriesNumberChoice, setEntriesNumberChoice]: [
    OptionValue,
    React.Dispatch<React.SetStateAction<OptionValue>>
  ] = useState(entriesNumberOptions[0])

  const [pageNumber, setPageNumber]: [
    number,
    React.Dispatch<React.SetStateAction<number>>
  ] = useState(1)

  const [hasBeenFiltered, setHasBeenFiltered] = useState(false)

  const deriveDataSlice = useCallback(
    (numberOfEntries: number, page: number): number[] => {
      const dataSlice = [numberOfEntries * (page - 1), numberOfEntries * page]
      return dataSlice
    },
    [pageNumber]
  )

  const handleEntriesNumberChange = (option: SingleValue<OptionValue>) => {
    if (option) setEntriesNumberChoice(option)
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
  const [tableDataSliced, setTableDataSliced] = useState(tableData)

  const [tableDataSorted, sortData, hasBeenSorted] = useSortTable(data)

  const [tableDataFiltered, filter] = useSearch({
    data: hasBeenSorted ? tableDataSorted : dataInitiallySorted,
    fieldsSearched,
    searchOnFullWord,
  })

  const handlePaginateNext = () => {
    setPageNextClickable(
      pageNumber <
        Math.ceil(tableData.length / Number(entriesNumberChoice.value))
    )
  }
  const handlePaginatePrevious = () => {
    setPagePreviousClickable(pageNumber > 1)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setHasBeenFiltered(true)
    filter(value)
  }

  const setAndSliceTableData = (
    valueToBeTrue: boolean,
    dataToUse: EmployeeEntity[]
  ) => {
    if (valueToBeTrue) {
      setTableData(dataToUse)
      const offset = 1
      setPageNumber(offset)
      sliceData(dataToUse, offset)
    }
  }

  const sliceData = (dataToSlice: EmployeeEntity[], offset?: number) => {
    let numberOfEntries: number, page: number | undefined

    if (!entriesNumberChoice) numberOfEntries = dataToSlice.length
    else numberOfEntries = Number(entriesNumberChoice.value)

    if (!isPaginable) page = 1
    else page = offset ? offset : pageNumber

    const newDataSlice = deriveDataSlice(numberOfEntries, page)
    newDataSlice[1] = Math.min(dataToSlice.length, newDataSlice[1])
    dataSlice.current = newDataSlice
    setTableDataSliced(dataToSlice.slice(newDataSlice[0], newDataSlice[1]))
  }

  useEffect(() => {
    setTableData(dataInitiallySorted)
    sliceData(dataInitiallySorted)
  }, [dataInitiallySorted])

  useEffect(() => {
    setTableData(tableDataSorted)
    setAndSliceTableData(hasBeenSorted, tableDataSorted)
  }, [hasBeenSorted, tableDataSorted])

  useEffect(() => {
    setTableData(tableDataFiltered)
    setAndSliceTableData(hasBeenFiltered, tableDataFiltered)
  }, [hasBeenFiltered, tableDataFiltered])

  useEffect(() => {
    sliceData(tableData)
    if (entriesNumberChoice) {
      handlePaginateNext()
      handlePaginatePrevious()
    }
  }, [pageNumber, entriesNumberChoice, tableData])

  return (
    <>
      <TableDisplayOptions>
        {entriesNumberOptions.length >= 1 && (
          <EntriesLengthChoice>
            <p>Show</p>
            <EntriesNumberSelectDropdown
              onChange={handleEntriesNumberChange}
              options={entriesNumberOptions}
            />
            <p>entries</p>
          </EntriesLengthChoice>
        )}
        {isSearchable && (
          <SearchField>
            <p>{searchLabel}</p>
            <input
              type="search"
              name="search"
              id="search-employee"
              onChange={handleSearch}
            />
          </SearchField>
        )}
      </TableDisplayOptions>
      {isPaginable && (
        <TablePagination>
          <p>
            Page {pageNumber}: {dataSlice.current[0] + 1} -{' '}
            {dataSlice.current[1]} in {tableData.length}
          </p>
          <div className="arrows">
            <Arrow
              src={PaginateLeftArrow}
              alt="Previous page"
              width="20px"
              rotate="0deg"
              cursor={pagePreviousClickable ? 'pointer' : 'cursor'}
              opacity={pagePreviousClickable ? '1' : '0.5'}
              onClick={() =>
                pagePreviousClickable
                  ? setPageNumber(pageNumber - 1)
                  : undefined
              }
            />
            <Arrow
              src={PaginateLeftArrow}
              alt="Previous page"
              width="20px"
              rotate="180deg"
              cursor={pageNextClickable ? 'pointer' : 'cursor'}
              opacity={pageNextClickable ? '1' : '0.5'}
              onClick={() =>
                pageNextClickable ? setPageNumber(pageNumber + 1) : undefined
              }
            />
          </div>
        </TablePagination>
      )}
      <div>
        <EmployeesTable
          data={tableDataSliced}
          columns={columns}
          sortData={sortData}
        />
        {!tableData.length && (
          <NoData>
            {hasBeenFiltered
              ? 'No results from your search'
              : 'There is no employee in your company. Please add them from the form'}
          </NoData>
        )}
      </div>
    </>
  )
}

export default DisplayTable
