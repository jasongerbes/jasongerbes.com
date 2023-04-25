import { formatDate } from '@/utils/format-date'
import { CalendarBlank, ClockCountdown } from '@/assets/phosphor-icons'
import { BlogPost } from '@/.contentlayer/generated'
import clsx from 'clsx'
import { Badge, BadgeSize } from '../Badge'

export interface BlogPostBadgesProps {
  className?: string
  post: BlogPost
  size: BadgeSize
}

export function BlogPostBadges({ className, post, size }: BlogPostBadgesProps) {
  const publishDate = formatDate(post.publishDate)

  return (
    <div className={clsx('flex flex-wrap gap-2', className)}>
      <Badge
        aria-label={`This post was published on ${publishDate}`}
        icon={CalendarBlank}
        size={size}
      >
        <time dateTime={post.publishDate}>{publishDate}</time>
      </Badge>

      <Badge
        aria-label={`This post takes about ${Math.floor(
          post.readingTime.minutes
        )} minutes to read`}
        icon={ClockCountdown}
        size={size}
      >
        {post.readingTime.text}
      </Badge>
    </div>
  )
}
