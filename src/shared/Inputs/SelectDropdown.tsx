import Select from 'react-select'

export type OptionValue = {
  value: string
  label: string
}

const SelectDropdown: Select = (props) => {
  return <Select {...props} />
}

export default SelectDropdown
