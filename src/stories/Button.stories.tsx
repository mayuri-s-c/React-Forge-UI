import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../components/Button/Button'

const meta = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline', 'ghost', 'danger'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: { children: 'Primary Button', variant: 'primary' },
}

export const Secondary: Story = {
  args: { children: 'Secondary Button', variant: 'secondary' },
}

export const Outline: Story = {
  args: { children: 'Outline Button', variant: 'outline' },
}

export const Loading: Story = {
  args: { children: 'Loading', isLoading: true },
}

export const CustomStyle: Story = {
  args: {
    children: 'Custom Styled',
    className: 'my-custom-btn',
    style: { borderRadius: '9999px' },
  },
}
