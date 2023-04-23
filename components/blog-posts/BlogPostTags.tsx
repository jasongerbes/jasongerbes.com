import { formatDate } from '@/utils/format-date'
import { Tag } from '../Tag'
import { CalendarBlank, ClockCountdown } from '@/assets/phosphor-icons'
import { BlogPost } from '@/.contentlayer/generated'
import clsx from 'clsx'

export interface BlogPostTagsProps {
  className?: string
  post: BlogPost
}

export function BlogPostTags({ className, post }: BlogPostTagsProps) {
  const publishDate = formatDate(post.publishDate)

  return (
    <div className={clsx('flex flex-wrap gap-2', className)}>
      <Tag
        accessibleLabel={`This post was published on ${publishDate}`}
        icon={CalendarBlank}
      >
        <time dateTime={post.publishDate}>{publishDate}</time>
      </Tag>

      <Tag
        accessibleLabel={`This post takes about ${Math.floor(
          post.readingTime.minutes
        )} minutes to read`}
        icon={ClockCountdown}
      >
        {post.readingTime.text}
      </Tag>
    </div>
  )
}
