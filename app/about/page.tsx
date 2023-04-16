import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About',
  description: 'Everything you need to know about Jason Gerbes',
}

export default function About() {
  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20 xl:py-24">
      <div className="mx-auto max-w-3xl">
        <Title>Everything you need to know about Jason Gerbes</Title>

        <Subtitle>
          <p>
            Welcome to my website. I built this site in 2023 using Next.js,
            Tailwind CSS, Contentlayer, and TypeScript. You can find out more
            about the tools I used in my{' '}
            <Link href="/blog/building-blog-website-nextjs">
              first blog post
            </Link>
            , and you can find other cool things on my{' '}
            <Link href="/cool-stuff">cool stuff</Link> page.
          </p>
          <p>
            I’m a front-end software architect with a passion for creative
            problem-solving and attention to detail. I grew up in Hastings, in
            the sunny Hawke’s Bay, where I spent most of my childhood with my
            best friend Hamish building and destroying things in the garage (and
            playing the odd prank on our classmates).
          </p>
          <p>
            In 2013, I moved to Auckland to pursue my formal education and
            graduated from AUT with a BA in Computer Science in 2015. After
            finishing my degree, I gained valuable experience working as a
            project coordinator and online content editor for ASB, before
            completing a six-month contract for Auckland Transport as an online
            content editor.
          </p>
          <p>
            For the last five years, I have been a part of the Vista
            Entertainment Solutions team - an industry-leading cinema software
            company based in Auckland. I joined as a software developer before
            quickly becoming software development team lead. I recently
            transitioned into my current role of front-end software architect,
            where I continue to challenge myself.
          </p>
          <p>
            Outside of my career, I enjoy gardening, landscaping, and DIY
            projects at home. I’m also a full-time cat dad to my two Tonkinese
            babies, Riley and Cooper. I closely follow the work of Apple,
            SpaceX, and Tesla, and draw inspiration from their future-setting
            ideals.
          </p>
          <p>
            Want to get in touch? Visit my{' '}
            <Link href="/contact">contact page</Link> for details.
          </p>
        </Subtitle>
      </div>
    </div>
  )
}
