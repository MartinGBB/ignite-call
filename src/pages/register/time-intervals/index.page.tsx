import {
  Button,
  Checkbox,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@martin-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'
import { getWeekDays } from '../../../utils/get-week-days'
import { Header, Container } from '../styles'
import {
  IntervalBox,
  IntervalContainer,
  IntervalDay,
  IntervalInputs,
  IntervalItem,
} from './styles'

const timeIntervalsFormSchema = z.object({})

export default function TimeIntervals() {
  const {
    register,
    control,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm({
    defaultValues: {
      intervals: [
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
        { weekDay: 0, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 0, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 0, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 0, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 0, enabled: true, startTime: '08:00', endTime: '18:00' },
        { weekDay: 0, enabled: false, startTime: '08:00', endTime: '18:00' },
      ],
    },
  })

  const weekDays = getWeekDays()

  const { fields } = useFieldArray({
    control,
    name: 'intervals',
  })

  async function handleSetTimeIntervals() {}

  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>
          Defina o intervalo de horários que você está disponível em cada dia da
          semana.
        </Text>

        <MultiStep size={4} currentStep={3} />
      </Header>

      <IntervalBox as="form" onSubmit={handleSubmit(handleSetTimeIntervals)}>
        <IntervalContainer>
          {fields.map((field) => {
            return (
              <IntervalItem key={field.id}>
                <IntervalDay>
                  <Checkbox />
                  <Text>{weekDays[field.weekDay]}</Text>
                </IntervalDay>
                <IntervalInputs />
                <TextInput size="sm" type="time" step={60} />
                <TextInput size="sm" type="time" step={60} />
              </IntervalItem>
            )
          })}
        </IntervalContainer>

        <Button type="submit">
          Próximo Passo <ArrowRight />
        </Button>
      </IntervalBox>
    </Container>
  )
}
