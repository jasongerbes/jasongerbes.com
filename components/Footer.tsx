import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-gray-100 px-8 pb-20 pt-12 dark:border-gray-700 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-16 sm:flex-row sm:items-center lg:justify-center">
        <nav className="lg:hidden">
          <ul className="flex flex-col gap-6 text-base font-medium sm:flex-row">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </ul>
        </nav>
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
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
      <Link href={href}>{children}</Link>
    </li>
  )
}
