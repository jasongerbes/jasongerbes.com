import { BlogPostList } from '@/components/BlogPostList'
import { Prose } from '@/components/Prose'
import { Title } from '@/components/Title'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'My thoughts on software engineering and other topics',
}

export default function Blog() {
  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20 xl:py-24">
      <div className="mx-auto max-w-3xl">
        <Title>My thoughts on software engineering and other topics</Title>

        <Prose className="mt-6">
          <p>
            I’m known for my love of cool stuff and for making lists. Here I’ll
            document some noteworthy things I’ve found and used, for both my own
            reference and yours.
          </p>
        </Prose>

        <BlogPostList className="mt-12" headingLevel="h2" />
      </div>
    </div>
  )
}
