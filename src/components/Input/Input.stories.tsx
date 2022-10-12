import { Meta, StoryObj } from "@storybook/react";
import { TextInput, InputContainerProps } from ".";
import { Envelope } from 'phosphor-react'

export default {
  title: 'Components/Input',
  component: TextInput.Container,
  args: {
    children: (
      <TextInput.Input placeholder="Digite seu E-mail" />
    )
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
} as Meta<InputContainerProps>

export const Default: StoryObj<InputContainerProps> = {}

export const InputWithIcon: StoryObj<InputContainerProps> = {
  args: {
    children: [
      <TextInput.Icon><Envelope weight="bold" /></TextInput.Icon>,
      <TextInput.Input placeholder="Digite seu E-mail" />
    ]
  },
  argTypes: {
    children: {
      table: {
        disable: true
      }
    }
  }
}