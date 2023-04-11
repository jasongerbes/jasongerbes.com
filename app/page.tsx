import { Title } from '@/components/Title'
import Image from 'next/image'

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

        <p className="mt-6 text-base">
          I’m Jason, a front-end software architect from the beautiful city of
          Auckland, New Zealand. I’m passionate about technology, design, and
          sustainability. Follow my journey by checking out my recent blog
          posts. Welcome!
        </p>
      </div>
    </div>
  )
}
