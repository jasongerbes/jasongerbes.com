import { IconProps } from '@/assets/phosphor-icons'
import { clsx } from 'clsx'

export interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  label: string
  icon: React.ComponentType<IconProps>
  onClick: VoidFunction
}

export function IconButton({
  className,
  label,
  icon: Icon,
  onClick,
  ...props
}: IconButtonProps) {
  return (
    <button
      className={clsx(
        'group flex h-8 w-8 items-center justify-center rounded-full bg-white/70 shadow-md shadow-gray-800/5 ring-1 ring-gray-900/5 backdrop-blur-md transition dark:border dark:border-gray-700/50 dark:bg-gray-800/70 dark:ring-0 dark:ring-white/10 dark:hover:border-gray-700 dark:hover:ring-white/20',
        className,
      )}
      aria-label={label}
      onClick={onClick}
      {...props}
    >
      <Icon
        className="h-4 w-4 text-gray-500 transition group-hover:scale-110 group-hover:text-gray-700 dark:text-gray-500 dark:group-hover:text-gray-400"
        aria-hidden={true}
        weight="bold"
      />
    </button>
  )
}
