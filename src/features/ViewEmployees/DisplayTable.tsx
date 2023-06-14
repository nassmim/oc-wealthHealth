import { useEffect, useMemo, useState, useRef, useCallback } from 'react'
import { EmployeeEntity } from './employeesSlice'

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
  fieldsSearched?: [keyof EmployeeEntity][]
  searchOnFullWord: boolean
  searchLabel: string
  isPaginable: boolean
}) => {
  const dataSlice: React.MutableRefObject<number[]> = useRef([])
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
    (position: number, offset?: number): number[] => {
      const finalPageNumber = offset ? offset : pageNumber
      const dataSlice = [
        position * (finalPageNumber - 1),
        position * finalPageNumber,
      ]
      return dataSlice
    },
    [pageNumber]
  )

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
  const [tableDataSliced, setTableDataSliced] = useState(tableData)

  const [tableDataSorted, sortData, hasBeenSorted] = useSortTable(data)

  const [tableDataFiltered, filter] = useSearch({
    data: hasBeenSorted ? tableDataSorted : dataInitiallySorted,
    fieldsSearched,
    searchOnFullWord,
  })

  const handleSearch = (e) => {
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
    const newDataSlice = deriveDataSlice(
      Number(entriesNumberChoice.value),
      offset
    )
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
  }, [pageNumber, entriesNumberChoice.value])

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
              onChange={handleSearch}
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
