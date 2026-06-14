import { useId } from 'react'

/** Returns the provided id or a stable auto-generated one. */
export function useComponentId(providedId?: string) {
  const generatedId = useId()
  return providedId ?? generatedId
}
