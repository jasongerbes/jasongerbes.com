'use client'

import { CoolThing, allCoolThings } from '@/.contentlayer/generated'
import Fuse from 'fuse.js'
import { Heading, HeadingLevel } from '../Heading'
import { CoolThingIcon } from './CoolThingIcon'
import Link from 'next/link'
import { CoolThingBadges } from './CoolThingBadges'
import { useState } from 'react'
import { CoolThingListFilter, CoolThingFilter } from './CoolThingListFilter'

export interface CoolThingListProps
  extends React.HTMLAttributes<HTMLUListElement> {
  limit?: number
  headingLevel: HeadingLevel
}

export function CoolThingList({
  className,
  limit,
  headingLevel,
  ...props
}: CoolThingListProps) {
  const [filter, setFilter] = useState<CoolThingFilter>({
    searchQuery: '',
    onThisSite: false,
    categories: [],
  })

  const things = getFilteredThings(filter)

  return (
    <div className={className}>
      <CoolThingListFilter value={filter} onChange={setFilter} />

      <ul className={'mt-8 grid gap-x-12 gap-y-8 md:grid-cols-2'} {...props}>
        {things.map((thing) => (
          <li key={thing.id}>
            <CoolThing thing={thing} headingLevel={headingLevel} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export interface CoolThingProps {
  thing: CoolThing
  headingLevel: HeadingLevel
}

function CoolThing({ thing, headingLevel }: CoolThingProps) {
  return (
    <Link
      className="-mx-4 flex h-full flex-col items-start p-4 transition-colors hover:bg-primary-500/10 dark:hover:bg-primary-950/30 sm:rounded-xl"
      href={thing.url}
    >
      <CoolThingIcon thing={thing} size="medium" />

      <Heading level={headingLevel} className="mt-5 text-lg font-semibold">
        {thing.title}
      </Heading>

      <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
        {thing.description}
      </p>

      <CoolThingBadges className="mt-3" thing={thing} size="small" />

      <div
        aria-hidden="true"
        className="mt-3 text-base font-semibold text-primary-800 dark:text-primary-500"
      >
        Show details →
      </div>
    </Link>
  )
}

const fuse = new Fuse(allCoolThings, {
  keys: ['title', 'description', 'onThisSite', 'categories'],
})

function getFilteredThings(search: CoolThingFilter): CoolThing[] {
  const searchExpressions: Fuse.Expression[] = []

  // fuzzy match the search query to the title or description of the things
  if (search.searchQuery !== '') {
    searchExpressions.push({
      $or: [{ title: search.searchQuery }, { description: search.searchQuery }],
    })
  }

  // filter to only the things that are on this site
  if (search.onThisSite) {
    searchExpressions.push({ onThisSite: "'true" })
  }

  // filter based on the selected categories
  if (search.categories.length > 0) {
    searchExpressions.push({
      $or: search.categories.map((category) => ({
        categories: `'${category}`,
      })),
    })
  }

  // no need to search, return all things
  if (searchExpressions.length === 0) {
    return sortThingsDescending(allCoolThings)
  }

  const results = fuse.search({ $and: searchExpressions })
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
