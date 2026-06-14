import {
  createContext,
  forwardRef,
  useContext,
  type ChangeEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'
import { useControllableState } from '../../lib/useControllableState'

interface RadioGroupContextValue {
  name: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
}

const RadioGroupContext = createContext<RadioGroupContextValue | null>(null)

export interface RadioGroupProps {
  id?: string
  name: string
  /** Currently selected radio value (controlled) */
  value?: string
  /** Initially selected radio value (uncontrolled) */
  defaultValue?: string
  /** Called with the new selected value when a radio is chosen */
  onValueChange?: (value: string) => void
  /** @deprecated Use onValueChange instead */
  onChange?: (value: string) => void
  label?: string
  direction?: 'vertical' | 'horizontal'
  disabled?: boolean
  className?: string
  children: ReactNode
}

export function RadioGroup({
  id,
  name,
  value,
  defaultValue,
  onValueChange,
  onChange,
  label,
  direction = 'vertical',
  disabled,
  className,
  children,
}: RadioGroupProps) {
  const groupId = useComponentId(id)
  const [currentValue, setCurrentValue] = useControllableState({
    value,
    defaultValue,
    onChange: onValueChange ?? onChange,
  })

  return (
    <RadioGroupContext.Provider
      value={{ name, value: currentValue, onChange: setCurrentValue, disabled }}
    >
      <div
        id={groupId}
        className={cn(
          'cl-radio-group',
          direction === 'horizontal' && 'cl-radio-group--horizontal',
          className,
        )}
        role="radiogroup"
        aria-label={label}
      >
        {label && (
          <div className="cl-radio-group__label" id={`${groupId}-label`}>
            {label}
          </div>
        )}
        {children}
      </div>
    </RadioGroupContext.Provider>
  )
}

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'checked'> {
  value: string
  label?: string
  className?: string
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ value, label, className, disabled, id, onChange, ...props }, ref) => {
    const context = useContext(RadioGroupContext)
    const radioId = useComponentId(id ?? `${context?.name ?? 'radio'}-${value}`)

    const isChecked =
      context?.value !== undefined ? context.value === value : undefined

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event)
      context?.onChange?.(value)
    }

    return (
      <label
        id={`${radioId}-label`}
        className={cn(
          'cl-radio',
          (disabled || context?.disabled) && 'cl-radio--disabled',
          className,
        )}
      >
        <input
          ref={ref}
          type="radio"
          id={radioId}
          name={context?.name}
          value={value}
          checked={isChecked ?? false}
          className="cl-radio__input"
          disabled={disabled || context?.disabled}
          onChange={handleChange}
          {...props}
        />
        {label && <span>{label}</span>}
      </label>
    )
  },
)

Radio.displayName = 'Radio'
