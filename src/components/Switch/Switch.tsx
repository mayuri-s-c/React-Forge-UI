import {
  forwardRef,
  type ChangeEvent,
  type ChangeEventHandler,
  type InputHTMLAttributes,
} from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'
import { useControllableState } from '../../lib/useControllableState'
import type { Size } from '../../lib/types'

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked' | 'defaultChecked' | 'onChange' | 'size'> {
  checked?: boolean
  defaultChecked?: boolean
  onCheckedChange?: (checked: boolean) => void
  onChange?: ChangeEventHandler<HTMLInputElement>
  label?: string
  size?: Size
  className?: string
}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      label,
      size = 'md',
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
    const switchId = useComponentId(id)
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
        id={`${switchId}-label`}
        className={cn(
          'cl-switch',
          `cl-switch--${size}`,
          disabled && 'cl-switch--disabled',
          className,
        )}
      >
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          id={switchId}
          className="cl-switch__input"
          disabled={disabled}
          checked={isChecked ?? false}
          onChange={handleChange}
          {...props}
        />
        <span className="cl-switch__track" aria-hidden="true">
          <span className="cl-switch__thumb" />
        </span>
        {label && <span className="cl-switch__text">{label}</span>}
      </label>
    )
  },
)

Switch.displayName = 'Switch'
