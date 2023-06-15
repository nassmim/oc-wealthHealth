import type { OptionValue } from '../../shared/Inputs/SelectDropdown.tsx'
import { CSSObjectWithLabel } from 'react-select'

const entriesNumberOptions: OptionValue[] = [
  { value: '10', label: '10' },
  { value: '25', label: '25' },
  { value: '50', label: '50' },
  { value: '100', label: '100' },
]

const entriesNumberOptionsProps = {
  showEntriesNumberText: 'Show',
  entriesUnits: 'entries',
  selectNativeProps: {
    options: entriesNumberOptions,
    inputId: 'table-entries-length',
    defaultValue: entriesNumberOptions[0],
    styles: {
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
    },
  },
}

export default entriesNumberOptionsProps
