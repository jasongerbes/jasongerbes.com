import { makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode, {
  Options as RehypePrettyCodeOptions,
} from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import { contentDirPath } from './config/contentlayer/utils'
import { BlogPost } from './config/contentlayer/document-types/BlogPost'
import { CoolThing } from './config/contentlayer/document-types/CoolThing'

const rehypePrettyCodeOptions: Partial<RehypePrettyCodeOptions> = {
  theme: { dark: 'one-dark-pro', light: 'github-light' },
  onVisitLine(node) {
    // Allow empty lines to be copied to the clipboard
    if (node.children.length === 0) {
      node.children = [{ type: 'text', value: ' ' }]
    }
  },
}

export default makeSource({
  contentDirPath,
  documentTypes: [BlogPost, CoolThing],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [rehypeSlug, [rehypePrettyCode, rehypePrettyCodeOptions]],
  },
})
