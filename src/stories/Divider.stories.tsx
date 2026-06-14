import type { Meta, StoryObj } from '@storybook/react-vite'
import { Divider } from '../components/Divider/Divider'

const meta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs'],
} satisfies Meta<typeof Divider>

export default meta
type Story = StoryObj<typeof meta>

export const Horizontal: Story = {
  render: () => (
    <div style={{ maxWidth: 400 }}>
      <p>Content above</p>
      <Divider />
      <p>Content below</p>
      <Divider label="Or" />
      <p>More content</p>
    </div>
  ),
}

export const Vertical: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', height: 48 }}>
      <span>Left</span>
      <Divider orientation="vertical" />
      <span>Right</span>
    </div>
  ),
}
