import { MDXComponents } from 'mdx/types'
import { useMDXComponent } from 'next-contentlayer/hooks'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import './Mdx.css'

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
      {children}
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
    <div
      className={clsx(
        'prose prose-lg prose-gray max-w-none dark:prose-invert',
        'prose-headings:relative',
        'prose-a:text-primary-800 prose-a:underline-offset-2 prose-a:transition-colors hover:prose-a:text-primary-600 dark:prose-a:text-primary-500 dark:hover:prose-a:text-primary-700',
        className
      )}
    >
      <MDXContent components={mdxComponents} />
    </div>
  )
}
