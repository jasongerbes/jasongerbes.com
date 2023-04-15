'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  type IconProps,
  House,
  Rocket,
  FileCode,
  Book,
  ChatDots,
} from '@/assets/phosphor-icons'

const links: HeaderNavLinkProps[] = [
  {
    href: '/',
    label: 'Home',
    icon: House,
  },
  {
    href: '/about',
    label: 'About',
    icon: FileCode,
  },
  {
    href: '/blog',
    label: 'Blog',
    icon: Book,
  },
  {
    href: '/cool-stuff',
    label: 'Cool Stuff',
    icon: Rocket,
  },
  {
    href: '/contact',
    label: 'Contact',
    icon: ChatDots,
  },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 select-none border-b border-primary-600/10 bg-primary-50/70 backdrop-blur-xl dark:border-primary-900/30 dark:bg-primary-900/20 lg:static lg:row-span-2 lg:border-b-0 lg:border-r lg:backdrop-blur-none">
      <div className="mx-auto flex max-h-[100dvh] items-center justify-between p-4 lg:sticky lg:top-0 lg:flex-col lg:overflow-y-auto lg:py-12">
        <Link
          className="rounded-lg border px-4 py-2 text-center lg:w-full"
          href="/"
        >
          Logo
        </Link>

        <nav className="lg:mt-16 lg:w-full" aria-label="Main menu">
          <ul className="flex gap-1 md:gap-2 lg:flex-col">
            {links.map((link) => (
              <HeaderNavLink key={link.href} {...link} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

interface HeaderNavLinkProps {
  className?: string
  href: string
  label: string
  icon: React.ComponentType<IconProps>
}

function HeaderNavLink(props: HeaderNavLinkProps) {
  const { className, href, label, icon: Icon } = props
  const pathname = usePathname()

  const isCurrent = pathname === href
  const isActive =
    isCurrent || (pathname.startsWith('/blog') && href === '/blog')

  return (
    <li className={clsx('relative', className)}>
      <Link
        className={clsx(
          'flex items-center gap-3 rounded-xl px-3 py-3 text-lg font-medium text-primary-800 transition-colors dark:text-primary-500',
          isActive ? '' : 'hover:bg-primary-500/10 dark:hover:bg-primary-950/50'
        )}
        aria-current={isCurrent ? 'page' : undefined}
        aria-label={label}
        href={href}
      >
        <Icon weight="regular" width={24} height={24} aria-hidden={true} />
        <span className="hidden md:block" aria-hidden={true}>
          {label}
        </span>
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
