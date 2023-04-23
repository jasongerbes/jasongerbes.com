import { IconProps } from '@/assets/phosphor-icons'
import clsx from 'clsx'

export interface TagProps {
  className?: string
  icon?: React.ComponentType<IconProps>
  children: React.ReactNode
}

export function Tag({ className, icon: Icon, children }: TagProps) {
  return (
    <div
      className={clsx(
        'inline-flex items-center gap-1 rounded-md bg-gray-200/30 px-2 py-1.5 text-sm font-medium text-gray-600 dark:bg-gray-700/30 dark:text-gray-400',
        className
      )}
    >
      {Icon && <Icon weight="bold" aria-hidden="true" />}
      <span>{children}</span>
    </div>
  )
}
