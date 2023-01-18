import {
  Button,
  Heading,
  MultiStep,
  Text,
  TextInput,
} from '@martin-ignite-ui/react'
import { ArrowRight } from 'phosphor-react'
import { Form, Header, Container } from './styles'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao Ignite Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />

        <Form>
          <label>
            <Text size="sm">Nome de usuário</Text>
            <TextInput prefix="ignite.com/" placeholder="seu-usuario" />
          </label>

          <label>
            <Text size="sm">Nome completo</Text>
            <TextInput placeholder="seu-nome" />
          </label>

          <Button type="submit">
            Próximo passo
            <ArrowRight />
          </Button>
        </Form>
      </Header>
    </Container>
  )
}
