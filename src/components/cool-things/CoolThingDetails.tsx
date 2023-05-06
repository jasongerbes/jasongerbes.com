import { CoolThing } from 'contentlayer/generated'
import { Prose } from '../Prose'
import { Title } from '../Title'
import { CoolThingIcon } from './CoolThingIcon'
import { Markdown } from '../Markdown'
import { CustomLink } from '../CustomLink'
import { formatDate } from '@/utils/format-date'
import { HeadingLevel } from '../Heading'

export interface CoolThingDetailsProps {
  className?: string
  thing: CoolThing
  headingLevel: HeadingLevel
}

export function CoolThingDetails({
  className,
  thing,
  headingLevel,
}: CoolThingDetailsProps) {
  return (
    <article className={className}>
      <header className="flex flex-col gap-8 sm:flex-row lg:gap-12">
        <div className="shrink grow">
          <Title headingLevel={headingLevel}>{thing.title}</Title>

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

            <TableRow header="Category">{thing.categories.join(', ')}</TableRow>

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

      <Markdown className="mt-10" code={thing.body.code} />
    </article>
  )
}

const numberFormat = new Intl.NumberFormat()

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
