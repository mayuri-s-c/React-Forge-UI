import {
  forwardRef,
  type ChangeEvent,
  type ChangeEventHandler,
  type SelectHTMLAttributes,
} from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'
import { useControllableState } from '../../lib/useControllableState'
import type { Size } from '../../lib/types'

export interface DropdownOption {
  value: string
  label: string
  disabled?: boolean
}

export interface DropdownProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'size' | 'value' | 'defaultValue' | 'onChange'> {
  /** Currently selected option value (controlled) */
  value?: string
  /** Initially selected option value (uncontrolled) */
  defaultValue?: string
  /** Called with the new selected value when selection changes */
  onValueChange?: (value: string) => void
  /** Native change event handler */
  onChange?: ChangeEventHandler<HTMLSelectElement>
  label?: string
  hint?: string
  error?: string
  size?: Size
  options: DropdownOption[]
  placeholder?: string
  className?: string
  selectClassName?: string
}

export const Dropdown = forwardRef<HTMLSelectElement, DropdownProps>(
  (
    {
      label,
      hint,
      error,
      size = 'md',
      options,
      placeholder,
      className,
      selectClassName,
      id,
      value,
      defaultValue,
      onValueChange,
      onChange,
      ...props
    },
    ref,
  ) => {
    const selectId = useComponentId(id)
    const [currentValue, setCurrentValue] = useControllableState({
      value,
      defaultValue,
      onChange: onValueChange,
    })

    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      setCurrentValue(event.target.value)
      onChange?.(event)
    }

    return (
      <div id={`${selectId}-field`} className={cn('cl-field', className)}>
        {label && (
          <label className="cl-field__label" htmlFor={selectId}>
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(
            'cl-select',
            `cl-select--${size}`,
            error && 'cl-select--error',
            selectClassName,
          )}
          aria-invalid={error ? true : undefined}
          aria-describedby={
            error ? `${selectId}-error` : hint ? `${selectId}-hint` : undefined
          }
          value={currentValue ?? ''}
          onChange={handleChange}
          {...props}
        >
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <span className="cl-field__error" id={`${selectId}-error`}>
            {error}
          </span>
        )}
        {!error && hint && (
          <span className="cl-field__hint" id={`${selectId}-hint`}>
            {hint}
          </span>
        )}
      </div>
    )
  },
)

Dropdown.displayName = 'Dropdown'
