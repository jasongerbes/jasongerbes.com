import { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Jason Gerbes',
    template: '%s - Jason Gerbes',
  },
  description: 'Software architect, technology enthusiast, and cat dad.',
  metadataBase: new URL('https://jasongerbes.com'),
  openGraph: {
    title: 'Jason Gerbes',
    description: 'Software architect, technology enthusiast, and cat dad.',
    type: 'website',
    url: '/',
    siteName: 'Jason Gerbes',
    locale: 'en-NZ',
  },
  twitter: {
    title: 'Jason Gerbes',
    card: 'summary_large_image',
    creator: '@jasongerbes',
  },
  authors: [{ name: 'Jason Gerbes' }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    shortcut: '/favicon.ico',
  },
  verification: {
    google: '-STVopLRbXMC9iyGNCf_t59pSSK8dhhyWXlijHsanvU',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-[100svh] flex-col bg-white text-gray-800 antialiased selection:bg-primary-500/30 dark:bg-gray-900 dark:text-gray-100 lg:grid lg:grid-cols-[270px_1fr] lg:grid-rows-[1fr_auto] xl:grid-cols-[320px_1fr]">
        <Header />
        <main className="min-w-0 grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
