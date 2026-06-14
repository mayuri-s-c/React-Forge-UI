import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'
import { useTheme } from '../ThemeProvider/ThemeProvider'

export interface ThemeToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick'> {
  className?: string
}

export function ThemeToggle({ className, id, ...props }: ThemeToggleProps) {
  const toggleId = useComponentId(id)
  const { mode, toggleMode } = useTheme()

  return (
    <button
      id={toggleId}
      type="button"
      className={cn('cl-theme-toggle', className)}
      onClick={toggleMode}
      aria-label={`Switch to ${mode === 'dark' ? 'light' : 'dark'} mode`}
      {...props}
    >
      <span className="cl-theme-toggle__icon" aria-hidden="true">
        {mode === 'dark' ? '☀️' : '🌙'}
      </span>
      <span className="cl-theme-toggle__label">
        {mode === 'dark' ? 'Light mode' : 'Dark mode'}
      </span>
    </button>
  )
}
