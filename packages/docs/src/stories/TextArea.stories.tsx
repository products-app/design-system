import type { Meta, StoryObj } from '@storybook/react'
import { Card, Text, TextArea, TextAreaProps } from '@leticiabernardo/react'

export default {
  title: 'Components/Text Area',
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Card
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Descrição</Text>
          {Story()}
        </Card>
      )
    },
  ],
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Description...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
