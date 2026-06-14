import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'
import type { Size, Variant } from '../../lib/types'
import { Loader } from '../Loader/Loader'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  isLoading?: boolean
  fullWidth?: boolean
  className?: string
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      className,
      disabled,
      id,
      children,
      ...props
    },
    ref,
  ) => {
    const buttonId = useComponentId(id)

    return (
      <button
        ref={ref}
        id={buttonId}
        type="button"
        className={cn(
          'cl-btn',
          `cl-btn--${variant}`,
          `cl-btn--${size}`,
          fullWidth && 'cl-btn--full-width',
          className,
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && <Loader size="sm" aria-label="Loading" />}
        {children}
      </button>
    )
  },
)

Button.displayName = 'Button'
