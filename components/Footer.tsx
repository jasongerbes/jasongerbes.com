import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-teal-100 px-8 pb-20 pt-12 dark:bg-teal-950/30 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-16 sm:flex-row">
        <nav>
          <ul className="flex flex-col gap-6 text-base sm:flex-row">
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
