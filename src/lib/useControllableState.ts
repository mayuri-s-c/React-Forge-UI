import { useCallback, useState } from 'react'

export interface UseControllableStateOptions<T> {
  value?: T
  defaultValue?: T
  onChange?: (value: T) => void
}

export function useControllableState<T>({
  value: valueProp,
  defaultValue,
  onChange,
}: UseControllableStateOptions<T>) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue)
  const isControlled = valueProp !== undefined
  const value = isControlled ? valueProp : uncontrolledValue

  const setValue = useCallback(
    (next: T) => {
      if (!isControlled) {
        setUncontrolledValue(next)
      }
      onChange?.(next)
    },
    [isControlled, onChange],
  )

  return [value, setValue, isControlled] as const
}
