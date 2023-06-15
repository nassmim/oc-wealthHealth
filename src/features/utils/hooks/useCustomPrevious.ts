import { useRef } from 'react'

const useCustomPrevious = (value: string): string => {
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

export default useCustomPrevious
