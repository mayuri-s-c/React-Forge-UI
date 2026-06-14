import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Switch } from '../components/Switch/Switch'

const meta = {
  title: 'Components/Switch',
  component: Switch,
  tags: ['autodocs'],
} satisfies Meta<typeof Switch>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Enable notifications' },
}

export const Controlled: Story = {
  render: () => {
    const [enabled, setEnabled] = useState(true)
    return (
      <div>
        <Switch label="Dark mode" checked={enabled} onCheckedChange={setEnabled} />
        <p style={{ marginTop: '0.75rem', fontSize: '0.875rem', color: 'var(--cl-color-text-muted)' }}>
          Enabled: {enabled ? 'Yes' : 'No'}
        </p>
      </div>
    )
  },
}
