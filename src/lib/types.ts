import type { HTMLAttributes, ReactNode } from 'react'

export type Size = 'sm' | 'md' | 'lg'

export type Variant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'

export type InputType =
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'url'
  | 'search'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'month'
  | 'week'
  | 'color'

export interface BaseComponentProps {
  id?: string
  className?: string
  children?: ReactNode
}

export type PolymorphicProps<T extends HTMLElement = HTMLElement> =
  HTMLAttributes<T> & BaseComponentProps
