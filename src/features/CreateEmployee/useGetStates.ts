import { useMemo } from 'react'
import { useGetStatesQuery } from '../api/apiGenericDataSlice.ts'
import { OptionValue } from '../../shared/Inputs/SelectDropdown.tsx'

type State = {
  name: string
  abbreviation: string
}

const useGetStates = () => {
  const { data: states } = useGetStatesQuery(undefined)

  const statesAsDropdownOptions = useMemo((): OptionValue[] => {
    return states?.map((state: State) => {
      return {
        value: state.abbreviation,
        label: state.name,
      }
    })
  }, [states])

  return statesAsDropdownOptions
}

export default useGetStates
