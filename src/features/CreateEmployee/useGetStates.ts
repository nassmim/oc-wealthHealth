import { useMemo } from 'react'
import { OptionValue } from '../../shared/Inputs/SelectDropdown.tsx'
type State = {
  name: string
  abbreviation: string
}

const useGetStates = (states: State[]) => {
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
