import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Want to chat? I’d be happy to hear from you.',
}

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
      </div>
    </div>
  )
}
