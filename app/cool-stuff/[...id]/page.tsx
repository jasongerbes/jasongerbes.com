import { CoolThing, allCoolThings } from '@/.contentlayer/generated'
import { Title } from '@/components/Title'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { formatDate } from '@/utils/format-date'
import { Mdx } from '@/components/Mdx'
import { CoolThingIcon } from '@/components/CoolThingIcon'
import { Prose } from '@/components/Prose'
import { CustomLink } from '@/components/CustomLink'

function getCoolThing(id: string[]): CoolThing {
  const thingId = id.join('/')
  const thing = allCoolThings.find((p) => p.id === thingId)

  if (!thing || (process.env.NODE_ENV === 'production' && thing.isArchived)) {
    notFound()
  }

  return thing
}

interface Params {
  id: string[]
}

export function generateStaticParams() {
  return allCoolThings
    .filter((thing) => !thing.isArchived)
    .map((thing) => ({ id: thing.id.split('/') }))
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
    },
  }
}

const numberFormat = new Intl.NumberFormat()

export default function CoolThing({ params }: { params: Params }) {
  const thing = getCoolThing(params.id)

  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20 xl:py-24">
      <article className="mx-auto max-w-3xl">
        <header className="flex flex-col gap-8 sm:flex-row lg:gap-12">
          <div className="shrink grow">
            <Title>{thing.title}</Title>

            <Prose className="mt-4">
              <p>{thing.description}</p>
            </Prose>
          </div>

          <div className="shrink-0 sm:order-first">
            <CoolThingIcon
              className="md:aspect-square"
              thing={thing}
              size="large"
            />
          </div>
        </header>

        <Prose className="mt-10">
          <table className="table-fixed">
            <tbody>
              <TableRow header="Date Added">
                <time dateTime={thing.addedDate}>
                  {formatDate(thing.addedDate)}
                </time>
              </TableRow>

              <TableRow header="Category">
                {thing.categories.join(', ')}
              </TableRow>

              <TableRow header="Cool Factor">
                {numberFormat.format(thing.coolFactor)}
              </TableRow>

              <TableRow header="On This Site">
                {thing.onThisSite ? 'Yes' : 'No'}
              </TableRow>

              <TableRow header="Website">
                <div className="truncate">
                  <CustomLink
                    href={thing.websiteUrl}
                    showHostnameIfExternal={true}
                  />
                </div>
              </TableRow>
            </tbody>
          </table>
        </Prose>

        <Mdx className="mt-10" code={thing.body.code} />
      </article>
    </div>
  )
}

function TableRow({
  header,
  children,
}: {
  header: string
  children: React.ReactNode
}) {
  return (
    <tr>
      <th className="w-28 whitespace-nowrap md:w-1/2" scope="row">
        {header}
      </th>
      <td className="text-right md:w-1/2 md:text-left">{children}</td>
    </tr>
  )
}
