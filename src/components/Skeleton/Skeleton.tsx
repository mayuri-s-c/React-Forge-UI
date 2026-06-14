import type { CSSProperties, HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'

export type SkeletonVariant = 'text' | 'circular' | 'rectangular'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: SkeletonVariant
  width?: string | number
  height?: string | number
  className?: string
}

export function Skeleton({
  variant = 'text',
  width,
  height,
  className,
  id,
  style,
  ...props
}: SkeletonProps) {
  const skeletonId = useComponentId(id)

  const dimensions: CSSProperties = {
    width,
    height: height ?? (variant === 'text' ? '1rem' : undefined),
    ...style,
  }

  return (
    <div
      id={skeletonId}
      className={cn('cl-skeleton', `cl-skeleton--${variant}`, className)}
      style={dimensions}
      aria-hidden="true"
      {...props}
    />
  )
}
