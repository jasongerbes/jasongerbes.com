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
import { useState } from 'react'

export function Header() {
  const [showNav, setShowNav] = useState(false)
  const toggleNav = () => setShowNav(!showNav)

  return (
    <header className="sticky top-0 border-b border-gray-200/30 bg-gray-50 dark:border-gray-800 dark:bg-gray-950 lg:static lg:row-span-2 lg:border-b-0 lg:border-r">
      <div className="mx-auto flex max-h-[100dvh] items-center justify-between px-4 py-5 lg:sticky lg:top-0 lg:flex-col lg:overflow-y-auto lg:py-12">
        <Link
          className="rounded-lg border px-8 py-2 text-center lg:w-full"
          href="/"
        >
          Logo Here
        </Link>

        <nav className="lg:mt-16 lg:w-full" aria-label="Main menu">
          <button
            className="rounded-full border border-gray-200 bg-white px-5 py-2 dark:border-gray-950 dark:bg-gray-800 lg:hidden"
            onClick={toggleNav}
            aria-expanded={showNav}
            aria-controls="main-menu"
          >
            Menu
          </button>

          <ul
            className={clsx(
              'fixed inset-x-4 top-24 flex-col gap-2 rounded-xl border bg-white px-4 py-8 text-base font-semibold shadow-2xl dark:border-gray-800 dark:bg-gray-950 lg:static lg:flex lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none',
              showNav ? 'flex' : 'hidden'
            )}
            id="main-menu"
          >
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
          'flex items-center gap-3 rounded-xl px-3 py-3 text-lg text-primary-800 transition-colors dark:text-primary-200',
          isActive ? '' : 'hover:bg-primary-300/30 dark:hover:bg-primary-800/30'
        )}
        aria-current={isActive ? 'page' : undefined}
        href={href}
      >
        <Icon className="h-6 w-6" />
        {children}
      </Link>
      {isActive ? (
        <motion.div
          className="absolute inset-0 -z-10 rounded-xl bg-primary-200 dark:bg-primary-900"
          layoutId="header-nav-active-bg"
          transition={{
            type: 'spring',
            stiffness: 450,
            damping: 35,
          }}
        />
      ) : null}
    </li>
  )
}
