import { ImageResponse } from 'next/server'
import { getBlogPost } from '../utils'
import { BlogPostMetadataImage } from '@/components/metadata-images/BlogPostMetadataImage'

export const alt = 'Blog - Jason Gerbes'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function twitterImage({ params }: { params: { id: string } }) {
  const post = getBlogPost(params.id)

  return new ImageResponse(<BlogPostMetadataImage post={post} />, {
    ...size,
    debug: false,
  })
}