import { Calendar } from '../../../../../components/Calendar'
import { Container, TimePicker } from './style'

export function CalendarStep() {
  const isDateSelected = true

  return (
    <Container isTimePickerOpen={isDateSelected}>
      <Calendar />
      {isDateSelected && <TimePicker />}
    </Container>
  )
}
