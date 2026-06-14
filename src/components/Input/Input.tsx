import {
  forwardRef,
  type ChangeEvent,
  type ChangeEventHandler,
  type InputHTMLAttributes,
} from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'
import { useControllableState } from '../../lib/useControllableState'
import type { InputType, Size } from '../../lib/types'

export type { InputType }

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'size' | 'value' | 'defaultValue' | 'onChange' | 'type'
  > {
  /** HTML input type */
  type?: InputType
  /** Current input value (controlled) */
  value?: string
  /** Initial input value (uncontrolled) */
  defaultValue?: string
  /** Called with the new value when input changes */
  onValueChange?: (value: string) => void
  /** Native change event handler */
  onChange?: ChangeEventHandler<HTMLInputElement>
  label?: string
  hint?: string
  error?: string
  size?: Size
  className?: string
  inputClassName?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      size = 'md',
      type = 'text',
      className,
      inputClassName,
      id,
      value,
      defaultValue,
      onValueChange,
      onChange,
      ...props
    },
    ref,
  ) => {
    const inputId = useComponentId(id)
    const [currentValue, setCurrentValue] = useControllableState({
      value,
      defaultValue,
      onChange: onValueChange,
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setCurrentValue(event.target.value)
      onChange?.(event)
    }

    return (
      <div id={`${inputId}-field`} className={cn('cl-field', className)}>
        {label && (
          <label className="cl-field__label" htmlFor={inputId}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type={type}
          className={cn(
            'cl-input',
            `cl-input--${size}`,
            error && 'cl-input--error',
            inputClassName,
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined
          }
          value={currentValue ?? ''}
          onChange={handleChange}
          {...props}
        />
        {error && (
          <span className="cl-field__error" id={`${inputId}-error`}>
            {error}
          </span>
        )}
        {!error && hint && (
          <span className="cl-field__hint" id={`${inputId}-hint`}>
            {hint}
          </span>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'
