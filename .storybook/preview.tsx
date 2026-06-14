import type { Preview } from '@storybook/react-vite'
import { ThemeProvider } from '../src/components/ThemeProvider/ThemeProvider'
import '../src/styles/index.css'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider defaultMode="light">
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview