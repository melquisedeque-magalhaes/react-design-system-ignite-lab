import { Meta, StoryObj } from '@storybook/react'
import { Lock } from 'phosphor-react'
import { Icon, IconProps } from '.'

export default {
  title: 'Components/Icon',
  component: Icon,
  args: {
    children: <Lock weight="bold" />,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<IconProps>

export const Default: StoryObj<IconProps> = {}
