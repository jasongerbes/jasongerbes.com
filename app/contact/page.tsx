import { Title } from '@/components/Title'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact me',
  description: 'TODO',
}

export default function Contact() {
  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Title>Contact page</Title>
      </div>
    </div>
  )
}
