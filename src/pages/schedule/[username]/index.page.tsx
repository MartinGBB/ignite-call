import { Avatar, Heading, Text } from '@martin-ignite-ui/react'
import { Container, UserHeader } from './styles'

export default function Schedule() {
  return (
    <Container>
      <UserHeader>
        <Avatar src="https://github.com/MartinGBB.png" />
        <Heading>Martin Brazón</Heading>
        <Text>Dev Front End</Text>
      </UserHeader>
    </Container>
  )
}
