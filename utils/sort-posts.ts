import { Post } from '@/.contentlayer/generated'

export function sortPostsDescending(posts: Post[], limit?: number): Post[] {
  const sortedPosts = posts
    .filter((post) => post.isPublished)
    .sort((a, b) => {
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })

  return limit ? sortedPosts.slice(0, limit) : sortedPosts
}
