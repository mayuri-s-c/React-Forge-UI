import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'
import type { Size } from '../../lib/types'

export type ChipVariant = 'primary' | 'secondary' | 'outline' | 'success' | 'warning' | 'danger'

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: ChipVariant
  size?: Size
  removable?: boolean
  onRemove?: () => void
  className?: string
}

export function Chip({
  variant = 'primary',
  size = 'md',
  removable = false,
  onRemove,
  className,
  id,
  children,
  ...props
}: ChipProps) {
  const chipId = useComponentId(id)

  return (
    <span
      id={chipId}
      className={cn('cl-chip', `cl-chip--${variant}`, `cl-chip--${size}`, className)}
      {...props}
    >
      <span className="cl-chip__label">{children}</span>
      {removable && (
        <button
          type="button"
          className="cl-chip__remove"
          aria-label="Remove"
          onClick={onRemove}
        >
          ×
        </button>
      )}
    </span>
  )
}
