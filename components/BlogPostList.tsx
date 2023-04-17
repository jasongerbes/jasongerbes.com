import { BlogPost, allBlogPosts } from '@/.contentlayer/generated'
import { Heading, HeadingLevel } from './Heading'
import clsx from 'clsx'
import Link from 'next/link'
import { formatDate } from '@/utils/format-date'

export interface BlogPostListProps
  extends React.HTMLAttributes<HTMLUListElement> {
  limit?: number
  headingLevel: HeadingLevel
}

export function BlogPostList({
  className,
  limit,
  headingLevel,
  ...props
}: BlogPostListProps) {
  const posts = sortPostsDescending(allBlogPosts, limit)

  return (
    <ul className={clsx('flex flex-col gap-4', className)} {...props}>
      {posts.map((post) => (
        <li key={post.id}>
          <BlogPost post={post} headingLevel={headingLevel} />
        </li>
      ))}
    </ul>
  )
}

export interface BlogPostProps {
  post: BlogPost
  headingLevel: HeadingLevel
}

function BlogPost({ post, headingLevel }: BlogPostProps) {
  return (
    <article>
      <Link
        className="-mx-4 flex flex-col p-4 transition-colors hover:bg-primary-500/10 dark:hover:bg-primary-950/30 sm:rounded-xl"
        href={post.url}
      >
        <Heading
          level={headingLevel}
          className="text-lg font-semibold sm:text-xl"
        >
          {post.title}
        </Heading>
        <time
          className="order-first mb-3 text-sm font-medium text-gray-400"
          dateTime={post.publishDate}
        >
          {formatDate(post.publishDate)}
        </time>
        <p className="mt-3 text-base text-gray-700 dark:text-gray-300">
          {post.description}
        </p>
        <div
          aria-hidden="true"
          className="mt-3 text-base font-semibold text-primary-800 dark:text-primary-500"
        >
          Read post →
        </div>
      </Link>
    </article>
  )
}

function sortPostsDescending(posts: BlogPost[], limit?: number): BlogPost[] {
  const sortedPosts = posts
    .filter((post) => post.isPublished)
    .sort((a, b) => {
      const dateA = new Date(a.publishDate).getTime()
      const dateB = new Date(b.publishDate).getTime()

      if (dateA !== dateB) {
        return dateB - dateA
      }

      return a.title.localeCompare(b.title)
    })

  return limit ? sortedPosts.slice(0, limit) : sortedPosts
}
