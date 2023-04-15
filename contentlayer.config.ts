import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import remarkGfm from 'remark-gfm'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { s } from 'hastscript'

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    description: {
      type: 'string',
      description: 'The description of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    isPublished: {
      type: 'boolean',
      description: 'Indicates whether the post has been published',
      required: true,
    },
  },
  computedFields: {
    id: {
      type: 'string',
      desciption: 'The unique identifier of the post, aka slug',
      resolve: (post) => post._raw.flattenedPath,
    },
    url: {
      type: 'string',
      description: 'The URL of the post',
      resolve: (post) => `/blog/${post._raw.flattenedPath}`,
    },
  },
}))

export default makeSource({
  contentDirPath: 'posts',
  documentTypes: [Post],
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
            ariaHidden: true,
            tabIndex: -1,
          },
          content: [
            s(
              'svg',
              {
                xmlns: 'http://www.w3.org/2000/svg',
                width: '24',
                height: '24',
                viewbox: '0 0 256 256',
                fill: 'currentColor',
                ariaHidden: true,
              },
              [
                s('path', {
                  d: 'M137.54,186.36a8,8,0,0,1,0,11.31l-9.94,10A56,56,0,0,1,48.38,128.4L72.5,104.28A56,56,0,0,1,149.31,102a8,8,0,1,1-10.64,12,40,40,0,0,0-54.85,1.63L59.7,139.72a40,40,0,0,0,56.58,56.58l9.94-9.94A8,8,0,0,1,137.54,186.36Zm70.08-138a56.08,56.08,0,0,0-79.22,0l-9.94,9.95a8,8,0,0,0,11.32,11.31l9.94-9.94a40,40,0,0,1,56.58,56.58L172.18,140.4A40,40,0,0,1,117.33,142,8,8,0,1,0,106.69,154a56,56,0,0,0,76.81-2.26l24.12-24.12A56.08,56.08,0,0,0,207.62,48.38Z',
                }),
              ]
            ),
          ],
        },
      ],
    ],
  },
})
