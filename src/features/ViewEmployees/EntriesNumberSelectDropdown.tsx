import { CSSObjectWithLabel, SingleValue, ActionMeta } from 'react-select'
import type { OptionValue } from '../../shared/Inputs/SelectDropdown.tsx'
import SelectDropdown from '../../shared/Inputs/SelectDropdown.tsx'

const EntriesNumberSelectDropdown = ({
  options,
  onChange,
}: {
  options: OptionValue[]
  onChange:
    | ((
        newValue: SingleValue<OptionValue>,
        actionMeta: ActionMeta<OptionValue>
      ) => void)
    | undefined
}) => {
  return (
    <SelectDropdown
      options={options}
      inputId="table-entries-length"
      onChange={onChange}
      defaultValue={options[0]}
      styles={{
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
      }}
    />
  )
}

export default EntriesNumberSelectDropdown
