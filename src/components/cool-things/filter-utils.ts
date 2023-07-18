import Fuse from 'fuse.js'
import { CoolThing } from 'contentlayer/generated'

export function getCoolThingCategories(things: CoolThing[]) {
  const categorySet = things.reduce((acc, thing) => {
    thing.categories.forEach((category) => acc.add(category))
    return acc
  }, new Set<CoolThingCategory>())

  return Array.from(categorySet)
}

export type CoolThingCategory = CoolThing['categories'][number]

export interface CoolThingFilterValue {
  searchQuery: string
  category: CoolThingCategory | undefined
}

export const defaultCoolThingFilterValue: CoolThingFilterValue = {
  searchQuery: '',
  category: undefined,
}

type CoolThingFilter = (thing: CoolThing) => boolean

export function getFilteredCoolThings(
  things: CoolThing[],
  { searchQuery, category }: CoolThingFilterValue,
): CoolThing[] {
  const filters: CoolThingFilter[] = []

  // filter out archived things
  filters.push((thing) => !thing.isArchived)

  // filter based on the selected category
  if (category) {
    filters.push((thing) => thing.categories.includes(category))
  }

  // apply all filters
  const filteredThings = things.filter((thing) =>
    filters.every((filter) => filter(thing)),
  )

  // no need to search, return filteredThings
  if (searchQuery === '') {
    return sortThingsDescending(filteredThings)
  }

  const fuse = new Fuse(filteredThings, { keys: ['title', 'description'] })
  const searchResults = fuse.search(searchQuery)

  return searchResults.map((result) => result.item)
}

function sortThingsDescending(
  things: CoolThing[],
  limit?: number,
): CoolThing[] {
  const sortedThings = things.sort((a, b) => {
    if (a.coolFactor !== b.coolFactor) {
      return b.coolFactor - a.coolFactor
    }

    const dateA = new Date(a.addedDate).getTime()
    const dateB = new Date(b.addedDate).getTime()

    if (dateA !== dateB) {
      return dateB - dateA
    }

    return a.title.localeCompare(b.title)
  })

  return limit ? sortedThings.slice(0, limit) : sortedThings
}
