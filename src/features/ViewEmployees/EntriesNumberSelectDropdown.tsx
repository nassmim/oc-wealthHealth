import { CSSObjectWithLabel } from 'react-select'
import type { OptionValue } from '../../shared/Inputs/SelectDropdown.tsx'
import SelectDropdown from '../../shared/Inputs/SelectDropdown.tsx'

const entriesSelectDropdownStyle = {
  control: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    justifyContent: 'space-around',
    flexWrap: 'nowrap',
    width: '50px',
    minHeight: '0px',
    backgroundColor: '#f1ecec',
  }),
  valueContainer: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    flex: 'none',
    padding: '2px 0px',
    overflow: 'visible',
  }),
  singleValue: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    fontSize: '15px',
    paddingRight: '0px',
  }),
  indicatorSeparator: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    display: 'none',
  }),
  dropdownIndicator: (baseStyles: CSSObjectWithLabel) => ({
    ...baseStyles,
    padding: '8px 0px',
    cursor: 'pointer',
    svg: {
      width: '15px',
      paddingLeft: 'Opx',
    },
  }),
}

const EntriesNumberSelectDropdown = ({
  options,
}: {
  options: OptionValue[]
}) => {
  return (
    <SelectDropdown
      options={options}
      inputId="table-entries-length"
      onChange={() => console.log('entries changed')}
      defaultValue={options[0]}
      styles={entriesSelectDropdownStyle}
    />
  )
}

export default EntriesNumberSelectDropdown
