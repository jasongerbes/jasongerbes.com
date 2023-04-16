import { CoolThing, allCoolThings } from '@/.contentlayer/generated'
import { Heading, HeadingLevel } from './Heading'
import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'

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
  const { hostname } = new URL(thing.websiteUrl)

  return (
    <a
      className="-mx-4 flex flex-col items-start p-4 transition-colors hover:bg-primary-500/10 dark:hover:bg-primary-950/30 sm:rounded-xl"
      href={thing.websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div
        className={clsx(
          'flex items-center justify-center rounded-lg border border-primary-900/20 p-1.5 dark:border-gray-700/50',
          {
            'bg-white dark:bg-gray-800': thing.logoImgTheme === 'auto',
            'bg-white dark:bg-gray-200': thing.logoImgTheme === 'light',
            'bg-gray-700 dark:bg-gray-800': thing.logoImgTheme === 'dark',
          }
        )}
      >
        <Image
          className="h-9 w-9"
          src={thing.logoImgSrc}
          alt={`The logo image for ${thing.title}`}
          width={36}
          height={36}
        />
      </div>

      <Heading level={headingLevel} className="mt-5 text-lg font-semibold">
        {thing.title}
      </Heading>

      <p className="mt-3 text-base text-gray-600 dark:text-gray-400">
        {thing.description}
      </p>

      <p className="mt-4 text-primary-800 dark:text-primary-500">
        {hostname} ↗
      </p>
    </a>
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
