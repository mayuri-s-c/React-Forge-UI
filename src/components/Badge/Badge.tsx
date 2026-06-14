import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'
import type { Size } from '../../lib/types'

export type BadgeVariant =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'warning'
  | 'danger'
  | 'outline'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant
  size?: Size
  className?: string
}

export function Badge({
  variant = 'primary',
  size = 'md',
  className,
  id,
  children,
  ...props
}: BadgeProps) {
  const badgeId = useComponentId(id)

  return (
    <span
      id={badgeId}
      className={cn('cl-badge', `cl-badge--${variant}`, `cl-badge--${size}`, className)}
      {...props}
    >
      {children}
    </span>
  )
}
