import { Title } from '@/components/Title'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About me',
  description: 'TODO',
}

export default function About() {
  return (
    <div>
      <Title>About page</Title>
    </div>
  )
}
