'use client'

import {
  CoolThing as CoolThingType,
  allCoolThings,
} from 'contentlayer/generated'
import { Heading, HeadingLevel } from '../Heading'
import { CoolThingIcon } from './CoolThingIcon'
import Link from 'next/link'
import { CoolThingBadges } from './CoolThingBadges'
import { useMemo, useState } from 'react'
import { CoolThingListFilter } from './CoolThingListFilter'
import {
  CoolThingFilterValue,
  defaultCoolThingFilterValue,
  getCoolThingCategories,
  getFilteredCoolThings,
} from './filter-utils'
import { Button } from '../Button'
import { ArrowsCounterClockwise, BracketsCurly } from '@/assets/phosphor-icons'
import { Prose } from '../Prose'

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
  const [filter, setFilter] = useState<CoolThingFilterValue>(
    defaultCoolThingFilterValue,
  )
  const things = getFilteredCoolThings(allCoolThings, filter)
  const categories = useMemo(() => getCoolThingCategories(allCoolThings), [])

  return (
    <div className={className}>
      <CoolThingListFilter
        categories={categories}
        value={filter}
        onChange={setFilter}
      />

      {things.length > 0 ? (
        <ul className={'mt-6 grid gap-x-12 gap-y-8 md:grid-cols-2'} {...props}>
          {things.map((thing) => (
            <li key={thing.id}>
              <CoolThing thing={thing} headingLevel={headingLevel} />
            </li>
          ))}
        </ul>
      ) : (
        <NoResultsMessage
          onClear={() => setFilter(defaultCoolThingFilterValue)}
        />
      )}
    </div>
  )
}

function NoResultsMessage({ onClear }: { onClear: VoidFunction }) {
  return (
    <div className="flex flex-col items-center px-4 py-8 text-center lg:py-24">
      <div
        className="rounded-full bg-primary-500/10 p-8 text-primary-700 dark:bg-primary-400/10 dark:text-primary-600"
        aria-hidden={true}
      >
        <BracketsCurly aria-hidden={true} width={48} height={48} />
      </div>
      <Prose className="mt-8">
        <h2>Nothing to See Here</h2>
        <p>
          Maybe I’m missing something cool?{' '}
          <a
            className="font-semibold"
            href="mailto:hello@jasongerbes.com?subject=Cool Stuff Suggestion"
          >
            Send a suggestion
          </a>{' '}
          or start over.
        </p>
      </Prose>

      <Button
        className="mt-8 lg:mt-12"
        trailingIcon={ArrowsCounterClockwise}
        size="large"
        onClick={onClear}
      >
        Clear Filters
      </Button>
    </div>
  )
}

interface CoolThingProps {
  thing: CoolThingType
  headingLevel: HeadingLevel
}

function CoolThing({ thing, headingLevel }: CoolThingProps) {
  return (
    <Link
      className="-mx-4 flex h-full flex-col items-start p-4 transition-colors hover:bg-primary-500/10 sm:rounded-xl dark:hover:bg-primary-950/30"
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
