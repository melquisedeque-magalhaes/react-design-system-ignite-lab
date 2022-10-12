import { Slot } from "@radix-ui/react-slot"
import { InputHTMLAttributes, ReactNode } from "react"

export interface InputContainerProps {
  children: ReactNode
}

function InputContainer({ children }: InputContainerProps) {
  return (
    <div className="flex items-center gap-4 py-3 px-4 w-[400px] h-[50px] outline-none bg-gray-800 rounded focus-within:ring-2 ring-cyan-500">
      {children}
    </div>
  )
}

interface InputIconProps {
  children: ReactNode
}

function InputIcon({ children }: InputIconProps) {
  return (
    <Slot className="h-6 w-6 text-gray-400">
      {children}
    </Slot>
  )
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input({ ...rest }: InputProps) {
  return(
    <input {...rest} className="text-gray-100 text-xs placeholder:text-gray-400 bg-transparent flex-1 outline-none" />
  )
}

export const TextInput = {
  Container: InputContainer,
  Input: Input,
  Icon: InputIcon
}