import { formatDate } from '@/utils/format-date'
import { CalendarBlank, ClockCountdown } from '@/assets/phosphor-icons'
import { BlogPost } from '@/.contentlayer/generated'
import clsx from 'clsx'
import { Badge } from '../Badge'

export interface BlogPostBadgesProps {
  className?: string
  post: BlogPost
}

export function BlogPostBadges({ className, post }: BlogPostBadgesProps) {
  const publishDate = formatDate(post.publishDate)

  return (
    <div className={clsx('flex flex-wrap gap-2', className)}>
      <Badge
        color="gray"
        aria-label={`This post was published on ${publishDate}`}
        icon={CalendarBlank}
      >
        <time dateTime={post.publishDate}>{publishDate}</time>
      </Badge>

      <Badge
        color="gray"
        aria-label={`This post takes about ${Math.floor(
          post.readingTime.minutes
        )} minutes to read`}
        icon={ClockCountdown}
      >
        {post.readingTime.text}
      </Badge>
    </div>
  )
}
