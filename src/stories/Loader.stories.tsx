import type { Meta, StoryObj } from '@storybook/react-vite'
import { Loader } from '../components/Loader/Loader'

const meta = {
  title: 'Components/Loader',
  component: Loader,
  tags: ['autodocs'],
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Loader size="sm" />
      <Loader size="md" />
      <Loader size="lg" />
    </div>
  ),
}

export const Overlay: Story = {
  args: { overlay: true, size: 'lg' },
}
