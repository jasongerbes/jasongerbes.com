import Link from 'next/link'
import { ReactNode } from 'react'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-pink-400 px-6 pb-20 pt-16 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 sm:flex-row">
        <nav>
          <ul className="flex flex-col gap-8 text-sm font-medium sm:flex-row">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </ul>
        </nav>
        <p className="text-center text-xs">
          &copy; {year} Jason Gerbes. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

interface NavLinkProps {
  href: string
  children: ReactNode
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <li>
      <Link href={href}>{children}</Link>
    </li>
  )
}
