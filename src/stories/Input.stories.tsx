import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Input } from '../components/Input/Input'

const meta = {
  title: 'Components/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: [
        'text',
        'email',
        'password',
        'number',
        'tel',
        'url',
        'search',
        'date',
        'time',
        'datetime-local',
        'month',
        'week',
        'color',
      ],
    },
  },
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Email', type: 'email', placeholder: 'you@example.com' },
}

export const WithValue: Story = {
  args: {
    label: 'Email',
    defaultValue: 'user@example.com',
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('Hello')
    return (
      <div style={{ maxWidth: 320 }}>
        <Input
          label="Name"
          value={value}
          onValueChange={setValue}
          placeholder="Enter your name"
        />
        <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--cl-color-text-muted)' }}>
          Current value: {value}
        </p>
      </div>
    )
  },
}

export const WithHint: Story = {
  args: {
    label: 'Username',
    hint: 'Must be at least 3 characters',
    placeholder: 'Enter username',
  },
}

export const WithError: Story = {
  args: {
    label: 'Email',
    error: 'Invalid email address',
    defaultValue: 'invalid-email',
  },
}

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 320 }}>
      <Input label="Small" size="sm" placeholder="Small input" />
      <Input label="Medium" size="md" placeholder="Medium input" />
      <Input label="Large" size="lg" placeholder="Large input" />
    </div>
  ),
}

export const InputTypes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 320 }}>
      <Input label="Text" type="text" placeholder="Enter text" />
      <Input label="Email" type="email" placeholder="you@example.com" />
      <Input label="Password" type="password" placeholder="Enter password" />
      <Input label="Number" type="number" placeholder="0" />
      <Input label="Date" type="date" />
      <Input label="Time" type="time" />
      <Input label="Color" type="color" defaultValue="#2563eb" />
    </div>
  ),
}
