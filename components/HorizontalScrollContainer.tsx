import clsx from 'clsx'

export interface HorizontalScrollContainerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function HorizontalScrollContainer({
  children,
  className,
  ...props
}: HorizontalScrollContainerProps) {
  return (
    <div className="relative -mx-4 overflow-hidden">
      <div
        className={clsx('overflow-x-auto pb-4 pl-4 pr-5', className)}
        aria-orientation="horizontal"
        {...props}
      >
        {children}
      </div>
      <div className="absolute bottom-4 right-0 top-0 w-6 bg-gradient-to-r from-transparent to-body-light dark:to-body-dark" />
    </div>
  )
}
