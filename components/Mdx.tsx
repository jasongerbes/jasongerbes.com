import { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import './Mdx.css'
import { Prose } from './Prose'

export interface MdxProps {
  className?: string
  code: string
}

function MdxLink(props: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { href, children } = props

  if (!href) {
    return <>{children}</>
  }

  if (href.startsWith('/')) {
    return (
      <Link {...props} href={href} ref={undefined}>
        {children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props}>{children}</a>
  }

  return (
    <a target="_blank" rel="noopener noreferrer" {...props}>
      {children} <span aria-hidden="true">↗</span>
    </a>
  )
}

const mdxComponents: MDXComponents = {
  a: MdxLink,
  Image,
  Link,
}

export function Mdx({ className, code }: MdxProps) {
  const MDXContent = useMDXComponent(code)

  return (
    <Prose className={className}>
      <MDXContent components={mdxComponents} />
    </Prose>
  )
}
