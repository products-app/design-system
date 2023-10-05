import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@leticiabernardo/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    children: 'Testing 1,2,3',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {
  parameters: {
    docs: {
      description: 'Por padrão o heading sempre será um `h2`',
    },
  },
}
