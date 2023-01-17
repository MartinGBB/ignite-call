import { Box, styled } from '@martin-ignite-ui/react'

export const Form = styled(Box, {
  display: 'grid',
  gridTemplateColumns: '1fr auto',
  gap: '$2',
  marginTop: '$4',
  padding: '$4',

  '@media(max-width: 700px)': {
    gridTemplateColumns: '1fr',
  },
})
