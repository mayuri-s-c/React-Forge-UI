import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'

export type ToastVariant = 'success' | 'error' | 'warning' | 'info'

export type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center'

export interface ToastItem {
  id: string
  title?: string
  message: string
  variant?: ToastVariant
  duration?: number
}

export interface ToastOptions {
  title?: string
  message: string
  variant?: ToastVariant
  duration?: number
}

interface ToastContextValue {
  toast: (options: ToastOptions) => void
  dismiss: (id: string) => void
}

const ToastContext = createContext<ToastContextValue | null>(null)

export function useToast() {
  const context = useContext(ToastContext)
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider')
  }
  return context
}

export interface ToastProviderProps {
  id?: string
  position?: ToastPosition
  defaultDuration?: number
  className?: string
  children: ReactNode
}

let toastId = 0

function nextToastId() {
  toastId += 1
  return String(toastId)
}

export function ToastProvider({
  id,
  position = 'top-right',
  defaultDuration = 4000,
  className,
  children,
}: ToastProviderProps) {
  const containerId = useComponentId(id)
  const [toasts, setToasts] = useState<ToastItem[]>([])

  const dismiss = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id))
  }, [])

  const toast = useCallback(
    (options: ToastOptions) => {
      const id = nextToastId()
      const duration = options.duration ?? defaultDuration

      setToasts((prev) => [
        ...prev,
        {
          id,
          title: options.title,
          message: options.message,
          variant: options.variant ?? 'info',
          duration,
        },
      ])

      if (duration > 0) {
        window.setTimeout(() => dismiss(id), duration)
      }
    },
    [defaultDuration, dismiss],
  )

  const value = useMemo(() => ({ toast, dismiss }), [toast, dismiss])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div
        id={containerId}
        className={cn('cl-toast-container', `cl-toast-container--${position}`, className)}
        aria-live="polite"
      >
        {toasts.map((item) => (
          <div
            key={item.id}
            id={`${containerId}-toast-${item.id}`}
            className={cn('cl-toast', item.variant && `cl-toast--${item.variant}`)}
            role="alert"
          >
            <div className="cl-toast__content">
              {item.title && <p className="cl-toast__title">{item.title}</p>}
              <p className="cl-toast__message">{item.message}</p>
            </div>
            <button
              type="button"
              className="cl-toast__close"
              aria-label="Dismiss"
              onClick={() => dismiss(item.id)}
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  )
}
