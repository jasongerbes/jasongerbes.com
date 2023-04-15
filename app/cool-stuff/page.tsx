import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cool Stuff',
  description: 'Some cool things I’ve found and want to share with you.',
}

export default function Blog() {
  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Title>Some cool things I’ve found and want to share with you</Title>
        <Subtitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a velit
          convallis, pharetra justo sed, porttitor lectus. Vestibulum cursus,
          libero non laoreet fermentum.
        </Subtitle>
      </div>
    </div>
  )
}
