import { useState, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right'

export interface TooltipProps extends Omit<HTMLAttributes<HTMLDivElement>, 'content'> {
  content: ReactNode
  position?: TooltipPosition
  className?: string
  triggerClassName?: string
  children: ReactNode
}

export function Tooltip({
  content,
  position = 'top',
  className,
  triggerClassName,
  id,
  children,
  ...props
}: TooltipProps) {
  const tooltipId = useComponentId(id)
  const [visible, setVisible] = useState(false)

  return (
    <div
      id={tooltipId}
      className={cn('cl-tooltip', className)}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      {...props}
    >
      <span className={cn('cl-tooltip__trigger', triggerClassName)} tabIndex={0}>
        {children}
      </span>
      {visible && (
        <span
          id={`${tooltipId}-content`}
          role="tooltip"
          className={cn('cl-tooltip__content', `cl-tooltip__content--${position}`)}
        >
          {content}
        </span>
      )}
    </div>
  )
}
