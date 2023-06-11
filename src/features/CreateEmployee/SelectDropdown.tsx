import Select from 'react-select'

const SelectDropdown = ({
  id,
  onChange,
}: {
  id: string
  onChange: (...event: any[]) => void
}) => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ]

  return (
    <Select
      inputId={id}
      options={options}
      onChange={(newValue) => onChange(newValue?.label)}
      isClearable
      isSearchable
      placeholder="Select your state"
      blurInputOnSelect
    />
  )
}

export default SelectDropdown
