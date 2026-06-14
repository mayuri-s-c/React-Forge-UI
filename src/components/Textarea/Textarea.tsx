import {
  forwardRef,
  type ChangeEvent,
  type ChangeEventHandler,
  type TextareaHTMLAttributes,
} from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'
import { useControllableState } from '../../lib/useControllableState'
import type { Size } from '../../lib/types'

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value' | 'defaultValue' | 'onChange'> {
  /** Current textarea value (controlled) */
  value?: string
  /** Initial textarea value (uncontrolled) */
  defaultValue?: string
  /** Called with the new value when textarea changes */
  onValueChange?: (value: string) => void
  /** Native change event handler */
  onChange?: ChangeEventHandler<HTMLTextAreaElement>
  label?: string
  hint?: string
  error?: string
  size?: Size
  className?: string
  textareaClassName?: string
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      label,
      hint,
      error,
      size = 'md',
      className,
      textareaClassName,
      id,
      value,
      defaultValue,
      onValueChange,
      onChange,
      ...props
    },
    ref,
  ) => {
    const textareaId = useComponentId(id)
    const [currentValue, setCurrentValue] = useControllableState({
      value,
      defaultValue,
      onChange: onValueChange,
    })

    const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
      setCurrentValue(event.target.value)
      onChange?.(event)
    }

    return (
      <div id={`${textareaId}-field`} className={cn('cl-field', className)}>
        {label && (
          <label className="cl-field__label" htmlFor={textareaId}>
            {label}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          className={cn(
            'cl-textarea',
            size !== 'md' && `cl-textarea--${size}`,
            error && 'cl-textarea--error',
            textareaClassName,
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            error ? `${textareaId}-error` : hint ? `${textareaId}-hint` : undefined
          }
          value={currentValue ?? ''}
          onChange={handleChange}
          {...props}
        />
        {error && (
          <span className="cl-field__error" id={`${textareaId}-error`}>
            {error}
          </span>
        )}
        {!error && hint && (
          <span className="cl-field__hint" id={`${textareaId}-hint`}>
            {hint}
          </span>
        )}
      </div>
    )
  },
)

Textarea.displayName = 'Textarea'
