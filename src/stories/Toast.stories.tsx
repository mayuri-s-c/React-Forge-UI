import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../components/Button/Button'
import { ToastProvider, useToast } from '../components/Toast/Toast'

function ToastDemo() {
  const { toast } = useToast()

  return (
    <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
      <Button
        size="sm"
        onClick={() => toast({ message: 'Changes saved successfully.', variant: 'success' })}
      >
        Success
      </Button>
      <Button
        size="sm"
        variant="danger"
        onClick={() =>
          toast({ title: 'Error', message: 'Something went wrong.', variant: 'error' })
        }
      >
        Error
      </Button>
      <Button
        size="sm"
        variant="outline"
        onClick={() => toast({ message: 'New update available.', variant: 'info' })}
      >
        Info
      </Button>
      <Button
        size="sm"
        variant="secondary"
        onClick={() => toast({ message: 'Session expiring soon.', variant: 'warning' })}
      >
        Warning
      </Button>
    </div>
  )
}

const meta = {
  title: 'Components/Toast',
  component: ToastProvider,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} satisfies Meta<typeof ToastProvider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => <ToastDemo />,
}
