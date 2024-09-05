import { allCoolThings } from 'contentlayer/generated'
import { Metadata } from 'next'
import { getCoolThing } from '../utils'
import { CoolThingDetails } from '@/components/cool-things/CoolThingDetails'

interface Params {
  id: string
}

export function generateStaticParams() {
  return allCoolThings
    .filter((thing) => !thing.isArchived)
    .map((thing) => ({ id: thing.id }))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const thing = getCoolThing(params.id)
  const { addedDate, description, url } = thing
  const title = `${thing.title} - Cool Stuff`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      publishedTime: addedDate,
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      creator: '@jasongerbes',
    },
  }
}

export default function CoolThing({ params }: { params: Params }) {
  const thing = getCoolThing(params.id)

  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20 xl:py-24">
      <CoolThingDetails
        className="mx-auto max-w-3xl"
        thing={thing}
        headingLevel="h1"
      />
    </div>
  )
}
