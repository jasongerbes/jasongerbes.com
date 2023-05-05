import { CoolThing, allCoolThings } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export function getCoolThing(id: string): CoolThing {
  const thing = allCoolThings.find((p) => p.id === id)

  if (!thing || (process.env.NODE_ENV === 'production' && thing.isArchived)) {
    notFound()
  }

  return thing
}
