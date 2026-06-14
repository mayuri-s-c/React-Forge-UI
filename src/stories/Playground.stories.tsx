import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Alert } from '../components/Alert/Alert'
import { Avatar } from '../components/Avatar/Avatar'
import { Badge } from '../components/Badge/Badge'
import { Button } from '../components/Button/Button'
import { Card, CardBody, CardFooter, CardHeader } from '../components/Card/Card'
import { Chip } from '../components/Chip/Chip'
import { Input } from '../components/Input/Input'
import { Modal } from '../components/Modal/Modal'
import { Progress } from '../components/Progress/Progress'
import { Switch } from '../components/Switch/Switch'
import { ToastProvider, useToast } from '../components/Toast/Toast'
import { Tooltip } from '../components/Tooltip/Tooltip'

function DashboardDemo() {
  const [email, setEmail] = useState('designer@studio.com')
  const [notifications, setNotifications] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const { toast } = useToast()

  return (
    <div style={{ maxWidth: 960, margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}>
        <Avatar name="Alex Morgan" size="lg" />
        <div style={{ flex: 1 }}>
          <h1 style={{ margin: 0, fontSize: '1.75rem', color: 'var(--cl-color-text)' }}>
            Welcome back, Alex
          </h1>
          <p style={{ margin: '0.25rem 0 0', color: 'var(--cl-color-text-muted)' }}>
            Your component library is ready to ship.
          </p>
        </div>
        <Badge variant="success">Live</Badge>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
        <Card>
          <CardHeader title="Profile" description="Update your account details" />
          <CardBody>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <Input
                label="Email"
                type="email"
                value={email}
                onValueChange={setEmail}
              />
              <Switch
                label="Email notifications"
                checked={notifications}
                onCheckedChange={setNotifications}
              />
              <Progress value={72} showLabel />
            </div>
          </CardBody>
          <CardFooter>
            <Tooltip content="Save your changes" position="top">
              <Button onClick={() => toast({ message: 'Profile saved!', variant: 'success' })}>
                Save
              </Button>
            </Tooltip>
          </CardFooter>
        </Card>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <Alert variant="info" title="Pro tip">
            Wrap your app in ThemeProvider and ToastProvider for the full experience.
          </Alert>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <Chip variant="primary">React</Chip>
            <Chip variant="secondary">TypeScript</Chip>
            <Chip variant="outline">CSS Variables</Chip>
            <Chip variant="success" removable onRemove={() => {}}>
              Dark Mode
            </Chip>
          </div>
          <Button variant="outline" onClick={() => setModalOpen(true)}>
            Open Modal
          </Button>
        </div>
      </div>

      <Modal
        open={modalOpen}
        onOpenChange={setModalOpen}
        title="Deploy to production?"
        description="This will publish your latest changes."
        footer={
          <>
            <Button variant="ghost" onClick={() => setModalOpen(false)}>
              Cancel
            </Button>
            <Button
              onClick={() => {
                setModalOpen(false)
                toast({ title: 'Deployed!', message: 'Your app is live.', variant: 'success' })
              }}
            >
              Deploy
            </Button>
          </>
        }
      >
        <p style={{ margin: 0 }}>
          All components are tree-shakeable, typed, and ready for any React project.
        </p>
      </Modal>
    </div>
  )
}

const meta = {
  title: 'Showcase/Playground',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ToastProvider>
        <Story />
      </ToastProvider>
    ),
  ],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Dashboard: Story = {
  render: () => <DashboardDemo />,
}
