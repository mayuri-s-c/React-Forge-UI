import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../components/Button/Button'
import { Tooltip } from '../components/Tooltip/Tooltip'

const meta = {
  title: 'Components/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>

export default meta
type Story = StoryObj<typeof meta>

export const Positions: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', padding: '3rem' }}>
      <Tooltip content="Top tooltip" position="top">
        <Button variant="outline" size="sm">Top</Button>
      </Tooltip>
      <Tooltip content="Bottom tooltip" position="bottom">
        <Button variant="outline" size="sm">Bottom</Button>
      </Tooltip>
      <Tooltip content="Left tooltip" position="left">
        <Button variant="outline" size="sm">Left</Button>
      </Tooltip>
      <Tooltip content="Right tooltip" position="right">
        <Button variant="outline" size="sm">Right</Button>
      </Tooltip>
    </div>
  ),
}
