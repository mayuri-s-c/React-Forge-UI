import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from '../components/Alert/Alert'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  tags: ['autodocs'],
} satisfies Meta<typeof Alert>

export default meta
type Story = StoryObj<typeof meta>

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: 480 }}>
      <Alert variant="info" title="Info">Your trial expires in 7 days.</Alert>
      <Alert variant="success" title="Success">Payment processed successfully.</Alert>
      <Alert variant="warning" title="Warning">Storage is almost full.</Alert>
      <Alert variant="error" title="Error" dismissible>Something went wrong.</Alert>
    </div>
  ),
}
