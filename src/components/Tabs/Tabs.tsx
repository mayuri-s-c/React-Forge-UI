import {
  createContext,
  useContext,
  useState,
  type HTMLAttributes,
  type ReactNode,
} from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'

interface TabsContextValue {
  activeTab: string
  setActiveTab: (value: string) => void
  tabsId: string
}

const TabsContext = createContext<TabsContextValue | null>(null)

function useTabsContext() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('Tabs components must be used within a Tabs provider')
  }
  return context
}

export interface TabsProps {
  id?: string
  defaultValue: string
  value?: string
  onChange?: (value: string) => void
  className?: string
  children: ReactNode
}

export function Tabs({
  id,
  defaultValue,
  value: controlledValue,
  onChange,
  className,
  children,
}: TabsProps) {
  const tabsId = useComponentId(id)
  const [internalValue, setInternalValue] = useState(defaultValue)
  const activeTab = controlledValue ?? internalValue

  const setActiveTab = (value: string) => {
    if (controlledValue === undefined) {
      setInternalValue(value)
    }
    onChange?.(value)
  }

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab, tabsId }}>
      <div id={tabsId} className={cn('cl-tabs', className)}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

export interface TabListProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export function TabList({ className, children, id, ...props }: TabListProps) {
  const listId = useComponentId(id)

  return (
    <div id={listId} className={cn('cl-tabs__list', className)} role="tablist" {...props}>
      {children}
    </div>
  )
}

export interface TabProps extends HTMLAttributes<HTMLButtonElement> {
  value: string
  disabled?: boolean
  className?: string
  children: ReactNode
}

export function Tab({ value, disabled, className, id, children, ...props }: TabProps) {
  const { activeTab, setActiveTab, tabsId } = useTabsContext()
  const isActive = activeTab === value
  const tabId = id ?? `${tabsId}-tab-${value}`

  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={`${tabsId}-panel-${value}`}
      id={tabId}
      disabled={disabled}
      className={cn('cl-tabs__tab', isActive && 'cl-tabs__tab--active', className)}
      onClick={() => setActiveTab(value)}
      {...props}
    >
      {children}
    </button>
  )
}

export interface TabPanelProps extends HTMLAttributes<HTMLDivElement> {
  value: string
  className?: string
  children: ReactNode
}

export function TabPanel({ value, className, id, children, ...props }: TabPanelProps) {
  const { activeTab, tabsId } = useTabsContext()
  const isActive = activeTab === value
  const panelId = id ?? `${tabsId}-panel-${value}`

  return (
    <div
      role="tabpanel"
      id={panelId}
      aria-labelledby={`${tabsId}-tab-${value}`}
      className={cn(
        'cl-tabs__panel',
        !isActive && 'cl-tabs__panel--hidden',
        className,
      )}
      hidden={!isActive}
      {...props}
    >
      {children}
    </div>
  )
}
