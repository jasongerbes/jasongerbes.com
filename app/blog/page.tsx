import { BlogPostList } from '@/components/BlogPostList'
import { Subtitle } from '@/components/Subtitle'
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

        <Subtitle>
          Follow my blog for a glimpse into my experiences with technology,
          covering topics such as front-end development, engaging projects, and
          the latest tech trends.
        </Subtitle>

        <BlogPostList className="mt-12" headingLevel="h2" />
      </div>
    </div>
  )
}
