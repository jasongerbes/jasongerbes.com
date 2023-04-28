'use client'

import { CoolThing, allCoolThings } from '@/.contentlayer/generated'
import { Heading, HeadingLevel } from '../Heading'
import { CoolThingIcon } from './CoolThingIcon'
import Link from 'next/link'
import { CoolThingBadges } from './CoolThingBadges'
import { useMemo, useState } from 'react'
import { CoolThingListFilter } from './CoolThingListFilter'
import {
  CoolThingFilterValue,
  getCoolThingCategories,
  getFilteredCoolThings,
} from './filter-utils'

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
  const [filter, setFilter] = useState<CoolThingFilterValue>({
    searchQuery: '',
    category: undefined,
  })

  const things = getFilteredCoolThings(allCoolThings, filter)
  const categories = useMemo(() => getCoolThingCategories(allCoolThings), [])

  return (
    <div className={className}>
      <CoolThingListFilter
        categories={categories}
        value={filter}
        onChange={setFilter}
      />

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
