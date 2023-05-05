import { CoolThing } from 'contentlayer/generated'
import { MetadataImage } from './MetadataImage'

export function CoolThingMetadataImage({ thing }: { thing: CoolThing }) {
  const { title, logoImage } = thing

  return (
    <MetadataImage
      title={title}
      logoImage={logoImage}
      bannerText="Cool Stuff"
      pathname="/cool-stuff"
    />
  )
}
