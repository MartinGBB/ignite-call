import { zodResolver } from '@hookform/resolvers/zod'
import {
  Button,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@martin-ignite-ui/react'
import { useRouter } from 'next/router'
import { ArrowRight } from 'phosphor-react'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { api } from '../../lib/axios'
import { Form, Header, Container, FormError } from './styles'

const registerFormSchema = z.object({
  username: z
    .string()
    .min(3, { message: 'O usuario precisa ter pelomenos 3 letras.' })
    .max(10, { message: 'O usuario deve ter no máximo 10 caracteres.' })
    .regex(/^([a-z\\-]+)$/i, {
      message: 'O usuario precisa ter apenas letras e hifens.',
    })
    .transform((username) => username.toLowerCase()),
  name: z
    .string()
    .min(3, { message: 'O nome precisa ter pelomenos 3 letras.' }),
})

type RegisterFormData = z.infer<typeof registerFormSchema>

export default function Register() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerFormSchema),
  })

  const router = useRouter()

  useEffect(() => {
    if (router.query.username) {
      setValue('username', String(router.query.username))
    }
  }, [router.query?.username, setValue])

  async function handleRegister(data: RegisterFormData) {
    try {
      await api.post('/users', {
        name: data.name,
        username: data.username,
      })
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />

        <Form as="form" onSubmit={handleSubmit(handleRegister)}>
          <label>
            <Text size="sm">Nome de usuário</Text>
            <TextInput
              prefix="ignite.com/"
              placeholder="seu-usuario"
              {...register('username')}
            />
          </label>
          {errors.username && (
            <FormError size="sm">{errors.username.message}</FormError>
          )}

          <label>
            <Text size="sm">Nome completo</Text>
            <TextInput placeholder="seu-nome" {...register('name')} />
          </label>
          {errors.name && (
            <FormError size="sm">{errors.name.message}</FormError>
          )}

          <Button type="submit" disabled={isSubmitting}>
            Próximo passo
            <ArrowRight />
          </Button>
        </Form>
      </Header>
    </Container>
  )
}
