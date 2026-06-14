import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'

export type AlertVariant = 'info' | 'success' | 'warning' | 'error'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  variant?: AlertVariant
  title?: string
  dismissible?: boolean
  onDismiss?: () => void
  className?: string
  children: ReactNode
}

const icons: Record<AlertVariant, string> = {
  info: 'ℹ️',
  success: '✅',
  warning: '⚠️',
  error: '❌',
}

export function Alert({
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
  className,
  id,
  children,
  ...props
}: AlertProps) {
  const alertId = useComponentId(id)

  return (
    <div
      id={alertId}
      className={cn('cl-alert', `cl-alert--${variant}`, className)}
      role="alert"
      {...props}
    >
      <span className="cl-alert__icon" aria-hidden="true">
        {icons[variant]}
      </span>
      <div className="cl-alert__content">
        {title && <p className="cl-alert__title">{title}</p>}
        <div className="cl-alert__message">{children}</div>
      </div>
      {dismissible && (
        <button
          type="button"
          className="cl-alert__close"
          aria-label="Dismiss alert"
          onClick={onDismiss}
        >
          ×
        </button>
      )}
    </div>
  )
}
