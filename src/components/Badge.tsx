import { IconProps } from '@/assets/phosphor-icons'
import { cva } from 'class-variance-authority'

export type BadgeColor =
  | 'gray'
  | 'red'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'primary'

export type BadgeSize = 'small' | 'medium' | 'large'

export interface BadgeProps {
  className?: string
  color?: BadgeColor
  size?: BadgeSize
  'aria-label': string
  icon?: React.ComponentType<IconProps>
  children: React.ReactNode
}

const badge = cva(
  'inline-flex items-center rounded-md font-medium ring-1 ring-inset select-none',
  {
    variants: {
      color: {
        gray: 'bg-gray-50 text-gray-600 ring-gray-500/10 dark:ring-gray-500/20 dark:bg-gray-500/10 dark:text-gray-400',
        red: 'bg-red-50 text-red-700 ring-red-600/10 dark:ring-red-400/20 dark:bg-red-400/10 dark:text-red-400',
        yellow:
          'bg-yellow-50 text-yellow-800 ring-yellow-600/20 dark:ring-yellow-400/20 dark:bg-yellow-400/10 dark:text-yellow-400',
        green:
          'bg-green-50 text-green-700 ring-green-600/20 dark:ring-green-400/20 dark:bg-green-400/10 dark:text-green-400',
        teal: 'bg-teal-50 text-teal-700 ring-teal-600/20 dark:ring-teal-400/20 dark:bg-teal-400/10 dark:text-teal-400',
        blue: 'bg-blue-50 text-blue-700 ring-blue-700/10 dark:ring-blue-400/20 dark:bg-blue-400/10 dark:text-blue-400',
        indigo:
          'bg-indigo-50 text-indigo-700 ring-indigo-700/10 dark:ring-indigo-400/20 dark:bg-indigo-400/10 dark:text-indigo-400',
        purple:
          'bg-purple-50 text-purple-700 ring-purple-700/10 dark:ring-purple-400/20 dark:bg-purple-400/10 dark:text-purple-400',
        pink: 'bg-pink-50 text-pink-700 ring-pink-700/10 dark:ring-pink-400/20 dark:bg-pink-400/10 dark:text-pink-400',
        primary:
          'bg-primary-50 text-primary-700 ring-primary-700/10 dark:ring-primary-400/20 dark:bg-primary-400/10 dark:text-primary-400',
      },
      size: {
        small: 'px-2 py-1 text-xs gap-1',
        medium: 'px-2.5 py-1.5 text-sm gap-1',
        large: 'px-4 py-1.5 text-base gap-2',
      },
    },
    defaultVariants: {
      color: 'gray',
      size: 'medium',
    },
  }
)

export function Badge(props: BadgeProps) {
  const {
    className,
    color,
    size,
    'aria-label': ariaLabel,
    icon: Icon,
    children,
  } = props

  return (
    <span
      className={badge({ color, size, className })}
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
    <div>
      <div className="my-8 flex flex-wrap gap-2">
        <Badge color="gray" aria-label="test">
          Gray
        </Badge>
        <Badge color="red" aria-label="test">
          Red
        </Badge>
        <Badge color="yellow" aria-label="test">
          Yellow
        </Badge>
        <Badge color="green" aria-label="test">
          Green
        </Badge>
        <Badge color="teal" aria-label="test">
          Teal
        </Badge>
        <Badge color="blue" aria-label="test">
          Blue
        </Badge>
        <Badge color="indigo" aria-label="test">
          Indigo
        </Badge>
        <Badge color="purple" aria-label="test">
          Purple
        </Badge>
        <Badge color="pink" aria-label="test">
          Pink
        </Badge>
        <Badge color="primary" aria-label="test">
          Primary
        </Badge>
      </div>
      <div className="my-8 flex flex-wrap items-center gap-2">
        <Badge color="gray" size="small" aria-label="test">
          Small
        </Badge>
        <Badge color="gray" size="medium" aria-label="test">
          Medium
        </Badge>
        <Badge color="gray" size="large" aria-label="test">
          Large
        </Badge>
      </div>
    </div>
  )
}
