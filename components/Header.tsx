'use client'

import {
  HomeIcon,
  EnvelopeIcon,
  IdentificationIcon,
  NewspaperIcon,
} from '@heroicons/react/24/outline'
import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function Header() {
  return (
    <header className="sticky top-0 px-8 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <Link href="/">Logo Here</Link>
        <nav className="relative z-0 rounded-2xl bg-white/60 p-1 shadow-xl shadow-gray-700/10 ring-1 ring-gray-900/5 backdrop-blur-xl dark:bg-gray-900/60 dark:ring-gray-500/10">
          <ul className="flex gap-1 text-base font-semibold">
            <NavLink href="/" Icon={HomeIcon}>
              Home
            </NavLink>
            <NavLink href="/about" Icon={IdentificationIcon}>
              About
            </NavLink>
            <NavLink href="/blog" Icon={NewspaperIcon}>
              Blog
            </NavLink>
            <NavLink href="/contact" Icon={EnvelopeIcon}>
              Contact
            </NavLink>
          </ul>
        </nav>
      </div>
    </header>
  )
}

// Icon props type, inferred from @heroicons/react
type IconProps = React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> & {
  title?: string
  titleId?: string
} & React.RefAttributes<SVGSVGElement>

interface NavLinkProps {
  href: string
  Icon: React.ComponentType<IconProps>
  children: React.ReactNode
}

function NavLink({ href, Icon, children }: NavLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li className="relative">
      <Link
        className={clsx(
          'flex items-center gap-2 rounded-2xl px-3 py-2 transition-colors',
          isActive
            ? 'text-primary-800 dark:text-primary-200'
            : 'text-primary-950 hover:bg-primary-300/30 dark:text-primary-100 dark:hover:bg-primary-800/30'
        )}
        aria-current={isActive ? 'page' : undefined}
        href={href}
      >
        <Icon className="h-5 w-5" />
        {children}
      </Link>
      {isActive ? (
        <motion.div
          className="absolute bottom-0 left-0 right-0 top-0 -z-10 rounded-2xl bg-primary-200 dark:bg-primary-950"
          layoutId="header-nav-active-bg"
        />
      ) : null}
    </li>
  )
}
