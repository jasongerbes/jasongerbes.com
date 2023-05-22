import { BlogPost, allBlogPosts } from 'contentlayer/generated'
import { Title } from '@/components/Title'
import { Metadata } from 'next'
import { Markdown } from '@/components/Markdown'
import { getBlogPost } from '../utils'
import { BlogPostBadges } from '@/components/blog-posts/BlogPostBadges'
import { formatDate } from '@/utils/format-date'
import { ClockCounterClockwise } from '@/assets/phosphor-icons'
import { isSameDay } from 'date-fns'
import { BlogPostComments } from '@/components/blog-posts/BlogPostComments'

interface Params {
  id: string
}

export function generateStaticParams() {
  return allBlogPosts
    .filter((post) => post.isPublished)
    .map((post) => ({ id: post.id }))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getBlogPost(params.id)
  const { title, publishDate, description, url } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      publishedTime: publishDate,
    },
    twitter: {
      title,
      description,
      card: 'summary_large_image',
      creator: '@jasongerbes',
    },
  }
}

export default function BlogPost({ params }: { params: Params }) {
  const post = getBlogPost(params.id)
  const hasBeenUpdated = !isSameDay(
    new Date(post.publishDate),
    new Date(post.lastUpdatedDate)
  )

  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20 xl:py-24">
      <article className="mx-auto max-w-3xl">
        <header className="flex flex-col">
          <Title>{post.title}</Title>
          <BlogPostBadges className="mt-6" post={post} size="medium" />
        </header>
        <Markdown className="mt-8" code={post.body.code} />

        <footer className="mt-16 empty:hidden">
          <BlogPostComments post={post} />

          {hasBeenUpdated && (
            <p className="mt-12 inline-flex w-full items-center gap-1.5 text-base text-gray-500 dark:text-gray-400">
              <ClockCounterClockwise aria-hidden={true} weight="regular" />
              <span>Last updated on {formatDate(post.lastUpdatedDate)}</span>
            </p>
          )}
        </footer>
      </article>
    </div>
  )
}
