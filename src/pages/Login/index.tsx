import { Envelope, Lock } from 'phosphor-react'
import { FormEvent, useState } from 'react'
import { Button } from '../../components/Button'
import { CheckBox } from '../../components/CheckBox'
import { Header } from '../../components/Header'
import { TextInput } from '../../components/Input'
import { Text } from '../../components/Text'

export function Login() {
  const [isUserSignedIn, setIsUserSignedIn] = useState(false)

  function handleSigIn(event: FormEvent) {
    event.preventDefault()

    setIsUserSignedIn(true)
  }

  return (
    <main className="w-screen h-screen bg-gray-900 flex items-center justify-center flex-col">
      <Header />

      <form
        onSubmit={handleSigIn}
        className="flex flex-col items-stretch mt-8 gap-8"
      >
        {isUserSignedIn && <Text>Login Realizado!</Text>}

        <div className="flex flex-col gap-5">
          <label htmlFor="email" className="flex flex-col gap-4">
            <Text size="md" className="font-semibold">
              Endereço de e-mail
            </Text>

            <TextInput.Container>
              <TextInput.Icon>
                <Envelope size="bold" />
              </TextInput.Icon>

              <TextInput.Input id="email" placeholder="Digite seu e-mail" />
            </TextInput.Container>
          </label>

          <label htmlFor="password" className="flex flex-col gap-4">
            <Text size="md" className="font-semibold">
              Sua Senha
            </Text>

            <TextInput.Container>
              <TextInput.Icon>
                <Lock size="bold" />
              </TextInput.Icon>

              <TextInput.Input id="password" placeholder="******" />
            </TextInput.Container>
          </label>
        </div>

        <label htmlFor="remember" className="flex items-center gap-2">
          <CheckBox id="remember" />
          <Text size="sm" className="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit">Entrar na plataforma</Button>

        <footer className="flex flex-col gap-4 items-center">
          <Text
            asChild
            size="sm"
            className="underline text-gray-400 transition-colors hover:text-gray-200"
          >
            <a href="#">Esqueceu sua senha</a>
          </Text>
          <Text
            asChild
            size="sm"
            className="underline text-gray-400 transition-colors hover:text-gray-200"
          >
            <a href="#">Não possui conta? Crie uma agora </a>
          </Text>
        </footer>
      </form>
    </main>
  )
}
