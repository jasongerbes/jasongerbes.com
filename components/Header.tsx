'use client'

import clsx from 'clsx'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  type IconProps,
  House,
  Rocket,
  FileCode,
  Book,
  ChatText,
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
    icon: ChatText,
  },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 select-none border-b border-primary-600/10 bg-primary-50/70 backdrop-blur-lg backdrop-filter dark:border-primary-900/30 dark:bg-primary-900/20 lg:static lg:row-span-2 lg:border-b-0 lg:border-r lg:backdrop-blur-none lg:backdrop-filter-none">
      <div className="mx-auto flex max-h-[100dvh] items-center justify-center p-4 xs:justify-between lg:sticky lg:top-0 lg:flex-col lg:overflow-y-auto lg:px-0 lg:py-12">
        <Link
          className="lg:dark:border-primary-900/300 hidden text-center xs:block lg:w-full lg:border-b-2 lg:border-primary-600/10"
          href="/"
          aria-hidden="true"
        >
          <Image
            className="mx-auto h-12 w-12 lg:h-28 lg:w-28"
            src="/images/site-logo.png"
            width={120}
            height={120}
            alt="Animated portrait of the website's author, Jason Gerbes"
          />
        </Link>

        <nav className="lg:mt-12 lg:w-full lg:px-4" aria-label="Main menu">
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
    isCurrent ||
    (href === '/blog' && pathname.startsWith('/blog')) ||
    (href === '/cool-stuff' && pathname.startsWith('/cool-stuff'))

  return (
    <li className={clsx('relative', className)}>
      <Link
        className={clsx(
          'flex items-center gap-3 rounded-xl px-3 py-3 text-lg/none font-medium text-primary-800 transition-colors [-webkit-tap-highlight-color:transparent] dark:text-primary-500',
          isActive
            ? '[-webkit-tap-highlight-color:transparent]'
            : 'hover:bg-primary-500/10 dark:hover:bg-primary-950/50'
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
