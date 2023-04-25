import { IconProps } from '@/assets/phosphor-icons'
import { cva } from 'class-variance-authority'

export type BadgeColor =
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'

export interface BadgeProps {
  className?: string
  color: BadgeColor
  'aria-label': string
  icon?: React.ComponentType<IconProps>
  children: React.ReactNode
}

const badge = cva(
  'inline-flex items-center rounded-md gap-1 px-2.5 py-1.5 text-sm font-medium ring-1 ring-inset',
  {
    variants: {
      color: {
        gray: 'bg-gray-50 text-gray-600 ring-gray-500/10 dark:ring-gray-500/20 dark:bg-gray-500/10 dark:text-gray-400',
        red: 'bg-red-50 text-red-700 ring-red-600/10 dark:ring-red-400/20 dark:bg-red-400/10 dark:text-red-400',
        yellow:
          'bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:ring-yellow-400/20 dark:bg-yellow-400/10 dark:text-yellow-400',
        green:
          'bg-green-50 text-green-700 ring-green-600/20 dark:ring-green-400/20 dark:bg-green-400/10 dark:text-green-400',
        blue: 'bg-blue-50 text-blue-700 ring-blue-700/10 dark:ring-blue-400/20 dark:bg-blue-400/10 dark:text-blue-400',
        indigo:
          'bg-indigo-50 text-indigo-700 ring-indigo-700/10 dark:ring-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-400',
        purple:
          'bg-purple-50 text-purple-700 ring-purple-700/10 dark:ring-purple-400/20 dark:bg-purple-400/10 dark:text-purple-400',
        pink: 'bg-pink-50 text-pink-700 ring-pink-700/10 dark:ring-pink-400/20 dark:bg-pink-400/10 dark:text-pink-400',
      },
    },
  }
)

export function Badge(props: BadgeProps) {
  const {
    className,
    color,
    'aria-label': ariaLabel,
    icon: Icon,
    children,
  } = props

  return (
    <span
      className={badge({ color, className })}
      title={ariaLabel}
      aria-label={ariaLabel}
    >
      {Icon && <Icon weight="bold" aria-hidden="true" />}
      <span>{children}</span>
    </span>
  )
}

export function BadgeExample() {
  return (
    <div className="my-16 flex gap-2">
      <Badge color="gray" aria-label="test">
        Badge
      </Badge>
      <Badge color="red" aria-label="test">
        Badge
      </Badge>
      <Badge color="yellow" aria-label="test">
        Badge
      </Badge>
      <Badge color="green" aria-label="test">
        Badge
      </Badge>
      <Badge color="blue" aria-label="test">
        Badge
      </Badge>
      <Badge color="indigo" aria-label="test">
        Badge
      </Badge>
      <Badge color="purple" aria-label="test">
        Badge
      </Badge>
      <Badge color="pink" aria-label="test">
        Badge
      </Badge>
    </div>
  )
}
