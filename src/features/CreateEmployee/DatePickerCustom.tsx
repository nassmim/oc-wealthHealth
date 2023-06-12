import DatePicker, { CalendarContainer } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import { DatePickerHeader, DatePickerContainer } from './style'
import { CALENDAR_YEAR_START, TODAY } from '../../shared/data/constants'
import { ReactNode } from 'react'

const numberofYears: number = TODAY.getFullYear() - CALENDAR_YEAR_START + 1

const years: number[] = [...Array(numberofYears).keys()].map(
  (position: number) => CALENDAR_YEAR_START + position
)

const months: string[] = [
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
  onChange: (...event: any[]) => void
  renderCustomHeader?: boolean
  filteredDays: number[] | undefined
}

const DatePickerCustom = ({
  id,
  value,
  onChange,
  renderCustomHeader,
  filteredDays,
}: datePickerProps) => {
  return (
    <DatePicker
      id={id}
      wrapperClassName="datepicker"
      calendarContainer={customCalendar}
      renderCustomHeader={renderCustomHeader ? customHeaderRender : undefined}
      todayButton="Today"
      isClearable
      showIcon
      fixedHeight
      selected={value}
      onChange={onChange}
      filterDate={(date: Date): boolean =>
        filteredDays?.length ? !filteredDays.includes(date.getDay()) : true
      }
    />
  )
}
export default DatePickerCustom

const customCalendar = ({
  className,
  children,
}: {
  className: string
  children: ReactNode
}) => {
  return (
    <DatePickerContainer>
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
