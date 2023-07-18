import { Link as LinkIcon } from '@/assets/phosphor-icons'
import { clsx } from 'clsx'
import { Fragment } from 'react'
import Balancer from 'react-wrap-balancer'

export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = React.HTMLAttributes<HTMLHeadingElement> & {
  level: HeadingLevel
  balanced?: boolean
}

export function Heading({
  level: Tag,
  children,
  balanced,
  ...props
}: HeadingProps) {
  const Wrapper = balanced ? Balancer : Fragment

  return (
    <Tag {...props} className={clsx(props.className, props.id && 'group')}>
      {props.id && <HeadingAnchorLink id={props.id} />}
      <Wrapper>{children}</Wrapper>
    </Tag>
  )
}

function HeadingAnchorLink({ id }: { id: string }) {
  return (
    <a
      className="absolute inset-y-0 left-0 hidden translate-x-[-100%] flex-col justify-center px-1 no-underline opacity-0 transition-all group-hover:opacity-100 sm:flex xl:px-2"
      href={`#${id}`}
      aria-hidden="true"
      tabIndex={-1}
    >
      <LinkIcon width={24} height={24} aria-hidden="true" />
    </a>
  )
}
