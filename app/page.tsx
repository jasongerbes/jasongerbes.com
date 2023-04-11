import { Post, allPosts } from '@/.contentlayer/generated'
import { Title } from '@/components/Title'
import { format } from 'date-fns'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const latestPosts = sortPostsDescending(allPosts, 5)

  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="max-w-2xl">
          <Image
            className="h-16 w-16 rounded-full md:h-24 md:w-24"
            src="/images/profile-image.jpg"
            alt="Portrait photo of the website's author, Jason Gerbes"
            width={96}
            height={96}
          />

          <Title className="mt-8">
            Software architect, technology enthusiast, and cat dad.
          </Title>

          <p className="mt-6 text-base text-gray-600 dark:text-gray-300">
            I’m Jason, a front-end software architect based in the beautiful
            city of Auckland, New Zealand. I have a passion for technology,
            design, and sustainability. Follow my journey by checking out my
            recent blog posts. Welcome!
          </p>
        </div>

        <div className="mt-16 max-w-2xl">
          <h2 className="text-md font-semibold uppercase tracking-tight text-teal-800 dark:text-teal-600">
            Latest Posts
          </h2>

          <ul className="mt-4">
            <li>
              {latestPosts.map((post) => (
                <BlogPost key={post.id} post={post} />
              ))}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function sortPostsDescending(posts: Post[], limit?: number): Post[] {
  const sortedPosts = posts
    .filter((post) => post.isPublished)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

  return limit ? sortedPosts.slice(0, limit) : sortedPosts
}

function BlogPost({ post }: { post: Post }) {
  return (
    <article className="py-6">
      <Link
        className="flex flex-col hover:bg-teal-50/80 dark:hover:bg-teal-900/20"
        href={post.url}
      >
        <h3 className="text-xl font-semibold">{post.title}</h3>
        <time
          className="order-first mb-3 text-sm text-gray-600 dark:text-gray-400"
          dateTime={post.date}
        >
          {format(new Date(post.date), 'd LLLL yyyy')}
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
