import { Heading } from '../Heading'
import { LogoReact } from '../Logos/React'
import { Text } from '../Text'

export function Header() {
  return (
    <header className="flex items-center flex-col">
      <LogoReact />
      <Heading asChild size="lg"><h1>Ignite Lab</h1></Heading>
      <Text className="text-gray-400 mt-6" size="lg">
        Faça login e comece a usar!
      </Text>
    </header>
  )
}
