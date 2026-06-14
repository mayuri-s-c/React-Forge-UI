import {
  forwardRef,
  type ChangeEvent,
  type ChangeEventHandler,
  type InputHTMLAttributes,
} from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'
import { useControllableState } from '../../lib/useControllableState'

export interface CheckboxProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'defaultChecked' | 'onChange'> {
  /** Whether the checkbox is checked (controlled) */
  checked?: boolean
  /** Initial checked state (uncontrolled) */
  defaultChecked?: boolean
  /** Called with the new checked state when toggled */
  onCheckedChange?: (checked: boolean) => void
  /** Native change event handler */
  onChange?: ChangeEventHandler<HTMLInputElement>
  label?: string
  className?: string
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      label,
      className,
      disabled,
      id,
      checked,
      defaultChecked,
      onCheckedChange,
      onChange,
      ...props
    },
    ref,
  ) => {
    const checkboxId = useComponentId(id)
    const [isChecked, setIsChecked] = useControllableState({
      value: checked,
      defaultValue: defaultChecked,
      onChange: onCheckedChange,
    })

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      setIsChecked(event.target.checked)
      onChange?.(event)
    }

    return (
      <label
        id={`${checkboxId}-label`}
        className={cn('cl-checkbox', disabled && 'cl-checkbox--disabled', className)}
      >
        <input
          ref={ref}
          type="checkbox"
          id={checkboxId}
          className="cl-checkbox__input"
          disabled={disabled}
          checked={isChecked ?? false}
          onChange={handleChange}
          {...props}
        />
        {label && <span>{label}</span>}
      </label>
    )
  },
)

Checkbox.displayName = 'Checkbox'
