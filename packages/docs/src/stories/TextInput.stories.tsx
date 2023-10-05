import type { Meta, StoryObj } from '@storybook/react'
import { Card, Text, TextInput, TextInputProps } from '@leticiabernardo/react'

export default {
  title: 'Components/Text Input',
  component: TextInput,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Card
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Text</Text>
          {Story()}
        </Card>
      )
    },
  ],
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'R$',
  },
}
