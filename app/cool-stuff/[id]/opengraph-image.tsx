import { ImageResponse } from 'next/server'
import { getCoolThing } from '../utils'
import { CoolThingMetadataImage } from '@/components/metadata-images/CoolThingMetadataImage'

export const alt = 'Cool Stuff - Jason Gerbes'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function ogImage({ params }: { params: { id: string } }) {
  const thing = getCoolThing(params.id)
  return new ImageResponse(<CoolThingMetadataImage thing={thing} />, {
    ...size,
    debug: false,
  })
}
