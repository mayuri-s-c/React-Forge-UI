import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export function Card({ className, children, id, ...props }: CardProps) {
  const cardId = useComponentId(id)

  return (
    <div id={cardId} className={cn('cl-card', className)} {...props}>
      {children}
    </div>
  )
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  title?: string
  description?: string
  children?: ReactNode
}

export function CardHeader({
  className,
  title,
  description,
  children,
  id,
  ...props
}: CardHeaderProps) {
  const headerId = useComponentId(id)

  return (
    <div id={headerId} className={cn('cl-card__header', className)} {...props}>
      {title && <h3 className="cl-card__title">{title}</h3>}
      {description && <p className="cl-card__description">{description}</p>}
      {children}
    </div>
  )
}

export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export function CardBody({ className, children, id, ...props }: CardBodyProps) {
  const bodyId = useComponentId(id)

  return (
    <div id={bodyId} className={cn('cl-card__body', className)} {...props}>
      {children}
    </div>
  )
}

export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export function CardFooter({ className, children, id, ...props }: CardFooterProps) {
  const footerId = useComponentId(id)

  return (
    <div id={footerId} className={cn('cl-card__footer', className)} {...props}>
      {children}
    </div>
  )
}
