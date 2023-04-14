import { BlogPostList } from '@/components/BlogPostList'
import { Title } from '@/components/Title'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'TODO',
}

export default function Blog() {
  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Title>Blog</Title>

        <BlogPostList className="mt-12" headingLevel="h2" />
      </div>
    </div>
  )
}
