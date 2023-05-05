import { BlogPost, allBlogPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'

export function getBlogPost(id: string): BlogPost {
  const post = allBlogPosts.find((p) => p.id === id)

  if (!post || (process.env.NODE_ENV === 'production' && !post.isPublished)) {
    notFound()
  }

  return post
}
