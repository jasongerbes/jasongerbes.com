import { Title } from '@/components/Title'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-8 py-20">
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

        <p className="mt-6 text-base text-gray-600 dark:text-gray-400">
          I’m Jason, a front-end software architect based in the beautiful city
          of Auckland, New Zealand. I have a passion for technology, design, and
          sustainability. Follow my journey by checking out my recent blog
          posts. Welcome!
        </p>
      </div>

      <div className="mt-16 max-w-2xl">
        <h2 className="text-md font-semibold uppercase tracking-tight text-teal-800 dark:text-teal-700">
          Latest Posts
        </h2>

        <ul className="mt-4">
          <li>
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
            <BlogPost />
          </li>
        </ul>
      </div>
    </div>
  )
}

function BlogPost() {
  return (
    <article className="py-6">
      <Link className="flex flex-col" href="/blog">
        <h3 className="text-xl font-semibold">Hello World!</h3>
        <time
          className="order-first mb-3 text-sm text-gray-600 dark:text-gray-400"
          dateTime="2023-03-06"
        >
          6 March 2023
        </time>
        <p className="mt-3 text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget
          odio consequat, aliquam ipsum vel, convallis ante. Suspendisse
          consequat ligula faucibus tempus pellentesque.
        </p>
        <div
          aria-hidden="true"
          className="mt-3 flex items-center text-base font-medium text-teal-600 dark:text-teal-400"
        >
          Read more →
        </div>
      </Link>
    </article>
  )
}
