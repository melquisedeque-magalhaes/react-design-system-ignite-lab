import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface IconProps {
  children: ReactNode
}

export function Icon({ children }: IconProps) {
  return <Slot className="h-6 w-6 text-gray-400">{children}</Slot>
}
