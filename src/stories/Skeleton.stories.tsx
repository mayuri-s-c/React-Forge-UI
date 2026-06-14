import type { Meta, StoryObj } from '@storybook/react-vite'
import { Skeleton } from '../components/Skeleton/Skeleton'

const meta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
} satisfies Meta<typeof Skeleton>

export default meta
type Story = StoryObj<typeof meta>

export const LoadingCard: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', maxWidth: 320 }}>
      <Skeleton variant="circular" width={48} height={48} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="40%" />
      </div>
    </div>
  ),
}

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 320 }}>
      <Skeleton variant="text" />
      <Skeleton variant="rectangular" height={80} />
      <Skeleton variant="circular" width={48} height={48} />
    </div>
  ),
}
