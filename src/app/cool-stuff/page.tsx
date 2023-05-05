import { CoolThingList } from '@/components/cool-things/CoolThingList'
import { Prose } from '@/components/Prose'
import { Title } from '@/components/Title'
import { Metadata } from 'next'

const title = 'Cool Stuff'
const description = 'Some cool things I want to share with you.'

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    type: 'website',
    url: '/cool-stuff',
  },
  twitter: {
    title,
    description,
    card: 'summary_large_image',
    creator: '@jasongerbes',
  },
}

export default function CoolStuff() {
  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20 xl:py-24">
      <div className="mx-auto max-w-3xl">
        <Title>Some cool things I want to share with you</Title>

        <Prose className="mt-6">
          <p>
            I’m known for my love of cool stuff and for making lists. Here I’ll
            document some noteworthy things I’ve found and used, for both my own
            reference and yours.
          </p>
        </Prose>

        <CoolThingList className="mt-8 lg:mt-12" headingLevel="h2" />
      </div>
    </div>
  )
}
