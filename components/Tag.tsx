import { IconProps } from '@/assets/phosphor-icons'
import clsx from 'clsx'

export interface TagProps {
  className?: string
  accessibleLabel: string
  icon?: React.ComponentType<IconProps>
  children: React.ReactNode
}

export function Tag({
  className,
  accessibleLabel,
  icon: Icon,
  children,
}: TagProps) {
  return (
    <div
      className={clsx(
        'inline-flex items-center gap-1 rounded-md border border-gray-100 bg-gray-50/30 px-2 py-1.5 text-sm font-medium text-gray-600 dark:border-gray-800 dark:bg-gray-800/20 dark:text-gray-400',
        className
      )}
      title={accessibleLabel}
      aria-label={accessibleLabel}
    >
      {Icon && <Icon weight="bold" aria-hidden="true" />}
      <span>{children}</span>
    </div>
  )
}
