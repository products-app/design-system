import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@leticiabernardo/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children: 'Heading 1,2,3',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}
