import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

interface CheckBoxProps extends CheckboxPrimitive.CheckboxProps {}

export function CheckBox({ ...rest }: CheckBoxProps) {
  return (
    <CheckboxPrimitive.Root {...rest} className="h-6 w-6 bg-gray-800 flex items-center justify-center rounded p-[2px]">
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className="text-cyan-500 h-5 w-5" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
