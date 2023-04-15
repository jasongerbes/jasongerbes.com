'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import {
  type IconProps,
  House,
  IdentificationCard,
  Newspaper,
  Code,
  ChatDots,
} from '@/assets/phosphor-icons'

const links = [
  {
    href: '/',
    label: 'Home',
    icon: House,
  },
  {
    href: '/about',
    label: 'About',
    icon: IdentificationCard,
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: Newspaper,
  },
  {
    href: '/cool-stuff',
    label: 'Cool Stuff',
    icon: Code,
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: ChatDots,
  },
]

export function Header() {
  const [showNav, setShowNav] = useState(false)
  const toggleNav = () => setShowNav(!showNav)

  return (
    <header className="sticky top-0 z-50 border-b border-primary-600/10 bg-primary-50/70 backdrop-blur-xl dark:border-primary-900/30 dark:bg-primary-900/20 lg:static lg:row-span-2 lg:border-b-0 lg:border-r lg:backdrop-blur-none">
      <div className="mx-auto flex max-h-[100dvh] items-center justify-between px-4 py-5 lg:sticky lg:top-0 lg:flex-col lg:overflow-y-auto lg:py-12">
        <Link
          className="rounded-lg border px-8 py-2 text-center lg:w-full"
          href="/"
        >
          Logo Here
        </Link>

        <nav className="lg:mt-16 lg:w-full" aria-label="Main menu">
          <button
            className="rounded-full border border-gray-200 bg-white px-5 py-2 dark:border-gray-700 dark:bg-gray-800 lg:hidden"
            onClick={toggleNav}
            aria-expanded={showNav}
            aria-controls="main-menu"
          >
            Menu
          </button>

          <ul
            className={clsx(
              'fixed inset-x-4 top-24 flex flex-col gap-2 rounded-xl border bg-white px-4 py-8 text-base font-semibold shadow-2xl dark:border-gray-800 dark:bg-gray-900 lg:visible lg:static lg:border-none lg:bg-transparent lg:p-0 lg:shadow-none',
              showNav ? 'visible' : 'invisible'
            )}
            id="main-menu"
          >
            {links.map((link) => (
              <NavLink key={link.href} href={link.href} Icon={link.icon}>
                {link.label}
              </NavLink>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

interface NavLinkProps {
  href: string
  Icon: React.ComponentType<IconProps>
  children: React.ReactNode
}

function NavLink({ href, Icon, children }: NavLinkProps) {
  const pathname = usePathname()

  const isCurrent = pathname === href
  const isActive =
    isCurrent || (pathname.startsWith('/blog') && href === '/blog')

  return (
    <li className="relative">
      <Link
        className={clsx(
          'flex items-center gap-3 rounded-xl px-3 py-3 text-lg text-primary-800 transition-colors dark:text-primary-500',
          isActive ? '' : 'hover:bg-primary-500/10 dark:hover:bg-primary-950/50'
        )}
        aria-current={isCurrent ? 'page' : undefined}
        href={href}
      >
        <Icon className="h-6 w-6" weight="regular" />
        {children}
      </Link>
      {isActive ? (
        <motion.div
          className="absolute inset-0 -z-10 rounded-xl bg-primary-500/30 dark:bg-primary-950/80"
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
