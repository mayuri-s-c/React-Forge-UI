import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '../components/Button/Button'
import { Card, CardBody, CardFooter, CardHeader } from '../components/Card/Card'

const meta = {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: 400 }}>
      <CardHeader title="Project Alpha" description="A sample card component" />
      <CardBody>
        <p style={{ margin: 0 }}>
          Cards group related content and actions. Use className to customize appearance.
        </p>
      </CardBody>
      <CardFooter>
        <Button size="sm">View details</Button>
      </CardFooter>
    </Card>
  ),
}
