import DatePicker, { CalendarContainer } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { DatePickerHeader, DatePickerContainer } from './style'

const years = [2018, 2019, 2020]
const months = [
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

type datePickerProps = {
  id: string
  value: Date
  onChange: (value: Date) => Date
  filteredDays: number[] | undefined
}

const DatePickerCustom = ({
  id,
  value,
  onChange,
  filteredDays,
}: datePickerProps) => {
  return (
    <DatePicker
      id={id}
      calendarContainer={customCalendar}
      renderCustomHeader={customHeaderRender}
      todayButton="Today"
      isClearable
      showIcon
      selected={value}
      onChange={onChange}
      filterDate={(date: Date): boolean =>
        filteredDays?.length ? !filteredDays.includes(date.getDay()) : true
      }
    />

    // <DatePicker
    //   selected={value}
    //   onChange={onChange}
    // highlightDates={(date: Date) =>
    //   date.getDay() === 1 || date.getDay() === 6
    // }
    // filterDate={(date: Date): boolean => date.getDay() !== 0 && date.getDay() !== 6}
    // />
  )
}
export default DatePickerCustom

const customCalendar = ({ className, children }) => {
  return (
    <DatePickerContainer style={{}}>
      <CalendarContainer className={className}>
        <div style={{ position: 'relative' }}>{children}</div>
      </CalendarContainer>
    </DatePickerContainer>
  )
}

const customHeaderRender = ({
  date,
  changeYear,
  changeMonth,
  decreaseMonth,
  increaseMonth,
  prevMonthButtonDisabled,
  nextMonthButtonDisabled,
}) => {
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
