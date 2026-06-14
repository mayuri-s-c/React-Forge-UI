import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'
import type { Size } from '../../lib/types'

export interface LoaderProps extends HTMLAttributes<HTMLSpanElement> {
  size?: Size
  overlay?: boolean
  className?: string
}

export function Loader({
  size = 'md',
  overlay = false,
  className,
  id,
  ...props
}: LoaderProps) {
  const loaderId = useComponentId(id)

  const spinner = (
    <span
      id={overlay ? `${loaderId}-spinner` : loaderId}
      className={cn('cl-loader', `cl-loader--${size}`, className)}
      role="status"
      aria-live="polite"
      {...props}
    />
  )

  if (overlay) {
    return <div id={loaderId} className="cl-loader-overlay">{spinner}</div>
  }

  return spinner
}
