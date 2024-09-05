import { ImageResponse } from 'next/og'
import { MetadataImage } from '@/components/metadata-images/MetadataImage'

export const alt = 'Contact Jason'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function ogImage() {
  return new ImageResponse(
    <MetadataImage title="Contact Jason" pathname="/contact" />,
    {
      ...size,
      debug: false,
    },
  )
}
