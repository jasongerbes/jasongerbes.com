import { makeSource } from 'contentlayer2/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode, {
  Options as RehypePrettyCodeOptions,
} from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { contentDirPath } from './config/contentlayer/utils'
import { BlogPost } from './config/contentlayer/document-types/BlogPost'
import { CoolThing } from './config/contentlayer/document-types/CoolThing'

export default makeSource({
  contentDirPath,
  documentTypes: [BlogPost, CoolThing],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: {
            dark: 'one-dark-pro',
            light: 'github-light',
          },
        } as Partial<RehypePrettyCodeOptions>,
      ],
    ],
  },
})
