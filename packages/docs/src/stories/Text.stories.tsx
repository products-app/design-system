import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@lebernardo/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Heading 1,2,3',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
