import { CaretLeft, CaretRight } from 'phosphor-react'
import {
  CalendarActions,
  CalendarBody,
  CalendarContainer,
  CalendarHeader,
  CalendarTitle,
} from './styles'

export function Calendar() {
  return (
    <CalendarContainer>
      <CalendarHeader>
        <CalendarTitle>
          Fevereiro <span>2022</span>
        </CalendarTitle>
        <CalendarActions>
          <button>
            <CaretLeft />
          </button>
          <button>
            <CaretRight />
          </button>
        </CalendarActions>
      </CalendarHeader>

      <CalendarBody>
        <thead>
          <tr>
            <th>DOM.</th>
            <th>SEG.</th>
            <th>TER.</th>
            <th>QUA</th>
            <th>QUI</th>
            <th>SEX</th>
            <th>SAB</th>
          </tr>
        </thead>
      </CalendarBody>
    </CalendarContainer>
  )
}
