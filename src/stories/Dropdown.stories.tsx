import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Dropdown } from '../components/Dropdown/Dropdown'

const meta = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>

export default meta
type Story = StoryObj<typeof meta>

const options = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte', disabled: true },
]

export const Default: Story = {
  args: {
    label: 'Framework',
    placeholder: 'Select a framework',
    options,
  },
}

export const WithValue: Story = {
  args: {
    label: 'Framework',
    options,
    defaultValue: 'react',
  },
}

export const Controlled: Story = {
  render: () => {
    const [value, setValue] = useState('react')
    return (
      <div style={{ maxWidth: 320 }}>
        <Dropdown
          label="Framework"
          options={options}
          value={value}
          onValueChange={setValue}
        />
        <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--cl-color-text-muted)' }}>
          Selected: {value}
        </p>
      </div>
    )
  },
}

export const WithError: Story = {
  args: {
    label: 'Framework',
    error: 'Please select a framework',
    options,
  },
}
