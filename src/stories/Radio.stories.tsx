import { useState } from 'react'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Radio, RadioGroup } from '../components/Radio/Radio'

const meta = {
  title: 'Components/Radio',
  component: RadioGroup,
  tags: ['autodocs'],
} satisfies Meta<typeof RadioGroup>

export default meta
type Story = StoryObj<typeof meta>

export const Vertical: Story = {
  render: () => {
    const [value, setValue] = useState('monthly')
    return (
      <RadioGroup name="plan" label="Billing cycle" value={value} onValueChange={setValue}>
        <Radio value="monthly" label="Monthly" />
        <Radio value="yearly" label="Yearly" />
        <Radio value="lifetime" label="Lifetime" />
      </RadioGroup>
    )
  },
}

export const Horizontal: Story = {
  render: () => (
    <RadioGroup name="size" label="Size" direction="horizontal" defaultValue="md">
      <Radio value="sm" label="Small" />
      <Radio value="md" label="Medium" />
      <Radio value="lg" label="Large" />
    </RadioGroup>
  ),
}
