import type { HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'

export interface TableProps extends Omit<HTMLAttributes<HTMLTableElement>, 'id'> {
  id?: string
  tableId?: string
  striped?: boolean
  className?: string
  wrapperClassName?: string
  children: ReactNode
}

export function Table({
  id,
  tableId,
  striped = false,
  className,
  wrapperClassName,
  children,
  ...props
}: TableProps) {
  const wrapperId = useComponentId(id)

  return (
    <div id={wrapperId} className={cn('cl-table-wrapper', wrapperClassName)}>
      <table
        id={tableId}
        className={cn('cl-table', striped && 'cl-table--striped', className)}
        {...props}
      >
        {children}
      </table>
    </div>
  )
}

export interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string
  children: ReactNode
}

export function TableHead({ className, children, id, ...props }: TableHeadProps) {
  const headId = useComponentId(id)

  return (
    <thead id={headId} className={className} {...props}>
      {children}
    </thead>
  )
}

export interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  className?: string
  children: ReactNode
}

export function TableBody({ className, children, id, ...props }: TableBodyProps) {
  const bodyId = useComponentId(id)

  return (
    <tbody id={bodyId} className={className} {...props}>
      {children}
    </tbody>
  )
}

export interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  className?: string
  children: ReactNode
}

export function TableRow({ className, children, id, ...props }: TableRowProps) {
  const rowId = useComponentId(id)

  return (
    <tr id={rowId} className={className} {...props}>
      {children}
    </tr>
  )
}

export interface TableHeaderCellProps extends ThHTMLAttributes<HTMLTableCellElement> {
  className?: string
  children?: ReactNode
}

export function TableHeaderCell({
  className,
  children,
  id,
  ...props
}: TableHeaderCellProps) {
  const cellId = useComponentId(id)

  return (
    <th id={cellId} className={className} {...props}>
      {children}
    </th>
  )
}

export interface TableCellProps extends TdHTMLAttributes<HTMLTableCellElement> {
  className?: string
  children?: ReactNode
}

export function TableCell({ className, children, id, ...props }: TableCellProps) {
  const cellId = useComponentId(id)

  return (
    <td id={cellId} className={className} {...props}>
      {children}
    </td>
  )
}
