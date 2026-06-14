# React Forge UI

A modern, reusable React React Forge UI with built-in dark mode, full TypeScript support, and CSS-variable theming. Use it across any React project.

![Storybook](https://img.shields.io/badge/Storybook-FF4785?logo=storybook&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-6-3178C6?logo=typescript&logoColor=white)

## Features

- **22+ components** — forms, feedback, layout, overlays, and data display
- **Dark mode** — built-in light/dark themes with `ThemeProvider` and `ThemeToggle`
- **Controlled state** — `value` + `onValueChange` on all form controls
- **Customizable** — override any token via CSS variables or `className`
- **Accessible** — ARIA attributes, keyboard navigation, focus traps in modals
- **Zero runtime deps** — only `clsx` as a dependency (React as peer)

## Components

| Category | Components |
|----------|-----------|
| **Actions** | Button |
| **Forms** | Input, Textarea, Dropdown, Checkbox, Switch, Radio |
| **Feedback** | Alert, Toast, Loader, Progress, Skeleton |
| **Layout** | Card, Divider, Accordion, Tabs |
| **Data** | Table, Badge, Chip, Avatar |
| **Overlay** | Modal, Tooltip |
| **Theming** | ThemeProvider, ThemeToggle |

## Quick start

```bash
# Install dependencies
bun install

# Browse components in Storybook
bun run dev

# Build the library
bun run build
```

## Usage

```tsx
import {
  Button,
  Input,
  ThemeProvider,
  ToastProvider,
  useToast,
} from 'component-library'
import 'component-library/styles'

function App() {
  return (
    <ThemeProvider defaultMode="light">
      <ToastProvider>
        <Input label="Email" type="email" placeholder="you@example.com" />
        <Button>Submit</Button>
      </ToastProvider>
    </ThemeProvider>
  )
}
```

### Controlled form example

```tsx
const [email, setEmail] = useState('')
const [notifications, setNotifications] = useState(false)

<Input value={email} onValueChange={setEmail} label="Email" type="email" />
<Switch checked={notifications} onCheckedChange={setNotifications} label="Notifications" />
```

### Dark mode

```tsx
import { ThemeProvider, ThemeToggle, useTheme } from 'component-library'

<ThemeProvider defaultMode="dark">
  <ThemeToggle />
  {/* your app */}
</ThemeProvider>
```

### Custom theming

```tsx
<ThemeProvider
  theme={{
    '--cl-color-primary': '#6366f1',
    '--cl-radius-md': '0.75rem',
  }}
>
  {/* components inherit your brand */}
</ThemeProvider>
```

## Local development

Link the library into another project:

```bash
bun run build
bun link          # in this repo
bun link component-library  # in your app
```

## Scripts

| Command | Description |
|---------|-------------|
| `bun run dev` | Start Storybook on port 6006 |
| `bun run build` | Build library to `dist/` |
| `bun run build-storybook` | Build static Storybook site |
| `bun run lint` | Run ESLint |

## License

MIT