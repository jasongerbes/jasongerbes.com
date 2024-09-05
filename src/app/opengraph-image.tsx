import { ImageResponse } from 'next/og'
import { MetadataImage } from '@/components/metadata-images/MetadataImage'

export const alt = 'Jason Gerbes'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function ogImage() {
  return new ImageResponse(<MetadataImage title="Jason Gerbes" />, {
    ...size,
    debug: false,
  })
}
