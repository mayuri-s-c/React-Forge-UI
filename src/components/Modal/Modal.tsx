import { useEffect, useRef, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'
import { useControllableState } from '../../lib/useControllableState'

export interface ModalProps {
  id?: string
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  title?: string
  description?: string
  footer?: ReactNode
  closeOnOverlayClick?: boolean
  className?: string
  overlayClassName?: string
  children: ReactNode
}

export function Modal({
  id,
  open,
  defaultOpen = false,
  onOpenChange,
  title,
  description,
  footer,
  closeOnOverlayClick = true,
  className,
  overlayClassName,
  children,
}: ModalProps) {
  const modalId = useComponentId(id)
  const [isOpen, setIsOpen] = useControllableState({
    value: open,
    defaultValue: defaultOpen,
    onChange: onOpenChange,
  })
  const dialogRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, setIsOpen])

  if (!isOpen) return null

  return createPortal(
    <div
      id={`${modalId}-overlay`}
      className={cn('cl-modal-overlay', overlayClassName)}
      onClick={closeOnOverlayClick ? () => setIsOpen(false) : undefined}
      role="presentation"
    >
      <div
        ref={dialogRef}
        id={modalId}
        className={cn('cl-modal', className)}
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? `${modalId}-title` : undefined}
        aria-describedby={description ? `${modalId}-description` : undefined}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="cl-modal__header">
          <div>
            {title && (
              <h2 id={`${modalId}-title`} className="cl-modal__title">
                {title}
              </h2>
            )}
            {description && (
              <p id={`${modalId}-description`} className="cl-modal__description">
                {description}
              </p>
            )}
          </div>
          <button
            type="button"
            className="cl-modal__close"
            aria-label="Close dialog"
            onClick={() => setIsOpen(false)}
          >
            ×
          </button>
        </div>
        <div className="cl-modal__body">{children}</div>
        {footer && <div className="cl-modal__footer">{footer}</div>}
      </div>
    </div>,
    document.body,
  )
}
