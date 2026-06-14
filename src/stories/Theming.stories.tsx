import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../components/Button/Button'
import { ThemeProvider } from '../components/ThemeProvider/ThemeProvider'
import { ThemeToggle } from '../components/ThemeToggle/ThemeToggle'

const meta = {
  title: 'Foundation/Theming',
  tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const LightDarkToggle: Story = {
  render: () => (
    <ThemeProvider defaultMode="light">
      <div style={{ padding: '1.5rem', borderRadius: '0.5rem', border: '1px solid var(--cl-color-border)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
          <span style={{ color: 'var(--cl-color-text)' }}>Toggle between light and dark mode</span>
          <ThemeToggle />
        </div>
        <Button>Primary Action</Button>
      </div>
    </ThemeProvider>
  ),
}

export const CustomBrand: Story = {
  render: () => (
    <ThemeProvider
      theme={{
        '--cl-color-primary': '#7c3aed',
        '--cl-color-primary-hover': '#6d28d9',
        '--cl-radius-md': '0.75rem',
      }}
    >
      <Button>Custom Brand</Button>
    </ThemeProvider>
  ),
}

export const ControlledMode: Story = {
  render: () => {
    const [mode, setMode] = useState<'light' | 'dark'>('light')
    return (
      <ThemeProvider mode={mode} onModeChange={setMode}>
        <div style={{ padding: '1.5rem' }}>
          <ThemeToggle />
          <p style={{ marginTop: '1rem', color: 'var(--cl-color-text-muted)' }}>
            Current mode: {mode}
          </p>
        </div>
      </ThemeProvider>
    )
  },
}
