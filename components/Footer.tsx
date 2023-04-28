import Link from 'next/link'

const links: FooterNavLinkProps[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/cool-stuff', label: 'Cool Stuff' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-primary-600/10 bg-primary-50/50 px-8 pb-16 pt-16 dark:border-primary-900/30 dark:bg-primary-900/20 sm:px-8 lg:border-none lg:bg-transparent lg:pt-0">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-16 sm:items-center lg:justify-center">
        <nav className="lg:hidden">
          <ul className="flex flex-col gap-6 text-base font-semibold sm:flex-row sm:gap-8">
            {links.map((link) => (
              <FooterNavLink key={link.href} {...link} />
            ))}
          </ul>
        </nav>
        <p className="text-center text-sm text-primary-800 dark:text-primary-500 lg:text-gray-500 dark:lg:text-gray-400">
          &copy; {year} Jason Gerbes. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

interface FooterNavLinkProps {
  href: string
  label: string
}

function FooterNavLink({ href, label }: FooterNavLinkProps) {
  return (
    <li>
      <Link
        className="text-primary-800 transition-colors hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-700"
        href={href}
      >
        {label}
      </Link>
    </li>
  )
}
