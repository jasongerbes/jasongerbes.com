import Link from 'next/link'

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  showHostnameIfExternal?: boolean
}

export function CustomLink({
  href,
  children,
  showHostnameIfExternal,
  ...props
}: CustomLinkProps) {
  if (!href) {
    return <span {...props}>{children}</span>
  }

  if (href.startsWith('/')) {
    return (
      <Link href={href} ref={undefined} {...props}>
        {children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return (
      <a href={href} {...props}>
        {children}
      </a>
    )
  }

  const { hostname } = new URL(href)

  return (
    <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
      {showHostnameIfExternal ? hostname : children}{' '}
      <span aria-hidden="true">↗</span>
    </a>
  )
}
