'use client'
import Giscus from '@giscus/react'
import { BlogPost } from 'contentlayer/generated'
import { useMedia } from 'react-use'

export interface BlogPostCommentsProps {
  className?: string
  post: BlogPost
}

export function BlogPostComments({ className, post }: BlogPostCommentsProps) {
  const isDarkTheme = useMedia('(prefers-color-scheme: dark)', false)
  const theme = isDarkTheme ? 'transparent_dark' : 'light'

  return (
    <div className={className}>
      <Giscus
        id="comments"
        repo="jasongerbes/jasongerbes.com"
        repoId="R_kgDOJTxMLQ"
        category="Comments"
        categoryId="DIC_kwDOJTxMLc4CWp1e"
        mapping="specific"
        term={post.url}
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="top"
        theme={theme}
        lang="en"
        loading="lazy"
      />
    </div>
  )
}
