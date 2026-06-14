import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'
import type { Size, Variant } from '../../lib/types'

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  size?: Size
  variant?: Variant
  showLabel?: boolean
  className?: string
}

export function Progress({
  value,
  max = 100,
  size = 'md',
  variant = 'primary',
  showLabel = false,
  className,
  id,
  ...props
}: ProgressProps) {
  const progressId = useComponentId(id)
  const percent = Math.min(100, Math.max(0, (value / max) * 100))

  return (
    <div id={progressId} className={cn('cl-progress', `cl-progress--${size}`, className)} {...props}>
      <div
        className="cl-progress__track"
        role="progressbar"
        aria-valuenow={value}
        aria-valuemin={0}
        aria-valuemax={max}
        aria-labelledby={showLabel ? `${progressId}-label` : undefined}
      >
        <div
          className={cn('cl-progress__bar', `cl-progress__bar--${variant}`)}
          style={{ width: `${percent}%` }}
        />
      </div>
      {showLabel && (
        <span id={`${progressId}-label`} className="cl-progress__label">
          {Math.round(percent)}%
        </span>
      )}
    </div>
  )
}
