import { CoolThing, allCoolThings } from '@/.contentlayer/generated'
import { Heading, HeadingLevel } from './Heading'
import clsx from 'clsx'
import { CoolThingIcon } from './CoolThingIcon'
import Link from 'next/link'

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
  const things = sortThingsDescending(allCoolThings, limit)

  return (
    <ul
      className={clsx('grid gap-x-12 gap-y-8 md:grid-cols-2', className)}
      {...props}
    >
      {things.map((thing) => (
        <li key={thing.id}>
          <CoolThing thing={thing} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
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
      <CoolThingIcon thing={thing} size="normal" />

      <Heading level={headingLevel} className="mt-5 text-lg font-semibold">
        {thing.title}
      </Heading>

      <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
        {thing.description}
      </p>

      <div
        aria-hidden="true"
        className="mt-3 text-base font-semibold text-primary-800 dark:text-primary-500"
      >
        Show details →
      </div>
    </Link>
  )
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
