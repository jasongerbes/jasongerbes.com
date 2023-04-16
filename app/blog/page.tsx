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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce a velit
          convallis, pharetra justo sed, porttitor lectus. Vestibulum cursus,
          libero non laoreet fermentum.
        </Subtitle>

        <BlogPostList className="mt-12" headingLevel="h2" />
      </div>
    </div>
  )
}
