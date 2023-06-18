import { DatePickerHeader } from '../style'
import { ReactDatePickerCustomHeaderProps } from 'react-datepicker'

const CALENDAR_YEAR_START = 1900
const today = new Date()

const numberofYears: number = today.getFullYear() - CALENDAR_YEAR_START + 1
// Generates the list of years to display in the datepicker
export const years: number[] = [...Array(numberofYears).keys()].map(
  (position: number) => CALENDAR_YEAR_START + position
)

export const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

const renderCustomDatePickerHeader = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}: ReactDatePickerCustomHeaderProps) => {
  return (
    <DatePickerHeader>
      <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
        {'<'}
      </button>
      <select
        value={date.getFullYear()}
        onChange={({ target: { value } }) => changeYear(Number(value))}
      >
        {years.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <select
        value={months[date.getMonth()]}
        onChange={({ target: { value } }) => changeMonth(months.indexOf(value))}
      >
        {months.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
        {'>'}
      </button>
    </DatePickerHeader>
  )
}

export default renderCustomDatePickerHeader
