import { CoolThingList } from '@/components/CoolThingList'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cool Stuff',
  description: 'Some cool things I want to share with you.',
}

export default function CoolStuff() {
  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Title>Some cool things I want to share with you</Title>
        <Subtitle>
          I’m known for my love of cool stuff and for making lists. Here I’ll
          document some noteworthy things I’ve found and used, for both my own
          reference and yours.
        </Subtitle>

        <CoolThingList className="mt-12" headingLevel="h2" />
      </div>
    </div>
  )
}
