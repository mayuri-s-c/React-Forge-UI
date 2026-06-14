import type { Meta, StoryObj } from '@storybook/react-vite'
import { Chip } from '../components/Chip/Chip'

const meta = {
  title: 'Components/Chip',
  component: Chip,
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>

export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
      <Chip variant="primary">Design</Chip>
      <Chip variant="secondary">Engineering</Chip>
      <Chip variant="success">Approved</Chip>
      <Chip variant="warning">Pending</Chip>
      <Chip variant="danger">Blocked</Chip>
      <Chip variant="outline">Draft</Chip>
      <Chip variant="primary" removable onRemove={() => {}}>Removable</Chip>
    </div>
  ),
}
