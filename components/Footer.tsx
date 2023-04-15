import Link from 'next/link'

const links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/about',
    label: 'About',
  },
  {
    href: '/blog',
    label: 'Blog',
  },
  {
    href: '/cool-stuff',
    label: 'Cool Stuff',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
]

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="px-8 pb-16 pt-16 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-12 sm:items-center lg:justify-center">
        <nav className="lg:hidden">
          <ul className="flex flex-col gap-8 text-base font-semibold sm:flex-row">
            {links.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.label}
              </NavLink>
            ))}
          </ul>
        </nav>
        <p className="text-center text-sm text-gray-400 dark:text-gray-500">
          &copy; {year} Jason Gerbes. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <li>
      <Link
        className="text-primary-800 transition-colors hover:text-primary-600 dark:text-primary-600 dark:hover:text-primary-700"
        href={href}
      >
        {children}
      </Link>
    </li>
  )
}
