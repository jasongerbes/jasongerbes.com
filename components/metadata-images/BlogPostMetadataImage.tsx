import { BlogPost } from '@/.contentlayer/generated'
import { MetadataImage } from './MetadataImage'

export function BlogPostMetadataImage({ post }: { post: BlogPost }) {
  const { title } = post
  return <MetadataImage title={title} pathname="/blog" />
}
