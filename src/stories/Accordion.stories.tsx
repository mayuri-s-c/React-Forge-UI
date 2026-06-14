import type { Meta, StoryObj } from '@storybook/react-vite'
import { Accordion, AccordionItem } from '../components/Accordion/Accordion'

const meta = {
  title: 'Components/Accordion',
  component: Accordion,
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Accordion style={{ maxWidth: 480 }}>
      <AccordionItem title="What is this library?" defaultOpen>
        A reusable React component library you can install in any project and style with CSS
        variables or className props.
      </AccordionItem>
      <AccordionItem title="How do I customize styling?">
        Override CSS variables like --cl-color-primary, or pass className to any component.
      </AccordionItem>
      <AccordionItem title="Is it accessible?" disabled>
        This item is disabled.
      </AccordionItem>
    </Accordion>
  ),
}
