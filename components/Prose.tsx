import clsx from 'clsx'

export interface ProseProps {
  className?: string
  children: React.ReactNode
}

export function Prose({ className, children }: ProseProps) {
  return (
    <div
      className={clsx(
        'prose prose-lg prose-gray max-w-none dark:prose-invert',
        'prose-headings:relative prose-headings:scroll-mt-28 lg:prose-headings:scroll-mt-12',
        'prose-a:font-semibold prose-a:text-primary-800 prose-a:underline-offset-2 prose-a:transition-colors hover:prose-a:text-primary-600 dark:prose-a:text-primary-500 dark:hover:prose-a:text-primary-700',
        'prose-p:text-gray-700 dark:prose-p:text-gray-300',
        className
      )}
    >
      {children}
    </div>
  )
}
