import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cool Tech',
  description: 'Some cool tech I wanna share with you.',
}

export default function CoolTech() {
  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Title>Some cool tech I wanna share with you</Title>
        <Subtitle>
          I’m known by my peers for my love of technology and my list-making
          habit. Here I’ll document some of the noteworthy tech I’ve discovered
          and used - for both my own reference and yours.
        </Subtitle>
      </div>
    </div>
  )
}
