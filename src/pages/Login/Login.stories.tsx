import { Meta, StoryObj } from '@storybook/react'
import { within, userEvent, waitFor } from '@storybook/testing-library'
import { expect } from '@storybook/jest'
import { Login } from '.'

export default {
  title: 'Pages/Login',
  component: Login,
} as Meta

export const Default: StoryObj = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement)

    userEvent.type(
      canvas.getAllByPlaceholderText('Digite seu e-mail'),
      'melqui.test@gmail.com',
    )

    userEvent.type(canvas.getAllByPlaceholderText('******'), '123456')

    userEvent.click(canvas.getByRole('button'))

    await waitFor(() => {
      expect(canvas.getByText('Login Realizado!')).toBeInTheDocument()
    })
  },
}
