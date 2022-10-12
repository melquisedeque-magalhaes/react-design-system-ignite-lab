import { Meta, StoryObj } from "@storybook/react";
import { CheckBox } from ".";
import { Text } from "../Text";

export default {
  title: 'Components/CheckBox',
  component: CheckBox,
  decorators: [
    (Story) => {
      return (
        <div className="flex items-center gap-2">
          {Story()}
          <Text size="sm">Lembrar de mim por 30 dias</Text>
        </div>
      )
    }
  ]
} as Meta

export const Default: StoryObj = {}