import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { Check } from 'phosphor-react'

export function CheckBox() {
  return (
    <CheckboxPrimitive.Root className='h-6 w-6 bg-gray-800 flex items-center justify-center rounded p-[2px]'>
      <CheckboxPrimitive.Indicator asChild>
        <Check weight="bold" className='text-cyan-500 h-5 w-5' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}