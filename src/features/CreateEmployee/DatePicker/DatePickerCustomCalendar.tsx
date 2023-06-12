import { CalendarContainer } from 'react-datepicker'
import { ReactNode } from 'react'
import { DatePickerCalendarContainer } from '../style'

const DatePickerCustomCalendar = ({
  className,
  children,
}: {
  className: string
  children: ReactNode
}) => {
  return (
    <DatePickerCalendarContainer>
      <CalendarContainer className={className}>
        <div style={{ position: 'relative' }}>{children}</div>
      </CalendarContainer>
    </DatePickerCalendarContainer>
  )
}

export default DatePickerCustomCalendar
