import clsx from 'clsx'
import { ReactNode } from 'react'

export interface TitleProps {
  className?: string
  children: ReactNode
}

export function Title({ className, children }: TitleProps) {
  return (
    <h1
      className={clsx(
        'text-4xl font-bold tracking-tight sm:text-5xl',
        className
      )}
    >
      {children}
    </h1>
  )
}
