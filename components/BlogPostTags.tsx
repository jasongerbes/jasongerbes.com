import { formatDate } from '@/utils/format-date'
import { Tag } from './Tag'
import { CalendarBlank, ClockCountdown } from '@/assets/phosphor-icons'
import { BlogPost } from '@/.contentlayer/generated'
import clsx from 'clsx'

export interface BlogPostTagsProps {
  className?: string
  post: BlogPost
}

export function BlogPostTags({ className, post }: BlogPostTagsProps) {
  return (
    <div className={clsx('flex flex-wrap gap-2', className)}>
      <Tag icon={CalendarBlank}>
        <time dateTime={post.publishDate}>{formatDate(post.publishDate)}</time>
      </Tag>

      <Tag icon={ClockCountdown}>{post.readingTime.text}</Tag>
    </div>
  )
}
