import clsx from 'clsx'

export interface ProseProps {
  className?: string
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl'
  children: React.ReactNode
}

export function Prose({ className, size, children }: ProseProps) {
  return (
    <div
      className={clsx(
        'prose prose-gray max-w-none dark:prose-invert',
        size && `prose-${size}`,
        'prose-headings:relative prose-headings:scroll-mt-28 lg:prose-headings:scroll-mt-12',
        'prose-a:text-primary-800 prose-a:underline-offset-2 prose-a:transition-colors hover:prose-a:text-primary-600 dark:prose-a:text-primary-500 dark:hover:prose-a:text-primary-700',
        className
      )}
    >
      {children}
    </div>
  )
}
