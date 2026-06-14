import type { Meta, StoryObj } from '@storybook/react-vite'
import { Progress } from '../components/Progress/Progress'

const meta = {
  title: 'Components/Progress',
  component: Progress,
  tags: ['autodocs'],
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { value: 65, showLabel: true },
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 400 }}>
      <Progress value={40} variant="primary" showLabel />
      <Progress value={60} variant="secondary" showLabel />
      <Progress value={80} variant="danger" showLabel />
    </div>
  ),
}
