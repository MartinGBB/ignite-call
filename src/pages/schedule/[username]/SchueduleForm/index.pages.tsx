import { useState } from 'react'
import { CalendarStep } from './CandelarStep'
import { ConfirmStep } from './ConfirmStep'

export function ScheduleForm() {
  const [selectedDateTime, setSelectedDateTime] = useState<Date | null>()

  if (selectedDateTime) {
    return <ConfirmStep schedulingDate={selectedDateTime} />
  }

  return <CalendarStep onSelectedDateTime={setSelectedDateTime} />
}
