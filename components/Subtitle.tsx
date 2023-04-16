import clsx from 'clsx'
import { Prose } from './Prose'

export interface SubtitleProps {
  className?: string
  children: React.ReactNode
}

export function Subtitle({ className, children }: SubtitleProps) {
  return (
    <Prose className={clsx('mt-6', className)}>
      <p>{children}</p>
    </Prose>
  )
}
