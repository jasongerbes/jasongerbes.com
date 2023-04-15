import { Post, allPosts } from '@/.contentlayer/generated'
import { Title } from '@/components/Title'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { useMDXComponent } from 'next-contentlayer/hooks'
import { mdxComponents } from '../mdx-components'
import { formatDate } from '@/utils/format-date'

function getPost(id: string[]): Post {
  const postId = id.join('/')
  const post = allPosts.find((p) => p.id === postId)

  if (!post || (process.env.NODE_ENV === 'production' && !post.isPublished)) {
    notFound()
  }

  return post
}

interface Params {
  id: string[]
}

export function generateStaticParams() {
  return allPosts.map((post) => ({
    id: post.id.split('/'),
  }))
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const post = getPost(params.id)
  const { title, date, description, url } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url,
      publishedTime: date,
    },
    twitter: {
      title,
      description,
    },
  }
}

export default function BlogPost({ params }: { params: Params }) {
  const post = getPost(params.id)
  const MDXContent = useMDXComponent(post.body.code)

  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20">
      <article className="mx-auto max-w-3xl">
        <header className="flex flex-col">
          <Title>{post.title}</Title>
          <time
            className="order-first mb-6 text-base text-gray-600 dark:text-gray-300"
            dateTime={post.date}
          >
            {formatDate(post.date)}
          </time>
        </header>
        <div className="prose prose-lg prose-gray mt-10 max-w-none dark:prose-invert">
          <MDXContent components={mdxComponents} />
        </div>
      </article>
    </div>
  )
}
