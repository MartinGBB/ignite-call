import dayjs from 'dayjs'
import { CaretLeft, CaretRight } from 'phosphor-react'
import { useState } from 'react'
import { getWeekDays } from '../../utils/get-week-days'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarDay,
  CalendarHeader,
  CalendarTitle,
} from './styles'

export function Calendar() {
  const [currenDate, setCurrenDate] = useState(() => {
    return dayjs().set('date', 1)
  })

  function handlePreviousMonth() {
    const previousMonthDate = currenDate.subtract(1, 'month')
    setCurrenDate(previousMonthDate)
  }

  function handleNextMonth() {
    const previousMonthDate = currenDate.add(1, 'month')
    setCurrenDate(previousMonthDate)
  }

  const shortWeekdays = getWeekDays({ short: true })

  const currentMonth = currenDate.format('MMMM')
  const currentYear = currenDate.format('YYYY')

  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          {currentMonth} <span>{currentYear}</span>
        </CalendarTitle>
        <CalendarActions>
          <button onClick={handlePreviousMonth} title="Previous month">
            <CaretLeft />
          </button>
          <button onClick={handleNextMonth} title="Next month">
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            {shortWeekdays.map((weekDay) => (
              <th key={weekDay}>{weekDay}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
              <CalendarDay>1</CalendarDay>
            </td>
            <td>
              <CalendarDay disabled>2</CalendarDay>
            </td>
            <CalendarDay>3</CalendarDay>
            <td></td>
          </tr>
        </tbody>
      </CalendarBody>
    </CalendarContainer>
  )
}
