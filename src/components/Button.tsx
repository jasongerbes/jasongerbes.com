import { Airplane, Aperture, IconProps } from '@/assets/phosphor-icons'
import { cva } from 'class-variance-authority'
import Link from 'next/link'

export type ButtonColor = 'primary'
export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonPropsBase {
  className?: string
  color?: ButtonColor
  size?: ButtonSize
  children: React.ReactNode
  leadingIcon?: React.ComponentType<IconProps>
  trailingIcon?: React.ComponentType<IconProps>
}

export interface ButtonPropsOnClick extends ButtonPropsBase {
  onClick: VoidFunction
}

export interface ButtonPropsLink extends ButtonPropsBase {
  href: string
}

export type ButtonProps = ButtonPropsOnClick | ButtonPropsLink

const button = cva(
  'inline-flex items-center font-medium text-sm rounded-md transition-colors gap-x-1.5',
  {
    variants: {
      color: {
        primary:
          'bg-primary-600 hover:bg-primary-600/80 text-white dark:bg-primary-700 dark:hover:bg-primary-600',
      },
      size: {
        small: 'py-1.5 px-2.5',
        medium: 'py-2 px-3',
        large: 'py-2.5 px-4',
      },
    },
    defaultVariants: {
      color: 'primary',
      size: 'medium',
    },
  }
)

export function Button({
  color,
  size,
  leadingIcon: LeadingIcon,
  trailingIcon: TrailingIcon,
  ...props
}: ButtonProps) {
  const className = button({ color, size, className: props.className })

  const iconProps: IconProps = {
    width: 20,
    height: 20,
    'aria-hidden': true,
    weight: 'regular',
  }

  const children = (
    <>
      {LeadingIcon && <LeadingIcon {...iconProps} />}
      {props.children}
      {TrailingIcon && <TrailingIcon {...iconProps} />}
    </>
  )

  if ('href' in props) {
    return (
      <Link className={className} href={props.href}>
        {children}
      </Link>
    )
  }
  return (
    <button className={className} onClick={props.onClick}>
      {children}
    </button>
  )
}

export function ButtonExample() {
  return (
    <div>
      <div className="my-8 flex flex-wrap gap-2">
        <Button color="primary" href="#">
          Primary Button
        </Button>
        {/* <Button color="secondary" href="#">
          Secondary Button
        </Button> */}
      </div>
      <div className="my-8 flex flex-wrap items-center gap-2">
        <Button size="small" href="#">
          Small Button
        </Button>
        <Button size="medium" href="#">
          Medium Button
        </Button>
        <Button size="large" href="#">
          Large Button
        </Button>
      </div>
      <div className="my-8 flex flex-wrap gap-2">
        <Button leadingIcon={Airplane} href="#">
          Leading Icon
        </Button>
        <Button trailingIcon={Aperture} href="#">
          Trailing Icon
        </Button>
        <Button leadingIcon={Airplane} trailingIcon={Aperture} href="#">
          Both Icons
        </Button>
      </div>
    </div>
  )
}
