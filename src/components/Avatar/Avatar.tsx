import type { HTMLAttributes } from 'react'
import { cn } from '../../lib/cn'
import { useComponentId } from '../../lib/useComponentId'
import type { Size } from '../../lib/types'

export interface AvatarProps extends HTMLAttributes<HTMLDivElement> {
  src?: string
  alt?: string
  name?: string
  size?: Size
  className?: string
}

function getInitials(name: string) {
  return name
    .split(' ')
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase()
}

export function Avatar({ src, alt, name, size = 'md', className, id, ...props }: AvatarProps) {
  const avatarId = useComponentId(id)
  const initials = name ? getInitials(name) : '?'

  return (
    <div
      id={avatarId}
      className={cn('cl-avatar', `cl-avatar--${size}`, className)}
      role="img"
      aria-label={alt ?? name ?? 'Avatar'}
      {...props}
    >
      {src ? (
        <img className="cl-avatar__image" src={src} alt={alt ?? name ?? ''} />
      ) : (
        <span className="cl-avatar__fallback">{initials}</span>
      )}
    </div>
  )
}
