import { BlogPostList } from '@/components/BlogPostList'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20 xl:py-24">
      <div className="mx-auto max-w-3xl">
        <Title>Software architect, technology enthusiast, and cat dad</Title>

        <Subtitle>
          I’m Jason, a front-end software architect based in the beautiful city
          of Auckland, New Zealand. I have a passion for technology, design, and
          sustainability. <Link href="/about">Read more</Link>
        </Subtitle>

        <h2 className="text-md mt-16 font-semibold uppercase tracking-tight text-primary-800 dark:text-primary-600">
          Latest Posts
        </h2>

        <BlogPostList className="mt-6" limit={5} headingLevel="h3" />
      </div>
    </div>
  )
}
