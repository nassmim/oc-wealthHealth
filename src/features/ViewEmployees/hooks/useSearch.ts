import { useState } from 'react'
import { Employee } from '../employeesSlice'

const useSearch = ({
  data = [],
  fieldsSearched,
  searchOnFullWord,
}: {
  data: Employee[]
  fieldsSearched: [keyof Employee][]
  searchOnFullWord: boolean
}): [Employee[], (value: string) => void] => {
  const [tableData, setTableData] = useState(data)

  const filter = (value: string) => {
    if (!value.length) {
      setTableData(data)
      return
    }

    const regexToMatch = searchOnFullWord
      ? new RegExp(`(\\s|^)${value}`, 'i')
      : new RegExp(`${value}`, 'i')

    const dataFound = data.reduce((listOfItems: Employee[], item: Employee) => {
      const keepValue = (isMatched: boolean) => {
        if (isMatched) {
          listOfItems.push(item)
          return false
        }
        return true
      }

      if (!fieldsSearched.length) {
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
    }, [])

    setTableData(dataFound)
  }

  return [tableData, filter]
}

export default useSearch
