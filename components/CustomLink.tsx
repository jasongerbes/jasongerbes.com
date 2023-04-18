import Link from 'next/link'

type CustomLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  showHostnameIfExternal?: boolean
}

export function CustomLink(props: CustomLinkProps) {
  const { href, children, showHostnameIfExternal } = props

  if (!href) {
    return <span {...props}>{children}</span>
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

  const { hostname } = new URL(href)

  return (
    <a {...props} target="_blank" rel="noopener noreferrer">
      {showHostnameIfExternal ? hostname : children}{' '}
      <span aria-hidden="true">↗</span>
    </a>
  )
}
