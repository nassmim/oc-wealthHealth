import { useState, useEffect, useCallback } from 'react'
import { EmployeeEntity } from '../employeesSlice'
import useCustomPrevious from './useCustomPrevious'

const useSearch = ({
  dataNotFiltered = [],
  data = [],
  fieldsSearched,
  searchOnFullWord,
}: {
  dataNotFiltered: EmployeeEntity[]
  data: EmployeeEntity[]
  fieldsSearched?: [keyof EmployeeEntity][]
  searchOnFullWord: boolean
}): [
  EmployeeEntity[],
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [tableData, setTableData] = useState(data)
  const [searchValue, setSearchValue] = useState('')
  const previousSearchValue = useCustomPrevious(searchValue)

  const filter = useCallback(() => {
    if (!searchValue.length) {
      setTableData(dataNotFiltered)
      return
    }

    let dataToFilter = tableData

    if (searchValue.length <= previousSearchValue.length)
      dataToFilter = dataNotFiltered

    const regexToMatch = searchOnFullWord
      ? new RegExp(`(\\s|^)${searchValue}`, 'i')
      : new RegExp(`${searchValue}`, 'i')

    const dataFound = dataToFilter.reduce(
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
  }, [searchValue])

  useEffect(() => {
    filter()
  }, [filter])

  return [tableData, searchValue, setSearchValue]
}

export default useSearch
