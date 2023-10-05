import { ComponentProps } from 'react'
import { styled } from '../styles'

export const Card = styled('div', {
  padding: '$4',
  borderRadius: '4px',
  background: '$gray800',
  border: '1px solid $gray600',
  color: '$white',
})

export interface CardProps extends ComponentProps<typeof Card> {}
