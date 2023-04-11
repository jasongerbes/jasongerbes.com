import { Metadata } from 'next'
import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'Jason Gerbes',
    template: '%s - Jason Gerbes',
  },
  description:
    'My personal website and blog, where I share interesting content and thoughts on various topics.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-[100svh] flex-col bg-white text-gray-800 dark:bg-gray-900 dark:text-gray-50">
        <Header />
        <main className="grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
