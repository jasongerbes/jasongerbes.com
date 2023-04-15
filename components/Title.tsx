import clsx from 'clsx'
import Balancer from 'react-wrap-balancer'

export interface TitleProps {
  className?: string
  children: React.ReactNode
}

export function Title({ className, children }: TitleProps) {
  return (
    <h1
      className={clsx(
        'text-4xl font-bold tracking-tight sm:text-5xl',
        className
      )}
    >
      <Balancer>{children}</Balancer>
    </h1>
  )
}
