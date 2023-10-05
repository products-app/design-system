import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps } from '@leticiabernardo/react'

export default {
  title: 'Surfaces/Card',
  component: Card,
  args: {
    children: <>Testando</>,
  },
} as Meta<CardProps>

export const Primary: StoryObj<CardProps> = {}
