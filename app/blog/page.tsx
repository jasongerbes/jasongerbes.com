import { Post, allPosts } from '@/.contentlayer/generated'
import { Title } from '@/components/Title'
import { formatDate } from '@/utils/format-date'
import { sortPostsDescending } from '@/utils/sort-posts'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'TODO',
}

export default function Blog() {
  const posts = sortPostsDescending(allPosts)

  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-4xl">
        <Title>Blog</Title>

        <ul className="mt-12 flex flex-col gap-4">
          {posts.map((post) => (
            <li key={post.id}>
              <BlogPost post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

function BlogPost({ post }: { post: Post }) {
  return (
    <article>
      <Link
        className="-mx-4 flex flex-col px-4 py-4 hover:bg-teal-100/50 dark:hover:bg-teal-900/20 sm:rounded-xl"
        href={post.url}
      >
        <h2 className="text-xl font-semibold">{post.title}</h2>
        <time
          className="order-first mb-3 text-sm text-gray-600 dark:text-gray-400"
          dateTime={post.date}
        >
          {formatDate(post.date)}
        </time>
        <p className="mt-3 text-base">{post.description}</p>
        <div
          aria-hidden="true"
          className="mt-3 flex items-center text-base font-medium text-teal-600 dark:text-teal-400"
        >
          Read post →
        </div>
      </Link>
    </article>
  )
}
