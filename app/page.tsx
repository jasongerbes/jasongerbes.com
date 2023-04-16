import { BlogPostList } from '@/components/BlogPostList'
import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Image
          className="h-16 w-16 rounded-full md:h-24 md:w-24"
          src="/images/profile-image.jpg"
          alt="Portrait photo of the website's author, Jason Gerbes"
          width={96}
          height={96}
        />

        <Title className="mt-8">
          Software architect, technology enthusiast, and cat dad
        </Title>

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
