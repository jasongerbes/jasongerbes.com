import { CheckCircle } from '@/assets/phosphor-icons'
import { CoolThing } from '@/.contentlayer/generated'
import clsx from 'clsx'
import { Badge, BadgeSize } from '../Badge'

export interface CoolThingBadgesProps {
  className?: string
  thing: CoolThing
  size: BadgeSize
}

export function CoolThingBadges({
  className,
  thing,
  size,
}: CoolThingBadgesProps) {
  return (
    <div className={clsx('flex flex-wrap gap-1.5', className)}>
      {thing.onThisSite && (
        <Badge
          color="green"
          size={size}
          aria-label={`${thing.title} is used on this site`}
          icon={CheckCircle}
        >
          On This Site
        </Badge>
      )}

      {thing.categories.map((category) => (
        <Badge key={category} size={size} aria-label={`Category: ${category}`}>
          {category}
        </Badge>
      ))}
    </div>
  )
}
