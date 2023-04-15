import clsx from 'clsx'

export interface SubtitleProps {
  className?: string
  children: React.ReactNode
}

export function Subtitle({ className, children }: SubtitleProps) {
  return (
    <p
      className={clsx(
        'mt-6 text-base text-gray-600 dark:text-gray-400',
        className
      )}
    >
      {children}
    </p>
  )
}
