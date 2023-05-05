import clsx from 'clsx'

export interface ProseProps {
  className?: string
  children: React.ReactNode
}

export function Prose({ className, children }: ProseProps) {
  return (
    <div
      className={clsx(
        'prose prose-gray max-w-none dark:prose-invert lg:prose-lg empty:hidden',
        'prose-headings:relative prose-headings:scroll-mt-28 lg:prose-headings:scroll-mt-12',
        'prose-a:font-semibold prose-a:text-primary-800 prose-a:underline-offset-2 prose-a:transition-colors hover:prose-a:text-primary-600 dark:prose-a:text-primary-500 dark:hover:prose-a:text-primary-700',
        'prose-p:text-gray-700 dark:prose-p:text-gray-300',
        'prose-th:font-semibold',
        'prose-pre:rounded-lg prose-pre:border prose-pre:border-gray-200/50 prose-pre:bg-gray-50/30 dark:prose-pre:border-gray-800/50 dark:prose-pre:bg-gray-900',
        className
      )}
    >
      {children}
    </div>
  )
}
