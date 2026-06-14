import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Textarea } from '../components/Textarea/Textarea'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  tags: ['autodocs'],
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Message', placeholder: 'Write your message...' },
}

export const WithValue: Story = {
  args: {
    label: 'Bio',
    defaultValue: 'Tell us about yourself...',
    rows: 4,
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('Initial text')
    return (
      <div style={{ maxWidth: 400 }}>
        <Textarea
          label="Description"
          value={value}
          onValueChange={setValue}
          rows={4}
        />
        <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--cl-color-text-muted)' }}>
          Current value: {value}
        </p>
      </div>
    )
  },
}

export const WithError: Story = {
  args: {
    label: 'Bio',
    error: 'Bio is required',
    rows: 4,
  },
}
