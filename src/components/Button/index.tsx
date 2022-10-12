import { Slot } from "@radix-ui/react-slot"
import { ReactNode } from "react"

export interface ButtonProps {
  children: ReactNode
  asChild?: boolean
}

export function Button({ children, asChild = false }: ButtonProps) {
  const Component = asChild ? Slot : 'button'

  return(
    <Component 
      className="w-full flex items-center justify-center bg-cyan-500 rounded-lg h-14 text-black font-semibold text-sm transition-colors hover:bg-cyan-300 focus:ring-2 ring-white"
    >
      {children}
    </Component>
  )
}