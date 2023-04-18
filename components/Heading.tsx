import { Link as LinkIcon } from '@/assets/phosphor-icons'
import clsx from 'clsx'

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level: HeadingLevel
}

export function Heading({ level: Tag, children, ...props }: HeadingProps) {
  if (!props.id) {
    return <Tag {...props}>{children}</Tag>
  }

  return (
    <Tag {...props} className={clsx('group', props.className)}>
      <span className="align-middle">{children}</span>
      <a
        className="inline px-1.5 no-underline opacity-0 transition-all group-hover:opacity-100"
        href={`#${props.id}`}
        aria-hidden="true"
        tabIndex={-1}
      >
        <LinkIcon
          className="inline"
          width={24}
          height={24}
          aria-hidden="true"
        />
      </a>
    </Tag>
  )
}
