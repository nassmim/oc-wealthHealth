import { useState, useEffect, useRef } from 'react'
import { EmployeeEntity } from '../employeesSlice'

const useSearch = ({
  data,
  fieldsSearched,
  searchOnFullWord,
}: {
  data: EmployeeEntity[]
  fieldsSearched?: [keyof EmployeeEntity][]
  searchOnFullWord: boolean
}): [
  EmployeeEntity[],
  string,
  React.Dispatch<React.SetStateAction<string>>
] => {
  const [tableData, setTableData] = useState(data)

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

  const filter = () => {
    if (!searchValue.length) {
      setTableData(data)
      return
    }

    let dataToSort = tableData

    if (searchValue.length <= previousSearchValue.length) dataToSort = data

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
    filter()
  }, [searchValue])

  return [tableData, searchValue, setSearchValue]
}

export default useSearch
