import { ComponentProps, ElementType } from 'react'
import { styled } from '../../styles'

export const Button = styled('button', {
  all: 'unset',
  background: '$base500',
  border: '2px solid $base500',
  borderRadius: '8px',
  cursor: 'pointer',
  minWidth: 120,
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  color: '$white',
  fontSize: '$md',
  fontFamily: '$default',
  fontWeight: '$bold',

  svg: {
    width: '$4',
    height: '$4',
  },

  '&:hover': {
    background: '$base700',
    border: '2px solid $base700',
  },
  '& svg': {
    display: 'inline-block',
    verticalAlign: 'center',
    height: '13px',
    marginLeft: '5px',
  },
  '&:disabled': {
    background: '$gray200',
    border: '2px solid $gray200',
    cursor: 'not-allowed',
    color: '$white',
  },

  variants: {
    variant: {
      primary: {
        '&:hover': {
          background: '$base700',
        },
        '&:disabled': {
          background: '$gray200',
          border: '2px solid $gray200',
          color: '$white',
        },
      },
      outline: {
        color: '$base300',
        border: '2px solid $base300',
        background: 'transparent',
        '&:hover': {
          background: '$base300',
          color: '$white',
        },
        '&:disabled': {
          background: 'transparent',
          border: '2px solid $gray200',
          color: '$gray200',
        },
      },
    },
    size: {
      small: {
        fontSize: '$14',
        padding: '$1 0',
        height: '$14',
      },
      medium: {
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
    size: 'medium',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}
