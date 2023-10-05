import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@leticiabernardo/react'
import { Heart } from 'phosphor-react'

const argTypes: object = {
  children: {
    control: 'text',
    type: {
      summary: 'React.Node',
    },
  },
  disabled: {
    control: 'boolean',
    type: {
      summary: 'boolean',
    },
    defaultValue: { summary: 'false' },
  },
  size: {
    options: ['small', 'medium', 'large'],
    control: { type: 'select' },
    type: {
      summary: 'string',
    },
    defaultValue: { summary: 'medium' },
  },
  variant: {
    options: ['primary', 'outline'],
    control: { type: 'radio' },
    type: {
      summary: 'string',
    },
    defaultValue: { summary: 'primary' },
  },
}

export default {
  title: 'Form/Button',
  component: Button,
  args: {
    children: 'Button',
  },
  argTypes,
} as Meta<ButtonProps>

export const Default: StoryObj<ButtonProps> = {}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <Heart /> Favorite
      </>
    ),
  },
}
