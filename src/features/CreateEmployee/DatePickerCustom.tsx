import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

type datePickerProps = {
  value: Date
  onChange: (value: Date) => Date
}
const DatePickerCustom = ({ value, onChange }: datePickerProps) => {
  return <DatePicker selected={value} onChange={onChange} />
}
export default DatePickerCustom
