import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type CSSProperties,
  type ReactNode,
} from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'
import { useControllableState } from '../../lib/useControllableState'
import type { ThemeMode, ThemeTokens } from '../../lib/themes'

interface ThemeContextValue {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
  toggleMode: () => void
}

const ThemeContext = createContext<ThemeContextValue | null>(null)

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

export interface ThemeProviderProps {
  /** Light or dark color scheme */
  mode?: ThemeMode
  /** Initial mode when uncontrolled */
  defaultMode?: ThemeMode
  /** Called when mode changes */
  onModeChange?: (mode: ThemeMode) => void
  /** CSS custom properties to override design tokens */
  theme?: ThemeTokens
  id?: string
  className?: string
  style?: CSSProperties
  children: ReactNode
}

export function ThemeProvider({
  mode,
  defaultMode = 'light',
  onModeChange,
  theme,
  id,
  className,
  style,
  children,
}: ThemeProviderProps) {
  const providerId = useComponentId(id)
  const [currentMode, setCurrentMode] = useControllableState({
    value: mode,
    defaultValue: defaultMode,
    onChange: onModeChange,
  })

  const toggleMode = useCallback(() => {
    setCurrentMode(currentMode === 'dark' ? 'light' : 'dark')
  }, [currentMode, setCurrentMode])

  const activeMode = currentMode ?? 'light'

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('cl-lib--light', 'cl-lib--dark')
    root.classList.add(`cl-lib--${activeMode}`)
    root.dataset.theme = activeMode

    return () => {
      root.classList.remove('cl-lib--light', 'cl-lib--dark')
      delete root.dataset.theme
    }
  }, [activeMode])

  const contextValue = useMemo(
    () => ({
      mode: activeMode,
      setMode: setCurrentMode,
      toggleMode,
    }),
    [activeMode, setCurrentMode, toggleMode],
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      <div
        id={providerId}
        className={cn('cl-lib', `cl-lib--${activeMode}`, className)}
        data-theme={activeMode}
        style={{ ...style, ...theme }}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
