import type { Meta, StoryObj } from '@storybook/react-vite'
import { Tab, TabList, TabPanel, Tabs } from '../components/Tabs/Tabs'

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="overview">
      <TabList>
        <Tab value="overview">Overview</Tab>
        <Tab value="settings">Settings</Tab>
        <Tab value="billing">Billing</Tab>
      </TabList>
      <TabPanel value="overview">Overview content goes here.</TabPanel>
      <TabPanel value="settings">Settings content goes here.</TabPanel>
      <TabPanel value="billing">Billing content goes here.</TabPanel>
    </Tabs>
  ),
}
