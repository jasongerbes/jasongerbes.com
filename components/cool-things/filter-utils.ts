import Fuse from 'fuse.js'
import { CoolThing } from '@/.contentlayer/generated'

export function getCoolThingCategories(things: CoolThing[]) {
  const categorySet = things.reduce((acc, thing) => {
    thing.categories.forEach((category) => acc.add(category))
    return acc
  }, new Set<string>())

  return Array.from(categorySet)
}

export interface CoolThingFilterValue {
  searchQuery: string
  category: string | undefined
}

export function getFilteredCoolThings(
  things: CoolThing[],
  filter: CoolThingFilterValue
): CoolThing[] {
  const expressions: Fuse.Expression[] = []

  // fuzzy match the search query to the title or description of the things
  if (filter.searchQuery !== '') {
    expressions.push({
      $or: [{ title: filter.searchQuery }, { description: filter.searchQuery }],
    })
  }

  // filter based on the selected category
  if (filter.category) {
    expressions.push({ categories: `'${filter.category}` })
  }

  // no need to search, return all things
  if (expressions.length === 0) {
    return sortThingsDescending(things)
  }

  const fuse = new Fuse(things, {
    keys: ['title', 'description', 'onThisSite', 'categories'],
  })

  const results = fuse.search({ $and: expressions })
  return results.map((result) => result.item)
}

function sortThingsDescending(
  things: CoolThing[],
  limit?: number
): CoolThing[] {
  const sortedThings = things
    .filter((thing) => !thing.isArchived)
    .sort((a, b) => {
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
