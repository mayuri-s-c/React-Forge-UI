import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Checkbox } from '../components/Checkbox/Checkbox'

const meta = {
  title: 'Components/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Accept terms and conditions' },
}

export const Checked: Story = {
  args: { label: 'Remember me', defaultChecked: true },
}

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = useState(false)
    return (
      <div>
        <Checkbox
          label="Subscribe to newsletter"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--cl-color-text-muted)' }}>
          Checked: {checked ? 'Yes' : 'No'}
        </p>
      </div>
    )
  },
}

export const Disabled: Story = {
  args: { label: 'Disabled option', disabled: true },
}
