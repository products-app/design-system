import { ComponentProps } from 'react'
import { styled } from './styles'

export const Button = styled('button', {
  fontFamily: '$default',
  background: '$base500',
  border: 'none',
  borderRadius: '8px',
  color: '$white',
  fontSize: '$md',
  cursor: 'pointer',
  fontWeight: '$bold',

  '&:hover': {
    background: '$base700',
  },

  variants: {
    size: {
      small: {
        fontSize: '$14',
        padding: '$2 $4',
        height: '$14',
      },
      large: {
        fontSize: '$16',
        padding: '$3 $6',
        height: '$16',
      },
    },
  },
  defaultVariants: {
    size: 'small',
  },
})

export type ButtonProps = ComponentProps<typeof Button>
