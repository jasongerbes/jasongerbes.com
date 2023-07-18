import { clsx } from 'clsx'
import { Heading, HeadingLevel } from './Heading'

export interface TitleProps {
  className?: string
  headingLevel?: HeadingLevel
  children: React.ReactNode
}

export function Title({ className, headingLevel, children }: TitleProps) {
  return (
    <Heading
      className={clsx(
        'text-4xl font-semibold tracking-tight sm:text-5xl',
        className,
      )}
      level={headingLevel || 'h1'}
      balanced={true}
    >
      {children}
    </Heading>
  )
}
