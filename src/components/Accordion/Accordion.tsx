import { useState, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'

export interface AccordionProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export function Accordion({ className, children, id, ...props }: AccordionProps) {
  const accordionId = useComponentId(id)

  return (
    <div id={accordionId} className={cn('cl-accordion', className)} {...props}>
      {children}
    </div>
  )
}

export interface AccordionItemProps {
  id?: string
  title: string
  defaultOpen?: boolean
  disabled?: boolean
  className?: string
  contentClassName?: string
  children: ReactNode
}

export function AccordionItem({
  id,
  title,
  defaultOpen = false,
  disabled = false,
  className,
  contentClassName,
  children,
}: AccordionItemProps) {
  const itemId = useComponentId(id)
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div id={itemId} className={cn('cl-accordion__item', className)}>
      <button
        type="button"
        id={`${itemId}-trigger`}
        className="cl-accordion__trigger"
        aria-expanded={isOpen}
        aria-controls={`${itemId}-content`}
        disabled={disabled}
        onClick={() => setIsOpen((open) => !open)}
      >
        <span>{title}</span>
        <svg
          className="cl-accordion__icon"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          aria-hidden="true"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
      <div
        id={`${itemId}-content`}
        role="region"
        aria-labelledby={`${itemId}-trigger`}
        className={cn(
          'cl-accordion__content',
          isOpen ? 'cl-accordion__content--expanded' : 'cl-accordion__content--collapsed',
        )}
      >
        <div className={cn('cl-accordion__content-inner', contentClassName)}>
          {children}
        </div>
      </div>
    </div>
  )
}
