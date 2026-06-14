import type { Meta, StoryObj } from '@storybook/react-vite'
import { Avatar } from '../components/Avatar/Avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const WithInitials: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar name="Alex Morgan" size="sm" />
      <Avatar name="Alex Morgan" size="md" />
      <Avatar name="Alex Morgan" size="lg" />
    </div>
  ),
}

export const WithImage: Story = {
  args: {
    src: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Alex',
    alt: 'Alex Morgan',
    size: 'lg',
  },
}
