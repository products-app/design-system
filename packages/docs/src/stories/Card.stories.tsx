import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardProps } from '@lebernardo/react'

export default {
  title: 'Components/Card',
  component: Card,
  args: {
    children: <>Testando</>,
  },
} as Meta<CardProps>

export const Primary: StoryObj<CardProps> = {}
