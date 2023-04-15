import { Subtitle } from '@/components/Subtitle'
import { Title } from '@/components/Title'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Cool Stff',
  description: 'Some cool stuff I want to share with you.',
}

export default function CoolStuff() {
  return (
    <div className="px-4 py-16 sm:px-8 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <Title>Some cool stuff I want to share with you</Title>
        <Subtitle>
          I’m known by my peers for my love of cool things and my list-making
          habit. Here I’ll document some of the noteworthy things I’ve
          discovered and used - for both my own reference and yours.
        </Subtitle>
      </div>
    </div>
  )
}
