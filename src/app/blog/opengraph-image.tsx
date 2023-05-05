import { ImageResponse } from 'next/server'
import { MetadataImage } from '@/components/metadata-images/MetadataImage'

export const alt = 'My thoughts on software engineering and other topics'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function ogImage() {
  return new ImageResponse(
    (
      <MetadataImage
        title="My thoughts on software engineering and other topics"
        pathname="/blog"
      />
    ),
    {
      ...size,
      debug: false,
    }
  )
}
