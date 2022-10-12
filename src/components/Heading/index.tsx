import { Slot } from '@radix-ui/react-slot';
import { ReactNode } from 'react';
import { clsx } from 'clsx'

export interface HeadingProps {
  children: ReactNode
  size: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

export function Heading({ children, size, asChild = false }: HeadingProps) {
  const Component = asChild ? Slot : 'h2'

  return (
    <Component
      className={
        clsx('text-gray-100 font-sans', 
          {
            'text-lg': size === 'sm',
            'text-xl': size === 'md',
            'text-2xl': size === 'lg'
          }
        )
      }
    >
      {children}
    </Component>
  )
}