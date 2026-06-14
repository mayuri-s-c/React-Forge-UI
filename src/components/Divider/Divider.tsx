import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'

export interface DividerProps extends HTMLAttributes<HTMLDivElement> {
  label?: string
  orientation?: 'horizontal' | 'vertical'
  className?: string
}

export function Divider({
  label,
  orientation = 'horizontal',
  className,
  id,
  ...props
}: DividerProps) {
  const dividerId = useComponentId(id)

  if (orientation === 'vertical') {
    return (
      <div
        id={dividerId}
        className={cn('cl-divider', 'cl-divider--vertical', className)}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    )
  }

  return (
    <div
      id={dividerId}
      className={cn('cl-divider', 'cl-divider--horizontal', className)}
      role="separator"
      aria-orientation="horizontal"
      {...props}
    >
      {label ? (
        <>
          <span className="cl-divider__line" />
          <span className="cl-divider__label">{label}</span>
          <span className="cl-divider__line" />
        </>
      ) : (
        <span className="cl-divider__line" />
      )}
    </div>
  )
}
