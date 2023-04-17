import { BlogPost, allBlogPosts } from '@/.contentlayer/generated'
import { Title } from '@/components/Title'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { formatDate } from '@/utils/format-date'
import { Mdx } from '@/components/Mdx'

function getBlogPost(id: string[]): BlogPost {
  const postId = id.join('/')
  const post = allBlogPosts.find((p) => p.id === postId)

  if (!post || (process.env.NODE_ENV === 'production' && !post.isPublished)) {
    notFound()
  }

  return post
}

interface Params {
  id: string[]
}

export function generateStaticParams() {
  return allBlogPosts.map((post) => ({
    id: post.id.split('/'),
  }))
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
    },
  }
}

export default function BlogPost({ params }: { params: Params }) {
  const post = getBlogPost(params.id)

  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20 xl:py-24">
      <article className="mx-auto max-w-3xl">
        <header className="flex flex-col">
          <Title>{post.title}</Title>
          <time
            className="order-first mb-4 text-base font-medium text-gray-500 dark:text-gray-400"
            dateTime={post.publishDate}
          >
            {formatDate(post.publishDate)}
          </time>
        </header>
        <Mdx className="mt-10" code={post.body.code} />
      </article>
    </div>
  )
}
