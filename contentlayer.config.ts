import { makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { contentDirPath } from './config/contentlayer/utils'
import { BlogPost } from './config/contentlayer/document-types/BlogPost'
import { CoolThing } from './config/contentlayer/document-types/CoolThing'

export default makeSource({
  contentDirPath,
  documentTypes: [BlogPost, CoolThing],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, { theme: 'one-dark-pro' }]],
  },
})
