import {
  At,
  Envelope,
  Paperclip,
  type IconProps,
} from '@/assets/phosphor-icons'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import {
  EmailIcon,
  GitHubIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/social-icons'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Want to chat? I’d be happy to hear from you.',
}

const contactLinks: ContactLinkProps[] = [
  {
    href: 'mailto:hello@jasongerbes.com',
    label: 'Send an email',
    icon: EmailIcon,
  },
  {
    href: 'https://github.com/jasongerbes',
    label: 'Follow on GitHub',
    icon: GitHubIcon,
  },
  {
    href: 'https://www.linkedin.com/in/jason-gerbes',
    label: 'Connect on LinkedIn',
    icon: LinkedInIcon,
  },
  {
    href: 'https://twitter.com/JasonGerbes',
    label: 'Follow on Twitter',
    icon: TwitterIcon,
  },
]

export default function Contact() {
  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Title>Want to connect? I’d be happy to hear from you</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a velit
          convallis, pharetra justo sed, porttitor lectus. Vestibulum cursus,
          libero non laoreet fermentum.
        </Subtitle>

        <ul className="mt-16 grid gap-4 md:grid-cols-2">
          {contactLinks.map((link) => (
            <li key={link.href}>
              <ContactLink {...link} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

interface ContactLinkProps {
  href: string
  label: string
  icon: React.ComponentType<IconProps>
}

function ContactLink({ href, label, icon: Icon }: ContactLinkProps) {
  return (
    <a
      className="flex justify-between gap-4 rounded-xl border border-gray-200 px-4 py-4 text-base font-medium text-gray-700 transition-colors hover:border-primary-600/50 hover:bg-primary-500/10 hover:text-primary-800 dark:border-gray-700 dark:text-gray-300 dark:hover:border-primary-500/20 dark:hover:bg-primary-950/30 dark:hover:text-primary-500"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="flex items-center gap-4">
        <Icon width={24} height={24} weight="duotone" />
        <span>{label}</span>
      </span>
      <span aria-hidden="true">↗</span>
    </a>
  )
}
