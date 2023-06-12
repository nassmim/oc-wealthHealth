import Select from 'react-select'

type OptionValue = {
  value: string
  label: string
}

const SelectDropdown = ({
  id,
  onChange,
  defaultValue,
  placeholder,
  width,
  backgroundColor,
}: {
  id: string
  onChange: (...event: any[]) => void
  defaultValue?: OptionValue
  placeholder?: string
  width?: string
  backgroundColor: string
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
      placeholder={placeholder}
      defaultValue={defaultValue?.value ? defaultValue : null}
      blurInputOnSelect
      styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          backgroundColor: backgroundColor,
          width: width ? width : '100%',
        }),
      }}
    />
  )
}

export default SelectDropdown
